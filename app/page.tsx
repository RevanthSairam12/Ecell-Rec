'use client'


import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ConnectLearnGrowSection from "@/components/ConnectLearnGrowSection";
import MembersLoveECellSection from "@/components/MembersLoveEOSection";
import LatestInsightsSection from "@/components/LatestInsightsSection";
import Footer from "@/components/Footer";
import AdvisoryBoardComponent from "@/components/advisoryBoard";

export default function NewDesignHome() {
  return (
    <div className="min-h-screen bg-background">
      
      {/* <Header /> */}  {/* Old Header */}
      <Hero />
      <AdvisoryBoardComponent />
      <AboutSection />
      <ConnectLearnGrowSection />
      <MembersLoveECellSection />
      <LatestInsightsSection />
      <Footer />
    </div>
  );
}
