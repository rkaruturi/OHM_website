const ADMIN_INITIALIZED_KEY = 'admin_user_initialized';

export async function initializeAdminUser(): Promise<boolean> {
  if (typeof window === 'undefined') {
    return false;
  }

  const isInitialized = localStorage.getItem(ADMIN_INITIALIZED_KEY);
  if (isInitialized === 'true') {
    return true;
  }

  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  if (!supabaseUrl) {
    console.warn('Supabase URL not configured');
    return false;
  }

  try {
    const response = await fetch(`${supabaseUrl}/functions/v1/init-admin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await response.json();

    if (result.success) {
      localStorage.setItem(ADMIN_INITIALIZED_KEY, 'true');
      return true;
    }

    return false;
  } catch (error) {
    console.error('Failed to initialize admin user:', error);
    return false;
  }
}
