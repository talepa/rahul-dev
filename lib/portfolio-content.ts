/** Section copy — aligned with resume / LinkedIn (Rahul Talepa). */

export type CaseStudyCard = {
  title: string
  tagline: string
  description: string
  metrics: readonly { value: string; label: string }[]
  /** Public GitHub URL for this card */
  href: string
  /** Cover image (local `/…` or remote URL) */
  coverUrl: string
  /** Extra classes on the cover <img> (e.g. object-fit, shadow) */
  coverImgClassName?: string
}

export const heroContent = {
  eyebrow: "AI & data engineering partner",
  headlineLine1: "Intelligent systems",
  headlineLine2: "for modern products.",
  sub:
    "I design and ship ML pipelines, semantic search, and LLM-powered workflows that turn data into measurable impact — not slide decks.",
  primaryCta: "Let's work together",
  secondaryCta: "View GitHub",
}

export const aboutStats = [
  { value: "8.33", label: "CGPA", sub: "B.Tech CSE" },
  { value: "88%", label: "ML accuracy", sub: "Bottleneck detection" },
  { value: "0.83", label: "ROC-AUC", sub: "Risk prediction" },
  { value: "15K+", label: "Records modeled", sub: "Synthetic ecommerce" },
]

export const aboutIntro =
  "I'm Rahul Talepa — an AI Engineer and data scientist focused on retrieval systems, production ML, and trustworthy evaluation. I bridge experimentation with deployment: embeddings, RAG, and dashboards that teams actually use."

export const values = [
  {
    n: "01",
    title: "Production-first mindset",
    body: "Models are useful only when they're observable, versioned, and wired into real workflows — I optimize for that path.",
  },
  {
    n: "02",
    title: "Clear data contracts",
    body: "From cleaning and EDA to feature stores and metrics: I make assumptions explicit so results stay reproducible.",
  },
  {
    n: "03",
    title: "Human-readable AI",
    body: "LLMs and search need guardrails, chunking, and evaluation — I design RAG and semantic layers you can reason about.",
  },
]

export const capabilityBlocks = [
  {
    title: "Semantic search & RAG",
    summary:
      "Vector embeddings, chunking strategies, metadata indexes, and retrieval pipelines tuned for precision.",
    bullets: ["Similarity & hybrid search", "Query understanding", "Chunk + metadata design"],
  },
  {
    title: "Classical ML at scale",
    summary:
      "End-to-end pipelines with strong feature engineering, validation, and deployment-minded structure.",
    bullets: ["Random Forest / boosting", "Feature engineering", "ROC-AUC & calibration"],
  },
  {
    title: "Data science foundations",
    summary:
      "EDA, statistical checks, KPI reporting, and clean handoffs to engineering stakeholders.",
    bullets: ["Pandas / NumPy workflows", "Hypothesis testing", "Dashboards & BI"],
  },
  {
    title: "Deep learning & NLP",
    summary:
      "Neural models and text pipelines where they add value — from ANN/CNN/LSTM to embeddings.",
    bullets: ["NLP & embeddings", "ANN / CNN / LSTM", "Model evaluation"],
  },
]

export const trustItems = [
  "Reproducible notebooks & Git",
  "API-first integrations",
  "Documentation you can hand off",
  "Security-aware design",
]

export const experiences = [
  {
    role: "AI Engineer Intern",
    company: "Stuvio Digital",
    period: "Feb 2026 – Present",
    bullets: [
      "Built scalable semantic search pipelines, converting records into high-dimensional vector embeddings.",
      "Implemented LLM-driven query understanding to map natural language into keywords, intents, and embeddings.",
      "Designed vector similarity search for accurate retrieval across large corpora.",
      "Developed RAG workflows combining embedding models, metadata indexing, and chunking strategies.",
    ],
  },
  {
    role: "Data Science Intern",
    company: "Cyber3ra",
    period: "Mar 2025 – Jun 2025",
    bullets: [
      "Prepared and cleaned datasets with Python (Pandas, NumPy).",
      "Ran EDA and statistical checks to surface trends and strengthen feature understanding.",
      "Supported KPI monitoring and reporting workflows for stakeholders.",
    ],
  },
]

