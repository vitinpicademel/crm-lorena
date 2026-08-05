CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

DROP TRIGGER IF EXISTS update_settings_lookup_updated_at ON public.settings_lookup;
CREATE TRIGGER update_settings_lookup_updated_at BEFORE UPDATE ON public.settings_lookup FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_users_profile_updated_at ON public.users_profile;
CREATE TRIGGER update_users_profile_updated_at BEFORE UPDATE ON public.users_profile FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_funnel_stages_updated_at ON public.funnel_stages;
CREATE TRIGGER update_funnel_stages_updated_at BEFORE UPDATE ON public.funnel_stages FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_campaigns_updated_at ON public.campaigns;
CREATE TRIGGER update_campaigns_updated_at BEFORE UPDATE ON public.campaigns FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_clients_updated_at ON public.clients;
CREATE TRIGGER update_clients_updated_at BEFORE UPDATE ON public.clients FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_client_activities_updated_at ON public.client_activities;
CREATE TRIGGER update_client_activities_updated_at BEFORE UPDATE ON public.client_activities FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_properties_sent_updated_at ON public.properties_sent;
CREATE TRIGGER update_properties_sent_updated_at BEFORE UPDATE ON public.properties_sent FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_visits_updated_at ON public.visits;
CREATE TRIGGER update_visits_updated_at BEFORE UPDATE ON public.visits FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_prospect_lists_updated_at ON public.prospect_lists;
CREATE TRIGGER update_prospect_lists_updated_at BEFORE UPDATE ON public.prospect_lists FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_prospect_contacts_updated_at ON public.prospect_contacts;
CREATE TRIGGER update_prospect_contacts_updated_at BEFORE UPDATE ON public.prospect_contacts FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
