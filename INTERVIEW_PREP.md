# Full Stack Developer Interview Guide (2-3 YOE)

Covers JavaScript, React, Next.js, Node/Express, Databases, System Design basics, and DSA essentials — with short explanations and small runnable examples for each topic. Pair this with the hands-on components in `src/components/interview/` (those cover machine-coding rounds; this file covers the theory/conceptual rounds).

---

## Table of Contents

1. [JavaScript Core](#1-javascript-core)
2. [React](#2-react)
3. [Next.js](#3-nextjs)
4. [Node.js & Express](#4-nodejs--express)
5. [Databases](#5-databases)
6. [System Design Basics](#6-system-design-basics)
7. [DSA Essentials](#7-dsa-essentials)
8. [Bonus (Git, Docker, Testing, Deployment)](#8-bonus)

---

## 1. JavaScript Core

### 1.1 Hoisting

Variable and function declarations are moved to the top of their scope during the "creation phase," before code executes. `var` is hoisted and initialized as `undefined`. `let`/`const` are hoisted but stay in the **Temporal Dead Zone (TDZ)** until their declaration line runs — accessing them earlier throws a `ReferenceError`. Function declarations are hoisted with their full body; function expressions/arrow functions are not.

```js
console.log(a); // undefined (var hoisted)
var a = 5;

console.log(b); // ReferenceError (TDZ)
let b = 10;

greet(); // works - function declarations are fully hoisted
function greet() {
  console.log("hi");
}
```

**Interview answer in one line:** "Declarations are hoisted, not initializations. `let`/`const` exist in the TDZ until execution reaches them."

---

### 1.2 Closures

A closure is a function that "remembers" the variables from its lexical scope even after the outer function has returned. Used heavily in React hooks, debounce/throttle, and private state (module pattern).

```js
function makeCounter() {
  let count = 0;
  return function () {
    count += 1;
    return count;
  };
}

const counter = makeCounter();
counter(); // 1
counter(); // 2 - count persists between calls because of the closure
```

**Classic gotcha (loop + closure):**

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // 3, 3, 3 (var is function-scoped)
}

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 100); // 0, 1, 2 (let creates a new binding per iteration)
}
```

---

### 1.3 `this` keyword

`this` is determined by **how a function is called**, not where it's defined (except arrow functions).

| Call style | `this` value |
|---|---|
| `obj.method()` | `obj` |
| `func()` (plain call) | `undefined` in strict mode, `window`/`global` otherwise |
| `new Func()` | the newly created object |
| `func.call(ctx)` / `.apply(ctx)` / `.bind(ctx)` | `ctx` |
| Arrow function | inherits `this` from the enclosing lexical scope |

```js
const user = {
  name: "Amit",
  greet() {
    console.log(this.name); // "Amit" - called as user.greet()
  },
  greetLater() {
    setTimeout(function () {
      console.log(this.name); // undefined - plain function call loses `this`
    }, 100);
    setTimeout(() => {
      console.log(this.name); // "Amit" - arrow function inherits `this`
    }, 100);
  },
};
```

---

### 1.4 Event Loop, Microtasks & Macrotasks

JavaScript is single-threaded. The **call stack** runs synchronous code. Async work (timers, I/O) is handed off to Web APIs / libuv, and callbacks are queued:

- **Microtask queue**: Promise `.then/.catch/.finally`, `queueMicrotask`, `async/await` continuations — **highest priority**, fully drained after each synchronous block before the next macrotask runs.
- **Macrotask queue**: `setTimeout`, `setInterval`, I/O callbacks, UI rendering.

```js
console.log("1"); // sync

setTimeout(() => console.log("2"), 0); // macrotask

Promise.resolve().then(() => console.log("3")); // microtask

console.log("4"); // sync

// Output: 1, 4, 3, 2
```

**Interview answer:** "Sync code runs first, then all microtasks are drained, then one macrotask runs, then microtasks drain again, and so on."

---

### 1.5 Promises & Async/Await

A Promise represents a value that will be available later, with 3 states: `pending`, `fulfilled`, `rejected`. `async/await` is syntactic sugar over promises that makes async code read like sync code.

```js
function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      id > 0 ? resolve({ id, name: "Rahul" }) : reject(new Error("Invalid id"));
    }, 500);
  });
}

