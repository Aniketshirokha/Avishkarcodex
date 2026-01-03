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

export const SERVICES: Service[] = [
  {
    id: "custom-web-dev",
    title: "Website Development",
    category: ServiceCategory.WebSoftwareDev,
    shortDesc: "Professional websites built from scratch to help your business grow.",
    longDesc: "We build modern, fast, and mobile-friendly websites that represent your brand perfectly. No slow templates, only clean code.",
    deliverables: ["Responsive Website", "Modern Design", "SEO Ready"],
    outcomes: ["Strong Online Presence", "Faster Load Speeds", "Mobile Friendly"],
    icon: "Globe"
  },
  {
    id: "shopify-store",
    title: "Shopify Store Setup",
    category: ServiceCategory.ECommerce,
    shortDesc: "Custom Shopify stores built for selling products online easily.",
    longDesc: "Expert Shopify development to help you launch your online store fast with professional themes and easy management.",
    deliverables: ["Store Setup", "Payment Integration", "Custom Design"],
    outcomes: ["Ready to Sell", "Easy Management"],
    icon: "ShoppingBag"
  },
  {
    id: "mobile-apps",
    title: "Mobile App Development",
    category: ServiceCategory.MobileDev,
    shortDesc: "High-quality Android and iOS apps for your business.",
    longDesc: "We develop easy-to-use mobile applications that work smoothly on both Android and iPhone devices.",
    deliverables: ["Android App", "iOS App", "User-friendly UI"],
    outcomes: ["Customer Engagement", "Niche App Presence"],
    icon: "Smartphone"
  },
  {
    id: "ai-automation",
    title: "AI & Business Automation",
    category: ServiceCategory.DataAIAutomation,
    shortDesc: "Save time by automating repetitive tasks with smart AI tools.",
    longDesc: "We help you integrate AI bots and automation workflows to reduce manual work and increase efficiency.",
    deliverables: ["AI Chatbots", "Workflow Automation", "API Integration"],
    outcomes: ["Lower Operational Costs", "Faster Response Times"],
    icon: "Zap"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Vikram Shah",
    role: "Local Business Owner",
    content: "Aavishkar Codex built a great website for my shop. It's very fast and easy for customers to use. Highly recommended!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    name: "Ananya Iyer",
    role: "Startup Founder",
    content: "The team is very professional. They helped us build our app from scratch and were always available to answer our questions.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100"
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "urbethh-luxury",
    title: "Urbethh - Luxury Fashion Store",
    type: "E-commerce Website",
    industry: "Fashion",
    platform: "Shopify",
    techStack: ["Shopify", "Custom Design", "SEO"],
    overview: "Built a premium online store for a luxury streetwear brand in India.",
    responsibilities: ["Design", "Development", "Mobile Optimization"],
    outcomes: ["Increased Sales", "Professional Brand Look"],
    liveUrl: "https://urbethh.in/",
    category: "Shopify"
  },
  {
    id: "ai-hotel-receptionist",
    title: "AI Receptionist System",
    type: "AI Automation",
    industry: "Hospitality",
    techStack: ["AI Voice", "Automation Bots"],
    overview: "Automated guest calls and bookings for a hotel to save time and staff costs.",
    responsibilities: ["AI Integration", "Workflow Setup"],
    outcomes: ["24/7 Availability", "Lower Staff Costs"],
    category: "Automation"
  }
];

export const FAQS: FAQ[] = [
  {
    category: "Services",
    question: "How much does a website cost?",
    answer: "The price depends on your requirements. After a short call to understand what you need, we provide a clear estimate."
  },
  {
    category: "Services",
    question: "How long does it take to build an app?",
    answer: "Typically, a mobile app takes 2-4 months depending on the features you want."
  }
];

export const COURSES: Course[] = [
  {
    id: "frontend-web",
    title: "Web Development Training",
    shortDesc: "Learn to build websites from scratch using HTML, CSS, and JS.",
    longDesc: "A complete course for beginners to learn the basics of web coding and start their career in tech.",
    category: "Development Courses",
    skills: ["HTML5", "CSS3", "JavaScript"],
    tools: ["VS Code", "Git"],
    learnables: ["Modern Layouts", "Responsive Design", "Basic Logic"],
    structure: [{ phase: "Basics", description: "Learn how web pages work." }],
    eligibility: "Open to anyone interested in coding.",
    outcomes: ["Certificate", "Job Ready Portfolio"],
    duration: "3 Months",
    icon: "Layout"
  }
];