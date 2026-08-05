CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE IF NOT EXISTS public.settings_lookup (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  category text NOT NULL,
  label text NOT NULL,
  value text NOT NULL,
  sort_order integer DEFAULT 0,
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);
ALTER TABLE public.settings_lookup ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Authenticated users can select settings_lookup" ON public.settings_lookup FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated users can insert settings_lookup" ON public.settings_lookup FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated users can update settings_lookup" ON public.settings_lookup FOR UPDATE TO authenticated USING (true);

CREATE TABLE IF NOT EXISTS public.users_profile (
  id uuid REFERENCES auth.users(id) PRIMARY KEY,
  full_name text NOT NULL,
  role text DEFAULT 'corretor',
  avatar_url text,
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);
ALTER TABLE public.users_profile ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Authenticated users can select users_profile" ON public.users_profile FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated users can insert users_profile" ON public.users_profile FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated users can update users_profile" ON public.users_profile FOR UPDATE TO authenticated USING (true);

CREATE TABLE IF NOT EXISTS public.funnel_stages (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  sort_order integer DEFAULT 0,
  color text,
  is_final boolean DEFAULT false,
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);
ALTER TABLE public.funnel_stages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Authenticated users can select funnel_stages" ON public.funnel_stages FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated users can insert funnel_stages" ON public.funnel_stages FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated users can update funnel_stages" ON public.funnel_stages FOR UPDATE TO authenticated USING (true);

CREATE TABLE IF NOT EXISTS public.campaigns (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  channel text,
  origin text,
  start_date date,
  end_date date,
  budget numeric,
  notes text,
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);
ALTER TABLE public.campaigns ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Authenticated users can select campaigns" ON public.campaigns FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated users can insert campaigns" ON public.campaigns FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated users can update campaigns" ON public.campaigns FOR UPDATE TO authenticated USING (true);
