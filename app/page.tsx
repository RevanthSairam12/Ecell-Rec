'use client'

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import VideoSection from "@/components/VideoSection";
import ConnectLearnGrowSection from "@/components/ConnectLearnGrowSection";
import TestimonialSection from "@/components/TestimonialSection";

import MembersLoveECellSection from "@/components/MembersLoveEOSection";
import LatestInsightsSection from "@/components/LatestInsightsSection";
import Image from "next/image";
import JoinECellCommunitySection from "@/components/JoinGlobalCommunitySection";
import Footer from "@/components/Footer";
import IlluminatePopup from "@/components/IlluminatePopup";


export default function NewDesignHome() {
  const advisoryBoardMembers = [
    {
      name: "Raghu Kalidindi",
      role: "Chairman",
      subtitle: "Leading the vision and strategic direction of our educational institution",
      image: "/raghu-sir-1.jpg"
    },
    {
      name: "Rama Devi Kalidindi",
      role: "Secretary",
      subtitle: "Overseeing administrative excellence and educational quality",
      image: "/RamaDevi-Kalidindi-1.jpg"
    },
    {
      name: "Rahul Kalidindi",
      role: "Director",
      subtitle: "Driving innovation and modern educational practices",
      image: "/Rahul-Kalidindi-1.jpg"
    },
    {
      name: "Dr. A.Vijay kumar",
      role: "Principal",
      subtitle: "Providing academic leadership and fostering learning environment",
      image: "/avijaykmr.jpeg"
    },
    {
      name: "Dr. G. Kiran Kumar",
      role: "Faculty Coordinator",
      subtitle: "Mentoring students in entrepreneurship and innovation",
      image: "/kiranspecial.png"
    }
  ];
  return (
    <div className="min-h-screen bg-background">
      <IlluminatePopup />
      {/* <Header /> */}  {/* Old Header */}
      <Hero />
      <section className="py-16 px-6 bg-slate-900 pt-24">
        <div className="max-w-7xl mx-auto">
          {/* Header - Exact same styling */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Meet Our Advisory Board
            </h1>
          </div>

          {/* Advisory Board Members Grid - First Row (3 members) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-8">
            {advisoryBoardMembers.slice(0, 3).map((member, index) => (
              <div key={member.name} className="group">
                {/* Card Container */}
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 hover:bg-slate-800/70 hover:scale-105 hover:shadow-2xl border border-slate-700/50">
                  {/* Profile Image with rounded corners */}
                  <div className="relative w-full aspect-[3/4] mb-4 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    priority={index < 5}
                    />
                  </div>

                  {/* Member Info */}
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

          {/* Advisory Board Members Grid - Second Row (2 members centered) */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
              {advisoryBoardMembers.slice(3, 5).map((member, index) => (
                <div key={member.name} className="group">
                  {/* Card Container */}
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 hover:bg-slate-800/70 hover:scale-105 hover:shadow-2xl border border-slate-700/50">
                    {/* Profile Image with rounded corners */}
                    <div className="relative w-full aspect-[3/4] mb-4 rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      priority={index < 5}
                      />
                    </div>

                    {/* Member Info */}
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
      <AboutSection />
      {/* <VideoSection /> */}
      <ConnectLearnGrowSection />
      <MembersLoveECellSection />
      <LatestInsightsSection />

      {/* Meet Our Advisory Board - exact from Advisory page */}
      
      <JoinECellCommunitySection />
      <Footer />

      
      
    </div>
  );
}
