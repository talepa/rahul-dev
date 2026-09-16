// Single source of truth for all portfolio content.
// Everything here is sourced from the resume, GitHub READMEs, and the public GitHub profile.

export const profile = {
  name: "Rahul Talepa",
  first: "Rahul",
  last: "Talepa",
  role: "AI Engineer",
  location: "Mumbai, India",
  timezone: "Asia/Kolkata",
  email: "talepa.rahul6@gmail.com",
  github: "https://github.com/talepa",
  githubUser: "talepa",
  linkedin: "https://www.linkedin.com/in/rahultalepa",
  resume: "/resume.pdf",
  photo: "/rahul.jpg",
  tagline: "I build LLM systems that retrieve precisely, reason in the open, and only act when code says they may.",
  summary:
    "AI Engineer building production-grade LLM applications and RAG pipelines with LangChain and LangGraph. I work across semantic search, vector databases, embeddings, prompt engineering and tool calling. I've also built multimodal computer-vision search and multi-agent systems, and shipped them as scalable services on FastAPI and Docker.",
};

export const nav = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "stack", label: "Stack" },
  { id: "beyond", label: "Beyond" },
  { id: "contact", label: "Contact" },
];

export const stats = [
  { value: "Lakhs", label: "of records served by production RAG retrieval" },
  { value: "120+", label: "automated tests guarding an agentic finance workflow" },
  { value: "3", label: "LangGraph graphs orchestrating a multi-agent research desk" },
  { value: "8.33", label: "CGPA, B.Tech Computer Science" },
];

export const principles = [
  {
    k: "01",
    title: "LLMs recommend. Code decides.",
    body: "Models diagnose and propose; a deterministic policy layer approves, rejects or escalates before anything touches the real world.",
  },
  {
    k: "02",
    title: "Retrieval is the product.",
    body: "Hybrid search, metadata filtering and retrieval evaluation matter more than the prompt. Good answers start with the right chunk.",
  },
  {
    k: "03",
    title: "Every claim needs a citation.",
    body: "Citation validators reject invented references. If a source can't be traced, it doesn't reach the user.",
  },
  {
    k: "04",
    title: "Degrade gracefully.",
    body: "Swappable providers, automatic fallbacks and rule-based paths keep the system useful when an API key or a model doesn't cooperate.",
  },
];

export const experience = [
  {
    company: "Stuvio Digital",
    role: "Junior AI Engineer",
    period: "Feb 2026 — Present",
    location: "India",
    current: true,
    points: [
      "Engineered production-grade LLM applications and scalable RAG pipelines using LangChain, semantic search, vector databases, embeddings, prompt engineering and tool calling, delivering accurate retrieval across lakhs of records.",
      "Developed an AI-powered multimodal image search system using Transformer-based computer vision, vector similarity search, metadata filtering and retrieval optimization.",
      "Built automated data ingestion, preprocessing, metadata enrichment, indexing and REST API integration pipelines with Python, FastAPI and Docker.",
      "Collaborated with backend teams to deploy scalable AI services to production.",
    ],
    tags: ["LangChain", "RAG", "Vector DBs", "ViT", "FastAPI", "Docker"],
  },
];

export const education = {
  school: "D Y Patil University",
  degree: "B.Tech, Computer Science Engineering",
  period: "2021 — 2025",
  location: "Pune, India",
  cgpa: "8.33",
};

export type Flagship = {
  slug: string;
  index: string;
  name: string;
  kicker: string;
  summary: string;
  repo: string;
  highlights: string[];
  stack: string[];
  pipeline: { label: string; note: string; gate?: boolean }[];
  metric: { value: string; label: string };
};

