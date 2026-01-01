'use client'

import Image from "next/image";
import { motion } from "framer-motion";

interface HeroProps {
  label?: string;
  title?: string;
  description?: string;
  backgroundImage?: string;
  primaryCTA?: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
  showLogos?: boolean;
}

const EventsHero = ({
  label = "Transforming Dreams into Reality",
  title = "One Start-Up at a Time!",
  description = "Welcome to the Entrepreneurial Cell of VIT Bhopal, a dynamic hub dedicated to nurturing and empowering the next generation of entrepreneurs across India.",
  backgroundImage = "/images/ecell-hero.jpg",
  primaryCTA = { text: "Join Us", href: "/join-ecell" },
  secondaryCTA = { text: "Learn More", href: "#more" },
  showLogos = true,
}: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={backgroundImage}
          alt="Background"
          fill
          priority
          className="object-cover blur-[1px]"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
        {/* Optional gradient for top/bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80" />
      </div>

      {/* Logos Container */}
      {showLogos && (
        <div className="absolute top-0 left-0 right-0 z-20 pt-24 md:pt-28 px-6">
          <div className="flex justify-between items-center max-w-7xl mx-auto w-full">
            <div className="relative w-28 h-12 md:w-56 md:h-24">
              <Image src="/icons/raghu.png" alt="Raghu Engineering College" fill className="object-contain" priority />
            </div>
            <div className="relative w-28 h-12 md:w-56 md:h-24">
              <Image src="/icons/iic.png" alt="IIC" fill className="object-contain" priority />
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-4xl text-center text-white mt-20 md:mt-32">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-xs md:text-sm font-bold tracking-[0.3em] text-blue-400 uppercase mb-4"
        >
          {label}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-4xl sm:text-6xl md:text-8xl font-black leading-tight mb-6 tracking-tight"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-base md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed font-medium"
        >
          {description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={primaryCTA.text === "Join Us" ? "/join-ecell" : primaryCTA.href}
            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-blue-600 rounded-full hover:bg-blue-500 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50"
          >
            {primaryCTA.text}
          </a>
          <a
            href={secondaryCTA.text === "Explore" ? "#events" : secondaryCTA.href}
            className="inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-white/5 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/10 hover:border-white/40"
          >
            {secondaryCTA.text}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsHero;
