/*
  # Fix Security Issues

  ## Overview
  This migration addresses security concerns identified in the database:
  1. Removes unused indexes on display_order columns
  2. Fixes the search_path vulnerability in the update_updated_at_column function

  ## Changes

  ### 1. Remove Unused Indexes
  The display_order indexes are not being used by queries since we're using simple ORDER BY clauses.
  Removing these indexes:
  - `idx_products_display_order` on products table
  - `idx_testimonials_display_order` on testimonials table
  - `idx_faqs_display_order` on faqs table
  - `idx_services_display_order` on services table

  ### 2. Fix Function Search Path
  Drop and recreate the `update_updated_at_column` function with a secure search_path configuration.
  Adding `SET search_path = ''` ensures the function cannot be exploited through search_path manipulation.
  Using CASCADE to drop dependent triggers, then recreating them.

  ## Security Impact
  - Reduces attack surface by removing unused indexes
  - Prevents potential SQL injection through search_path manipulation
  - Makes the function immutable and more secure
*/

-- Drop unused indexes
DROP INDEX IF EXISTS idx_products_display_order;
DROP INDEX IF EXISTS idx_testimonials_display_order;
DROP INDEX IF EXISTS idx_faqs_display_order;
DROP INDEX IF EXISTS idx_services_display_order;

-- Drop the existing function with CASCADE to remove dependent triggers
DROP FUNCTION IF EXISTS update_updated_at_column() CASCADE;

-- Recreate the function with secure search_path
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- Recreate all triggers
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
