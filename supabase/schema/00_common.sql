-- Common SQL for Supabase/Postgres
-- Purpose: enable required extensions and define shared helpers
-- Applies first before other feature files

BEGIN;

-- Extensions
CREATE EXTENSION IF NOT EXISTS "pgcrypto";         -- gen_random_uuid()
CREATE EXTENSION IF NOT EXISTS "citext";            -- case-insensitive text (usernames, tags)

-- Helper: auto-update updated_at timestamp
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at := NOW();
  RETURN NEW;
END;
$$;

COMMIT;
