'use client'
import AdvisoryBoardComponent from "@/components/advisoryBoard";
import Image from "next/image";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import AppNavbar from "@/components/AppNavbar";



export default function AdvisoryBoard() {


  return (
    <div className="min-h-screen bg-slate-900">
      <AppNavbar />
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


        <div className="relative h-[400px] md:h-[500px] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/group/group7.jpg"
              alt="Path to Excellence representing Advisory Board guidance"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

