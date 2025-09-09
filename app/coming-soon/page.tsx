'use client'

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative h-[100vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gray-900"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full bg-gradient-to-br from-blue-600/30 via-purple-600/30 to-pink-500/30"></div>
          </div>
        </div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Login System Coming Soon
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
            We are working to bring you a seamless login experience. Stay tuned!
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}


