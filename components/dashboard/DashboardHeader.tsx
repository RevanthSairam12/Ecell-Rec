'use client'

import React from 'react'
import { useStudentAuth } from '@/contexts/AuthContext'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Crown,
  User,
  Bell,
  Settings,
  LogOut,
  ChevronDown,
  Sparkles,
  Users,
  Clock,
  CheckCircle,
  AlertCircle,
  XCircle
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface DashboardHeaderProps {
  student: any
  team: any
}

export function DashboardHeader({ student, team }: DashboardHeaderProps) {
  const { studentLogout } = useStudentAuth()

  const isLeader = student?.role === 'leader'
  const hasTeam = !!team
  const teamSize = team?.team_members?.length || 0

  // Get greeting based on time of day
  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return 'Good morning'
    if (hour < 17) return 'Good afternoon'
    return 'Good evening'
  }

  // Get idea status info
  const getIdeaStatusInfo = () => {
    if (!team?.ideas?.[0]) {
      return {
        status: 'none',
        label: 'No idea submitted',
        icon: AlertCircle,
        color: 'text-muted-foreground'
      }
    }

    const idea = team.ideas[0]
    const statusConfig = {
      'submitted': {
        status: 'submitted',
        label: 'Idea submitted',
        icon: Clock,
        color: 'text-blue-400'
      },
      'under_review': {
        status: 'under_review',
        label: 'Under review',
        icon: Clock,
        color: 'text-yellow-400'
      },
      'approved': {
        status: 'approved',
        label: 'Idea approved',
        icon: CheckCircle,
        color: 'text-green-400'
      },
      'rejected': {
        status: 'rejected',
        label: 'Idea rejected',
        icon: XCircle,
        color: 'text-red-400'
      }
    }

    return statusConfig[idea.status as keyof typeof statusConfig] || statusConfig.submitted
  }

  const ideaStatus = getIdeaStatusInfo()

  const handleLogout = async () => {
    try {
      studentLogout()
      window.location.href = '/registration/login'
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="flex h-16 items-center justify-between px-6">
        {/* Left side - Sidebar trigger and greeting */}
        <div className="flex items-center gap-4">
          <SidebarTrigger className="h-8 w-8" />
          
          <div className="hidden md:block">
            <h1 className="text-xl font-semibold text-foreground">
              {getGreeting()}, {student?.name?.split(' ')[0]}!
            </h1>
            <p className="text-sm text-muted-foreground">
              Welcome to your E-Cell dashboard
            </p>
          </div>
        </div>

        {/* Center - Quick stats (visible on larger screens) */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Role badge */}
          <div className="flex items-center gap-2">
            {isLeader ? (
              <Crown className="h-4 w-4 text-yellow-500" />
            ) : (
              <User className="h-4 w-4 text-blue-500" />
            )}
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

          {/* Team size (for leaders) */}
          {isLeader && (
            <div className="flex items-center gap-2 text-sm">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">
                Team: {teamSize} member{teamSize !== 1 ? 's' : ''}
              </span>
            </div>
          )}

          {/* Idea status */}
          <div className="flex items-center gap-2 text-sm">
            <ideaStatus.icon className={cn('h-4 w-4', ideaStatus.color)} />
            <span className={ideaStatus.color}>
              {ideaStatus.label}
            </span>
          </div>
        </div>

        {/* Right side - Actions and user menu */}
        <div className="flex items-center gap-3">
          {/* Notifications (placeholder) */}
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <Bell className="h-4 w-4" />
          </Button>

          {/* User dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 gap-2 px-3">
                <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-medium">
                    {student?.name?.charAt(0)?.toUpperCase()}
                  </span>
                </div>
                <span className="hidden md:inline text-sm font-medium">
                  {student?.name?.split(' ')[0]}
                </span>
                <ChevronDown className="h-3 w-3 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>
                <div className="space-y-1">
                  <p className="text-sm font-medium">{student?.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {student?.email}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
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
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              
              {/* Quick stats in mobile */}
              <div className="lg:hidden px-2 py-2 space-y-2">
                {isLeader && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>Team: {teamSize} member{teamSize !== 1 ? 's' : ''}</span>
                  </div>
                )}
                <div className="flex items-center gap-2 text-sm">
                  <ideaStatus.icon className={cn('h-4 w-4', ideaStatus.color)} />
                  <span className={ideaStatus.color}>
                    {ideaStatus.label}
                  </span>
                </div>
              </div>
              <DropdownMenuSeparator className="lg:hidden" />

              <DropdownMenuItem disabled>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem 
                onClick={handleLogout}
                className="text-red-400 focus:text-red-300 focus:bg-red-500/10"
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
