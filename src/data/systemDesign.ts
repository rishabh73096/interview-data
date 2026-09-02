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
  },
  {
    "id": "search-and-read-write-optimization",
    "title": "Search, Full-Text Indexing & Read/Write Optimization",
    "topics": [
      {
        "id": "search-elasticsearch",
        "title": "Search Systems & Elasticsearch",
        "content": `> Jab data bahut zyada ho, normal DB se complex text search slow aur weak hoti hai. Ek dedicated search engine (Elasticsearch, OpenSearch, Typesense, Meilisearch, ya Postgres/Mongo ka built-in search) use hota hai.

## Chahiye kya

Keyword search, typo tolerance (fuzzy), relevance ranking, filters (facets), sorting, autocomplete, highlighting. Ye sab \`LIKE '%...%'\` se nahi milta.

## Architecture — DB source of truth, search is a derived index

\`\`\`flow
PostgreSQL / MongoDB  (source of truth)
Product created / updated / deleted
-> sync (event / CDC / job) ->
Elasticsearch (search index)
\`\`\`

\`\`\`flow
User -> Search API -> Elasticsearch -> ranked + filtered results
\`\`\`

Search engine kabhi source of truth nahi — wo reindex ho sakta hai, data loss OK.

## Why not \`LIKE '%shoe%'\`

- Leading \`%\` -> index use nahi hota -> **full table scan**
- No relevance, no typo tolerance, no word stemming ("running" vs "run")
- Big dataset par DB CPU kha jaata hai

## Elasticsearch concepts

- **Index** — searchable documents ka collection (\`products\`, \`users\`, \`articles\`)
- **Document** — ek record, JSON (\`{ name, brand, price }\`)
- **Mapping** — fields ke types + kaise analyze hon (text vs keyword vs number)
- **Shard / Replica** — index partitioned across nodes (scale) + copied (HA) — Kafka/DB jaisa
- **Query** — match / term / bool / range; results with a relevance \`_score\`

## Sync strategies

- **Dual write** — app DB aur ES dono likhe (simple, but ES fail hua to drift)
- **Outbox / event** — DB write + event; ek consumer ES update kare (reliable)
- **CDC** — DB ke change log (WAL/oplog) se ES feed (Debezium); app touch nahi hota
- **Periodic reindex** — full rebuild (drift fix ke liye, background)
`
      },
      {
        "id": "full-text-search",
        "title": "Full-Text Search & Search Indexing",
        "content": `> "Normal filtering" (\`status = 'active'\`) aur "full-text search" (\`"javascript runtime"\` ko relevant articles se match karna) alag problems hain.

## Inverted index — search ka core

Search engine document ko store karne se pehle **analyze** karta hai, phir ek **inverted index** banata hai: har word -> usme wo word kin documents mein hai.

\`\`\`flow
"React Developer Node.js"
Analysis: lowercase -> tokenize -> stem -> stopwords remove
Tokens: react, develop, node, js
Inverted index:  react -> [doc1, doc5],  node -> [doc1, doc9], ...
\`\`\`

Search time par query bhi same analyzer se guzarti hai, phir index se matching docs O(1)-ish nikalte hain (scan nahi).

## Analysis steps (analyzer)

- **Tokenization** — text ko words mein todna
- **Lowercasing**
- **Stemming / lemmatization** — "running", "ran", "runs" -> "run"
- **Stopwords** — "the", "is", "a" hata dena (optional)
- **Synonyms** — "js" = "javascript"
- **n-grams / edge-grams** — autocomplete + fuzzy ke liye

## Relevance / scoring

Match hone ke baad results **score** ke order mein. Roughly (BM25):

- **Term frequency** — word document mein jitni baar, utna relevant
- **Inverse document frequency** — jo word rare hai wo zyada matter karta hai
- **Field boost** — title mein match > body mein match
- **Freshness / popularity** — custom signals

\`\`\`flow
Search: "React Developer"
1. "React Developer Guide"   score 9.1
2. "Frontend Developer"      score 3.4
3. "JavaScript Basics"       score 1.2
\`\`\`

## Filters + search + sort (real e-commerce)

\`\`\`flow
Query: "running shoes"
Filters: brand=Nike, price 2000-5000, size=9, rating>4
Sort: relevance | price | newest
\`\`\`

Filters exact-match (fast, cached), full-text part scored. Facets = "har brand mein kitne results" — search ke saath aggregate.

## Autocomplete

User types \`iph\` -> \`iPhone\`, \`iPhone 15\`, \`iPhone charger\`. Edge-ngram index ya a dedicated completion suggester; debounce on client; cache top prefixes.
`
      },
      {
        "id": "read-write-optimization",
        "title": "Database Read/Write Optimization",
        "content": `> Sirf DB choose karna kaafi nahi — data ko efficiently read/write kaise karein wo matter karta hai. Aksar 90% traffic reads hota hai.

\`\`\`flow
100,000 req/sec = 90,000 reads + 10,000 writes  -> read optimization pehle
\`\`\`

## Read optimization

- **Indexing** — filter/sort/join columns par index (Ch: Indexing). Verify with \`EXPLAIN\`.
- **Caching** — hot reads Redis mein (Ch: Caching). DB hits gir jaate hain.
- **Read replicas** — reads ko replicas par baanto, primary sirf writes (Ch: Replication). Read-after-write flows primary se.
- **Projection** — sirf zaroori columns/fields lo, \`SELECT *\` nahi (kam IO, kam network)
- **Pagination** — cursor-based; deep offset avoid
- **Denormalization / materialized views** — mehengi joins/aggregations ko precompute
- **Covering index** — index mein hi saara data ho -> table touch hi nahi

## Write optimization

- **Batch / bulk writes** — 1000 alag INSERT ke bajaye ek bulk insert (kam round-trips, kam WAL flushes)
- **Async / queue** — non-critical writes (analytics, audit log, notifications, search index update) request path se hata kar queue -> worker
- **Write-behind cache** — carefully, non-critical data ke liye
- **Fewer indexes on write-heavy tables** — har index write ko slow karta hai
- **Bulk upsert** aur \`ON CONFLICT\` for idempotent writes

## N+1 query problem

\`\`\`flow
1 query: get 100 users
then per user: get their orders  -> 100 more queries
Total = 1 + 100 = 101 queries  (each a round trip!)
\`\`\`

Fix: **1 query for users + 1 query \`WHERE userId IN (...)\` for all orders** (2 total), phir memory mein group karo. ORMs mein: eager loading / \`include\` / \`populate\` / DataLoader (batching). Ya ek JOIN.

## Rule

Pehle measure (slow query log, \`EXPLAIN\`, APM), phir target the actual bottleneck — blind optimization se bachо.
`
      },
      {
        "id": "search-optimization-recap",
        "title": "Quick Recap",
        "content": `**Search engine / Elasticsearch** — dedicated system for keyword search, typo tolerance, relevance, filters, autocomplete. DB = source of truth; search index is **derived** and reindexable. Sync via dual-write, outbox/event, or CDC. Concepts: index, document, mapping, shard/replica, \`_score\`.

**Full-text search** — analyze text (tokenize, lowercase, stem, synonyms) -> build an **inverted index** (word -> docs). Query analyzed the same way -> fast lookup, no scan. Relevance ~ BM25 (term freq, inverse doc freq, field boost). Autocomplete via edge-ngrams.

**Read optimization** — indexing, caching, read replicas, projection, cursor pagination, denormalization / materialized views, covering indexes.

**Write optimization** — batch/bulk writes, async via queue for non-critical writes, fewer indexes on write-heavy tables, idempotent upserts.

**N+1 problem** — 1 query then 1-per-row = 1+N round trips. Fix: batch with \`WHERE id IN (...)\` or a JOIN / eager loading / DataLoader.

## Flow

\`\`\`flow
User -> Search API
-> Redis (cached queries)  |  -> Search engine (keyword + filter + sort + relevance)
Database = source of truth, feeds the search index
\`\`\`

One line each:

- **Search engine** -> big/complex search ke liye optimized system.
- **Elasticsearch** -> distributed full-text search + filters + relevance.
- **Inverted index** -> word -> documents mapping, search ko O(scan) se bachata hai.
- **Read optimization** -> index + cache + replicas + query tuning.
- **Write optimization** -> batch + async + fewer indexes.
- **N+1** -> ek query ke baad har row ke liye alag query -> batch/JOIN se fix.
`
      }
    ]
  },
  {
    "id": "delivery-idempotency-ratelimit",
    "title": "Delivery Guarantees, Idempotency & Rate-Limit Algorithms",
    "topics": [
      {
        "id": "message-delivery-guarantees",
        "title": "Message Delivery Guarantees",
        "content": `> Queue / event system use karte waqt: ek message **kitni baar** process ho sakta hai? 3 models.

## At-most-once

Message zyada se zyada 1 baar. Fail hua to retry nahi -> **message lost** ho sakta hai.

\`\`\`flow
Message -> Consumer -> (crash) -> message gone
\`\`\`

Fast, no duplicates, but data loss. OK for: metrics samples, live telemetry jahan ek missed reading matter nahi karti.

## At-least-once

Message **kam se kam 1 baar**. Ack na mile to retry -> loss nahi, but **duplicate** possible.

\`\`\`flow
Consumer processes OK -> ack lost on network -> broker re-delivers -> processed AGAIN
\`\`\`

Yeh **default** hai zyadaatar queues/Kafka mein. Isliye consumer **idempotent** hona chahiye. OK for: almost everything, jab tak duplicate handle ho.

## Exactly-once

Goal: effect exactly ek baar. True exactly-once distributed systems mein bahut mushkil/mehenga (needs transactional coordination between broker + your store). Kafka "exactly-once" bhi ek closed loop (Kafka->Kafka) ke andar hi hai.

**Practical answer: at-least-once delivery + idempotent processing = effectively-once.**

## Summary

| Model | Loss | Duplicate | Use |
| --- | --- | --- | --- |
| At-most-once | possible | no | fire-and-forget telemetry |
| At-least-once | no | possible | default; pair with idempotency |
| Exactly-once | no | no | rare; expensive; usually approximated |
`
      },
      {
        "id": "idempotency",
        "title": "Idempotency",
        "content": `> Idempotent = same operation ko 2 baar (ya 10 baar) chalao, **final effect wahi** — jaise ek hi baar chalaya ho.

## Kyun zaroori

Networks retry karte hain. Ek \`POST /payment\` succeed hua but response network mein kho gaya -> client retry karta hai.

\`\`\`flow
POST /payment (Rs 100) -> charged -> response lost
client retries -> Rs 100 charged AGAIN  (bug!)
\`\`\`

GET/PUT/DELETE naturally idempotent hain. **POST / "create" / "process" nahi** — inko explicitly idempotent banana padta hai.

## Idempotency Key pattern

Client har unique operation ke liye ek key generate karke bhejta hai (UUID). Server us key ka result yaad rakhta hai.

\`\`\`flow
Client -> header: Idempotency-Key: abc123
Server:
  key seen before?
    YES -> return the stored earlier response (don't re-process)
    NO  -> process -> store (key -> result) -> return
\`\`\`

Implementation notes:

- Key ko **process se pehle** insert karo (unique constraint) — concurrent retries mein sirf ek jeete, baaki "in progress" ya wait
- Stored result ko TTL do (e.g. 24h)
- Key ko request ke **hash** se bind karo -> same key + alag body = error (misuse pakdo)

## Idempotency + Queue (the common pattern)

At-least-once queue duplicate deliver karti hai:

\`\`\`flow
Message A -> Consumer -> process -> mark A done (in DB)
Message A (redelivered) -> Consumer -> "A already done" -> skip
\`\`\`

Dedup key = message id ya business key (orderId). "Processed message ids" table / Redis set + TTL.

## Kahan chahiye

Payments, refunds, order/booking creation, "send once" emails/SMS, inventory decrement, any retryable critical POST.
`
      },
      {
        "id": "rate-limiting-algorithms",
        "title": "Rate Limiting Algorithms",
        "content": `> (Rate limiting kyun — Ch: API Gateway & Rate Limiting. Yahan algorithms ki depth.)

## A. Fixed Window

Har fixed interval (e.g. har calendar minute) mein ek counter, limit tak. Window badalte hi reset.

\`\`\`flow
10:00:00-10:01:00 -> allow first 100
10:01:00 -> counter = 0
\`\`\`

Simple, memory = 1 counter per key. **Problem — boundary burst:**

\`\`\`flow
10:00:59 -> 100 requests   +   10:01:00 -> 100 requests
= ~200 requests in ~1 second (limit "100/min" toota)
\`\`\`

## B. Sliding Window

Rolling last-60-seconds ko dekhta hai, fixed boundary nahi.

- **Sliding log** — har request ka timestamp store; count = last 60s ke timestamps. Accurate, but memory per request.
- **Sliding window counter** — current + previous fixed window ka weighted blend. ~Accurate, cheap. Common production choice.

\`\`\`flow
now ----[ <-- 60s window --> ]
count = requests whose timestamp is within the last 60s
\`\`\`

## C. Token Bucket

Bucket mein tokens, fixed rate se refill (e.g. 10/sec), capacity capped (e.g. 100). Har request 1 token leti hai; token nahi to reject (ya wait).

\`\`\`flow
refill: +10 tokens/sec (max 100)
request -> take 1 token -> have token? allow : 429
\`\`\`

Idle time mein tokens jama -> **controlled bursts** allow (100 tak), long-run rate = refill rate. Sabse popular (AWS, Stripe style).

## D. Leaky Bucket

Requests ek queue mein aati hain, fixed rate se "leak" (process) hoti hain. Output rate **bilkul smooth** — bursts ko flatten karta hai (queue full -> drop).

## Distributed (multi-server)

Counter/tokens ek **shared Redis** key mein, warna har server apna limit rakhega aur real limit N-guna. Atomic: \`INCR\` + \`EXPIRE\`, ya a Lua script (token bucket ke liye check-refill-take ek atomic step mein).

\`\`\`flow
rate:user:123 -> count 87, TTL 60s
next: 88 ... 100 allow ... 101 -> 429 + Retry-After
\`\`\`

| Algorithm | Bursts | Accuracy | Cost |
| --- | --- | --- | --- |
| Fixed window | boundary spike | low | tiny |
| Sliding window | smooth | high | low-med |
| Token bucket | controlled bursts | high | low |
| Leaky bucket | fully smoothed | high | low-med |
`
      },
      {
        "id": "delivery-idempotency-recap",
        "title": "Quick Recap",
        "content": `**Delivery guarantees** — At-most-once (loss OK, no dup), At-least-once (no loss, dup possible — the default), Exactly-once (hard/rare). Production reality = **at-least-once + idempotent consumer = effectively-once**.

**Idempotency** — same op repeated -> same final effect. GET/PUT/DELETE free; POST/create needs an **Idempotency-Key**: server stores key->result, returns the stored result on retry. Insert key before processing (unique constraint). For queues: dedup on message/business id.

**Rate-limit algorithms** — Fixed window (simple, boundary burst), Sliding window (smooth, accurate), Token bucket (controlled bursts, most popular), Leaky bucket (fully smoothed output). Multi-server -> shared Redis counter, atomic ops.

## Payment flow (all three together)

\`\`\`flow
Client -> Rate Limiter (token bucket, Redis)
-> Payment API -> Idempotency check (key seen? return stored : process)
-> Payment Service -> Queue (at-least-once)
-> Consumer -> idempotency check -> Database
\`\`\`

Retry after network failure -> same key -> previous result. Duplicate queue message -> consumer skips (already processed).

One line each:

- **At-least-once** -> retry ho sakta hai, duplicate possible -> idempotent consumer.
- **Idempotency** -> repeated operation ka unwanted double-effect roko (idempotency key).
- **Token bucket** -> tokens consume + refill; controlled bursts, capped average rate.
`
      }
    ]
  },
  {
    "id": "versioning-webhooks-scheduling",
    "title": "API Versioning, Webhooks & Job Scheduling",
    "topics": [
      {
        "id": "api-versioning",
        "title": "API Versioning & Backward Compatibility",
        "content": `> API update karte waqt #1 rule: **existing clients break nahi hone chahiye.** Mobile apps mahino purane version par chal rahe hote hain — unhe force-update nahi kar sakte.

## Backward-compatible vs breaking

- **Compatible (safe):** naya optional field add karna, naya endpoint, naya optional query param, response mein naya field. Purane client ignore kar denge.
- **Breaking:** field rename/remove (\`name\` -> \`firstName\`+\`lastName\`), type change, required param add, meaning badalna, error format change, endpoint remove.

\`\`\`flow
Safe:     { id, name }  ->  { id, name, email }
Breaking: { id, name }  ->  { id, firstName, lastName }   (old client expects "name")
\`\`\`

## Versioning styles

- **URL path** — \`/api/v1/users\`, \`/api/v2/users\` — sabse visible/common, cache-friendly
- **Header** — \`Accept: application/vnd.app.v2+json\` — clean URLs, kam visible
- **Query param** — \`/users?version=2\` — simple, thoda hacky

\`\`\`flow
Client -> API Gateway -> /v1/users (old logic)  |  /v2/users (new logic)
\`\`\`

## Production lifecycle

\`\`\`flow
Add new (v2) alongside v1
Announce + document deprecation (deadline)
Migrate clients (dashboards, SDKs, emails)
Sunset v1 (return 410 Gone after date)
\`\`\`

## Practical

- Har chhote change ke liye \`v2\` mat banao — backward-compatible additions same version mein.
- v1/v2 ko alag services na banao; ek codebase, ek transformation layer jo internal model ko version-specific response mein map kare.
- Consumer-driven contract tests se breaking change CI mein pakdo.
- Clients ko **tolerant reader** likhne ko encourage karo (unknown fields ignore karein).
`
      },
      {
        "id": "webhooks-reliability",
        "title": "Webhooks & Webhook Reliability",
        "content": `> Webhook = ek system doosre ko HTTP POST karke batata hai "ye event hua" (Stripe -> tumhara server: \`payment.succeeded\`). Polling ka opposite — provider tumhe push karta hai.

\`\`\`flow
Customer pays -> Stripe -> POST /webhooks/stripe -> your backend -> order = PAID
\`\`\`

## Kyun webhook, client-confirm nahi

Client tab band kar sakta hai, network drop ho sakta hai, ya client tampered ho sakta hai. Provider ka webhook = **server-to-server source of truth** for "payment actually succeeded".

## Problem 1: duplicate events

Providers **at-least-once** deliver karte hain — same event 2-3 baar aa sakta hai (retry after a slow/failed response).

\`\`\`flow
payment.succeeded  x3  ->  order processed 3 times?  (bug)
\`\`\`

Fix: **idempotent handler.** Event ka unique id (\`evt_123\`) ek \`webhook_events\` table/Redis set mein store karo. Aaya hua id -> skip.

\`\`\`flow
receive -> seen evt_123?  YES -> 200 OK (do nothing)
                          NO  -> process -> store evt_123 -> 200 OK
\`\`\`

## Problem 2: security (public endpoint)

Koi bhi \`POST /webhooks/payment\` kar sakta hai. Provider ek **signature** bhejta hai (HMAC of body with a shared secret) in a header.

\`\`\`flow
verify signature (raw body!) -> valid? process : 401
\`\`\`

- Raw body par verify karo (JSON re-serialize se signature toot jaata hai)
- Timestamp check karo (replay attack — purana signed payload dobara)
- HTTPS only

## Problem 3: reliability + speed

Provider expect karta hai fast \`2xx\` (warna wo retry karega, aur eventually give up). Heavy work handler mein mat karo.

\`\`\`flow
Webhook API: verify signature -> check idempotency -> enqueue -> return 200 OK (fast)
Worker (async): business logic -> DB -> external calls
\`\`\`

- Handler slow/failed -> provider retries (exponential backoff, hours-days). Design for that.
- Missed webhooks ke liye a reconciliation job (provider se periodically fetch karke compare).
`
      },
      {
        "id": "distributed-scheduling",
        "title": "Distributed Job Scheduling / Cron at Scale",
        "content": `> Ek server par \`cron.schedule("0 0 * * *", generateReport)\` simple hai. 10 servers par — sabne wo job chala di.

\`\`\`flow
Server 1..10 -> har ek ne "generate report" chalaya -> 10x work, 10x emails, race conditions
\`\`\`

## Goal

Scheduled job **exactly ek instance** par chale (ya at-least-once + idempotent).

## Option A: distributed lock (small scale)

Har server cron ke waqt Redis lock leने ki koshish kare; sirf ek jeetta hai.

\`\`\`flow
SET job:daily-report <token> NX EX 300
Server 1 -> acquired -> run job -> release
Server 2..10 -> exists -> skip
\`\`\`

TTL job ke max runtime se thoda bada; job crash hua to next run pe wapas.

## Option B: scheduler -> queue -> workers (recommended)

Scheduling ko execution se **alag** karo. Ek dedicated scheduler (single leader, ya a managed cron: cloud scheduler, Kubernetes CronJob, Temporal, BullMQ repeatable jobs) sirf ek message enqueue karta hai. Workers (jitne chahe) queue se uthate hain.

\`\`\`flow
Scheduler (12 AM) -> enqueue "monthly-reports"
Queue -> Worker 1 (Report A) · Worker 2 (Report B) · Worker 3 (Report C)
\`\`\`

Faayda: parallelism, retries, DLQ, visibility — sab queue se free. Scheduler thin.

## Reliability

- **Idempotent jobs** — job ek "run key" (\`report:2026-09\`) ke saath; already done -> skip. (Double-trigger ya retry safe.)
- **Retry with backoff**, then **DLQ** for repeated failures + alert
- **Missed runs** — server down tha 12 AM par? Managed schedulers "catch up" kar sakte hain; decide karo chahiye ya nahi
- **Long jobs** — chunk karo (100k users -> 100 jobs of 1k), warna ek failure poora job dobara

> Principle (teeno topics common): failure assume karo, duplicate execution assume karo, system ko retry-safe / idempotent banao.
`
      },
      {
        "id": "versioning-webhooks-recap",
        "title": "Quick Recap",
        "content": `**API Versioning** — clients (especially mobile) purane version par chalte hain; unhe break mat karo. Backward-compatible = add optional fields/endpoints. Breaking = rename/remove/retype. Styles: URL path (\`/v1\`), header, query. Lifecycle: add -> deprecate (with deadline) -> migrate -> sunset. Don't \`v2\` every change; one codebase + a response-mapping layer.

**Webhooks** — provider POSTs "event happened" to your public endpoint (source of truth for payments etc.). Handle: (1) **verify signature** on the raw body + timestamp, (2) **idempotency** by event id (at-least-once delivery = duplicates), (3) **respond fast** — verify + enqueue + 200, do heavy work in a worker. Add a reconciliation job for missed events.

**Distributed scheduling** — N servers each running cron = N runs. Fix: distributed lock (small), or **scheduler -> queue -> workers** (recommended: thin scheduler enqueues once, workers process with retries/DLQ). Jobs idempotent with a run key; chunk long jobs.

## Production flow

\`\`\`flow
Client -> API Gateway -> API v1 / v2 -> Backend -> DB
Payment: Provider -> Webhook API (verify + idempotency) -> Queue -> Worker -> DB
Scheduled: Scheduler -> (lock / single trigger) -> Queue -> Workers -> DB
\`\`\`

One line each:

- **API versioning** -> API badlo bina purane clients toде.
- **Webhook** -> external system se event push receive karna (verify + idempotent + fast ack).
- **Distributed scheduler** -> multi-server par scheduled job ko ek hi baar (safely) chalana.
`
      }
    ]
  },
  {
    "id": "hashing-proxy-mesh",
    "title": "Consistent Hashing, Reverse Proxy & Service Mesh",
    "topics": [
      {
        "id": "consistent-hashing",
        "title": "Consistent Hashing",
        "content": `> Problem: distributed cache/shards mein "kaunsi key kaunse node par" — aur node add/remove hone par **minimum** keys move hon.

## Naive: \`hash(key) % N\`

\`\`\`flow
hash(userId) % 3  ->  101->node1, 102->node2, 103->node3
Add node4:  hash(userId) % 4  ->  almost EVERY key remaps -> cache wipe / massive rebalance
\`\`\`

\`N\` badalte hi \`% N\` sabkuch shift kar deta hai. Cache ke liye ye mass cache-miss; sharded DB ke liye ye poora data reshuffle.

## Consistent hashing ka idea

Ek circular hash space (0 .. 2^32) — "the ring". Nodes bhi hash hokar ring par baithte hain. Ek key ka node = ring par usse **clockwise agla node**.

\`\`\`flow
ring:  ...A......B........C...(wraps to A)
key K -> hash -> lands between A and B -> owned by B
\`\`\`

Node D add hua -> sirf D aur uske pichhle node ke beech ki keys D par move hoti hain. Baaki sab as-is.

\`\`\`flow
Before: A ---- B -------- C
After:  A -- D -- B ------ C   (only keys in the A..D arc moved)
\`\`\`

Node remove -> uski keys agle node par. Average movement ~ K/N keys (na ki ~K).

## Virtual nodes (vnodes)

Ek physical node ko ring par **kai** positions do (A -> A1..A100). Warna 3 nodes ring ko unevenly baantenge (ek node ko 60%, doosre ko 10%). Vnodes se load smooth, aur ek node hataने par uska load **kai** nodes mein bat jaata hai (ek par nahi).

## Kahan

Redis Cluster (hash slots — related idea), Cassandra / DynamoDB (partitioning), CDN edge selection, sticky routing, distributed caches (memcached clients).

> Ye load balancer ka replacement nahi. Iska kaam: **key -> node mapping ko stable rakhna** membership badalne par.
`
      },
      {
        "id": "reverse-proxy",
        "title": "Reverse Proxy",
        "content": `> Client backend se seedha baat nahi karta — beech mein ek **reverse proxy** (Nginx, HAProxy, Envoy, Caddy, cloud ALB). "Reverse" kyunki wo **servers** ki taraf se khada hai (forward proxy client ki taraf se hota hai).

\`\`\`flow
Client -> Reverse Proxy -> Server 1 / Server 2 / Server 3
\`\`\`

## Kaam

- **TLS termination** — HTTPS proxy par khatam, andar HTTP/mTLS. Cert management ek jagah.
- **Load balancing** — backends mein request baantna + health checks (LB aksar reverse proxy hi hota hai)
- **Routing** — \`/api/users\` -> user service, static -> file server
- **Caching** — cacheable responses proxy par (micro-cache), origin load kam
- **Compression** (gzip/brotli), **buffering** slow clients ke liye
- **Rate limiting, IP allow/deny, WAF, request/response header manipulation**
- **Security** — backends public internet par expose nahi; ek hardened entry point

## Reverse Proxy vs LB vs API Gateway vs Service Mesh

| Component | Primary job |
| --- | --- |
| Reverse Proxy | Client <-> backend intermediary (TLS, routing, cache, protect) |
| Load Balancer | Traffic ko identical instances mein distribute + health check |
| API Gateway | API-level: auth, rate limit, quotas, versioning, aggregation, per-consumer policy |
| Service Mesh | Service-to-service (east-west) comms: mTLS, retry, timeout, tracing |

Real mein overlap hota hai — Nginx LB + reverse proxy + basic gateway sab kar sakta hai; Envoy proxy hi gateway aur mesh dono mein use hota hai.

\`\`\`flow
Internet -> CDN -> Load Balancer -> Reverse Proxy -> API Gateway -> Microservices
\`\`\`

> Zaroorat ke hisaab se choose karo — har layer add karna over-engineering hai.
`
      },
      {
        "id": "service-mesh",
        "title": "Service Mesh",
        "content": `> Bahut si microservices ek doosre ko call karti hain. Har service ke code mein retry, timeout, mTLS, circuit breaker, tracing, metrics — same plumbing baar-baar. Service mesh isko **infra layer** mein utha leta hai.

## Sidecar pattern

Har service pod ke saath ek **proxy** (Envoy) deploy hota hai. Service ka saara inbound/outbound traffic apne sidecar se guzarta hai — service ko lagta hai wo localhost se baat kar raha hai.

\`\`\`flow
Order App -> Order sidecar -> (network) -> Payment sidecar -> Payment App
\`\`\`

- **Data plane** — sidecar proxies (traffic actually yahan se guzarta hai)
- **Control plane** — central config/policy (Istiod, Linkerd control plane) jo sabhi sidecars ko configure karta hai

## Kya deta hai (code change ke bina)

- **mTLS** — service-to-service encryption + identity, automatically
- **Traffic management** — canary (\`v1 90% / v2 10%\`), blue-green, mirroring, fault injection
- **Resilience** — retry, timeout, circuit breaking, outlier detection — policy se, per route
- **Observability** — har hop ke metrics + distributed traces + a service dependency graph, uniform
- **Authz policy** — "service A hi service B ko call kar sakti hai"

## Kab use kare

\`\`\`flow
React -> Node -> MongoDB           -> mesh ki zaroorat NAHI (over-engineering)
30+ services, multi-team, K8s      -> mesh useful (uniform security + resilience + visibility)
\`\`\`

Cost: extra proxy per pod (latency + CPU/memory), operational complexity, ek aur cheez jo fail ho sakti hai. Libraries (resilience4j, gRPC built-ins) chhote setups ke liye kaafi hain.

Ecosystem: Istio, Linkerd, Consul Connect, Cilium (eBPF-based, sidecar-less).
`
      },
      {
        "id": "hashing-proxy-mesh-recap",
        "title": "Quick Recap",
        "content": `**Consistent Hashing** — \`hash(key) % N\` breaks on membership change (mass remap). Consistent hashing: nodes + keys on a ring, key -> next clockwise node; add/remove moves only ~K/N keys. **Virtual nodes** even out the distribution. Used in Redis Cluster, Cassandra/Dynamo, CDNs. Purpose = stable key->node mapping, not load balancing.

**Reverse Proxy** — client-facing intermediary in front of backends: TLS termination, load balancing + health checks, routing, caching, compression, security (backends hidden). Nginx / HAProxy / Envoy.

**Service Mesh** — moves service-to-service concerns (mTLS, retry, timeout, circuit breaking, tracing, traffic splitting) into a sidecar proxy layer. Data plane (sidecars) + control plane (policy). Worth it for large multi-service K8s systems; over-engineering for a 3-tier app.

## Mental model

\`\`\`flow
Consistent hashing -> "which NODE owns this KEY?"
Reverse proxy       -> "which BACKEND handles this CLIENT request?" (north-south)
Service mesh        -> "how do SERVICES talk to each other?" (east-west)
\`\`\`

## Full edge-to-data path

\`\`\`flow
Internet -> CDN -> Load Balancer -> Reverse Proxy -> API Gateway
-> Microservices (each with a mesh sidecar)
-> Database / Redis (keys placed via consistent hashing) / Queue
\`\`\`

One line each:

- **Consistent hashing** -> membership badalne par minimum key movement.
- **Reverse proxy** -> backends ke aage ek smart, protective front door.
- **Service mesh** -> networking concerns app code se nikaal kar sidecar mein.
`
      }
    ]
  },
  {
    "id": "distributed-building-blocks",
    "title": "Distributed Systems Building Blocks",
    "topics": [
      {
        "id": "leader-election-consensus",
        "title": "Leader Election & Consensus",
        "content": `> Kai nodes ko ek baat par agree karना hai (kaun leader hai, next value kya hai) — bina ek galat answer diye, node crash / network partition ke bawajood. Yeh **consensus** problem hai.

## Leader election

Ek cluster mein aksar ek **leader** hota hai jo writes accept karta hai (replicas follow karte hain). Leader crash -> baaki nodes naya leader chunte hain.

\`\`\`flow
Leader (accepts writes) -> Followers replicate
Leader dies -> election -> new leader -> continue
\`\`\`

Problem: **split brain** — do nodes dono khud ko leader samajh lein (partition ke dono taraf). Iska ilaj: **quorum** — leader banne ke liye majority (N/2 + 1) votes chahiye. Ek partition ke paas majority nahi -> wo leader nahi bana sakta.

## Consensus algorithms (conceptual)

- **Paxos** — pehla practical consensus; sahi, but samajhna/implement karna mushkil
- **Raft** — Paxos jaisa hi guarantee, jaan-boojh kar **understandable** banaya. 3 parts: leader election (randomized timeouts), log replication (leader entries followers ko bhejta hai, majority ack -> committed), safety. Etcd, Consul, CockroachDB, TiDB Raft use karte hain.
- **ZAB** — ZooKeeper ka protocol

Tum implement nahi karoge — but **kaha use hota hai** jaanna zaroori: distributed locks/coordination (ZooKeeper/etcd), config stores, Kafka controller, DB replication.

## Where it shows up in design

- "Ensure only one instance runs this job" -> a lock service backed by Raft (etcd)
- Multi-primary DB -> consensus per write (slow) vs single-primary + failover
- Kafka partition leader, K8s control plane

> Rule: consensus reliable hai but **slow** (har decision = round trips to a majority). Isko sirf **metadata / coordination** ke liye use karo, high-volume data path ke liye nahi.
`
      },
      {
        "id": "quorum-and-clocks",
        "title": "Quorums, Vector Clocks & Logical Time",
        "content": `> Leaderless / multi-writer systems (Dynamo, Cassandra) mein "consistency" quorums aur causal ordering se aati hai, single leader se nahi.

## Quorum: R + W > N

- **N** = har key ki replicas
- **W** = write ko kitni replicas confirm karein
- **R** = read ke liye kitni replicas se poochho

Agar **R + W > N**, to read set aur write set mein kam se kam ek common node hoga -> read ko latest write dikh jaayega (strong-ish consistency).

\`\`\`flow
N=3, W=2, R=2  ->  2+2 > 3  -> a read always overlaps the last write
N=3, W=1, R=1  ->  fast, but read latest write miss kar sakta hai (eventual)
\`\`\`

Tune karo: W=N (slow writes, fast/consistent reads), R=1 W=1 (fast, eventual).

## Conflicts: concurrent writes

Do clients ne alag replicas par ek key ek saath likhi -> kaunsa "latest"? Wall-clock time reliable nahi (clock skew).

- **Last-Write-Wins (LWW)** — timestamp se decide; simple, but ek write silently kho sakta hai
- **Vector clocks** — har node ek counter; \`[A:2, B:1]\`. Do versions compare karke pata chalta hai: ek doosre se "after" hai (keep newer), ya **concurrent** (conflict -> app/client resolve kare, ya CRDT merge)
- **Lamport timestamp** — ek single counter jo events ko **total order** deta hai (causally-related events sahi order mein); but concurrency detect nahi karta

## Where it shows up

- Dynamo/Cassandra tunable consistency (\`QUORUM\`, \`ONE\`, \`ALL\`)
- Shopping cart merge (Dynamo's classic example — vector clocks)
- "Read your writes" -> R+W>N ya route to primary
- Distributed debugging -> Lamport/vector clocks se event order

> Physical clocks pe kabhi correctness mat rakho. Ordering chahiye -> logical clocks. Overlap chahiye -> quorums.
`
      },
      {
        "id": "gossip-merkle",
        "title": "Gossip Protocol & Merkle Trees",
        "content": "> Bade clusters mein har node ko har node se directly baat karna (N^2) scale nahi karta. Gossip aur Merkle trees efficient tareeke se state spread + reconcile karte hain.\n\n## Gossip protocol\n\nHar node periodically kuch **random** nodes ko apni info (jo nodes alive/dead hain, membership, config) bhejta hai. Wo aage forward karte hain. Kuch rounds mein poore cluster ko pata chal jaata hai — epidemic ki tarah (isliye \"epidemic protocol\").\n\n```flow\nNode A knows X -> tells 3 random nodes -> they tell 3 each -> whole cluster in ~log(N) rounds\n```\n\n- **Fault tolerant** — koi central coordinator nahi; kuch nodes gire to bhi info phailti hai\n- **Eventually consistent** membership view\n- Use: Cassandra/Dynamo membership + failure detection, Consul, Redis Cluster, Serf\n- Cost: thoda bandwidth overhead, aur info propagation instant nahi (seconds)\n\n## Merkle trees (anti-entropy)\n\nDo replicas ke paas same data hona chahiye — but poora dataset compare karna (TB) mehenga. Merkle tree = hash tree: leaves = data blocks ke hash, parent = children ke hash ka hash, ek **root hash**.\n\n```flow\nRoot hash same?  -> replicas identical, done (1 comparison)\nRoot differs -> compare children -> descend only the differing branch -> find exact divergent blocks\n```\n\nO(log n) mein pata chal jaata hai **kaunsa** data diverge hua, sirf wahi sync karo.\n\n- Use: Cassandra/Dynamo replica repair (\"anti-entropy\"), Git (commits/trees), blockchains, BitTorrent, backup dedup, IPFS\n\n## Together (Dynamo-style)\n\nGossip -> \"kaunse nodes hain aur alive hain\". Consistent hashing -> \"key kaunse nodes par\". Quorum -> per-request consistency. Merkle trees -> background mein replicas ko sync rakhna. Vector clocks -> conflicts.\n"
      },
      {
        "id": "distributed-building-blocks-recap",
        "title": "Quick Recap",
        "content": `**Leader election & consensus** — nodes agree on one truth despite crashes/partitions. Leader takes writes; quorum (majority) prevents split-brain. Raft = understandable consensus (etcd, Consul, CockroachDB). Consensus is correct but slow -> metadata/coordination only, not the data path.

**Quorums** — \`R + W > N\` guarantees a read overlaps the last write. Tune R/W for consistency vs latency (Dynamo/Cassandra).

**Logical clocks** — wall clocks lie. Lamport timestamp = total order of causal events. Vector clocks = detect "happened-before" vs "concurrent" (conflict). Used for cart merges, read-your-writes, debugging.

**Gossip** — nodes tell random peers; info spreads epidemically in ~log(N) rounds. Membership + failure detection (Cassandra, Consul, Redis Cluster). No coordinator, eventually consistent.

**Merkle trees** — hash tree; compare root hashes to find *which* blocks diverged in O(log n). Replica repair (anti-entropy), Git, blockchains, dedup.

One line each:

- **Consensus (Raft)** -> nodes safely agree on one value/leader; use for coordination, not bulk data.
- **Quorum** -> R+W>N -> reads see the latest write.
- **Vector clock** -> concurrent vs causal — detect write conflicts.
- **Gossip** -> spread cluster state to random peers, epidemically.
- **Merkle tree** -> pinpoint replica differences cheaply via hashes.
`
      }
    ]
  },
  {
    "id": "probabilistic-data-structures",
    "title": "Probabilistic Data Structures",
    "topics": [
      {
        "id": "bloom-filter",
        "title": "Bloom Filter",
        "content": `> "Kya ye element set mein hai?" — exact answer ke liye a hash set chahiye (bahut memory at scale). Bloom filter thodi si memory mein answer deta hai, ek catch ke saath: **false positives possible, false negatives never.**

## Kaam kaise karta hai

Ek bit array (all 0) + k hash functions. **Add(x):** x ko k hashes se run karo, har result ki bit ko 1 karo. **Check(x):** wahi k bits dekho — koi bhi 0 -> **definitely not present**; sabhi 1 -> **probably present** (ho sakta hai doosre elements ne wo bits set kiye hon).

\`\`\`flow
add("apple") -> bits 3, 17, 42 = 1
check("apple") -> 3,17,42 all 1 -> maybe present (yes)
check("mango") -> bit 9 = 0 -> definitely NOT present
\`\`\`

- Delete nahi hota (bit clear karo to doosre element toot jaayega). Variant: **Counting Bloom Filter** (counters, not bits) delete allow karta hai.
- More elements -> more bits set -> false-positive rate badhta hai. Rate ko target karke size + k choose kiya jaata hai.

## Kahan use hota hai (interview gold)

- **DB / LSM engines** (Cassandra, HBase, RocksDB, BigTable) — "ye key is SSTable mein hai kya?" — nahi to disk read skip. Huge speedup.
- **CDN / cache** — "ye URL cache mein hai?" pehle bloom check, warna origin
- **Web crawler** — "ye URL already crawl kiya?"
- **"Have I seen this?"** — dedup, one-time notifications
- Chrome ne malicious URL check ke liye use kiya

> Trade-off: chhoti memory + false positives. False positive ka matlab bas "ek extra check/miss", correctness nahi tootti.
`
      },
      {
        "id": "hyperloglog-count-min",
        "title": "HyperLogLog & Count-Min Sketch",
        "content": `> Jab exact count rakhna bahut mehenga ho (billions of items), approximate structures constant memory mein "kaafi accurate" answer dete hain.

## HyperLogLog — approximate **distinct count** (cardinality)

"Kitne **unique** visitors / IPs / search terms?" — exact ke liye har unique ko store karna padega (GBs). HLL ~12 KB mein billions of uniques ~2% error ke saath count karta hai.

Idea (roughly): har item hash karo; hash ke leading zeros dekho. Zyada leading zeros = zyada rare = probably zyada unique items dekhe. Registers ka average -> cardinality estimate.

\`\`\`flow
PFADD visitors:2026-09-02 user_1 user_2 ...
PFCOUNT visitors:2026-09-02  -> ~4,812,900  (12 KB used)
PFMERGE  -> union of multiple HLLs (weekly = merge 7 daily)
\`\`\`

Use: unique visitors/DAU, distinct search queries, unique devices — Redis \`PF*\`, Presto/BigQuery \`APPROX_COUNT_DISTINCT\`.

## Count-Min Sketch — approximate **frequency** / heavy hitters

"Ye item kitni baar aaya?" ya "top-K most frequent?" — full counter map billions of keys ke liye huge. CMS = a small 2D array of counters + d hash functions. **Increment:** har row mein \`hash(x)\` position \`+1\`. **Query:** un d counters ka **minimum** (collisions sirf badha sakte hain, ghata nahi -> min best estimate).

\`\`\`flow
add("/product/1") x1000 ; add("/product/2") x5
count("/product/1") -> ~1000 (maybe slightly over)
\`\`\`

- Over-estimates possible, under-estimates never. Heavy hitters (frequent items) accurate; rare items noisy.
- Use: trending topics, rate limiting at scale, top-K products/queries, network traffic (heavy flows), detecting hot keys.

## Why interviewers love these

"Design trending hashtags for Twitter" / "count unique users on a huge stream" — the expected answer is **not** a giant hash map. It's HLL + Count-Min Sketch + maybe a top-K heap. Shows you think about memory at scale.
`
      },
      {
        "id": "probabilistic-recap",
        "title": "Quick Recap",
        "content": `**Bloom filter** — "is x in the set?" in tiny memory. False positive possible, false negative never. Bit array + k hashes. Used in LSM/DB engines (skip disk reads), CDN/cache, crawlers, dedup. Counting Bloom allows delete.

**HyperLogLog** — approximate **distinct count** (cardinality) of a huge stream in ~12 KB, ~2% error. Redis \`PFADD/PFCOUNT/PFMERGE\`. Unique visitors, distinct queries.

**Count-Min Sketch** — approximate **frequency** / heavy-hitters in small fixed memory. Over-estimates only (take the min of d counters). Trending topics, top-K, hot-key detection, rate limiting at scale.

> Common thread: trade a little accuracy for massive memory savings, with a **one-sided** error you can reason about.

One line each:

- **Bloom filter** -> "probably present / definitely absent" — skip expensive lookups.
- **HyperLogLog** -> count unique things in a stream with almost no memory.
- **Count-Min Sketch** -> count how often things appear / find the heavy hitters, cheaply.
`
      }
    ]
  },
  {
    "id": "storage-engines-analytics",
    "title": "Storage Engines & Analytics Data Systems",
    "topics": [
      {
        "id": "lsm-vs-btree",
        "title": "Storage Engines: LSM Tree vs B-Tree",
        "content": `> "Cassandra writes fast kyun? Postgres reads achhe kyun?" — jawab storage engine hai. Ye classic senior question hai.

## B-Tree (Postgres, MySQL/InnoDB, most RDBMS)

Data ek balanced tree mein, sorted, disk pages mein. Read = O(log n) tree traverse -> ek jagah se row. Write = wahi page dhoondo, **in place** update (+ WAL). Page fill/split ho sakta hai.

- **Reads:** predictable, fast (point + range), ek page read
- **Writes:** random disk writes (page yahan-wahan), write amplification (WAL + page), locking
- Mature, strong transactions

## LSM Tree (Cassandra, RocksDB, LevelDB, HBase, ScyllaDB, BigTable)

Writes pehle ek in-memory sorted structure (**memtable**) + a WAL. Memtable bhar gaya -> disk par ek immutable **SSTable** file flush (sequential write — fast). Background **compaction** SSTables ko merge/sort karta hai aur deleted (tombstoned) data hata deta hai.

- **Writes:** append-only, sequential -> **very fast**, high throughput
- **Reads:** ek key kai SSTables mein ho sakti hai -> memtable + several SSTables check (yahin **Bloom filters** + per-SSTable index bachaate hain). Range reads thode mehenge.
- **Compaction:** background CPU/IO cost, aur temporary space amplification
- Great for write-heavy, time-series, logs, big data

\`\`\`flow
LSM write:  WAL append + memtable insert  (fast)
            memtable full -> flush SSTable (sequential)
            background: compaction merges SSTables
LSM read:   memtable -> bloom-check each SSTable -> read matching -> merge newest wins
\`\`\`

| | B-Tree | LSM Tree |
| --- | --- | --- |
| Write pattern | random, in-place | sequential, append |
| Write speed | good | excellent |
| Read speed | excellent | good (bloom + index help) |
| Space | fragmentation | tombstones + compaction spikes |
| Best for | OLTP, read-heavy, txns | write-heavy, time-series, big scale |

> Interview move: "write-heavy ingestion -> LSM-backed store (Cassandra); complex transactional queries -> B-tree RDBMS (Postgres)."
`
      },
      {
        "id": "wal-cdc",
        "title": "Write-Ahead Log & Change Data Capture",
        "content": `> Ek append-only log jo har change ko **actual data change se pehle** record karta hai. Kai systems ki reedh ki haddi.

## Write-Ahead Log (WAL / redo log / commit log)

DB pehle change ko WAL mein append karta hai (sequential, fast, durable via fsync), **phir** data pages update karta hai. Crash ke baad: WAL replay karke committed-but-not-yet-applied changes recover.

- **Durability (ACID D)** — committed = WAL mein hai
- **Crash recovery** — WAL se replay
- **Replication** — WAL/binlog followers ko stream (Postgres streaming replication, MySQL binlog)
- **PITR** — base backup + archived WAL = kisi bhi second par restore

## Change Data Capture (CDC)

Us hi WAL/binlog/oplog ko **read** karke DB ke har insert/update/delete ko ek event stream banao — **application code ko touch kiye bina**.

\`\`\`flow
Postgres WAL / MySQL binlog / Mongo oplog
-> Debezium (or built-in connector)
-> Kafka topic (one message per row change)
-> consumers: search index, cache invalidation, data warehouse, other services
\`\`\`

- **Reliable** — dual-write problem nahi (Ch: Event-Driven); DB commit hi source hai
- **Decoupled** — DB ko pata bhi nahi kaun consume kar raha
- Use: DB -> Elasticsearch sync, cache invalidation, microservices ko "data changed" batana, real-time ETL, audit log

> "DB ki har change ko reliably kai jagah propagate karo" -> CDC. "DB crash ke baad consistent kaise?" -> WAL replay.
`
      },
      {
        "id": "oltp-vs-olap",
        "title": "OLTP vs OLAP, Columnar Storage & Warehouses",
        "content": `> Ek hi DB transactions **aur** heavy analytics dono achhe se nahi karta. Do alag worlds.

## OLTP — Online Transaction Processing

Tumhari app ka main DB. Bahut si chhoti reads/writes, ek-ek row (\`get user 123\`, \`insert order\`). Row-oriented storage (ek row ke saare columns saath). Postgres, MySQL, Mongo, DynamoDB.

## OLAP — Online Analytical Processing

Analytics/reporting/BI. Kam queries, but har query **millions of rows** scan karke aggregate karti hai (\`last quarter har region ka revenue\`). **Columnar** storage: ek column ke saare values saath -> query sirf zaroori columns padhe, aur same-type data compress bahut achha hota hai. Snowflake, BigQuery, Redshift, ClickHouse, DuckDB.

\`\`\`flow
Row store:   [id,name,region,amount][id,name,region,amount]...  -> full scan for SUM(amount)
Column store: [amount,amount,amount...]  -> read only that column, compressed
\`\`\`

| | OLTP | OLAP |
| --- | --- | --- |
| Query | point / small range | scan + aggregate huge |
| Rows touched | few | millions+ |
| Storage | row-oriented | column-oriented |
| Writes | constant, small | bulk load / append |
| Example | Postgres | BigQuery, ClickHouse |

## Getting OLTP data into OLAP

- **ETL** — Extract -> Transform -> Load (transform before loading; older)
- **ELT** — Extract -> Load raw -> Transform in the warehouse (modern; warehouse is cheap+powerful)
- **Data lake** — raw files (Parquet) in object storage; **lakehouse** = lake + warehouse features (Delta, Iceberg)
- Pipeline: OLTP -> **CDC / batch export** -> lake/warehouse -> BI dashboards
- **Time-series DBs** (InfluxDB, TimescaleDB, Prometheus) — metrics/events; specialized compression + downsampling

> Interview: "reporting/analytics query is slowing the app DB" -> don't index harder; **offload to a warehouse** via CDC/ETL. App DB stays OLTP.
`
      },
      {
        "id": "storage-analytics-recap",
        "title": "Quick Recap",
        "content": `**LSM vs B-Tree** — B-tree: in-place, random writes, excellent reads (OLTP, Postgres/MySQL). LSM: append-only memtable -> immutable SSTables + compaction, excellent writes, reads helped by Bloom filters (Cassandra, RocksDB, time-series). Write-heavy -> LSM; transactional/read-heavy -> B-tree.

**WAL** — append change to a durable log BEFORE touching data pages. Powers durability, crash recovery, replication (binlog/streaming), and PITR.

**CDC** — read that WAL/binlog/oplog to emit every row change as an event stream (Debezium -> Kafka), without app changes. Sync to search/cache/warehouse/other services; avoids dual-write.

**OLTP vs OLAP** — OLTP = many tiny row ops (app DB, row store). OLAP = few queries scanning millions of rows (columnar store, warehouse). Move data OLTP -> OLAP via ETL/ELT/CDC; don't run analytics on the app DB.

One line each:

- **B-tree** -> read-optimized, in-place; **LSM** -> write-optimized, append + compact.
- **WAL** -> log-first for durability, recovery, replication.
- **CDC** -> turn DB changes into an event stream, reliably.
- **OLAP / columnar warehouse** -> offload big analytical scans off the app DB.
`
      }
    ]
  },
  {
    "id": "realtime-and-feeds",
    "title": "Real-Time Transports, Streaming & Newsfeeds",
    "topics": [
      {
        "id": "realtime-transports-at-scale",
        "title": "Real-Time Transports at Scale",
        "content": `> "Server se client ko push" ke options, aur unhe millions of connections tak scale karna.

## Options

| Transport | How | Use |
| --- | --- | --- |
| **Short polling** | client har X sec GET | simple, wasteful, laggy |
| **Long polling** | server request ko hold karta hai jab tak data na ho | okay fallback, connection churn |
| **SSE** | ek long-lived HTTP stream, server -> client only | notifications, feeds, **LLM token streaming**, live scores |
| **WebSocket** | full-duplex TCP upgrade | chat, multiplayer, collaborative editing, trading |
| **WebRTC** | peer-to-peer | video/voice calls, screen share |

Default: SSE agar sirf server->client chahiye (simpler, HTTP/2 friendly, auto-reconnect). WebSocket jab client bhi frequently bhejta hai.

## Scaling stateful connections

Problem: 1M WebSocket connections = persistent memory + file descriptors. Ek server ~50-100k handle karta hai -> kai gateway servers chahiye.

\`\`\`flow
Clients -> LB (sticky / connection-aware) -> WS Gateway 1..N
User on Gateway 3; message created on Gateway 9
-> publish to Redis / Kafka -> all gateways -> gateway 3 delivers to that socket
\`\`\`

- **Connection registry** — "user U kaunse gateway par hai" (Redis)
- **Pub/sub backplane** — gateways ke beech message route (Redis Pub/Sub, Kafka, NATS)
- **Backpressure** — slow client -> buffer cap -> drop / disconnect
- **Reconnect + catch-up** — client "last message id" bhejta hai -> missed messages replay (warna reconnect = data loss dikhta hai)
- **Auth** — handshake par token verify, periodically re-check, expiry par disconnect
- **Presence** — heartbeat/TTL keys; "online" = key exists

Managed options: Ably, Pusher, AWS API Gateway WebSockets, Supabase Realtime — connection scaling offload.
`
      },
      {
        "id": "stream-processing",
        "title": "Stream Processing & Windowing",
        "content": `> Continuous data (clicks, events, IoT, logs) ko **arrival ke saath** process karna — batch (ghante baad) ke bajaye.

## Batch vs Stream

- **Batch** — bounded data, periodically (nightly ETL). High latency, simple, easy reprocess.
- **Stream** — unbounded data, continuously (real-time dashboards, fraud detection, alerting). Low latency, harder.
- **Lambda architecture** — batch layer (accurate, slow) + speed layer (fast, approximate) + serving layer merges. **Kappa** — sirf stream, reprocess by replaying the log.

## Tools

Kafka Streams, Apache Flink, Spark Structured Streaming, Kinesis Data Analytics, Materialize.

## Windowing (the core concept)

Unbounded stream par aggregate karne ke liye time ko chunks mein baanto:

- **Tumbling** — fixed, non-overlapping (har 1 min ka count)
- **Sliding** — fixed size, overlapping (last 5 min, updated every 1 min)
- **Session** — activity ke gaps se define (user session = events until 30 min idle)

## Time & correctness

- **Event time vs processing time** — event 10:00:00 par hua but 10:00:45 par pahuncha (mobile offline tha). Correct analytics event time use karti hai.
- **Watermarks** — "ab 10:05 se pehle ke saare events aa gaye maan lo" -> window close karo. Late events -> drop ya side-output.
- **Exactly-once in streams** — checkpointing + idempotent sinks (Flink, Kafka transactions)

## Where it shows up

Real-time analytics, "trending now", fraud/anomaly detection, live leaderboards, monitoring/alerting, ETL into warehouse, enriching events.

> Interview: "design a real-time analytics / ad-click aggregator" -> ingest to Kafka -> stream processor with tumbling windows on event time -> write rollups to a fast store -> dashboard. Raw events also land in the warehouse.
`
      },
      {
        "id": "newsfeed-fanout",
        "title": "Newsfeed / Timeline: Fan-out Patterns",
        "content": `> "Design Twitter/Instagram feed" — the most common system design interview. Core question: **feed kab banaye — write par ya read par?**

## Fan-out on write (push)

User post karta hai -> uske saare followers ki precomputed feed lists mein wo post-id **turant** push kar do.

\`\`\`flow
Alice posts -> for each follower -> LPUSH feed:follower_id post_id
Follower opens app -> read own feed list (fast, O(1))
\`\`\`

- **Read: super fast** (feed ready hai)
- **Write: expensive** — Alice ke 10M followers -> 10M list writes per tweet
- **Celebrity problem** — a user with 50M followers ek tweet = 50M writes, huge spike

## Fan-out on read (pull)

Feed store nahi karte. User feed maangta hai -> uske followees ki recent posts **abhi** fetch + merge + sort karo.

\`\`\`flow
Bob opens app -> get Bob's followees -> fetch recent posts of each -> merge, rank -> return
\`\`\`

- **Write: cheap** (just store the post once)
- **Read: expensive** — har feed load par N followees ke queries + merge

## Hybrid (what real systems do)

- **Normal users:** fan-out on write (push to followers' feeds)
- **Celebrities:** fan-out on read (unke posts push mat karo; feed load par unhe live merge karo)
- Cache the assembled feed; paginate; precompute for active users only (inactive users ke liye feed banana waste)

## Other pieces

- **Ranking** — chronological vs ML-ranked (engagement signals)
- **Feed store** — Redis lists / a wide-column store; store post-ids not full posts (hydrate on read)
- **Fanout workers** — async via queue; posting returns immediately
- **Dedup, "already seen", pagination cursors, real-time updates (WebSocket/SSE for "N new tweets")**

> Say the magic words: "hybrid fan-out — push for regular users, pull for celebrities, cache assembled feeds, fan-out via a queue."
`
      },
      {
        "id": "realtime-feeds-recap",
        "title": "Quick Recap",
        "content": `**Real-time transports** — polling (simple, wasteful) < long-polling < **SSE** (server->client stream: notifications, feeds, LLM tokens) < **WebSocket** (full-duplex: chat, collab, games) < WebRTC (p2p media). Scale stateful connections with many WS gateways + a connection registry + a pub/sub backplane (Redis/Kafka) + reconnect-with-catch-up.

**Stream processing** — process unbounded event streams as they arrive (Flink, Kafka Streams). **Windows**: tumbling / sliding / session. Use **event time** + **watermarks** for correctness with late data. Lambda (batch+speed) vs Kappa (stream + replay).

**Newsfeed fan-out** — fan-out on **write** (push to followers' feeds; fast reads, expensive writes, celebrity problem) vs fan-out on **read** (merge followees' posts at read time; cheap writes, expensive reads). Real answer = **hybrid**: push for normal users, pull for celebrities, cache assembled feeds, fan-out via queue.

One line each:

- **SSE vs WebSocket** -> one-way stream vs two-way; pick the simpler that fits.
- **Windowing** -> chop an infinite stream into time buckets to aggregate.
- **Event time + watermark** -> correct aggregates despite late/out-of-order events.
- **Hybrid fan-out** -> push for the many, pull for the famous.
`
      }
    ]
  },
  {
    "id": "geospatial-collaboration",
    "title": "Geospatial Indexing & Collaborative Systems",
    "topics": [
      {
        "id": "geospatial-indexing",
        "title": "Geospatial Indexing — Find Nearby",
        "content": `> "Design Uber / Yelp / 'restaurants near me'" — core problem: lat/long par efficient **proximity search**. \`WHERE distance(...) < 5km\` = full scan (can't index a formula).

## The idea: turn 2D space into 1D keys

- **Geohash** — recursively grid ko 4 (ya 32) mein baanto; har cell ko ek short string (\`tdr1y\`). Longer string = smaller/precise cell. **Nearby points share a prefix** -> ek prefix range query = ek area. Redis \`GEOADD/GEOSEARCH\` uses this.
- **Quadtree** — tree jahan har node 4 quadrants mein split hota hai jab usme bahut points ho jaayein. Dense areas (downtown) deep, sparse areas shallow. In-memory, dynamic.
- **S2 (Google)** — sphere ko cells mein map karta hai (Earth curvature handle), hierarchical cell ids. Google Maps, CockroachDB.
- **H3 (Uber)** — **hexagonal** grid (neighbors equidistant — hex ke saare 6 padosi same distance, square ke nahi). Uber's actual choice.

\`\`\`flow
Driver location update -> compute cell id (geohash/H3) -> store in that cell's set (Redis)
Rider requests -> compute rider's cell + 8 neighbor cells -> fetch drivers in those -> filter exact distance -> sort
\`\`\`

## Design "find nearby drivers"

- Drivers push location every few sec -> update their cell membership (Redis GEO / a cell->drivers map)
- Query: rider's cell + neighboring cells (edge par hone ki wajah se), fetch candidates, exact-distance filter, rank
- High write volume (every driver, every few sec) -> in-memory store, TTL on stale locations, maybe shard by region
- Matching, ETA (routing service), surge (demand/supply per cell) built on top

> Keywords: geohash / quadtree / S2 / H3, "convert 2D to 1D so it's indexable", "query the cell + its neighbors".
`
      },
      {
        "id": "collaborative-editing",
        "title": "Collaborative Editing — OT vs CRDT",
        "content": `> "Design Google Docs / Figma / a collaborative whiteboard" — multiple users edit the **same document simultaneously**, offline edits sync later, everyone converges to the same state.

## The problem

\`\`\`flow
Doc: "cat"
User A inserts "s" at pos 3 -> "cats"
User B (same moment) deletes pos 0 -> "at"
Naively applied in different orders on each client -> different final docs (diverged!)
\`\`\`

## Operational Transformation (OT)

Operations (insert/delete at position) ko servers/clients ke beech bhejte hain, aur har op ko concurrent ops ke against **transform** karte hain (positions adjust) taaki har jagah same final state aaye.

- Google Docs uses OT
- Correct but **complex** — transformation functions likhna aur test karna hard, usually a central server needed to order ops

## CRDT — Conflict-free Replicated Data Type

Data structures jo aise design kiye gaye hain ki concurrent updates **kisi bhi order** mein merge karke same result dein — **no central coordinator, no transform**.

- Text CRDTs (RGA, Yjs, Automerge) — har character ko ek unique, immutable id; insert = "id X ke baad add"; delete = tombstone. Merge = union.
- **Automatically converges**, great for offline-first + P2P
- Cost: metadata overhead (har char ka id), tombstones grow (need compaction)
- Figma, Linear, Yjs-based editors, Apple Notes use CRDTs

## Other pieces

- **Presence / cursors** — WebSocket, ephemeral (Ch: real-time transports)
- **Persistence** — periodic snapshots + op log; load = snapshot + replay
- **Awareness** — who's viewing, selections

| | OT | CRDT |
| --- | --- | --- |
| Coordinator | usually central server | not required |
| Complexity | transform logic hard | data-structure design hard, simple merge |
| Offline / P2P | weaker | strong |
| Overhead | low | per-element metadata + tombstones |
`
      },
      {
        "id": "geospatial-collaboration-recap",
        "title": "Quick Recap",
        "content": `**Geospatial indexing** — can't index \`distance(...)\`. Convert 2D coordinates to 1D keys so nearby points cluster: **geohash** (prefix = area), **quadtree** (adaptive to density), **S2** (sphere-aware, Google), **H3** (hexagons, Uber). "Find nearby" = compute the query cell + its neighbors, fetch candidates, exact-distance filter, rank. High-frequency location writes -> in-memory + TTL + regional sharding.

**Collaborative editing** — many users edit one doc concurrently, must converge. **OT** (Google Docs): send ops, transform against concurrent ops; correct but complex, needs a central orderer. **CRDT** (Figma, Yjs): data types that merge in any order with no coordinator; great offline/P2P; cost is per-element metadata + tombstones. Presence/cursors over WebSocket; persist via snapshot + op log.

One line each:

- **Geohash / S2 / H3** -> map the globe to indexable cell ids; query cell + neighbors.
- **OT** -> transform concurrent edit operations to keep everyone in sync.
- **CRDT** -> data structures that merge conflict-free, no central server.
`
      }
    ]
  },
  {
    "id": "the-interview",
    "title": "The System Design Interview (FAANG bar)",
    "topics": [
      {
        "id": "interview-framework",
        "title": "The 6-Step Framework",
        "content": `> A 45-60 min interview. Interviewers score you on **structure**, not on knowing every buzzword. Drive the conversation; don't wait to be asked.

## Step 1 — Requirements (5-8 min)

- **Functional** — 3-5 core features only. Push back on scope: "for v1, let's focus on X, Y, Z. Skip payments/search for now?" Get agreement.
- **Non-functional** — which matters most here? latency, availability, consistency, durability, scale, cost. (Payment: consistency. Feed: availability. Chat: latency.)
- **Scale** — DAU, read/write ratio, data size, growth. Ask; if they defer, state your assumption.

## Step 2 — Estimation (3-5 min)

DAU -> QPS (peak = 2-5x avg), storage/day and /year, bandwidth, cache size, number of servers. Round aggressively. This sizes the design (do we need sharding? a CDN? a queue?).

## Step 3 — API + Data Model (5-8 min)

- Key endpoints: method, path, params, response. REST/gRPC.
- Core entities, relationships, and **the access patterns** — then pick SQL/NoSQL and the indexes/keys from those patterns.

## Step 4 — High-Level Design (10-12 min)

Draw the boxes: clients -> LB / gateway -> services -> caches -> DB(s) -> queue -> workers. Data flow for the **main write** and the **main read**. Keep it simple first; you'll add depth next.

## Step 5 — Deep Dive (10-15 min)

Interviewer picks (or you offer) 1-2 areas: the hard part from Step 1. Go deep: sharding key, cache strategy + invalidation, fan-out approach, consistency mechanism, hot-key/celebrity handling, the specific data structure.

## Step 6 — Bottlenecks & Wrap (5 min)

Single points of failure, scaling the next 10x, what breaks first, monitoring/alerts, cost. "Given more time I'd also cover ___." Trade-offs, out loud.

## Meta

Think out loud. State assumptions. Give alternatives + why you chose one. It's a conversation — engage with hints (they're steering you to the interesting part).
`
      },
      {
        "id": "numbers-to-know",
        "title": "Numbers & Estimation Every Engineer Should Know",
        "content": `> Interviewers expect you to sanity-check designs with rough math. Memorize the orders of magnitude, not exact values.

## Latency numbers (orders of magnitude)

| Operation | ~Time |
| --- | --- |
| L1 cache reference | ~1 ns |
| Branch mispredict | ~3 ns |
| L2 cache reference | ~4 ns |
| Mutex lock/unlock | ~17 ns |
| Main memory (RAM) reference | ~100 ns |
| Compress 1 KB (Zstd) | ~500 ns |
| Read 1 MB sequentially from RAM | ~3 µs |
| SSD random read | ~16 µs |
| Read 1 MB sequentially from SSD | ~50 µs |
| Round trip within same datacenter | ~500 µs |
| Read 1 MB sequentially from disk (HDD) | ~1-2 ms |
| Disk seek (HDD) | ~3-10 ms |
| Round trip CA <-> Netherlands | ~150 ms |

Takeaways: **RAM ~100,000x faster than disk seek.** **Sequential >> random.** **Cross-region round trips dominate** — batch/parallelize calls, cache near the user.

## Capacity math

- 1 day ≈ 86,400 s ≈ **~10^5 s**. So "X per day" ÷ 10^5 ≈ avg per second.
- Peak QPS ≈ avg × (2 to 5). Spiky (flash sale, viral) × 10+.
- 1 million writes/day ≈ ~12 writes/sec avg. 1 billion/day ≈ ~11,600/sec.
- Char ≈ 1 byte (ASCII), ≈ 2 (UTF-16). A tweet ≈ 300 bytes. A typical web request/response ≈ 1-100 KB.
- 1 KB × 1M = 1 GB. 1 MB × 1M = 1 TB.
- A modern server: ~10-50k simple QPS, ~50-100k concurrent connections, 64-256 GB RAM.

## Availability -> downtime/year

| Nines | Downtime/year |
| --- | --- |
| 99% | ~3.65 days |
| 99.9% | ~8.8 hours |
| 99.99% | ~53 minutes |
| 99.999% | ~5 minutes |

Each nine ≈ more redundancy, failover automation, and cost.

## Quick worked example

"Design a URL shortener, 100M new links/month."
100M/month ÷ (30 × 10^5 s) ≈ **~40 writes/sec** avg, ~150 peak. Reads maybe 10:1 -> ~400-1500 reads/sec.
Storage: 100M × ~500 bytes/row ≈ 50 GB/month, 600 GB/year -> one DB is fine for years; cache hot links in Redis; reads dominate -> replicas + CDN for redirects.
`
      },
      {
        "id": "canonical-problems",
        "title": "Canonical Problems — Cheat Sheet",
        "content": `> The ~20 designs interviewers pull from. For each: the hard part + the technique. (Details are in the chapters above.)

| Problem | Hard part | Key techniques |
| --- | --- | --- |
| URL shortener | id generation, read scale | base62 of counter, cache, CDN redirects, analytics async |
| Twitter / news feed | feed assembly at scale | hybrid fan-out (push normal / pull celebrity), feed cache, ranking |
| Chat (WhatsApp) | delivery + ordering + scale | WS gateways + pub/sub backplane, per-conversation sequence, since-cursor, receipts |
| Notification system | fan-out + per-channel retry + dedup | event -> queue -> per-channel workers, prefs, rate limit, DLQ, idempotency |
| Rate limiter | distributed accuracy | token bucket in Redis (Lua), sliding window, per key |
| Nearby / Uber | geo proximity + high write | geohash/H3 cells, query cell+neighbors, in-memory + TTL, regional shards |
| YouTube / Netflix | upload, transcode, stream | chunked upload -> queue -> transcode farm -> multiple bitrates -> CDN, HLS/DASH adaptive |
| Google Docs | concurrent editing | OT or CRDT, WebSocket presence, snapshot + op log |
| Typeahead / autocomplete | prefix search + ranking | trie / edge-ngram index, top-K per prefix cached, debounce |
| Dropbox / file sync | sync + conflicts + big files | chunking + content hash (dedup), metadata service, presigned S3, versioning |
| Web crawler | scale + politeness + dedup | frontier queue, per-domain rate limit, Bloom filter for seen URLs, priority |
| Distributed cache | placement + eviction + HA | consistent hashing + vnodes, LRU, replication, client-side routing |
| Key-value store (Dynamo) | availability + partitions | consistent hashing, quorum R+W>N, vector clocks, gossip, Merkle repair, LSM |
| Ad click aggregator / analytics | high volume + real-time counts | Kafka -> stream processor, tumbling windows on event time, HLL/Count-Min, rollups + warehouse |
| Leaderboard | ranked reads at scale | Redis sorted set, sharded by segment, periodic merge |
| Payment system | never double-charge, reconcilable | idempotency keys, ledger table, webhook as truth, outbox, reconciliation job |
| Job scheduler | exactly-once trigger at scale | leader/lock for trigger, scheduler -> queue -> workers, idempotent jobs, DLQ |
| Distributed ID generation | unique, ~ordered, no coordination | Snowflake (timestamp + machine id + sequence), or DB ticket server, or UUIDv7 |
| Search (Google-ish) | index + rank + scale | inverted index, sharded by doc, BM25 + signals, caching, crawl pipeline |

> Pattern: almost every answer = LB/gateway + stateless services + cache + the right datastore + a queue for async + sharding/consistent-hashing + idempotency + observability. Learn the **skeleton**, specialize per problem.
`
      },
      {
        "id": "senior-signals",
        "title": "Senior Signals & Red Flags",
        "content": `> What separates "mid" from "senior/staff" in the same 45 minutes.

## Green flags (do these)

- **Clarify before designing** — nail scope + the dominant non-functional requirement
- **Numbers drive decisions** — "40 writes/sec, so one DB is fine; no sharding yet"
- **Start simple, evolve** — a monolith + one DB, then add cache/queue/shard *when the numbers demand it*
- **Name trade-offs explicitly** — "fan-out on write: fast reads, but the celebrity problem — so hybrid"
- **Talk about failure** — what happens when this service/DB/queue is down or slow; retries, timeouts, circuit breakers, graceful degradation
- **Consistency precision** — say *which* data needs strong consistency and which is fine eventual
- **Data model + access patterns first**, then pick the store
- **Operability** — monitoring, alerts on symptoms, rollout/rollback, cost
- **Know the estimates** — powers of 2, latency numbers, QPS math
- **Drive, but listen** — engage with hints; they point at the interesting deep-dive

## Red flags (avoid these)

- Jumping to microservices / Kafka / Kubernetes before requirements
- "We'll use MongoDB because it scales" with no reasoning
- No estimation; can't say if a single DB suffices
- Ignoring failure modes and the single points of failure
- Hand-waving "add a cache" without invalidation, or "shard it" without a shard key
- One giant diagram, no data flow, no depth on the hard part
- Not managing time — stuck on the API for 20 minutes
- Silent thinking; not reacting to interviewer steering
- Claiming "exactly-once" without qualification; assuming clocks are synchronized
- Over-engineering: multi-region + service mesh for a 10k-user app

## The one-liner

> Structured thinking + numbers + explicit trade-offs + failure handling, evolving a simple design to meet stated scale — that's the bar.
`
      }
    ]
  },
  {
    "id": "multiregion-deploy-security",
    "title": "Multi-Region, Deployment & Security at Scale",
    "topics": [
      {
        "id": "multi-region",
        "title": "Multi-Region & Geo-Distribution",
        "content": `> One region = one big failure domain (and far from half your users). Going multi-region buys availability + latency, and costs a lot of complexity (data is the hard part).

## Why

- **Availability** — region outage doesn't take you down
- **Latency** — serve users from a nearby region
- **Data residency** — EU user data stays in the EU (GDPR), etc.

## Patterns

- **Active-Passive (failover)** — one region serves; a standby replicates and takes over on disaster. Simpler. RTO = failover time; RPO = replication lag.
- **Active-Active** — all regions serve traffic. Best latency + availability. Hard part: **writes** — same row edited in two regions.

## Routing users to a region

- **GeoDNS / latency-based routing** (Route 53, Cloudflare) — resolve to the nearest healthy region
- **Anycast** — same IP announced from many locations; network routes to nearest
- Health checks -> pull a region out on failure

## The data problem (active-active writes)

- **Single-writer region per record** (partition users/tenants by home region; writes go home, reads local) — avoids conflicts, adds cross-region latency for away users
- **Multi-primary with conflict resolution** — LWW, CRDTs, or app-level merge (Ch: quorums/vector clocks)
- **Globally-distributed DBs** — Spanner (TrueTime), CockroachDB, DynamoDB Global Tables, Yugabyte — handle this for you, at a cost
- Async replication between regions -> **eventual consistency across regions**; keep strongly-consistent operations within one region

## Also

Cross-region replication lag & cost (egress $$), config/secret propagation, and testing failover regularly (a standby you never test doesn't work).

> Interview: don't reach for multi-region unless availability/latency/residency requirements force it. If they do: "active-active, users pinned to a home region for writes, eventual cross-region replication, CRDT/LWW for the rare conflict."
`
      },
      {
        "id": "deployment-strategies",
        "title": "Deployment Strategies & Safe Rollouts",
        "content": `> Shipping to production without an outage. This shows operational maturity.

## Strategies

- **Rolling** — replace instances a few at a time. No extra capacity, slowish, mixed versions briefly.
- **Blue-Green** — full parallel environment (green) with the new version; flip the LB from blue to green instantly; roll back = flip back. Doubles infra during deploy.
- **Canary** — send 1% -> 5% -> 25% -> 100% of traffic to the new version, watching metrics (error rate, latency, business KPIs). Auto-rollback on regression. Best risk/cost balance; the service mesh or LB does the split.
- **Shadow / mirror** — send a copy of real traffic to the new version, discard responses; compare. Great for risky changes, no user impact.

## Enablers

- **Feature flags** — deploy code dark, turn features on/off at runtime (per user %, per tenant), decouple deploy from release, instant kill switch
- **Backward-compatible changes** — new code must work with old data/messages and vice versa (esp. DB migrations: expand -> migrate -> contract, never rename-in-place)
- **DB migrations** — additive first, backfill, switch reads, drop old column later — each step deployable independently
- **Health checks** — readiness (ready for traffic) vs liveness (restart me); drain connections on shutdown
- **Automated rollback** — pipeline reverts on failed health/canary metrics
- **Observability tie-in** — every deploy tagged with a release id; error tracking groups by release

> "How do you ship a risky change?" -> feature flag + canary + backward-compatible migration + automated rollback + a release-tagged dashboard.
`
      },
      {
        "id": "security-at-scale",
        "title": "Security in System Design",
        "content": `> Security questions inside a design: auth at scale, protecting the edge, data protection, and blast-radius limits.

## AuthN / AuthZ at scale

- **Sessions** (server-side, cookie) vs **JWT** (stateless, no lookup, but revocation is hard -> short access + rotating refresh, Ch: Auth)
- **OAuth2 / OIDC** for third-party + SSO; **API keys** for service/partner; **mTLS** for service-to-service
- Central identity service; gateway verifies tokens, passes a trusted identity inward; **authorize on every request** server-side (RBAC/ABAC, ownership, tenant scoping)

## Edge protection

- **TLS everywhere** (HSTS), terminate at the edge, re-encrypt internally
- **DDoS** — CDN/anycast absorb volumetric; rate limiting + WAF for L7; SYN cookies; autoscale + load shedding; challenge (CAPTCHA) suspicious traffic
- **WAF** — block injection, common exploits, bad bots
- **Rate limiting / quotas** per user/IP/key (Ch: rate limiting)

## Data protection

- **Encryption in transit** (TLS) + **at rest** (disk/DB/S3 encryption, KMS-managed keys, rotation)
- **Secrets** — a secrets manager (Vault, AWS Secrets Manager), never in code/env-in-repo, rotate
- **PII** — minimize collection, encrypt sensitive fields, tokenize (payments -> never store raw card, use a vault/provider token), access logging
- **Compliance** — GDPR/DPDP: data export + **deletion** path (including backups policy, search index, logs, caches), data residency, consent, retention limits
- **Audit log** — who did what, immutable, for sensitive actions

## Blast radius

- Least privilege (IAM roles, DB users per service), network segmentation (private subnets, security groups), no service implicitly trusts another
- Input validation + output encoding everywhere; parameterized queries; SSRF guards on "fetch a URL" features
- Dependency scanning, image scanning, SBOM

> Design answer: "TLS + WAF + rate limiting at the edge; central auth, authorize every request, tenant isolation; encrypt at rest + in transit, secrets in a manager, PII minimized with a deletion path; least-privilege IAM and network segmentation to bound blast radius."
`
      },
      {
        "id": "multiregion-deploy-security-recap",
        "title": "Quick Recap",
        "content": `**Multi-region** — buys availability + latency + data residency; the hard part is writes. Active-passive (simple failover) vs active-active (best, needs conflict handling). Route via GeoDNS/latency-based/anycast. Pin records to a home write-region, replicate async (eventual across regions), use CRDT/LWW or a global DB (Spanner/Cockroach) for conflicts. Don't do it unless requirements force it.

**Deployment** — rolling / blue-green (instant flip, 2x infra) / **canary** (gradual % with metric-gated auto-rollback) / shadow (mirror traffic). Enablers: feature flags (deploy != release, kill switch), backward-compatible changes, expand-migrate-contract DB migrations, readiness/liveness checks, release-tagged observability.

**Security in design** — AuthN (sessions vs JWT + refresh, OAuth/OIDC, mTLS), authorize every request server-side + tenant isolation. Edge: TLS, WAF, DDoS absorption via CDN/anycast + rate limiting + load shedding. Data: encrypt in transit + at rest, secrets manager, PII minimization + tokenization + GDPR deletion path, audit logs. Bound blast radius: least privilege, network segmentation, no implicit trust.

One line each:

- **Active-active multi-region** -> serve everywhere; pin writes to a home region; eventual cross-region.
- **Canary + feature flags** -> ship risky changes gradually with an instant rollback.
- **Security** -> authorize every request, encrypt everything, minimize PII, limit blast radius.
`
      }
    ]
  },
  {
    "id": "networking-deep-dive",
    "title": "Networking Deep Dive",
    "topics": [
      {
        "id": "transport-tcp-udp",
        "title": "TCP vs UDP & Connection Basics",
        "content": `> Har network call ki neeव transport protocol par tiki hai. Kab reliable stream chahiye, kab speed.

## TCP — reliable, ordered stream

3-way handshake (SYN -> SYN-ACK -> ACK) se connection banta hai, phir bytes ka ordered stream. Kho gaya packet -> retransmit. Congestion control (slow start) network ko flood nahi karta.

- **Guarantees:** delivery, order, no duplicates
- **Cost:** handshake latency (1 RTT), head-of-line blocking (ek lost packet baaki ko rok deta hai), per-connection state
- Use: HTTP, DB connections, anything where correctness > a few ms

## UDP — fast, fire-and-forget

No handshake, no retransmit, no ordering. Bas datagrams bhejo. App khud jo chahiye wo handle kare.

- **Cost:** packets kho/reorder ho sakte hain
- Use: DNS, video/voice calls (ek dropped frame chalega, delay nahi), gaming, QUIC (jo reliability UDP ke upar khud build karta hai)

## Connection reuse

Handshake (aur TLS) mehenga hai. Isliye:

- **Keep-alive** — ek TCP connection par kai HTTP requests
- **Connection pooling** — client (browser, HTTP client, DB driver) reuse karता hai (Ch: Connection Pooling)
- **Load balancer** connection termination — client<->LB ek connection, LB<->backend alag pool

> Interview: "why is a cross-region call slow?" -> RTT × (TCP handshake + TLS handshake + request). Batch, parallelize, reuse connections, move compute/cache near the user.
`
      },
      {
        "id": "http-versions",
        "title": "HTTP/1.1 vs HTTP/2 vs HTTP/3 (QUIC)",
        "content": `> HTTP versions latency ke liye hi evolve hue. Interviewer poochh sakta hai "kaunsa use karoge aur kyun".

## HTTP/1.1

Ek connection par ek request at a time (response aane tak agli nahi). Browsers 6 parallel connections kholte the. **Head-of-line blocking** at the request level. Text headers, har request par repeat.

Workarounds jo ab anti-patterns hain: domain sharding, sprite sheets, concatenating JS/CSS.

## HTTP/2

- **Multiplexing** — ek connection par kai concurrent streams (requests). No more 6-connection limit.
- **Header compression** (HPACK)
- **Server push** (mostly abandoned)
- Still over TCP -> ek TCP packet loss **saare** streams ko rok deta hai (TCP-level head-of-line blocking)

## HTTP/3 (over QUIC, over UDP)

- **QUIC** = reliability + congestion control + TLS 1.3, built on UDP, in user space
- **No TCP head-of-line blocking** — streams independent; ek stream ka lost packet baaki ko nahi rokta
- **0-RTT / 1-RTT handshake** — connection + encryption ek saath (TCP+TLS = 2-3 RTT)
- **Connection migration** — WiFi se mobile data switch karo, connection zinda (connection id, IP nahi)

| | HTTP/1.1 | HTTP/2 | HTTP/3 |
| --- | --- | --- | --- |
| Transport | TCP | TCP | QUIC/UDP |
| Concurrency | 1/conn (6 conns) | multiplexed | multiplexed |
| HoL blocking | request-level | TCP packet-level | none |
| Handshake | 2-3 RTT | 2-3 RTT | 0-1 RTT |

> Default in 2026: HTTP/2 or HTTP/3 at the edge (CDN handles it), HTTP/1.1 or gRPC internally. Mobile/high-loss networks benefit most from HTTP/3.
`
      },
      {
        "id": "grpc-protobuf",
        "title": "gRPC, Protobuf & REST vs RPC",
        "content": `> Internal service-to-service calls ke liye REST hamesha best nahi. gRPC common choice hai.

## Protobuf (Protocol Buffers)

Schema-first binary serialization. Ek \`.proto\` file mein message + service definitions; codegen se typed clients/servers (any language).

\`\`\`flow
message User { int64 id = 1; string name = 2; }
service UserService { rpc GetUser(GetUserRequest) returns (User); }
\`\`\`

- **Small + fast** — binary, field numbers not names, no whitespace (JSON se ~3-10x chhota, faster parse)
- **Strongly typed contract** — client/server can't drift
- **Backward compatible** if you only add fields with new numbers (never reuse/renumber)
- Cost: not human-readable, needs the schema + tooling

## gRPC

RPC framework over HTTP/2 using protobuf. 4 call types: unary, server-streaming, client-streaming, bidirectional streaming. Built-in deadlines, cancellation, retries, load balancing, interceptors (auth/metrics/tracing).

## REST vs gRPC — when

| | REST/JSON | gRPC |
| --- | --- | --- |
| Audience | public APIs, browsers, humans | internal microservices, mobile |
| Payload | JSON (readable, bigger) | protobuf (binary, small) |
| Contract | OpenAPI (optional) | .proto (enforced) |
| Streaming | SSE/WS bolt-on | first-class |
| Browser | native | needs grpc-web proxy |

> Common pattern: **REST/GraphQL at the edge** (public, browser-friendly) + **gRPC internally** (fast, typed, streaming). GraphQL when clients need flexible field selection / to avoid over-fetching.
`
      },
      {
        "id": "tls-dns",
        "title": "TLS Handshake & DNS",
        "content": `> Do cheezein har HTTPS request se pehle hoti hain — aur dono latency + failure points hain.

## DNS resolution

\`api.example.com\` -> IP. Recursive resolver -> root -> TLD (\`.com\`) -> authoritative NS -> record. Cached at every layer (browser, OS, resolver) with a **TTL**.

- **Record types:** A (IPv4), AAAA (IPv6), CNAME (alias), MX (mail), TXT
- **TTL trade-off:** low TTL = fast failover/changes, more DNS traffic; high TTL = fewer lookups, slow to change
- **DNS-based routing** — GeoDNS (nearest region), weighted (canary / gradual migration), failover (health-checked)
- First request to a new domain = a DNS round trip; then cached

## TLS handshake (TLS 1.3)

After TCP connect: client hello (+ key share) -> server hello (cert + key share) -> both derive keys -> encrypted. **1 RTT** in TLS 1.3 (was 2 in 1.2). **0-RTT resumption** for repeat connections (with replay caveats).

- **Cert** — proves server identity, signed by a CA; browser checks chain + expiry + hostname + revocation
- **SNI** — client says which hostname it wants (one IP hosts many sites)
- **mTLS** — client also presents a cert (service-to-service auth)
- **Termination** — usually at the LB/CDN (Ch: Reverse Proxy); re-encrypt or mTLS internally

## Latency picture for a fresh request

\`\`\`flow
DNS lookup (~20-120ms if uncached)
TCP handshake (1 RTT)
TLS handshake (1 RTT, TLS 1.3)
HTTP request + response (1 RTT + processing)
\`\`\`

That's why: cache DNS, reuse connections (keep-alive/pool), use a CDN (terminates close to the user), and consider HTTP/3 (folds handshakes together).
`
      },
      {
        "id": "networking-recap",
        "title": "Quick Recap",
        "content": `**TCP vs UDP** — TCP = reliable ordered stream (HTTP, DBs), handshake cost + head-of-line blocking. UDP = fast fire-and-forget (DNS, media, QUIC). Reuse connections (keep-alive, pooling) — handshakes are expensive.

**HTTP versions** — 1.1 = one request at a time per connection. 2 = multiplexed streams over TCP (still TCP-level HoL blocking). 3 = QUIC over UDP: no HoL blocking, ~0-1 RTT handshake, connection migration. Edge = 2/3, internal = 1.1 or gRPC.

**gRPC / protobuf** — schema-first binary RPC over HTTP/2. Small, fast, typed contract, first-class streaming. Use internally; REST/GraphQL at the public edge.

**TLS + DNS** — every fresh HTTPS request = DNS lookup + TCP handshake + TLS handshake + request. TLS 1.3 = 1 RTT. Cache DNS (TTL trade-off), use DNS for geo/failover routing, terminate TLS at the CDN/LB.

One line each:

- **TCP** -> reliable stream; **UDP** -> fast, lossy.
- **HTTP/3** -> QUIC/UDP, no head-of-line blocking, faster handshake, survives network switch.
- **gRPC** -> typed binary RPC for internal services.
- **TLS 1.3** -> 1-RTT encrypted handshake; terminate at the edge.
`
      }
    ]
  },
  {
    "id": "ids-and-media",
    "title": "Distributed IDs & Media Pipelines",
    "topics": [
      {
        "id": "distributed-id-generation",
        "title": "Distributed ID Generation",
        "content": `> "Design a system that generates unique IDs across many servers" — or it comes up inside every other design (tweet id, order id, message id).

## Requirements

Unique (no collisions ever), roughly **time-ordered** (so they sort by creation, help DB index locality), high throughput, no single bottleneck, compact.

## Options

### Auto-increment (single DB)

Simple, ordered. But: single point of failure, can't scale writes, exposes volume ("id 4711 = 4711th user").

### UUID v4 (random)

No coordination, globally unique. But: 128-bit (big), **random -> terrible index locality** (every insert hits a random B-tree page). Not time-ordered.

### UUID v7 / ULID

Timestamp prefix + random suffix. Sortable by time, good index locality, still no coordination. **Great modern default** for most apps.

### Snowflake (Twitter) — 64-bit

\`\`\`flow
| 41 bits: timestamp (ms since epoch) | 10 bits: machine id | 12 bits: per-ms sequence |
\`\`\`

- 41 bits ms -> ~69 years; 10 bits -> 1024 nodes; 12 bits -> 4096 ids per node per ms
- Time-ordered, compact (fits a bigint), no coordination at request time
- Needs: unique machine id per node (config / ZooKeeper), NTP-synced clocks (clock going backwards = problem -> wait or refuse)
- Used by Twitter, Discord, Instagram (a variant)

### Ticket / range server

A service hands out blocks of ids (e.g. "you get 1000-1999"); each server uses its block locally, asks for more when low. Few coordination calls, ordered-ish.

## Choosing

| Need | Pick |
| --- | --- |
| Simple app, Postgres | UUID v7 / bigserial |
| Distributed, time-ordered, compact | Snowflake |
| No infra, globally unique | ULID / UUID v7 |
| Sequential + human-facing | ticket server / DB sequence |
`
      },
      {
        "id": "video-transcoding-pipeline",
        "title": "Video Upload & Transcoding Pipeline",
        "content": `> "Design YouTube's upload path." A raw 4K upload is useless to a phone on 3G — you need many versions.

## Upload

\`\`\`flow
Client -> request presigned URL -> upload directly to S3 (chunked / resumable, Ch: Object Storage)
S3 event -> "new upload" message on a queue
\`\`\`

Don't proxy GBs through your API. Validate (type, size, duration), maybe a quick virus/content scan.

## Transcoding (the heavy part)

A raw video -> split into segments (~2-10s each) -> a fleet of **transcoding workers** (GPU/CPU, autoscaled, spot instances) process segments **in parallel** -> each produces multiple **renditions** (240p, 480p, 720p, 1080p, 4K; different codecs H.264/H.265/AV1).

\`\`\`flow
Queue -> Transcode workers (parallel per segment × per rendition)
-> write outputs to S3
-> packager: create HLS/DASH manifests
-> mark video "ready" -> notify uploader
\`\`\`

- **Pipeline stages** as separate queue steps: probe -> transcode -> thumbnail -> audio normalize -> package -> QC. Each retryable, DLQ on failure.
- **Idempotent** per segment (retry-safe); track progress in a DB (\`video_jobs\`)
- Priority queue: paid/creator uploads first
- Also generate: thumbnails, preview sprites, captions (speech-to-text), content-ID / moderation checks

## Also

- Metadata service (title, owner, privacy, status) in an OLTP DB
- View counts -> Count-Min / approximate + async (Ch: probabilistic); don't increment a row per view
- Search index updated via CDC when a video goes public
`
      },
      {
        "id": "adaptive-streaming-delivery",
        "title": "Adaptive Bitrate Streaming & Delivery",
        "content": `> The playback path: get the right quality to each viewer, over a CDN, adjusting to their changing bandwidth.

## Adaptive Bitrate (ABR) — HLS / DASH

Video is stored as short **segments** (2-10s) at **multiple bitrates**, plus a **manifest** (playlist) listing them.

\`\`\`flow
manifest.m3u8:
  240p  -> seg1_240.ts, seg2_240.ts, ...
  720p  -> seg1_720.ts, seg2_720.ts, ...
  1080p -> ...
\`\`\`

The **player** measures download speed + buffer level and picks the next segment's bitrate — drops to 480p on a slow network, climbs back to 1080p when it recovers. Server just serves files; intelligence is client-side.

- **HLS** (Apple, \`.m3u8\` + \`.ts\`/CMAF) — universal
- **DASH** (\`.mpd\`) — codec-agnostic standard
- **Low-latency** variants (LL-HLS, LL-DASH) for near-live

## Delivery via CDN

Segments + manifests are static files -> **CDN** (Ch: CDN). Edge caches segments; origin (S3) only on miss. A popular video = ~100% cache hit at the edge -> origin barely touched.

- **Signed URLs / tokens** for paid content; geo-restrictions
- **Multi-CDN** for resilience + cost (route by performance/price)
- Prefetch the next 1-2 segments

## Live streaming (extra)

\`\`\`flow
Broadcaster -> RTMP/SRT ingest -> transcode to ABR renditions in real time
-> package to LL-HLS segments -> CDN -> viewers (few seconds latency)
\`\`\`
For sub-second (auctions, betting): WebRTC instead of HLS.
`
      },
      {
        "id": "ids-media-recap",
        "title": "Quick Recap",
        "content": `**Distributed IDs** — need unique + roughly time-ordered + no bottleneck. Auto-increment (SPOF, leaks volume), UUIDv4 (random -> bad index locality), **UUIDv7/ULID** (time-prefixed, great default), **Snowflake** 64-bit (timestamp + machine id + sequence — compact, ordered, distributed; needs machine ids + synced clocks), ticket/range server (blocks of ids).

**Video pipeline** — presigned chunked upload to S3 -> queue -> parallel transcode workers produce many renditions (240p..4K) per segment -> package HLS/DASH manifests -> mark ready. Pipeline = separate retryable queue stages (probe, transcode, thumbnail, caption, moderate, package).

**Adaptive streaming** — store segments at multiple bitrates + a manifest; the **player** picks bitrate from measured bandwidth + buffer. HLS/DASH. Serve segments (static files) via CDN — popular videos are ~all edge cache hits. Live = real-time transcode -> LL-HLS -> CDN; sub-second = WebRTC.

One line each:

- **Snowflake ID** -> timestamp + machine + sequence = sortable 64-bit id, no coordination.
- **Transcoding** -> one upload -> many parallel segment/rendition jobs on a queue.
- **ABR (HLS/DASH)** -> client switches quality per segment; CDN serves the files.
`
      }
    ]
  },
  {
    "id": "payments-deep-dive",
    "title": "Payments Deep Dive",
    "topics": [
      {
        "id": "double-entry-ledger",
        "title": "Double-Entry Ledger",
        "content": `> Money ko ek mutable \`balance\` column mein rakhna = bug ka nyota. Real payment systems ek **immutable, append-only ledger** rakhte hain — accounting ka 500-saal purana pattern.

## The rule

Har transaction **do (ya zyada) entries** likhta hai jinka sum **zero** hota hai: ek account se debit, doosre mein credit. Ledger append-only — entry kabhi update/delete nahi hoti; galti = ek reversing entry.

\`\`\`flow
Transfer Rs 100 (Alice -> Bob):
  entry 1:  account=Alice  amount=-100   txn=t1
  entry 2:  account=Bob    amount=+100   txn=t1
  sum(entries where txn=t1) == 0   (always)
\`\`\`

## Why

- **Balance = SUM(entries)** for an account — derived, always correct, auditable
- **Full history** — har rupaya kahan se aaya, kahan gaya
- **Immutable** -> tamper-evident, easy to audit/reconcile
- **Invariants** — total money in the system is conserved (sum of all entries == 0); alert if it ever isn't

## Practical

- Entries table: \`(id, account_id, amount, currency, txn_id, type, created_at)\`, indexes on \`account_id\` and \`txn_id\`
- Balance: either \`SUM\` on read (small), or a **materialized balance** updated in the **same transaction** as the entries (with the ledger as source of truth for reconciliation)
- Never store cross-currency in one entry; convert explicitly with its own entries
- Money in **minor units as integers** (paise/cents), never floats
- Idempotency key on the transfer (Ch: Idempotency) — retried transfer must not double-post
`
      },
      {
        "id": "payment-flow-idempotency",
        "title": "Payment Flow, PSPs & Idempotency",
        "content": `> "Design a checkout / payment system." The hard requirement: **never double-charge, never lose a successful payment, always be reconcilable.**

## Players

- **You** (merchant backend) · **PSP / gateway** (Stripe, Razorpay, Adyen) · **card networks / banks** · **customer**
- You almost never touch raw card data (PCI scope) — the PSP tokenizes it; you store a token.

## Flow (hosted / PaymentIntent style)

\`\`\`flow
1. Client -> your backend: "start checkout for order 42"
2. Backend: create Order (status=PENDING) + PaymentIntent at PSP (amount, currency, idempotency-key)
3. Backend -> client: client secret
4. Client -> PSP directly: card details + confirm (3D Secure / OTP challenge may happen)
5. PSP -> your WEBHOOK: payment_intent.succeeded (or .failed)   <-- source of truth
6. Webhook handler: verify signature -> idempotency check (event id) -> mark Order PAID -> fulfil
7. (Client also gets a result, but you DO NOT trust it to mark paid)
\`\`\`

## Why webhook, not client

Client can close the tab after paying, lose network, or be tampered with. The **PSP webhook** (server-to-server, signed) is the only reliable "it actually succeeded" (Ch: Webhooks).

## Idempotency everywhere

- **Idempotency-Key** on the create-charge call to the PSP -> a retried request returns the same charge, doesn't create a second
- **Event id** dedup on the webhook -> the same \`payment.succeeded\` delivered 3× fulfils once
- **Order state machine** — \`PENDING -> PAID -> FULFILLED\` / \`FAILED\` / \`REFUNDED\`; transitions guarded, idempotent

## Refunds, disputes, retries

- Refund = its own idempotent operation + ledger entries (reverse the money)
- Failed payment -> allow retry on the same order (new PaymentIntent), don't create a new order
- Chargeback/dispute webhooks -> mark order, adjust ledger, alert ops
`
      },
      {
        "id": "payment-reconciliation",
        "title": "Reconciliation & Consistency",
        "content": `> Your system and the PSP are two independent databases. They **will** drift (missed webhook, timeout, bug). Reconciliation finds and fixes the drift.

## The drift scenarios

- Webhook lost / your handler was down -> PSP says PAID, you say PENDING
- You marked PAID, then a later failure -> PSP says FAILED
- Partial refund applied at PSP but not recorded
- A charge succeeded but the response timed out and you never created the record

## Reconciliation job (runs continuously / hourly / daily)

\`\`\`flow
For a time window:
  fetch all transactions from PSP (their API / settlement report)
  fetch all transactions from your ledger
  match on payment_intent_id / charge_id
  -> in PSP not in you    -> ingest it (mark order, post ledger entries)
  -> in you not in PSP    -> investigate (stuck pending -> query PSP -> resolve or expire)
  -> amount / status mismatch -> flag for manual review + alert
\`\`\`

## Also

- **Settlement** — PSP pays you in batches (T+2), minus fees; reconcile the payout amount against expected (sum of charges − fees − refunds − chargebacks). Fees are their own ledger entries.
- **Outbox pattern** (Ch: Event-Driven) — write the order status + a "fulfilment needed" event in one DB transaction, so you never lose the follow-up
- **Consistency choice** — within your system, the payment write path is **strongly consistent** (single primary, transaction: ledger entries + order status together). Fulfilment can be async/eventual.
- **Metrics/alerts** — pending payments older than N minutes, ledger sum ≠ 0, reconciliation mismatch count, webhook processing lag

> The interview answer: "PSP webhook is the source of truth, everything idempotent (charge key + event id + order state machine), an append-only double-entry ledger, and a reconciliation job that continuously compares our ledger to the PSP and repairs drift."
`
      },
      {
        "id": "payments-recap",
        "title": "Quick Recap",
        "content": `**Double-entry ledger** — immutable, append-only; every transaction posts entries summing to zero (debit one account, credit another). Balance = SUM(entries), always auditable. Money as integer minor units. Corrections = reversing entries, never edits.

**Payment flow** — Order PENDING -> create PaymentIntent at PSP (with idempotency key) -> client pays PSP directly (3DS challenge) -> **PSP webhook** (signed, verified, event-id deduped) marks Order PAID -> fulfil. Never trust the client's result. Refunds/disputes are their own idempotent operations + ledger entries.

**Reconciliation** — your DB and the PSP drift (missed webhooks, timeouts). A job continuously compares your ledger to the PSP's transactions, ingests what you missed, investigates stuck pendings, flags mismatches. Reconcile settlement payouts (charges − fees − refunds). Outbox pattern so fulfilment events are never lost.

One line each:

- **Double-entry ledger** -> append-only, entries net to zero, balance is derived and auditable.
- **PSP webhook** -> the source of truth for "payment succeeded" (idempotent handler).
- **Reconciliation** -> continuously diff your ledger vs the PSP and repair drift.
`
      }
    ]
  },
  {
    "id": "ml-system-design",
    "title": "ML System Design",
    "topics": [
      {
        "id": "ml-system-components",
        "title": "ML System Components (Training vs Serving)",
        "content": `> At Google/Meta, "design the ranking/recommendation system" is common. You're not asked to invent models — you're asked to design the **system around** a model: data, features, training, serving, monitoring.

## The two loops

\`\`\`flow
OFFLINE (training):  raw data -> feature pipeline -> training set -> train model -> evaluate -> registry
ONLINE (serving):    request -> fetch features -> model inference -> post-process -> response -> log
\`\`\`

## Components

- **Data collection** — events, logs, labels (clicks, purchases, ratings, dwell time). Often via a stream (Kafka) + a warehouse (Ch: OLAP).
- **Feature pipeline** — transform raw data into features. Must produce the **same** feature values offline (training) and online (serving) — else "training/serving skew" silently kills accuracy.
- **Feature store** (next topic) — computed features, served fast online, materialized offline.
- **Training** — batch job (Spark/Ray/dedicated GPU cluster), scheduled or triggered by data drift. Versioned datasets + code + hyperparams for reproducibility.
- **Model registry** — versioned model artifacts + metadata (metrics, training data version).
- **Serving** — a service that loads a model and does inference (next-next topic).
- **Evaluation** — offline metrics (AUC, precision@k, NDCG) + **online A/B tests** (the real signal: did CTR / revenue / retention move?).
- **Monitoring** — latency, feature drift, prediction drift, model performance decay.

## The candidate-generation → ranking pattern

Most large recommenders are two stages:

\`\`\`flow
Millions of items
-> Candidate generation (cheap: retrieve ~hundreds — collaborative filtering, embeddings + ANN, rules)
-> Ranking (expensive model: score those hundreds precisely with many features)
-> Re-rank (business rules: diversity, freshness, don't repeat, sponsored)
-> top N
\`\`\`
`
      },
      {
        "id": "recommendation-ranking",
        "title": "Recommendation & Ranking Systems",
        "content": `> "Design YouTube recommendations / a news feed ranker / 'people you may know' / search ranking." All follow the candidate-generation → ranking → re-rank shape.

## Candidate generation (retrieval)

Goal: from millions of items, get ~hundreds that are plausibly relevant, **fast** (<10ms).

- **Collaborative filtering** — "users like you watched X" (matrix factorization / co-occurrence)
- **Content-based** — item embeddings; recommend items similar to what the user engaged with
- **Two-tower / embedding retrieval** — a model maps users and items into the same vector space; retrieve nearest item vectors to the user vector via **ANN** (approximate nearest neighbor: HNSW, FAISS, ScaNN, a vector DB)
- **Rules / heuristics** — trending, from followed accounts, same category, geo
- Usually **several sources unioned**

## Ranking

Score each candidate with a heavier model (gradient-boosted trees or a deep net) using **many features**:

- User: history, demographics, session context, device
- Item: age, popularity, category, creator, quality signals
- User×Item: past interaction, embedding similarity, same-author affinity
- Context: time of day, what they just watched, position

Predict: P(click), P(watch > 30s), P(like), P(purchase) — often **multi-objective**, combined into one score.

## Re-rank / business layer

Diversity (don't show 10 items from one creator), freshness, dedup ("already seen"), fairness, sponsored slots, exploration (show some uncertain items to learn).

## Serving realities

- Precompute candidates for active users (offline) + freshen online
- Cache the ranked list with a short TTL; paginate
- Log every impression + outcome -> next training set (closed loop; beware feedback loops / popularity bias)
- Cold start (new user/item) -> fall back to popularity / content-based / onboarding signals
`
      },
      {
        "id": "feature-stores",
        "title": "Feature Stores & Online/Offline Consistency",
        "content": `> The #1 practical ML-infra problem: the feature you compute during training must **exactly match** the one you compute while serving. A feature store solves this.

## The skew problem

\`\`\`flow
Training: "user's avg order value over 30 days" computed in a Spark job over the warehouse
Serving:  same feature computed in application code from the OLTP DB
-> subtle differences (timezone, which orders count, rounding) -> model sees different inputs -> worse in production than in eval
\`\`\`

## Feature store = one definition, two access paths

- **Offline store** — historical feature values (in a warehouse / Parquet), for building training sets with **point-in-time correctness** (the feature as it was *at the time of the label*, no future leakage)
- **Online store** — the latest feature values in a low-latency KV store (Redis, DynamoDB, a dedicated store) for serving, read in single-digit ms
- **One transformation definition** feeds both (batch job materializes offline + pushes to online; or streaming for fresh features)

## Feature types

- **Batch** — recomputed periodically (user's 30-day spend)
- **Streaming / near-real-time** — updated from an event stream (clicks in the last 5 min, Ch: stream processing)
- **Real-time / request-time** — computed from the request itself (query length, current cart)

## Tools

Feast, Tecton, Vertex AI / SageMaker Feature Store, or a home-grown Kafka + Redis + Spark setup.

> Interview line: "a feature store gives one feature definition with an offline path (point-in-time-correct training sets) and an online path (ms reads for serving), eliminating training/serving skew."
`
      },
      {
        "id": "model-serving-monitoring",
        "title": "Model Serving & Monitoring",
        "content": `> Deploying a model is deploying a service — plus ML-specific concerns: drift, rollback on quality (not just errors), and A/B testing.

## Serving patterns

- **Online / real-time** — a low-latency inference service (TF Serving, TorchServe, Triton, ONNX Runtime, or a plain API). Batch requests, GPU where it pays off, cache repeated inputs.
- **Batch / offline** — score everything nightly, store results, serve from a KV store (recommendations for all users precomputed). Cheapest when freshness isn't critical.
- **Streaming** — score events as they arrive (fraud detection).
- **Edge / on-device** — model runs on the phone (privacy, latency, offline).

## Deployment & rollout

- **Model registry** -> deploy a specific version; the artifact is immutable
- **Shadow mode** — run the new model on real traffic, log predictions, **don't serve them**; compare to the current model
- **Canary / A-B** — route 5% -> 50% -> 100%, gated on **online metrics** (CTR, revenue, latency), auto-rollback on regression
- Keep the previous model hot for instant rollback

## Monitoring (beyond latency/errors)

- **Feature drift** — input distributions shift vs training (new user behavior, a bug upstream) -> alert
- **Prediction drift** — output distribution shifts
- **Performance decay** — once labels arrive (a purchase, a click), compute real accuracy/AUC over time; models rot as the world changes -> triggers retraining
- **Data quality** — nulls, out-of-range, schema changes in features
- **Fairness / segment metrics** — does it work for all user groups?

## Retraining loop

\`\`\`flow
Serving logs (features + predictions) + delayed labels
-> new training set -> retrain (scheduled, or triggered by drift/decay)
-> offline eval -> shadow -> canary -> promote
\`\`\`
`
      },
      {
        "id": "ml-system-recap",
        "title": "Quick Recap",
        "content": `**ML system** = the system *around* a model: data collection -> feature pipeline -> training (offline) -> registry -> serving (online) -> monitoring -> retraining loop. You design the plumbing, not the algorithm.

**Recommendation / ranking** = two (three) stages: **candidate generation** (cheap retrieval of ~hundreds from millions — collaborative filtering, embedding + ANN, rules) -> **ranking** (heavy model, many features, multi-objective) -> **re-rank** (diversity, freshness, dedup, sponsored, exploration). Log impressions+outcomes as the next training set. Handle cold start with popularity/content fallbacks.

**Feature store** — one feature definition, two paths: **offline** (point-in-time-correct training sets, no leakage) + **online** (ms KV reads for serving). Eliminates training/serving skew. Feature types: batch, streaming, request-time.

**Model serving** — it's a service + ML concerns: online vs batch vs streaming vs edge serving; deploy via registry -> shadow -> canary on **online metrics** -> promote, keep old model for rollback. Monitor feature drift, prediction drift, and (once labels arrive) real performance decay -> retrain.

One line each:

- **Candidate generation -> ranking -> re-rank** -> narrow millions to hundreds cheaply, then score precisely, then apply business rules.
- **Feature store** -> same feature offline and online — kills training/serving skew.
- **Model monitoring** -> watch drift + decay, not just latency; retrain when the world moves.
`
      }
    ]
  },
  {
    "id": "worked-designs",
    "title": "End-to-End Worked Designs",
    "topics": [
      {
        "id": "design-twitter-feed",
        "title": "Design Twitter / News Feed",
        "content": `> Run it through the 6-step framework (Ch: The System Design Interview).

## 1. Requirements

- **Functional:** post a tweet (text + media), follow users, home timeline (tweets from people you follow, recent-first), user profile timeline, likes. Skip: DMs, search, trends (v1).
- **Non-functional:** timeline read must be **fast (<200ms)** and **highly available**; eventual consistency is fine (a tweet showing up 1-2s late is OK); read-heavy.

## 2. Estimation

- 300M DAU, each opens the app ~10×/day -> ~3B timeline reads/day -> ~35k RPS avg, ~150k peak.
- 300M × 0.5 tweets/day -> 150M tweets/day -> ~1,700 writes/sec.
- **Read:write ≈ 100:1** -> optimize reads hard.
- Tweet ≈ 300 bytes -> 150M × 300B ≈ 45 GB/day of tweet text.

## 3. API + data

\`\`\`flow
POST /tweets            {text, mediaIds}         -> tweetId
GET  /timeline?cursor=   -> [tweets], nextCursor
POST /follow/:userId
\`\`\`

- \`tweets(id snowflake, author_id, text, media, created_at)\` — id is time-sortable (Ch: Snowflake)
- \`follows(follower_id, followee_id)\` — indexed both ways
- \`timeline:{userId}\` — a Redis list of tweet ids (the precomputed feed)

## 4. High-level design

\`\`\`flow
Client -> LB -> API
POST tweet -> write to tweets DB -> enqueue "fanout(tweetId, authorId)"
Fanout workers -> get author's followers -> LPUSH tweetId into each follower's timeline:{id} (cap ~800)
GET timeline -> read timeline:{me} ids -> multi-get tweets from cache/DB -> hydrate -> return
\`\`\`

## 5. Deep dive — the celebrity problem

Fan-out on write breaks for a user with 50M followers (50M list writes per tweet). **Hybrid:**

- Regular users (< ~10k followers): fan-out on write
- Celebrities: **do NOT fan out**. At timeline read: \`merge(precomputed timeline, live-fetch recent tweets of the celebrities I follow)\`, sort, return.
- Cache the merged result briefly.

Ranking: v1 chronological; v2 an ML ranker (Ch: Recommendation) scoring engagement.

## 6. Bottlenecks

- Fanout queue lag on viral spikes -> autoscale workers, prioritize
- Hot tweet (millions read the same one) -> it's in cache, fine
- Timeline store per user -> shard by userId; cap list length; regenerate for users who return after being inactive
- Media -> object storage + CDN (Ch: CDN, S3)
`
      },
      {
        "id": "design-chat-system",
        "title": "Design a Chat System (WhatsApp)",
        "content": `> 1:1 + group messaging, delivered fast, reliably, in order, at scale.

## 1. Requirements

- **Functional:** send/receive 1:1 messages, group chats, delivery + read receipts, online/last-seen, push when offline, message history, media.
- **Non-functional:** **low latency** (<500ms delivered), reliable (no lost messages), ordered within a conversation, works on flaky mobile networks.

## 2. Estimation

- 500M DAU, 40 messages sent/user/day -> 20B messages/day -> ~230k msgs/sec avg, ~1M peak.
- Message ≈ 200 bytes -> 20B × 200B ≈ 4 TB/day. Media in object storage.
- Concurrent connections ≈ 100M+.

## 3. API + data

\`\`\`flow
WS: send {conversationId, clientMsgId, text}  -> ack {serverMsgId, seq, ts}
WS: incoming {conversationId, serverMsgId, seq, senderId, text, ts}
WS: receipt {serverMsgId, status: delivered|read}
GET /conversations/:id/messages?before=seq   (history / catch-up)
\`\`\`

- \`messages(conversation_id, seq, sender_id, body, created_at)\` — **\`seq\`** is a per-conversation monotonic counter -> ordering. Partition by \`conversation_id\`. Wide-column store (Cassandra) fits: write-heavy, time-ordered, LSM (Ch: LSM).
- \`conversation_members\`, \`user_connection -> gateway\` (Redis)

## 4. High-level design

\`\`\`flow
Phone <-WebSocket-> WS Gateway (many; each ~100k conns)
Send: gateway -> Chat service -> assign seq -> persist message -> ack sender
      -> for each recipient: look up their gateway (Redis) -> route via pub/sub backplane (Kafka/Redis)
      -> recipient's gateway pushes over their socket
      -> recipient offline? -> push notification (APNs/FCM) + store as undelivered
\`\`\`

## 5. Deep dive — reliability & ordering

- **Ordering:** per-conversation \`seq\` from a single writer per conversation (or a sequencer). Client renders by \`seq\`.
- **At-least-once + dedup:** sender attaches \`clientMsgId\`; server dedups; retries safe (Ch: Idempotency).
- **Catch-up on reconnect:** client sends its last-seen \`seq\` -> server streams everything after it. This is what makes "10 min offline" not look like data loss.
- **Groups:** small groups -> fan-out on write to each member's delivery. Large groups (100k) -> fan-out on read / a broadcast topic per group.
- **Receipts:** recipient's gateway sends \`delivered\`; on view, \`read\`. Fan these back to the sender.
- **E2E encryption** (Signal protocol): server routes ciphertext, can't read it; key exchange per device.

## 6. Bottlenecks

- Gateway scaling -> add gateways + connection registry + backplane (Ch: real-time transports)
- Hot group -> dedicated handling, rate-limit
- Media -> presigned upload to S3, send a reference; download via CDN
- Storage -> messages partitioned by conversation; old messages to cold storage; some clients keep history locally only
`
      },
      {
        "id": "design-youtube",
        "title": "Design YouTube / Video Streaming",
        "content": `> Upload, process, store, and stream video to billions — at every quality, over any network.

## 1. Requirements

- **Functional:** upload video, watch video (adaptive quality), search, view counts, comments, likes, channels/subscriptions, recommendations.
- **Non-functional:** playback starts fast + rarely buffers (availability + low startup latency), massive read scale, upload can be slow but must be reliable, storage is huge.

## 2. Estimation

- 2B users, 1B hours watched/day. 500 hours uploaded/minute.
- A 10-min 1080p video ≈ 300 MB; stored in ~5 renditions ≈ 1 GB per video.
- 500 hrs/min × 60 × 24 = 720k hrs/day uploaded -> petabytes/month -> object storage, tiered.
- Reads (watch) hugely outnumber writes -> **CDN is the whole game**.

## 3. API + data

\`\`\`flow
POST /videos  -> {uploadUrl (presigned), videoId}
POST /videos/:id/complete
GET  /videos/:id  -> metadata + manifest URL
GET  /watch/:id   (player fetches manifest, then segments from CDN)
\`\`\`

- \`videos(id, channel_id, title, status, duration, privacy, created_at)\` — OLTP DB
- Segments + manifests + thumbnails -> object storage, fronted by CDN
- View counts -> approximate + async (Ch: probabilistic), not a row update per view

## 4. High-level design

\`\`\`flow
UPLOAD:  client -> presigned URL -> S3 (chunked/resumable) -> S3 event -> queue
PROCESS: queue -> probe -> split into segments -> parallel transcode farm (many renditions/codecs)
         -> package HLS/DASH manifests -> write to S3 -> mark video READY -> update search index (CDC)
WATCH:   player -> metadata service -> manifest URL -> player fetches segments from CDN
         -> CDN edge cache HIT (popular) or MISS -> S3 origin
\`\`\`

(Full detail in Ch: Video Pipeline + Adaptive Streaming.)

## 5. Deep dive — delivery & scale

- **CDN**: segments are immutable static files -> near-100% edge hit rate for popular videos; origin barely touched. Multi-CDN for cost + resilience.
- **ABR**: player switches bitrate per segment based on bandwidth + buffer (Ch: Adaptive Streaming).
- **Popularity skew**: 1% of videos = most traffic -> those live entirely in CDN + hot storage. Long-tail -> cheaper/cold storage, slower first byte.
- **Recommendations** drive most watch time -> candidate-gen + ranking (Ch: Recommendation).
- **Live**: real-time transcode -> LL-HLS -> CDN.

## 6. Bottlenecks

- Transcode farm cost -> spot instances, autoscale on queue depth, prioritize by tier, AV1 for popular videos (smaller, saves bandwidth)
- Thumbnail/preview generation, captions (speech-to-text), content-ID / moderation — separate pipeline stages
- Comments/likes -> separate services, sharded; counts approximate + async
`
      },
      {
        "id": "design-uber",
        "title": "Design Uber / Ride-Hailing",
        "content": `> Match riders to nearby drivers in real time; track the trip; handle surge; be reliable with money involved.

## 1. Requirements

- **Functional:** driver shares location continuously; rider requests a ride; system finds nearby available drivers and dispatches; both track each other live during the trip; fare calculation + payment; ratings.
- **Non-functional:** dispatch is **latency-sensitive** (a few seconds), location updates are **very high write volume**, must be highly available; payment must be consistent.

## 2. Estimation

- 5M active drivers, location update every 4s -> ~1.25M location writes/sec. This is the dominant load.
- 20M rides/day -> ~230 ride requests/sec avg, spiky (rush hour, events) -> peak ×5+.

## 3. API + data

\`\`\`flow
WS/HTTP: driver -> POST /location {lat, lng}   (every 4s)
POST /rides/request {pickup, dropoff}  -> rideId, then WS updates
WS: ride updates {status: matching|driver_assigned|arriving|in_trip|completed, driverLocation}
\`\`\`

- **Driver location** -> in-memory geo-index, NOT a durable DB row per update. Redis GEO or a cell -> drivers map, keyed by **geohash / H3 cell** (Ch: Geospatial). TTL so stale drivers drop off.
- \`rides(id, rider_id, driver_id, status, pickup, dropoff, fare, created_at)\` — OLTP, strongly consistent state machine
- \`driver_status(driver_id, available|on_trip)\`

## 4. High-level design

\`\`\`flow
Driver app --location--> Location service --> geo-index (Redis, sharded by region/cell)
Rider requests ride --> Dispatch service:
  compute rider's cell + neighbor cells -> fetch available drivers there
  rank (ETA via routing service, driver rating, acceptance rate)
  offer to best driver (timeout ~15s) -> declined/timeout -> next driver
  accepted -> create ride (status=driver_assigned), mark driver on_trip
Trip: both stream location via WS; ETA + route from routing service
Complete -> compute fare (distance + time + surge) -> charge (Ch: Payments) -> ratings
\`\`\`

## 5. Deep dive — geo matching & surge

- **Why cells:** \`WHERE distance < 2km\` can't be indexed. Geohash/H3 turns 2D into cell ids; query the rider's cell + 8 neighbors (rider may be near a cell edge), then exact-distance filter + rank.
- **Sharding:** partition the geo-index by region/city -> each shard handles its own location writes; a city outage doesn't affect others.
- **Surge:** per-cell demand/supply ratio computed continuously (stream processing, Ch: stream); multiplier applied to fare; shown to rider before confirm.
- **Dispatch consistency:** offering a ride to a driver takes a short lock / atomic status change so two riders don't get the same driver (Ch: Distributed Locking / optimistic status update).

## 6. Bottlenecks

- 1.25M location writes/sec -> in-memory, regional shards, drop-to-sample if overloaded (every 4s is fine, don't need every one durable)
- Routing/ETA service is heavy -> cache, precompute for common routes, approximate
- Payment failures at trip end -> retry, don't block the rider from leaving; reconcile (Ch: Payments)
`
      },
      {
        "id": "design-key-value-store",
        "title": "Design a Distributed Key-Value Store (Dynamo)",
        "content": `> The canonical "distributed systems" design — it exercises consistent hashing, quorums, vector clocks, gossip, Merkle trees, LSM. (All in Ch 17-20.)

## 1. Requirements

- **Functional:** \`get(key)\`, \`put(key, value)\`. Values are opaque blobs, ~KB. No queries, no transactions, no joins.
- **Non-functional:** **highly available** (always writable, even during failures — "always-on shopping cart"), horizontally scalable to thousands of nodes, low latency, tunable consistency. Chooses **AP** (Ch: CAP).

## 2. Estimation

- 100k+ ops/sec, terabytes of data, must run across many commodity nodes, expect constant node failures.

## 3. Data placement — consistent hashing

\`\`\`flow
Nodes + keys on a ring (Ch: Consistent Hashing). key -> hash -> first N nodes clockwise = its replicas.
Virtual nodes for even distribution. Add/remove a node -> only ~K/N keys move.
\`\`\`

## 4. Replication & consistency — quorums

- Each key replicated to **N** nodes. **W** = writes must ack, **R** = reads must ack.
- \`W + R > N\` -> a read overlaps the latest write (strong-ish). \`N=3, W=2, R=2\` is typical.
- \`W=1\` -> fast, always writable, eventual. Tune per use case (Ch: Quorums).
- **Hinted handoff:** target node down -> write to a temporary node with a "hint"; it forwards when the node recovers -> stays available during failures.

## 5. Deep dive — conflicts, membership, repair

- **Concurrent writes** to different replicas -> **vector clocks** attached to each version. Read returns both if concurrent -> client (or a merge function, e.g. cart = union) resolves; write back the reconciled version. (Or LWW if you accept losing a write.)
- **Membership + failure detection:** **gossip** — nodes exchange "who's alive" with random peers; no coordinator (Ch: Gossip).
- **Anti-entropy:** replicas drift (missed writes during a partition). **Merkle trees** per key-range -> compare root hashes -> sync only the divergent ranges cheaply (Ch: Merkle).
- **Storage engine:** each node uses an **LSM tree** (fast writes, Bloom filters for reads) (Ch: LSM).
- **Read repair:** on a read, if replicas disagree, push the newest version to the stale ones.

## 6. Bottlenecks / trade-offs

- Range scans are hard (keys hashed around the ring) — this store is point-lookup only
- Eventual consistency pushes conflict handling to the app
- Hot key -> that key's N nodes get hammered -> add caching, or split the key
- This is Dynamo/Cassandra/Riak. Contrast: a **CP** store (single-primary + Raft, e.g. etcd) chooses consistency over availability.
`
      },
      {
        "id": "design-dropbox",
        "title": "Design Dropbox / File Sync",
        "content": `> Sync files across a user's devices: efficient for big files, handles conflicts, works offline.

## 1. Requirements

- **Functional:** upload/download files, sync changes across devices, share folders, version history, offline edits sync on reconnect.
- **Non-functional:** efficient (don't re-upload a 1 GB file for a 1-byte change), reliable (no data loss), reasonable sync latency, storage-efficient (dedup).

## 2. Estimation

- 100M users, 100 GB each avg -> ~10 EB (exabytes) -> object storage, tiered, dedup essential.
- Sync events: many small metadata ops; bulk bytes go direct to storage.

## 3. Core idea — chunking + content-addressed storage

\`\`\`flow
File -> split into ~4 MB chunks -> hash each chunk (SHA-256)
Store each chunk in object storage keyed by its hash (content-addressed)
File = an ordered list of chunk hashes (the "file manifest")
\`\`\`

- **Dedup:** identical chunk stored once (across the file, across users) — huge savings
- **Delta sync:** edit a file -> only the changed chunks' hashes differ -> upload only those chunks
- **Compression + encryption** per chunk

## 4. High-level design

\`\`\`flow
Client watches the local folder -> detects a change -> computes chunk hashes
-> asks Metadata service "which of these chunks do you already have?"
-> uploads missing chunks directly to object storage (presigned URLs, Ch: S3)
-> commits new file manifest + version to Metadata service
Metadata service -> notifies the user's other devices (long-poll / WebSocket)
Other devices -> fetch the new manifest -> download only missing chunks -> reassemble
\`\`\`

Components: **Metadata service** (files, versions, chunk lists, sharing, permissions — an OLTP DB, sharded by user/namespace), **Block service** (chunk storage, dedup), **Notification service** (push changes to devices), **Client** (watcher, chunker, local DB of state).

## 5. Deep dive — conflicts & consistency

- **Conflict:** two devices edit the same file offline. On sync, detect divergent version chains -> keep both: \`report.docx\` and \`report (Alice's conflicted copy).docx\`. Don't silently lose an edit. (Simpler than OT/CRDT because files are opaque blobs.)
- **Consistency:** metadata is the source of truth; a file "exists" only when its manifest is committed. Chunks uploaded but not committed = garbage-collected later.
- **Ordering:** per-file version numbers; client sends "base version" -> server rejects if stale -> client re-syncs.
- **Large folders / many small files:** batch metadata ops; watch OS limits on file watchers.

## 6. Bottlenecks

- Metadata service is the hot path -> shard by user, cache, keep ops small
- Notification fan-out to devices -> pub/sub, or devices long-poll with a cursor
- Storage cost -> dedup + compression + cold-tier old versions + cap version history
- Bandwidth -> delta sync + LAN sync between nearby devices
`
      }
    ]
  }
];
