import { Service, ServiceCategory, Testimonial, FAQ, CaseStudy, Course } from './types';

export const BRAND_COLORS = {
  bg: '#F0F7FF',
  white: '#FFFFFF',
  primary: '#0051FF',
  secondary: '#4FACFE',
  accent1: '#0061FF',
  accent2: '#7E22CE',
  heading: '#0A2540',
  body: '#374151',
  muted: '#6B7280',
  tagBg: '#D1E9FF',
  gradientPrimary: 'linear-gradient(135deg, #4FACFE 0%, #00C6FB 100%)',
  gradientAccent: 'linear-gradient(135deg, #0061FF 0%, #60A5FA 100%)',
};

export const COURSES: Course[] = [
  // 1. Development Courses
  {
    id: "frontend-web",
    title: "Frontend Web Development",
    shortDesc: "Master core web standards (HTML5, CSS3, JS) for modern browser environments.",
    longDesc: "A foundational program focused on semantic markup, responsive design principles, and modern CSS architectures. Learn to build pixel-perfect interfaces that scale.",
    category: "Development Courses",
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    tools: ["VS Code", "Chrome DevTools", "Git"],
    learnables: ["Semantic HTML", "Flexbox & Grid", "JS DOM Manipulation", "CSS Variables"],
    structure: [{ phase: "Core", description: "Standard web technologies and layouts." }],
    eligibility: "Open to all beginners and enthusiasts.",
    outcomes: ["Certified Web Developer", "Portfolio of 5 responsive sites"],
    duration: "3 Months",
    icon: "Layout"
  },
  {
    id: "advanced-frontend",
    title: "Advanced Frontend with Modern UI Frameworks",
    shortDesc: "Enterprise-grade UI development using React, Vue, and high-performance libraries.",
    longDesc: "Specialized training in complex state management, server-side rendering, and performance optimization for modern web applications.",
    category: "Development Courses",
    skills: ["React 19", "Next.js", "TypeScript", "Tailwind CSS"],
    tools: ["Vite", "Framer Motion", "Redux"],
    learnables: ["React Hooks", "SSR vs CSR", "Optimized Rendering", "Complex UI Animations"],
    structure: [{ phase: "Frameworks", description: "Component architecture and scalability." }],
    eligibility: "Basic JS knowledge required.",
    outcomes: ["Senior UI Developer Certificate", "Production-ready web apps"],
    duration: "4 Months",
    icon: "Layers"
  },
  {
    id: "backend-python",
    title: "Backend Development with Python (Django)",
    shortDesc: "Build secure, scalable server-side logic and robust API endpoints.",
    longDesc: "Deep dive into Python's most powerful framework for rapid, secure, and maintainable backend systems with built-in security features.",
    category: "Development Courses",
    skills: ["Python", "Django", "PostgreSQL", "REST APIs"],
    tools: ["PyCharm", "Postman", "Docker"],
    learnables: ["ORM Mapping", "JWT Auth", "Database Design", "Middleware Architecture"],
    structure: [{ phase: "Backend", description: "Scalable server architectures." }],
    eligibility: "Basic programming logic knowledge.",
    outcomes: ["Backend Engineer Certificate", "Deployment-ready REST APIs"],
    duration: "4 Months",
    icon: "Database"
  },
  {
    id: "backend-php-laravel",
    title: "Backend Development with PHP, MySQL & Laravel",
    shortDesc: "Master the PHP ecosystem with Laravel for enterprise application delivery.",
    longDesc: "Comprehensive training in PHP modern practices, MVC patterns, and Laravel's elegant syntax for building robust web applications.",
    category: "Development Courses",
    skills: ["PHP 8+", "Laravel", "MySQL", "Blade Templates"],
    tools: ["Composer", "Laravel Forge", "TablePlus"],
    learnables: ["Eloquent ORM", "Service Containers", "Routing & Auth", "Blade Templating"],
    structure: [{ phase: "Ecosystem", description: "Modern PHP application patterns." }],
    eligibility: "Familiarity with web basics.",
    outcomes: ["Full-Stack PHP Developer", "Scalable web platforms"],
    duration: "4 Months",
    icon: "Terminal"
  },

  // 2. Mobile Development
  {
    id: "android-dev",
    title: "Android App Development",
    shortDesc: "Build high-performance native Android apps using Kotlin and Jetpack Compose.",
    longDesc: "Learn to build modern Android applications with a focus on material design, performance, and best-in-class user experience.",
    category: "Mobile Development",
    skills: ["Kotlin", "Android SDK", "Jetpack Compose", "Coroutines"],
    tools: ["Android Studio", "Firebase", "SQLite"],
    learnables: ["Native Architecture", "API Integration", "Push Notifications", "Background Services"],
    structure: [{ phase: "Mobile", description: "Native Android ecosystem and patterns." }],
    eligibility: "Basic programming knowledge.",
    outcomes: ["Native Android Developer", "Published Play Store App"],
    duration: "4 Months",
    icon: "Smartphone"
  },
  {
    id: "ios-dev-swift",
    title: "iOS App Development with Swift",
    shortDesc: "Create premium iOS applications for the Apple ecosystem using Swift and SwiftUI.",
    longDesc: "Deep dive into the world of Apple development, mastering SwiftUI and Swift to create stunning, high-performance iPhone and iPad apps.",
    category: "Mobile Development",
    skills: ["Swift", "SwiftUI", "Core Data", "Combine"],
    tools: ["Xcode", "TestFlight", "App Store Connect"],
    learnables: ["Human Interface Guidelines", "Auto Layout", "App Lifecycle", "Security"],
    structure: [{ phase: "iOS", description: "Modern Apple development standards." }],
    eligibility: "Mac system required for development.",
    outcomes: ["iOS Developer Certificate", "Portfolio of iOS Apps"],
    duration: "4 Months",
    icon: "Smartphone"
  },
  {
    id: "react-native-dev",
    title: "React Native App Development",
    shortDesc: "Develop cross-platform mobile apps for iOS and Android using a single codebase.",
    longDesc: "Leverage your React skills to build native mobile applications with consistent performance and appearance across platforms.",
    category: "Mobile Development",
    skills: ["React Native", "JavaScript", "Redux", "Native Modules"],
    tools: ["Expo", "Flipper", "VS Code"],
    learnables: ["Shared Logic", "Platform Specific UI", "Deep Linking", "Performance Profiling"],
    structure: [{ phase: "Cross-Platform", description: "Unified mobile engineering." }],
    eligibility: "Intermediate React knowledge.",
    outcomes: ["Cross-Platform App Developer", "Production Dual-Store Apps"],
    duration: "4 Months",
    icon: "Box"
  },
  {
    id: "flutter-dev",
    title: "Flutter App Development",
    shortDesc: "Build beautiful, natively compiled applications for mobile using Google's UI toolkit.",
    longDesc: "Master Dart and Flutter to create expressive, high-speed applications for multiple platforms from a single codebase.",
    category: "Mobile Development",
    skills: ["Dart", "Flutter", "State Management (Bloc/Provider)", "Material/Cupertino"],
    tools: ["Flutter SDK", "VS Code", "DevTools"],
    learnables: ["Widget-based Architecture", "Animation Controller", "PaaS Integration", "Release Ops"],
    structure: [{ phase: "UI Kit", description: "Google's Flutter ecosystem." }],
    eligibility: "Logical thinking and basic coding skills.",
    outcomes: ["Flutter Specialist", "High-fidelity Mobile Portfolio"],
    duration: "4 Months",
    icon: "Zap"
  },

  // 3. Tech Specializations
  {
    id: "dotnet-core",
    title: ".NET Core & ASP.NET MVC Development",
    shortDesc: "Build enterprise-level web services and applications using the Microsoft stack.",
    longDesc: "Master C# and ASP.NET Core to deliver high-performance, secure, and scalable backend solutions for large enterprises.",
    category: "Tech Specializations",
    skills: ["C#", ".NET Core", "Entity Framework", "Web API"],
    tools: ["Visual Studio", "SQL Server", "Azure"],
    learnables: ["MVC Patterns", "Dependency Injection", "LINQ", "Microservices Architecture"],
    structure: [{ phase: "Enterprise", description: "Microsoft stack engineering." }],
    eligibility: "Computer science background preferred.",
    outcomes: ["DotNet Developer", "Enterprise Solution Architect"],
    duration: "5 Months",
    icon: "Layers"
  },
  {
    id: "nodejs-specialization",
    title: "Node.js Backend Development",
    shortDesc: "Advanced server-side engineering with the speed of the JavaScript engine.",
    longDesc: "High-concurrency systems development using Node.js and the vast NPM ecosystem for real-time applications.",
    category: "Tech Specializations",
    skills: ["Node.js", "Express", "MongoDB", "Socket.io"],
    tools: ["NPM", "Postman", "PM2"],
    learnables: ["Event Loop", "Streams & Buffers", "Async Programming", "Real-time Sync"],
    structure: [{ phase: "Runtime", description: "Asynchronous backend patterns." }],
    eligibility: "Strong JavaScript foundation.",
    outcomes: ["Node.js Engineer", "Real-time System Specialist"],
    duration: "3 Months",
    icon: "Terminal"
  },
  {
    id: "angular-training",
    title: "Angular Development Training",
    shortDesc: "Enterprise-grade frontend development using Google's robust framework.",
    longDesc: "Comprehensive training in Angular's structured approach to building scalable single-page applications.",
    category: "Tech Specializations",
    skills: ["Angular", "TypeScript", "RxJS", "Rx State"],
    tools: ["Angular CLI", "Karma/Jasmine", "Nx"],
    learnables: ["Observables", "Module Federation", "Directives & Pipes", "Enterprise Form Handling"],
    structure: [{ phase: "Framework", description: "Rigorous frontend architecture." }],
    eligibility: "Basic web knowledge.",
    outcomes: ["Angular Developer", "Full-Stack Ready Frontend Lead"],
    duration: "4 Months",
    icon: "Layers"
  },
  {
    id: "wordpress-job",
    title: "WordPress Training with Job Placement",
    shortDesc: "Master the world's most popular CMS with a focus on custom theme development.",
    longDesc: "Move beyond templates. Learn to build custom, high-performance WordPress themes and plugins for professional clients.",
    category: "Tech Specializations",
    skills: ["WordPress", "PHP", "SEO", "Theme Development"],
    tools: ["LocalWP", "Elementor", "Git"],
    learnables: ["Custom Post Types", "REST API for WP", "Headless CMS patterns", "Security Hardening"],
    structure: [{ phase: "CMS", description: "Professional WordPress engineering." }],
    eligibility: "Basic HTML/CSS knowledge.",
    outcomes: ["WordPress Specialist", "Guaranteed Agency Placement"],
    duration: "3 Months",
    icon: "Layout"
  },
  {
    id: "django-web-dev",
    title: "Django Web Development",
    shortDesc: "Specialized focus on Python's rapid web development framework.",
    longDesc: "Comprehensive training in building complex web platforms using Django's powerful internal modules and security features.",
    category: "Tech Specializations",
    skills: ["Django", "Python", "SQL", "HTML/CSS"],
    tools: ["VS Code", "Docker", "Git"],
    learnables: ["Templates & Views", "Admin Customization", "Form Processing", "Auth Systems"],
    structure: [{ phase: "Web Framework", description: "Pythonic web patterns." }],
    eligibility: "Python basics required.",
    outcomes: ["Django Web Developer", "Backend-focused Portfolio"],
    duration: "4 Months",
    icon: "Terminal"
  },

  // 4. Data & AI
  {
    id: "ml-python",
    title: "Machine Learning with Python",
    shortDesc: "Implement predictive models and algorithms using modern ML libraries.",
    longDesc: "Deep dive into supervised and unsupervised learning, regression, classification, and neural network basics.",
    category: "Data & AI",
    skills: ["Python", "Pandas", "Scikit-Learn", "Matplotlib"],
    tools: ["Jupyter Notebooks", "Google Colab", "Anaconda"],
    learnables: ["Data Cleaning", "Statistical Modeling", "Feature Engineering", "Model Evaluation"],
    structure: [{ phase: "AI Core", description: "Mathematical foundations and modeling." }],
    eligibility: "Strong math and Python skills required.",
    outcomes: ["ML Engineer Assistant", "Analytical Project Portfolio"],
    duration: "5 Months",
    icon: "Cpu"
  },
  {
    id: "ai-basics",
    title: "Artificial Intelligence Basics",
    shortDesc: "Fundamental concepts of AI, robotics, and natural language processing.",
    longDesc: "An introductory path into the transformative world of AI, covering its history, ethics, and modern use cases.",
    category: "Data & AI",
    skills: ["AI Logic", "Prompt Engineering", "NLP Basics", "Ethics"],
    tools: ["ChatGPT API", "OpenAI Playground", "HuggingFace"],
    learnables: ["Heuristic Search", "Turing Tests", "Neural Concepts", "Future Tech Scenarios"],
    structure: [{ phase: "Introduction", description: "Theoretical and conceptual foundations." }],
    eligibility: "Curiosity and logical thinking.",
    outcomes: ["AI Literate Professional", "Tech Strategy Certificate"],
    duration: "2 Months",
    icon: "Zap"
  },
  {
    id: "data-analytics",
    title: "Data Analytics Fundamentals",
    shortDesc: "Learn to extract actionable insights from raw data using modern tools.",
    longDesc: "Master the art of data storytelling, visualization, and statistical analysis for business decision-making.",
    category: "Data & AI",
    skills: ["SQL", "Excel Advanced", "PowerBI", "Stats"],
    tools: ["SQL Server", "Tableau", "PowerBI"],
    learnables: ["Data Aggregation", "Pivot Reporting", "Dashboard Design", "Market Trend Analysis"],
    structure: [{ phase: "Analytics", description: "Business intelligence and insights." }],
    eligibility: "Analytical mindset.",
    outcomes: ["Data Analyst", "Enterprise Reporting Specialist"],
    duration: "4 Months",
    icon: "Activity"
  },
  {
    id: "data-science-complete",
    title: "Data Science Complete Course",
    shortDesc: "The end-to-end journey from data engineering to predictive analytics.",
    longDesc: "Comprehensive mastery of the data science lifecycle, combining statistics, computer science, and business logic.",
    category: "Data & AI",
    skills: ["Python", "R", "Deep Learning", "Big Data"],
    tools: ["TensorFlow", "PyTorch", "Hadoop"],
    learnables: ["Advanced Statistics", "Big Data Processing", "Deployment of ML Models", "Neural Networks"],
    structure: [{ phase: "Full Cycle", description: "The complete data science stack." }],
    eligibility: "Academic background in STEM.",
    outcomes: ["Data Scientist", "Lead Analytical Architect"],
    duration: "6 Months",
    icon: "Database"
  },
  {
    id: "data-viz-techniques",
    title: "Data Visualization Techniques",
    shortDesc: "Convert complex data sets into high-fidelity, intuitive visual experiences.",
    longDesc: "Focused training in the design and implementation of interactive charts and analytical dashboards.",
    category: "Data & AI",
    skills: ["D3.js", "Chart.js", "SVG Logic", "UI/UX"],
    tools: ["Adobe XD", "Plotly", "Figma"],
    learnables: ["Human Perception", "Color Theory for Data", "Dynamic Interactions", "Mobile-first Viz"],
    structure: [{ phase: "Visual Design", description: "The intersection of design and data." }],
    eligibility: "Interest in both design and data.",
    outcomes: ["Visualization Expert", "Dashboard UI Designer"],
    duration: "3 Months",
    icon: "Layout"
  },

  // 5. Networking & Security
  {
    id: "linux-course",
    title: "Linux Course",
    shortDesc: "Master the backbone of the internet. Command line, servers, and security.",
    longDesc: "Complete training in Linux administration, shell scripting, and server management for production environments.",
    category: "Networking & Security",
    skills: ["Shell Scripting", "User Management", "Networking", "Security"],
    tools: ["Ubuntu", "CentOS", "Kali Linux"],
    learnables: ["BASH Mastery", "Package Management", "Server Hardening", "Automation with Cron"],
    structure: [{ phase: "SysOps", description: "Kernel and server foundations." }],
    eligibility: "Basic computer awareness.",
    outcomes: ["Linux Administrator", "Certified Systems Engineer"],
    duration: "3 Months",
    icon: "Terminal"
  },
  {
    id: "ethical-hacking",
    title: "Ethical Hacking Course",
    shortDesc: "Learn to identify vulnerabilities and defend systems from malicious attacks.",
    longDesc: "Authorized penetration testing training covering foot-printing, reconnaissance, and modern security protocols.",
    category: "Networking & Security",
    skills: ["Pentesting", "Nmap", "Metasploit", "Vulnerability Research"],
    tools: ["Kali Linux", "Wireshark", "Burp Suite"],
    learnables: ["Scanning Networks", "System Hacking", "Wireless Security", "Cryptography"],
    structure: [{ phase: "Cyber Defense", description: "Proactive security engineering." }],
    eligibility: "Strong technical background and ethical mindset.",
    outcomes: ["Certified Ethical Hacker", "Security Consultant"],
    duration: "5 Months",
    icon: "Shield"
  },
  {
    id: "cloud-computing",
    title: "Cloud Computing Course",
    shortDesc: "Architecting and managing scalable solutions on AWS, Azure, and Google Cloud.",
    longDesc: "Learn cloud-native architecture, deployment strategies, and global infrastructure management.",
    category: "Networking & Security",
    skills: ["AWS", "Azure", "Serverless", "DevOps"],
    tools: ["CloudFormation", "Terraform", "Docker"],
    learnables: ["IAM Roles", "VPC Design", "S3 & EC2 Ops", "Cloud Security"],
    structure: [{ phase: "Cloud Architecture", description: "Distributed infrastructure mastery." }],
    eligibility: "Networking basics knowledge.",
    outcomes: ["Cloud Architect", "DevOps Specialist"],
    duration: "4 Months",
    icon: "Globe"
  },
  {
    id: "cyber-security",
    title: "Cyber Security",
    shortDesc: "Comprehensive protection of digital assets, data, and networks.",
    longDesc: "Focused on risk management, governance, and the technical implementation of security frameworks.",
    category: "Networking & Security",
    skills: ["ISO 27001", "Threat Modeling", "Incident Response", "Firewall Ops"],
    tools: ["Splunk", "Nessus", "CheckPoint"],
    learnables: ["Risk Assessment", "Network Defense", "Data Privacy Laws", "Forensics Basics"],
    structure: [{ phase: "Security Mgmt", description: "Enterprise security protocols." }],
    eligibility: "Tech graduates preferred.",
    outcomes: ["Security Analyst", "Compliance Officer"],
    duration: "4 Months",
    icon: "Shield"
  },
  {
    id: "iot-specialization",
    title: "Internet of Things (IoT)",
    shortDesc: "Connecting physical devices to digital intelligence through smart networks.",
    longDesc: "Learn to program microcontrollers, sensors, and the communication layers between physical and digital worlds.",
    category: "Networking & Security",
    skills: ["Arduino", "Raspberry Pi", "C++", "MQTT"],
    tools: ["ThinkSpeak", "IFTTT", "Node-RED"],
    learnables: ["Embedded Logic", "Sensor Integration", "M2M Communication", "Edge Computing"],
    structure: [{ phase: "Connected Systems", description: "Physical-digital engineering." }],
    eligibility: "Interest in electronics and code.",
    outcomes: ["IoT Engineer", "Embedded Systems Developer"],
    duration: "4 Months",
    icon: "Cpu"
  },

  // 6. Programming Courses
  {
    id: "python-cert",
    title: "Python Programming Certification",
    shortDesc: "The ultimate guide to the world's most versatile programming language.",
    longDesc: "From core syntax to advanced data structures, libraries, and industrial applications of Python.",
    category: "Programming Courses",
    skills: ["Python 3", "OOP", "Data Structures", "Algorithms"],
    tools: ["VS Code", "PIP", "VirtualEnv"],
    learnables: ["File Handling", "Exception Logic", "Decorator Patterns", "Module Dev"],
    structure: [{ phase: "Core Mastery", description: "Standard Pythonic practices." }],
    eligibility: "Open to absolute beginners.",
    outcomes: ["Certified Python Programmer", "Software Logic Expert"],
    duration: "3 Months",
    icon: "Terminal"
  },
  {
    id: "java-masterclass",
    title: "Java Programming Masterclass",
    shortDesc: "Comprehensive mastery of Java for desktop, mobile, and server apps.",
    longDesc: "Deep dive into the robust world of Java development, covering Spring Boot and enterprise patterns.",
    category: "Programming Courses",
    skills: ["Java SE/EE", "Spring Boot", "JVM Logic", "OOP"],
    tools: ["IntelliJ IDEA", "Maven", "Gradle"],
    learnables: ["Multi-threading", "JDBC", "Spring Framework", "Collections Framework"],
    structure: [{ phase: "Enterprise Java", description: "Robust software engineering." }],
    eligibility: "Logical thinking skills.",
    outcomes: ["Java Developer", "Enterprise Software Engineer"],
    duration: "4 Months",
    icon: "Code"
  },
  {
    id: "php-programming",
    title: "PHP Programming Course",
    shortDesc: "Focused training on the scripting language that powers 70%+ of the web.",
    longDesc: "Learn modern PHP practices to build dynamic, data-driven websites and custom backend systems.",
    category: "Programming Courses",
    skills: ["PHP 8", "MySQL", "Web Security", "AJAX"],
    tools: ["XAMPP/WAMP", "VS Code", "Git"],
    learnables: ["PDO Database Logic", "Session Management", "Error Handling", "REST Integration"],
    structure: [{ phase: "Scripting", description: "Dynamic web development." }],
    eligibility: "Basic HTML knowledge.",
    outcomes: ["PHP Developer", "Web Backend Specialist"],
    duration: "3 Months",
    icon: "Terminal"
  },
  {
    id: "c-cpp-basics",
    title: "C & C++ Programming Basics",
    shortDesc: "The foundation of modern computing. Learn memory management and performance.",
    longDesc: "Perfect for students looking to understand the low-level logic of computers and competitive programming.",
    category: "Programming Courses",
    skills: ["C", "C++", "Pointers", "Memory Management"],
    tools: ["CodeBlocks", "GCC", "VS Code"],
    learnables: ["Arrays & Strings", "Dynamic Memory", "Linked Lists", "OOP in C++"],
    structure: [{ phase: "Foundation", description: "Low-level logic and algorithms." }],
    eligibility: "Students entering the tech field.",
    outcomes: ["Certified C/C++ Programmer", "Logic Fundamentals Certificate"],
    duration: "3 Months",
    icon: "Code"
  },

  // 7. Internships
  {
    id: "intern-15",
    title: "15-Day Internship",
    shortDesc: "Tactical industrial exposure for rapid skill synchronization.",
    longDesc: "A short-burst residency focused on company culture, project workflows, and minor technical modules.",
    category: "Internships",
    skills: ["Workplace Culture", "Basic Git", "Professional Ethics", "Team Sync"],
    tools: ["Slack", "Trello", "GitHub"],
    learnables: ["Daily Standups", "Ticket Lifecycle", "Documentation", "Module Testing"],
    structure: [{ phase: "Tactical", description: "Rapid industrial immersion." }],
    eligibility: "Currently enrolled students.",
    outcomes: ["Experience Certificate", "Module Achievement Report"],
    duration: "15 Days",
    icon: "Briefcase"
  },
  {
    id: "intern-45",
    title: "45-Day Internship",
    shortDesc: "Mid-tier residency with focused project task delivery.",
    longDesc: "Work alongside senior engineers on specific project components to gain real-world industrial confidence.",
    category: "Internships",
    skills: ["Component Dev", "QA Testing", "Version Control", "Sprint Logic"],
    tools: ["Linear", "GitHub Actions", "Notion"],
    learnables: ["Code Review Participation", "Feature Branching", "Unit Testing", "API Consumption"],
    structure: [{ phase: "Task Integration", description: "Active project contribution." }],
    eligibility: "Final year students or graduates.",
    outcomes: ["Professional Internship Certificate", "Live Task Record"],
    duration: "45 Days",
    icon: "Briefcase"
  },
  {
    id: "intern-84",
    title: "84-Day Internship",
    shortDesc: "High-intensity industrial training with full module responsibility.",
    longDesc: "A complete quarter of professional development, leading a specific module within a larger agency project.",
    category: "Internships",
    skills: ["Full Module Ownership", "Client Demo prep", "Advanced Troubleshooting", "Logic Design"],
    tools: ["Docker", "Jenkins", "AWS Console"],
    learnables: ["System Design participation", "Full-stack integration", "CI/CD awareness", "Performance Audits"],
    structure: [{ phase: "Quarterly Unit", description: "Extended technical residency." }],
    eligibility: "Technical graduates with basic skills.",
    outcomes: ["Senior Internship Record", "Career Mentorship Report"],
    duration: "84 Days",
    icon: "Briefcase"
  },
  {
    id: "intern-6mo",
    title: "6-Month Internship",
    shortDesc: "Elite career launchpad with deep project integration.",
    longDesc: "Full half-year residency working on active global enterprise projects with senior mentorship and placement focus.",
    category: "Internships",
    skills: ["Project Lifecycle", "Senior Mentorship", "Enterprise Integration", "Professional Portfolio"],
    tools: ["Full Stack Suite", "Jira", "AWS/Azure"],
    learnables: ["Production Deployment", "Architecture Design", "Stakeholder Communication", "Scaling Logic"],
    structure: [{ phase: "Professional Entry", description: "The definitive career launchpad." }],
    eligibility: "Selected candidates only via interview.",
    outcomes: ["Professional Work Record", "Performance-based Job Offer"],
    duration: "6 Months",
    icon: "Briefcase"
  }
];

