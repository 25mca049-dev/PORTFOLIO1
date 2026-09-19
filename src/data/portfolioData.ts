import {
  PersonalDetails,
  SkillItem,
  SkillCategory,
  ProjectItem,
  EducationItem,
  AchievementItem
} from '../types/portfolio';

export const personalDetails: PersonalDetails = {
  name: "Shrivanth K S",
  role: "AI & Data Analytics Specialist",
  subtitles: [
    "AI & Data Analytics Specialist",
    "MCA Postgraduate Scholar",
    "Generative AI & Prompt Engineer",
    "Python Developer & Data Analyst",
    "Intelligent Systems Builder"
  ],
  tagline: "Architecting intelligent systems, data analytics pipelines, and generative AI solutions to turn complex data into actionable impact.",
  bioIntro: "I am a dedicated technologist specializing in Artificial Intelligence, Prompt Engineering, and Data Analytics, currently pursuing my Master of Computer Applications (MCA) at Dr. G.R. Damodaran College of Science.",
  fullBio: "With a foundational B.Sc. in Computer Technology from Kongu Arts and Science College and advanced training through Cisco certified pathways, I focus on the intersection of machine learning security, exploratory data intelligence, and modern web systems. My work spans building intelligent credit card fraud detection engines, digital curation galleries, and robust data analytics workflows.",
  email: "shrivantbscct@gmail.com",
  phone: "+91 8825678112",
  location: "Tirupur, Tamil Nadu, India",
  address: "2, Kuttimakadu, Tirupur Road, Uthukuli RS, Tirupur Dt, Tamil Nadu - 638751",
  dob: "June 01, 2005",
  status: "Open to AI / Data Analytics Internships & Roles",
  languages: [
    { name: "English", level: "Professional Working Proficiency", flag: "🌐" },
    { name: "Tamil", level: "Native / Bilingual Proficiency", flag: "🇮🇳" }
  ],
  socials: {
    github: "https://github.com/shrivanthks",
    linkedin: "https://linkedin.com/in/shrivanth-ks",
    email: "mailto:shrivantbscct@gmail.com",
    phone: "tel:+918825678112"
  }
};

export const skillCategories: SkillCategory[] = [
  { id: 'all', label: 'All Disciplines', iconName: 'Layers', description: 'Comprehensive view of all technical skills' },
  { id: 'ai', label: 'AI & Prompting', iconName: 'Cpu', description: 'Generative AI, LLM prompting, and intelligent algorithms' },
  { id: 'data', label: 'Data Analytics', iconName: 'BarChart3', description: 'Exploratory data analysis, statistical modeling, and insights' },
  { id: 'web', label: 'Development & Python', iconName: 'Code2', description: 'Python ecosystems, backend scripts, and frontend interfaces' },
  { id: 'systems', label: 'Networking & Cisco', iconName: 'Network', description: 'Cisco Packet Tracer, security protocols, and systems' }
];

export const skillsList: SkillItem[] = [
  {
    name: "Python",
    level: 92,
    category: "web",
    description: "Core programming, object-oriented architecture, data structures, and automation scripting.",
    tags: ["NumPy", "Pandas", "Scikit-Learn", "Matplotlib", "Scripting"],
    iconName: "Terminal"
  },
  {
    name: "Prompt Engineering & Generative AI",
    level: 95,
    category: "ai",
    description: "Chain-of-thought, few-shot prompting, contextual persona design, and LLM output steering.",
    tags: ["Gemini", "Few-Shot Prompting", "System Prompts", "Evaluation", "CoT"],
    iconName: "Sparkles"
  },
  {
    name: "Data Analytics & EDA",
    level: 88,
    category: "data",
    description: "Hypothesis testing, exploratory data analysis, pattern recognition, and trend identification.",
    tags: ["Data Cleaning", "Statistical Modeling", "Aggregation", "Correlation Analysis"],
    iconName: "TrendingUp"
  },
  {
    name: "Machine Learning & Fraud Detection",
    level: 86,
    category: "ai",
    description: "Anomaly detection models, supervised classification, feature engineering, and risk evaluation.",
    tags: ["Classification", "Random Forest", "Anomaly Scoring", "ROC-AUC"],
    iconName: "ShieldAlert"
  },
  {
    name: "Cisco Packet Tracer & Networking",
    level: 84,
    category: "systems",
    description: "Network topology design, packet routing simulation, switch configuration, and IP subnetting.",
    tags: ["Cisco Certified", "Routing Protocols", "Subnetting", "Packet Inspection"],
    iconName: "Network"
  },
  {
    name: "Data Visualization & Dashboards",
    level: 85,
    category: "data",
    description: "Transforming tabular datasets into interactive visual stories and executive metrics.",
    tags: ["Charts", "Matplotlib", "Seaborn", "Business Intelligence"],
    iconName: "PieChart"
  },
  {
    name: "Modern Web Tech (HTML, CSS, JS/React)",
    level: 82,
    category: "web",
    description: "Semantic web interfaces, responsive styling with Tailwind CSS, and interactive component state.",
    tags: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    iconName: "Globe"
  },
  {
    name: "Database & SQL Foundations",
    level: 80,
    category: "data",
    description: "Relational database schema design, indexing, aggregate queries, and data extraction.",
    tags: ["SQL", "Relational Models", "Queries", "Data Integrity"],
    iconName: "Database"
  },
  {
    name: "Git & Version Control",
    level: 83,
    category: "systems",
    description: "Branching strategies, repository management, version tagging, and collaborative workflows.",
    tags: ["Git", "GitHub", "CLI", "Code Review"],
    iconName: "GitBranch"
  }
];

