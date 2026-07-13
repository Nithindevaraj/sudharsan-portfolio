-- Supabase Database Schema for Sudarshan Portfolio
-- Run this in the Supabase SQL Editor

-- Contacts table for form submissions
CREATE TABLE contacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  status TEXT DEFAULT 'unread' -- unread, read, replied
);

-- Projects table for portfolio works
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  client TEXT,
  category TEXT,
  thumbnail_url TEXT,
  video_url TEXT,
  featured BOOLEAN DEFAULT FALSE,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Setup Row Level Security (RLS)
-- Contacts: Only allow inserts anonymously (for the contact form)
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow anonymous inserts" ON contacts FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow authenticated read access" ON contacts FOR SELECT USING (auth.role() = 'authenticated');

-- Projects: Allow anyone to read, only authenticated to modify
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow anonymous read access" ON projects FOR SELECT USING (true);
CREATE POLICY "Allow authenticated full access" ON projects FOR ALL USING (auth.role() = 'authenticated');
