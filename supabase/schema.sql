-- Jalankan di Supabase SQL Editor.
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  is_admin boolean not null default false
);
create table if not exists public.properties (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  category text not null default 'Tanah',
  location text not null,
  price numeric not null default 0,
  land_area numeric,
  bedrooms integer,
  bathrooms integer,
  description text,
  images text[] not null default '{}',
  status text not null default 'draft' check (status in ('draft','published')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.profiles enable row level security;
alter table public.properties enable row level security;
create or replace function public.is_admin()
returns boolean language sql stable security definer set search_path=public
as $$ select exists(select 1 from public.profiles where id=auth.uid() and is_admin=true); $$;
create policy "public can read published properties" on public.properties for select using (status='published' or public.is_admin());
create policy "admins can insert properties" on public.properties for insert with check (public.is_admin());
create policy "admins can update properties" on public.properties for update using (public.is_admin()) with check (public.is_admin());
create policy "admins can delete properties" on public.properties for delete using (public.is_admin());
create policy "admins can read own profile" on public.profiles for select using (id=auth.uid());
-- Setelah membuat akun melalui Authentication > Users, jadikan akun tersebut admin:
-- insert into public.profiles (id,is_admin) values ('UUID_USER_DARI_AUTH_USERS', true);
-- Storage: buat bucket bernama property-images di Dashboard Supabase.
-- Untuk tahap awal, upload gambar melalui Supabase Storage dan simpan URL publiknya ke field images.
