import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export interface Lead {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  source?: string;
  product_interest?: string[];
  status?: string;
  notes?: string;
  created_at?: string;
  updated_at?: string;
}

export interface CalculatorSubmission {
  id?: string;
  house_type?: string;
  roof_type?: string;
  annual_usage?: number;
  interested_in_solar?: boolean;
  interested_in_battery?: boolean;
  interested_in_heatpump?: boolean;
  name?: string;
  email?: string;
  phone?: string;
  created_at?: string;
}

export interface BlogArticle {
  id?: string;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  category_id?: string;
  author?: string;
  featured_image?: string;
  published?: boolean;
  published_at?: string;
  created_at?: string;
  updated_at?: string;
  views?: number;
}

export interface BlogCategory {
  id?: string;
  name: string;
  slug: string;
  description?: string;
  created_at?: string;
}

export interface Testimonial {
  id?: string;
  customer_name: string;
  location?: string;
  rating: number;
  review_text: string;
  product_type?: string;
  installation_date?: string;
  verified?: boolean;
  featured?: boolean;
  created_at?: string;
}

export interface CaseStudy {
  id?: string;
  title: string;
  customer_name: string;
  location?: string;
  house_type?: string;
  solution_type?: string[];
  before_consumption?: number;
  after_consumption?: number;
  annual_savings?: number;
  installation_details?: string;
  customer_quote?: string;
  images?: string[];
  published?: boolean;
  created_at?: string;
}

export interface Subsidy {
  id?: string;
  name: string;
  type: string;
  product_category?: string;
  amount?: number;
  description?: string;
  requirements?: string;
  valid_from?: string;
  valid_until?: string;
  active?: boolean;
  created_at?: string;
}

export interface ContactSubmission {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  callback_requested?: boolean;
  preferred_time?: string;
  status?: string;
  created_at?: string;
}

export interface NewsletterSignup {
  id?: string;
  email: string;
  subscribed?: boolean;
  subscribed_at?: string;
  unsubscribed_at?: string;
}

export async function createLead(lead: Lead): Promise<{ data: Lead | null; error: any }> {
  if (!supabase) return { data: null, error: new Error('Supabase not configured') };
  return await supabase.from('leads').insert(lead).select().single();
}

export async function createCalculatorSubmission(
  submission: CalculatorSubmission
): Promise<{ data: CalculatorSubmission | null; error: any }> {
  if (!supabase) return { data: null, error: new Error('Supabase not configured') };
  return await supabase.from('calculator_submissions').insert(submission).select().single();
}

export async function getPublishedArticles(categorySlug?: string) {
  if (!supabase) return { data: [], error: new Error('Supabase not configured') };

  let query = supabase
    .from('blog_articles')
    .select('*, category:blog_categories(*)')
    .eq('published', true)
    .order('published_at', { ascending: false });

  if (categorySlug) {
    const { data: category } = await supabase
      .from('blog_categories')
      .select('id')
      .eq('slug', categorySlug)
      .maybeSingle();

    if (category) {
      query = query.eq('category_id', category.id);
    }
  }

  return await query;
}

export async function getArticleBySlug(slug: string) {
  if (!supabase) return { data: null, error: new Error('Supabase not configured') };
  return await supabase
    .from('blog_articles')
    .select('*, category:blog_categories(*)')
    .eq('slug', slug)
    .eq('published', true)
    .maybeSingle();
}

export async function getCategories() {
  if (!supabase) return { data: [], error: new Error('Supabase not configured') };
  return await supabase.from('blog_categories').select('*').order('name');
}

export async function getFeaturedTestimonials(limit = 6) {
  if (!supabase) return { data: [], error: new Error('Supabase not configured') };
  return await supabase
    .from('testimonials')
    .select('*')
    .eq('verified', true)
    .eq('featured', true)
    .order('created_at', { ascending: false })
    .limit(limit);
}

export async function getPublishedCaseStudies() {
  if (!supabase) return { data: [], error: new Error('Supabase not configured') };
  return await supabase
    .from('case_studies')
    .select('*')
    .eq('published', true)
    .order('created_at', { ascending: false });
}

export async function getActiveSubsidies() {
  if (!supabase) return { data: [], error: new Error('Supabase not configured') };
  return await supabase
    .from('subsidies')
    .select('*')
    .eq('active', true)
    .order('created_at', { ascending: false });
}

export async function submitContactForm(contact: ContactSubmission) {
  if (!supabase) return { data: null, error: new Error('Supabase not configured') };
  return await supabase.from('contact_submissions').insert(contact).select().single();
}

export async function subscribeNewsletter(email: string) {
  if (!supabase) return { data: null, error: new Error('Supabase not configured') };
  return await supabase
    .from('newsletter_signups')
    .upsert({ email, subscribed: true, subscribed_at: new Date().toISOString() })
    .select()
    .single();
}
