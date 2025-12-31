'use client'

import { useEffect, useState, useRef } from 'react'
import Image from "next/image"
import { motion } from 'framer-motion'
import { Inter, Whisper, Anton } from 'next/font/google'
import { Button } from "@heroui/react"

const UserIcon = ({ fill = "currentColor", size, height, width, ...props }: any) => {
  return (
    <svg
      data-name="Iconly/Curved/Profile"
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      >
        <path
          d="M11.845 21.662C8.153 21.662 5 21.088 5 18.787s3.133-4.425 6.845-4.425c3.692 0 6.845 2.1 6.845 4.4s-3.134 2.9-6.845 2.9z"
          data-name="Stroke 1"
        />
        <path d="M11.837 11.174a4.372 4.372 0 10-.031 0z" data-name="Stroke 3" />
      </g>
    </svg>
  );
};

const CameraIcon = ({ fill = "currentColor", size, height, width, ...props }: any) => {
  return (
    <svg
      fill="none"
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M17.44 6.236c.04.07.11.12.2.12 2.4 0 4.36 1.958 4.36 4.355v5.934A4.368 4.368 0 0117.64 21H6.36A4.361 4.361 0 012 16.645V10.71a4.361 4.361 0 014.36-4.355c.08 0 .16-.04.19-.12l.06-.12.106-.222a97.79 97.79 0 01.714-1.486C7.89 3.51 8.67 3.01 9.64 3h4.71c.97.01 1.76.51 2.22 1.408.157.315.397.822.629 1.31l.141.299.1.22zm-.73 3.836c0 .5.4.9.9.9s.91-.4.91-.9-.41-.909-.91-.909-.9.41-.9.91zm-6.44 1.548c.47-.47 1.08-.719 1.73-.719.65 0 1.26.25 1.72.71.46.459.71 1.068.71 1.717A2.438 2.438 0 0112 15.756c-.65 0-1.26-.25-1.72-.71a2.408 2.408 0 01-.71-1.717v-.01c-.01-.63.24-1.24.7-1.699zm4.5 4.485a3.91 3.91 0 01-2.77 1.15 3.921 3.921 0 01-3.93-3.926 3.865 3.865 0 011.14-2.767A3.921 3.921 0 0112 9.402c1.05 0 2.04.41 2.78 1.15.74.749 1.15 1.738 1.15 2.777a3.958 3.958 0 01-1.16 2.776z"
        fill={fill}
        fillRule="evenodd"
      />
    </svg>
  );
};

const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] })
const whisper = Whisper({ subsets: ['latin'], weight: '400' })
const anton = Anton({ subsets: ['latin'], weight: '400' })

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const slides = [
    {
      title: "Ignite Your",
      highlight: "Entrepreneurial Spirit",
      description: "Join a thriving community of innovators, dreamers, and future business leaders at Raghu Engineering College."
    },
    {
      title: "Transform Ideas",
      highlight: "Into Reality",
      description: "From concept to launch, we provide the resources, mentorship, and network you need to succeed."
    },
    {
      title: "Connect, Learn",
      highlight: "& Grow Together",
      description: "Access world-class workshops, startup bootcamps, and connect with industry experts who've been there."
    },
    {
      title: "Build The Future",
      highlight: "Starting Today",
      description: "Be part of the next generation of entrepreneurs shaping tomorrow's world with innovative solutions."
    }
  ]

  useEffect(() => {
    setIsLoaded(true)

    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [slides.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
  }

  return (
    <section className="hero relative">
      {/* Hero Slider */}
      <div className="relative w-full min-h-screen overflow-hidden">
        {/* White Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/40"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating Gradient Orbs */}
          <motion.div
            className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-200/40 to-indigo-300/30 blur-3xl"
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-purple-200/30 to-pink-200/20 blur-3xl"
            animate={{
              x: [0, -20, 0],
              y: [0, 30, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-gradient-to-br from-cyan-200/25 to-blue-200/20 blur-3xl"
            animate={{
              x: [0, 40, 0],
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] rounded-full bg-gradient-to-tl from-indigo-200/30 to-violet-200/20 blur-3xl"
            animate={{
              x: [0, -25, 0],
              y: [0, 25, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Grid Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />

          {/* Subtle Dots Pattern */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `radial-gradient(circle, #3b82f6 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        {/* Content Container */}
        <div className="relative z-20 min-h-screen flex flex-col pt-16">
          {/* Logo Bar - Matching team page style */}
          {/* Desktop layout: Shifted down 100px */}
          <div className="hidden md:flex justify-between items-center px-6 max-w-7xl mx-auto w-full mt-[100px]">
            <div className="relative w-56 h-24">
              <Image src="/icons/raghu.png" alt="Raghu Engineering College" fill className="object-contain" priority />
            </div>
            <div className="relative w-56 h-24">
              <Image src="/icons/iic.png" alt="IIC" fill className="object-contain" priority />
            </div>
          </div>
          {/* Mobile layout: Shifted down 100px */}
          <div className="md:hidden px-5 mt-[100px]">
            <div className="flex justify-between items-center">
              <div className="relative w-28 h-16">
                <Image src="/icons/raghu.png" alt="Raghu Engineering College" fill className="object-contain" priority />
              </div>
              <div className="relative w-28 h-16">
                <Image src="/icons/iic.png" alt="IIC" fill className="object-contain" priority />
              </div>
            </div>
          </div>

          {/* Main Content - Center Aligned like team page */}
          <div className="flex-1 flex items-center justify-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="max-w-6xl mx-auto">
                {/* Sliding Text Content */}
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-700 ease-in-out ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 absolute inset-0 pointer-events-none'
                      }`}
                  >
                    {index === currentSlide && (
                      <div className="mb-8 relative">
                        <div className="relative inline-block py-4">
                          <h1
                            className={`${anton.className} text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-slate-900 tracking-wide uppercase relative z-10 whitespace-nowrap`}
                          >
                            {slide.title}
                          </h1>
                          <span
                            className={`${whisper.className} absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-red-600 -rotate-6 pointer-events-none z-20 opacity-90`}
                            style={{ textShadow: '2px 2px 4px rgba(255,255,255,0.5)' }}
                          >
                            {slide.highlight}
                          </span>
                        </div>
                        <p
                          className={`${inter.className} text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mt-8 mb-10 font-normal`}
                        >
                          {slide.description}
                        </p>
                      </div>
                    )}
                  </div>
                ))}

                {/* Fixed Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                  <Button
                    as="a"
                    href="/join-ecell"
                    color="primary"
                    size="lg"
                    radius="md"
                    className="px-8 py-6 font-bold"
                    startContent={<UserIcon />}
                  >
                    Join E-Cell Today
                  </Button>
                  <Button
                    as="a"
                    href="/events"
                    variant="bordered"
                    size="lg"
                    radius="md"
                    className="px-8 py-6 font-semibold border-slate-200 text-slate-900 bg-slate-100 hover:bg-slate-200"
                    endContent={<CameraIcon />}
                  >
                    Explore Events
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
