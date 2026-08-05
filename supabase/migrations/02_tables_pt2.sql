CREATE TABLE IF NOT EXISTS public.clients (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name text NOT NULL,
  phone text,
  phone_normalized text GENERATED ALWAYS AS (regexp_replace(phone, '\D', '', 'g')) STORED,
  email text,
  email_normalized text GENERATED ALWAYS AS (lower(trim(email))) STORED,
  origin text,
  campaign_id uuid REFERENCES public.campaigns(id),
  profile_type text,
  property_type text,
  price_range text,
  desired_neighborhood text,
  status text DEFAULT 'novo',
  priority text DEFAULT 'media',
  next_action text,
  next_contact_date timestamptz,
  funnel_stage_id uuid REFERENCES public.funnel_stages(id),
  loss_reason text,
  notes text,
  assigned_to uuid REFERENCES public.users_profile(id),
  created_by uuid REFERENCES public.users_profile(id),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);
CREATE UNIQUE INDEX IF NOT EXISTS clients_phone_normalized_idx ON public.clients(phone_normalized) WHERE phone_normalized IS NOT NULL AND phone_normalized != '';
CREATE UNIQUE INDEX IF NOT EXISTS clients_email_normalized_idx ON public.clients(email_normalized) WHERE email_normalized IS NOT NULL AND email_normalized != '';
ALTER TABLE public.clients ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Authenticated users can select clients" ON public.clients FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated users can insert clients" ON public.clients FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated users can update clients" ON public.clients FOR UPDATE TO authenticated USING (true);

CREATE TABLE IF NOT EXISTS public.client_activities (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  client_id uuid REFERENCES public.clients(id),
  activity_type text NOT NULL,
  title text NOT NULL,
  description text,
  scheduled_at timestamptz,
  completed_at timestamptz,
  result text,
  next_action text,
  next_contact_date timestamptz,
  created_by uuid REFERENCES public.users_profile(id),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);
ALTER TABLE public.client_activities ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Authenticated users can select client_activities" ON public.client_activities FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated users can insert client_activities" ON public.client_activities FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated users can update client_activities" ON public.client_activities FOR UPDATE TO authenticated USING (true);