export const flagships: Flagship[] = [
  {
    slug: "revenue-recovery",
    index: "01",
    name: "AI Revenue Recovery Agent",
    kicker: "Agentic B2B invoice recovery",
    summary:
      "An auditable agentic workflow that detects overdue invoices, scores recovery probability, and lets an LLM recommend the next move, which a deterministic policy engine must approve before any action runs.",
    repo: "https://github.com/talepa/AI-Revenue-Recovery-Agent",
    highlights: [
      "LangGraph + Gemini recommend actions; a policy engine enforces reminder caps, cooldowns and forced escalation",
      "FastAPI + PostgreSQL backend with an XGBoost risk-scoring model, Kafka event streaming and Redis idempotency locks",
      "Gemini, Sarvam speech-to-text/text-to-speech and Resend behind swappable providers with automatic fallback",
      "120+ automated tests, CI/CD on GitHub Actions and a Next.js + TypeScript dashboard for live case monitoring",
    ],
    stack: ["LangGraph", "Gemini", "FastAPI", "PostgreSQL", "XGBoost", "Kafka", "Redis", "Next.js"],
    pipeline: [
      { label: "Detect", note: "overdue invoice → case" },
      { label: "Score", note: "XGBoost risk" },
      { label: "Diagnose", note: "LLM, structured output" },
      { label: "Policy gate", note: "deterministic rules", gate: true },
      { label: "Execute", note: "email · link · escalate" },
      { label: "Audit", note: "every decision logged" },
    ],
    metric: { value: "120+", label: "automated tests" },
  },
  {
    slug: "atelier",
    index: "02",
    name: "Atelier",
    kicker: "Multi-agent research intelligence",
    summary:
      "A research desk where a Director agent decomposes technical questions into investigation plans, specialists gather evidence in parallel, and a synthesizer returns a cited report that won't pass hallucinated references.",
    repo: "https://github.com/talepa/Research-Intelligence-Platform",
    highlights: [
      "LangGraph pipeline: Director → Specialists → Evidence Analyst → Synthesizer",
      "Human-in-the-loop via interrupt(), with session state checkpointed in PostgreSQL",
      "Real-time SSE streaming of phase progress to a Next.js frontend",
      "Gemini structured output with deterministic tool budgets by depth, plus source filtering and citation validation",
    ],
    stack: ["LangGraph", "Gemini", "FastAPI", "PostgreSQL", "SSE", "MCP", "Next.js"],
    pipeline: [
      { label: "Director", note: "question → plan" },
      { label: "Specialists", note: "web · papers · repos" },
      { label: "Evidence", note: "claims, conflicts, gaps" },
      { label: "Human check", note: "interrupt() + resume", gate: true },
      { label: "Synthesize", note: "cited report" },
      { label: "Validate", note: "reject invented IDs" },
    ],
    metric: { value: "3", label: "checkpointed graphs" },
  },
  {
    slug: "scripture-rag",
    index: "03",
    name: "Grounded Scripture Assistant",
    kicker: "Hallucination-resistant RAG",
    summary:
      "A Bible-grounded chat assistant that retrieves verses before answering, validates every reference, detects famous misattributions and returns citations with a confidence level.",
    repo: "https://github.com/talepa/Christianity-focused-AI-assistant",
    highlights: [
      "ChromaDB + sentence-transformer embeddings over the World English Bible",
      "Citation and verse-reference validation, plus misattribution detection for fake quotes",
      "Regex moderation, per-session rate limiting and confidence scoring on every answer",
      "Deterministic evaluation suites for edge cases, hallucinations and adversarial prompts",
    ],
    stack: ["Gemini 2.5 Flash", "ChromaDB", "Sentence Transformers", "FastAPI", "Next.js"],
    pipeline: [
      { label: "Moderate", note: "safety rules" },
      { label: "Retrieve", note: "Chroma top-k" },
      { label: "Generate", note: "Gemini, JSON schema" },
      { label: "Validate", note: "refs + misattributions", gate: true },
      { label: "Respond", note: "citations + confidence" },
    ],
    metric: { value: "3", label: "evaluation suites" },
  },
];

export const lab = [
  {
    name: "Dynamic Bottleneck Detection",
    area: "Operations ML",
    detail: "Predicts the bottleneck stage in a 6-stage fulfilment pipeline from 150+ engineered features.",
    result: "88% acc · +27.6% vs rules",
    repo: "https://github.com/talepa/Dynamic-Bottleneck-Detection-and-Prediction-in-Multi-Stage-Systems",
    year: "2026",
  },
  {
    name: "Ghost Order Detector",
    area: "Risk prediction",
    detail: "Flags food-delivery orders likely to be cancelled before they're cooked, from distance, traffic and timing signals.",
    result: "ROC-AUC 0.83",
    repo: "https://github.com/talepa/The-Ghost-Order-Detection",
    year: "2026",
  },
  {
    name: "Medical Insurance Cost Prediction",
    area: "Regression",
    detail: "Models how age, BMI, smoking and region drive insurance charges.",
    result: "Linear regression · EDA",
    repo: "https://github.com/talepa/Medical-Insurance-Cost-Prediction",
    year: "2025",
  },
  {
    name: "Employee Churn",
    area: "Classification",
    detail: "Predicts attrition with decision trees and random forests.",
    result: "Tree ensembles",
    repo: "https://github.com/talepa/Predict-Employee-Churn-with-Decision-Trees-and-Random-Forests",
    year: "2025",
  },
  {
    name: "SMS Spam Classifier",
    area: "NLP",
    detail: "End-to-end text classification pipeline for spam detection.",
    result: "NLP pipeline",
    repo: "https://github.com/talepa/sms-spam-classifier",
    year: "2025",
  },
  {
    name: "Crime Against Women in India, 2001–2021",
    area: "Analytics",
    detail: "State-wise analysis of two decades of crime data to surface regional trends and disparities.",
    result: "20-year study",
    repo: "https://github.com/talepa/crime_against_women_in_india_analysis_2001_2021",
    year: "2024",
  },
];

