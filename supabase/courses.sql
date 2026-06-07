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
