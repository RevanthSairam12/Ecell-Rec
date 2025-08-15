'use client'

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EventsVideo from "@/app/pages/EventsVideo";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, Trophy, Target, Zap } from "lucide-react";

export default function EurekaPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section - Dark background */}
      <section className="relative h-screen flex items-center justify-start overflow-hidden pt-16 bg-slate-900">

        {/* Main Content - Left Aligned like home page */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            {/* Badge - matching home page style */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="text-white text-sm font-medium">🔥 College Pitching Competition</span>
            </div>

            {/* Main Heading - matching home page typography */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Eureka! 2025
            </h1>

            {/* Subheading - matching home page style */}
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light mb-8 max-w-2xl">
              Got a startup idea that's been living rent-free in your head? It's time to bring it to life! 💡
            </p>

            {/* Key Details - matching home page card style */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-3xl">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <Calendar className="w-6 h-6 text-blue-400 mb-2" />
                <p className="text-white font-semibold text-sm">23rd August 2025</p>
                <p className="text-white/70 text-xs">Offline Event</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <Clock className="w-6 h-6 text-red-400 mb-2" />
                <p className="text-white font-semibold text-sm">Deadline: 17th Aug</p>
                <p className="text-white/70 text-xs">NO late entries!</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <Users className="w-6 h-6 text-yellow-400 mb-2" />
                <p className="text-white font-semibold text-sm">Only 20 Teams</p>
                <p className="text-white/70 text-xs">Limited Seats</p>
              </div>
            </div>

            {/* CTA Button - matching home page style */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="https://forms.gle/uQjxYhCasJByrkUEA" target="_blank">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg">
                  Register Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Events Video Section - matching home page VideoSection style */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Section Header - matching home page style */}
            <div className="text-center mb-16">



            </div>
            <EventsVideo
              videoSrc="https://player.vimeo.com/video/1110380604"
              thumbnailSrc="/upcevents/eureka.jpeg"
              thumbnailAlt="Eureka Event Video"
            />
          </div>
        </div>
      </section>

      {/* Main Content Section - matching home page AboutSection style */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">

            {/* Hey Innovators Section - matching home page typography */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6">
                🚀 Innovation Challenge
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Hey Innovators!
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Got a startup idea that's been living rent-free in your head? It's time to bring it to life! 💡
              </p>
            </div>

            {/* Competition Details - matching home page card style */}
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-sm mb-16">
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  🎤 What's the deal?
                </h3>
                <p className="text-muted-foreground text-lg">
                  Here's everything you need to know about the competition format
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Target className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Pitch Format</h4>
                      <p className="text-muted-foreground">2 min pitch + 3 min Q&A in front of startup mentors & judges</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <Trophy className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Selection Process</h4>
                      <p className="text-muted-foreground">Only 20 teams get shortlisted – will yours be one of them? 👀</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Zap className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Fast-track Opportunity</h4>
                      <p className="text-muted-foreground">Fast-track to Eureka! Zonals at Delhi, Mumbai, Bengaluru</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Networking</h4>
                      <p className="text-muted-foreground">Network with the big brains of the startup world</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 text-center">
                <p className="text-blue-900 font-medium">
                  Get real, no-fluff feedback to sharpen your idea
                </p>
              </div>
            </div>

            {/* Judges Section - matching home page testimonial style */}
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-sm mb-16">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  👩‍⚖️ Who's watching?
                </h3>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  3–4 seasoned startup ecosystem mentors – ready to spot the next big thing🔥
                </p>
                <p className="text-lg md:text-xl text-foreground font-semibold mt-4">
                  (and maybe, that's YOU!)
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA Section - matching home page JoinECellCommunitySection style */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">

            {/* Main CTA Content */}
            <div className="mb-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-6">
                ⏰ Limited Time
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                💥 Don't just dream it. Pitch it. Own it.
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Seats are super limited – once they're gone, they're gone!
              </p>
              <p className="text-xl md:text-2xl font-bold text-foreground mb-8">
                👉 Register NOW before 17th Aug and grab your chance now
              </p>
            </div>

            {/* CTA Button - matching home page style */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://forms.gle/uQjxYhCasJByrkUEA" target="_blank">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 hover:shadow-lg">
                  Register Here
                </Button>
              </Link>
            </div>

            {/* Additional Info */}
            <p className="text-sm text-muted-foreground mt-8">
              Use your NEC ID referral • No late entries accepted
            </p>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
