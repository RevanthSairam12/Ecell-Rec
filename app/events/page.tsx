'use client'

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LatestInsightsSection from "@/components/LatestInsightsSection";
import { RainbowButton } from "@/components/ui/rainbow-button";
import EventsVideo from '../pages/EventsVideo';
import Image from "next/image";

export default function EventsPage() {






  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section - E-Cell Events */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/group/group1.jpg"
            alt="E-Cell Events - E-Cell REC"
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
              E-Cell Events
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-white/95 leading-relaxed font-light max-w-3xl mx-auto">
              Connecting entrepreneurs worldwide through impactful events and experiences
            </p>
          </div>
        </div>
      </section>

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
