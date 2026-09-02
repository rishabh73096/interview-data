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
  },
  {
    "id": "messaging-events-kafka",
    "title": "Message Queues, Pub/Sub & Kafka",
    "topics": [
      {
        "id": "message-queue-async",
        "title": "Message Queue / Async Processing",
        "content": `> Jab ek request ke andar koi **time-consuming kaam** turant karna zaroori nahi hai, us kaam ko queue mein daal do aur ek background worker baad mein process kare.

\`\`\`flow
Client
API Server
Message Queue
Worker
Database / Email / Notification
\`\`\`

## Problem kya solve karta hai

API directly heavy task kare to:

\`\`\`flow
Request
API -> Generate Report (20 sec)
Response (user 20 sec wait karta hai)
\`\`\`

Queue ke saath API turant free ho jaata hai:

\`\`\`flow
Request -> API -> Queue -> Response (immediately)
Queue -> Worker -> Heavy Task (background)
\`\`\`

## Common use cases

- Email sending
- Notifications
- Report generation
- Image / video processing
- Payment-related background work
- Order processing
- Bulk data processing

## Important terms

- **Producer** — job ko queue mein bhejta hai
- **Queue** — jobs ko temporarily store karti hai (FIFO usually)
- **Consumer / Worker** — queue se job lekar process karta hai
- **Ack** — worker confirm karta hai job ho gaya, tab message queue se hatta hai
- **Retry** — job fail ho to backoff ke saath dobara try
- **Dead Letter Queue (DLQ)** — baar-baar fail hone wali jobs alag store, taaki queue block na ho aur baad mein inspect kar sako
- **Idempotency** — same job dobara chale to duplicate effect na ho (at-least-once delivery ki wajah se zaroori)

## Tools

RabbitMQ, AWS SQS, BullMQ (Redis-based, Node), Google Pub/Sub.

> Rule: request path par sirf wahi rakho jo user ke response ke liye zaroori hai — baaki sab queue mein.
`
      },
      {
        "id": "pubsub-event-driven",
        "title": "Pub/Sub & Event-Driven Architecture",
        "content": `> Queue aur Pub/Sub dikhne mein similar hain, but purpose alag hai.

## Queue — ek job, ek worker

\`\`\`flow
Producer -> Queue -> Worker
\`\`\`

Ek message ko generally **ek hi** consumer process karta hai (work distribution).

## Pub/Sub — ek event, kai listeners

\`\`\`flow
User Created (event)
-> Notification Service
-> Email Service
-> Analytics Service
\`\`\`

Publisher ko pata hi nahi hota kaun-kaun sun raha hai. Naya consumer add karna = bas subscribe kar lo, publisher change nahi hota.

## Event-Driven Architecture

Services ek **event bus** ke through events se communicate karti hain, direct call se nahi.

\`\`\`diagram
        Order Created
             |
         Event Bus
        /   |   |   \\
 Payment  Notif  Inventory  Analytics
\`\`\`

Isse services **loosely coupled** ho jaati hain — ek down ho to baaki chalti rahein, har ek alag se scale ho.

## Command vs Event

- **Command** = "ye karo" (\`CreateOrder\`) — kisi ek handler ke liye, expect karta hai kuch ho
- **Event** = "ye ho chuka" (\`OrderCreated\`, \`PaymentCompleted\`, \`BookingCancelled\`) — past tense, jitne chahe usse react karein

## Benefits

- Loose coupling
- Background processing
- Services independently scale
- Naya consumer add karna easy (existing code touch kiye bina)

## Watch out

- Flow debug karna mushkil (kaun se event ne kya trigger kiya — isliye tracing/correlation id zaroori)
- Events at-least-once aate hain -> consumers idempotent hone chahiye
- Eventual consistency — ek event ke baad sab services turant sync nahi hoti
`
      },
      {
        "id": "kafka-basics",
        "title": "Kafka Basics",
        "content": `> Apache Kafka ek distributed **event streaming platform** hai — high-volume events ko reliably store aur stream karne ke liye.

\`\`\`flow
Producer
Kafka Topic (Partition 0 | Partition 1 | Partition 2)
Consumers
\`\`\`

## Topic

Events ko category (topic) mein likha jaata hai: \`booking-events\`, \`payment-events\`, \`user-events\`.

## Partition

Ek topic multiple partitions mein bata hota hai. Har partition ek ordered, append-only log hai.

\`\`\`flow
booking-events
Partition 0  |  Partition 1  |  Partition 2
\`\`\`

- Partitions se **parallelism** aur **scalability** milti hai
- Order sirf **ek partition ke andar** guaranteed hota hai (poore topic mein nahi)
- Message kis partition mein jaayega wo **key** decide karti hai (e.g. \`orderId\` -> same order ke events same partition, order preserved)

## Consumer Group

Ek group ke consumers milkar topic ke partitions aapas mein baant lete hain.

\`\`\`flow
P0 -> Consumer 1
P1 -> Consumer 2
P2 -> Consumer 3
\`\`\`

- Ek partition ek time par group ke ek hi consumer ko
- Consumer add karo -> workload rebalance
- **Alag** consumer group same events ko independently padh sakta hai (Pub/Sub jaisa)

## Retention & Offset

Kafka message consume hone ke baad delete nahi karta — configured time/size tak rakhta hai. Har consumer apna **offset** (kahan tak padha) track karta hai, isliye replay/re-process possible hai.

## Kafka vs normal Queue

| Queue (RabbitMQ / SQS) | Kafka |
| --- | --- |
| Job / task processing focused | Event streaming focused |
| Message consume hote hi remove/ack | Events retained (replay possible) |
| Simple background jobs ke liye best | High-volume events / analytics / logs ke liye best |
| Simpler to run | Zyada powerful, zyada operational cost |

## Kafka kahan use hota hai

- Large-scale event processing
- Microservices communication backbone
- Activity / clickstream tracking
- Analytics & data pipelines
- Log aggregation
- Real-time data & stream processing
- Systems ke beech data sync

> Kafka default choice nahi hai — chhote apps ke liye SQS / RabbitMQ / BullMQ kaafi hai. Kafka tab jab volume, replay, ya multiple independent consumers chahiye.
`
      },
      {
        "id": "messaging-recap",
        "title": "Quick Recap & Full Flow",
        "content": `**Message Queue** — heavy / slow kaam ko request path se hata kar background worker ko do. Terms: producer, queue, worker, ack, retry, DLQ, idempotency. Use: email, notifications, reports, media, order processing.

**Pub/Sub + Event-Driven** — ek event ko kai services sunn sakti hain; services event bus se loosely coupled communicate karti hain. Event = "ye ho chuka" (past tense). Consumers idempotent + tracing zaroori.

**Kafka** — distributed event streaming. Topic -> partitions (parallelism + per-partition order via key) -> consumer groups (workload split; alag group = independent read). Events retained -> replay possible. High-volume events / analytics / microservices backbone ke liye.

One line each:

- **Queue** -> ek job, ek worker, kaam nikalne ke baad message gaya.
- **Pub/Sub** -> ek event, kai listeners, publisher ko parwah nahi kaun sun raha.
- **Kafka** -> massive scale par events ka durable, replayable log.

## Full system design flow (ab tak)

\`\`\`flow
Requirements
Capacity Estimation
API Design
Database Design
Indexing
Caching + Redis
Load Balancer
Horizontal Scaling
DB Replication
Partitioning + Sharding
Message Queue
Pub/Sub + Event-Driven
Kafka
\`\`\`
`
      }
    ]
  },
  {
    "id": "cap-consistency-transactions",
    "title": "CAP, Consistency & Distributed Transactions",
    "topics": [
      {
        "id": "cap-theorem",
        "title": "CAP Theorem",
        "content": `> Ek distributed system network partition ke time par **Consistency** aur **Availability** dono ek saath nahi de sakta — ek choose karna padta hai.

## Teen parts

- **C — Consistency** — har node par same, latest data mile. (Write Node A par -> Node B bhi turant same data de.)
- **A — Availability** — har request ka koi na koi (non-error) response mile, chahe kuch nodes down hon.
- **P — Partition Tolerance** — nodes ke beech network toot jaaye tab bhi system chalta rahe.

\`\`\`diagram
              CAP
             /   \\
      Consistency  Availability
             \\     /
          Partition Tolerance
\`\`\`

## Main rule

Network partition real systems mein **hoti hi hai**, isliye P optional nahi hai. Jab partition ho, tab decide karna padta hai:

- **CP** — consistency chuno: jab tak nodes sync nahi, kuch requests reject/wait (e.g. banking, booking). System "sahi ya kuch nahi".
- **AP** — availability chuno: har node jawab deta rahe, thoda stale data chalega, baad mein sync (e.g. social feed, product catalog). System "hamesha jawab, kabhi thoda purana".

## Examples

| Type | Systems |
| --- | --- |
| CP | HBase, MongoDB (default), ZooKeeper, etcd, RDBMS with sync replication |
| AP | Cassandra, DynamoDB, Riak, most DNS |

> "Pick 2 of 3" thoda misleading hai. Partition ke bina C aur A dono milte hain; partition ke **dauraan** hi C vs A ka trade-off aata hai. (PACELC isko extend karta hai: Else — normal time mein Latency vs Consistency.)
`
      },
      {
        "id": "consistency-models",
        "title": "Consistency Models",
        "content": `> Consistency model batata hai: write ke baad doosre readers ko latest data **kitni jaldi / kitne strictly** dikhega.

## Strong Consistency

Write successful hote hi, koi bhi read latest value hi degi. Reads/writes ek coordination point se guzarte hain (single leader, quorum, sync replication) — isliye extra latency.

\`\`\`flow
Write -> committed
Any read after that -> latest data (guaranteed)
\`\`\`

Chahiye: banking / wallet balance, payments, inventory count, "double booking" prevention, auth.

## Eventual Consistency

Write ke turant baad alag replicas alag value de sakti hain, but **agar naye writes na aayein** to thodi der mein sab same ho jaayenge.

\`\`\`flow
Write -> Primary
Async replication -> Replica A / B / C
t=0: replicas differ    ->    t=later: all same
\`\`\`

Chahiye: social likes/views/followers count, feeds, recommendations, analytics, product catalog — jahan thodi der stale data se kuch nahi bigadta.

## Beech ke models

- **Read-your-own-writes** — tumhe apna write hamesha dikhega (baaki ko lag lag sakta hai). Solution: apne writes ke baad primary se read.
- **Monotonic reads** — ek baar naya data dekh liya to purana wapas nahi dikhega.
- **Causal consistency** — cause se pehle effect nahi dikhega (reply se pehle original comment).

## Difference

| Strong | Eventual |
| --- | --- |
| Latest data turant | Data thodi der mein sync |
| Zyada consistency, zyada latency | Better availability + scalability |
| Payment / critical data | Likes / views / feed |

> Choice per-feature hota hai, per-database nahi — ek hi app mein balance strong ho aur "like count" eventual.
`
      },
      {
        "id": "distributed-transactions",
        "title": "Distributed Transactions & Saga",
        "content": `> Jab ek operation mein **multiple services / databases** involved hon aur sabko consistent rakhna ho — ye distributed transaction ki problem hai.

\`\`\`flow
Order Service -> Payment Service -> Inventory Service
Order OK  ·  Payment OK  ·  Inventory FAILS
\`\`\`

Ab pichhle successful steps ka kya karein?

## Single-DB transaction (easy case)

\`\`\`flow
BEGIN -> Update A -> Update B -> COMMIT
(kuch fail -> ROLLBACK, sab undo)
\`\`\`

Ye kaam karta hai kyunki ek DB. Multiple services/DBs ke across aisa atomic COMMIT/ROLLBACK practical nahi (2-Phase Commit slow + blocking hai).

## Saga Pattern

Ek badi transaction ko **chhote local transactions** ki chain mein todo. Har step apne DB mein commit karta hai. Koi step fail ho to pehle wale steps ke liye **compensating actions** chalao (undo jaisa, but technically naya transaction).

\`\`\`flow
Order OK -> Payment OK -> Inventory FAILS
Compensate: Refund Payment -> Cancel Order
\`\`\`

## Saga ke 2 styles

- **Choreography** — koi central boss nahi. Har service event emit karti hai, agli service sunn kar apna kaam karti hai (\`OrderCreated\` -> Payment, \`PaymentCompleted\` -> Inventory...). Simple, loosely coupled; but poora flow trace karna mushkil.
- **Orchestration** — ek **orchestrator** service pura flow control karti hai: kisko call karna, fail hone par kya compensate karna. Flow ek jagah visible; but orchestrator ek extra component hai.

\`\`\`diagram
Choreography:  Order -event-> Payment -event-> Inventory

Orchestration:      Orchestrator
                    /    |     \\
                Order  Payment  Inventory
\`\`\`

## Notes

- Saga **atomic nahi** hai — beech ke states short time ke liye visible ho sakte hain (eventual consistency).
- Har step + har compensation **idempotent** hona chahiye (retries safe rahein).
- Compensation hamesha possible nahi ("email bhej diya" undo nahi hota) — aise steps last mein rakho.
`
      },
      {
        "id": "cap-consistency-recap",
        "title": "Quick Recap",
        "content": `**CAP** — distributed system mein network partition ke time \`Consistency\` vs \`Availability\` ka trade-off. P optional nahi. CP = sahi ya kuch nahi (banking); AP = hamesha jawab, thoda stale (feed).

**Consistency models** — write ke baad latest data kitni jaldi dikhe. Strong = turant (payments); Eventual = thodi der mein sync (likes/views). Beech mein: read-your-own-writes, monotonic reads, causal. Choice per-feature.

**Distributed transactions** — multiple services/DBs ke operation ko consistent rakhna. Single COMMIT/ROLLBACK across services practical nahi.

**Saga** — badi transaction ko chhote local transactions ki chain mein todo + fail hone par compensating actions. Styles: Choreography (events, no boss) vs Orchestration (central controller). Steps idempotent hone chahiye.

One line each:

- **CAP** -> partition ke time Consistency vs Availability choose karo.
- **Consistency model** -> data kitni jaldi / strictly same dikhta hai.
- **Distributed transaction** -> multi-service operation ko coordinated tareeke se complete karna.
- **Saga** -> local transactions + compensating actions se distributed transaction handle karna.
`
      }
    ]
  },
  {
    "id": "gateway-ratelimit-resilience",
    "title": "API Gateway, Rate Limiting & Resilience",
    "topics": [
      {
        "id": "rate-limiting",
        "title": "Rate Limiting",
        "content": `> Rate limiting = ek user / IP / API-key ko ek time window mein **kitni requests** allowed hain, wo cap karna.

## Problem

\`\`\`flow
Client -> flood of requests -> API Server -> overload / crash
\`\`\`

Bina limit ke: ek buggy client ya attacker poore system ko down kar sakta hai; costs (DB, AI API) blow up ho jaate hain.

## Rate limiter kahan baithta hai

\`\`\`flow
Client -> Rate Limiter (limit check) -> API Server
\`\`\`

Limit cross -> \`HTTP 429 Too Many Requests\` + \`Retry-After\` header (client ko batao kab wapas try kare).

## Algorithms

- **Fixed Window** — "100 req per minute" per calendar minute. Simple, but window ke boundary par burst possible (59th sec 100 + 1st sec 100 = 200 in 2 sec).
- **Sliding Window** — rolling last-60-seconds count. Boundary problem fix, thoda zyada compute.
- **Token Bucket** — bucket mein tokens fixed rate se bharte hain; har request 1 token leti hai. Bucket khaali -> reject. Short bursts allow karta hai (saved tokens), average rate cap rakhta hai. Sabse common.
- **Leaky Bucket** — requests queue mein, fixed rate se "leak" (process) hoti hain. Output rate smooth rehta hai.

## Distributed rate limiting (Redis)

\`\`\`flow
Client -> Redis (shared counter) -> Server 1 / Server 2 / Server 3
\`\`\`

Multiple app servers hon to counter ek shared jagah (Redis) mein rakho, warna har server apna alag count rakhega aur real limit N-guna ho jaayegi. Redis \`INCR\` + \`EXPIRE\` ya a Lua script (atomic) common hai.

## Kya limit karein

- Login / OTP (brute force rokna)
- Public / partner APIs (fair use)
- Search, write endpoints, **AI endpoints** (cost)
- Per-user, per-IP, aur per-API-key — teeno layers

> Client ko friendly error do ("limit reached, resets in 40s"), aur limits config-driven rakho (deploy ke bina tune kar sako).
`
      },
      {
        "id": "api-gateway",
        "title": "API Gateway",
        "content": `> API Gateway = clients aur internal services ke beech **single entry point**. Sab external traffic pehle isse guzarta hai.

\`\`\`diagram
Client -> API Gateway ->  User Service
                      ->  Order Service
                      ->  Payment Service
                      ->  Notification Service
\`\`\`

## Gateway kya handle karta hai

- **Routing** — \`/users/*\` -> User service, \`/orders/*\` -> Order service
- **Authentication / authorization** — token verify ek jagah, services ko clean identity pass
- **Rate limiting / quotas** — per client
- **Request/response transformation**, validation, aggregation (kai service calls ko ek response mein)
- **TLS termination**, CORS, logging, metrics, tracing (correlation id inject)
- **API versioning**, canary routing, caching

## Without vs with

\`\`\`flow
Without: Client -> User / Order / Payment / Notification (client sab addresses jaanta hai)
With:    Client -> API Gateway -> internal services (client ko internal topology nahi pata)
\`\`\`

Faayda: clients decoupled; cross-cutting concerns (auth, limits, logging) ek jagah; internal services simple rehti hain.

## Gateway vs Load Balancer

- **Load Balancer** — L4/L7, kaam: traffic ko identical server instances mein distribute karna + health checks.
- **API Gateway** — L7, kaam: application-level routing (path/verb se different services), auth, rate limit, transformation.
- Practice mein: LB pehle (gateway ke instances ke aage), gateway uske peechhe. BFF (Backend-for-Frontend) = ek gateway per client type (web/mobile).

## Watch out

Gateway single point of failure ban sakta hai -> multiple instances + LB. Isko "thin" rakho — business logic services mein, gateway sirf plumbing.
`
      },
      {
        "id": "circuit-breaker",
        "title": "Circuit Breaker & Resilience Patterns",
        "content": `> Circuit breaker ek fail/slow downstream service ko baar-baar call hone se rokta hai — taaki uski failure poore system mein na phaile (**cascading failure**).

## Problem

\`\`\`flow
Payment Service DOWN
Order -> Payment (fail, waits for timeout)  x1000
Order ke threads/connections/pool exhaust -> Order bhi down
\`\`\`

Ek service ki failure upstream services ko bhi le doobti hai.

## Circuit breaker

Har downstream dependency ke calls ko wrap karta hai aur recent failure rate track karta hai.

## 3 states

\`\`\`flow
CLOSED  (normal - calls pass, failures counted)
-> too many failures -> OPEN
OPEN    (calls fail fast / fallback, no call made)
-> after cooldown -> HALF-OPEN
HALF-OPEN (few trial calls)
-> success -> CLOSED   |   fail -> OPEN again
\`\`\`

- **CLOSED** — sab normal, failures gino.
- **OPEN** — threshold cross; requests turant fail ya fallback (cached value, default, queued) — down service ko touch bhi nahi karte, uske recover hone ka time bhi dete hain.
- **HALF-OPEN** — cooldown ke baad thodi test requests; theek to CLOSED, warna wapas OPEN.

## Related resilience patterns

- **Timeout** — har outbound call par (warna anlimited wait). Circuit breaker ke liye bhi base.
- **Retry with backoff + jitter** — transient errors ke liye; but only on idempotent ops, aur limited attempts (warna failing service par load badhega).
- **Bulkhead** — har dependency ke liye alag thread/connection pool, taaki ek dependency sab resources na khaaye.
- **Fallback / graceful degradation** — "recommendations service down -> generic list dikhao", feature off karo, error nahi.
- **Load shedding** — overload mein low-priority requests drop karo taaki core chale.

## Problem solved

Cascading failure, resource exhaustion, slow downstream service, retry storms.

> Libraries: resilience4j, Polly, opossum (Node). Config: failure threshold, cooldown, half-open trial count, timeout.
`
      },
      {
        "id": "gateway-resilience-recap",
        "title": "Quick Recap & Request Path",
        "content": `**Rate Limiting** — user/IP/key ki requests per window cap karo; 429 + Retry-After. Algorithms: fixed window, sliding window, token bucket (common), leaky bucket. Distributed = shared counter in Redis (atomic). Protect: login, OTP, public APIs, AI endpoints.

**API Gateway** — clients ke liye single entry point. Routing, auth, rate limiting, TLS, logging, versioning, aggregation. Gateway != Load Balancer (LB = distribute to identical servers; Gateway = app-level routing + security). Keep it thin; run multiple instances.

**Circuit Breaker** — fail/slow downstream ko repeatedly call hone se roko. States: CLOSED -> OPEN -> HALF-OPEN. Pair with timeout, retry+backoff, bulkhead, fallback, load shedding.

## Typical request path

\`\`\`flow
Client
CDN
Load Balancer
API Gateway (auth + rate limit + routing)
Service
Circuit Breaker
Other Service
Database / Cache / Queue
\`\`\`

One line each:

- **Rate Limiting** -> too many requests se system + cost protect.
- **API Gateway** -> single door: routing + security + cross-cutting concerns.
- **Circuit Breaker** -> failed service ko call karna band karke cascading failure roko.
`
      }
    ]
  },
  {
    "id": "reliability-discovery-observability",
    "title": "Timeouts, Service Discovery & Observability",
    "topics": [
      {
        "id": "timeout-retry-backoff",
        "title": "Timeout, Retry & Exponential Backoff",
        "content": `> Network calls kabhi bhi slow ya fail ho sakti hain. Ye teen patterns un failures ko contain karte hain.

## A. Timeout

Ek call par infinite wait nahi kar sakte — warna wo thread/connection block, phir pool exhaust, phir upstream bhi down (cascading failure).

\`\`\`flow
Order -> Payment (no response)
No timeout: Waiting... Waiting... (resource stuck)
With timeout: Wait 3s -> Timeout error -> resource freed
\`\`\`

Types (conceptually):

- **Connection timeout** — TCP/handshake hi nahi bana
- **Read / response timeout** — connect ho gaya, response nahi aa raha
- **Overall / request timeout** — poore call ke liye max time

\`\`\`flow
axios.get("/payment", { timeout: 3000 })
\`\`\`

> Har outbound call par timeout lagao. Default library timeouts often infinite ya bahut zyada hote hain. Timeout downstream ke p99 se thoda upar rakho.

## B. Retry

Transient failure (network blip, timeout, temporary 503, some 5xx) par dobara try karna reasonable hai.

\`\`\`flow
Attempt 1 -> Fail
Attempt 2 -> Fail
Attempt 3 -> Success
\`\`\`

**Retry mat karo** jab:

- Error 4xx hai (400/401/403/404/422) — request hi galat hai, dobara bhi fail hogi
- Operation non-idempotent hai (\`POST /payment\`, order create) — ho sakta hai pehli baar succeed hua ho, response hi kho gaya -> retry = **double charge / duplicate**

> Isliye retry + **idempotency key** saath chalte hain: server same key dobara dekhe to naya effect na kare, pehla result return kare.

Retry budget limited rakho (e.g. max 3), warna failing service par load aur badhta hai ("retry storm").

## C. Exponential Backoff + Jitter

Turant-turant retry = failing service par aur load. Har retry se pehle wait badhao:

\`\`\`flow
Fail -> wait 1s -> Fail -> wait 2s -> Fail -> wait 4s -> ...
delay = base * 2^attempt   (+ cap)
\`\`\`

**Jitter** = delay mein thoda random add karo, taaki hazaaron clients ek saath ("thundering herd") retry na karein. \`delay = random(0, base * 2^attempt)\`.

## Ye sab ek saath

\`\`\`flow
Timeout
Retry (idempotent only, limited)
Exponential Backoff + Jitter
Circuit Breaker (bahut fail ho raha ho to calls hi rok do)
Fallback (cached / default / degrade)
\`\`\`
`
      },
      {
        "id": "service-discovery",
        "title": "Service Discovery",
        "content": `> Production mein ek service ki multiple instances hoti hain jo dynamically create/destroy hoti rehti hain. Caller ko kaise pata "abhi kaunsi instances live aur healthy hain?"

\`\`\`flow
Small app: Order -> http://localhost:5001
Production: Payment = Instance 1 / 2 / 3 / 4 (IPs badalte rehte hain)
\`\`\`

## Service Registry

Ek central registry jahan har instance apne aap ko **register** karti hai (address + health), aur band hone par **deregister** ho jaati hai. Registry health checks bhi karti hai.

\`\`\`diagram
        Service Registry
       /       |        \\
 Payment-1  Payment-2  Payment-3   (register + heartbeat)

 Order Service -> ask registry -> healthy Payment instances
\`\`\`

Tools: Consul, etcd, Eureka, Zookeeper.

## 2 patterns

- **Client-side discovery** — caller registry se list leta hai aur khud ek instance choose karta hai (client-side load balancing). Fast, but har client mein discovery logic.
- **Server-side discovery** — caller ek fixed endpoint (LB / gateway) ko hit karta hai; wo registry dekh kar route karta hai. Client simple rehta hai.

\`\`\`flow
Client-side: Order -> Registry -> pick Payment-2 -> call
Server-side: Order -> Load Balancer -> (Registry) -> Payment instance
\`\`\`

## Kubernetes / cloud

Yahan discovery platform deta hai: ek stable **Service** name (\`payment-service\`) jo peechhe healthy pods par load-balance karta hai. DNS-based, aap explicit registry nahi chalate.

## Kyun chahiye

- Instances autoscale / crash / redeploy hoti hain -> IPs fixed nahi
- Failed instances automatically nikalni chahiye
- Nayi instances automatically traffic mein aani chahiye
- Order Service ko manually 20 Payment IPs configure nahi karne chahiye
`
      },
      {
        "id": "observability-logs-metrics-traces",
        "title": "Observability: Logs, Metrics & Tracing",
        "content": `> Distributed system mein sabse bada sawaal: **"problem exactly kahan hai?"** User bola "payment slow hai" — slowdown Gateway, Order, Payment, ya DB kahin bhi ho sakta hai.

Observability = system ke bahar se dekhkar andar kya ho raha hai wo samajhna. Teen pillars:

## A. Logs — "kya hua?"

Discrete events, timestamped.

\`\`\`flow
INFO  Order created
INFO  Payment request started
ERROR Payment service timeout  latency=3000ms
\`\`\`

**Structured logs** (JSON) plain text se better — search/filter/aggregate ho sakte hain:

\`\`\`flow
{ "service": "payment", "requestId": "abc123", "status": "failed", "latencyMs": 3000 }
\`\`\`

Har log line mein: timestamp, service, **requestId / traceId** (ek request ke saare logs jodne ke liye), userId (jahan appropriate), status, latency, error. Secrets/PII log mat karo.

## B. Metrics — "system kaisa perform kar raha hai?"

Numbers over time, cheap to store, alerting ke liye. Core set (**RED**): **R**ate, **E**rrors, **D**uration.

- Request rate: \`1000 req/sec\`
- Error rate: \`2% failed\`
- Latency: \`avg 200ms · p95 500ms · p99 1.2s\`
- Resources: CPU 75%, memory 80%
- DB: connections, query latency, **replication lag**

### p95 / p99 kya hai

100 requests ko latency se sort karo. **p95** = 95th value: "95% requests isse fast ya equal, worst 5% isse slow". p99 = worst 1%.

\`\`\`flow
avg = 200ms   (dikhne mein fast)
p95 = 800ms
p99 = 3s      (kuch users ke liye bahut slow)
\`\`\`

> Average jhoothla deta hai — ek dhang ka system p95/p99 par judge hota hai, average par nahi.

## C. Distributed Tracing — "request ne time kahan bitaya?"

Ek request ke har service ke through journey ko ek **traceId** se stitch karo.

\`\`\`flow
Trace abc123
Gateway    20ms
Order      50ms
Payment    900ms   <-- bottleneck
Inventory  40ms
\`\`\`

- **Trace** — poore request ka end-to-end journey
- **Span** — us journey ke andar ek operation (ek service call, ek DB query) ka naam + start + duration; spans nested hote hain

Tools: OpenTelemetry (standard), Jaeger, Tempo, Zipkin, Datadog. Har log/metric mein traceId daalo -> teeno pillars link ho jaate hain.

## Together

| | Answers |
| --- | --- |
| Logs | What happened? |
| Metrics | How is the system performing / how much? |
| Traces | Where did the request spend time / fail? |

Upar: alerts (metrics par), dashboards, SLIs/SLOs. Alert **symptoms** par karo (latency, error rate), causes par nahi (CPU).
`
      },
      {
        "id": "reliability-observability-recap",
        "title": "Quick Recap & Production Architecture",
        "content": `**Timeout** — har outbound call par max wait; warna hanging requests -> pool exhaustion -> cascading failure.

**Retry** — sirf transient errors + idempotent operations; limited attempts; idempotency key se duplicates rokna.

**Exponential backoff + jitter** — retries ke beech badhta hua + randomized wait, taaki failing service par retry storm / thundering herd na aaye.

**Service Discovery** — dynamic instances ke live+healthy addresses find karna. Service registry (Consul/etcd/Eureka) + client-side ya server-side discovery; K8s mein platform DNS se.

**Observability** — Logs (what happened), Metrics (how it's performing — RED, p95/p99), Traces (where the time went — trace + spans). traceId sab jodta hai.

## Production request path

\`\`\`flow
Client
API Gateway (auth + rate limit)
Load Balancer
Service instances (via Service Discovery)
Circuit Breaker + Timeout + Retry/Backoff
Other services
Queue / Kafka
Database  ·  Redis / Cache
\`\`\`

...with **Logs + Metrics + Distributed Tracing** across every hop.

One line each:

- **Timeout** -> infinite waiting se bachao.
- **Retry + Backoff** -> temporary failures ko safely recover karo.
- **Service Discovery** -> dynamic instances ko dhoondo.
- **Observability** -> logs + metrics + traces se production health aur failures samjho.
`
      }
    ]
  },
  {
    "id": "cdn-storage-pooling",
    "title": "CDN, Object Storage & Connection Pooling",
    "topics": [
      {
        "id": "cdn",
        "title": "CDN — Content Delivery Network",
        "content": `> CDN static/heavy content ko user ke **geographically nearest edge server** se serve karta hai — latency kam, origin-server load kam.

\`\`\`flow
Without CDN: User (India) -> Origin Server (US) -> image / css / js  (har request US tak)
With CDN:    User (India) -> nearest CDN edge -> content
\`\`\`

## Kya serve hota hai

Images, videos, CSS, JS bundles, fonts, downloadable files — basically har cheez jo har user ke liye same hai (static).

## Cache Hit / Miss

\`\`\`flow
Cache HIT:  User -> CDN edge -> content (origin ko chua bhi nahi)
Cache MISS: User -> CDN edge -> Origin -> content -> CDN stores it -> User
\`\`\`

Pehla user "miss" jhelta hai; uske baad us edge ke saare users ko "hit" milta hai.

## Example

Same product image 1 lakh users dekh rahe hain. Without CDN: 1,00,000 hits origin par. With CDN: sirf cache misses (har edge par 1) origin tak jaate hain — baaki edge se.

## Control

- **TTL / Cache-Control headers** — content kitni der cache rahe
- **Invalidation / purge** — deploy par nayi file force karna; ya **versioned URLs** (\`app.9f3a1.js\`) — file badli to naam badla, purani cache automatically bypass
- **Static vs dynamic** — HTML/API bhi cache ho sakte hain (short TTL), personalised content nahi

## Benefits

Lower latency, faster page load, origin load kam, DDoS absorb, better scalability.

> **Redis cache != CDN.** Redis = application/data caching (server-side). CDN = content/edge caching (user ke paas).
`
      },
      {
        "id": "object-storage-s3",
        "title": "Object Storage (S3)",
        "content": `> Large files ko app server ki local disk par rakhna scalable nahi — 10 servers hon to "file kis server par hai?" problem. Object storage (Amazon S3, GCS, R2, Azure Blob) isko solve karta hai: flat key -> object store, HTTP se accessible, effectively unlimited.

\`\`\`flow
Naive: Client -> Backend -> local disk (har server par alag copy?)
Better: Client -> Backend -> S3
Best:   Client -> (presigned URL) -> S3 directly
\`\`\`

## Presigned URL (upload/download)

Backend file ko apne through pass nahi karta — sirf ek **temporary signed URL** deता hai jise use karke client seedha S3 se baat karta hai.

\`\`\`flow
1. Client -> Backend: "mujhe image upload karni hai"
2. Backend -> S3: generate presigned PUT URL (expires in 5 min, size/type limit)
3. Backend -> Client: the URL
4. Client -> S3: PUT file directly (progress, resume, no load on backend)
5. Client -> Backend: "done, key = products/123/image.jpg"
\`\`\`

Faayda: 2 GB file backend RAM/bandwidth se nahi guzarti; backend sirf permission deta hai.

## DB mein kya rakhein

File S3 mein, uska **key/URL** DB mein. Metadata (owner, mime, size, status) DB row mein.

\`\`\`flow
DB row:  { imageKey: "products/123/image.jpg", size, mime, ownerId }
S3:      products/123/image.jpg  (the actual bytes)
\`\`\`

## S3 + CDN (production pattern)

\`\`\`flow
Client -> (presigned) -> S3  (private bucket)
Users  -> CDN -> S3 origin  (signed URLs for private files)
\`\`\`

## Notes

- Private bucket + signed URLs for user content (public-read buckets = leaks)
- Validate size/type before AND after upload; re-encode images; strip EXIF
- Lifecycle rules: purani files cold storage / delete
- Orphan cleanup: DB row gaya -> object bhi delete
`
      },
      {
        "id": "connection-pooling",
        "title": "Database Connection Pooling",
        "content": `> DB connection banana mehenga hai (TCP + TLS + auth). Har request par nayi connection banana + band karna = slow, aur 1000 concurrent requests -> 1000 connections -> DB overload.

\`\`\`flow
Naive: Request -> open connection -> query -> close   (x1000 = DB dead)
\`\`\`

## Connection Pool

App startup par kuch connections pehle se bana kar rakho. Request aane par pool se ek **udhaar** lo, kaam ke baad **wapas** karo (band nahi).

\`\`\`flow
Pool: [C1][C2][C3][C4][C5]
Request -> borrow C2 -> query -> return C2 to pool
\`\`\`

\`\`\`flow
max = 20
100 concurrent requests -> 20 use connections, baaki 80 queue mein wait (ya timeout)
\`\`\`

## Benefits

Connection-creation overhead khatam, connections reuse, DB par **bounded** connection count, concurrency smooth.

## Sizing — important

Pool ko 500 kar dena solution **nahi** hai. Agar DB effectively 20 concurrent queries handle karta hai, 500 connections = 500 queries fighting for CPU/IO -> sab slow.

- Pool size **DB capacity** ke hisaab se (Postgres often \`max_connections\` ~100-200 total, sabhi app instances milakar)
- Multiple app instances hon to: \`per-instance pool * instances <= DB limit\`
- Bahut instances (serverless, Lambda) -> ek external pooler (**PgBouncer**, RDS Proxy) lagao
- Set: max size, idle timeout, acquire timeout, max lifetime (stale connections recycle)

> Pool ek **shock absorber** hai, DB ki capacity nahi badhata. Overload par requests queue/fail karo — DB ko girने mat do.
`
      },
      {
        "id": "cdn-storage-pooling-recap",
        "title": "Quick Recap",
        "content": `**CDN** — static/heavy content (images, video, JS, CSS, fonts) ko user ke nearest edge se serve karo. Cache hit/miss, TTL + versioned URLs for invalidation. Origin load + latency down. Redis != CDN.

**Object Storage (S3)** — large files ke liye scalable store; file S3 mein, key/URL DB mein. **Presigned URLs** se client seedha S3 par upload/download kare (backend sirf permission deta hai). Private bucket + signed URLs; S3 + CDN = production file delivery.

**Connection Pooling** — pehle se limited reusable DB connections. Har request pool se connection udhaar leti hai, wapas karti hai. Bounded DB load + no per-request connect overhead. Pool size DB capacity ke hisaab se — bada pool DB ko fast nahi karta. Bahut instances -> PgBouncer / RDS Proxy.

## File / data flow

\`\`\`flow
Users -> CDN -> (static assets, S3-backed media)
Client -> Backend -> presigned URL -> S3 (upload)
Backend -> Connection Pool -> Database
Backend -> Redis / Cache
\`\`\`

One line each:

- **CDN** -> content ko users ke paas le jao (edge).
- **S3 / Object Storage** -> bade files ka scalable ghar; DB mein sirf key.
- **Connection Pooling** -> limited reusable DB connections se overhead + overload dono kam.
`
      }
    ]
  },
  {
    "id": "transactions-locking",
    "title": "Transactions, ACID, Deadlocks & Locking",
    "topics": [
      {
        "id": "transactions-acid",
        "title": "Database Transactions & ACID",
        "content": `> Transaction = multiple DB operations ko **ek single logical unit** ki tarah chalana — ya sab hote hain, ya koi nahi.

## Example: bank transfer

\`\`\`flow
BEGIN
A se -100
B mein +100
COMMIT
\`\`\`

Beech mein fail:

\`\`\`flow
A se -100  (done)
B mein +100  (fails)
-> ROLLBACK -> A ka balance wapas
\`\`\`

## ACID

- **A — Atomicity** — saare operations succeed, ya sab undo (ROLLBACK). Aadha kaam kabhi nahi.
- **C — Consistency** — transaction DB ko ek valid state se doosri valid state mein le jaaye (constraints, FKs, rules honour). (Ye wali "consistency" CAP wali se alag hai.)
- **I — Isolation** — concurrent transactions ek doosre ka **uncommitted** data na dekhein. Levels: Read Uncommitted, Read Committed (common default), Repeatable Read, Serializable — jitna strict, utna slow, utne kam anomalies (dirty read, non-repeatable read, phantom).
- **D — Durability** — COMMIT ho gaya to crash/power-loss ke baad bhi data rahega (write-ahead log, fsync, replication).

## Kahan critical

Payments, banking, orders, inventory decrement, seat/slot booking — koi bhi "paisa ya count" wali cheez.

## Notes

- Transaction **chhota** rakho (locks kam der ho) — user input ke liye transaction ke andar mat ruko
- Single DB mein easy; multi-service par ACID nahi milta -> **Saga** (Ch: CAP & Distributed Transactions)
`
      },
      {
        "id": "deadlocks",
        "title": "Database Deadlock",
        "content": `> Deadlock = 2+ transactions ek doosre ke locked resources ka wait karte reh jaate hain — koi aage nahi badh sakta.

\`\`\`diagram
Transaction A: locks Row 1, then waits for Row 2
Transaction B: locks Row 2, then waits for Row 1

        Row 1  <--- A
          ^          |
          |          v
        B  --->  Row 2

A waits for B, B waits for A  ->  stuck
\`\`\`

## Avoid kaise

- **Consistent lock ordering** — jise bhi Row 1 aur Row 2 chahiye, wo **hamesha** pehle Row 1 phir Row 2 le (id ke order mein). A: 1->2, B: 1->2 (na ki 2->1).
- **Transactions short** — sirf zaroori operations transaction ke andar; external calls (email, API) bahar.
- **Lower isolation** jahan safe ho (kam locks)
- **Same rows batch update** ko ek statement mein karo (\`UPDATE ... WHERE id IN (...)\` ordered)
- **Retry** — DB ek victim transaction ko abort karta hai (\`deadlock detected\` error); app usko backoff ke saath retry kare (transactions idempotent/safe hone chahiye)

## Note

DBs mein deadlock **detection** hota hai (wait-for graph mein cycle -> ek ko kill). Distributed locks mein detection nahi hota -> lock **timeout** + careful ordering aur zaroori.
`
      },
      {
        "id": "optimistic-pessimistic-locking",
        "title": "Optimistic vs Pessimistic Locking",
        "content": `> Concurrent updates ko safely handle karne ke 2 tareeke — jab 2 users ek hi row edit kar rahe hon.

## Optimistic Locking

Maano conflict **shaayad hi** hoga -> pehle koi lock mat lo. Row par ek \`version\` (ya \`updatedAt\`) rakho.

\`\`\`flow
A reads: version = 5
B reads: version = 5
A writes: UPDATE ... SET ..., version = 6 WHERE id = 101 AND version = 5  -> 1 row, OK
B writes: UPDATE ... WHERE id = 101 AND version = 5  -> 0 rows -> CONFLICT
\`\`\`

B ko batao "kisi ne abhi change kiya, dobara load karo / merge karo". No DB locks held -> high concurrency.

**Good for:** read-heavy systems, web apps, document/profile editing, conflicts rare.

## Pessimistic Locking

Maano conflict **ho sakta hai** -> pehle row lock kar lo, kaam khatam hone tak koi aur na chhue.

\`\`\`flow
A: BEGIN -> SELECT ... FOR UPDATE (Row locked) -> UPDATE -> COMMIT (unlock)
B: SELECT ... FOR UPDATE -> waits until A commits -> then proceeds
\`\`\`

**Good for:** conflicts frequent, critical updates jahan retry mehenga/galat ho — inventory decrement, wallet/payment, "same slot" booking.

## Comparison

| | Optimistic | Pessimistic |
| --- | --- | --- |
| Lock | Koi nahi (pehle) | Row lock leta hai |
| Conflict | Update ke time **detect** | Pehle hi **prevent** |
| Mechanism | version / timestamp column | \`SELECT ... FOR UPDATE\` / DB locks |
| Blocking | Kam (better throughput) | Zyada (waiters) |
| Risk | Retry loop agar conflicts high | Deadlock / long lock waits |

## Ek line

- **Optimistic** — "edit karo, save karte time check lenge kisi aur ne toh nahi badla."
- **Pessimistic** — "main edit kar raha hoon, tab tak kisi ko haath nahi lagane dunga."
`
      },
      {
        "id": "transactions-locking-recap",
        "title": "Quick Recap",
        "content": `**Transaction** — multiple DB ops ek logical unit (all-or-nothing). BEGIN ... COMMIT / ROLLBACK.

**ACID** — **A**tomicity (all or none), **C**onsistency (valid state -> valid state), **I**solation (concurrent txns don't see each other's uncommitted data; levels trade speed vs anomalies), **D**urability (committed = survives crash). Critical for payments/orders/inventory/booking.

**Deadlock** — 2+ transactions circularly wait on each other's locks. Avoid: consistent lock ordering, short transactions, retry on the DB's deadlock-victim error.

**Optimistic locking** — no lock; \`version\` column; conflict detected at write time (\`WHERE version = N\`). Rare conflicts, read-heavy.

**Pessimistic locking** — \`SELECT ... FOR UPDATE\`; conflict prevented by blocking. Frequent conflicts, critical updates (inventory, payments).

## DB concurrency map

\`\`\`flow
Application
Connection Pool
Database -> Transaction (ACID)
Concurrent access -> Optimistic (version) OR Pessimistic (row lock)
Deadlock -> DB detects -> victim aborted -> app retries
\`\`\`

One line each:

- **Transaction** -> multiple ops as one unit.
- **ACID** -> Atomicity, Consistency, Isolation, Durability.
- **Deadlock** -> transactions ek doosre ke locks ka forever wait.
- **Optimistic** -> conflict update ke time detect (version).
- **Pessimistic** -> update se pehle lock.
`
      }
    ]
  },
  {
    "id": "isolation-ha-backup",
    "title": "Isolation Levels, HA/Failover & Backups",
    "topics": [
      {
        "id": "isolation-levels",
        "title": "Database Isolation Levels",
        "content": `> Isolation level decide karta hai concurrent transactions ek doosre ke changes kitna "dekh" sakti hain. Higher isolation = kam anomalies, but kam concurrency.

## Concurrency anomalies

- **Dirty read** — B ne A ka **uncommitted** change padh liya; A ne rollback kar diya -> B ke paas kabhi-exist-na-karne-wala data.
  \`\`\`flow
  A: UPDATE balance = 100 (not committed)
  B: READ balance -> 100
  A: ROLLBACK -> B ne ghost data padha
  \`\`\`
- **Non-repeatable read** — ek hi transaction mein same **row** dobara padhi, beech mein kisi ne commit karke value badal di.
  \`\`\`flow
  A: READ x -> 100
  B: UPDATE x = 200, COMMIT
  A: READ x -> 200   (same txn, alag answer)
  \`\`\`
- **Phantom read** — same **query** (range) dobara chalayi, beech mein kisi ne rows insert/delete kiye -> row count badal gaya.
  \`\`\`flow
  A: SELECT * WHERE age > 18 -> 100 rows
  B: INSERT user, COMMIT
  A: same SELECT -> 101 rows
  \`\`\`

## Levels (kam se zyada strict)

| Level | Roke: | Note |
| --- | --- | --- |
| Read Uncommitted | (kuch nahi) | dirty reads allowed — almost never use |
| Read Committed | dirty read | sirf committed data; **most DBs ka default** (Postgres, Oracle, SQL Server) |
| Repeatable Read | + non-repeatable read | txn ke andar reads stable; **MySQL InnoDB default** (Postgres yahan phantoms bhi kaafi hद tak rokta hai) |
| Serializable | + phantom read | jaise transactions ek-ek karke chale; sabse safe, sabse slow (aborts/retries possible) |

## Practical

- Default (Read Committed) 90% cases ke liye theek.
- "Read -> decide -> write same row" logic ke liye: \`SELECT ... FOR UPDATE\` (pessimistic) ya \`version\` column (optimistic), ya Serializable.
- Higher isolation = zyada locking/aborts -> transactions **chhote** rakho.

> Note: ye "isolation" ACID ka **I** hai. CAP wali "consistency" alag cheez hai (nodes ke beech).
`
      },
      {
        "id": "db-high-availability-failover",
        "title": "Database High Availability & Failover",
        "content": `> Production mein database ek single point of failure nahi hona chahiye. Single DB gira -> poori app gir gayi.

\`\`\`flow
Single DB down -> Application down
\`\`\`

## Setup

\`\`\`flow
Primary  ->  Replica 1 / Replica 2 / Replica 3   (continuous replication)
\`\`\`

## Failover

Primary fail hone par ek replica ko **promote** karke naya primary bana diya jaata hai. App naye primary par point ho jaati hai (DNS / proxy / connection string update).

\`\`\`flow
Primary DOWN
Health check detects
Promote Replica -> New Primary
App reconnects -> continues
\`\`\`

- **Manual failover** — human promote karta hai (slow, error-prone)
- **Automatic failover** — orchestrator (Patroni, RDS Multi-AZ, MongoDB replica set election, Redis Sentinel) health check karke apne aap promote karta hai; typically **quorum** (majority of nodes) chahiye taaki "split brain" (do primaries) na ho

## High Availability (goal)

Minimum downtime. Techniques: replication + automatic failover + multiple **availability zones** (alag data centers) + health checks + a proxy/virtual endpoint so the app doesn't hardcode a host.

\`\`\`flow
App -> DB proxy / cluster endpoint -> current Primary (+ read replicas)
\`\`\`

## Failover costs

- **Data loss window** — async replication mein promote hone par lag jitna data unreplicated tha wo gaya (sync replication isse rokti hai, latency ki keemat par)
- **Brief downtime** — detection + promotion + reconnect (seconds)
- **In-flight transactions** fail -> app ko retry karna aata ho

## Replication lag (recap)

\`\`\`flow
Primary: balance = 500   |   Replica: balance = 400  -> (ms/s later) 500
\`\`\`

Read-after-write sensitive flows (profile just updated) replica se turant read na karein -> primary se, ya "read your own writes" routing.
`
      },
      {
        "id": "backup-disaster-recovery",
        "title": "Backup & Disaster Recovery",
        "content": `> **Replication != backup.** Replica primary ki har cheez copy karta hai — including \`DELETE FROM users\` ya corruption. Bug/attack/accident replica par bhi turant pahunch jaata hai.

\`\`\`flow
Accidental DELETE on Primary -> replicated -> gone on Replica too
\`\`\`

## Backup = alag, point-in-time recoverable copy

\`\`\`flow
Database -> Backup -> stored elsewhere (different account / region)
Disaster -> Restore from Backup -> Database
\`\`\`

## Backup types

- **Full** — poore DB ka snapshot. Restore simple, storage/time zyada.
- **Incremental** — pichhle backup ke baad ke changes only. Storage/time efficient, restore = full + chain of increments.
- **Differential** — last **full** ke baad ke saare changes (increments se bada, full se chhota).
- **PITR (Point-In-Time Recovery)** — periodic full + continuous WAL/oplog archiving -> kisi bhi second par restore ("2:47 PM se pehle wali state"). Accidental delete ke against best.

## Backup hygiene

- **3-2-1**: 3 copies, 2 media, 1 offsite/offline (immutable — ransomware se bachne ke liye)
- **Restore ko regularly test karo** — untested backup = no backup
- Backups encrypted; access limited

## Disaster Recovery — RPO & RTO

Disasters: DB failure, data corruption, accidental deletion, region outage, infra failure.

- **RPO (Recovery Point Objective)** — kitna **data loss** acceptable hai. RPO = 15 min -> backups/replication itne frequent ki max 15 min ka data jaaye.
- **RTO (Recovery Time Objective)** — kitni der system **down** reh sakta hai. RTO = 30 min -> recovery process 30 min ke andar complete.

\`\`\`flow
RPO -> "kitna data lose kar sakte hain?"   (backup frequency drive karta hai)
RTO -> "kitni der down reh sakte hain?"    (recovery speed / standby drive karta hai)
\`\`\`

\`\`\`flow
Payment system:  RPO = 5 min   ·   RTO = 15 min
Internal tool:   RPO = 24 h    ·   RTO = 8 h
\`\`\`

Lower RPO/RTO = zyada infra cost (sync replication, hot standby, multi-region). Business decide karta hai.
`
      },
      {
        "id": "isolation-ha-backup-recap",
        "title": "Quick Recap",
        "content": `**Isolation levels** — concurrent transactions kitna isolated. Anomalies: dirty read (uncommitted data), non-repeatable read (row changed mid-txn), phantom read (rows added mid-txn). Levels: Read Uncommitted -> Read Committed (usual default) -> Repeatable Read -> Serializable (safest, slowest).

**High Availability & Failover** — DB single point of failure na ho. Primary + replicas; primary fail -> promote a replica (failover). Automatic failover needs health checks + quorum (no split brain) + a proxy endpoint. Multi-AZ. Costs: small data-loss window (async), brief downtime, in-flight txns fail.

**Replication lag** — primary aur replica ke beech temporary data difference. Read-after-write flows primary se padho.

**Backup != Replication** — replica bugs/deletes bhi copy karta hai. Backup = separate point-in-time recoverable copy, offsite. Types: full, incremental, differential, PITR. Test restores. 3-2-1 rule.

**Disaster Recovery** — RPO = acceptable data loss; RTO = acceptable downtime. Lower = costlier.

## Map

\`\`\`flow
Database
Concurrent txns -> Isolation level
Availability -> Primary + Replicas -> Failover (promote replica)
Safety net -> Backup (separate) -> Disaster Recovery -> RPO + RTO
\`\`\`

One line each:

- **Isolation level** -> concurrent transactions ek doosre se kitna isolated.
- **Failover** -> failed primary ko replica promote karke replace.
- **Replication lag** -> primary/replica ka temporary difference.
- **Backup** -> data ki alag recoverable copy (replica nahi).
- **RPO** -> kitna data loss OK.  **RTO** -> kitni der downtime OK.
`
      }
    ]
  },
  {
    "id": "caching-strategies-locking",
    "title": "Caching Strategies, Stampede & Distributed Locks",
    "topics": [
      {
        "id": "db-caching-strategies",
        "title": "Database Caching Strategies",
        "content": `> Same data ko baar-baar DB se padhna mehenga hai. Ek fast layer (Redis) beech mein daalo.

\`\`\`flow
Client -> API -> Redis Cache -> (miss) -> Database
\`\`\`

## Read patterns

### Cache-Aside (Lazy Loading) — sabse common

App khud cache manage karta hai:

\`\`\`flow
Read: check cache
HIT  -> return
MISS -> DB -> put in cache (with TTL) -> return
\`\`\`

Pros: sirf jo maanga wahi cache hota hai; Redis gir jaaye to app chalti rahegi (slow). Cons: har naya key pehli baar "miss" (cold cache); stale ho sakta hai.

### Read-Through

Cache library hi DB se load karti hai on miss (app ko DB dikhta hi nahi). Cleaner code, but cache layer ko DB access chahiye.

## Write patterns

- **Write-Through** — write cache **aur** DB dono mein synchronously. Cache hamesha fresh; write thoda slow.
- **Write-Behind (Write-Back)** — write pehle cache, DB ko async baad mein. Fast writes; but cache gira to unwritten data lost -> risky for critical data.
- **Write-Around** — write seedha DB, cache ko skip; wo key next read par cache hoti hai. Write-heavy + "likha hua turant nahi padha jaata" data ke liye achha.
- **Cache invalidation on write** — write DB par, phir cache key **delete** (ya update). Cache-aside ke saath default. Delete > update (do concurrent writers cache mein galat final value chhod sakte hain).

## Kya cache karein

Frequently read + rarely changing + reads jinke stale hona OK ho: product info, config, user profile, counts, feed pages, rendered fragments. **Mat** cache karo: fast-changing critical values (wallet balance) bina clear strategy ke.

> Cache source of truth nahi hai — DB hai. Cache miss / Redis down par app correct chale (bas slower).
`
      },
      {
        "id": "cache-invalidation-stampede",
        "title": "Cache Invalidation & Cache Stampede",
        "content": `> Caching ka sabse mushkil hissa: **cache ko kab invalidate karein?** Galat kiya to users ko stale data.

\`\`\`flow
Redis: product:123 = 500
DB updated -> 600
Cache not busted -> User -> Redis -> 500  (stale!)
\`\`\`

## Invalidation strategies

- **TTL** — key apne aap expire (\`product:123\` TTL = 10 min). Simple; par TTL window mein stale possible. Har key par TTL rakho, "permanent" par bhi.
- **Explicit (write-time) invalidation** — DB update ke turant baad \`DEL product:123\`. Fresh, but har write path yaad rakhna padta hai; distributed setup mein race possible.
- **Write-through update** — DB ke saath cache bhi set. Fresh; extra write.
- **Versioned / key-based** — key mein version daalo (\`product:123:v7\`); "invalidate" = version bump, purani key apne aap orphan (TTL se cleanup).

## Cache Stampede (Thundering Herd)

Ek **popular** key expire hui, aur usi pal 10,000 requests aayin:

\`\`\`flow
product:123 TTL expired
10,000 requests -> all MISS -> 10,000 identical DB queries -> DB overload
\`\`\`

### Fixes

- **Lock / single-flight** — pehla request ek short lock leता hai aur DB se laata hai; baaki thoda wait karke cache se padhte hain (ya thodi der purani value serve).
- **Early / probabilistic refresh** — expiry se thoda pehle ek background refresh trigger (e.g. remaining TTL ke proportion mein random chance).
- **TTL jitter** — TTL fixed 600s ke bajaye \`600 + random(0..60)\` — taaki ek saath banaye gaye keys ek saath expire na hon.
- **Stale-while-revalidate** — expired value bhi thodi der serve karo jabtak background mein nayi aa rahi hai.
`
      },
      {
        "id": "distributed-locking",
        "title": "Distributed Locking",
        "content": `> Ek server ke andar normal in-memory lock kaafi hai. Multiple servers ke across wo kaam nahi karta — har server ka apna memory hai.

\`\`\`flow
Load Balancer -> Server 1 & Server 2
Server 1: process payment 123
Server 2: process payment 123   (dono ek saath -> double processing)
\`\`\`

## Distributed lock

Ek **shared** store (Redis, etcd, ZooKeeper) mein lock rakho jo saare servers dekhte hain.

\`\`\`flow
Server 1 -> SET lock:payment:123 (with TTL) -> acquired -> do work -> DEL lock
Server 2 -> SET lock:payment:123 -> already exists -> wait / retry / skip
\`\`\`

Redis: \`SET key value NX PX 30000\` (NX = only if absent, PX = 30s expiry). Release: sirf **apna** lock delete karo (value = unique token, check-and-delete via Lua) — warna tum kisi aur ka lock delete kar doge.

## TTL zaroori kyun

\`\`\`flow
Server 1 -> acquire lock -> CRASH (never releases)
No TTL -> lock:payment:123 stuck forever -> feature frozen
With TTL -> lock auto-expires -> kaam aage badhta hai
\`\`\`

Trade-off: TTL kaam se chhota hua to lock jaldi expire -> do servers ek saath. Fix: kaam TTL se chhota rakho, ya lease **renew** (watchdog) karo jab tak kaam chal raha hai.

## Use cases

Duplicate processing rokna, inventory decrement, "run this scheduled job on only one instance", cache stampede, leader election.

## Caveats

- Distributed lock **perfectly safe nahi** hota (GC pause, clock skew, network partition — "Redlock" debate). Jahan possible ho, DB ka **unique constraint** ya **atomic \`UPDATE ... WHERE\`** use karo — wo transactional aur zyada reliable hai.
- Lock = coordination, correctness ka last resort. Idempotency + DB constraints pehli choice.
`
      },
      {
        "id": "caching-locking-recap",
        "title": "Quick Recap",
        "content": `**Caching strategies** — Read: cache-aside (app manages; most common), read-through (cache loads). Write: write-through (cache+DB sync), write-behind (async, risky), write-around (skip cache on write), or invalidate-on-write (delete key). Cache is a speed layer, not source of truth.

**Cache invalidation** — TTL (simple, small stale window), explicit delete on write, write-through update, versioned keys. Delete beats update on races.

**Cache stampede (thundering herd)** — popular key expires -> many simultaneous misses -> DB flood. Fixes: single-flight lock, early/probabilistic refresh, TTL jitter, stale-while-revalidate.

**Distributed locking** — in-memory lock doesn't work across servers; use a shared store (Redis \`SET NX PX\`). Always set a **TTL** (crashed holder must not freeze the lock); release only your own lock (unique token). Prefer DB unique constraints / atomic updates where possible; locks are a last resort.

## Flow

\`\`\`flow
API -> Redis: HIT -> return   |   MISS -> DB -> store in cache -> return
Popular key expires -> stampede risk
-> distributed lock -> one request hits DB -> refills cache -> others read cache
\`\`\`

One line each:

- **Cache-aside** -> check cache; miss -> DB -> store.
- **Cache invalidation** -> DB change hone par purani cache hatao/update karo.
- **Cache stampede** -> expiry par ek saath sab DB ko hit karte hain.
- **Distributed lock** -> multiple servers ko ek shared resource par ek saath chalne se roko.
- **Lock TTL** -> crashed holder ka lock permanently stuck hone se bachao.
`
      }
    ]
  }
];
