'use client'

import Image from "next/image";
import { Button } from "@/components/ui/button";

const JoinECellCommunitySection = () => {
  return (
    <section className="relative py-16 px-6 overflow-hidden bg-gray-50">
      {/* Pink decorative squiggly lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top left squiggly line */}
        <svg 
          className="absolute top-10 left-10 w-20 h-20 text-pink-400" 
          viewBox="0 0 100 100" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="3"
        >
          <path d="M10,50 Q30,20 50,50 T90,50" strokeLinecap="round"/>
          <path d="M15,60 Q35,30 55,60 T95,60" strokeLinecap="round"/>
        </svg>
        
        {/* Bottom right squiggly line */}
        <svg 
          className="absolute bottom-10 right-10 w-24 h-24 text-pink-400" 
          viewBox="0 0 100 100" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="3"
        >
          <path d="M10,30 Q30,10 50,30 T90,30" strokeLinecap="round"/>
          <path d="M5,45 Q25,25 45,45 T85,45" strokeLinecap="round"/>
          <path d="M15,60 Q35,40 55,60 T95,60" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Join Our E-Cell Community
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Take the next step in your entrepreneurial journey. Connect with peers, access world-class learning,
            and unlock your full potential with E-Cell REC.
          </p>
        </div>

        {/* Main Image */}
        <div className="relative mb-12">
          <div className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/group/group1.jpg"
              alt="E-Cell REC Community - Group of entrepreneurs from REC"
              fill
              className="object-cover"
              priority
            />
            {/* Subtle overlay for better text contrast if needed */}
            <div className="absolute inset-0 bg-black/5"></div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="/join">
            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold text-base min-w-[180px] transition-all duration-300">
              Join as Volunteer
            </Button>
          </a>
          <a href="/resources">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-base min-w-[180px] transition-all duration-300">
              Explore Resources
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default JoinECellCommunitySection;
