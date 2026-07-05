import parklynk1 from '../assets/project-screenshots/parklynk/1.jpg'
import parklynk2 from '../assets/project-screenshots/parklynk/2.jpg'
import parklynk3 from '../assets/project-screenshots/parklynk/3.jpg'
import docusphere1 from '../assets/project-screenshots/docusphere/1.jpg'
import docusphere2 from '../assets/project-screenshots/docusphere/2.jpg'
import docusphere3 from '../assets/project-screenshots/docusphere/3.jpg'
import autoprepai1 from '../assets/project-screenshots/autoprepai/1.jpg'
import autoprepai2 from '../assets/project-screenshots/autoprepai/2.jpg'
import autoprepai3 from '../assets/project-screenshots/autoprepai/3.jpg'
import aiLeadOutreach1 from '../assets/project-screenshots/ai-lead-outreach/1.jpg'
import aiLeadOutreach2 from '../assets/project-screenshots/ai-lead-outreach/2.jpg'
import aiLeadOutreach3 from '../assets/project-screenshots/ai-lead-outreach/3.jpg'
import aiPromptQuality1 from '../assets/project-screenshots/ai-prompt-quality/1.jpg'
import aiPromptQuality2 from '../assets/project-screenshots/ai-prompt-quality/2.jpg'
import aiPromptQuality3 from '../assets/project-screenshots/ai-prompt-quality/3.jpg'
import socialhub1 from '../assets/project-screenshots/socialhub/1.jpg'
import socialhub2 from '../assets/project-screenshots/socialhub/2.jpg'
import socialhub3 from '../assets/project-screenshots/socialhub/3.jpg'
import gigflow1 from '../assets/project-screenshots/gigflow/1.jpg'
import gigflow2 from '../assets/project-screenshots/gigflow/2.jpg'
import gigflow3 from '../assets/project-screenshots/gigflow/3.jpg'
import eda1 from '../assets/project-screenshots/eda-app/1.jpg'
import eda2 from '../assets/project-screenshots/eda-app/2.jpg'
import eda3 from '../assets/project-screenshots/eda-app/3.jpg'
import uiuxFoodDelivery1 from '../assets/project-screenshots/uiux-food-delivery/1.jpg'
import uiuxFoodDelivery2 from '../assets/project-screenshots/uiux-food-delivery/2.jpg'
import uiuxHeroSection1 from '../assets/project-screenshots/uiux-hero-section/1.png'
import uiuxHeroSection2 from '../assets/project-screenshots/uiux-hero-section/2.png'
import smartNotesOrganizer1 from '../assets/project-screenshots/smart-notes-organizer/1.jpg'
import smartNotesOrganizer2 from '../assets/project-screenshots/smart-notes-organizer/2.jpg'
import smartNotesOrganizer3 from '../assets/project-screenshots/smart-notes-organizer/3.jpg'
import aiResumeBuilder1 from '../assets/project-screenshots/ai-resume-builder/1.jpg'
import aiResumeBuilder2 from '../assets/project-screenshots/ai-resume-builder/2.jpg'
import aiResumeBuilder3 from '../assets/project-screenshots/ai-resume-builder/3.jpg'
import rootmind1 from '../assets/project-screenshots/rootmind/rootmind project 1.png'
import rootmind2 from '../assets/project-screenshots/rootmind/rootmind project 2.png'
import rootmind3 from '../assets/project-screenshots/rootmind/rootmind project 3.png'
import rootmind4 from '../assets/project-screenshots/rootmind/rootmind project 4.png'

