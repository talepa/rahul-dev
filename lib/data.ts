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
  tagline: "I build AI assistants that find the right information, show where their answers come from, and only act when it's safe to.",
  summary:
    "I build AI products that businesses rely on: assistants that answer questions from a company's own data, search that finds the right document or image, and teams of AI agents that handle multi-step work. I take them from idea all the way to production.",
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
  { value: "Lakhs", label: "of records searched accurately by AI systems I built" },
  { value: "120+", label: "automated tests keeping an AI finance assistant reliable" },
  { value: "4", label: "AI agents working together in a research assistant I built" },
  { value: "8.33", label: "CGPA, B.Tech Computer Science" },
];

export const principles = [
  {
    k: "01",
    title: "AI suggests. Rules decide.",
    body: "The AI recommends what to do next. Clear, fixed rules check that recommendation before anything actually happens.",
  },
  {
    k: "02",
    title: "The right information comes first.",
    body: "A good answer depends on giving the AI the right facts, so most of my effort goes into search, not clever prompts.",
  },
  {
    k: "03",
    title: "Every answer shows its source.",
    body: "If the system can't point to where an answer came from, it doesn't show that answer.",
  },
  {
    k: "04",
    title: "Keep working when something fails.",
    body: "If one AI service goes down, a backup takes over, so the product keeps running.",
  },
];

