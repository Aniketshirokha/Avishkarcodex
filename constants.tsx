import { Service, ServiceCategory, Testimonial, FAQ, CaseStudy, Course } from './types';

export const BRAND_COLORS = {
  bg: '#F0F7FF',
  white: '#FFFFFF',
  primary: '#4FACFE',
  secondary: '#00C6FB',
  accent1: '#0061FF', // Bolder blue for high contrast
  accent2: '#7E22CE', // Stronger purple
  heading: '#0A2540',
  body: '#374151', // Higher contrast gray
  muted: '#6B7280',
  tagBg: '#D1E9FF',
  gradientPrimary: 'linear-gradient(135deg, #4FACFE 0%, #00C6FB 100%)',
  gradientAccent: 'linear-gradient(135deg, #0061FF 0%, #60A5FA 100%)',
};

export const COURSES: Course[] = [
  {
    id: "fullstack-architect",
    title: "Full-Stack System Architecture",
    shortDesc: "Master high-performance MERN stack development and cloud deployment.",
    longDesc: "This intensive program transforms developers into architects. We focus on building scalable, real-world systems using the latest enterprise-grade standards.",
    category: "Development",
    skills: ["React 19", "Node.js", "System Design", "MongoDB", "Cloud Architectures"],
    tools: ["Docker", "AWS", "GitLab CI/CD", "Redis", "Figma"],
    learnables: [
      "Advanced state management in React",
      "Building micro-services with Node.js",
      "Database indexing and query optimization",
      "Deploying and scaling with Kubernetes",
      "Security protocols and API hardening"
    ],
    structure: [
      { phase: "Phase 1: Advanced Frontend", description: "Deep dive into React 19, server components, and performance patterns." },
      { phase: "Phase 2: Scalable Backend", description: "Architecting robust APIs, middleware design, and authentication systems." },
      { phase: "Phase 3: DevOps & Cloud", description: "Dockerization, CI/CD pipelines, and AWS infrastructure management." }
    ],
    eligibility: "Final year students or graduates with basic JavaScript knowledge.",
    outcomes: ["Certified Software Architect", "Portfolio of 3 production-grade apps", "Placement assistance"],
    duration: "6 Months",
    icon: "Code2"
  },
  {
    id: "automation-ai",
    title: "AI & Business Automation Engineering",
    shortDesc: "Build the future of work using LLMs, No-code tools, and custom AI agents.",
    longDesc: "Learn to eliminate operational bottlenecks for global enterprises by engineering smart automation systems and custom AI integrations.",
    category: "Automation",
    skills: ["Prompt Engineering", "n8n / Zapier", "Python Automation", "WhatsApp API", "CRM Integration"],
    tools: ["OpenAI API", "Retell AI", "n8n", "Make.com", "GoHighLevel"],
    learnables: [
      "Building custom AI voice receptionists",
      "Automating lead qualification funnels",
      "Creating multi-agent AI workflows",
      "Integrating AI into existing ERP systems",
      "Designing conversational commerce bots"
    ],
    structure: [
      { phase: "Phase 1: Automation Fundamentals", description: "Mastering logic flows and third-party API connectivity." },
      { phase: "Phase 2: AI Integration", description: "Leveraging LLMs and vector databases for smart automation." },
      { phase: "Phase 3: Enterprise Solutions", description: "Building complex end-to-end automation for real clients." }
    ],
    eligibility: "Enthusiasts interested in AI and operational efficiency. No coding required.",
    outcomes: ["Certified Automation Specialist", "Expertise in 10+ automation tools", "Direct industry mentorship"],
    duration: "3 Months",
    icon: "Zap"
  },
  {
    id: "ecommerce-mastery",
    title: "E-commerce Engineering (Shopify)",
    shortDesc: "The definitive guide to building high-converting luxury storefronts.",
    longDesc: "Master the technical side of e-commerce. From liquid theme development to custom Shopify app builds and headless commerce.",
    category: "E-commerce",
    skills: ["Liquid Programming", "Shopify CLI", "CRO Strategies", "API Integration", "Performance UX"],
    tools: ["Shopify Admin", "Visual Studio Code", "React (for Headless)", "Klaviyo", "Google Analytics"],
    learnables: [
      "Building custom Shopify themes from scratch",
      "Developing private apps for complex features",
      "Optimizing stores for sub-second load times",
      "Advanced conversion rate optimization (CRO)",
      "Syncing inventory across global marketplaces"
    ],
    structure: [
      { phase: "Phase 1: Shopify Core", description: "Theme architecture, liquid templating, and store setup." },
      { phase: "Phase 2: Custom Development", description: "Advanced app dev and custom integration logic." },
      { phase: "Phase 3: Performance & Growth", description: "Speed optimization and data-driven scaling." }
    ],
    eligibility: "Designers or developers looking to specialize in high-growth e-commerce.",
    outcomes: ["Certified Shopify Developer", "Expertise in 20+ e-commerce apps", "Industry placement"],
    duration: "4 Months",
    icon: "ShoppingBag"
  }
];

