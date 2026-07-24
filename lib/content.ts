export type Card = {
  title: string;
  text: string;
  items?: string[];
  href?: string;
  image?: string;
};

export type ServicePage = {
  slug: string;
  category: string;
  title: string;
  eyebrow: string;
  description: string;
  ctas: string[];
  tags: string[];
  sections: Card[];
  related: string[];
};

/* ============================================================
   Brand
   ============================================================ */

export const brand = {
  name: "maxIEI",
  legal: "maxIEI, Inc.",
  tagline: "Integrity. Excellence. Innovation.",
  promise:
    "We build trusted AI solutions with uncompromising quality while continuously pushing the boundaries of technology to create lasting value for our clients.",
  founded: 2019
};

export const hq = {
  city: "Austin",
  state: "Texas",
  country: "United States",
  label: "Austin, Texas, USA",
  district: "Downtown · Congress Avenue corridor",
  timezone: "CST / UTC−6",
  mapQuery: "Downtown+Austin,+Texas,+USA",
  coords: "30.2672° N, 97.7431° W"
};

/* ============================================================
   Values — the operating system of the company
   ============================================================ */

export type Value = {
  id: string;
  name: string;
  hue: string;
  headline: string;
  text: string;
  image: string;
  proof: string[];
};

export const values: Value[] = [
  {
    id: "integrity",
    name: "Integrity",
    hue: "var(--integrity)",
    headline: "We do what we said we would do.",
    text: "We act with honesty, transparency, and accountability. We build trust by delivering what we promise, protecting client data, and communicating openly — including when the news is inconvenient.",
    image: "/images/value-integrity.jpg",
    proof: ["Open roadmaps", "Data protection by default", "Honest scoping", "No hidden change orders"]
  },
  {
    id: "excellence",
    name: "Excellence",
    hue: "var(--excellence)",
    headline: "Reliable, secure, scalable, maintainable.",
    text: "We strive for the highest standards in everything we build. Every product is designed to be reliable, secure, scalable, and maintainable long after the launch announcement is over.",
    image: "/images/value-excellence.jpg",
    proof: ["Reviewed code", "Tested workflows", "Documented handoff", "Production-grade from day one"]
  },
  {
    id: "innovation",
    name: "Innovation",
    hue: "var(--innovation)",
    headline: "New technology, applied with judgement.",
    text: "We embrace new technologies and creative thinking to solve complex problems. We continuously explore AI and modern engineering to deliver better solutions — not to chase a headline.",
    image: "/images/value-innovation.jpg",
    proof: ["Applied AI research", "Rapid evaluation", "Model-agnostic design", "Measured against outcomes"]
  }
];

/* ============================================================
   Team — an eight-person company across seven countries.
   Nicknames are used publicly; full names are shared on engagement.
   ============================================================ */

export type Person = {
  nickname: string;
  role: string;
  location: string;
  flag: string;
  bio: string;
  hue: string;
  hue2: string;
};

export const team: Person[] = [
  {
    nickname: "Max",
    role: "Chief Executive Officer",
    location: "Austin, United States",
    flag: "🇺🇸",
    bio: "Sets company direction and owns every client relationship end to end. Spent a decade shipping enterprise platforms before founding maxIEI around a single rule: promise less, deliver more.",
    hue: "#5af0c8",
    hue2: "#57b8ff"
  },
  {
    nickname: "Kenji",
    role: "Chief Technology Officer",
    location: "Tokyo, Japan",
    flag: "🇯🇵",
    bio: "Owns architecture, engineering standards, and technical review. Believes a system is only finished when the next engineer can understand it without asking a question.",
    hue: "#8c7cff",
    hue2: "#57b8ff"
  },
  {
    nickname: "Rafa",
    role: "Lead AI Engineer",
    location: "Guadalajara, Mexico",
    flag: "🇲🇽",
    bio: "Builds the retrieval pipelines, agent graphs, and evaluation harnesses behind our AI work. Treats every model output as something that has to be measured, not trusted.",
    hue: "#5af0c8",
    hue2: "#ffc46b"
  },
  {
    nickname: "Amir",
    role: "Backend & Platform Engineer",
    location: "Kuala Lumpur, Malaysia",
    flag: "🇲🇾",
    bio: "Designs the APIs, data models, and job systems everything else stands on. Has a long-running grudge against any endpoint that fails quietly.",
    hue: "#57b8ff",
    hue2: "#8c7cff"
  },
  {
    nickname: "Jom",
    role: "Full-Stack Engineer",
    location: "Manila, Philippines",
    flag: "🇵🇭",
    bio: "Moves between product UI and backend services daily. Turns rough workflow sketches into interfaces the client's team actually wants to open on a Monday.",
    hue: "#ffc46b",
    hue2: "#5af0c8"
  },
  {
    nickname: "Bea",
    role: "Frontend & Design Engineer",
    location: "Cebu, Philippines",
    flag: "🇵🇭",
    bio: "Owns the design system, accessibility, and the last five percent of polish. Argues — usually successfully — that a confusing dashboard is a broken dashboard.",
    hue: "#8c7cff",
    hue2: "#ffc46b"
  },
  {
    nickname: "Luc",
    role: "Security & DevOps Engineer",
    location: "Lyon, France",
    flag: "🇫🇷",
    bio: "Runs infrastructure, CI/CD, monitoring, and the threat model. Reviews every permission boundary before a system is allowed near real customer data.",
    hue: "#57b8ff",
    hue2: "#5af0c8"
  },
  {
    nickname: "Tico",
    role: "Data Engineer",
    location: "São Paulo, Brazil",
    flag: "🇧🇷",
    bio: "Builds the pipelines, warehouses, and reporting layers that make the rest of the stack useful. Believes most AI problems are actually data problems wearing a costume.",
    hue: "#ffc46b",
    hue2: "#8c7cff"
  }
];

