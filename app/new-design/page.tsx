'use client'

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import ImpactStats from "@/components/ImpactStats";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function NewDesignHome() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Mission />
      <ImpactStats />
      <Testimonials />
      <Footer />
    </div>
  );
}