export const experience = [
  {
    company: "Techmonk India",
    role: "AI Engineer",
    period: "Oct 2026 — Present",
    location: "India",
    current: true,
    points: [
      "Built AI agents with LangGraph and LangChain that personalise the customer experience: grouping customers, recommending their next steps, and writing campaign content.",
      "Built AI services with FastAPI that answer from company data (RAG with ChromaDB and MongoDB) and send messages across WhatsApp, Email and Instagram, with Redis-backed task queues.",
    ],
    tags: ["LangGraph", "LangChain", "RAG", "ChromaDB", "MongoDB", "Redis", "FastAPI"],
  },
  {
    company: "Stuvio Digital",
    role: "Junior AI Engineer",
    period: "Feb 2026 — Oct 2026",
    location: "India",
    current: false,
    points: [
      "Built AI systems that search through lakhs of records and return accurate answers, using LangChain, vector databases and RAG.",
      "Built an AI image search that finds visually similar images, using computer-vision models (Vision Transformers).",
      "Automated how data is collected, cleaned, organised and made available to other apps, using Python, FastAPI and Docker.",
      "Worked with the backend team to launch these AI services for real users.",
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
    kicker: "Gets unpaid invoices paid",
    summary:
      "An AI assistant that spots overdue invoices, works out which customers are likely to pay, and suggests the next step, such as a reminder or an escalation. Fixed business rules approve every step before it runs, so the AI can never spam a customer.",
    repo: "https://github.com/talepa/AI-Revenue-Recovery-Agent",
    highlights: [
      "Suggests the right follow-up for each overdue invoice",
      "Business rules limit reminders and decide when a person should step in",
      "Keeps a full record of every decision for review",
      "Backed by 120+ automated tests and a live dashboard",
    ],
    stack: ["LangGraph", "Gemini", "FastAPI", "PostgreSQL", "XGBoost", "Kafka", "Redis", "Next.js"],
    pipeline: [
      { label: "Spot", note: "finds an overdue invoice" },
      { label: "Score", note: "how likely they'll pay" },
      { label: "Suggest", note: "AI picks the next step" },
      { label: "Rule check", note: "business rules approve it", gate: true },
      { label: "Act", note: "reminder, link or escalate" },
      { label: "Record", note: "every decision is logged" },
    ],
    metric: { value: "120+", label: "automated tests" },
  },
  {
    slug: "atelier",
    index: "02",
    name: "Atelier",
    kicker: "AI research assistant",
    summary:
      "Ask a technical question and a team of AI agents plans the research, gathers sources from the web, papers and code, and writes a report where every claim links to its source.",
    repo: "https://github.com/talepa/Research-Intelligence-Platform",
    highlights: [
      "A lead agent turns your question into a research plan",
      "You can step in mid-research to approve or redirect it",
      "Progress shows live while the agents work",
      "Made-up references are caught and removed before you see them",
    ],
    stack: ["LangGraph", "Gemini", "FastAPI", "PostgreSQL", "SSE", "MCP", "Next.js"],
    pipeline: [
      { label: "Plan", note: "question → research plan" },
      { label: "Search", note: "web, papers and code" },
      { label: "Weigh", note: "compares the evidence" },
      { label: "You check", note: "approve or redirect", gate: true },
      { label: "Write", note: "report with sources" },
      { label: "Verify", note: "removes fake references" },
    ],
    metric: { value: "4", label: "AI agents working together" },
  },
  {
    slug: "scripture-rag",
    index: "03",
    name: "Grounded Scripture Assistant",
    kicker: "Trustworthy Bible Q&A",
    summary:
      "A chat assistant that answers questions using actual Bible verses, checks every reference it quotes, and flags famous quotes that are wrongly credited to the Bible.",
    repo: "https://github.com/talepa/Christianity-focused-AI-assistant",
    highlights: [
      "Looks up the relevant verses before answering",
      "Checks that every verse it quotes is real",
      "Shows its sources and how confident it is with each answer",
      "Tested against tricky and misleading questions",
    ],
    stack: ["Gemini 2.5 Flash", "ChromaDB", "Sentence Transformers", "FastAPI", "Next.js"],
    pipeline: [
      { label: "Screen", note: "blocks unsafe questions" },
      { label: "Look up", note: "finds matching verses" },
      { label: "Answer", note: "AI writes a reply" },
      { label: "Fact-check", note: "every verse verified", gate: true },
      { label: "Reply", note: "with sources + confidence" },
    ],
    metric: { value: "3", label: "accuracy test suites" },
  },
];

export const lab = [
  {
    name: "Dynamic Bottleneck Detection",
    area: "Operations",
    detail: "Predicts where an order-fulfilment process will slow down, so teams can act early.",
    result: "88% accurate",
    repo: "https://github.com/talepa/Dynamic-Bottleneck-Detection-and-Prediction-in-Multi-Stage-Systems",
    year: "2026",
  },
  {
    name: "Ghost Order Detector",
    area: "Food delivery",
    detail: "Predicts which food orders are likely to be cancelled before they're cooked.",
    result: "Spots cancellations early",
    repo: "https://github.com/talepa/The-Ghost-Order-Detection",
    year: "2026",
  },
  {
    name: "Medical Insurance Cost Prediction",
    area: "Healthcare costs",
    detail: "Estimates medical insurance costs from factors like age, BMI and smoking.",
    result: "Cost estimates",
    repo: "https://github.com/talepa/Medical-Insurance-Cost-Prediction",
    year: "2025",
  },
  {
    name: "Employee Churn",
    area: "HR",
    detail: "Predicts which employees are likely to leave.",
    result: "Attrition prediction",
    repo: "https://github.com/talepa/Predict-Employee-Churn-with-Decision-Trees-and-Random-Forests",
    year: "2025",
  },
  {
    name: "SMS Spam Classifier",
    area: "Messaging",
    detail: "Sorts text messages into spam and genuine.",
    result: "Spam filter",
    repo: "https://github.com/talepa/sms-spam-classifier",
    year: "2025",
  },
  {
    name: "Crime Against Women in India, 2001–2021",
    area: "Data analysis",
    detail: "Looks at 20 years of state-wise data to show regional trends.",
    result: "20-year study",
    repo: "https://github.com/talepa/crime_against_women_in_india_analysis_2001_2021",
    year: "2024",
  },
];

export const stack = [
  {
    group: "Generative AI & Agents",
    blurb: "Building AI assistants and agents",
    items: ["LangChain", "LangGraph", "AI Agents", "Multi-agent systems", "RAG", "Prompt engineering", "Tool / function calling", "Structured output", "MCP", "Human-in-the-loop"],
  },
  {
    group: "Retrieval systems",
    blurb: "Helping AI find the right information",
    items: ["Semantic search", "Vector databases", "Embedding models", "Hybrid search", "Metadata filtering", "Retrieval evaluation", "Document processing", "ChromaDB"],
  },
  {
    group: "Backend & infra",
    blurb: "Running it reliably for real users",
    items: ["Python", "FastAPI", "REST APIs", "SSE", "PostgreSQL", "MongoDB", "Redis", "Kafka", "Docker", "GitHub Actions"],
  },
  {
    group: "ML & vision",
    blurb: "Machine learning and image understanding",
    items: ["Transformers", "Vision Transformers", "Image similarity", "XGBoost", "scikit-learn", "Random Forest", "Feature engineering"],
  },
  {
    group: "Languages & tools",
    blurb: "Everyday tools",
    items: ["Python", "SQL", "TypeScript", "JavaScript", "Next.js", "Git", "Linux", "Jupyter"],
  },
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
      "Covers building AI tools that read your documents and answer questions about them, from loading the files to a working Q&A bot.",
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
