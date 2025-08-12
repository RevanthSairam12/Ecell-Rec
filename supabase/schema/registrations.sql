-- Feature: Registrations & Submissions
-- Tables: registrations, submissions
-- Relationships:
-- - registrations.user_id -> users.id
-- - submissions.user_id -> users.id, submissions.registration_id -> registrations.id

BEGIN;

CREATE TABLE IF NOT EXISTS public.registrations (
  id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id             UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  registration_date   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  status              public.user_status NOT NULL DEFAULT 'pending',
  submission_status   public.registration_submission_status NOT NULL DEFAULT 'none',
  created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  deleted_at          TIMESTAMPTZ,
  UNIQUE (user_id)
);

CREATE INDEX IF NOT EXISTS idx_registrations_user ON public.registrations(user_id);

CREATE TRIGGER set_timestamp_registrations
BEFORE UPDATE ON public.registrations
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE TABLE IF NOT EXISTS public.submissions (
  id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id             UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  registration_id     UUID NOT NULL REFERENCES public.registrations(id) ON DELETE CASCADE,
  idea_title          TEXT NOT NULL,
  team_name           TEXT NOT NULL,
  team_members        JSONB NOT NULL DEFAULT '[]'::jsonb,
  problem_statement   TEXT NOT NULL,
  proposed_solution   TEXT NOT NULL,
  one_liner_pitch     TEXT NOT NULL,
  detailed_explanation TEXT NOT NULL,
  startup_stage       TEXT NOT NULL,
  phone_number        TEXT NOT NULL,
  pitch_deck_url      TEXT,
  github_link         TEXT,
  drive_link          TEXT,
  figma_link          TEXT,
  consent             BOOLEAN NOT NULL DEFAULT FALSE,
  submitted_at        TIMESTAMPTZ,
  status              public.submission_status NOT NULL DEFAULT 'submitted',
  created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  deleted_at          TIMESTAMPTZ,
  UNIQUE (user_id),
  UNIQUE (registration_id)
);

CREATE INDEX IF NOT EXISTS idx_submissions_user ON public.submissions(user_id);
CREATE INDEX IF NOT EXISTS idx_submissions_registration ON public.submissions(registration_id);

CREATE TRIGGER set_timestamp_submissions
BEFORE UPDATE ON public.submissions
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

COMMIT;