export const caseStudies: CaseStudyCard[] = [
  {
    title: "Dynamic bottleneck detection",
    tagline: "Python · Jupyter · scikit-learn",
    description:
      "Predicts bottlenecks across a six-stage e-commerce fulfillment flow using 150+ engineered features, time-aware validation, Random Forest & gradient boosting — strong lift over simple rule-based baselines (README metrics: ~88% test accuracy vs ~61% heuristic baseline).",
    metrics: [
      { value: "88%", label: "Test accuracy" },
      { value: "150+", label: "Features" },
      { value: "6", label: "Stages" },
    ],
    href: "https://github.com/talepa/Dynamic-Bottleneck-Detection-and-Prediction-in-Multi-Stage-Systems",
    coverUrl: "/project-bottleneck-detection.png",
  },
  {
    title: "Ghost order detection",
    tagline: "Food delivery · tabular ML",
    description:
      "Random Forest classifier for food-delivery gig data: predicts ghost-order / cancellation risk from distance, traffic, weather, time of day, prep time, and courier signals — aligns with README reporting (ROC-AUC ~0.83, accuracy ~0.95 on the simulated target).",
    metrics: [
      { value: "0.828", label: "ROC-AUC" },
      { value: "0.95", label: "Accuracy" },
      { value: "RF", label: "Classifier" },
    ],
    href: "https://github.com/talepa/The-Ghost-Order-Detection",
    coverUrl: "/project-ghost-order-detection.png",
    coverImgClassName:
      "bg-white object-contain object-top p-10 sm:p-12 scale-[1.08] drop-shadow-[0_12px_28px_rgba(0,0,0,0.22)] drop-shadow-[0_24px_48px_rgba(0,0,0,0.1)]",
  },
  {
    title: "Instagram reach analysis",
    tagline: "Python · Pandas · Matplotlib",
    description:
      "Notebook-driven analysis of Instagram-style engagement CSVs — impressions vs reach, hashtags, Explore, likes, follows, and profile visits, with matplotlib charts and share-of-impression summaries to sharpen content strategy (per repo README).",
    metrics: [
      { value: "CSV", label: "Signals" },
      { value: "EDA", label: "Workflow" },
      { value: "Viz", label: "Matplotlib" },
    ],
    href: "https://github.com/talepa/Instagram-Reach-Analysis-Using-Python",
    coverUrl: "/project-instagram-reach-analysis.png",
  },
]

export const techPills = [
  "Python",
  "SQL",
  "scikit-learn",
  "Pandas",
  "NumPy",
  "TensorFlow",
  "Docker",
  "Git",
  "Jupyter",
  "Power BI",
  "Tableau",
  "OpenAI",
  "RAG",
  "XGBoost",
  "NLP",
  "Matplotlib",
  "Seaborn",
]

export const publication = {
  title: "AI Driven Drugs Traceability System",
  journal: "TIJER - International Research Journal",
  detail: "Volume 12, Issue 5, May 2025 · Paper ID: TIJER2505048",
  impact: "8.57",
  description:
    "AI-powered authentication framework addressing counterfeit medicine with end-to-end drug safety and traceability.",
  link: "https://www.linkedin.com/posts/rahultalepa_research-paper-activity-7346519564106534912-zNsP",
}

export const education = {
  school: "D Y Patil University, Pune",
  degree: "B.Tech — Computer Science & Engineering",
  period: "2021 – 2025",
  cgpa: "8.33",
}

export const faqs = [
  {
    q: "What kind of roles are you looking for?",
    a: "Full-time or internship roles in AI engineering, ML engineering, and data science — especially teams shipping search, RAG, or production models.",
  },
  {
    q: "What tools do you use day to day?",
    a: "Python, SQL, scikit-learn, Pandas, TensorFlow, Docker, Git/GitHub, Jupyter, and modern LLM APIs — plus BI tools like Power BI and Tableau when stakeholders need visibility.",
  },
  {
    q: "Do you have experience with RAG and embeddings?",
    a: "Yes. At Stuvio I've worked on semantic search, embedding pipelines, chunking, metadata indexing, and RAG-style retrieval workflows.",
  },
  {
    q: "Are you open to remote or hybrid work?",
    a: "Yes. I'm based in Mumbai (IST) and comfortable collaborating across time zones with clear async communication.",
  },
  {
    q: "How can I reach you fastest?",
    a: "Email at talepa.rahul6@gmail.com or message me on LinkedIn — I typically respond within one business day.",
  },
]

export const footerCta = {
  /** Conicorn-style closing headline split */
  line1: "The best teams aren't collecting demos.",
  line2Muted: "They're shipping systems that scale.",
  sub: "If you need semantic search, RAG, or production ML with adult-level evaluation — let's talk before your next sprint commit.",
  cta: "Work with me",
}
