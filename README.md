# Sudarshan Portfolio Website

A premium, cinematic portfolio website for Sudarshan, a professional video editor specializing in corporate infrastructure projects.

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (Luxury Dark Theme)
- **Animations**: GSAP, Framer Motion, Lenis (Smooth Scroll)
- **3D**: Three.js, React Three Fiber
- **Backend/DB**: Supabase
- **Forms**: React Hook Form, Zod

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Environment Variables**:
   Create a `.env.local` file with the following:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SITE_URL=http://localhost:3000
   ```

3. **Database Setup**:
   Run the SQL commands found in `supabase_schema.sql` in your Supabase SQL Editor to create the necessary tables and RLS policies.

4. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Adding Media
- **Videos**: Place `.mp4` files in `public/videos/`
- **Images**: Place `.jpg/.png/.webp` files in `public/images/`
- **3D Models**: Place `.glb` files in `public/models/`

## Deployment
This project is configured for seamless deployment on Vercel. 
- Push your code to GitHub
- Import the project into Vercel
- Add the environment variables
- The `vercel.json` file handles caching headers automatically.
## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
