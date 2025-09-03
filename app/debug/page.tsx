'use client'

import React, { useState, useEffect } from 'react'
import { MockDataService } from '@/lib/mockData'

export default function DebugPage() {
  const [data, setData] = useState<any>({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      try {
        // Get all current data from MockDataService
        const users = MockDataService.getCurrentUsers()
        const students = MockDataService.getCurrentStudents()
        const teams = MockDataService.getCurrentTeams()
        const ideas = MockDataService.getCurrentIdeas()
        
        setData({
          users: users.slice(0, 5), // Show first 5
          students: students.slice(0, 5),
          teams: teams.slice(0, 5),
          ideas: ideas.slice(0, 5),
          totalCounts: {
            users: users.length,
            students: students.length,
            teams: teams.length,
            ideas: ideas.length
          }
        })
      } catch (error) {
        console.error('Error loading data:', error)
        setData({ error: error.message })
      } finally {
        setLoading(false)
      }
    }
    
    loadData()
  }, [])

  const testCreateStudent = async () => {
    try {
      const result = await MockDataService.createStudent({
        name: 'Debug Test Student',
        roll_number: 'DEBUG001',
        email: 'debug@raghuenggcollege.in',
        role: 'leader',
        team_id: undefined
      })
      
      alert('Student created: ' + JSON.stringify(result, null, 2))
      window.location.reload()
    } catch (error) {
      alert('Error: ' + error.message)
    }
  }

  if (loading) {
    return <div style={{ padding: '20px' }}>Loading debug data...</div>
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'monospace', fontSize: '14px' }}>
      <h1>🔧 Debug Page - MockDataService Status</h1>
      
      <button 
        onClick={testCreateStudent}
        style={{ 
          padding: '10px 20px', 
          marginBottom: '20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Test Create Student
      </button>

      {data.error ? (
        <div style={{ color: 'red', padding: '20px', backgroundColor: '#ffe6e6' }}>
          <h2>❌ Error</h2>
          <pre>{data.error}</pre>
        </div>
      ) : (
        <div>
          <h2>📊 Data Counts</h2>
          <div style={{ backgroundColor: '#f0f0f0', padding: '15px', marginBottom: '20px' }}>
            <div>👥 Users: {data.totalCounts?.users || 0}</div>
            <div>🎓 Students: {data.totalCounts?.students || 0}</div>
            <div>👨‍👩‍👧‍👦 Teams: {data.totalCounts?.teams || 0}</div>
            <div>💡 Ideas: {data.totalCounts?.ideas || 0}</div>
          </div>

          <h2>👥 Sample Users</h2>
          <pre style={{ backgroundColor: '#f5f5f5', padding: '10px', overflow: 'auto', maxHeight: '200px' }}>
            {JSON.stringify(data.users, null, 2)}
          </pre>

          <h2>🎓 Sample Students</h2>
          <pre style={{ backgroundColor: '#f5f5f5', padding: '10px', overflow: 'auto', maxHeight: '200px' }}>
            {JSON.stringify(data.students, null, 2)}
          </pre>

          <h2>👨‍👩‍👧‍👦 Sample Teams</h2>
          <pre style={{ backgroundColor: '#f5f5f5', padding: '10px', overflow: 'auto', maxHeight: '200px' }}>
            {JSON.stringify(data.teams, null, 2)}
          </pre>

          <h2>💡 Sample Ideas</h2>
          <pre style={{ backgroundColor: '#f5f5f5', padding: '10px', overflow: 'auto', maxHeight: '200px' }}>
            {JSON.stringify(data.ideas, null, 2)}
          </pre>
        </div>
      )}
    </div>
  )
}
