-- BRUX - FULL DATABASE SCHEMA & AUTOMATION
-- ==========================================
-- Enable UUID extension
create extension if not exists "uuid-ossp";
-- 1. ANALYTICS EVENTS TABLE
create table if not exists public.analytics_events (
    id uuid default uuid_generate_v4() primary key,
    event text not null,
    product text,
    url text,
    referrer text,
    user_agent text,
    session_id text,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
-- 2. QUOTES (LEADS) TABLE
create table if not exists public.quotes (
    id uuid default uuid_generate_v4() primary key,
    name text not null,
    company text not null,
    email text not null,
    whatsapp text,
    segment text,
    message text,
    items jsonb,
    status text default 'new' check (status in ('new', 'contacted', 'closed', 'lost')),
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);
-- 3. PROFILES (TEAM MEMBERS) TABLE
create table if not exists public.profiles (
    id uuid references auth.users on delete cascade primary key,
    email text unique not null,
    role text default 'admin' check (role in ('master', 'admin', 'editor', 'viewer')),
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
-- ==========================================
-- SECURITY POLICIES (RLS)
-- ==========================================
alter table public.analytics_events enable row level security;
alter table public.quotes enable row level security;
alter table public.profiles enable row level security;
-- Analytics Policies
create policy "Public can insert analytics" on public.analytics_events for
insert with check (true);
create policy "Admins can view analytics" on public.analytics_events for
select using (auth.role() = 'authenticated');
-- Quotes Policies
create policy "Public can insert quotes" on public.quotes for
insert with check (true);
create policy "Admins can view and update quotes" on public.quotes using (auth.role() = 'authenticated');
-- Profiles Policies
create policy "Users can view their own profile" on public.profiles for
select using (auth.uid() = id);
create policy "Admins can view all profiles" on public.profiles for
select using (auth.role() = 'authenticated');
-- ==========================================
-- AUTOMATION: TRIGGERS & FUNCTIONS
-- ==========================================
-- Function to handle updated_at
create or replace function public.update_updated_at_column() returns trigger as $$ begin new.updated_at = now();
return new;
end;
$$ language plpgsql;
-- Trigger for Quotes updated_at
drop trigger if exists update_quotes_updated_at on public.quotes;
create trigger update_quotes_updated_at before
update on public.quotes for each row execute procedure public.update_updated_at_column();
-- Function to handle new user signup (Auto-create Profile)
create or replace function public.handle_new_user() returns trigger as $$ begin
insert into public.profiles (id, email, role)
values (new.id, new.email, 'admin');
return new;
end;
$$ language plpgsql security definer;
-- Trigger for new user signup
-- This trigger MUST stay in the auth schema if applied directly to auth.users, 
-- but we declare it for the public schema here.
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after
insert on auth.users for each row execute procedure public.handle_new_user();