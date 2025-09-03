'use client'

import React, { useState } from 'react'
import { useStudentAuth } from '@/contexts/AuthContext'
import { DatabaseService } from '@/lib/supabase'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { useToast } from '@/hooks/use-toast'
import { Loader2 } from 'lucide-react'
import {
  Crown,
  User,
  Lightbulb,
  Users,
  TrendingUp,
  BookOpen,
  Plus,
  Edit,
  Eye,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Sparkles,
  Target,
  FileText,
  ExternalLink,
  UserPlus,
  Trash2,
  X,
  Settings,
  Bell,
  Shield,
  AlertTriangle
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface RoleBasedContentProps {
  student: any
  team: any
  idea: any
  onDataUpdate: (data: any) => void
  activeSection?: string
  onSectionChange?: (section: string) => void
}

export function RoleBasedContent({
  student,
  team,
  idea,
  onDataUpdate,
  activeSection: propActiveSection = 'overview',
  onSectionChange
}: RoleBasedContentProps) {
  const { updateStudentRole } = useStudentAuth()
  const { toast } = useToast()
  const [activeSection, setActiveSection] = useState(propActiveSection)
  const [isLoading, setIsLoading] = useState(false)

  // Team management state (moved from renderTeamManagement function)
  const [searchTerm, setSearchTerm] = useState('')
  const [isAddingMember, setIsAddingMember] = useState(false)
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [isSearching, setIsSearching] = useState(false)

  // Idea management state (moved from renderIdeaManagement function)
  const [isEditing, setIsEditing] = useState(false)
  const [ideaForm, setIdeaForm] = useState({
    title: idea?.title || '',
    description: idea?.description || ''
  })

  // Settings state
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      push: false,
      teamUpdates: true,
      ideaStatus: true,
      deadlineReminders: true
    },
    privacy: {
      profileVisible: true,
      showEmail: false,
      showPhone: false
    },
    preferences: {
      theme: 'dark',
      language: 'en',
      timezone: 'UTC'
    }
  })
  const [settingsModified, setSettingsModified] = useState(false)

  // Update active section when prop changes
  React.useEffect(() => {
    setActiveSection(propActiveSection)
  }, [propActiveSection])

  // Update idea form when idea prop changes
  React.useEffect(() => {
    setIdeaForm({
      title: idea?.title || '',
      description: idea?.description || ''
    })
  }, [idea])

  // Handle section changes
  const handleSectionChange = (section: string) => {
    setActiveSection(section)
    onSectionChange?.(section)
  }

  const isLeader = student?.role === 'leader'
  const isMember = student?.role === 'member'
  const hasTeam = !!team
  const hasIdea = !!idea

  // Handle role transition from member to leader when submitting idea
  const handleBecomeLeader = async () => {
    try {
      setIsLoading(true)
      
      // Create team for the student (leader)
      const teamResult = await DatabaseService.createTeam(student.id)
      if (teamResult.error || !teamResult.data) {
        throw new Error(teamResult.error?.message || 'Failed to create team')
      }

      // Update student role to leader
      const roleResult = await updateStudentRole('leader', teamResult.data.id)
      if (!roleResult.success) {
        throw new Error(roleResult.error || 'Failed to update role')
      }

      // Refresh dashboard data
      const dashboardResult = await DatabaseService.getStudentDashboardData(student.id)
      if (dashboardResult.data) {
        onDataUpdate(dashboardResult.data)
      }

      toast({
        title: 'Success!',
        description: 'You are now a team leader. You can start managing your idea and team.',
      })

      setActiveSection('ideas')
    } catch (error) {
      console.error('Error becoming leader:', error)
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to become team leader',
        variant: 'destructive'
      })
    } finally {
      setIsLoading(false)
    }
  }

  // Overview Section
  const renderOverview = () => {
    const getStats = () => {
      if (isLeader) {
        const teamMemberCount = team?.team_members?.length || 0
        const totalTeamSize = teamMemberCount + 1 // Include leader

        return [
          {
            title: 'Submission Status',
            value: hasIdea ? idea.status.replace('_', ' ').toUpperCase() : 'NOT SUBMITTED',
            subtitle: hasIdea ? `Submitted ${new Date(idea.created_at).toLocaleDateString()}` : 'Ready to submit your idea?',
            icon: hasIdea ? CheckCircle : AlertCircle,
            color: getStatusColor(hasIdea ? idea.status : 'none'),
            bgColor: getStatusBgColor(hasIdea ? idea.status : 'none'),
            trend: hasIdea ? '+1 this month' : null
          },
          {
            title: 'Team Size',
            value: `${totalTeamSize} member${totalTeamSize !== 1 ? 's' : ''}`,
            subtitle: `${teamMemberCount} member${teamMemberCount !== 1 ? 's' : ''} + you`,
            icon: Users,
            color: 'text-blue-400',
            bgColor: 'bg-blue-500/20',
            trend: totalTeamSize < 5 ? `${5 - totalTeamSize} slots available` : 'Team full'
          },
          {
            title: 'Feedback',
            value: idea?.feedback ? 'Available' : 'None',
            subtitle: idea?.feedback ? 'New feedback received' : 'Awaiting review feedback',
            icon: FileText,
            color: idea?.feedback ? 'text-purple-400' : 'text-muted-foreground',
            bgColor: idea?.feedback ? 'bg-purple-500/20' : 'bg-muted/20',
            trend: idea?.feedback ? 'Action required' : null
          },
          {
            title: 'Progress Score',
            value: getProgressScore(),
            subtitle: getProgressMessage(),
            icon: Target,
            color: 'text-green-400',
            bgColor: 'bg-green-500/20',
            trend: 'Keep going!'
          }
        ]
      } else {
        return [
          {
            title: 'Role',
            value: hasTeam ? 'Team Member' : 'Individual',
            subtitle: hasTeam ? `Member of ${team?.leader?.name}'s team` : 'Ready to start your journey?',
            icon: hasTeam ? Users : User,
            color: hasTeam ? 'text-blue-400' : 'text-muted-foreground',
            bgColor: hasTeam ? 'bg-blue-500/20' : 'bg-muted/20'
          },
          {
            title: 'Team Status',
            value: hasTeam ? 'In Team' : 'No Team',
            subtitle: hasTeam ? 'Contributing to team success' : 'Submit an idea to create your team',
            icon: hasTeam ? CheckCircle : AlertCircle,
            color: hasTeam ? 'text-green-400' : 'text-yellow-400',
            bgColor: hasTeam ? 'bg-green-500/20' : 'bg-yellow-500/20'
          },
          {
            title: 'Idea Status',
            value: hasIdea ? idea.status.replace('_', ' ').toUpperCase() : 'NO IDEA',
            subtitle: hasIdea ? `Team idea: ${idea.title}` : 'No team idea yet',
            icon: hasIdea ? Lightbulb : AlertCircle,
            color: hasIdea ? 'text-purple-400' : 'text-muted-foreground',
            bgColor: hasIdea ? 'bg-purple-500/20' : 'bg-muted/20'
          }
        ]
      }
    }

    const getStatusColor = (status: string) => {
      switch (status) {
        case 'submitted': return 'text-blue-400'
        case 'under_review': return 'text-yellow-400'
        case 'approved': return 'text-green-400'
        case 'rejected': return 'text-red-400'
        default: return 'text-muted-foreground'
      }
    }

    const getStatusBgColor = (status: string) => {
      switch (status) {
        case 'submitted': return 'bg-blue-500/20'
        case 'under_review': return 'bg-yellow-500/20'
        case 'approved': return 'bg-green-500/20'
        case 'rejected': return 'bg-red-500/20'
        default: return 'bg-muted/20'
      }
    }

    const getProgressScore = () => {
      let score = 0
      if (hasIdea) score += 40
      if (team?.team_members?.length > 0) score += 30
      if (idea?.feedback) score += 20
      if (idea?.status === 'approved') score += 10
      return `${score}%`
    }

    const getProgressMessage = () => {
      const score = parseInt(getProgressScore())
      if (score >= 80) return 'Excellent progress!'
      if (score >= 60) return 'Good momentum'
      if (score >= 40) return 'Getting started'
      return 'Just beginning'
    }

    const stats = getStats()

    return (
      <div className="space-y-6 animate-fade-in-up">
        {/* Welcome Card */}
        <Card className="card-dark dashboard-card-hover">
          <CardHeader>
            <div className="flex items-center gap-3">
              {isLeader ? (
                <Crown className="h-6 w-6 text-yellow-500" />
              ) : (
                <User className="h-6 w-6 text-blue-500" />
              )}
              <div>
                <CardTitle className="text-xl">
                  Welcome back, {student?.name?.split(' ')[0]}!
                </CardTitle>
                <CardDescription>
                  {isLeader 
                    ? 'Manage your team and startup idea from here'
                    : hasTeam 
                      ? 'View your team\'s progress and contribute to success'
                      : 'Ready to start your entrepreneurial journey?'
                  }
                </CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Stats Grid */}
        <div className="dashboard-grid-3">
          {stats.map((stat, index) => (
            <Card key={stat.title} className={cn(
              "card-dark dashboard-card-hover",
              `animate-delay-${(index + 1) * 100}`
            )}>
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground font-medium mb-1">
                      {stat.title}
                    </p>
                    <p className={cn("text-xl font-bold mb-1", stat.color)}>
                      {stat.value}
                    </p>
                    {stat.subtitle && (
                      <p className="text-xs text-muted-foreground">
                        {stat.subtitle}
                      </p>
                    )}
                  </div>
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center shrink-0",
                    stat.bgColor
                  )}>
                    <stat.icon className={cn("h-5 w-5", stat.color)} />
                  </div>
                </div>
                {stat.trend && (
                  <div className="flex items-center gap-1 pt-2 border-t border-border/50">
                    <div className="w-2 h-2 rounded-full bg-primary/60"></div>
                    <span className="text-xs text-primary font-medium">
                      {stat.trend}
                    </span>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <Card className="card-dark dashboard-card-hover">
          <CardHeader>
            <CardTitle className="text-lg">Quick Actions</CardTitle>
            <CardDescription>
              Common tasks you might want to perform
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {isLeader ? (
              <div className="dashboard-grid-2">
                <Button
                  onClick={() => handleSectionChange('ideas')}
                  className="justify-start gap-2 h-auto py-3"
                  variant={hasIdea ? "outline" : "default"}
                >
                  {hasIdea ? <Edit className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  <div className="text-left">
                    <div className="font-medium">
                      {hasIdea ? 'Edit Idea' : 'Submit Idea'}
                    </div>
                    <div className="text-xs opacity-70">
                      {hasIdea ? 'Modify your submission' : 'Share your startup concept'}
                    </div>
                  </div>
                </Button>
                <Button
                  onClick={() => handleSectionChange('team')}
                  variant="outline"
                  className="justify-start gap-2 h-auto py-3"
                >
                  <Users className="h-4 w-4" />
                  <div className="text-left">
                    <div className="font-medium">Manage Team</div>
                    <div className="text-xs opacity-70">
                      Add or remove members
                    </div>
                  </div>
                </Button>
              </div>
            ) : hasTeam ? (
              <div className="space-y-3">
                <Button
                  onClick={() => handleSectionChange('idea-view')}
                  variant="outline"
                  className="w-full justify-start gap-2 h-auto py-3"
                >
                  <Eye className="h-4 w-4" />
                  <div className="text-left">
                    <div className="font-medium">View Team Idea</div>
                    <div className="text-xs opacity-70">
                      See your team's startup concept
                    </div>
                  </div>
                </Button>
              </div>
            ) : (
              <div className="space-y-3">
                <Button 
                  onClick={handleBecomeLeader}
                  disabled={isLoading}
                  className="w-full justify-start gap-2 h-auto py-3 button-primary"
                >
                  <Sparkles className="h-4 w-4" />
                  <div className="text-left">
                    <div className="font-medium">Submit Your Idea</div>
                    <div className="text-xs opacity-70">
                      Become a team leader and share your concept
                    </div>
                  </div>
                </Button>
                <p className="text-xs text-muted-foreground">
                  Submitting an idea will automatically make you a team leader
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    )
  }

  // Idea Management Section for Leaders
  const renderIdeaManagement = () => {
    const handleSubmitIdea = async () => {
      if (!ideaForm.title.trim() || !ideaForm.description.trim()) {
        toast({
          title: 'Error',
          description: 'Please fill in both title and description',
          variant: 'destructive'
        })
        return
      }

      try {
        setIsLoading(true)

        // Create or update idea in database
        let savedIdea
        if (idea?.id) {
          const updateRes = await DatabaseService.updateIdea(idea.id, {
            title: ideaForm.title,
            description: ideaForm.description,
            status: 'submitted' as const
          })
          if (updateRes.error || !updateRes.data) {
            throw new Error(updateRes.error?.message || 'Failed to update idea')
          }
          savedIdea = updateRes.data
        } else {
          const createRes = await DatabaseService.createIdea({
            team_id: team?.id,
            title: ideaForm.title,
            description: ideaForm.description,
            status: 'submitted' as const
          })
          if (createRes.error || !createRes.data) {
            throw new Error(createRes.error?.message || 'Failed to submit idea')
          }
          savedIdea = createRes.data
        }

        // Refresh from backend to ensure consistency
        const dashboardResult = await DatabaseService.getStudentDashboardData(student.id)
        if (dashboardResult.data) {
          onDataUpdate(dashboardResult.data)
        }
        setIsEditing(false)

        toast({
          title: 'Success!',
          description: hasIdea ? 'Idea updated successfully' : 'Idea submitted successfully',
        })
      } catch (error) {
        toast({
          title: 'Error',
          description: 'Failed to save idea. Please try again.',
          variant: 'destructive'
        })
      } finally {
        setIsLoading(false)
      }
    }

    const getStatusBadge = () => {
      if (!idea) return null

      const statusConfig = {
        'submitted': { label: 'Submitted', variant: 'default' as const, color: 'text-blue-400' },
        'under_review': { label: 'Under Review', variant: 'secondary' as const, color: 'text-yellow-400' },
        'approved': { label: 'Approved', variant: 'default' as const, color: 'text-green-400' },
        'rejected': { label: 'Rejected', variant: 'destructive' as const, color: 'text-red-400' }
      }

      return statusConfig[idea.status as keyof typeof statusConfig]
    }

    const statusBadge = getStatusBadge()

    return (
      <div className="space-y-6 animate-fade-in-up">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Idea Management</h2>
            <p className="text-muted-foreground">
              {hasIdea ? 'Manage your submitted startup idea' : 'Submit your startup idea to get started'}
            </p>
          </div>
          {hasIdea && !isEditing && (
            <Button onClick={() => setIsEditing(true)} variant="outline" className="gap-2">
              <Edit className="h-4 w-4" />
              Edit Idea
            </Button>
          )}
        </div>

        {/* Idea Form/Display */}
        <Card className="card-dark dashboard-card-hover">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-primary" />
                {hasIdea && !isEditing ? 'Your Startup Idea' : 'Submit Your Idea'}
              </CardTitle>
              {statusBadge && !isEditing && (
                <Badge variant={statusBadge.variant} className={cn('status-badge-' + idea.status)}>
                  {statusBadge.label}
                </Badge>
              )}
            </div>
            {hasIdea && !isEditing && (
              <CardDescription>
                Submitted on {new Date(idea.created_at).toLocaleDateString()}
              </CardDescription>
            )}
          </CardHeader>
          <CardContent className="space-y-4">
            {!hasIdea || isEditing ? (
              // Edit/Create Form
              <>
                <div className="space-y-2">
                  <Label htmlFor="title">Idea Title *</Label>
                  <Input
                    id="title"
                    value={ideaForm.title}
                    onChange={(e) => setIdeaForm(prev => ({ ...prev, title: e.target.value }))}
                    placeholder="Enter your startup idea title"
                    className="input-dark"
                    maxLength={100}
                  />
                  <p className="text-xs text-muted-foreground">
                    {ideaForm.title.length}/100 characters
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description *</Label>
                  <textarea
                    id="description"
                    value={ideaForm.description}
                    onChange={(e) => setIdeaForm(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Describe your startup idea, the problem it solves, and your solution..."
                    className="w-full min-h-[200px] p-3 rounded-md border border-border bg-background/50 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none resize-y"
                    maxLength={2000}
                  />
                  <p className="text-xs text-muted-foreground">
                    {ideaForm.description.length}/2000 characters
                  </p>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    onClick={handleSubmitIdea}
                    disabled={isLoading}
                    className="button-primary"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {hasIdea ? 'Updating...' : 'Submitting...'}
                      </>
                    ) : (
                      <>
                        <Sparkles className="mr-2 h-4 w-4" />
                        {hasIdea ? 'Update Idea' : 'Submit Idea'}
                      </>
                    )}
                  </Button>
                  {isEditing && (
                    <Button
                      onClick={() => {
                        setIsEditing(false)
                        setIdeaForm({
                          title: idea?.title || '',
                          description: idea?.description || ''
                        })
                      }}
                      variant="outline"
                    >
                      Cancel
                    </Button>
                  )}
                </div>
              </>
            ) : (
              // Display Mode
              <>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">
                      {idea.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                      {idea.description}
                    </p>
                  </div>

                  {idea.feedback && (
                    <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
                      <div className="flex items-center gap-2 mb-2">
                        <FileText className="h-4 w-4 text-purple-400" />
                        <span className="font-medium text-purple-400">Feedback</span>
                      </div>
                      <p className="text-sm text-foreground">
                        {idea.feedback}
                      </p>
                    </div>
                  )}
                </div>
              </>
            )}
          </CardContent>
        </Card>

        {/* Submission Guidelines */}
        {(!hasIdea || isEditing) && (
          <Card className="card-dark">
            <CardHeader>
              <CardTitle className="text-lg">Submission Guidelines</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">Title Requirements:</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Clear and descriptive</li>
                    <li>• Maximum 100 characters</li>
                    <li>• Avoid special characters</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">Description Should Include:</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Problem statement</li>
                    <li>• Your solution approach</li>
                    <li>• Target audience</li>
                    <li>• Unique value proposition</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    )
  }

  // Team Management Section for Leaders
  const renderTeamManagement = () => {
    const teamMembers = team?.team_members || []
    const totalTeamSize = teamMembers.length + 1 // Include leader
    const maxTeamSize = 5
    const canAddMembers = totalTeamSize < maxTeamSize

    const handleSearch = async () => {
      if (!searchTerm.trim()) {
        setSearchResults([])
        return
      }

      setIsSearching(true)
      try {
        // Use fuzzy search for partial matches on name, email, or roll number
        const searchRes = await (DatabaseService as any).searchStudents(searchTerm, 10)
        if (searchRes.error) {
          throw searchRes.error
        }

        // Map to expected format
        const results = (searchRes.data || []).map((s: any) => ({
          id: s.id,
          name: s.name,
          roll_number: s.roll_number,
          email: s.email,
          branch: s.branch || 'N/A'
        }))

        setSearchResults(results)
      } catch (error) {
        toast({
          title: 'Error',
          description: 'Failed to search for students',
          variant: 'destructive'
        })
      } finally {
        setIsSearching(false)
      }
    }

    const handleAddMember = async (studentToAdd: any) => {
      try {
        setIsLoading(true)

        // Check if student is already in a team
        const existingMember = teamMembers.find((member: any) => member.student_id === studentToAdd.id)
        if (existingMember) {
          toast({
            title: 'Error',
            description: 'This student is already in your team',
            variant: 'destructive'
          })
          return
        }

        // Add team member in backend
        const addRes = await DatabaseService.addTeamMember(team.id, studentToAdd.id)
        if (addRes.error) {
          throw new Error(addRes.error.message || 'Failed to add member')
        }

        // Refresh data
        const dashboardResult = await DatabaseService.getStudentDashboardData(student.id)
        if (dashboardResult.data) {
          onDataUpdate(dashboardResult.data)
        }

        setSearchTerm('')
        setSearchResults([])
        setIsAddingMember(false)

        toast({
          title: 'Success!',
          description: `${studentToAdd.name} has been added to your team`,
        })
      } catch (error) {
        toast({
          title: 'Error',
          description: 'Failed to add team member',
          variant: 'destructive'
        })
      } finally {
        setIsLoading(false)
      }
    }

    const handleRemoveMember = async (memberToRemove: any) => {
      try {
        setIsLoading(true)

        // Remove team member in backend
        await DatabaseService.removeTeamMember(team.id, memberToRemove.student_id)

        // Refresh
        const dashboardResult = await DatabaseService.getStudentDashboardData(student.id)
        if (dashboardResult.data) {
          onDataUpdate(dashboardResult.data)
        }

        toast({
          title: 'Success!',
          description: `${memberToRemove.students?.name} has been removed from your team`,
        })
      } catch (error) {
        toast({
          title: 'Error',
          description: 'Failed to remove team member',
          variant: 'destructive'
        })
      } finally {
        setIsLoading(false)
      }
    }

    return (
      <div className="space-y-6 animate-fade-in-up">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Team Management</h2>
            <p className="text-muted-foreground">
              Manage your team members and build your startup team
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-sm">
              {totalTeamSize}/{maxTeamSize} members
            </Badge>
            {canAddMembers && (
              <Button
                onClick={() => setIsAddingMember(true)}
                className="button-primary gap-2"
                disabled={!canAddMembers}
              >
                <UserPlus className="h-4 w-4" />
                Add Member
              </Button>
            )}
          </div>
        </div>

        {/* Team Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="card-dark">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                  <Users className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Members</p>
                  <p className="text-xl font-bold text-green-400">{totalTeamSize}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-dark">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <Target className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Available Slots</p>
                  <p className="text-xl font-bold text-blue-400">{maxTeamSize - totalTeamSize}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-dark">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <Crown className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Your Role</p>
                  <p className="text-xl font-bold text-purple-400">Leader</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Current Team Members */}
        <Card className="card-dark dashboard-card-hover">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Current Team Members
            </CardTitle>
            <CardDescription>
              Your team members and their roles
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Leader (You) */}
              <div className="flex items-center justify-between p-4 rounded-lg border border-border/50 bg-primary/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Crown className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{student.name}</p>
                    <p className="text-sm text-muted-foreground">{student.email}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="default" className="text-xs role-badge-leader">
                        Team Leader
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {student.roll_number}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">You</p>
                </div>
              </div>

              {/* Team Members */}
              {teamMembers.map((member: any, index: number) => (
                <div key={member.id} className="flex items-center justify-between p-4 rounded-lg border border-border/50 hover:border-primary/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                      <User className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{member.students?.name}</p>
                      <p className="text-sm text-muted-foreground">{member.students?.email}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="secondary" className="text-xs role-badge-member">
                          Member
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {member.students?.roll_number}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">
                      Joined {new Date(member.created_at).toLocaleDateString()}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRemoveMember(member)}
                      className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                      disabled={isLoading}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}

              {teamMembers.length === 0 && (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="font-medium text-foreground mb-2">No team members yet</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Add team members to collaborate on your startup idea
                  </p>
                  {canAddMembers && (
                    <Button onClick={() => setIsAddingMember(true)} className="button-primary">
                      <UserPlus className="mr-2 h-4 w-4" />
                      Add Your First Member
                    </Button>
                  )}
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Add Member Modal/Section */}
        {isAddingMember && (
          <Card className="card-dark border-primary/20">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <UserPlus className="h-5 w-5 text-primary" />
                  Add Team Member
                </CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setIsAddingMember(false)
                    setSearchTerm('')
                    setSearchResults([])
                  }}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <CardDescription>
                Search for students by name, roll number, or email
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Enter name, roll number, or email..."
                  className="input-dark"
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
                <Button
                  onClick={handleSearch}
                  disabled={isSearching || !searchTerm.trim()}
                  className="button-primary"
                >
                  {isSearching ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    'Search'
                  )}
                </Button>
              </div>

              {searchResults.length > 0 && (
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Found {searchResults.length} student{searchResults.length !== 1 ? 's' : ''}:
                  </p>
                  {searchResults.map((student) => (
                    <div key={student.id} className="flex items-center justify-between p-3 rounded-lg border border-border/50 hover:border-primary/30 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                          <User className="h-4 w-4 text-blue-500" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{student.name}</p>
                          <p className="text-sm text-muted-foreground">{student.email}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs text-muted-foreground">
                              {student.roll_number} • {student.branch}
                            </span>
                          </div>
                        </div>
                      </div>
                      <Button
                        onClick={() => handleAddMember(student)}
                        disabled={isLoading}
                        size="sm"
                        className="button-success"
                      >
                        {isLoading ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          'Add'
                        )}
                      </Button>
                    </div>
                  ))}
                </div>
              )}

              {searchTerm && searchResults.length === 0 && !isSearching && (
                <div className="text-center py-4">
                  <p className="text-sm text-muted-foreground">
                    No students found matching "{searchTerm}"
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Team Guidelines */}
        <Card className="card-dark">
          <CardHeader>
            <CardTitle className="text-lg">Team Guidelines</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <h4 className="font-medium text-foreground">Team Rules:</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Maximum 5 members per team</li>
                  <li>• Only one leader per team</li>
                  <li>• Members can leave anytime</li>
                  <li>• Leaders can remove members</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-foreground">Best Practices:</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Add members with complementary skills</li>
                  <li>• Communicate regularly with your team</li>
                  <li>• Define clear roles and responsibilities</li>
                  <li>• Collaborate on idea development</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Progress Timeline Component
  const renderProgressTimeline = () => {
    const timelineSteps = [
      {
        id: 'draft',
        title: 'Draft',
        description: 'Prepare your startup idea',
        icon: Edit,
        status: 'completed' as const,
        date: null,
        details: 'Brainstorm and refine your concept'
      },
      {
        id: 'submitted',
        title: 'Submitted',
        description: 'Idea submitted for review',
        icon: CheckCircle,
        status: hasIdea ? 'completed' : 'pending' as const,
        date: hasIdea ? idea.created_at : null,
        details: hasIdea ? 'Your idea has been successfully submitted' : 'Submit your idea to proceed'
      },
      {
        id: 'under_review',
        title: 'Under Review',
        description: 'Admin team reviewing your submission',
        icon: Clock,
        status: hasIdea && ['under_review', 'approved', 'rejected'].includes(idea.status) ? 'completed' : 'pending' as const,
        date: hasIdea && idea.status !== 'submitted' ? idea.updated_at : null,
        details: hasIdea && idea.status === 'under_review' ? 'Your idea is currently being reviewed' : 'Waiting for review to begin'
      },
      {
        id: 'decision',
        title: 'Decision',
        description: 'Final decision on your submission',
        icon: idea?.status === 'approved' ? CheckCircle : idea?.status === 'rejected' ? XCircle : AlertCircle,
        status: hasIdea && ['approved', 'rejected'].includes(idea.status) ? 'completed' : 'pending' as const,
        date: hasIdea && ['approved', 'rejected'].includes(idea.status) ? idea.updated_at : null,
        details: hasIdea && idea.status === 'approved' ? 'Congratulations! Your idea has been approved' :
                hasIdea && idea.status === 'rejected' ? 'Your idea needs revision. Check feedback for details' :
                'Awaiting final decision'
      }
    ]

    const getStepColor = (step: typeof timelineSteps[0]) => {
      if (step.status === 'completed') {
        if (step.id === 'decision' && idea?.status === 'rejected') {
          return 'text-red-400'
        }
        return 'text-green-400'
      }
      if (step.id === 'submitted' && !hasIdea) {
        return 'text-yellow-400'
      }
      return 'text-muted-foreground'
    }

    const getStepBgColor = (step: typeof timelineSteps[0]) => {
      if (step.status === 'completed') {
        if (step.id === 'decision' && idea?.status === 'rejected') {
          return 'bg-red-500/20'
        }
        return 'bg-green-500/20'
      }
      if (step.id === 'submitted' && !hasIdea) {
        return 'bg-yellow-500/20'
      }
      return 'bg-muted/20'
    }

    const getCurrentStep = () => {
      if (!hasIdea) return 0 // Draft
      if (idea.status === 'submitted') return 1
      if (idea.status === 'under_review') return 2
      if (['approved', 'rejected'].includes(idea.status)) return 3
      return 1
    }

    const currentStepIndex = getCurrentStep()
    const progressPercentage = ((currentStepIndex + 1) / timelineSteps.length) * 100

    return (
      <div className="space-y-6 animate-fade-in-up">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Progress Timeline</h2>
            <p className="text-muted-foreground">
              Track your startup idea submission progress
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Overall Progress</p>
            <p className="text-2xl font-bold text-primary">{Math.round(progressPercentage)}%</p>
          </div>
        </div>

        {/* Progress Bar */}
        <Card className="card-dark">
          <CardContent className="p-6">
            <div className="relative">
              <div className="absolute top-6 left-6 right-6 h-0.5 bg-border">
                <div
                  className="h-full bg-gradient-primary transition-all duration-1000 ease-out"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>

              <div className="relative flex justify-between">
                {timelineSteps.map((step, index) => (
                  <div key={step.id} className="flex flex-col items-center">
                    <div className={cn(
                      "w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300",
                      step.status === 'completed'
                        ? step.id === 'decision' && idea?.status === 'rejected'
                          ? 'bg-red-500/20 border-red-500 shadow-glow-danger'
                          : 'bg-green-500/20 border-green-500 shadow-glow-success'
                        : index === currentStepIndex
                          ? 'bg-primary/20 border-primary shadow-glow-primary'
                          : 'bg-muted/20 border-border'
                    )}>
                      <step.icon className={cn(
                        "h-5 w-5 transition-colors",
                        getStepColor(step)
                      )} />
                    </div>
                    <div className="mt-3 text-center max-w-[120px]">
                      <p className={cn(
                        "text-sm font-medium",
                        getStepColor(step)
                      )}>
                        {step.title}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Timeline Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Current Status */}
          <Card className="card-dark dashboard-card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Current Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center",
                    getStepBgColor(timelineSteps[currentStepIndex])
                  )}>
                    {React.createElement(timelineSteps[currentStepIndex].icon, {
                      className: cn("h-5 w-5", getStepColor(timelineSteps[currentStepIndex]))
                    })}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">
                      {timelineSteps[currentStepIndex].title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {timelineSteps[currentStepIndex].details}
                    </p>
                  </div>
                </div>

                {timelineSteps[currentStepIndex].date && (
                  <div className="pt-3 border-t border-border/50">
                    <p className="text-xs text-muted-foreground">
                      {timelineSteps[currentStepIndex].id === 'submitted' ? 'Submitted on' : 'Updated on'}: {' '}
                      {new Date(timelineSteps[currentStepIndex].date!).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                )}

                {/* Next Steps */}
                {currentStepIndex < timelineSteps.length - 1 && (
                  <div className="pt-3 border-t border-border/50">
                    <p className="text-sm font-medium text-foreground mb-2">Next Step:</p>
                    <div className="flex items-center gap-2">
                      {React.createElement(timelineSteps[currentStepIndex + 1].icon, {
                        className: "h-4 w-4 text-muted-foreground"
                      })}
                      <span className="text-sm text-muted-foreground">
                        {timelineSteps[currentStepIndex + 1].title} - {timelineSteps[currentStepIndex + 1].description}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Feedback & Actions */}
          <Card className="card-dark dashboard-card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Feedback & Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {idea?.feedback ? (
                  <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <FileText className="h-4 w-4 text-purple-400" />
                      <span className="font-medium text-purple-400">Admin Feedback</span>
                    </div>
                    <p className="text-sm text-foreground whitespace-pre-wrap">
                      {idea.feedback}
                    </p>
                  </div>
                ) : (
                  <div className="text-center py-6">
                    <div className="w-12 h-12 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-3">
                      <FileText className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {hasIdea ? 'No feedback available yet' : 'Submit your idea to receive feedback'}
                    </p>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="pt-3 border-t border-border/50 space-y-2">
                  {!hasIdea ? (
                    <Button
                      onClick={() => handleSectionChange('ideas')}
                      className="w-full button-primary"
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Submit Your Idea
                    </Button>
                  ) : idea.status === 'rejected' ? (
                    <Button
                      onClick={() => handleSectionChange('ideas')}
                      className="w-full button-warning"
                    >
                      <Edit className="mr-2 h-4 w-4" />
                      Revise & Resubmit
                    </Button>
                  ) : (
                    <Button
                      onClick={() => handleSectionChange('ideas')}
                      variant="outline"
                      className="w-full"
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      View Idea Details
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Timeline History */}
        <Card className="card-dark">
          <CardHeader>
            <CardTitle>Timeline History</CardTitle>
            <CardDescription>
              Detailed history of your submission progress
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {timelineSteps.map((step, index) => (
                <div key={step.id} className={cn(
                  "flex items-start gap-4 pb-4",
                  index < timelineSteps.length - 1 && "border-b border-border/50"
                )}>
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1",
                    getStepBgColor(step)
                  )}>
                    <step.icon className={cn("h-4 w-4", getStepColor(step))} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className={cn("font-medium", getStepColor(step))}>
                        {step.title}
                      </h4>
                      {step.date && (
                        <span className="text-xs text-muted-foreground">
                          {new Date(step.date).toLocaleDateString()}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {step.details}
                    </p>
                    {step.status === 'pending' && (
                      <Badge variant="outline" className="mt-2 text-xs">
                        Pending
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Team Member Idea View (Read-only)
  const renderMemberIdeaView = () => {
    if (!hasTeam || !hasIdea) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
          <div className="w-16 h-16 bg-muted/50 rounded-full flex items-center justify-center">
            <Lightbulb className="h-8 w-8 text-muted-foreground" />
          </div>
          <div className="text-center space-y-2">
            <h3 className="text-xl font-semibold">No Team Idea Yet</h3>
            <p className="text-muted-foreground max-w-md">
              {hasTeam ? 'Your team leader hasn\'t submitted an idea yet' : 'Join a team or create your own to view ideas'}
            </p>
          </div>
          {!hasTeam && (
            <Button onClick={handleBecomeLeader} className="button-primary">
              <Sparkles className="mr-2 h-4 w-4" />
              Submit Your Own Idea
            </Button>
          )}
        </div>
      )
    }

    const getStatusBadge = () => {
      const statusConfig = {
        'submitted': { label: 'Submitted', variant: 'default' as const, color: 'text-blue-400' },
        'under_review': { label: 'Under Review', variant: 'secondary' as const, color: 'text-yellow-400' },
        'approved': { label: 'Approved', variant: 'default' as const, color: 'text-green-400' },
        'rejected': { label: 'Rejected', variant: 'destructive' as const, color: 'text-red-400' }
      }

      return statusConfig[idea.status as keyof typeof statusConfig]
    }

    const statusBadge = getStatusBadge()

    return (
      <div className="space-y-6 animate-fade-in-up">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Team Idea</h2>
            <p className="text-muted-foreground">
              View your team's startup idea and progress
            </p>
          </div>
          <Badge variant={statusBadge.variant} className={cn('status-badge-' + idea.status)}>
            {statusBadge.label}
          </Badge>
        </div>

        {/* Team Leader Info */}
        <Card className="card-dark dashboard-card-hover">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Crown className="h-5 w-5 text-yellow-500" />
              Team Leader
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                <Crown className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="font-medium text-foreground">{team.leader?.name || 'Team Leader'}</p>
                <p className="text-sm text-muted-foreground">{team.leader?.email}</p>
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant="default" className="text-xs role-badge-leader">
                    Leader
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {team.leader?.roll_number}
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Idea Details */}
        <Card className="card-dark dashboard-card-hover">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-primary" />
                Startup Idea
              </CardTitle>
            </div>
            <CardDescription>
              Submitted on {new Date(idea.created_at).toLocaleDateString()}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg text-foreground mb-2">
                {idea.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                {idea.description}
              </p>
            </div>

            {idea.feedback && (
              <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="h-4 w-4 text-purple-400" />
                  <span className="font-medium text-purple-400">Admin Feedback</span>
                </div>
                <p className="text-sm text-foreground">
                  {idea.feedback}
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Team Progress */}
        <Card className="card-dark">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Team Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-lg bg-muted/20">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="h-6 w-6 text-blue-400" />
                </div>
                <p className="font-medium text-foreground">{(team.team_members?.length || 0) + 1}</p>
                <p className="text-sm text-muted-foreground">Team Members</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-muted/20">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                </div>
                <p className="font-medium text-foreground">{statusBadge.label}</p>
                <p className="text-sm text-muted-foreground">Current Status</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-muted/20">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <FileText className="h-6 w-6 text-purple-400" />
                </div>
                <p className="font-medium text-foreground">{idea.feedback ? 'Yes' : 'No'}</p>
                <p className="text-sm text-muted-foreground">Feedback Available</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Team Information View for Members
  const renderTeamInfo = () => {
    if (!hasTeam) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
          <div className="w-16 h-16 bg-muted/50 rounded-full flex items-center justify-center">
            <Users className="h-8 w-8 text-muted-foreground" />
          </div>
          <div className="text-center space-y-2">
            <h3 className="text-xl font-semibold">No Team Yet</h3>
            <p className="text-muted-foreground max-w-md">
              You're not part of any team. Submit your own idea to create a team and become a leader.
            </p>
          </div>
          <Button onClick={handleBecomeLeader} className="button-primary">
            <Sparkles className="mr-2 h-4 w-4" />
            Create Your Team
          </Button>
        </div>
      )
    }

    const teamMembers = team.team_members || []
    const totalTeamSize = teamMembers.length + 1

    const handleLeaveTeam = async () => {
      try {
        setIsLoading(true)

        // Simulate leaving team
        await new Promise(resolve => setTimeout(resolve, 1000))

        // Update student to have no team
        const updatedStudent = {
          ...student,
          team_id: undefined,
          role: 'member' as const
        }

        onDataUpdate({
          student: updatedStudent,
          team: null,
          idea: null
        })

        toast({
          title: 'Success!',
          description: 'You have left the team successfully',
        })
      } catch (error) {
        toast({
          title: 'Error',
          description: 'Failed to leave team. Please try again.',
          variant: 'destructive'
        })
      } finally {
        setIsLoading(false)
      }
    }

    return (
      <div className="space-y-6 animate-fade-in-up">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Team Information</h2>
            <p className="text-muted-foreground">
              View your team details and members
            </p>
          </div>
          <Button
            onClick={handleLeaveTeam}
            variant="outline"
            className="text-red-400 hover:text-red-300 hover:bg-red-500/10 border-red-500/20"
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <X className="mr-2 h-4 w-4" />
            )}
            Leave Team
          </Button>
        </div>

        {/* Team Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="card-dark">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <Users className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Team Size</p>
                  <p className="text-xl font-bold text-blue-400">{totalTeamSize}/5</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-dark">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Idea Status</p>
                  <p className="text-xl font-bold text-green-400">
                    {hasIdea ? idea.status.replace('_', ' ').toUpperCase() : 'NONE'}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-dark">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <Clock className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Joined</p>
                  <p className="text-xl font-bold text-purple-400">
                    {new Date(team.created_at).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Team Members List */}
        <Card className="card-dark dashboard-card-hover">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Team Members ({totalTeamSize})
            </CardTitle>
            <CardDescription>
              All members of your team
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Team Leader */}
              <div className="flex items-center justify-between p-4 rounded-lg border border-border/50 bg-primary/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Crown className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{team.leader?.name}</p>
                    <p className="text-sm text-muted-foreground">{team.leader?.email}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="default" className="text-xs role-badge-leader">
                        Team Leader
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {team.leader?.roll_number}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Leader</p>
                </div>
              </div>

              {/* Other Team Members */}
              {teamMembers.map((member: any, index: number) => (
                <div key={member.id} className="flex items-center justify-between p-4 rounded-lg border border-border/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                      {member.student_id === student.id ? (
                        <User className="h-5 w-5 text-primary" />
                      ) : (
                        <User className="h-5 w-5 text-blue-500" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        {member.students?.name}
                        {member.student_id === student.id && (
                          <span className="ml-2 text-primary text-sm">(You)</span>
                        )}
                      </p>
                      <p className="text-sm text-muted-foreground">{member.students?.email}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="secondary" className="text-xs role-badge-member">
                          Member
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {member.students?.roll_number}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">
                      Joined {new Date(member.created_at).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Team Guidelines for Members */}
        <Card className="card-dark">
          <CardHeader>
            <CardTitle className="text-lg">Member Guidelines</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <h4 className="font-medium text-foreground">Your Responsibilities:</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Support your team leader's vision</li>
                  <li>• Contribute to idea development</li>
                  <li>• Participate in team discussions</li>
                  <li>• Help with implementation tasks</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-foreground">Team Benefits:</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Learn from experienced leader</li>
                  <li>• Gain startup experience</li>
                  <li>• Network with like-minded peers</li>
                  <li>• Share in team success</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Resources Section
  const renderResources = () => {
    const resourceCategories = [
      {
        title: 'Getting Started',
        description: 'Essential guides for new entrepreneurs',
        icon: Sparkles,
        color: 'text-blue-400',
        bgColor: 'bg-blue-500/20',
        resources: [
          {
            title: 'Startup Idea Validation Guide',
            description: 'Learn how to validate your startup idea before building',
            type: 'PDF Guide',
            url: '#',
            icon: FileText
          },
          {
            title: 'Business Model Canvas Template',
            description: 'Template to map out your business model',
            type: 'Template',
            url: '#',
            icon: Target
          },
          {
            title: 'Market Research Toolkit',
            description: 'Tools and techniques for market research',
            type: 'Toolkit',
            url: '#',
            icon: TrendingUp
          }
        ]
      },
      {
        title: 'Team Building',
        description: 'Resources for building and managing teams',
        icon: Users,
        color: 'text-green-400',
        bgColor: 'bg-green-500/20',
        resources: [
          {
            title: 'Team Formation Best Practices',
            description: 'How to build an effective startup team',
            type: 'Article',
            url: '#',
            icon: Users
          },
          {
            title: 'Role Definition Template',
            description: 'Define clear roles and responsibilities',
            type: 'Template',
            url: '#',
            icon: User
          },
          {
            title: 'Communication Guidelines',
            description: 'Effective communication strategies for teams',
            type: 'Guide',
            url: '#',
            icon: FileText
          }
        ]
      },
      {
        title: 'Pitch & Presentation',
        description: 'Master the art of pitching your idea',
        icon: Target,
        color: 'text-purple-400',
        bgColor: 'bg-purple-500/20',
        resources: [
          {
            title: 'Pitch Deck Template',
            description: 'Professional pitch deck template',
            type: 'Template',
            url: '#',
            icon: FileText
          },
          {
            title: 'Presentation Skills Guide',
            description: 'Tips for effective presentations',
            type: 'Guide',
            url: '#',
            icon: Target
          },
          {
            title: 'Demo Day Preparation',
            description: 'How to prepare for demo day',
            type: 'Checklist',
            url: '#',
            icon: CheckCircle
          }
        ]
      },
      {
        title: 'Legal & Compliance',
        description: 'Legal aspects of starting a business',
        icon: FileText,
        color: 'text-yellow-400',
        bgColor: 'bg-yellow-500/20',
        resources: [
          {
            title: 'Business Registration Guide',
            description: 'Step-by-step business registration process',
            type: 'Guide',
            url: '#',
            icon: FileText
          },
          {
            title: 'IP Protection Basics',
            description: 'Protecting your intellectual property',
            type: 'Article',
            url: '#',
            icon: AlertCircle
          },
          {
            title: 'Legal Checklist',
            description: 'Essential legal requirements for startups',
            type: 'Checklist',
            url: '#',
            icon: CheckCircle
          }
        ]
      }
    ]

    const quickLinks = [
      {
        title: 'E-Cell REC Website',
        description: 'Visit our main website',
        url: 'https://ecellrec.com',
        icon: ExternalLink
      },
      {
        title: 'Startup India Portal',
        description: 'Government startup portal',
        url: 'https://startupindia.gov.in',
        icon: ExternalLink
      },
      {
        title: 'MSME Registration',
        description: 'Register as MSME',
        url: 'https://udyamregistration.gov.in',
        icon: ExternalLink
      },
      {
        title: 'Funding Opportunities',
        description: 'Find funding for your startup',
        url: '#',
        icon: ExternalLink
      }
    ]

    return (
      <div className="space-y-6 animate-fade-in-up">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Resources</h2>
            <p className="text-muted-foreground">
              Essential resources and guides for your entrepreneurial journey
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <Card className="card-dark dashboard-card-hover">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ExternalLink className="h-5 w-5 text-primary" />
              Quick Links
            </CardTitle>
            <CardDescription>
              Important external resources and portals
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickLinks.map((link, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border border-border/50 hover:border-primary/30 transition-colors cursor-pointer group"
                  onClick={() => window.open(link.url, '_blank')}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <link.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground text-sm group-hover:text-primary transition-colors">
                        {link.title}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {link.description}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Resource Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {resourceCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="card-dark dashboard-card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center",
                    category.bgColor
                  )}>
                    <category.icon className={cn("h-4 w-4", category.color)} />
                  </div>
                  {category.title}
                </CardTitle>
                <CardDescription>
                  {category.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.resources.map((resource, resourceIndex) => (
                    <div
                      key={resourceIndex}
                      className="flex items-start gap-3 p-3 rounded-lg border border-border/50 hover:border-primary/30 transition-colors cursor-pointer group"
                      onClick={() => {
                        if (resource.url !== '#') {
                          window.open(resource.url, '_blank')
                        } else {
                          toast({
                            title: 'Coming Soon',
                            description: 'This resource will be available soon',
                          })
                        }
                      }}
                    >
                      <div className="w-8 h-8 bg-muted/50 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <resource.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <p className="font-medium text-foreground text-sm group-hover:text-primary transition-colors">
                            {resource.title}
                          </p>
                          <Badge variant="outline" className="text-xs">
                            {resource.type}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {resource.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Help & Support */}
        <Card className="card-dark">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-primary" />
              Help & Support
            </CardTitle>
            <CardDescription>
              Need help? Here's how to get support
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-lg bg-muted/20">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FileText className="h-6 w-6 text-blue-400" />
                </div>
                <h4 className="font-medium text-foreground mb-2">Documentation</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Comprehensive guides and FAQs
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  View Docs
                </Button>
              </div>

              <div className="text-center p-4 rounded-lg bg-muted/20">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-green-400" />
                </div>
                <h4 className="font-medium text-foreground mb-2">Community</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Connect with other entrepreneurs
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Join Community
                </Button>
              </div>

              <div className="text-center p-4 rounded-lg bg-muted/20">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <User className="h-6 w-6 text-purple-400" />
                </div>
                <h4 className="font-medium text-foreground mb-2">Contact Support</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Get direct help from our team
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Contact Us
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tips for Success */}
        <Card className="card-dark border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              Tips for Success
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <h4 className="font-medium text-foreground">For Team Leaders:</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Start with a clear vision and communicate it well</li>
                  <li>• Build a diverse team with complementary skills</li>
                  <li>• Validate your idea with potential customers</li>
                  <li>• Focus on solving a real problem</li>
                  <li>• Be prepared to pivot based on feedback</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-foreground">For Team Members:</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Actively contribute to team discussions</li>
                  <li>• Take ownership of your assigned tasks</li>
                  <li>• Provide constructive feedback to improve the idea</li>
                  <li>• Learn new skills that benefit the team</li>
                  <li>• Support your team leader's vision</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Placeholder for other sections
  const renderPlaceholder = (title: string, description: string, icon: React.ComponentType<{ className?: string }>) => (
    <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
      <div className="w-16 h-16 bg-muted/50 rounded-full flex items-center justify-center">
        {React.createElement(icon, { className: "h-8 w-8 text-muted-foreground" })}
      </div>
      <div className="text-center space-y-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground max-w-md">{description}</p>
      </div>
      <Badge variant="outline">Coming Soon</Badge>
    </div>
  )

  // Settings section
  const renderSettings = () => {
    const handleSettingChange = (category: string, setting: string, value: any) => {
      setSettings(prev => ({
        ...prev,
        [category]: {
          ...prev[category as keyof typeof prev],
          [setting]: value
        }
      }))

      setSettingsModified(true)

      // Show immediate feedback for setting changes
      const settingNames: { [key: string]: { [key: string]: string } } = {
        notifications: {
          email: 'Email Notifications',
          teamUpdates: 'Team Updates',
          ideaStatus: 'Idea Status Updates',
          deadlineReminders: 'Deadline Reminders'
        },
        privacy: {
          profileVisible: 'Profile Visibility',
          showEmail: 'Show Email',
          showPhone: 'Show Phone'
        },
        preferences: {
          theme: 'Theme',
          language: 'Language',
          timezone: 'Timezone'
        }
      }

      const settingName = settingNames[category]?.[setting] || setting
      const valueText = typeof value === 'boolean' ? (value ? 'enabled' : 'disabled') : value

      toast({
        title: 'Setting Updated',
        description: `${settingName} has been ${valueText}`,
        duration: 2000,
      })
    }

    const handleSaveSettings = async () => {
      try {
        setIsLoading(true)
        // Simulate saving settings
        await new Promise(resolve => setTimeout(resolve, 1000))

        setSettingsModified(false)

        toast({
          title: 'Settings Saved',
          description: 'Your preferences have been updated successfully.',
        })
      } catch (error) {
        toast({
          title: 'Error',
          description: 'Failed to save settings. Please try again.',
          variant: 'destructive'
        })
      } finally {
        setIsLoading(false)
      }
    }

    return (
      <div className="space-y-6 animate-fade-in-up">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Settings</h1>
            <p className="text-muted-foreground">Manage your account preferences and settings</p>
          </div>
          <Button
            onClick={handleSaveSettings}
            disabled={isLoading || !settingsModified}
            className={cn(
              "transition-all duration-200",
              settingsModified ? "button-primary shadow-glow-primary" : "button-primary opacity-50"
            )}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : settingsModified ? (
              <>
                <CheckCircle className="mr-2 h-4 w-4" />
                Save Changes
              </>
            ) : (
              'No Changes'
            )}
          </Button>
        </div>

        <div className="dashboard-grid-2">
          {/* Account Information */}
          <Card className="card-dark dashboard-card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-primary" />
                Account Information
              </CardTitle>
              <CardDescription>
                Your basic account details and profile information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="settings-label">Name</label>
                <input
                  type="text"
                  value={student?.name || ''}
                  disabled
                  className="settings-input opacity-60 cursor-not-allowed"
                />
              </div>
              <div className="space-y-2">
                <label className="settings-label">Email</label>
                <input
                  type="email"
                  value={student?.email || ''}
                  disabled
                  className="settings-input opacity-60 cursor-not-allowed"
                />
              </div>
              <div className="space-y-2">
                <label className="settings-label">Roll Number</label>
                <input
                  type="text"
                  value={student?.roll_number || ''}
                  disabled
                  className="settings-input opacity-60 cursor-not-allowed"
                />
              </div>
              <div className="space-y-2">
                <label className="settings-label">Role</label>
                <div className="flex items-center gap-2">
                  <Badge className={isLeader ? 'role-badge-leader' : 'role-badge-member'}>
                    {isLeader ? (
                      <>
                        <Crown className="mr-1 h-3 w-3" />
                        Team Leader
                      </>
                    ) : (
                      <>
                        <User className="mr-1 h-3 w-3" />
                        Team Member
                      </>
                    )}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card className="card-dark dashboard-card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-primary" />
                Notifications
              </CardTitle>
              <CardDescription>
                Choose what notifications you want to receive
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="settings-section">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">Email Notifications</p>
                    <p className="settings-description">Receive updates via email</p>
                  </div>
                  <Switch
                    checked={settings.notifications.email}
                    onCheckedChange={(checked) => handleSettingChange('notifications', 'email', checked)}
                  />
                </div>
              </div>
              <div className="settings-section">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">Team Updates</p>
                    <p className="settings-description">Get notified about team changes</p>
                  </div>
                  <Switch
                    checked={settings.notifications.teamUpdates}
                    onCheckedChange={(checked) => handleSettingChange('notifications', 'teamUpdates', checked)}
                  />
                </div>
              </div>
              <div className="settings-section">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">Idea Status Updates</p>
                    <p className="settings-description">Updates on your idea submissions</p>
                  </div>
                  <Switch
                    checked={settings.notifications.ideaStatus}
                    onCheckedChange={(checked) => handleSettingChange('notifications', 'ideaStatus', checked)}
                  />
                </div>
              </div>
              <div className="settings-section">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">Deadline Reminders</p>
                    <p className="settings-description">Reminders for important deadlines</p>
                  </div>
                  <Switch
                    checked={settings.notifications.deadlineReminders}
                    onCheckedChange={(checked) => handleSettingChange('notifications', 'deadlineReminders', checked)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Privacy Settings */}
          <Card className="card-dark dashboard-card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Privacy
              </CardTitle>
              <CardDescription>
                Control your privacy and data sharing preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="settings-section">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">Profile Visibility</p>
                    <p className="settings-description">Make your profile visible to other students</p>
                  </div>
                  <Switch
                    checked={settings.privacy.profileVisible}
                    onCheckedChange={(checked) => handleSettingChange('privacy', 'profileVisible', checked)}
                  />
                </div>
              </div>
              <div className="settings-section">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">Show Email</p>
                    <p className="settings-description">Display email in your profile</p>
                  </div>
                  <Switch
                    checked={settings.privacy.showEmail}
                    onCheckedChange={(checked) => handleSettingChange('privacy', 'showEmail', checked)}
                  />
                </div>
              </div>
              <div className="settings-section">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">Show Phone</p>
                    <p className="settings-description">Display phone number in your profile</p>
                  </div>
                  <Switch
                    checked={settings.privacy.showPhone}
                    onCheckedChange={(checked) => handleSettingChange('privacy', 'showPhone', checked)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* App Preferences */}
          <Card className="card-dark dashboard-card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-primary" />
                Preferences
              </CardTitle>
              <CardDescription>
                Customize your app experience
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="settings-label">Theme</label>
                <select
                  value={settings.preferences.theme}
                  onChange={(e) => handleSettingChange('preferences', 'theme', e.target.value)}
                  className="settings-select"
                >
                  <option value="dark">🌙 Dark</option>
                  <option value="light">☀️ Light</option>
                  <option value="system">💻 System</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="settings-label">Language</label>
                <select
                  value={settings.preferences.language}
                  onChange={(e) => handleSettingChange('preferences', 'language', e.target.value)}
                  className="settings-select"
                >
                  <option value="en">🇺🇸 English</option>
                  <option value="hi">🇮🇳 Hindi</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="settings-label">Timezone</label>
                <select
                  value={settings.preferences.timezone}
                  onChange={(e) => handleSettingChange('preferences', 'timezone', e.target.value)}
                  className="settings-select"
                >
                  <option value="UTC">🌍 UTC</option>
                  <option value="Asia/Kolkata">🇮🇳 India Standard Time</option>
                </select>
              </div>
            </CardContent>
          </Card>

          {/* Help & Support */}
          <Card className="card-dark dashboard-card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Help & Support
              </CardTitle>
              <CardDescription>
                Get help and contact support
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <FileText className="mr-2 h-4 w-4" />
                View Documentation
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <ExternalLink className="mr-2 h-4 w-4" />
                Contact Support
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <AlertCircle className="mr-2 h-4 w-4" />
                Report a Bug
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Danger Zone */}
        <Card className="card-dark border-destructive/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive">
              <AlertTriangle className="h-5 w-5" />
              Danger Zone
            </CardTitle>
            <CardDescription>
              Irreversible and destructive actions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 border border-destructive/20 rounded-lg">
              <h4 className="font-medium text-destructive mb-2">Delete Account</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Permanently delete your account and all associated data. This action cannot be undone.
              </p>
              <Button variant="destructive" size="sm">
                Delete Account
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Render content based on active section
  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return renderOverview()
      case 'ideas':
        return isLeader ? renderIdeaManagement() : renderPlaceholder(
          'Idea Management',
          'Only team leaders can manage ideas. Join a team or create your own to get started.',
          Lightbulb
        )
      case 'idea-view':
        return renderMemberIdeaView()
      case 'team':
        return isLeader ? renderTeamManagement() : renderPlaceholder(
          'Team Management',
          'Only team leaders can manage team members. Contact your team leader for changes.',
          Users
        )
      case 'team-info':
        return renderTeamInfo()
      case 'progress':
        return renderProgressTimeline()
      case 'resources':
        return renderResources()
      case 'settings':
        return renderSettings()
      default:
        return renderOverview()
    }
  }

  return (
    <div className="space-y-6">
      {renderContent()}
    </div>
  )
}
