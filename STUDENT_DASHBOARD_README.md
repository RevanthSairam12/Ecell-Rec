# 🎓 E-Cell REC Student Dashboard

A comprehensive student dashboard for the E-Cell REC startup submission portal, featuring role-based access control, team management, and idea submission tracking.

## 🌟 Features

### 🔐 Authentication & Roles
- **Student Authentication**: Secure login with college email or roll number
- **Role-Based Access**: Dynamic UI based on user role (Team Leader vs Member)
- **Session Management**: Persistent login state with localStorage

### 👑 Team Leader Dashboard
- **Overview**: Welcome message, submission stats, team size, feedback count
- **Idea Management**: Submit, edit, and track startup ideas with status badges
- **Team Management**: Add/remove members, search by roll/email, enforce team limits
- **Progress Timeline**: Visual tracking from submission to approval/rejection
- **Resources**: Access to helpful guides and templates

### 👥 Team Member Dashboard  
- **Overview**: Role-specific stats and team information
- **Idea View**: Read-only access to team's startup concept
- **Team Info**: View team members and leader details
- **Individual Submission**: Option to submit ideas if not in a team (auto-promotes to leader)
- **Resources**: Same resource access as leaders

## 🎨 UI Design

### Dark Theme Matching Admin Panel
- **Consistent Styling**: Matches existing admin dashboard design
- **Color Scheme**: Purple primary (#8B5CF6), dark backgrounds, gradient accents
- **Components**: Same card patterns, buttons, and layout structure
- **Responsive**: Works on desktop, tablet, and mobile devices

### Visual Elements
- **Status Badges**: Color-coded for different idea statuses
- **Role Badges**: Visual distinction between leaders and members  
- **Progress Timeline**: Step-by-step visual progress tracking
- **Animated Backgrounds**: Subtle gradient orbs for visual appeal
- **Loading States**: Smooth loading indicators throughout

## 🗄️ Database Schema

### Core Tables
```sql
-- Students table
students {
  id: uuid (PK)
  name: string
  roll_number: string (unique)
  email: string (unique)
  role: 'leader' | 'member'
  team_id: uuid (FK → teams.id)
  created_at: timestamp
  updated_at: timestamp
}

-- Teams table  
teams {
  id: uuid (PK)
  leader_id: uuid (FK → students.id)
  created_at: timestamp
  updated_at: timestamp
}

-- Team Members junction table
team_members {
  id: uuid (PK)
  team_id: uuid (FK → teams.id)
  student_id: uuid (FK → students.id)
  created_at: timestamp
}

-- Ideas table
ideas {
  id: uuid (PK)
  team_id: uuid (FK → teams.id)
  title: string
  description: text
  status: 'submitted' | 'under_review' | 'approved' | 'rejected'
  feedback: text (optional)
  created_at: timestamp
  updated_at: timestamp
}
```

## 🚀 Getting Started

### 1. Access the Dashboard
Navigate to `/student-login` to access the login page with demo accounts.

### 2. Demo Accounts
Use these pre-configured accounts for testing:

**Team Leaders:**
- Arjun Sharma: `arjun.sharma@raghuenggcollege.in` / `23981A001`
- Priya Patel: `priya.patel@raghuenggcollege.in` / `23981A002`

**Team Members:**
- Rohan Verma: `rohan.verma@raghuenggcollege.in` / `23981A011`
- Kavya Menon: `kavya.menon@raghuenggcollege.in` / `23981A012`

**Individual Student:**
- Nikhil Pandey: `nikhil.pandey@raghuenggcollege.in` / `23981A015`

### 3. Dashboard Access
After login, you'll be redirected to `/dashboard` with role-appropriate content.

## 🔧 Technical Implementation

### File Structure
```
app/dashboard/
├── page.tsx                 # Main dashboard page
├── layout.tsx              # Dashboard layout with dark theme
└── dashboard.css           # Custom styling matching admin panel

components/dashboard/
├── DashboardSidebar.tsx    # Role-based navigation sidebar
├── DashboardHeader.tsx     # Header with user info and stats
└── RoleBasedContent.tsx    # Dynamic content based on user role

contexts/
└── AuthContext.tsx         # Extended with student authentication

lib/
├── supabase.ts            # Database schema and service functions
└── mockData.ts            # Mock data for development/testing
```

### Key Components

#### DashboardSidebar
- Role-based navigation menu
- Student profile display with role badges
- Dynamic menu items based on user permissions
- Collapsible design matching admin sidebar

#### DashboardHeader  
- Personalized greeting with time-based messages
- Quick stats display (team size, idea status, etc.)
- User dropdown with profile info and logout
- Responsive design for mobile devices

#### RoleBasedContent
- Dynamic content rendering based on user role
- Leader: Idea management, team management, progress tracking
- Member: Idea viewing, team info, individual submission option
- Smooth transitions between different sections

## 🧪 Testing Scenarios

### Scenario 1: Team Leader Experience
1. Login as Arjun Sharma (Team Leader)
2. View overview with team stats and submission status
3. Navigate to idea management to edit existing idea
4. Check team management to see current members
5. View progress timeline showing submission status

### Scenario 2: Team Member Experience  
1. Login as Rohan Verma (Team Member)
2. View overview showing team membership status
3. Navigate to team idea to see read-only idea details
4. Check team info to see leader and other members
5. Note limited editing capabilities

### Scenario 3: Individual Student
1. Login as Nikhil Pandey (Individual)
2. View overview showing no team membership
3. Click "Submit Your Idea" to become a team leader
4. Experience role transition and dashboard update
5. Access new leader features after promotion

## 🔄 Business Logic

### Role Transitions
- **Member → Leader**: When submitting an individual idea
- **Automatic Team Creation**: New team created when member becomes leader
- **Database Updates**: Role and team_id updated in students table

### Team Management Rules
- **Maximum Team Size**: 5 members (including leader)
- **Unique Membership**: Students cannot belong to multiple teams
- **Leader Permissions**: Only leaders can add/remove members
- **Member Permissions**: Members can view but not edit team ideas

### Idea Submission Workflow
1. **Draft**: Idea being prepared (not implemented yet)
2. **Submitted**: Idea submitted for review
3. **Under Review**: Admin reviewing the submission  
4. **Approved**: Idea accepted for next stage
5. **Rejected**: Idea needs revision or rejected

## 🎯 Future Enhancements

### Phase 2 Features
- **Idea Editing**: Full CRUD operations for ideas
- **Team Chat**: Communication between team members
- **File Uploads**: Pitch decks, documents, prototypes
- **Notifications**: Real-time updates on idea status
- **Analytics**: Detailed progress and performance metrics

### Phase 3 Features
- **Mentorship**: Connect with industry mentors
- **Competitions**: Participate in startup competitions
- **Funding**: Track funding opportunities and applications
- **Alumni Network**: Connect with successful E-Cell alumni

## 🛠️ Development Notes

### Mock Data
Currently using MockDataService for development. Replace with actual Supabase calls in production:
- `MockDataService.getStudentDashboardData()` → `DatabaseService.getStudentDashboardData()`
- `MockDataService.getStudentByEmail()` → `DatabaseService.getStudentByEmail()`

### Authentication
Student authentication extends the existing AuthContext with:
- `studentLogin()`, `studentLogout()`, `studentRegister()`
- `updateStudentRole()` for role transitions
- Separate session management from regular users

### Styling
Dashboard uses the same CSS variables and component patterns as admin panel:
- Dark theme with purple accents
- Gradient backgrounds and glow effects
- Consistent card and button styling
- Responsive design patterns

## 📱 Mobile Responsiveness

- **Collapsible Sidebar**: Auto-collapse on mobile devices
- **Responsive Grid**: Stats cards stack on smaller screens  
- **Touch-Friendly**: Larger touch targets for mobile users
- **Optimized Navigation**: Mobile-first navigation patterns

---

**Built with ❤️ for E-Cell REC entrepreneurs**
