-- Feature: Events (calendar)
-- Tables: events
-- Relationships:
-- - events.created_by -> users.id (optional)


BEGIN;

-- Minimal users table to satisfy foreign key constraint
CREATE TABLE IF NOT EXISTS public.users (
  id UUID PRIMARY KEY,
  -- Add other columns as needed
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.events (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title          TEXT NOT NULL,
  description    TEXT,
  date           DATE NOT NULL,
  time           TEXT,
  location       TEXT,
  attendees      TEXT[] NOT NULL DEFAULT '{}',
  is_holiday     BOOLEAN NOT NULL DEFAULT FALSE,
  is_public_holiday BOOLEAN NOT NULL DEFAULT FALSE,
  color          TEXT,
  created_by     UUID REFERENCES public.users(id) ON DELETE SET NULL,
  created_at     TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at     TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  deleted_at     TIMESTAMPTZ
);

CREATE INDEX IF NOT EXISTS idx_events_date ON public.events(date);

CREATE TRIGGER set_timestamp_events
BEFORE UPDATE ON public.events
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

COMMIT;
