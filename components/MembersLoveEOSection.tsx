'use client'

import Image from "next/image";
import { useState, useEffect } from "react";

const MembersLoveECellSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      text: "The focus on innovation inspired individual to think beyond traditional approaches and create solutions that effectively address real-world needs. This experience not only enhanced their perspective but also helped them to grow into a more confident and resourceful individual.",
      name: "Dr. R.Shivaranjani",
      location: "Head of the department CSC&CSO",
      image: "/hodmam.jpg",
      circleColor: "border-blue-500"
    },
    {
      text: "Young individuals are capable of innovating, sharing ideas, seeking for challenges, and benefiting from their Peer experiences. I am confident that the resources offered by E-Cell REC will help the students to succeed in their carreer and establish a strong professional network.",
      name: "Dr. Bhagavathula Meena",
      location: "Associate Professor & SBC - CSI",
      image: "/meena-madam.png",
      circleColor: "border-purple-500"
    },
    {
      text: "As an alumnus, it was an absolute privilege to visit my college as a guest. It's amazing to see how much support and encouragement the students have now. Great work by E-Cell REC, and I'm excited to see the incredible things the students will achieve!",
      name: "Mr.E.Pavan Chandra",
      location: "CEO, XceedIQ",
      image: "/pavanchandrasir.jpg",
      circleColor: "border-green-500"
    },
    {
      text: "At E-Cell, we believe every idea has the potential to change the world. Here, innovation meets opportunity, and together, we empower the entrepreneurs of tomorrow. Dream big, take risks, and let's build the future",
      name: "Bora Suri Venkata Reddy",
      location: "CSE Dept Assistant Professor and NSS Programme Officer",
      image: "/kirannsssir.jpg",
      circleColor: "border-orange-500"
    },
    {
      text: "E-Cell helps students in the development of their entrepreneurial skills, connecting the people with similar or different ideology, and access resources to start their business",
      name: "Dr. Ch.Chakradhar",
      location: "CSE Dept IIC coordinator",
      image: "/chakradharsir.jpg",
      circleColor: "border-red-500"
    },
    {
      text: "The E-Cell's dedication to fostering entrepreneurship and providing a platform for students to explore creative and impactful ideas is commendable. Their initiative to connect students with real-world experiences and industry experts is a testament to their commitment to shaping future leaders and innovators.",
      name: "N. Venkata Reddy",
      location: "Founder - CEO, Teckybot",
      image: "/teckybotsir.jpg",
      circleColor: "border-indigo-500"
    },
    {
      text: "The impact you've made in nurturing creativity, building confidence, and turning ideas into actionable plans is remarkable. Kudos to the entire team for consistently going above and beyond to make a difference. Here's to many more milestones and success stories ahead! Keep inspiring and leading the way!",
      name: "Dr.G.Kiran Kumar",
      location: "Faculty coordinator E-CELL REC",
      image: "/kirankumar.png",
      circleColor: "border-cyan-500"
    },
    {
      text: "E-Cell inspire students to launch their own enterprises and foster an entrepreneurial culture. Additionally, they assist students in transforming their concepts into profitable enterprises.",
      name: "Mr. Seshadri Kancherla",
      location: "IIC: Innovation Ambassador (IA)",
      image: "/mechsir.jpg",
      circleColor: "border-yellow-500"
    }
  ];

  // Auto-advance testimonials every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Navigation functions
  const goToNext = () => {
    console.log('Next button clicked, current:', currentTestimonial);
    const nextIndex = (currentTestimonial + 1) % testimonials.length;
    console.log('Moving to testimonial:', nextIndex);
    setCurrentTestimonial(nextIndex);
  };

  const goToPrevious = () => {
    console.log('Previous button clicked, current:', currentTestimonial);
    const prevIndex = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    console.log('Moving to testimonial:', prevIndex);
    setCurrentTestimonial(prevIndex);
  };

  return (
    <section className="relative py-16 px-6 overflow-hidden bg-gradient-to-br from-purple-100 via-purple-50 to-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
          Members Love E-Cell REC
        </h2>

        {/* Testimonial Cards Container */}
        <div className="relative min-h-[400px]">

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Current Testimonial Card */}
          <div key={currentTestimonial} className="transition-all duration-700 ease-in-out">
            <div className="relative mb-8">
              {/* Blue geometric background shapes */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Background blue rectangles with layered effect */}
                <div className="relative w-full max-w-4xl h-64">
                  {/* Back blue layer */}
                  <div className="absolute inset-0 bg-blue-600 transform rotate-2 translate-x-4 translate-y-4 rounded-lg shadow-lg"></div>
                  {/* Middle blue layer */}
                  <div className="absolute inset-0 bg-blue-500 transform rotate-1 translate-x-2 translate-y-2 rounded-lg shadow-lg"></div>
                  {/* Front dark navy layer */}
                  <div className="absolute inset-0 bg-slate-900 rounded-lg shadow-2xl"></div>
                </div>
              </div>

              {/* Content container */}
              <div className="relative z-10 bg-slate-900 rounded-lg p-8 md:p-12 max-w-4xl mx-auto shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">

                  {/* Conditional layout based on current testimonial index - alternating left/right */}
                  {currentTestimonial % 2 === 0 ? (
                      <>
                        {/* Testimonial text - LEFT LAYOUT */}
                        <div className="lg:col-span-3">
                          <p className="text-white text-lg leading-relaxed mb-6 font-light">
                            {testimonials[currentTestimonial].text}
                          </p>

                          <div className="text-white">
                            <span className="font-bold">{testimonials[currentTestimonial].name}</span>
                            <span className="font-light">, {testimonials[currentTestimonial].location}</span>
                          </div>
                        </div>

                        {/* Profile image with decorative circles - RIGHT SIDE */}
                        <div className="lg:col-span-1 flex justify-center lg:justify-end">
                          <div className="relative w-32 h-32">
                            {/* Outer circle */}
                            <div className={`absolute inset-0 w-32 h-32 rounded-full border-4 ${testimonials[currentTestimonial].circleColor}`}></div>

                            {/* Inner circle */}
                            <div className={`absolute inset-2 w-28 h-28 rounded-full border-3 ${testimonials[currentTestimonial].circleColor}`}></div>

                            {/* Profile image */}
                            <div className="absolute inset-4 w-24 h-24 rounded-full overflow-hidden">
                              <Image
                                src={testimonials[currentTestimonial].image}
                                alt={testimonials[currentTestimonial].name}
                                fill
                                className="object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Profile image with decorative circles - LEFT SIDE */}
                        <div className="lg:col-span-1 flex justify-center lg:justify-start order-2 lg:order-1">
                          <div className="relative w-32 h-32">
                            {/* Outer circle */}
                            <div className={`absolute inset-0 w-32 h-32 rounded-full border-4 ${testimonials[currentTestimonial].circleColor}`}></div>

                            {/* Inner circle */}
                            <div className={`absolute inset-2 w-28 h-28 rounded-full border-3 ${testimonials[currentTestimonial].circleColor}`}></div>

                            {/* Profile image */}
                            <div className="absolute inset-4 w-24 h-24 rounded-full overflow-hidden">
                              <Image
                                src={testimonials[currentTestimonial].image}
                                alt={testimonials[currentTestimonial].name}
                                fill
                                className="object-cover"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Testimonial text - RIGHT LAYOUT */}
                        <div className="lg:col-span-3 order-1 lg:order-2">
                          <p className="text-white text-lg leading-relaxed mb-6 font-light">
                            {testimonials[currentTestimonial].text}
                          </p>

                          <div className="text-white">
                            <span className="font-bold">{testimonials[currentTestimonial].name}</span>
                            <span className="font-light">, {testimonials[currentTestimonial].location}</span>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

          {/* Navigation dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  console.log(`Clicked testimonial ${index}`);
                  setCurrentTestimonial(index);
                }}
                className={`w-4 h-4 rounded-full transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-blue-300 ${
                  currentTestimonial === index
                    ? 'bg-blue-600 scale-125 shadow-lg'
                    : 'bg-gray-400 hover:bg-gray-500'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Debug info - remove this after testing */}

        </div>
      </div>
    </section>
  );
};

export default MembersLoveECellSection;
