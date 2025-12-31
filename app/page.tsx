'use client'


import Hero from "@/components/HeroGloria";
import Loader from "@/components/Loader";
import AboutSection from "@/components/AboutSection";
import ConnectLearnGrowSection from "@/components/ConnectLearnGrowSection";
import MembersLoveECellSection from "@/components/MembersLoveEOSection";
import LatestInsightsSection from "@/components/LatestInsightsSection";
import Footer from "@/components/Footer";
import AdvisoryBoardComponent from "@/components/advisoryBoard";
import OurInitiatives from "@/components/OurIntiatives";
import AppNavbar from "@/components/AppNavbar";

export default function NewDesignHome() {
  return (
    <div className="min-h-screen bg-background">
      <AppNavbar />
      <Loader />
      <Hero />
      <AdvisoryBoardComponent />
      <AboutSection />
      <ConnectLearnGrowSection />
      <MembersLoveECellSection />
      <OurInitiatives />
      <Footer />
    </div>
  );
}
