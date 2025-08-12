'use client'

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  AlertTriangle, 
  Users, 
  Lightbulb, 
  UserPlus, 
  Mail,
  MessageCircle,
  ExternalLink,
  Shield,
  CheckCircle
} from "lucide-react";
import { ECellLogo } from "@/components/ECellLogo";

interface User {
  name: string;
  rollNumber: string;
  email: string;
}

export default function SubmissionLimitPage() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem("user");
    if (!userData) {
      router.push("/registration/login");
      return;
    }
    setUser(JSON.parse(userData));
  }, [router]);

  if (!user) {
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
                <h1 className="text-xl font-bold">Submission Limit Reached</h1>
                <p className="text-sm text-muted-foreground">One submission per user policy</p>
              </div>
            </div>
          </div>
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
            <CheckCircle className="w-3 h-3 mr-1" />
            Already Submitted
          </Badge>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {/* Main Alert Card */}
          <Card className="bg-card/50 backdrop-blur-sm border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-orange-800">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
                One Submission Per User Policy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-orange-900">
                <p className="text-lg font-medium mb-3">
                  Hi {user.name.split(' ')[0]}! 👋
                </p>
                <p className="mb-4">
                  You have already submitted your startup idea to the E-Cell portal. Currently, our policy allows 
                  <strong className="text-orange-800"> only one submission per user account</strong> to ensure fair 
                  evaluation and maintain the quality of submissions.
                </p>
                <div className="bg-orange-100 border border-orange-300 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-800 mb-2 flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    Why this policy?
                  </h4>
                  <ul className="text-sm text-orange-800 space-y-1 list-disc list-inside">
                    <li>Ensures fair evaluation for all participants</li>
                    <li>Maintains focus on quality over quantity</li>
                    <li>Allows proper mentorship allocation</li>
                    <li>Prevents system overload during evaluation</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Alternative Solutions */}
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-primary" />
                Have Another Great Idea?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                If you have additional startup ideas you'd like to submit, here are your options:
              </p>

              <div className="space-y-4">
                {/* Team Member Option */}
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Users className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-blue-900 mb-2">Use Your Teammate's Account</h4>
                      <p className="text-blue-800 text-sm mb-3">
                        If you're working with teammates, one of them can create an account and submit 
                        the idea on behalf of the team. You can still be listed as a team member.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs">
                          <UserPlus className="w-3 h-3 mr-1" />
                          Teammate Registration
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          <Users className="w-3 h-3 mr-1" />
                          Team Collaboration
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Support Option */}
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <MessageCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-green-900 mb-2">Contact E-Cell Support</h4>
                      <p className="text-green-800 text-sm mb-3">
                        Have exceptional circumstances or multiple innovative ideas? Reach out to our 
                        support team to discuss your situation.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-green-800">
                          <Mail className="w-4 h-4" />
                          <a href="mailto:tappitiganesh@gmail.com" className="hover:underline">
                            tappitiganesh@gmail.com
                          </a>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-green-800">
                          <MessageCircle className="w-4 h-4" />
                          <span>Ganesh Tappiti - Startup Assistance Lead</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Current Submission Status */}
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Your Current Submission
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Don't worry! Your current submission is safe and being reviewed by our expert panel.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={() => router.push("/registration/submission-details")}
                  className="flex-1 gap-2"
                >
                  <CheckCircle className="w-4 h-4" />
                  View My Submission
                </Button>
                <Button
                  variant="outline"
                  onClick={() => router.push("/registration/confirmation")}
                  className="flex-1 gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Confirmation
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Help & Support */}
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-primary" />
                Need Help?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  className="justify-start gap-2"
                  onClick={() => window.open("https://wa.me/919876543210?text=Hi! I have questions about the submission policy.", "_blank")}
                >
                  <MessageCircle className="w-4 h-4 text-green-600" />
                  WhatsApp Support
                  <ExternalLink className="w-3 h-3 ml-auto" />
                </Button>

                <Button
                  variant="outline"
                  className="justify-start gap-2"
                  onClick={() => window.open("mailto:tappitiganesh@gmail.com?subject=Submission Policy Question", "_blank")}
                >
                  <Mail className="w-4 h-4 text-blue-600" />
                  Email Support
                  <ExternalLink className="w-3 h-3 ml-auto" />
                </Button>
              </div>
            </CardContent>
          </Card>

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
