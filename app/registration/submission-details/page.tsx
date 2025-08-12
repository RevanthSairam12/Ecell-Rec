'use client'

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { 
  ArrowLeft, 
  FileText, 
  Users, 
  Lightbulb, 
  Target, 
  Rocket, 
  Phone, 
  ExternalLink,
  Calendar,
  User,
  Mail,
  GraduationCap,
  Building
} from "lucide-react";
import { ECellLogo } from "@/components/ECellLogo";

interface User {
  name: string;
  rollNumber: string;
  email: string;
  branch: string;
  year: string;
  phone: string;
}

interface TeamMember {
  fullName: string;
  rollNumber: string;
  branch: string;
  year: string;
  phoneNumber: string;
}

interface Submission {
  ideaTitle: string;
  problemStatement: string;
  proposedSolution: string;
  oneLinerPitch: string;
  detailedExplanation: string;
  startupStage: string;
  phoneNumber: string;
  teamName: string;
  teamMembers: TeamMember[];
  githubLink?: string;
  driveLink?: string;
  figmaLink?: string;
  submittedAt: string;
  status: string;
}

export default function SubmissionDetailsPage() {
  const [user, setUser] = useState<User | null>(null);
  const [submission, setSubmission] = useState<Submission | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem("user");
    if (!userData) {
      router.push("/registration/login");
      return;
    }
    setUser(JSON.parse(userData));

    // Check if submission exists
    const submissionData = localStorage.getItem("submission");
    if (!submissionData) {
      router.push("/registration/dashboard");
      return;
    }
    setSubmission(JSON.parse(submissionData));
  }, [router]);

  if (!user || !submission) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  const submissionId = `${user.rollNumber}-${new Date(submission.submittedAt).getTime().toString().slice(-6)}`;

  return (
    <div className="min-h-screen bg-background">
      {/* Background elements */}
      <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-primary opacity-20 blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-gradient-accent opacity-15 blur-xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-6 py-8 relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => router.back()}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
            <div className="flex items-center gap-2">
              <ECellLogo size="sm" className="text-primary" />
              <div>
                <h1 className="text-xl font-bold">Submission Details</h1>
                <p className="text-sm text-muted-foreground">View your submitted startup idea</p>
              </div>
            </div>
          </div>
          <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
            Under Review
          </Badge>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Submission Overview */}
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                Submission Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Submission ID</Label>
                  <p className="font-mono text-sm bg-muted/50 p-2 rounded">{submissionId}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Submitted On</Label>
                  <p className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(submission.submittedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Submitter Information */}
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                Submitter Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Full Name</Label>
                  <p className="font-medium">{user.name}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Roll Number</Label>
                  <p className="font-medium">{user.rollNumber}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Email</Label>
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    {user.email}
                  </p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Branch</Label>
                  <p className="flex items-center gap-2">
                    <Building className="w-4 h-4" />
                    {user.branch}
                  </p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Year</Label>
                  <p className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4" />
                    {user.year}
                  </p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Phone</Label>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    {submission.phoneNumber}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Startup Idea Details */}
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-primary" />
                Startup Idea Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="text-sm font-medium text-muted-foreground">Idea Title</Label>
                <h2 className="text-xl font-bold text-primary mt-1">{submission.ideaTitle}</h2>
              </div>

              <div>
                <Label className="text-sm font-medium text-muted-foreground">Startup Pitch</Label>
                <div className="mt-2 p-4 bg-purple-50 border border-purple-200 rounded-lg">
                  <p className="text-purple-900 text-sm leading-relaxed whitespace-pre-wrap">{submission.oneLinerPitch}</p>
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium text-muted-foreground">Startup Stage</Label>
                <Badge variant="secondary" className="mt-1">
                  <Rocket className="w-3 h-3 mr-1" />
                  {submission.startupStage}
                </Badge>
              </div>

              <div>
                <Label className="text-sm font-medium text-muted-foreground">Problem Statement</Label>
                <div className="mt-2 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-start gap-2">
                    <Target className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <p className="text-red-900 text-sm leading-relaxed">{submission.problemStatement}</p>
                  </div>
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium text-muted-foreground">Proposed Solution</Label>
                <div className="mt-2 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-start gap-2">
                    <Lightbulb className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-green-900 text-sm leading-relaxed">{submission.proposedSolution}</p>
                  </div>
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium text-muted-foreground">Detailed Explanation</Label>
                <div className="mt-2 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-blue-900 text-sm leading-relaxed whitespace-pre-wrap">{submission.detailedExplanation}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Team Information */}
          {submission.teamMembers && submission.teamMembers.length > 0 && (
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Team Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {submission.teamName && (
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Team Name</Label>
                    <p className="text-lg font-semibold text-primary">{submission.teamName}</p>
                  </div>
                )}

                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Team Members ({submission.teamMembers.length})</Label>
                  <div className="mt-2 space-y-3">
                    {submission.teamMembers.map((member, index) => (
                      <div key={index} className="p-3 bg-muted/30 rounded-lg border">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                          <div>
                            <Label className="text-xs text-muted-foreground">Name</Label>
                            <p className="font-medium">{member.fullName}</p>
                          </div>
                          <div>
                            <Label className="text-xs text-muted-foreground">Roll Number</Label>
                            <p className="font-medium">{member.rollNumber}</p>
                          </div>
                          <div>
                            <Label className="text-xs text-muted-foreground">Branch</Label>
                            <p className="font-medium">{member.branch}</p>
                          </div>
                          <div>
                            <Label className="text-xs text-muted-foreground">Year</Label>
                            <p className="font-medium">{member.year}</p>
                          </div>
                          <div>
                            <Label className="text-xs text-muted-foreground">Phone</Label>
                            <p className="font-medium">{member.phoneNumber}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Supporting Links */}
          {(submission.githubLink || submission.driveLink || submission.figmaLink) && (
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ExternalLink className="w-5 h-5 text-primary" />
                  Supporting Links
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {submission.githubLink && (
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">GitHub Repository</Label>
                    <a
                      href={submission.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-800 hover:underline mt-1"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {submission.githubLink}
                    </a>
                  </div>
                )}

                {submission.driveLink && (
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Drive Link</Label>
                    <a
                      href={submission.driveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-800 hover:underline mt-1"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {submission.driveLink}
                    </a>
                  </div>
                )}

                {submission.figmaLink && (
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Figma Design</Label>
                    <a
                      href={submission.figmaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-800 hover:underline mt-1"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {submission.figmaLink}
                    </a>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => router.push("/registration/confirmation")}
              className="flex-1 gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Confirmation
            </Button>
            <Button
              variant="outline"
              onClick={() => window.print()}
              className="flex-1 gap-2"
            >
              <FileText className="w-4 h-4" />
              Print Submission
            </Button>
          </div>

          {/* Back to Home */}
          <div className="text-center">
            <Link href="/" className="text-primary hover:underline text-sm">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
