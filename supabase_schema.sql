-- Enable UUID extension
create extension if not exists "uuid-ossp";
-- 1. ANALYTICS EVENTS TABLE
create table if not exists analytics_events (
    id uuid default uuid_generate_v4() primary key,
    event text not null,
    -- e.g., 'pageview', 'whatsapp_click', 'quote_request'
    product text,
    -- e.g., 'BRUX 200'
    url text,
    referrer text,
    user_agent text,
    session_id text,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
-- 2. QUOTES (LEADS) TABLE
create table if not exists quotes (
    id uuid default uuid_generate_v4() primary key,
    name text not null,
    company text not null,
    email text not null,
    whatsapp text,
    segment text,
    message text,
    items jsonb,
    -- Stores the cart items as JSON
    status text default 'new' check (status in ('new', 'contacted', 'closed', 'lost')),
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);
-- 3. PROFILES (TEAM MEMBERS) TABLE
-- This table references the internal Supabase Auth 'users' table
create table if not exists profiles (
    id uuid references auth.users on delete cascade primary key,
    email text unique not null,
    role text default 'admin' check (role in ('admin', 'editor', 'viewer')),
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
-- SECURITY POLICIES (RLS)
-- Enable RLS
alter table analytics_events enable row level security;
alter table quotes enable row level security;
alter table profiles enable row level security;
-- Analytics: Public can INSERT (for tracking), Admins can SELECT (view dashboard)
create policy "Public can insert analytics" on analytics_events for
insert with check (true);
create policy "Admins can view analytics" on analytics_events for
select using (auth.role() = 'authenticated');
-- Quotes: Public can INSERT (via API/Edge Functions ideally, but for now allowing client insert for simplicity if using client lib, 
-- OR if using server-side API key (service_role), policies are bypassed. 
-- Since we use /api/send (server-side), RLS is bypassed by service role if configured correctly, 
-- but if we use the anon client in the browser, we need this.)
create policy "Public can insert quotes" on quotes for
insert with check (true);
create policy "Admins can view and update quotes" on quotes using (auth.role() = 'authenticated');
-- Profiles: Users can view their own profile or admins can view all
create policy "Admins can view all profiles" on profiles for
select using (auth.role() = 'authenticated');
-- Trigger to handle updated_at
create or replace function update_updated_at_column() returns trigger as $$ begin new.updated_at = now();
return new;
end;
$$ language plpgsql;
create trigger update_quotes_updated_at before
update on quotes for each row execute procedure update_updated_at_column();