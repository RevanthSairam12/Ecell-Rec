'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { X, Info } from 'lucide-react';

const Popup = () => {
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
        {/* Popup Content - Adjusted size to be smaller and centered */}
        <div
          className="relative bg-slate-900 rounded-2xl shadow-2xl max-w-lg w-full mx-4 my-8 overflow-y-auto max-h-[90vh] transform transition-all duration-300 scale-100"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={closePopup}
            className="absolute top-4 right-4 z-10 p-2 bg-black/20 hover:bg-black/30 rounded-full transition-colors duration-200"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Image Section - Reduced height */}
          <div className="relative w-full h-48 sm:h-56 bg-slate-800">
            <Image
              src="/eventposters/ideathon-poster.png"
              alt="Eureka Event"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 60vw"
            />
            {/* Gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          {/* Content Section - Compact padding */}
          <div className="p-6 text-center">
            {/* Badge - matching home page style */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-medium mb-4">
              College Pitching Competition
            </div>

            <h2 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight">
              Join Ideathon 4.0
            </h2>
            <p className="text-gray-300 mb-5 leading-relaxed text-sm">
              Don't miss out on the most exciting entrepreneurship event of the year.
              Register now and be part of the innovation revolution!
            </p>

            {/* Deadline Notice - matching home page alert style */}
            <div className="bg-red-600/20 border border-red-500/30 rounded-lg p-3 mb-6">
              <p className="text-red-400 text-xs font-semibold mb-1">
                ⏰ Registration Deadline
              </p>
              <p className="text-red-300 text-base font-bold">
                15 February 2026, 11:59 PM
              </p>
            </div>

            {/* Button Group - matching home page button style */}
            <div className="flex justify-center mb-4">
              <Link href="/ideathon" onClick={closePopup} className="w-full sm:w-auto">
                <Button
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 text-sm"
                >
                  Register Now
                </Button>
              </Link>
            </div>

            {/* Additional Info */}
            <p className="text-[10px] text-gray-400 mt-2">
              Limited seats available • Only 30 teams • Register today!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
