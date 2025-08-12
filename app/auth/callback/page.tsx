'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase, DatabaseService } from '@/lib/supabase'

export default function AuthCallbackPage() {
  const router = useRouter()

  useEffect(() => {
    const handleAuth = async () => {
      try {
        // Get session/user from Supabase after redirect
        const { data: { session } } = await supabase.auth.getSession()
        const user = session?.user

        if (!user) {
          router.replace('/registration/login')
          return
        }

        const email = user.email || ''
        const fullName = (user.user_metadata?.full_name || user.user_metadata?.name || email.split('@')[0]) as string

        // If Google email domain is not allowed, bounce
        if (!email.endsWith('@raghuenggcollege.in')) {
          router.replace('/registration/login')
          return
        }

        // Store minimal info, then send to complete profile if needed
        localStorage.setItem('pending-google-user', JSON.stringify({ email, fullName }))

        // Check if student record exists
        const studentResult = await DatabaseService.getStudentByEmail(email)
        if (studentResult.data) {
          const s = studentResult.data
          const studentToSet = {
            id: s.id,
            name: s.name,
            roll_number: s.roll_number,
            email: s.email,
            role: s.role,
            team_id: s.team_id,
          }
          localStorage.setItem('student', JSON.stringify(studentToSet))
          document.cookie = `student-auth=${encodeURIComponent(JSON.stringify(studentToSet))}; path=/; max-age=${7 * 24 * 60 * 60}; SameSite=Lax`

          // If student doesn’t have roll_number, force profile completion
          if (!s.roll_number) {
            router.replace('/registration/complete-profile')
            return
          }

          router.replace('/dashboard')
          return
        }

        // Check if user record exists (registration flow)
        const userResult = await DatabaseService.getUserByEmail(email)
        if (userResult.data) {
          const u = userResult.data
          localStorage.setItem('user', JSON.stringify({
            id: u.id,
            name: u.full_name,
            rollNumber: u.roll_number,
            email: u.email,
            branch: u.branch,
            year: u.year,
            phone: u.phone_number,
            status: u.status,
          }))

          // If missing critical fields, take to profile completion
          if (!u.roll_number || !u.branch || !u.year || !u.graduation_year || !u.phone_number) {
            router.replace('/registration/complete-profile')
            return
          }

          router.replace('/registration/dashboard')
          return
        }

        // No records yet: take them to profile completion to collect full info
        router.replace('/registration/complete-profile')
      } catch (e) {
        console.error('Auth callback error:', e)
        router.replace('/registration/login')
      }
    }

    handleAuth()
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
        <p>Signing you in...</p>
      </div>
    </div>
  )
}