export const teamStats = [
  ["7", "countries"],
  ["16h", "engineering coverage per day"],
  ["1", "shared code standard"],
  ["100%", "senior engineers"]
];

/* ============================================================
   Services
   ============================================================ */

const aiRelated = [
  "AI Automation Systems",
  "AI Agents",
  "RAG Knowledge Bases",
  "Document AI",
  "AI Customer Support",
  "AI Reporting Systems",
  "Internal AI Copilots",
  "Workflow Automation"
];

const saasRelated = [
  "SaaS MVP Development",
  "Multi-Tenant SaaS",
  "Subscription Platforms",
  "Admin Dashboards",
  "SaaS Backend Development",
  "SaaS Modernization",
  "SaaS Product Scaling",
  "API Integration"
];

export const buildCategories: Card[] = [
  {
    title: "AI & Automation",
    text: "AI systems that automate repetitive work, use company knowledge, support customers, extract documents, generate reports, and keep humans in control.",
    href: "/services/ai-and-automation/ai-automation-systems",
    image: "/images/work-ai.jpg",
    items: ["AI agents", "RAG knowledge bases", "Document AI", "AI support", "Internal copilots", "Workflow automation"]
  },
  {
    title: "SaaS & Product Development",
    text: "Launch-ready SaaS products with user accounts, subscriptions, admin dashboards, APIs, tenant logic, billing, and cloud deployment.",
    href: "/services/saas-and-product/saas-mvp-development",
    image: "/images/work-saas.jpg",
    items: ["SaaS MVPs", "Multi-tenant SaaS", "Subscription platforms", "Admin dashboards", "Product scaling"]
  },
  {
    title: "Web & Mobile Applications",
    text: "Custom applications for businesses that need more than a website: dashboards, booking systems, portals, internal tools, marketplaces, and PWAs.",
    image: "/images/work-design.jpg",
    items: ["Custom web apps", "Mobile apps", "PWAs", "Customer dashboards", "Booking platforms", "Marketplaces"]
  },
  {
    title: "Business Systems & Portals",
    text: "Secure operational systems for clients, staff, partners, and admins, built around roles, files, workflows, messages, and reporting.",
    image: "/images/office-interior.jpg",
    items: ["Client portals", "Internal tools", "Staff dashboards", "Operations systems", "CRM-like systems"]
  },
  {
    title: "API & System Integration",
    text: "Connected software flows across CRMs, payments, email, calendars, spreadsheets, AI APIs, webhooks, dashboards, and custom systems.",
    image: "/images/global-network.jpg",
    items: ["CRM integration", "Stripe and billing", "Google Workspace", "Webhooks", "Data sync", "Custom APIs"]
  },
  {
    title: "Data Engineering & Reporting",
    text: "Pipelines, scraping, ETL automation, analytics dashboards, automated reports, and AI summaries that turn scattered data into decisions.",
    image: "/images/work-data.jpg",
    items: ["Data pipelines", "Web scraping", "ETL", "Business dashboards", "Automated reports"]
  },
  {
    title: "Cloud, DevOps & Infrastructure",
    text: "Reliable deployment and backend foundations using cloud hosting, containers, CI/CD, monitoring, logging, performance work, and backups.",
    image: "/images/work-cloud.jpg",
    items: ["AWS", "Vercel", "Docker", "CI/CD", "Monitoring", "Performance optimization"]
  },
  {
    title: "Security Engineering",
    text: "Security-aware development with authentication, role permissions, encrypted storage, secure APIs, audit logs, rate limits, and hardening.",
    image: "/images/work-security.jpg",
    items: ["OAuth and JWT", "RBAC", "Secure APIs", "Audit logs", "Encryption", "Compliance-ready design"]
  }
];

