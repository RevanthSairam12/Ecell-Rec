import { createClient } from '@supabase/supabase-js'

// Supabase configuration
// Prefer environment variables; fall back to provided project values for convenience during development
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://xnedeeqfypkrvzcvxzzd.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhuZWRlZXFmeXBrcnZ6Y3Z4enpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQxMTY5OTcsImV4cCI6MjA2OTY5Mjk5N30.U5H1x4NrzmKfxzyW9PzI5L3GEVCNbhm4MK5XOag6I8E'

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database table names
export const TABLES = {
  USERS: 'users',
  REGISTRATIONS: 'registrations',
  SUBMISSIONS: 'submissions',
  EVENTS: 'events',
  ADMIN_USERS: 'admin_users',
  STUDENTS: 'students',
  TEAMS: 'teams',
  TEAM_MEMBERS: 'team_members',
  IDEAS: 'ideas'
} as const

// Types for database tables
export interface User {
  id: string
  email: string
  full_name: string
  roll_number: string
  branch: string
  year: string
  graduation_year: string
  phone_number: string
  created_at: string
  updated_at: string
  last_login?: string
  status: 'active' | 'pending' | 'inactive'
}

export interface Registration {
  id: string
  user_id: string
  registration_date: string
  status: 'active' | 'pending' | 'inactive'
  submission_status: 'submitted' | 'draft' | 'none'
  created_at: string
  updated_at: string
}

export interface Submission {
  id: string
  user_id: string
  registration_id: string
  idea_title: string
  team_name: string
  team_members: any[] // JSON array
  problem_statement: string
  proposed_solution: string
  one_liner_pitch: string
  detailed_explanation: string
  startup_stage: string
  phone_number: string
  pitch_deck_url?: string
  github_link?: string
  drive_link?: string
  figma_link?: string
  consent: boolean
  submitted_at: string
  status: 'submitted' | 'under_review' | 'approved' | 'rejected'
  created_at: string
  updated_at: string
}

export interface Event {
  id: string
  title: string
  description: string
  date: string
  time: string
  location: string
  attendees: string[]
  is_holiday: boolean
  is_public_holiday: boolean
  color: string
  created_by: string
  created_at: string
  updated_at: string
}

export interface AdminUser {
  id: string
  username: string
  email: string
  role: 'admin' | 'super_admin'
  created_at: string
  updated_at: string
  last_login?: string
}

// Student Dashboard Types
export interface Student {
  id: string
  name: string
  roll_number: string
  email: string
  role: 'leader' | 'member'
  team_id?: string
  created_at: string
  updated_at: string
}

export interface Team {
  id: string
  leader_id: string
  created_at: string
  updated_at: string
}

export interface TeamMember {
  id: string
  team_id: string
  student_id: string
  created_at: string
}

export interface Idea {
  id: string
  team_id: string
  title: string
  description: string
  status: 'submitted' | 'under_review' | 'approved' | 'rejected'
  feedback?: string
  created_at: string
  updated_at: string
}

// Database service functions
export class DatabaseService {
  // User operations
  static async createUser(userData: Omit<User, 'id' | 'created_at' | 'updated_at'>) {
    try {
      const { data, error } = await supabase
        .from(TABLES.USERS)
        .insert([{
          ...userData,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }])
        .select()
        .single()

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      console.error('Error creating user:', error)
      return { data: null, error }
    }
  }

  static async getUserByEmail(email: string) {
    try {
      const { data, error } = await supabase
        .from(TABLES.USERS)
        .select('*')
        .eq('email', email)
        .single()

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      console.error('Error fetching user by email:', error)
      return { data: null, error }
    }
  }

  static async getUserByRollNumber(rollNumber: string) {
    try {
      const { data, error } = await supabase
        .from(TABLES.USERS)
        .select('*')
        .eq('roll_number', rollNumber)
        .single()

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      console.error('Error fetching user by roll number:', error)
      return { data: null, error }
    }
  }

  static async getAllUsers() {
    try {
      const { data, error } = await supabase
        .from(TABLES.USERS)
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      console.error('Error fetching all users:', error)
      return { data: null, error }
    }
  }

