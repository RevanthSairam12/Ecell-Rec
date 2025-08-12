-- Feature: Admin (audit logs, feature flags)
-- Tables: audit_logs, feature_flags
-- Relationships:
-- - audit_logs.user_id -> users.id


BEGIN;

-- Minimal profiles table to satisfy foreign key constraint
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY,
  -- Add other columns as needed
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.feature_flags (
  key          TEXT PRIMARY KEY,
  description  TEXT,
  enabled      BOOLEAN NOT NULL DEFAULT FALSE,
  rollout_pct  INT CHECK (rollout_pct BETWEEN 0 AND 100) DEFAULT 100,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  deleted_at   TIMESTAMPTZ
);

CREATE TRIGGER set_timestamp_feature_flags
BEFORE UPDATE ON public.feature_flags
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- Audit logs
CREATE TABLE IF NOT EXISTS public.audit_logs (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id      UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  action       TEXT NOT NULL,
  entity_type  TEXT,
  entity_id    UUID,
  metadata     JSONB,
  ip_address   INET,
  user_agent   TEXT,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_audit_user ON public.audit_logs(user_id);
CREATE INDEX IF NOT EXISTS idx_audit_entity ON public.audit_logs(entity_type, entity_id);

COMMIT;
