// Single source of truth for every fact on ghaf.dev.
// Figures, dates and titles follow public/Abdul-Gafur_CV.pdf. Change a fact here and every page follows.

export const SITE_URL = "https://ghaf.dev";

export const PROFILE = {
  name: "Abdul-Gafur Saeed",
  shortName: "Abdul-Gafur",
  initials: "AG",
  title: "Digital Innovation & Technology Professional",
  disciplines: [
    "Digital Innovation",
    "Enterprise Technology",
    "Enterprise Architecture",
    "Artificial Intelligence",
    "Cloud Engineering",
    "Digital Transformation",
  ],
  current: {
    role: "Digital & Innovation Expert",
    detail: "AU Tech Fellow · MIS Application Unit",
    org: "African Union Commission",
    since: "April 2026",
  },
  location: "Addis Ababa, Ethiopia",
  reach: "Working across Africa",
  email: "abdulgafurshaattir@gmail.com",
  cv: "/Abdul-Gafur_CV.pdf",
  cvFileName: "Abdul-Gafur_Saeed_CV.pdf",
  photo: "/profile-au.jpg",
  photoAlt: "Abdul-Gafur Saeed standing beneath the African Union emblem",
  photoSize: { width: 1200, height: 1600 },
  linkedin: "https://www.linkedin.com/in/abdul-gafur-saeed-b26434246/",
  github: "https://github.com/Abdul-Gafur",
  whatsapp: "https://wa.me/233547322637",
};

export const SEO = {
  image: { url: "/og.png", width: 1200, height: 630, alt: "Abdul-Gafur Saeed — Digital Innovation & Technology Professional" },
  title: "Abdul-Gafur Saeed | Digital Innovation, AI & Solution Architecture",
  description:
    "Abdul-Gafur Saeed is a Digital Innovation and Technology Professional specializing in enterprise architecture, AI engineering, cloud infrastructure and digital transformation across Africa.",
};

