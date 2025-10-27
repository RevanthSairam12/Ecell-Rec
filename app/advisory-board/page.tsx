'use client'

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AdvisoryBoard() {
  // Advisory Board Data - Using the same structure as team page
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
    <div className="min-h-screen bg-slate-900">
      <Header />

      {/* Hero Section - Matching home page style */}
      <section className="relative h-screen flex items-center justify-start overflow-hidden pt-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/40 via-blue-100/30 to-indigo-100/40"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-blue-200/20 to-transparent"></div>
        </div>

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

        {/* Partner Logos bar just below header */}
        <div className="absolute top-16 left-0 right-0 z-20">
          {/* Desktop layout: left and right logos */}
          <div className="hidden md:flex justify-between items-center px-6 max-w-7xl mx-auto">
            <div className="relative w-36 h-16">
              <Image src="/icons/iic.png" alt="IIC" fill className="object-contain" />
            </div>
            <div className="relative w-36 h-16">
              <Image src="/icons/raghu.png" alt="Raghu" fill className="object-contain" />
            </div>
          </div>
          {/* Mobile layout: two logos */}
          <div className="md:hidden px-5">
            <div className="flex justify-between items-center">
              <div className="relative w-20 h-12">
                <Image src="/icons/iic.png" alt="IIC" fill className="object-contain" />
              </div>
              <div className="relative w-20 h-12">
                <Image src="/icons/raghu.png" alt="Raghu" fill className="object-contain" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content - Center Aligned */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 mt-8 md:mt-12">
          <div className="max-w-4xl mx-auto">
            {/* Main Heading */}
            <div className="mb-8">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 bg-clip-text text-transparent mb-6 leading-tight" style={{ fontFamily: '"Playfair Display", Georgia, serif', letterSpacing: '-0.01em' }}>
                About Us
              </h1>
            </div>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-slate-800 mb-4 font-semibold tracking-wide" style={{ fontFamily: '"Lato", system-ui, sans-serif', letterSpacing: '0.02em' }}>
              Empowering Tomorrow's Leaders
            </p>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-12 max-w-2xl mx-auto" style={{ fontFamily: '"Lato", system-ui, sans-serif', fontWeight: 400 }}>
              Empowering students today to lead industries tomorrow
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
                At E-Cell REC, we are committed to nurturing a culture of innovation and entrepreneurship among students. Our mission is to create an ecosystem where ideas are cultivated, skills are sharpened, and ventures are transformed into reality. We believe in empowering young minds with the right knowledge, mentorship, and resources to become impactful leaders of tomorrow.
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
              Advisory Board Members
            </h2>

            {/* Description - Left aligned */}
            <div className="text-gray-700 text-base leading-relaxed">
              <p className="text-left">
                The <span className="font-semibold text-blue-600">Advisory Board</span> of E-CELL REC plays a crucial role in overseeing the organization's strategic direction,
                educational excellence, and its continued growth and impact. This distinguished group of leaders brings a wealth of <span className="font-semibold">educational and
                  business experience</span> and insights to guide <span className="text-blue-600 underline cursor-pointer hover:text-blue-800">our entrepreneurial mission</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Advisory Board Section - Exact same design as team page */}
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8" style={{ width: 'calc(50% + 1rem)' }}>
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

      {/* Advisory Excellence Section - Exact same design as team page */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Section Title - Left aligned */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-left">
              Path to Excellence
            </h2>

            {/* Description - Left aligned */}
            <div className="text-gray-700 text-base leading-relaxed mb-12">
              <p className="text-left">
                At E-Cell REC, our journey is defined by innovation, collaboration, and a relentless pursuit of excellence. We strive to create an ecosystem where students can explore their entrepreneurial potential, gain hands-on experience, and build ventures that make a lasting impact.

                Central to this mission is our distinguished Advisory Board—a group of visionary leaders and seasoned professionals who bring decades of expertise in education, business, and innovation. Their insights not only shape the student experience but also co-create the future of our organization across educational, strategic, and functional dimensions.

                This Path to Excellence ensures that every initiative at E-Cell REC is guided by wisdom, fueled by ambition, and aligned with our mission to empower the next generation of entrepreneurs. We are deeply grateful for the continued support and guidance of our Advisory Board as we work together to build a stronger, more dynamic entrepreneurial community.
              </p>
            </div>
          </div>
        </div>

        {/* Mountain Background Image Section */}
        <div className="relative h-[400px] md:h-[500px] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/group/group2.jpg"
              alt="Path to Excellence representing Advisory Board guidance"
              fill
              className="object-cover object-center"
            />
            {/* Pink decorative elements overlay - matching the team page design */}
            <div className="absolute inset-0">
              {/* Sun icon - top left */}
              <div className="absolute top-8 left-12 w-16 h-16">
                <svg viewBox="0 0 100 100" className="w-full h-full text-pink-500">
                  <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="3" />
                  <g stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                    <line x1="50" y1="10" x2="50" y2="20" />
                    <line x1="50" y1="80" x2="50" y2="90" />
                    <line x1="10" y1="50" x2="20" y2="50" />
                    <line x1="80" y1="50" x2="90" y2="50" />
                    <line x1="25.86" y1="25.86" x2="32.32" y2="32.32" />
                    <line x1="67.68" y1="67.68" x2="74.14" y2="74.14" />
                    <line x1="74.14" y1="25.86" x2="67.68" y2="32.32" />
                    <line x1="32.32" y1="67.68" x2="25.86" y2="74.14" />
                  </g>
                </svg>
              </div>

              {/* Birds - top right */}
              <div className="absolute top-12 right-20">
                <svg viewBox="0 0 60 20" className="w-12 h-4 text-pink-500">
                  <path d="M5 10 Q10 5 15 10 Q20 15 25 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M35 10 Q40 5 45 10 Q50 15 55 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>

              {/* Wavy lines - left side */}
              <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
                <svg viewBox="0 0 100 200" className="w-20 h-32 text-pink-500">
                  <path d="M10 20 Q30 10 50 20 Q70 30 90 20" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M10 60 Q30 50 50 60 Q70 70 90 60" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M10 100 Q30 90 50 100 Q70 110 90 100" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>

              {/* Wavy lines - right side */}
              <div className="absolute right-8 top-1/3">
                <svg viewBox="0 0 100 150" className="w-16 h-24 text-pink-500">
                  <path d="M10 20 Q30 10 50 20 Q70 30 90 20" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M10 60 Q30 50 50 60 Q70 70 90 60" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>

              {/* Path/trail lines on the mountain */}
              <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2">
                <svg viewBox="0 0 300 100" className="w-64 h-16 text-pink-500">
                  <path d="M50 80 Q100 60 150 70 Q200 50 250 60" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  <path d="M30 90 Q80 70 130 80 Q180 60 230 70" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
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
