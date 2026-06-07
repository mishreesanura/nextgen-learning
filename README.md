# Next-Gen Learning Dashboard

A dark-mode student dashboard built for the Frontend Intern Challenge. It uses Next.js App Router, Server Components, Supabase, Tailwind CSS, Framer Motion, and Lucide React.

![Next-Gen Learning Dashboard Preview](https://res.cloudinary.com/dptgeuamd/image/upload/v1780850961/ab0132ec-e8b6-448f-a77a-99045ef8165c.png)


## Architecture

- `app/page.tsx` is a Server Component route that fetches courses before rendering the dashboard.
- `components/dashboard/dashboard-skeleton.tsx` mirrors the final bento geometry as a reusable loading state. Browser QA showed this environment can keep streamed App Router fallbacks visible after final RSC content arrives, so the production route avoids a broken route-level streaming fallback.
- `lib/courses.ts` fetches all live course rows from Supabase on the server only, with a timeout so slow network responses become a graceful error state.
- `components/dashboard/bento-dashboard.tsx` is the client boundary for Framer Motion interactions: staggered tile entry, spring hover states, an interactive activity graph, sidebar `layoutId`, mobile dock `layoutId`, and transform-based progress bars.
- Course icons are resolved through an explicit Lucide allowlist so `icon_name` from the database cannot import arbitrary components.
- Missing or failing Supabase configuration shows a graceful error tile instead of mock course data.
- When Supabase returns courses, the lower bento region becomes a scroll-safe active course list, two featured course tiles, and a learner-facing weekly momentum summary.

## Supabase Setup

Create a Supabase project and run this SQL in the SQL editor:

```sql
create table if not exists public.courses (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  progress integer not null check (progress >= 0 and progress <= 100),
  icon_name text not null,
  created_at timestamp with time zone not null default now()
);

alter table public.courses enable row level security;

drop policy if exists "Courses are readable by everyone" on public.courses;
create policy "Courses are readable by everyone"
on public.courses
for select
using (true);

insert into public.courses (title, progress, icon_name)
values
  ('Advanced React Patterns', 75, 'code'),
  ('Supabase Data Architecture', 62, 'database'),
  ('AI Product Thinking', 88, 'brain'),
  ('Design Systems Lab', 54, 'palette');
```

The same SQL is available in `supabase/courses.sql`.

## Environment

Copy `.env.example` to `.env.local` and add your Supabase values:

```bash
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

Do not commit `.env.local`.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validation

```bash
npm run lint
npm run typecheck
npm run build
```

The dashboard should be checked at desktop, tablet, and mobile widths. Hover and progress animations use transform/opacity to avoid layout shifts.