export const capabilityCards: Card[] = [
  {
    title: "AI Automation Systems",
    text: "LLM agents, RAG pipelines, document processing, internal copilots, human approval steps, and AI-assisted workflows.",
    image: "/images/work-ai.jpg"
  },
  {
    title: "SaaS Platform Engineering",
    text: "Accounts, dashboards, subscriptions, admin panels, APIs, databases, multi-tenant architecture, and launch workflows.",
    image: "/images/work-saas.jpg"
  },
  {
    title: "API & System Integration",
    text: "CRM, payment, email, analytics, third-party APIs, webhooks, data synchronization, retries, validation, and logs.",
    image: "/images/global-network.jpg"
  },
  {
    title: "Secure Web Applications",
    text: "Authentication, RBAC, encrypted storage, protected APIs, audit trails, permission boundaries, and secure file workflows.",
    image: "/images/work-security.jpg"
  },
  {
    title: "Cloud & Backend Systems",
    text: "FastAPI, Node.js, PostgreSQL, Redis, Docker, AWS, Vercel, CI/CD, monitoring, and production deployment.",
    image: "/images/work-cloud.jpg"
  },
  {
    title: "Data Engineering & Reporting",
    text: "ETL pipelines, scraping, scheduled jobs, dashboards, reporting automation, AI summaries, and analytics systems.",
    image: "/images/work-data.jpg"
  }
];

export const demos: Card[] = [
  {
    title: "AI Document Assistant",
    text: "Upload documents, ask questions, retrieve source-backed answers, generate summaries, and route weak answers for review.",
    items: ["PDF upload", "Vector search", "Source citations", "Admin review"]
  },
  {
    title: "AI Customer Support Assistant",
    text: "Answer customer questions from help content, triage tickets, suggest replies, summarize conversations, and escalate to humans.",
    items: ["Knowledge base", "Ticket triage", "Human handoff", "Support analytics"]
  },
  {
    title: "SaaS Admin Dashboard",
    text: "Manage users, organizations, subscriptions, roles, usage, billing issues, system activity, exports, and platform settings.",
    items: ["Users", "Subscriptions", "Permissions", "Analytics"]
  },
  {
    title: "Secure Client Portal",
    text: "Role-based login, file exchange, status tracking, messages, notifications, admin controls, and audit visibility.",
    items: ["Login", "Files", "Messages", "Audit logs"]
  },
  {
    title: "CRM Automation Workflow",
    text: "Move leads from form submission to CRM updates, AI qualification, follow-up emails, dashboard tracking, and notifications.",
    items: ["Lead form", "CRM sync", "AI scoring", "Email follow-up"]
  },
  {
    title: "API Integration Monitor",
    text: "Track webhook events, sync status, failed jobs, retries, validation errors, logs, and connected system health.",
    items: ["Webhooks", "Retries", "Error logs", "Monitoring"]
  },
  {
    title: "AI Reporting System",
    text: "Turn business data into dashboards, AI summaries, alerts, anomaly checks, and scheduled email reports.",
    items: ["Data sources", "AI summary", "Dashboard", "Scheduled reports"]
  }
];

export const blueprints: Card[] = [
  {
    title: "Healthcare Workflow Automation",
    text: "Secure intake form to database to AI classification to staff dashboard to notification workflow, with every access logged.",
    image: "/images/work-security.jpg",
    items: ["Role-based access", "Audit logs", "Encrypted storage", "Admin controls"]
  },
  {
    title: "FinTech Reporting Dashboard",
    text: "API integrations, backend data pipeline, real-time dashboard, secure reporting, exports, and threshold alerts.",
    image: "/images/work-data.jpg",
    items: ["Data sync", "Secure APIs", "Reporting", "Monitoring"]
  },
  {
    title: "Agency Client Portal",
    text: "Client accounts, files, reports, approvals, project status, service dashboards, and staff admin workflows.",
    image: "/images/office-interior.jpg",
    items: ["Client portal", "White-label", "Approvals", "Dashboards"]
  },
  {
    title: "SaaS MVP Platform",
    text: "Accounts, product dashboard, subscription billing, tenant-ready data model, admin panel, and cloud deployment.",
    image: "/images/work-saas.jpg",
    items: ["MVP scope", "Billing", "Admin dashboard", "Launch"]
  },
  {
    title: "Operations Booking + CRM",
    text: "Booking flow, customer records, payment integration, reminders, staff dashboard, and follow-up automation.",
    image: "/images/process-planning.jpg",
    items: ["Scheduling", "Payments", "CRM automation", "Notifications"]
  },
  {
    title: "Knowledge Base Copilot",
    text: "Company documents ingested, permissioned, indexed, and served as a cited internal assistant with an admin review queue.",
    image: "/images/work-ai.jpg",
    items: ["Ingestion", "Permissions", "Citations", "Review queue"]
  }
];

