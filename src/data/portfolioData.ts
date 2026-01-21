import ChocolateImg from "../assets/CHOCOLATE.png";
import CIHImg from "../assets/CIH.png";
import HISImg from "../assets/HIS.png";
import CRMAIImg from "../assets/CRM AI.png";
import CreativeImg from "../assets/CREATIVE.png";
import AIImg from "../assets/AI.png";


export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  role: string;
  category?: string;
  timeline?: string;
  tags: string[];
  videoUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  imageUrl: string;
  galleryImages?: string[];
  features?: string[];
  technologies?: string[];
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
    title: "CRM - AI Driven",
    description: "Total Sq.Ft is a leading AI-driven lead-management CRM platform",
    longDescription: "Total Sq.Ft captures user-data from various platform like Facebook, websites, chats and other various forms where customer feed there inputs for their needs. Total Sq.Ft analyse the user-data in various cases like based on platform, date/day/time/month of data received and display the result like which platform performing better based on number of data received count, what time, which date,time & month. Based on the application result digital marketing expert will assign campaign budget on various social media campaign run on google and Facebook to hit more number of customer enquiry.",
    role: " Designer",
    category: "Data Visualization",
    timeline: "6 Months",
    tags: ["Data Visualization", "3D Animation", "UI Animation", "Conceptual", "AI", "Dashboard", "Real-time", "Analytics"],
    videoUrl: "https://example.com/crm-demo.mp4",
    liveUrl: "https://demo.example.com",
    githubUrl: "https://github.com/username/crm-dashboard",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    features: [
      "Real-time data visualization with animated charts and graphs",
      "3D animated customer journey mapping with interactive hotspots",
      "Interactive UI elements with micro-animations for enhanced UX",
      "Complex data flow representation using particle systems",
      "Responsive design animations for multiple device viewports",
      "AI algorithm visualization showing neural network processes",
      "Custom transition animations between different data modules"
    ],
    technologies: ["After Effects", "Cinema 4D", "Blender", "Figma", "Lottie", "WebGL", "Three.js", "Adobe Illustrator"]
  },
  {
    id: 2,
    title: "Hospital Information System ",
    description: "Hospital Information System (HIS) is used to manage hospital, patient, staff, and medicine details efficiently and securely.",
    longDescription: "The system is mainly accessed by administrators and helps doctors by providing patient health history, admission details, and appointment schedules at the right time. HIS includes staff details such as doctors, nurses, and workers who handle treatment, patient care, billing, and medical records. It also manages patient details including inpatients, who stay in the hospital for treatment, and outpatients, who visit for consultation without admission. The system supports inpatient admission records and outpatient token generation by checking doctor availability, which improves coordination, reduces waiting time, and ensures smooth hospital operations.",
    role: " Graphics Designer",
    category: "Healthcare Technology",
    timeline: "6 months",
    tags: ["Motion Graphics", "Explainer Video", "Medical Tech", "Infographic", "Healthcare", "Training", "Workflow"],
    videoUrl: "https://example.com/hospital-demo.mp4",
    liveUrl: "https://healthcare-demo.example.com",
    githubUrl: "https://github.com/username/hospital-system",
    imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    features: [
      "Step-by-step workflow visualization for complex medical processes",
      "HIPAA compliant data representation with secure visual elements",
      "Multi-department process mapping showing inter-departmental workflows",
      "Animated data security protocols and encryption visualization",
      "Multi-language support animations for international training",
      "Interactive timeline showing patient journey from admission to discharge",
      "Animated data flow between different hospital departments"
    ],
    technologies: ["After Effects", "Illustrator", "Premiere Pro", "Adobe XD", "Lottie", "Audition", "Photoshop"]
  },
 {
  id: 4,
  title: "Chocolate Website by using figma",
  description: "A chocolate e-commerce website is an online platform that allows customers to browse, select, and purchase a variety of chocolates easily.",
  longDescription: "A chocolate e-commerce website is an online platform that allows customers to browse, select, and purchase a variety of chocolates easily. The website displays different chocolate products with prices, descriptions, and images, helping users choose their favorite items. It includes features like user registration, add to cart, secure online payment, and order tracking to ensure a smooth shopping experience. The system helps sellers manage products, stock, and customer orders efficiently, making it a convenient and user-friendly solution for buying chocolates online.",
  role: "UI/UX  Designer",
  category: "Brand & Packaging",
  timeline: "6 months",
  tags: ["UI Animation", "Packaging Design", "Brand Motion", "E-commerce", "Chocolate", "Micro-Interactions"],
  videoUrl: "https://example.com/chocolate-brand-demo.mp4",
  liveUrl: "https://luxury-chocolate.example.com",
  githubUrl: "https://github.com/username/chocolate-brand-motion",
  imageUrl: "https://images.unsplash.com/photo-1575377427642-087cf684f29d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  galleryImages: [
    "https://images.unsplash.com/photo-1575377427642-087cf684f29d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ],
  features: [
    "Animated packaging unwrapping sequences in 3D",
    "Micro-interactions with chocolate-themed easing curves",
    "Ingredient storytelling through animated infographics",
    "Seasonal campaign animations for holidays",
    "Product comparison animations highlighting quality differences",
    "Animated chocolate tasting journey with flavor profiles"
  ],
  technologies: ["After Effects", "Cinema 4D", "Figma", "Lottie", "Principle", "Blender"]
},
  {
    id: 5,
    title: "Customer Interaction Hub",
    description: "Customer interaction hub dhane, captures user-data from various platform",
    longDescription: "Customer interaction hub dhane, captures user-data from various platform like Facebook, websites, chats and other various forms where customer feed there inputs for their needs. It analyse the user-data in various cases like based on platform. perform in digital marketing expert will assign campaign budget on various social media campaign run on google and Facebook to hit more number of customer enquiry.",
    role: "UI/UX  Designer",
    category: "User Interface Design",
    timeline: "4 Months",
    tags: ["UI Animation", "Micro-Interactions", "UX Motion", "After Effects", "Design System", "Accessibility"],
    videoUrl: "https://example.com/ui-demo.mp4",
    liveUrl: "https://support-hub.example.com",
    githubUrl: "https://github.com/username/ui-motion-system",
    imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    features: [
      "Comprehensive motion design system with consistent animation patterns",
      "Micro-interactions for button states, form inputs, and feedback",
      "Page transition animations with contextual navigation cues",
      "Loading states and progress animations for better user patience",
      "Error state animations with clear visual feedback",
      "Accessibility-focused animations respecting reduced motion preferences",
      "Hierarchical animation choreography for complex UI components"
    ],
    technologies: ["After Effects", "Figma", "Lottie", "Principle", "Framer", "CSS Animations", "React Spring"]
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
    src: ChocolateImg,
    title: "Chocolate Website",
    desc: "E-commerce UI design",
  },
  {
    src: CIHImg,
    title: "CIH Dashboard",
    desc: "Hospital Management System",
  },
  {
    src: HISImg,
    title: "HIS Portal",
    desc: "Health Information System",
  },
  {
    src: CRMAIImg,
    title: "CRM AI",
    desc: "AI based Customer Management",
  },
  {
    src: CreativeImg,
    title: "CREATIVE",
    desc: "Health Information System",
  },
  {
    src: AIImg,
    title: "AI",
    desc: "AI based Customer Management",
  },
];

