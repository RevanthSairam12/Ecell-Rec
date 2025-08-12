'use client'

import React, { useState, useEffect } from 'react'
import { useStudentAuth } from '@/contexts/AuthContext'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuBadge,
  SidebarSeparator,
  useSidebar
} from '@/components/ui/sidebar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Home,
  Lightbulb,
  Users,
  TrendingUp,
  BookOpen,
  LogOut,
  Crown,
  User,
  ChevronRight,
  Sparkles,
  Target,
  FileText,
  Settings
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface DashboardSidebarProps {
  student: any
  team: any
  idea: any
  activeSection?: string
  onSectionChange?: (section: string) => void
}

interface NavigationItem {
  title: string
  icon: React.ComponentType<{ className?: string }>
  href?: string
  badge?: string
  badgeVariant?: 'default' | 'secondary' | 'destructive' | 'outline'
  onClick?: () => void
  active?: boolean
  disabled?: boolean
  description?: string
}

export function DashboardSidebar({
  student,
  team,
  idea,
  activeSection: propActiveSection = 'overview',
  onSectionChange
}: DashboardSidebarProps) {
  const { studentLogout } = useStudentAuth()
  const { state } = useSidebar()
  const [activeSection, setActiveSection] = useState(propActiveSection)

  // Update active section when prop changes
  React.useEffect(() => {
    setActiveSection(propActiveSection)
  }, [propActiveSection])

  // Handle section changes
  const handleSectionChange = (section: string) => {
    setActiveSection(section)
    onSectionChange?.(section)
  }

  const isLeader = student?.role === 'leader'
  const isMember = student?.role === 'member'
  const hasTeam = !!team
  const hasIdea = !!idea

  // Get status badge info
  const getStatusBadge = () => {
    if (!idea) return null
    
    const statusConfig = {
      'submitted': { label: 'Submitted', variant: 'default' as const },
      'under_review': { label: 'Review', variant: 'secondary' as const },
      'approved': { label: 'Approved', variant: 'default' as const },
      'rejected': { label: 'Rejected', variant: 'destructive' as const }
    }
    
    return statusConfig[idea.status as keyof typeof statusConfig] || null
  }

  const statusBadge = getStatusBadge()

  // Navigation items based on role
  const getNavigationItems = (): NavigationItem[] => {
    const baseItems: NavigationItem[] = [
      {
        title: 'Overview',
        icon: Home,
        active: activeSection === 'overview',
        onClick: () => handleSectionChange('overview'),
        description: 'Dashboard overview and stats'
      }
    ]

    if (isLeader) {
      baseItems.push(
        {
          title: 'Idea Management',
          icon: Lightbulb,
          active: activeSection === 'ideas',
          onClick: () => handleSectionChange('ideas'),
          badge: hasIdea ? statusBadge?.label : 'New',
          badgeVariant: hasIdea ? statusBadge?.variant : 'outline',
          description: 'Manage your startup idea'
        },
        {
          title: 'Team Management',
          icon: Users,
          active: activeSection === 'team',
          onClick: () => handleSectionChange('team'),
          badge: hasTeam ? `${team?.team_members?.length || 0}` : '0',
          description: 'Manage team members'
        },
        {
          title: 'Progress Timeline',
          icon: TrendingUp,
          active: activeSection === 'progress',
          onClick: () => handleSectionChange('progress'),
          description: 'Track submission progress'
        }
      )
    } else if (isMember) {
      baseItems.push(
        {
          title: 'Team Idea',
          icon: Lightbulb,
          active: activeSection === 'idea-view',
          onClick: () => handleSectionChange('idea-view'),
          badge: hasIdea ? statusBadge?.label : 'None',
          badgeVariant: hasIdea ? statusBadge?.variant : 'outline',
          description: 'View team\'s startup idea'
        },
        {
          title: 'Team Info',
          icon: Users,
          active: activeSection === 'team-info',
          onClick: () => handleSectionChange('team-info'),
          description: 'View team information'
        }
      )

      // If member is not in a team, show option to submit idea
      if (!hasTeam) {
        baseItems.push({
          title: 'Submit Idea',
          icon: Sparkles,
          active: activeSection === 'submit-idea',
          onClick: () => handleSectionChange('submit-idea'),
          badge: 'New',
          badgeVariant: 'default',
          description: 'Submit your startup idea'
        })
      }
    }

    // Common items for all roles
    baseItems.push(
      {
        title: 'Resources',
        icon: BookOpen,
        active: activeSection === 'resources',
        onClick: () => handleSectionChange('resources'),
        description: 'Helpful resources and guides'
      },
      {
        title: 'Settings',
        icon: Settings,
        active: activeSection === 'settings',
        onClick: () => handleSectionChange('settings'),
        description: 'Account and preferences'
      }
    )

    return baseItems
  }

  const navigationItems = getNavigationItems()

  const handleLogout = async () => {
    try {
      studentLogout()
      window.location.href = '/student-login'
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  return (
    <Sidebar variant="inset" className="border-r border-border/50">
      <SidebarHeader className="border-b border-border/50 p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">E</span>
          </div>
          {state === 'expanded' && (
            <div className="flex-1 min-w-0">
              <h2 className="text-lg font-semibold text-gradient-primary truncate">
                E-Cell REC
              </h2>
              <p className="text-xs text-muted-foreground">Student Dashboard</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="p-2">
        {/* Student Info */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-medium text-muted-foreground px-2">
            Student Profile
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="px-2 py-3 space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                  {isLeader ? (
                    <Crown className="h-4 w-4 text-yellow-500" />
                  ) : (
                    <User className="h-4 w-4 text-blue-500" />
                  )}
                </div>
                {state === 'expanded' && (
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{student?.name}</p>
                    <div className="flex items-center gap-2">
                      <Badge 
                        variant={isLeader ? 'default' : 'secondary'}
                        className={cn(
                          'text-xs',
                          isLeader ? 'role-badge-leader' : 'role-badge-member'
                        )}
                      >
                        {isLeader ? 'Team Leader' : 'Member'}
                      </Badge>
                    </div>
                  </div>
                )}
              </div>
              {state === 'expanded' && (
                <div className="text-xs text-muted-foreground space-y-1">
                  <p>Roll: {student?.roll_number}</p>
                  <p>Email: {student?.email}</p>
                </div>
              )}
            </div>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        {/* Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-medium text-muted-foreground px-2">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    onClick={item.onClick}
                    isActive={item.active}
                    disabled={item.disabled}
                    className={cn(
                      'w-full justify-start gap-3 px-2 py-2 h-auto',
                      item.active && 'bg-primary/10 text-primary border-primary/20'
                    )}
                  >
                    <item.icon className="h-4 w-4 shrink-0" />
                    {state === 'expanded' && (
                      <>
                        <div className="flex-1 text-left">
                          <div className="font-medium">{item.title}</div>
                          {item.description && (
                            <div className="text-xs text-muted-foreground">
                              {item.description}
                            </div>
                          )}
                        </div>
                        {item.badge && (
                          <SidebarMenuBadge>
                            <Badge 
                              variant={item.badgeVariant || 'default'}
                              className="text-xs"
                            >
                              {item.badge}
                            </Badge>
                          </SidebarMenuBadge>
                        )}
                        <ChevronRight className="h-3 w-3 opacity-50" />
                      </>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-border/50 p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <Button
              variant="ghost"
              onClick={handleLogout}
              className="w-full justify-start gap-3 px-2 py-2 h-auto text-red-400 hover:text-red-300 hover:bg-red-500/10"
            >
              <LogOut className="h-4 w-4" />
              {state === 'expanded' && (
                <span className="font-medium">Logout</span>
              )}
            </Button>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
