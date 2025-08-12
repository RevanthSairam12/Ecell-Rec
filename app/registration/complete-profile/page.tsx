'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { DatabaseService } from '@/lib/supabase'

interface ProfileForm {
  fullName: string
  email: string
  rollNumber: string
  branch: string
  year: string
  graduationYear: string
  phoneNumber: string
}

const BRANCHES = ['CSE','CSM','CSD','CSC','ECE','EEE','MECH','CIVIL']
const YEARS = ['1st Year','2nd Year','3rd Year','Final Year']

export default function CompleteProfilePage() {
  const router = useRouter()
  const { toast } = useToast()
  const { register, handleSubmit, setValue, formState: { errors, isSubmitting } } = useForm<ProfileForm>()
  const [emailLocked, setEmailLocked] = useState(false)

  useEffect(() => {
    // If Google sign-in already gave us email/name via localStorage temp entry
    const pending = localStorage.getItem('pending-google-user')
    if (pending) {
      const u = JSON.parse(pending)
      if (u.email) {
        setValue('email', u.email)
        setEmailLocked(true)
      }
      if (u.fullName) setValue('fullName', u.fullName)
    }
  }, [setValue])

  const onSubmit = async (data: ProfileForm) => {
    try {
      // Ensure email domain is enforced
      if (!data.email.endsWith('@raghuenggcollege.in')) {
        toast({ title: 'Invalid email', description: 'Use your @raghuenggcollege.in address', variant: 'destructive' })
        return
      }

      // Create or update user in users table (registration flow)
      const existing = await DatabaseService.getUserByEmail(data.email)
      if (existing.data) {
        await DatabaseService.updateUser(existing.data.id, {
          full_name: data.fullName,
          roll_number: data.rollNumber.toUpperCase(),
          branch: data.branch,
          year: data.year,
          graduation_year: data.graduationYear,
          phone_number: data.phoneNumber,
          status: 'active'
        })
      } else {
        await DatabaseService.createUser({
          email: data.email,
          full_name: data.fullName,
          roll_number: data.rollNumber.toUpperCase(),
          branch: data.branch,
          year: data.year,
          graduation_year: data.graduationYear,
          phone_number: data.phoneNumber,
          status: 'active'
        })
      }

      // Also ensure a student record exists for dashboard usage
      const studentRes = await DatabaseService.getStudentByEmail(data.email)
      if (!studentRes.data) {
        await DatabaseService.createStudent({
          name: data.fullName,
          roll_number: data.rollNumber.toUpperCase(),
          email: data.email,
          role: 'leader'
        })
      }

      // Create registration record (if not already there)
      const latestUser = await DatabaseService.getUserByEmail(data.email)
      if (latestUser.data) {
        try {
          await DatabaseService.createRegistration({
            user_id: latestUser.data.id,
            registration_date: new Date().toISOString(),
            status: 'active',
            submission_status: 'none'
          })
        } catch {}
      }

      // Persist light session objects for both flows
      localStorage.setItem('user', JSON.stringify({
        id: latestUser.data?.id || existing.data?.id || '',
        name: data.fullName,
        rollNumber: data.rollNumber.toUpperCase(),
        email: data.email,
        branch: data.branch,
        year: data.year,
        phone: data.phoneNumber,
        status: 'active'
      }))

      // Clear pending and go to registration dashboard
      localStorage.removeItem('pending-google-user')
      toast({ title: 'Profile saved', description: 'Welcome!' })
      router.replace('/registration/dashboard')
    } catch (e) {
      console.error(e)
      toast({ title: 'Failed', description: 'Could not save your profile', variant: 'destructive' })
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-xl">
        <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
          <CardHeader>
            <CardTitle className="text-center text-lg">Complete Your Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" {...register('fullName', { required: 'Full name is required' })} />
                {errors.fullName && <p className="text-destructive text-sm">{errors.fullName.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">College Email ID</Label>
                <Input id="email" disabled={emailLocked} placeholder="yourname@raghuenggcollege.in" {...register('email', { required: 'Email is required' })} />
                {errors.email && <p className="text-destructive text-sm">{errors.email.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="rollNumber">Roll Number</Label>
                <Input id="rollNumber" placeholder="23981A42U4" {...register('rollNumber', { required: 'Roll number is required' })} />
                {errors.rollNumber && <p className="text-destructive text-sm">{errors.rollNumber.message}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="space-y-2">
                  <Label>Branch</Label>
                  <select className="w-full px-3 py-2 border rounded-md bg-background" {...register('branch', { required: 'Branch is required' })}>
                    <option value="">Select Your Branch</option>
                    {BRANCHES.map(b => <option key={b} value={b}>{b}</option>)}
                  </select>
                  {errors.branch && <p className="text-destructive text-sm">{errors.branch.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label>Current Year</Label>
                  <select className="w-full px-3 py-2 border rounded-md bg-background" {...register('year', { required: 'Year is required' })}>
                    <option value="">Select Your Year</option>
                    {YEARS.map(y => <option key={y} value={y}>{y}</option>)}
                  </select>
                  {errors.year && <p className="text-destructive text-sm">{errors.year.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label>Graduation Year</Label>
                <select className="w-full px-3 py-2 border rounded-md bg-background" {...register('graduationYear', { required: 'Graduation year is required' })}>
                  <option value="">Select Graduation Year</option>
                  {Array.from({ length: 7 }).map((_, i) => {
                    const year = new Date().getFullYear() + i
                    return <option key={year} value={String(year)}>{year}</option>
                  })}
                </select>
                {errors.graduationYear && <p className="text-destructive text-sm">{errors.graduationYear.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input id="phoneNumber" placeholder="10-digit mobile" {...register('phoneNumber', { required: 'Phone number is required', pattern: { value: /^[0-9]{10}$/ , message: 'Enter valid 10-digit mobile' } })} />
                {errors.phoneNumber && <p className="text-destructive text-sm">{errors.phoneNumber.message}</p>}
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full">Save & Continue</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