export const NAV = [
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/work", label: "Work" },
  { href: "/expertise", label: "Expertise" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

/* ---------- Home ---------- */

export const HERO = {
  headline: "Building technology that solves complex problems and creates lasting impact.",
  intro: [
    "I am a Digital Innovation & Technology Professional working across enterprise architecture, AI engineering, cloud infrastructure and digital transformation.",
    "I design and deliver secure, scalable digital solutions that help institutions and businesses turn complex challenges into practical, sustainable outcomes.",
  ],
};

export const INTRO = {
  title: "Beyond building software. Engineering solutions that matter.",
  paragraphs: [
    "Technology is most valuable when it solves a real problem, improves how an organization operates or creates opportunities for people.",
    "My work spans the full technology lifecycle: understanding institutional and business requirements, designing the architecture, engineering the application, implementing the infrastructure and supporting production delivery.",
    "I have worked with institutional stakeholders, led multidisciplinary engineering teams and built digital products for education, entrepreneurship, public-sector systems and enterprise operations.",
  ],
};

// Each figure is defined precisely so a reader knows what was measured.
export const METRICS = [
  {
    value: "~35,000",
    label: "Ndiara users",
    detail: "Approximate platform users across six African countries, during my time as CTO.",
    href: "/work/ndiara",
  },
  {
    value: "200+",
    label: "Policy documents",
    detail: "Institutional documents indexed by AskAU, the AUC's enterprise knowledge assistant.",
    href: "/work/askau",
  },
  {
    value: "5",
    label: "Selection stages digitized",
    detail: "Nomination, candidate information, validation, review and selection, unified in the AUC Candidature Platform I architected.",
    href: "/work/auc-candidature-platform",
  },
  {
    value: "40%",
    label: "Lower recovery time",
    detail: "Reduction in recovery time objectives from CloudSnap's cross-cloud disaster recovery.",
    href: "/work/cloudsnap",
  },
];

/* ---------- Expertise ---------- */

export const EXPERTISE = [
  {
    id: "architecture",
    title: "Enterprise Architecture & Software Engineering",
    short:
      "Designing robust enterprise applications, APIs, integrations and information systems that support organizational requirements and long-term scalability.",
    detail:
      "Directorates and businesses usually arrive with a problem, not a specification. I run the requirements conversations, weigh the options on cost, privacy and hosting, and write the architecture and decision records a team can build from. Then I build the parts that are hardest to get right: sign-in, permissions and the integrations where data usually goes wrong.",
    proof: [
      "Ndiara: one REST middleware layer joining six external platforms, instead of a separate integration for every partner.",
      "Authored the AUC Application Development Lifecycle SOP and Technology Selection Guidelines.",
      "AUC Candidature Platform: application architecture and backend stack for the nomination and selection system.",
    ],
    work: ["auc-candidature-platform", "ndiara", "offline-first-emr"],
  },
  {
    id: "ai",
    title: "Artificial Intelligence & Intelligent Systems",
    short:
      "Developing practical AI solutions, enterprise knowledge assistants, retrieval-augmented generation systems and intelligent applications that turn organizational data into useful knowledge.",
    detail:
      "An institution can't run on a chatbot that guesses. The AI I build shows where each answer came from, is measured against a benchmark before it ships, and can run on hardware the institution controls.",
    proof: [
      "AskAU: 88% Recall@5 and 94% citation accuracy on 50+ validated questions across 5 AU treaties.",
      "SmartSakuu: personal data scrubbed before any prompt; a teacher approves every generated question.",
      "ScrapTrace: fine-tuned MobileNetV2 reaching 87.1% accuracy on a held-out e-waste test set.",
    ],
    work: ["askau", "smartsakuu", "scraptrace"],
  },
  {
    id: "cloud",
    title: "Cloud Infrastructure & DevSecOps",
    short:
      "Engineering secure cloud and on-premises environments, automating deployment pipelines, implementing infrastructure as code and improving production reliability.",
    detail:
      "Manual releases are where outages start. I automate the path from commit to production, control who can touch it, and design for recovery before it is needed.",
    proof: [
      "Deployment lead time cut from hours to under 15 minutes across 20+ GitHub Actions pipelines.",
      "Recovery time objectives cut 40% with CloudSnap's cross-cloud backup across 15+ microservices.",
      "Zero-trust access across 50+ IAM roles and 100+ production secrets, with 99.9% uptime.",
    ],
    work: ["cloudsnap"],
  },
  {
    id: "transformation",
    title: "Digital Transformation & Technology Leadership",
    short:
      "Bridging institutional needs and technology implementation through solution design, architecture governance, technical strategy and multidisciplinary team leadership.",
    detail:
      "Technology changes an organization only when people adopt it and it keeps working after the project ends. I lead teams, write the standards projects are checked against, and train the people who will use and maintain what we build.",
    proof: [
      "Contributed to the AUC 6-Year ICT Strategy, assessing institutional gaps in AI adoption and software development.",
      "Led a 5-person team across product, frontend, backend, QA and cloud as CTO of Paahibu Space.",
      "Wrote 3 AI playbooks and trained 60+ AUC staff across 3 directorates.",
    ],
    work: ["askau", "ndiara"],
  },
];

export const CAPABILITIES = [
  ["Enterprise architecture", "Solution design, system integration, API architecture, enterprise application governance"],
  ["Backend engineering", ".NET, C#, Python (FastAPI, Django), Node.js, PHP (Laravel)"],
  ["Frontend engineering", "React, Next.js, TypeScript, JavaScript"],
  ["AI engineering", "RAG, LLM integration, LangChain, LangGraph, E5 embeddings, hybrid and vector search, Azure OpenAI, Qwen"],
  ["Machine learning", "TensorFlow, Keras, OpenCV, CNNs, model pruning and compression, evaluation design"],
  ["Cloud engineering", "AWS, Microsoft Azure, Docker, Kubernetes"],
  ["DevSecOps", "GitHub Actions, Jenkins, Terraform, CloudFormation, CI/CD, secrets management"],
  ["Data engineering & analytics", "PostgreSQL, pgvector, SQL Server, MySQL, ETL pipelines, DHIS2, KoboToolbox, Power BI, DAX"],
  ["Security", "Secure SDLC, OWASP ASVS 4.0, ISO/IEC 27001-aligned controls, IAM least privilege, access control"],
];

export const SELECTION_PRINCIPLE =
  "I approach technology selection based on architectural suitability, security, maintainability, interoperability, scalability and long-term organizational value — not simply familiarity with a particular framework.";

/* ---------- Work ---------- */

export const PROJECTS = [
  {
    slug: "askau",
    name: "AskAU",
    kind: "Enterprise AI Knowledge Assistant",
    org: "African Union Commission",
    period: "2026",
    status: "Operational pilot",
    role: "Architect & developer",
    summary:
      "An enterprise AI assistant that makes institutional knowledge easier to find through secure, permission-aware retrieval and answers grounded in cited sources.",
    contribution: "Solution architecture, RAG design, retrieval engineering, LLM integration and application development.",
    stack: ["Python", "FastAPI", "LangGraph", "PostgreSQL", "pgvector", "E5 embeddings", "Azure OpenAI", "Qwen 8B", "Entra ID", "SharePoint Graph API"],
    results: [
      { value: "88%", label: "Recall@5" },
      { value: "82%", label: "Context precision" },
      { value: "94%", label: "Citation accuracy" },
    ],
    overview:
      "AskAU is an enterprise retrieval-augmented generation (RAG) assistant for African Union Commission staff. It indexes 200+ institutional policy documents and answers questions with citations to the exact source, so every answer can be checked.",
    challenge: [
      "AUC staff dig through 200+ policy documents spread across SharePoint. Finding the clause that governs a decision can take hours, and answers given from memory are hard to audit.",
      "A public chatbot was not an option. Every answer must be traceable to a source, staff must only see what they are allowed to read, and institutional data has to be able to stay on AU infrastructure.",
    ],
    myRole: [
      "Wrote the requirements and the solution architecture.",
      "Compared Microsoft 365 Copilot, Azure OpenAI and self-hosted models on privacy, CPU-only hosting, running cost and vendor lock-in, and recommended a phased path starting with an in-house retrieval pipeline.",
      "Built the retrieval pipeline, the LLM gateway and the application.",
      "Designed and ran the evaluation, then the pilot with MISD analysts.",
    ],
    architecture: {
      stages: [
        { title: "Approved sources", items: ["SharePoint libraries via Microsoft Graph API", "Institutional policy documents"] },
        { title: "Ingestion", items: ["Parsing and chunking", "E5 embeddings", "Permission metadata kept per chunk"] },
        { title: "Hybrid retrieval", items: ["pgvector semantic search", "PostgreSQL full-text search", "Filtered to what the user may read"] },
        { title: "Orchestration", items: ["LangGraph multi-step pipeline", "Guardrails against unsupported answers"] },
        { title: "LLM gateway", items: ["Azure OpenAI", "Qwen 8B on AUC infrastructure", "One interface, swappable runtime"] },
        { title: "Grounded answer", items: ["Streamed response", "Citations to document and section"] },
      ],
      crosscut: ["Entra ID sign-in", "Permission-aware filtering", "Benchmark evaluation", "Low-resource language testing"],
      note: "Conceptual diagram. No internal AUC documents, configurations or diagrams are published here.",
    },
    implementation: [
      "An end-to-end, multi-step retrieval pipeline in Python with LangGraph and FastAPI, connected to SharePoint through the Microsoft Graph API.",
      "An open-source hybrid retrieval engine combining pgvector semantic search with PostgreSQL full-text search, tuned for domain-specific policy recall.",
      "A modular, vendor-agnostic LLM gateway with dual runtimes: Azure OpenAI for rapid prototyping and Qwen 8B hosted locally on AUC infrastructure, with no external token dependency.",
      "Responsible-AI guardrails: strict source-grounded citations for auditability, permission-aware access filtering and testing in low-resource institutional languages.",
      "A containerized deployment with progressive streaming, refined during the pilot on chunking strategy, retrieval behaviour and access-control boundaries.",
    ],
    decisions: [
      {
        choice: "Hybrid retrieval over vector search alone",
        why: "Policy questions mix concepts with exact terms such as article numbers and treaty names. Full-text search catches the exact terms; semantic search catches the meaning.",
      },
      {
        choice: "An LLM gateway instead of a single model",
        why: "It lets the AUC prototype on Azure OpenAI and move to a self-hosted model on its own servers without rewriting the application, avoiding vendor lock-in.",
      },
      {
        choice: "PostgreSQL with pgvector",
        why: "One open-source database for documents, vectors and full-text search keeps the system simple to host and maintain on institutional infrastructure.",
      },
      {
        choice: "Measure before shipping",
        why: "A ground-truth benchmark made retrieval quality visible, so changes to chunking or ranking could be judged on evidence rather than impressions.",
      },
    ],
    outcomes: [
      "Evaluated on a ground-truth benchmark of 50+ validated question–answer pairs across 5 institutional treaties.",
      "Piloted with 20 MISD analysts; their feedback shaped chunking, retrieval and access control.",
    ],
    evidence: [
      "Benchmark results: 88% Recall@5, 82% context precision, 94% citation accuracy.",
      "Operational pilot with 20 MISD analysts.",
      "Internal AUC system: screens and source documents are not published.",
    ],
    links: [],
  },
  {
    slug: "auc-candidature-platform",
    name: "AUC Candidature Platform",
    kind: "Enterprise Nomination & Selection Management System",
    org: "African Union Commission",
    period: "2026",
    status: "Delivered",
    role: "Solution architect & technical lead",
    summary:
      "An institutional platform that streamlines and modernizes the African Union Commission's nomination and selection processes in one structured, traceable workflow.",
    contribution: "Solution architecture, backend technology direction, integration design and technical implementation guidance.",
    stack: [".NET", "ASP.NET Core", "Next.js", "React", "REST APIs", "Role-based access"],
    results: [
      { value: "5", label: "Lifecycle stages digitized" },
      { value: "6", label: "Core capability areas" },
    ],
    overview:
      "The AUC Candidature Platform provides a centralized environment for managing candidate submissions, reviewing nominations, validating candidate information and coordinating selection workflows. It replaces fragmented, manual processes with a structured digital workflow that improves consistency, administrative efficiency and visibility throughout the candidature lifecycle.",
    challenge: [
      "Institutional nomination and selection processes involve multiple stakeholders, candidate records, supporting documentation, validation requirements and approval stages.",
      "Managed through fragmented administrative processes, these activities create operational bottlenecks, complicate tracking and make it hard to keep records consistent across the selection lifecycle.",
    ],
    myRole: [
      "Owned the solution architecture and technology direction, translating institutional requirements into a structured enterprise application design.",
      "Defined the application architecture and recommended the backend technology stack.",
      "Established the system integration considerations.",
      "Guided the technical implementation approach for security, maintainability, scalability and long-term institutional requirements.",
    ],
    architecture: {
      stages: [
        { title: "Nomination", items: ["Candidate nominations", "Centralized submissions"] },
        { title: "Candidate information", items: ["Structured profiles", "Supporting documentation"] },
        { title: "Validation & review", items: ["Candidate verification", "Review workflows"] },
        { title: "Selection", items: ["Institutional review stages", "Digitized progression"] },
        { title: "Tracking & oversight", items: ["Status and progress visibility", "Administrative management"] },
      ],
      crosscut: [
        "Role-based access",
        "API-driven design",
        "Modular .NET / ASP.NET Core backend",
        "Next.js / React frontend",
      ],
      note: "Conceptual diagram. No internal AUC documents, configurations or candidate data are published here.",
    },
    implementation: [
      "Nomination management: centralized handling of candidate nominations and submissions.",
      "Candidate information management: structured capture of candidate profiles and supporting documentation.",
      "Validation and review: organized verification and review workflows.",
      "Selection workflow management: candidates progress through institutional review and selection stages digitally.",
      "Process tracking and administration: visibility into candidature status, with central oversight of activities and records.",
    ],
    decisions: [
      {
        choice: ".NET / ASP.NET Core backend",
        why: "A mature enterprise framework with strong built-in security and long-term support suits an institutional system expected to run for years.",
      },
      {
        choice: "Modular application architecture",
        why: "Each stage of the candidature lifecycle can change as institutional rules evolve, without destabilizing the rest of the system.",
      },
      {
        choice: "API-driven design",
        why: "Separating the Next.js frontend from the backend keeps both maintainable and leaves room to integrate with other institutional systems.",
      },
      {
        choice: "Role-based access",
        why: "Candidate information is sensitive. Each stakeholder can see and act only on what their role permits.",
      },
    ],
    outcomes: [
      "Delivered a centralized digital platform for institutional candidature processes, giving a structured approach to nominations, candidate review, validation and selection.",
      "Established a foundation for more consistent, traceable and efficient nomination and selection operations.",
    ],
    evidence: [
      "Project category: enterprise application · digital transformation · institutional workflow automation.",
      "Internal AUC system: screens and candidate data are not published.",
    ],
    links: [],
  },
  {
    slug: "smartsakuu",
    name: "SmartSakuu",
    kind: "AI-Powered Education Platform",
    org: "SmartSakuu",
    period: "2022 – present",
    status: "Piloted in 8 schools",
    role: "Founder & lead architect",
    summary:
      "A school operating system and AI learning platform connecting school operations, assessment history and learner activity to help teachers find learning gaps and improve outcomes.",
    contribution: "Founder: product strategy, system architecture and software development.",
    stack: ["LLMs", "PII scrubbing", "InfixEdu", "Multi-tenant SaaS", "Education analytics"],
    results: [
      { value: "8", label: "Partner schools" },
      { value: "600+", label: "Students and teachers" },
    ],
    overview:
      "SmartSakuu connects school administration, curriculum delivery and personalized learning for African classrooms. Its AI tutor, aligned with Ghana Education Service (GES) and NaCCA standards, helps students prepare for the BECE and WASSCE examinations.",
    challenge: [
      "Teachers preparing students for national examinations can't diagnose every learner's gaps by hand, and school records, fees and assessments often sit in separate places.",
      "Any AI used with children must protect their data and stay faithful to the national curriculum.",
    ],
    myRole: [
      "Founded the product and set its direction.",
      "Designed the system architecture and led software development.",
      "Partnered with GNAPS Wa Municipal to run the pilot.",
    ],
    architecture: {
      stages: [
        { title: "School records", items: ["Admissions, records, fee tracking", "Built on InfixEdu"] },
        { title: "Learning data", items: ["Quiz results", "Assessment history"] },
        { title: "Privacy layer", items: ["Automated PII scrubbing", "Before any prompt"] },
        { title: "AI tutor", items: ["Finds learning gaps", "GES and NaCCA-aligned questions"] },
        { title: "Teacher review", items: ["Human approval of every generated item"] },
        { title: "Student practice", items: ["Personalized practice sets"] },
      ],
      crosscut: ["Child data protection", "Curriculum fidelity", "Dialect and accent-tolerant prompts"],
    },
    implementation: [
      "An AI tutor that analyzes student quiz results to pinpoint learning gaps and generate personalized practice questions.",
      "Automated PII scrubbing on student records before any data reaches a model.",
      "Dialect- and accent-tolerant prompt templates for Ghanaian classrooms.",
      "Mandatory teacher validation of generated instructional material.",
      "School workflows (admissions, records, fee tracking) by extending InfixEdu.",
    ],
    decisions: [
      {
        choice: "Human-in-the-loop teacher approval",
        why: "Teachers stay responsible for what students see, which protects curriculum fidelity and builds trust in the tool.",
      },
      {
        choice: "Scrub personal data before prompting",
        why: "Children's data should never leave the platform. Removing identifiers first lowers the risk whichever model is used.",
      },
      {
        choice: "Extend an existing school system",
        why: "Building on InfixEdu for admissions and fees let the work focus on the learning features schools could not get elsewhere.",
      },
    ],
    outcomes: ["Piloted across 8 partner schools with GNAPS Wa Municipal, reaching 600+ students and teachers."],
    evidence: ["Pilot partnership with GNAPS Wa Municipal."],
    links: [],
  },
  {
    slug: "offline-first-emr",
    name: "Offline-First EMR",
    kind: "Point-of-Care Records & Health Logistics Decision Support",
    org: "Health informatics",
    period: "2024 – 2025",
    status: "Prototype",
    role: "Lead architect & developer",
    summary:
      "An offline-first electronic medical record and dispensary inventory system for rural clinics, with a decision-support engine that flags stockout risk and expiring medicine before it happens.",
    contribution: "Architecture, offline synchronization, inventory decision-support engine and validation against clinic data.",
    stack: ["SQLite", "REST sync", "Offline-first", "AMC / FEFO models", "Decision support"],
    results: [],
    overview:
      "A health informatics prototype for low-connectivity facilities in Wa, in Ghana's Upper West Region. It keeps clinical and dispensary workflows running through network outages, and uses consumption and expiry data to help clinics avoid stockouts and wasted medicine.",
    challenge: [
      "Rural clinics in Wa lose connectivity in the middle of consultations, and cloud-only record systems stop working when they do.",
      "Nobody sees a stockout or an expiring batch coming, and procurement bottlenecks are hard to diagnose when stock, consumption and budget data sit apart.",
    ],
    myRole: [
      "Designed the system architecture as lead architect.",
      "Built the offline storage and background synchronization.",
      "Designed and implemented the pharmaceutical decision-support engine.",
      "Validated the inventory and replenishment algorithms against historical clinic data.",
    ],
    architecture: {
      stages: [
        { title: "Point of care", items: ["Clinical records", "Dispensary transactions"] },
        { title: "Local store", items: ["SQLite cache on the device", "Works during outages"] },
        { title: "Background sync", items: ["Asynchronous REST synchronization", "Runs when the network returns"] },
        { title: "Decision-support engine", items: ["Average Monthly Consumption", "First-Expired, First-Out batches", "Days of Stock Remaining"] },
        { title: "Alerts & actions", items: ["Stockout risk", "Redistribution before expiry", "Budget-ceiling tracking"] },
      ],
      crosscut: ["Offline-first by design", "Validated on retrospective dispensing logs"],
      note: "Prototype for low-connectivity facilities. It is not a production deployment.",
    },
    implementation: [
      "Local SQLite caching with asynchronous background REST synchronization, so point-of-care workflows continue during network outages.",
      "A pharmaceutical decision-support engine that applies Average Monthly Consumption (AMC) velocity and First-Expired, First-Out (FEFO) batch tracking to estimate Days of Stock Remaining.",
      "Alerts for potential stockout risk and for inter-facility redistribution before medicine expires.",
      "Tracking of revolving drug-fund cash releases against facility budget ceilings, to diagnose procurement bottlenecks.",
    ],
    decisions: [
      {
        choice: "Offline-first with a local database",
        why: "Connectivity in rural clinics is unreliable. Writing locally first and syncing later means a consultation never waits for the network.",
      },
      {
        choice: "First-Expired, First-Out over arrival order",
        why: "For medicines, expiry matters more than when stock arrived. Dispensing the earliest-expiring batch first reduces waste.",
      },
      {
        choice: "Consumption-based stock forecasting",
        why: "Average Monthly Consumption turns dispensing history into Days of Stock Remaining, a figure clinic staff can act on.",
      },
      {
        choice: "Validate against historical data",
        why: "Testing alerts on past dispensing logs shows whether they would have caught real stockouts before anyone relies on them.",
      },
    ],
    outcomes: [
      "Inventory and replenishment algorithms validated against retrospective primary clinic dispensing logs, measuring stockout alert precision against historical stock runs.",
      "Flags stockout risk and suggests moving stock to another facility before it expires.",
    ],
    evidence: ["Prototype validated on retrospective dispensing logs from primary clinics in Wa."],
    links: [],
  },
  {
    slug: "ndiara",
    name: "Ndiara",
    kind: "Digital Business Ecosystem",
    org: "Paahibu Space",
    period: "2022 – 2026",
    status: "In use · ~35,000 users",
    role: "Chief Technology Officer",
    summary:
      "A multi-country platform supporting women-led businesses with integrated digital business tools, financial services and entrepreneurship opportunities.",
    contribution: "Technical leadership, product architecture, engineering management and platform delivery.",
    stack: ["Laravel", "Next.js", "REST middleware", "Multi-tenant", "Payment integrations"],
    results: [
      { value: "~35,000", label: "Users in six countries" },
      { value: "74%", label: "90-day retention" },
      { value: "<10 min", label: "Programme reports, from 3–5 days" },
    ],
    overview:
      "Ndiara gives women-led micro, small and medium enterprises (MSMEs) one platform for e-commerce, learning, HR, point of sale, accounting and a digital wallet, across six African countries.",
    challenge: [
      "Women-led businesses ran sales, stock, staff and payments in separate tools, and their data didn't connect.",
      "Programme teams needed reports on those businesses, and putting each one together took 3–5 days.",
    ],
    myRole: [
      "Directed technical strategy, architecture and engineering delivery as CTO.",
      "Led a 5-person team across product management, frontend, backend, QA and cloud infrastructure.",
      "Owned system design and delivery coordination.",
    ],
    architecture: {
      stages: [
        { title: "Users", items: ["Women-led MSMEs", "Programme teams", "Six countries"] },
        { title: "Web platform", items: ["Next.js frontend"] },
        { title: "Core API", items: ["Laravel", "Multi-tenant"] },
        { title: "Business modules", items: ["E-commerce", "Learning", "HR", "Point of sale", "Accounting", "Wallet"] },
        { title: "REST middleware", items: ["Six external platforms", "Payment providers"] },
      ],
      crosscut: ["Automated programme reporting"],
    },
    implementation: [
      "An integrated ecosystem spanning e-commerce, learning and development, HR, point of sale, accounting and digital wallet services.",
      "REST API middleware integrating six external platforms, so business services work together across countries.",
      "Automated programme reporting, cutting turnaround from 3–5 days to under 10 minutes.",
    ],
    decisions: [
      {
        choice: "One middleware layer for integrations",
        why: "A single integration layer is easier to secure and maintain than a separate connection for every partner platform.",
      },
      {
        choice: "Modules on one platform instead of separate apps",
        why: "Sales, stock, staff and payments share data, which is what makes automated reporting possible.",
      },
    ],
    outcomes: [
      "Approximately 35,000 users across six African countries.",
      "74% of users still active after 90 days.",
      "Programme reporting down from 3–5 days to under 10 minutes.",
    ],
    evidence: ["User figure is approximate platform reach as reported by Paahibu Space."],
    links: [{ label: "Visit Ndiara", href: "https://ndiara.vercel.app" }],
  },
  {
    slug: "cloudsnap",
    name: "CloudSnap",
    kind: "Cloud Infrastructure & Disaster Recovery",
    org: "CloudFruition",
    period: "2025 – 2026",
    status: "Delivered at CloudFruition",
    role: "DevSecOps engineer",
    summary:
      "Cross-cloud backup, disaster recovery and workload migration between AWS and Azure, built to improve resilience and reduce operational overhead.",
    contribution: ".NET integration services, cloud infrastructure, CI/CD automation and security hardening.",
    stack: [".NET", "AWS", "Azure", "Docker", "GitHub Actions", "AWS Secrets Manager", "CloudWatch"],
    results: [
      { value: "40%", label: "Lower RTO" },
      { value: "15+", label: "Microservices covered" },
      { value: "<15 min", label: "Deployment lead time" },
    ],
    overview:
      "CloudSnap automates backup, disaster recovery and workload migration between AWS and Microsoft Azure for a microservice estate, so services can be restored on either cloud.",
    challenge: [
      "Recovering workloads between AWS and Azure was slow and depended on manual steps.",
      "Releases and access were also managed by hand, which slowed delivery and created security risk.",
    ],
    myRole: [
      "Developed the .NET integration services behind CloudSnap.",
      "Built and maintained the CI/CD pipelines.",
      "Hardened cloud and pipeline security.",
    ],
    architecture: {
      stages: [
        { title: "Workloads", items: ["15+ microservices", "Containerized with Docker"] },
        { title: "Integration services", items: [".NET", "Backup and restore orchestration"] },
        { title: "Clouds", items: ["AWS", "Microsoft Azure"] },
        { title: "Delivery", items: ["GitHub Actions", "Zero-downtime releases"] },
      ],
      crosscut: ["50+ least-privilege IAM roles", "100+ secrets in AWS Secrets Manager", "CloudWatch monitoring"],
    },
    implementation: [
      ".NET integration services for automated cross-cloud backup, disaster recovery and workload migration across 15+ microservices.",
      "Microservices containerized with Docker and Docker Compose for portable deployments and faithful local testing.",
      "20+ GitHub Actions pipelines automating build verification, testing and zero-downtime releases.",
      "Zero-trust access across 50+ IAM roles, 100+ production API secrets in AWS Secrets Manager, and CloudWatch monitoring.",
    ],
    decisions: [
      {
        choice: "Cross-cloud rather than single-region recovery",
        why: "Restoring on a second provider protects against a provider-level outage, not only a failed region.",
      },
      {
        choice: "Automate every release",
        why: "Pipelines with tests and zero-downtime deploys removed the manual steps where incidents start.",
      },
    ],
    outcomes: [
      "Recovery time objectives reduced by 40%.",
      "Deployment lead time cut from hours to under 15 minutes.",
      "99.9% service uptime maintained.",
    ],
    evidence: ["Client work at CloudFruition: code and infrastructure are not public."],
    links: [],
  },
  {
    slug: "scraptrace",
    name: "ScrapTrace",
    kind: "AI-Powered E-Waste Intelligence",
    org: "GIZ Data Lab E-Waste Hackathon",
    period: "2026",
    status: "Hackathon prototype · Winner",
    role: "Team member: AI and backend",
    summary:
      "An AI-enabled e-waste appraisal and Extended Producer Responsibility (EPR) marketplace concept connecting informal collectors, recyclers and other stakeholders.",
    contribution: "Computer vision model, platform backend and shared service contracts.",
    stack: ["TensorFlow", "Keras", "OpenCV", "MobileNetV2", "FastAPI", "Next.js", "PostgreSQL", "TypeScript / Zod"],
    results: [
      { value: "87.1%", label: "Test accuracy" },
      { value: "0.81", label: "Macro F1" },
      { value: "1st", label: "GIZ Data Lab 2026" },
    ],
    overview:
      "ScrapTrace identifies e-waste from a photograph and records every handoff between collectors and recyclers, so recovered material can be valued and traced. It was the winning team entry at the GIZ Data Lab E-Waste Hackathon 2026.",
    challenge: [
      "E-waste changes hands between informal collectors and recyclers with no record anyone can trust, so recovered material can't be traced and producers can't show they meet their responsibilities.",
      "Collectors also have no quick, fair way to know what an item is worth.",
    ],
    myRole: [
      "Curated the image dataset and fine-tuned the classification model.",
      "Built the backend with QR handoffs and records that can't be altered.",
      "Co-designed the shared contracts between the web, backend and vision services.",
    ],
    architecture: {
      stages: [
        { title: "Collector", items: ["Photographs an item", "Web app"] },
        { title: "Vision service", items: ["MobileNetV2 classifier", "5 e-waste categories"] },
        { title: "Platform backend", items: ["FastAPI and PostgreSQL", "QR handoffs", "Tamper-evident records"] },
        { title: "Marketplace", items: ["Recyclers", "Producers (EPR)"] },
      ],
      crosscut: ["Shared TypeScript / Zod contracts", "Role-based permissions"],
      note: "Prototype built during the hackathon. It is not a production deployment.",
    },
    implementation: [
      "Curated and preprocessed a dataset of 1,232 e-waste images; fine-tuned MobileNetV2 with TensorFlow, Keras and OpenCV.",
      "Evaluated on a stratified 248-image held-out test set: 87.10% accuracy (216/248) and 0.8135 macro F1 across 5 categories, with over 91% precision on printed circuit boards.",
      "A FastAPI, Next.js and PostgreSQL backend with QR handoffs and records that can't be altered.",
      "Shared service contracts for image-inference validation, evidence integrity, lifecycle states and idempotency, and tests covering 3,648 permission combinations.",
    ],
    decisions: [
      {
        choice: "MobileNetV2",
        why: "A small, fast model that can run on modest hardware close to where collectors work.",
      },
      {
        choice: "Contracts shared across services",
        why: "Web, backend and vision services built by different team members agreed on one definition of every message.",
      },
    ],
    outcomes: ["Winning team entry, GIZ Data Lab E-Waste Hackathon 2026."],
    evidence: ["Team project; results measured on a held-out test split."],
    links: [],
  },
];

export const MORE_WORK = [
  {
    title: "Gender Observatory Hub",
    role: "Technical advisor",
    meta: "AUC · 2026",
    text: "A continental platform for statutory gender indicators from AU Member States and Regional Economic Communities. I reviewed the development work and advised the team on alignment with the AUC software development lifecycle SOP and development guidelines.",
    stack: "SDLC governance · Technical review",
  },
  {
    title: "African Blue Economy Dashboard",
    role: "Technical advisor",
    meta: "AUC · 2026",
    text: "A reporting platform for blue-economy indicators across AU Member States. I reviewed the development work and advised the team on alignment with the AUC software development lifecycle SOP and development guidelines.",
    stack: "SDLC governance · Technical review",
  },
  {
    title: "AUC application standards",
    role: "Author",
    meta: "AUC · 2026",
    text: "Contributed to the 6-Year ICT Strategy and authored the Application Development Lifecycle SOP, Application Security Guidelines (OWASP ASVS and ISO/IEC 27001-aligned), Technology Selection Guidelines and Software Acquisition Standards.",
    stack: "SDLC · OWASP ASVS · ISO/IEC 27001",
  },
  {
    title: "ECG arrhythmia classification",
    role: "BSc research",
    meta: "Research · 2024–2025",
    text: "Trained a CNN on the MIT-BIH Arrhythmia Database and applied first-order movement pruning with an inter-patient split: 3.8× smaller while keeping 96.2% sensitivity for ventricular ectopic beats.",
    stack: "TensorFlow · Keras · MIT-BIH",
  },
];

/* ---------- Experience ---------- */

export const EXPERIENCE = [
  {
    org: "African Union Commission",
    role: "Digital & Innovation Expert",
    note: "AU Tech Fellow · MIS Application Unit",
    dates: "Apr 2026 – Present",
    place: "Addis Ababa, Ethiopia",
    summary:
      "Contributing to the design, governance and implementation of institutional digital solutions, with a focus on enterprise application architecture, AI-enabled systems, data platforms and technology governance.",
    points: [
      "Architected and built AskAU, an enterprise RAG assistant over 200+ policy documents, piloted with 20 MISD analysts.",
      "Contributed to the AUC 6-Year ICT Strategy, assessing institutional gaps in AI adoption and software development.",
      "Authored the Application Development Lifecycle SOP, Application Security Guidelines, Technology Selection Guidelines and Software Acquisition Standards.",
      "Architected the AUC Candidature Platform, a centralized nomination and selection system, and set its technology direction.",
      "Advised the Gender Observatory Hub and Blue Economy Dashboard teams, reviewing their work for alignment with the AUC SDLC SOP and development guidelines.",
      "Wrote 3 AI playbooks, trained 60+ staff across 3 directorates and mentor engineering interns.",
    ],
    tags: ["Solution architecture", "Enterprise AI", "Python", ".NET", "Next.js", "OWASP ASVS", "SDLC governance"],
  },
  {
    org: "CloudFruition",
    role: "DevSecOps Engineer",
    dates: "Jul 2025 – Feb 2026",
    place: "London, UK · Remote",
    summary:
      "Cloud infrastructure, disaster recovery, deployment automation and secure software delivery across AWS and Azure.",
    points: [
      "Built CloudSnap's .NET services for cross-cloud backup and recovery across 15+ microservices, cutting recovery time objectives by 40%.",
      "Ran 20+ GitHub Actions pipelines, cutting deployment lead time from hours to under 15 minutes.",
      "Enforced zero-trust access across 50+ IAM roles and protected 100+ production secrets, with 99.9% uptime.",
    ],
    tags: ["AWS", "Azure", ".NET", "Docker", "GitHub Actions", "IAM"],
  },
  {
    org: "SmartSakuu",
    role: "Founder & Lead Architect",
    dates: "Jul 2022 – Present",
    place: "Ghana · Remote",
    summary:
      "Founded and engineered an AI-powered education and school management platform for African classrooms.",
    points: [
      "Built an AI tutor aligned with GES and NaCCA standards that finds learning gaps and writes practice questions.",
      "Protected children's data with automated PII scrubbing and mandatory teacher approval.",
      "Piloted with GNAPS Wa Municipal across 8 schools, reaching 600+ students and teachers.",
    ],
    tags: ["Product", "Architecture", "LLMs", "Education"],
  },
  {
    org: "Paahibu Space",
    role: "Chief Technology Officer",
    dates: "Mar 2022 – Mar 2026",
    place: "Wa, Ghana · Hybrid",
    summary:
      "Led technical strategy and a multidisciplinary engineering team building digital products for women-led businesses.",
    points: [
      "Directed architecture and delivery of Ndiara, used by approximately 35,000 people across six African countries.",
      "Led a 5-person team across product management, frontend, backend, QA and cloud infrastructure.",
      "Integrated six external platforms through REST middleware and automated reporting from 3–5 days to under 10 minutes.",
    ],
    tags: ["Technical leadership", "Laravel", "Next.js", "Integrations"],
  },
];

export const EARLIER = [
  ["Software & Cloud Facilitator", "High Ranking Academy", "2021 – 2022", "Moved school operations into a management system and trained staff on cloud tools."],
  ["Full-Stack Developer", "Nifty Global Systems", "2020 – 2021", "Built an online voting system and a logistics tracker, and supported a university information system."],
  ["Tech Lead & Facilitator", "NoniHub", "2020 – 2021", "Led development teams and mentored entrepreneurs in web, mobile and cloud."],
];

export const EDUCATION = [
  {
    degree: "MSc Computer and Information Science",
    school: "University of East London (online)",
    dates: "2026 – 2027",
  },
  {
    degree: "BSc Computer Science",
    school: "University of Business and Integrated Development Studies, Wa",
    dates: "2021 – 2025",
    note: "Thesis: deep learning for ECG arrhythmia detection with movement pruning.",
  },
];

// Add a credential's verification URL to `verify` and it is linked automatically.
export const CERTIFICATIONS = [
  { name: "Microsoft Certified: Azure Developer Associate", issuer: "Microsoft", verify: null },
  { name: "AWS Certified Developer – Associate", issuer: "Amazon Web Services", verify: null },
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", verify: null },
  { name: "Postman API Student Expert", issuer: "Postman", verify: null },
];

export const AWARDS = [
  { name: "Winning team, E-Waste Hackathon (ScrapTrace)", issuer: "GIZ Data Lab · 2026", href: "/work/scraptrace" },
  { name: "AI Innovation Award", issuer: "NoniHub" },
  { name: "Finalist, Ayoba Hackathon", issuer: "MTN · 2021" },
];

export const LANGUAGES = [
  ["Waale (Dagaare)", "Native"],
  ["English", "Fluent"],
  ["French", "Beginner"],
  ["Arabic", "Beginner"],
];

/* ---------- About ---------- */

export const ABOUT = {
  title: "Technology is most valuable when it solves real problems.",
  paragraphs: [
    "My work has been shaped by software engineering, technical leadership, enterprise architecture and digital innovation. I started in Ghana in 2020, building web systems for local organizations. Since then I have been CTO of a platform serving women-led businesses in six countries, a DevSecOps engineer for a London cloud company, and founder of an education technology company. Today I work on institutional technology at the African Union Commission in Addis Ababa.",
    "I work across the full technology lifecycle: understanding business and institutional requirements, designing architectures, engineering applications, implementing infrastructure and supporting production delivery.",
    "I believe effective technology leadership requires more than selecting frameworks or writing software. It requires understanding the problem, making sound architectural decisions, balancing security and scalability, and making sure the result delivers measurable value.",
  ],
  principles: [
    {
      title: "Start with the problem",
      text: "I spend time with the people who will use a system before deciding what to build, so the solution fits how the organization actually works.",
    },
    {
      title: "Evidence over impressions",
      text: "I measure what I build, from retrieval benchmarks to deployment lead times, and publish only figures I can explain.",
    },
    {
      title: "Secure and sovereign by design",
      text: "Access control, data protection and where data is hosted are architectural decisions, made at the start rather than added later.",
    },
    {
      title: "Built to be handed over",
      text: "Every system comes with documentation, standards and training, so it keeps working after the project ends.",
    },
  ],
  leadership: [
    ["5", "person engineering team led as CTO"],
    ["60+", "AUC staff trained in generative AI"],
    ["3", "AI implementation playbooks written"],
  ],
};

/* ---------- Insights ---------- */

export const RESEARCH = {
  title: "Exploring technology beyond implementation.",
  intro:
    "I am interested in how emerging technologies can address complex development and institutional challenges, particularly across Africa.",
  interests: [
    "Artificial intelligence in education and personalized learning",
    "Enterprise AI and institutional knowledge management",
    "Sovereign AI and responsible AI adoption",
    "Digital public infrastructure and institutional data systems",
    "Applied machine learning and computer vision",
    "Technology governance and sustainable digital transformation",
  ],
  themes: [
    {
      title: "Finding learning gaps from assessment records",
      text: "Using student assessment and learning records to identify learning gaps and support targeted instruction, with teachers in the loop.",
      project: "smartsakuu",
    },
    {
      title: "Modular, privacy-conscious enterprise AI for African institutions",
      text: "Designing AI architectures that can move between cloud and self-hosted models, keep data on institutional infrastructure and cite their sources.",
      project: "askau",
    },
    {
      title: "Computer vision for e-waste traceability",
      text: "Applying lightweight vision models to identify, value and trace e-waste as it moves from informal collectors to recyclers.",
      project: "scraptrace",
    },
  ],
  published: [
    {
      title: "Deep learning for ECG arrhythmia detection with movement pruning",
      venue: "BSc thesis, University of Business and Integrated Development Studies · 2025",
      text: "3.8× parameter compression while preserving 96.2% sensitivity for ventricular ectopic beats on the MIT-BIH benchmark, using an inter-patient split.",
    },
  ],
};

export const CONTACT = {
  title: "Let's build something meaningful.",
  text: [
    "I welcome conversations with technology leaders, institutions, research communities and organizations working to solve meaningful challenges through technology.",
    "Whether it involves enterprise architecture, AI innovation, digital transformation or building scalable technology products, I am open to impactful professional collaboration.",
  ],
  availability: "Based in Addis Ababa with a work permit — no sponsorship required.",
};

export function getProject(slug) {
  return PROJECTS.find((p) => p.slug === slug);
}