// Promise chaining
fetchUser(1)
  .then((user) => console.log(user))
  .catch((err) => console.error(err.message));

// async/await
async function loadUser() {
  try {
    const user = await fetchUser(1);
    console.log(user);
  } catch (err) {
    console.error(err.message);
  }
}
```

**Common asks:**
- `Promise.all` — waits for all, rejects fast if any one rejects.
- `Promise.allSettled` — waits for all, never rejects, gives status per promise.
- `Promise.race` — resolves/rejects as soon as the first settles.
- `Promise.any` — resolves as soon as the first fulfills, ignores rejections until all reject.

```js
const results = await Promise.allSettled([fetchUser(1), fetchUser(-1)]);
// [{status: "fulfilled", value: {...}}, {status: "rejected", reason: Error}]
```

---

### 1.6 Debounce & Throttle (implement from scratch)

Very common machine-coding ask. **Debounce**: run the function only after the user stops triggering it for `delay` ms (e.g., search-as-you-type). **Throttle**: run the function at most once every `interval` ms (e.g., scroll/resize handlers).

```js
function debounce(fn, delay) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => fn.apply(this, args), delay);
  };
}

function throttle(fn, interval) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= interval) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

const debouncedSearch = debounce((q) => console.log("searching:", q), 400);
window.addEventListener("scroll", throttle(() => console.log("scroll tick"), 200));
```

(A working React version is in [`src/components/interview/DebounceSearch.jsx`](src/components/interview/DebounceSearch.jsx).)

---

### 1.7 Deep Copy vs Shallow Copy

Shallow copy duplicates only the top level — nested objects/arrays are still shared by reference. Deep copy duplicates everything recursively.

```js
const original = { name: "Amit", address: { city: "Delhi" } };

// Shallow copy
const shallow = { ...original };
shallow.address.city = "Mumbai";
console.log(original.address.city); // "Mumbai" - nested object was shared!

// Deep copy options
const deep1 = JSON.parse(JSON.stringify(original)); // simple, but loses functions/undefined/Date
const deep2 = structuredClone(original); // modern, handles most types correctly
```

---

### 1.8 Currying

Transforming a function `f(a, b, c)` into `f(a)(b)(c)` — each call returns a new function until all arguments are collected. Useful for creating reusable, partially-applied functions.

```js
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) return fn.apply(this, args);
    return (...next) => curried(...args, ...next);
  };
}

const add = (a, b, c) => a + b + c;
const curriedAdd = curry(add);

curriedAdd(1)(2)(3); // 6
curriedAdd(1, 2)(3); // 6
curriedAdd(1, 2, 3); // 6
```

---

### 1.9 Polyfills (implement built-ins from scratch)

Very frequently asked to check core understanding.

```js
// Array.prototype.map
Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

// Array.prototype.filter
Array.prototype.myFilter = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) result.push(this[i]);
  }
  return result;
};

// Array.prototype.reduce
Array.prototype.myReduce = function (callback, initialValue) {
  let acc = initialValue;
  let startIndex = 0;
  if (acc === undefined) {
    acc = this[0];
    startIndex = 1;
  }
  for (let i = startIndex; i < this.length; i++) {
    acc = callback(acc, this[i], i, this);
  }
  return acc;
};

// Function.prototype.bind
Function.prototype.myBind = function (context, ...boundArgs) {
  const fn = this;
  return function (...args) {
    return fn.apply(context, [...boundArgs, ...args]);
  };
};

