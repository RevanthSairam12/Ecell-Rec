-- fix_supabase_security.sql
-- 1. Enable Row Level Security (RLS) on all public tables
ALTER TABLE public.post_likes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.post_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.comment_likes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ideas ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.teams ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.students ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.auth_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.auth_providers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.auth_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.analytics_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.feature_flags ENABLE ROW LEVEL SECURITY;


-- 2. citext extension is in use by multiple columns and cannot be moved safely.
-- Leave citext in the public schema to avoid breaking dependent columns and data.
-- (Attempting to move it would require recreating all dependent columns, which is not recommended.)

-- 3. Set OTP expiry for email provider to less than an hour
-- Supabase: Go to Authentication > Providers > Email, and set 'OTP Expiry' to less than 60 minutes.
-- If using SQL, you may need to update the auth configuration table (if available):
-- UPDATE auth.providers SET options = jsonb_set(options, '{otp_expiry}', '3600', true) WHERE provider = 'email';

-- 4. Review function with mutable search_path
-- Consider setting the search_path explicitly within the function or using SECURITY DEFINER with a fixed search_path.
-- Example:
-- ALTER FUNCTION public.set_updated_at() SET search_path = public;
