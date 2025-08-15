'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useStudentAuth } from '@/contexts/AuthContext'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useToast } from '@/hooks/use-toast'
import { Toaster } from '@/components/ui/toaster'
import { Loader2 } from 'lucide-react'
import { supabase } from '@/lib/supabase'

export default function StudentLoginPage() {
  const { studentLogin, isLoading, student, isStudentAuthenticated } = useStudentAuth()
  const { toast } = useToast()
  const router = useRouter()
  const [formData, setFormData] = useState({
    emailOrRoll: '',
    password: ''
  })

  // Redirect if already authenticated
  useEffect(() => {
    if (isStudentAuthenticated && student) {
      console.log('Already authenticated, redirecting to dashboard')
      router.push('/dashboard')
    }
  }, [isStudentAuthenticated, student, router])

  const handleGoogleLogin = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/dashboard`
        }
      })

      if (error) {
        toast({
          title: 'Error',
          description: 'Failed to sign in with Google',
          variant: 'destructive'
        })
      }
    } catch (error) {
      console.error('Google login error:', error)
      toast({
        title: 'Error',
        description: 'An unexpected error occurred',
        variant: 'destructive'
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.emailOrRoll.trim()) {
      toast({
        title: 'Error',
        description: 'Please enter your email or roll number',
        variant: 'destructive'
      })
      return
    }

    try {
      console.log('Attempting login with:', formData.emailOrRoll)
      const result = await studentLogin(formData.emailOrRoll, formData.password)
      console.log('Login result:', result)

      if (result.success) {
        toast({
          title: 'Success!',
          description: 'Welcome to your dashboard',
        })
        console.log('Login successful, redirecting to dashboard...')

        // Wait a bit for the auth state to update, then redirect
        setTimeout(() => {
          console.log('Performing redirect to dashboard')
          router.push('/dashboard')
        }, 500)
      } else {
        console.error('Login failed:', result.error)
        toast({
          title: 'Login Failed',
          description: result.error || 'Invalid credentials',
          variant: 'destructive'
        })
      }
    } catch (error) {
      console.error('Login error:', error)
      toast({
        title: 'Error',
        description: 'An unexpected error occurred',
        variant: 'destructive'
      })
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }



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

      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-4xl space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <h1 className="text-3xl font-bold text-gradient-primary">E-Cell REC</h1>
            </div>
            <h2 className="text-xl font-semibold text-foreground">Student Dashboard Login</h2>
            <p className="text-muted-foreground">Access your entrepreneurship journey</p>
          </div>

          <div className="max-w-md mx-auto">
            {/* Login Form */}
            <Card className="card-dark dashboard-card-hover">
              <CardHeader>
                <CardTitle>Login to Dashboard</CardTitle>
                <CardDescription>
                  Enter your college email or roll number to access your dashboard
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="emailOrRoll">Email or Roll Number</Label>
                    <Input
                      id="emailOrRoll"
                      name="emailOrRoll"
                      type="text"
                      placeholder="your.email@raghuenggcollege.in or 23981A001"
                      value={formData.emailOrRoll}
                      onChange={handleInputChange}
                      className="input-dark"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="input-dark"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full button-primary"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Logging in...
                      </>
                    ) : (
                      'Login to Dashboard'
                    )}
                  </Button>

                  <div className="relative my-4">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs">
                      <span className="bg-card px-2 text-muted-foreground">or</span>
                    </div>
                  </div>

                  <Button type="button" variant="outline" className="w-full" onClick={handleGoogleLogin}>
                    <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                      <path fill="#EA4335" d="M12 10.2v3.6h5.1c-.2 1.2-1.5 3.6-5.1 3.6-3 0-5.4-2.5-5.4-5.4S9 6.6 12 6.6c1.7 0 2.9.7 3.6 1.3l2.5-2.5C16.8 3.9 14.6 3 12 3 6.9 3 2.7 7.2 2.7 12.3S6.9 21.6 12 21.6c6.3 0 9-4.4 9-8.1 0-.5 0-.8-.1-1.3H12z"/>
                    </svg>
                    Continue with Google
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  )
}
