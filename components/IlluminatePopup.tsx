"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function IlluminatePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if user has already seen the popup in this session
    const hasSeenPopup = sessionStorage.getItem("hasSeenIlluminatePopup");
    
    if (!hasSeenPopup) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("hasSeenIlluminatePopup", "true");
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleNavigate = () => {
    router.push("/eureka");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] animate-in fade-in duration-300"
        onClick={handleClose}
      />

      {/* Popup Modal */}
      <div 
        className="fixed inset-0 z-[101] flex items-center justify-center p-4"
        onClick={handleClose}
      >
        <div 
          className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full animate-in zoom-in-95 duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/10 hover:bg-black/20 transition-all"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-slate-700" />
          </button>

          {/* Content */}
          <div className="p-0">
            {/* Event Image */}
            <div className="relative w-full aspect-video rounded-t-2xl overflow-hidden bg-gray-50">
              <Image
                src="/hurryuppiluminate.jpeg"
                alt="Illuminate Event - Hurry Up!"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Event Details */}
            <div className="p-6 text-center space-y-4">
              {/* Urgent Alert */}
              <div className="flex items-center justify-center gap-2 bg-red-50 rounded-lg p-3 border border-red-200">
                <span className="text-2xl">⏰</span>
                <p className="text-sm font-bold text-red-600">
                  Registrations Closing Soon! Only 70 Seats!
                </p>
              </div>

              <p className="text-base text-slate-600">
                Two-part entrepreneurship workshop with <strong>E-Cell IIT Bombay</strong>
              </p>

              {/* CTA Button */}
              <button 
                onClick={handleNavigate}
                className="w-full bg-black hover:bg-gray-800 text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Learn More & Register Now!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
