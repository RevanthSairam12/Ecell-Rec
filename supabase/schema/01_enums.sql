-- Shared Enums
-- Define enums reused across modules

BEGIN;

DO $$ BEGIN
  CREATE TYPE public.user_status AS ENUM ('active', 'pending', 'inactive');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  CREATE TYPE public.registration_submission_status AS ENUM ('none', 'draft', 'submitted');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  CREATE TYPE public.submission_status AS ENUM ('submitted', 'under_review', 'approved', 'rejected');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  CREATE TYPE public.student_role AS ENUM ('leader', 'member');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  CREATE TYPE public.admin_role AS ENUM ('admin', 'super_admin');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

COMMIT;
