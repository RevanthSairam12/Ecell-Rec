'use client'

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { User, Student, DatabaseService } from '@/lib/supabase'

interface AuthUser {
  id: string
  email: string
  full_name: string
  roll_number: string
  branch: string
  year: string
  phone_number: string
  status: 'active' | 'pending' | 'inactive'
}

interface AdminUser {
  id: string
  username: string
  email: string
  role: 'admin' | 'super_admin'
}

interface StudentUser {
  id: string
  name: string
  roll_number: string
  email: string
  role: 'leader' | 'member'
  team_id?: string
}

interface AuthContextType {
  // User authentication (legacy)
  user: AuthUser | null
  isAuthenticated: boolean
  login: (emailOrRoll: string, password: string) => Promise<{ success: boolean; error?: string }>
  register: (userData: Omit<User, 'id' | 'created_at' | 'updated_at'>) => Promise<{ success: boolean; error?: string }>
  logout: () => void

  // Student authentication
  student: StudentUser | null
  isStudentAuthenticated: boolean
  studentLogin: (emailOrRoll: string, password: string) => Promise<{ success: boolean; error?: string }>
  studentRegister: (studentData: Omit<Student, 'id' | 'created_at' | 'updated_at'>) => Promise<{ success: boolean; error?: string }>
  studentLogout: () => void
  updateStudentRole: (role: 'leader' | 'member', teamId?: string) => Promise<{ success: boolean; error?: string }>

  // Admin authentication
  admin: AdminUser | null
  isAdminAuthenticated: boolean
  adminLogin: (username: string, password: string) => Promise<{ success: boolean; error?: string }>
  adminLogout: () => void

