/*
  # Create Content Management Tables

  ## Overview
  This migration creates tables for managing website content through an admin panel.
  All tables have public read access since this is a public website, but write operations
  are controlled through the admin interface using service role key.

  ## New Tables
  
  ### 1. `products`
  Stores organic product information
  - `id` (uuid, primary key) - Unique identifier
  - `name` (text) - Product name
  - `description` (text) - Product description
  - `benefits` (text[]) - Array of product benefits
  - `colors` (text[]) - Available colors/variants
  - `image_url` (text) - Product image URL
  - `display_order` (integer) - Order for display
  - `created_at` (timestamptz) - Creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### 2. `testimonials`
  Stores customer testimonials
  - `id` (uuid, primary key) - Unique identifier
  - `quote` (text) - Testimonial text
  - `author` (text) - Customer name
  - `type` (text) - Testimonial category
  - `display_order` (integer) - Order for display
  - `created_at` (timestamptz) - Creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### 3. `faqs`
  Stores frequently asked questions
  - `id` (uuid, primary key) - Unique identifier
  - `section` (text) - FAQ category/section
  - `question` (text) - Question text
  - `answer` (text) - Answer text
  - `display_order` (integer) - Order for display
  - `created_at` (timestamptz) - Creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### 4. `services`
  Stores service offerings
  - `id` (uuid, primary key) - Unique identifier
  - `title` (text) - Service title
  - `description` (text) - Service description
  - `icon` (text) - Icon identifier (for lucide-react)
  - `display_order` (integer) - Order for display
  - `created_at` (timestamptz) - Creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ## Security
  All tables have RLS enabled with policies allowing:
  - Public read access (SELECT) for all users
  - No INSERT, UPDATE, or DELETE access through RLS
  - Admin operations will use service role key to bypass RLS

  ## Notes
  - Using display_order for flexible content ordering
  - Timestamps track content changes
  - Array columns for benefits and colors in products table
  - All IDs use UUID for uniqueness
*/

-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  benefits text[] DEFAULT '{}',
  colors text[] DEFAULT '{}',
  image_url text DEFAULT '',
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  quote text NOT NULL,
  author text NOT NULL,
  type text DEFAULT 'general',
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create faqs table
CREATE TABLE IF NOT EXISTS faqs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  section text NOT NULL,
  question text NOT NULL,
  answer text NOT NULL,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create services table
CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  icon text DEFAULT 'Circle',
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE faqs ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Allow public read access to products"
  ON products FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Allow public read access to testimonials"
  ON testimonials FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Allow public read access to faqs"
  ON faqs FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Allow public read access to services"
  ON services FOR SELECT
  TO anon, authenticated
  USING (true);

-- Create indexes for display_order for efficient ordering
CREATE INDEX IF NOT EXISTS idx_products_display_order ON products(display_order);
CREATE INDEX IF NOT EXISTS idx_testimonials_display_order ON testimonials(display_order);
CREATE INDEX IF NOT EXISTS idx_faqs_display_order ON faqs(display_order);
CREATE INDEX IF NOT EXISTS idx_services_display_order ON services(display_order);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers to automatically update updated_at
CREATE TRIGGER update_products_updated_at
  BEFORE UPDATE ON products
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_testimonials_updated_at
  BEFORE UPDATE ON testimonials
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_faqs_updated_at
  BEFORE UPDATE ON faqs
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_services_updated_at
  BEFORE UPDATE ON services
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
