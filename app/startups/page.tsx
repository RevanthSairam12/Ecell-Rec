'use client'

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Lightbulb, Target, TrendingUp, ArrowRight, ExternalLink, CheckCircle } from "lucide-react";

export default function Startups() {
  const processSteps = [
    {
      step: "01",
      title: "Ideation",
      description: "Brainstorm, validate, and refine your startup idea with our expert mentors",
      features: ["Idea Validation Workshops", "Market Research Support", "Mentor Guidance"],
      icon: Lightbulb,
      color: "text-innovation bg-innovation/10"
    },
    {
      step: "02", 
      title: "Validation",
      description: "Build MVP, test with real users, and iterate based on feedback",
      features: ["MVP Development", "User Testing", "Product-Market Fit"],
      icon: Target,
      color: "text-primary bg-primary/10"
    },
    {
      step: "03",
      title: "Growth",
      description: "Scale your startup with funding support and business development",
      features: ["Funding Assistance", "Business Development", "Investor Connections"],
      icon: TrendingUp,
      color: "text-success bg-success/10"
    }
  ];

  const startupStories = [
    {
      name: "AvatAQ",
      founder: "Rahul Sharma",
      description: "AI-powered water quality monitoring system for smart cities",
      status: "Incubated",
      badge: "NSIC Shortlisted",
      funding: "₹15L Raised",
      logo: "AQ",
      achievements: ["50+ Installations", "3 City Partnerships", "IoT Innovation Award"]
    },
    {
      name: "EduTech Solutions",
      founder: "Priya Patel",
      description: "Personalized learning platform for rural education",
      status: "Prototype Ready",
      badge: "Prototype Ready",
      funding: "₹5L Seeking",
      logo: "ES",
      achievements: ["1000+ Students", "5 Schools", "Education Excellence Award"]
    },
    {
      name: "GreenTech Innovations",
      founder: "Arjun Kumar",
      description: "Sustainable packaging solutions for e-commerce",
      status: "Early Stage",
      badge: "Incubated",
      funding: "₹8L Raised",
      logo: "GT",
      achievements: ["Zero Waste Goal", "B2B Partnerships", "Sustainability Award"]
    },
    {
      name: "HealthAI",
      founder: "Sneha Reddy",
      description: "AI-driven diagnostic tool for remote healthcare",
      status: "Growth Stage",
      badge: "NSIC Shortlisted",
      funding: "₹25L Raised",
      logo: "HA",
      achievements: ["FDA Approved", "10K+ Diagnoses", "Healthcare Innovation"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - Matching home page style */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/group/group1.jpg"
            alt="Startup Assistance - E-Cell REC"
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
            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              Startup Assistance
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-white/95 leading-relaxed font-light max-w-3xl mx-auto mb-8">
              Have a startup idea? We'll help you build it from concept to reality
            </p>

            {/* CTA Button */}
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Apply for Support
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* 3-Step Process - Matching home page blue section style */}
      <section className="relative py-16 px-6 overflow-hidden bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-blue-600 rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden">

            {/* Header Section */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Our 3-Stage Support Program
              </h2>
              <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
                A structured approach to transform your idea into a thriving business
              </p>
            </div>

            {/* Process Steps */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-8 relative overflow-hidden rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  {/* Step Number */}
                  <div className="absolute top-4 right-4 text-6xl font-bold text-white/20">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-white/80 mb-6">{step.description}</p>

                  <div className="space-y-3">
                    {step.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-white" />
                        <span className="text-white/90">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Startup Stories - Matching home page gray section style */}
      <section className="relative py-16 px-6 overflow-hidden bg-gray-50">
        {/* Pink decorative squiggly lines */}
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
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Student Startup Stories
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Meet the innovative startups built by our community members
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {startupStories.map((startup, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                      {startup.logo}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{startup.name}</h3>
                      <p className="text-gray-600">by {startup.founder}</p>
                    </div>
                  </div>
                  <Badge
                    className={startup.badge === "NSIC Shortlisted" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"}
                  >
                    {startup.badge}
                  </Badge>
                </div>

                <p className="text-gray-600 mb-6">{startup.description}</p>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <div className="text-sm text-gray-500">Status</div>
                      <div className="font-semibold text-gray-900">{startup.status}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-500">Funding</div>
                      <div className="font-semibold text-blue-600">{startup.funding}</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-sm text-gray-900">Key Achievements:</h4>
                  <div className="flex flex-wrap gap-2">
                    {startup.achievements.map((achievement, i) => (
                      <Badge key={i} className="bg-gray-100 text-gray-700 text-xs">
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300">
                  View Details
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-hero-gradient rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Your Startup?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join our next cohort of entrepreneurs and get the support you need to turn your idea into reality
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="opacity-90">Startups Supported</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">₹5L+</div>
                <div className="opacity-90">Total Funding</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">85%</div>
                <div className="opacity-90">Success Rate</div>
              </div>
            </div>

            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