  // Loading states
  isLoading: boolean
  isInitialized: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [student, setStudent] = useState<StudentUser | null>(null)
  const [admin, setAdmin] = useState<AdminUser | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)

  // Initialize auth state from localStorage
  useEffect(() => {
    const initializeAuth = () => {
      console.log('AuthContext: Initializing authentication...')
      try {
        // In production, ensure Supabase env vars are set and sessions are restored if using auth

        // Check for user session
        const storedUser = localStorage.getItem('user')
        if (storedUser) {
          const userData = JSON.parse(storedUser)
          setUser({
            id: userData.id || 'user-1',
            email: userData.email,
            full_name: userData.name || userData.full_name,
            roll_number: userData.rollNumber || userData.roll_number,
            branch: userData.branch,
            year: userData.year,
            phone_number: userData.phone || userData.phone_number,
            status: userData.status || 'active'
          })
          console.log('AuthContext: User loaded from localStorage')
        }

        // Check for student session
        const storedStudent = localStorage.getItem('student')
        console.log('AuthContext: Stored student data:', storedStudent)
        if (storedStudent) {
          try {
            const studentData = JSON.parse(storedStudent)
            console.log('AuthContext: Loading student from localStorage:', studentData)
            setStudent(studentData)
            console.log('AuthContext: Student state set successfully')
          } catch (studentError) {
            console.error('AuthContext: Error parsing student data:', studentError)
            localStorage.removeItem('student')
          }
        } else {
          console.log('AuthContext: No student data found in localStorage')
        }

        // Check for admin session
        const storedAdmin = localStorage.getItem('admin')
        if (storedAdmin) {
          const adminData = JSON.parse(storedAdmin)
          setAdmin(adminData)
          console.log('AuthContext: Admin loaded from localStorage')
        }
      } catch (error) {
        console.error('AuthContext: Error initializing auth:', error)
        // Clear corrupted data
        localStorage.removeItem('user')
        localStorage.removeItem('student')
        localStorage.removeItem('admin')
      } finally {
        console.log('AuthContext: Initialization complete')
        setIsInitialized(true)
      }
    }

    initializeAuth()
  }, [])

  // User authentication functions
  const login = async (emailOrRoll: string, password: string): Promise<{ success: boolean; error?: string }> => {
    setIsLoading(true)
    try {
      // Validate email domain if email is provided
      if (emailOrRoll.includes('@') && !emailOrRoll.endsWith('@raghuenggcollege.in')) {
        return { success: false, error: 'Please use your college email ID (@raghuenggcollege.in)' }
      }

      // Find user by email or roll number
      let userResult
      if (emailOrRoll.includes('@')) {
        userResult = await DatabaseService.getUserByEmail(emailOrRoll)
      } else {
        userResult = await DatabaseService.getUserByRollNumber(emailOrRoll.toUpperCase())
      }

      if (!userResult.data) {
        return { success: false, error: 'No account found with this email or roll number' }
      }

      const userData = userResult.data

      // TODO: verify password with real auth if implemented

      // Update last login
      await DatabaseService.updateUser(userData.id, {
        last_login: new Date().toISOString()
      })

      // Set user state
      const authUser: AuthUser = {
        id: userData.id,
        email: userData.email,
        full_name: userData.full_name,
        roll_number: userData.roll_number,
        branch: userData.branch,
        year: userData.year,
        phone_number: userData.phone_number,
        status: userData.status
      }

      setUser(authUser)

      // Store in localStorage
      localStorage.setItem('user', JSON.stringify({
        id: userData.id,
        name: userData.full_name,
        rollNumber: userData.roll_number,
        email: userData.email,
        branch: userData.branch,
        year: userData.year,
        phone: userData.phone_number,
        status: userData.status
      }))

      return { success: true }
    } catch (error) {
      console.error('Login error:', error)
      return { success: false, error: 'An error occurred during login. Please try again.' }
    } finally {
      setIsLoading(false)
    }
  }

  const register = async (userData: Omit<User, 'id' | 'created_at' | 'updated_at'>): Promise<{ success: boolean; error?: string }> => {
    setIsLoading(true)
    try {
      // Check if user already exists
      const existingUserByEmail = await DatabaseService.getUserByEmail(userData.email)
      if (existingUserByEmail.data) {
        return { success: false, error: 'An account with this email already exists' }
      }

      const existingUserByRoll = await DatabaseService.getUserByRollNumber(userData.roll_number)
      if (existingUserByRoll.data) {
        return { success: false, error: 'An account with this roll number already exists' }
      }

      // Create new user
      const userResult = await DatabaseService.createUser(userData)
      if (userResult.error) {
        return { success: false, error: 'Failed to create account. Please try again.' }
      }

      // Create registration record
      await DatabaseService.createRegistration({
        user_id: userResult.data!.id,
        registration_date: new Date().toISOString(),
        status: 'active',
        submission_status: 'none'
      })

      return { success: true }
    } catch (error) {
      console.error('Registration error:', error)
      return { success: false, error: 'An error occurred during registration. Please try again.' }
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  // Student authentication functions
  const studentLogin = async (emailOrRoll: string, password: string): Promise<{ success: boolean; error?: string }> => {
    console.log('AuthContext: StudentLogin called with:', emailOrRoll)
    setIsLoading(true)
    try {
      // Using database for student login

      // Validate email domain if email is provided
      if (emailOrRoll.includes('@') && !emailOrRoll.endsWith('@raghuenggcollege.in')) {
        console.log('AuthContext: Invalid email domain')
        return { success: false, error: 'Please use your college email ID (@raghuenggcollege.in)' }
      }

      // Find student by email or roll number (using mock data for development)
      let studentResult
      if (emailOrRoll.includes('@')) {
        console.log('Searching by email:', emailOrRoll)
        studentResult = await DatabaseService.getStudentByEmail(emailOrRoll)
      } else {
        console.log('Searching by roll number:', emailOrRoll.toUpperCase())
        studentResult = await DatabaseService.getStudentByRollNumber(emailOrRoll.toUpperCase())
      }

      console.log('Student search result:', studentResult)

      // If student not found, check if they registered through the registration form
      // and create a student record from their user record
      if (!studentResult.data) {
        console.log('Student not found, checking user records...')
        let userResult
        if (emailOrRoll.includes('@')) {
          userResult = await DatabaseService.getUserByEmail(emailOrRoll)
        } else {
          userResult = await DatabaseService.getUserByRollNumber(emailOrRoll.toUpperCase())
        }

        if (userResult.data) {
          console.log('Found user record, creating student record...')
          const userData = userResult.data
          // Create student record from user data
          const newStudentResult = await DatabaseService.createStudent({
            name: userData.full_name,
            roll_number: userData.roll_number,
            email: userData.email,
            role: 'leader', // Default to leader for registration users
            team_id: undefined
          })

          if (newStudentResult.data) {
            studentResult = newStudentResult
            console.log('Created student record:', studentResult.data)
          }
        }
      }

      if (!studentResult.data) {
        return { success: false, error: 'No account found with this email or roll number' }
      }

      // For demo purposes, we'll accept any password for existing students
      // In production, implement proper password verification
      const studentData = studentResult.data
      const studentToSet = {
        id: studentData.id,
        name: studentData.name,
        roll_number: studentData.roll_number,
        email: studentData.email,
        role: studentData.role,
        team_id: studentData.team_id
      }

      console.log('Setting student data:', studentToSet)
      setStudent(studentToSet)

      localStorage.setItem('student', JSON.stringify(studentToSet))

      // Set cookie for middleware authentication
      const cookieValue = encodeURIComponent(JSON.stringify(studentToSet))
      document.cookie = `student-auth=${cookieValue}; path=/; max-age=${7 * 24 * 60 * 60}; SameSite=Lax`
      console.log('Student data saved to localStorage and cookie')

      return { success: true }
    } catch (error) {
      console.error('Student login error:', error)
      return { success: false, error: 'Authentication failed. Please try again.' }
    } finally {
      setIsLoading(false)
    }
  }

  const studentRegister = async (studentData: Omit<Student, 'id' | 'created_at' | 'updated_at'>): Promise<{ success: boolean; error?: string }> => {
    setIsLoading(true)
    try {
      // Check if student already exists
      const existingByEmail = await DatabaseService.getStudentByEmail(studentData.email)
      if (existingByEmail.data) {
        return { success: false, error: 'An account with this email already exists' }
      }

      const existingByRoll = await DatabaseService.getStudentByRollNumber(studentData.roll_number)
      if (existingByRoll.data) {
        return { success: false, error: 'An account with this roll number already exists' }
      }

      // Create a student in DB
      const result = await DatabaseService.createStudent(studentData)
      if (result.error || !result.data) {
        throw new Error(result.error?.message || 'Failed to create student account')
      }

      const newStudent = result.data
      setStudent({
        id: newStudent.id,
        name: newStudent.name,
        roll_number: newStudent.roll_number,
        email: newStudent.email,
        role: newStudent.role,
        team_id: newStudent.team_id
      })

      const studentData = {
        id: newStudent.id,
        name: newStudent.name,
        roll_number: newStudent.roll_number,
        email: newStudent.email,
        role: newStudent.role,
        team_id: newStudent.team_id
      }

      localStorage.setItem('student', JSON.stringify(studentData))

      // Set cookie for middleware authentication
      const cookieValue = encodeURIComponent(JSON.stringify(studentData))
      document.cookie = `student-auth=${cookieValue}; path=/; max-age=${7 * 24 * 60 * 60}; SameSite=Lax`

      return { success: true }
    } catch (error) {
      console.error('Student registration error:', error)
      return { success: false, error: 'Registration failed. Please try again.' }
    } finally {
      setIsLoading(false)
    }
  }

  const studentLogout = () => {
    setStudent(null)
    localStorage.removeItem('student')
    // Clear the authentication cookie
    document.cookie = 'student-auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
  }

  const updateStudentRole = async (role: 'leader' | 'member', teamId?: string): Promise<{ success: boolean; error?: string }> => {
    if (!student) {
      return { success: false, error: 'No student logged in' }
    }

    try {
      const result = await DatabaseService.updateStudent(student.id, {
        role,
        team_id: teamId
      })

      if (result.error) {
        throw new Error(result.error.message || 'Failed to update student role')
      }

      const updatedStudent = {
        ...student,
        role,
        team_id: teamId
      }

      setStudent(updatedStudent)
      localStorage.setItem('student', JSON.stringify(updatedStudent))

      return { success: true }
    } catch (error) {
      console.error('Error updating student role:', error)
      return { success: false, error: 'Failed to update role. Please try again.' }
    }
  }

  // Admin authentication functions
  const adminLogin = async (username: string, password: string): Promise<{ success: boolean; error?: string }> => {
    setIsLoading(true)
    try {
      const result = await DatabaseService.authenticateAdmin(username, password)
      if (result.data) {
        setAdmin(result.data)
        localStorage.setItem('admin', JSON.stringify(result.data))
        return { success: true }
      } else {
        return { success: false, error: 'Invalid credentials' }
      }
    } catch (error) {
      console.error('Admin login error:', error)
      return { success: false, error: 'Authentication failed. Please try again.' }
    } finally {
      setIsLoading(false)
    }
  }

  const adminLogout = () => {
    setAdmin(null)
    localStorage.removeItem('admin')
  }

  const value: AuthContextType = {
    // User authentication (legacy)
    user,
    isAuthenticated: !!user,
    login,
    register,
    logout,

    // Student authentication
    student,
    isStudentAuthenticated: !!student,
    studentLogin,
    studentRegister,
    studentLogout,
    updateStudentRole,

    // Admin authentication
    admin,
    isAdminAuthenticated: !!admin,
    adminLogin,
    adminLogout,

    // Loading states
    isLoading,
    isInitialized
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

// Convenience hooks
export const useUserAuth = () => {
  const { user, isAuthenticated, login, register, logout, isLoading } = useAuth()
  return { user, isAuthenticated, login, register, logout, isLoading }
}

export const useStudentAuth = () => {
  const { student, isStudentAuthenticated, studentLogin, studentRegister, studentLogout, updateStudentRole, isLoading } = useAuth()
  return { student, isStudentAuthenticated, studentLogin, studentRegister, studentLogout, updateStudentRole, isLoading }
}

export const useAdminAuth = () => {
  const { admin, isAdminAuthenticated, adminLogin, adminLogout, isLoading } = useAuth()
  return { admin, isAdminAuthenticated, adminLogin, adminLogout, isLoading }
}

export default AuthProvider
