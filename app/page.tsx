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
import JoinECellCommunitySection from "@/components/JoinGlobalCommunitySection";
import Footer from "@/components/Footer";


export default function NewDesignHome() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <AboutSection />
      <VideoSection />
      <ConnectLearnGrowSection />
      <ECellByTheNumbers />
      <TestimonialSection />
      <MembersLoveECellSection />
      <LatestInsightsSection />
      <JoinECellCommunitySection />
      <Footer />

      
      
    </div>
  );
}
