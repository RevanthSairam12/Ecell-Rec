'use client';
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ConnectLearnGrowSection from "@/components/ConnectLearnGrowSection";
import MembersLoveECellSection from "@/components/MembersLoveEOSection";
import LatestInsightsSection from "@/components/LatestInsightsSection";
import AdvisoryBoardComponent from "@/components/advisoryBoard";
import Footer from "@/components/Footer";



export default function NewDesignHome() {
  return (
    <div className="min-h-screen bg-background">
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
