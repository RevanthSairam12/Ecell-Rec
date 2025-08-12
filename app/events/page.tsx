'use client'

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RainbowButton } from "@/components/ui/rainbow-button";
import EventsVideo from '../pages/EventsVideo';
import Image from "next/image";

export default function EventsPage() {






  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section - E-Cell Events */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/group/group1.jpg"
            alt="E-Cell Events - E-Cell REC"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Main Content - Center Aligned */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              E-Cell Events
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-white/95 leading-relaxed font-light max-w-3xl mx-auto">
              Connecting entrepreneurs worldwide through impactful events and experiences
            </p>
          </div>
        </div>
      </section>

      {/* Blue Description Section */}
      <section className="relative py-16 px-6 overflow-hidden bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-blue-600 rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden">
            {/* Header Section */}
            <div className="text-center mb-8">
              <p className="text-base md:text-lg text-white/90 max-w-4xl mx-auto leading-relaxed">
                E-Cell events are designed to help entrepreneurs learn and grow through unique, once-in-a-lifetime experiences.
                From intimate forums to large-scale conferences, our events create meaningful connections and provide valuable
                insights that drive business success and personal development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="relative py-16 px-6 overflow-hidden bg-gray-50" id="events">
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Events Video */}
          <div className="mb-12">
            <EventsVideo />
          </div>
        </div>
      </section>

      {/* Global Events Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          {/* Header with angled banner - matching Regional Events */}
          <div className="relative mb-12">
            <div
              className="bg-slate-800 text-white py-6 px-8 mx-auto max-w-md text-center"
              style={{
                clipPath: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)'
              }}
            >
              <h2 className="text-2xl md:text-3xl font-bold">Global Events</h2>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg text-gray-700 mb-6">
              Our global events bring together entrepreneurs, innovators, and thought leaders from around the world.
              These flagship events showcase cutting-edge technologies, breakthrough innovations, and transformative business ideas.
            </p>
            <p className="text-lg text-gray-700">
              From international conferences to global startup competitions, our events create platforms for
              cross-cultural collaboration and knowledge exchange that drive the future of entrepreneurship.
            </p>
          </div>

          {/* Scattered Image Layout - Centered in middle */}
          <div className="relative min-h-[500px] w-full max-w-3xl mx-auto">
            {/* Top Left - Group photo with people */}
            <div className="absolute top-0 left-16 w-48 h-40 rounded-2xl overflow-hidden shadow-lg z-30 transform rotate-1">
              <Image
                src="/group/group3.jpg"
                alt="Global event group photo"
                fill
                className="object-cover"
              />
            </div>

            {/* Top Center-Right - Meeting room photo */}
            <div className="absolute top-4 left-56 w-56 h-32 rounded-2xl overflow-hidden shadow-lg z-25 transform -rotate-1">
              <Image
                src="/group/group4.jpg"
                alt="Global event meeting room"
                fill
                className="object-cover"
              />
            </div>

            {/* Top Right - Small portrait photo */}
            <div className="absolute top-8 right-32 w-28 h-36 rounded-2xl overflow-hidden shadow-lg z-35 transform rotate-2">
              <Image
                src="/group/group5.jpg"
                alt="Global event portrait"
                fill
                className="object-cover"
              />
            </div>

            {/* Middle Left - Small colorful photo */}
            <div className="absolute top-36 left-20 w-24 h-28 rounded-2xl overflow-hidden shadow-lg z-40 transform -rotate-2">
              <Image
                src="/group/group6.jpg"
                alt="Global event activity"
                fill
                className="object-cover"
              />
            </div>

            {/* Center - Large venue photo */}
            <div className="absolute top-32 left-44 w-64 h-44 rounded-2xl overflow-hidden shadow-lg z-10 transform rotate-1">
              <Image
                src="/group/group1.jpg"
                alt="Global event venue"
                fill
                className="object-cover"
              />
            </div>

            {/* Bottom Left - Workshop photo */}
            <div className="absolute bottom-8 left-24 w-44 h-32 rounded-2xl overflow-hidden shadow-lg z-20 transform rotate-2">
              <Image
                src="/group/group4.jpg"
                alt="Global event workshop"
                fill
                className="object-cover"
              />
            </div>

            {/* Bottom Right - Speaker photo */}
            <div className="absolute bottom-0 right-36 w-40 h-36 rounded-2xl overflow-hidden shadow-lg z-45 transform -rotate-1">
              <Image
                src="/group/group2.jpg"
                alt="Global event speaker"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Regional Events Section - Matching the provided image design */}
      <section className="relative py-16 px-6 overflow-hidden bg-gray-100">
        <div className="max-w-6xl mx-auto">

          {/* Header with dark blue angled banner - exactly like the image */}
          <div className="relative mb-16">
            {/* Dark blue angled banner */}
            <div
              className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white px-12 py-4 font-bold text-xl md:text-2xl text-center"
              style={{
                clipPath: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)',
                minWidth: '300px'
              }}
            >
              Regional Events
            </div>
            <div className="h-16"></div> {/* Spacer for the banner */}
          </div>

          {/* Description Text */}
          <div className="text-center mb-12 max-w-4xl mx-auto">
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
              Throughout the world each year E-Cell hosts a variety of regional events that are tailored to the unique landscape of a particular area. From Asia-Pac to the Caribbean, the Pacific to Northern Africa and the Arabian
              Gulf, E-Cell's annual Regional Events expand business opportunities beyond any single city or country.
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              Regional Events also feature a mix of top keynote speakers, along with trends, panels, and structured networking in a gathering of 1,000-1,200 entrepreneurs. Because not the premises are very welcoming
              and the location is ideal, these events continue to grow in both attendance and impact.
            </p>
          </div>

          {/* Scattered Image Layout - Centered in middle */}
          <div className="relative min-h-[500px] w-full max-w-3xl mx-auto">
            {/* Top Left - Group photo with people */}
            <div className="absolute top-0 left-16 w-48 h-40 rounded-2xl overflow-hidden shadow-lg z-30 transform rotate-1">
              <Image
                src="/group/group1.jpg"
                alt="Group photo with people"
                fill
                className="object-cover"
              />
            </div>

            {/* Top Center-Right - Meeting room photo */}
            <div className="absolute top-4 left-56 w-56 h-32 rounded-2xl overflow-hidden shadow-lg z-25 transform -rotate-1">
              <Image
                src="/group/group2.jpg"
                alt="Meeting workshop room"
                fill
                className="object-cover"
              />
            </div>

            {/* Top Right - Small portrait photo */}
            <div className="absolute top-8 right-32 w-28 h-36 rounded-2xl overflow-hidden shadow-lg z-35 transform rotate-2">
              <Image
                src="/group/group3.jpg"
                alt="Portrait photo"
                fill
                className="object-cover"
              />
            </div>

            {/* Middle Left - Small colorful photo */}
            <div className="absolute top-36 left-20 w-24 h-28 rounded-2xl overflow-hidden shadow-lg z-40 transform -rotate-2">
              <Image
                src="/group/group4.jpg"
                alt="Colorful event photo"
                fill
                className="object-cover"
              />
            </div>

            {/* Center - Large venue photo */}
            <div className="absolute top-32 left-44 w-64 h-44 rounded-2xl overflow-hidden shadow-lg z-10 transform rotate-1">
              <Image
                src="/group/group5.jpg"
                alt="Large venue building"
                fill
                className="object-cover"
              />
            </div>

            {/* Bottom Left - Workshop photo */}
            <div className="absolute bottom-8 left-24 w-44 h-32 rounded-2xl overflow-hidden shadow-lg z-20 transform rotate-2">
              <Image
                src="/group/group2.jpg"
                alt="Workshop training"
                fill
                className="object-cover"
              />
            </div>

            {/* Bottom Right - Speaker photo */}
            <div className="absolute bottom-0 right-36 w-40 h-36 rounded-2xl overflow-hidden shadow-lg z-45 transform -rotate-1">
              <Image
                src="/group/group6.jpg"
                alt="Speaker presentation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section with Orange Background */}
      <section className="relative py-16 px-6 overflow-hidden bg-gradient-to-b from-orange-200 to-orange-300">
        <div className="max-w-6xl mx-auto text-center">
          <div className="bg-blue-600 rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Join Our Next Event
              </h2>
              <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed mb-8">
                Don't miss out on our upcoming events. Connect with fellow entrepreneurs, learn from industry experts,
                and take your business to the next level.
              </p>
              <div className="flex justify-center">
                <div onClick={() => window.location.href = "https://esummit-rec.vercel.app/"} className="cursor-pointer">
                  <RainbowButton>Visit E-SUMMIT&apos;25 site</RainbowButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
