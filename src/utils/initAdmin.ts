import { supabase } from '../lib/supabase';

const ADMIN_INITIALIZED_KEY = 'admin_user_initialized';

export async function initializeAdminUser(): Promise<boolean> {
  if (typeof window === 'undefined') {
    return false;
  }

  const isInitialized = localStorage.getItem(ADMIN_INITIALIZED_KEY);
  if (isInitialized === 'true') {
    return true;
  }

  const adminEmail = import.meta.env.VITE_ADMIN_EMAIL;
  const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD;

  if (!adminEmail || !adminPassword) {
    console.warn('Admin credentials not configured in environment variables');
    return false;
  }

  try {
    const { data: existingUser } = await supabase.auth.signInWithPassword({
      email: adminEmail,
      password: adminPassword,
    });

    if (existingUser?.user) {
      localStorage.setItem(ADMIN_INITIALIZED_KEY, 'true');
      await supabase.auth.signOut();
      return true;
    }
  } catch (error) {
    console.log('Admin user does not exist, attempting to create...');
  }

  try {
    const { data, error } = await supabase.rpc('create_admin_user', {
      admin_email: adminEmail,
      admin_password: adminPassword,
    });

    if (error) {
      console.error('Error creating admin user:', error);
      return false;
    }

    if (data) {
      console.log('Admin user created successfully');
      localStorage.setItem(ADMIN_INITIALIZED_KEY, 'true');
      return true;
    }

    return false;
  } catch (error) {
    console.error('Failed to initialize admin user:', error);
    return false;
  }
}
