/*
  # Create Admin User for Dashboard Access

  ## Overview
  This migration creates an admin user account in Supabase Auth for accessing
  the content management dashboard.

  ## Admin Account Details
  - Email: admin@ohmorganics.com
  - Password: OhmAdmin2024!
  - Role: Admin (stored in raw_app_meta_data)
  - Email confirmation: Auto-confirmed for immediate access

  ## Security
  - Password is hashed using Supabase's crypt extension
  - User is immediately confirmed (email_confirmed_at set)
  - Admin role metadata prevents regular user impersonation
  - Account has full access to admin dashboard features

  ## Notes
  - This creates a single admin user for content management
  - Password should be changed after first login in production
  - Uses gen_random_uuid() for unique user ID
  - Timestamps are set to current time for account creation
*/

-- Create admin user in auth.users table
DO $$
DECLARE
  new_user_id uuid;
  new_identity_id uuid;
BEGIN
  -- Generate UUIDs
  new_user_id := gen_random_uuid();
  new_identity_id := gen_random_uuid();
  
  -- Insert the admin user
  INSERT INTO auth.users (
    instance_id,
    id,
    aud,
    role,
    email,
    encrypted_password,
    email_confirmed_at,
    invited_at,
    confirmation_token,
    confirmation_sent_at,
    recovery_token,
    recovery_sent_at,
    email_change_token_new,
    email_change,
    email_change_sent_at,
    last_sign_in_at,
    raw_app_meta_data,
    raw_user_meta_data,
    is_super_admin,
    created_at,
    updated_at,
    phone,
    phone_confirmed_at,
    phone_change,
    phone_change_token,
    phone_change_sent_at,
    email_change_token_current,
    email_change_confirm_status,
    banned_until,
    reauthentication_token,
    reauthentication_sent_at,
    is_sso_user,
    deleted_at
  ) VALUES (
    '00000000-0000-0000-0000-000000000000',
    new_user_id,
    'authenticated',
    'authenticated',
    'admin@ohmorganics.com',
    crypt('OhmAdmin2024!', gen_salt('bf')),
    now(),
    null,
    '',
    null,
    '',
    null,
    '',
    '',
    null,
    null,
    '{"provider":"email","providers":["email"],"role":"admin"}'::jsonb,
    '{"name":"Admin User"}'::jsonb,
    false,
    now(),
    now(),
    null,
    null,
    '',
    '',
    null,
    '',
    0,
    null,
    '',
    null,
    false,
    null
  );

  -- Create identity record for the admin user
  INSERT INTO auth.identities (
    provider_id,
    id,
    user_id,
    identity_data,
    provider,
    last_sign_in_at,
    created_at,
    updated_at
  ) VALUES (
    new_user_id::text,
    new_identity_id,
    new_user_id,
    format('{"sub":"%s","email":"%s"}', new_user_id::text, 'admin@ohmorganics.com')::jsonb,
    'email',
    now(),
    now(),
    now()
  );
END $$;
