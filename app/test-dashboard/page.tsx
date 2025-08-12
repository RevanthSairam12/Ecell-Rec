'use client'

import React from 'react'
import { useStudentAuth } from '@/contexts/AuthContext'

export default function TestDashboard() {
  const { student, isStudentAuthenticated, isLoading } = useStudentAuth()

  return (
    <div className="min-h-screen p-8 bg-gray-900 text-white">
      <h1 className="text-2xl font-bold mb-4">Test Dashboard</h1>
      <div className="space-y-4">
        <div>
          <strong>Loading:</strong> {isLoading ? 'Yes' : 'No'}
        </div>
        <div>
          <strong>Authenticated:</strong> {isStudentAuthenticated ? 'Yes' : 'No'}
        </div>
        <div>
          <strong>Student Data:</strong>
          <pre className="bg-gray-800 p-4 rounded mt-2">
            {JSON.stringify(student, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  )
}
