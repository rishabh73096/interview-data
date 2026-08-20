export interface HRItem {
  q: string;
  a: string;
}

export interface HRCategory {
  title: string;
  items: HRItem[];
}

export const hrCategories: HRCategory[] = [
  {
    "title": "Self-Introduction",
    "items": [
      {
        "q": "Tell me about yourself.",
        "a": "I'm Rishabh Tiwari, a Full Stack Developer with around 3 years of experience working primarily on the MERN stack — React.js, Next.js, Node.js, Express.js, and MongoDB. In my current role, I've been building and maintaining scalable SaaS applications end-to-end — right from designing the database schema to shipping production-ready UI. Some of the core things I've worked on include authentication and role-based access control, Stripe payment integrations, booking systems, rewards and promo code engines, and reporting/analytics dashboards. I also work closely with designers, QA, and product managers in an agile setup, so I'm comfortable owning a feature independently as well as collaborating in a team. What I enjoy most about full-stack development is that I get to think about both the user experience and the system architecture — how a feature looks on the frontend and how it scales on the backend. I'm now looking for a role where I can take on more ownership, work on more complex/scalable systems, and continue growing as a full-stack engineer."
      }
    ]
  },
  {
    "title": "Core HR Questions",
    "items": [
      {
        "q": "Why should we hire you?",
        "a": "Because I bring hands-on, production experience — not just theoretical knowledge. I've already built and shipped SaaS features that real users interact with — booking flows, payments, rewards systems. I can pick up a requirement and take it from database design to deployed feature without needing much hand-holding. I'm also quick to adapt to new codebases and comfortable working under sprint deadlines, which I think adds immediate value rather than a long ramp-up period."
      },
      {
        "q": "Why are you looking for a change?",
        "a": "I've learned a lot in my current role — I've built multiple full-stack modules and worked across the entire stack, which has been great for my growth. But I'm now looking for a role that offers more scale, more complex problems to solve, and better growth opportunities — both in terms of the technology I get to work with and compensation that reflects the ownership I've taken on. I want to keep growing as an engineer, and I felt it's the right time to explore that."
      },
      {
        "q": "What are your strengths and weaknesses?",
        "a": "Strengths: I'm strong at owning a feature end-to-end — from planning the data model to writing the API and building the UI. I'm also good under pressure; I've shipped features in tight 2-week sprint cycles without compromising on quality. And I communicate well with cross-functional teams — designers, QA, backend folks. Weakness: Earlier, I used to spend too much time perfecting small details before moving forward, which sometimes slowed down delivery. I've worked on this by setting clear checkpoints for myself — get the core functionality working first, then iterate on polish. It's made me a lot faster without losing quality."
      },
      {
        "q": "Why do you want to join our company?",
        "a": "From what I've researched, your company is working on [product/domain] and building things at a scale that would really challenge me technically. I like that you're a product-based/growing company — it means I'd get ownership over features rather than just executing tickets. My background in building SaaS products with payments, RBAC, and booking systems feels directly relevant to what you're building, and I think I can contribute from day one while also learning a lot here."
      },
      {
        "q": "Where do you see yourself in 5 years?",
        "a": "In the next couple of years, I want to deepen my expertise in system design and scalable architecture — going beyond feature development into owning larger parts of a product. Longer term, I'd like to move into a role where I'm mentoring other developers and making architectural decisions, maybe as a senior or lead engineer. But that growth has to come from solving real, meaty problems — which is exactly what I'm looking for in my next role."
      },
      {
        "q": "What are your salary expectations?",
        "a": "Based on my experience — around 3 years of full-stack development where I've independently shipped production SaaS features including payments, RBAC, and reporting systems — I'm looking at a package in the range of 7 to 8 LPA. That said, I'm flexible and open to discussing based on the role's scope, the learning opportunity, and the overall compensation structure."
      },
      {
        "q": "This offer is lower than your expectation — will you negotiate or accept?",
        "a": "I'd definitely want to have an open conversation about it first. If the role offers strong learning opportunities, meaningful ownership, and there's a clear growth path with future revisions, I'm open to some flexibility. My priority is finding the right fit — but I'd also want the offer to reasonably reflect the experience and value I bring."
      }
    ]
  },
  {
    "title": "Current Role, Projects & Achievements",
    "items": [
      {
        "q": "Walk me through your current responsibilities.",
        "a": "Day to day, I build frontend applications in React and Next.js, and develop backend REST APIs using Node.js and Express. I handle database design and optimization in MongoDB and MySQL depending on the project. Beyond core development, I've implemented authentication systems, payment integrations, rewards/promo engines, and reporting modules. I also review code for teammates and work on improving performance and scalability of existing features."
      },
      {
        "q": "Tell me about a project you're proud of.",
        "a": "One I'm particularly proud of is a SaaS booking platform I worked on — I built the entire booking and payment flow, from designing the MongoDB schema to writing the Express controllers for slot management, checkout, and confirmation, and integrating Stripe for payments. I also built a rewards engine where admins could configure fixed or percentage-based rewards through a UI, which auto-credited customer balances after successful payments. Seeing a feature I designed from scratch handle real transactions was genuinely satisfying."
      },
      {
        "q": "How do you approach a new feature request?",
        "a": "First, I make sure I fully understand the requirement — I'll ask clarifying questions if something's ambiguous. Then I think through the data model, since getting the schema right early avoids a lot of pain later. I break the feature into backend APIs and frontend components, build the core functionality first, test it, and then handle edge cases and polish. I keep the PM/QA in the loop throughout so there are no surprises at review time."
      },
      {
        "q": "How do you ensure the quality/performance of your code?",
        "a": "I write unit tests for critical logic using Jest, and I rely on code reviews — both giving and receiving feedback. For performance specifically, I've worked on MongoDB indexing and query optimization to cut down page load times on high-traffic endpoints. I also test edge cases manually before raising a PR, especially for anything involving payments or access control, since those are hard to recover from if they break in production."
      }
    ]
  },
  {
    "title": "Team Collaboration & Conflict Handling",
    "items": [
      {
        "q": "Tell me about a time you disagreed with a teammate or PM.",
        "a": "There was a case where a PM wanted a feature shipped quickly without proper role-based access checks, and I felt that was risky given it touched payment data. Instead of just pushing back, I explained the specific risk — unauthorized access to transaction data — and proposed a middle ground: ship the core feature on time, but add the access control as a fast-follow within the same sprint. That way we hit the deadline without compromising security. It worked out, and it's now a standard I try to hold myself to."
      },
      {
        "q": "How do you handle conflicts within your team?",
        "a": "I try to understand the other person's reasoning first rather than assuming they're wrong. Most disagreements in engineering come down to different priorities — speed vs. quality, for example — so once we're both clear on constraints, it's usually easier to find a solution that works. I keep it about the problem, not the person."
      },
      {
        "q": "How do you work with designers, QA, and backend developers?",
        "a": "Since I work across the stack, I naturally end up as a bridge between design and backend. With designers, I flag early if something isn't technically feasible or needs adjustment for responsiveness. With QA, I try to write clear PR descriptions and test edge cases myself first so we're not going back and forth. With backend-focused teammates, I make sure API contracts are agreed on early so frontend and backend can work in parallel without blocking each other."
      }
    ]
  },
  {
    "title": "Leadership & Ownership",
    "items": [
      {
        "q": "Give an example of taking ownership beyond your assigned task.",
        "a": "While building a booking platform, I noticed our transactional emails were unstructured and hurting the user experience post-payment. It wasn't explicitly assigned to me, but I took the initiative to set up a proper email infrastructure using Postmark with reusable templates, and connected it to our marketing flows too. It wasn't in my original scope, but it improved the product, so I flagged it, got buy-in, and built it."
      },
      {
        "q": "Have you ever mentored or guided a junior developer?",
        "a": "I've helped teammates during code reviews — pointing out cleaner ways to structure API responses or handle edge cases in MongoDB queries, and explaining the reasoning rather than just making the change myself. I enjoy that part of the job, and it's something I want to do more of as I grow into a more senior role."
      },
      {
        "q": "Describe a time you had to make a decision without complete guidance.",
        "a": "When implementing role-based access control across multiple products, there wasn't a pre-defined pattern to follow. I had to decide the structure — how roles, permissions, and resource ownership would map to each other — based on what I knew about the business needs. I documented my approach and got it reviewed before scaling it across other modules. It's since become the standard pattern we reuse."
      }
    ]
  },
  {
    "title": "Handling Deadlines & Pressure",
    "items": [
      {
        "q": "How do you handle tight deadlines?",
        "a": "I break the task into the smallest shippable pieces and get the core functionality working first — the \"happy path\" — before worrying about edge cases or nice-to-haves. I also communicate early if I think a deadline is at risk, rather than staying quiet until the last day. In my experience, most deadline pressure gets manageable once you're transparent about progress early."
      },
      {
        "q": "Tell me about a time you missed a deadline. What happened?",
        "a": "Early on, I underestimated how long a payment integration would take because of edge cases around failed transactions and webhooks. I ended up needing an extra day. What I learned from it is to always pad estimates for anything involving third-party integrations, and to flag risk as soon as I sense it — not just when the deadline arrives. Since then, my estimates have been a lot more reliable."
      },
      {
        "q": "How do you prioritize when you have multiple tasks at once?",
        "a": "I look at impact and urgency — anything blocking other people's work or affecting production goes first. Then I sequence the rest based on sprint priority. I also try to batch similar tasks together, like API work or UI work, so I'm not context-switching constantly, which helps me move faster overall."
      }
    ]
  },
  {
    "title": "Advanced HR Questions (3+ YOE)",
    "items": [
      {
        "q": "What's the most technically challenging problem you've solved?",
        "a": "Optimizing performance on a high-traffic endpoint that was timing out under load. I dug into the MongoDB queries, identified missing indexes and inefficient lookups, and restructured some of the schema to reduce joins across collections. That brought page load times down significantly — around 40% in one case. It taught me a lot about how database design decisions early on affect performance later."
      },
      {
        "q": "How do you stay updated with new technologies?",
        "a": "I follow release notes for the frameworks I use directly — React, Next.js, Node — since that's the most practical way to stay current. I also read engineering blogs and occasionally build small side projects to try things I haven't used in production yet, like exploring Redis caching or CI/CD pipelines, before bringing them into real projects."
      },
      {
        "q": "If you found a critical bug in production right before a release, what would you do?",
        "a": "I'd flag it immediately rather than sit on it — transparency matters more than looking good. Then I'd assess the blast radius: is it affecting live users right now, or is it release-blocking but not yet live? Based on that, I'd either roll back, hotfix, or delay the release, in coordination with my lead/PM. I've dealt with payment-related edge cases before, and the instinct I've built is: fix correctness first, explain the delay second."
      },
      {
        "q": "How do you handle receiving critical feedback on your code or work?",
        "a": "I take it as information, not judgment. Early in my career, I used to feel defensive, but I've realized the goal is a better product, not being \"right.\" I ask clarifying questions if I don't understand the concern, and I've genuinely become a better engineer because of code review feedback I initially didn't love hearing."
      },
      {
        "q": "Do you have any questions for us?",
        "a": "Yes — a few: What does the team's current tech stack and architecture look like, and are there any major changes planned? What would success look like in this role in the first 6 months? How does the team approach code reviews and technical decision-making? What are the biggest technical challenges the team is currently facing?"
      }
    ]
  },
  {
    "title": "More Questions to Prep For",
    "items": [
      {
        "q": "Tell me about a time you failed, and what did you learn from it?",
        "a": "Early in a project, I designed a MongoDB schema for a booking system without fully accounting for how frequently we'd need to query bookings by staff and date range together. A few months in, as data grew, some dashboard queries started slowing down noticeably. It wasn't a production outage, but it was a clear miss on my part — I hadn't thought hard enough about access patterns before finalizing the schema. I went back, added a compound index, and reshaped a couple of queries, which fixed it, but the real lesson was process: now I map out the top 4-5 query patterns before I write a single schema, not after. It's a habit that's saved me more than once since."
      },
      {
        "q": "How do you handle ambiguous or changing requirements?",
        "a": "I don't wait for perfect clarity before starting — that rarely comes. Instead, I write down my assumptions explicitly and share them with the PM or stakeholder early, so if I've misunderstood something, we catch it in a five-minute conversation instead of after I've built the wrong thing. For genuinely ambiguous areas, I'll build the smallest version that lets us validate the idea, rather than over-engineering for requirements that might change anyway. Requirements shifting mid-sprint doesn't bother me much as long as there's communication about why — that's just how product work is."
      },
      {
        "q": "What's the biggest mistake you've made in your career, and how did you handle it?",
        "a": "Probably underestimating a Stripe integration early on — I treated it like a straightforward API call when in reality webhooks, retries, and failed-payment edge cases needed a lot more thought. I shipped a version that worked for the happy path but had a gap in how we handled a webhook arriving before the redirect did, which briefly caused a booking to show as unconfirmed even though payment had gone through. I caught it within the sprint, fixed the ordering logic, and added idempotency handling so it couldn't happen again. What stuck with me is: for anything involving money, assume the unhappy path will happen in production, because it will."
      },
      {
        "q": "How do you approach learning a new technology or framework quickly?",
        "a": "I start by building something small and real with it rather than reading documentation end-to-end — I learn fastest by hitting actual problems and looking things up as I go. Once I'm past the basics, I go back and read up on the parts I had to guess at, so I understand why something worked, not just that it worked. I also try to connect it to something I already know — most new tools are a variation on a pattern I've seen before, whether that's state management, caching, or request handling — which makes the learning curve a lot shorter."
      },
      {
        "q": "Describe a time you had to push back on a stakeholder's request.",
        "a": "A stakeholder once wanted a promo code system that let discounts stack indefinitely, which sounded good for marketing but would have let users combine codes in ways that could tank margins on an order. Instead of just saying no, I put together a quick breakdown of the worst-case scenario with real numbers, and proposed a capped-stacking model that still gave marketing flexibility without the financial risk. They were fine with it once they saw the numbers — most pushback lands better when it's backed by a concrete scenario instead of just an engineering opinion."
      },
      {
        "q": "What does a good work-life balance look like to you?",
        "a": "For me it's less about strict hours and more about sustainability — I want to be doing my best work, and that doesn't happen if I'm burnt out. In practice that means being focused and efficient during work hours, communicating early if something's going to spill over, and not treating being \"always online\" as a badge of honor. I've found that well-rested, focused engineering hours produce better code than long stretched-out ones anyway, so it's not even a trade-off in my experience."
      },
      {
        "q": "Are you comfortable with remote or hybrid work and async collaboration?",
        "a": "Yes, I've worked in setups that required a lot of async collaboration with designers, QA, and PMs, and I'm comfortable with it as long as there's a habit of writing things down clearly — PR descriptions, ticket context, quick recordings when needed. I default to over-communicating in async settings rather than assuming context, which I've found avoids most of the friction people associate with remote work."
      },
      {
        "q": "How do you handle being blocked by a dependency on another team?",
        "a": "First, I make sure it's actually a blocker and not something I can mock or stub temporarily to keep moving — for example, building against a mocked API contract while the backend team finishes the real endpoint. If it's a genuine blocker, I flag it immediately rather than quietly waiting, and I try to make the ask specific — not \"when will this be ready\" but \"I need X by Thursday to stay on track for the sprint goal.\" In the meantime, I'll pick up something else useful instead of sitting idle."
      },
      {
        "q": "Why did you choose software engineering as a career?",
        "a": "I liked that it's a field where you can build something from nothing and see it actually work — that feedback loop is hard to find elsewhere. Full-stack specifically appealed to me because I didn't want to only think about pixels or only think about databases; I wanted to understand the whole system, from how a user clicks a button to how that click eventually updates a record and comes back as a response. That end-to-end ownership is still what I enjoy most about the work."
      },
      {
        "q": "What's a technical opinion you hold that others might disagree with?",
        "a": "I'd rather ship a slightly less \"clever\" solution that the next engineer can understand in five minutes than a more elegant one that takes twenty minutes to parse. I've inherited enough overly-abstracted code to have a strong opinion here — cleverness has a maintenance cost, and I think a lot of engineers under-price it. That doesn't mean I avoid good abstractions, just that I want them to earn their complexity, not just look impressive."
      }
    ]
  }
];
