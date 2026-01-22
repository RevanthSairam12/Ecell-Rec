'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

// Animation variants matching LatestInsightsSection
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

interface Initiative {
    id: number;
    image: string;
    title: string;
    description: string;
    date: string;
    href?: string;
}

interface OurInitiativesProps {
    data: Initiative[];
    heading: string;
    buttonText?: string;
    buttonHref?: string;
}

export default function OurInitiatives({ data, heading, buttonText, buttonHref }: OurInitiativesProps) {
    return (
        <motion.section
            className="relative py-16 px-6 overflow-hidden bg-gray-900"
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
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
                        {heading}
                    </div>
                    <div className="h-16"></div>
                </motion.div>

                {/* Cards Grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12"
                    variants={containerVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-120px" }}
                >
                    {data.map((initiative) => (
                        <motion.div
                            key={initiative.id}
                            variants={cardVariant}
                            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-blue-500/20 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-[1.03] hover:-translate-y-2 h-[420px] will-change-transform border border-gray-700/50 hover:border-blue-500/50 bg-gradient-to-br from-gray-800/50 to-gray-900/50"
                        >
                            <Link
                                href={initiative.href || "/events"}
                                aria-label={`Learn more about ${initiative.title}`}
                                className="block h-full w-full"
                            >
                                {/* Background Image */}
                                <div className="absolute inset-0 overflow-hidden">
                                    <Image
                                        src={initiative.image}
                                        alt={initiative.title}
                                        fill
                                        className="object-contain transition-all duration-1000 ease-out group-hover:scale-110 group-hover:brightness-110 will-change-transform"
                                    />
                                </div>

                                {/* Enhanced Gradient Overlay - Clear images, blur on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20 transition-all duration-700 ease-out group-hover:from-black/98 group-hover:via-black/70"></div>

                                {/* Subtle Top Glow Effect */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                                {/* Content Container */}
                                <div className="absolute inset-0 flex flex-col justify-end p-6">
                                    {/* Title - Always Visible with Better Contrast */}
                                    <h3 className="text-white text-xl font-bold mb-2 leading-tight line-clamp-2 transition-all duration-700 ease-out group-hover:text-blue-100 drop-shadow-lg">
                                        {initiative.title}
                                    </h3>

                                    {/* Subtitle/Date - Always Visible */}
                                    <p className="text-gray-300 text-sm mb-4 transition-all duration-700 ease-out group-hover:text-gray-200 flex items-center gap-2">
                                        <svg className="w-4 h-4 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        {initiative.date}
                                    </p>

                                    {/* Details Panel - Revealed on Hover with Smooth Slide */}
                                    <div className="max-h-0 opacity-0 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:max-h-48 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0">
                                        <div className="bg-black/30 backdrop-blur-sm rounded-lg p-3 mb-3 border border-white/10">
                                            <p className="text-gray-100 text-sm leading-relaxed line-clamp-4">
                                                {initiative.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Hover Indicator with Icon */}
                                    <div className="flex items-center justify-between opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out">
                                        <div className="flex items-center text-blue-400 text-sm font-semibold">
                                            <span className="mr-2">Explore Event</span>
                                            <svg
                                                className="w-5 h-5 transition-transform duration-700 ease-out group-hover:translate-x-2"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </div>

                                        {/* Pulse Indicator */}
                                        <div className="relative">
                                            <span className="flex h-3 w-3">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Corner Accent */}
                                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-bl-full"></div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Optional Button */}
                {buttonText && buttonHref && (
                    <motion.div
                        className="flex justify-center"
                        variants={fadeUpVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-120px" }}
                    >
                        <Link href={buttonHref}>
                            <Button
                                size="lg"
                                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
                            >
                                {buttonText}
                            </Button>
                        </Link>
                    </motion.div>
                )}

            </div>
        </motion.section>
    );
}
