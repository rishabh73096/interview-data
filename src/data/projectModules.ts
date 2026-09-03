export interface ModuleItem {
  id: string;
  title: string;
  duration: string; // repurposed: "where it's used" tag
  content: string;
}

export interface ModuleChapter {
  id: string;
  title: string;
  phases: ModuleItem[];
}

export const projectModuleChapters: ModuleChapter[] = [
  {
    id: 'overview',
    title: 'How To Use This',
    phases: [
      {
        id: 'why-modules',
        title: 'Why This Exists',
        duration: 'Read first',
        content: `> Interview mein aksar poochha jaata hai: "authentication explain karo", "role-based access kaise banaya", "rewards module kaise design kiya", "payment flow batao". Ye woh **modules** hain jo har type ke project mein ghoom-phir kar aate hain.

Har module yahan ek fixed shape mein samjhaya hai:

- **What & why** — ek line mein
- **Data model** — tables/fields
- **Flow** — step-by-step kaise kaam karta hai
- **Tricky parts** — jahan bugs aur follow-up questions aate hain
- **Interview probe** — jo woh actually poochhte hain

## Kaise use karo

1. Apne project mein jo modules the, unko yahan se refresh karo.
2. "Tricky parts" yaad rakho — wahi se follow-up aata hai ("aur agar do requests ek saath aayein?").
3. Har module ka ek **1-minute spoken answer** bana lo (STAR-ish: situation, what you built, the hard part, how you solved it).

> Rule: interviewer ko implementation detail chahiye, not a definition. "Maine JWT use kiya" nahi — "access token 15 min, refresh token 7 din rotating, reuse detection, httpOnly cookie" bolo.`,
      },
    ],
  },
  {
    id: 'core-every-project',
    title: 'Core — Every Project',
    phases: [
      {
        id: 'authentication',
        title: 'Authentication (Login / Signup)',
        duration: 'Every project',
        content: `> User ki identity verify karna — "tum kaun ho?" Signup, login, logout, "remember me", social login.

## Data model

- \`users(id, email UNIQUE, password_hash, name, email_verified, status, created_at)\`
- \`sessions\` ya \`refresh_tokens(id, user_id, token_hash, expires_at, revoked, user_agent, ip)\`

## Flow

\`\`\`flow
Signup: validate -> check email not taken -> hash password (argon2/bcrypt) -> create user -> send verification email
Login: find user by email -> compare password hash -> issue access + refresh token -> set httpOnly cookie
Every request: verify access token (signature + expiry) -> attach req.user
Access token expired: use refresh token -> rotate -> new pair
Logout: revoke refresh token + clear cookie
\`\`\`

## Tricky parts

- **Password storage** — argon2id / bcrypt (cost ~12), never plain/MD5/SHA. Salt automatic.
- **Timing attack on login** — same response time whether email exists or not; generic "invalid email or password".
- **Token storage** — access + refresh in \`httpOnly\` \`Secure\` \`SameSite\` cookies for web (XSS can't read). \`localStorage\` = XSS reads your token.
- **Refresh rotation + reuse detection** — old refresh token used again = stolen -> revoke the whole family.
- **Brute force** — rate limit login per IP + per email, lockout / captcha after N fails, breached-password check.
- **Social login (OAuth)** — authorization code + PKCE; link by verified email; handle "email already exists with password".

## Interview probe

- "Access vs refresh token — lifetime, where stored, how you revoke?"
- "User logs out on one device — other devices still logged in. How do you force logout everywhere?" (token version / jti denylist)
- "How do you stop someone brute-forcing login?"
- "Password reset link — how do you make it single-use and expiring?"`,
      },
      {
        id: 'authorization-rbac',
        title: 'Authorization & Role-Based Access (RBAC)',
        duration: 'Every project',
        content: `> "Tum ye kar sakte ho?" — authenticated hone ke baad **permission** check. Admin / Manager / Staff / Customer jaise roles.

## Data model

Simple (role on user):

\`\`\`flow
users(id, ..., role)   -- 'admin' | 'manager' | 'staff' | 'customer'
\`\`\`

Flexible (role -> permissions):

\`\`\`flow
roles(id, name)
permissions(id, key)         -- 'order.read', 'order.refund', 'user.delete'
role_permissions(role_id, permission_id)
user_roles(user_id, role_id) -- a user can have multiple roles
\`\`\`

## Flow

\`\`\`flow
Login -> load user's roles + permissions -> put in JWT claims OR fetch per request
Route: requireAuth -> requirePermission('order.refund') middleware -> handler
Handler: ALSO check ownership/tenant ("is this order in the user's org?")
UI: hide buttons the user can't use (but server still enforces)
\`\`\`

## RBAC vs ABAC vs ownership

- **RBAC** — permission by role. Good default.
- **Ownership / resource-level** — "user can edit only their own posts". Row-level check, not role.
- **ABAC** — rules on attributes ("manager can refund only < Rs 5000, only own branch"). Reach for it when roles explode.

## Tricky parts

- **Enforce on the server, every request** — UI hiding a button is not security. IDOR: \`GET /orders/:id\` without an ownership check = anyone reads any order.
- **Multi-tenant scoping** — every query filtered by \`org_id\`; a "manager" of org A must not touch org B.
- **Stale permissions in JWT** — role changed but token still valid. Options: short tokens, a "permissions version", or fetch permissions per request from cache.
- **Hierarchy** — does admin inherit manager's permissions? Model it explicitly, don't assume.

## Interview probe

- "3 roles — Admin, Organization, User — walk me through how a request is authorized."
- "How do you prevent one org's admin from seeing another org's data?"
- "A user's role is downgraded — how fast does that take effect?"
- "Where do you check permissions — middleware, service, or DB? Why not only the frontend?"`,
      },
      {
        id: 'user-profile-management',
        title: 'User & Profile Management',
        duration: 'Every project',
        content: `> Profile view/edit, avatar, change email, change password, delete account, preferences.

## Data model

- \`users\` (core auth fields) + \`profiles(user_id, avatar_key, bio, phone, timezone, locale, prefs jsonb)\`
- \`email_change_requests(user_id, new_email, token_hash, expires_at)\`

## Flow

\`\`\`flow
Edit profile: validate -> update -> return updated
Avatar: presigned URL -> client uploads to S3 -> save key -> serve via CDN
Change email: verify current password -> send confirm link to NEW email -> on click, swap + notify old email
Change password: verify current -> hash new -> revoke all other sessions
Delete account: soft-delete (status = deleted) or hard-delete + anonymize; queue a job for cascade cleanup
\`\`\`

## Tricky parts

- **Change email** must confirm the new address before switching (and notify the old one — account-takeover signal).
- **Change password** should log out other sessions.
- **Delete account (GDPR/DPDP)** — real deletion path: DB rows, uploaded files, search index, logs, caches, backups policy. Soft-delete alone isn't "deleted".
- **Avatar** — validate size/type, re-encode, strip EXIF (GPS), moderate.
- **Uniqueness races** — two users change to the same email at once -> DB unique constraint is the real guard.

## Interview probe

- "How does 'change email' work safely?"
- "User asks to delete their account — what actually gets deleted, and where?"
- "Where do you store the avatar, and how is it served?"`,
      },
      {
        id: 'password-reset-otp',
        title: 'Password Reset, Email Verification & OTP',
        duration: 'Every project',
        content: `> "Forgot password", "verify your email", "enter the 6-digit code". Sabme same core: a short-lived, single-use secret.

## Data model

- \`verification_tokens(id, user_id, type, token_hash, expires_at, used_at)\` — \`type\` = reset | verify_email
- OTP: \`otps(user_id/phone, code_hash, expires_at, attempts, sent_at)\` — often just in Redis with TTL

## Flow — password reset

\`\`\`flow
Request: user enters email -> ALWAYS respond "if that email exists, we sent a link" (no enumeration)
-> generate random token -> store HASH of it -> email the raw token in a link (expires ~15-60 min)
Reset: user opens link -> token valid + unused? -> set new password -> mark token used -> revoke sessions
\`\`\`

## Flow — OTP

\`\`\`flow
Send: rate limit (per phone + per IP) -> generate 6-digit code -> store hash in Redis, TTL 5 min, attempts=0
Verify: check code hash -> increment attempts -> lock after ~5 wrong -> on success delete the key
\`\`\`

## Tricky parts

- **Store the hash**, not the raw token/code (DB leak = free account takeover otherwise).
- **Single-use** — mark used immediately; a link clicked twice must not work twice.
- **Expiry** — short. Reset ~30 min, OTP ~5 min.
- **No user enumeration** — reset response is identical whether the email exists or not.
- **Rate limit + attempt cap** — OTP is 10^6 space; without a cap it's brute-forceable in minutes.
- **Resend** — cooldown (e.g. 60s) + max sends per hour; new code invalidates the old.

## Interview probe

- "How do you make a reset link single-use and time-limited?"
- "Why not just email the token in plain text and store it plain in the DB?"
- "How do you stop OTP brute force?"
- "Forgot-password on an email that isn't registered — what does the user see?"`,
      },
      {
        id: 'audit-log',
        title: 'Audit Log / Activity Trail',
        duration: 'SaaS · Fintech · Admin',
        content: `> "Kisne, kya, kab kiya" — immutable record of sensitive actions. Compliance, debugging, "who deleted this?".

## Data model

\`\`\`flow
audit_logs(id, actor_id, actor_type, action, entity_type, entity_id,
           before jsonb, after jsonb, ip, user_agent, request_id, created_at)
\`\`\`

Append-only. No update/delete on this table.

## How it's built

- A **service method / middleware / DB trigger** writes an entry on state-changing actions (create/update/delete, login, permission change, refund, export).
- Write it **async** (queue) so it never slows the request — but for truly critical actions, write in the same transaction.
- \`request_id\` correlation so you can join audit + app logs + traces.

## Tricky parts

- **Immutable** — no edits/deletes; if you must redact PII, append a redaction entry.
- **What to log** — actions + old/new values for sensitive entities, NOT every read, NOT secrets/passwords/tokens.
- **Volume** — high-traffic actions -> sample or aggregate; move old logs to cheap storage.
- **Actor** — could be a user, an admin impersonating a user, a system job, an API key. Record which.
- **Tamper-evidence** (fintech) — hash-chain each entry (like a mini blockchain / Merkle, Ch: Merkle trees).

## Interview probe

- "How do you know who changed a record?"
- "Where does the audit log write happen — and does it slow the request?"
- "How do you make the audit log tamper-proof?"`,
      },
    ],
  },
  {
    id: 'commerce-payments-rewards',
    title: 'Commerce, Payments & Rewards',
    phases: [
      {
        id: 'cart-checkout',
        title: 'Cart & Checkout',
        duration: 'E-commerce · Marketplace',
        content: `> Add to cart, update quantity, apply coupon, checkout. The cart must survive refreshes, logout, and price changes.

## Data model

- Guest cart: Redis \`cart:{sessionId}\` (TTL ~7-30 days) or client localStorage
- User cart: \`carts(user_id)\`, \`cart_items(cart_id, product_id, variant_id, qty, price_at_add)\`
- \`orders(id, user_id, status, subtotal, tax, shipping, discount, total, address, created_at)\`, \`order_items(...)\`

## Flow

\`\`\`flow
Add to cart -> validate product active + in stock -> upsert cart_item
Merge on login -> combine guest cart into user cart
Checkout -> re-price everything NOW (prices/stock may have changed) -> show final total
Place order -> reserve stock -> create order (PENDING) -> go to payment (Ch: Payment integration)
Payment webhook succeeds -> order PAID -> confirm stock decrement -> clear cart
\`\`\`

## Tricky parts

- **Re-price at checkout** — never trust \`price_at_add\`; recompute from current product + promotions. Show the user if something changed.
- **Stock** — reserve at checkout with a short hold (TTL), confirm on payment, release on abandon. Or optimistic decrement + compensate on failure.
- **Cart merge** — guest adds item, logs in with an existing cart -> merge quantities, dedupe.
- **Concurrency** — last item, two buyers -> unique constraint / atomic decrement so only one wins.
- **Abandoned cart** — a job emails reminders; expire reservations.
- **Idempotent "place order"** — double-click / retry must not create two orders (idempotency key).

## Interview probe

- "Cart persists after logout and comes back on login — how?"
- "Price changed between add-to-cart and checkout — what happens?"
- "Two users buy the last item at the same second — how do you prevent overselling?"`,
      },
      {
        id: 'payment-integration',
        title: 'Payment Integration (Stripe / Razorpay)',
        duration: 'E-commerce · SaaS · Booking',
        content: `> Charge the customer, confirm server-side, never double-charge, always reconcilable. (Full depth: System Design → Payments.)

## Data model

- \`payments(id, order_id, provider, provider_intent_id, amount, currency, status, idempotency_key, created_at)\`
- \`webhook_events(event_id UNIQUE, type, processed_at)\` — dedup

## Flow

\`\`\`flow
1. Backend: create Order PENDING + PaymentIntent at provider (amount, idempotency-key)
2. Backend -> client: client secret
3. Client -> provider directly: card + confirm (3D Secure / OTP challenge)
4. Provider -> your WEBHOOK: payment_intent.succeeded   <-- source of truth
5. Webhook: verify signature -> dedup by event id -> mark Order PAID -> fulfil
6. Client result is shown, but NOT trusted to mark paid
\`\`\`

## Tricky parts

- **Webhook, not client** — client can close the tab / drop network. The signed server-to-server webhook is the only reliable "it succeeded".
- **Idempotency** — key on the create-charge call (retry = same charge) + event-id dedup on the webhook (same event delivered 3× fulfils once) + order state machine.
- **Signature verification** on the raw body; check timestamp (replay).
- **Never store raw card data** — PCI scope. Provider tokenizes.
- **Refunds** — own idempotent operation + ledger entries.
- **Reconciliation** — a job compares your records to the provider's daily; repairs missed webhooks.

## Interview probe

- "You integrated Stripe end-to-end — walk me through it. Where's the source of truth?"
- "Payment succeeded but the webhook never arrived — what happens?"
- "How did you get zero double-charges / failed-transaction disputes?"`,
      },
      {
        id: 'subscription-billing',
        title: 'Subscription & Billing',
        duration: 'SaaS',
        content: `> Recurring plans, upgrades/downgrades, trials, proration, invoices, dunning.

## Data model

- \`plans(id, name, price, interval, features jsonb)\`
- \`subscriptions(id, tenant_id, plan_id, status, current_period_end, trial_end, provider_sub_id)\`
- \`invoices(id, subscription_id, amount, status, pdf_key, period_start, period_end)\`

## Flow

\`\`\`flow
Subscribe -> provider creates a subscription -> webhook sets status=active, period_end
Renewal -> provider auto-charges -> invoice.paid webhook -> extend period
Payment fails -> status=past_due -> dunning (retry schedule + emails) -> after N -> cancel/downgrade
Upgrade mid-cycle -> proration (credit unused time, charge the difference now)
Cancel -> cancel_at_period_end (keep access till paid period ends)
\`\`\`

## Tricky parts

- **Let the provider (Stripe Billing) own the recurring logic** — proration, retries, tax. You react to webhooks.
- **Entitlements** — "what can this tenant do right now" is derived from subscription status + plan. Cache it; recompute on webhook.
- **Grace period** — don't cut access the instant a charge fails; past_due window + dunning.
- **Seat-based** — count active users; bill on change or at renewal.
- **Trial ending / card expiring** — proactive emails.
- **Downgrade** — enforce new limits (e.g. archive extra projects), don't just change the number.

## Interview probe

- "User upgrades from Basic to Pro mid-month — how is the amount calculated?"
- "Their card fails on renewal — what's the flow?"
- "How do you decide, on any request, whether a tenant is allowed to use a feature?"`,
      },
      {
        id: 'coupons-discounts',
        title: 'Coupons & Discounts',
        duration: 'E-commerce · SaaS',
        content: `> Promo codes, percentage/fixed discounts, first-order, minimum cart, usage limits, stacking rules.

## Data model

\`\`\`flow
coupons(id, code UNIQUE, type, value, min_subtotal, max_discount,
        starts_at, ends_at, usage_limit, per_user_limit, applies_to jsonb, active)
coupon_redemptions(coupon_id, user_id, order_id, amount, created_at)
\`\`\`

## Flow

\`\`\`flow
Apply code -> lookup -> validate (active, in date range, min subtotal met, user under per-user limit,
             global usage_limit not hit, applies to items in cart) -> compute discount (cap at max_discount)
Show discounted total (but recompute at order-placement, server-side)
On order placed -> insert coupon_redemption (atomic check of usage_limit)
\`\`\`

## Tricky parts

- **Compute discount server-side** at checkout; the client value is display only.
- **Usage limit races** — global "first 100 uses" -> atomic increment / \`INSERT ... ON CONFLICT\` / a counter with a check, or you'll go over.
- **Stacking** — can two coupons combine? Define the rule; usually "best single" or explicit stackable flag.
- **Order of operations** — discount before or after tax/shipping? Be consistent.
- **Refund** — partial refund of a discounted order: refund the proportional amount, and does the coupon use get returned?
- **Abuse** — one user, many accounts for "first order" -> device/payment fingerprinting.

## Interview probe

- "Coupon is limited to 100 uses — how do you make sure the 101st fails under load?"
- "Where is the discount calculated and why not on the frontend?"
- "User returns one item from a discounted order — how much do you refund?"`,
      },
      {
        id: 'rewards-loyalty',
        title: 'Rewards & Loyalty Engine',
        duration: 'E-commerce · Fintech · Consumer',
        content: `> Earn points/cashback on actions (purchase, referral, review), redeem for discounts/credit. A "formula builder" so each business configures its own rules.

## Data model

\`\`\`flow
reward_rules(id, business_id, trigger, calc_type, value, cap, active)
             -- trigger: 'purchase' | 'signup' | 'referral' | 'review'
             -- calc_type: 'fixed' | 'percentage'
reward_ledger(id, user_id, business_id, delta, reason, ref_type, ref_id, expires_at, created_at)
-- balance = SUM(delta) for a user (append-only, like a double-entry ledger)
\`\`\`

## Flow

\`\`\`flow
Action happens (order PAID webhook) -> look up active rule for that trigger + business
-> compute reward amount SERVER-SIDE (never trust a client value) -> cap it
-> append a +delta ledger entry (async, doesn't block checkout response)
Redeem -> check balance >= amount -> append a -delta entry + apply as order discount/credit
Expiry -> a job appends -delta entries for expired points
\`\`\`

## Tricky parts

- **Ledger, not a mutable balance** — append-only entries; balance is \`SUM(delta)\`. Auditable, no lost updates.
- **Idempotency** — the same order must not credit points twice (dedupe on \`ref_id\`).
- **Compute after confirmation** — credit on payment success, not on order creation; **claw back** on refund/chargeback (append a negative entry).
- **Rounding & currency** — points as integers; define the point-to-currency rate explicitly.
- **Race on redeem** — two redemptions draining the same balance -> atomic check-and-insert / row lock.
- **Config-driven** — rules in the DB (fixed/percentage toggle, caps, date ranges), editable without a deploy.

## Interview probe

- "You built a loyalty/rewards module with a formula builder — walk me through the design."
- "Where do you calculate the reward amount, and why not on the client?"
- "User gets points on an order, then refunds it — what happens to the points?"
- "How is the balance stored — a column or something else? Why?"`,
      },
      {
        id: 'referral-program',
        title: 'Referral Program',
        duration: 'Consumer · SaaS growth',
        content: `> "Invite a friend, both get Rs 100." Referral codes/links, attribution, reward on a qualifying event, fraud checks.

## Data model

\`\`\`flow
referral_codes(user_id, code UNIQUE)
referrals(id, referrer_id, referee_id, code, status, qualified_at, created_at)
          -- status: 'pending' | 'qualified' | 'rewarded' | 'rejected'
\`\`\`

## Flow

\`\`\`flow
Referrer shares link (?ref=CODE) -> referee lands -> code stored (cookie / attached at signup)
Referee signs up -> create referrals row (pending), link referee_id
Referee does the QUALIFYING action (first paid order / stays 14 days) -> status=qualified
-> reward BOTH via the rewards ledger -> status=rewarded
\`\`\`

## Tricky parts

- **Reward on a real event**, not signup (else fake accounts farm it). Define "qualified" carefully.
- **Self-referral / circular** — same person, same payment method, same device -> reject.
- **Attribution window** — code valid for N days after click; last-touch vs first-touch.
- **Deferred deep link** — clicked on web, signs up on the app later -> carry the code.
- **Both-sided idempotency** — reward each side once.
- **Abuse monitoring** — velocity (one referrer, 50 signups in an hour), shared IPs/devices.

## Interview probe

- "When exactly does the referral reward trigger, and why not at signup?"
- "How do you stop someone from referring themselves with fake accounts?"
- "User clicks a referral link on web but signs up on mobile 3 days later — does it still count?"`,
      },
    ],
  },
  {
    id: 'scheduling-realtime',
    title: 'Scheduling & Real-Time',
    phases: [
      {
        id: 'booking-slots',
        title: 'Booking / Appointment Slots',
        duration: 'Booking · Healthcare · Salon',
        content: `> Pick a service + staff + time slot, book it, reschedule, cancel. The whole game is **no double-booking**.

## Data model

\`\`\`flow
services(id, business_id, name, duration_min)
staff(id, business_id, name)
working_hours(staff_id, weekday, start, end)
time_off(staff_id, starts_at, ends_at)
bookings(id, business_id, staff_id, service_id, customer_id, starts_at, ends_at, status)
UNIQUE (staff_id, starts_at)   -- the safety net
\`\`\`

## Flow

\`\`\`flow
Show slots: working_hours - existing bookings - time_off - lead time -> free slots (in the customer's timezone)
Book: (optional) hold the slot in Redis for 5 min while they pay
-> INSERT booking; the UNIQUE constraint (or atomic findOneAndUpdate checking status) rejects the loser
-> confirmation + calendar entry + reminders scheduled
Reschedule = cancel + rebook atomically. Cancel -> free the slot, maybe refund.
\`\`\`

## Tricky parts

- **Double-booking under concurrency** — DB unique constraint on \`(staff, slot)\` OR an atomic check-and-set; do NOT "SELECT then INSERT" (race).
- **Timezones** — store UTC; render + accept in the customer's / business's timezone; DST edges.
- **Slot generation** — compute on the fly from rules, don't pre-materialize every slot forever.
- **Buffers** — gap between appointments, prep time.
- **Hold + payment** — reserve with a TTL so a slow payer doesn't block others; release on timeout.
- **Real-time** — admin calendar + customer app must reflect a new booking within seconds (Ch: Real-time sync).

## Interview probe

- "Two customers book the same slot at the same instant — how does exactly one succeed?"
- "How do you generate available slots?"
- "Booking made in IST, viewed by staff in a different timezone — how do you handle it?"
- "How do you keep the admin calendar and the customer app in sync in real time?"`,
      },
      {
        id: 'realtime-sync',
        title: 'Real-Time Sync (WebSocket / SSE)',
        duration: 'Dashboards · Booking · Collab',
        content: `> One user changes something -> other users/screens update within a second, without refresh. Live dashboards, presence, "new booking" on the admin calendar.

## Flow

\`\`\`flow
Client opens a WebSocket (or SSE) -> authenticates on the handshake -> joins a room (org / conversation / board)
Server: on a state change -> publish an event to that room
Multiple server instances -> a Redis pub/sub (or Kafka) backplane so the event reaches sockets on other nodes
Client: apply the event to local state (optimistic UI + reconcile), or refetch the affected query
Reconnect -> send "last event id" -> server replays what was missed
\`\`\`

## Tricky parts

- **Scaling across instances** — one Node process holds only its own sockets; without a backplane, users on server B never get server A's events.
- **Auth on the socket** — verify token on connect, re-check periodically, disconnect on expiry.
- **Missed events on reconnect** — a "since cursor" catch-up; otherwise a flaky network looks like data loss.
- **Backpressure** — slow client -> bound the buffer -> drop or disconnect.
- **SSE vs WebSocket** — server->client only (feeds, notifications, live counts) -> SSE is simpler. Two-way (chat, collab) -> WebSocket.
- **Fallback** — polling / long-poll where sockets are blocked.

## Interview probe

- "You have 3 API servers behind a load balancer — how does a WebSocket event from server 1 reach a user connected to server 3?"
- "User's laptop sleeps for 10 minutes, wakes up — how do they get the messages they missed?"
- "SSE or WebSocket for a live dashboard? Why?"`,
      },
      {
        id: 'chat-messaging',
        title: 'Chat / Messaging',
        duration: 'Marketplace · Support · Social',
        content: `> 1:1 and group messages, delivered fast and reliably, in order, with receipts and offline push. (Full walkthrough: System Design → Worked Designs.)

## Data model

\`\`\`flow
conversations(id, type)  ·  conversation_members(conversation_id, user_id, last_read_seq)
messages(conversation_id, seq, sender_id, body, attachments, created_at)   -- seq = per-conversation counter
\`\`\`

## Flow

\`\`\`flow
Send: client attaches clientMsgId -> server assigns seq -> persist -> ack sender
-> for each member: find their gateway (Redis) -> route via backplane -> push over socket
-> member offline -> push notification + mark undelivered
Read: recipient views -> send read receipt -> update last_read_seq -> notify sender
Open chat / reconnect: fetch messages after my last-seen seq
\`\`\`

## Tricky parts

- **Ordering** — per-conversation \`seq\` from a single writer; client renders by seq, not by arrival time.
- **At-least-once + dedup** — \`clientMsgId\` so retries don't duplicate.
- **Delivery states** — sending -> sent -> delivered -> read; optimistic send + retry on failure.
- **Groups** — small: fan-out to each member; large: a broadcast topic.
- **Media** — presigned upload, send a reference, download via CDN.
- **Notifications** — dedupe socket delivery vs push (don't buzz for a message they already saw).

## Interview probe

- "How do you guarantee message order within a conversation?"
- "Message sent while offline — what happens, and how do you avoid duplicates when it retries?"
- "Kill the app, receive 5 messages, tap the notification — what should happen?"`,
      },
      {
        id: 'notifications',
        title: 'Notifications (In-App + Email + Push)',
        duration: 'Every project',
        content: `> "You have a new message", "your order shipped", reminders. Multi-channel, per-user preferences, retries, no spam.

## Data model

\`\`\`flow
notifications(id, user_id, type, payload jsonb, read_at, created_at)   -- in-app feed
notification_prefs(user_id, type, in_app, email, push)                  -- per-type toggles
push_tokens(user_id, token, platform, updated_at)
\`\`\`

## Flow

\`\`\`flow
Something happens -> emit an event ("order.shipped")
Notification service consumes it -> resolve recipients -> check each recipient's prefs + quiet hours
-> for each enabled channel: enqueue a job (in_app insert / email send / push send)
Workers send per channel, with retries + DLQ
In-app: client subscribes (WebSocket/SSE) for the live badge + a paginated feed
\`\`\`

## Tricky parts

- **Event-driven** — the thing that happened emits an event; the notification service decides channels. Don't scatter \`sendEmail()\` calls across the codebase.
- **Preferences + quiet hours + digest** — respect them server-side.
- **Dedupe / debounce** — 10 comments in a minute -> one "10 new comments", not 10 pushes.
- **Push token lifecycle** — refresh on app open, delete on logout / on provider "unregistered" (stale tokens hurt sender reputation).
- **Delivery is best-effort** — never rely on a notification for critical state; it's a nudge.
- **Idempotency** — the same event delivered twice must not notify twice.
- **Unsubscribe / one-click** in every email (compliance).

## Interview probe

- "Where does the decision 'send email vs push vs in-app' live?"
- "User gets 20 likes in 5 minutes — how many notifications do they get?"
- "How do you handle a push token that no longer works?"`,
      },
    ],
  },
  {
    id: 'content-data',
    title: 'Content & Data',
    phases: [
      {
        id: 'file-media-upload',
        title: 'File / Media Upload',
        duration: 'Every project',
        content: `> Avatars, documents, product images, attachments. Files never touch your app server's disk.

## Flow

\`\`\`flow
Client -> backend: "I want to upload profile.jpg (2 MB, image/jpeg)"
Backend: validate type/size -> generate a presigned S3 PUT URL (expires ~5 min, size/type constrained)
Client -> S3 directly: PUT the file (progress bar, resumable for big files)
Client -> backend: "done, key = users/123/avatar.jpg"
Backend: (optional) verify the object, kick off a processing job (resize / thumbnail / virus scan / transcode)
Serve: private files via short-lived signed URLs through a CDN; public via CDN directly
\`\`\`

## Tricky parts

- **Presigned URL** — the file never proxies through Node (no 500 MB in app memory). Backend only signs.
- **Validate before AND after** — content-type sniffing (not the extension), size cap, re-encode images, strip EXIF/GPS, scan.
- **Private buckets** — user content is never public-read; serve via signed URLs / signed CDN cookies.
- **Metadata in DB, bytes in S3** — \`files(key, owner_id, mime, size, status)\`.
- **Orphan cleanup** — a job deletes objects whose DB row is gone, and rows whose upload never completed.
- **Big files** — multipart / resumable upload; background processing with a status the UI polls.

## Interview probe

- "How do you upload a 1 GB video from a flaky mobile connection?"
- "What does the backend actually do in a presigned-URL upload?"
- "How do you serve a private file (only the owner can see it)?"`,
      },
      {
        id: 'search-and-filter',
        title: 'Search & Filtering',
        duration: 'E-commerce · Marketplace · Admin',
        content: `> Keyword search + facet filters (brand, price, rating) + sort + pagination. DB \`LIKE\` doesn't scale.

## Approaches

- **Small data / exact filters** — SQL with proper indexes (\`WHERE status = ? AND category = ?\`), maybe \`pg_trgm\` / full-text (\`tsvector\`) for text.
- **Real search UX** (typo tolerance, relevance, facets, autocomplete) — a search engine: Elasticsearch / OpenSearch / Typesense / Meilisearch / Mongo Atlas Search.
- DB stays the source of truth; the search index is **derived** and reindexable.

## Flow (with a search engine)

\`\`\`flow
Product created/updated -> sync to the index (event / CDC / job)
Query -> search API -> engine: keyword match (analyzed) + filter (facets) + sort + relevance -> ids + highlights
-> hydrate from DB/cache -> return with facet counts
\`\`\`

## Tricky parts

- **Keep index in sync** — dual-write (simple, can drift), outbox/event (reliable), CDC (no app change), + periodic full reindex to fix drift.
- **Permissions** — filter results by what the user is allowed to see, at query time.
- **Facet counts** — "23 results in Nike" — an aggregation alongside the search.
- **Autocomplete** — edge-ngram index or a suggester; debounce on the client; cache hot prefixes.
- **Relevance tuning** — field boosts (title > description), synonyms, "did you mean".
- **\`LIKE '%term%'\`** — leading \`%\` kills the index -> full scan. Avoid at scale.

## Interview probe

- "You have millions of products — how does search + filters + sort work, fast?"
- "Product price changes — how quickly does search reflect it?"
- "How do you keep the search index consistent with the database?"`,
      },
      {
        id: 'comments-reviews',
        title: 'Comments, Reviews & Ratings',
        duration: 'E-commerce · Social · Content',
        content: `> Threaded comments, star ratings, "verified purchase", helpful votes, moderation.

## Data model

\`\`\`flow
comments(id, entity_type, entity_id, author_id, parent_id, body, status, created_at)  -- parent_id = thread
reviews(id, product_id, user_id, rating, title, body, verified_purchase, status, created_at)
review_votes(review_id, user_id, helpful)   -- unique (review_id, user_id)
product_rating_summary(product_id, avg, count, histogram jsonb)  -- denormalized
\`\`\`

## Flow

\`\`\`flow
Post -> validate -> spam/profanity check -> status = published | pending_moderation
Rating -> one review per (user, product); on create/edit/delete -> update the rating summary (async)
Threading -> parent_id; render recursively; cap depth or flatten deep replies
Helpful vote -> upsert; unique per user
\`\`\`

## Tricky parts

- **One review per user per product** — DB unique constraint; editing updates in place.
- **Denormalized rating summary** — recomputing \`AVG\` over 50k reviews per page load is slow; keep \`avg/count/histogram\` and update on change (or a periodic job).
- **Verified purchase** — link the review to an actual order.
- **Moderation** — auto-flag (keywords, links, rate), a queue for humans, shadow-hide vs delete.
- **Threading** — store as adjacency list (\`parent_id\`); deep nesting -> flatten or "continue thread".
- **Sorting** — "most helpful" (Wilson score, not raw count), "most recent", "critical".

## Interview probe

- "How do you show the average rating without scanning every review on each request?"
- "Threaded replies — how do you store and render them?"
- "How do you stop review spam?"`,
      },
      {
        id: 'import-export',
        title: 'Import / Export (CSV, Bulk)',
        duration: 'SaaS · Admin · CRM',
        content: `> "Upload a CSV of 50,000 products", "export all orders". Long-running, must not block the request or lose rows.

## Flow — import

\`\`\`flow
Upload file -> presigned S3 -> create an import_job (status=queued) -> return job id (202)
Worker: stream the file (don't load 50k rows into memory) -> per row: validate -> upsert -> record ok/error
-> write an errors CSV -> job status=completed with counts
UI: poll job status / get a WebSocket update -> download the error report
\`\`\`

## Flow — export

\`\`\`flow
Request export -> create export_job -> worker queries in pages -> streams rows to a CSV in S3
-> email a signed download link (or notify)
\`\`\`

## Tricky parts

- **Async job, not an HTTP request** — a 50k-row import can't finish in 30s.
- **Stream, don't buffer** — parse and write row-by-row; large files OOM otherwise.
- **Partial success** — process valid rows, collect errors with row numbers, return a downloadable error report. Don't fail the whole file on row 4,001.
- **Idempotent upsert** — re-running the same import (or a retry) shouldn't duplicate; key on an external id.
- **Validation** — schema, types, referential (does this category exist?), dedupe within the file.
- **Big exports** — paginate the query (cursor), stream to S3, don't hold it all in memory; signed link with expiry.
- **Encoding / delimiters / BOM** — Excel CSVs are messy; handle UTF-8 BOM, quoted fields, \`;\` vs \`,\`.

## Interview probe

- "User uploads a 100 MB CSV — walk me through what happens."
- "Row 4,001 of 10,000 is invalid — what do you do with the other rows?"
- "The same import file is uploaded twice — do you get duplicates?"`,
      },
      {
        id: 'pagination-infinite-scroll',
        title: 'Pagination & Infinite Scroll',
        duration: 'Every project',
        content: `> List 10,000 rows without loading all of them. Page numbers, "load more", infinite scroll.

## Offset vs cursor

- **Offset** (\`LIMIT 20 OFFSET 200\`) — simple, "jump to page 50", but slow on deep pages (DB walks + discards all skipped rows) and shows **duplicates/gaps** if data changes between pages.
- **Cursor / keyset** (\`WHERE created_at < :lastSeen ORDER BY created_at DESC LIMIT 20\`) — O(log n) with an index, stable under inserts, but no "jump to page N".

\`\`\`flow
Feed / infinite scroll -> cursor pagination (return items + nextCursor)
Admin table with page numbers -> offset (small datasets) or cursor + a separate count
\`\`\`

## Tricky parts

- **Stable sort key** — sort by something unique (or \`created_at, id\` as a tiebreak); ties cause skipped/repeated rows.
- **Total count** — expensive on big tables; approximate (\`reltuples\`), cache it, or drop it ("load more").
- **Client** — de-dupe on merge, keep a Set of seen ids, handle "no more" and error/retry states.
- **New items while scrolling** — a feed might show "5 new posts" pill instead of shifting everything.
- **N+1** — don't fetch relations per row; batch (\`WHERE id IN (...)\`).

## Interview probe

- "Offset vs cursor pagination — when do you use each?"
- "User is on page 3, someone deletes a row on page 1 — what does the user see on page 4?"
- "How do you implement infinite scroll without duplicate items?"`,
      },
    ],
  },
  {
    id: 'platform-admin',
    title: 'Platform & Admin',
    phases: [
      {
        id: 'multi-tenancy',
        title: 'Multi-Tenancy / Organizations',
        duration: 'B2B SaaS',
        content: `> One app, many isolated customers (orgs/workspaces). Every row belongs to a tenant; no tenant ever sees another's data.

## Models

- **Shared schema + \`tenant_id\` column** (most common) — one DB, every table has \`tenant_id\`, every query filters by it. Cheap, easy to run; isolation is enforced in code.
- **Schema per tenant** — one DB, a schema each. Better isolation, harder migrations at scale.
- **DB per tenant** — strongest isolation / data residency, highest ops cost. For enterprise/regulated.

## Flow (shared schema)

\`\`\`flow
Request -> resolve tenant (subdomain acme.app.com / header / from the user's membership)
-> every query scoped: WHERE tenant_id = :tenant  (via an ORM global scope / middleware / Postgres RLS)
Users <-> tenants is many-to-many: memberships(user_id, tenant_id, role)
\`\`\`

## Tricky parts

- **Never forget the \`tenant_id\` filter** — one missed \`WHERE\` = cross-tenant leak. Enforce centrally: a repository layer, an ORM scope, or **Postgres Row-Level Security** as a backstop.
- **A user in multiple orgs** — "current tenant" in the session; switching context.
- **Unique constraints are per-tenant** — \`UNIQUE (tenant_id, email)\`, not \`UNIQUE (email)\`.
- **Noisy neighbor** — one big tenant hogging resources -> per-tenant rate limits / quotas.
- **Per-tenant config** — plan, feature flags, branding, limits.
- **Admin cross-tenant tools** — support needs to see any tenant; audit that access.

## Interview probe

- "How do you guarantee tenant A can never read tenant B's data?"
- "Shared schema vs DB-per-tenant — trade-offs?"
- "A user belongs to 3 organizations — how does the app know which one they're acting in?"`,
      },
      {
        id: 'admin-dashboard',
        title: 'Admin Dashboard / Internal Tools',
        duration: 'Every project',
        content: `> The back office: manage users, orders, content; run support actions; see metrics. Powerful, so dangerous.

## What it needs

- **Its own auth + roles** (admin, support, finance, read-only) — separate from customer roles.
- **CRUD tables** with search/filter/sort/pagination/export over the core entities.
- **Support actions** — impersonate a user (view-as), issue a refund, resend an email, unlock an account, adjust a balance.
- **Metrics** — signups, revenue, active users, error rate (Ch: Reporting).
- **Audit log** on every action (Ch: Audit log).

## Tricky parts

- **Every action is high blast-radius** — "delete user", "refund", "change plan". Confirmation, permission checks, and an audit entry with before/after.
- **Impersonation** — clearly banner it ("You are viewing as X"), scope it (read-only or limited), time-box it, and audit it. The impersonated actions are attributed to the admin.
- **Don't expose raw internal data** — same authz + tenant rules apply; PII masked where possible.
- **Bulk actions** — "refund these 500 orders" -> a background job with a progress report, not a 30s request.
- **Build vs buy** — Retool / Forest Admin / an admin framework vs custom. Custom when actions are domain-specific.

## Interview probe

- "Support needs to 'log in as' a customer to debug — how do you build that safely?"
- "An admin fat-fingers a bulk delete — what protects you / how do you recover?"
- "How is an admin's action on a customer's data tracked?"`,
      },
      {
        id: 'feature-flags',
        title: 'Feature Flags & Config',
        duration: 'SaaS · Any team',
        content: `> Turn features on/off at runtime — per environment, per tenant, per user %, without a deploy. Kill switches, gradual rollouts, A/B tests, plan gating.

## Data model / source

\`\`\`flow
flags(key, description, type)
flag_rules(flag_key, condition jsonb, value, rollout_percent, priority)
\`\`\`

Or a managed service (LaunchDarkly, Unleash, PostHog, Flagsmith), or a config file for simple cases.

## Flow

\`\`\`flow
App boot / periodically -> fetch flag config -> cache in memory (SDK does this)
Code: if (flags.isEnabled('new-checkout', { userId, tenantId, plan })) { ... }
Evaluate rules top-down: tenant override -> user in beta list -> % rollout (stable hash of userId) -> default
\`\`\`

## Tricky parts

- **Stable bucketing** — \`hash(userId + flagKey) % 100 < rolloutPercent\` so a user doesn't flip on every request.
- **Deploy != release** — ship code dark behind a flag, enable later; instant rollback = flip the flag.
- **Backward compatibility** — both the flag-on and flag-off paths must work with current data.
- **Flag debt** — remove flags after full rollout; a codebase with 200 stale flags is unreadable.
- **Fail-safe default** — if the flag service is down, fall back to a sane default (usually "off" for new features).
- **Client vs server flags** — don't leak "coming soon" features in the client bundle if they're sensitive.

## Interview probe

- "How do you roll out a risky feature to 5% of users, then 50%, then everyone — with instant rollback?"
- "Why 'stable' bucketing — what breaks without it?"
- "A feature is fully rolled out — what do you do with the flag?"`,
      },
      {
        id: 'reporting-analytics',
        title: 'Reporting & Analytics',
        duration: 'SaaS · E-commerce · Admin',
        content: `> Dashboards, revenue reports, funnels, "orders per day". Heavy aggregate reads that must not slow the app DB.

## Approaches (by scale)

- **Small** — aggregate queries on the OLTP DB (\`GROUP BY date\`), cached, maybe a read replica.
- **Medium** — pre-aggregated **rollup tables** (\`daily_metrics(date, tenant_id, orders, revenue, signups)\`) filled by a nightly / hourly job or incrementally.
- **Large / real-time** — pipe events to a warehouse (BigQuery / ClickHouse / Redshift) via CDC or a stream; BI tool or custom dashboards query that. Real-time counters via stream processing (Ch: Stream processing) or approximate structures (HyperLogLog for uniques, Count-Min for top-K).

## Flow

\`\`\`flow
App events -> (Kafka / queue) -> warehouse (raw) + rollup jobs (aggregated)
Dashboard -> query rollups / warehouse (NOT the app's Postgres) -> cache -> render
Export -> background job -> CSV in S3 (Ch: Import/Export)
\`\`\`

## Tricky parts

- **Don't run analytics on the transactional DB** — a \`GROUP BY\` scanning millions of rows locks up your checkout. Offload it.
- **Timezones** — "orders today" in whose timezone? Store UTC, bucket by the tenant's timezone.
- **Idempotent rollups** — re-running yesterday's job must overwrite, not double-count (\`INSERT ... ON CONFLICT\` / \`$merge\`).
- **Late data** — an event arrives after the day's rollup ran -> recompute that window.
- **Consistency** — dashboard numbers are eventually consistent; don't promise to-the-second accuracy for aggregates.
- **Access control** — a tenant sees only their own numbers.

## Interview probe

- "The reporting page is slow and it's slowing everything else down — what do you do?"
- "How do you show 'revenue this month' without scanning every order on each load?"
- "An order from yesterday gets refunded today — how do the reports update?"`,
      },
      {
        id: 'rate-limiting-abuse',
        title: 'Rate Limiting & Abuse Protection',
        duration: 'Every public API',
        content: `> Stop one client (or an attacker) from overwhelming the system or running up your costs.

## Layers

- **Per IP** — coarse, catches dumb floods (but shared NATs, so not too tight).
- **Per user / per API key** — the real fairness unit.
- **Per route** — stricter on login, OTP, search, AI endpoints, writes.
- **Global / load shedding** — under total overload, drop low-priority requests to keep the core alive.

## Flow

\`\`\`flow
Request -> rate limiter (before auth for IP limits, after for user limits)
-> Redis: atomic INCR + EXPIRE, or a token-bucket Lua script
-> over limit -> 429 + Retry-After header + a friendly client message
\`\`\`

## Algorithms

- **Fixed window** — simple, but a burst at the window boundary can do 2× the limit.
- **Sliding window** — smoother, more accurate.
- **Token bucket** — allows controlled bursts, caps the average rate. Most common.

## Tricky parts

- **Distributed** — the counter must be in shared Redis; per-instance counters = N× the real limit.
- **Atomicity** — check-and-increment in one step (Lua / \`INCR\`), or two racing requests both pass.
- **Cost protection** — AI / export / email endpoints: also a per-day spend/quota cap, not just requests/min.
- **Abuse beyond rate** — signup velocity, disposable emails, device fingerprinting, CAPTCHA on suspicion, WAF for L7 attacks.
- **Don't lock out legit users** — clear errors, generous limits for normal use, higher tiers for paid.

## Interview probe

- "Implement rate limiting across 5 API servers — where does the counter live and why?"
- "Fixed window vs token bucket?"
- "How do you protect an expensive AI endpoint from abuse and cost blowup?"`,
      },
      {
        id: 'webhooks-jobs',
        title: 'Webhooks (In/Out) & Background Jobs',
        duration: 'SaaS · Integrations',
        content: `> **Receiving** webhooks (Stripe, GitHub) and **sending** webhooks to customers' endpoints. Plus the queue that powers most async work.

## Incoming webhooks

\`\`\`flow
Provider POSTs -> verify signature (raw body) + timestamp -> dedup by event id -> enqueue -> return 200 fast
Worker: do the real work (idempotent) with retries + DLQ
\`\`\`

Respond in ms; providers retry on slow/failed responses and eventually give up.

## Outgoing webhooks (you notify customers)

\`\`\`flow
Event happens -> for each subscription to that event type -> enqueue a delivery
Worker: POST to the customer's URL with an HMAC signature header + event id
-> non-2xx / timeout -> retry with exponential backoff for hours/days -> then mark failed + alert the customer
Give customers: a deliveries log, "resend", and signature docs
\`\`\`

## Background jobs (the queue)

\`\`\`flow
API -> enqueue (BullMQ / SQS / a DB-backed queue) -> return immediately
Workers (scaled separately) -> process: email, image processing, exports, rollups, cleanup, scheduled tasks
\`\`\`

## Tricky parts

- **Idempotent handlers** — at-least-once delivery = duplicates; dedupe on event/job id.
- **DLQ + alerting** — repeatedly failing jobs must not silently vanish or block the queue.
- **Small payloads** — put an id in the job, not a 5 MB blob; the worker refetches.
- **Retry storms** — backoff + jitter + a cap; don't hammer a failing downstream.
- **Outgoing SSRF** — a customer's webhook URL could point at \`localhost\` / internal IPs -> allowlist / block private ranges.
- **Ordering** — webhooks/jobs are not ordered; the handler must tolerate out-of-order (or use a sequence).
- **Scheduled jobs on N servers** — a lock or a real scheduler so it runs once (Ch: Distributed scheduling).

## Interview probe

- "Stripe sends the same \`payment.succeeded\` event 3 times — what happens?"
- "You expose webhooks to customers — how do you handle their endpoint being down for 2 hours?"
- "A background job keeps failing — how do you find out, and what happens to it?"`,
      },
    ],
  },
];