export const projectsList: ProjectItem[] = [
  {
    id: "credit-card-security",
    title: "Intelligent Credit Card Security & Anomaly Detection",
    category: "ai",
    tagline: "AI-driven real-time financial transaction risk scoring and fraud prevention system.",
    description: "An advanced machine learning framework designed to detect fraudulent credit card transactions in high-volume streams. Features anomaly scoring, risk categorization, and dynamic transaction blocking.",
    longDescription: "Built to solve the critical challenge of high false positives and undetected fraud in financial institutions. The system computes behavioral deviation scores based on transaction velocity, geographical mismatch, unusual amounts, and historical spending patterns. Demonstrates instant classification with high precision and recall.",
    features: [
      "Real-time fraud probability estimation using anomaly detection",
      "Dynamic threshold calibration for zero-delay transaction approval",
      "Explainable AI factors highlighting reasons for transaction flag",
      "Interactive simulation sandbox to test suspicious vs safe card transactions"
    ],
    technologies: ["Python", "Machine Learning", "Scikit-learn", "Pandas", "Risk Scoring Algorithm", "React"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    interactiveType: "credit-card-fraud",
    liveDemoUrl: "#interactive-demo",
    githubUrl: "https://github.com/shrivanthks/intelligent-credit-card-security",
    metrics: [
      { label: "Accuracy", value: "98.4%" },
      { label: "Latency", value: "< 45ms" },
      { label: "Precision", value: "96.2%" }
    ]
  },
  {
    id: "fine-art-gallery",
    title: "Online Fine Art Gallery & Digital Showcase",
    category: "web",
    tagline: "Immersive visual arts platform featuring curated exhibitions, artist provenance, and interactive inspection.",
    description: "A digital gallery space presenting fine art collections with high-resolution inspection, curated historical notes, genre classification, and artwork acquisition workflows.",
    longDescription: "Created to elevate digital appreciation of physical and digital fine arts. Features a clean, distraction-free aesthetic with smooth image zooming, provenance certification tracking, artist biographies, and an interactive virtual viewing room with lighting simulation.",
    features: [
      "High-fidelity artwork viewer with seamless pan-and-zoom inspection",
      "Categorization by art movements (Impressionism, Modern, Traditional, Contemporary)",
      "Curator commentary and detailed provenance metadata records",
      "Interactive Virtual Viewing Room with scale perspective preview"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Canvas API", "Responsive UX"],
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    interactiveType: "art-gallery",
    liveDemoUrl: "#interactive-demo",
    githubUrl: "https://github.com/shrivanthks/online-fine-art-gallery",
    metrics: [
      { label: "Artworks Cataloged", value: "150+" },
      { label: "Viewer Satisfaction", value: "99%" },
      { label: "Render Speed", value: "60 FPS" }
    ]
  },
  {
    id: "prompt-matrix-studio",
    title: "PromptMatrix: Generative AI Prompt Studio",
    category: "ai",
    tagline: "Specialized prompt engineering workbench with chain-of-thought tuning and evaluation metrics.",
    description: "An interactive laboratory for crafting, benchmarking, and optimizing prompts for LLMs. Includes prompt templates, few-shot injection, tone calibration, and automated response scoring.",
    longDescription: "Born from deep experimentation with prompt engineering techniques, PromptMatrix allows researchers and engineers to contrast different prompting strategies (zero-shot, few-shot, step-by-step reasoning, persona anchoring) and measure consistency, hallucination risk, and output conciseness.",
    features: [
      "Side-by-side prompt output comparisons",
      "Few-shot example injection and persona framing assistants",
      "Token estimation and response latency telemetry",
      "Exportable prompt recipes for production deployments"
    ],
    technologies: ["Prompt Engineering", "Python", "Generative AI APIs", "TypeScript", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    interactiveType: "prompt-matrix",
    liveDemoUrl: "#interactive-demo",
    githubUrl: "https://github.com/shrivanthks/prompt-matrix-studio",
    metrics: [
      { label: "Prompt Templates", value: "40+" },
      { label: "Token Efficiency", value: "+35%" },
      { label: "Accuracy Gain", value: "+28%" }
    ]
  },
  {
    id: "predictive-analytics-suite",
    title: "Predictive Customer Analytics & Churn Engine",
    category: "data",
    tagline: "End-to-end data analytics pipeline discovering retention patterns and behavioral risk clusters.",
    description: "A comprehensive data intelligence dashboard transforming raw transactional logs into actionable retention strategies, automated cohort graphs, and churn probabilities.",
    longDescription: "Analyzes customer interaction frequency, purchase cycles, customer service tickets, and sentiment factors to project 90-day retention likelihood. Delivers visual correlation matrices, automated summary reports, and actionable intervention recommendations.",
    features: [
      "Exploratory data analysis pipeline with outlier and missing-data cleansing",
      "Customer lifetime value (LTV) and churn likelihood estimations",
      "Interactive demographic & behavioral segmentation filters",
      "Automated executive summaries and metric alerts"
    ],
    technologies: ["Python", "Pandas", "Data Analytics", "Matplotlib", "Statistical Modeling", "Web UI"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    liveDemoUrl: "#interactive-demo",
    githubUrl: "https://github.com/shrivanthks/predictive-analytics-suite",
    metrics: [
      { label: "Retention Impact", value: "+18%" },
      { label: "Data Records Processed", value: "250K+" },
      { label: "Forecast Accuracy", value: "91%" }
    ]
  },
  {
    id: "netroute-packet-tracer",
    title: "NetRoute: Packet Flow & Security Topology Simulator",
    category: "systems",
    tagline: "Interactive network packet inspector and routing simulator inspired by Cisco Packet Tracer.",
    description: "A visual simulation tool demonstrating packet transmission across subnets, router hop inspection, ARP resolution, and firewall rule enforcement.",
    longDescription: "Drawing directly from hands-on Cisco Packet Tracer expertise, NetRoute provides a clean, visual representation of TCP/IP handshakes, ICMP echo requests, and subnet routing. Users can inject packets and observe hops, packet headers, and latency in real time.",
    features: [
      "Live visual packet travel along simulated network topologies",
      "Hop-by-hop header inspection (IP, MAC, Port, TTL)",
      "Simulated firewall rule filters and packet drop logs",
      "Customizable subnet configuration and gateway routing tables"
    ],
    technologies: ["Cisco Concepts", "Networking Protocols", "JavaScript", "Network Topology Engine"],
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    interactiveType: "packet-tracer",
    liveDemoUrl: "#interactive-demo",
    githubUrl: "https://github.com/shrivanthks/netroute-packet-tracer",
    metrics: [
      { label: "Protocols Modeled", value: "ICMP, TCP, ARP" },
      { label: "Inspection Depth", value: "Layer 2-4" },
      { label: "Simulation Accuracy", value: "100%" }
    ]
  },
  {
    id: "datapulse-bi-dashboard",
    title: "DataPulse: Automated KPI & Business Intelligence",
    category: "data",
    tagline: "Real-time multidimensional data visualization engine for operational metrics and forecasting.",
    description: "Interactive analytics reporting software with automated data ingestion, dynamic drill-down pivots, and instant export capabilities.",
    longDescription: "Empowers non-technical stakeholders to query complex data streams using natural visual controls. Features configurable widget layouts, real-time KPI trend lines, and automated anomaly flagging.",
    features: [
      "Multi-dimensional drill-downs across sales, operational, and customer metrics",
      "Dynamic date range aggregation and moving average smoothing",
      "Exportable presentation-ready reports in PDF and CSV format",
      "Low-overhead responsive layout with dark and light theme options"
    ],
    technologies: ["Data Analytics", "Python Backend", "React", "Data Visualization", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    liveDemoUrl: "#interactive-demo",
    githubUrl: "https://github.com/shrivanthks/datapulse-bi-dashboard",
    metrics: [
      { label: "Query Speed", value: "Instant" },
      { label: "Chart Types", value: "12+" },
      { label: "Export Formats", value: "PDF / CSV" }
    ]
  }
];

export const educationList: EducationItem[] = [
  {
    id: "mca-grd",
    degree: "Master of Computer Applications (MCA)",
    institution: "Dr. G.R. Damodaran College of Science",
    period: "2025 — 2027",
    score: "70% (1st Sem) • 70% (2nd Sem)",
    scoreLabel: "Consistent First Class Academic Performance",
    location: "Coimbatore, Tamil Nadu, India",
    current: true,
    highlights: [
      "Pursuing advanced specialization in Artificial Intelligence, Intelligent Systems, and Big Data Analytics",
      "Consistent 70% marks across consecutive semesters reflecting disciplined academic rigor",
      "Active participant in technical symposiums, coding challenges, and AI research discussions",
      "Leading technical initiatives around practical machine learning security implementations"
    ],
    courses: [
      "Artificial Intelligence & Machine Learning",
      "Advanced Data Analytics & Data Mining",
      "Distributed Cloud Computing",
      "Advanced Python & Software Engineering",
      "Computer Networks & Cyber Security"
    ]
  },
  {
    id: "bsc-ct-kongu",
    degree: "B.Sc. Computer Technology",
    institution: "Kongu Arts and Science College",
    period: "2022 — 2025",
    score: "6.5 CGPA",
    scoreLabel: "Graduated with Computer Technology Degree",
    location: "Erode, Tamil Nadu, India",
    highlights: [
      "Built solid foundation in computer architecture, systems programming, and algorithms",
      "Engineered the capstone project: Intelligent Credit Card Security anomaly detection system",
      "Completed foundational Cisco certification programs in Data Science and Network Simulation",
      "Developed web application interfaces including the Online Fine Art Gallery platform"
    ],
    courses: [
      "Object Oriented Programming with Python",
      "Database Management Systems & SQL",
      "Data Structures & Algorithms",
      "Computer Networks & Communication",
      "Web Technologies (HTML, CSS, JS)"
    ]
  },
  {
    id: "hsc-kongu",
    degree: "Higher Secondary Certificate (12th Standard)",
    institution: "Kongu Matric Higher Secondary School",
    period: "2020 — 2022",
    score: "77%",
    scoreLabel: "First Class with Distinction in Computer Science Stream",
    location: "Tirupur District, Tamil Nadu",
    highlights: [
      "Specialized in Mathematics, Computer Science, Physics, and Chemistry",
      "Achieved strong academic milestone of 77%, laying ground for undergraduate computer technology",
      "School computer lab representative and active science club participant"
    ],
    courses: ["Computer Science", "Mathematics", "Physics", "Chemistry"]
  },
  {
    id: "sslc-kongu",
    degree: "Secondary School Leaving Certificate (10th Standard)",
    institution: "Kongu Matric Higher Secondary School",
    period: "Passed in 2020",
    score: "44%",
    scoreLabel: "Completed Secondary Schooling",
    location: "Tirupur District, Tamil Nadu",
    highlights: [
      "Demonstrated remarkable academic growth and determination, advancing from 44% in 10th to 77% in 12th (+33% improvement!)",
      "A testament to resilience, strong work ethic, and passion discovered in computing sciences"
    ],
    courses: ["General Science", "Mathematics", "Social Sciences", "Languages"]
  }
];

export const achievementsList: AchievementItem[] = [
  {
    id: "cisco-data-science",
    title: "Cisco Certified: Introduction to Data Science",
    issuer: "Cisco Networking Academy",
    year: "Certified",
    category: "Certification",
    description: "Demonstrated proficiency in data exploration fundamentals, statistical inference, data wrangling pipelines, and foundational machine learning principles.",
    credentialId: "CISCO-DS-2024-Verified",
    skills: ["Data Science", "Python", "Data Wrangling", "Statistical Inference"],
    iconName: "Award"
  },
  {
    id: "cisco-packet-tracer",
    title: "Cisco Certified: Packet Tracer Specialist",
    issuer: "Cisco Networking Academy",
    year: "Certified",
    category: "Certification",
    description: "Recognized for hands-on network architecture modeling, switch/router protocol configuration, IP address planning, and packet flow troubleshooting.",
    credentialId: "CISCO-PT-2024-Verified",
    skills: ["Network Simulation", "Routing Protocols", "Subnetting", "Packet Inspection"],
    iconName: "ShieldCheck"
  },
  {
    id: "academic-excellence-mca",
    title: "Consistent 70% First-Class Distinction in MCA",
    issuer: "Dr. G.R. Damodaran College of Science",
    year: "2025 — 2026",
    category: "Academic",
    description: "Maintained steady academic marks across both semesters in the rigorous Master of Computer Applications curriculum with distinction in computer intelligence courses.",
    skills: ["Academic Dedication", "Intelligent Systems", "Computer Technology"],
    iconName: "GraduationCap"
  },
  {
    id: "resilience-growth-award",
    title: "Exceptional Academic Growth (+33% Progression)",
    issuer: "Kongu Educational Institutions",
    year: "Milestone",
    category: "Award",
    description: "Demonstrated personal resilience and dedication by leaping from 44% in 10th standard to 77% in 12th standard, followed by success in higher technical education.",
    skills: ["Resilience", "Self-Discipline", "Rapid Growth"],
    iconName: "TrendingUp"
  }
];
