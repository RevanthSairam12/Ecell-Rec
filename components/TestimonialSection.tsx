'use client'

import Image from "next/image";

const TestimonialSection = () => {
  return (
    <section className="relative py-16 px-6 overflow-hidden bg-gray-100">
      <div className="max-w-6xl mx-auto">

        {/* Container for the entire geometric design */}
        <div className="relative h-[350px] flex items-center justify-center">

          {/* Blue geometric background shapes - recreating exact image layout */}

          {/* Top left angled blue shape */}
          <div
            className="absolute top-0 left-0 bg-blue-500"
            style={{
              width: '200px',
              height: '120px',
              transform: 'rotate(-15deg) translate(-30px, -20px)',
              clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)'
            }}
          ></div>

          {/* Top right horizontal blue bar */}
          <div
            className="absolute top-0 right-0 bg-blue-500 h-12"
            style={{
              width: '100%',
              maxWidth: '800px',
              transform: 'translateY(-10px)'
            }}
          ></div>

          {/* Bottom left vertical angled blue shape */}
          <div
            className="absolute bottom-0 left-0 bg-blue-500"
            style={{
              width: '80px',
              height: '180px',
              transform: 'rotate(15deg) translate(-40px, 20px)',
              clipPath: 'polygon(0 0, 100% 15%, 100% 100%, 0 85%)'
            }}
          ></div>

          {/* Bottom right angled blue shape */}
          <div
            className="absolute bottom-0 right-0 bg-blue-500"
            style={{
              width: '300px',
              height: '60px',
              transform: 'rotate(-8deg) translate(20px, 15px)',
              clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)'
            }}
          ></div>

          {/* Main dark container with exact styling */}
          <div
            className="relative z-10 bg-slate-900 px-10 py-12 shadow-2xl"
            style={{
              width: '100%',
              maxWidth: '900px',
              transform: 'rotate(2deg)',
              clipPath: 'polygon(0 0, 100% 0, 98% 100%, 2% 100%)'
            }}
          >
            <div className="flex items-center gap-8">

              {/* Text content - exact match */}
              <div className="flex-1">
                <p className="text-white text-lg leading-relaxed mb-6 font-light">
                  E-Cell REC is more than just an entrepreneurship club—it's a community where innovation meets opportunity. Through our workshops, events, and collaborative environment, we empower students to transform their ideas into impactful ventures and build the future of entrepreneurship.
                </p>

                <div className="text-white">
                  <span className="font-bold">E-Cell REC Team</span>
                  <span className="font-light">, Entrepreneurship Cell</span>
                </div>
              </div>

              {/* Profile image with concentric circles */}
              <div className="flex-shrink-0">
                <div className="relative w-32 h-32">
                  {/* Outer pink circle */}
                  <div className="absolute inset-0 w-32 h-32 rounded-full border-4 border-pink-400"></div>

                  {/* Inner red circle */}
                  <div className="absolute inset-2 w-28 h-28 rounded-full border-3 border-red-500"></div>

                  {/* Profile photo */}
                  <div className="absolute inset-4 w-24 h-24 rounded-full overflow-hidden bg-blue-400">
                    <Image
                      src="/group/group1.jpg"
                      alt="E-Cell REC Team"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
