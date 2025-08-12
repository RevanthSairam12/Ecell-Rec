-- Feature: Notifications
-- Tables: notifications
-- Relationships:
-- - One user receives many notifications
-- - Notification may reference post/comment (optional foreign linkage for context)

BEGIN;

-- Notification type enum
DO $$ BEGIN
  CREATE TYPE public.notification_type AS ENUM (
    'info', 'warning', 'success', 'message', 'mention', 'like', 'comment'
  );
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

CREATE TABLE IF NOT EXISTS public.notifications (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id       UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  type          public.notification_type NOT NULL,
  title         TEXT,
  body          TEXT,
  is_read       BOOLEAN NOT NULL DEFAULT FALSE,
  -- Optional contextual references
  post_id       UUID REFERENCES public.posts(id) ON DELETE SET NULL,
  comment_id    UUID REFERENCES public.comments(id) ON DELETE SET NULL,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  deleted_at    TIMESTAMPTZ
);

CREATE INDEX IF NOT EXISTS idx_notifications_user ON public.notifications(user_id, is_read);

CREATE TRIGGER set_timestamp_notifications
BEFORE UPDATE ON public.notifications
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

COMMIT;
