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

export const aiRoadmapChapters: RoadmapChapter[] = [
  {
    id: 'ai-foundations',
    title: 'Stage 1 — AI Foundations & Setup',
    phases: [
      {
        id: 'who-and-how',
        title: 'Who This Is For & How To Study',
        duration: 'Read first',
        content: `> A developer who wants to build **production AI systems** — LLM apps, RAG, agents, evals, serving — not just call an API once in a notebook.

This is the **dedicated AI Engineering track**. The main Full Stack AI roadmap shows where AI sits in a full-stack career; this one goes deep on the AI side itself. You can run it alongside the Mobile roadmap or on its own.

## Who it fits

- Comfortable with one programming language (JavaScript/TypeScript is fine — you will pick up Python in Stage 1)
- Know what an HTTP API, JSON and a database are
- Do **not** need a maths degree or prior ML experience — Stage 2 teaches just enough

## Study each topic through this filter

1. What is it? 2. Why do I need it? 3. How does it work? 4. When to use it? 5. When NOT to use it? 6. Real-world example. 7. Small coding task. 8. Production version (errors, cost, latency, safety). 9. Interview questions. 10. Common mistakes.

Every phase gives you a **Learn** list, a **Production checklist**, **Interview questions** and **Common mistakes**. You do the coding task and write the "when NOT to use it" note yourself.

## Ground rules that save months

- **Build something every stage.** Reading about RAG without building one teaches almost nothing.
- **Measure before you tune.** Every AI feature gets an eval set (Stage 6) before you start tweaking prompts.
- **Prefer the boring option.** A prompt + one API call beats an agent; a workflow beats an agent; fine-tuning is the last resort.
- **Read the provider docs.** Model names, limits and prices change faster than any roadmap — treat numbers here as examples and verify.

## The goal

\`\`\`flow
Python + API basics
LLM apps (prompts, tools, structured output)
RAG on your own data
Agents + MCP
Evals + observability + safety
Fine-tuning / open models / serving
Production AI Engineer
\`\`\``,
      },
      {
        id: 'start-here-setup',
        title: 'Start Here — Setup Steps On Your MacBook (Zero to First LLM Call)',
        duration: 'Half a day',
        content: `> Do this once, in this order, before any roadmap topic. By the end you have Python, a clean project, a working API call, and a local model.

## 1. Core tools (one-time)

1. Install **Homebrew** if missing (one command from brew.sh)
2. Install **Git**, then set \`git config --global user.name\` and \`user.email\`
3. Install **VS Code** with the Python, Jupyter, Pylance and Ruff extensions
4. Install **uv** (\`brew install uv\`) — a fast Python + virtualenv + dependency manager. It replaces pip/venv/pyenv for this roadmap
5. Install **Node.js LTS** too if you will build UIs (Next.js) on top of your AI services

## 2. Create your first project

1. \`uv init ai-playground\` then \`cd ai-playground\`
2. \`uv add anthropic python-dotenv httpx pydantic\` — dependencies land in \`pyproject.toml\`, the venv is created for you
3. \`uv run python main.py\` runs code inside the project's environment — no manual \`activate\` needed
4. \`git init\`, and create \`.gitignore\` containing \`.env\`, \`.venv/\`, \`__pycache__/\` **before your first commit**

## 3. Get an API key — and protect it

1. Create an account with an LLM provider and generate an API key from its console
2. Set a **monthly spend limit** in the console immediately
3. Put the key in a \`.env\` file (\`ANTHROPIC_API_KEY=...\`), load it with \`python-dotenv\`, never hardcode it, never commit it
4. If a key ever lands in git, **rotate it** — deleting the commit is not enough

## 4. Your first call

1. Make one request with the official SDK: a user message, a small \`max_tokens\`, print the response text
2. Print the **usage** (input/output tokens) — start thinking in tokens from day one
3. Change \`temperature\` and the system prompt, run it three times, and note what changes
4. Deliberately break it (bad key, huge prompt) and read the error — you will handle these in production later

## 5. Notebooks and a local model

1. In VS Code create a \`.ipynb\`, pick the project's \`.venv\` as the kernel — use notebooks for experiments, \`.py\` files for anything that ships
2. Install **Ollama** (\`brew install ollama\`), pull one small open model, and chat with it locally — this teaches you the open-model workflow with zero API cost
3. Call the local model from Python through its HTTP API so you see that "an LLM" is just an endpoint

## 6. Accounts worth creating now

- **GitHub** (portfolio), **Hugging Face** (models, datasets), and one **vector DB** free tier later when you reach RAG

## Common setup mistakes

- Installing packages globally with pip, then fighting version conflicts forever
- Committing \`.env\` (bots scrape GitHub for keys within minutes)
- No spend limit, then a runaway loop burns real money
- Starting with a framework (LangChain etc.) before doing one raw SDK call — you will not understand what the framework hides`,
      },
      {
        id: 'ai-landscape',
        title: 'The AI Landscape: AI vs ML vs DL vs GenAI & Job Roles',
        duration: '1-2 days',
        content: `> Know the vocabulary and which role does what, so you can talk about the field precisely.

## Learn

- **AI** ⊃ **Machine Learning** ⊃ **Deep Learning** ⊃ **Generative AI / LLMs**
- ML learns patterns from data instead of hand-written rules; DL does it with neural networks
- **Generative models** produce new content (text, images, audio, code); **LLMs** are transformer-based text models
- Predictive ML (churn, fraud, ranking) vs generative AI (chat, summarize, code) — different failure modes, different evals
- Roles: **ML engineer** (train/serve models), **data scientist** (analysis, experiments), **AI engineer** (build products on top of models), **MLOps/LLMOps** (deploy, monitor, cost)

## This roadmap targets: AI Engineer

You mostly **use** foundation models through APIs or open weights, and own everything around them: prompts, retrieval, tools, evals, latency, cost, safety, UX.

## Production checklist

- Can you explain, in one sentence each, what a model, a prompt, an embedding and a token are?
- Do you know which problems need ML at all? Many need a SQL query or a rule

## Interview questions

- Difference between ML engineer and AI engineer?
- When would you NOT use an LLM?
- Predictive vs generative AI — how does evaluation differ?

## Common mistakes

- Using an LLM for a deterministic problem (parsing a date, summing numbers)
- Calling everything "AI" and never defining the metric that proves it works`,
      },
      {
        id: 'python-for-ai',
        title: 'Python for AI Engineers',
        duration: '1-2 weeks',
        content: `> The language of the AI ecosystem. You need production-grade Python, not notebook-grade.

## Learn

- Syntax coming from JS/TS: list/dict comprehensions, tuples, \`with\`, generators, decorators, f-strings
- **Type hints** + **Pydantic** models — the Python equivalent of TypeScript types + Zod; central to structured LLM output
- **Virtual environments / uv / pyproject.toml**, pinning versions, lock files
- **async/await** with \`asyncio\` and \`httpx\` — LLM calls are slow I/O; concurrency is mandatory
- Files, JSON, CSV, \`pathlib\`, environment variables, logging (not \`print\`)
- Errors: exceptions, custom errors, retry with backoff (\`tenacity\`)
- **pytest** basics and fixtures
- **FastAPI** to expose your AI code as an HTTP service
- NumPy and pandas at a "read and reshape data" level

## Production checklist

- Project runs from a clean clone with one command
- Types checked (pyright/mypy), lint/format (ruff) in CI
- Every external call has a timeout, retry policy and logging
- No secrets in code

## Interview questions

- Why is \`async\` important for LLM apps? What blocks the event loop?
- Pydantic vs dataclass vs TypedDict?
- GIL — what does it mean for a CPU-bound vs I/O-bound workload?

## Common mistakes

- Blocking calls inside an async function
- Mutable default arguments
- Global state shared across requests in a web service`,
      },
    ],
  },
  {
    id: 'ai-ml-basics',
    title: 'Stage 2 — ML & Deep Learning Basics (Just Enough)',
    phases: [
      {
        id: 'math-minimum',
        title: 'The Maths You Actually Need',
        duration: '1 week',
        content: `> Intuition, not proofs. Enough to read papers' diagrams and debug a training run.

## Learn

- **Vectors & matrices**: dot product, matrix multiply, shapes — embeddings and attention are just this
- **Cosine similarity vs Euclidean distance** — how "similar" is computed in vector search
- **Probability**: distributions, conditional probability, expectation; why a model outputs probabilities and how **sampling** (temperature, top-p) uses them
- **Statistics**: mean/variance, train/validation/test split, confidence, why sample size matters for evals
- **Calculus intuition**: a gradient is the direction that reduces loss; gradient descent takes small steps along it
- **Log / softmax / cross-entropy** — the loss behind language models

## Production checklist

- You can sketch what happens to a 768-dim vector when you compare it with another
- You can explain why lowering temperature reduces randomness but not hallucination

## Interview questions

- Cosine similarity vs dot product — when are they equal?
- What does softmax do and why is there a temperature?
- What is overfitting and how do you detect it?

## Common mistakes

- Spending months on theory before building anything
- Treating temperature 0 as "always correct"`,
      },
      {
        id: 'classical-ml',
        title: 'Classical ML with scikit-learn',
        duration: '1-2 weeks',
        content: `> Predictive ML is still most of the production AI in the world (fraud, ranking, churn, forecasting). Learn the workflow once.

## Learn

- The loop: **data → features → train → validate → test → deploy → monitor**
- Supervised (classification, regression) vs unsupervised (clustering, dimensionality reduction)
- Models to know: linear/logistic regression, decision trees, random forest, gradient boosting (XGBoost/LightGBM), k-means
- **Metrics**: accuracy is misleading on imbalanced data → precision, recall, F1, ROC-AUC; RMSE/MAE for regression
- **Overfitting vs underfitting**, bias–variance, regularization, cross-validation
- **Data leakage** — the silent killer of ML projects
- Feature engineering, handling missing values, categorical encoding

## Task

Pick a Kaggle tabular dataset, build a baseline, beat it with gradient boosting, and write a half-page on what the metric means for the business.

## Production checklist

- Train/serve skew checked: the same feature code runs in both places
- Data and model versioned; metrics tracked per run
- Monitoring for drift after deploy

## Interview questions

- Precision vs recall — which matters for fraud, which for spam?
- How do you handle a 99:1 class imbalance?
- What is data leakage? Give an example.

## Common mistakes

- Evaluating on training data
- Random split on time-series data
- Jumping to deep learning when a tree model would do`,
      },
      {
        id: 'neural-nets-pytorch',
        title: 'Neural Networks & PyTorch Basics',
        duration: '1-2 weeks',
        content: `> You will rarely train big models yourself, but you must understand what is inside them.

## Learn

- Neuron, layer, activation (ReLU, GELU), forward pass, loss, backprop, optimizer (SGD, Adam), learning rate, batch, epoch
- **PyTorch**: tensors, \`autograd\`, \`nn.Module\`, \`DataLoader\`, a training loop, saving/loading weights, moving to GPU/MPS (Apple Silicon)
- CNNs (images), RNNs (history), and why **transformers** replaced RNNs
- Embeddings as learned lookup tables
- Overfitting tools: dropout, weight decay, early stopping

## Task

Train a tiny classifier (MNIST or a small text classifier) with your own loop and plot the loss curve. Then break it: set a huge learning rate and read what happens.

## Production checklist

- Reproducible runs (seeds, config file, logged metrics)
- Checkpoints saved; a validation curve that you actually looked at

## Interview questions

- What does backpropagation compute?
- Why does Adam usually train faster than plain SGD?
- What is the vanishing-gradient problem?

## Common mistakes

- Forgetting \`model.eval()\` and \`no_grad()\` at inference
- Not shuffling training data
- Training on CPU and wondering why it is slow`,
      },
      {
        id: 'transformers-intuition',
        title: 'Transformers, Tokens & How LLMs Are Trained',
        duration: '1 week',
        content: `> The one architecture behind modern LLMs. Know it at diagram level.

## Learn

- **Tokenization**: text → tokens (subwords). Cost, limits and weird behaviour (counting letters, arithmetic) all trace back to tokens
- **Embeddings + positional information** → stack of **self-attention + feed-forward** blocks
- **Attention** in one line: each token decides how much to look at every other token; multi-head = several views at once
- **Context window** and why long contexts cost more (attention is quadratic-ish) and degrade ("lost in the middle")
- Decoder-only generation: predict the next token, append, repeat — the origin of **streaming** and **KV cache**
- **Training stages**: pre-training (next-token on huge data) → supervised fine-tuning (instruction following) → preference tuning (RLHF / DPO) → safety tuning
- **Sampling**: temperature, top-p, top-k, stop sequences
- Why models hallucinate: they model plausible text, not truth
- **Reasoning models** and test-time compute: spend more tokens thinking for better answers

## Production checklist

- You can estimate tokens from characters (~4 chars/token in English as a rough rule) and cost from tokens
- You know your model's context limit and what happens when you exceed it

## Interview questions

- Explain self-attention to a backend engineer
- Why is generation sequential and how does the KV cache help?
- Pre-training vs fine-tuning vs RLHF?
- Why do LLMs struggle with exact counting?

## Common mistakes

- Assuming bigger context = better answers
- Treating the model as a database of facts`,
      },
    ],
  },
  {
    id: 'ai-llm-apps',
    title: 'Stage 3 — Building With LLMs',
    phases: [
      {
        id: 'llm-apis',
        title: 'LLM APIs: Messages, Streaming, Errors & Limits',
        duration: '1 week',
        content: `> The foundation of every AI feature. Do this in raw SDK form before touching any framework.

## Learn

- Message roles: **system**, **user**, **assistant**; multi-turn conversations are *you* resending history each call
- Parameters: \`max_tokens\`, \`temperature\`, stop sequences; what "usage" and token billing mean
- **Streaming** (SSE): show tokens as they arrive; handle aborts and partial output
- **Errors and limits**: rate limits (429), overloaded (5xx), context-too-long, content refusals — retry with exponential backoff + jitter, never blindly
- **Timeouts** and cancellation; **idempotency** when retrying
- **Prompt caching**, **batch APIs** for offline jobs, and **model fallback** when the primary is down
- Async concurrency with a semaphore to respect rate limits

## Task

Write a \`chat()\` wrapper with: retries, timeout, logging of latency + tokens, streaming mode, and a typed return value.

## Production checklist

- Every call logs model, latency, input/output tokens, cost estimate, request ID
- Per-user and global rate limits; a hard budget cap
- Secrets from env/secret manager; PII policy decided before logging prompts

## Interview questions

- How do you make an LLM call reliable in production?
- 429 vs 529 vs timeout — how does your handling differ?
- How would you cut the cost of a chat feature by 50%?

## Common mistakes

- Retrying non-idempotent tool calls
- Logging full prompts that contain user PII
- No max_tokens, so one bad prompt returns 4k tokens of rambling`,
      },
      {
        id: 'prompt-engineering',
        title: 'Prompt Engineering (Versioned, Tested)',
        duration: '1-2 weeks',
        content: `> A prompt is code. Treat it like code: reviewed, versioned, tested.

## Learn

- Structure: role/context, task, constraints, format, examples
- **Few-shot examples**, chain-of-thought / "think step by step" and when reasoning models make it unnecessary
- Delimiters (XML tags) to separate instructions from untrusted data
- Be specific about the output contract; tell the model what to do when it does not know ("say UNKNOWN")
- **System vs user prompt**; keeping the system prompt stable improves caching
- **Prompt templates** with variables; store prompts in files, not strings scattered through code
- Prompt **versioning + A/B testing** against an eval set
- Prompt injection awareness (full treatment in Safety stage)

## Task

Take one task (e.g. classify support tickets). Write 3 prompt versions, score each on 30 labelled examples, keep the winner, and record why.

## Production checklist

- Prompts in version control with a changelog
- Regression eval runs before any prompt change ships
- Untrusted input always wrapped and labelled as data

## Interview questions

- How do you know a prompt change made things better?
- Few-shot vs fine-tuning — when each?
- How do you stop a model leaking its system prompt?

## Common mistakes

- Editing prompts live in production with no eval
- Vague asks ("make it good") and then blaming the model
- Stuffing every instruction into one giant prompt`,
      },
      {
        id: 'structured-outputs-tools',
        title: 'Structured Output & Tool / Function Calling',
        duration: '1-2 weeks',
        content: `> How an LLM stops being a chatbot and starts being a component in your software.

## Learn

- **Structured output**: JSON schema / Pydantic-typed responses; validate every response, repair or retry on failure
- **Tool calling**: you describe functions (name, description, JSON-schema params); the model returns a tool request; **your code runs it** and returns the result; the model continues
- Tool design: clear names/descriptions, narrow scope, idempotent where possible, helpful error messages the model can act on
- Parallel tool calls; forcing/forbidding tool use
- Classification, extraction, routing as the 80% use cases
- Never let the model construct raw SQL/shell without guardrails

## Task

Build an "order assistant" with tools \`get_order\`, \`cancel_order\`, \`search_faq\`. Cancel must require explicit user confirmation.

## Production checklist

- Schema validation on both tool inputs and model outputs
- Authorization checked in **your** tool code using the real user identity — never trust the model's claim about who the user is
- Tool timeouts, retries, and an audit log of every call

## Interview questions

- Who actually executes a tool call?
- How do you prevent a tool from being abused via prompt injection?
- How do you handle malformed JSON from the model?

## Common mistakes

- Tools that take free-form strings where an enum would do
- Returning huge tool results straight back into the context
- Giving the agent a powerful tool with no authorization layer`,
      },
      {
        id: 'context-engineering',
        title: 'Context Engineering, Memory & Conversation State',
        duration: '1 week',
        content: `> What goes into the context window — and what stays out — decides quality, latency and cost.

## Learn

- Context budget: system prompt, tools, history, retrieved docs, user input, room for the answer
- Conversation memory strategies: sliding window, **summarization**, retrieval of past turns, structured "facts about the user"
- **Prompt caching**: keep stable content at the front, volatile content at the end
- Compaction and trimming tool outputs; progressive disclosure (fetch details only when needed)
- Short-term (this chat) vs long-term (across sessions) memory; where to store it; consent and deletion
- Ordering effects: instructions at the end/start, "lost in the middle"

## Production checklist

- Token count measured per request and alerted on growth
- Memory has an owner, a retention policy and a delete path (privacy)
- Summaries tested for losing critical facts

## Interview questions

- Design memory for a chatbot that talks to a user for months
- How do you keep cost flat as a conversation gets long?

## Common mistakes

- Sending the whole history forever
- Storing user data in memory with no deletion story`,
      },
      {
        id: 'multimodal',
        title: 'Multimodal: Vision, Audio & Documents',
        duration: '1 week',
        content: `> Images, PDFs, voice — the same API shape with new failure modes.

## Learn

- Sending images/PDFs to a model; resolution vs token cost
- OCR vs vision-LLM for documents; layout-aware extraction (tables, forms)
- Speech-to-text and text-to-speech; **voice agents** and latency budgets (every hop adds ~hundreds of ms)
- Image generation basics and moderation
- Embeddings for images/audio (CLIP-style) for search

## Task

Extract fields from 20 invoice PDFs into a typed schema and measure field-level accuracy.

## Production checklist

- Field-level accuracy tracked, with human review for low confidence
- Files virus-scanned, size-limited, stored in object storage not the DB
- PII in images handled (redaction, retention)

## Interview questions

- OCR + LLM vs a vision model — trade-offs?
- Design a voice assistant and list the latency budget per step

## Common mistakes

- Sending full-resolution images when a downscale is enough
- Trusting extracted numbers without validation`,
      },
      {
        id: 'model-selection-cost',
        title: 'Model Selection, Routing & Cost Control',
        duration: '1 week',
        content: `> There is no "best model" — only the cheapest one that passes your eval.

## Learn

- Model tiers: small/fast, mid, large/reasoning; open vs closed weights; context size; modality; latency; price per million tokens (look it up — it changes)
- **Routing**: send easy requests to a small model, hard ones to a large one; cascades with a confidence check
- Cost levers: shorter prompts, **prompt caching**, batch API for offline work, smaller output limits, caching identical requests, distillation
- Latency levers: streaming, smaller model, parallel calls, speculative approaches, edge caching
- Vendor risk: abstraction layer, fallbacks, no hard dependency on one model's quirks
- Data residency, compliance (SOC2, HIPAA, GDPR) when picking a provider

## Production checklist

- A dashboard of cost per feature/user/day with alerts
- Model choice justified by eval numbers, not vibes
- A tested fallback path

## Interview questions

- How would you reduce LLM cost 10× without hurting quality?
- Open-weights vs API — when do you self-host?

## Common mistakes

- Using the biggest model for classification
- Switching models without re-running evals`,
      },
    ],
  },
  {
    id: 'ai-rag',
    title: 'Stage 4 — RAG: Your Data + LLMs',
    phases: [
      {
        id: 'embeddings-vector-db',
        title: 'Embeddings & Vector Databases',
        duration: '1 week',
        content: `> Turn text into vectors so "similar meaning" becomes "nearby in space".

## Learn

- What an **embedding** is; embedding models vs chat models; dimensions; multilingual models
- Similarity: cosine, dot product, Euclidean; normalization
- **Approximate nearest neighbour** indexes: HNSW, IVF, product quantization — recall vs speed vs memory
- Vector stores: pgvector (Postgres), Qdrant, Pinecone, Weaviate, Chroma, OpenSearch/Elasticsearch — pick by scale, filtering needs and ops burden
- **Metadata filtering** (tenant, date, permissions) alongside vector search
- Re-embedding when you change the model — plan for versioned indexes

## Task

Embed 1,000 documents, store them in pgvector, and write a search function with a metadata filter. Test with 20 queries and record which fail.

## Production checklist

- Index version stored with every vector; zero-downtime re-index plan
- Permissions enforced **in the query filter**, not after retrieval
- Embedding calls batched, retried, cached

## Interview questions

- HNSW vs brute-force — when is exact search fine?
- How do you handle updated and deleted documents?
- How do you do multi-tenant isolation in a vector DB?

## Common mistakes

- Mixing embeddings from different models in one index
- Filtering by permission after top-k (leaks data and returns too few results)`,
      },
      {
        id: 'rag-pipeline-chunking',
        title: 'The RAG Pipeline: Ingestion & Chunking',
        duration: '1-2 weeks',
        content: `> Most RAG quality problems are ingestion problems.

## The pipeline

\`\`\`flow
Load documents
Clean + parse
Chunk
Embed + index (with metadata)
Query
Retrieve
Rerank
Build prompt with sources
Generate + cite
\`\`\`

## Learn

- Parsing PDFs/HTML/Docs/tables well — garbage in, garbage out
- **Chunking**: fixed size + overlap, by headings/sections, semantic, parent-child (retrieve small, feed big)
- Chunk size trade-off: too small loses context, too big dilutes relevance
- Attach metadata: source, title, section, date, ACL, version
- Incremental ingestion, change detection, deduplication
- **Citations** — return which chunks the answer came from

## Task

Build a Q&A bot over your own notes/PDFs with citations. Try 3 chunk sizes and compare on 25 questions.

## Production checklist

- Ingestion is a repeatable, idempotent job with logs and failure queue
- Every answer shows its sources; "I don't know" when retrieval is weak
- PII and secrets scrubbed at ingestion

## Interview questions

- How do you pick chunk size?
- How do you keep the index in sync with source documents?

## Common mistakes

- Chunking by raw characters mid-sentence / mid-table
- No metadata, so you cannot filter or cite`,
      },
      {
        id: 'retrieval-hybrid-rerank',
        title: 'Retrieval: Hybrid Search, Query Rewriting & Reranking',
        duration: '1-2 weeks',
        content: `> Getting the right 5 chunks into the prompt is 80% of RAG.

## Learn

- **Hybrid search**: dense vectors + BM25/keyword, merged with reciprocal rank fusion — exact terms (IDs, names) need keyword search
- **Query rewriting / expansion**, HyDE, multi-query, decomposition of multi-hop questions
- **Rerankers** (cross-encoders): retrieve 50, rerank to 5
- Metadata filters, recency boosts, diversity (MMR)
- Contextual retrieval: add document-level context to each chunk before embedding
- When to skip retrieval entirely (the answer fits in context, or the question needs SQL)

## Production checklist

- Retrieval measured separately from generation: recall@k, MRR
- Latency budget: embed + search + rerank + generate
- Fallback when retrieval is empty or low-confidence

## Interview questions

- Why is pure vector search not enough?
- How would you debug "the answer is in the docs but the bot missed it"?

## Common mistakes

- Increasing top-k to "fix" bad retrieval (more noise, more cost)
- Evaluating only the final answer, never the retrieved chunks`,
      },
      {
        id: 'rag-advanced',
        title: 'Advanced RAG: Agentic RAG, GraphRAG & Freshness',
        duration: '1-2 weeks',
        content: `> Patterns for when naive RAG hits its ceiling.

## Learn

- **Agentic RAG**: the model decides when/what to retrieve, can retry with new queries, and combine tools (SQL + docs + web)
- **GraphRAG / knowledge graphs** for relationship-heavy questions
- Text-to-SQL for structured data; routing between SQL, docs and APIs
- Long-context vs RAG: when stuffing 200 pages beats retrieval, and when it does not (cost, latency, accuracy)
- Freshness: streaming updates, TTL, versioned documents
- Multi-tenant and per-user permissioned retrieval
- Handling conflicting sources and stale answers

## Production checklist

- A tested rule for "retrieve vs answer from context vs ask a clarifying question"
- SQL tools read-only, row-limited, schema-restricted
- Source-of-truth and conflict policy documented

## Interview questions

- Design RAG for a company wiki with per-team permissions
- RAG vs fine-tuning vs long context — pick for a legal-research product

## Common mistakes

- Reaching for GraphRAG before measuring that vanilla hybrid RAG fails
- Letting text-to-SQL run write queries`,
      },
    ],
  },
  {
    id: 'ai-agents',
    title: 'Stage 5 — Agents, Workflows & MCP',
    phases: [
      {
        id: 'agent-loop-tools',
        title: 'Agent Fundamentals: The Loop & Tools',
        duration: '1-2 weeks',
        content: `> An agent is an LLM in a loop that can call tools until the task is done.

\`\`\`flow
Goal
Model decides next step
Call tool
Observe result
Done? If not, loop
Final answer
\`\`\`

## Learn

- **Workflow vs agent**: a fixed sequence of LLM calls (workflow) is more reliable than an open-ended agent; use agents only when the path cannot be predetermined
- Patterns: prompt chaining, routing, parallelization, orchestrator–workers, evaluator–optimizer
- Stop conditions, max steps, token/cost budgets, timeouts
- Tool design for agents (clear descriptions, small outputs, good errors)
- Plain SDK loop first; frameworks (LangGraph, OpenAI Agents SDK, Claude Agent SDK, etc.) only after you understand the loop

## Task

Build a research agent with \`search_web\` and \`read_page\` tools, a step limit, and a trace you can print.

## Production checklist

- Hard limits on steps, cost and wall-clock time
- Every step traced and replayable
- Side-effecting tools gated (confirmation, dry-run, undo)

## Interview questions

- Agent vs workflow — how do you choose?
- How do you stop an agent stuck in a loop?

## Common mistakes

- Giving an agent 30 tools at once
- No budget, so one confused run costs real money`,
      },
      {
        id: 'agent-patterns',
        title: 'Planning, Memory & Multi-Agent Systems',
        duration: '1-2 weeks',
        content: `> More moving parts, more failure modes — add them only when a single agent is measurably not enough.

## Learn

- Planning: plan-then-execute, re-planning on failure, todo lists as state
- Memory: scratchpad, long-term store, retrieval of past runs
- **Multi-agent**: specialist agents, supervisor/orchestrator, handoffs; parallel sub-agents for independent research
- Context isolation: give sub-agents only what they need, return summaries not transcripts
- Durable execution: resume a long run after crash (queues, state machine, checkpoints)
- Agent UX: show progress, allow interrupt and steer

## Production checklist

- State persisted so runs survive deploys and crashes
- Sub-agent failures do not crash the parent
- Cost attribution per run and per sub-agent

## Interview questions

- When is multi-agent worse than one good agent?
- How would you make a 20-minute agent run resumable?

## Common mistakes

- Multi-agent theatre: five agents passing text when a function would do
- Sharing the full context with every sub-agent`,
      },
      {
        id: 'mcp',
        title: 'Model Context Protocol (MCP) & Tool Ecosystems',
        duration: '1 week',
        content: `> A standard way to plug tools, data and prompts into any AI client.

## Learn

- MCP concepts: **servers** (expose tools, resources, prompts) and **clients/hosts** (the AI app); transports (stdio for local, HTTP for remote)
- Building a small MCP server (e.g. wrap your database or internal API)
- Auth for remote servers (OAuth), scoping, per-user permissions
- Security: a connected server is a prompt-injection surface — treat tool descriptions and results as untrusted
- When to use MCP vs a plain function tool: reuse across clients vs one-off integration

## Task

Write an MCP server exposing two read-only tools over a local SQLite file and connect it to a desktop AI client.

## Production checklist

- Least-privilege tokens; read-only by default
- Allow-list of servers; review what each can do
- Audit log of tool calls

## Interview questions

- What problem does MCP solve compared with ad-hoc function calling?
- How can an MCP server be used to attack an agent?

## Common mistakes

- Installing random community servers with broad access
- One server exposing everything including destructive tools`,
      },
      {
        id: 'agent-reliability-hitl',
        title: 'Agent Reliability, Human-in-the-Loop & Approvals',
        duration: '1 week',
        content: `> Autonomy is a dial. Production turns it down where mistakes are costly.

## Learn

- Approval gates for irreversible actions (payments, deletes, emails)
- Confidence thresholds and escalation to a human queue
- **Idempotency keys** on every side-effecting tool so retries are safe
- Sandboxing code execution (containers, no network by default)
- Evaluating agents by **trajectory** (did it take sane steps?) and **outcome**
- Failure taxonomy: wrong tool, wrong args, infinite loop, premature stop, hallucinated success
- Rollback and compensating actions

## Production checklist

- Irreversible tool = approval or undo path
- Agent runs are replayable from logs
- Kill switch and per-tenant disable flag

## Interview questions

- How do you let an agent send emails safely?
- How do you test an agent that is non-deterministic?

## Common mistakes

- "The prompt says don't delete" as the only safeguard
- Declaring success from the model's own claim without verifying`,
      },
    ],
  },
  {
    id: 'ai-quality',
    title: 'Stage 6 — Evals, Observability & Safety',
    phases: [
      {
        id: 'evals',
        title: 'Evals: How You Know It Works',
        duration: '2 weeks',
        content: `> Evals are to AI what tests are to software — and most teams skip them.

## Learn

- Build a **golden dataset**: 50–200 real, representative cases with expected outcomes; grow it from production failures
- Metrics: exact match, schema validity, classification F1, retrieval recall@k, faithfulness/groundedness, answer relevance, tone, refusal rate
- **LLM-as-judge**: rubric-based grading; calibrate against human labels; beware self-preference and position bias
- Pairwise comparison for subjective quality
- **Offline evals** (CI on every prompt/model change) vs **online evals** (A/B, thumbs, implicit signals)
- Evaluating RAG in two parts: retrieval and generation; evaluating agents: trajectory + outcome
- Statistical honesty: sample size, variance across runs, regression thresholds

## Task

Create a 60-case eval for one of your earlier projects and wire it into CI so a prompt change that drops the score fails the build.

## Production checklist

- Eval set versioned and reviewed like code
- Every incident adds a new eval case
- Judge prompts themselves tested

## Interview questions

- How would you evaluate a customer-support bot before launch?
- Limits of LLM-as-judge?
- How big should an eval set be?

## Common mistakes

- Evaluating on the same examples used to write the prompt
- One run, no variance estimate
- Vibes-only "it feels better"`,
      },
      {
        id: 'llm-observability',
        title: 'LLM Observability & AI Ops',
        duration: '1 week',
        content: `> You cannot debug a non-deterministic system without traces.

## Learn

- **Tracing** every request: prompt version, model, params, retrieved chunks, tool calls, outputs, latency, tokens, cost (OpenTelemetry-style spans; tools like Langfuse, LangSmith, Helicone, or your own tables)
- Metrics: latency (TTFT and total), error/refusal rate, cost per request, cache hit rate, eval scores over time
- Feedback capture: thumbs, edits, escalations → feed the eval set
- Drift: user behaviour and provider model updates change quality silently — pin model versions where possible and re-run evals on schedule
- Alerting on cost spikes, latency, and quality regressions
- Privacy: redact PII in traces, retention limits

## Production checklist

- Any bad answer can be traced back to exact prompt + context + model
- Dashboards: cost/day, p95 latency, failure rate, eval trend
- Budget alarms with automatic throttling

## Interview questions

- What would you log for every LLM call?
- A user says "the bot got worse this week" — how do you investigate?

## Common mistakes

- Logging nothing, then guessing
- Logging everything including secrets and PII`,
      },
      {
        id: 'ai-safety-security',
        title: 'AI Safety, Prompt Injection & Privacy',
        duration: '1-2 weeks',
        content: `> Anything the model reads can be an instruction. Design as if it will be attacked.

## Learn

- **Prompt injection**: direct (user) and **indirect** (hidden text in web pages, emails, PDFs, tool results)
- The "lethal trifecta": private data + untrusted content + ability to exfiltrate (links, images, tool calls) — never combine all three without controls
- Defences: least privilege tools, separate trusted/untrusted context, output filtering, no auto-rendering of model-generated URLs/images to unknown hosts, human approval for risky actions
- **Data leakage**: system-prompt extraction, cross-tenant retrieval leaks, training-data exposure
- PII handling: detection, redaction, retention, consent, regional rules (GDPR, DPDP)
- Content moderation, jailbreak testing, **red-teaming** with a regression suite
- Hallucination handling: grounding, citations, "I don't know", verification steps
- Abuse: rate limits, spend caps, bot detection on public endpoints
- Responsible-use basics: bias testing, transparency, human oversight where decisions affect people

## Production checklist

- Threat model written for each tool-enabled feature
- Injection test cases in the eval suite and in CI
- Authorization always enforced in code, never by prompt

## Interview questions

- Explain indirect prompt injection with an example
- How do you secure an email-reading agent?
- Is a system prompt a security boundary?

## Common mistakes

- "We told the model to ignore malicious instructions"
- Rendering model-produced markdown images from arbitrary URLs`,
      },
    ],
  },
  {
    id: 'ai-models-serving',
    title: 'Stage 7 — Customizing, Running & Serving Models',
    phases: [
      {
        id: 'fine-tuning',
        title: 'Fine-Tuning: When, How & Data',
        duration: '1-2 weeks',
        content: `> Fine-tuning is the last tool, not the first. Prompting + RAG + evals solve most problems.

## Learn

- When it helps: consistent style/format, domain behaviour that prompting cannot fix, cutting cost/latency by distilling into a smaller model
- When it does NOT: adding fresh knowledge (use RAG), fixing a bad prompt, tiny or noisy data
- Methods: **SFT**, **LoRA / QLoRA** (train small adapters, cheap), **preference tuning (DPO)**, distillation
- Data is everything: 500–5,000 high-quality examples beat 50,000 sloppy ones; hold out a test set; dedupe; check for leakage
- Tooling: Hugging Face Transformers/PEFT/TRL, Unsloth, managed fine-tuning APIs
- Evaluate against the **prompted baseline** — if you cannot beat it, do not ship it
- Catastrophic forgetting and regression checks

## Production checklist

- Dataset versioned, labelled by owner, privacy-reviewed
- Fine-tuned model has its own eval gate and rollback
- Retraining trigger defined (drift, new data)

## Interview questions

- RAG vs fine-tuning — decide for a support bot that needs company policy + a brand voice
- What is LoRA and why is it cheap?

## Common mistakes

- Fine-tuning to inject facts that change weekly
- Training on model-generated data without checking quality`,
      },
      {
        id: 'open-models-local',
        title: 'Open-Weights Models, Quantization & Local Inference',
        duration: '1 week',
        content: `> Run models yourself: privacy, cost control, offline use, customization.

## Learn

- Open-weights families and licences (read the licence — "open" varies); Hugging Face Hub, model cards
- **Quantization** (8-bit, 4-bit, GGUF/AWQ/GPTQ): smaller memory, small quality loss
- Local runners: Ollama, llama.cpp, LM Studio, MLX on Apple Silicon
- Hardware reality: VRAM/RAM needed ≈ parameters × bytes per weight + KV cache
- Embedding models and rerankers you can self-host
- When self-hosting wins (data cannot leave, huge steady volume) vs when APIs win (spiky load, best quality, no ops)

## Task

Run a small open model locally, point your Stage 3 \`chat()\` wrapper at it through an OpenAI-compatible endpoint, and compare answers and latency to the hosted model on 20 prompts.

## Production checklist

- Licence and data-use reviewed
- Quality measured on your eval, not on public leaderboards alone
- Plan for security patches and model upgrades

## Interview questions

- How much memory does a 7B model need at 4-bit?
- Why can quantization hurt some tasks more than others?

## Common mistakes

- Choosing a model by leaderboard rank, not by your own eval
- Ignoring the cost of the GPUs sitting idle`,
      },
      {
        id: 'inference-serving',
        title: 'Inference Serving: Latency, Throughput & GPUs',
        duration: '1-2 weeks',
        content: `> What happens behind the API — the systems problems of serving LLMs.

## Learn

- Two phases: **prefill** (process the prompt, compute-bound) and **decode** (one token at a time, memory-bandwidth-bound)
- Metrics: **TTFT** (time to first token), **TPOT**/inter-token latency, throughput (tokens/sec), p95/p99, cost per million tokens
- **KV cache** and its memory growth with context × concurrency; **PagedAttention**
- **Continuous batching**, speculative decoding, prefix caching, quantization, tensor/pipeline parallelism
- Serving stacks: vLLM, TGI, TensorRT-LLM, SGLang; managed endpoints
- Autoscaling on queue depth / GPU utilization; cold start of big weights; multi-model hosting
- Streaming to clients; backpressure and cancellation

## Production checklist

- Load test with realistic prompt/response length distributions
- Autoscaling and admission control so overload degrades gracefully
- GPU utilization, queue time, TTFT dashboards

## Interview questions

- Why is decode memory-bound?
- Explain continuous batching and why it beats static batching
- How would you serve 1,000 concurrent chat users?

## Common mistakes

- Benchmarking with tiny prompts, deploying with 8k-token ones
- Scaling on CPU metrics for a GPU service`,
      },
    ],
  },
  {
    id: 'ai-production',
    title: 'Stage 8 — Production AI Systems',
    phases: [
      {
        id: 'ai-architecture',
        title: 'AI Application Architecture',
        duration: '1-2 weeks',
        content: `> Where the LLM sits in a real system.

\`\`\`flow
Client
API gateway (auth, rate limit)
AI service (orchestration)
Retrieval + tools + cache
Model gateway (routing, fallback, budget)
LLM providers / self-hosted
Queue + workers (long jobs)
Traces, evals, cost
\`\`\`

## Learn

- **Model gateway**: one place for keys, routing, retries, caching, budgets, logging, PII filters
- **Sync vs async**: short chat streams; long jobs go through a queue with status polling/WebSocket/webhook
- Caching layers: exact-match, semantic cache, prompt cache, retrieval cache
- Rate limiting and quotas per user/tenant; cost-aware throttling
- Idempotent job design; retries with DLQ
- Multi-tenancy and data isolation
- Python (FastAPI) AI service behind a Node/Next.js backend: contracts, timeouts, streaming passthrough
- Deployment: Docker, CI/CD, secrets, blue-green for prompts and models; feature flags for model rollouts

## Production checklist

- Each component has a timeout and a fallback
- Kill switch per feature and per model
- Cost and latency SLOs defined and alerted

## Interview questions

- Draw the architecture for a document-Q&A SaaS used by 1,000 companies
- Where would you put caching and what are the correctness risks?

## Common mistakes

- Calling the provider directly from every service
- Long-running generation inside a request that has a 30-second gateway timeout`,
      },
      {
        id: 'ai-system-design',
        title: 'AI System Design Interviews',
        duration: '2-3 weeks',
        content: `> A growing share of senior interviews. Same framework as classic system design plus AI-specific trade-offs.

## Framework (extend the classic one)

1. Clarify the product, users, scale, latency and **quality bar**
2. Define success metrics (task success, groundedness, CSAT, cost per task)
3. High-level pipeline: data → retrieval/tools → model → post-processing → UI
4. Pick model strategy (API vs open, routing, fine-tune?)
5. Evaluation plan (offline + online) and feedback loop
6. Safety, privacy, abuse
7. Scale: caching, batching, queues, GPUs, cost
8. Failure modes and degradation

## Practise these designs

- Enterprise RAG chatbot with permissions
- Customer-support copilot / ticket triage
- Code assistant / code review bot
- AI search (Perplexity-style) with citations
- Voice assistant with sub-second latency
- Recommendation / feed ranking with an LLM re-ranker
- Document-processing pipeline (invoices, contracts)
- LLM gateway / multi-tenant AI platform
- Agent platform that runs long tasks with approvals
- Content moderation at scale

Each of these is listed with the companies that ask them in the **System Design Roadmap → AI** tab.

## Interview questions

- Design ChatGPT-like chat for 10M users
- How do you evaluate before and after launch?
- How do you control the cost as usage grows 100×?

## Common mistakes

- Only drawing boxes with "LLM" in the middle — never discussing evals, cost or failure
- Ignoring data ownership and permissions`,
      },
      {
        id: 'mlops-llmops',
        title: 'MLOps / LLMOps: CI/CD for Models and Prompts',
        duration: '1 week',
        content: `> Shipping and operating AI changes safely and repeatably.

## Learn

- Versioning: data, prompts, model, config, eval sets — everything that changes behaviour
- CI: run evals on PRs; fail on regression; cost estimate in the PR
- CD: canary/shadow traffic for new models or prompts; instant rollback
- Experiment tracking (MLflow, Weights & Biases) for training work
- Feature stores and training/serving parity for predictive ML
- Monitoring drift, data quality, and model decay; scheduled retraining
- Model registry, approvals, audit trail (important in regulated domains)
- Infra: Docker, Kubernetes, GPU scheduling, IaC

## Production checklist

- A prompt change goes through review + eval + canary like any deploy
- Reproduce any past answer from stored versions

## Interview questions

- How do you roll out a new model version safely?
- What is training/serving skew and how do you prevent it?

## Common mistakes

- Prompts living only in a database admin panel with no history
- No rollback path`,
      },
      {
        id: 'ai-product-ux',
        title: 'AI Product & UX Patterns',
        duration: '1 week',
        content: `> Good AI products are 50% interface design.

## Learn

- Streaming text, skeletons, progress for long agent tasks, cancel and retry
- Showing sources/citations, confidence, and "why this answer"
- Editing, regenerating, undo; human-in-the-loop review screens
- Feedback widgets that capture useful signal (thumbs + reason + correction)
- Handling failure gracefully: partial results, fallbacks, honest errors
- Latency perception: optimistic UI, early partial output
- Trust and expectation setting; accessibility; safe defaults for non-technical users
- Frontend: Next.js streaming routes, React state for chat, markdown rendering safely (sanitize!)

## Production checklist

- Every AI output is labelled, editable and reportable
- Rendering is sanitized (no raw HTML/URLs from the model)

## Interview questions

- Design the UX for an AI feature that is wrong 10% of the time
- Streaming chat UI: state management, scroll behaviour, abort handling

## Common mistakes

- Hiding uncertainty, then losing trust after one wrong answer
- Autoplaying actions the user did not review`,
      },
    ],
  },
  {
    id: 'ai-career',
    title: 'Stage 9 — Projects, Interview Prep & Timeline',
    phases: [
      {
        id: 'ai-projects',
        title: 'Five Portfolio Projects (Rising Difficulty)',
        duration: 'Throughout',
        content: `> Projects are the proof. Each one ships with a README, a live demo, an eval report and a cost note.

## 1. Prompted tool — "Smart Summarizer / Classifier" (Stage 3)

Typed output, retries, streaming, token/cost logging, 50-case eval.

## 2. RAG app — "Chat With My Docs" (Stage 4)

Upload PDFs, hybrid retrieval + reranker, citations, permissions per user, retrieval metrics, ingestion job.

## 3. Agent — "AI Business Assistant" (Stage 5)

Tools over a real DB/API (orders, tickets), approvals for risky actions, step/cost budgets, full traces, MCP server.

## 4. Eval & observability harness (Stage 6)

CI that blocks regressions, LLM-judge calibrated on human labels, dashboard of cost/latency/quality, injection test suite.

## 5. Capstone — "AI Platform" (Stages 7–8)

Model gateway with routing + fallback + budgets, a self-hosted open model behind it, semantic cache, async jobs, multi-tenant, deployed with CI/CD — plus a written design doc as if for an interview.

## What reviewers look at

- A measured quality number, not "it works"
- Cost per request and how you reduced it
- Failure handling and security notes
- Clean code, tests, and a demo video`,
      },
      {
        id: 'ai-interview-prep',
        title: 'Interview Preparation for AI Engineer Roles',
        duration: 'Ongoing',
        content: `> What loops usually test, and how to prepare for each part.

## Typical rounds

1. **Coding** — Python/data structures; sometimes build a small LLM feature live (call API, parse JSON, handle errors)
2. **ML/LLM fundamentals** — tokens, attention, embeddings, sampling, overfitting, metrics
3. **Applied LLM** — prompting, structured output, tools, RAG design, evals
4. **System design** — AI system design (Stage 8), plus classic backend design
5. **Behavioural** — ownership, ambiguity, a failure you debugged
6. **Take-home / project deep-dive** — be ready to explain every trade-off in your capstone

## Preparation plan

- Re-build a tiny RAG and a tiny agent from scratch on a whiteboard
- Memorise numbers you can reason with: tokens ≈ ¾ of a word, typical latency per step, cost per million tokens ranges (verify current ones)
- Practise explaining: "how do you know it works?" — answer with eval design every time
- Do 3 mock AI system designs out loud (see the System Design Roadmap → AI tab)

## Questions to be ready for

- Why did you pick this model, and how did you verify it?
- A model update made quality drop — what do you do?
- How do you handle hallucinations in a high-stakes domain?
- What would you NOT automate with an agent?

## Common mistakes

- Framework name-dropping without explaining what it hides
- No numbers: no accuracy, latency or cost figures for your own projects`,
      },
      {
        id: 'ai-timeline',
        title: 'Suggested 16-Week Timeline',
        duration: 'Plan',
        content: `> A pace for someone studying 2–3 hours on weekdays and more on weekends. Stretch it freely — order matters more than speed.

| Weeks | Focus | Output |
|---|---|---|
| 1 | Setup, landscape, Python | Env working, first API call, small CLI |
| 2 | Python for AI, FastAPI | Typed chat wrapper + tiny API |
| 3 | Maths + classical ML | Baseline vs boosted model on tabular data |
| 4 | Neural nets, transformers | Training loop + notes on attention |
| 5-6 | LLM apps: prompts, structured output, tools | Project 1 |
| 7-9 | RAG end to end | Project 2 with retrieval metrics |
| 10-11 | Agents, MCP, approvals | Project 3 |
| 12 | Evals + observability + safety | Project 4 |
| 13-14 | Fine-tuning, open models, serving | Local model behind your gateway |
| 15 | Production architecture + MLOps | Project 5 design doc |
| 16 | Interview prep, mock designs | 3 recorded mock interviews |

## Weekly rhythm

- Mon–Thu: learn one topic with the 10-point filter, code the task
- Fri: write the "when NOT to use it" and interview answers in your own words
- Weekend: project time + revise the week via the Quick Q&A and System Design pages

## Keep this alive

- Re-read the **Common mistakes** of each phase before the matching interview
- Update your eval set every time something breaks
- Models change monthly — spend an hour per week reading release notes and re-running your evals`,
      },
    ],
  },
];