// Example
[1, 2, 3].myMap((x) => x * 2); // [2, 4, 6]
[1, 2, 3, 4].myFilter((x) => x % 2 === 0); // [2, 4]
[1, 2, 3].myReduce((acc, x) => acc + x, 0); // 6
```

---

### 1.10 Useful array/object methods to know cold

`map`, `filter`, `reduce`, `find`, `findIndex`, `some`, `every`, `flat`, `flatMap`, `Object.keys/values/entries`, `Object.assign`, spread/rest, `Array.from`, `Set`/`Map` for uniqueness and O(1) lookups.

```js
// Remove duplicates
const unique = [...new Set([1, 2, 2, 3, 3, 3])]; // [1, 2, 3]

// Group by (common interview task)
function groupBy(arr, key) {
  return arr.reduce((acc, item) => {
    const group = item[key];
    acc[group] = acc[group] || [];
    acc[group].push(item);
    return acc;
  }, {});
}
```

---

## 2. React

### 2.1 Virtual DOM & Reconciliation

React keeps a lightweight JS representation of the UI (the Virtual DOM). On state change, it builds a new virtual tree, **diffs** it against the previous one (reconciliation), and applies only the minimal set of real DOM updates. The `key` prop tells React which list items are the same across renders — using array index as key breaks this when the list reorders, causing stale state/incorrect re-renders.

```jsx
// Bad: index as key when list can reorder
{items.map((item, i) => <Row key={i} {...item} />)}

// Good: stable unique id as key
{items.map((item) => <Row key={item.id} {...item} />)}
```

---

### 2.2 useState

```jsx
const [count, setCount] = useState(0);

// Functional update - always use this when new state depends on old state,
// especially inside loops, async callbacks, or rapid consecutive calls.
setCount((prev) => prev + 1);
```

State updates are **batched** in React 18+ (even inside `setTimeout`/promises), and are **asynchronous** — reading `count` right after calling `setCount` still gives the old value in that render.

---

### 2.3 useEffect (dependency array & cleanup)

Runs side effects after render/commit. The dependency array controls when it re-runs:
- `[]` → runs once, on mount.
- `[dep]` → runs on mount + whenever `dep` changes.
- no array → runs after **every** render.

The returned function is the **cleanup**, called before the next effect run and on unmount — critical for removing listeners, clearing timers, cancelling subscriptions.

```jsx
useEffect(() => {
  const timer = setInterval(() => console.log("tick"), 1000);
  return () => clearInterval(timer); // cleanup - prevents leaks
}, []);

useEffect(() => {
  function handleResize() {
    console.log(window.innerWidth);
  }
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);
```

**Common gotcha:** stale closures — an effect captures the state/props values from the render it was created in. Fix with the correct dependency array or functional updates.

---

### 2.4 useMemo vs useCallback

Both **memoize** something between renders so it isn't recreated unnecessarily — `useMemo` memoizes a **computed value**, `useCallback` memoizes a **function reference**. Mainly useful to (a) avoid expensive recalculation, and (b) keep prop references stable so `React.memo` children don't re-render needlessly.

```jsx
// useMemo - avoid recomputation on every render
const sortedList = useMemo(() => {
  return [...items].sort((a, b) => a.price - b.price);
}, [items]);

// useCallback - keep function reference stable for a memoized child
const handleClick = useCallback(() => {
  doSomething(id);
}, [id]);

const Child = React.memo(function Child({ onClick }) {
  console.log("child rendered");
  return <button onClick={onClick}>Click</button>;
});
```

**Interview answer:** "`useCallback(fn, deps)` is basically `useMemo(() => fn, deps)`." Don't overuse either — memoizing everything adds overhead without benefit for cheap computations.

---

### 2.5 useRef

Holds a mutable value that **persists across renders without causing a re-render** when changed. Two main uses: (1) accessing a DOM node directly, (2) storing a mutable "instance variable" (like a timer id or previous value).

```jsx
function TextInputWithFocus() {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus(); // direct DOM access
  }, []);
  return <input ref={inputRef} />;
}

