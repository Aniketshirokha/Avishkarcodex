export interface Service {
  id: string;
  title: string;
  category: ServiceCategory;
  shortDesc: string;
  longDesc: string;
  deliverables: string[];
  outcomes: string[];
  tools?: string[];
  icon: string;
}

export enum ServiceCategory {
  WebSoftwareDev = "Web & Software Development",
  ECommerce = "E-Commerce Solutions",
  MobileDev = "Mobile App Development",
  BackendServer = "Backend & Server Technologies",
  UIUXDesign = "UI / UX & Design",
  DataAIAutomation = "Data, AI & Automation",
  CloudDevOps = "Cloud, DevOps & Infrastructure",
  NetworkingSecurity = "Networking & Cyber Security",
  TechnicalTraining = "Programming & Technical Training",
  InternshipsIndustry = "Internships & Industry Programs"
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface FAQ {
  question: string;
  answer: string;
  category: "Services" | "Careers";
}

export interface CaseStudy {
  id: string;
  title: string;
  type: string;
  industry: string;
  platform?: string;
  techStack: string[];
  overview: string;
  responsibilities: string[];
  outcomes: string[];
  liveUrl?: string;
  category: 'Web' | 'Shopify' | 'App' | 'UI UX' | 'Marketing' | 'Automation' | '3D';
}

export interface Course {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  category: string;
  skills: string[];
  tools: string[];
  learnables: string[];
  structure: {
    phase: string;
    description: string;
  }[];
  eligibility: string;
  outcomes: string[];
  duration: string;
  icon: string;
}