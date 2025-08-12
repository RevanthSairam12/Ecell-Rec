-- Feature: Analytics (events)
-- Tables: analytics_events
-- Relationships:
-- - analytics_events.user_id -> users.id (nullable for anonymous)

BEGIN;

CREATE TABLE IF NOT EXISTS public.analytics_events (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id      UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  session_id   UUID,
  event_name   TEXT NOT NULL,
  properties   JSONB NOT NULL DEFAULT '{}'::jsonb,
  happened_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_events_user ON public.analytics_events(user_id);
CREATE INDEX IF NOT EXISTS idx_events_name_time ON public.analytics_events(event_name, happened_at DESC);

COMMIT;
