'use client'

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Eye, Users, MessageCircle, ExternalLink, Plus, Shield, Mail } from "lucide-react";
import { ECellLogo } from "@/components/ECellLogo";

interface User {
  name: string;
  rollNumber: string;
  email: string;
}

interface Submission {
  ideaTitle: string;
  oneLinerPitch: string;
  submittedAt: string;
}

export default function ConfirmationPage() {
  const [user, setUser] = useState<User | null>(null);
  const [submission, setSubmission] = useState<Submission | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem("user");
    if (!userData) {
      router.push("/login");
      return;
    }
    setUser(JSON.parse(userData));

    // Check if submission exists
    const submissionData = localStorage.getItem("submission");
    if (!submissionData) {
      router.push("/dashboard");
      return;
    }
    setSubmission(JSON.parse(submissionData));
  }, [router]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("submission");
    router.push("/login");
  };

  const handleViewSubmission = () => {
    router.push("/registration/submission-details");
  };

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

  return (
    <div className="min-h-screen bg-background">
      {/* Background elements */}
      <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-primary opacity-20 blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-gradient-accent opacity-15 blur-xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-6 py-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-card/50 backdrop-blur-sm mb-4">
            <ECellLogo size="sm" className="text-primary" />
            <span className="text-xs font-medium">E-Cell</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Submission Confirmed! 🎉
          </h1>
          <p className="text-sm text-muted-foreground">
            Your startup idea has been successfully submitted
          </p>
        </div>

        {/* Confirmation Card */}
        <div className="max-w-2xl mx-auto space-y-6">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-xl text-green-600">Submission Successful!</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center space-y-3">
                <h2 className="text-xl font-semibold">
                  Thanks for submitting, {user.name.split(' ')[0]} 👋
                </h2>
                <p className="text-muted-foreground">
                  Your idea has been received. We&apos;ll get back to you soon.
                </p>
                <p className="text-sm text-muted-foreground">
                  Startup idea: &ldquo;<span className="font-medium text-foreground">{submission.ideaTitle}</span>&rdquo;
                </p>
              </div>

              <div className="bg-background/50 rounded-lg p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Submission ID:</span>
                  <Badge variant="secondary">{user.rollNumber}-{new Date(submission.submittedAt).getTime().toString().slice(-6)}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Status:</span>
                  <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Under Review</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Submitted:</span>
                  <span className="text-sm font-medium">{new Date(submission.submittedAt).toLocaleDateString()}</span>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-medium text-blue-900 mb-2">What happens next?</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Your submission will be reviewed by our expert panel</li>
                  <li>• You&apos;ll receive an email update within 7-10 business days</li>
                  <li>• Selected ideas will be invited for a pitch presentation</li>
                  <li>• Winners will receive mentorship and incubation support</li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-medium text-green-900 mb-2">🎉 Access Your Dashboard</h4>
                <p className="text-sm text-green-800">
                  You can now access your student dashboard using the same login credentials.
                  Track your idea status, manage your team, and get updates on your submission!
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button
              variant="outline"
              onClick={handleViewSubmission}
              className="flex items-center gap-2"
            >
              <Eye className="w-4 h-4" />
              View My Submission
            </Button>

            <Button
              onClick={() => router.push("/dashboard")}
              className="flex items-center gap-2 bg-primary hover:bg-primary/90"
            >
              <Users className="w-4 h-4" />
              Access Dashboard
            </Button>

            <Button
              variant="outline"
              onClick={() => router.push("/registration/submission-limit")}
              className="flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Submit Another Idea
            </Button>
          </div>

          {/* E-Cell Social Links */}
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Connect with E-Cell
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Stay updated with E-Cell activities and connect with fellow entrepreneurs
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <Button
                    variant="outline"
                    className="justify-start gap-2"
                    onClick={() => window.open("https://wa.me/919876543210?text=Hi! I just submitted my startup idea through the E-Cell portal.", "_blank")}
                  >
                    <MessageCircle className="w-4 h-4 text-green-600" />
                    Join WhatsApp Group
                    <ExternalLink className="w-3 h-3 ml-auto" />
                  </Button>

                  <Button
                    variant="outline"
                    className="justify-start gap-2"
                    onClick={() => window.open("https://instagram.com/ecell_raghu", "_blank")}
                  >
                    <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded" />
                    Follow on Instagram
                    <ExternalLink className="w-3 h-3 ml-auto" />
                  </Button>

                  <Button
                    variant="outline"
                    className="justify-start gap-2"
                    onClick={() => window.open("https://linkedin.com/company/ecell-raghu", "_blank")}
                  >
                    <div className="w-4 h-4 bg-blue-600 rounded" />
                    Connect on LinkedIn
                    <ExternalLink className="w-3 h-3 ml-auto" />
                  </Button>

                  <Button
                    variant="outline"
                    className="justify-start gap-2"
                    onClick={() => window.open("mailto:ecell@raghuenggcollege.in", "_blank")}
                  >
                    <MessageCircle className="w-4 h-4 text-blue-600" />
                    Email Support
                    <ExternalLink className="w-3 h-3 ml-auto" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* E-Cell Startup Assistance Team Monitoring Block */}
          <div className="p-8 rounded-xl bg-gradient-to-br from-[#3b0764] to-[#1e1b4b] text-white shadow-xl border border-purple-600/30">
            <div className="flex items-start gap-4">
              <Shield className="w-8 h-8 text-purple-300 mt-1 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  🛡️ Monitored by E-Cell Startup Assistance Team
                </h3>
                <p className="text-gray-200 mb-6 leading-relaxed text-lg">
                  Your submission will be personally reviewed and monitored by the Startup Assistance Lead and the E-Cell Mentorship Committee.
                </p>

                <div className="space-y-4 mb-6">
                  <p className="text-sm font-semibold text-purple-300">We&apos;re committed to supporting your entrepreneurial journey by:</p>
                  <ul className="list-disc list-inside text-sm text-gray-300 space-y-2 ml-4">
                    <li>Guiding you through validation & MVP stages</li>
                    <li>Providing feedback on your pitch deck</li>
                    <li>Preparing you for Demo Day and Incubator rounds</li>
                    <li>Connecting promising teams to funding and campus opportunities</li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                  <p className="text-sm font-semibold text-purple-300 mb-3 flex items-center gap-2">
                    📞 Contact Information:
                  </p>
                  <div className="space-y-2 text-sm text-gray-200">
                    <div className="flex items-center gap-3">
                      <Users className="w-4 h-4 text-purple-300" />
                      <span><strong>Ganesh Tappiti</strong> — Startup Assistance Lead</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-purple-300" />
                      <a href="mailto:tappitiganesh@gmail.com" className="text-purple-300 hover:text-white hover:underline">
                        tappitiganesh@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <ExternalLink className="w-4 h-4 text-purple-300" />
                      <span>Raghu Engineering College (E-Cell REC)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
