'use client';

import TextType from "@/components/ui/TextType";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Anton } from 'next/font/google'

const anton = Anton({ subsets: ['latin'], weight: '400' })

const sectionVariant = {
  hidden: {
    opacity: 0,
    filter: "blur(12px)",
    y: 60,
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

const blockVariant = {
  hidden: {
    opacity: 0,
    filter: "blur(10px)",
    y: 40,
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};
export default function ConnectLearnGrowSection() {
  return (
    <motion.section
      className="relative py-16 px-6 overflow-hidden bg-white"
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Main Heading */}
        <h2 className={`${anton.className} text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16 tracking-wide uppercase`}>
          Connect. Learn. Grow.
        </h2>

        {/* Main Heading */}
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16"
          variants={blockVariant}
        >
          <TextType
            text={["Connect With Us", "Learn With Us", "Grow With Us"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </motion.h2>

        {/* ---------------- CONNECT ---------------- */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-20"
          variants={blockVariant}
        >
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Connect
            </h3>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Build relationships with fellow entrepreneurs across our vibrant community. Have the conversations you can't have anywhere else about what's really going on in your life and your ventures and make the connections that unlock real growth.
            </p>
          </div>

          <div className="relative">
            <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/group/group5.jpg"
                alt="EO Members connecting and networking"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* ---------------- LEARN ---------------- */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-20"
          variants={blockVariant}
        >
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/group/group6.jpg"
                alt="E-Cell REC Members learning together"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Learn
            </h3>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Access world-class education, renowned visionaries, and events tailored for established entrepreneurs. Learn from peers who are going through what you are and from the experts who have been there and done that.
            </p>
          </div>
        </motion.div>

        {/* ---------------- GROW ---------------- */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          variants={blockVariant}
        >
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Grow
            </h3>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Your business will grow as fast as you can level up. Advance your leadership skills, develop your mindset and scale your business through peer support and expert guidance.
            </p>
          </div>

          <div className="relative">
            <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/group/group1.jpg"
                alt="EO Members celebrating growth and success"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 14l3-3 3 3 5-5 1.41 1.41L13 17.83l-3-3-2.59 2.59L6 16l1-2z" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