function useRenderCount() {
  const count = useRef(0);
  count.current += 1; // doesn't trigger a re-render, unlike useState
  return count.current;
}
```

---

### 2.6 Custom Hooks

A custom hook is just a function starting with `use` that composes built-in hooks to share stateful logic across components.

```jsx
function useDebouncedValue(value, delay = 500) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
}

// usage
function Search() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebouncedValue(query);
  // fetch using debouncedQuery
}
```

---

### 2.7 Controlled vs Uncontrolled Components

- **Controlled**: form value is driven by React state (`value` + `onChange`). Single source of truth, easy validation, but a re-render per keystroke.
- **Uncontrolled**: form value lives in the DOM itself, read via `ref` when needed. Less re-rendering, simpler for basic cases, harder to validate live.

```jsx
// Controlled
function ControlledInput() {
  const [value, setValue] = useState("");
  return <input value={value} onChange={(e) => setValue(e.target.value)} />;
}

// Uncontrolled
function UncontrolledInput() {
  const inputRef = useRef(null);
  const handleSubmit = () => console.log(inputRef.current.value);
  return <input ref={inputRef} defaultValue="" />;
}
```

---

### 2.8 Context API

Avoids prop drilling by letting any descendant read a value without passing it through every level.

```jsx
const ThemeContext = createContext("light");

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={theme}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  const theme = useContext(ThemeContext); // no props needed
  return <div className={theme}>Toolbar</div>;
}
```

**Caveat commonly asked:** every consumer re-renders when the context value changes, even if it only cares about part of it — for large/high-frequency state, prefer Redux/Zustand or split into multiple smaller contexts.

---

### 2.9 State Management: Context vs Redux vs Zustand

| | Best for |
|---|---|
| `useState`/`useReducer` | Local component state |
| Context API | Low-frequency global state (theme, auth user) shared across a subtree |
| Redux (Toolkit) | Large apps, complex state logic, time-travel debugging, strict patterns |
| Zustand | Simpler, less boilerplate global state, no provider wrapping needed |

```js
// Zustand example (minimal global store)
import { create } from "zustand";

const useCartStore = create((set) => ({
  items: [],
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
}));

function Cart() {
  const items = useCartStore((state) => state.items); // only re-renders on `items` change
}
```

---

### 2.10 Performance Optimization

- `React.memo(Component)` — skip re-render if props are shallow-equal.
- `useMemo`/`useCallback` — stabilize expensive values/function references (see 2.4).
- **Code splitting** with `React.lazy` + `Suspense` — load a component's code only when needed.
- **List virtualization** (`react-window`) — render only visible rows for huge lists.
- Avoid inline object/array/function literals as props to memoized children (new reference every render defeats memoization).

```jsx
const LazyDashboard = React.lazy(() => import("./Dashboard"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <LazyDashboard />
    </Suspense>
  );
}
```

---

### 2.11 Quick-fire React questions

- **Why do hooks have rules (no conditionals/loops)?** React relies on the *call order* of hooks between renders to match state to the right `useState` call — conditional hooks break that mapping.
- **What triggers a re-render?** State change, prop change, parent re-render, context value change.
- **`key` prop purpose?** Stable list-item identity across renders for correct reconciliation, not a general "unique id for styling" purpose.
- **Difference between `useEffect` and `useLayoutEffect`?** `useLayoutEffect` runs synchronously after DOM mutations but before the browser paints (use for reading/mutating layout to avoid visual flicker); `useEffect` runs asynchronously after paint.

---

## 3. Next.js

### 3.1 App Router vs Pages Router

App Router (`src/app/`) is the modern default: file-based routing with `layout.js`, nested layouts, React Server Components by default, streaming, and colocated `loading.js`/`error.js`. Pages Router (`pages/`) is the older model: every file in `pages/` is a client-rendered-by-default page, data fetching via `getServerSideProps`/`getStaticProps`.

### 3.2 Server Components vs Client Components

In the App Router, components are **Server Components by default** — they run only on the server, can directly `await` a database call, never ship their JS to the browser, but **cannot** use `useState`, `useEffect`, event handlers, or browser APIs. Add `"use client"` at the top of a file to opt into a **Client Component** when you need interactivity.

```jsx
// app/users/page.jsx - Server Component (default, no "use client")
export default async function UsersPage() {
  const res = await fetch("https://api.example.com/users", { cache: "no-store" });
  const users = await res.json();
  return <UserList users={users} />;
}
```

```jsx
// app/components/Counter.jsx
"use client"; // needed because we use useState

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

