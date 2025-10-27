'use client'

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
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
          
          {/* Main Heading - E-Cell REC Branding */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 bg-clip-text text-transparent mb-6 leading-tight" style={{ fontFamily: '"Playfair Display", Georgia, serif', letterSpacing: '-0.01em' }}>
              E-Cell REC
            </h1>
          </div>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-slate-800 mb-4 font-semibold tracking-wide" style={{ fontFamily: '"Lato", system-ui, sans-serif', letterSpacing: '0.02em' }}>
            Entrepreneurship Cell
          </p>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-12 max-w-2xl mx-auto" style={{ fontFamily: '"Lato", system-ui, sans-serif', fontWeight: 400 }}>
            Fostering innovation, nurturing entrepreneurship, and building the leaders of tomorrow
          </p>

        </div>
      </div>
    </section>
  );
};

export default Hero;