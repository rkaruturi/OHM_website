# Deployment Guide

## Netlify Deployment

This project is configured for deployment on Netlify with proper handling of Supabase credentials.

### Environment Variables

Configure the following environment variables in your Netlify dashboard (Site settings → Environment variables):

**Required for Build:**
- `VITE_SUPABASE_URL` - Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY` - Your Supabase anonymous/public key

**Optional for Admin Initialization (Supabase Functions):**
- `ADMIN_EMAIL` - Initial admin user email
- `ADMIN_PASSWORD` - Initial admin user password

### About Supabase Public Credentials

**Important:** The Supabase anon key and URL being visible in the client-side JavaScript bundle is **intentional and secure**. This is how Supabase applications are designed to work.

#### Why This Is Safe:

1. **Designed to be Public**: The Supabase anon key is specifically designed to be used in browser code and is meant to be public-facing.

2. **Row Level Security (RLS)**: Your actual data security is enforced through Row Level Security policies in your Supabase database. These policies control what data users can access, regardless of having the anon key.

3. **Limited Permissions**: The anon key has restricted permissions and can only perform operations allowed by your RLS policies.

4. **Industry Standard**: This is the standard approach for all Supabase applications and other similar Backend-as-a-Service platforms.

### Netlify Secrets Scanning Configuration

The `netlify.toml` file includes configuration to handle Netlify's secrets scanning:

```toml
SECRETS_SCAN_OMIT_KEYS = "VITE_SUPABASE_ANON_KEY,VITE_SUPABASE_URL"
SECRETS_SCAN_OMIT_PATHS = "supabase/functions/**"
```

This tells Netlify that:
- The Supabase anon key and URL are intentionally public
- The supabase/functions directory contains server-side code that won't be deployed to the client

### Build Process

The build process will:
1. Bundle your React application using Vite
2. Include the Supabase URL and anon key in the client bundle (this is correct behavior)
3. Output static files to the `dist` directory
4. Deploy the static files to Netlify's CDN

### Security Best Practices

✅ **DO:**
- Keep your database secured with Row Level Security policies
- Use the anon key for client-side operations
- Store sensitive operations in Supabase Edge Functions
- Use Supabase's built-in authentication

❌ **DON'T:**
- Don't expose your service role key in client code
- Don't hardcode sensitive user data or API keys in the frontend
- Don't disable RLS policies without careful consideration

### Testing Your Deployment

After deployment:
1. Verify the site loads correctly
2. Test authentication flows
3. Confirm RLS policies are working as expected
4. Check that admin functions work properly

### Troubleshooting

**Build fails with secrets scanning error:**
- Ensure `netlify.toml` is present in your repository root
- Verify the environment variables are correctly configured in Netlify
- Check that you're using the latest configuration

**Authentication not working:**
- Verify environment variables are set correctly
- Check that your Supabase project is active
- Confirm RLS policies allow the intended operations

## Local Development

For local development, create a `.env` file in the project root:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

Run the development server:
```bash
npm install
npm run dev
```

Build for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```