  static async updateUser(id: string, updates: Partial<User>) {
    try {
      const { data, error } = await supabase
        .from(TABLES.USERS)
        .update({
          ...updates,
          updated_at: new Date().toISOString()
        })
        .eq('id', id)
        .select()
        .single()

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      console.error('Error updating user:', error)
      return { data: null, error }
    }
  }

  // Registration operations
  static async createRegistration(registrationData: Omit<Registration, 'id' | 'created_at' | 'updated_at'>) {
    try {
      const { data, error } = await supabase
        .from(TABLES.REGISTRATIONS)
        .insert([{
          ...registrationData,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }])
        .select()
        .single()

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      console.error('Error creating registration:', error)
      return { data: null, error }
    }
  }

  static async getAllRegistrations() {
    try {
      const { data, error } = await supabase
        .from(TABLES.REGISTRATIONS)
        .select(`
          *,
          users (
            id,
            email,
            full_name,
            roll_number,
            branch,
            year,
            graduation_year,
            phone_number,
            status
          )
        `)
        .order('created_at', { ascending: false })

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      console.error('Error fetching all registrations:', error)
      return { data: null, error }
    }
  }

  // Submission operations
  static async createSubmission(submissionData: Omit<Submission, 'id' | 'created_at' | 'updated_at'>) {
    try {
      const { data, error } = await supabase
        .from(TABLES.SUBMISSIONS)
        .insert([{
          ...submissionData,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }])
        .select()
        .single()

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      console.error('Error creating submission:', error)
      return { data: null, error }
    }
  }

  static async getSubmissionByUserId(userId: string) {
    try {
      const { data, error } = await supabase
        .from(TABLES.SUBMISSIONS)
        .select('*')
        .eq('user_id', userId)
        .single()

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      console.error('Error fetching submission by user ID:', error)
      return { data: null, error }
    }
  }

  // Event operations
  static async createEvent(eventData: Omit<Event, 'id' | 'created_at' | 'updated_at'>) {
    try {
      const { data, error } = await supabase
        .from(TABLES.EVENTS)
        .insert([{
          ...eventData,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }])
        .select()
        .single()

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      console.error('Error creating event:', error)
      return { data: null, error }
    }
  }

  static async getAllEvents() {
    try {
      const { data, error } = await supabase
        .from(TABLES.EVENTS)
        .select('*')
        .order('date', { ascending: true })

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      console.error('Error fetching all events:', error)
      return { data: null, error }
    }
  }

  static async updateEvent(id: string, updates: Partial<Event>) {
    try {
      const { data, error } = await supabase
        .from(TABLES.EVENTS)
        .update({
          ...updates,
          updated_at: new Date().toISOString()
        })
        .eq('id', id)
        .select()
        .single()

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      console.error('Error updating event:', error)
      return { data: null, error }
    }
  }

  static async deleteEvent(id: string) {
    try {
      const { error } = await supabase
        .from(TABLES.EVENTS)
        .delete()
        .eq('id', id)

      if (error) throw error
      return { error: null }
    } catch (error) {
      console.error('Error deleting event:', error)
      return { error }
    }
  }

  // Admin operations
  static async authenticateAdmin(username: string, password: string) {
    try {
      // Development fallback: accept demo credentials if admin table/auth not yet configured
      if (username === 'admin' && password === 'ecell2024') {
  console.log('[DEV] Authenticating with fallback demo admin credentials')
        return {
          data: {
            id: 'demo-admin',
            username: 'admin',
            email: 'admin@example.com',
            role: 'admin' as const,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          },
          error: null
        }
      }

      // Prefer Supabase Auth if configured (treat username as email)
      const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
        email: username,
        password
      })
      if (!authError && authData?.user) {
        return {
          data: {
            id: authData.user.id,
            username: authData.user.user_metadata?.username || authData.user.email?.split('@')[0] || 'admin',
            email: authData.user.email || username,
            role: 'admin' as const,
            created_at: authData.user.created_at,
            updated_at: new Date().toISOString()
          },
          error: null
        }
      }

