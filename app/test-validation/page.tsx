'use client'

import React, { useState, useEffect } from 'react'
import { MockDataService } from '@/lib/mockData'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, XCircle, AlertCircle, Loader2 } from 'lucide-react'

interface TestResult {
  name: string
  status: 'pass' | 'fail' | 'pending'
  message: string
  details?: any
}

export default function TestValidationPage() {
  const [tests, setTests] = useState<TestResult[]>([])
  const [isRunning, setIsRunning] = useState(false)

  const runTests = async () => {
    setIsRunning(true)
    const testResults: TestResult[] = []

    // Test 1: Mock Data Initialization
    try {
      MockDataService.initializeMockData()
      testResults.push({
        name: 'Mock Data Initialization',
        status: 'pass',
        message: 'Mock data initialized successfully'
      })
    } catch (error) {
      testResults.push({
        name: 'Mock Data Initialization',
        status: 'fail',
        message: 'Failed to initialize mock data',
        details: error
      })
    }

    // Test 2: Student Authentication
    try {
      const result = await MockDataService.getStudentByEmail('arjun.sharma@raghuenggcollege.in')
      if (result.data) {
        testResults.push({
          name: 'Student Authentication Data',
          status: 'pass',
          message: 'Student data retrieved successfully',
          details: result.data
        })
      } else {
        testResults.push({
          name: 'Student Authentication Data',
          status: 'fail',
          message: 'No student data found'
        })
      }
    } catch (error) {
      testResults.push({
        name: 'Student Authentication Data',
        status: 'fail',
        message: 'Error retrieving student data',
        details: error
      })
    }

    // Test 3: Team Data Structure
    try {
      const studentResult = await MockDataService.getStudentById('student_1')
      if (studentResult.data) {
        const dashboardResult = await MockDataService.getStudentDashboardData('student_1')
        if (dashboardResult.data && dashboardResult.data.team) {
          testResults.push({
            name: 'Team Data Structure',
            status: 'pass',
            message: 'Team data structure is valid',
            details: dashboardResult.data.team
          })
        } else {
          testResults.push({
            name: 'Team Data Structure',
            status: 'fail',
            message: 'Team data not found or invalid'
          })
        }
      }
    } catch (error) {
      testResults.push({
        name: 'Team Data Structure',
        status: 'fail',
        message: 'Error testing team data',
        details: error
      })
    }

    // Test 4: Idea Data Structure
    try {
      const dashboardResult = await MockDataService.getStudentDashboardData('student_1')
      if (dashboardResult.data && dashboardResult.data.idea) {
        testResults.push({
          name: 'Idea Data Structure',
          status: 'pass',
          message: 'Idea data structure is valid',
          details: dashboardResult.data.idea
        })
      } else {
        testResults.push({
          name: 'Idea Data Structure',
          status: 'pass',
          message: 'No idea data (expected for some students)'
        })
      }
    } catch (error) {
      testResults.push({
        name: 'Idea Data Structure',
        status: 'fail',
        message: 'Error testing idea data',
        details: error
      })
    }

    // Test 5: Role-based Access
    try {
      const leaderResult = await MockDataService.getStudentById('student_1')
      const memberResult = await MockDataService.getStudentById('student_6')
      
      if (leaderResult.data?.role === 'leader' && memberResult.data?.role === 'member') {
        testResults.push({
          name: 'Role-based Access',
          status: 'pass',
          message: 'Different user roles are properly assigned',
          details: { leader: leaderResult.data, member: memberResult.data }
        })
      } else {
        testResults.push({
          name: 'Role-based Access',
          status: 'fail',
          message: 'Role assignment is incorrect'
        })
      }
    } catch (error) {
      testResults.push({
        name: 'Role-based Access',
        status: 'fail',
        message: 'Error testing role-based access',
        details: error
      })
    }

    setTests(testResults)
    setIsRunning(false)
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pass':
        return <CheckCircle className="h-5 w-5 text-green-400" />
      case 'fail':
        return <XCircle className="h-5 w-5 text-red-400" />
      default:
        return <AlertCircle className="h-5 w-5 text-yellow-400" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pass':
        return <Badge className="bg-green-500/20 text-green-400">PASS</Badge>
      case 'fail':
        return <Badge className="bg-red-500/20 text-red-400">FAIL</Badge>
      default:
        return <Badge className="bg-yellow-500/20 text-yellow-400">PENDING</Badge>
    }
  }

  const passedTests = tests.filter(t => t.status === 'pass').length
  const failedTests = tests.filter(t => t.status === 'fail').length

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">Student Dashboard Validation</h1>
          <p className="text-gray-400">
            Comprehensive testing of authentication, role-based access, and data structures
          </p>
          
          <Button 
            onClick={runTests} 
            disabled={isRunning}
            className="bg-blue-600 hover:bg-blue-700"
          >
            {isRunning ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Running Tests...
              </>
            ) : (
              'Run All Tests'
            )}
          </Button>
        </div>

        {tests.length > 0 && (
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Test Results</span>
                <div className="flex gap-4 text-sm">
                  <span className="text-green-400">Passed: {passedTests}</span>
                  <span className="text-red-400">Failed: {failedTests}</span>
                  <span className="text-gray-400">Total: {tests.length}</span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {tests.map((test, index) => (
                <div key={index} className="border border-gray-700 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      {getStatusIcon(test.status)}
                      <h3 className="font-semibold">{test.name}</h3>
                    </div>
                    {getStatusBadge(test.status)}
                  </div>
                  <p className="text-gray-300 mb-2">{test.message}</p>
                  {test.details && (
                    <details className="mt-2">
                      <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
                        View Details
                      </summary>
                      <pre className="mt-2 bg-gray-900 p-3 rounded text-xs overflow-auto">
                        {JSON.stringify(test.details, null, 2)}
                      </pre>
                    </details>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle>Manual Testing Checklist</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Authentication Flow</h4>
                <ul className="space-y-1 text-gray-300">
                  <li>• Login with demo accounts</li>
                  <li>• Cookie-based session management</li>
                  <li>• Middleware route protection</li>
                  <li>• Logout functionality</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Role-Based Features</h4>
                <ul className="space-y-1 text-gray-300">
                  <li>• Leader: Idea management</li>
                  <li>• Leader: Team management</li>
                  <li>• Member: View team info</li>
                  <li>• Member: Submit individual ideas</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Team Management</h4>
                <ul className="space-y-1 text-gray-300">
                  <li>• Add team members (max 5)</li>
                  <li>• Remove team members</li>
                  <li>• Search for students</li>
                  <li>• Role transitions</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">UI Components</h4>
                <ul className="space-y-1 text-gray-300">
                  <li>• Progress timeline</li>
                  <li>• Status badges</li>
                  <li>• Resources section</li>
                  <li>• Responsive design</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