export const SERVICES: Service[] = [
  {
    id: "shopify",
    title: "Shopify Store Development",
    category: ServiceCategory.Development,
    shortDesc: "End-to-end custom Shopify solutions for scaling your e-commerce brand.",
    longDesc: "We specialize in creating high-converting Shopify stores tailored to your business needs. From theme customization to complex app integrations, we ensure your store is robust and user-friendly.",
    deliverables: ["Custom Theme Development", "App Integration & Setup", "Migration from Other Platforms", "Payment Gateway Integration", "Performance Optimization", "Mobile-First Storefronts"],
    outcomes: ["Increased Conversion Rates", "Seamless Checkout Experience", "Fast Page Loading Times"],
    icon: "ShoppingBag"
  },
  {
    id: "ecom-mgmt",
    title: "E-commerce Product & Order Management",
    category: ServiceCategory.Development,
    shortDesc: "Streamline your sales workflow with automated product and inventory handling.",
    longDesc: "Our systems simplify the lifecycle of a product from listing to shipment. We help businesses manage thousands of SKUs without breaking a sweat.",
    deliverables: ["Inventory Synchronization", "Order Fulfillment Systems", "Vendor Management Portals", "Bulk Product Upload Tools", "Automated Returns Handling"],
    outcomes: ["Zero Inventory Discrepancy", "Faster Order Processing", "Reduced Operational Overhead"],
    icon: "Package"
  },
  {
    id: "wordpress",
    title: "WordPress Custom Development",
    category: ServiceCategory.Development,
    shortDesc: "Modern, secure, and SEO-optimized WordPress websites for corporates and blogs.",
    longDesc: "Beyond simple templates, we build scalable WordPress architectures that are easy to manage and highly secure.",
    deliverables: ["Custom Plugin Development", "Gutenberg Block Development", "Speed & Security Hardening", "Content Architecture Design", "SEO Foundation Setup"],
    outcomes: ["Higher Organic Ranking", "Easy Content Updates", "Rock-Solid Security"],
    icon: "FileCode"
  },
  {
    id: "app-dev",
    title: "Android & iOS App Development",
    category: ServiceCategory.Development,
    shortDesc: "High-performance native and cross-platform mobile applications.",
    longDesc: "We build intuitive mobile apps that users love, focusing on performance, UX, and seamless backend integration.",
    deliverables: ["React Native / Flutter Development", "UI/UX App Prototyping", "API Development & Integration", "App Store/Play Store Publishing", "Push Notification Systems"],
    outcomes: ["Enhanced User Engagement", "Smooth Multi-Platform UX", "Stable Application Lifecycle"],
    icon: "Smartphone"
  },
  {
    id: "branding",
    title: "Branding & Creative Content",
    category: ServiceCategory.DesignBranding,
    shortDesc: "Defining your identity through strategic design and storytelling.",
    longDesc: "We help businesses build a cohesive brand voice and visual language that resonates with their target audience.",
    deliverables: ["Brand Strategy & Positioning", "Logo & Visual Systems", "Style Guides", "Marketing Collateral", "Copywriting & Tone of Voice"],
    outcomes: ["Stronger Market Authority", "Consistent Brand Perception", "Instant Recognition"],
    icon: "Palette"
  },
  {
    id: "biz-profile",
    title: "Business Profile & Corporate Identity",
    category: ServiceCategory.DesignBranding,
    shortDesc: "Professional company profiles and presentation materials for pitches.",
    longDesc: "We craft compelling corporate identities that tell your story effectively to partners, investors, and clients.",
    deliverables: ["Company Profile Design", "Pitch Deck Creation", "Business Stationery", "Digital Business Cards", "Letterhead & Document Design"],
    outcomes: ["Improved Investor Confidence", "Professional Market Presence", "Clear Corporate Messaging"],
    icon: "Briefcase"
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing (Ads, SEO, SMM)",
    category: ServiceCategory.Marketing,
    shortDesc: "Data-driven marketing strategies to grow your reach and revenue.",
    longDesc: "From search engines to social feeds, we ensure your business is seen by the right people at the right time.",
    deliverables: ["SEO Audit & Implementation", "Google & Meta Ads Management", "Content Strategy", "Email Marketing Campaigns", "Analytics & Reporting"],
    outcomes: ["Higher ROI on Ad Spend", "Sustainable Traffic Growth", "Enhanced Brand Awareness"],
    icon: "TrendingUp"
  },
  {
    id: "automation",
    title: "Business Automation (CRM, ERP, WhatsApp API)",
    category: ServiceCategory.AutomationSystems,
    shortDesc: "Automate repetitive tasks and integrate your tools for maximum efficiency.",
    longDesc: "We eliminate manual bottlenecks by connecting your business processes through smart automation and custom integrations.",
    deliverables: ["Custom CRM/ERP Setup", "WhatsApp Business API Integration", "Workflow Automation (Zapier/Make)", "Lead Management Systems", "Automated Reporting Dashboards"],
    outcomes: ["Smoother Operations", "Time Saved on Admin Tasks", "Better Customer Support Response"],
    icon: "Cpu"
  },
  {
    id: "uiux",
    title: "UI UX Design",
    category: ServiceCategory.DesignBranding,
    shortDesc: "User-centric design that balances aesthetics with functional efficiency.",
    longDesc: "We create digital experiences that are intuitive, accessible, and delightful to interact with.",
    deliverables: ["User Research & Personas", "Wireframing & Prototyping", "Interface Design (Figma)", "User Testing", "Interactive Micro-animations"],
    outcomes: ["Lower Bounce Rates", "Higher Task Completion", "Intuitive User Journeys"],
    icon: "Layout"
  },
  {
    id: "hosting-sec",
    title: "Hosting, Security & Maintenance",
    category: ServiceCategory.InfrastructureSupport,
    shortDesc: "Keeping your digital assets fast, secure, and always online.",
    longDesc: "We manage the technical heavy lifting of server maintenance and security monitoring so you don't have to.",
    deliverables: ["Managed Cloud Hosting", "SSL & Firewall Configuration", "Regular Backups & Disaster Recovery", "Platform Updates", "Uptime Monitoring"],
    outcomes: ["Zero Downtime Anxiety", "Faster Server Response", "Protection Against Threats"],
    icon: "Shield"
  },
  {
    id: "marketplace",
    title: "Marketplace Onboarding & Catalog Management",
    category: ServiceCategory.Marketing,
    shortDesc: "Scale your presence across Amazon, Flipkart, and global marketplaces.",
    longDesc: "Expert assistance in navigating marketplace complexities, ensuring your products are listed correctly and optimized for search.",
    deliverables: ["Account Setup & Verification", "Product Listing Optimization", "A+ Content Creation", "Marketplace SEO", "Catalog Health Monitoring"],
    outcomes: ["Increased Marketplace Visibility", "Higher Buy Box Win Rates", "Compliance with Marketplace Rules"],
    icon: "Globe"
  },
  {
    id: "video-editing",
    title: "Creative Video Editing & Product Animation",
    category: ServiceCategory.Media3D,
    shortDesc: "Dynamic video content that captures attention and drives action.",
    longDesc: "From social media reels to high-end product explainers, we bring your message to life through movement.",
    deliverables: ["Product Promo Videos", "2D/3D Motion Graphics", "Social Media Content", "Explainer Videos", "Post-Production & Grading"],
    outcomes: ["Viral-Worthy Content", "Improved Video Engagement", "Clearer Product Understanding"],
    icon: "Video"
  },
  {
    id: "social-media",
    title: "Social Media Handling",
    category: ServiceCategory.Marketing,
    shortDesc: "Complete management of your social profiles for community growth.",
    longDesc: "We handle everything from posting schedules to community engagement, building a loyal tribe around your brand.",
    deliverables: ["Content Calendar Creation", "Community Management", "Engagement Strategies", "Hashtag Research", "Performance Analytics"],
    outcomes: ["Growing Community Base", "Consistent Post Frequency", "Direct Customer Insights"],
    icon: "MessageCircle"
  },
  {
    id: "cgi-3d",
    title: "CGI & 3D Mockups",
    category: ServiceCategory.Media3D,
    shortDesc: "Photorealistic 3D renders for products that haven't even been shipped yet.",
    longDesc: "We bridge the gap between concept and reality with high-quality CGI that makes your products stand out.",
    deliverables: ["3D Product Modeling", "Photorealistic Rendering", "Environmental Mockups", "Packaging Visualization", "Architectural Pre-vis"],
    outcomes: ["Premium Product Presentation", "Reduced Photography Costs", "Faster Time-to-Market"],
    icon: "Box"
  },
  {
    id: "ai-modeling",
    title: "AI Modeling & Texturing",
    category: ServiceCategory.Media3D,
    shortDesc: "Leveraging artificial intelligence for advanced material and model creation.",
    longDesc: "Cutting-edge techniques to generate high-fidelity textures and complex models with AI assistance for speed and precision.",
    deliverables: ["AI-Generated Textures", "Procedural Modeling", "Rapid Prototyping", "Digital Twin Creation", "Custom Material Libraries"],
    outcomes: ["State-of-the-art Visuals", "Efficient Production Cycles", "Infinite Scalability"],
    icon: "Zap"
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "urbethh-ecommerce",
    title: "Urbethh – Luxury Streetwear Platform",
    type: "E-commerce Website (Design + Development)",
    industry: "Fashion / Streetwear / Luxury Apparel",
    platform: "Shopify",
    techStack: ["Shopify", "Custom Theme", "Liquid", "React", "Node.js"],
    overview: "Urbethh is a luxury streetwear clothing brand focused on premium aesthetics. We delivered a high-performance storefront that reflects exclusivity while optimizing for heavy traffic spikes.",
    responsibilities: ["Engineered custom Shopify Liquid theme", "Optimized Core Web Vitals for LCP < 1.2s", "Integrated headless commerce modules", "Designed premium mobile-first UX"],
    outcomes: ["45% Increase in Mobile Conversion", "Sub-second Page Load Speeds", "Stronger Brand Authority"],
    liveUrl: "https://urbethh.in/",
    category: "Shopify"
  },
  {
    id: "ai-hotel-receptionist",
    title: "Voice AI Hotel Receptionist",
    type: "AI Automation System",
    industry: "Hospitality / Hotel Management",
    techStack: ["n8n", "Retell AI", "OpenAI API", "Twilio", "Google Workspace"],
    overview: "An AI-powered voice assistant capable of handling inbound inquiries, room availability checks, and booking confirmations without human intervention.",
    responsibilities: ["Developed conversation flows and logic", "Integrated Retell AI for natural voice synthesis", "Automated booking synchronization via n8n", "Real-time calendar management"],
    outcomes: ["Zero Staffing Cost for Inquiries", "24/7 Availability", "90% Reduction in Booking Lag"],
    category: "Automation"
  },
  {
    id: "real-estate-ai",
    title: "Lead Qualifier AI System",
    type: "AI Lead Generation & Automation",
    industry: "Real Estate",
    techStack: ["n8n", "WhatsApp Cloud API", "GPT-4", "Facebook Ads", "CRM Integration"],
    overview: "A holistic automation system that qualifies leads from Facebook Ads using WhatsApp AI conversations, scoring them before handing off to agents.",
    responsibilities: ["Designed Lead Classification Logic (Hot/Warm/Cold)", "Built automated WhatsApp qualification bots", "Integrated real-time CRM updates", "Automated broker notification system"],
    outcomes: ["200% Increase in Broker Efficiency", "Faster Lead-to-Meeting conversion", "Unified Lead Management"],
    category: "Automation"
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
  },
  {
    name: "Rohan Mehra",
    role: "CEO, Global Logistics",
    content: "Technically sound and professional. They built a custom infrastructure that is both secure and remarkably fast.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100"
  }
];

export const FAQS: FAQ[] = [
  {
    category: "Services",
    question: "What is your project management methodology?",
    answer: "We use an Agile approach with 2-week sprints, ensuring transparent communication and regular delivery of measurable milestones."
  },
  {
    category: "Services",
    question: "Do you handle custom enterprise automation?",
    answer: "Yes, we specialize in building bespoke CRM/ERP connectors and AI-driven automation using tools like n8n and custom Node.js middleware."
  },
  {
    category: "Careers",
    question: "Are your internship programs remote?",
    answer: "We offer both on-site and hybrid internship models depending on the project requirements and candidate location."
  }
];