const projects = [
  {
    id: 'parklynk',
    title: 'ParkLynk - Smart Parking Marketplace',
    shortDescription:
      'A MERN-based parking marketplace that helps drivers discover, verify, and reserve trusted parking spaces faster.',
    fullDescription:
      'ParkLynk is a full-stack marketplace product designed to reduce urban parking friction. It supports discovery, listing management, verification, and reservation workflows so both drivers and parking-space owners can use the same platform with role-specific experiences.',
    problemStatement:
      'Drivers waste time searching for reliable parking in busy areas, while private space owners often lack a simple and credible way to publish and monetize available slots.',
    features: [
      'Parking slot discovery and reservation flow',
      'Role-based dashboards for users and parking owners',
      'Verification-ready onboarding with OCR support',
      'Transaction-friendly booking experience',
    ],
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Tesseract.js'],
    githubLink: 'https://github.com/hariprasath-dlh/parklynk',
    linkedinPost: '',
    liveLink: 'https://parklynk-git-main-23ad047-2318s-projects.vercel.app/',
    whatILearned: [
      'How to design a two-sided marketplace around trust and availability',
      'How to coordinate booking, verification, and payments in one product flow',
      'How to keep a larger MERN app readable as features expand',
    ],
    images: [parklynk1, parklynk2, parklynk3],
  },
  {
    id: 'docusphere',
    title: 'DocuSphere - Offline Intent-Aware RAG System',
    shortDescription:
      'An offline document intelligence workflow that retrieves context-aware answers without depending on a cloud pipeline.',
    fullDescription:
      'DocuSphere is an intent-aware retrieval-augmented generation system focused on local-first document understanding. It organizes ingestion, retrieval, and response generation so users can work with private knowledge sources while maintaining usable search and answer quality.',
    problemStatement:
      'Teams handling local or sensitive documents need useful semantic retrieval and answering, but many solutions assume cloud dependency, weak intent routing, or limited control over the pipeline.',
    features: [
      'Offline document ingestion and retrieval pipeline',
      'Intent-aware query handling for better answer relevance',
      'Knowledge-grounded response generation',
      'Workflow built for privacy-conscious document use cases',
    ],
    techStack: ['Python', 'RAG', 'Embeddings', 'Vector Search', 'LLMs'],
    githubLink: 'https://github.com/hariprasath-dlh/DocuSphere',
    linkedinPost:
      'https://www.linkedin.com/posts/hariprasath-lv_artificialintelligence-generativeai-rag-activity-7412366648265011200-TIhJ',
    liveLink: '',
    whatILearned: [
      'How retrieval quality changes when intent handling is explicit',
      'How to structure an offline AI workflow around privacy constraints',
      'How to make RAG outputs more dependable with grounded context',
    ],
    images: [docusphere1, docusphere2, docusphere3],
  },
  {
    id: 'autoprepai',
    title: 'AutoPrepAI - Autonomous Data Cleaning Agent',
    shortDescription:
      'An agentic data-preparation workflow that automates common cleaning steps and reduces repetitive preprocessing effort.',
    fullDescription:
      'AutoPrepAI was built to make raw datasets easier to prepare before analysis or modeling. It focuses on repetitive but important cleaning tasks, helping users inspect, normalize, and process data through a more guided autonomous workflow.',
    problemStatement:
      'A large amount of analysis time is lost to repetitive preprocessing work such as null handling, formatting cleanup, and standardization across inconsistent datasets.',
    features: [
      'Autonomous workflow for recurring data-cleaning tasks',
      'Structured preprocessing steps for messy datasets',
      'Faster handoff from raw data to analysis-ready tables',
      'Interactive review of applied transformations',
    ],
    techStack: ['Python', 'Pandas', 'Automation', 'Data Cleaning', 'AI Agents'],
    githubLink: 'https://github.com/hariprasath-dlh/AutoPrepAI',
    linkedinPost:
      'https://www.linkedin.com/posts/hariprasath-lv_machinelearning-artificialintelligence-datascience-activity-7415019004664164352-PtSF',
    liveLink: '',
    whatILearned: [
      'How to convert repetitive preprocessing into reusable automation',
      'How to balance autonomy with clear review points for users',
      'How to frame AI assistance around concrete data tasks instead of vague abstraction',
    ],
    images: [autoprepai1, autoprepai2, autoprepai3],
  },
  {
    id: 'ai-lead-automation',
    title: 'AI Lead Outreach Automation (n8n)',
    shortDescription:
      'A lead-generation automation built with n8n to streamline outreach research, personalization, and execution.',
    fullDescription:
      'This project explores automated lead outreach using n8n-based workflow orchestration. It connects structured lead handling with AI-assisted enrichment so outreach steps become faster, more consistent, and easier to repeat at scale.',
    problemStatement:
      'Manual outreach usually involves fragmented research, repetitive formatting, and inconsistent follow-through, which slows execution and reduces campaign quality.',
    features: [
      'n8n workflow orchestration for outbound lead operations',
      'Automated enrichment and message preparation',
      'Repeatable outreach pipeline with reduced manual effort',
      'Operational flow designed for faster campaign execution',
    ],
    techStack: ['n8n', 'Automation', 'AI Workflows', 'APIs'],
    githubLink: 'https://github.com/hariprasath-dlh/ai-lead-outreach-automation-n8n',
    linkedinPost:
      'https://www.linkedin.com/posts/hariprasath-lv_n8n-automation-aiprojects-activity-7438560898899873793-NGRw',
    liveLink: '',
    whatILearned: [
      'How to orchestrate automation reliably across multi-step workflows',
      'How AI can improve personalization without complicating operations',
      'How to design pipelines that stay useful beyond a single demo',
    ],
    images: [aiLeadOutreach1, aiLeadOutreach2, aiLeadOutreach3],
  },
  {
    id: 'ai-prompt-analyzer',
    title: 'AI Prompt Quality Analyzer',
    shortDescription:
      'A prompt-evaluation tool that helps assess clarity, structure, and likely output quality before execution.',
    fullDescription:
      'AI Prompt Quality Analyzer focuses on improving prompt quality through structured inspection. The product helps users review wording, completeness, and prompt construction so they can refine instructions before sending them to a model.',
    problemStatement:
      'Weak prompts often produce inconsistent or low-signal AI outputs, but many users lack a simple way to review prompt quality before they spend time iterating on results.',
    features: [
      'Prompt assessment around structure and clarity',
      'Quality-focused review before model execution',
      'Actionable feedback for improving prompt construction',
      'Lightweight workflow for rapid iteration',
    ],
    techStack: ['React', 'JavaScript', 'Prompt Engineering', 'AI Tooling'],
    githubLink: 'https://github.com/hariprasath-dlh/AI-Prompt-Quality-Analyzer',
    linkedinPost:
      'https://www.linkedin.com/posts/hariprasath-lv_generativeai-promptengineering-artificialintelligence-activity-7420504045771051008-HuPv',
    liveLink: '',
    whatILearned: [
      'How to translate prompt-engineering principles into a usable product',
      'How to turn qualitative checks into structured feedback',
      'How useful tooling comes from narrowing the scope to one clear job',
    ],
    images: [aiPromptQuality1, aiPromptQuality2, aiPromptQuality3],
  },
  {
    id: 'socialhub',
    title: 'SocialHub - Mini Social Media Platform',
    shortDescription:
      'A compact social platform with user interactions, content flows, and a polished full-stack application structure.',
    fullDescription:
      'SocialHub is a mini social media platform built to explore practical full-stack product patterns such as user-generated content, interaction design, and stateful interface workflows. It emphasizes clarity, responsiveness, and core platform behavior over unnecessary complexity.',
    problemStatement:
      'Building social features requires coordinating feeds, user interactions, and content management in a way that still feels responsive and understandable to end users.',
    features: [
      'User content creation and interaction flow',
      'Responsive feed-oriented interface',
      'Core social platform behaviors in a compact scope',
      'Full-stack structure for content and user management',
    ],
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    githubLink: 'https://github.com/hariprasath-dlh/SocialHub-Mini-Social-Media-Platform',
    linkedinPost:
      'https://www.linkedin.com/posts/hariprasath-lv_fullstackdevelopment-mernstack-reactjs-activity-7425157417887379456-38a_',
    liveLink: '',
    whatILearned: [
      'How to design small social features that still feel complete',
      'How to coordinate frontend interaction patterns with backend state',
      'How to keep a content-heavy interface visually organized',
    ],
    images: [socialhub1, socialhub2, socialhub3],
  },
  {
    id: 'gigflow',
    title: 'GigFlow - Mini Freelance Marketplace',
    shortDescription:
      'A marketplace prototype that connects project demand and service supply through a focused freelance workflow.',
    fullDescription:
      'GigFlow is a mini freelance marketplace exploring the mechanics of listings, discovery, and lightweight service transactions. The project concentrates on building a solid marketplace foundation while keeping the experience approachable for both buyers and freelancers.',
    problemStatement:
      'Freelance platforms need to balance discovery, trust, and simple transaction flows, but even a small marketplace quickly becomes complex when multiple user intents collide.',
    features: [
      'Freelancer and client oriented marketplace flow',
      'Listing discovery and service presentation',
      'Practical interface for lightweight hiring interactions',
      'Structured MERN architecture for marketplace behavior',
    ],
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'REST APIs'],
    githubLink: 'https://github.com/hariprasath-dlh/GigFlow',
    linkedinPost:
      'https://www.linkedin.com/posts/hariprasath-lv_fullstackdevelopment-mernstack-reactjs-activity-7417493330759974912-mJqq',
    liveLink: '',
    whatILearned: [
      'How marketplace UX differs when two user roles have different goals',
      'How to simplify service discovery without losing useful detail',
      'How to scope a freelance platform into a manageable MVP',
    ],
    images: [gigflow1, gigflow2, gigflow3],
  },
  {
    id: 'univariate-eda',
    title: 'Univariate Exploratory Data Analysis Using Interactive Visualizations',
    shortDescription:
      'An interactive data-analysis tool focused on fast univariate exploration through visual and statistical summaries.',
    fullDescription:
      'This project streamlines univariate exploratory analysis by letting users upload data and inspect distributions, summaries, and patterns through interactive visual outputs. It focuses on speed, readability, and low-friction experimentation for early analysis tasks.',
    problemStatement:
      'Analysts often spend unnecessary time writing repetitive code for early-stage univariate inspection when they mainly need quick visibility into distribution and column behavior.',
    features: [
      'Upload-driven univariate analysis workflow',
      'Interactive visualizations for distribution review',
      'Summary statistics for rapid inspection',
      'Simple interface tailored to exploration over setup time',
    ],
    techStack: ['Python', 'Streamlit', 'Pandas', 'Plotly'],
    githubLink:
      'https://github.com/hariprasath-dlh/Univariate-Exploratory-Data-Analysis-Using-Interactive-Visualizations',
    linkedinPost:
      'https://www.linkedin.com/posts/hariprasath-lv_dataanalytics-exploratorydataanalysis-python-activity-7426977023983763457-e8qG',
    liveLink: '',
    whatILearned: [
      'How to turn exploratory analysis into a reusable interface',
      'How to prioritize clarity in data-focused tools',
      'How interactive charts improve speed during initial dataset review',
    ],
    images: [eda1, eda2, eda3],
  },
  {
    id: 'device-sensor-data-analysis',
    title: 'Device Sensor Data Analysis',
    shortDescription:
      'A data-focused project for examining device sensor readings and extracting useful analytical patterns from them.',
    fullDescription:
      'Device Sensor Data Analysis centers on interpreting sensor-driven datasets through analytical workflows that surface trends, anomalies, and useful observations. It is positioned as a practical analysis exercise with emphasis on readable outputs and structured findings.',
    problemStatement:
      'Raw device sensor streams are difficult to interpret directly, so analysts need ways to summarize behavior, detect changes, and convert readings into actionable observations.',
    features: [
      'Sensor data inspection and trend analysis',
      'Structured workflow for pattern-oriented exploration',
      'Readable analytical outputs for interpretation',
      'Project framing suited to experimentation and learning',
    ],
    techStack: ['Python', 'Data Analysis', 'Pandas', 'Visualization'],
    githubLink: 'https://github.com/hariprasath-dlh/device-sensor-analyzer',
    linkedinPost:
      'https://www.linkedin.com/posts/hariprasath-lv_hackathon-learningbydoing-teamwork-activity-7405921002288766976-2qsj',
    liveLink: '',
    whatILearned: [
      'How to interpret noisy sensor data through structured analysis',
      'How to look for patterns before jumping into modeling',
      'How to communicate analytical findings more clearly',
    ],
    images: [],
  },
  {
    id: 'uiux-food-delivery',
    title: 'Wireframing & User Flow Design - Food Delivery App',
    shortDescription:
      'A UI/UX case study focused on wireframes, navigation flow, and user journey clarity for a food delivery experience.',
    fullDescription:
      'This UI/UX project explores how a food delivery product can be structured through wireframing and user flow design. It focuses on usability, screen progression, and decision-making paths so the experience feels intuitive before visual polish is layered on top.',
    problemStatement:
      'Food delivery products depend heavily on frictionless navigation, so unclear user flow design can quickly create confusion during browsing, ordering, and checkout.',
    features: [
      'Wireframes for key food delivery screens',
      'User flow mapping across ordering steps',
      'Interface structure centered on task completion',
      'UX-first thinking before visual implementation',
    ],
    techStack: ['UI/UX', 'Wireframing', 'User Flows', 'Figma'],
    githubLink: 'https://github.com/hariprasath-dlh/uiux-wireframing-food-delivery',
    linkedinPost:
      'https://www.linkedin.com/posts/hariprasath-lv_uiux-wireframing-userflow-activity-7419004635291594752-8rnj',
    liveLink: '',
    whatILearned: [
      'How stronger user flows improve design decisions early',
      'How to simplify navigation before moving into higher-fidelity visuals',
      'How UX structure creates confidence in the final interface',
    ],
    images: [uiuxFoodDelivery1, uiuxFoodDelivery2],
  },
  {
    id: 'uiux-hero-section-design',
    title: 'UI/UX Hero Section Design',
    shortDescription:
      'A modern hero section design built using clean UI/UX principles, focusing on visual hierarchy, typography, and layout composition to create an engaging first impression for users.',
    fullDescription:
      'This project focuses on designing a visually appealing and user-friendly hero section, which is one of the most important parts of any website. The goal was to create a clean layout that effectively communicates the purpose of the website while maintaining strong visual hierarchy.',
    problemStatement:
      'Many websites fail to capture user attention within the first few seconds due to poor layout and lack of visual clarity. This project addresses the need for a well-structured hero section that guides user attention effectively.',
    features: [
      'Clean and modern UI design',
      'Proper visual hierarchy',
      'Balanced typography and spacing',
      'Responsive layout',
    ],
    techStack: ['Figma', 'HTML', 'CSS'],
    githubLink: 'https://github.com/hariprasath-dlh/ui-ux-hero-section-design',
    linkedinPost: '',
    liveLink: '',
    whatILearned: [
      'How to build visual hierarchy that directs attention quickly',
      'How typography and spacing influence first impressions',
      'How responsive hero layouts need to adapt across screen sizes',
    ],
    images: [uiuxHeroSection1, uiuxHeroSection2],
  },
  {
    id: 'smart-notes-organizer',
    title: 'Smart Notes Organizer',
    shortDescription:
      'A simple application that helps users organize, manage, and search their notes efficiently, improving productivity and reducing clutter.',
    fullDescription:
      'Smart Notes Organizer is designed to help users manage their notes in an organized way. The system allows users to create, update, delete, and search notes efficiently.',
    problemStatement:
      'Managing notes manually can become difficult when the number of notes increases. Users often struggle to find important information quickly.',
    features: [
      'Create and manage notes',
      'Search functionality',
      'Organized note structure',
      'Simple and user-friendly UI',
    ],
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    githubLink: '',
    linkedinPost: '',
    liveLink: '',
    whatILearned: [
      'CRUD operations',
      'Database integration',
      'Building user-friendly interfaces',
    ],
    images: [smartNotesOrganizer1, smartNotesOrganizer2, smartNotesOrganizer3],
  },
  {
    id: 'ai-resume-builder',
    title: 'AI Resume Builder',
    shortDescription:
      'An AI-powered resume builder that generates structured and professional resumes based on user input, helping users create better resumes quickly.',
    fullDescription:
      'This project uses AI to generate resumes based on user input such as skills, experience, and education. The goal is to simplify resume creation and help users present their profiles effectively.',
    problemStatement:
      'Many users struggle to create well-structured resumes that highlight their skills clearly.',
    features: [
      'AI-based resume generation',
      'Structured resume format',
      'Easy user input system',
      'Clean UI design',
    ],
    techStack: ['React', 'Node.js', 'AI API'],
    githubLink: '',
    linkedinPost: '',
    liveLink: '',
    whatILearned: [
      'AI integration in applications',
      'Structuring user input data',
      'Building practical tools',
    ],
    images: [aiResumeBuilder1, aiResumeBuilder2, aiResumeBuilder3],
  },
  {
    id: 'rootmind',
    title: 'RootMind — Autonomous Multi-Agent AIOps Platform',
    shortDescription:
      'An autonomous incident response system that detects production crashes and resolves them in seconds without human intervention. Powered by a 5-agent AI pipeline to automate root cause analysis, code patching, and post-mortem reporting.',
    fullDescription:
      'RootMind is a full-stack, autonomous AIOps platform designed to modernize how engineering teams handle production incidents. Instead of relying on manual debugging, RootMind uses a multi-agent AI orchestration system to detect anomalies, trace root causes, generate code fixes, and document the incident automatically.',
    problemStatement:
      'When a production server crashes, traditional incident response is slow and manual. Engineers spend hours sifting through logs, identifying the broken commit, writing a fix, and documenting the post-mortem. This high Mean Time to Resolution (MTTR) leads to prolonged downtime, frustrated users, and significant revenue loss.',
    features: [
      'Anomaly Detector: Uses Machine Learning (Isolation Forest) to analyze telemetry metrics and detect anomalies.',
      'RCA Agent: Uses RAG (Retrieval-Augmented Generation) and LLMs to search the GitHub codebase and identify the exact commit responsible for the incident.',
      'Fix Suggester: Automatically generates a working code patch.',
      'Post-Mortem Writer: Creates a professional incident report.',
      'Slack Alerter: Sends real-time alerts with the root cause and proposed fix.',
    ],
    techStack: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'FastAPI',
      'Python',
      'LangGraph',
      'Scikit-learn',
      'Groq API / Llama 3',
      'Qdrant',
      'Neon PostgreSQL',
      'GitHub REST API',
      'Slack Webhooks',
    ],
    githubLink: 'https://github.com/hariprasath-dlh/rootmind',
    linkedinPost:
      'https://www.linkedin.com/posts/hariprasath-lv_ai-machinelearning-langgraph-ugcPost-7478089195308089344-BT45/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEYPmcoBihbQ4aRc857DVLbaxoOXLWIV_-o',
    liveLink: '',
    whatILearned: [
      'Multi-Agent AI architecture using LangGraph',
      'Retrieval-Augmented Generation (RAG)',
      'AI workflow orchestration',
      'Full-stack React + FastAPI integration',
      'Real-world AI system design',
      'Async backend development',
      'Enterprise AI application development',
    ],
    images: [rootmind1, rootmind2, rootmind3, rootmind4],
  },
]

export default projects
