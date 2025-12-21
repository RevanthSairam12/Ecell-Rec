'use client'

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { Lightbulb, Target, TrendingUp, ArrowRight, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "@/components/PageHero";

// Motion Text Roll Component
const MotionTextRoll = ({ 
  texts, 
  className = "",
  style = {},
  interval = 4000
}: { 
  texts: string[], 
  className?: string,
  style?: React.CSSProperties,
  interval?: number
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, interval);
    return () => clearInterval(timer);
  }, [texts.length, interval]);

  const currentText = texts[currentIndex];

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ ...style, perspective: '1000px' }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="flex justify-center flex-wrap"
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {currentText.split('').map((letter, index) => (
            <motion.span
              key={`${currentIndex}-${index}`}
              className="inline-block"
              style={{ 
                transformStyle: 'preserve-3d',
                display: letter === ' ' ? 'inline' : 'inline-block',
                minWidth: letter === ' ' ? '0.3em' : 'auto'
              }}
              variants={{
                hidden: { 
                  opacity: 0, 
                  rotateX: -90,
                  y: 15,
                },
                visible: { 
                  opacity: 1, 
                  rotateX: 0,
                  y: 0,
                  transition: {
                    duration: 0.4,
                    delay: index * 0.02,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }
                },
                exit: { 
                  opacity: 0, 
                  rotateX: 90,
                  y: -15,
                  transition: {
                    duration: 0.25,
                    delay: index * 0.015,
                    ease: [0.55, 0.06, 0.68, 0.19]
                  }
                }
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default function Startups() {
  const subtitleTexts = ["From Idea to Reality", "Build Your Startup With Us", "Concept to Success"];
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

      {/* Startup Stories - More natural, authentic design */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Simple Header */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Student Startup Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the innovative startups built by our community members
            </p>
          </div>

          {/* Startup Cards - More casual grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {startupStories.map((startup, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
                  {/* Header with logo and badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center text-white font-semibold shrink-0">
                        {startup.logo}
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">{startup.name}</h3>
                        <p className="text-sm text-gray-500">{startup.founder}</p>
                      </div>
                    </div>
                    <span className="text-xs font-medium px-3 py-1 bg-gray-100 text-gray-700 rounded-full whitespace-nowrap">
                      {startup.badge}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 mb-5 leading-relaxed">{startup.description}</p>

                  {/* Status info - simpler layout */}
                  <div className="flex gap-6 mb-5 text-sm">
                    <div>
                      <span className="text-gray-500">Status: </span>
                      <span className="text-gray-900 font-medium">{startup.status}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Funding: </span>
                      <span className="text-gray-900 font-medium">{startup.funding}</span>
                    </div>
                  </div>

                  {/* Achievements - cleaner list */}
                  <div className="border-t border-gray-100 pt-4">
                    <ul className="space-y-2">
                      {startup.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-600">
                          <span className="text-gray-400 mr-2">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
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
