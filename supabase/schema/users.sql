-- Feature: Profiles (user profiles & roles)
-- Tables: profiles, roles, user_roles
-- Relationships:
-- - One profile has many posts, comments, notifications
-- - Many-to-many: profiles <-> roles via user_roles
-- Notes:
-- - Designed to work with app-auth (auth_users) or Supabase auth.users via user mapping

BEGIN;

-- Application user profile; can optionally reference auth_users.id or Supabase auth.users.id
CREATE TABLE IF NOT EXISTS public.profiles (
  id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  auth_user_id     UUID UNIQUE, -- nullable; if using app-level auth, references public.auth_users(id)
  supabase_uid     UUID UNIQUE, -- nullable; if using Supabase Auth, references auth.users.id
  username         CITEXT UNIQUE,
  display_name     TEXT,
  bio              TEXT,
  avatar_url       TEXT,
  is_verified      BOOLEAN NOT NULL DEFAULT FALSE,
  created_at       TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at       TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  deleted_at       TIMESTAMPTZ,
  CONSTRAINT profiles_auth_user_fk FOREIGN KEY (auth_user_id) REFERENCES public.auth_users(id) ON DELETE SET NULL,
  CONSTRAINT profiles_supabase_uid_fk FOREIGN KEY (supabase_uid) REFERENCES auth.users(id) ON DELETE SET NULL
);

CREATE TRIGGER set_timestamp_profiles
BEFORE UPDATE ON public.profiles
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- Roles (RBAC)
CREATE TABLE IF NOT EXISTS public.roles (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code        TEXT NOT NULL UNIQUE,
  name        TEXT NOT NULL,
  description TEXT,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  deleted_at  TIMESTAMPTZ
);

CREATE TRIGGER set_timestamp_roles
BEFORE UPDATE ON public.roles
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- Join table: user_roles
CREATE TABLE IF NOT EXISTS public.user_roles (
  user_id    UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  role_id    UUID NOT NULL REFERENCES public.roles(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (user_id, role_id)
);

CREATE INDEX IF NOT EXISTS idx_user_roles_role_id ON public.user_roles(role_id);

COMMIT;
