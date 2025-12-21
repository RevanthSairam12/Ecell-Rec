'use client'

import React, { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LatestInsightsSection from "@/components/LatestInsightsSection";
import { RainbowButton } from "@/components/ui/rainbow-button";
import EventsVideo from '../pages/EventsVideo';
import Image from "next/image";
import VantaClouds from "@/components/ui/VantaClouds";
import DecryptedText from "@/components/ui/DecryptedText";
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

export default function EventsPage() {
  const subtitleTexts = ["Connecting Entrepreneurs Worldwide", "Impactful Events & Experiences", "Where Ideas Meet Opportunity"];






  return (
    <div className="min-h-screen bg-background">
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

      {/* Video Section */}
      <section className="relative py-16 px-6 overflow-hidden bg-gray-50" id="events">
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Events Video */}
          <div className="mb-12">
            <EventsVideo />
          </div>
        </div>
      </section>

      {/* Global Events Section (commented out as requested) */}
      {/**
       Global Events content removed per request.
      */}

      {/* Replace with Latest Insights from home page */}
      <LatestInsightsSection />

      {/* Regional Events Section (commented out as requested) */}
      {/**
       Regional Events content removed per request.
      */}

      {/* Final CTA Section with Orange Background */}
      <section className="relative py-16 px-6 overflow-hidden bg-gradient-to-b from-orange-200 to-orange-300">
        <div className="max-w-6xl mx-auto text-center">
          <div className="bg-blue-600 rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Join Our Next Event
              </h2>
              <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed mb-8">
                Don't miss out on our upcoming events. Connect with fellow entrepreneurs, learn from industry experts,
                and take your business to the next level.
              </p>
              <div className="flex justify-center">
                <div onClick={() => window.location.href = "https://esummit-rec.vercel.app/"} className="cursor-pointer">
                  <RainbowButton>Visit E-SUMMIT&apos;25 site</RainbowButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