export const processSteps: Card[] = [
  {
    title: "Map",
    text: "We understand the business goal, users, manual workflow, current tools, sensitive data, constraints, and success criteria."
  },
  {
    title: "Design",
    text: "We define product scope, UX flows, system architecture, database design, integrations, permissions, and delivery phases."
  },
  {
    title: "Build",
    text: "We develop frontend, backend APIs, automation logic, AI layers, dashboards, admin tools, integrations, and deployment setup."
  },
  {
    title: "Validate",
    text: "We test features, permissions, security, performance, edge cases, real workflows, AI outputs, and business logic."
  },
  {
    title: "Launch",
    text: "We deploy the system, configure hosting, domains, analytics, monitoring, backups, and handoff documentation."
  },
  {
    title: "Improve",
    text: "We refine the product with bug fixes, optimization, new workflows, analytics, AI evaluation, and long-term support."
  }
];

export const architecture: [string, string][] = [
  ["Business Inputs", "Documents, CRM records, emails, forms, payments, spreadsheets, databases"],
  ["Integration Layer", "APIs, webhooks, data sync, validation, retry logic, monitoring"],
  ["AI / Automation Layer", "RAG, agents, classification, summarization, workflow rules, human approvals"],
  ["Business Application", "Dashboard, portal, SaaS app, admin panel, reporting interface"],
  ["Security & Monitoring", "Auth, RBAC, encryption, audit logs, alerts, backups, admin controls"]
];

export const stack: [string, string][] = [
  ["Frontend", "React, Next.js, TypeScript, Tailwind CSS, dashboard UI, portal interfaces"],
  ["Backend", "Python, FastAPI, Node.js, Express, Django, REST APIs, background jobs"],
  ["AI Engineering", "Claude, OpenAI, LangGraph, LlamaIndex, RAG, agents, embeddings, evaluations"],
  ["Data", "PostgreSQL, MySQL, MongoDB, Redis, Supabase, pgvector, ETL pipelines"],
  ["Cloud & DevOps", "AWS, Google Cloud, Azure, Vercel, Docker, CI/CD, monitoring, logging"],
  ["Integrations", "Stripe, HubSpot, Salesforce, Google Workspace, Slack, Twilio, Airtable, n8n"],
  ["Security", "OAuth, JWT, RBAC, encryption, secure APIs, audit logs, secrets management"],
  ["Automation", "Workflow engines, scheduled jobs, webhooks, notifications, reporting automation"]
];

export const marqueeItems = [
  "Integrity",
  "Next.js",
  "Excellence",
  "FastAPI",
  "Innovation",
  "Claude",
  "PostgreSQL",
  "AWS",
  "Docker",
  "RAG",
  "LangGraph",
  "TypeScript",
  "Stripe",
  "pgvector",
  "Kubernetes",
  "Terraform"
];

const sections = (titles: string[], focus: string): Card[] =>
  titles.map((title) => ({
    title,
    text: `${focus} This section explains the business problem, system design, core modules, implementation choices, security controls, delivery expectations, and how maxIEI turns the idea into production-ready software.`
  }));

