'use client'

import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import LatestInsightsSection from "@/components/LatestInsightsSection";
import { RainbowButton } from "@/components/ui/rainbow-button";
import EventsVideo from '../pages/EventsVideo';
import Image from "next/image";
import VantaClouds from "@/components/ui/VantaClouds";
import DecryptedText from "@/components/ui/DecryptedText";

export default function EventsPage() {






  return (
    <div className="min-h-screen bg-background">
      {/* <Header /> */}  {/* Old Header */}

      {/* Hero Section - Matching home page style */}
      <section className="relative h-screen flex items-center justify-start overflow-hidden pt-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/40 via-blue-100/30 to-indigo-100/40"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-blue-200/20 to-transparent"></div>
        </div>

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

        {/* Partner Logos bar just below header */}
        <div className="absolute top-16 left-0 right-0 z-20">
          {/* Desktop layout: left and right logos */}
          <div className="hidden md:flex justify-between items-center px-6 max-w-7xl mx-auto">
            <div className="relative w-36 h-16">
              <Image src="/icons/raghu.png" alt="Raghu" fill className="object-contain" />
            </div>
            <div className="relative w-36 h-16">
              <Image src="/icons/ecellverynew.png" alt="Ecell" fill className="object-contain" />
            </div>
            <div className="relative w-36 h-16">
              <Image src="/icons/iic.png" alt="IIC" fill className="object-contain" />
            </div>
          </div>
          {/* Mobile layout: two logos */}
          <div className="md:hidden px-5">
            <div className="flex justify-between items-center">
              <div className="relative w-20 h-12">
                <Image src="/icons/raghu.png" alt="Raghu" fill className="object-contain" />
              </div>
              <div className="relative w-36 h-16">
                <Image src="/icons/ecellverynew.png" alt="Ecell" fill className="object-contain" />
              </div>
              <div className="relative w-20 h-12">
                <Image src="/icons/iic.png" alt="IIC" fill className="object-contain" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content - Center Aligned */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 mt-8 md:mt-12">
          <div className="max-w-4xl mx-auto">
            {/* Main Heading */}
            <div className="mb-8">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 bg-clip-text text-transparent mb-6 leading-tight" style={{ fontFamily: '"Playfair Display", Georgia, serif', letterSpacing: '-0.01em' }}>
                E-Cell Events
              </h1>
            </div>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-slate-800 mb-4 font-semibold tracking-wide" style={{ fontFamily: '"Lato", system-ui, sans-serif', letterSpacing: '0.02em' }}>
              Connecting Entrepreneurs Worldwide
            </p>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-12 max-w-2xl mx-auto" style={{ fontFamily: '"Lato", system-ui, sans-serif', fontWeight: 400 }}>
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