### 3.3 SSR vs SSG vs ISR vs CSR

| Strategy | When HTML is generated | Use case |
|---|---|---|
| **CSR** (Client-Side Rendering) | In the browser, after JS loads | Highly interactive, non-SEO-critical dashboards |
| **SSR** (Server-Side Rendering) | Per-request, on the server | Frequently changing, personalized data (e.g., user dashboard) |
| **SSG** (Static Site Generation) | At build time | Content that rarely changes (blogs, marketing pages) |
| **ISR** (Incremental Static Regeneration) | At build time, then regenerated in the background after a time interval | Mostly-static pages that need periodic freshness (product listings) |

```jsx
// SSG with periodic revalidation (ISR) in the App Router
export const revalidate = 60; // regenerate this page at most once every 60s

export default async function ProductsPage() {
  const products = await fetch("https://api.example.com/products").then((r) => r.json());
  return <ProductList products={products} />;
}
```

### 3.4 API Routes / Route Handlers

```js
// app/api/users/route.js
export async function GET() {
  const users = await db.user.findMany();
  return Response.json(users);
}

export async function POST(request) {
  const body = await request.json();
  const user = await db.user.create({ data: body });
  return Response.json(user, { status: 201 });
}
```

### 3.5 Middleware

Runs before a request completes — commonly used for auth checks, redirects, and header rewriting, at the edge (before hitting a page or API route).

```js
// middleware.js
import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("token");
  if (!token && request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}

export const config = { matcher: ["/dashboard/:path*"] };
```

### 3.6 Data fetching patterns

- Server Components: fetch directly with `await fetch(...)` or a DB client — no `useEffect` needed.
- Client Components: use `useEffect` + `fetch`, or a library like SWR/React Query for caching, retries, and revalidation.

```jsx
"use client";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

function Profile() {
  const { data, error, isLoading } = useSWR("/api/user", fetcher);
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to load</p>;
  return <p>{data.name}</p>;
}
```

---

## 4. Node.js & Express

### 4.1 Event Loop in Node.js

Same core concept as the browser, but Node uses **libuv** to handle async I/O (file system, network) via a thread pool, keeping the main thread free. Phases per loop tick: timers → pending callbacks → poll (I/O) → check (`setImmediate`) → close callbacks. `process.nextTick()` and Promise microtasks run **between every phase**, before moving on.

### 4.2 Middleware pattern (Express)

Middleware are functions that run in sequence for each request, each receiving `(req, res, next)`. Call `next()` to pass control forward, or send a response to end the chain.

```js
const express = require("express");
const app = express();

app.use(express.json()); // built-in middleware - parses JSON body

function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next(); // must call next() or the request hangs
}

function authGuard(req, res, next) {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: "Unauthorized" });
  next();
}

app.use(logger);
app.get("/dashboard", authGuard, (req, res) => {
  res.json({ message: "Welcome" });
});

// Centralized error-handling middleware (4 args = Express treats it specially)
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ message: err.message });
});
```

### 4.3 REST API design

