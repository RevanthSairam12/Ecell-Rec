'use client'

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Team() {
  // Current Team Data - Keeping your existing team members
  const currentTeam = [
    {
      name: "Sriram Vishal Epu",
      role: "President",
      subtitle: "Leading the entrepreneurial revolution at REC",
      image: "/vishal.jpg"
    },
    {
      name: "I.Sree Venkat Nadh",
      role: "Vice President",
      subtitle: "Driving strategic initiatives and startup culture",
      image: "/venky.jpg"
    },
    {
      name: "Aamuktha Malyadha",
      role: "Vice President",
      subtitle: "Empowering students to transform ideas into ventures",
      image: "/aamukta.jpg"
    },
    {
      name: "G.V Santosh",
      role: "Startup Assistance & Program Head",
      subtitle: "Guiding startups from ideation to execution",
      image: "/santosh.jpg"
    },
    {
      name: "Tappiti Ganesh",
      role: "Startup Assistance & Program Head",
      subtitle: "Building bridges between innovation and implementation",
      image: "/ganesh.jpg"
    },
    {
      name: "Ponugupati Sai Pawan",
      role: "Startup Assistance & Program Head",
      subtitle: "Nurturing entrepreneurial talent and innovation",
      image: "/Pawan2.jpg"
    },
    {
      name: "Ujjesha Nitya Routhu",
      role: "Alumni & Community Relations Head",
      subtitle: "Connecting past, present, and future entrepreneurs",
      image: "/nitya.jpg"
    },
    {
      name: "Jeevan Sai Eddipilli",
      role: "Web Tech Head",
      subtitle: "Building digital solutions for entrepreneurs",
      image: "/EJeevan.jpg"
    },
    {
      name: "Revanth Sai Ram",
      role: "Web Tech Head",
      subtitle: "Creating innovative web experiences",
      image: "/Revanth.jpg"
    },
    {
      name: "Sai Sashank Nath",
      role: "Designing & Branding Head",
      subtitle: "Crafting visual identities that inspire",
      image: "/sashank.jpg"
    },
    {
      name: "Vineela Vadrevu",
      role: "Marketing & Outreach Head",
      subtitle: "Amplifying entrepreneurial voices",
      image: "/vineela.jpg"
    },
    {
      name: "Sagi Sanvitha",
      role: "Marketing & Outreach Head",
      subtitle: "Spreading the entrepreneurial spirit",
      image: "/sanvitha.jpg"
    },
    {
      name: "Mohammad Shahidulla",
      role: "Events & Management Head",
      subtitle: "Orchestrating memorable events",
      image: "/shahid.jpg"
    },
    {
      name: "Shazia Sadaf",
      role: "Events & Management Head",
      subtitle: "Creating impactful experiences",
      image: "/shazia.jpg"
    },
    {
      name: "Enduga Ramya",
      role: "Events & Management Head",
      subtitle: "Bringing creative vision to life",
      image: "/ramya.jpg"
    },
    {
      name: "Jeevan Kurmadasu",
      role: "Events & Management Head",
      subtitle: "Ensuring seamless execution",
      image: "/KJeevan.jpg"
    },
    {
      name: "Renitha Ashwa",
      role: "Club Chronicles Head",
      subtitle: "Documenting the entrepreneurial journey",
      image: "/renitha.jpeg"
    },
    {
      name: "Shaik Karishma",
      role: "Club Chronicles Head",
      subtitle: "Capturing moments that inspire future entrepreneurs",
      image: "/karishma.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />

      {/* E-Cell Leadership Hero Section - Exact same design as shown in image */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden pt-16">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/group/group1.jpg"
            alt="E-Cell Leadership Group Photo"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Main Content - Center Aligned */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight">
              E-Cell Leadership
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light">
              Guiding Global Entrepreneurs
            </p>
          </div>
        </div>
      </section>

      {/* Blue Information Box Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-600 rounded-2xl p-8 md:p-12 shadow-lg">
              <p className="text-white text-base md:text-lg leading-relaxed text-center">
                The E-Cell is steered by a dynamic group of visionary leaders and business owners who have
                navigated the entrepreneurship journey themselves. Our global leadership team combines deep business acumen with a
                passion for fostering global connections and growth for entrepreneurs everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Board of Directors Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Section Title - Left aligned */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-left">
              Global Board of Directors
            </h2>

            {/* Description - Left aligned */}
            <div className="text-gray-700 text-base leading-relaxed">
              <p className="text-left">
                The <span className="font-semibold text-blue-600">Global Board of Directors</span> leading E-Cell plays a crucial role in overseeing the organization's strategic direction,
                financial stewardship, and its continued growth and impact. This distinguished group of entrepreneurs brings a wealth of <span className="font-semibold">business and
                membership experience</span> and insights to guide <span className="text-blue-600 underline cursor-pointer hover:text-blue-800">E-Cell's global mission</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section - Exact same design as Global Board */}
      <section className="py-16 px-6 bg-slate-900 pt-24">
        <div className="max-w-7xl mx-auto">

          {/* Header - Exact same styling */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Meet Our Team
            </h1>
          </div>

          {/* Team Members Grid - 4 columns layout exactly as shown */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {currentTeam.map((member, index) => (
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
      </section>

      {/* E-Cell's Path of Leadership Section - Exact same design as shown in image */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Section Title - Left aligned */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-left">
              E-Cell's Path of Leadership
            </h2>

            {/* Description - Left aligned */}
            <div className="text-gray-700 text-base leading-relaxed mb-12">
              <p className="text-left">
                E-Cell members have the opportunity to shape the <span className="text-blue-600 underline cursor-pointer hover:text-blue-800">member experience</span> and co-create the future of our
                organization across a variety of local, regional, global and functional roles that serve all aspects of our
                organizational community. Serving in volunteer leadership roles are typically <span className="text-blue-600 underline cursor-pointer hover:text-blue-800">one year</span>
                We encourage members to expand their leadership skills by serving in <span className="text-blue-600 underline cursor-pointer hover:text-blue-800">E-Cell's Path of Leadership</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Mountain Background Image Section */}
        <div className="relative h-[400px] md:h-[500px] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/group/group1.jpg"
              alt="Person on mountain path representing E-Cell's Path of Leadership"
              fill
              className="object-cover object-center"
            />
            {/* Pink decorative elements overlay - matching the image design */}
            <div className="absolute inset-0">
              {/* Sun icon - top left */}
              <div className="absolute top-8 left-12 w-16 h-16">
                <svg viewBox="0 0 100 100" className="w-full h-full text-pink-500">
                  <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="3"/>
                  <g stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                    <line x1="50" y1="10" x2="50" y2="20"/>
                    <line x1="50" y1="80" x2="50" y2="90"/>
                    <line x1="10" y1="50" x2="20" y2="50"/>
                    <line x1="80" y1="50" x2="90" y2="50"/>
                    <line x1="25.86" y1="25.86" x2="32.32" y2="32.32"/>
                    <line x1="67.68" y1="67.68" x2="74.14" y2="74.14"/>
                    <line x1="74.14" y1="25.86" x2="67.68" y2="32.32"/>
                    <line x1="32.32" y1="67.68" x2="25.86" y2="74.14"/>
                  </g>
                </svg>
              </div>

              {/* Birds - top right */}
              <div className="absolute top-12 right-20">
                <svg viewBox="0 0 60 20" className="w-12 h-4 text-pink-500">
                  <path d="M5 10 Q10 5 15 10 Q20 15 25 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M35 10 Q40 5 45 10 Q50 15 55 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>

              {/* Wavy lines - left side */}
              <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
                <svg viewBox="0 0 100 200" className="w-20 h-32 text-pink-500">
                  <path d="M10 20 Q30 10 50 20 Q70 30 90 20" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <path d="M10 60 Q30 50 50 60 Q70 70 90 60" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <path d="M10 100 Q30 90 50 100 Q70 110 90 100" fill="none" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>

              {/* Wavy lines - right side */}
              <div className="absolute right-8 top-1/3">
                <svg viewBox="0 0 100 150" className="w-16 h-24 text-pink-500">
                  <path d="M10 20 Q30 10 50 20 Q70 30 90 20" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <path d="M10 60 Q30 50 50 60 Q70 70 90 60" fill="none" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>

              {/* Path/trail lines on the mountain */}
              <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2">
                <svg viewBox="0 0 300 100" className="w-64 h-16 text-pink-500">
                  <path d="M50 80 Q100 60 150 70 Q200 50 250 60" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M30 90 Q80 70 130 80 Q180 60 230 70" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}