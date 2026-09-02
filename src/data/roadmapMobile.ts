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

export const mobileRoadmapChapters: RoadmapChapter[] = [
  {
    id: 'mobile-foundations',
    title: 'Stage 1 — Mobile Foundations',
    phases: [
      {
        id: 'who-and-how',
        title: 'Who This Is For & How To Study',
        duration: 'Read first',
        content: `> A React developer who wants to ship **production-level** React Native + TypeScript apps — not tutorials, real apps in the store with crash reporting and OTA updates.

This runs **in parallel** with the main Full Stack + AI roadmap. Start it once you're solid with React hooks and TanStack Query (around month 3). Your Node/Express backend from the main track is the API these apps consume.

## Study each topic through this filter

1. What is it? 2. Why do I need it? 3. How does it work? 4. When to use it? 5. When NOT to use it? 6. Real-world example. 7. Small coding task. 8. Production implementation (errors, edge cases, security). 9. Interview questions. 10. Common mistakes.

Each phase gives you the intro, a **Learn** list, a **Production checklist**, **Interview questions**, and **Common mistakes**. You do the coding task and write the "when NOT to use it" note yourself.

## The goal

\`\`\`flow
React knowledge
RN fundamentals + navigation + UI
State + API + auth + offline
Device features
Production hardening
Native basics (bridge + debug only)
App release (both stores)
Production React Native Engineer
\`\`\``,
      },
      {
        id: 'mobile-architecture-platforms',
        title: 'Mobile App Architecture: iOS vs Android, Native vs Cross-Platform',
        duration: '2-3 days',
        content: `> Understand the platform you're really targeting before writing a line of RN.

## Learn

- App lifecycle: foreground / background / suspended / killed; what the OS does to your process
- iOS vs Android differences that leak into JS: navigation gestures, back button (Android), permissions model, background execution limits, notification behavior, safe areas / notches
- Native (Swift/Kotlin) vs cross-platform (React Native, Flutter): trade-offs — team, performance ceiling, native API access, hiring, time to market
- Where React Native fits: JS business logic + React UI, rendering to real native views; not a webview
- App store realities: review process, rejections, update latency (stores) vs instant (OTA JS)

## When NOT to use React Native

- Heavy real-time graphics/AR/games, deep OS integration as the core product, a tiny team already expert in one native platform

## Interview questions

- React Native vs Flutter vs native — decide for a fintech app, a social app, a game
- What does the OS do to a backgrounded app, and how does that affect your code?
- Name three iOS/Android differences a JS dev must handle`,
      },
      {
        id: 'react-native-architecture',
        title: 'React Native Architecture & Expo vs CLI',
        duration: '3-4 days',
        content: `> How RN actually runs, and the single biggest early decision: Expo or bare.

## Learn

- The new architecture: JSI, Fabric (renderer), TurboModules, Hermes (JS engine); the old bridge and why it was replaced
- Threads: JS thread, UI/main thread, native modules thread — jank = JS thread blocked or too many bridge/UI ops
- **Metro** bundler: resolution, transforms, the dev server, why builds differ from web
- **Expo (managed + prebuild)** vs **bare React Native CLI**: config plugins, EAS Build/Update/Submit, the "config plugin" escape hatch, when you must go bare (rare in 2026 — Expo covers most native needs)
- Default recommendation: **Expo with prebuild / config plugins**; drop to bare only when a dependency truly requires it

## Production checklist

- Hermes enabled; new architecture on unless a dependency blocks it
- EAS Build profiles for dev / preview / production
- A documented reason if you're on bare RN

## Common mistakes

- Choosing bare CLI by default and hand-maintaining native projects
- Blaming RN for jank that's a blocked JS thread
- Ejecting from Expo for something a config plugin solves

## Interview questions

- Explain the JS thread vs UI thread and what causes dropped frames
- Expo vs bare React Native — when do you actually need bare?
- What is Hermes and why does it matter?`,
      },
      {
        id: 'tooling-setup',
        title: 'Tooling: Android Studio, Xcode, Simulators, EAS',
        duration: '2-3 days',
        content: `> Get a reliable dev + build environment so you're debugging your app, not your setup.

## Learn

- Android Studio: SDK manager, AVD (emulator), \`adb\` (logcat, install, reverse), build variants
- Xcode: simulators, schemes, signing settings, Console for device logs (macOS only for iOS builds)
- Running on a real device (both platforms) — you'll hit bugs simulators hide
- **EAS Build** (cloud native builds — no local Xcode/Android toolchain needed to ship), **EAS Update** (OTA), **EAS Submit** (to stores)
- Environment management: \`.env\` per environment, \`app.config.ts\` with variants, secrets out of the repo
- TypeScript, ESLint, Prettier, absolute imports, a monorepo option if sharing code with web

## Production checklist

- One command gets a new dev to a running app on a simulator
- CI builds via EAS on merge; artifacts versioned
- No secrets or API URLs hardcoded — all from typed config

## Common mistakes

- Hardcoding \`localhost\` API URLs (device can't reach your machine — use LAN IP or a tunnel)
- Committing signing keys / \`.env\`
- Only ever testing on a simulator

## Interview questions

- How do you build an iOS app without a Mac?
- How do you point the app at dev vs staging vs prod APIs?
- What's in your \`adb\` / logcat workflow?`,
      },
      {
        id: 'debugging',
        title: 'Debugging React Native',
        duration: '2-3 days',
        content: `> Know your tools before you need them at 2am.

## Learn

- React Native DevTools / Flipper: inspector, network, logs, React DevTools, performance
- Hermes debugger, breakpoints, \`console.log\` discipline
- Native logs: \`adb logcat\` (Android), Xcode Console / \`os_log\` (iOS) — where JS errors don't reach
- Network debugging: proxy (Proxyman/Charles), inspecting HTTPS, cert pinning implications
- Performance: the RN performance monitor, JS FPS vs UI FPS, systrace/Perfetto for native
- Reproducing release-only bugs (Hermes optimizations, minification, missing dev warnings)
- Source maps for release crashes (Sentry)

## Common mistakes

- Debugging only in dev mode and shipping a release-only crash
- No source maps uploaded → unreadable crash stacks
- Ignoring native logs when JS looks fine

## Interview questions

- A bug only happens in release builds — how do you approach it?
- How do you inspect network traffic from the app?
- JS FPS is fine but the UI stutters — where do you look?`,
      },
    ],
  },
  {
    id: 'rn-fundamentals',
    title: 'Stage 2 — React Native Fundamentals',
    phases: [
      {
        id: 'components-props-state-hooks',
        title: 'Components, Props, State & Hooks in RN',
        duration: '3-4 days',
        content: `> Your React knowledge transfers. The differences are the primitives and the constraints.

## Learn

- Core components: \`View\`, \`Text\` (all text must be inside \`Text\`), \`Image\`, \`ScrollView\`, \`Pressable\` (over \`TouchableOpacity\`), \`TextInput\`
- No DOM, no CSS files — style objects, \`StyleSheet.create\`, no cascade
- Hooks work as-is; \`useWindowDimensions\`, \`useColorScheme\`, \`AppState\`
- Lists are special — never \`.map\` a long list in a \`ScrollView\` (see [[lists-flatlist-sectionlist]])
- Touch handling, \`hitSlop\`, pointer events, gesture basics (\`react-native-gesture-handler\`)
- Fast Refresh, and what forces a full reload

## Production checklist

- All tappable targets ≥ 44pt, with \`hitSlop\` where needed
- No layout work in render that could be memoized
- Text scaling (\`allowFontScaling\`) considered for accessibility

## Common mistakes

- Raw string not wrapped in \`<Text>\` (crashes)
- \`ScrollView\` with hundreds of children
- Assuming \`onPress\` areas are big enough on device

## Interview questions

- Differences between styling in RN vs web React
- \`Pressable\` vs \`TouchableOpacity\` — why prefer \`Pressable\`?
- Why can't you render a big list in a \`ScrollView\`?`,
      },
      {
        id: 'navigation',
        title: 'Navigation: Stack, Tabs, Drawer, Deep Linking',
        duration: '4-5 days',
        content: `> Navigation is app architecture. Get the tree and the typing right early.

## Learn

- **React Navigation** (or Expo Router — file-based, recommended for new apps): stack, bottom tabs, drawer, nested navigators
- Typed routes and params (TypeScript param lists); passing + reading params safely
- Navigation lifecycle: \`focus\`/\`blur\` events, \`useIsFocused\`, refetch on focus
- Headers, gestures, modal presentation, back behavior (Android hardware back)
- **Deep linking + universal links / App Links**: URL → screen, auth-gated deep links, cold-start vs warm-start handling
- Auth flow pattern: separate auth stack vs app stack, conditional on token state
- State persistence / restoring navigation state

## Production checklist

- Route params fully typed; no \`any\` navigation
- Deep links tested cold-start, backgrounded, and logged-out
- Android hardware back handled on every screen that needs it

## Common mistakes

- Deep link that assumes the app was already open and authed
- Untyped params → runtime crashes
- Refetching on every focus without caching

## Interview questions

- Design the navigator tree for an app with auth, tabs, and a checkout modal
- How do deep links behave when the app is killed vs backgrounded?
- How do you gate a deep link behind login?`,
      },
      {
        id: 'platform-specific-code',
        title: 'Platform-Specific Code & Safe Areas',
        duration: '2-3 days',
        content: `> Write once, adjust per platform where the OS demands it.

## Learn

- \`Platform.OS\`, \`Platform.select\`, \`.ios.tsx\` / \`.android.tsx\` file extensions
- \`SafeAreaView\` / \`react-native-safe-area-context\`: notches, dynamic island, home indicator, status bar, navigation bar
- Status bar styling per screen; edge-to-edge (Android 15+)
- Platform UI conventions: iOS back-swipe, Android ripple, date pickers, share sheets, action sheets
- Density and screen size handling; \`PixelRatio\`

## Production checklist

- Every screen respects safe-area insets (no content under the notch or home indicator)
- Status bar style set intentionally per screen
- Platform conventions followed (users notice when they're not)

## Common mistakes

- Hardcoded top padding instead of safe-area insets
- iOS-only design shipped to Android untested
- Content clipped by the home indicator

## Interview questions

- How do you handle notches and the home indicator across devices?
- \`Platform.select\` vs platform file extensions — when to use each?
- What Android-specific behaviors must a JS dev handle?`,
      },
      {
        id: 'keyboard-handling',
        title: 'Keyboard Handling',
        duration: '1-2 days',
        content: `> One of the most common sources of "the form is broken on iPhone" bugs.

## Learn

- \`KeyboardAvoidingView\` (behavior differs iOS vs Android), \`keyboardVerticalOffset\`
- \`react-native-keyboard-controller\` for reliable cross-platform behavior
- \`ScrollView\`/\`FlatList\` \`keyboardShouldPersistTaps\`, \`keyboardDismissMode\`
- Dismissing on tap outside, on scroll, on submit
- Input focus management, \`returnKeyType\`, \`onSubmitEditing\` chaining between fields
- \`softwareKeyboardLayoutMode\` / \`windowSoftInputMode\` on Android

## Common mistakes

- Submit button hidden behind the keyboard
- Taps "not working" because \`keyboardShouldPersistTaps\` isn't set
- Different behavior on the two platforms shipped without testing both

## Interview questions

- Why does \`KeyboardAvoidingView\` need different \`behavior\` per platform?
- A user can't tap a button while the keyboard is open — what's wrong?
- How do you move focus from one field to the next on "return"?`,
      },
    ],
  },
  {
    id: 'ui-development',
    title: 'Stage 3 — UI Development',
    phases: [
      {
        id: 'layout-flexbox-responsive',
        title: 'Layout, Flexbox & Responsive Design',
        duration: '3-4 days',
        content: `> Flexbox is the whole layout system. Learn its RN-specific defaults.

## Learn

- RN flexbox defaults differ from web: \`flexDirection: 'column'\`, \`alignContent\`, \`flex: 1\` semantics
- \`useWindowDimensions\` for responsive layouts; orientation changes; tablets / foldables / large screens
- Density-independent units (dp), \`PixelRatio\`, hairline borders
- Styling systems: \`StyleSheet\`, or NativeWind (Tailwind for RN), or a styled library, or a design-system component kit (Tamagui, gluestack)
- Theming: light/dark via \`useColorScheme\`, design tokens, a theme provider
- Reusable spacing/typography scale; avoiding magic numbers

## Production checklist

- Layout works on a small phone and a tablet, portrait and landscape (or orientation locked deliberately)
- Dark mode fully supported, not half-done
- One spacing/type scale, used everywhere

## Common mistakes

- Assuming web flexbox defaults
- Fixed pixel widths that overflow small screens
- Dark mode that misses a few screens

## Interview questions

- How does RN flexbox differ from web?
- How do you build a layout that adapts to phone vs tablet?
- How do you implement theming and dark mode?`,
      },
      {
        id: 'lists-flatlist-sectionlist',
        title: 'Lists: FlatList, SectionList & FlashList',
        duration: '3-4 days',
        content: `> Lists are where mobile apps live and die on performance.

## Learn

- \`FlatList\` / \`SectionList\`: \`keyExtractor\`, \`renderItem\`, \`getItemLayout\`, \`windowSize\`, \`maxToRenderPerBatch\`, \`removeClippedSubviews\`
- **\`@shopify/flash-list\`**: the default for any non-trivial list — recycling, far less jank
- Memoized row components; stable keys; avoiding inline functions/objects in \`renderItem\`
- Pull-to-refresh, infinite scroll / pagination, footer loaders, empty state
- Sticky headers, separators, horizontal lists, grids (\`numColumns\`)
- Image-heavy lists: fixed dimensions, caching, lazy load, placeholders

## Production checklist

- Long lists use FlashList (or FlatList tuned) — measured at 60fps on a mid-range device
- Rows memoized; \`keyExtractor\` returns a stable unique id
- Loading / empty / error / end-of-list states all handled

## Common mistakes

- \`.map()\` over a big array inside a \`ScrollView\`
- New arrow function per row on every render
- Index as key → wrong item state after reorder/filter

## Interview questions

- FlatList vs FlashList — what does recycling change?
- Your list janks while scrolling — checklist to fix it
- How do you implement infinite scroll with a pull-to-refresh?`,
      },
      {
        id: 'forms-validation-states',
        title: 'Forms, Validation & UI States',
        duration: '2-3 days',
        content: `> Every real app is mostly forms and the four states of every screen.

## Learn

- \`react-hook-form\` + \`zod\` resolver; controlled inputs, field arrays, dependent fields
- Input types: masked inputs, numeric, OTP, date/time pickers, pickers/selects, multi-select, file/image pickers
- Inline validation, error summaries, disabled-while-submitting, success feedback
- **The four states on every screen**: loading (skeletons), empty (with a call to action), error (with retry), and content
- Accessibility: labels, \`accessibilityLabel\`, focus order, error announcements, dynamic type

## Production checklist

- Every screen explicitly renders loading / empty / error / content
- Forms disable submit while pending and surface server errors per field
- Inputs are accessible (labels, roles, hints)

## Common mistakes

- No empty state ("is it broken or just empty?")
- Double submit because the button isn't disabled
- Client validation only; server errors ignored

## Interview questions

- What are the four states of a data screen and how do you design each?
- How do you show a server-side validation error on the right field?
- How do you build an OTP input?`,
      },
      {
        id: 'images-fonts-icons',
        title: 'Images, Fonts & Icons',
        duration: '2 days',
        content: `> Assets are a top cause of bloat, jank, and slow first render.

## Learn

- \`expo-image\` (caching, placeholders, transitions, priority) over the core \`Image\`
- Remote vs bundled images; \`require\` for local, URI for remote; \`resizeMode\`
- Responsive images: request the right size from your CDN; \`@2x\`/\`@3x\`; WebP/AVIF
- Caching, prefetch, blurhash/thumbhash placeholders
- Fonts: \`expo-font\` / static linking, loading state, fallback, variable fonts
- Icon sets (\`@expo/vector-icons\`), or an SVG icon system (\`react-native-svg\`)
- Vector graphics with \`react-native-svg\`; when to rasterize

## Production checklist

- Remote images are sized by the server/CDN, cached, and have placeholders
- Fonts preloaded; no flash of unstyled/again-laid-out text
- App bundle audited for oversized bundled assets

## Common mistakes

- Loading full-resolution images into small thumbnails
- No caching → re-download on every scroll
- Giant bundled PNGs inflating the app size

## Interview questions

- How do you make an image-heavy feed scroll smoothly?
- \`expo-image\` vs core \`Image\` — what do you gain?
- How do you handle @2x/@3x and WebP?`,
      },
      {
        id: 'animations-gestures',
        title: 'Animations & Gestures',
        duration: '3-4 days',
        content: `> Smooth animation is a native-app expectation. Run it on the UI thread.

## Learn

- **\`react-native-reanimated\`**: worklets, shared values, \`useAnimatedStyle\`, animations that run on the UI thread (not blocked by JS work)
- **\`react-native-gesture-handler\`**: pan, pinch, swipe; composing gestures; native driver
- Layout animations, entering/exiting animations, shared element transitions
- Common patterns: swipe-to-delete, bottom sheet (\`@gorhom/bottom-sheet\`), drag-to-reorder, parallax header, skeleton shimmer
- \`Animated\` (core) vs Reanimated — prefer Reanimated for anything non-trivial
- 60/120fps target; measuring dropped frames; avoiding JS-thread animation

## Production checklist

- Interactive animations run on the UI thread (Reanimated worklets), verified at 60fps on device
- Gestures feel native (velocity, rubber-banding, cancelation)
- Reduced-motion accessibility setting respected

## Common mistakes

- Animating via \`setState\` in a loop
- Core \`Animated\` without \`useNativeDriver\` for layout props it can't drive
- Janky bottom sheet because it's JS-driven

## Interview questions

- Why does Reanimated run animations on the UI thread and why does that matter?
- Build swipe-to-delete — gesture + animation approach
- \`useNativeDriver\` — what can and can't it animate?`,
      },
    ],
  },
  {
    id: 'state-api',
    title: 'Stage 4 — State & API Integration',
    phases: [
      {
        id: 'data-fetching-react-query',
        title: 'Data Fetching with TanStack Query',
        duration: '3-4 days',
        content: `> Server state is not app state. Let a query library own caching, retries, and sync.

## Learn

- \`axios\`/\`fetch\` wrapper: base URL per environment, timeout, auth header, error normalization
- **TanStack Query**: query keys, staleness, cache time, background refetch, \`refetchOnReconnect\`/\`AppState\`
- Mutations: optimistic updates, rollback, invalidation, \`onSettled\`
- Infinite queries for pagination; \`select\` for derived data
- Query cancelation, dependent queries, prefetching on navigation
- Persisting the query cache (offline hydration) with \`AsyncStorage\`/MMKV persister
- Error + retry policy per query type

## Production checklist

- All server data goes through Query; no ad-hoc \`useEffect\` + \`fetch\`
- Mutations are optimistic where it improves UX and roll back on failure
- Cache persisted so the app opens with last-known data offline

## Common mistakes

- Storing fetched data in Redux/Zustand and hand-syncing it
- Unstable query keys → cache misses / loops
- No cancelation → race conditions on fast navigation

## Interview questions

- Why separate server state from client state?
- Walk through an optimistic update with rollback
- How do you make the app usable offline with cached data?`,
      },
      {
        id: 'global-state',
        title: 'Global / Client State',
        duration: '2 days',
        content: `> Keep it small. Most "global state" is either server state or belongs to a screen.

## Learn

- \`useState\`/\`useReducer\` + Context for simple cross-screen state (auth status, theme)
- **Zustand** for app-wide client state with selectors (minimal boilerplate) — the common default
- **Redux Toolkit** when you need middleware, time-travel debugging, or a large team convention
- MMKV (\`react-native-mmkv\`) for fast synchronous persisted key-value (over \`AsyncStorage\` for hot paths)
- Deriving state vs storing it; selectors to avoid re-renders
- Persisting slices (and what should never be persisted)

## Common mistakes

- Putting server data in the global store
- One giant store object causing app-wide re-renders
- Persisting sensitive data (tokens) in plain \`AsyncStorage\`/MMKV without encryption

## Interview questions

- Context vs Zustand vs Redux Toolkit for a mobile app — decision criteria
- What belongs in global state vs server cache vs screen state?
- \`AsyncStorage\` vs MMKV — trade-offs`,
      },
      {
        id: 'auth-secure-storage',
        title: 'Authentication & Secure Token Storage',
        duration: '3-4 days',
        content: `> The mobile version of the auth phase from the main roadmap — the storage rules are different and stricter.

## Learn

- Login → receive **access + refresh tokens**; short-lived access, long-lived rotating refresh
- **Secure storage**: \`expo-secure-store\` / Keychain (iOS) / Keystore (Android) for tokens — **never** \`AsyncStorage\`/MMKV unencrypted, never Redux-persist
- Silent refresh: interceptor catches 401 → refresh → retry once → on refresh failure, log out
- Refresh-token rotation + reuse detection (server side, from the main roadmap)
- Biometric unlock (Face ID / fingerprint) to gate app or re-auth
- OAuth / social login (\`expo-auth-session\`, PKCE), Sign in with Apple (required if you offer other social logins)
- Logout: clear secure store, clear query cache, reset navigation, revoke refresh token server-side
- Deep-link + auth interaction (open a gated screen while logged out → login → continue)

## Production checklist

- Tokens only in Keychain/Keystore; verified they're not in any JS-readable store
- One concurrent refresh (mutex) — parallel 401s don't fire N refreshes
- Logout is complete: storage, cache, nav, server revocation

## Common mistakes

- Tokens in \`AsyncStorage\` / redux-persist
- Multiple simultaneous refresh calls on a burst of 401s
- "Logout" that leaves cached user data on screen

## Interview questions

- Where do you store tokens on device and why not \`AsyncStorage\`?
- Design the 401 → refresh → retry interceptor, including the failure path
- How does biometric auth fit into the token flow?`,
      },
      {
        id: 'api-interceptors-offline',
        title: 'API Interceptors & Offline Handling',
        duration: '2-3 days',
        content: `> Mobile networks are hostile: slow, flaky, and often absent. Design for it.

## Learn

- Request interceptors: auth header, correlation id, base URL, request signing
- Response interceptors: token refresh, error mapping, retry policy, logging
- Connectivity: \`@react-native-community/netinfo\`, online/offline UI, "reconnecting" banner
- Offline reads: serve from persisted Query cache / local DB
- Offline writes: queue mutations, replay on reconnect, conflict handling, idempotency keys (from the main roadmap)
- Local database options: SQLite (\`expo-sqlite\`, Drizzle), WatermelonDB, or a sync engine for offline-first apps
- Timeouts, exponential backoff, circuit-breaking a dead endpoint

## Production checklist

- App is usable read-only when offline; clear indication of stale data
- Queued writes replay safely (idempotent) and surface conflicts
- Every request has a timeout and a bounded retry

## Common mistakes

- Infinite spinner with no network
- Replaying queued writes without idempotency → duplicates
- No timeout → requests hang forever on a captive portal

## Interview questions

- Design offline-first note-taking: reads, writes, sync, conflicts
- What does your axios interceptor stack do, top to bottom?
- How do you replay offline writes without creating duplicates?`,
      },
    ],
  },
  {
    id: 'device-features',
    title: 'Stage 5 — Device Features',
    phases: [
      {
        id: 'camera-gallery-files',
        title: 'Camera, Gallery & Files',
        duration: '2-3 days',
        content: `> Capture, pick, compress, upload — the pipeline behind avatars, documents, and receipts.

## Learn

- \`expo-image-picker\` (gallery + camera), \`expo-camera\` / \`react-native-vision-camera\` for custom capture, scanning, frame processors
- \`expo-document-picker\` for files; \`expo-file-system\` for read/write/cache/download
- Client-side compression/resize before upload (\`expo-image-manipulator\`); strip EXIF/location
- Upload: presigned URL → direct to S3 (from the main roadmap), progress, cancel, resume, retry on flaky network
- Permissions flow (see [[biometrics-permissions]]); handling "denied" and "limited" (iOS photo access)
- Large media: chunked upload, background upload task

## Production checklist

- Images compressed/resized client-side before upload; EXIF GPS stripped
- Uploads go direct to storage via presigned URL with progress + cancel + retry
- Graceful handling of denied / limited permissions

## Common mistakes

- Uploading 12 MP originals for a 200px avatar
- Proxying uploads through your API server
- Not handling iOS "limited photo access"

## Interview questions

- Full pipeline: pick a photo → show it → upload it → handle a dropped connection
- Where do you compress and why client-side?
- How do you handle a user who denied camera permission?`,
      },
      {
        id: 'location-maps',
        title: 'Location & Maps',
        duration: '2-3 days',
        content: `> Location is battery-sensitive and privacy-sensitive. Use the least you need.

## Learn

- \`expo-location\`: foreground vs background permissions, accuracy levels, one-shot vs watch, significant-change updates
- Battery: lower accuracy when possible, stop watching when off-screen, geofencing over polling
- Maps: \`react-native-maps\` (Google/Apple), markers, clustering, polylines, custom callouts, bottom-sheet + map patterns
- Reverse geocoding, distance calc, map region math
- Background location (delivery/tracking apps): strict store review, clear justification, foreground service (Android), \`Always\` permission (iOS)
- Privacy: purpose strings, only request background if the feature truly needs it

## Production checklist

- Foreground-only unless the feature genuinely requires background
- Location watching stops when the screen blurs
- Marker clustering for any map with many pins

## Common mistakes

- Requesting \`Always\` location for a one-time "find near me"
- High-accuracy \`watchPosition\` left running → battery drain complaints
- Hundreds of un-clustered markers

## Interview questions

- Foreground vs background location — permission and battery implications
- How do you show 1,000 map markers without killing performance?
- What does a delivery-tracking app need and how do you justify it to app review?`,
      },
      {
        id: 'push-notifications',
        title: 'Push Notifications',
        duration: '3-4 days',
        content: `> Re-engagement and real-time alerts. The setup has many moving parts.

## Learn

- Architecture: device registers → gets a push token → your server stores it → server sends via FCM (Android) / APNs (iOS), or via Expo Push service
- \`expo-notifications\`: permissions, token retrieval, channels (Android importance), categories/actions, badges
- Notification types: alert, silent/data (background sync), rich (image), actionable
- Handling: received in foreground, tapped (cold vs warm start → deep link to the right screen), dismissed
- Server side: token lifecycle (invalidate on uninstall/logout), per-user preferences, batching, rate limits, quiet hours, localization
- Delivery is best-effort — never rely on push for critical state
- Testing on real devices (push doesn't work on simulators reliably)

## Production checklist

- Push token refreshed and de-registered on logout / token change
- Tapping a notification deep-links correctly from a killed state
- User notification preferences respected server-side

## Common mistakes

- Storing stale push tokens → sending into the void, hurting sender reputation
- Notification tap doesn't route correctly on cold start
- Treating push as guaranteed delivery

## Interview questions

- End-to-end: how does a push notification get from your server to a tapped screen?
- FCM vs APNs vs Expo Push — what does each layer do?
- How do you handle notification taps when the app was killed?`,
      },
      {
        id: 'biometrics-permissions',
        title: 'Biometrics & Permissions Management',
        duration: '2 days',
        content: `> Permissions are a UX flow, not a one-liner. Biometrics gate sensitive actions.

## Learn

- \`expo-local-authentication\`: Face ID / Touch ID / fingerprint / device passcode fallback; \`LAContext\` semantics
- Use cases: unlock app on launch, re-auth before payment / viewing secrets, "remember me" with biometric gate
- **Permissions pattern**: explain *before* the OS prompt (pre-permission screen), request at point of need, handle granted / denied / blocked, deep-link to Settings when blocked
- \`PermissionsAndroid\`, iOS \`Info.plist\` purpose strings (rejected without them), \`expo-permissions\` successors per-module
- Re-checking permission status on app foreground (user may have changed it in Settings)
- Privacy manifests / tracking transparency (ATT) on iOS

## Production checklist

- Every permission has a pre-prompt rationale and a blocked-state path to Settings
- iOS purpose strings written for every permission used
- Biometric gate has a passcode fallback

## Common mistakes

- Firing the OS permission prompt on app launch with no context
- No recovery path when a permission is "blocked"
- Missing \`Info.plist\` strings → App Store rejection

## Interview questions

- Design the permission request flow for camera access
- What happens when a user permanently denies a permission, and how do you recover?
- How do you add a "confirm with Face ID" step before a payment?`,
      },
      {
        id: 'deep-links-background',
        title: 'Deep Links & Background Tasks',
        duration: '2 days',
        content: `> Getting users to the right place, and doing limited work while backgrounded.

## Learn

- URL schemes vs Universal Links (iOS) / App Links (Android): verification files, testing, fallback to web/store
- Routing a link to a screen with params, cold vs warm start, auth gating, marketing attribution (deferred deep links)
- Background execution limits on both platforms (short, throttled, not guaranteed)
- \`expo-background-task\` / \`expo-task-manager\`: periodic sync, background fetch, background location, background upload
- Headless JS (Android), BGTaskScheduler (iOS) concepts
- What you can't do: long-running work, reliable timers, keeping a socket alive indefinitely

## Common mistakes

- Expecting background tasks to run on a precise schedule
- Universal Links not working because the association file isn't served correctly
- Assuming a websocket stays connected in the background

## Interview questions

- Universal Links vs custom URL scheme — why prefer Universal Links?
- What are the realistic limits of background work on iOS and Android?
- How do you sync data periodically in the background?`,
      },
    ],
  },
  {
    id: 'production-mobile',
    title: 'Stage 6 — Production Mobile Development',
    phases: [
      {
        id: 'performance-memory',
        title: 'Performance & Memory Management',
        duration: '3-4 days',
        content: `> Native-app smoothness is the bar. Measure on a mid-range Android device, not a flagship.

## Learn

- Rendering: minimize re-renders (memo, selectors, stable props), move work off the JS thread, defer with \`InteractionManager\`/\`useTransition\`
- Startup time: lazy-load screens, defer non-critical init, reduce JS bundle, Hermes, RAM bundles
- \`react-native-performance\` / DevTools profiler; Perfetto/Instruments for native; JS FPS vs UI FPS
- Memory: image caches, listener/subscription cleanup, leaked timers, large in-memory lists; heap profiling
- Bundle size: analyze, remove heavy deps, tree-shake, dynamic imports, split assets
- New architecture (Fabric/TurboModules) benefits; concurrent React

## Production checklist

- Cold start measured and budgeted; regressions caught in CI
- Scrolling core lists at 60fps on a mid-range device
- No growing memory across navigation cycles (profiled)

## Common mistakes

- Only testing on a new iPhone
- Heavy synchronous work on mount
- Subscriptions/timers not cleaned up

## Interview questions

- App launches slowly — your diagnosis and fixes
- JS FPS vs UI FPS — what does each tell you?
- How do you find a memory leak in an RN app?`,
      },
      {
        id: 'lists-images-optimization',
        title: 'Large Lists & Image Optimization',
        duration: '2 days',
        content: `> The two features that make or break perceived performance.

## Learn

- FlashList tuning: \`estimatedItemSize\`, recycling, \`getItemType\` for heterogeneous rows
- Windowing params, \`removeClippedSubviews\`, avoiding nested scrollables
- Row cost budget: no heavy computation, no inline closures, memoized subtrees, skeleton while data loads
- Images: exact display size from CDN, \`expo-image\` caching + priority + placeholder, prefetch upcoming items, decode off-thread
- Pagination + prefetch next page before the user hits the end
- Virtualized grids, sticky sections, chat inverted lists

## Production checklist

- Every long/infinite list on FlashList, tuned, measured on device
- List images sized by the server, cached, placeholdered
- Next page prefetched before end-of-list

## Common mistakes

- Full-size images in a feed
- Re-creating \`renderItem\` and its closures every render
- Nested \`FlatList\` inside \`ScrollView\`

## Interview questions

- FlashList config for a feed with text posts and image posts mixed
- How do you keep an image feed at 60fps?
- How do you implement smooth infinite scroll?`,
      },
      {
        id: 'offline-first-network',
        title: 'Offline-First & Network Failure Handling',
        duration: '2-3 days',
        content: `> Depth on the offline story from Stage 4 — now as a first-class product concern.

## Learn

- Offline-first spectrum: cache-and-refresh → full local DB with sync
- Local DB: \`expo-sqlite\` + Drizzle, WatermelonDB, or a sync framework
- Sync engine concepts: change tracking, push/pull, last-write-wins vs CRDT vs manual conflict UI, tombstones for deletes
- Optimistic UI everywhere; queue + replay writes; idempotency keys
- Network state machine: online / offline / reconnecting / syncing; surfacing it honestly
- Partial failure: some writes synced, some failed — per-item status
- Testing: airplane mode, flaky-network simulation, backgrounded-during-sync

## Production checklist

- App opens to last-known data instantly, then refreshes
- Write queue survives app kill; replays idempotently; conflicts surfaced
- Sync status visible; failed items retryable

## Common mistakes

- Blocking the UI on a network call that could use cached data
- Losing the write queue on app restart
- Silent sync failures

## Interview questions

- Design sync for an offline-first todo app with multi-device edits
- Last-write-wins vs conflict UI — when is each acceptable?
- How do you test offline behavior?`,
      },
      {
        id: 'crash-analytics-logging',
        title: 'Crash Reporting, Analytics & Logging',
        duration: '2 days',
        content: `> You can't fix crashes you never see. Instrument before launch.

## Learn

- Crash/error reporting: Sentry (RN) — native + JS crashes, source maps, release + dist tagging, breadcrumbs, user context (no PII)
- Release health: crash-free users/sessions, adoption per release, regressions
- Analytics: events, funnels, retention; a schema/taxonomy so events are consistent; consent + ATT
- Structured logging in the app; log levels; shipping logs for support (with redaction)
- Performance monitoring: cold start, screen render, network span, custom traces
- Feature flags + remote config (staged rollouts, kill switches)

## Production checklist

- Sentry wired for native + JS with source maps uploaded in CI per release
- Crash-free rate is a release gate
- Key funnels instrumented before launch, with a documented event schema

## Common mistakes

- Shipping without crash reporting ("we'll add it later")
- No source maps → unreadable stacks
- Inconsistent event names → useless analytics

## Interview questions

- What do you instrument before a v1 launch?
- How do you get a readable stack trace from a minified release crash?
- How do you decide a release is healthy enough to roll out further?`,
      },
      {
        id: 'app-security',
        title: 'App Security & Secure Storage',
        duration: '2-3 days',
        content: `> The client is untrusted and inspectable. Protect secrets, data at rest, and the transport.

## Learn

- Secure storage: Keychain/Keystore for tokens & secrets; encrypted DB (SQLCipher / encrypted MMKV) for sensitive local data
- No secrets in the JS bundle — it can be extracted; API keys belong on your server
- Transport: HTTPS only, consider certificate pinning for high-value apps (and its rotation pain)
- Jailbreak/root detection, tamper/repackaging detection, code obfuscation — know they exist, use for fintech/enterprise
- OWASP MASVS / Mobile Top 10 as the checklist
- Deep-link validation (don't trust params), WebView hardening (if used), clipboard sensitivity, screenshot/screen-recording protection for sensitive screens
- Privacy: data collection disclosure (App Store privacy labels, Play Data Safety), ATT, minimal permissions

## Production checklist

- Tokens/secrets in Keychain/Keystore; nothing sensitive in \`AsyncStorage\`/plain MMKV
- No API secret shipped in the app
- Sensitive screens flagged \`FLAG_SECURE\` / screenshot-protected; store privacy labels accurate

## Common mistakes

- Third-party API keys bundled in the app
- Sensitive PII in plain local storage
- Trusting deep-link parameters

## Interview questions

- What can an attacker extract from a shipped app binary?
- Where do tokens and sensitive data go on device?
- When is certificate pinning worth the operational cost?`,
      },
    ],
  },
  {
    id: 'native-knowledge',
    title: 'Stage 7 — Native Knowledge (Enough to Bridge)',
    phases: [
      {
        id: 'swift-swiftui-basics',
        title: 'Swift / SwiftUI Basics',
        duration: '3-4 days',
        content: `> Not to build iOS apps — to read native code, follow docs, and debug native issues.

## Learn

- Swift syntax: optionals, structs vs classes, protocols, closures, \`async\`/\`await\`, error handling
- Xcode project anatomy: targets, schemes, \`Info.plist\`, entitlements, capabilities, build settings, signing
- SwiftUI vs UIKit at a glance; \`AppDelegate\`/\`SceneDelegate\` lifecycle (RN still touches these)
- CocoaPods / Swift Package Manager, the \`Podfile\`, \`pod install\`
- Reading an APNs / permissions / background-modes setup in a native module's docs
- Common native fixes: adding a capability, editing \`Info.plist\`, bumping a pod, resolving a signing error

## Interview questions

- What's in \`Info.plist\` and when do you edit it as an RN dev?
- Struct vs class in Swift — why does it matter?
- How do you add a native capability (e.g. push, background fetch) to an iOS build?`,
      },
      {
        id: 'kotlin-android-basics',
        title: 'Kotlin / Android Basics',
        duration: '3-4 days',
        content: `> Enough Android to navigate Gradle, the manifest, and native module setup.

## Learn

- Kotlin syntax: null safety, data classes, coroutines, extension functions, \`when\`
- Android project anatomy: \`AndroidManifest.xml\`, permissions, intents, \`Activity\`/\`Service\`, \`build.gradle\` (app + project), version catalogs
- Gradle: dependencies, build types (debug/release), product flavors, \`minSdk\`/\`targetSdk\`, ProGuard/R8 rules
- Foreground services & notification channels (needed for background location/audio)
- Reading a native module's Android install steps; fixing a manifest merge conflict; adding a permission
- \`adb\`, logcat filtering, build failures

## Interview questions

- What's in \`AndroidManifest.xml\` and when do you touch it?
- What are ProGuard/R8 rules and why do release builds break without them sometimes?
- \`minSdk\` vs \`targetSdk\` vs \`compileSdk\``,
      },
      {
        id: 'native-modules-bridging',
        title: 'Native Modules, Bridging & When RN Falls Short',
        duration: '3-4 days',
        content: `> Recognize the cases RN can't solve in JS, and be able to wire up (or fix) a native module.

## Learn

- Turbo Modules / Fabric components (new arch) and the legacy bridge model — conceptually
- Expo config plugins: modifying native projects declaratively (the 90% solution — no bare eject)
- \`expo-modules-api\` for writing a small native module in Swift/Kotlin when needed
- Autolinking, and debugging when it fails; pod/gradle version conflicts
- When you genuinely need native: a specific SDK with no RN wrapper, heavy on-device processing (video, ML, audio DSP), tight OS integration, performance-critical UI component
- Evaluating a community native module: maintenance, new-arch support, native code quality

## Common mistakes

- Ejecting to bare for something a config plugin handles
- Adding an unmaintained native module that breaks on the next RN upgrade
- Assuming any npm package works in RN

## Interview questions

- How do you add native functionality without ejecting from Expo?
- Give three cases where React Native can't do it in JS
- How do you evaluate whether a community native module is safe to depend on?`,
      },
    ],
  },
  {
    id: 'app-release',
    title: 'Stage 8 — App Release',
    phases: [
      {
        id: 'icons-splash-env',
        title: 'App Icons, Splash Screens & Environments',
        duration: '1-2 days',
        content: `> The polish and config that has to be right before the stores will even look at your build.

## Learn

- App icons: all required sizes, adaptive icons (Android foreground/background), \`expo-splash-screen\`, dark-mode icon (iOS), notification icon (Android)
- Splash / launch screen: native launch screen vs animated splash; hiding it after hydration
- **Environments**: \`app.config.ts\` with \`dev\` / \`staging\` / \`production\` variants — different bundle id, name, icon, API URL, so all three can be installed side by side
- Secrets in EAS (\`eas.json\` env, EAS Secrets), never in the repo
- Bundle identifiers / package names, versioning scheme (\`version\` + \`buildNumber\`/\`versionCode\`)

## Production checklist

- Dev/staging/prod builds installable side-by-side with distinct ids and icons
- No secret or prod URL in the repo — all via EAS env/secrets
- Icon and splash pass both stores' asset requirements

## Interview questions

- How do you run dev, staging, and prod builds on one device at once?
- Where do build-time secrets live with EAS?
- \`versionCode\`/\`buildNumber\` vs \`version\` — which does the store care about?`,
      },
      {
        id: 'android-signing-play',
        title: 'Android: Signing, AAB & Play Console',
        duration: '2 days',
        content: `> The full path from a build to a live Android app.

## Learn

- Signing: upload key vs app signing key, **Play App Signing** (Google holds the app key), keystore backup, \`.jks\`
- **AAB** (Android App Bundle — required) vs APK (testing/sideload); what Play does with the bundle
- EAS Build → \`.aab\`; EAS Submit → Play Console
- Play Console: internal / closed / open testing tracks, production; staged rollout %, halt rollout
- Store listing: descriptions, screenshots per device, feature graphic, content rating, **Data Safety** form, target-API deadlines
- Pre-launch report, crash/ANR thresholds, policy review timeline

## Production checklist

- Play App Signing enabled; upload keystore backed up in two places
- Shipping \`.aab\`; staged rollout starting at a small %
- Data Safety form matches what the app actually collects

## Interview questions

- Upload key vs app signing key — what happens if you lose each?
- Why AAB instead of APK?
- Walk through the Play Console track progression to production`,
      },
      {
        id: 'ios-certs-testflight-appstore',
        title: 'iOS: Certificates, Provisioning, TestFlight & App Store',
        duration: '2-3 days',
        content: `> Apple's signing model is the steepest learning curve. EAS automates most of it — understand what it's doing.

## Learn

- Apple Developer Program, App Store Connect, bundle id + capabilities/entitlements
- Certificates (distribution), provisioning profiles, devices — and how EAS manages them for you
- **TestFlight**: internal (up to 100, instant) vs external (up to 10k, needs a review) testers, build expiry, feedback
- App Store Connect: app record, screenshots per device size, privacy labels, age rating, export compliance
- Submission: review guidelines (common rejections: privacy strings, Sign in with Apple, broken links, "spam/minimal functionality", IAP rules), review times, expedited review
- Phased release, "release this version" manual gate

## Production checklist

- EAS-managed credentials, or a documented manual signing setup
- Privacy labels + purpose strings accurate and complete
- TestFlight external build reviewed before you plan the public submission date

## Interview questions

- What are certificates and provisioning profiles, and what does EAS do with them?
- TestFlight internal vs external — limits and review
- Name three common App Store rejection reasons and how to avoid them`,
      },
      {
        id: 'ota-versioning-deployment',
        title: 'OTA Updates, Versioning & Deployment Strategy',
        duration: '2 days',
        content: `> Ship JS fixes in minutes; ship native changes through the stores. Know the line.

## Learn

- **EAS Update** (OTA): pushes new JS/asset bundles to installed apps without a store submission
- Runtime version / update compatibility: an OTA bundle must match the native runtime it's delivered to — bump runtime version when native code changes
- What can ship OTA (JS, images, most config) vs what needs a store build (native deps, permissions, entitlements, SDK upgrades)
- Update channels mapped to branches/environments; rollout % and rollback of an OTA
- CI/CD: on merge to main → EAS Build (native) and/or EAS Update (OTA), lint/test/typecheck gates, changelogs
- Release cadence, hotfix flow, "kill switch" via remote config/feature flags

## Production checklist

- OTA channel per environment; staged rollout + instant rollback tested
- Runtime version bumped whenever native changes; incompatible updates not delivered
- A hotfix can reach users in under an hour (OTA) with a clear "this needs a store build" rule

## Common mistakes

- Pushing an OTA that assumes native code not in users' installed binary → crash
- Using OTA to bypass store review for things that need review (policy violation)
- No rollback plan for a bad OTA

## Interview questions

- What can and can't you ship via OTA?
- What is a runtime version and why does it gate OTA delivery?
- A bad build is live — native vs JS bug, what's your response for each?`,
      },
    ],
  },
  {
    id: 'rn-projects',
    title: 'React Native Projects',
    phases: [
      {
        id: 'project-auth-profile',
        title: 'Project 1 — Authentication + Profile App',
        duration: '1 week',
        content: `> The foundation every other project reuses. Small scope, production-grade auth.

## Build

- Sign up / log in / forgot password / email verification against your Node API
- Access + refresh tokens in \`expo-secure-store\`; silent-refresh interceptor with single-flight
- Biometric app-unlock (Face ID / fingerprint) with passcode fallback
- Profile screen: view + edit, avatar upload (pick → compress → presigned URL → S3, with progress)
- Auth-gated navigation (auth stack vs app stack), logout that clears storage + cache + nav
- Loading / empty / error states; form validation with \`react-hook-form\` + \`zod\`
- Dark mode, safe areas, keyboard handling

## Must be able to demo

- Kill the app, reopen → still logged in, biometric unlock
- Token expires mid-use → seamless refresh, no logout
- Refresh token invalid → clean logout
- Offline → sensible cached view, no infinite spinner`,
      },
      {
        id: 'project-ecommerce',
        title: 'Project 2 — E-commerce Mobile App',
        duration: '2 weeks',
        content: `> Lists, search, filters, and a cart that survives everything.

## Build

- Product list (FlashList, image-optimized), search with debounce, filters + sort (bottom sheet)
- Product detail, image carousel, variants
- Cart + wishlist: persisted (MMKV), optimistic add/remove, badge counts
- Checkout flow: address, shipping, payment step (Stripe / Razorpay RN SDK), order confirmation
- Auth reused from Project 1; order history with pagination + pull-to-refresh
- Deep links to a product (cold start, logged out → login → land on product)
- Full four-states on every screen; skeleton loaders

## Must be able to demo

- Feed scrolls at 60fps on a mid-range Android device with images
- Cart persists across app kill and offline
- Deep link to a product works from a killed state
- A failed payment leaves the cart intact and shows a clear error`,
      },
      {
        id: 'project-booking',
        title: 'Project 3 — Booking App',
        duration: '2 weeks',
        content: `> Calendars, availability, and preventing double-booking from the client side of the problem.

## Build

- Browse services/staff, staff detail, reviews
- Calendar + available-slots UI (timezone-correct), slot selection
- Create booking, reschedule, cancel — with optimistic UI and server reconciliation
- Idempotency key on booking creation; handle "slot taken" race gracefully (from the main roadmap's concurrency work)
- Push notifications: booking confirmed, reminder (24h/1h), cancelled → deep link to the booking
- Payments / deposit; refund on cancel
- Offline: view upcoming bookings; queue a cancel/reschedule and replay on reconnect

## Must be able to demo

- Two devices try the same slot → one wins, the other gets a clean "just taken" message
- Reminder notification taps straight to the booking from a killed app
- Reschedule while offline → syncs on reconnect
- Timezone: booking made in one timezone shows correctly in another`,
      },
      {
        id: 'project-realtime-chat',
        title: 'Project 4 — Real-time Chat App',
        duration: '2 weeks',
        content: `> Sockets, presence, delivery guarantees, and notifications working together.

## Build

- Socket.IO client: auth on handshake, reconnect with backoff, re-auth on token refresh
- Conversations list + chat screen (inverted FlashList), pagination of history
- Message states: sending → sent → delivered → read; optimistic send; retry failed
- Typing indicator, online/offline presence, unread counts
- Message persistence locally (SQLite) → open a chat instantly offline; catch-up via since-cursor on reconnect
- Push notification for messages when backgrounded → deep link to the conversation; dedupe with socket delivery
- Media messages (image: pick → compress → upload → thumbnail)

## Must be able to demo

- Send while offline → message queues, sends on reconnect, no duplicate
- Kill app, receive messages → push notification → tap → correct conversation, history intact
- Two devices, same account, stay in sync
- Reconnect after 10 minutes offline → missed messages appear in order`,
      },
      {
        id: 'project-ai-mobile',
        title: 'Project 5 — AI Mobile App',
        duration: '2-3 weeks',
        content: `> Where the two roadmaps meet: a real AI app on mobile.

## Build

- Chat UI with **streamed** responses (SSE from your Node/FastAPI AI service), markdown + code rendering, stop button, regenerate
- Conversation history persisted (local + server), thread list, resume an interrupted stream
- **Image input**: snap/pick a photo → vision model (e.g. "what's this / extract the receipt")
- **AI tools**: the model can call your APIs (look something up, create a reminder) with a human-approval sheet for actions
- **RAG**: attach a PDF → ask questions → answers with citations (pipeline from the main roadmap)
- Auth reused; per-user rate limit + quota UX ("resets in 2h"); cost logged server-side
- Offline: queue the prompt, send on reconnect; graceful provider-down message

## Must be able to demo

- Streaming response that you can stop mid-way (and it stops billing server-side)
- Photo → structured extraction
- A tool action that pauses for your approval
- PDF Q&A with a citation you can tap
- Rate-limit hit → clear, friendly UX`,
      },
      {
        id: 'final-project',
        title: 'Final Project — Full Stack + AI + Mobile',
        duration: '4-6 weeks',
        content: `> The flagship. One product, web + mobile clients, one AI backend. This is your portfolio centerpiece.

\`\`\`flow
Next.js web app  +  React Native app
Shared Node.js API  +  Python/FastAPI AI service
PostgreSQL + Redis + S3
LLM + RAG + Agent
AWS + Docker + CI/CD + observability + evals + cost dashboard
\`\`\`

## Suggested product

A business assistant platform: web dashboard for admins, React Native app for field/staff users, an AI assistant (RAG over company docs + an agent that can take gated actions), real-time updates, offline support on mobile, Stripe billing.

## What it must have

- Shared auth (access + refresh, secure storage on mobile, cookies on web), RBAC, multi-tenant isolation
- Real-time (WebSocket + Redis adapter) reflected on both clients
- RAG assistant with citations + eval suite + per-tenant cost tracking
- An agent with tools, human-in-the-loop approvals, and an audit log
- Offline-first mobile: cached reads, queued writes, sync
- CI/CD for web, API, AI service, and EAS builds/OTA for mobile
- Observability: traces spanning mobile → API → AI → DB; crash-free rate; cost + eval dashboards
- Load test + a written "how it fails / how we know / what it costs" doc

## Be able to talk for 30 minutes about

The full request path from a tap in the RN app to a token from the model to a tool hitting Postgres and back — and where you'd cut latency, cut cost, and what each trades away.`,
      },
    ],
  },
];