export const SERVICES: Service[] = [
  // 1. Web & Software Development
  {
    id: "custom-web-dev",
    title: "Custom Website Development",
    category: ServiceCategory.WebSoftwareDev,
    shortDesc: "Bespoke web solutions tailored to your unique business logic and goals.",
    longDesc: "We build scalable, high-performance websites from scratch using modern architectures.",
    deliverables: ["Custom Architecture", "Responsive Design", "SEO Integration"],
    outcomes: ["Unique Brand Identity", "High Performance", "Scalable Base"],
    icon: "Globe"
  },
  {
    id: "full-stack-web",
    title: "Full Stack Web Development",
    category: ServiceCategory.WebSoftwareDev,
    shortDesc: "End-to-end engineering covering both client and server layers.",
    longDesc: "Comprehensive development using modern stacks like MERN, T3, or Django/React.",
    deliverables: ["Frontend App", "Backend API", "Database Setup"],
    outcomes: ["Integrated System", "Robust Performance"],
    icon: "Layers"
  },
  {
    id: "saas-dev",
    title: "SaaS Product Development",
    category: ServiceCategory.WebSoftwareDev,
    shortDesc: "Building multi-tenant software-as-a-service platforms for scale.",
    longDesc: "Specialized engineering for subscription-based products with complex user management.",
    deliverables: ["Multi-tenancy Architecture", "Subscription Sync", "User Dashboards"],
    outcomes: ["Recurring Revenue Infrastructure", "Scalable User Base"],
    icon: "Zap"
  },

  // 2. E-Commerce Solutions
  {
    id: "shopify-store",
    title: "Shopify Store Development",
    category: ServiceCategory.ECommerce,
    shortDesc: "World-class Shopify storefronts for scaling global brands.",
    longDesc: "We build high-converting Shopify stores with custom themes and app integrations.",
    deliverables: ["Store Setup", "App Configuration", "Payment Integration"],
    outcomes: ["Professional Storefront", "Higher Conversions"],
    icon: "ShoppingBag"
  },
  {
    id: "custom-shopify-themes",
    title: "Custom Shopify Theme Development",
    category: ServiceCategory.ECommerce,
    shortDesc: "Artisanal Liquid-based themes that differentiate your brand from the crowd.",
    longDesc: "Moving beyond templates to create high-fidelity, unique shopping experiences.",
    deliverables: ["Custom Liquid Code", "Unique UX Flow", "Speed Optimization"],
    outcomes: ["Distinctive Brand Look", "Industry-leading Load Speeds"],
    icon: "Layout"
  },

  // 3. Mobile App Development
  {
    id: "native-android",
    title: "Android App Development",
    category: ServiceCategory.MobileDev,
    shortDesc: "Native Android engineering using Kotlin and modern Material Design.",
    longDesc: "High-performance native apps built for the world's most popular mobile OS.",
    deliverables: ["Kotlin Source Code", "Play Store Deployment", "Material Design UI"],
    outcomes: ["Smooth Performance", "Device Hardware Access"],
    icon: "Smartphone"
  },
  {
    id: "native-ios",
    title: "iOS App Development (Swift)",
    category: ServiceCategory.MobileDev,
    shortDesc: "Premium iOS applications for the Apple ecosystem using Swift and SwiftUI.",
    longDesc: "Visually stunning and incredibly fast native apps for iPhone and iPad.",
    deliverables: ["Swift Source Code", "App Store Submission", "SwiftUI Components"],
    outcomes: ["Elite User Experience", "Apple Ecosystem Integration"],
    icon: "Smartphone"
  },
  {
    id: "flutter-react-native",
    title: "Cross-platform Mobile Applications",
    category: ServiceCategory.MobileDev,
    shortDesc: "High-quality apps for both platforms using React Native or Flutter.",
    longDesc: "Reducing development time and cost with a single codebase without sacrificing quality.",
    deliverables: ["Shared Codebase", "Dual-Store Release", "Native Bridges"],
    outcomes: ["Cost Efficiency", "Unified Brand Experience"],
    icon: "Box"
  },

  // 4. Backend & Server Technologies
  {
    id: "python-django-backend",
    title: "Python Backend Development (Django)",
    category: ServiceCategory.BackendServer,
    shortDesc: "Secure and robust server-side logic using Python's power framework.",
    longDesc: "Building scalable APIs and complex business logic layers with 'batteries-included' security.",
    deliverables: ["Django API", "PostgreSQL Integration", "JWT Auth"],
    outcomes: ["Enterprise Security", "Rapid Development"],
    icon: "Database"
  },
  {
    id: "node-js-backend",
    title: "Node.js Backend Development",
    category: ServiceCategory.BackendServer,
    shortDesc: "Lightning-fast, real-time backend systems using the JavaScript engine.",
    longDesc: "Event-driven architecture for high-concurrency and real-time data needs.",
    deliverables: ["Express/NestJS Server", "WebSocket Integration", "NPM Ecosystem"],
    outcomes: ["High Scalability", "Real-time Capabilities"],
    icon: "Terminal"
  },

  // 5. UI / UX & Design
  {
    id: "ux-ui-design",
    title: "UI/UX Design for Web & Mobile",
    category: ServiceCategory.UIUXDesign,
    shortDesc: "Human-centric design systems that prioritize usability and visual fidelity.",
    longDesc: "We design experiences that users love, backed by rigorous research and prototyping.",
    deliverables: ["Figma Prototypes", "User Journey Maps", "High-fidelity UI"],
    outcomes: ["Improved User Retention", "Premium Brand Perception"],
    icon: "Palette"
  },
  {
    id: "dashboard-design",
    title: "Modern Dashboard UI",
    category: ServiceCategory.UIUXDesign,
    shortDesc: "Complex data presentation made simple through clean, intuitive dashboards.",
    longDesc: "Specialized UI for admin panels, analytical platforms, and enterprise software.",
    deliverables: ["Chart Components", "Data Layout Patterns", "Interaction Logic"],
    outcomes: ["Operational Efficiency", "Clear Data Insights"],
    icon: "Activity"
  },

  // 6. Data, AI & Automation
  {
    id: "ai-integration",
    title: "Artificial Intelligence Integration",
    category: ServiceCategory.DataAIAutomation,
    shortDesc: "Infusing your products with the power of LLMs and generative AI.",
    longDesc: "Connecting OpenAI, Anthropic, or custom models into your existing workflows.",
    deliverables: ["AI Prompt Chains", "Vector DB Setup", "Model Fine-tuning"],
    outcomes: ["Competitive Advantage", "Automated Intelligence"],
    icon: "Zap"
  },
  {
    id: "business-automation",
    title: "Business Automation Systems",
    category: ServiceCategory.DataAIAutomation,
    shortDesc: "Eliminating manual bottlenecks with smart, automated workflow layers.",
    longDesc: "Connecting disparate tools (CRMs, ERPs, APIs) to work in a unified, automated cycle.",
    deliverables: ["n8n/Make Workflows", "Custom Integrations", "Reporting Bots"],
    outcomes: ["Reduced Operational Cost", "Zero Human Error"],
    icon: "Cpu"
  },

  // 7. Cloud, DevOps & Infrastructure
  {
    id: "cloud-computing-ops",
    title: "Cloud Computing Solutions",
    category: ServiceCategory.CloudDevOps,
    shortDesc: "Architecting scalable infrastructure on AWS, Azure, or Google Cloud.",
    longDesc: "Modern cloud setups for high availability and global load balancing.",
    deliverables: ["Cloud Architecture", "Instance Configuration", "Auto-scaling Setup"],
    outcomes: ["Infinite Scalability", "99.9% Uptime"],
    icon: "Globe"
  },
  {
    id: "ci-cd-devops",
    title: "CI/CD Pipeline Setup",
    category: ServiceCategory.CloudDevOps,
    shortDesc: "Automating the path from code to production for faster releases.",
    longDesc: "Implementing GitHub Actions or Jenkins to ensure every commit is tested and deployed.",
    deliverables: ["Build Scripts", "Automated Testing", "One-click Deployment"],
    outcomes: ["Faster Delivery Cycles", "Stable Code Releases"],
    icon: "TrendingUp"
  },

  // 8. Networking & Cyber Security
  {
    id: "ethical-hacking-sec",
    title: "Ethical Hacking Services",
    category: ServiceCategory.NetworkingSecurity,
    shortDesc: "Proactive vulnerability testing to keep your digital assets safe.",
    longDesc: "Authorized penetration testing to identify and remediate security loopholes.",
    deliverables: ["Vulnerability Report", "Fix Recommendations", "Security Audit"],
    outcomes: ["Hardened Infrastructure", "Data Protection Compliance"],
    icon: "Shield"
  },
  {
    id: "iot-solutions-dev",
    title: "Internet of Things (IoT) Solutions",
    category: ServiceCategory.NetworkingSecurity,
    shortDesc: "Connecting physical hardware to digital intelligence layers.",
    longDesc: "Programming embedded systems and sensor-driven communication protocols.",
    deliverables: ["Embedded Logic", "M2M Communication", "Cloud Sync"],
    outcomes: ["Physical-Digital Sync", "Smart Environment Control"],
    icon: "Cpu"
  },

  // 9. Programming & Technical Training
  {
    id: "python-training-serv",
    title: "Python Programming",
    category: ServiceCategory.TechnicalTraining,
    shortDesc: "Master the industry standard for AI, web, and automation.",
    longDesc: "Comprehensive training from core syntax to advanced data structures.",
    deliverables: ["Curriculum Material", "Hands-on Projects", "Certification"],
    outcomes: ["Technical Mastery", "Job Readiness"],
    icon: "Code"
  },
  {
    id: "full-stack-training-serv",
    title: "Full Stack Training",
    category: ServiceCategory.TechnicalTraining,
    shortDesc: "The complete journey from frontend design to backend engineering.",
    longDesc: "Intensive program covering MERN or Python/Django stacks for modern developers.",
    deliverables: ["Integrated Project Portfolio", "Stack Mastery", "Mentorship"],
    outcomes: ["Senior Developer Trajectory", "Agency-ready Skills"],
    icon: "Layers"
  },

  // 10. Internships & Industry Programs
  {
    id: "intern-15-serv",
    title: "15-Day Internship Program",
    category: ServiceCategory.InternshipsIndustry,
    shortDesc: "Tactical industrial exposure for rapid skill synchronization.",
    longDesc: "A short-burst residency focused on company culture and minor project modules.",
    deliverables: ["Certification", "Module Exposure", "Workplace Readiness"],
    outcomes: ["Academic Compliance", "Industrial Insight"],
    icon: "Briefcase"
  },
  {
    id: "intern-6mo-serv",
    title: "6-Month Internship Program",
    category: ServiceCategory.InternshipsIndustry,
    shortDesc: "Elite career launchpad with deep project integration.",
    longDesc: "Full-quarter residency working on active global enterprise projects with senior mentorship.",
    deliverables: ["Professional Work Record", "Senior Certification", "Placement Opportunity"],
    outcomes: ["Enterprise Integration", "Professional Portfolio"],
    icon: "Briefcase"
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "urbethh-luxury",
    title: "Urbethh – Luxury Streetwear E-commerce Platform",
    type: "E-commerce Website (Design + Development)",
    industry: "Fashion / Streetwear / Luxury Apparel",
    platform: "Shopify",
    techStack: ["Shopify", "Custom Theme", "HTML", "CSS", "JavaScript", "UX Strategy"],
    overview: "Urbethh is a luxury streetwear clothing brand focused on premium aesthetics and brand identity. Created a visually rich, high-performance website reflecting exclusivity.",
    responsibilities: [
      "Designed overall website structure and user journey",
      "Developed a custom Shopify theme aligned with luxury branding",
      "Optimized product pages for conversion and clarity",
      "Ensured mobile responsiveness across all devices"
    ],
    outcomes: [
      "Premium visual identity aligned with brand positioning",
      "Smooth shopping experience with clear CTAs",
      "Improved trust and brand credibility"
    ],
    liveUrl: "https://urbethh.in/",
    category: "Shopify"
  },
  {
    id: "ai-hotel-receptionist",
    title: "AI Hotel Receptionist System (Voice + Automation)",
    type: "AI Automation System (Subscription-based)",
    industry: "Hospitality / Hotel Management",
    techStack: ["n8n", "Retell AI", "Google Sheets", "Calendar", "AI Logic"],
    overview: "An AI-powered hotel receptionist system designed to handle tasks normally performed by humans. Manages calls, bookings, reminders, and guest interactions.",
    responsibilities: [
      "Designed complete system architecture",
      "Created automation workflows for booking and scheduling",
      "Built voice AI agents for inbound and outbound calls",
      "Integrated calendars and databases"
    ],
    outcomes: [
      "Reduced staffing costs",
      "24/7 availability",
      "Human-like guest experience"
    ],
    category: "Automation"
  },
  {
    id: "real-estate-ai-funnel",
    title: "Real Estate Lead Gen & AI Qualification",
    type: "AI Automation System",
    industry: "Real Estate",
    techStack: ["Ads + Lead Forms", "n8n Automation", "AI Scoring", "WhatsApp API", "AI Voice Calling"],
    overview: "Automates the entire real-estate lead funnel—from ad leads to appointment booking with a real broker—using AI for filtering and scoring.",
    responsibilities: [
      "Designed lead scoring logic (Hot / Warm / Cold)",
      "Built AI-based qualification workflows",
      "Integrated WhatsApp, SMS, and email automation",
      "Automated appointment booking with brokers"
    ],
    outcomes: [
      "Increased lead conversion rate",
      "Reduced broker time waste",
      "Faster response time to prospects"
    ],
    category: "Automation"
  },
  {
    id: "urbethh-kb-ai",
    title: "E-commerce Knowledge Base AI (Urbethh)",
    type: "Website AI Assistant",
    industry: "Fashion E-commerce",
    techStack: ["AI Knowledge Base", "Website Integration", "Recommendation Logic"],
    overview: "An AI chatbot built for Urbethh that helps customers browse products, discover best sellers, and get instant answers.",
    responsibilities: [
      "Built AI recommendation logic",
      "Integrated chatbot into website",
      "Trained AI using product data",
      "Optimized responses for sales intent"
    ],
    outcomes: [
      "Improved user engagement",
      "Increased average order value",
      "Reduced customer support queries"
    ],
    category: "Automation"
  },
  {
    id: "shopify-custom-dev",
    title: "Custom Shopify Development Projects",
    type: "Development & Customization",
    industry: "Multiple E-commerce Brands",
    techStack: ["Liquid", "Performance Optimization", "UI/UX", "Animation Effects"],
    overview: "Delivering custom themes, performance optimization, and UI/UX improvements for various brands across diverse niches.",
    responsibilities: [
      "Custom Shopify theme development",
      "Product page redesigns for conversion",
      "Animation and interaction effects implementation",
      "Mobile responsiveness audits and fixes"
    ],
    outcomes: [
      "Delivered high-conversion product pages",
      "Improved loading speed and UX",
      "Built scalable, maintainable themes"
    ],
    category: "Shopify"
  },
  {
    id: "aica-gifts-store",
    title: "AICA Gifts – Shopify Store & SEO",
    type: "E-commerce Store (Design + SEO)",
    industry: "Corporate Gifting",
    techStack: ["Shopify", "Custom Theme", "Technical SEO", "Product Structuring"],
    overview: "A professional corporate gifting brand requiring a clean, trustworthy, and SEO-optimized Shopify store.",
    responsibilities: [
      "Developed complete Shopify store structure",
      "Customized theme UI for brand consistency",
      "Implemented proper on-page SEO",
      "Ensured clean navigation and conversion flow"
    ],
    outcomes: [
      "Improved search engine visibility",
      "Better trust for B2B buyers",
      "Scalable foundation for marketing"
    ],
    liveUrl: "https://aicagifts.com/",
    category: "Shopify"
  },
  {
    id: "ascent-essentials-dropship",
    title: "Ascent Essentials – AI Dropshipping Store",
    type: "Dropshipping System (End-to-End)",
    industry: "Consumer Products",
    techStack: ["Shopify", "AI Ads", "Product Research Tools", "Order Automation"],
    overview: "Built as a complete dropshipping system, including product research, AI-generated creatives, and automation.",
    responsibilities: [
      "Built and customized Shopify store",
      "Conducted product research based on demand",
      "Created optimized product listings",
      "Generated AI-based ad creatives (Images & Videos)"
    ],
    outcomes: [
      "Faster store launch",
      "Reduced creative production cost",
      "Ready-to-scale ad structure"
    ],
    liveUrl: "https://www.ascentessentials.store/",
    category: "Shopify"
  },
  {
    id: "job-app-automation-sys",
    title: "Job Application Automation System",
    type: "AI Automation Platform",
    industry: "Recruitment / Career Automation",
    techStack: ["Job APIs", "Resume AI", "Email Finder", "Outreach Automation"],
    overview: "Advanced system designed to apply for jobs at scale by scraping listings and customizing resumes based on job descriptions.",
    responsibilities: [
      "Designed end-to-end automation workflow",
      "Integrated job scraping APIs (LinkedIn, Indeed)",
      "Built AI logic to customize resumes",
      "Implemented direct email outreach system"
    ],
    outcomes: [
      "Massive time savings for seekers",
      "Increased response probability",
      "Fully automated career outreach"
    ],
    category: "Automation"
  },
  {
    id: "linkedin-content-automation",
    title: "LinkedIn Content & Post Automation",
    type: "AI Content & Growth System",
    industry: "Marketing / Social Media",
    techStack: ["AI Content Generation", "Scheduling Automation", "Topic Customization"],
    overview: "Fully automated LinkedIn content system that creates and publishes posts daily to maintain consistency and increase impressions.",
    responsibilities: [
      "Built AI-based content generation workflow",
      "Defined niche-specific content strategies",
      "Automated daily post scheduling",
      "Optimized content tone for engagement"
    ],
    outcomes: [
      "Increased profile impressions",
      "Better engagement rates",
      "Strong personal brand positioning"
    ],
    category: "Automation"
  },
  {
    id: "shopify-rto-voice-ai",
    title: "Shopify RTO Reduction Voice AI Agent",
    type: "AI Voice Automation",
    industry: "E-commerce / Dropshipping",
    techStack: ["Shopify Webhooks", "Retell AI", "n8n", "Decision Analysis"],
    overview: "A powerful AI voice agent that automatically calls customers after an order is placed to confirm details and significantly reduce RTO.",
    responsibilities: [
      "Designed AI call flow and logic",
      "Integrated Shopify order triggers",
      "Enabled order detail modifications via call",
      "Analyzed customer responses intelligently"
    ],
    outcomes: [
      "Lower RTO rates",
      "Higher delivery success",
      "Reduced manual calling workload"
    ],
    category: "Automation"
  },
  {
    id: "three-monkeys-streetwear",
    title: "Three Monkeys – Streetwear Branding",
    type: "E-commerce + Creative Production",
    industry: "Streetwear / Fashion",
    techStack: ["Shopify", "Graphic Design", "Video Editing", "Brand Visuals"],
    overview: "Required a strong digital presence and consistent visual branding. Focused on website creation and creative promotional assets.",
    responsibilities: [
      "Designed and developed Shopify website",
      "Created visually aligned storefront",
      "Designed posters for promotions",
      "Edited brand videos and product reels"
    ],
    outcomes: [
      "Complete brand-aligned experience",
      "Creative visuals beyond development",
      "Strong streetwear visual identity"
    ],
    liveUrl: "https://shopthreemonkeys.com/",
    category: "Shopify"
  },
  {
    id: "culture-shock-3d-visuals",
    title: "Culture Shock – 3D Mockups & Videos",
    type: "3D Visuals & Product Animation",
    industry: "Clothing / Streetwear",
    techStack: ["3D Modeling", "Mockups", "Motion Graphics", "VFX"],
    overview: "Visually engaging 3D mockups and product videos used for promotions, social media, and brand storytelling.",
    responsibilities: [
      "Created 3D clothing mockups",
      "Designed product-focused 3D visuals",
      "Produced animated product videos",
      "Delivered assets optimized for social platforms"
    ],
    outcomes: [
      "Improved product appeal",
      "Enhanced visual storytelling",
      "Distinctive brand visuals"
    ],
    category: "3D"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Vikram Shah",
    role: "Founder, Luxe Décor",
    content: "Aavishkar Codex delivered a Shopify store that exceeded our expectations. The automation they built has saved us hours of manual order processing.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    name: "Ananya Iyer",
    role: "Marketing Head, TechFlow",
    content: "Their AI-driven approach to marketing and lead generation is next-level. We've seen a massive ROI jump within just the first quarter.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100"
  }
];

export const FAQS: FAQ[] = [
  {
    category: "Services",
    question: "What is your project management methodology?",
    answer: "We use an Agile approach with 2-week sprints, ensuring transparent communication and regular delivery of measurable milestones."
  }
];