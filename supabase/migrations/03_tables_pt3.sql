CREATE TABLE IF NOT EXISTS public.properties_sent (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  client_id uuid REFERENCES public.clients(id),
  property_name text NOT NULL,
  property_type text,
  address text,
  price numeric,
  url text,
  notes text,
  sent_at timestamptz DEFAULT now(),
  created_by uuid REFERENCES public.users_profile(id),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);
ALTER TABLE public.properties_sent ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Authenticated users can select properties_sent" ON public.properties_sent FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated users can insert properties_sent" ON public.properties_sent FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated users can update properties_sent" ON public.properties_sent FOR UPDATE TO authenticated USING (true);

CREATE TABLE IF NOT EXISTS public.visits (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  client_id uuid REFERENCES public.clients(id),
  property_name text NOT NULL,
  address text,
  scheduled_date timestamptz NOT NULL,
  status text DEFAULT 'agendada',
  result text,
  notes text,
  created_by uuid REFERENCES public.users_profile(id),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);
ALTER TABLE public.visits ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Authenticated users can select visits" ON public.visits FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated users can insert visits" ON public.visits FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated users can update visits" ON public.visits FOR UPDATE TO authenticated USING (true);

CREATE TABLE IF NOT EXISTS public.prospect_lists (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  description text,
  source text,
  created_by uuid REFERENCES public.users_profile(id),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);
ALTER TABLE public.prospect_lists ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Authenticated users can select prospect_lists" ON public.prospect_lists FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated users can insert prospect_lists" ON public.prospect_lists FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated users can update prospect_lists" ON public.prospect_lists FOR UPDATE TO authenticated USING (true);

CREATE TABLE IF NOT EXISTS public.prospect_contacts (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  list_id uuid REFERENCES public.prospect_lists(id),
  name text NOT NULL,
  phone text,
  email text,
  contact_status text DEFAULT 'nao_contatado',
  next_attempt_date timestamptz,
  notes text,
  campaign_id uuid REFERENCES public.campaigns(id),
  converted_client_id uuid REFERENCES public.clients(id),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);
ALTER TABLE public.prospect_contacts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Authenticated users can select prospect_contacts" ON public.prospect_contacts FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated users can insert prospect_contacts" ON public.prospect_contacts FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated users can update prospect_contacts" ON public.prospect_contacts FOR UPDATE TO authenticated USING (true);

CREATE TABLE IF NOT EXISTS public.audit_log (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid REFERENCES auth.users(id),
  action text NOT NULL,
  table_name text NOT NULL,
  record_id uuid,
  old_data jsonb,
  new_data jsonb,
  ip_address text,
  created_at timestamptz DEFAULT now()
);
ALTER TABLE public.audit_log ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Authenticated users can select audit_log" ON public.audit_log FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated users can insert audit_log" ON public.audit_log FOR INSERT TO authenticated WITH CHECK (true);