export const stack = [
  {
    group: "Generative AI & Agents",
    blurb: "Orchestration, reasoning and control",
    items: ["LangChain", "LangGraph", "AI Agents", "Multi-agent systems", "RAG", "Prompt engineering", "Tool / function calling", "Structured output", "MCP", "Human-in-the-loop"],
  },
  {
    group: "Retrieval systems",
    blurb: "Getting the right context, fast",
    items: ["Semantic search", "Vector databases", "Embedding models", "Hybrid search", "Metadata filtering", "Retrieval evaluation", "Document processing", "ChromaDB"],
  },
  {
    group: "Backend & infra",
    blurb: "Shipping it as a service",
    items: ["Python", "FastAPI", "REST APIs", "SSE", "PostgreSQL", "MongoDB", "Redis", "Kafka", "Docker", "GitHub Actions"],
  },
  {
    group: "ML & vision",
    blurb: "Models beneath the agents",
    items: ["Transformers", "Vision Transformers", "Image similarity", "XGBoost", "scikit-learn", "Random Forest", "Feature engineering"],
  },
  {
    group: "Languages & tools",
    blurb: "Daily drivers",
    items: ["Python", "SQL", "TypeScript", "JavaScript", "Next.js", "Git", "Linux", "Jupyter"],
  },
];

export const marquee = [
  "LangChain",
  "LangGraph",
  "RAG",
  "AI Agents",
  "Agentic AI",
  "Prompt Engineering",
  "Tool Calling",
  "Structured Output",
  "Semantic Search",
  "Vector Databases",
  "Embedding Models",
  "Hybrid Search",
  "Metadata Filtering",
  "Retrieval Evaluation",
  "Document Processing",
  "Python",
  "FastAPI",
  "REST APIs",
  "SQL",
  "PostgreSQL",
  "MongoDB",
  "Transformers",
  "Vision Transformers",
  "Image Search",
  "Similarity Matching",
  "Docker",
  "Git",
  "Linux",
];

/** Publication, certification and the book — the "beyond the code" section. */
export const credentials = {
  paper: {
    kicker: "Peer-reviewed publication",
    title: "AI Driven Drugs Traceability System",
    summary:
      "A published paper on applying AI to pharmaceutical traceability — authenticating medicine and tracking it across the supply chain so counterfeits can be caught before they reach a patient.",
    rows: [
      { k: "Journal", v: "TIJER — International Research Journal" },
      { k: "Issue", v: "Volume 12, Issue 5 · May 2025" },
      { k: "Paper ID", v: "TIJER2505048" },
      { k: "Impact factor", v: "8.57 (Google Scholar)" },
    ],
    coAuthors: "Co-authors: Aniket Laxman Patil, Kunal Krishna Paste",
    paperUrl: "https://tijer.org/tijer/papers/TIJER2505048.pdf",
    certificate: "/certificate.pdf",
    post: "https://www.linkedin.com/posts/rahultalepa_research-paper-activity-7346519564106534912-zNsP",
  },
  badge: {
    kicker: "Certification",
    title: "Generative AI Applications Specialist",
    issuer: "Authorized by IBM",
    summary:
      "RAG with LangChain end to end: loading documents from varied sources, text-splitting strategies, configuring vector databases for embeddings, and building a QA bot on top of LLMs.",
    url: "https://www.credly.com/badges/6493c381-9b12-4dbc-82da-53e959965370/linked_in",
    image:
      "https://images.credly.com/size/340x340/images/cdb44549-e7b6-47e7-a21f-160cecf8f38f/Coursera_20Generative_20AI_20Applications_20Specialist.png",
    skills: ["RAG", "LangChain", "Vector databases", "Embeddings", "QA bots"],
  },
  book: {
    kicker: "Off the clock · my first book",
    title: "Subh Ratri",
    summary:
      "A collection of late-night poems and reflections in simple Hinglish — love, loss, and the people worth staying up for. Not engineering. Still the thing I'm proudest of shipping.",
    cover: "/subh-ratri-cover.jpg",
    store: "https://store.pothi.com/book/rahul-talepa-subh-ratri/",
    post: "https://www.linkedin.com/posts/rahultalepa_subh-ratri-pothicom-share-7485220827504959488-eAgn/",
  },
};