export const servicePages: ServicePage[] = [
  {
    slug: "ai-and-automation/ai-automation-systems",
    category: "AI & Automation",
    title: "AI Automation Systems",
    eyebrow: "Automate real work, not just demos",
    description:
      "maxIEI builds AI-powered automation systems that process documents, route tasks, answer questions, generate reports, connect tools, and reduce repetitive manual operations.",
    ctas: ["Start an AI Automation Project", "Book a Technical Consultation"],
    tags: ["AI workflows", "Document automation", "RAG", "Human approval", "Dashboards"],
    sections: sections(
      [
        "The problem",
        "What this service means",
        "What maxIEI builds",
        "Core features",
        "Use cases",
        "Architecture",
        "Industries",
        "Deliverables",
        "Technology",
        "Security and control",
        "Demo example",
        "Process",
        "FAQ"
      ],
      "AI automation systems combine business rules, AI models, APIs, dashboards, and human review steps."
    ),
    related: aiRelated
  },
  {
    slug: "ai-and-automation/ai-agents",
    category: "AI & Automation",
    title: "AI Agents",
    eyebrow: "Goal-driven AI with tool access",
    description:
      "Practical AI agents that reason through tasks, use tools, connect to business systems, update records, generate outputs, and stay under human control.",
    ctas: ["Start an AI Agent Project", "Book a Technical Consultation"],
    tags: ["Research agents", "Support agents", "Operations agents", "Tool use", "Human approval"],
    sections: sections(
      [
        "What is an AI agent?",
        "Problems AI agents solve",
        "Types of AI agents we build",
        "Core capabilities",
        "Agent architecture",
        "Human control and safety",
        "Use cases",
        "What clients receive",
        "Technology",
        "Demo example",
        "Industries",
        "Build process",
        "FAQ"
      ],
      "AI agents should support real workflows safely, with permissions, logs, approvals, and clear boundaries."
    ),
    related: aiRelated
  },
  {
    slug: "ai-and-automation/rag-knowledge-bases",
    category: "AI & Automation",
    title: "RAG Knowledge Bases",
    eyebrow: "Answers from your own knowledge",
    description:
      "Secure RAG knowledge systems that search documents, websites, PDFs, SOPs, FAQs, databases, and internal resources before generating source-backed answers.",
    ctas: ["Build a RAG Knowledge Base", "Book a Technical Consultation"],
    tags: ["Document search", "Source citations", "Vector search", "Internal knowledge", "Support AI"],
    sections: sections(
      [
        "What is a RAG knowledge base?",
        "Problems this solves",
        "RAG systems we build",
        "Core features",
        "Architecture",
        "Use cases",
        "Knowledge sources",
        "Accuracy and source citations",
        "Security and permissions",
        "Admin dashboard",
        "Deliverables",
        "Technology",
        "Build process",
        "FAQ"
      ],
      "A RAG knowledge base retrieves approved company content first, then answers with business-specific context and source control."
    ),
    related: aiRelated
  },
  {
    slug: "ai-and-automation/ai-chatbots",
    category: "AI & Automation",
    title: "AI Chatbots",
    eyebrow: "Business conversations connected to data",
    description:
      "Custom AI chatbots that answer questions, qualify leads, support customers, guide visitors, use company knowledge, and connect conversations to business tools.",
    ctas: ["Start an AI Chatbot Project", "Book a Technical Consultation"],
    tags: ["Website chatbot", "Support chatbot", "Lead qualification", "CRM-connected", "Human handoff"],
    sections: sections(
      [
        "What is an AI chatbot?",
        "Problems AI chatbots solve",
        "Types of AI chatbots maxIEI builds",
        "Core chatbot features",
        "Chatbot architecture",
        "Use cases",
        "Conversation design",
        "Knowledge sources",
        "Integration",
        "Human handoff",
        "Security",
        "Technology",
        "Build process",
        "FAQ"
      ],
      "AI chatbots become useful when they are grounded in company knowledge, connected to tools, and designed for real customer or staff workflows."
    ),
    related: aiRelated
  },
  {
    slug: "ai-and-automation/document-ai",
    category: "AI & Automation",
    title: "Document AI",
    eyebrow: "Extract, classify, summarize, and route documents",
    description:
      "Document AI systems for PDFs, forms, contracts, invoices, receipts, reports, compliance files, healthcare documents, and financial workflows.",
    ctas: ["Start a Document AI Project", "Book a Technical Consultation"],
    tags: ["PDF extraction", "Classification", "Summarization", "Validation", "Review queues"],
    sections: sections(
      [
        "What is Document AI?",
        "Problems Document AI solves",
        "Document AI systems maxIEI builds",
        "Core features",
        "Document AI architecture",
        "Use cases",
        "Document types",
        "Human review and confidence",
        "Accuracy and validation",
        "Integrations",
        "Security",
        "Technology",
        "Build process",
        "FAQ"
      ],
      "Document AI turns unstructured files into structured data, summaries, routed tasks, and controlled business workflows."
    ),
    related: aiRelated
  },
  {
    slug: "ai-and-automation/ai-customer-support",
    category: "AI & Automation",
    title: "AI Customer Support",
    eyebrow: "Faster support with human escalation",
    description:
      "AI support systems for customer-facing chat, ticket triage, reply suggestions, conversation summaries, help-desk integrations, and support analytics.",
    ctas: ["Start an AI Support Project", "Book a Technical Consultation"],
    tags: ["Ticket triage", "Reply suggestions", "Knowledge base", "Escalation", "Support analytics"],
    sections: sections(
      [
        "What is AI customer support?",
        "Problems this solves",
        "AI support systems maxIEI builds",
        "Core features",
        "Support architecture",
        "Support channels",
        "Help desk and CRM integrations",
        "Customer-facing vs agent-assist",
        "Human handoff and escalation",
        "Support analytics",
        "Security and control",
        "Technology",
        "Build process",
        "FAQ"
      ],
      "AI support should reduce repetitive work while preserving human oversight for unclear, sensitive, or high-value conversations."
    ),
    related: aiRelated
  },
  {
    slug: "ai-and-automation/ai-reporting-systems",
    category: "AI & Automation",
    title: "AI Reporting Systems",
    eyebrow: "Reports that explain what changed",
    description:
      "AI reporting systems that pull from business data, generate dashboards, write summaries, detect changes, alert teams, and send scheduled reports.",
    ctas: ["Start an AI Reporting Project", "Book a Technical Consultation"],
    tags: ["Automated reports", "AI summaries", "Dashboards", "Alerts", "Client reporting"],
    sections: sections(
      [
        "What is an AI reporting system?",
        "Problems AI reporting solves",
        "AI reporting systems maxIEI builds",
        "Core features",
        "AI reporting architecture",
        "Use cases",
        "Data sources",
        "Report formats",
        "Alerts and anomaly detection",
        "Accuracy and review",
        "Security and permissions",
        "Technology",
        "Build process",
        "FAQ"
      ],
      "AI reporting connects data pipelines, dashboards, natural-language summaries, and review controls."
    ),
    related: aiRelated
  },
  {
    slug: "ai-and-automation/internal-ai-copilots",
    category: "AI & Automation",
    title: "Internal AI Copilots",
    eyebrow: "AI assistance inside your team workflows",
    description:
      "Internal AI copilots for company knowledge, operations, sales, support, HR, onboarding, reporting, and manager workflows.",
    ctas: ["Start an Internal Copilot Project", "Book a Technical Consultation"],
    tags: ["Knowledge copilot", "Operations copilot", "Sales copilot", "HR onboarding", "Integrations"],
    sections: sections(
      [
        "What is an internal AI copilot?",
        "Problems internal copilots solve",
        "Internal AI copilots maxIEI builds",
        "Core features",
        "Internal copilot architecture",
        "Use cases",
        "Knowledge sources",
        "Tool integrations",
        "Department-specific copilots",
        "Security and permissions",
        "Human control and governance",
        "Technology",
        "Build process",
        "FAQ"
      ],
      "Internal copilots work best when they understand company knowledge and can safely connect to tools used by each department."
    ),
    related: aiRelated
  },
  {
    slug: "ai-and-automation/workflow-automation",
    category: "AI & Automation",
    title: "Workflow Automation",
    eyebrow: "Replace repeated handoffs with reliable flows",
    description:
      "Workflow automation systems for lead intake, onboarding, approvals, notifications, data sync, CRM updates, reporting, and AI-assisted operations.",
    ctas: ["Start a Workflow Automation Project", "Book a Technical Consultation"],
    tags: ["CRM automation", "Approval workflows", "Data sync", "Notifications", "AI-assisted flows"],
    sections: sections(
      [
        "What is workflow automation?",
        "Problems workflow automation solves",
        "Workflow systems maxIEI builds",
        "Core features",
        "Workflow architecture",
        "Use cases",
        "Workflow types",
        "Tools and systems we connect",
        "Custom vs no-code automation",
        "Human approval and control",
        "Error handling and reliability",
        "Security",
        "Technology",
        "Build process",
        "FAQ"
      ],
      "Workflow automation connects triggers, APIs, AI steps, validation, dashboards, alerts, and exception handling."
    ),
    related: aiRelated
  },
  {
    slug: "saas-and-product/saas-mvp-development",
    category: "SaaS & Product",
    title: "SaaS MVP Development",
    eyebrow: "Launch a focused SaaS product",
    description:
      "maxIEI builds SaaS MVPs with accounts, dashboards, admin systems, subscriptions, APIs, integrations, secure deployment, and a clear product scope.",
    ctas: ["Start a SaaS MVP Project", "Book a Product Build Call"],
    tags: ["SaaS MVP", "User accounts", "Admin dashboard", "Billing", "Cloud launch"],
    sections: sections(
      [
        "What is SaaS MVP development?",
        "Problems this solves",
        "SaaS MVPs maxIEI can build",
        "Core SaaS MVP features",
        "SaaS MVP architecture",
        "MVP scope",
        "SaaS user roles",
        "Dashboard sections",
        "AI-powered SaaS",
        "Integrations",
        "Security and permissions",
        "Deployment and launch",
        "Technology",
        "Build process",
        "FAQ"
      ],
      "A SaaS MVP should prove the product workflow while including the backend, account, dashboard, admin, billing, and launch foundations."
    ),
    related: saasRelated
  },
  {
    slug: "saas-and-product/multi-tenant-saas",
    category: "SaaS & Product",
    title: "Multi-Tenant SaaS",
    eyebrow: "One product, many organizations, safe boundaries",
    description:
      "Multi-tenant SaaS platforms where many organizations use one product safely with separated workspaces, secure data boundaries, roles, billing, and admin controls.",
    ctas: ["Start a Multi-Tenant SaaS Project", "Book a SaaS Architecture Call"],
    tags: ["Tenant isolation", "Workspaces", "Platform admin", "Tenant admin", "White label"],
    sections: sections(
      [
        "What is multi-tenant SaaS?",
        "Problems this solves",
        "Platforms maxIEI can build",
        "Core multi-tenant features",
        "Multi-tenant architecture",
        "Tenant isolation",
        "Database design",
        "User roles and permissions",
        "Platform admin vs tenant admin",
        "Tenant onboarding flow",
        "Subscription and billing",
        "White-label and tenant settings",
        "Security",
        "Technology",
        "Build process",
        "FAQ"
      ],
      "Multi-tenant SaaS requires data isolation, role design, tenant-aware APIs, admin boundaries, billing logic, and secure file access."
    ),
    related: saasRelated
  },
  {
    slug: "saas-and-product/subscription-platforms",
    category: "SaaS & Product",
    title: "Subscription Platforms",
    eyebrow: "Recurring revenue connected to product access",
    description:
      "Subscription platforms with pricing plans, recurring payments, customer accounts, feature access, billing events, usage limits, admin controls, and product workflows.",
    ctas: ["Start a Subscription Platform Project", "Book a SaaS Billing Call"],
    tags: ["Stripe billing", "Plans", "Customer portal", "Usage limits", "Feature access"],
    sections: sections(
      [
        "What is a subscription platform?",
        "Problems this solves",
        "Platforms maxIEI can build",
        "Core subscription features",
        "Subscription architecture",
        "Subscription models",
        "Pricing plans",
        "Access control",
        "Customer billing portal",
        "Stripe integration",
        "Billing lifecycle",
        "Failed payment and cancellation handling",
        "Usage limits and metering",
        "Security",
        "Technology",
        "Build process",
        "FAQ"
      ],
      "Subscription platforms need more than checkout: they connect plan rules, access, invoices, webhooks, failures, upgrades, cancellations, and admin visibility."
    ),
    related: saasRelated
  },
  {
    slug: "saas-and-product/admin-dashboards",
    category: "SaaS & Product",
    title: "Admin Dashboards",
    eyebrow: "A private control center for software operations",
    description:
      "Admin dashboards that help teams manage users, records, files, payments, workflows, reports, permissions, integrations, AI systems, and system activity.",
    ctas: ["Start an Admin Dashboard Project", "Book a Dashboard Planning Call"],
    tags: ["User management", "Permissions", "Data tables", "Reports", "Audit logs"],
    sections: sections(
      [
        "What is an admin dashboard?",
        "Problems this solves",
        "Dashboards maxIEI can build",
        "Core admin features",
        "Admin dashboard architecture",
        "Dashboard modules",
        "User and role management",
        "Data management",
        "Workflow and approval",
        "Analytics and reporting",
        "Activity logs and audit logs",
        "Integrations",
        "Security",
        "Technology",
        "Build process",
        "FAQ"
      ],
      "Admin dashboards are operational control systems, not just charts. They need permissions, actions, logs, APIs, filters, exports, and secure workflows."
    ),
    related: saasRelated
  }
];

