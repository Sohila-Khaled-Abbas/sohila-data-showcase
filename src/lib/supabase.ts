
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://your-project-url.supabase.co';
const supabaseAnonKey = 'your-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Type definitions for our tables
export type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github_url: string;
  powerbi_url?: string;  // Add the new optional field
  image_url?: string;
  created_at?: string;
};

export type Skill = {
  id: number;
  category: string;
  skills: string[];
  created_at?: string;
};

export type Certification = {
  id: number;
  name: string;
  issuer: string;
  link?: string;
  created_at?: string;
};

export type ContactSubmission = {
  id: number;
  full_name: string;
  email: string;
  message: string;
  submitted_at: string;
};

