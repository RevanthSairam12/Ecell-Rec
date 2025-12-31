'use client'

import { useEffect, useState } from 'react'

interface LoaderProps {
  onComplete?: () => void
}

const Loader = ({ onComplete }: LoaderProps) => {
  const [isAnimating, setIsAnimating] = useState(true)

  useEffect(() => {
    // Check if loader has already been shown in this session
    const hasShown = sessionStorage.getItem("loaderShown");

    if (hasShown) {
      setIsAnimating(false);
      return;
    }

    // Hide loader after animation completes
    const timer = setTimeout(() => {
      setIsAnimating(false)
      onComplete?.()
      sessionStorage.setItem("loaderShown", "true");
    }, 3500) // Animation duration

    return () => clearTimeout(timer)
  }, [onComplete])

  if (!isAnimating) return null

  return (
    <div className="loader fixed inset-0 z-[10000] overflow-hidden flex flex-col justify-between bg-white">
      {/* Top clip section */}
      <div className="loader-clip clip-top absolute top-0 left-0 w-full h-[33.3vh] overflow-hidden z-[10000] bg-black clip-path-top">
        <div className="marquee absolute top-[200%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] text-white mix-blend-difference">
          <div className="marquee-container w-full flex justify-between items-center text-[clamp(6.25rem,3.89rem+11.81vw,15.625rem)] font-black tracking-tight leading-none text-white font-sans">
            <span className="mx-4">E-Cell REC</span>
            <span className="mx-4">E-Cell REC</span>
            <span className="mx-4">E-Cell REC</span>
            <span className="mx-4">E-Cell REC</span>
            <span className="mx-4">E-Cell REC</span>
            <span className="mx-4">E-Cell REC</span>
            <span className="mx-4">E-Cell REC</span>
            <span className="mx-4">E-Cell REC</span>
          </div>
        </div>
      </div>

      {/* Bottom clip section */}
      <div className="loader-clip clip-bottom absolute bottom-0 left-0 w-full h-[33.3vh] overflow-hidden z-[10000] bg-black clip-path-bottom">
        <div className="marquee absolute top-[200%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] text-white mix-blend-difference">
          <div className="marquee-container w-full flex justify-between items-center text-[clamp(6.25rem,3.89rem+11.81vw,15.625rem)] font-black tracking-tight leading-none text-white font-sans">
            <span className="mx-4">E-Cell REC</span>
            <span className="mx-4">E-Cell REC</span>
            <span className="mx-4">E-Cell REC</span>
            <span className="mx-4">E-Cell REC</span>
            <span className="mx-4">E-Cell REC</span>
            <span className="mx-4">E-Cell REC</span>
            <span className="mx-4">E-Cell REC</span>
            <span className="mx-4">E-Cell REC</span>
          </div>
        </div>
      </div>

      {/* Center clip section */}
      <div className="clip-center absolute overflow-hidden w-full h-[33.4vh] top-[33.4vh]">
        <div className="marquee absolute top-[200%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw]">
          <div className="marquee-container w-full flex justify-between items-center text-[clamp(6.25rem,3.89rem+11.81vw,15.625rem)] font-black tracking-tight leading-none font-sans">
            <span className="mx-4 text-black">E-Cell REC</span>
            <span className="mx-4 text-black">E-Cell REC</span>
            <span className="mx-4 text-black">E-Cell REC</span>
            <span className="mx-4 text-black">E-Cell REC</span>
            <span className="mx-4 text-black">E-Cell REC</span>
            <span className="mx-4 text-black">E-Cell REC</span>
            <span className="mx-4 text-black">E-Cell REC</span>
            <span className="mx-4 text-black">E-Cell REC</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .clip-path-top {
          clip-path: inset(0 0 0 0);
        }
        
        .clip-path-bottom {
          clip-path: inset(0 0 0 0);
        }

        /* Animations */
        .loader {
          animation: loaderFade 0.8s ease-in-out 3s forwards;
        }

        .clip-top,
        .clip-bottom {
          animation: clipReveal 1.5s ease-in-out 1.8s forwards;
        }

        .clip-top {
          animation-name: clipRevealTop;
        }

        .clip-bottom {
          animation-name: clipRevealBottom;
        }

        .marquee {
          animation: marqueePosition 2.5s cubic-bezier(0.76, 0, 0.24, 1) 0s forwards;
        }

        .clip-top .marquee,
        .clip-bottom .marquee {
          animation: marqueeSlideFromRight 3.5s cubic-bezier(0.45, 0, 0.55, 1) 0s forwards,
                     marqueePosition 2.5s cubic-bezier(0.76, 0, 0.24, 1) 0s forwards;
        }

        .clip-center .marquee {
          animation: marqueeSlideFromLeft 3s cubic-bezier(0.45, 0, 0.55, 1) 0s forwards,
                     marqueePosition 2.5s cubic-bezier(0.76, 0, 0.24, 1) 0s forwards;
        }

        .clip-top .marquee-container span,
        .clip-bottom .marquee-container span,
        .clip-center .marquee-container span {
          animation: spanFade 0.8s ease-in-out 2.5s forwards;
        }

        @keyframes clipRevealTop {
          to {
            clip-path: inset(0 0 100% 0);
          }
        }

        @keyframes clipRevealBottom {
          to {
            clip-path: inset(100% 0 0 0);
          }
        }

        @keyframes marqueePosition {
          to {
            top: 50%;
          }
        }

        @keyframes marqueeSlideFromRight {
          from {
            left: 100%;
          }
        }

        @keyframes marqueeSlideFromLeft {
          from {
            left: -100%;
            opacity: 0.9;
          }
        }

        @keyframes spanFade {
          to {
            background-color: transparent;
            opacity: 0;
          }
        }

        @keyframes loaderFade {
          to {
            background-color: transparent;
            opacity: 0;
            pointer-events: none;
          }
        }
      `}</style>
    </div>
  )
}

export default Loader
