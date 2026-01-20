'use client'


import Hero from "@/components/HeroGloria";
import Loader from "@/components/Loader";
import AboutSection from "@/components/AboutSection";
import ConnectLearnGrowSection from "@/components/ConnectLearnGrowSection";
import MembersLoveECellSection from "@/components/MembersLoveEOSection";
import Footer from "@/components/Footer";
import AdvisoryBoardComponent from "@/components/advisoryBoard";
import OurInitiatives from "@/components/OurIntiatives";
import Testimonials from "@/components/Testimonials";
import TestimonialsData from "@/lib/testimonials-data";
export default function NewDesignHome() {
  return (
    <div className="min-h-screen bg-background">
      <Loader />
      <Hero />
      <AdvisoryBoardComponent />
      <AboutSection />
      <ConnectLearnGrowSection />
      <Testimonials testimonials={TestimonialsData} />
      <OurInitiatives />
      <Footer />
    </div>
  );
}
