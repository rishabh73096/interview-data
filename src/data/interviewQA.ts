export interface QAItem {
  q: string;
  a: string;
}

export interface QACategory {
  title: string;
  items: QAItem[];
}

export const qaCategories: QACategory[] = [
  {
    title: 'JavaScript Core',
    items: [
      { q: 'What is Thread of Execution?', a: 'The step-by-step order in which JS statements run inside an execution context. JS is single-threaded, so only one line executes at a time.' },
      { q: 'What is an Execution Context?', a: 'The environment in which JS code is evaluated and run — has a Memory (Variable) component and a Code (Thread of Execution) component. Types: Global Execution Context, Function Execution Context, Eval.' },
      { q: 'Difference between var, let, and const?', a: 'var is function-scoped, hoisted and initialized as undefined, can be redeclared. let/const are block-scoped, hoisted but stay in the Temporal Dead Zone (TDZ) until declared. const cannot be reassigned (but object/array contents can still be mutated).' },
      { q: 'What are closures?', a: 'A function that remembers variables from its outer lexical scope even after the outer function has finished executing. Used in debounce/throttle, private counters, currying.' },
      { q: 'What is hoisting?', a: 'JS moves variable/function declarations to the top of their scope during the creation phase before execution. var → hoisted as undefined; let/const → hoisted but in TDZ; function declarations → hoisted with full body.' },
      { q: 'Explain the Event Loop.', a: 'The mechanism that lets single-threaded JS handle async work — call stack runs sync code, Web APIs handle timers/IO in background, completed callbacks go to the callback (macrotask) queue or microtask queue, and the event loop pushes them to the call stack once it\'s empty. Microtasks (promises) always run before the next macrotask.' },
      { q: 'What is a Promise?', a: 'An object representing the eventual result of an async operation, with 3 states — pending, fulfilled, rejected. Lets you chain .then/.catch instead of nesting callbacks.' },
      { q: 'What is the Virtual DOM?', a: 'A lightweight JS object representation of the real DOM. React updates this first, diffs it against the previous version (reconciliation), and applies only the minimal real DOM changes — faster than direct DOM manipulation.' },
      { q: 'Difference between null and undefined?', a: 'undefined means a variable has been declared but not assigned a value (JS gives it automatically). null is an intentional assignment meaning "no value" (set by the developer).' },
      { q: 'Primitive vs non-primitive types?', a: 'Primitives (string, number, boolean, null, undefined, symbol, bigint) are immutable and stored by value. Non-primitives (objects, arrays, functions) are mutable and stored by reference.' },
      { q: 'Difference between map, filter, and forEach?', a: 'map returns a new array by transforming each element. filter returns a new array with elements that pass a condition. forEach just loops and returns undefined (no new array, used for side effects).' },
      { q: 'What is "this" keyword?', a: 'Refers to the object that is currently calling the function — its value depends on how the function is invoked (method call, plain call, new, call/apply/bind, or arrow function which inherits this from its lexical scope).' },
      { q: 'What is callback hell?', a: 'Deeply nested callbacks (pyramid of doom) making async code hard to read/maintain — solved using Promises or async/await.' },
      { q: 'What is async/await?', a: 'Syntactic sugar over Promises that lets you write async code that looks synchronous. await pauses execution of the async function (not the whole thread) until the promise settles.' },
      { q: 'Difference between asynchronous and synchronous?', a: 'Synchronous code executes line by line, blocking until each operation finishes. Asynchronous code lets long-running operations (API calls, timers) run in the background without blocking the main thread.' },
      { q: 'What is optional chaining (?.)?', a: 'Safely accesses nested object properties, returning undefined instead of throwing if an intermediate property is null/undefined. Example: user?.address?.city.' },
      { q: 'What is destructuring?', a: 'Syntax to unpack values from arrays or properties from objects into distinct variables in one line. Example: const { name, age } = user.' },
      { q: 'What is the spread operator?', a: '...  expands an iterable (array/object) into individual elements — used to copy/merge arrays/objects or pass array items as function arguments.' },
      { q: 'What is the rest operator?', a: 'Also ... but used to collect multiple remaining arguments/properties into a single array/object (opposite direction of spread). Example: function sum(...nums) {}.' },
      { q: 'What are Higher-Order Functions?', a: 'Functions that take another function as an argument, return a function, or both. Examples: map, filter, reduce, debounce, throttle.' },
      { q: 'What are decorators?', a: 'A design pattern/syntax (used heavily in TypeScript/NestJS/Angular) that lets you attach extra behavior to a class, method, or property without modifying its actual code, using an @ syntax.' },
    ],
  },
  {
    title: 'Async / Performance Patterns',
    items: [
      { q: 'What is debouncing?', a: 'Delays running a function until the user stops triggering the event for a set time (e.g., search-as-you-type) — resets the timer on every new call.' },
      { q: 'What is throttling?', a: 'Ensures a function runs at most once every fixed interval, no matter how many times the event fires (e.g., scroll/resize handlers).' },
    ],
  },
  {
    title: 'React',
    items: [
      { q: 'What are React Hooks?', a: 'Functions (useState, useEffect, useRef, etc.) that let you use state and lifecycle features in functional components without writing a class.' },
      { q: 'What is useState?', a: 'A hook that adds local state to a functional component; returns the current value and a setter function, and re-renders the component when the value changes.' },
      { q: 'What is useRef?', a: 'A hook that returns a mutable object (.current) that persists across renders without causing a re-render — used for DOM access or storing instance-like values.' },
      { q: 'What is useSelector?', a: 'A Redux hook (react-redux) used inside functional components to read/select a piece of state from the Redux store; re-renders the component when that selected value changes.' },
      { q: 'What is Redux-Saga?', a: 'A middleware for Redux that handles side effects (API calls, async flows) using generator functions, giving more control (cancellation, sequencing) than redux-thunk.' },
      { q: 'Controlled vs uncontrolled components?', a: 'Controlled: input value is driven by React state via value + onChange. Uncontrolled: input keeps its own value in the DOM, read via a ref only when needed.' },
      { q: 'What is ref forwarding (forwardRef)?', a: 'A technique to pass a ref through a component to one of its children (usually a DOM node), since refs aren\'t passed as normal props.' },
      { q: 'What is lazy loading in React?', a: 'Loading a component\'s code only when it\'s needed using React.lazy(() => import(...)) combined with Suspense, reducing the initial bundle size.' },
      { q: 'What are React Portals?', a: 'A way to render a child component into a DOM node outside its parent\'s DOM hierarchy (e.g., modals, tooltips) while keeping it inside the same React component tree logically.' },
      { q: 'What is React Fiber?', a: 'React\'s internal reconciliation engine (since React 16) that breaks rendering work into units, allowing it to pause, prioritize, and resume work — enabling concurrent features and smoother UI.' },
      { q: 'What is Reconciliation?', a: 'The algorithm React uses to diff the new virtual DOM tree against the old one and figure out the minimal set of real DOM updates needed.' },
      { q: 'Why are keys important in lists?', a: 'They give React a stable identity per list item across renders so it can correctly match, reorder, add, or remove items during reconciliation instead of re-rendering everything.' },
      { q: 'Difference in useEffect dependencies ([], [dep], no array)?', a: '[] → runs once on mount only. [dep] → runs on mount and whenever dep changes. No array → runs after every render.' },
      { q: 'What is useMemo?', a: 'A hook that memoizes a computed value between renders, recalculating only when its dependencies change — avoids expensive recalculations.' },
      { q: 'Difference between useCallback and React.memo?', a: 'useCallback memoizes a function reference so it doesn\'t change between renders. React.memo wraps a component to skip re-rendering when its props are shallow-equal to the previous render.' },
      { q: 'What are custom hooks?', a: 'Functions starting with "use" that combine built-in hooks to extract and reuse stateful logic across multiple components.' },
      { q: 'Explain component lifecycle.', a: 'Mount (component created and inserted), Update (re-renders on state/prop change), Unmount (component removed). In functional components this maps to useEffect with different dependency arrays.' },
      { q: 'What is Redux?', a: 'A predictable state management library — a single store holds global state, updated only via dispatched actions handled by pure reducer functions.' },
      { q: 'What is createSlice in Redux Toolkit?', a: 'A Redux Toolkit function that auto-generates action creators and action types from a single object containing a slice name, initial state, and reducer functions (using Immer internally so you can "mutate" state directly).' },
      { q: 'What is dispatch in Redux?', a: 'The function used to send an action to the Redux store, which then runs the reducer to compute and update the new state.' },
    ],
  },
  {
    title: 'Node / Express / Backend',
    items: [
      { q: 'What is Node.js?', a: 'A JavaScript runtime built on Chrome\'s V8 engine that lets JS run outside the browser, using an event-driven, non-blocking I/O model — good for scalable network applications.' },
      { q: 'What is Express.js?', a: 'A minimal Node.js web framework providing routing, middleware support, and utilities for building REST APIs and web servers.' },
      { q: 'What is Middleware?', a: 'A function that runs between the request and response cycle, with access to (req, res, next) — used for logging, auth checks, parsing, error handling, etc. Call next() to pass control forward.' },
      { q: 'How does middleware execution order work?', a: 'Middleware runs in the exact order it\'s registered with app.use()/app.get() etc.; each must call next() to pass control to the next one, or send a response to end the chain.' },
      { q: 'Difference between Authentication and Authorization?', a: 'Authentication verifies WHO you are (login, identity check). Authorization determines WHAT you\'re allowed to do (permissions/roles) after being authenticated.' },
      { q: 'What is JWT?', a: 'JSON Web Token — a signed, stateless token (header.payload.signature) used to verify a user\'s identity on each request without the server storing session state.' },
      { q: 'What is Redis indexing / why use Redis?', a: 'Redis is an in-memory key-value store used for caching, session storage, and rate limiting; "indexing" in Redis usually refers to structuring keys (e.g., sorted sets, hashes) so lookups are O(1)/O(log n) instead of scanning data.' },
      { q: 'Difference between GET, POST, PUT, and PATCH?', a: 'GET retrieves data (no body, idempotent). POST creates a new resource (not idempotent). PUT replaces an entire resource (idempotent). PATCH partially updates a resource (not necessarily idempotent).' },
    ],
  },
  {
    title: 'HTTP Status Codes',
    items: [
      { q: 'What are the 5 families of HTTP status codes?', a: '1xx Informational (request received, still processing), 2xx Success, 3xx Redirection (resource moved / client must do something more), 4xx Client Error (caller\'s fault), 5xx Server Error (server\'s fault).' },
      { q: 'Difference between 200, 201, and 204?', a: '200 OK — request succeeded, response has a body. 201 Created — a new resource was created (usually after POST), often returns the created resource. 204 No Content — request succeeded but there\'s no response body (common after DELETE/PUT).' },
      { q: 'Difference between 401 and 403?', a: '401 Unauthorized actually means "not authenticated" — no/invalid credentials. 403 Forbidden means you ARE authenticated but don\'t have permission to access that resource.' },
      { q: 'What is a 400 vs a 422 status code?', a: '400 Bad Request — the request itself is malformed (bad JSON, missing required field, wrong type). 422 Unprocessable Entity — the request is well-formed but fails validation/business rules (e.g., invalid email format, duplicate value).' },
      { q: 'What is a 409 Conflict used for?', a: 'Returned when a request conflicts with the current state of the resource — e.g., trying to create a user with an email that already exists, or a version/concurrency conflict on update.' },
      { q: 'What is a 429 status code?', a: 'Too Many Requests — the client has hit a rate limit; the response usually includes a Retry-After header telling the client when to try again.' },
      { q: 'Difference between 500, 502, and 503?', a: '500 Internal Server Error — generic unhandled server-side error. 502 Bad Gateway — a gateway/proxy got an invalid response from an upstream server. 503 Service Unavailable — server is temporarily down/overloaded (maintenance, restart, overload).' },
      { q: 'What is a 304 Not Modified used for?', a: 'Returned for conditional GET requests (using ETag/If-None-Match or Last-Modified headers) to tell the client its cached copy is still valid, saving bandwidth by not resending the body.' },
      { q: 'How do you decide which status code to send for a failed API call in your own backend?', a: '90% of the time a failure is the client\'s fault (4xx) — bad input (400/422), missing auth (401), no permission (403), not found (404), conflict (409). Only use 5xx when the failure genuinely happened on the server (DB down, unhandled exception, upstream service failed).' },
    ],
  },
  {
    title: 'JavaScript',
    items: [
      { q: 'How does event delegation work in JavaScript? Why is it efficient?', a: 'Instead of attaching a listener to every child element, you attach one listener to a common parent and use event bubbling + e.target to detect which child triggered it. Efficient because it uses less memory and automatically works for dynamically added children.' },
      { q: 'Difference between == and ===? Explain type coercion.', a: '== compares values after converting both to the same type (type coercion), e.g. "5" == 5 is true. === compares both value and type with no conversion, e.g. "5" === 5 is false. Always prefer === to avoid unexpected coercion bugs.' },
      { q: 'Deep Copy vs Shallow Copy?', a: 'Shallow copy (spread, Object.assign) copies only the top level — nested objects are still shared by reference. Deep copy (structuredClone, JSON.parse(JSON.stringify())) recursively copies everything so nested data is fully independent.' },
      { q: 'Explain call(), apply(), and bind().', a: 'All three set the "this" value for a function manually. call(ctx, a, b) invokes immediately with args listed individually. apply(ctx, [a,b]) invokes immediately with args as an array. bind(ctx) doesn\'t invoke — it returns a new function with "this" permanently set.' },
      { q: 'What is currying?', a: 'Transforming a function that takes multiple arguments into a sequence of functions that each take one argument, e.g. f(a,b,c) becomes f(a)(b)(c). Useful for creating reusable, partially-applied functions.' },
      { q: 'Difference between nullish coalescing (??) and logical OR (||)?', a: '|| returns the right side if the left is any falsy value (0, "", false, null, undefined). ?? only returns the right side if the left is null or undefined — safer when 0 or "" are valid values.' },
      { q: 'How does garbage collection work in JavaScript?', a: 'The JS engine automatically frees memory no longer reachable from the root (global object/call stack), mainly using the "mark-and-sweep" algorithm — objects with no remaining references get collected.' },
      { q: 'Difference between setTimeout, setImmediate, and process.nextTick (Node.js)?', a: 'process.nextTick() runs immediately after the current operation, before the event loop continues (highest priority). setTimeout(fn, 0) runs in the timers phase of the next loop iteration. setImmediate() runs in the check phase, after I/O callbacks in the current iteration — generally after setTimeout(0) when both are scheduled inside an I/O callback.' },
    ],
  },
  {
    title: 'React / Next.js',
    items: [
      { q: 'Difference between useEffect and useLayoutEffect?', a: 'useEffect runs asynchronously after the browser paints. useLayoutEffect runs synchronously after DOM mutations but before the paint — use it only when you need to measure/mutate the DOM to avoid visual flicker.' },
      { q: 'What causes a React component to re-render?', a: 'Its own state changing, its props changing, its parent re-rendering, or a subscribed context value changing.' },
      { q: 'Context API vs Redux?', a: 'Context API is built into React, good for low-frequency global data (theme, logged-in user) shared across a subtree, but re-renders all consumers on any value change. Redux is a dedicated state management library with a single store, actions/reducers, dev tools, and better performance/structure for large, frequently-updating state.' },
      { q: 'How would you implement protected routes using authentication?', a: 'Check auth status (token in cookie/localStorage or a context) before rendering a route; if not authenticated, redirect to login — in Next.js this is commonly done via middleware.js checking a cookie/JWT before the request reaches the page.' },
      { q: 'Difference between CSR, SSR, SSG, and ISR in Next.js?', a: 'CSR renders in the browser after JS loads. SSR renders HTML per-request on the server. SSG renders HTML once at build time. ISR is SSG that regenerates in the background after a set interval, keeping pages mostly static but periodically fresh.' },
      { q: 'How does Next.js App Router differ from the Pages Router?', a: 'App Router (app/) uses nested layouts, React Server Components by default, streaming, and colocated loading.js/error.js. Pages Router (pages/) treats every file as a client-rendered-by-default page, with data fetching via getServerSideProps/getStaticProps.' },
      { q: 'Difference between ReactDOM.render() and createRoot() in React 18?', a: 'ReactDOM.render() was the legacy API (React 17 and earlier) for mounting an app. createRoot(container).render(<App/>) is the React 18 API that enables concurrent features like automatic batching, transitions, and Suspense improvements.' },
      { q: 'What are Error Boundaries, and when would you use them?', a: 'Class components that implement getDerivedStateFromError/componentDidCatch to catch JS errors in their child component tree during render, log them, and show a fallback UI instead of crashing the whole app. Used to wrap risky/third-party UI sections.' },
      { q: 'How would you structure a large-scale React application?', a: 'Feature-based folder structure (group by domain/feature, not by file type), separate reusable UI components, centralize API calls (services/hooks layer), use a state management layer for shared state, lazy-load routes, and keep business logic out of components via custom hooks.' },
      { q: 'What are React Server Components (RSC)?', a: 'Components (default in Next.js App Router) that render only on the server, can directly access databases/secrets, and send zero JS to the client — improving bundle size and initial load, but they can\'t use state, effects, or browser events (that needs "use client").' },
      { q: 'What is idempotency, and which HTTP methods are idempotent?', a: 'An idempotent request produces the same result no matter how many times it\'s repeated. GET, PUT, DELETE are idempotent. POST and PATCH are generally not (calling POST twice can create two resources).' },
      { q: 'What is CORS and why does it happen?', a: 'Cross-Origin Resource Sharing — a browser security mechanism that blocks a webpage from calling an API on a different origin (domain/port/protocol) unless the server explicitly allows it via Access-Control-Allow-Origin and related headers.' },
    ],
  },
  {
    title: 'More React / Next.js (from INTERVIEW_PREP.md)',
    items: [
      { q: 'Why do hooks have rules (no conditionals/loops)?', a: 'React matches state to the right hook call using the *order* hooks are called in across renders — calling hooks conditionally breaks that order and mixes up state between hooks.' },
      { q: 'What is Zustand and how does it compare to Redux/Context?', a: 'A minimal global state library — no provider wrapping, no boilerplate actions/reducers, components subscribe to only the slice of state they use via a selector. Simpler than Redux, more scalable than Context for frequently-changing state.' },
      { q: 'What is list virtualization and why use it?', a: 'Rendering only the visible rows of a huge list (using a library like react-window) instead of the whole list, drastically improving performance for long lists/tables.' },
      { q: 'What is SWR / React Query, and why use it over plain useEffect + fetch?', a: 'Data-fetching libraries that add caching, automatic revalidation, retries, deduping of requests, and loading/error state — handling a lot of edge cases you\'d otherwise hand-roll with useEffect.' },
      { q: 'What does Next.js middleware run on, and what\'s it commonly used for?', a: 'It runs at the edge, before a request reaches a page or API route — commonly used for auth checks/redirects (e.g., blocking /dashboard without a token), header rewriting, and A/B testing/geolocation redirects.' },
    ],
  },
  {
    title: 'Node / Backend (extra)',
    items: [
      { q: 'How do you handle errors in async Express route handlers?', a: 'Wrap the handler in a try/catch (or a helper like asyncHandler) that catches rejected promises and forwards them to next(err), so they reach Express\'s centralized error-handling middleware instead of crashing the process.' },
      { q: 'How do you handle file uploads in Express?', a: 'Using a middleware like Multer, which parses multipart/form-data and attaches the uploaded file(s) to req.file/req.files before your route handler runs.' },
      { q: 'How do you implement rate limiting in an API?', a: 'Using middleware (e.g., express-rate-limit) that tracks requests per IP/user within a time window and rejects requests over the limit with a 429 status once the threshold is hit.' },
    ],
  },
  {
    title: 'Databases',
    items: [
      { q: 'How does indexing improve database query performance?', a: 'An index (e.g., on email) creates a sorted lookup structure so the DB can find matching rows without scanning the whole collection/table — faster reads, but adds overhead on writes/storage.' },
      { q: 'What is an aggregation pipeline in MongoDB?', a: 'A series of stages ($match, $group, $sort, $limit, etc.) that process documents step by step — used for things like grouping orders by user and summing totals.' },
      { q: 'How do you implement pagination in a database query?', a: 'Commonly with skip + limit (or offset/limit in SQL) based on page number, or cursor-based pagination (using the last seen id/timestamp) for better performance on large datasets.' },
      { q: 'Difference between INNER JOIN and LEFT JOIN in SQL?', a: 'INNER JOIN returns only rows that have a match in both tables. LEFT JOIN returns all rows from the left table, with NULLs for columns from the right table where no match exists.' },
      { q: 'Normalization vs denormalization?', a: 'Normalization splits data into related tables to reduce redundancy (safer writes, more joins needed). Denormalization intentionally duplicates data for faster reads, at the cost of harder-to-keep-consistent writes.' },
    ],
  },
  {
    title: 'System Design Basics',
    items: [
      { q: 'What are common caching strategies in a web app?', a: 'Client-side (browser cache, SWR/React Query), CDN (cache static assets/pages near the user), and server-side (Redis for frequently-read, rarely-changed data) — with cache invalidation (TTL or explicit) being the hardest part.' },
      { q: 'Difference between vertical and horizontal scaling?', a: 'Vertical scaling means using a bigger/more powerful server (simple, but has a ceiling). Horizontal scaling means adding more server instances behind a load balancer (needs stateless servers, e.g., sessions in Redis/JWT instead of server memory).' },
      { q: 'How would you design a URL shortener at a high level?', a: 'A table mapping a unique short_code to the original_url; generate the code via base62-encoding an auto-increment id (or a hash + collision check); cache hot short codes in Redis for fast redirects; increment click analytics asynchronously via a queue so it doesn\'t slow down the redirect.' },
    ],
  },
  {
    title: 'DSA Essentials',
    items: [
      { q: 'What is the two-pointer technique used for?', a: 'Using two indices moving through a (usually sorted) array/string to solve problems like pair-sum or reversing in O(n) instead of nested loops.' },
      { q: 'What is the sliding window technique used for?', a: 'Maintaining a window (subarray/substring) that expands/shrinks over the data to solve problems like "longest substring without repeating characters" in O(n) instead of checking every substring.' },
      { q: 'Why use a HashMap for lookups in DSA problems?', a: 'It gives O(1) average lookup/insert, turning an O(n²) brute-force search (like Two Sum) into an O(n) solution by trading space for time.' },
      { q: 'What is memoization, and how does it help recursive solutions like Fibonacci?', a: 'Caching the results of expensive function calls so repeated calls with the same input return instantly — turns naive recursive Fibonacci from O(2^n) to O(n).' },
    ],
  },
  {
    title: 'Bonus (Git, Docker, Testing, Deployment)',
    items: [
      { q: 'Difference between git rebase and git merge?', a: 'Rebase replays your commits on top of another branch, producing a linear history. Merge combines branches with a merge commit, preserving the original history/branch structure.' },
      { q: 'Difference between a Docker image and a container?', a: 'An image is the static blueprint/template (built from a Dockerfile). A container is a running instance of that image.' },
      { q: 'Difference between unit, integration, and E2E tests?', a: 'Unit tests check a single function/component in isolation. Integration tests check multiple units working together. E2E tests (Cypress/Playwright) simulate a real user flow through the whole app in a browser.' },
      { q: 'What\'s a basic CI/CD setup for a web app?', a: 'On every PR/push, automatically run lint + tests (CI); on merge to main, automatically build and deploy to the hosting platform (CD) — catching issues before they reach production.' },
    ],
  },
  {
    title: 'Accessibility / WCAG',
    items: [
      { q: 'What is WCAG?', a: 'Web Content Accessibility Guidelines — a W3C standard defining how to make web content accessible to people with disabilities, organized around 4 principles (POUR): Perceivable, Operable, Understandable, Robust, with 3 conformance levels (A, AA, AAA — AA is the common legal/industry target).' },
      { q: 'Why is accessibility important?', a: 'Ensures people with visual, motor, auditory, or cognitive disabilities can use your app (ethical + often legal requirement, e.g. ADA/Section 508); it also improves SEO, keyboard usability, and overall UX for everyone.' },
      { q: 'How do you make a React app accessible?', a: 'Use semantic HTML (button, nav, header) instead of divs with click handlers, add proper labels for form inputs, ensure keyboard navigation (tab order, focus states, no keyboard traps), manage focus on route/modal changes, use ARIA attributes only when semantic HTML isn\'t enough, and maintain sufficient color contrast.' },
      { q: 'What are ARIA attributes?', a: 'Accessible Rich Internet Applications attributes (aria-label, aria-hidden, aria-live, role, etc.) that add accessibility info to elements for screen readers when native HTML semantics aren\'t enough — e.g., aria-label="Close" on an icon-only button. Rule of thumb: prefer native semantic HTML first, use ARIA only to fill gaps.' },
      { q: 'What is keyboard navigation and why does it matter?', a: 'The ability to operate an entire app using only the keyboard (Tab, Enter, Esc, arrow keys) — critical for users who can\'t use a mouse (motor disabilities) or screen reader users. Requires visible focus indicators and a logical tab order.' },
      { q: 'What is the difference between aria-hidden and display: none / visibility: hidden?', a: 'display:none/visibility:hidden removes an element visually and from the accessibility tree (screen readers skip it too). aria-hidden="true" hides an element only from assistive tech/screen readers while it stays visually present — used to hide purely decorative content (icons) from screen readers.' },
      { q: 'How do you test accessibility?', a: 'Automated tools (Lighthouse, axe DevTools, eslint-plugin-jsx-a11y) catch common issues (missing alt text, contrast, labels), but manual testing — keyboard-only navigation and a real screen reader (VoiceOver/NVDA) — is needed to catch what automated tools miss.' },
    ],
  },
  {
    title: 'Performance Optimization',
    items: [
      { q: 'What techniques have you used to optimize a React/Next.js app?', a: 'Memoization (React.memo/useMemo/useCallback) to avoid unnecessary re-renders, code splitting/lazy loading routes and heavy components, image optimization (next/image), list virtualization for long lists, debouncing/throttling expensive handlers, caching API responses (SWR/React Query), and minimizing bundle size (tree-shaking, analyzing bundle with next-bundle-analyzer).' },
      { q: 'Where have you used React.memo(), useMemo() & useCallback()?', a: 'React.memo — wrapping a pure child component that re-renders often due to a frequently-updating parent, but whose own props rarely change. useMemo — memoizing an expensive computation (e.g., filtering/sorting a large list) so it only recalculates when its dependencies change. useCallback — memoizing a function passed as a prop to a React.memo\'d child, or as a dependency to another hook (useEffect), so it doesn\'t get a new reference on every render.' },
      { q: 'How do you optimize unnecessary re-renders?', a: 'Split state so unrelated UI doesn\'t share the same state variable, memoize expensive children/values/callbacks (React.memo/useMemo/useCallback), avoid creating new objects/arrays/functions inline in JSX props, use keys correctly in lists, and move state down closer to where it\'s actually used instead of lifting it higher than needed.' },
      { q: 'What is lazy loading & code splitting?', a: 'Code splitting breaks the JS bundle into smaller chunks instead of one large file. Lazy loading loads a chunk (route, component, or library) only when it\'s actually needed — e.g., React.lazy() + Suspense for components, or Next.js\'s automatic per-route code splitting — reducing the initial bundle size and load time.' },
      { q: 'What other frontend performance techniques do you know?', a: 'Compressing/lazy-loading images (next/image, WebP), minimizing/deferring third-party scripts, using a CDN for static assets, reducing layout shifts (CLS) by reserving space for images/ads, prefetching routes/data on hover/viewport entry, and enabling gzip/brotli compression + HTTP caching headers.' },
      { q: 'How do you measure frontend performance?', a: 'Core Web Vitals — LCP (Largest Contentful Paint, loading speed), FID/INP (Interactivity), CLS (Cumulative Layout Shift, visual stability) — measured via Lighthouse, Chrome DevTools Performance tab, or real-user monitoring (Web Vitals library, Vercel Analytics).' },
      { q: 'How do you optimize backend/API performance?', a: 'DB indexing on frequently queried fields, pagination instead of returning huge datasets, caching hot reads in Redis, using projection to fetch only needed fields, avoiding N+1 queries (batch/populate properly), and compressing responses (gzip).' },
    ],
  },
  {
    title: 'Agile',
    items: [
      { q: 'What is a Sprint & Sprint Planning?', a: 'A Sprint is a fixed, short time-box (commonly 1-2 weeks) in which a team delivers a working increment of the product. Sprint Planning is the meeting at the start of the sprint where the team picks items from the product backlog, estimates them, and commits to a sprint goal/scope.' },
      { q: 'What is a Daily Stand-up?', a: 'A short (~15 min) daily meeting where each team member answers: what I did yesterday, what I\'ll do today, and any blockers — keeps the team aligned and surfaces blockers early, not a status report to a manager.' },
      { q: 'What is Sprint Review & Retrospective?', a: 'Sprint Review — held at the end of the sprint, the team demos completed work to stakeholders and gathers feedback. Sprint Retrospective — a team-only meeting right after, reflecting on what went well, what didn\'t, and what process changes to make next sprint.' },
      { q: 'What are Story Points & Definition of Done?', a: 'Story Points estimate the relative effort/complexity/uncertainty of a task (not raw hours), often using Fibonacci-like scales (1, 2, 3, 5, 8...), agreed on via team discussion (e.g., planning poker). Definition of Done is the team\'s shared checklist a task must meet to be considered truly complete (code reviewed, tested, deployed to staging, docs updated, etc.) — prevents "done" from meaning different things to different people.' },
      { q: 'What is a Product Backlog vs a Sprint Backlog?', a: 'The Product Backlog is the full, prioritized list of all desired work for the product (features, bugs, tech debt), owned/prioritized by the Product Owner. The Sprint Backlog is the subset of backlog items pulled into the current sprint, plus the plan to deliver them.' },
      { q: 'What roles exist in Scrum?', a: 'Product Owner (owns the backlog, prioritizes based on business value), Scrum Master (facilitates the process, removes blockers, protects the team from disruption), and the Development Team (cross-functional, self-organizing, delivers the work).' },
      { q: 'Difference between Scrum and Kanban?', a: 'Scrum works in fixed time-boxed sprints with defined roles/ceremonies and a sprint commitment. Kanban is a continuous flow model with no fixed iterations — work items move through columns (To Do → In Progress → Done) with a WIP (work-in-progress) limit, and priorities can shift anytime.' },
      { q: 'What is a User Story?', a: 'A short description of a feature from an end user\'s perspective, typically in the format "As a [user], I want [goal], so that [benefit]" — kept small enough to fit within a sprint and paired with acceptance criteria defining when it\'s complete.' },
      { q: 'What is backlog grooming/refinement?', a: 'An ongoing activity (often a recurring meeting) where the team reviews, clarifies, estimates, and reprioritizes upcoming backlog items so they\'re "ready" (well-defined, estimated, small enough) before they\'re pulled into a sprint.' },
    ],
  },
  {
    title: 'TypeScript',
    items: [
      { q: 'What is TypeScript and why use it over plain JavaScript?', a: 'A superset of JS that adds static typing, catching type errors at compile time instead of runtime — makes large codebases easier to refactor and maintain safely.' },
      { q: 'Difference between interface and type in TypeScript?', a: 'Both describe shapes. interface can be extended/re-opened (declaration merging), preferred for object/class contracts. type is more flexible (unions, intersections, primitives) but can\'t be merged after declaration.' },
      { q: 'Difference between any and unknown?', a: 'any turns off type checking completely. unknown also accepts any value but forces you to narrow/check its type before using it — safer default when the type is genuinely not known yet.' },
      { q: 'What are generics in TypeScript?', a: 'A way to write reusable functions/components that work with multiple types while keeping type safety, e.g. function identity<T>(arg: T): T — the type is inferred/specified per call instead of hardcoded.' },
    ],
  },
  {
    title: 'Microservices',
    items: [
      { q: 'What is a microservices architecture, and what\'s the tradeoff vs a monolith?', a: 'Splitting an app into small, independently deployable services that each own their own data/logic and talk over APIs/queues. Gains: independent scaling and deployment. Costs: more operational complexity, network latency, and distributed data consistency to manage.' },
      { q: 'How do microservices typically communicate with each other?', a: 'Synchronously via REST/gRPC calls, or asynchronously via a message queue/event bus (Kafka, RabbitMQ, SQS) for decoupled, more resilient communication.' },
    ],
  },
  {
    title: 'AWS / Docker / CI-CD',
    items: [
      { q: 'What is AWS S3 typically used for in a full stack app?', a: 'Object storage for static files/uploads (images, documents, PDFs) — the app uploads to a bucket and serves files via a URL/CDN instead of storing them on the app server\'s disk.' },
      { q: 'What is AWS EC2?', a: 'A virtual server (compute instance) used to host and run your backend app, giving full control over the OS/runtime — contrast with serverless (Lambda), where you don\'t manage the server at all.' },
      { q: 'What is Docker Compose used for?', a: 'Defining and running a multi-container setup (e.g., app + MongoDB + Redis) from a single docker-compose.yml with one command, instead of starting/networking each container manually.' },
      { q: 'What does a typical CI/CD pipeline in GitHub Actions do?', a: 'A workflow YAML triggered on push/PR that installs dependencies, runs lint + tests, builds the app, and (on merge to main) deploys automatically — catching regressions before they reach production.' },
    ],
  },
  {
    title: 'Redis Caching',
    items: [
      { q: 'How is Redis typically used for caching (cache-aside pattern)?', a: 'On a read, check Redis first; on a cache miss, fetch from the DB, store the result in Redis with a TTL, then return it. Later reads hit Redis directly until it expires or is invalidated on the next write.' },
    ],
  },
  {
    title: 'API Docs / Payments / Security',
    items: [
      { q: 'What is Swagger/OpenAPI used for?', a: 'A spec + toolset for documenting REST APIs (endpoints, params, request/response shapes) in a machine-readable format — auto-generates interactive API docs and can generate client SDKs.' },
      { q: 'What is a webhook, and how do Stripe webhooks work?', a: 'A webhook is an HTTP callback — Stripe sends a POST request to your server when an event happens (payment succeeded/failed/refunded). You verify the signature, then update your DB/order status based on that event, since it\'s the reliable server-to-server source of truth.' },
      { q: 'Why shouldn\'t you confirm a payment using only the client-side response?', a: 'The browser tab can close, the network can drop, or the client can be tampered with — the webhook (server-to-server) is the only guaranteed confirmation that the payment actually succeeded.' },
      { q: 'How do you design RBAC (role-based access control) with multiple roles like Admin/Organization/User?', a: 'Store the role (and permissions if needed) on the user/JWT payload, check it in middleware before granting access to a route, and always enforce it server-side — never trust a role/permission flag sent from the client.' },
    ],
  },
  {
    title: 'Be Ready to Explain — Your Projects (likely follow-up questions)',
    items: [
      { q: 'Walk me through how you implemented JWT + RBAC across 3 live platforms.', a: 'Cover: JWT issued at login with role embedded in the payload, a verifyToken middleware on protected routes, a requireRole middleware restricting endpoints per role (admin/manager/staff/customer), and why role checks must live server-side to prevent privilege escalation.' },
      { q: 'How did you reduce page load times by 40% through MongoDB indexing and query optimization?', a: 'Cover: identifying slow queries (e.g., via .explain()), adding indexes on frequently filtered/sorted fields, using projection to fetch only needed fields, and paginating large result sets instead of loading everything.' },
      { q: 'How did you integrate Stripe end-to-end (checkout, webhooks, confirmation) with zero failed-transaction disputes?', a: 'Cover: creating a Checkout Session/PaymentIntent on the backend, listening for the payment_intent.succeeded webhook to confirm payment server-side (not just the client redirect), updating booking/order status only after webhook confirmation, and handling idempotency so a retried webhook doesn\'t double-process.' },
      { q: 'How did you design the loyalty rewards engine (formula builder with fixed/percentage toggle)?', a: 'Cover: storing the reward rule (type + value) per business in MongoDB, calculating the actual reward amount server-side after payment confirmation (never trust a client-calculated value), and crediting it asynchronously so it doesn\'t block the checkout response.' },
      { q: 'How did you keep booking state in sync in real time across the customer app and admin calendar?', a: 'Be ready to say which approach you used — polling/refetch on interval, WebSockets/Socket.io push updates, or optimistic UI with server reconciliation — and why (e.g., to prevent showing a slot as available after someone else just booked it).' },
      { q: 'How would you prevent double-booking of the same slot under concurrent requests?', a: 'Cover: a unique index on (resource, slot, date) at the DB level, or an atomic findOneAndUpdate that checks-and-sets the slot\'s status in one operation, so two simultaneous requests can\'t both succeed.' },
      { q: 'How did you structure 3 interconnected apps (admin dashboard, customer marketplace, REST API server) sharing Mongoose models?', a: 'Cover: a single REST API server as the source of truth with shared Mongoose schemas, and two separate Next.js frontends (admin + marketplace) consuming that same API — keeping data shape consistent across apps.' },
      { q: 'What\'s your workflow going from a Figma design to a deployed feature within a 2-week sprint?', a: 'Cover: breaking the design into components, agreeing the API contract with the backend early, building UI against mock data in parallel, wiring up real API calls, then QA against the design before merging.' },
    ],
  },
  {
    title: 'JavaScript Deep Dive (from INTERVIEW_PREP.md)',
    items: [
      { q: 'How would you polyfill Array.prototype.map, filter, reduce, or Function.prototype.bind?', a: 'Reimplement each with a plain for loop: map/filter call the callback with (element, index, array) and collect results; reduce accumulates into a single value; bind returns a new function that calls the original with a fixed `this` plus any pre-bound arguments.' },
      { q: 'Difference between Promise.all, Promise.allSettled, Promise.race, and Promise.any?', a: 'all waits for every promise and rejects fast on the first rejection. allSettled waits for all and never rejects, returning a status per promise. race settles as soon as the first promise settles, resolve or reject. any resolves as soon as the first one fulfills, ignoring rejections until all reject.' },
      { q: 'What\'s the classic var vs let closure gotcha in a setTimeout loop?', a: 'With var (function-scoped), every callback shares the same variable and logs the final value (3, 3, 3). With let (block-scoped), each iteration gets its own binding, so callbacks log the value at that iteration (0, 1, 2).' },
      { q: 'How do you remove duplicates or group an array of objects by a key?', a: 'Dedupe primitives with [...new Set(arr)]. Group objects by a key using reduce — build an accumulator object where each key maps to an array of matching items (a "groupBy" pattern).' },
    ],
  },
  {
    title: 'React Deep Dive (from INTERVIEW_PREP.md)',
    items: [
      { q: 'Are setState calls batched in React 18?', a: 'Yes — React 18 automatically batches state updates even inside setTimeout, promises, and native event handlers, so multiple setState calls in the same tick trigger only one re-render.' },
      { q: 'Why does using the array index as a key break things when a list reorders?', a: 'React matches old and new list items by key; with index as key, reordering makes React think items merely changed content instead of moved, causing stale state or incorrect DOM updates in items like inputs. Use a stable unique id instead.' },
    ],
  },
  {
    title: 'Node.js / Backend Deep Dive (from INTERVIEW_PREP.md)',
    items: [
      { q: 'What are the phases of the Node.js event loop?', a: 'Timers → pending callbacks → poll (I/O) → check (setImmediate) → close callbacks, with process.nextTick() and Promise microtasks draining between every phase.' },
      { q: 'What are the core principles of good REST API design?', a: 'Resource-oriented, stateless endpoints using nouns plus HTTP verbs, correct status codes, versioning (e.g. /api/v1), pagination on list endpoints, and validating/sanitizing all input on the server, never trusting the client.' },
    ],
  },
  {
    title: 'Git / Docker / Testing / Deployment (from INTERVIEW_PREP.md)',
    items: [
      { q: 'What are git stash and git cherry-pick used for?', a: 'git stash temporarily shelves uncommitted changes so you can switch branches cleanly, then reapplies them later. git cherry-pick applies one specific commit from another branch without merging the whole branch.' },
      { q: 'Why use multi-stage builds in Docker?', a: 'To keep the final production image small — build/compile in an early stage with all dev dependencies, then copy only the built output into a lean final stage, discarding build tools and source.' },
      { q: 'What do you typically use to test React components?', a: 'Jest + React Testing Library — render the component, query elements the way a user would (getByText/getByRole), simulate interaction with fireEvent/userEvent, and assert on the resulting UI state.' },
      { q: 'What does a typical Next.js deployment on Vercel look like?', a: 'Zero-config deploys straight from a Git repo, automatic preview deployments per PR, and edge functions for low-latency middleware/API routes, with secrets kept out of the repo via environment variables and the platform\'s secret manager.' },
    ],
  },
];