export const solutions: ServicePage[] = [
  {
    slug: "ai-opportunity-sprint",
    category: "Solutions",
    title: "AI Opportunity Sprint",
    eyebrow: "Find the AI opportunity worth building first",
    description:
      "A focused sprint to map workflows, score AI opportunities, review feasibility, identify risks, and create a practical AI implementation roadmap.",
    ctas: ["Start an AI Opportunity Sprint", "Book a Strategy Call"],
    tags: ["AI readiness", "Workflow audit", "ROI scoring", "Roadmap"],
    sections: sections(
      [
        "What is the AI Opportunity Sprint?",
        "Why this sprint matters",
        "Who this is for",
        "What we analyze",
        "AI opportunities we look for",
        "Sprint process",
        "Opportunity scoring",
        "Deliverables",
        "What the final report includes",
        "What this sprint is not",
        "Technology and feasibility",
        "Security and governance",
        "Recommended next steps",
        "Timeline",
        "FAQ"
      ],
      "This sprint turns AI curiosity into a prioritized, technically realistic plan."
    ),
    related: ["AI Automation Systems", "RAG Knowledge Bases", "Workflow Automation"]
  },
  {
    slug: "saas-mvp-sprint",
    category: "Solutions",
    title: "SaaS MVP Sprint",
    eyebrow: "Turn a product idea into a buildable MVP plan",
    description:
      "A product strategy sprint for founders and teams that need SaaS scope, workflows, architecture, dashboards, billing plans, and launch phases.",
    ctas: ["Start a SaaS MVP Sprint", "Book a Product Strategy Call"],
    tags: ["Product scope", "MVP architecture", "SaaS features", "Launch plan"],
    sections: sections(
      [
        "What is the SaaS MVP Sprint?",
        "Why this sprint matters",
        "Who this is for",
        "What we analyze",
        "MVP scope",
        "SaaS features we plan",
        "SaaS architecture",
        "Product flow",
        "Sprint process",
        "Deliverables",
        "What this sprint is not",
        "Technical feasibility",
        "Security and SaaS readiness",
        "Timeline",
        "FAQ"
      ],
      "This sprint converts rough SaaS ideas into feature scope, architecture, user flows, risks, and build phases."
    ),
    related: ["SaaS MVP Development", "Multi-Tenant SaaS", "Subscription Platforms"]
  },
  {
    slug: "workflow-automation-sprint",
    category: "Solutions",
    title: "Workflow Automation Sprint",
    eyebrow: "Find the workflow worth automating first",
    description:
      "A workflow mapping sprint that captures current operations, marks bottlenecks, scores automation value, redesigns the flow, and creates a build blueprint.",
    ctas: ["Start a Workflow Automation Sprint", "Book a Workflow Mapping Call"],
    tags: ["Workflow X-Ray", "Bottleneck map", "Automation blueprint", "Tool audit"],
    sections: sections(
      [
        "The main problem",
        "Workflow X-Ray",
        "What the sprint does",
        "Workflow map",
        "Bottleneck heatmap",
        "Best-fit workflows",
        "Tools audit",
        "Automation blueprint",
        "Automation priority matrix",
        "What this sprint is not",
        "Sprint timeline",
        "Example sprint outcome",
        "FAQ"
      ],
      "This sprint makes messy operations visible before anyone writes automation code."
    ),
    related: ["Workflow Automation", "API Integration", "CRM Automation"]
  },
  {
    slug: "secure-portal-starter",
    category: "Solutions",
    title: "Secure Portal Starter",
    eyebrow: "Start with a safe portal foundation",
    description:
      "A starter foundation for client, staff, customer, partner, and document portals with login, roles, file vaults, dashboards, admin controls, and audit logs.",
    ctas: ["Start a Secure Portal", "Book a Portal Planning Call"],
    tags: ["Client portal", "Staff portal", "File vault", "Audit logs"],
    sections: sections(
      [
        "What is the Secure Portal Starter?",
        "Problems this solves",
        "Portals maxIEI can start from this foundation",
        "Core starter features",
        "Advanced features you can add",
        "Portal architecture",
        "Portal modules",
        "Before and after",
        "Use cases",
        "Security",
        "Integrations",
        "Starter vs full portal",
        "Timeline",
        "FAQ"
      ],
      "A secure portal foundation reduces risk while giving teams a practical starting point for private software access."
    ),
    related: ["Admin Dashboards", "Secure Software Development", "Client Portals"]
  },
  {
    slug: "rag-knowledge-base-starter",
    category: "Solutions",
    title: "RAG Knowledge Base Starter",
    eyebrow: "Turn knowledge into an AI assistant",
    description:
      "A starter build for document upload, ingestion, vector search, AI Q&A, source citations, admin controls, permissions, and secure deployment.",
    ctas: ["Start a RAG Knowledge Base", "Book a Knowledge Base Planning Call"],
    tags: ["Document upload", "Vector search", "Source citations", "Admin dashboard"],
    sections: sections(
      [
        "What is the RAG Knowledge Base Starter?",
        "Problems this solves",
        "Knowledge sources",
        "Starter modules",
        "Core starter features",
        "Optional advanced features",
        "RAG architecture",
        "Answers with sources",
        "Use cases",
        "Before and after",
        "Security and permissions",
        "Starter vs full RAG platform",
        "Timeline",
        "FAQ"
      ],
      "This starter gives teams a usable AI knowledge assistant with source control and a path to grow."
    ),
    related: ["RAG Knowledge Bases", "AI Chatbots", "Internal AI Copilots"]
  }
];

