'use client'

import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-start overflow-hidden pt-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/group/group1.jpg"
          alt="E-Cell REC Group Photo"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Subtle dark overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Main Content - Center Aligned */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight tracking-tight">
            E-Cell REC
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/95 leading-relaxed font-light">
            Empowering the next generation of entrepreneurs
          </p>
        </div>
      </div>


    </section>
  );
};

export default Hero;