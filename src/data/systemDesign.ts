export interface SDTopic {
  id: string;
  title: string;
  content: string;
}

export interface SDChapter {
  id: string;
  title: string;
  topics: SDTopic[];
}

export const systemDesignChapters: SDChapter[] = [
  {
    "id": "requirements-capacity",
    "title": "Requirements & Capacity",
    "topics": [
      {
        "id": "what-are-requirements",
        "title": "What are Requirements?",
        "content": "> Requirements define what the system needs to provide and what constraints it must satisfy.\n\nSystem design ka first step ye samajhna hai ki system se expect kya hai — architecture seedha nahi design karte.\n\n```flow\nProblem\nRequirements\nScale / Capacity\nArchitecture\nImplementation\n```\n\nAgar requirements clear nahi hain, to architecture bhi properly design nahi kar sakte.\n\n## Example: \"Design YouTube\"\n\nImmediately database/server design nahi karna. Pehle samjho:\n\n- User video upload karega?\n- Video stream karega?\n- Search karega?\n- Comments?\n- Likes?\n- Live streaming?\n- Kitne users?\n- Kitni videos?\n- Availability kitni chahiye?\n\n## Types of Requirements\n\n```flow\nRequirements\nFunctional Requirements\nNon-Functional Requirements\n```\n\n- **Functional** — System kya karega?\n- **Non-functional** — System kitna achha/reliably/securely/fast/scalable karega?\n"
      },
      {
        "id": "functional-requirements",
        "title": "Functional Requirements",
        "content": "> Functional requirement = **What** the system should do — the features, actions and behavior of a system.\n\n## Example: Instagram\n\n- User signup/login\n- Create profile\n- Upload photo/video\n- Follow / unfollow user\n- Like post, comment\n- Send message\n- View feed\n- Search users/posts\n- Receive notifications\n\n## Example: Amazon\n\n- User registration & login\n- Search / filter products\n- View product, add/remove from cart\n- Checkout & payment\n- Track / cancel / return order\n- Review product\n\n## Example: WhatsApp\n\n- Register / login\n- Send / receive message, image, video\n- Create group, group messaging\n- Voice call / video call\n- Online/offline status, read receipts\n- Push notifications\n\n## How to identify a Functional Requirement\n\nQuestion to ask: **\"User system mein kya-kya kar sakta hai?\"**\n\nUsually verbs/functions milenge: Create, Read, Update, Delete, Search, Upload, Download, Send, Receive, Like, Follow, Book, Pay, Cancel, Track.\n\nFunctional requirements often user actions/use cases se derive hote hain.\n\n## Levels of Functional Requirements\n\n- **User functions** — signup, login, search, purchase, upload\n- **Business functions** — order processing, payment processing, inventory management, booking management\n- **System functions** — notification, logging, data processing, report generation\n\n## More examples across systems\n\n| System | Functional requirements |\n|---|---|\n| Netflix | Login, browse, search, play/pause/resume, watch history, continue watching, playlists, subscription |\n| Uber | User/driver signup, request ride, find driver, accept ride, track driver, start/end ride, payment, rating |\n| Banking | Login, view balance, transfer money, deposit, withdraw, transaction history, bill payment |\n| Food Delivery | Search restaurant, view menu, add food, checkout, payment, track/cancel order, rating |\n| File Storage | Upload, download, delete, rename, share, create folder, search |\n\n## Scope of Functional Requirements\n\nCommon mistake: **har possible feature ko requirement mat bana do.**\n\nExample — \"Design URL Shortener\":\n\nCore functional requirements:\n- Create short URL\n- Redirect short URL\n\nOptional (add only if asked): Analytics, Login, Custom aliases, Expiration.\n\n> System design mein core requirements identify karna important hai.\n"
      },
      {
        "id": "non-functional-requirements",
        "title": "Non-Functional Requirements",
        "content": "> NFR = **How well** the system should perform — quality, performance and constraints.\n\nExamples: Performance, Scalability, Availability, Reliability, Security, Consistency, Durability, Maintainability, Fault tolerance, Observability.\n\n## Functional vs Non-Functional\n\n| Functional | Non-Functional |\n|---|---|\n| Send message | Message delivery should be reliable |\n| Upload video | Upload should support large files |\n| Search product | Search should respond within X ms |\n| Make payment | Payment must not be duplicated |\n| Book appointment | System must prevent double booking |\n| Login | Authentication must be secure |\n| View feed | Feed should handle millions of users |\n\nShortcut: **Functional = WHAT, Non-functional = HOW WELL.**\n\n## Performance\n\n- **Latency** — ek request complete hone mein kitna time. `GET /user → 100ms` means latency = 100ms. Lower is generally better.\n- **Throughput** — system ek unit of time mein kitna work handle karta hai. Examples: 1000 requests/sec, 10,000 messages/sec, 500 transactions/sec. Usually measured as RPS (requests/sec), QPS (queries/sec), TPS (transactions/sec).\n\n## Availability\n\nSystem users ke liye kitne time available hai — 99%, 99.9%, 99.99%, 99.999% (\"three nines\", \"four nines\"...).\n\n| Availability | Approx downtime/year |\n|---|---|\n| 99% | 3.65 days |\n| 99.9% | 8.76 hours |\n| 99.99% | 52.6 minutes |\n| 99.999% | 5.26 minutes |\n\nHigher availability usually means: Redundancy + Failover + Replication + Monitoring.\n\n## Reliability\n\nSystem expected behavior consistently perform kare aur failures ke baad recover kar sake.\n\nExample: Payment successful hua but database crash ho gaya — reliable system mein payment information lose nahi honi chahiye.\n\nRelated concepts: Retry, Timeout, Idempotency, Replication, Backup, Recovery, Fault tolerance.\n\n## Scalability\n\nLoad increase hone par system apni capacity increase kar sake.\n\n```flow\n1,000 users\n10,000 users\n1M users\n10M users\n```\n\n- **Vertical Scaling** — same machine ko powerful banana (2 CPU/8GB → 16 CPU/64GB).\n- **Horizontal Scaling** — more machines add karna (Server 1 → Server 1+2 → Server 1+2+3). Large distributed systems generally horizontal scaling par heavily depend karte hain.\n\n## Consistency\n\nDifferent parts/users ko data ki state kitni consistently dikhti hai.\n\nExample: Bank balance ₹10,000, user ne ₹5,000 transfer kiya — system ke different nodes ko incorrect balance nahi dikhna chahiye jahan strong consistency required hai.\n\nDistributed systems mein Strong Consistency vs Eventual Consistency important concepts hain.\n\n## Durability\n\nOnce data is successfully stored, it should survive failures.\n\nExample: Payment completed, server crash ke baad bhi payment record available hona chahiye.\n\nTechniques: Replication, Backups, Persistent storage, Write-ahead logs, Durable databases.\n\n## Security\n\nDetermines how system protects users, data, APIs, infrastructure, payments, credentials.\n\nCommon requirements: Authentication, Authorization, Encryption, Rate limiting, Input validation, Secrets management, Audit logs.\n\n## Maintainability\n\nSystem ko future mein modify karna easy hona chahiye — modular architecture, clean code, documentation, testing, logging, monitoring, clear APIs.\n\nExample: Payment provider Stripe se kisi aur mein change karna ho to poora application rewrite nahi hona chahiye.\n\n## Fault Tolerance\n\nKuch components fail ho jaane ke baad bhi system continue kar sake.\n\nExample: Server 1 down, Server 2 & 3 healthy — load balancer traffic ko healthy servers par bhej de.\n\nOther techniques: DB replica, multiple API servers, multiple availability zones, retry, failover.\n\n## Observability\n\nSystem ke andar kya ho raha hai, usko understand kar paana — three pillars:\n\n- **Logs** — `Payment failed, User ID, Request ID, Error`\n- **Metrics** — `CPU = 70%, RPS = 5000, Latency = 120ms, Error rate = 1%`\n- **Traces** — ek request different services se kaise travel hui: `API → Auth → Booking → Payment → Database`\n"
      },
      {
        "id": "capacity-estimation",
        "title": "Capacity Estimation",
        "content": "> Purpose: estimate karna ki system ko kitna traffic, storage, bandwidth aur infrastructure handle karna padega.\n\n```flow\nUsers\nDAU\nRequests\nRPS\nPeak RPS\nRead/Write\nStorage\nBandwidth\n```\n\n## What we calculate\n\n1. Number of users\n2. DAU/MAU\n3. Requests per day\n4. Average RPS\n5. Peak RPS\n6. Read/write ratio\n7. Storage\n8. Bandwidth\n9. Growth\n\n## Users, DAU & MAU\n\nStart with **Registered Users** (e.g. 10 Million) — but registered users actual load nahi batate.\n\n- **DAU** (Daily Active Users): `10M registered × 20% active = 2M DAU`\n- **MAU** (Monthly Active Users): `10M registered, 6M active/month = 6M MAU`\n\nDAU/MAU ratio user engagement samajhne mein useful hota hai.\n\n## Requests per user → Average RPS\n\n`2M DAU × 50 requests/day/user = 100M requests/day`\n\n**Average RPS = Requests per day ÷ 86,400**\n\n`100M / 86,400 ≈ 1,157 RPS`\n\n## Peak RPS\n\nReal-world traffic evenly distribute nahi hota. Suppose peak factor = 3×:\n\n`Peak ≈ 1,157 × 3 ≈ 3,471 RPS`\n\nPeak factor fixed rule nahi hai — traffic pattern ke according 2×, 3×, 5×, 10× ho sakta hai.\n\n## Read / Write Ratio\n\nSuppose 90% Read / 10% Write at peak 3,500 RPS:\n\n`Read ≈ 3,150 RPS, Write ≈ 350 RPS`\n\n- High reads → Cache, CDN, Read replicas\n- High writes → Database optimization, Partitioning, Sharding, Queues\n\n## Storage Estimation\n\n**Daily storage = Number of records/day × Average record size**\n\n`1M records/day × 2KB/record = 2GB/day → ×365 ≈ 730GB/year`\n\nReal estimation mein additionally consider: Indexes, Replication, Metadata, Backups, Growth.\n\n## File Storage\n\n`1M images/month × 2MB/image = 2TB/month → ≈ 24TB/year`\n\nAise use case mein Object Storage + CDN, database se better approach hoti hai.\n\n## Bandwidth Estimation\n\n**Bandwidth = Requests/sec × Average response size**\n\n`5,000 RPS × 50KB = 250MB/sec ≈ 2Gbps`\n\nCompression/CDN/caching actual bandwidth reduce kar sakte hain.\n\n## Growth Rate\n\nCapacity estimation sirf current traffic ke liye nahi — future growth bhi consider karni hai.\n\n`Year 1 → 10M, Year 2 → 12M (20% growth), Year 3 → 14.4M`\n\nInfrastructure ko future growth ke liye reasonable headroom chahiye.\n\n## Assumptions\n\nReal data available na ho to assumptions banate hain, e.g.:\n\n- Registered users = 10M\n- DAU = 20%\n- Requests/user/day = 50\n- Peak factor = 3\n- Read/write = 90/10\n- Average payload = 50KB\n\n> Assumptions exact truth nahi hote — they are estimates used to guide architecture. Real production mein monitoring/data ke basis par numbers replace hote hain.\n\n## Back-of-the-envelope shortcuts\n\n`1 day ≈ 100,000 seconds` (actual 86,400)\n\n| Requests/day | ≈ RPS |\n|---|---|\n| 1M | 12 |\n| 10M | 116 |\n| 100M | 1,160 |\n| 1B | 11,600 |\n\n## Final flow\n\n```diagram\n                    USERS\n                      |\n              Registered Users\n                      |\n                    DAU\n                      |\n             Requests/User/Day\n                      |\n                Requests/Day\n                      |\n                Average RPS\n                      |\n                  Peak RPS\n                      |\n              Read / Write Ratio\n                      |\n        +-------------+-------------+\n        |             |             |\n     Storage       Bandwidth      Growth\n        |             |             |\n        +-------------+-------------+\n                      |\n               Architecture\n```\n\n## Key formulas\n\n- Requests/day = DAU × requests/user/day\n- Average RPS = requests/day ÷ 86,400\n- Peak RPS = average RPS × peak factor\n- Storage/day = records/day × record size\n- Bandwidth = RPS × response size\n"
      },
      {
        "id": "requirements-connection",
        "title": "How These Connect",
        "content": "```diagram\n             REQUIREMENTS\n                  |\n       +----------+----------+\n       |                     |\n FUNCTIONAL             NON-FUNCTIONAL\n       |                     |\n What system does       How well it does\n       |                     |\n       +----------+----------+\n                  |\n          CAPACITY ESTIMATION\n                  |\n          How much load/data?\n                  |\n             ARCHITECTURE\n```\n\n## Example: video upload feature\n\n**Requirement:** Users should be able to upload videos.\n\n- **Functional:** Upload video, watch video, delete video\n- **Non-functional:** Support large files, high availability, fast playback, secure upload, millions of users\n- **Capacity:** 1M uploads/month, 2GB average total daily upload, 100K concurrent viewers\n\nArchitecture naturally follows:\n\n```flow\nFrontend\nPresigned Upload\nObject Storage\nCDN\nVideo Processing Workers\n```\n\nNotice: architecture pehle decide nahi ki — requirements + scale ne architecture suggest ki.\n\n## Quick recap\n\n```\n1. Requirements\n   - Functional -> WHAT?\n   - Non-functional -> HOW WELL?\n\nFunctional: Features / actions / use cases.\n\nNFR: Performance, Scalability, Availability, Reliability,\n     Security, Consistency, Durability, Maintainability,\n     Fault Tolerance, Observability\n\n2. Capacity Estimation\n\nUsers -> DAU -> Requests/User -> Requests/Day -> Average RPS\n-> Peak RPS -> Read/Write -> Storage -> Bandwidth -> Growth\n\nGoal: Requirements + Capacity -> Architecture\n```\n"
      }
    ]
  },
  {
    "id": "api-database-sql-nosql",
    "title": "API, Database & SQL vs NoSQL",
    "topics": [
      {
        "id": "api-design",
        "title": "API Design",
        "content": "> API is the contract through which one software component communicates with another.\n\nFrontend directly database se baat nahi karta:\n\n```flow\nReact / Mobile App\nAPI\nBackend\nDatabase\n```\n\nExample — frontend ko bookings chahiye: `GET /api/bookings` → backend responds with a bookings array. **API frontend aur backend ke beech contract hai.**\n\n## What API design decides\n\nEndpoint, HTTP Method, Request, Response, Status Code, Authentication, Authorization, Validation, Pagination, Filtering, Sorting, Error handling, Versioning, Idempotency.\n\n## REST basics\n\n- `GET` → Read\n- `POST` → Create\n- `PUT` → Replace/update\n- `PATCH` → Partial update\n- `DELETE` → Delete\n\n```\nGET    /users\nPOST   /users\nGET    /users/123\nPATCH  /users/123\nDELETE /users/123\n```\n\n## Good API naming\n\nBad: `/getUsers`, `/createUser`, `/deleteUser`\n\nREST style: `GET /users`, `POST /users`, `DELETE /users/:id` — resource-oriented thinking rakho.\n\n## Request design\n\n`POST /bookings` request flow:\n\n```flow\nValidate\nAuthenticate\nAuthorize\nBusiness logic\nDatabase\nResponse\n```\n\nAPI sirf database query nahi hoti.\n\n## Status Codes\n\n- `200` Success · `201` Created · `204` Success, no body\n- `400` Bad request · `401` Unauthenticated · `403` Forbidden · `404` Not found · `409` Conflict · `422` Validation error · `429` Rate limited\n- `500` Internal error · `502` Bad gateway · `503` Unavailable · `504` Gateway timeout\n\n**401 vs 403:** 401 = \"Who are you?\" (authentication missing/invalid). 403 = \"I know who you are, but you don't have permission\" (authorization failure).\n\n## Error response\n\nKeep a consistent error format so the frontend can handle errors predictably, e.g. `{ success: false, error: { code, message } }`.\n\n## Pagination\n\n10 million products ek response mein nahi bhejte.\n\n- **Offset pagination:** `GET /products?page=2&limit=20` — very large datasets mein offset expensive ho sakta hai.\n- **Cursor pagination:** `GET /products?limit=20&cursor=abc123` → response includes `nextCursor`. Large-scale/infinite feeds ke liye useful hai — Instagram feed, Twitter timeline, chat messages, large transaction history.\n\n## Filtering + Sorting\n\n`GET /products?category=shoes&minPrice=500&maxPrice=2000&sort=price` — API ko predictable query parameters dene chahiye.\n\n## Idempotency\n\nVery important production concept. User double-clicks `POST /payments` — dono payment create nahi hone chahiye.\n\nUse `Idempotency-Key: abc123` — server checks: already processed? YES → return previous result, NO → process.\n\nEspecially important for: Payments, Orders, Bookings, Money transfers.\n\n## Versioning\n\n`/api/v1/users` vs `/api/v2/users` — old clients ko suddenly break nahi karna chahiye. Useful jab breaking changes ho.\n\n## Authentication vs Authorization\n\n- **Authentication** — Who are you?\n- **Authorization** — What are you allowed to do?\n\nExample: Customer → booking.read; Owner → +booking.update; Admin → +delete. **Backend par enforce hona chahiye — frontend mein button hide karna security nahi hai.**\n\n## Rate Limiting\n\n`User/IP → Rate Limiter → 100 requests/min` — limit cross karne par `429 Too Many Requests`. Redis rate limiting ke liye commonly useful hota hai.\n\n## Mental model\n\n```flow\nClient\nEndpoint\nHTTP Method\nAuthentication\nAuthorization\nValidation\nBusiness Logic\nDatabase / External Service\nResponse\n```\n\nImportant: REST, Status codes, Pagination, Filtering, Sorting, Error handling, Idempotency, Versioning, Rate limiting.\n"
      },
      {
        "id": "database-design",
        "title": "Database Design",
        "content": "> Objective: data ko efficiently, correctly aur scalable way mein store/access karna.\n\nDecide: Entities, Attributes, Relationships, Indexes, Constraints, Keys, Queries, Transactions, Data access patterns.\n\n## Entities\n\nReal-world object jiska data store karna hai.\n\n- E-commerce: User, Product, Order, Payment, Cart, Review\n- Booking platform: User, Salon, Staff, Service, Booking, Payment, Reward, Notification\n\n## Relationships\n\n`User → creates → Booking` — one user, many bookings: `User 1 ─── N Booking`\n\nAnother: `Salon 1 ─── N Staff`, `Salon 1 ─── N Services`, `Salon 1 ─── N Bookings`\n\nRelationships samajhna database design ka core part hai.\n\n## SQL Database Design\n\nSQL databases data ko tables mein organize karti hain.\n\n**users**\n\n| id | name | email |\n|---|---|---|\n| 1 | Rishabh | a@gmail.com |\n\n**bookings**\n\n| id | user_id | service_id | status |\n|---|---|---|---|\n| 101 | 1 | 20 | confirmed |\n\nRelationship: `users.id ← bookings.user_id`\n\n## Primary Key\n\nUniquely identifies a record — two records ka same primary key nahi hona chahiye. Examples: UUID, Auto-increment ID, ULID.\n\n## Foreign Key\n\nEk table ke record ko doosre table se connect karta hai: `bookings.user_id → users.id` — relationship enforce karne mein help karta hai.\n\n## Normalization\n\nObjective: duplicate/redundant data ko reduce karna aur data consistency improve karna.\n\nBad: a `Booking` row repeating `customerName, customerEmail, customerPhone, serviceName, servicePrice` for every booking.\n\nBetter: separate `Users`, `Bookings`, `Services` tables connected via IDs.\n\n## Denormalization\n\nKabhi performance/read efficiency ke liye duplicate data intentionally store karte hain — e.g. an `Order` storing `userName` as a snapshot alongside `userId`, so order-history reads don't need a join.\n\nTrade-off: Read performance ↑, Storage ↑, Consistency complexity ↑.\n\n## Data Access Pattern\n\n**First understand how data will be accessed, then design storage.**\n\nExample: agar most queries `Get bookings by salonId + date` hain, to `(salonId, date)` par suitable index useful ho sakta hai.\n\n> Database schema sirf entities dekh kar nahi, queries dekh kar design hota hai.\n"
      },
      {
        "id": "sql-vs-nosql",
        "title": "SQL vs NoSQL",
        "content": "## SQL\n\nExamples: PostgreSQL, MySQL, MariaDB, SQL Server, Oracle. Data model: Tables, Rows, Columns, Relationships.\n\n## NoSQL\n\nNon-relational databases with different data models and flexible/scalable approaches.\n\n| Type | Example |\n|---|---|\n| Document | MongoDB |\n| Key-Value | Redis |\n| Wide Column | Cassandra |\n| Graph | Neo4j |\n\n## SQL strengths\n\n- **Relationships** — Customer → Order → Order Items → Products\n- **Transactions** — e.g. bank transfer: Account A −₹100, Account B +₹100 must be consistent together\n- **Strong consistency** — useful for financial/business-critical data\n- **Complex queries** — JOIN, GROUP BY, HAVING, Aggregations\n\nSQL is excellent for relational data and complex transactional workloads.\n\n## NoSQL strengths\n\n- **Flexible schema** — different documents can have a different structure\n- **Huge scale** — some NoSQL systems are designed for massive distributed workloads\n- **High write/read throughput** — scale horizontally per workload\n- **Document-oriented data** — e.g. a user with a nested `addresses` array fits naturally in MongoDB\n\n## Comparison\n\n| Feature | SQL | NoSQL |\n|---|---|---|\n| Model | Tables | Document/Key-value/etc. |\n| Schema | Usually structured | Often flexible |\n| Relationships | Strong | App/data-model dependent |\n| JOINs | Strong | Often avoided/limited |\n| Transactions | Strong | Varies by database |\n| Complex queries | Excellent | Depends on DB |\n| Horizontal scaling | Possible | Often a core strength |\n| Schema changes | More controlled | Often easier/flexible |\n| Best fit | Relational/transactional data | Specific large-scale/distributed patterns |\n\n> Myth: \"SQL can't scale, NoSQL is always scalable.\" PostgreSQL/MySQL bhi horizontally scale kiye ja sakte hain using replicas, partitioning, sharding, etc.\n\n## ACID\n\n- **Atomicity** — transaction all-or-nothing (if step 2 fails, step 1 rolls back too)\n- **Consistency** — transaction ke baad database valid state mein rahe\n- **Isolation** — concurrent transactions ek doosre ke intermediate state ko incorrectly interfere na karein\n- **Durability** — committed data failure ke baad bhi survive kare\n\n## SQL transaction example\n\n```\nBEGIN TRANSACTION\n  Account A -= 100\n  Account B += 100\nCOMMIT\n-- on failure: ROLLBACK\n```\n\nExtremely important in financial systems.\n\n## NoSQL ≠ \"no transactions\"\n\nCommon misconception. Modern NoSQL databases bhi transactions/atomic operations support kar sakte hain — the difference is database-specific. \"SQL = transactions, NoSQL = no transactions\" is a wrong oversimplification.\n\n## MongoDB example\n\nA `booking` document can represent the whole booking as one unit (id, salonId, customerId, serviceId, staffId, status, payments[]) — but design karte waqt decide karna hota hai: **embed karna hai ya reference?**\n\n## Embedding vs Referencing\n\n- **Embed** — child data frequently accessed with parent, limited in size, doesn't need an independent lifecycle. E.g. order items embedded inside the order.\n- **Reference** — data is large, independently updated, shared by many documents, or the relationship is many-to-many. E.g. `{ orderId, productId }`.\n\n## How to choose a database\n\n\"Project is MERN, so MongoDB\" is **not** production-level database selection. Instead ask:\n\n1. Data relational hai?\n2. Transactions kitni important hain?\n3. Relationships kitne complex hain?\n4. Read/write pattern kya hai?\n5. Schema kitna stable hai?\n6. Scale kitna hai?\n7. Consistency requirement kya hai?\n8. Query patterns kya hain?\n9. Geographic/distributed requirements?\n10. Operational complexity?\n\n## Real-world examples\n\n- **Banking** — usually a relational database (PostgreSQL/Oracle) because transactions, consistency, and relationships matter most.\n- **Social media** — mixed architecture: SQL + Redis + NoSQL + Object Storage + Search Engine.\n- **E-commerce** — PostgreSQL (orders/payments) + Redis (cache/session) + OpenSearch (product search) + S3 (images).\n- **Chat system** — NoSQL (messages) + Redis (presence/cache) + Object Storage (media) + WebSocket (real-time delivery).\n\n## Polyglot Persistence\n\nProduction systems mein different data ke liye different databases use karte hain:\n\n```flow\nApplication\nPostgreSQL + Redis + OpenSearch\nS3 (Images/videos)\n```\n\nThis is broadly called **polyglot persistence** — one database doesn't need to do everything.\n"
      },
      {
        "id": "api-db-connection",
        "title": "How These Connect",
        "content": "```diagram\n             USER ACTION\n                  |\n              API DESIGN\n                  |\n          What data is needed?\n                  |\n            DATA MODEL\n                  |\n         How is data accessed?\n                  |\n         INDEX / QUERY DESIGN\n                  |\n         SQL or NoSQL decision\n                  |\n       Scaling / consistency needs\n```\n\n## Example: booking creation\n\nAPI: `POST /bookings` with `customer, salon, service, staff, slot, payment, status`.\n\nAccess patterns: get booking by ID, get customer's bookings, get salon's bookings, get staff's bookings by date.\n\nDatabase design: `Booking, Customer, Salon, Service, Staff, Payment` entities.\n\nIndexes: `bookingId`, `customerId`, `salonId + date`, `staffId + date`.\n\nThen decide: relational or document? **This is actual database design thinking.**\n\n## Quick recap\n\n**API Design** — API = contract between client and backend. Important: REST, HTTP methods, Request/Response, Status codes, Authentication, Authorization, Validation, Pagination, Filtering, Sorting, Error handling, Idempotency, Rate limiting, Versioning.\n\n**Database Design** — Identify: Entities, Attributes, Relationships, Keys, Constraints, Access patterns, Indexes, Transactions. Important: Primary Key, Foreign Key, Normalization, Denormalization, Indexing, Transactions, Replication, Partitioning.\n\n**SQL vs NoSQL** — Don't choose based on trend. Choose based on: Data model + Queries + Transactions + Consistency + Scale + Access patterns.\n\n**Real systems** — one database doesn't need to do everything: PostgreSQL → Transactions, Redis → Cache, MongoDB → Documents, OpenSearch → Search, S3 → Files.\n"
      }
    ]
  },
  {
    "id": "indexing-caching-redis",
    "title": "Indexing, Caching & Redis",
    "topics": [
      {
        "id": "indexing",
        "title": "Indexing",
        "content": "> Database index ek data structure hai jo database ko records quickly find karne mein help karta hai.\n\n```flow\nQuery (without index)\nFull Table/Collection Scan\nCheck many records\nFind result\n```\n\n```flow\nQuery (with index)\nIndex\nFind matching records\nFetch data\n```\n\n## Example\n\n`users` mein 10 million rows, `SELECT * FROM users WHERE email = 'abc@gmail.com'` — `email` par index hone se search much faster hoti hai.\n\n## Why indexing\n\nIndexes mainly: read/query performance improve karte hain, filtering fast karte hain, sorting fast kar sakte hain, unique values enforce kar sakte hain.\n\nCommon indexed fields: `email, userId, orderId, createdAt, status`, foreign keys.\n\n## Trade-off\n\nIndex useful hai but free nahi:\n\n- Benefit: Read performance ↑\n- Cost: Storage usage ↑, Write/update cost ↑, Maintenance ↑\n\nInsert/update/delete ke time index bhi update karna padta hai — isliye **har field par index nahi banana chahiye.**\n\n## Composite Index\n\nMultiple fields ka index, e.g. `(salonId, date)` for the query `WHERE salonId = X AND date = Y`.\n\nOrder matters — `(salonId, date)` and `(date, salonId)` are not the same for every query pattern.\n\n## Basic rule\n\n> Indexes should be designed according to actual query/access patterns.\n\nPehle queries dekho — \"what do we frequently search/filter/sort by?\" — then indexes decide karo.\n"
      },
      {
        "id": "caching",
        "title": "Caching",
        "content": "> Cache ek fast temporary storage hai jahan frequently accessed data rakha jata hai.\n\n```flow\nApplication\nCache\nDatabase\n```\n\nInstead of database ko repeatedly hit karna, request cache se pehle serve ho jaati hai.\n\n## Why cache\n\nDatabase load reduce hota hai, response latency reduce hoti hai, throughput improve ho sakta hai, expensive operations repeat nahi karne padte.\n\nExample: `GET /salons/123` — agar same salon data 10,000 times request ho raha hai, har request MongoDB ko bhejna unnecessary ho sakta hai.\n\n## Cache hit / miss\n\n```flow\nRequest (hit)\nCache\nData found\nReturn\n```\n\n```flow\nRequest (miss)\nCache\nData not found\nDatabase\nStore in Cache\nReturn\n```\n\n## Cache-Aside pattern\n\nMost common pattern (a.k.a. Lazy Loading):\n\n```flow\nApplication\nCheck Cache\nFound? YES -> Return\nFound? NO -> Database\nPut data in Cache\nReturn\n```\n\n## Cache Invalidation\n\nSabse important caching problem: cache mein old/stale data aa sakta hai (e.g. DB `status = PAID` but cache still `status = PENDING`).\n\n`DB Update → Invalidate Cache`\n\n> \"Cache invalidation is one of the hard problems in computer science.\"\n\n## TTL\n\nTTL = Time To Live. Cache entry ko limited time ke liye rakho, e.g. `salon:123` with `TTL = 5 minutes`.\n\nUseful for: OTP, Sessions, Temporary reservations, Frequently changing data, API responses.\n\n## What should be cached\n\nGood candidates: frequently read data, rarely changing data, expensive computations, API responses, sessions, configuration, popular products, user preferences.\n\nAvoid blindly caching: highly sensitive data, rapidly changing data, data where a stale value is dangerous — unless the consistency strategy is clear.\n\n## Cache problems\n\nStale data, cache invalidation, memory cost, cache miss, cache stampede, consistency issues.\n\n> Cache is not the source of truth in most architectures — the database generally is.\n"
      },
      {
        "id": "redis",
        "title": "Redis",
        "content": "> Redis is an in-memory data store — data mainly memory mein rakhta hai, isliye very fast hota hai.\n\n## Common uses\n\nCache, Session storage, Rate limiting, Counters, Distributed locks, Pub/Sub, Temporary data, Queues/basic streams (depending on architecture).\n\n## Why Redis is fast\n\n`MongoDB/PostgreSQL → Disk + memory hierarchy` vs `Redis → Memory` — isliye Redis low-latency operations ke liye useful hai.\n\n## Data structures\n\n- **String** — `user:123:name → Rishabh`\n- **Hash** — object-like data, e.g. `user:123 { name, age }`\n- **List** — ordered collection, useful for queues / recent items\n- **Set** — unique values, useful for online users / tags / unique IDs\n- **Sorted Set** — values + score, useful for leaderboards / ranking\n\n## Redis as cache\n\n```flow\nClient\nBackend\nRedis\nMongoDB/PostgreSQL\n```\n\n`GET /products/123` → first `Redis GET product:123`; if missing → DB, then `Redis SET`, then response.\n\n## Redis TTL\n\n`SET otp:user123 4821 EX 300` — OTP expires after 300 seconds in Redis. Very useful for temporary data.\n\n## Rate limiting\n\nLogin attempts counter: `login:user123 → 5`, limit `5 attempts/minute` — after limit, `429 Too Many Requests`. Redis is good here because counters need fast operations.\n\n## Distributed lock\n\nTwo users try to book the same slot at once — a distributed lock ensures only one process handles the critical section at a time: `Redis Lock → Process booking → Release lock`.\n\n> Locks should be used carefully; often atomic database constraints/transactions are preferable when they can solve the problem directly.\n\n## Pub/Sub\n\nMultiple backend servers (Server 1/2/3) — Server 1 gets a \"Booking Created\" event, publishes via Redis Pub/Sub, and Server 2 & 3 receive it too.\n\nUseful for: real-time events, WebSocket scaling, notifications, cross-server communication.\n\n## Redis + Socket.IO\n\n```diagram\n             Load Balancer\n             /     |     \\\n            v      v      v\n         Server 1 Server 2 Server 3\n             \\      |      /\n                 Redis\n```\n\nAgar user Server 1 se connected hai aur event Server 3 par create hua: `Server 3 → Redis → Server 1 → Socket.IO → User`. Isse multiple application servers ke across real-time events synchronize kiye ja sakte hain.\n\n## Cache vs Redis\n\n> Caching ek concept/pattern hai. Redis ek technology/data store hai.\n\nCaching ke liye Redis use kar sakte ho, but caching sirf Redis se nahi hoti — Browser Cache, CDN Cache, Application Cache, Redis, In-memory cache are all examples.\n"
      },
      {
        "id": "indexing-caching-recap",
        "title": "Quick Recap",
        "content": "**Indexing** — fast data lookup. Benefits: faster reads, filtering, sorting. Cost: extra storage, slower writes/updates. Don't index everything — design according to query patterns; use composite indexes for multi-field queries.\n\n**Caching** — frequently used data ko fast temporary storage mein rakhna. Benefits: lower latency, less DB load, higher throughput. Pattern: Request → Cache → HIT (response) / MISS (Database → Cache → response). Watch for: cache invalidation, TTL, hit/miss, stale data, cache stampede.\n\n**Redis** — fast in-memory data store. Uses: cache, sessions, rate limiting, counters, distributed locks, Pub/Sub, temporary data. Data structures: String, Hash, List, Set, Sorted Set.\n\n> Redis ≠ Cache. Redis is a technology that can be used as a cache.\n\nOne line each:\n\n- **Indexing** → database ke andar data ko quickly find karna.\n- **Caching** → frequently used data ko database se pehle fast layer mein rakhna.\n- **Redis** → ek fast in-memory store jo caching ke saath-saath sessions, rate limiting, locks, Pub/Sub etc. ke liye use hota hai.\n"
      }
    ]
  },
  {
    "id": "scaling-load-balancing",
    "title": "Scaling, Load Balancing & Replication",
    "topics": [
      {
        "id": "load-balancing",
        "title": "Load Balancing",
        "content": `> Load Balancer incoming traffic ko multiple servers ke beech distribute karta hai — taaki koi ek server overload na ho.

\`\`\`flow
Users
Load Balancer
Server 1  |  Server 2  |  Server 3
\`\`\`

Without LB: saare users ek hi server par jaate hain -> overload. With LB: same traffic multiple servers par spread ho jaata hai.

## Why needed

- Traffic distribute karna
- Single server ko overload hone se bachana
- High availability — ek server fail ho to baaki serve karte rahein
- Failed server ko traffic na bhejna (health checks)
- Horizontal scaling enable karna (naye servers add karke capacity badhao)

## Load balancing algorithms

- **Round Robin** — har request baari-baari agle server ko. Simple, sabse common. (R1->S1, R2->S2, R3->S3, R4->S1...)
- **Least Connections** — jis server par abhi sabse kam active connections hain, request usko. Uneven request durations ke liye better.
- **Weighted** — powerful server ko zyada share (S1 weight 1, S2 weight 2, S3 weight 3).
- **IP Hash** — client IP se server decide (same client -> same server).

## Health checks

Load balancer periodically har server ko ping karta hai:

\`\`\`flow
Server 1 -> Healthy
Server 2 -> Healthy
Server 3 -> Failed (yahan traffic nahi bhejega)
\`\`\`

Unhealthy server ko traffic milna band, healthy hote hi wapas shuru.

## Sticky sessions

Kabhi user ko baar-baar same server par bhejna padta hai (session us server ki memory mein hai).

\`\`\`flow
User A -> Server 1 (aur Server 1 par hi bandha rehta hai)
\`\`\`

Problem: Server 1 gira to session gaya, aur load uneven ho jaata hai.

> Better: session state ko shared store (Redis) ya stateless JWT mein rakho — phir koi bhi server request handle kar sakta hai.

## LB kahan baithta hai

- **L4 (transport)** — IP/port ke basis par route. Fast, content nahi dekhta.
- **L7 (application)** — URL / headers / cookies dekhkar route (e.g. \`/api\` -> API servers, \`/img\` -> image servers).
`
      },
      {
        "id": "vertical-vs-horizontal-scaling",
        "title": "Vertical vs Horizontal Scaling",
        "content": `> Do tareeke system ki capacity badhane ke: server ko bada karo (vertical), ya aur servers add karo (horizontal).

## Vertical scaling (scale up)

Same server ko powerful banao: 4 CPU / 16 GB RAM  ->  32 CPU / 128 GB RAM.

- **Plus:** simple, koi app change nahi, shuru mein easy
- **Minus:** hardware ki ek limit hai; top-end hardware ka price non-linear (bahut mehenga); aur ye single point of failure hai — wo ek machine gir gayi to sab down

## Horizontal scaling (scale out)

Aur servers add karo; load balancer traffic baant deta hai.

\`\`\`flow
Server 1  ->  Server 1 + Server 2 + Server 3 + Server 4
\`\`\`

- **Plus:** practically unlimited scale, fault tolerant (ek gira to baaki chal rahe), capacity badhana easy
- **Minus:** app ko **stateless** rakhna padta hai

## Stateless kyun zaroori hai

\`\`\`flow
Request 1 -> Server 1 (session Server 1 ki memory mein)
Request 2 -> Server 2 -> session missing!
\`\`\`

Fix: state ko servers se bahar nikaalo —

\`\`\`flow
Server 1 / Server 2 / Server 3  ->  Redis (shared session)
\`\`\`

...ya JWT / access-token based stateless auth.

## Practical order

Pehle vertical scaling se kaam chala lo (simple). Jaise growth badhe, horizontal par jao — kyunki long-term scale **aur** availability wahi deta hai.

| | Vertical | Horizontal |
| --- | --- | --- |
| Kaise | Bigger machine | More machines |
| Limit | Hardware ceiling | Practically none |
| Failure | Single point | Fault tolerant |
| App changes | Almost none | Must be stateless |
`
      },
      {
        "id": "database-replication",
        "title": "Database Replication",
        "content": `> App servers to multiple ho gaye, but database abhi bhi ek hai — wo naya bottleneck aur single point of failure ban jaata hai.

\`\`\`flow
Load Balancer -> Server 1 / Server 2 / Server 3 -> ONE Database
\`\`\`

**Replication** = database ki multiple copies maintain karna.

\`\`\`flow
Primary DB
Replica 1  |  Replica 2
\`\`\`

## Primary vs Replica

- **Primary** (master / leader) — saare **writes** yahan: INSERT / UPDATE / DELETE
- **Replicas** (read replicas) — **reads** yahan se: SELECT

\`\`\`flow
Application
Writes -> Primary
Reads  -> Replica 1 / Replica 2 / Replica 3
\`\`\`

## Read scaling

Maan lo 100,000 req/sec — 90% read, 10% write. Saare reads primary par bhejoge to primary overload. Reads ko replicas mein baant do -> primary sirf writes handle karta hai, aur read capacity naye replicas add karke badhti hai.

## Benefits

- **Read scalability** — jitne zyada replicas, utni zyada read capacity
- **High availability** — primary fail ho to ek replica ko promote karke naya primary bana do (failover)
- **Disaster recovery** — data ki multiple copies, data-loss risk kam

## Replication lag

Primary par write hua (\`balance = 500\`), replica ko wo update thodi der baad milta hai (abhi bhi \`balance = 1000\`). Is gap ko **replication lag** kehte hain.

> Write karke turant usi data ko replica se read karoge to **stale (purana) data** mil sakta hai. Critical flows (payment balance, abhi kiya hua change) ke liye wo read primary se karo — isko "read your own writes" kehte hain.

## Synchronous vs Asynchronous

- **Synchronous** — primary write tab "done" bolta hai jab replica bhi confirm kare. Consistency achhi, latency zyada.
- **Asynchronous** — primary turant response de deta hai, replicas baad mein update hote hain. Latency kam, thoda replication lag possible. (Most systems ka default.)
`
      },
      {
        "id": "scaling-connection",
        "title": "How These Connect",
        "content": `> Teeno milkar "ek server" se "many servers + high availability" tak ka rasta banate hain.

\`\`\`diagram
                    Users
                      |
                Load Balancer
                 /     |     \\
              Server  Server  Server
                 \\     |     /
                  Database Primary
                   /          \\
              Replica        Replica
\`\`\`

- **Load Balancer** -> traffic ko application servers ke beech baantta hai, failed servers ko skip karta hai.
- **Horizontal scaling** -> wo multiple application servers deta hai (stateless hone chahiye).
- **Replication** -> database ko read scaling + failover deta hai (primary = writes, replicas = reads).

Ek line mein: **LB app tier ko scale karta hai; replication data tier ko scale + protect karta hai.**
`
      }
    ]
  },
  {
    "id": "partitioning-sharding",
    "title": "Partitioning, Sharding & Replication vs Sharding",
    "topics": [
      {
        "id": "database-partitioning",
        "title": "Database Partitioning",
        "content": `> Partitioning = ek bade table / dataset ko chhote logical tukdon (partitions) mein baant dena — usually ek hi database ke andar.

\`\`\`flow
Bookings table (100M rows)
Partition 2024  |  Partition 2025  |  Partition 2026
\`\`\`

Query poore table ko scan karne ke bajaye sirf relevant partition ko touch karti hai.

## Why

- Bada data manage karna aasaan
- Queries efficient (kam data scan)
- Maintenance easy — purana data (e.g. 2019 partition) alag drop / archive kar sakte ho
- Chhote indexes -> faster lookups

## Types

- **Range partitioning** — kisi range ke hisaab se: 2024 -> P1, 2025 -> P2. Achha for dates, IDs, age.
- **Hash partitioning** — \`hash(userId) % N\` se partition choose. Data evenly spread karne ke liye.
- **List partitioning** — specific values: India -> P1, USA -> P2, UK -> P3.

## Note

Partitioning ke 2 flavours: **horizontal** (rows baantna — most common) aur **vertical** (kam use hone waale columns alag table mein).
`
      },
      {
        "id": "database-sharding",
        "title": "Database Sharding",
        "content": `> Sharding = database ke data ko multiple **independent database servers** (shards) par distribute karna. Har shard apne hisse ka poora database hai.

\`\`\`flow
Users (100M)
Shard 1 (DB server 1)  |  Shard 2 (DB server 2)  |  Shard 3 (DB server 3)
\`\`\`

Ab poora data ek machine par nahi — storage aur write load bhi baant gaya.

## Why

Ek machine par 100 TB data + millions of writes/sec eventually bottleneck. Sharding se:

\`\`\`flow
Application
Shard Router (decides which shard)
Shard 1  |  Shard 2  |  Shard 3
\`\`\`

## Shard key

Wo field jiske basis par decide hota hai data kis shard mein jaayega — e.g. \`userId\`, \`tenantId\`, \`region\`.

\`\`\`flow
userId -> hash -> shard
User 101 -> Shard 1
User 202 -> Shard 2
User 303 -> Shard 3
\`\`\`

## Bad shard key -> hotspot

Agar key aisi ho ki zyaadatar traffic ek shard par gir jaaye:

\`\`\`flow
Shard 1 -> 90% traffic (hot shard!)
Shard 2 -> 5%
Shard 3 -> 5%
\`\`\`

...to sharding ka fayda hi khatam. **Good shard key**: data + traffic dono evenly baante, aur common queries usi key par ho (taaki cross-shard na jaana pade).

## Sharding vs Partitioning

- **Partitioning** — ek DB ke andar data ko logical parts mein todna.
- **Sharding** — data ko multiple alag DB servers par baantna ("partitioning across machines").

## Problems (isliye sharding last resort hai)

- Cross-shard joins / queries hard
- Cross-shard transactions hard
- Data rebalancing (naya shard add karne par data move karna)
- Shard key galat chuna to fix karna painful
- Zyada operational complexity

> Order: achha schema -> indexes -> caching -> read replicas -> partitioning -> **phir** sharding.
`
      },
      {
        "id": "replication-vs-sharding",
        "title": "Replication vs Sharding",
        "content": `> Ek line: **Replication = same data ki copies. Sharding = alag-alag data alag machines par.**

## Replication

\`\`\`flow
Primary
Replica 1  |  Replica 2   (same data, copied)
\`\`\`

Purpose: **high availability + read scaling + redundancy**. Har node ke paas poora dataset hai.

## Sharding

\`\`\`flow
Shard 1 -> Users A-D
Shard 2 -> Users E-M
Shard 3 -> Users N-Z
\`\`\`

Purpose: **storage scaling + write scaling + data distribution**. Kisi ek node ke paas poora data nahi.

| | Replication | Sharding |
| --- | --- | --- |
| Data | Same copy everywhere | Different slice per node |
| Solves | Reads, availability, redundancy | Writes, storage, size |
| Complexity | Lower | Higher |
| Query | Any node has the answer | Router must find the right shard |

## Dono saath mein (real production)

\`\`\`diagram
              Application
                   |
              Shard Router
           /       |       \\
       Shard 1   Shard 2   Shard 3
        /  \\      /  \\      /  \\
      Rep Rep   Rep Rep   Rep Rep
\`\`\`

Sharding data ko baantta hai; har shard ki replication uski availability + read scaling deti hai. Isko **distributed database architecture** kehte hain.

## Real-world flow (1 billion users)

\`\`\`flow
Single DB -> overload
Add: indexes + cache + read replicas
Still huge write / size -> shard it
Each shard -> apne replicas
\`\`\`
`
      },
      {
        "id": "partitioning-sharding-recap",
        "title": "Quick Recap",
        "content": `**Partitioning** — bade data ko logical parts mein todna (Range / Hash / List), ek DB ke andar. Benefit: manageable data, efficient queries, easy maintenance.

**Sharding** — data ko multiple DB servers par baantna. Shard key decide karti hai kaunsa data kahan. Good key = even data + even traffic + matches queries. Problems: cross-shard joins/transactions, rebalancing, hotspots, complexity — isliye pehle schema / index / cache / replica try karo.

**Replication vs Sharding**

- Replication -> **same data, multiple copies** -> availability, read scaling, redundancy.
- Sharding -> **different data, different servers** -> write scaling, storage scaling, distribution.
- Bade systems: sharding + replication = distributed database.

One line each:

- **Replication** -> same data ki copies (availability + reads).
- **Sharding** -> alag data ko alag machines par (writes + storage).
- **Partitioning** -> bade data ko logical parts mein divide karna.
`
      }
    ]
  }
];
