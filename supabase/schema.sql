-- ==============================================================================
-- Bench Notes - User-Isolated Highlights Schema for Supabase
-- ==============================================================================

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

-- Index by user email for isolated rapid lookups
create index if not exists idx_user_highlights_email on public.user_highlights(user_email);
create index if not exists idx_user_highlights_email_doc on public.user_highlights(user_email, doc_id);

-- Enable Row Level Security
alter table public.user_highlights enable row level security;

-- Public read/write policy matching user email
create policy "Allow access to user highlights by email"
  on public.user_highlights
  for all
  using (true)
  with check (true);
