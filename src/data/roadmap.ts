export interface RoadmapPhase {
  id: string;
  title: string;
  duration: string;
  content: string;
}

export interface RoadmapChapter {
  id: string;
  title: string;
  phases: RoadmapPhase[];
}

export const roadmapChapters: RoadmapChapter[] = [
  {
    id: 'overview-strategy',
    title: 'Overview & Strategy',
    phases: [
      {
        id: 'who-this-is-for',
        title: 'Who This Roadmap Is For',
        duration: 'Read first',
        content: `> A working MERN / Next.js developer who wants to become a **Full Stack AI Engineer** — and, in parallel, a production-level **React Native** mobile developer.

This is not a beginner path. It assumes you already ship features with JavaScript, React, Node.js, Express, MongoDB, REST APIs, Git and Next.js. Everything here builds on top of that — no time wasted re-teaching HTTP or JSX.

## The target profile (2026)

\`\`\`flow
Full Stack AI Engineer
Strong web + backend fundamentals
System design that survives real traffic
LLM apps: prompting, tool calling, streaming
Production RAG + agents
AI in production: cost, evals, guardrails, privacy
\`\`\`

Positioning on your CV:

> Full Stack AI Engineer | React / Next.js / TypeScript | Node.js + Python/FastAPI | LLM Apps · RAG · Agents · MCP | PostgreSQL / MongoDB / Redis | AWS · Docker · CI/CD | React Native

## How the two tracks fit together

- **Main track** (this document): Full Stack + AI, in a strict learning sequence.
- **Parallel track** ([[parallel-react-native-engineer]] → the separate **React Native roadmap**): mobile, run alongside from month 3-4 onward.
- They converge in the **final project**: one web app + one React Native app on a shared AI backend.

## Non-negotiables

- Ship a real project at the end of every chapter. No todo apps.
- Keep writing Node/React the whole time — don't "pause" full stack to learn AI.
- DSA + system design run continuously in the background, not as a phase.`,
      },
      {
        id: 'how-to-study',
        title: 'How To Study Each Topic',
        duration: 'Method',
        content: `> Don't collect definitions. For every topic below, force it through this 10-step filter — it's how senior engineers actually learn.

## The 10-step filter

1. **What is it?** — one honest sentence, no jargon.
2. **Why do I need it?** — the concrete pain it removes.
3. **How does it work?** — the mechanism, one level deeper than the API.
4. **When should I use it?** — the situations where it's the right call.
5. **When should I NOT use it?** — the misuse that causes outages / cost blowups.
6. **Real-world example** — a system you've heard of that uses it.
7. **Small coding task** — 30-60 min, just enough to feel the API.
8. **Production-level implementation** — errors, retries, config, observability, security.
9. **Interview questions** — the 3-5 questions that separate "used it" from "understands it".
10. **Common mistakes** — what you'll get wrong the first time.

## How to use this doc

Each phase already gives you steps 1-2 (the intro), a **Learn** list (step 3-4), a **Production checklist** (step 8), **Interview questions** (step 9) and **Common mistakes** (step 10). Your job is steps 5, 6, 7 — do the coding task, then write the "when NOT to use it" note yourself. If you can't write that note, you don't understand the topic yet.

## Spaced practice

- Build the phase project.
- One week later, explain the topic out loud (or write it) without notes.
- Add its interview questions to your [[portfolio-projects]] prep sheet.`,
      },
      {
        id: 'timeline-sequence',
        title: 'Learning Sequence & Timeline',
        duration: 'Plan',
        content: `> Order matters more than speed. Each block assumes the previous one is solid.

\`\`\`flow
Frontend core (Advanced JS, TS, React, Next.js)
Backend & APIs (Node, Express, auth, security, realtime)
Data layer (SQL/Postgres, Mongo, Redis, queues, storage)
Infra & delivery (AWS, Docker, CI/CD, testing, observability)
System design (fundamentals + worked examples)
AI foundations (LLMs, embeddings, model selection)
LLM application development (APIs, prompting, tools, streaming)
RAG in production
AI agents + MCP
AI + full stack in production (ops, cost, guardrails, privacy)
\`\`\`

## Rough calendar (part-time, ~12-14 months)

| Months | Main track | Parallel |
| --- | --- | --- |
| 1-2 | TypeScript + advanced React/Next.js | — |
| 3-4 | Node, Express, auth, API security, WebSockets | React Native: fundamentals + UI |
| 5 | PostgreSQL + MongoDB + Redis + queues + storage | RN: state + API + auth |
| 6 | AWS + Docker + CI/CD + testing + observability | RN: device features |
| 7 | System design (fundamentals + 3 worked examples) | RN: production hardening |
| 8 | AI foundations + LLM app development | RN: native basics + release |
| 9 | RAG in production | RN Project: E-commerce / Booking |
| 10 | AI agents + MCP | RN Project: Real-time chat |
| 11 | AI in production (ops, cost, guardrails, privacy) + Python/FastAPI | RN Project: AI mobile app |
| 12-14 | Final combined project + interview prep | Final project (mobile side) |

Sequential-ish, not rigid. System design and interview prep bleed across every month.`,
      },
      {
        id: 'portfolio-projects',
        title: 'The Portfolio Projects',
        duration: 'Build across the year',
        content: `> Four strong projects beat twenty small ones. Each one should be deployed, monitored, and explainable end to end.

## 1. Production SaaS (web)

Next.js + Node + TypeScript, PostgreSQL + Redis, auth with refresh tokens, Stripe billing, rate limiting, background jobs, Docker + CI/CD on AWS, logging + error tracking. This is your "I can ship real full stack" proof.

## 2. AI Knowledge Assistant (RAG)

\`\`\`flow
Upload docs / connect a data source
Ingest -> chunk -> embed -> vector DB
Query -> hybrid retrieve -> rerank -> LLM
Answer with citations + conversation history
\`\`\`

Add evals (did the answer use the right chunks?), cost tracking, and prompt-injection defense.

## 3. AI Business Assistant (agent)

An agent that can **read business data and take controlled actions** through your APIs: look up an order, draft an email, schedule a task, update a record — always behind a human-approval step for writes. Tools, agent loop, memory, MCP, usage limits, audit log.

## 4. Full Stack + AI + Mobile (final / flagship)

\`\`\`flow
Web app (Next.js)  +  React Native app
Shared Node.js / FastAPI backend
PostgreSQL + Redis + S3
LLM + RAG + Agent
AWS + Docker + CI/CD + observability
\`\`\`

One product, two clients, one AI backend. This is the project you talk about for 30 minutes in an interview.

## The rule

Every project must answer: how does it fail, how do you know it failed, how much does a request cost, and how do you stop abuse.`,
      },
    ],
  },
  {
    id: 'career-levels',
    title: 'Career Levels',
    phases: [
      {
        id: 'level-1-strong-full-stack',
        title: 'Level 1 — Strong Full Stack Developer',
        duration: 'Baseline',
        content: `> You can build and ship a complete, secure, deployed web app on your own.

## Should know

- TypeScript across frontend and backend
- React (hooks, performance, data fetching) + Next.js App Router
- Node + Express: REST design, validation, error handling, auth with JWT access/refresh
- One SQL DB (PostgreSQL) and MongoDB, with real indexing
- Redis for caching and sessions
- Docker, a CI pipeline, and a real deploy (AWS / Vercel + a VPS)

## Should build

- A production SaaS with auth, billing, background jobs, and monitoring

## Should practice

- Writing typed API contracts, query optimization, reproducing and fixing a real bug from logs

## Should be able to explain

- Access vs refresh tokens, where you store them, and why
- How you'd add an index and prove it helped
- What happens on \`git rebase\` vs \`merge\` and when you'd force-push safely

## Next

→ [[level-2-advanced-full-stack]]`,
      },
      {
        id: 'level-2-advanced-full-stack',
        title: 'Level 2 — Advanced Full Stack Engineer',
        duration: 'Next',
        content: `> You make architecture decisions and defend them. You think about scale, failure, and cost before it hurts.

## Should know

- System design fundamentals: capacity estimation, caching layers, load balancing, horizontal scaling
- Queues + event-driven patterns; when a modular monolith beats microservices
- Observability: structured logs, metrics, traces, alerting
- Security depth: OWASP top 10, rate limiting, secrets management, RBAC/ABAC
- WebSockets / real-time patterns and their scaling problems

## Should build

- A system with a queue + workers, real caching, and a load test that proves it holds

## Should practice

- Whiteboarding 5+ classic systems; writing an incident postmortem

## Should be able to explain

- Your caching strategy and its invalidation story
- How you'd scale writes vs reads on the database
- Idempotency, retries, and the failure modes of "just retry"

## Next

→ [[level-3-ai-application-developer]]`,
      },
      {
        id: 'level-3-ai-application-developer',
        title: 'Level 3 — AI Application Developer',
        duration: 'AI entry',
        content: `> You can add a genuinely useful AI feature to a production app without it being a demo that falls over.

## Should know

- LLM fundamentals: tokens, context windows, temperature, inference cost
- LLM APIs: chat, streaming, structured output, function/tool calling, multimodal
- Prompt engineering that's version-controlled, not vibes
- Basic RAG: ingest → chunk → embed → retrieve → answer with citations
- AI error handling: timeouts, retries, fallback models, partial responses

## Should build

- An AI feature inside your SaaS: natural-language search, report summaries, or a support assistant

## Should practice

- Turning a fuzzy request into a structured LLM call with a JSON schema and validation

## Should be able to explain

- Why the model hallucinated and three ways you reduced it
- Token/cost math for one feature at 1k users/day
- Streaming: server-sent events, backpressure, cancelation

## Next

→ [[level-4-ai-engineer]]`,
      },
      {
        id: 'level-4-ai-engineer',
        title: 'Level 4 — AI Engineer',
        duration: 'AI depth',
        content: `> You own AI systems end to end: retrieval quality, agent behavior, evaluations, guardrails, and the bill.

## Should know

- Production RAG: hybrid search, metadata filtering, reranking, retrieval evaluation, context optimization
- Agents: tool design, agent loops, memory, planning, human-in-the-loop, agent evaluation, multi-agent, MCP
- AI ops: prompt versioning, tracing, offline + online evals, regression tests for prompts
- AI security: prompt injection, data exfiltration, tool-permission scoping, PII handling
- Cost engineering: caching, model routing, batching, context trimming

## Should build

- The AI Business Assistant agent with an audit log, eval suite, and cost dashboard

## Should practice

- Writing an eval set; debugging why retrieval missed the right chunk; red-teaming your own agent

## Should be able to explain

- How you measure "is the RAG answer correct" without a human every time
- Your agent's blast radius and how a malicious prompt is contained
- When NOT to use an agent (most of the time)

## Next

→ [[level-5-full-stack-ai-engineer]]`,
      },
      {
        id: 'level-5-full-stack-ai-engineer',
        title: 'Level 5 — Full Stack AI Engineer',
        duration: 'Target',
        content: `> You design and ship complete AI products: UI, API, data, model layer, infra, evals, and cost — and you can lead others doing it.

## Should know

- Everything in Levels 1-4, integrated: an AI feature is just another part of the system you can reason about
- AI API architecture: gateway, model router, streaming layer, caching, rate limiting, observability
- Python + FastAPI for AI services alongside Node for product APIs
- Trade-offs: build vs buy for vector DB, hosted vs open models, agent vs workflow vs plain call

## Should build

- The flagship: web + React Native + shared AI backend, deployed, monitored, load-tested, with an eval + cost story

## Should practice

- Estimating and defending the monthly cost of an AI feature at 3 traffic levels
- Reviewing someone else's AI PR for injection, cost, and eval gaps

## Should be able to explain

- The full request path of an AI feature from tap to token to tool to database and back
- Where you'd cut latency, where you'd cut cost, and what that trades away
- Your rollback plan when a new model version regresses quality

## Next

→ Lead AI features on a team; go deeper on a specialization (retrieval, evals, infra, or agents).`,
      },
      {
        id: 'parallel-react-native-engineer',
        title: 'Parallel Track — React Native / Mobile Engineer',
        duration: 'Runs alongside',
        content: `> Full details live in the separate **React Native + Mobile Development** roadmap. This is the summary and how it interleaves.

## The mobile ladder

\`\`\`flow
Mobile fundamentals (platforms, RN architecture, tooling)
RN fundamentals (components, navigation, platform code)
UI development (lists, forms, states, animations)
State & API integration (React Query, auth, secure storage, offline)
Device features (camera, location, push, biometrics)
Production hardening (performance, crash reporting, security)
Native basics (Swift/Kotlin enough to bridge and debug)
App release (signing, stores, TestFlight, OTA)
\`\`\`

## Should be able to explain (mobile)

- Expo vs bare React Native and the migration cost
- Secure token storage on device (Keychain / Keystore) vs AsyncStorage
- Why a list janks and how \`FlashList\` + stable keys fix it
- The full Play Store + App Store release flow

## How it interleaves with the main track

- Start after you're comfortable with React + hooks (around month 3).
- Your Node/Express backend from the main track is the API your RN apps consume.
- The final flagship project's mobile client is built here.

→ Open the **React Native roadmap** for stages, projects, and the study breakdown.`,
      },
    ],
  },
  {
    id: 'frontend-core',
    title: 'Core Engineering — Frontend',
    phases: [
      {
        id: 'advanced-javascript',
        title: 'Advanced JavaScript',
        duration: '1 week (refresh)',
        content: `> The language behaviors that cause real production bugs — not syntax.

## Learn

- Event loop: call stack, macrotasks, microtasks, and why a promise resolves before a \`setTimeout(0)\`
- Closures and the stale-closure bug in callbacks / React
- \`this\` binding, \`call\` / \`apply\` / \`bind\`, arrow-function capture
- Prototypal inheritance and the prototype chain
- Memory: references, garbage collection, common leak sources (timers, listeners, caches)
- Modules (ESM vs CJS), tree-shaking, dynamic \`import()\`
- Iterators, generators, \`Symbol\`, \`Proxy\` / \`Reflect\` (know they exist)
- Immutability patterns, structural sharing, \`structuredClone\`

## Common mistakes

- Mutating state/objects that something else holds a reference to
- \`async\` function whose rejection nobody awaits (silent failure)
- Relying on object key order or \`==\` coercion

## Interview questions

- Explain the output of a mixed \`sync / setTimeout / Promise.then\` snippet
- What is a closure, and where has it bitten you?
- Deep vs shallow copy — how do you actually deep-clone safely?`,
      },
      {
        id: 'typescript',
        title: 'TypeScript',
        duration: '1-2 weeks',
        content: `> Not "JS with types" — a design tool. Model your domain so wrong states don't compile.

## Learn

- \`type\` vs \`interface\`, unions, intersections, literal types
- Narrowing, discriminated unions, exhaustive \`switch\` with \`never\`
- Generics: constraints, defaults, inference; generic React components/hooks
- Utility types: \`Partial\`, \`Pick\`, \`Omit\`, \`Record\`, \`ReturnType\`, \`Awaited\`
- \`unknown\` vs \`any\`, type guards, assertion functions
- Runtime validation with \`zod\` and inferring types from schemas (one source of truth)
- Typing API layers end to end: shared types or generated types between client and server
- \`tsconfig\` that matters: \`strict\`, \`noUncheckedIndexedAccess\`, \`exactOptionalPropertyTypes\`

## Production checklist

- \`strict: true\`, no \`any\` in reviewed code, \`zod\` at every external boundary (API input, env vars, LLM output)
- CI fails on type errors

## Common mistakes

- Casting with \`as\` to shut the compiler up
- Types that describe the code instead of the domain
- Trusting \`JSON.parse\` / \`process.env\` / API responses as typed without validating

## Interview questions

- \`unknown\` vs \`any\` — when do you reach for each?
- How do you keep client and server types in sync?
- What does a discriminated union buy you?`,
      },
      {
        id: 'react-advanced',
        title: 'React.js (Advanced)',
        duration: '2 weeks',
        content: `> You already write components. This is about re-renders, data, and architecture at scale.

## Learn

- Render model: what triggers a re-render, reconciliation, keys, \`React.memo\` / \`useMemo\` / \`useCallback\` (and when they're noise)
- \`useReducer\` for complex local state; Context for low-frequency global state; Zustand/Redux Toolkit for high-frequency shared state
- Data fetching with TanStack Query: caching, invalidation, mutations, optimistic updates
- Effects done right: dependency arrays, cleanup, race conditions, \`AbortController\`
- Suspense, error boundaries, code splitting, lazy routes
- Forms: controlled vs uncontrolled, \`react-hook-form\` + \`zod\`
- Performance: profiler, list virtualization, \`useTransition\`, avoiding inline object props
- Component architecture: feature folders, container/presentational, custom hooks for logic reuse (the modern HOC)

## Production checklist

- Every data view has loading / empty / error states
- No unbounded lists; long lists virtualized
- Effects cancel in-flight requests on unmount / dep change

## Common mistakes

- Lifting state higher than it needs to be
- \`useEffect\` for derived data that should just be computed in render
- Array index as key in a reorderable list

## Interview questions

- What causes a component to re-render, and how do you stop unnecessary ones?
- Context vs Redux vs Zustand — decision criteria
- How do you handle a race between two overlapping fetches?`,
      },
      {
        id: 'nextjs-production',
        title: 'Next.js (Production)',
        duration: '1-2 weeks',
        content: `> App Router, rendering strategy, and the edge cases that hit in production.

## Learn

- Server vs Client Components; where data fetching belongs; \`"use client"\` boundaries
- Rendering: static, dynamic, streaming, \`revalidate\` / ISR, \`cache\` and \`fetch\` caching semantics
- Route handlers, middleware (auth gating, redirects, geo), \`matcher\`
- Server Actions: when they help, when a real API route is better
- Auth patterns: cookies, sessions, refresh, protecting server components and route handlers
- Rendering the AI streaming UI (server-sent events / \`ReadableStream\` from a route handler)
- Images, fonts, metadata, \`generateMetadata\`, SEO
- Deployment targets: Vercel vs self-hosted Node (and what changes)

## Production checklist

- Secrets never reach client bundles; \`NEXT_PUBLIC_\` used deliberately
- Caching is explicit — you can say why each route is static or dynamic
- Middleware is thin (it runs on every matched request)

## Common mistakes

- \`"use client"\` at the top of the tree, killing server rendering
- Assuming \`fetch\` isn't cached (it is, by default, in some contexts)
- Heavy work in middleware

## Interview questions

- Server Components vs Client Components — what can't a Server Component do?
- CSR / SSR / SSG / ISR — pick one for a product page, a dashboard, a blog
- How does streaming improve perceived performance?`,
      },
    ],
  },
  {
    id: 'backend-apis',
    title: 'Core Engineering — Backend & APIs',
    phases: [
      {
        id: 'nodejs-internals',
        title: 'Node.js Internals',
        duration: '1 week',
        content: `> Enough of the runtime to explain why your API stalled under load.

## Learn

- Event loop phases (timers, pending, poll, check, close), \`process.nextTick\` vs microtasks
- The libuv thread pool: what's actually async vs offloaded (fs, crypto, dns)
- Blocking the event loop: CPU-heavy work, sync fs, giant JSON — and how it tanks all requests
- Streams and backpressure (uploads, downloads, proxying, LLM token streams)
- Worker threads and clustering; when to reach for a queue instead
- Buffers, memory limits, \`--max-old-space-size\`, heap snapshots
- Graceful shutdown (drain connections, close DB pool, finish jobs)

## Production checklist

- No synchronous CPU work on the request path (hash, parse, image) — offload it
- \`SIGTERM\` handler does a clean shutdown
- Health check separate from readiness check

## Common mistakes

- \`JSON.parse\` on a 10 MB body inside a handler
- \`bcrypt\`/\`argon2\` with sync API under load
- Not closing DB connections on shutdown → dropped requests on deploy

## Interview questions

- Walk through the event loop phases
- What blocks the event loop and how do you detect it?
- Streams: what problem does backpressure solve?`,
      },
      {
        id: 'express-rest-design',
        title: 'Express.js & REST API Design',
        duration: '1-2 weeks',
        content: `> Predictable, versioned, well-documented APIs that other teams (and your mobile app) can build on.

## Learn

- Layered structure: route → controller → service → repository; keep business logic out of controllers
- Middleware order, \`asyncHandler\` wrappers, a single centralized error handler
- Resource modeling, correct verbs + status codes, consistent error envelope
- Validation at the edge (\`zod\`), never trust client input
- Pagination (cursor vs offset), filtering, sorting, sparse fieldsets
- Idempotency keys for POST, ETags / conditional requests
- Versioning (\`/v1\`), deprecation policy
- OpenAPI/Swagger docs generated from schemas; contract as the source of truth
- \`helmet\`, CORS configured tightly, compression

## Production checklist

- Every endpoint: validated input, typed output, known error shapes, an OpenAPI entry
- Correlation ID per request, propagated to logs and downstream calls
- Timeouts on every outbound call

## Common mistakes

- 200 with \`{ error: ... }\` in the body
- Unbounded list endpoints (no pagination)
- Business rules duplicated in controller and service

## Interview questions

- Design the REST API for a booking system — resources, verbs, status codes
- Cursor vs offset pagination — trade-offs
- What makes an endpoint idempotent and why does it matter for retries?`,
      },
      {
        id: 'auth-and-authorization',
        title: 'Authentication & Authorization',
        duration: '1-2 weeks',
        content: `> Get this wrong and nothing else matters. Know the token lifecycle cold.

## Learn

- Authentication vs authorization — identity vs permission
- Sessions (server-side, cookie) vs stateless JWT — trade-offs, revocation problem
- **Access + refresh tokens**: short-lived access, long-lived refresh, rotation, reuse detection
- Where tokens live: \`httpOnly\` \`Secure\` \`SameSite\` cookies for web; Keychain/Keystore for mobile — never \`localStorage\` for auth
- OAuth 2.0 / OpenID Connect: authorization code + PKCE, what the flows actually do
- Password storage (argon2id / bcrypt), rate-limited login, lockout, breached-password checks
- MFA/TOTP, email verification, secure password reset (single-use, expiring tokens)
- **Authorization models**: RBAC, ABAC, ownership checks; enforce server-side on every request
- Multi-tenant scoping (every query filtered by tenant/org)

## Production checklist

- Refresh rotation with reuse detection (stolen refresh token is caught)
- Every protected route re-checks permission; no "hidden = safe" UI-only gating
- Logout revokes refresh tokens; token version / \`jti\` denylist for forced logout

## Common mistakes

- Long-lived access tokens with no refresh
- Storing JWT in \`localStorage\` (XSS reads it)
- Checking role on the client but not the server
- IDOR: \`GET /orders/:id\` without an ownership check

## Interview questions

- Access vs refresh tokens — full lifecycle, where each is stored, how you revoke
- Why PKCE? What attack does it stop?
- How do you force-logout a user whose JWT hasn't expired?`,
      },
      {
        id: 'api-security',
        title: 'API Security',
        duration: '1 week',
        content: `> The OWASP-shaped checklist every endpoint must pass before it ships.

## Learn

- OWASP API Top 10: broken object-level auth (IDOR), broken auth, excessive data exposure, mass assignment, security misconfiguration, injection, improper inventory
- Input validation + output serialization (whitelist fields, never spread \`req.body\` into a model)
- Rate limiting + throttling (per IP, per user, per route), and abuse detection
- Secrets management: env vars out of git, a secrets manager, rotation
- Injection: parameterized queries, no string-built SQL/NoSQL, no \`eval\`
- SSRF protection for any "fetch a URL" feature (allowlist, block internal IPs)
- File uploads: type/size validation, scan, store off the app server, signed URLs
- Security headers (\`helmet\`), CORS allowlist, CSRF strategy for cookie auth
- Dependency scanning (\`npm audit\`, Dependabot), lockfile discipline

## Production checklist

- Every resource fetch verifies ownership/permission
- Rate limits on auth, search, AI, and write endpoints
- No stack traces or internal errors leaked to clients

## Common mistakes

- Mass assignment: \`User.update(req.body)\` lets a user set \`role: "admin"\`
- Trusting \`Content-Type\` or file extension on uploads
- CORS \`origin: "*"\` with credentials

## Interview questions

- What is IDOR and how do you prevent it systematically?
- How do you rate-limit fairly across users behind one NAT?
- Where do secrets live in your deployment and how are they rotated?`,
      },
      {
        id: 'websockets-realtime',
        title: 'WebSockets / Socket.IO',
        duration: '1 week',
        content: `> Real-time features and the scaling problem they create.

## Learn

- WebSocket vs SSE vs long-polling — pick per use case (SSE is enough for LLM streaming and feeds)
- Socket.IO: rooms, namespaces, acknowledgements, reconnection, backoff
- Auth on the socket handshake (token in the connect, re-verify, disconnect on expiry)
- Presence (online/offline), typing indicators, delivery/read receipts
- **Scaling**: multiple server instances need a shared adapter (Redis pub/sub) so a message reaches sockets on other nodes
- Message persistence + ordering; catch-up on reconnect (since-cursor)
- Backpressure and slow consumers; dropping vs buffering

## Production checklist

- Redis adapter (or equivalent) so horizontal scaling works
- Handshake auth + periodic re-auth; kick on token expiry
- Idempotent message handling; client dedupes by message id

## Common mistakes

- Assuming one server instance forever (works in dev, breaks on scale-out)
- No reconnection/catch-up → missed messages look like data loss
- Trusting the socket is authenticated forever after connect

## Interview questions

- Design a chat system: transport, delivery guarantees, scaling across nodes
- SSE vs WebSocket for an AI streaming response — which and why?
- How do two server instances deliver a message to the right sockets?`,
      },
    ],
  },
  {
    id: 'data-layer',
    title: 'Core Engineering — Data Layer',
    phases: [
      {
        id: 'sql-postgresql',
        title: 'SQL & PostgreSQL',
        duration: '2 weeks',
        content: `> Learn one relational database properly. Postgres is the default answer in 2026.

## Learn

- Schema design: normalization, foreign keys, constraints, \`NOT NULL\`, \`CHECK\`, enums
- Joins (inner/left/right), aggregation, \`GROUP BY\`, window functions
- Indexes: B-tree, partial, composite, covering; \`EXPLAIN ANALYZE\` and reading a query plan
- Transactions, isolation levels, \`SELECT ... FOR UPDATE\`, deadlocks
- \`JSONB\` (and when it's a smell), full-text search, \`pg_trgm\`, \`pgvector\` for embeddings
- Migrations (Prisma / Drizzle / Knex), zero-downtime schema changes
- Connection pooling (PgBouncer), N+1 queries, batching
- Read replicas, when to denormalize, when to shard (usually: not yet)

## Production checklist

- Every foreign key and hot filter column indexed; verified with \`EXPLAIN\`
- Migrations are reversible and run in CI
- Pool sized to the database, not to hope

## Common mistakes

- ORM lazy-loading in a loop → N+1
- Adding indexes without checking the plan (or leaving unused ones)
- Long transactions holding locks

## Interview questions

- Walk through \`EXPLAIN ANALYZE\` output — how do you know an index is used?
- SQL vs NoSQL for this feature — decide and justify
- How do you add a NOT NULL column to a huge table with no downtime?`,
      },
      {
        id: 'mongodb',
        title: 'MongoDB',
        duration: '1 week',
        content: `> You know it already — this is the production layer: modeling, indexing, aggregation, and its sharp edges.

## Learn

- Document modeling: embed vs reference, the "6 rules of thumb", array growth pitfalls
- Indexes: single, compound (order matters — ESR rule), multikey, text, TTL, partial
- Aggregation pipeline: \`$match\` early, \`$lookup\`, \`$facet\`, \`$group\`, \`$merge\`
- Transactions (multi-doc), and why you often don't need them if modeled well
- Atlas: Vector Search for RAG, Search indexes, change streams
- Schema validation, versioning documents, migration strategy
- Read/write concerns, replica sets, oplog

## Production checklist

- \`explain("executionStats")\` shows index use, not \`COLLSCAN\`
- Unbounded arrays avoided; large sub-collections referenced
- TTL indexes for ephemeral data (sessions, OTPs)

## Common mistakes

- Compound index in the wrong field order
- Unbounded \`$push\` into a document until it hits the 16 MB limit
- \`$lookup\` on unindexed fields in a hot path

## Interview questions

- Embed vs reference — walk through a real modeling decision
- Explain the ESR (Equality, Sort, Range) rule for compound indexes
- When would you actually reach for a multi-document transaction?`,
      },
      {
        id: 'redis-caching',
        title: 'Redis & Caching',
        duration: '1 week',
        content: `> Caching is easy to add and hard to invalidate. Learn the patterns and their failure modes.

## Learn

- Data types: strings, hashes, sets, sorted sets, streams; picking the right one
- Cache-aside (lazy) vs write-through vs write-behind
- TTLs, jitter, cache stampede protection (locks / \`SETNX\`, request coalescing)
- Invalidation strategies: TTL-only, explicit on write, versioned keys, tag-based
- Redis for sessions, rate limiting (token bucket / sliding window), distributed locks (Redlock caveats), leaderboards, feature flags
- Pub/Sub and Streams (consumer groups) — and where a real broker is better
- Persistence (RDB/AOF), eviction policies, memory pressure, key size discipline

## Production checklist

- Every cached key has a TTL (even "permanent" ones) + jitter
- Stampede protection on expensive recomputes
- Cache is a performance layer, not a source of truth — app works (slower) if Redis is down

## Common mistakes

- No TTL → stale data forever, memory leak
- Caching per-user data under a shared key
- Treating Redis as a durable database

## Interview questions

- Design a rate limiter in Redis — which structure, what are the edge cases?
- Cache invalidation strategies — trade-offs of each
- What is a cache stampede and how do you prevent it?`,
      },
      {
        id: 'queues-background-jobs',
        title: 'Queues & Background Jobs',
        duration: '1 week',
        content: `> Anything slow, retryable, or spiky belongs off the request path.

## Learn

- Why queues: decoupling, smoothing spikes, retries, scheduled work, fan-out
- BullMQ (Redis) for most Node apps; SQS / RabbitMQ / Kafka and when each fits
- Job design: small payloads (ids, not blobs), idempotent handlers, versioned job types
- Retries with exponential backoff + jitter, max attempts, dead-letter queue
- Delayed / scheduled / repeatable jobs (cron), rate-limited workers
- Concurrency, priorities, per-tenant fairness
- Observability: queue depth, processing time, failure rate, DLQ alerts
- Exactly-once is a myth — design for at-least-once + idempotency

## Production checklist

- Every handler is idempotent (safe to run twice)
- DLQ exists and is monitored; there's a replay path
- Backpressure: producers slow down when the queue is deep

## Common mistakes

- Putting large data in the job instead of a reference
- No DLQ → failed jobs vanish silently
- Handler assumes it runs exactly once

## Interview questions

- Design an email/notification pipeline with retries and a DLQ
- At-least-once delivery — how do you make handlers safe?
- When do you choose Kafka over a task queue like BullMQ/SQS?`,
      },
      {
        id: 'file-storage',
        title: 'File Storage',
        duration: '3-4 days',
        content: `> Files never touch your app server's disk.

## Learn

- Object storage (S3 / R2 / GCS): buckets, keys, storage classes, lifecycle rules
- **Presigned URLs**: client uploads/downloads directly to storage, server only signs
- Direct multipart upload for large files; resumable uploads
- Validation before/after: content-type sniffing, size limits, virus scan, image re-encode
- CDN in front (CloudFront) with signed URLs / cookies for private content
- Metadata in your DB (owner, mime, size, status), object in storage
- Image pipeline: on-the-fly resize/transform, \`sharp\`, or an image CDN
- Cost: egress, request pricing, cold storage for archives

## Production checklist

- Uploads go client → storage via presigned URL, never proxied through Node
- Private files served via short-lived signed URLs, not public buckets
- Orphan cleanup job (DB row deleted → object deleted)

## Common mistakes

- Public-read buckets for user content
- Buffering a 500 MB upload in app memory
- Trusting the filename / extension

## Interview questions

- Design a file upload system for a 2 GB video with a flaky mobile connection
- Presigned URL flow — what does the server actually do?
- How do you serve private files through a CDN?`,
      },
    ],
  },
  {
    id: 'infra-delivery',
    title: 'Core Engineering — Infra & Delivery',
    phases: [
      {
        id: 'aws-fundamentals',
        title: 'AWS Fundamentals',
        duration: '1-2 weeks',
        content: `> Enough AWS to deploy, secure, and debug a real system — not a certification.

## Learn

- IAM: users, roles, policies, least privilege, instance/task roles (no static keys in code)
- Compute: EC2 basics, but prefer ECS/Fargate or App Runner for containers; Lambda for glue/event work
- Networking: VPC, subnets (public/private), security groups, ALB, NAT — enough to place a service safely
- Data: RDS (Postgres), ElastiCache (Redis), S3
- Edge: CloudFront, Route 53, ACM (TLS certs)
- Secrets Manager / SSM Parameter Store
- Observability: CloudWatch logs, metrics, alarms
- Cost: tagging, budgets, the usual surprises (NAT, egress, idle RDS)

## Production checklist

- App runs in private subnets; only the ALB is public
- No long-lived AWS keys in the app — IAM role on the task/instance
- Backups on RDS, versioning on S3, alarms on error rate + latency + spend

## Common mistakes

- \`0.0.0.0/0\` security groups
- Root account for daily work; no MFA
- Public RDS

## Interview questions

- Draw the network path for a request from user to your API to the database
- IAM role vs IAM user — when do you use which?
- Your bill doubled overnight — where do you look first?`,
      },
      {
        id: 'docker',
        title: 'Docker',
        duration: '4-5 days',
        content: `> Reproducible builds and environments. Small, secure images.

## Learn

- Images vs containers, layers, build cache, \`.dockerignore\`
- Multi-stage builds (build stage with dev deps → lean runtime stage)
- Non-root user, minimal base (\`alpine\` / \`distroless\`), pinned versions
- \`docker compose\` for local dev (app + Postgres + Redis + workers)
- Env/config injection, secrets (not baked into layers), healthchecks
- Image scanning (Trivy), SBOM, keeping images small
- Node specifics: \`npm ci\`, prune dev deps, cache \`node_modules\` layer

## Production checklist

- Final image runs as non-root, has a healthcheck, no build tools or secrets in it
- \`docker compose up\` gives a new dev a working stack in one command
- Images scanned in CI

## Common mistakes

- \`COPY . .\` before \`npm ci\` (busts cache every change)
- Secrets in \`ENV\` / build args (they're in the image history)
- Running as root

## Interview questions

- Why multi-stage builds? What's in each stage?
- How do you get a secret into a container without baking it in?
- Your image is 1.2 GB — how do you shrink it?`,
      },
      {
        id: 'ci-cd',
        title: 'CI/CD',
        duration: '4-5 days',
        content: `> Every merge to main is tested, built, and deployable automatically.

## Learn

- GitHub Actions: workflows, jobs, matrix, caching, reusable workflows, OIDC to AWS (no stored keys)
- Pipeline stages: install → lint → typecheck → unit → build → integration/e2e → deploy
- Preview environments per PR; migrations run as a pipeline step
- Deployment strategies: rolling, blue-green, canary; automatic rollback on health failure
- Secrets in CI, environment protection rules, required checks
- Versioning + changelogs; semantic tags; artifact/image promotion (build once, deploy many)

## Production checklist

- Main is always releasable; broken build blocks merge
- DB migration is a gated, reversible pipeline step
- One-click (or automatic) rollback

## Common mistakes

- Rebuilding the image per environment instead of promoting one artifact
- Migrations run manually / out of band
- No rollback plan

## Interview questions

- Walk through your pipeline from PR to production
- Blue-green vs canary — trade-offs
- How do you run a risky migration safely?`,
      },
      {
        id: 'testing',
        title: 'Testing',
        duration: '1 week',
        content: `> Test the behavior that matters. Fast feedback, few flakes.

## Learn

- The pyramid: many unit, some integration, few E2E — and where it bends for your app
- Unit: pure functions, services with mocked IO; Vitest/Jest
- Integration: real DB (testcontainers / a test database), real HTTP layer, seeded data
- Contract tests for APIs (OpenAPI schema validation, or Pact)
- E2E: Playwright for critical user journeys only
- React: Testing Library — query like a user, test outcomes not internals
- **Testing AI code**: deterministic tests for the plumbing (parsing, tool routing, schema validation); eval sets (not unit tests) for model output quality
- Test data builders, fixtures, avoiding shared mutable state; CI parallelization

## Production checklist

- Critical paths (auth, payments, checkout, AI request flow) covered by integration + E2E
- Tests run in CI in a few minutes; flaky tests quarantined, not ignored
- Coverage is a signal, not a target

## Common mistakes

- Mocking everything → tests pass, product breaks
- E2E for logic that a unit test could cover (slow, flaky)
- Snapshot tests nobody reads

## Interview questions

- What do you unit test vs integration test vs E2E?
- How do you test something that calls an LLM?
- A test is flaky — how do you approach it?`,
      },
      {
        id: 'observability',
        title: 'Monitoring, Logging & Observability',
        duration: '1 week',
        content: `> You can't fix what you can't see. Logs, metrics, traces, alerts.

## Learn

- Structured logging (JSON), levels, correlation/request IDs, no PII/secrets in logs
- Metrics: RED (Rate, Errors, Duration) per endpoint; USE for resources; business metrics
- Distributed tracing (OpenTelemetry): spans across API → DB → queue → LLM call
- Error tracking (Sentry): grouping, release tracking, source maps, alert routing
- Dashboards (Grafana / hosted) and SLOs; alert on symptoms (latency, error rate), not causes
- Uptime checks, synthetic monitors, on-call basics, runbooks
- **AI-specific**: log prompt version, model, token counts, cost, latency, tool calls, and a trace id per AI request

## Production checklist

- Every request has a correlation id flowing through logs and traces
- Alerts are actionable and rare; each has a runbook
- p50/p95/p99 latency and error rate visible per endpoint and per AI feature

## Common mistakes

- \`console.log\` debugging in production; unstructured logs
- Alerting on CPU instead of user-facing symptoms
- No trace linking the slow request to the slow query

## Interview questions

- Logs vs metrics vs traces — what does each answer?
- An endpoint's p99 latency spiked — how do you find the cause?
- What do you record for every LLM call in production?`,
      },
      {
        id: 'security-hardening',
        title: 'Security (App + Infra)',
        duration: 'Ongoing',
        content: `> A running checklist you re-apply to every service, not a one-time task.

## Learn

- OWASP Top 10 (web) + API Top 10, refreshed yearly
- TLS everywhere, HSTS, modern ciphers; secrets in a manager with rotation
- AuthN/AuthZ enforced server-side on every request; tenant isolation
- Input validation + output encoding; parameterized queries; SSRF/RCE guards
- Dependency hygiene: lockfiles, \`npm audit\`, Dependabot, review transitive deps
- Least-privilege IAM; network segmentation; no public data stores
- Rate limiting, bot/abuse protection, WAF for public endpoints
- Backups + tested restore; disaster recovery plan
- PII handling: minimize, encrypt at rest, access logs, deletion path (GDPR/DPDP)
- Incident response: detect, contain, eradicate, recover, postmortem

## Production checklist

- Threat-model each new feature (what can an attacker do with this input/permission?)
- Restore from backup tested this quarter
- A dependency CVE has a defined response SLA

## Common mistakes

- Security as a pre-launch checklist instead of a design input
- Trusting internal services (no auth between microservices)
- Logging tokens, passwords, or full request bodies

## Interview questions

- Threat-model a file-upload feature out loud
- How do you handle a critical CVE in a transitive dependency at 6pm Friday?
- Where does PII live in your system and how is it deleted?`,
      },
    ],
  },
  {
    id: 'system-design',
    title: 'System Design',
    phases: [
      {
        id: 'requirements-capacity',
        title: 'Requirements & Capacity Estimation',
        duration: '3-4 days',
        content: `> Before any boxes and arrows: what must it do, how well, and how big.

## Learn

- Functional requirements (features) vs non-functional (latency, availability, durability, consistency, cost, security)
- Clarifying questions: who, what scale, read/write ratio, consistency needs, growth
- Back-of-envelope: DAU → QPS (peak = 2-5x average), storage/day, bandwidth, cache size
- SLAs / SLOs / SLIs; "how many nines" and what each costs
- Identifying the hard part early (the one constraint the design must serve)

## Worked pattern

\`\`\`flow
Clarify functional + non-functional requirements
Estimate scale: QPS, storage, bandwidth
Define API + data model
High-level design
Deep-dive the bottleneck
Address failure, scaling, cost, security
\`\`\`

## Interview questions

- Estimate the QPS and storage for a URL shortener at 100M new links/month
- What non-functional requirement dominates a payment system? A chat app? A feed?
- Given 50 GB/day of writes, what does that imply for the datastore choice?`,
      },
      {
        id: 'api-database-design',
        title: 'API & Database Design',
        duration: '3-4 days',
        content: `> The contract and the schema decide most of the system's future pain.

## Learn

- API: resource modeling, pagination, idempotency, versioning, error contract, bulk endpoints
- Data modeling: entities, relationships, access patterns first (especially for NoSQL)
- **SQL vs NoSQL**: relational integrity + ad-hoc queries → SQL; known access patterns + massive scale + flexible schema → NoSQL; often both
- Indexing strategy from the query patterns; composite index order
- Normalization vs denormalization; materialized views; CQRS-lite (separate read model)
- Multi-tenancy: shared schema + tenant column vs schema-per-tenant vs DB-per-tenant

## Interview questions

- Design the schema + indexes for an e-commerce catalog with faceted search
- SQL vs NoSQL for a social feed — decide and defend
- How do you evolve an API without breaking mobile clients on old versions?`,
      },
      {
        id: 'scaling-caching-indexing',
        title: 'Scaling, Caching & Load Balancing',
        duration: '4-5 days',
        content: `> How a system goes from one box to many without falling over.

## Learn

- Vertical vs horizontal scaling; stateless services (state in DB/Redis, not memory)
- Load balancing: L4 vs L7, health checks, sticky sessions (and avoiding them), connection draining
- Caching layers: browser → CDN → edge → app (in-proc) → distributed (Redis) → DB cache; invalidation at each
- Read scaling: replicas, read/write split, replication lag handling
- Write scaling: sharding/partitioning, hot keys, consistent hashing
- Rate limiting + load shedding + graceful degradation (serve stale, drop non-critical)
- CDN for static + cacheable dynamic; object storage for blobs

## Interview questions

- Where do you add caching in a read-heavy product page, and how do you invalidate it?
- Replication lag caused a "my update disappeared" bug — how do you fix it?
- Design rate limiting for an API gateway serving 100 services`,
      },
      {
        id: 'queues-event-driven',
        title: 'Queues & Event-Driven Architecture',
        duration: '4-5 days',
        content: `> Decoupling services with messages — the power and the failure modes.

## Learn

- Message queue (work distribution) vs event log (Kafka — replay, multiple consumers) vs pub/sub
- Event-driven patterns: event notification, event-carried state transfer, event sourcing (rarely), CQRS
- Delivery semantics: at-least-once + idempotent consumers; ordering guarantees and their cost
- Outbox pattern (DB write + event atomically), sagas for distributed transactions
- Schema/versioning for events; a schema registry; consumer-driven contracts
- Backpressure, DLQs, poison messages, replay

## Real examples

- Order placed → inventory, payment, email, analytics all react independently
- Notification system: one event fans out to push, email, SMS with per-channel retry

## Interview questions

- Design an order-processing pipeline with payment, inventory, and notifications
- The "dual write" problem — what is it and how does the outbox pattern solve it?
- Kafka vs SQS vs RabbitMQ — pick one for event sourcing, one for task distribution`,
      },
      {
        id: 'distributed-systems-reliability',
        title: 'Distributed Systems, Reliability & Fault Tolerance',
        duration: '1 week',
        content: `> The theory you need to reason about failure — kept practical.

## Learn

- CAP / PACELC in plain terms; consistency models (strong, eventual, read-your-writes, causal)
- Failure is normal: timeouts, retries with backoff + jitter, circuit breakers, bulkheads
- Idempotency, dedup, exactly-once-effect
- Redundancy, replication, quorum, leader election (conceptually)
- Health checks, readiness vs liveness, graceful degradation, load shedding
- Chaos thinking: what happens if this dependency is slow, not just down?
- **Observability as a pillar**: you can't operate distributed systems you can't trace

## Real examples

- Microservices vs modular monolith: default to a well-structured monolith; split when team/scale/deploy independence demands it
- A payment service that must never double-charge: idempotency keys + outbox + reconciliation

## Interview questions

- A downstream service is responding in 5s instead of 50ms — what protects your API?
- Strong vs eventual consistency — give a feature that needs each
- When would you split a monolith, and what's the first cut?`,
      },
      {
        id: 'worked-examples',
        title: 'Worked Examples',
        duration: 'Practice — ongoing',
        content: `> Do each one on a whiteboard: requirements → scale → API → data → high-level → bottleneck → failure/cost/security.

| System | The hard part | Key techniques |
| --- | --- | --- |
| Booking system | No double-booking under concurrency | Unique constraint / atomic \`findOneAndUpdate\`, short-lived slot locks in Redis, idempotent booking |
| E-commerce | Catalog search + cart + checkout consistency | Search index (denormalized), cart in Redis, checkout as a saga, inventory reservation |
| Payment system | Never double-charge, always reconcilable | Idempotency keys, outbox, webhook as source of truth, ledger table, reconciliation job |
| Notification system | Fan-out + per-channel retry + dedup | Event → queue → per-channel workers, user preferences, rate limits, DLQ, idempotency |
| Chat system | Delivery + ordering + scale across nodes | WebSocket + Redis pub/sub adapter, message store with since-cursor, read receipts, presence |
| File upload | Large files, flaky networks, security | Presigned multipart/resumable upload, validation + scan, CDN with signed URLs, orphan cleanup |
| Analytics / reporting | High write volume, heavy reads | Append-only ingestion → queue → columnar store / rollups, pre-aggregation, read replica, caching |

## How to practice

- One system per week. Write it up as if it were a design doc.
- Then list: 3 ways it fails, how you'd detect each, and the cost per 1k requests.`,
      },
    ],
  },
  {
    id: 'ai-foundations',
    title: 'AI Foundations',
    phases: [
      {
        id: 'ai-ml-dl-genai',
        title: 'AI vs ML vs Deep Learning vs Generative AI',
        duration: '2-3 days',
        content: `> Get the map right so you know what you're actually building (and not building).

## Learn

- **AI**: the umbrella. **ML**: systems that learn patterns from data. **Deep learning**: ML with large neural nets. **Generative AI**: models that produce new content (text, image, audio, code).
- Where you operate: you're an **application engineer** using pretrained models via APIs — not training models.
- Discriminative (classify/predict) vs generative (produce); when a classic ML model or even rules beats an LLM (cheaper, deterministic, explainable)
- The lifecycle you care about: prompt → context → model → output → evaluation → iterate
- What you will NOT do early: train/fine-tune base models, deep PyTorch, gradient math

## When NOT to use an LLM

- Deterministic logic, exact math, policy enforcement, anything needing a guaranteed format without validation, high-volume low-value classification where a cheap model or regex works

## Interview questions

- Where does "generative AI" sit inside "AI"?
- Give a problem where you'd choose classic ML or rules over an LLM
- What parts of an AI feature are deterministic engineering vs probabilistic?`,
      },
      {
        id: 'llm-fundamentals',
        title: 'LLM Fundamentals',
        duration: '1 week',
        content: `> The mechanics that decide your latency, cost, quality, and failure modes.

## Learn

- **Tokens**: text ≈ tokens (~4 chars/token EN); you pay per input + output token; everything is measured in tokens
- **Context window**: the max tokens (prompt + history + retrieved docs + output) the model can consider; management strategy when you exceed it (trim, summarize, retrieve)
- **Transformers & attention** (conceptual): the model predicts the next token using self-attention over the context; "attention" = weighting which earlier tokens matter. You don't implement this — you reason about it (why order and phrasing matter, why long context degrades).
- **Inference**: autoregressive token-by-token generation; why output tokens cost latency; TTFT vs total time; streaming
- **Temperature / top-p**: randomness controls; low for extraction/classification, higher for creative
- Determinism: even temp 0 isn't fully deterministic across versions; pin model versions
- System vs user vs assistant messages; few-shot examples; the "lost in the middle" effect

## Production checklist

- Pin exact model versions; log model + prompt version per request
- Count tokens before sending (\`tiktoken\`-style); enforce a max context budget
- Set \`max_tokens\`, timeouts, and stop sequences deliberately

## Common mistakes

- Stuffing the whole context window "just in case" (cost + quality drop)
- Assuming temp 0 = reproducible forever
- Ignoring output token cost (often the bigger half)

## Interview questions

- What is a token and why does it matter for cost and latency?
- Context window is 128k — you have 400k of docs. Now what?
- What does temperature actually change?`,
      },
      {
        id: 'embeddings',
        title: 'Embeddings & Vector Search',
        duration: '3-4 days',
        content: `> How machines measure "meaning-similarity" — the core of RAG and semantic features.

## Learn

- An embedding = a vector (list of floats) representing meaning; similar meaning → nearby vectors
- Similarity metrics: cosine (most common), dot product, Euclidean
- Embedding models: dimensions, max input length, cost, domain fit; keep the model consistent for a corpus (re-embed everything if you change it)
- Vector index types: flat (exact), HNSW, IVF — recall vs speed vs memory
- Vector databases: pgvector, Qdrant, Pinecone, Weaviate, Mongo Atlas Vector Search — hosted vs self-host trade-offs
- Chunk-then-embed; store text + metadata + vector together
- Uses beyond RAG: dedup, clustering, classification, recommendation, semantic cache

## Common mistakes

- Mixing embeddings from two different models in one index
- Embedding huge chunks (dilutes the signal) or tiny ones (loses context)
- Assuming vector search alone beats keyword — hybrid usually wins

## Interview questions

- What is an embedding and how is similarity computed?
- HNSW vs flat index — when does approximate search hurt you?
- You switched embedding models — what has to happen to the existing index?`,
      },
      {
        id: 'model-selection',
        title: 'Model Selection',
        duration: '2-3 days',
        content: `> Picking the right model per task is a cost/latency/quality optimization, done per feature.

## Learn

- Axes: capability, context window, latency, price (input vs output), multimodality, tool-calling quality, hosting (API vs self-host), data-residency/privacy
- Tiering: a small/cheap/fast model for routing, extraction, classification; a frontier model for hard reasoning; route dynamically
- Open-weight models (Llama, Mistral, Qwen) via a provider or self-hosted — when privacy or cost justifies the ops
- Benchmarks are a starting point; **your eval set on your task** is the real signal
- Version pinning + a migration plan; models get deprecated
- Provider abstraction layer so you can switch without rewriting

## When NOT to use the biggest model

- Simple extraction, classification, short rewrites, routing — a small model is 10-50x cheaper and faster

## Interview questions

- How do you choose a model for a new AI feature?
- A cheaper model passes your evals at 95% of the quality for 20% of the cost — do you switch?
- How do you protect against a provider deprecating your model?`,
      },
    ],
  },
  {
    id: 'llm-app-development',
    title: 'LLM Application Development',
    phases: [
      {
        id: 'llm-apis',
        title: 'LLM APIs & SDKs',
        duration: '1 week',
        content: `> The building block: calling a model reliably from your Node/Next backend.

## Learn

- Chat completions API shape (messages, roles), across OpenAI / Anthropic / Gemini / open models
- Provider SDKs and a thin abstraction layer (or a library like Vercel AI SDK) so features aren't provider-locked
- Parameters: \`temperature\`, \`max_tokens\`, \`top_p\`, \`stop\`, \`seed\`, response format
- Streaming vs non-streaming responses
- Rate limits (RPM/TPM), 429 handling, exponential backoff + jitter, request queuing
- Timeouts, cancelation (\`AbortController\`), partial-response handling
- Batching / parallelization with concurrency limits
- Where the call lives: never from the client (key exposure) — always a backend route

## Production checklist

- One \`llmClient\` module: retries, timeout, logging (model, tokens, cost, latency, prompt version), fallback model
- Per-user + global rate limiting in front of the provider
- Secrets server-side only

## Common mistakes

- Calling the LLM API directly from the browser
- No retry/backoff → one 429 fails the user
- Not logging token counts → no cost visibility

## Interview questions

- Wrap an LLM call for production — what does the wrapper add?
- How do you handle provider rate limits under load?
- Why must the API key never reach the client, and how do you enforce it?`,
      },
      {
        id: 'prompt-engineering',
        title: 'Prompt Engineering (Version-Controlled)',
        duration: '1 week',
        content: `> Prompts are code. They live in the repo, get reviewed, versioned, and tested.

## Learn

- Structure: role/system, task, context, constraints, output format, examples (few-shot)
- Techniques: clear instructions, delimiters, step-by-step for reasoning tasks, negative constraints sparingly, "if you don't know, say so"
- Few-shot vs zero-shot; example selection; keeping examples current
- Prompt templates with typed variables; escaping user input; separating instructions from data
- **Prompt injection**: user content can try to override instructions — treat retrieved/user text as untrusted, never as instructions
- Prompt versioning: store prompts as files/records with an id + version; log which version produced each output
- Iterating with an eval set, not by eyeballing one example

## Production checklist

- Prompts in version control with a version id logged per request
- User/retrieved text clearly delimited and labeled as data, not instructions
- A regression eval runs when a prompt changes

## Common mistakes

- Concatenating user input straight into the instruction block
- "Improving" a prompt with no eval to catch regressions
- Over-long prompts with contradictory rules

## Interview questions

- How do you stop a user message from hijacking the system prompt?
- How do you know a prompt change didn't make things worse?
- Few-shot vs zero-shot — trade-offs`,
      },
      {
        id: 'structured-output-tool-calling',
        title: 'Structured Outputs & Function/Tool Calling',
        duration: '1 week',
        content: `> Turning free text into typed data and letting the model trigger your code.

## Learn

- Structured output: JSON mode / JSON schema / provider "structured outputs"; always validate with \`zod\` even when the provider guarantees schema
- Designing schemas the model fills reliably (flat-ish, described fields, enums over free text)
- **Tool / function calling**: you describe tools (name, description, params schema); model picks one and returns arguments; you execute and return the result; loop
- Tool design: small, single-purpose, well-described, validated inputs, safe outputs (no secrets, bounded size)
- Parallel tool calls, forced tool choice, "no tool" path
- Error handling: invalid args, tool failure, model ignoring the schema → retry / repair / fallback

## Production checklist

- Every tool: input validated, output size-capped, permission-checked, logged
- LLM output parsed through a schema; parse failure has a repair or fallback path
- Tools can't do anything the current user isn't allowed to do

## Common mistakes

- Trusting model JSON without validation
- Giving the model a "run SQL" or "call any URL" tool
- Vague tool descriptions → wrong tool picked

## Interview questions

- Walk through one full tool-calling round trip
- The model returned malformed JSON — what's your handling chain?
- How do you scope what a tool is allowed to do?`,
      },
      {
        id: 'streaming-responses',
        title: 'Streaming Responses',
        duration: '3-4 days',
        content: `> Perceived latency is the product. Stream tokens to the UI as they generate.

## Learn

- Transport: Server-Sent Events (SSE) or a streamed \`ReadableStream\` from a Next.js route handler; WebSocket only if you already have one
- Server: consume the provider's token stream, forward chunks, handle client disconnect → cancel the upstream call (stop paying for tokens)
- Client: incremental render, markdown/code streaming, autoscroll, stop button, error mid-stream
- Streaming structured data (partial JSON) and tool-call events interleaved with text
- Backpressure, chunk buffering, flushing; proxies/CDNs that buffer SSE (disable buffering)
- Resumability / retry on a dropped stream

## Production checklist

- Client disconnect aborts the provider request (\`AbortController\` wired through)
- Mid-stream errors surface to the user, not a silent hang
- TTFT (time to first token) tracked as a key metric

## Common mistakes

- Not canceling the upstream call when the user navigates away (cost leak)
- A proxy buffering the whole response (streaming "works" locally, not in prod)
- No stop button

## Interview questions

- SSE vs WebSocket for LLM streaming — pick and justify
- User closes the tab mid-response — what should happen server-side?
- How do you stream tool calls and text in the same response?`,
      },
      {
        id: 'multimodal-ai',
        title: 'Multimodal AI (Vision & Audio)',
        duration: '3-4 days',
        content: `> Images and audio in and out — same engineering discipline, new inputs.

## Learn

- **Vision input**: passing images to a model (URL vs base64), size/detail settings, cost implications, OCR-style extraction, chart/screenshot understanding, structured output from an image
- **Image generation / editing**: when it's product vs gimmick; prompt + reference images; content safety
- **Audio**: speech-to-text (transcription, diarization, timestamps) and text-to-speech (voice, latency, streaming audio)
- Realtime/voice APIs for conversational apps (latency budget, interruption handling)
- Pre/post-processing: resize/compress images, chunk long audio, validate file types, strip EXIF
- Cost: images and audio are token-priced too and can be expensive; cache aggressively

## Common mistakes

- Sending full-resolution photos when a downscaled image works
- No file validation on uploads feeding a vision model (injection via image text, huge files)
- Ignoring transcription errors downstream

## Interview questions

- Design "snap a receipt → structured expense" — the full pipeline
- Where does cost blow up in a voice assistant and how do you contain it?
- How do you validate and preprocess user images before a vision call?`,
      },
      {
        id: 'reliability-cost',
        title: 'Reliability & Cost Optimization',
        duration: '3-4 days',
        content: `> Making AI features cheap enough and stable enough for real traffic.

## Learn

- **Cost levers**: smaller model where it suffices, model routing, trimming context/history, caching (exact + semantic), shorter outputs, batching, caching embeddings, prompt compression
- **Reliability**: timeouts, retries with backoff, fallback model, fallback to non-AI path, graceful "try again" UX, circuit breaker on the provider
- Caching: exact-match cache (hash of prompt+params) and semantic cache (embedding similarity) with careful TTL and correctness checks
- Token budgeting per feature; hard caps per user/day; spend alerts
- Load testing AI endpoints (concurrency, provider limits, cost per run)
- Cost attribution: tag every call with feature, user/tenant, model, prompt version

## Production checklist

- Per-request cost logged and aggregated into a dashboard
- Per-user/tenant rate + spend limits enforced
- Fallback path when the provider is down or slow

## Common mistakes

- No spend cap → one abusive user or loop burns thousands
- Frontier model for every call including trivial ones
- Cache with no correctness/expiry thinking → stale or wrong answers

## Interview questions

- Feature costs $0.04/request at 50k requests/day — how do you cut it in half?
- Provider is down for 20 minutes — what does the user see?
- Exact vs semantic caching for LLM responses — risks of each`,
      },
    ],
  },
  {
    id: 'rag-production',
    title: 'RAG in Production',
    phases: [
      {
        id: 'rag-pipeline',
        title: 'The RAG Pipeline & Ingestion',
        duration: '1 week',
        content: `> Retrieval-Augmented Generation: ground the model in your data so answers are current and cite sources.

\`\`\`flow
Sources (PDF, docs, DB, web, tickets)
Extract text + structure + metadata
Chunk
Embed
Store in vector DB (+ keyword index)
Query -> retrieve -> rerank -> assemble context
LLM -> answer with citations
Evaluate + iterate
\`\`\`

## Learn (ingestion)

- Loaders per source type; PDF layout/tables/scans (OCR), HTML boilerplate stripping, code, spreadsheets
- Preserve structure: headings, sections, page numbers, source URL, timestamps, permissions → all as metadata
- Deduplication, normalization, language detection
- Incremental ingestion: detect changes, upsert, delete removed docs (don't rebuild everything)
- Handling access control: store \`allowedRoles\`/\`tenantId\` on each chunk; filter at query time

## When NOT to use RAG

- Small static knowledge that fits in the prompt; tasks needing exact computation; when fine-tuning or a tool/API call is the right tool

## Interview questions

- Why RAG instead of fine-tuning or a bigger context window?
- How do you keep the index in sync when source docs change hourly?
- How does per-user document access work in a shared vector index?`,
      },
      {
        id: 'chunking-embeddings',
        title: 'Chunking & Embedding Strategy',
        duration: '3-4 days',
        content: `> Chunking quality sets the ceiling on retrieval quality.

## Learn

- Strategies: fixed-size + overlap, recursive by structure (headings/paragraphs), semantic chunking, per-format (code by function, tables as units)
- Sizing: big enough to be self-contained, small enough to be specific (~200-500 tokens is a common start); tune with evals
- Overlap to avoid cutting mid-thought; contextual headers ("Section X > Y" prepended to each chunk)
- Metadata per chunk: source, title, section, page, date, permissions, doc type
- Parent/child (retrieve small, feed larger context) and "sentence-window" retrieval
- Embedding: consistent model, batch calls, store text+vector+metadata together, re-embed on model change

## Common mistakes

- One-size chunking across PDFs, code, and chat logs
- No overlap → answers split across a boundary get missed
- Losing the source metadata → no citations, no access filtering

## Interview questions

- Walk through choosing a chunking strategy for a mixed corpus
- Parent-child retrieval — what problem does it solve?
- How do you evaluate whether your chunking is good?`,
      },
      {
        id: 'vector-search-hybrid-rerank',
        title: 'Retrieval: Hybrid Search, Filtering & Reranking',
        duration: '1 week',
        content: `> Getting the right chunks into the context — the part that actually determines answer quality.

## Learn

- Vector (semantic) search: top-k, similarity threshold, over-fetch then filter
- Keyword/BM25 search: exact terms, names, codes, acronyms where embeddings are weak
- **Hybrid search**: run both, fuse scores (Reciprocal Rank Fusion), usually beats either alone
- **Metadata filtering**: pre-filter by tenant, permissions, date, doc type before/with the vector search
- **Reranking**: a cross-encoder / rerank model reorders the top ~20-50 to the best ~5; big quality win
- Query transformation: rewriting, expansion, HyDE, multi-query, decomposition for complex questions
- Context assembly: order, dedup, token budget, include citations/metadata, "no relevant context" path

## Production checklist

- Permissions filtered at retrieval, not just hoped for in the prompt
- Reranking on top-k before context assembly
- "I couldn't find this in the docs" is a real, tested answer path

## Common mistakes

- Vector-only search failing on exact identifiers and names
- Stuffing 20 chunks into context (cost, "lost in the middle", worse answers)
- No threshold → irrelevant chunks retrieved for out-of-scope questions

## Interview questions

- Why does hybrid search beat pure vector search? Give an example query for each.
- What does a reranker do and where does it sit in the pipeline?
- Retrieval returned nothing relevant — what should the system do?`,
      },
      {
        id: 'rag-evaluation',
        title: 'RAG Evaluation & Context Optimization',
        duration: '1 week',
        content: `> If you can't measure retrieval and answer quality, you can't improve it or trust it.

## Learn

- Build a **golden set**: representative questions + expected answers/sources, from real usage
- Retrieval metrics: hit rate / recall@k, MRR, precision — "did the right chunk get retrieved?"
- Answer metrics: faithfulness/groundedness (answer supported by context?), relevance, completeness, correctness
- Evaluators: exact/regex for facts, LLM-as-judge (with rubric) for open answers, human review for a sample
- Frameworks: Ragas / promptfoo / DeepEval / custom harness
- Offline evals in CI on every prompt/chunking/model change; online signals (thumbs, follow-ups, citations clicked)
- Context optimization driven by evals: chunk size, k, reranking, prompt, model — change one, re-measure

## Production checklist

- A golden set that grows from production questions
- Eval suite runs in CI; a regression blocks the change
- Dashboard: retrieval hit rate + faithfulness over time

## Common mistakes

- "Looks good" on 3 hand-picked questions
- Changing chunking + model + prompt together, can't tell what helped
- Only measuring the answer, never retrieval

## Interview questions

- How do you measure whether a RAG answer is "correct" without a human each time?
- Retrieval recall@5 is 60% — how do you diagnose and improve it?
- What's the difference between faithfulness and relevance?`,
      },
      {
        id: 'rag-security-hallucination',
        title: 'RAG Security & Hallucination Handling',
        duration: '3-4 days',
        content: `> Retrieved content is untrusted input, and a confident wrong answer is worse than "I don't know".

## Learn

- **Prompt injection via documents**: a retrieved chunk containing "ignore previous instructions..." — mitigations: delimit + label context as data, instruction hierarchy, output filtering, don't let retrieved text trigger tools unchecked
- Data exfiltration: model repeating secrets/PII from context; least-context principle, redaction on ingest
- Access control: enforce per-user/tenant filtering at retrieval; test cross-tenant leakage explicitly
- Hallucination reduction: "answer only from context", require citations, confidence/"not found" path, lower temperature, groundedness check (post-hoc verify answer against sources)
- Citation UX: link every claim to a source chunk; let users verify
- Poisoning: validate/curate ingestion sources; monitor for anomalous chunks

## Production checklist

- Cross-tenant retrieval leak test in CI
- Every answer carries citations; ungrounded answers are flagged or withheld
- Retrieved text can't directly cause a tool/action without validation

## Common mistakes

- Trusting document text as if it were your own instructions
- No "not in the docs" path → model invents an answer
- Assuming the vector DB filter is applied (test it)

## Interview questions

- A retrieved PDF contains injection text — what stops it from working?
- How do you prove tenant A can't retrieve tenant B's chunks?
- Three concrete techniques to reduce hallucination in RAG`,
      },
      {
        id: 'rag-projects',
        title: 'RAG Projects',
        duration: '2-3 weeks',
        content: `> Build these two. They're the standard portfolio proof for RAG.

## Project A — PDF → AI Question Answering

- Upload PDFs (including scanned → OCR), parse layout + tables
- Chunk with structure-aware strategy, embed, store with metadata
- Hybrid retrieval + rerank, answer with page-level citations
- Conversation history, "not found" handling
- Eval set + retrieval/faithfulness dashboard, per-request cost logging

## Project B — Company Knowledge Base → AI Assistant

- Connect multiple sources (docs, wiki, tickets, DB), incremental sync
- **Per-user permissions** enforced at retrieval (this is the hard, interview-worthy part)
- Slack/web chat UI with streaming + citations
- Prompt-injection defenses, cross-tenant leak tests
- Online feedback loop (thumbs → golden set), evals in CI

## What to be able to demo

- Change a source doc → answer updates on next query
- Ask an out-of-scope question → "I don't have that"
- Show the retrieved chunks and citations for any answer
- Show the cost and latency of the last 100 queries`,
      },
    ],
  },
  {
    id: 'ai-agents',
    title: 'AI Agents',
    phases: [
      {
        id: 'agent-fundamentals',
        title: 'Agent Fundamentals: Tools & The Loop',
        duration: '1 week',
        content: `> An agent = an LLM in a loop that can call tools to gather information and take actions until a goal is met.

\`\`\`flow
Goal
LLM decides: answer, or call a tool
Execute tool -> observe result
LLM decides again (loop)
Stop condition -> final answer / action
\`\`\`

## Learn

- Agent vs workflow vs single call: use the **least powerful** option that works. Most "agent" needs are a fixed workflow with one or two LLM steps.
- The loop: reason → act (tool) → observe → repeat; step limits, stop conditions, timeouts
- **Tool design**: single-purpose, described precisely, validated inputs, bounded + safe outputs, permission-checked, logged
- ReAct-style prompting; letting the model plan then execute
- Controlling cost/latency: max steps, cheaper model for routing, cache tool results
- Frameworks: LangGraph / the provider's agent SDKs / a hand-rolled loop (start hand-rolled to understand it)

## When NOT to use an agent

- Deterministic multi-step tasks (write a workflow), single-step Q&A (just call the model), anything where an unbounded loop touching your systems is a risk you can't bound

## Interview questions

- Agent vs workflow — decision criteria, with an example of each
- What stops an agent loop from running forever or ballooning in cost?
- How do you design a tool so it's safe to expose to an LLM?`,
      },
      {
        id: 'agent-memory-planning',
        title: 'Memory, Planning & Multi-Step Workflows',
        duration: '1 week',
        content: `> Keeping the agent coherent across steps and sessions without blowing the context window.

## Learn

- **Short-term memory**: the running message list; summarize/compress older turns; keep tool results relevant only
- **Long-term memory**: store facts/preferences/past outcomes in a DB or vector store; retrieve relevant memory into context (RAG over memory)
- Working memory / scratchpad: the agent's notes for the current task; state you persist between steps
- Planning: decompose goal → sub-tasks → execute → verify; re-plan on failure
- Multi-step workflows: explicit graph/state machine for known processes (more reliable than free-form agency)
- Determinism where possible: pin the plan for repeatable business processes, let the model fill the gaps

## Production checklist

- Context budget enforced (summarize when near the limit)
- Every step's state persisted so a failed run can resume/retry
- Long-term memory writes are validated (agent can't poison its own memory with junk)

## Common mistakes

- Dumping full history every step → cost explosion, "lost in the middle"
- No persisted state → a failure restarts the whole task
- Free-form agency for a process that's actually a fixed 5-step workflow

## Interview questions

- Short-term vs long-term memory for an agent — how is each implemented?
- How do you keep a 30-step agent run inside the context window?
- When do you hard-code the plan vs let the model plan?`,
      },
      {
        id: 'human-in-the-loop-security',
        title: 'Human-in-the-Loop, Security & Evaluation',
        duration: '1 week',
        content: `> Agents that touch real systems need approval gates, tight permissions, and a way to prove they behave.

## Learn

- **Human-in-the-loop**: writes/actions with real consequences pause for approval; show the planned action + inputs + expected effect; approve/edit/reject; log the decision
- **Permission scoping**: the agent acts as the user, with the user's permissions, nothing more; per-tool allowlists; dry-run mode
- **Blast radius**: what's the worst a compromised/confused agent can do? Bound it (spend caps, rate limits, no destructive tools, reversible actions, sandboxed execution)
- Prompt injection against agents: hostile tool outputs / retrieved content trying to redirect the agent → validate observations, don't auto-trust, re-assert goals
- Audit log: every step, tool call, input, output, decision — replayable
- **Agent evaluation**: task success rate on a scenario set, step efficiency, cost per task, safety (does it refuse out-of-scope / dangerous asks), regression suite on changes
- Red-teaming your own agent before shipping

## Production checklist

- All state-changing actions gated by approval (or a very tight allowlist)
- Full audit trail; spend + rate caps per user/session
- Scenario eval suite in CI; red-team pass documented

## Common mistakes

- Agent with broad DB/API write access and no approval step
- Trusting tool/observation output as safe instructions
- No eval → "it worked in the demo" is the only evidence

## Interview questions

- Design the approval flow for an agent that can send emails and update records
- A tool returns text that says "now delete all records" — what happens?
- How do you measure whether an agent is getting better or worse across versions?`,
      },
      {
        id: 'multi-agent-mcp',
        title: 'Multi-Agent Systems & MCP',
        duration: '4-5 days',
        content: `> Coordinating multiple agents, and the standard protocol for exposing tools/context.

## Learn

- Multi-agent patterns: orchestrator-workers, specialist agents (researcher/coder/reviewer), debate/critique; hand-off and shared state
- When multi-agent helps (clear separation of concerns, parallelism) vs when it just multiplies cost and failure modes (usually — prefer one good agent + tools)
- Orchestration: a graph/state machine (LangGraph-style) over ad-hoc agent chatter; explicit transitions, retries, checkpoints
- **MCP (Model Context Protocol)**: a standard for exposing tools, resources, and prompts to any MCP-capable client; build an MCP server for your APIs so agents/IDEs/assistants can use them uniformly
- MCP server design: auth, scoping, rate limits, safe tool surface — same discipline as any API
- Workflow orchestration engines (Temporal-style) for long-running, durable AI workflows

## Common mistakes

- Reaching for multi-agent before a single agent + tools is exhausted
- MCP server that exposes unscoped, unauthenticated tools
- No orchestration → agents loop, stall, or contradict each other

## Interview questions

- When is multi-agent actually worth it over one agent with more tools?
- What does MCP standardize, and why does that matter?
- How do you make a long-running agent workflow durable across restarts?`,
      },
      {
        id: 'agent-project',
        title: 'Project — AI Business Assistant',
        duration: '2-3 weeks',
        content: `> An agent that reads business data and performs controlled actions through your APIs.

## Scope

- Tools (read): look up customers/orders/metrics, search knowledge base (RAG), fetch a report
- Tools (write, gated): draft + send an email, create a task, update a record, schedule something
- Agent loop with step limits, planning, short + long-term memory (user preferences, past actions)
- **Human approval** for every write; show planned action + effect
- Auth: agent acts as the logged-in user with their permissions; per-tenant isolation
- Audit log of every step; spend + rate caps; dry-run mode

## Non-negotiables for the demo

- Show a task it completes autonomously (all reads)
- Show a write it proposes and waits for approval on
- Show it refusing / asking for clarification on an out-of-scope or unsafe request
- Show the audit trail and cost for a completed task
- Show a hostile input (in a doc or tool result) failing to redirect it

## What this proves

You can build an agent that's useful **and** contained — the exact bar for a Level 4 AI Engineer.`,
      },
    ],
  },
  {
    id: 'ai-fullstack-production',
    title: 'AI + Full Stack in Production',
    phases: [
      {
        id: 'ai-api-architecture',
        title: 'AI API Architecture',
        duration: '1 week',
        content: `> Where AI sits in your system, as a real architectural layer.

\`\`\`flow
React / Next.js / React Native
API gateway (auth, rate limit, quota)
AI service (Node and/or Python/FastAPI)
Model router (task -> model)
Provider(s)  |  RAG (vector DB)  |  Tools / DB
Cache (exact + semantic)  ·  Observability  ·  Cost meter
\`\`\`

## Learn

- An **AI gateway/service**: single place for auth, rate limiting, quotas, model routing, caching, retries, fallback, logging, cost metering — features call it, not the provider
- Node vs Python/FastAPI: product APIs in Node; heavier AI/ML/RAG pipelines often cleaner in Python — split by responsibility, share contracts
- Async patterns: fast requests inline; long tasks (batch RAG ingest, agent runs) via queue + job status + webhook/poll/stream
- Config: prompts, model choices, feature flags as data (not deploys)
- Multi-tenant quota + isolation

## Production checklist

- No feature calls a provider SDK directly — all go through the AI service
- Long-running AI work is a job, not a 90-second HTTP request
- Model/prompt/routing changeable without a deploy

## Interview questions

- Draw your AI architecture from client to token and back
- Node vs FastAPI for the AI layer — how do you split?
- A RAG ingestion of 10k docs is requested from the UI — what happens?`,
      },
      {
        id: 'streaming-ui-conversation',
        title: 'Streaming UI & Conversation History',
        duration: '4-5 days',
        content: `> The front-end half: responsive chat UX and durable conversation state.

## Learn

- Streaming UI: incremental markdown/code, tool-call/step indicators, stop button, regenerate, error recovery, autoscroll behavior
- Optimistic user message, then streamed assistant message; retry a failed turn
- Conversation storage: messages table (role, content, tokens, model, prompt version, tool calls, cost), threads, titles
- History management for the model: window + summary of older turns; per-thread system prompt
- Multi-device sync, resume an in-progress stream, offline (mobile) queueing
- Attachments (images, files) in the conversation; rendering citations and sources
- Rate-limit / quota UX ("you've hit your limit, resets in…")

## Production checklist

- Every message persisted with metadata for debugging, evals, and cost
- Interrupted streams are recoverable or clearly failed (no infinite spinner)
- History sent to the model is bounded and summarized

## Common mistakes

- Storing only the visible text, losing model/tokens/prompt version (can't debug later)
- Sending the full unbounded history every turn
- No stop / no error state in the stream UI

## Interview questions

- How do you manage conversation history against a fixed context window?
- What do you persist per message and why?
- User switches devices mid-conversation — what's the experience?`,
      },
      {
        id: 'ai-ops-cost-versioning',
        title: 'AI Ops: Cost Tracking, Prompt Versioning & Evals',
        duration: '1 week',
        content: `> Operating AI features: knowing the cost, controlling change, catching regressions.

## Learn

- **Cost tracking**: per request log model, input/output tokens, cost, feature, user/tenant, prompt version, latency, cache hit; aggregate into dashboards + alerts; per-tenant cost attribution for pricing
- **Prompt versioning**: prompts as versioned records/files; every output logged with its prompt version; ability to roll back a prompt independently of a deploy
- **Evals as CI gates**: golden set per feature; run on every prompt/model/retrieval change; block on regression; track quality metrics over time
- Online evaluation: user feedback (thumbs, edits, follow-ups), implicit signals, sampling for human review
- Tracing: one trace per AI request spanning retrieval, model calls, tool calls (OpenTelemetry / LangSmith / Langfuse / Phoenix)
- A/B testing prompts and models with quality + cost + latency as metrics
- Model migration playbook: shadow traffic, compare evals, gradual rollout, rollback

## Production checklist

- Cost dashboard by feature and tenant; spend alerts
- No prompt/model change ships without passing evals
- Every AI request is traceable end to end

## Common mistakes

- No cost visibility until the bill arrives
- Editing prompts in place with no version, no eval
- Upgrading models blindly and shipping a quality regression

## Interview questions

- What do you log for every LLM call and what do you do with it?
- A new model version is out — what's your migration process?
- How do evals fit into your CI/CD?`,
      },
      {
        id: 'ai-security-privacy',
        title: 'AI Security, Prompt Injection & Data Privacy',
        duration: '4-5 days',
        content: `> The AI-specific attack surface and compliance obligations.

## Learn

- **Prompt injection** (direct and indirect via retrieved/tool content): instruction/data separation, least privilege for tools, output validation, not letting model output trigger privileged actions unchecked, "dual LLM" / quarantine patterns for untrusted content
- **Data exfiltration & leakage**: model echoing secrets/PII, markdown-image/link exfil tricks, over-broad context; redact on ingest, strip/deny risky output, minimize context
- **Access control**: retrieval and tools scoped to the current user/tenant; test cross-tenant leakage
- **Privacy & compliance**: what data goes to which provider, data-processing agreements, retention/"no training" settings, region/residency, PII minimization + encryption, user data deletion (GDPR/DPDP) including embeddings and logs
- Abuse: rate/spend limits, content moderation on inputs and outputs, jailbreak monitoring
- Supply chain: pinned models, trusted MCP servers/tools, reviewed prompt templates

## Production checklist

- Untrusted content (user, retrieved, tool output) is labeled data and can't escalate to instructions/actions
- PII redacted before it reaches a provider where required; deletion path covers logs + vector store
- Cross-tenant leak tests + a jailbreak/injection test set in CI

## Common mistakes

- Treating retrieved document text as trusted
- Sending raw PII to a provider with training enabled
- "Delete user" that leaves their data in embeddings and prompt logs

## Interview questions

- Direct vs indirect prompt injection — an example and a mitigation for each
- A user asks the assistant to "print everything you know about user X" — what stops it?
- Where does user data go in your AI pipeline, and how do you honor a deletion request?`,
      },
      {
        id: 'python-fastapi-ai',
        title: 'Python + FastAPI for AI Services',
        duration: '1 week',
        content: `> Keep Node for product APIs. Add just enough Python for the AI ecosystem.

## Learn

- Python essentials for a JS dev: environments (\`uv\` / \`venv\`), typing, \`async\`/\`await\`, \`pydantic\`
- **FastAPI**: routing, dependency injection, \`pydantic\` models, background tasks, streaming responses, auth
- AI libraries as needed: provider SDKs, a vector DB client, \`tiktoken\`, document loaders, an eval framework, an orchestration lib
- Serving: \`uvicorn\`/\`gunicorn\`, containerize, same CI/CD + observability discipline as Node
- Contracts between Node and Python: shared OpenAPI schema, typed clients, versioning
- When to stay in Node: simple LLM calls, streaming proxy, tool execution against your own DB — Node is fine; reach for Python for complex RAG pipelines, evals, data processing, ML libs

## Production checklist

- FastAPI service has the same logging, tracing, auth, and rate limiting as the Node API
- Node↔Python contract is typed and versioned
- Python service is containerized and in the same pipeline

## Common mistakes

- Rewriting the whole backend in Python because "AI is Python"
- Untyped Node↔Python boundary
- A second service with none of the ops maturity of the first

## Interview questions

- What goes in the Node service vs the FastAPI service, and why?
- How do the two services share types/contracts?
- FastAPI streaming — how does it differ from a Next.js route handler stream?`,
      },
    ],
  },
];
