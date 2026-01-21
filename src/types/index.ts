export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  imageUrl: string;
  description: string;
  location?: string;
  year?: number;
}

export type ProjectCategory =
  | 'Living Rooms'
  | 'Kitchens'
  | 'Bedrooms'
  | 'Bathrooms'
  | 'Outdoor'
  | 'Commercial';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  imageUrl: string;
  rating: number;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}
