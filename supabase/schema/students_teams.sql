-- Feature: Student Dashboard (students, teams, team_members, ideas)
-- Tables: students, teams, team_members, ideas
-- Relationships:
-- - students may belong to a team (students.team_id -> teams.id)
-- - teams.leader_id -> students.id
-- - team_members.team_id -> teams.id, team_members.student_id -> students.id
-- - ideas.team_id -> teams.id

BEGIN;

-- Students
CREATE TABLE IF NOT EXISTS public.students (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name         TEXT NOT NULL,
  roll_number  TEXT NOT NULL UNIQUE,
  email        CITEXT NOT NULL UNIQUE,
  role         public.student_role NOT NULL DEFAULT 'member',
  team_id      UUID, -- FK added after teams table is created
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_students_team ON public.students(team_id);

-- Ensure idempotent trigger creation (avoid 42710 duplicate trigger errors on re-run)
DROP TRIGGER IF EXISTS set_timestamp_students ON public.students;
CREATE TRIGGER set_timestamp_students
BEFORE UPDATE ON public.students
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- Teams
CREATE TABLE IF NOT EXISTS public.teams (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  leader_id    UUID NOT NULL REFERENCES public.students(id) ON DELETE RESTRICT,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_teams_leader ON public.teams(leader_id);

DROP TRIGGER IF EXISTS set_timestamp_teams ON public.teams;
CREATE TRIGGER set_timestamp_teams
BEFORE UPDATE ON public.teams
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- Team members
CREATE TABLE IF NOT EXISTS public.team_members (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  team_id      UUID NOT NULL REFERENCES public.teams(id) ON DELETE CASCADE,
  student_id   UUID NOT NULL REFERENCES public.students(id) ON DELETE CASCADE,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (team_id, student_id)
);

CREATE INDEX IF NOT EXISTS idx_team_members_team ON public.team_members(team_id);
CREATE INDEX IF NOT EXISTS idx_team_members_student ON public.team_members(student_id);

-- Ideas
CREATE TABLE IF NOT EXISTS public.ideas (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  team_id      UUID NOT NULL REFERENCES public.teams(id) ON DELETE CASCADE,
  title        TEXT NOT NULL,
  description  TEXT NOT NULL,
  status       public.submission_status NOT NULL DEFAULT 'submitted',
  feedback     TEXT,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_ideas_team ON public.ideas(team_id);

DROP TRIGGER IF EXISTS set_timestamp_ideas ON public.ideas;
CREATE TRIGGER set_timestamp_ideas
BEFORE UPDATE ON public.ideas
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
-- Add FK for students.team_id now that teams table exists (idempotent)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint
    WHERE conname = 'students_team_fk'
      AND conrelid = 'public.students'::regclass
  ) THEN
    ALTER TABLE public.students
      ADD CONSTRAINT students_team_fk FOREIGN KEY (team_id) REFERENCES public.teams(id) ON DELETE SET NULL;
  END IF;
END$$;

-- Now that teams exists, update students.team_id FK is valid (already declared as forward reference)

COMMIT;
-- ---------------------------------------------------------------------------
-- Sync: Ensure admin dashboard (which reads users + registrations) reflects
--       student signups. When a row is inserted into public.students we
--       create (if missing) a corresponding public.users row and a
--       public.registrations row so existing application queries that join
--       registrations -> users start returning the new student immediately.
--       (Only INSERT is handled; extend to UPDATE if needed.)
-- ---------------------------------------------------------------------------

-- Function to sync a student into users & registrations
CREATE OR REPLACE FUNCTION public.sync_student_to_user()
RETURNS trigger AS $$
DECLARE
  v_user_id UUID;
BEGIN
  -- Try to find existing user by email or roll_number
  SELECT id INTO v_user_id
  FROM public.users
  WHERE email = NEW.email OR roll_number = NEW.roll_number
  LIMIT 1;

  IF v_user_id IS NULL THEN
    -- Insert minimal user record using student data. Provide placeholder values
    -- for required non-null columns if actual values are not tracked on students.
    INSERT INTO public.users (
      email, full_name, roll_number, branch, year, graduation_year, phone_number, status
    ) VALUES (
      NEW.email,
      NEW.name,
      NEW.roll_number,
      'NA',               -- branch placeholder
      'NA',               -- year placeholder
      to_char(NOW(), 'YYYY'), -- graduation_year placeholder (current year)
      'NA',               -- phone placeholder
      'active'
    )
    RETURNING id INTO v_user_id;
  END IF;

  -- Ensure a registration exists for this user so admin dashboard picks it up
  INSERT INTO public.registrations (user_id, status)
  VALUES (v_user_id, 'active')
  ON CONFLICT (user_id) DO NOTHING;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Drop existing trigger to avoid duplicates, then recreate
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM pg_trigger WHERE tgname = 'trg_sync_student_to_user'
      AND tgrelid = 'public.students'::regclass
  ) THEN
    EXECUTE 'DROP TRIGGER trg_sync_student_to_user ON public.students';
  END IF;
END$$;

CREATE TRIGGER trg_sync_student_to_user
AFTER INSERT ON public.students
FOR EACH ROW EXECUTE FUNCTION public.sync_student_to_user();

