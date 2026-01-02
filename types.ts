
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
  Development = "Development",
  DesignBranding = "Design and Branding",
  Marketing = "Marketing",
  AutomationSystems = "Automation and Systems",
  Media3D = "Media and 3D",
  InfrastructureSupport = "Infrastructure and Support"
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
