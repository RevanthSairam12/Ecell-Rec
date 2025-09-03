import { User, Registration, Submission, Event, Student, Team, TeamMember, Idea } from './supabase'

// Mock data for development and testing
export class MockDataService {
  private static users: User[] = []
  private static registrations: Registration[] = []
  private static submissions: Submission[] = []
  private static events: Event[] = []
  private static students: Student[] = []
  private static teams: Team[] = []
  private static teamMembers: TeamMember[] = []
  private static ideas: Idea[] = []

  // Initialize mock data
  static initializeMockData() {
    this.generateMockUsers()
    this.generateMockRegistrations()
    this.generateMockSubmissions()
    this.generateMockEvents()
    this.generateMockStudents()
    this.generateMockTeams()
    this.generateMockIdeas()
  }

  private static generateMockUsers() {
    const branches = [
      'Computer Science Engineering',
      'Electronics & Communication',
      'Mechanical Engineering',
      'Civil Engineering',
      'Electrical Engineering'
    ]
    const years = ['1st Year', '2nd Year', '3rd Year', '4th Year']
    const statuses: ('active' | 'pending' | 'inactive')[] = ['active', 'pending', 'inactive']

    this.users = Array.from({ length: 50 }, (_, i) => ({
      id: `user_${i + 1}`,
      email: `student${i + 1}@raghuenggcollege.in`,
      full_name: `Student ${i + 1}`,
      roll_number: `23981A${String(i + 1).padStart(3, '0')}`,
      branch: branches[i % branches.length],
      year: years[i % years.length],
      graduation_year: String(2024 + (i % 4)),
      phone_number: `98765${String(i + 1).padStart(5, '0')}`,
      created_at: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000).toISOString(),
      updated_at: new Date().toISOString(),
      last_login: Math.random() > 0.3 ? new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString() : undefined,
      status: statuses[i % statuses.length]
    }))
  }

  private static generateMockRegistrations() {
    this.registrations = this.users.map((user, i) => ({
      id: `reg_${i + 1}`,
      user_id: user.id,
      registration_date: user.created_at,
      status: user.status,
      submission_status: i % 3 === 0 ? 'submitted' : i % 3 === 1 ? 'draft' : 'none',
      created_at: user.created_at,
      updated_at: user.updated_at
    }))
  }

  private static generateMockSubmissions() {
    const startupStages = ['Idea Stage', 'Prototype', 'MVP', 'Early Revenue', 'Growth Stage']
    const submissionStatuses: ('submitted' | 'under_review' | 'approved' | 'rejected')[] = 
      ['submitted', 'under_review', 'approved', 'rejected']

    // Create submissions for users who have submitted
    this.submissions = this.registrations
      .filter(reg => reg.submission_status === 'submitted')
      .map((reg, i) => ({
        id: `sub_${i + 1}`,
        user_id: reg.user_id,
        registration_id: reg.id,
        idea_title: `Innovative Startup Idea ${i + 1}`,
        team_name: `Team Innovation ${i + 1}`,
        team_members: [
          {
            fullName: `Team Member ${i + 1}`,
            rollNumber: `23981A${String(i + 100).padStart(3, '0')}`,
            branch: 'Computer Science Engineering',
            year: '3rd Year',
            phoneNumber: `98765${String(i + 100).padStart(5, '0')}`
          }
        ],
        problem_statement: `This is a detailed problem statement for startup idea ${i + 1}. It addresses a real-world problem that affects many people.`,
        proposed_solution: `Our innovative solution leverages cutting-edge technology to solve the problem mentioned above. We use AI, ML, and modern web technologies.`,
        one_liner_pitch: `Revolutionary solution for problem ${i + 1} using advanced technology.`,
        detailed_explanation: `This is a comprehensive explanation of our startup idea ${i + 1}. We have conducted thorough market research and identified a significant opportunity.`,
        startup_stage: startupStages[i % startupStages.length],
        phone_number: `98765${String(i + 200).padStart(5, '0')}`,
        pitch_deck_url: Math.random() > 0.5 ? `https://drive.google.com/pitch-deck-${i + 1}` : undefined,
        github_link: Math.random() > 0.5 ? `https://github.com/startup-${i + 1}` : undefined,
        drive_link: Math.random() > 0.5 ? `https://drive.google.com/folder-${i + 1}` : undefined,
        figma_link: Math.random() > 0.5 ? `https://figma.com/design-${i + 1}` : undefined,
        consent: true,
        submitted_at: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString(),
        status: submissionStatuses[i % submissionStatuses.length],
        created_at: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString(),
        updated_at: new Date().toISOString()
      }))
  }

  private static generateMockEvents() {
    const eventTypes = [
      { title: 'Startup Workshop', color: '#3b82f6' },
      { title: 'Pitch Competition', color: '#ef4444' },
      { title: 'Networking Event', color: '#10b981' },
      { title: 'Mentorship Session', color: '#f59e0b' },
      { title: 'Demo Day', color: '#8b5cf6' }
    ]

    this.events = Array.from({ length: 20 }, (_, i) => {
      const eventType = eventTypes[i % eventTypes.length]
      const eventDate = new Date(Date.now() + Math.random() * 90 * 24 * 60 * 60 * 1000)
      
      return {
        id: `event_${i + 1}`,
        title: `${eventType.title} ${i + 1}`,
        description: `This is a detailed description for ${eventType.title} ${i + 1}. Join us for an exciting session!`,
        date: eventDate.toISOString().split('T')[0],
        time: `${String(9 + (i % 8)).padStart(2, '0')}:00`,
        location: `Venue ${i + 1}, E-Cell REC`,
        attendees: Array.from({ length: Math.floor(Math.random() * 50) + 10 }, (_, j) => `student${j + 1}@raghuenggcollege.in`),
        is_holiday: false,
        is_public_holiday: false,
        color: eventType.color,
        created_by: 'admin',
        created_at: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString(),
        updated_at: new Date().toISOString()
      }
    })

    // Add some holidays
    const holidays = [
      { title: 'Independence Day', date: '2024-08-15', color: '#ff6b6b' },
      { title: 'Gandhi Jayanti', date: '2024-10-02', color: '#ff6b6b' },
      { title: 'Diwali', date: '2024-11-01', color: '#ff6b6b' }
    ]

    holidays.forEach((holiday, i) => {
      this.events.push({
        id: `holiday_${i + 1}`,
        title: holiday.title,
        description: `${holiday.title} - National Holiday`,
        date: holiday.date,
        time: '00:00',
        location: 'National Holiday',
        attendees: [],
        is_holiday: true,
        is_public_holiday: true,
        color: holiday.color,
        created_by: 'system',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      })
    })
  }

  // Mock API methods that simulate Supabase calls
  static async getAllUsers() {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500))
    return { data: this.users, error: null }
  }

  static async getUserByEmail(email: string) {
    await new Promise(resolve => setTimeout(resolve, 300))
    const user = this.users.find(u => u.email === email)
    return { data: user || null, error: user ? null : new Error('User not found') }
  }

  static async getUserByRollNumber(rollNumber: string) {
    await new Promise(resolve => setTimeout(resolve, 300))
    const user = this.users.find(u => u.roll_number === rollNumber)
    return { data: user || null, error: user ? null : new Error('User not found') }
  }

  static async createUser(userData: Omit<User, 'id' | 'created_at' | 'updated_at'>) {
    await new Promise(resolve => setTimeout(resolve, 500))
    const newUser: User = {
      ...userData,
      id: `user_${this.users.length + 1}`,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
    this.users.push(newUser)
    return { data: newUser, error: null }
  }

  static async updateUser(userId: string, userData: Partial<Omit<User, 'id' | 'created_at'>>) {
    await new Promise(resolve => setTimeout(resolve, 500))
    const userIndex = this.users.findIndex(u => u.id === userId)
    if (userIndex === -1) {
      return { data: null, error: new Error('User not found') }
    }

    this.users[userIndex] = {
      ...this.users[userIndex],
      ...userData,
      updated_at: new Date().toISOString()
    }
    return { data: this.users[userIndex], error: null }
  }

  static async getAllRegistrations() {
    await new Promise(resolve => setTimeout(resolve, 500))
    // Join with user data
    const registrationsWithUsers = this.registrations.map(reg => ({
      ...reg,
      users: this.users.find(u => u.id === reg.user_id)
    }))
    return { data: registrationsWithUsers, error: null }
  }

  static async createRegistration(registrationData: Omit<Registration, 'id' | 'created_at' | 'updated_at'>) {
    await new Promise(resolve => setTimeout(resolve, 500))
    const newRegistration: Registration = {
      ...registrationData,
      id: `reg_${this.registrations.length + 1}`,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
    this.registrations.push(newRegistration)
    return { data: newRegistration, error: null }
  }

  static async createSubmission(submissionData: Omit<Submission, 'id' | 'created_at' | 'updated_at'>) {
    await new Promise(resolve => setTimeout(resolve, 500))
    const newSubmission: Submission = {
      ...submissionData,
      id: `sub_${this.submissions.length + 1}`,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
    this.submissions.push(newSubmission)
    return { data: newSubmission, error: null }
  }

  static async getSubmissionByUserId(userId: string) {
    await new Promise(resolve => setTimeout(resolve, 300))
    const submission = this.submissions.find(s => s.user_id === userId)
    return { data: submission || null, error: submission ? null : new Error('Submission not found') }
  }

  static async getAllEvents() {
    await new Promise(resolve => setTimeout(resolve, 500))
    return { data: this.events, error: null }
  }

  static async createEvent(eventData: Omit<Event, 'id' | 'created_at' | 'updated_at'>) {
    await new Promise(resolve => setTimeout(resolve, 500))
    const newEvent: Event = {
      ...eventData,
      id: `event_${this.events.length + 1}`,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
    this.events.push(newEvent)
    return { data: newEvent, error: null }
  }

  static async updateEvent(id: string, updates: Partial<Event>) {
    await new Promise(resolve => setTimeout(resolve, 500))
    const eventIndex = this.events.findIndex(e => e.id === id)
    if (eventIndex === -1) {
      return { data: null, error: new Error('Event not found') }
    }
    
    this.events[eventIndex] = {
      ...this.events[eventIndex],
      ...updates,
      updated_at: new Date().toISOString()
    }
    return { data: this.events[eventIndex], error: null }
  }

  static async deleteEvent(id: string) {
    await new Promise(resolve => setTimeout(resolve, 500))
    const eventIndex = this.events.findIndex(e => e.id === id)
    if (eventIndex === -1) {
      return { error: new Error('Event not found') }
    }
    
    this.events.splice(eventIndex, 1)
    return { error: null }
  }

  static async authenticateAdmin(username: string, password: string) {
    await new Promise(resolve => setTimeout(resolve, 300))
    if (username === 'admin' && password === 'ecell2024') {
      return {
        data: {
          id: 'admin-1',
          username: 'admin',
          email: 'admin@ecellrec.com',
          role: 'admin' as const,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        },
        error: null
      }
    } else {
      return { data: null, error: new Error('Invalid credentials') }
    }
  }

  // Get current data for export/display
  static getCurrentUsers() {
    return this.users
  }

  static getCurrentRegistrations() {
    return this.registrations
  }

  static getCurrentSubmissions() {
    return this.submissions
  }

  static getCurrentEvents() {
    return this.events
  }

  static getCurrentStudents() {
    return this.students
  }

  static getCurrentTeams() {
    return this.teams
  }

  static getCurrentIdeas() {
    return this.ideas
  }

  // Student mock data generation
  private static generateMockStudents() {
    const names = [
      'Arjun Sharma', 'Priya Patel', 'Rahul Kumar', 'Sneha Singh', 'Vikram Reddy',
      'Ananya Gupta', 'Karthik Nair', 'Pooja Agarwal', 'Siddharth Joshi', 'Meera Iyer',
      'Rohan Verma', 'Kavya Menon', 'Aditya Rao', 'Shreya Bhatt', 'Nikhil Pandey'
    ]

    const branches = [
      'Computer Science Engineering',
      'Electronics & Communication',
      'Mechanical Engineering',
      'Civil Engineering',
      'Electrical Engineering'
    ]

    this.students = names.map((name, i) => ({
      id: `student_${i + 1}`,
      name,
      roll_number: `23981A${String(i + 1).padStart(3, '0')}`,
      email: `${name.toLowerCase().replace(/\s+/g, '.')}@raghuenggcollege.in`,
      role: i < 5 ? 'leader' as const : 'member' as const,
      team_id: i < 5 ? `team_${i + 1}` : i < 10 ? `team_${Math.floor(i / 2)}` : undefined,
      created_at: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString(),
      updated_at: new Date().toISOString()
    }))
  }

  private static generateMockTeams() {
    this.teams = Array.from({ length: 5 }, (_, i) => ({
      id: `team_${i + 1}`,
      leader_id: `student_${i + 1}`,
      created_at: new Date(Date.now() - Math.random() * 20 * 24 * 60 * 60 * 1000).toISOString(),
      updated_at: new Date().toISOString()
    }))

    // Generate team members
    this.teamMembers = []
    for (let teamIndex = 0; teamIndex < 5; teamIndex++) {
      const teamId = `team_${teamIndex + 1}`
      // Add 1-2 members per team (excluding leader)
      const memberCount = Math.floor(Math.random() * 2) + 1
      for (let memberIndex = 0; memberIndex < memberCount; memberIndex++) {
        const studentIndex = 5 + teamIndex * 2 + memberIndex
        if (studentIndex < 15) {
          this.teamMembers.push({
            id: `tm_${this.teamMembers.length + 1}`,
            team_id: teamId,
            student_id: `student_${studentIndex + 1}`,
            created_at: new Date(Date.now() - Math.random() * 15 * 24 * 60 * 60 * 1000).toISOString()
          })
        }
      }
    }
  }

  private static generateMockIdeas() {
    const ideaTitles = [
      'EcoTrack - Sustainable Living App',
      'StudyBuddy - AI-Powered Learning Assistant',
      'FarmTech - Smart Agriculture Solutions',
      'HealthHub - Telemedicine Platform',
      'SkillSwap - Peer-to-Peer Learning Network'
    ]

    const descriptions = [
      'A comprehensive app that helps users track their carbon footprint and adopt sustainable practices through gamification and community challenges.',
      'An AI-powered platform that personalizes learning experiences for students, providing adaptive content and real-time progress tracking.',
      'IoT-based solutions for farmers to monitor crop health, optimize irrigation, and predict weather patterns for better yield.',
      'A telemedicine platform connecting patients with healthcare providers, featuring appointment scheduling, prescription management, and health monitoring.',
      'A platform where students can exchange skills and knowledge, creating a collaborative learning environment beyond traditional classrooms.'
    ]

    const statuses = ['submitted', 'under_review', 'approved', 'rejected'] as const

    this.ideas = Array.from({ length: 5 }, (_, i) => ({
      id: `idea_${i + 1}`,
      team_id: `team_${i + 1}`,
      title: ideaTitles[i],
      description: descriptions[i],
      status: statuses[i % statuses.length],
      feedback: i % 2 === 0 ? 'Great concept! Please provide more details on the technical implementation and market analysis.' : undefined,
      created_at: new Date(Date.now() - Math.random() * 10 * 24 * 60 * 60 * 1000).toISOString(),
      updated_at: new Date().toISOString()
    }))
  }

  // Student-specific methods
  static async getStudentByEmail(email: string) {
    await new Promise(resolve => setTimeout(resolve, 300))
    const student = this.students.find(s => s.email === email)
    return { data: student || null, error: student ? null : new Error('Student not found') }
  }

  static async getStudentByRollNumber(rollNumber: string) {
    await new Promise(resolve => setTimeout(resolve, 300))
    const student = this.students.find(s => s.roll_number === rollNumber)
    return { data: student || null, error: student ? null : new Error('Student not found') }
  }

  static async getStudentById(id: string) {
    await new Promise(resolve => setTimeout(resolve, 300))
    const student = this.students.find(s => s.id === id)
    return { data: student || null, error: student ? null : new Error('Student not found') }
  }

  static async getStudentDashboardData(studentId: string) {
    await new Promise(resolve => setTimeout(resolve, 500))

    const student = this.students.find(s => s.id === studentId)
    if (!student) {
      return { data: null, error: new Error('Student not found') }
    }

    let team = null
    let idea = null

    if (student.team_id) {
      team = this.teams.find(t => t.id === student.team_id)
      if (team) {
        // Add team members and leader info
        const teamMembers = this.teamMembers
          .filter(tm => tm.team_id === team.id)
          .map(tm => ({
            ...tm,
            students: this.students.find(s => s.id === tm.student_id)
          }))

        const leader = this.students.find(s => s.id === team.leader_id)

        team = {
          ...team,
          team_members: teamMembers,
          leader
        }

        // Get idea for the team
        idea = this.ideas.find(i => i.team_id === team.id)
        if (idea) {
          team.ideas = [idea]
        }
      }
    }

    return {
      data: {
        student,
        team,
        idea
      },
      error: null
    }
  }

  // Create student record
  static async createStudent(studentData: Omit<Student, 'id' | 'created_at' | 'updated_at'>) {
    await new Promise(resolve => setTimeout(resolve, 300))
    const newStudent: Student = {
      ...studentData,
      id: `student_${this.students.length + 1}`,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
    this.students.push(newStudent)
    return { data: newStudent, error: null }
  }

  // Create team record
  static async createTeam(teamData: Omit<Team, 'id' | 'created_at' | 'updated_at'>) {
    await new Promise(resolve => setTimeout(resolve, 300))
    const newTeam: Team = {
      ...teamData,
      id: `team_${this.teams.length + 1}`,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
    this.teams.push(newTeam)
    return { data: newTeam, error: null }
  }

  // Create idea record
  static async createIdea(ideaData: Omit<Idea, 'id' | 'created_at' | 'updated_at'>) {
    await new Promise(resolve => setTimeout(resolve, 300))
    const newIdea: Idea = {
      ...ideaData,
      id: `idea_${this.ideas.length + 1}`,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
    this.ideas.push(newIdea)
    return { data: newIdea, error: null }
  }

  // Create team member record
  static async createTeamMember(teamMemberData: Omit<TeamMember, 'id' | 'created_at'>) {
    await new Promise(resolve => setTimeout(resolve, 300))
    const newTeamMember: TeamMember = {
      ...teamMemberData,
      id: `tm_${this.teamMembers.length + 1}`,
      created_at: new Date().toISOString()
    }
    this.teamMembers.push(newTeamMember)
    return { data: newTeamMember, error: null }
  }

  // Update student record
  static async updateStudent(studentId: string, updates: Partial<Student>) {
    await new Promise(resolve => setTimeout(resolve, 300))
    const studentIndex = this.students.findIndex(s => s.id === studentId)
    if (studentIndex === -1) {
      return { data: null, error: new Error('Student not found') }
    }

    this.students[studentIndex] = {
      ...this.students[studentIndex],
      ...updates,
      updated_at: new Date().toISOString()
    }

    return { data: this.students[studentIndex], error: null }
  }
}

// Initialize mock data when the module is imported
MockDataService.initializeMockData()

export default MockDataService
