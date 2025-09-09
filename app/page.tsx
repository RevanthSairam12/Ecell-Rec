'use client'

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import VideoSection from "@/components/VideoSection";
import ConnectLearnGrowSection from "@/components/ConnectLearnGrowSection";
import TestimonialSection from "@/components/TestimonialSection";

import MembersLoveECellSection from "@/components/MembersLoveEOSection";
import ECellByTheNumbers from "@/components/EOByTheNumbers";
import LatestInsightsSection from "@/components/LatestInsightsSection";
import Image from "next/image";
import JoinECellCommunitySection from "@/components/JoinGlobalCommunitySection";
import Footer from "@/components/Footer";


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
      <Header />
      <Hero />
      <section className="py-16 px-6 bg-slate-900 pt-24">
        <div className="max-w-7xl mx-auto">
          {/* Header - Exact same styling */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Meet Our Advisory Board
            </h1>
          </div>

          {/* Advisory Board Members Grid - First row with 3 members */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
            {advisoryBoardMembers.slice(0, 3).map((member, index) => (
              <div key={member.name} className="text-center">
                {/* Profile Image with rounded corners - exact same styling */}
                <div className="relative w-full aspect-[3/4] mb-4 rounded-2xl overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    priority={index < 8}
                  />
                </div>

                {/* Member Info - exact same styling */}
                <div className="text-white">
                  <h3 className="text-lg font-bold mb-1">
                    {member.name}
                  </h3>
                  <p className="text-yellow-400 text-sm font-medium mb-1">
                    {member.role}
                  </p>
                  <p className="text-gray-300 text-xs">
                    {member.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Second row with 2 members centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8" style={{width: 'calc(50% + 1rem)'}}>
              {advisoryBoardMembers.slice(3, 5).map((member, index) => (
                <div key={member.name} className="text-center">
                  {/* Profile Image with rounded corners - exact same styling */}
                  <div className="relative w-full aspect-[3/4] mb-4 rounded-2xl overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      priority={index < 8}
                    />
                  </div>

                  {/* Member Info - exact same styling */}
                  <div className="text-white">
                    <h3 className="text-lg font-bold mb-1">
                      {member.name}
                    </h3>
                    <p className="text-yellow-400 text-sm font-medium mb-1">
                      {member.role}
                    </p>
                    <p className="text-gray-300 text-xs">
                      {member.subtitle}
                    </p>
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
      <ECellByTheNumbers />
      <TestimonialSection />
      <MembersLoveECellSection />
      <LatestInsightsSection />

      {/* Meet Our Advisory Board - exact from Advisory page */}
      
      <JoinECellCommunitySection />
      <Footer />

      
      
    </div>
  );
}
