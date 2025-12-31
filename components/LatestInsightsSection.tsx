'use client';

import insights from "@/lib/latestInsights";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

/* ---------------- Animation Variants ---------------- */

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

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariant = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function LatestInsightsSection() {
  return (
    <motion.section
      className="relative py-16 px-6 overflow-hidden bg-gray-900"
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}   // 🔑 critical fix
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          className="relative mb-16"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
        >
          <div
            className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-12 py-4 font-bold text-xl md:text-2xl text-center"
            style={{
              clipPath: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)',
              minWidth: '300px',
            }}
          >
            Latest Insights
          </div>
          <div className="h-16"></div>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
        >
          {insights.map((insight) => (
            <motion.div
              key={insight.id}
              variants={cardVariant}
              className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer
                         hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={insight.image}
                  alt={insight.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-white text-lg font-semibold mb-3 leading-tight">
                  {insight.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {insight.description}
                </p>
                <p className="text-gray-400 text-xs">
                  {insight.date}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
        >
          <a href="/events">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium text-sm flex items-center space-x-2 mx-auto">
              <span>Explore All Events</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </a>
        </motion.div>

      </div>
    </motion.section>
  );
}
