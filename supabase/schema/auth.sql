-- Feature: Auth
-- Tables: auth_users, auth_sessions, auth_providers
-- Relationships:
-- - One auth_user has many auth_sessions
-- - One auth_user can have many auth_provider accounts
-- Notes:
-- - Store passwords as hashes; emails unique; soft delete via deleted_at
-- - For Supabase, you can map/bridge to auth.users if using Supabase Auth; this is app-side auth if you roll your own

BEGIN;

-- Users for app-level auth (if not using Supabase Auth).
CREATE TABLE IF NOT EXISTS public.auth_users (
  id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email            CITEXT NOT NULL UNIQUE,
  email_verified_at TIMESTAMPTZ,
  password_hash    TEXT NOT NULL,
  full_name        TEXT,
  avatar_url       TEXT,
  is_active        BOOLEAN NOT NULL DEFAULT TRUE,
  created_at       TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at       TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  deleted_at       TIMESTAMPTZ
);

CREATE TRIGGER set_timestamp_auth_users
BEFORE UPDATE ON public.auth_users
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- OAuth/provider accounts linked to auth_users
CREATE TABLE IF NOT EXISTS public.auth_providers (
  id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id          UUID NOT NULL REFERENCES public.auth_users(id) ON DELETE CASCADE,
  provider         TEXT NOT NULL,
  provider_user_id TEXT NOT NULL,
  access_token     TEXT,
  refresh_token    TEXT,
  token_expires_at TIMESTAMPTZ,
  created_at       TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at       TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  deleted_at       TIMESTAMPTZ,
  UNIQUE (provider, provider_user_id),
  UNIQUE (provider, user_id)
);

CREATE TRIGGER set_timestamp_auth_providers
BEFORE UPDATE ON public.auth_providers
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- Sessions
CREATE TABLE IF NOT EXISTS public.auth_sessions (
  id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id          UUID NOT NULL REFERENCES public.auth_users(id) ON DELETE CASCADE,
  session_token    TEXT NOT NULL UNIQUE,
  ip_address       INET,
  user_agent       TEXT,
  last_used_at     TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_at       TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at       TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  expires_at       TIMESTAMPTZ NOT NULL,
  revoked_at       TIMESTAMPTZ,
  deleted_at       TIMESTAMPTZ
);

CREATE INDEX IF NOT EXISTS idx_auth_sessions_user_id ON public.auth_sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_auth_sessions_expires_at ON public.auth_sessions(expires_at);

CREATE TRIGGER set_timestamp_auth_sessions
BEFORE UPDATE ON public.auth_sessions
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

COMMIT;
