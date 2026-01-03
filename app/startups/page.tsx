'use client'

import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { Lightbulb, Target, TrendingUp, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import AppNavbar from "@/components/AppNavbar";

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
      name: "AVATAQ.AI",
      founder: "Vishal & Santosh",
      description: "AI-powered Agentic AI",
      status: "Research Stage",
      badge: "Research Stage",
      funding: "Looking for VCS",
      logo: "AQ",
      achievements: ["Defined core problem statement", "Early research completed", "Working on concept validation"]
    },
    {
      name: "PromptCraft",
      founder: "Vishal & Santosh",
      description: "Prompt tool for students for perfect JSON prompts",
      status: "Prototype Ready",
      badge: "Prototype Ready",
      funding: "Looking for VCS",
      logo: "PC",
      achievements: ["Prototype developed", "Early user testings", "Pilot demo with small creator community"]
    },
    {
      name: "Buildtrix",
      founder: "Ganesh Tappiti",
      description: "Easy platform to generate MVP's",
      status: "Early Stage",
      badge: "MVP Ready",
      funding: "Looking for VCS",
      logo: "BT",
      achievements: ["Product launched and live", "100+ active users onboarded", "Positive feedback from early adopters"]
    },
    {
      name: "Urja H2",
      founder: "Sai Pawan",
      description: "Hydrogen-based energy venture",
      status: "Prototype Ready",
      badge: "Prototype Ready",
      funding: "Exploring Grants",
      logo: "UH",
      achievements: ["Prototype built", "Lab testing initiated", "Early mentor feedback"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <AppNavbar />
      {/* <Header /> */}  {/* Old Header */}


      <PageHero
        title="Our"
        highlight="Startups"
        description="From Idea to Reality. Build Your Startup With Us. Concept to Success."
      />

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

      {/* Startup Stories Section */}
      <section className="relative py-20 px-6 overflow-hidden bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Student <span className="text-blue-600">Startup Stories</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Meet the innovative startups built by our community members
            </p>
          </div>

          {/* Startup Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {startupStories.map((startup, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 group"
              >
                {/* Header with logo */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-105 transition-transform duration-300">
                    {startup.logo}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{startup.name}</h3>
                    <p className="text-sm text-gray-500">by {startup.founder}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">{startup.description}</p>

                {/* Status info */}
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg">
                    <span className="text-gray-400 text-sm">Status:</span>
                    <span className="text-gray-900 font-semibold text-sm">{startup.status}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg">
                    <span className="text-gray-400 text-sm">Funding:</span>
                    <span className="text-gray-900 font-semibold text-sm">{startup.funding}</span>
                  </div>
                </div>

                {/* Achievements */}
                <div className="border-t border-gray-100 pt-5">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Key Achievements</p>
                  <ul className="space-y-2">
                    {startup.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-0.5 shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply CTA Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Startup?
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Join our next cohort of entrepreneurs and get the support you need to turn your idea into reality
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0 }}
              className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            >
              <div className="text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-white/80">Startups Supported</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            >
              <div className="text-4xl font-bold text-white mb-2">₹5L+</div>
              <div className="text-white/80">Total Funding</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            >
              <div className="text-4xl font-bold text-white mb-2">85%</div>
              <div className="text-white/80">Success Rate</div>
            </motion.div>
          </div>

          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Apply Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