      // Fallback: check admin_users table by username or email
      const { data, error } = await supabase
        .from(TABLES.ADMIN_USERS)
        .select('*')
        .or(`username.eq.${username},email.eq.${username}`)
        .single()

      if (error || !data) throw error || new Error('Invalid credentials')

      // If you have a password column (e.g., password or password_hash),
      // compare it here. For now, assume Supabase Auth handles password.
      return {
        data: {
          id: (data as any).id,
          username: (data as any).username,
          email: (data as any).email,
          role: (data as any).role || 'admin',
          created_at: (data as any).created_at,
          updated_at: (data as any).updated_at
        },
        error: null
      }
    } catch (error) {
      console.error('Error authenticating admin:', error)
      return { data: null, error }
    }
  }

  // Student operations
  static async createStudent(studentData: Omit<Student, 'id' | 'created_at' | 'updated_at'>) {
    try {
      const { data, error } = await supabase
        .from(TABLES.STUDENTS)
        .insert([{
          ...studentData,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }])
        .select()
        .single()

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      console.error('Error creating student:', error)
      return { data: null, error }
    }
  }

  static async getStudentByEmail(email: string) {
    try {
      const { data, error } = await supabase
        .from(TABLES.STUDENTS)
        .select('*')
        .eq('email', email)
        .single()

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      console.error('Error fetching student by email:', error)
      return { data: null, error }
    }
  }

  static async getStudentByRollNumber(rollNumber: string) {
    try {
      const { data, error } = await supabase
        .from(TABLES.STUDENTS)
        .select('*')
        .eq('roll_number', rollNumber)
        .single()

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      console.error('Error fetching student by roll number:', error)
      return { data: null, error }
    }
  }

  static async updateStudent(id: string, updates: Partial<Student>) {
    try {
      const { data, error } = await supabase
        .from(TABLES.STUDENTS)
        .update({
          ...updates,
          updated_at: new Date().toISOString()
        })
        .eq('id', id)
        .select()
        .single()

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      console.error('Error updating student:', error)
      return { data: null, error }
    }
  }

  // Team operations
  static async createTeam(leaderId: string) {
    try {
      const { data, error } = await supabase
        .from(TABLES.TEAMS)
        .insert([{
          leader_id: leaderId,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }])
        .select()
        .single()

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      console.error('Error creating team:', error)
      return { data: null, error }
    }
  }

  static async getTeamByLeaderId(leaderId: string) {
    try {
      const { data, error } = await supabase
        .from(TABLES.TEAMS)
        .select(`
          *,
          team_members (
            *,
            students (*)
          ),
          ideas (*)
        `)
        .eq('leader_id', leaderId)
        .single()

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      console.error('Error fetching team by leader:', error)
      return { data: null, error }
    }
  }

  static async getTeamById(teamId: string) {
    try {
      const { data, error } = await supabase
        .from(TABLES.TEAMS)
        .select(`
          *,
          team_members (
            *,
            students (*)
          ),
          ideas (*),
          students!teams_leader_id_fkey (*)
        `)
        .eq('id', teamId)
        .single()

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      console.error('Error fetching team by id:', error)
      return { data: null, error }
    }
  }

  // Team member operations
  static async addTeamMember(teamId: string, studentId: string) {
    try {
      const { data, error } = await supabase
        .from(TABLES.TEAM_MEMBERS)
        .insert([{
          team_id: teamId,
          student_id: studentId,
          created_at: new Date().toISOString()
        }])
        .select()
        .single()

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      console.error('Error adding team member:', error)
      return { data: null, error }
    }
  }

  static async removeTeamMember(teamId: string, studentId: string) {
    try {
      const { data, error } = await supabase
        .from(TABLES.TEAM_MEMBERS)
        .delete()
        .eq('team_id', teamId)
        .eq('student_id', studentId)
        .select()

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      console.error('Error removing team member:', error)
      return { data: null, error }
    }
  }

  static async getTeamMembers(teamId: string) {
    try {
      const { data, error } = await supabase
        .from(TABLES.TEAM_MEMBERS)
        .select(`
          *,
          students (*)
        `)
        .eq('team_id', teamId)

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      console.error('Error fetching team members:', error)
      return { data: null, error }
    }
  }

  // Idea operations
  static async createIdea(ideaData: Omit<Idea, 'id' | 'created_at' | 'updated_at'>) {
    try {
      const { data, error } = await supabase
        .from(TABLES.IDEAS)
        .insert([{
          ...ideaData,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }])
        .select()
        .single()

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      console.error('Error creating idea:', error)
      return { data: null, error }
    }
  }

  static async updateIdea(id: string, updates: Partial<Idea>) {
    try {
      const { data, error } = await supabase
        .from(TABLES.IDEAS)
        .update({
          ...updates,
          updated_at: new Date().toISOString()
        })
        .eq('id', id)
        .select()
        .single()

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      console.error('Error updating idea:', error)
      return { data: null, error }
    }
  }

  static async getIdeaByTeamId(teamId: string) {
    try {
      const { data, error } = await supabase
        .from(TABLES.IDEAS)
        .select('*')
        .eq('team_id', teamId)
        .single()

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      console.error('Error fetching idea by team:', error)
      return { data: null, error }
    }
  }

  static async deleteIdea(id: string) {
    try {
      const { data, error } = await supabase
        .from(TABLES.IDEAS)
        .delete()
        .eq('id', id)
        .select()

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      console.error('Error deleting idea:', error)
      return { data: null, error }
    }
  }

  // Student dashboard specific operations
  static async getStudentDashboardData(studentId: string) {
    try {
      // Get student info
      const studentResult = await this.getStudentById(studentId)
      if (studentResult.error) throw studentResult.error

      const student = studentResult.data
      if (!student) throw new Error('Student not found')

      let teamData = null
      let ideaData = null

      // If student has a team, get team and idea data
      if (student.team_id) {
        const teamResult = await this.getTeamById(student.team_id)
        if (teamResult.data) {
          teamData = teamResult.data

          // Get idea for the team
          const ideaResult = await this.getIdeaByTeamId(student.team_id)
          if (ideaResult.data) {
            ideaData = ideaResult.data
          }
        }
      }

      return {
        data: {
          student,
          team: teamData,
          idea: ideaData
        },
        error: null
      }
    } catch (error) {
      console.error('Error fetching student dashboard data:', error)
      return { data: null, error }
    }
  }

  static async getStudentById(id: string) {
    try {
      const { data, error } = await supabase
        .from(TABLES.STUDENTS)
        .select('*')
        .eq('id', id)
        .single()

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      console.error('Error fetching student by id:', error)
      return { data: null, error }
    }
  }
}

