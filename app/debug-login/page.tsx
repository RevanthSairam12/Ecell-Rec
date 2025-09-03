'use client'

import React, { useState, useEffect } from 'react'
import { useStudentAuth } from '@/contexts/AuthContext'
import { MockDataService } from '@/lib/mockData'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function DebugLoginPage() {
  const { student, isStudentAuthenticated, studentLogin, isLoading } = useStudentAuth()
  const [email, setEmail] = useState('arjun.sharma@raghuenggcollege.in')
  const [password, setPassword] = useState('demo')
  const [debugInfo, setDebugInfo] = useState<any>({})
  const [loginResult, setLoginResult] = useState<any>(null)

  useEffect(() => {
    // Update debug info
    setDebugInfo({
      student,
      isStudentAuthenticated,
      isLoading,
      localStorage: {
        student: localStorage.getItem('student'),
        cookies: document.cookie
      },
      timestamp: new Date().toISOString()
    })
  }, [student, isStudentAuthenticated, isLoading])

  const handleTestLogin = async () => {
    console.log('Testing login with:', email, password)
    try {
      const result = await studentLogin(email, password)
      console.log('Login result:', result)
      setLoginResult(result)
      
      // Update debug info after login
      setTimeout(() => {
        setDebugInfo({
          student,
          isStudentAuthenticated,
          isLoading,
          localStorage: {
            student: localStorage.getItem('student'),
            cookies: document.cookie
          },
          timestamp: new Date().toISOString()
        })
      }, 1000)
    } catch (error) {
      console.error('Login error:', error)
      setLoginResult({ success: false, error: error.message })
    }
  }

  const handleTestMockData = async () => {
    console.log('Testing mock data...')
    MockDataService.initializeMockData()
    const result = await MockDataService.getStudentByEmail(email)
    console.log('Mock data result:', result)
    setLoginResult(result)
  }

  const handleClearStorage = () => {
    localStorage.clear()
    document.cookie = 'student-auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
    window.location.reload()
  }

  const handleGoToDashboard = () => {
    window.location.href = '/dashboard'
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Student Login Debug</CardTitle>
            <CardDescription>Debug the student authentication flow</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="student@raghuenggcollege.in"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Password</label>
                <Input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="demo"
                />
              </div>
            </div>
            
            <div className="flex gap-2">
              <Button onClick={handleTestLogin} disabled={isLoading}>
                {isLoading ? 'Logging in...' : 'Test Login'}
              </Button>
              <Button onClick={handleTestMockData} variant="outline">
                Test Mock Data
              </Button>
              <Button onClick={handleClearStorage} variant="destructive">
                Clear Storage
              </Button>
              <Button onClick={handleGoToDashboard} variant="secondary">
                Go to Dashboard
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Authentication State</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded text-sm overflow-auto">
              {JSON.stringify(debugInfo, null, 2)}
            </pre>
          </CardContent>
        </Card>

        {loginResult && (
          <Card>
            <CardHeader>
              <CardTitle>Last Login Result</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-muted p-4 rounded text-sm overflow-auto">
                {JSON.stringify(loginResult, null, 2)}
              </pre>
            </CardContent>
          </Card>
        )}

        <Card>
          <CardHeader>
            <CardTitle>Test Credentials</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <p><strong>Leaders:</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>arjun.sharma@raghuenggcollege.in</li>
                <li>priya.patel@raghuenggcollege.in</li>
                <li>rahul.kumar@raghuenggcollege.in</li>
                <li>sneha.singh@raghuenggcollege.in</li>
                <li>vikram.reddy@raghuenggcollege.in</li>
              </ul>
              <p><strong>Members:</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>ananya.gupta@raghuenggcollege.in</li>
                <li>karthik.nair@raghuenggcollege.in</li>
                <li>pooja.agarwal@raghuenggcollege.in</li>
              </ul>
              <p><strong>Password:</strong> demo (or leave empty)</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
