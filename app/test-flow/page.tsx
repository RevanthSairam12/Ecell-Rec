'use client'

import React, { useState } from 'react'
import { MockDataService } from '@/lib/mockData'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'

export default function TestFlowPage() {
  const [testData, setTestData] = useState({
    email: 'test.student@raghuenggcollege.in',
    rollNumber: 'REC2025CS001',
    fullName: 'Test Student',
    ideaTitle: 'Smart Campus Management System',
    ideaDescription: 'A comprehensive system to manage campus resources, student activities, and academic processes using IoT and AI technologies.'
  })
  const [results, setResults] = useState<any[]>([])
  const { toast } = useToast()

  const runCompleteTest = async () => {
    const testResults: any[] = []
    
    try {
      // Step 1: Create a user (simulating registration)
      testResults.push({ step: 'Creating user...', status: 'running' })
      setResults([...testResults])
      
      const userResult = await MockDataService.createUser({
        email: testData.email,
        full_name: testData.fullName,
        roll_number: testData.rollNumber,
        branch: 'Computer Science Engineering',
        year: '3rd Year',
        graduation_year: '2025',
        phone_number: '9876543210',
        status: 'active'
      })
      
      if (userResult.error) {
        throw new Error('Failed to create user')
      }
      
      testResults[0] = { step: 'User created', status: 'success', data: userResult.data }
      setResults([...testResults])

      // Step 2: Create student record (simulating idea submission)
      testResults.push({ step: 'Creating student record...', status: 'running' })
      setResults([...testResults])
      
      const studentResult = await MockDataService.createStudent({
        name: testData.fullName,
        roll_number: testData.rollNumber,
        email: testData.email,
        role: 'leader',
        team_id: undefined
      })
      
      if (studentResult.error) {
        throw new Error('Failed to create student')
      }
      
      testResults[1] = { step: 'Student created', status: 'success', data: studentResult.data }
      setResults([...testResults])

      // Step 3: Create team
      testResults.push({ step: 'Creating team...', status: 'running' })
      setResults([...testResults])
      
      const teamResult = await MockDataService.createTeam({
        leader_id: studentResult.data!.id
      })
      
      if (teamResult.error) {
        throw new Error('Failed to create team')
      }
      
      testResults[2] = { step: 'Team created', status: 'success', data: teamResult.data }
      setResults([...testResults])

      // Step 4: Update student with team_id
      testResults.push({ step: 'Linking student to team...', status: 'running' })
      setResults([...testResults])
      
      await MockDataService.updateStudent(studentResult.data!.id, {
        team_id: teamResult.data!.id
      })
      
      testResults[3] = { step: 'Student linked to team', status: 'success' }
      setResults([...testResults])

      // Step 5: Create idea
      testResults.push({ step: 'Creating idea...', status: 'running' })
      setResults([...testResults])
      
      const ideaResult = await MockDataService.createIdea({
        team_id: teamResult.data!.id,
        title: testData.ideaTitle,
        description: testData.ideaDescription,
        status: 'submitted'
      })
      
      if (ideaResult.error) {
        throw new Error('Failed to create idea')
      }
      
      testResults[4] = { step: 'Idea created', status: 'success', data: ideaResult.data }
      setResults([...testResults])

      // Step 6: Test dashboard data retrieval
      testResults.push({ step: 'Testing dashboard data retrieval...', status: 'running' })
      setResults([...testResults])
      
      const dashboardResult = await MockDataService.getStudentDashboardData(studentResult.data!.id)
      
      if (dashboardResult.error) {
        throw new Error('Failed to get dashboard data')
      }
      
      testResults[5] = { step: 'Dashboard data retrieved', status: 'success', data: dashboardResult.data }
      setResults([...testResults])

      // Step 7: Test authentication
      testResults.push({ step: 'Testing student authentication...', status: 'running' })
      setResults([...testResults])
      
      const authResult = await MockDataService.getStudentByEmail(testData.email)
      
      if (authResult.error) {
        throw new Error('Failed to authenticate student')
      }
      
      testResults[6] = { step: 'Student authentication successful', status: 'success', data: authResult.data }
      setResults([...testResults])

      toast({
        title: 'Test Completed Successfully! 🎉',
        description: 'All steps of the registration → dashboard flow are working correctly.'
      })

    } catch (error) {
      console.error('Test failed:', error)
      testResults.push({ step: 'Test failed', status: 'error', error: error.message })
      setResults([...testResults])
      
      toast({
        title: 'Test Failed',
        description: error.message,
        variant: 'destructive'
      })
    }
  }

  return (
    <div className="min-h-screen p-8 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto space-y-6">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Registration → Dashboard Flow Test</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  value={testData.email}
                  onChange={(e) => setTestData(prev => ({ ...prev, email: e.target.value }))}
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Roll Number</label>
                <Input
                  value={testData.rollNumber}
                  onChange={(e) => setTestData(prev => ({ ...prev, rollNumber: e.target.value }))}
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <Input
                  value={testData.fullName}
                  onChange={(e) => setTestData(prev => ({ ...prev, fullName: e.target.value }))}
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Idea Title</label>
                <Input
                  value={testData.ideaTitle}
                  onChange={(e) => setTestData(prev => ({ ...prev, ideaTitle: e.target.value }))}
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Idea Description</label>
              <Textarea
                value={testData.ideaDescription}
                onChange={(e) => setTestData(prev => ({ ...prev, ideaDescription: e.target.value }))}
                className="bg-gray-700 border-gray-600 text-white"
                rows={3}
              />
            </div>
            <Button onClick={runCompleteTest} className="w-full">
              Run Complete Flow Test
            </Button>
          </CardContent>
        </Card>

        {results.length > 0 && (
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-xl text-white">Test Results</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {results.map((result, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gray-700">
                    <div className={`w-3 h-3 rounded-full ${
                      result.status === 'success' ? 'bg-green-500' :
                      result.status === 'error' ? 'bg-red-500' :
                      'bg-yellow-500 animate-pulse'
                    }`} />
                    <div className="flex-1">
                      <div className="font-medium">{result.step}</div>
                      {result.data && (
                        <pre className="text-xs text-gray-400 mt-1 overflow-x-auto">
                          {JSON.stringify(result.data, null, 2)}
                        </pre>
                      )}
                      {result.error && (
                        <div className="text-red-400 text-sm mt-1">{result.error}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
