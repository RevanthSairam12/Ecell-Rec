'use client'

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Lightbulb, Target } from "lucide-react";
import { ECellLogo } from "@/components/ECellLogo";
import { SimpleThemeToggle } from "@/components/ui/theme-toggle";


export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // Check if user is already logged in
    const userData = localStorage.getItem("user");
    if (userData) {
      router.push("registration/dashboard");
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Theme Toggle - Fixed position */}
      <div className="fixed top-6 right-6 z-50">
        <SimpleThemeToggle />
      </div>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with clean gradient */}
        <div className="absolute inset-0 bg-gradient-secondary">
          <div className="absolute inset-0 bg-gradient-to-br from-background/50 to-background/80" />
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-24 h-24 rounded-full bg-gradient-primary opacity-20 blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-gradient-accent opacity-15 blur-xl animate-pulse delay-1000" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-card/50 backdrop-blur-sm mb-6 transition-colors duration-300">
            <ECellLogo size="sm" className="text-primary" />
            <span className="text-xs font-medium">Raghu Engineering College E-Cell</span>
          </div>

          {/* Main heading */}
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent leading-tight">
            Startup Submission Portal
          </h1>

          <p className="text-base md:text-lg text-muted-foreground mb-3 max-w-2xl mx-auto leading-relaxed">
            Submit your innovative startup ideas and get them reviewed by our expert panel
          </p>

          <p className="text-sm text-muted-foreground mb-8 max-w-xl mx-auto">
            Join our entrepreneurial community and transform your ideas into reality with mentorship, funding, and incubation support.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
            <Button
              size="default"
              className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 group px-6 py-2"
              onClick={() => router.push("registration/register")}
            >
              Get Started
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="default"
              className="px-6 py-2 border-primary/30 hover:bg-primary/10 transition-all duration-300"
              onClick={() => router.push("registration/login")}
            >
              <Users className="mr-2 w-4 h-4" />
              Already Registered?
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-primary/20 mb-3 group-hover:bg-gradient-primary/30 transition-all duration-300">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary mb-1">100+</div>
              <div className="text-sm text-muted-foreground">Ideas Submitted</div>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-primary/20 mb-3 group-hover:bg-gradient-primary/30 transition-all duration-300">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary mb-1">50+</div>
              <div className="text-sm text-muted-foreground">Active Mentors</div>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-primary/20 mb-3 group-hover:bg-gradient-primary/30 transition-all duration-300">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary mb-1">25+</div>
              <div className="text-sm text-muted-foreground">Startups Incubated</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
