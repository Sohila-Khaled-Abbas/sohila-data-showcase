import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface Project {
  id?: string;
  title: string;
  description: string;
  technologies: string[];
  github_url: string;
  powerbi_url?: string;
  presentation_url?: string;
}

export interface Skill {
  id?: string;
  name: string;
  description: string;
  image_url: string;
}

export interface Certification {
  id?: string;
  title: string;
  authority: string;
  issue_date: string;
  expiration_date?: string;
  credential_url: string;
}