export const faqs: Card[] = [
  {
    title: "What does maxIEI build?",
    text: "AI automation systems, SaaS platforms, custom web applications, admin dashboards, secure portals, API integrations, data pipelines, and cloud-ready backend systems."
  },
  {
    title: "Where is the team based?",
    text: "Headquarters is Austin, Texas. The engineering team works across seven countries — Japan, Mexico, Malaysia, the Philippines, France, Brazil, and the United States — which gives roughly sixteen hours of daily coverage."
  },
  {
    title: "Can you work with existing tools?",
    text: "Yes. We connect CRMs, Stripe, Google Workspace, help desks, email systems, spreadsheets, databases, AI APIs, and custom internal tools."
  },
  {
    title: "Do you only build AI chatbots?",
    text: "No. Chatbots are one option. We also build RAG knowledge bases, AI agents, document automation, reporting systems, internal copilots, and workflow automation."
  },
  {
    title: "How do you handle security?",
    text: "We plan authentication, permissions, encrypted storage, protected APIs, audit logs, secure file access, webhook verification, monitoring, and admin controls from the first architecture session."
  },
  {
    title: "What should I prepare before contacting you?",
    text: "Bring your goal, current workflow, tools you use, users who need access, sensitive data requirements, timeline, budget range, and any product or automation ideas."
  }
];

export const serviceBySlug = (slug?: string[]) => {
  const key = slug?.join("/") || "";
  return servicePages.find((page) => page.slug === key);
};

export const solutionBySlug = (slug: string) => solutions.find((page) => page.slug === slug);
