-- ==============================================================================
-- Bench Notes - Complete PostgreSQL Database Schema for Supabase
-- ==============================================================================

-- 1. User-Isolated Highlights & Annotations
create table if not exists public.user_highlights (
  id text primary key,
  user_email text not null,
  doc_id text not null,
  doc_title text,
  block_index integer,
  block_id text,
  text text not null,
  color text not null default 'yellow',
  note text,
  tags text[] default '{}',
  created_at bigint not null,
  updated_at bigint not null
);

create index if not exists idx_user_highlights_email on public.user_highlights(user_email);
create index if not exists idx_user_highlights_email_doc on public.user_highlights(user_email, doc_id);

alter table public.user_highlights enable row level security;

create policy "Allow all access to user_highlights"
  on public.user_highlights
  for all
  using (true)
  with check (true);


-- 2. Persistent Access Control & Student Verification Queue
create table if not exists public.access_requests (
  id text primary key,
  email text not null unique,
  name text not null,
  avatar text,
  status text not null default 'pending', -- 'pending' | 'approved' | 'rejected'
  requested_at bigint not null,
  approved_at bigint,
  rejected_at bigint,
  note text
);

create index if not exists idx_access_requests_email on public.access_requests(email);
create index if not exists idx_access_requests_status on public.access_requests(status);

alter table public.access_requests enable row level security;

create policy "Allow all access to access_requests"
  on public.access_requests
  for all
  using (true)
  with check (true);


-- 3. Pre-Approved Whitelist Entries
create table if not exists public.access_whitelist (
  entry text primary key,
  added_at bigint not null,
  note text
);

alter table public.access_whitelist enable row level security;

create policy "Allow all access to access_whitelist"
  on public.access_whitelist
  for all
  using (true)
  with check (true);

-- Insert initial master administrator and approved students
insert into public.access_whitelist (entry, added_at, note)
values 
  ('varmint-aqua-early@duck.com', 1790608179763, 'Master Administrator'),
  ('sumitaditya588@gmail.com', 1790776000000, 'Pre-Approved Student')
on conflict (entry) do nothing;

insert into public.access_requests (id, email, name, status, requested_at, approved_at, note)
values 
  ('req_admin_master', 'varmint-aqua-early@duck.com', 'Administrator', 'approved', 1790608179763, 1790608179763, 'Master Administrator'),
  ('req_sumitaditya588', 'sumitaditya588@gmail.com', 'Sumit Aditya', 'approved', 1790776000000, 1790776000000, 'Pre-Approved Cohort Student')
on conflict (email) do update set status = 'approved', approved_at = excluded.approved_at;