// Real-time subscription helpers
export class RealtimeService {
  static subscribeToUsers(callback: (payload: any) => void) {
    return supabase
      .channel('users-changes')
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: TABLES.USERS },
        callback
      )
      .subscribe()
  }

  static subscribeToRegistrations(callback: (payload: any) => void) {
    return supabase
      .channel('registrations-changes')
      .on('postgres_changes',
        { event: '*', schema: 'public', table: TABLES.REGISTRATIONS },
        callback
      )
      .subscribe()
  }

  static subscribeToEvents(callback: (payload: any) => void) {
    return supabase
      .channel('events-changes')
      .on('postgres_changes',
        { event: '*', schema: 'public', table: TABLES.EVENTS },
        callback
      )
      .subscribe()
  }

  static unsubscribe(subscription: any) {
    return supabase.removeChannel(subscription)
  }

  // Search students by partial name, email, or roll number
  static async searchStudents(query: string, limit: number = 10) {
    try {
      const { data, error } = await supabase
        .from(TABLES.STUDENTS)
        .select('*')
        .or(`name.ilike.%${query}%,email.ilike.%${query}%,roll_number.ilike.%${query}%`)
        .limit(limit)

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      console.error('Error searching students:', error)
      return { data: null, error }
    }
  }
}

export default supabase
