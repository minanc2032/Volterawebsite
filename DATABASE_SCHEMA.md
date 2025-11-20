# Voltera Database Schema

This document describes the complete database schema for the Voltera website. Execute this SQL in your Supabase SQL Editor to set up the database.

## Tables Overview

1. **leads** - Customer lead information
2. **calculator_submissions** - Calculator form submissions with energy data
3. **blog_categories** - Blog article categories
4. **blog_articles** - Knowledge center articles
5. **testimonials** - Customer reviews and testimonials
6. **case_studies** - Detailed customer case studies
7. **subsidies** - Current subsidy information
8. **newsletter_signups** - Newsletter subscribers
9. **contact_submissions** - Contact form submissions

## SQL Migration

```sql
-- Create leads table
CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  source text DEFAULT 'website',
  product_interest text[] DEFAULT '{}',
  status text DEFAULT 'new',
  notes text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can create leads"
  ON leads FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all leads"
  ON leads FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update leads"
  ON leads FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create calculator_submissions table
CREATE TABLE IF NOT EXISTS calculator_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id uuid REFERENCES leads(id) ON DELETE CASCADE,
  woning_type text,
  bouwjaar integer,
  verbruik_kwh integer,
  gasverbruik_m3 integer,
  zonnepanelen_interesse boolean DEFAULT false,
  batterij_interesse boolean DEFAULT false,
  warmtepomp_interesse boolean DEFAULT false,
  aantal_panelen integer,
  jaarbesparing_euro numeric(10,2),
  investering_euro numeric(10,2),
  terugverdientijd_jaar numeric(4,1),
  subsidy_amount numeric(10,2),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE calculator_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can create calculator submissions"
  ON calculator_submissions FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view submissions"
  ON calculator_submissions FOR SELECT
  TO authenticated
  USING (true);

-- Create blog_categories table
CREATE TABLE IF NOT EXISTS blog_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE blog_categories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view categories"
  ON blog_categories FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can manage categories"
  ON blog_categories FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create blog_articles table
CREATE TABLE IF NOT EXISTS blog_articles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text,
  content text NOT NULL,
  category_id uuid REFERENCES blog_categories(id),
  author text DEFAULT 'Voltera Team',
  featured_image text,
  published boolean DEFAULT false,
  published_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  views integer DEFAULT 0
);

ALTER TABLE blog_articles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published articles"
  ON blog_articles FOR SELECT
  TO anon, authenticated
  USING (published = true);

CREATE POLICY "Authenticated users can manage articles"
  ON blog_articles FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text NOT NULL,
  location text,
  rating integer CHECK (rating >= 1 AND rating <= 5),
  review_text text NOT NULL,
  product_type text,
  installation_date date,
  verified boolean DEFAULT false,
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view verified testimonials"
  ON testimonials FOR SELECT
  TO anon, authenticated
  USING (verified = true);

CREATE POLICY "Authenticated users can manage testimonials"
  ON testimonials FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create case_studies table
CREATE TABLE IF NOT EXISTS case_studies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  customer_name text NOT NULL,
  location text,
  house_type text,
  solution_type text[] DEFAULT '{}',
  before_consumption integer,
  after_consumption integer,
  annual_savings numeric(10,2),
  installation_details text,
  customer_quote text,
  images text[] DEFAULT '{}',
  published boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE case_studies ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published case studies"
  ON case_studies FOR SELECT
  TO anon, authenticated
  USING (published = true);

CREATE POLICY "Authenticated users can manage case studies"
  ON case_studies FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create subsidies table
CREATE TABLE IF NOT EXISTS subsidies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  type text NOT NULL,
  product_category text,
  amount numeric(10,2),
  description text,
  requirements text,
  valid_from date,
  valid_until date,
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE subsidies ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active subsidies"
  ON subsidies FOR SELECT
  TO anon, authenticated
  USING (active = true);

CREATE POLICY "Authenticated users can manage subsidies"
  ON subsidies FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create newsletter_signups table
CREATE TABLE IF NOT EXISTS newsletter_signups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  subscribed boolean DEFAULT true,
  subscribed_at timestamptz DEFAULT now(),
  unsubscribed_at timestamptz
);

ALTER TABLE newsletter_signups ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_signups FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anyone can update their subscription"
  ON newsletter_signups FOR UPDATE
  TO anon
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view signups"
  ON newsletter_signups FOR SELECT
  TO authenticated
  USING (true);

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text,
  message text NOT NULL,
  callback_requested boolean DEFAULT false,
  preferred_time text,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact forms"
  ON contact_submissions FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view contact submissions"
  ON contact_submissions FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update contact submissions"
  ON contact_submissions FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_calculator_lead_id ON calculator_submissions(lead_id);
CREATE INDEX IF NOT EXISTS idx_articles_slug ON blog_articles(slug);
CREATE INDEX IF NOT EXISTS idx_articles_category ON blog_articles(category_id);
CREATE INDEX IF NOT EXISTS idx_articles_published ON blog_articles(published, published_at DESC);
CREATE INDEX IF NOT EXISTS idx_testimonials_featured ON testimonials(featured, verified);
CREATE INDEX IF NOT EXISTS idx_case_studies_published ON case_studies(published);
CREATE INDEX IF NOT EXISTS idx_subsidies_active ON subsidies(active, valid_until);

-- Insert default blog categories
INSERT INTO blog_categories (name, slug, description) VALUES
  ('Zonnepanelen', 'zonnepanelen', 'Alles over zonnepanelen en zonne-energie'),
  ('Thuisbatterijen', 'thuisbatterijen', 'Informatie over thuisbatterijen en energieopslag'),
  ('Warmtepompen', 'warmtepompen', 'Kennisartikelen over warmtepompen'),
  ('Financiering & Subsidies', 'financiering-subsidies', 'Subsidies, financiering en fiscale regelingen'),
  ('Energiebeheer', 'energiebeheer', 'Tips voor energiebesparing en slim energiegebruik')
ON CONFLICT (slug) DO NOTHING;

-- Insert sample ISDE subsidies
INSERT INTO subsidies (name, type, product_category, amount, description, requirements, valid_from, valid_until, active) VALUES
  ('ISDE Warmtepomp 2024', 'ISDE', 'warmtepomp', 2500.00, 'Subsidie voor de aanschaf van een volledige elektrische warmtepomp', 'Volledig elektrische warmtepomp, professionele installatie', '2024-01-01', '2025-12-31', true),
  ('ISDE Hybride Warmtepomp 2024', 'ISDE', 'warmtepomp', 1500.00, 'Subsidie voor de aanschaf van een hybride warmtepomp', 'Hybride warmtepomp, professionele installatie', '2024-01-01', '2025-12-31', true),
  ('BTW-teruggave Zonnepanelen', 'BTW', 'zonnepanelen', 0, 'Teruggave van 21% BTW op de aanschaf van zonnepanelen', 'Aanschaf zonnepanelen voor eigen woning', '2023-01-01', '2030-12-31', true)
ON CONFLICT DO NOTHING;

-- Insert sample testimonials
INSERT INTO testimonials (customer_name, location, rating, review_text, product_type, installation_date, verified, featured) VALUES
  ('Familie de Jong', 'Amsterdam', 5, 'Zeer tevreden met de zonnepanelen van Voltera. Professionele installatie en duidelijke uitleg. Onze energierekening is al met 70% gedaald!', 'zonnepanelen', '2024-03-15', true, true),
  ('Peter van Dijk', 'Utrecht', 5, 'Uitstekende service van begin tot eind. De warmtepomp werkt perfect en het huis is heerlijk warm. Aanrader!', 'warmtepomp', '2024-02-20', true, true),
  ('Maria Janssen', 'Rotterdam', 5, 'De combinatie van zonnepanelen en thuisbatterij is fantastisch. We zijn nu bijna energieneutraal!', 'zonnepanelen + batterij', '2024-04-10', true, true)
ON CONFLICT DO NOTHING;
```

## Setup Instructions

1. Go to your Supabase project dashboard
2. Navigate to the SQL Editor
3. Copy and paste the entire SQL migration above
4. Click "Run" to execute
5. Verify all tables are created in the Table Editor

## Notes

- All tables have Row Level Security (RLS) enabled
- Public users can submit leads, calculator data, and contact forms
- Only authenticated users can view and manage submissions
- Published content (blog, testimonials, case studies) is publicly readable
