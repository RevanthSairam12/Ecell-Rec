'use client'

import Image from "next/image";

const ECellExperienceSection = () => {
  return (
    <section className="relative py-16 px-6 overflow-hidden bg-gradient-to-br from-purple-100 via-purple-50 to-white">
      {/* Background decorative circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-96 h-96 rounded-full border-4 border-purple-200 opacity-30"></div>
        <div className="absolute top-20 left-20 w-80 h-80 rounded-full border-2 border-purple-150 opacity-20"></div>
        <div className="absolute top-32 left-32 w-64 h-64 rounded-full border-2 border-purple-100 opacity-15"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
          The E-Cell Experience
        </h2>

        {/* Experience Items */}
        <div className="space-y-12">
          
          {/* Forum */}
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-pink-500 rounded-lg flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-blue-600 underline mb-2">
                Forum:
              </h3>
              <p className="text-gray-700 text-base">
                Confidential peer groups for problem-solving and support
              </p>
            </div>
          </div>

          {/* MyEO */}
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-blue-600 underline mb-2">
                MyE-Cell:
              </h3>
              <p className="text-gray-700 text-base">
                Connect based on shared interests or industries
              </p>
            </div>
          </div>

          {/* Global and Regional Events */}
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg transform rotate-12">
                <svg className="w-8 h-8 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-blue-600 underline mb-2">
                Global and Regional Events:
              </h3>
              <p className="text-gray-700 text-base">
                Exclusive conferences and networking opportunities
              </p>
            </div>
          </div>

          {/* Executive Education */}
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-yellow-500 rounded-lg flex items-center justify-center shadow-lg transform -rotate-12">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-blue-600 underline mb-2">
                Executive Education:
              </h3>
              <p className="text-gray-700 text-base">
                Learn from world-renowned business schools
              </p>
            </div>
          </div>

          {/* Virtual Learning */}
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h3l-1 1v2h12v-2l-1-1h3c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H4V5h16v11z"/>
                  <rect x="6" y="7" width="12" height="2"/>
                  <rect x="6" y="10" width="8" height="2"/>
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-blue-600 underline mb-2">
                Virtual Learning:
              </h3>
              <p className="text-gray-700 text-base">
                Convenient on-demand content for continuous growth
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ECellExperienceSection;
