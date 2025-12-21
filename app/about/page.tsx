"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import advisoryBoardMembers from "@/lib/advisoryBoard";
import { motion, AnimatePresence } from "framer-motion";

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

const about = [
  {
    imageSrc: "/raghu-sir-1.jpg",
    name: "Raghu Kalidindi",
    title: "Chairman, Raghu Educational Society",
    description: "Leading the vision and strategic direction of our educational institution with decades of experience in academic excellence.",
    expertise: "Strategic Leadership",
    color: "from-emerald-500 to-teal-600"
  },
  {
    imageSrc: "/RamaDevi-Kalidindi-1.jpg",
    name: "Rama Devi Kalidindi",
    title: "Secretary, Raghu Educational Society",
    description: "Overseeing administrative excellence and ensuring the highest standards of educational quality across all institutions.",
    expertise: "Administrative Excellence",
    color: "from-purple-500 to-pink-600"
  },
  {
    imageSrc: "/Rahul-Kalidindi-1.jpg",
    name: "Rahul Kalidindi",
    title: "Director, Raghu Educational Society",
    description: "Driving innovation and modern educational practices to prepare students for the challenges of tomorrow.",
    expertise: "Innovation & Growth",
    color: "from-blue-500 to-indigo-600"
  },
  {
    imageSrc: "/principal.jpg",
    name: "Dr. Ch. Srinivasu",
    title: "Principal, Raghu Educational Institution",
    description: "Providing academic leadership and fostering an environment of learning, research, and student development.",
    expertise: "Academic Leadership",
    color: "from-orange-500 to-red-600"
  },
  {
    imageSrc: "/kiranspecial.png",
    name: "Dr. G. Kiran Kumar",
    title: "Faculty Coordinator of ECELL REC",
    description: "Mentoring students in entrepreneurship and guiding the E-Cell initiatives towards success and innovation.",
    expertise: "Entrepreneurship",
    color: "from-green-500 to-emerald-600"
  },
  {
    imageSrc: "/ramesh-sir.jpg",
    name: "Dr. Ramesh Babu",
    title: "Coordinator - Entrepreneur Innovation Startup Committee (ESIC)",
    description: "Leading startup initiatives and fostering entrepreneurial spirit among students through innovative programs.",
    expertise: "Startup Ecosystem",
    color: "from-violet-500 to-purple-600"
  },
];