- Use nouns for resources, HTTP verbs for actions: `GET /users`, `POST /users`, `GET /users/:id`, `PATCH /users/:id`, `DELETE /users/:id`.
- Use proper status codes: `200` OK, `201` Created, `204` No Content, `400` Bad Request, `401` Unauthorized, `403` Forbidden, `404` Not Found, `409` Conflict, `500` Server Error.
- Version your API (`/api/v1/...`), paginate list endpoints, and validate input at the boundary.

### 4.4 JWT Authentication & Authorization

**Authentication** = who are you (login, verify identity). **Authorization** = what are you allowed to do (roles/permissions). JWT is a signed, stateless token — the server doesn't need to store sessions, it just verifies the signature on each request.

```js
const jwt = require("jsonwebtoken");

// On login - issue a token
function login(user) {
  const token = jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
  return token;
}

// Middleware to protect routes
function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization; // "Bearer <token>"
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No token" });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.user = decoded;
    next();
  });
}

// Role-based access
function requireRole(role) {
  return (req, res, next) => {
    if (req.user.role !== role) return res.status(403).json({ message: "Forbidden" });
    next();
  };
}

app.get("/admin", verifyToken, requireRole("admin"), (req, res) => {
  res.json({ message: "Admin area" });
});
```

### 4.5 Error handling

Wrap async route handlers so rejected promises reach Express's error middleware instead of crashing the process.

```js
function asyncHandler(fn) {
  return (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);
}

app.get(
  "/users/:id",
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
      const err = new Error("User not found");
      err.status = 404;
      throw err;
    }
    res.json(user);
  })
);
```

### 4.6 File upload (Multer)

```js
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

app.post("/upload", upload.single("avatar"), (req, res) => {
  res.json({ file: req.file });
});
```

### 4.7 Rate limiting

```js
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per window
});

app.use("/api", limiter);
```

---

## 5. Databases

### 5.1 MongoDB & Mongoose

**Schema design:**

```js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
```

**Indexing** speeds up queries on frequently-filtered/sorted fields at the cost of extra write overhead and storage:

```js
userSchema.index({ email: 1 }, { unique: true });
```

**Aggregation pipeline** — a very common ask, e.g., "group orders by user and sum totals":

```js
const result = await Order.aggregate([
  { $match: { status: "completed" } },
  { $group: { _id: "$userId", totalSpent: { $sum: "$amount" }, orders: { $sum: 1 } } },
  { $sort: { totalSpent: -1 } },
  { $limit: 10 },
]);
```

**Pagination in MongoDB:**

```js
const page = 2;
const limit = 10;
const users = await User.find()
  .skip((page - 1) * limit)
  .limit(limit);
```

### 5.2 SQL basics & joins

```sql
-- INNER JOIN: only rows with a match in both tables
SELECT users.name, orders.total
FROM users
INNER JOIN orders ON users.id = orders.user_id;

-- LEFT JOIN: all users, matched orders where they exist (NULL otherwise)
SELECT users.name, orders.total
FROM users
LEFT JOIN orders ON users.id = orders.user_id;

-- GROUP BY + aggregate
SELECT user_id, SUM(total) AS total_spent
FROM orders
GROUP BY user_id
HAVING SUM(total) > 1000;
```

**Normalization** (reduce redundancy, split data into related tables) vs **denormalization** (duplicate data intentionally for read performance) is a common conceptual question — know the tradeoff: normalized = safer writes, more joins; denormalized = faster reads, harder to keep consistent.

---

## 6. System Design Basics

Not expected to design Twitter at 2-3 YOE, but should reason about these fundamentals:

### 6.1 API Design Principles
- Keep endpoints resource-oriented and stateless.
- Validate and sanitize all input server-side (never trust the client).
- Return consistent error shapes: `{ message, code }`.

### 6.2 Caching Strategies
- **Client-side**: browser cache, SWR/React Query cache.
- **CDN**: cache static assets/pages close to the user (Vercel Edge, Cloudflare).
- **Server-side**: Redis for frequently-read, rarely-changed data (e.g., session store, computed aggregates).
- **Cache invalidation** is the hard part — use TTLs or explicit invalidation on writes.

