'use client';

import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import LatestInsightsSection from "@/components/LatestInsightsSection";
import { RainbowButton } from "@/components/ui/rainbow-button";
import EventsVideo from "../pages/EventsVideo";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "@/components/PageHero";
import AppNavbar from "@/components/AppNavbar";
import OurInitiatives from "@/components/OurIntiatives";
import Image from "next/image";


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

export default function EventsPage() {
  const subtitleTexts = ["Connecting Entrepreneurs Worldwide", "Impactful Events & Experiences", "Where Ideas Meet Opportunity"];






  return (
    <div className="min-h-screen bg-background">
      <AppNavbar />
      {/* <Header /> */}  {/* Old Header */}

      <PageHero
        title="Our"
        highlight="Events"
        description="Connecting Entrepreneurs Worldwide. Impactful Events & Experiences. Where Ideas Meet Opportunity."
      />

      {/* Blue Description Section */}
      <section className="relative py-16 px-6 overflow-hidden bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-blue-600 rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden">
            {/* Header Section */}
            <div className="text-center mb-8">
              <p className="text-base md:text-lg text-white/90 max-w-4xl mx-auto leading-relaxed">
                E-Cell events are designed to help entrepreneurs learn and grow through unique, once-in-a-lifetime experiences.
                From intimate forums to large-scale conferences, our events create meaningful connections and provide valuable
                insights that drive business success and personal development.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 px-6 overflow-hidden bg-gray-50" id="events">
        <div className="max-w-6xl mx-auto relative z-10">
          
          <div className="mb-12">
            <EventsVideo />
          </div>
        </div>
      </section>
      <section className="relative py-12 px-6 overflow-hidden bg-gradient-to-b from-orange-200 to-orange-300">
        <div className="max-w-6xl mx-auto">
          {/* Our Next Event Header */}
          <div className="text-center mb-12">
            <div className="inline-block">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-white/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/20 rounded-full blur-2xl"></div>

                {/* Main heading box */}
                <div className="relative bg-blue-600 rounded-2xl px-12 py-6 shadow-xl">
                  <div className="flex items-center justify-center gap-4">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                      </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                      Our Next Event
                    </h2>
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                      </span>
                    </div>
                  </div>
                  {/* Decorative underline */}
                  <div className="mt-4 h-1 w-32 mx-auto bg-white/80 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Campus Founder Card */}
          <div className="max-w-4xl mx-auto">
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-blue-500/30 transition-all duration-700 ease-out hover:scale-[1.02] bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 hover:border-blue-500/50">
              {/* Image Section */}
              <div className="relative h-80 md:h-96 overflow-hidden">
                <Image
                  src="/campusfounderGlimpse.png"
                  alt="Campus Founder"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:brightness-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
              </div>

              {/* Content Section */}
              <div className="relative p-8 md:p-12 -mt-20">
                {/* Title */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                  Campus Founder
                </h2>

                {/* Description */}
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 max-w-2xl">
                  An exclusive initiative bringing together aspiring entrepreneurs and industry leaders to transform campus ideas into real-world ventures.
                </p>

                {/* Stay Tuned Badge */}
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                  </span>
                  <span>Stay Tuned for Updates!</span>
                  <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <OurInitiatives />
      <Footer />
    </div>
  );
}
