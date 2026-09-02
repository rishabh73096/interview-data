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
        content: `> Ye roadmap zero se nahi hai. Ye ek working MERN developer (~2 saal) ko \"Full Stack + React Native + AI Application Engineer\" tak le jaane ke liye hai.

Agar tumhe already React, Next.js, Node.js, MongoDB, REST APIs, auth aur thoda system design aata hai — to tum yahin se aage badhoge, basics repeat nahi karoge.

## Target profile (5-6 saal wala level)

\`\`\`flow
Full Stack Engineer
React / Next.js / TypeScript
Node.js + Python / FastAPI
React Native (Android + iOS)
LLM Apps + RAG + AI Agents + MCP
MongoDB / PostgreSQL / Redis
AWS + Docker + CI/CD + System Design
\`\`\`

Sirf \"MERN developer\" likhne ke bajaye is direction mein jao:

> Full Stack Engineer | React / Next.js | Node.js | TypeScript | React Native | AI / LLM Apps | RAG | AI Agents | MongoDB | Redis | AWS

## Core strategy

- React Native aur AI ko **alag career tracks mat samjho** — ek hi project mein dono use karo.
- Har phase ke end mein ek real project ship karo, todo app nahi.
- Node aur React ko side mein maintain karte raho jab tum naye topics padh rahe ho.
- DSA, system design aur backend fundamentals **poore saal chalte rahenge**, sequential nahi hai.`,
      },
      {
        id: 'what-not-to-prioritize',
        title: 'What NOT To Prioritize',
        duration: 'Mindset',
        content: `> Tumhara fastest path full-stack profile se hai — data scientist banne ki zaroorat nahi.

Abhi in cheezon par time mat lagao:

- Apna khud ka LLM train karna
- Deep PyTorch / TensorFlow
- Advanced neural network mathematics
- Models scratch se banana
- Kaggle-style data science competitions

Ye ML/AI **research** roles ke liye useful hain, tumhare application-engineer path ke liye nahi.

## Iske badle ye seekho

\`\`\`flow
Prompt engineering + structured output
Tool / function calling
Embeddings + vector search
RAG pipelines
AI agents + MCP
Production AI (cost, eval, guardrails)
\`\`\`

\"Chatbot kaise banate hain\" mat seekho — **AI systems jo actual kaam karte hain** wo seekho.`,
      },
      {
        id: 'final-projects',
        title: 'The 5 Portfolio Projects',
        duration: 'Build across the year',
        content: `> 20 chhote projects mat banao. 5 strong projects banao jo pura stack dikhaayein.

## 1. Full-Stack SaaS

- Next.js + Node.js + TypeScript
- MongoDB / PostgreSQL + Redis
- Auth, billing (Stripe), rate limiting
- Docker + CI/CD + AWS deploy

## 2. Mobile SaaS (React Native)

- Expo + TypeScript
- Push notifications, offline support, deep linking
- Payments, secure token storage
- Play Store par actually publish

## 3. AI Interview Platform (Web + Mobile)

\`\`\`flow
Resume + Job Description
Resume analysis + JD analysis
Skill gap
Interview questions
Personalized answers
Mock interview + feedback
\`\`\`

- Voice: speech-to-text + text-to-speech
- Node + LLM + AI evaluation
- Tumhare apne developer background ko perfectly fit karta hai

## 4. RAG Knowledge Platform

\`\`\`flow
PDF / Docs
Text extraction + chunking
Embeddings
Vector DB
Retrieval + reranking
LLM answer with citations
\`\`\`

Upload docs -> questions poochho -> source ke saath answer.

## 5. AI Agent Platform

\`\`\`flow
User goal
AI Agent loop
Tools: search / database / calculator / email / custom API
Human approval step
Result
\`\`\`

- Auth, usage limits, Redis, background jobs / queue
- Agent sirf jawab nahi deta — kaam karta hai

## Bonus (resume ke liye sabse valuable)

Ek normal SaaS mein AI feature add karo: AI recommendations, AI support, report summaries, natural-language search, AI analytics. Ye dikhata hai \"I integrate AI into production apps\", na ki \"maine ek ChatGPT clone banaya\".`,
      },
      {
        id: 'timeline',
        title: '9-12 Month Timeline',
        duration: 'Plan',
        content: `> Ye guideline hai, strict deadline nahi. Backend, system design aur DSA throughout continue karo.

| Month | Focus |
| --- | --- |
| 1 | TypeScript + modern React / Next.js |
| 2 | Backend + API engineering (production Node) |
| 3 | PostgreSQL + MongoDB deep + Redis |
| 4 | React Native fundamentals |
| 5 | React Native production + Play Store deploy |
| 6 | AWS + Docker + CI/CD + System Design |
| 7 | LLM fundamentals + AI APIs |
| 8 | RAG |
| 9 | AI Agents + MCP |
| 10 | Python + FastAPI for AI |
| 11 | Production AI + AI security / evaluation |
| 12 | Big combined project + interview / system design prep |

## Recommended learning order

\`\`\`flow
Current skills
TypeScript + modern React / Next.js
Production backend + APIs
Databases + Redis
React Native + mobile production
AWS + Docker + CI/CD + System Design
LLM fundamentals + AI APIs
RAG
AI Agents + MCP
Python + FastAPI
Production AI + evaluation + security
Advanced architecture + big project
\`\`\``,
      },
    ],
  },
  {
    id: 'core-engineering',
    title: 'Core Engineering (Web + Backend)',
    phases: [
      {
        id: 'phase-0-foundation',
        title: 'Phase 0 — Foundation Upgrade',
        duration: '1-2 weeks',
        content: `> Ye tumhe already aata hai — sirf strengthen karo aur TypeScript ko seriously lo.

\`\`\`flow
JavaScript
TypeScript (primary language se aage)
\`\`\`

## Revise

- JavaScript ES6+, async/await, Promises
- Closures, event loop, \`this\`, prototypes
- HTTP / HTTPS, REST, status codes
- Auth basics (JWT, sessions)
- SQL + MongoDB basics
- Git / GitHub workflows

## New focus — TypeScript properly

- Types vs interfaces, unions, generics
- Utility types (\`Partial\`, \`Pick\`, \`Omit\`, \`Record\`)
- Narrowing, discriminated unions
- Typing API responses end-to-end
- \`zod\` / \`valibot\` for runtime validation + inferred types`,
      },
      {
        id: 'phase-1-frontend',
        title: 'Phase 1 — Modern Frontend',
        duration: '3-4 weeks',
        content: `> Goal: production-level SaaS web app, todo app nahi.

## React (deep)

- Hooks, context, custom hooks
- State management: Zustand / Redux Toolkit
- Performance: memo, \`useMemo\`, \`useCallback\`, code splitting
- Lazy loading, Suspense, error boundaries
- TanStack Query (server state, caching, mutations, optimistic updates)

## Next.js (App Router)

- Server vs Client Components
- SSR / SSG / ISR — kab kya
- Route handlers / API routes, middleware
- Auth (NextAuth / custom), protected routes
- Caching layers, revalidation
- SEO, metadata, image optimization

## UI

- Tailwind CSS, \`shadcn/ui\`
- Responsive + accessible (a11y) design
- Loading / empty / error states har jagah

## Project

Ek real SaaS front-end: dashboard, auth, settings, billing UI, data tables with server-side pagination.`,
      },
      {
        id: 'phase-2-backend',
        title: 'Phase 2 — Backend Engineering',
        duration: '3-4 weeks',
        content: `> Node tumhe aata hai — ab production level pe le jao.

## Node.js internals

- Event loop phases, microtasks
- Streams, buffers, backpressure
- Worker threads, clustering
- Memory leaks, profiling

## API engineering

- REST design, versioning, consistent error shape
- Validation (zod), pagination, filtering, sorting
- Rate limiting, idempotency keys
- OpenAPI / Swagger docs

## Security

- JWT access + refresh tokens, rotation
- OAuth2, RBAC / ABAC
- CORS, CSRF, XSS, injection (SQL / NoSQL)
- Password hashing (argon2 / bcrypt), secrets management

## Architecture

\`\`\`flow
Route / Controller
Service (business logic)
Repository (data access)
Database
\`\`\`

Samjho **kab aur kyun** ye layering use karni hai — chhote apps mein over-engineering mat karo.`,
      },
      {
        id: 'phase-3-databases',
        title: 'Phase 3 — Databases + Redis',
        duration: '2-3 weeks',
        content: `> Goal: SQL vs NoSQL — kab kya use karna hai, confidently bata sako.

## MongoDB (deep)

- Schema design, embedding vs referencing
- Indexes (compound, partial, TTL), \`explain()\`
- Aggregation pipeline
- Transactions, replication, sharding basics
- MongoDB Atlas + **Atlas Vector Search** (RAG ke liye kaam aayega)

## PostgreSQL (properly seekho)

- Tables, relationships, joins, constraints
- Normalization vs denormalization
- Indexes, query planning, transactions, isolation levels
- \`JSONB\`, full-text search

## Redis

- Caching patterns (cache-aside, write-through)
- Sessions, rate limiter
- Pub/Sub, distributed locks
- Queue basics (BullMQ)

| Use case | Pick |
| --- | --- |
| Relational data, strong consistency | PostgreSQL |
| Flexible schema, fast iteration, docs | MongoDB |
| Cache, sessions, real-time counters | Redis |
| Semantic / similarity search | Vector DB / Atlas Vector Search |`,
      },
    ],
  },
  {
    id: 'mobile',
    title: 'Mobile (React Native)',
    phases: [
      {
        id: 'phase-4-react-native',
        title: 'Phase 4 — React Native Fundamentals',
        duration: '3-4 weeks',
        content: `> React se direct transition — naya ecosystem nahi seekhna padega.

\`\`\`flow
React
React Native + Expo
Android / iOS build
\`\`\`

## Basics

- Expo (managed workflow) + TypeScript
- Core components, \`StyleSheet\`, Flexbox differences
- Platform-specific code (\`Platform.select\`)
- Navigation: stack, tabs, drawer, nested, deep linking

## Device features

- Camera / gallery, file system
- Location, permissions
- AsyncStorage, secure storage
- Biometrics
- Push notifications (Expo Notifications)

## Data + state

- TanStack Query for server state
- Zustand for local state
- Axios / fetch, auth headers, interceptors

## Project

Ek app jo tumhare existing Node backend ko consume kare — login, list + detail, create form, image upload.`,
      },
      {
        id: 'phase-5-rn-production',
        title: 'Phase 5 — RN Production & Deployment',
        duration: '3-4 weeks',
        content: `> Yahan actual app-development skills banti hain.

## Production concerns

- Auth: JWT + refresh, secure token storage (Keychain / Keystore)
- Offline handling, network error UX, retry
- Pagination, infinite scroll
- Performance: list virtualization (\`FlashList\`), re-render control
- Crash / error monitoring (Sentry)
- Deep linking + universal links
- Over-the-air updates (EAS Update)

## Publishing

\`\`\`flow
Expo EAS build
App signing
Android AAB -> Play Store
iOS build -> App Store / TestFlight
Environment variables (dev / staging / prod)
\`\`\`

## Goal

Kam se kam **1 real app Play Store par live** — portfolio ke liye bahut valuable.`,
      },
      {
        id: 'phase-13-advanced-mobile',
        title: 'Phase 13 — Advanced Mobile (later)',
        duration: '2-3 weeks',
        content: `> React Native comfortable hone ke baad. Full Swift / Kotlin developer banne ki zaroorat nahi — bas native problems debug karna aana chahiye.

- Native modules basics
- Android (Gradle, manifest) + iOS (Xcode, Info.plist) basics
- Thoda Swift + Kotlin (padh ke samajh sako)
- Native debugging, performance profiling (Flipper / Hermes)
- Background tasks, app lifecycle
- Advanced push notifications (rich, actions, silent)`,
      },
    ],
  },
  {
    id: 'infra-system-design',
    title: 'Infra & System Design',
    phases: [
      {
        id: 'phase-6-devops-cloud',
        title: 'Phase 6 — DevOps + Cloud',
        duration: '3-4 weeks',
        content: `> Deploy karna, monitor karna, scale karna — ye beginners skip kar dete hain.

## AWS fundamentals

- EC2, S3, CloudFront, Route 53
- IAM (roles, policies — least privilege)
- RDS, Lambda basics
- CloudWatch (logs, metrics, alarms)

## Tooling

- Docker + Docker Compose
- CI/CD: GitHub Actions (test -> build -> deploy)
- Nginx (reverse proxy, TLS)
- Env / secrets management
- Structured logging + monitoring

\`\`\`flow
User
CloudFront (CDN)
Load Balancer
Backend (containers)
Redis
Database
\`\`\``,
      },
      {
        id: 'phase-7-system-design',
        title: 'Phase 7 — System Design',
        duration: 'Ongoing',
        content: `> Poore saal chalta rahega. (Is site ka /system-design section bhi use karo.)

## Fundamentals

- Scalability, availability, reliability
- CAP theorem, consistency models
- Horizontal vs vertical scaling
- Load balancing

## Building blocks

- CDN, cache, queue, worker
- WebSocket / real-time
- DB replication, sharding, partitioning
- Object storage

## Practice designs

- Booking system, payment system
- Chat system, notification system
- File upload service
- Food delivery, Instagram-style feed, YouTube-style system`,
      },
      {
        id: 'phase-14-advanced-architecture',
        title: 'Phase 14 — Advanced Architecture',
        duration: 'Ongoing',
        content: `> Sab kuch combine karne ke baad.

## Distributed systems

- Microservices, service boundaries
- API gateway
- Event-driven architecture, message brokers (Kafka / RabbitMQ / SQS)
- Queues, workers, background jobs
- Distributed locks, idempotency, eventual consistency
- Retries, circuit breakers, saga pattern

## Real-time

- WebSockets, Socket.IO
- Redis Pub/Sub
- Presence, fan-out patterns`,
      },
    ],
  },
  {
    id: 'ai-engineering',
    title: 'AI Application Engineering',
    phases: [
      {
        id: 'phase-8-ai-fundamentals',
        title: 'Phase 8 — AI / LLM Fundamentals',
        duration: '2-3 weeks',
        content: `> Hardcore ML math se shuru mat karo. Application-level fundamentals pehle.

\`\`\`flow
User prompt
LLM
Token generation
Response
\`\`\`

## Concepts

- AI vs ML vs Deep Learning
- LLMs, tokens, context window
- Temperature, top-p, sampling
- Prompt engineering, system vs user prompts
- Structured output (JSON mode / schemas)
- Streaming responses
- Function / tool calling
- Embeddings + vector search
- Hallucinations, limitations, AI safety basics

Months ML mathematics par mat lagao — abhi nahi.`,
      },
      {
        id: 'phase-9-ai-app-dev',
        title: 'Phase 9 — AI Application Development',
        duration: '3-4 weeks',
        content: `> Tum React + Node jaante ho — ab LLM ko us stack mein plug karo.

\`\`\`flow
React / React Native
Node.js API
Auth + rate limit
AI service
LLM
Tools / DB / vector DB
Streamed response
\`\`\`

## Frontend

- AI chat UI, streaming rendering
- Markdown + code rendering
- File upload
- Loading / error / retry states

## Backend

- OpenAI / Anthropic / Gemini APIs
- Tool / function calling
- Structured JSON responses
- Conversation / memory management
- Token + cost tracking
- Rate limiting, retry, fallback model
- Response caching

## Project

**AI Interview App** (web + mobile): resume + JD -> skill gap -> questions -> mock interview -> feedback.`,
      },
      {
        id: 'phase-10-rag',
        title: 'Phase 10 — RAG',
        duration: '3-4 weeks',
        content: `> Tumhari pehli serious AI skill. MongoDB aata hai to Atlas Vector Search bhi saath seekho.

\`\`\`flow
Documents
Chunking
Embeddings
Vector DB
Retrieval
Reranking
LLM
Answer with citations
\`\`\`

## Learn

- Chunking strategies (size, overlap, semantic)
- Embedding models, dimensions, cost
- Semantic search, hybrid search (keyword + vector)
- Metadata filtering
- Reranking
- Citations / source attribution
- RAG evaluation (faithfulness, relevance)
- Vector DBs: Pinecone / Qdrant + MongoDB Atlas Vector Search

## Project

**AI Knowledge Assistant**: PDFs upload -> questions -> answers with sources + conversation history.`,
      },
      {
        id: 'phase-11-agents-mcp',
        title: 'Phase 11 — AI Agents + MCP',
        duration: '3-5 weeks',
        content: `> Chatbot se aage. Agents jo multi-step kaam karte hain.

\`\`\`flow
User goal
Agent: plan
Agent loop: think -> call tool -> observe
Tools: search / database / calculator / email / custom API
Human approval (when needed)
Final result
\`\`\`

## Learn

- Tool calling, agent loops
- Planning, memory, agent state
- Multi-step tasks, human-in-the-loop approval
- Agent orchestration
- MCP (Model Context Protocol) — tools / resources ko standard way mein expose karna
- Frameworks: LangGraph / similar

## Example

> \"Mere liye suitable React jobs dhoondo aur applications prepare karo.\"
> Agent: search -> filter -> analyze JD -> compare resume -> prepare application -> approval maango.

## Project

**AI Agent SaaS**: multi-tool agent + auth + usage limits + Redis + background jobs.`,
      },
      {
        id: 'phase-12-python-fastapi',
        title: 'Phase 12 — Python + FastAPI for AI',
        duration: '2-3 weeks',
        content: `> Node mat chhodo. Python sirf AI ecosystem ke liye.

\`\`\`flow
Node.js -> main backend
Python / FastAPI -> AI services
\`\`\`

## Learn

- Python fundamentals, virtual environments (uv / venv)
- FastAPI, Pydantic, async
- REST APIs in FastAPI
- AI/ML libraries jitni zaroorat ho (data processing, RAG pipelines)
- AI experimentation notebooks

Baad mein decide karna: koi AI feature Node mein rahega ya Python/FastAPI mein.`,
      },
      {
        id: 'phase-15-production-ai',
        title: 'Phase 15 — Production AI',
        duration: '2-3 weeks',
        content: `> Yahi cheez ek \"AI engineer\" ko \"LLM API caller\" se alag karti hai.

\`\`\`flow
Mobile / Web
API
AI Gateway
Model Router
LLM Provider
Tools / RAG / DB
\`\`\`

## Learn

- AI evaluation (offline evals, test sets, LLM-as-judge)
- Prompt versioning + management
- Observability (traces, spans, token usage per request)
- Cost optimization, model selection / routing
- Guardrails, prompt injection defense
- Rate limiting, caching, retry / fallback
- PII handling, data privacy, security

## Fallback pattern

\`\`\`flow
Primary model unavailable
Fallback model
Cached response
Graceful error
\`\`\`

Ye AI engineering hai — sirf AI prompting nahi.`,
      },
    ],
  },
];