### 6.3 Scaling Basics
- **Vertical scaling**: bigger server (simple, has a ceiling).
- **Horizontal scaling**: more server instances behind a load balancer (needs stateless servers — don't store session data in server memory, use Redis/JWT instead).
- **Database read replicas** for read-heavy workloads; sharding for write-heavy at large scale.

### 6.4 DB Schema Design Example ("design a URL shortener" — common one)

```
urls
- id (PK)
- short_code (unique, indexed)
- original_url
- user_id (FK, nullable)
- created_at
- click_count
```
Key discussion points: how to generate a unique `short_code` (base62 encoding of an auto-increment id, or a hash + collision check), how to handle redirect performance (cache hot short codes in Redis), and how to track analytics without slowing down the redirect (increment click_count asynchronously via a queue).

---

## 7. DSA Essentials

At 2-3 YOE, expect 1-2 easy/medium problems, not hard graph/DP problems (though some product companies do ask more). Know these patterns cold:

### 7.1 Two Pointer

```js
// Check if array has a pair that sums to target (sorted array)
function hasPairWithSum(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) return true;
    sum < target ? left++ : right--;
  }
  return false;
}
```

### 7.2 Sliding Window

```js
// Longest substring without repeating characters
function lengthOfLongestSubstring(s) {
  const seen = new Map();
  let maxLen = 0, start = 0;

  for (let end = 0; end < s.length; end++) {
    const char = s[end];
    if (seen.has(char) && seen.get(char) >= start) {
      start = seen.get(char) + 1;
    }
    seen.set(char, end);
    maxLen = Math.max(maxLen, end - start + 1);
  }
  return maxLen;
}
```

### 7.3 HashMap for O(n) lookups

```js
// Two Sum
function twoSum(nums, target) {
  const seen = new Map(); // value -> index
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (seen.has(complement)) return [seen.get(complement), i];
    seen.set(nums[i], i);
  }
  return [];
}
```

### 7.4 Recursion & Basic DP

```js
// Fibonacci - naive recursion is O(2^n), memoized is O(n)
function fib(n, memo = {}) {
  if (n <= 1) return n;
  if (memo[n]) return memo[n];
  return (memo[n] = fib(n - 1, memo) + fib(n - 2, memo));
}
```

---

## 8. Bonus

### 8.1 Git Workflow
- Feature branches off `main`/`develop`, PRs with code review, squash or rebase merges to keep history clean.
- Know `git rebase` vs `git merge` (rebase rewrites history for a linear log, merge preserves it with a merge commit).
- `git stash`, `git cherry-pick`, resolving merge conflicts are common practical asks.

### 8.2 Docker Basics

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```
Know the difference between an **image** (blueprint) and a **container** (running instance), and why multi-stage builds keep production images small.

### 8.3 Testing (Jest / React Testing Library)

```jsx
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("increments count on button click", () => {
  render(<Counter />);
  const button = screen.getByText("+");
  fireEvent.click(button);
  expect(screen.getByText("1")).toBeInTheDocument();
});
```
Know the difference between **unit tests** (isolated function/component), **integration tests** (multiple units together), and **E2E tests** (Cypress/Playwright, full user flow through a real browser).

### 8.4 Deployment
- **Vercel**: zero-config for Next.js, automatic preview deployments per PR, edge functions.
- Environment variables: never commit secrets, use `.env.local` locally and the platform's secret manager in production.
- Basic CI/CD understanding: run lint + tests on every PR before merge/deploy.

---

## How to use this file

1. Skim the table of contents and rate yourself 1-5 per topic.
2. For anything below a 3, re-read that section and retype the code example from memory (don't copy-paste).
3. Cross-reference the matching hands-on component in `src/components/interview/` where one exists (Counter, Todo, DebounceSearch, ApiFetch, FormValidation, etc.) and be ready to build it live in 15-20 minutes.
