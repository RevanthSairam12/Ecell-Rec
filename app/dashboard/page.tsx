'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useStudentAuth } from '@/contexts/AuthContext'
import { DatabaseService } from '@/lib/supabase'
import { SidebarProvider } from '@/components/ui/sidebar'
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar'
import { DashboardHeader } from '@/components/dashboard/DashboardHeader'
import { RoleBasedContent } from '@/components/dashboard/RoleBasedContent'
import { Loader2 } from 'lucide-react'

interface DashboardData {
  student: any
  team: any
  idea: any
}

export default function DashboardPage() {
  const { student, isStudentAuthenticated, isLoading: authLoading } = useStudentAuth()
  const router = useRouter()
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeSection, setActiveSection] = useState('overview')

  // Redirect if not authenticated
  useEffect(() => {
    console.log('Dashboard auth check:', {
      authLoading,
      isStudentAuthenticated,
      hasStudent: !!student,
      studentId: student?.id,
      localStorage: localStorage.getItem('student'),
      timestamp: new Date().toISOString()
    })

    // Wait for auth to initialize before checking
    if (authLoading) {
      console.log('Auth still loading, waiting...')
      return
    }

    // Check if we have student data in localStorage as fallback
    const storedStudent = localStorage.getItem('student')
    if (!isStudentAuthenticated && !student && !storedStudent) {
      console.log('Not authenticated and no stored data, redirecting to login')
      router.push('/student-login')
      return
    }
  }, [isStudentAuthenticated, authLoading, student, router])

  // Fetch dashboard data
  useEffect(() => {
    const fetchDashboardData = async () => {
      if (!student?.id) {
        console.log('No student ID available for dashboard data fetch')
        return
      }

      try {
        setIsLoading(true)
        console.log('Fetching dashboard data for student:', student.id)
        const result = await DatabaseService.getStudentDashboardData(student.id)

        if (result.error) {
          throw new Error(result.error.message || 'Failed to fetch dashboard data')
        }

        console.log('Dashboard data fetched successfully:', result.data)
        setDashboardData(result.data)
        setError(null) // Clear any previous errors
      } catch (err) {
        console.error('Error fetching dashboard data:', err)
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setIsLoading(false)
      }
    }

    if (isStudentAuthenticated && student?.id) {
      fetchDashboardData()
    }
  }, [isStudentAuthenticated, student?.id])

  // Show loading state
  if (authLoading || isLoading) {
    return (
      <div className="min-h-screen relative overflow-hidden" style={{
        backgroundColor: 'hsl(240 10% 3.9%)',
        color: 'hsl(0 0% 98%)',
        '--background': '240 10% 3.9%',
        '--foreground': '0 0% 98%',
        '--card': '240 10% 3.9%',
        '--card-foreground': '0 0% 98%',
        '--primary': '263 70% 50%',
        '--primary-foreground': '0 0% 98%',
        '--muted': '240 3.7% 15.9%',
        '--muted-foreground': '240 5% 64.9%',
        '--border': '240 3.7% 15.9%'
      } as React.CSSProperties}>
        {/* Background elements */}
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-primary opacity-10 blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-gradient-accent opacity-8 blur-xl animate-pulse delay-1000" />
        
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center space-y-4">
            <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary" />
            <p className="text-muted-foreground">Loading your dashboard...</p>
          </div>
        </div>
      </div>
    )
  }

  // Show error state
  if (error) {
    return (
      <div className="min-h-screen relative overflow-hidden" style={{
        backgroundColor: 'hsl(240 10% 3.9%)',
        color: 'hsl(0 0% 98%)',
        '--background': '240 10% 3.9%',
        '--foreground': '0 0% 98%',
        '--card': '240 10% 3.9%',
        '--card-foreground': '0 0% 98%',
        '--primary': '263 70% 50%',
        '--primary-foreground': '0 0% 98%',
        '--muted': '240 3.7% 15.9%',
        '--muted-foreground': '240 5% 64.9%',
        '--border': '240 3.7% 15.9%'
      } as React.CSSProperties}>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto">
              <span className="text-red-400 text-2xl">!</span>
            </div>
            <h2 className="text-xl font-semibold text-foreground">Error Loading Dashboard</h2>
            <p className="text-muted-foreground max-w-md">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Don't render if not authenticated or still loading
  if (!isStudentAuthenticated || !student || !dashboardData || authLoading) {
    console.log('Dashboard not ready to render:', {
      isStudentAuthenticated,
      hasStudent: !!student,
      hasDashboardData: !!dashboardData,
      authLoading
    })
    return null
  }

  return (
    <div className="min-h-screen w-full relative overflow-hidden" style={{
      backgroundColor: 'hsl(240 10% 3.9%)',
      color: 'hsl(0 0% 98%)',
      '--background': '240 10% 3.9%',
      '--foreground': '0 0% 98%',
      '--card': '240 10% 3.9%',
      '--card-foreground': '0 0% 98%',
      '--primary': '263 70% 50%',
      '--primary-foreground': '0 0% 98%',
      '--muted': '240 3.7% 15.9%',
      '--muted-foreground': '240 5% 64.9%',
      '--border': '240 3.7% 15.9%'
    } as React.CSSProperties}>
      {/* Background elements */}
      <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-primary opacity-10 blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-gradient-accent opacity-8 blur-xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 w-24 h-24 rounded-full bg-gradient-success opacity-5 blur-xl animate-pulse delay-500" />

      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <DashboardSidebar
            student={dashboardData.student}
            team={dashboardData.team}
            idea={dashboardData.idea}
            activeSection={activeSection}
            onSectionChange={setActiveSection}
          />

          <div className="flex-1 flex flex-col min-w-0 w-full">
            <DashboardHeader
              student={dashboardData.student}
              team={dashboardData.team}
            />

            <main className="flex-1 p-4 md:p-6 dashboard-scrollbar overflow-auto max-w-full">
              <div className="max-w-7xl mx-auto w-full">
                <RoleBasedContent
                  student={dashboardData.student}
                  team={dashboardData.team}
                  idea={dashboardData.idea}
                  onDataUpdate={setDashboardData}
                  activeSection={activeSection}
                  onSectionChange={setActiveSection}
                />
              </div>
            </main>
          </div>
        </div>
      </SidebarProvider>
    </div>
  )
}
