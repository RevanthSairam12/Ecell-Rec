'use client'

import React, { useState } from 'react'
import { MockDataService } from '@/lib/mockData'

export default function SimpleTestPage() {
  const [result, setResult] = useState<string>('')
  const [loading, setLoading] = useState(false)

  const testBasicFlow = async () => {
    setLoading(true)
    setResult('Testing...')
    
    try {
      // Test 1: Create a user
      const userResult = await MockDataService.createUser({
        email: 'test@raghuenggcollege.in',
        full_name: 'Test User',
        roll_number: 'TEST001',
        branch: 'CSE',
        year: '3rd Year',
        graduation_year: '2025',
        phone_number: '1234567890',
        status: 'active'
      })
      
      if (userResult.error) {
        throw new Error('User creation failed')
      }
      
      setResult(prev => prev + '\n✅ User created successfully')
      
      // Test 2: Create student
      const studentResult = await MockDataService.createStudent({
        name: 'Test User',
        roll_number: 'TEST001',
        email: 'test@raghuenggcollege.in',
        role: 'leader',
        team_id: undefined
      })
      
      if (studentResult.error) {
        throw new Error('Student creation failed')
      }
      
      setResult(prev => prev + '\n✅ Student created successfully')
      
      // Test 3: Create team
      const teamResult = await MockDataService.createTeam({
        leader_id: studentResult.data!.id
      })
      
      if (teamResult.error) {
        throw new Error('Team creation failed')
      }
      
      setResult(prev => prev + '\n✅ Team created successfully')
      
      // Test 4: Create idea
      const ideaResult = await MockDataService.createIdea({
        team_id: teamResult.data!.id,
        title: 'Test Idea',
        description: 'This is a test idea description',
        status: 'submitted'
      })
      
      if (ideaResult.error) {
        throw new Error('Idea creation failed')
      }
      
      setResult(prev => prev + '\n✅ Idea created successfully')
      
      // Test 5: Get dashboard data
      const dashboardResult = await MockDataService.getStudentDashboardData(studentResult.data!.id)
      
      if (dashboardResult.error) {
        throw new Error('Dashboard data retrieval failed')
      }
      
      setResult(prev => prev + '\n✅ Dashboard data retrieved successfully')
      setResult(prev => prev + '\n\n🎉 ALL TESTS PASSED!')
      setResult(prev => prev + '\n\nDashboard Data:')
      setResult(prev => prev + '\n' + JSON.stringify(dashboardResult.data, null, 2))
      
    } catch (error) {
      setResult(prev => prev + '\n❌ Error: ' + error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'monospace' }}>
      <h1>Simple Registration → Dashboard Flow Test</h1>
      <button 
        onClick={testBasicFlow} 
        disabled={loading}
        style={{ 
          padding: '10px 20px', 
          fontSize: '16px', 
          backgroundColor: loading ? '#ccc' : '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: loading ? 'not-allowed' : 'pointer'
        }}
      >
        {loading ? 'Testing...' : 'Run Test'}
      </button>
      
      <pre style={{ 
        marginTop: '20px', 
        padding: '15px', 
        backgroundColor: '#f5f5f5', 
        border: '1px solid #ddd',
        borderRadius: '4px',
        whiteSpace: 'pre-wrap',
        maxHeight: '500px',
        overflow: 'auto'
      }}>
        {result || 'Click "Run Test" to start testing the flow...'}
      </pre>
    </div>
  )
}
