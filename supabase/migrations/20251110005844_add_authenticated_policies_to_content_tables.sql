/*
  # Add Authenticated User Policies to Content Tables

  1. Security Updates
    - Add INSERT policies for authenticated users on products, testimonials, faqs, services
    - Add UPDATE policies for authenticated users on products, testimonials, faqs, services
    - Add DELETE policies for authenticated users on products, testimonials, faqs, services

  2. Important Notes
    - Public read access already exists on all tables
    - These policies restrict write operations to authenticated users only
    - This ensures only admin users (who are authenticated) can modify content
*/

-- Products table policies
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'products' AND policyname = 'Authenticated users can insert products'
  ) THEN
    CREATE POLICY "Authenticated users can insert products"
      ON products
      FOR INSERT
      TO authenticated
      WITH CHECK (true);
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'products' AND policyname = 'Authenticated users can update products'
  ) THEN
    CREATE POLICY "Authenticated users can update products"
      ON products
      FOR UPDATE
      TO authenticated
      USING (true)
      WITH CHECK (true);
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'products' AND policyname = 'Authenticated users can delete products'
  ) THEN
    CREATE POLICY "Authenticated users can delete products"
      ON products
      FOR DELETE
      TO authenticated
      USING (true);
  END IF;
END $$;

-- Testimonials table policies
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'testimonials' AND policyname = 'Authenticated users can insert testimonials'
  ) THEN
    CREATE POLICY "Authenticated users can insert testimonials"
      ON testimonials
      FOR INSERT
      TO authenticated
      WITH CHECK (true);
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'testimonials' AND policyname = 'Authenticated users can update testimonials'
  ) THEN
    CREATE POLICY "Authenticated users can update testimonials"
      ON testimonials
      FOR UPDATE
      TO authenticated
      USING (true)
      WITH CHECK (true);
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'testimonials' AND policyname = 'Authenticated users can delete testimonials'
  ) THEN
    CREATE POLICY "Authenticated users can delete testimonials"
      ON testimonials
      FOR DELETE
      TO authenticated
      USING (true);
  END IF;
END $$;

-- FAQs table policies
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'faqs' AND policyname = 'Authenticated users can insert faqs'
  ) THEN
    CREATE POLICY "Authenticated users can insert faqs"
      ON faqs
      FOR INSERT
      TO authenticated
      WITH CHECK (true);
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'faqs' AND policyname = 'Authenticated users can update faqs'
  ) THEN
    CREATE POLICY "Authenticated users can update faqs"
      ON faqs
      FOR UPDATE
      TO authenticated
      USING (true)
      WITH CHECK (true);
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'faqs' AND policyname = 'Authenticated users can delete faqs'
  ) THEN
    CREATE POLICY "Authenticated users can delete faqs"
      ON faqs
      FOR DELETE
      TO authenticated
      USING (true);
  END IF;
END $$;

-- Services table policies
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'services' AND policyname = 'Authenticated users can insert services'
  ) THEN
    CREATE POLICY "Authenticated users can insert services"
      ON services
      FOR INSERT
      TO authenticated
      WITH CHECK (true);
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'services' AND policyname = 'Authenticated users can update services'
  ) THEN
    CREATE POLICY "Authenticated users can update services"
      ON services
      FOR UPDATE
      TO authenticated
      USING (true)
      WITH CHECK (true);
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'services' AND policyname = 'Authenticated users can delete services'
  ) THEN
    CREATE POLICY "Authenticated users can delete services"
      ON services
      FOR DELETE
      TO authenticated
      USING (true);
  END IF;
END $$;