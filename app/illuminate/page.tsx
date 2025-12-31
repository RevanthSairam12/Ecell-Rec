"use client";

import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import AppNavbar from "@/components/AppNavbar";
import Footer from "@/components/Footer";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Calendar, Award, Users, Rocket, Clock, AlertCircle } from "lucide-react";

const EurekaPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <AppNavbar />

      {/* Hero Section - Black Background */}
      <section className="relative h-screen flex items-center justify-start overflow-hidden pt-16 bg-black">

        {/* Partner Logos bar just below header */}
        <div className="absolute top-16 left-0 right-0 z-20">
          {/* Desktop layout: left and right logos */}
          <div className="hidden md:flex justify-between items-center px-6 max-w-7xl mx-auto">
            <div className="relative w-36 h-16">
              <Image src="/icons/raghu.png" alt="Raghu" fill className="object-contain" />
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
              <div className="relative w-20 h-12">
                <Image src="/icons/iic.png" alt="IIC" fill className="object-contain" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content - Center Aligned */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 mt-8 md:mt-12">
          <div className="max-w-4xl mx-auto">
            {/* Logo Image */}
            <div className="mb-8 flex justify-center">
              <div className="relative w-full max-w-2xl h-48 md:h-64 lg:h-80">
                <Image 
                  src="/logo2.png" 
                  alt="Illuminate Event Logo" 
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-white mb-4 font-semibold tracking-wide" style={{ fontFamily: '"Lato", system-ui, sans-serif', letterSpacing: '0.02em' }}>
              Your First Step Into Entrepreneurship
            </p>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-12 max-w-2xl mx-auto" style={{ fontFamily: '"Lato", system-ui, sans-serif', fontWeight: 400 }}>
              An exclusive two-part workshop by E-Cell REC in collaboration with E-Cell IIT Bombay
            </p>
          </div>
        </div>
      </section>

      {/* Urgent Notice Section */}
      <section className="relative py-8 px-6 overflow-hidden bg-gradient-to-r from-red-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-4 text-center flex-wrap">
            <span className="text-3xl animate-pulse">⏰</span>
            <div>
              <p className="text-2xl font-bold text-red-600">URGENT: Registrations Close THIS MONDAY (Oct 27th)!</p>
              <p className="text-lg text-slate-700 mt-2">Only 70 SEATS available for the entire college - Filling FAST!</p>
            </div>
            <span className="text-3xl animate-pulse">⏰</span>
          </div>
        </div>
      </section>

      {/* What is Illuminate Section */}
      <section className="relative py-16 px-6 overflow-hidden bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              What is Illuminate?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              It's not just a talk. It's an exclusive, two-part entrepreneurship workshop designed to teach you how to think like a founder and build real ideas.
            </p>
          </div>

          {/* Event Schedule */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-200 hover:shadow-xl transition-all">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl">💭</span>
                <h3 className="text-2xl font-bold text-slate-800">Part 1</h3>
              </div>
              <p className="text-4xl font-bold text-blue-600 mb-2">November 1st</p>
              <p className="text-slate-600">Foundation & Ideation</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-indigo-200 hover:shadow-xl transition-all">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl">⚡</span>
                <h3 className="text-2xl font-bold text-slate-800">Part 2</h3>
              </div>
              <p className="text-4xl font-bold text-indigo-600 mb-2">November 8th</p>
              <p className="text-slate-600">Execution & Strategy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why You Should Attend */}
      <section className="relative py-16 px-6 overflow-hidden bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Why YOU Should Be There
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              This is your head start. Take it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Benefit 1 */}
            <div className="group relative bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                🧠
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Learn the A-Z</h3>
              <p className="text-slate-600 text-sm">Learn the complete process of building a startup from scratch</p>
            </div>

            {/* Benefit 2 */}
            <div className="group relative bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                🎓
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">IIT Bombay Certificate</h3>
              <p className="text-slate-600 text-sm">Get a Certificate of Participation with the prestigious E-Cell IIT Bombay logo</p>
            </div>

            {/* Benefit 3 */}
            <div className="group relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                📈
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Build Your Resume</h3>
              <p className="text-slate-600 text-sm">Start building an amazing resume from your first semester itself</p>
            </div>

            {/* Benefit 4 */}
            <div className="group relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                🌐
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Network & Connect</h3>
              <p className="text-slate-600 text-sm">Network with mentors and like-minded innovators</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-16 px-6 overflow-hidden bg-gradient-to-b from-orange-200 to-orange-300">
        <div className="max-w-6xl mx-auto text-center">
          <div className="bg-blue-600 rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-full font-bold text-lg mb-6 animate-pulse">
                <span className="text-xl">🎯</span>
                DON'T WAIT - LIMITED SEATS!
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                🔥 Register NOW - Only 70 Seats Available! 🔥
              </h2>
              <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed mb-4">
                Want your first college certificate to be from E-Cell IIT Bombay? This is your chance!
              </p>
              <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed mb-8 font-bold">
                Registrations close THIS MONDAY (Oct 27th). Don't miss out!
              </p>
              <div className="flex justify-center">
                <a href="https://forms.gle/cvEWktXuJBenwxEx8" target="_blank" rel="noopener noreferrer">
                  <RainbowButton>Register Now - Limited Seats!</RainbowButton>
                </a>
              </div>
              <p className="text-white/80 mt-6 text-sm">
                See you there!<br />
                <span className="font-semibold">Team E-Cell REC</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EurekaPage;
