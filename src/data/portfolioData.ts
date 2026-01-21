export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  role: string;
  videoUrl?: string;
  imageUrl?: string;
}

export interface Internship {
  company: string;
  role: string;
  description: string;
  period: string;
}

export interface Skill {
  category: string;
  items: string[];
  icon: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "CRM - AI Driven Analytics Dashboard",
    description: "Conceptual motion graphics piece visualizing complex AI-driven customer data. My backend knowledge ensured accurate and logical representation of data flow in animation narratives.",
    role: "3D Animator & Motion Designer",
    tags: ["Data Visualization", "3D Animation", "UI Animation", "Conceptual"],
    videoUrl: "https://example.com/crm-demo.mp4",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Hospital Information System - Process Explainer",
    description: "Animated explainer for complex healthcare software systems, simplifying intricate workflows for stakeholders using motion graphics.",
    role: "Motion Graphics Designer",
    tags: ["Motion Graphics", "Explainer Video", "Medical Tech", "Infographic"],
    videoUrl: "https://example.com/hospital-demo.mp4",
    imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "E-commerce Website - Product Visualization",
    description: "Interactive 3D product models and animated banners designed to enhance user engagement and showcase products dynamically.",
    role: "3D Product Animator",
    tags: ["3D Product Animation", "E-commerce", "WebGL", "Advertising"],
    videoUrl: "https://example.com/ecommerce-demo.mp4",
    imageUrl: "https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Customer Interaction Hub - UI/UX Motion",
    description: "Designed and animated motion principles for a modern customer service interface with focus on usability and engagement.",
    role: "UI/UX Motion Designer",
    tags: ["UI Animation", "Micro-Interactions", "UX Motion", "After Effects"],
    videoUrl: "https://example.com/ui-demo.mp4",
    imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export const internships: Internship[] = [
  {
    company: "Dream & Magic Media",
    role: "Web Designer Intern",
    description: "Assisted in creating visual assets and animated web elements, bridging design with functional web development.",
    period: "2023"
  },
  {
    company: "We Design Tech",
    role: "Testing Intern",
    description: "Performed functional and UI testing for web applications, honing attention to detail and user-centric design principles.",
    period: "2022"
  }
];

export const skills: Skill[] = [
 
  {
    category: "Programming",
    items: ["Java", "Python", "JavaScript/TypeScript", "React", "Node.js"],
    icon: "💻"
  },
  {
    category: "Databases",
    items: ["MySQL", "MongoDB", "PostgreSQL", "Firebase"],
    icon: "🗄️"
  },
  {
    category: "Tools & Others",
    items: ["Git", "Docker", "AWS", "REST APIs"],
    icon: "🛠️"
  }
];

export const galleryItems = [
  {
    src: "./src/assets/CHOCOLATE.png",
    title: "Chocolate Website",
    desc: "E-commerce UI design"
  },
  {
    src: "./src/assets/CIH.png",
    title: "CIH Dashboard",
    desc: "Hospital Management System"
  },
  {
    src: "./src/assets/HIS.png",
    title: "HIS Portal",
    desc: "Health Information System"
  },
  {
    src: "./src/assets/CRM AI.png",
    title: "CRM AI",
    desc: "AI based Customer Management"
  },
   {
    src: "./src/assets/CREATIVE.png",
    title: "CREATIVE",
    desc: "Health Information System"
  },
  {
    src: "./src/assets/AI.png",
    title: "AI",
    desc: "AI based Customer Management"
  }
];
