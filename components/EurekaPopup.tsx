'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { X, Info } from 'lucide-react';

const EurekaPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if popup has been shown before in this session
    const hasSeenPopup = sessionStorage.getItem('eurekaPopupShown');

    if (!hasSeenPopup) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
        sessionStorage.setItem('eurekaPopupShown', 'true');
      }, 2000); // 2 second delay

      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto"
        onClick={closePopup}
      >
        {/* Popup Content - Fully responsive design for all screen sizes */}
        <div
          className="relative bg-slate-900 rounded-lg sm:rounded-xl md:rounded-2xl shadow-2xl w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-1 xs:mx-2 sm:mx-4 my-2 xs:my-4 sm:my-8 overflow-hidden transform transition-all duration-300 scale-100 popup-max-height flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={closePopup}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 p-1.5 sm:p-2 bg-black/20 hover:bg-black/30 rounded-full transition-colors duration-200"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </button>

          {/* Image Section - Ultra responsive container for all devices */}
          <div className="relative w-full h-40 xs:h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 bg-slate-800 flex-shrink-0">
            <Image
              src="/upcevents/eureka.jpeg"
              alt="Eureka Event"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 60vw"
            />
            {/* Gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          {/* Content Section - Ultra responsive and scrollable */}
          <div className="p-3 popup-xs-padding sm:p-6 md:p-8 text-center overflow-y-auto flex-1">
            {/* Badge - matching home page style */}
            <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-50 text-blue-600 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              🔥 College Pitching Competition
            </div>

            <h2 className="popup-xs-title text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight">
              Join Eureka! 2025
            </h2>
            <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base md:text-lg px-2">
              Don't miss out on the most exciting entrepreneurship event of the year.
              Register now and be part of the innovation revolution!
            </p>

            {/* Deadline Notice - responsive alert style */}
            <div className="bg-red-600/20 border border-red-500/30 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
              <p className="text-red-400 text-xs sm:text-sm font-semibold mb-1">
                ⏰ Registration Deadline
              </p>
              <p className="text-red-300 text-sm sm:text-lg font-bold">
                17 August 2025, 11:59 PM
              </p>
            </div>

            {/* Button Group - responsive button layout */}
            <div className="flex flex-col gap-2 sm:gap-3 mb-4 sm:mb-6">
              <Link href="https://forms.gle/uQjxYhCasJByrkUEA" target="_blank" onClick={closePopup} className="w-full">
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 text-sm sm:text-base"
                >
                  Register Now
                </Button>
              </Link>
              <Link href="/upcevents/eureka" onClick={closePopup} className="w-full">
                <Button
                  variant="outline"
                  className="w-full border-white/20 bg-white/10 hover:bg-white/20 text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 backdrop-blur-sm text-sm sm:text-base"
                >
                  <Info className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  Know More
                </Button>
              </Link>
            </div>

            {/* Additional Info */}
            <p className="text-xs text-gray-400 mt-2 sm:mt-4 px-2">
              Limited seats available • Only 20 teams • Register today!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EurekaPopup;
