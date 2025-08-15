'use client'

import React, { useState } from 'react'
import { useStudentAuth } from '@/contexts/AuthContext'
import { MockDataService } from '@/lib/mockData'

export default function DebugAuth() {
  const { student, isStudentAuthenticated, studentLogin, isLoading } = useStudentAuth()
  const [testEmail, setTestEmail] = useState('arjun.sharma@raghuenggcollege.in')

  const handleTestLogin = async () => {
    console.log('Testing login with:', testEmail)
    const result = await studentLogin(testEmail, 'demo')
    console.log('Login result:', result)
  }

  const handleTestMockData = async () => {
    console.log('Testing mock data...')
    MockDataService.initializeMockData()
    const result = await MockDataService.getStudentByEmail(testEmail)
    console.log('Mock data result:', result)
  }

  const handleClearStorage = () => {
    localStorage.clear()
    window.location.reload()
  }

  return (
    <div className="min-h-screen p-8 bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">Authentication Debug</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Current State */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Current Auth State</h2>
          <div className="space-y-2">
            <div><strong>Loading:</strong> {isLoading ? 'Yes' : 'No'}</div>
            <div><strong>Authenticated:</strong> {isStudentAuthenticated ? 'Yes' : 'No'}</div>
            <div><strong>Student:</strong></div>
            <pre className="bg-gray-700 p-3 rounded text-sm overflow-auto">
              {JSON.stringify(student, null, 2)}
            </pre>
          </div>
        </div>

        {/* Test Actions */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Test Actions</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Test Email:</label>
              <input
                type="email"
                value={testEmail}
                onChange={(e) => setTestEmail(e.target.value)}
                className="w-full p-2 bg-gray-700 rounded border border-gray-600"
              />
            </div>
            
            <button
              onClick={handleTestLogin}
              className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded"
              disabled={isLoading}
            >
              {isLoading ? 'Testing...' : 'Test Login'}
            </button>
            
            <button
              onClick={handleTestMockData}
              className="w-full bg-green-600 hover:bg-green-700 p-2 rounded"
            >
              Test Mock Data
            </button>
            
            <button
              onClick={handleClearStorage}
              className="w-full bg-red-600 hover:bg-red-700 p-2 rounded"
            >
              Clear Storage & Reload
            </button>
          </div>
        </div>

        {/* LocalStorage Debug */}
        <div className="bg-gray-800 p-6 rounded-lg md:col-span-2">
          <h2 className="text-xl font-bold mb-4">LocalStorage Contents</h2>
          <pre className="bg-gray-700 p-3 rounded text-sm overflow-auto">
            {JSON.stringify({
              student: localStorage.getItem('student'),
              user: localStorage.getItem('user'),
              admin: localStorage.getItem('admin')
            }, null, 2)}
          </pre>
        </div>
      </div>

      {/* Quick Links */}
      <div className="mt-8 space-x-4">
        <a href="/student-login" className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded inline-block">
          Go to Student Login
        </a>
        <a href="/dashboard" className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded inline-block">
          Go to Dashboard
        </a>
        <a href="/test-dashboard" className="bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded inline-block">
          Go to Test Dashboard
        </a>
      </div>
    </div>
  )
}
