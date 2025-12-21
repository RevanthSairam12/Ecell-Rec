'use client'
import AdvisoryBoardComponent from "@/components/advisoryBoard";
import Image from "next/image";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";



export default function AdvisoryBoard() {


  return (
    <div className="min-h-screen bg-slate-900">
      <PageHero 
        title="About" 
        highlight="Us" 
        description="Empowering students today to lead industries tomorrow. At E-Cell REC, we are committed to nurturing a culture of innovation and entrepreneurship." 
        useWhiteBackground={true}
      />

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


      <AdvisoryBoardComponent />

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

