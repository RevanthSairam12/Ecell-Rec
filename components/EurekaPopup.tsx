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
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
        onClick={closePopup}
      >
        {/* Popup Content - Dark theme with larger size for better image visibility */}
        <div
          className="relative bg-slate-900 rounded-2xl shadow-2xl max-w-2xl w-full mx-4 my-8 overflow-hidden transform transition-all duration-300 scale-100"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={closePopup}
            className="absolute top-4 right-4 z-10 p-2 bg-black/20 hover:bg-black/30 rounded-full transition-colors duration-200"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Image Section - Larger container for full image visibility without cropping */}
          <div className="relative w-full h-80 sm:h-96 md:h-[28rem] lg:h-[32rem] bg-slate-800">
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

          {/* Content Section - Matching home page aesthetic */}
          <div className="p-6 md:p-8 lg:p-10 text-center">
            {/* Badge - matching home page style */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6">
              🔥 College Pitching Competition
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              Join Eureka! 2025
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed text-base md:text-lg">
              Don't miss out on the most exciting entrepreneurship event of the year.
              Register now and be part of the innovation revolution!
            </p>

            {/* Deadline Notice - matching home page alert style */}
            <div className="bg-red-600/20 border border-red-500/30 rounded-lg p-4 mb-8">
              <p className="text-red-400 text-sm font-semibold mb-1">
                ⏰ Registration Deadline
              </p>
              <p className="text-red-300 text-lg font-bold">
                17 August 2025, 11:59 PM
              </p>
            </div>

            {/* Button Group - matching home page button style */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <Link href="https://forms.gle/uQjxYhCasJByrkUEA" target="_blank" onClick={closePopup} className="flex-1">
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                >
                  Register Now
                </Button>
              </Link>
              <Link href="/upcevents/eureka" onClick={closePopup} className="flex-1">
                <Button
                  variant="outline"
                  className="w-full border-white/20 bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 backdrop-blur-sm"
                >
                  <Info className="w-4 h-4 mr-2" />
                  Know More
                </Button>
              </Link>
            </div>

            {/* Additional Info */}
            <p className="text-xs text-gray-400 mt-4">
              Limited seats available • Only 20 teams • Register today!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EurekaPopup;
