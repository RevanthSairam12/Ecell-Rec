'use client'

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Mail, Calendar, CheckCircle } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function JoinECellPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section - Matching home page style */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/group/group1.jpg"
            alt="Join E-Cell REC - Entrepreneurial Community"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Main Content - Center Aligned */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <Badge className="mb-6 bg-green-500/20 text-white border-green-300/30 backdrop-blur-sm">
              <CheckCircle className="w-4 h-4 mr-2" />
              Registrations Open
            </Badge>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              Join E-Cell REC
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-white/95 leading-relaxed font-light max-w-3xl mx-auto">
              Be part of the entrepreneurial revolution at Raghu Engineering College
            </p>
          </div>
        </div>
      </section>

      {/* Registration Closed Notice - Matching home page gray section style */}
      <section className="relative py-16 px-6 overflow-hidden bg-gray-50">
        {/* Pink decorative squiggly lines - matching home page style */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Top left squiggly line */}
          <svg
            className="absolute top-10 left-10 w-20 h-20 text-pink-400"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          >
            <path d="M10,50 Q30,20 50,50 T90,50" strokeLinecap="round"/>
            <path d="M15,60 Q35,30 55,60 T95,60" strokeLinecap="round"/>
          </svg>

          {/* Bottom right squiggly line */}
          <svg
            className="absolute bottom-10 right-10 w-24 h-24 text-pink-400"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          >
            <path d="M10,30 Q30,10 50,30 T90,30" strokeLinecap="round"/>
            <path d="M5,45 Q25,25 45,45 T85,45" strokeLinecap="round"/>
            <path d="M15,60 Q35,40 55,60 T95,60" strokeLinecap="round"/>
          </svg>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 md:p-12 text-center rounded-3xl shadow-lg border-2 border-green-200 bg-green-50/50">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Registrations Are Now Open!
              </h2>
              <p className="text-base md:text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
                Join E-Cell REC and be part of the entrepreneurial revolution! We're now accepting applications
                for passionate students who want to make their mark in the startup ecosystem.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900 mb-2">What You'll Get</h3>
                  <p className="text-gray-600 text-sm">
                    Access to exclusive events, mentorship opportunities, networking sessions, and startup resources.
                  </p>
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900 mb-2">Join Today</h3>
                  <p className="text-gray-600 text-sm">
                    Fill out our registration form and become part of our growing entrepreneurial community.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold text-base min-w-[180px] transition-all duration-300">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Register Now
                </Button>
                <Link href="/events">
                  <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold text-base min-w-[180px] transition-all duration-300">
                    <Calendar className="w-4 h-4 mr-2" />
                    View Past Events
                  </Button>
                </Link>
                <Link href="/resources">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-base min-w-[180px] transition-all duration-300">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Explore Resources
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Can Do Now - Matching home page blue section style */}
      <section className="relative py-16 px-6 overflow-hidden bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-blue-600 rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden">

            {/* Header Section */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Get Started Today
              </h2>
              <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
                Now that registrations are open, here are some ways to get involved and prepare for your entrepreneurial journey
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm p-6 text-center rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Follow Our Journey</h3>
                <p className="text-white/80 mb-4 text-sm">
                  Stay updated with our latest activities, events, and success stories through our social media channels.
                </p>
                <Link href="/events">
                  <Button className="bg-white text-blue-600 hover:bg-white/90 px-6 py-2 rounded-lg font-medium text-sm transition-all duration-300">
                    Learn More
                  </Button>
                </Link>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 text-center rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Prepare Yourself</h3>
                <p className="text-white/80 mb-4 text-sm">
                  Explore our resources section to learn about entrepreneurship, startup fundamentals, and business planning.
                </p>
                <Link href="/resources">
                  <Button className="bg-white text-blue-600 hover:bg-white/90 px-6 py-2 rounded-lg font-medium text-sm transition-all duration-300">
                    View Resources
                  </Button>
                </Link>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 text-center rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Get Notified</h3>
                <p className="text-white/80 mb-4 text-sm">
                  Subscribe to our newsletter to receive updates about registration openings and upcoming events.
                </p>
                <Button className="bg-white text-blue-600 hover:bg-white/90 px-6 py-2 rounded-lg font-medium text-sm transition-all duration-300">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Matching home page style */}
      <section className="relative py-16 px-6 overflow-hidden bg-gray-50">
        {/* Pink decorative squiggly lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Top left squiggly line */}
          <svg className="absolute top-10 left-10 w-20 h-20 text-pink-400" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M10,50 Q30,20 50,50 T90,50" strokeLinecap="round"/>
            <path d="M15,60 Q35,30 55,60 T95,60" strokeLinecap="round"/>
          </svg>

          {/* Bottom right squiggly line */}
          <svg className="absolute bottom-10 right-10 w-24 h-24 text-pink-400" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M10,30 Q30,10 50,30 T90,30" strokeLinecap="round"/>
            <path d="M5,45 Q25,25 45,45 T85,45" strokeLinecap="round"/>
            <path d="M15,60 Q35,40 55,60 T95,60" strokeLinecap="round"/>
          </svg>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Have Questions?
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
            If you have any questions about E-Cell REC or future registration opportunities,
            feel free to reach out to us.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold text-base min-w-[180px] transition-all duration-300">
              <Mail className="w-4 h-4 mr-2" />
              Contact Us
            </Button>
            <Link href="/team">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-base min-w-[180px] transition-all duration-300">
                <Users className="w-4 h-4 mr-2" />
                Meet Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
