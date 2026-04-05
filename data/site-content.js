export const profile = {
  name: "Ravi Chandera",
  title: "AI Engineer",
  email: "chanderaravi1005@gmail.com",
  phone: "8849526923",
  linkedin: "https://linkedin.com/in/ravi-chandera",
  github: "https://github.com/Ravi-chandera",
  hero: {
    intro:
      "I build dependable AI systems that move from research to production without losing rigor, latency, or security.",
    summary:
      "Currently working at ConveGenius AI on agentic reasoning, LLM fine-tuning, production APIs, and data platforms for public-sector decision making.",
  },
  quickFacts: [
    "72% accuracy on complex relational multi-agent query flows",
    "99.95% uptime at 2,000 RPS for production inference APIs",
    "64% operational cost reduction through caching optimization",
    "Insight delivery reduced from 30 days to under 24 hours",
  ],
};

export const experience = [
  {
    role: "AI Engineer",
    company: "ConveGenius AI",
    location: "Ahmedabad, India",
    period: "May 2024 - Present",
    bullets: [
      "Developed an AI-driven data analysis platform for six state officials, reducing insights availability latency from 30 days to less than 24 hours.",
      "Engineered a multi-agent reasoning pipeline that reached 72% accuracy on complex relational queries, with Agentic RAG improving retrieval precision by 8%.",
      "Designed a data collection pipeline and fine-tuned open-source LLMs while keeping the stack aligned with SOC2-compliant data security requirements.",
      "Deployed production REST and gRPC APIs in Python for model inference endpoints, sustaining 99.95% uptime at 2,000 RPS.",
      "Architected a Plotly MCP server to automate chart generation and dynamic dashboard construction through agent-led workflows.",
      "Reduced operational costs by 64% through a caching optimization strategy.",
      "Integrated stateful memory for historical user preferences, improving output relevance by 7%.",
      "Generated synthetic datasets to benchmark edge cases and stress-test the production data pipeline.",
      "Built an automated Python and Airflow benchmarking system that cut model iteration cycles from six days to one day.",
    ],
  },
];

export const skillGroups = [
  {
    title: "AI",
    items: [
      "LLM Fine-tuning",
      "Agentic RAG",
      "LangChain",
      "OpenAI SDK",
      "MCP (Model Context Protocol)",
      "Multi-agent Orchestration",
    ],
  },
  {
    title: "Development",
    items: [
      "Python",
      "PostgreSQL",
      "PyTorch",
      "FastAPI",
      "Pinecone",
      "NLTK",
      "Scikit-learn",
      "Synthetic Data Generation",
    ],
  },
  {
    title: "Deployment and DevOps",
    items: [
      "Docker",
      "Kubernetes",
      "AWS Lambda",
      "AWS EC2",
      "CI/CD Pipelines",
      "GitHub Actions",
      "Git",
    ],
  },
];

export const education = [
  {
    degree: "Master of Technology in Artificial Intelligence",
    school: "Indian Institute of Technology (IIT) Patna",
    period: "2022 - 2024",
  },
  {
    degree: "Bachelor of Technology in Mechanical Engineering",
    school: "Birla Vishwakarma Mahavidyalaya",
    period: "2015 - 2019",
  },
];

export const projects = [
  {
    title: "Cognitive Behavioral Therapy (CBT) Agent",
    description:
      "A supervisor-worker multi-agent system for generating structured mental health exercises with safety guardrails and review loops.",
    bullets: [
      "Architected a supervisor-worker agent system to generate structured mental health exercises.",
      "Implemented guardrails for clinical scope checking and a critic agent for iterative quality improvement.",
      "Developed a persistent backend for session resumption and asynchronous human-in-the-loop intervention.",
    ],
  },
  {
    title: "Medical Text Classification and Imputation",
    description:
      "A data recovery and classification workflow focused on improving signal quality in skewed medical datasets.",
    bullets: [
      "Used BART models to impute missing text values, recovering 20% of critical data that would otherwise be discarded.",
      "Executed hyperparameter tuning and class-weight balancing to achieve an F1 score of 0.85.",
      "Ran statistical analysis across macro and weighted F1 metrics to validate reliability on skewed distributions.",
    ],
  },
];

export const blogPosts = [
  {
    slug: "building-reliable-agentic-rag",
    title: "Building Reliable Agentic RAG Systems",
    date: "April 2026",
    tag: "AI Systems",
    readTime: "5 min read",
    summary:
      "A practical look at keeping retrieval pipelines grounded when multiple agents, tools, and memory layers are in play.",
    paragraphs: [
      "Agentic RAG gets interesting once you stop treating retrieval as a single lookup and start treating it as a controlled reasoning loop. The challenge is not only finding context, but deciding when to retrieve, how much to retrieve, and which agent should trust which evidence.",
      "In production systems, retrieval quality needs better signals than anecdotal demos. I prefer benchmarking with adversarial edge cases, synthetic stress data, and task-specific precision metrics so the system is forced to justify its behavior under realistic failure modes.",
      "The systems that hold up over time usually combine explicit planning, compact memory, and aggressive observability. Good agentic RAG is less about clever prompting and more about disciplined system design.",
    ],
  },
  {
    slug: "what-it-takes-to-ship-llm-apis",
    title: "What It Takes to Ship LLM APIs to Production",
    date: "March 2026",
    tag: "Engineering",
    readTime: "4 min read",
    summary:
      "Latency budgets, uptime targets, and interface design decisions that matter once model endpoints face real traffic.",
    paragraphs: [
      "Serving LLM-backed APIs in production changes the conversation. Prompt quality still matters, but suddenly timeout behavior, retries, caching, transport choice, and telemetry are just as important as model output.",
      "I have found that the fastest gains usually come from removing waste around the model rather than inside it. Better caching, cleaner routing, and predictable fallback behavior often improve user experience more than swapping one model checkpoint for another.",
      "A production API is trustworthy when it is observable, rate-aware, and designed for failure. Reliability needs to be an explicit feature, not a side effect.",
    ],
  },
  {
    slug: "why-benchmarking-should-be-automated",
    title: "Why Benchmarking Should Be Automated Early",
    date: "February 2026",
    tag: "Workflow",
    readTime: "4 min read",
    summary:
      "Manual iteration hides weak assumptions. Automated evaluation loops make model work faster and much harder to fool.",
    paragraphs: [
      "Teams often wait too long before building benchmark automation. That delay creates a pattern where model changes are judged by isolated examples instead of consistent evidence.",
      "An automated benchmarking loop compresses iteration time and makes tradeoffs visible. When variant comparison, parameter sweeps, and dataset slices run on a schedule, the team can stop arguing from intuition and start comparing outcomes.",
      "The strongest evaluation stacks are simple enough to trust and broad enough to catch regressions. They should help teams move faster without blurring what improved and what broke.",
    ],
  },
];