const page = () => {
  const titleTexts = ["Empowering Tomorrow's Leaders"];
  const subtitleTexts = ["Advisory Board", "Guiding Vision", "Inspiring Excellence"];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Matching home page style with Motion Text Roll */}
      <section className="hero relative">
        <div className="relative w-full min-h-screen overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/40"></div>

          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Floating Gradient Orbs */}
            <motion.div
              className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-200/40 to-indigo-300/30 blur-3xl"
              animate={{
                x: [0, 30, 0],
                y: [0, -20, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-purple-200/30 to-pink-200/20 blur-3xl"
              animate={{
                x: [0, -20, 0],
                y: [0, 30, 0],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-gradient-to-br from-cyan-200/25 to-blue-200/20 blur-3xl"
              animate={{
                x: [0, 40, 0],
                y: [0, -30, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] rounded-full bg-gradient-to-tl from-indigo-200/30 to-violet-200/20 blur-3xl"
              animate={{
                x: [0, -25, 0],
                y: [0, 25, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Grid Pattern Overlay */}
            <div 
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
                backgroundSize: '60px 60px'
              }}
            />

            {/* Subtle Dots Pattern */}
            <div 
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `radial-gradient(circle, #3b82f6 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
              }}
            />
          </div>

          {/* Content Container */}
          <div className="relative z-20 min-h-screen flex flex-col pt-16">
            {/* Logo Bar - Matching home page style */}
            {/* Desktop layout */}
            <div className="hidden md:flex justify-between items-center px-6 max-w-7xl mx-auto w-full">
              <div className="relative w-36 h-16">
                <Image src="/icons/raghu.png" alt="Raghu Engineering College" fill className="object-contain" priority />
              </div>
              <div className="relative w-36 h-16">
                <Image src="/icons/ecellverynew.png" alt="E-Cell REC" fill className="object-contain" priority />
              </div>
              <div className="relative w-36 h-16">
                <Image src="/icons/iic.png" alt="IIC" fill className="object-contain" priority />
              </div>
            </div>
            {/* Mobile layout */}
            <div className="md:hidden px-5">
              <div className="flex justify-between items-center">
                <div className="relative w-20 h-12">
                  <Image src="/icons/raghu.png" alt="Raghu Engineering College" fill className="object-contain" priority />
                </div>
                <div className="relative w-36 h-16">
                  <Image src="/icons/ecellverynew.png" alt="E-Cell REC" fill className="object-contain" priority />
                </div>
                <div className="relative w-20 h-12">
                  <Image src="/icons/iic.png" alt="IIC" fill className="object-contain" priority />
                </div>
              </div>
            </div>

            {/* Main Content - Center Aligned */}
            <div className="flex-1 flex items-center justify-center">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="max-w-4xl mx-auto">
                  {/* Main Heading with Motion Text Roll */}
                  <div className="mb-8">
                    <MotionTextRoll 
                      texts={titleTexts}
                      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 bg-clip-text text-transparent mb-5 leading-tight"
                      style={{ fontFamily: '"Playfair Display", Georgia, serif', letterSpacing: '-0.01em' }}
                    />
                  </div>

                  {/* Subheading with Motion Text Roll */}
                  <MotionTextRoll 
                    texts={subtitleTexts}
                    className="text-xl md:text-2xl text-slate-800 mb-4 font-semibold tracking-wide"
                    style={{ fontFamily: '"Lato", system-ui, sans-serif', letterSpacing: '0.02em' }}
                  />
                  
                  <p 
                    className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10"
                    style={{ fontFamily: '"Lato", system-ui, sans-serif', fontWeight: 400 }}
                  >
                    Meet our distinguished advisory board members who guide and inspire our entrepreneurial journey
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                    <a 
                      href="/team" 
                      className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-600/25"
                    >
                      Meet The Team
                    </a>
                    <a 
                      href="/events" 
                      className="px-8 py-4 bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold rounded-full border border-slate-200 transition-all duration-300 hover:scale-105"
                    >
                      Explore Events
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-slate-900 pt-24">
        <div className="max-w-7xl mx-auto">
         <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Meet Our Advisory Board
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-8">
            {advisoryBoardMembers.slice(0, 3).map((member, index) => (
              <div key={member.name} className="group">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 hover:bg-slate-800/70 hover:scale-105 hover:shadow-2xl border border-slate-700/50">
                  <div className="relative w-full aspect-[3/4] mb-4 rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      priority={index < 5}
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-white mb-2">
                      {member.name}
                    </h3>
                    <p className="text-yellow-400 text-sm font-semibold mb-2">
                      {member.role}
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {member.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
              {advisoryBoardMembers.slice(3, 5).map((member, index) => (
                <div key={member.name} className="group">
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 hover:bg-slate-800/70 hover:scale-105 hover:shadow-2xl border border-slate-700/50">
                    <div className="relative w-full aspect-[3/4] mb-4 rounded-xl overflow-hidden shadow-lg">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        priority={index < 5}
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-lg font-bold text-white mb-2">
                        {member.name}
                      </h3>
                      <p className="text-yellow-400 text-sm font-semibold mb-2">
                        {member.role}
                      </p>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {member.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <div className="container mx-auto px-6 pb-16">
        <div className="text-center">
          <div className="inline-flex items-center space-x-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full px-8 py-4 shadow-lg border border-blue-100">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-gray-700 font-medium">
              Guiding Innovation • Fostering Excellence • Building Futures
            </span>
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-500"></div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
