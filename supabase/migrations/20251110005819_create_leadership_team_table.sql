/*
  # Create Leadership Team Table

  1. New Tables
    - `leadership_team`
      - `id` (uuid, primary key) - Unique identifier for each team member
      - `name` (text, required) - Full name of the team member
      - `role` (text, required) - Position/role in the organization
      - `description` (text, required) - Brief description or additional details
      - `display_order` (integer, default 0) - Order in which team members should be displayed
      - `created_at` (timestamptz) - Timestamp when record was created
      - `updated_at` (timestamptz) - Timestamp when record was last updated

  2. Security
    - Enable RLS on `leadership_team` table
    - Add policy for public SELECT access (anyone can view team members)
    - Add policy for authenticated INSERT access
    - Add policy for authenticated UPDATE access
    - Add policy for authenticated DELETE access

  3. Indexes
    - Add index on display_order for optimized sorting

  4. Initial Data
    - Insert existing team members from the About component
*/

-- Create the leadership_team table
CREATE TABLE IF NOT EXISTS leadership_team (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text NOT NULL,
  description text NOT NULL,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE leadership_team ENABLE ROW LEVEL SECURITY;

-- Create index on display_order for performance
CREATE INDEX IF NOT EXISTS idx_leadership_team_display_order ON leadership_team(display_order);

-- Policy: Allow anyone to view leadership team members
CREATE POLICY "Anyone can view leadership team"
  ON leadership_team
  FOR SELECT
  USING (true);

-- Policy: Only authenticated users can insert team members
CREATE POLICY "Authenticated users can insert leadership team"
  ON leadership_team
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Policy: Only authenticated users can update team members
CREATE POLICY "Authenticated users can update leadership team"
  ON leadership_team
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Policy: Only authenticated users can delete team members
CREATE POLICY "Authenticated users can delete leadership team"
  ON leadership_team
  FOR DELETE
  TO authenticated
  USING (true);

-- Insert initial leadership team data
INSERT INTO leadership_team (name, role, description, display_order) VALUES
  ('Rao Chalasani', 'Founder', 'NRI, US-based', 1),
  ('Wg. Commander Krishna Rao Yarlagadda', 'Founder', 'Retired IAF, Nimmakuru village', 2),
  ('Rajani Karuturi', 'CEO', 'US-based', 3),
  ('Hemanth Kumar', 'Plant Manager', 'Engineer', 4)
ON CONFLICT DO NOTHING;