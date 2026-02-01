"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "motion/react";

export default function NewHeroIllustration() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <section className="relative w-full h-screen overflow-hidden">
            {/* Multi-Layer Background with WHITE */}

            {/* Base Layer - White to Navy Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#F2F2F2] via-[#E5E7EB] to-[#0F172A]" />

            {/* Secondary Layer - Radial White Glow (Top) */}
            <div
                className="absolute inset-0 opacity-60"
                style={{
                    background: "radial-gradient(ellipse at top, rgba(242,242,242,0.9) 0%, transparent 50%)"
                }}
            />

            {/* Tertiary Layer - Navy Accent (Bottom) */}
            <div
                className="absolute inset-0 opacity-40"
                style={{
                    background: "radial-gradient(ellipse at bottom, rgba(15,23,42,0.8) 0%, transparent 60%)"
                }}
            />

            {/* Animated White Gradient Blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Large White Blob - Top Left */}
                <motion.div
                    className="absolute w-[500px] h-[500px] rounded-full opacity-40"
                    style={{
                        background: "radial-gradient(circle, rgba(242,242,242,0.8) 0%, transparent 70%)",
                        top: "-10%",
                        left: "-5%",
                        filter: "blur(80px)",
                    }}
                    animate={{
                        x: [0, 60, 0],
                        y: [0, 40, 0],
                        scale: [1, 1.15, 1],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* White Blob - Center Right */}
                <motion.div
                    className="absolute w-[400px] h-[400px] rounded-full opacity-35"
                    style={{
                        background: "radial-gradient(circle, rgba(242,242,242,0.7) 0%, transparent 70%)",
                        top: "30%",
                        right: "-5%",
                        filter: "blur(70px)",
                    }}
                    animate={{
                        x: [0, -50, 0],
                        y: [0, 50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 22,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Soft Purple Accent Blob */}
                <motion.div
                    className="absolute w-[350px] h-[350px] rounded-full opacity-25"
                    style={{
                        background: "radial-gradient(circle, rgba(168,85,247,0.4) 0%, transparent 70%)",
                        top: "50%",
                        left: "20%",
                        filter: "blur(60px)",
                    }}
                    animate={{
                        x: [0, 40, 0],
                        y: [0, -30, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Soft Blue Accent Blob */}
                <motion.div
                    className="absolute w-[300px] h-[300px] rounded-full opacity-30"
                    style={{
                        background: "radial-gradient(circle, rgba(59,130,246,0.5) 0%, transparent 70%)",
                        bottom: "10%",
                        right: "30%",
                        filter: "blur(50px)",
                    }}
                    animate={{
                        x: [0, -35, 0],
                        y: [0, 35, 0],
                        scale: [1, 1.12, 1],
                    }}
                    transition={{
                        duration: 24,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            {/* Floating Tech Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={`particle-${i}`}
                        className="absolute w-1 h-1 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            background: i % 2 === 0 ? "rgba(242,242,242,0.4)" : "rgba(15,23,42,0.3)",
                        }}
                        animate={{
                            y: [0, -120, 0],
                            opacity: [0, 0.6, 0],
                        }}
                        transition={{
                            duration: Math.random() * 12 + 10,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            {/* Left Illustration - Team Brainstorming */}
            <motion.div
                className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 w-40 h-40 md:w-72 md:h-72 opacity-25 md:opacity-40"
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: isMobile ? 0.25 : 0.4, x: 0, y: [-15, 15, -15] }}
                transition={{
                    opacity: { duration: 1.2 },
                    x: { duration: 1.2 },
                    y: { duration: 10, repeat: Infinity, ease: "easeInOut" },
                }}
            >
                <svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Lightbulb with idea rays */}
                    <circle cx="120" cy="100" r="45" stroke="#0F172A" strokeWidth="3" fill="none" opacity="0.7" />
                    <path d="M120 55 L120 30" stroke="#0F172A" strokeWidth="3" opacity="0.7" />
                    <path d="M165 80 L185 60" stroke="#0F172A" strokeWidth="3" opacity="0.7" />
                    <path d="M165 120 L185 140" stroke="#0F172A" strokeWidth="3" opacity="0.7" />
                    <path d="M75 80 L55 60" stroke="#0F172A" strokeWidth="3" opacity="0.7" />
                    <path d="M75 120 L55 140" stroke="#0F172A" strokeWidth="3" opacity="0.7" />
                    <rect x="100" y="145" width="40" height="20" rx="3" stroke="#0F172A" strokeWidth="3" fill="none" opacity="0.7" />
                    <rect x="105" y="165" width="30" height="15" rx="2" stroke="#0F172A" strokeWidth="3" fill="none" opacity="0.7" />

                    {/* Animated glow */}
                    <motion.circle
                        cx="120"
                        cy="100"
                        r="35"
                        fill="#6366F1"
                        opacity="0.15"
                        animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.35, 0.15] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />

                    {/* Team collaboration elements */}
                    <circle cx="80" cy="200" r="12" fill="#0F172A" opacity="0.6" />
                    <circle cx="120" cy="200" r="12" fill="#0F172A" opacity="0.6" />
                    <circle cx="160" cy="200" r="12" fill="#0F172A" opacity="0.6" />
                    <path d="M80 212 L80 220 L70 230 L90 230 Z" fill="#0F172A" opacity="0.6" />
                    <path d="M120 212 L120 220 L110 230 L130 230 Z" fill="#0F172A" opacity="0.6" />
                    <path d="M160 212 L160 220 L150 230 L170 230 Z" fill="#0F172A" opacity="0.6" />
                </svg>
            </motion.div>

            {/* Right Illustration - Tech Growth */}
            <motion.div
                className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 w-40 h-40 md:w-72 md:h-72 opacity-25 md:opacity-40"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: isMobile ? 0.25 : 0.4, x: 0, y: [15, -15, 15] }}
                transition={{
                    opacity: { duration: 1.2 },
                    x: { duration: 1.2 },
                    y: { duration: 11, repeat: Infinity, ease: "easeInOut" },
                }}
            >
                <svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Laptop/Device */}
                    <rect x="60" y="80" width="120" height="80" rx="4" stroke="#0F172A" strokeWidth="3" fill="none" opacity="0.7" />
                    <rect x="50" y="160" width="140" height="8" rx="2" fill="#0F172A" opacity="0.6" />
                    <rect x="70" y="90" width="100" height="60" fill="#A855F7" opacity="0.2" />

                    {/* Growth arrows */}
                    <motion.path
                        d="M90 130 L110 110 L130 120 L150 95"
                        stroke="#6366F1"
                        strokeWidth="3"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
                    />
                    <path d="M140 100 L150 95 L145 105" stroke="#6366F1" strokeWidth="3" fill="none" />

                    {/* Data points */}
                    <circle cx="90" cy="130" r="4" fill="#0F172A" opacity="0.7" />
                    <circle cx="110" cy="110" r="4" fill="#0F172A" opacity="0.7" />
                    <circle cx="130" cy="120" r="4" fill="#0F172A" opacity="0.7" />
                    <circle cx="150" cy="95" r="4" fill="#0F172A" opacity="0.7" />

                    {/* Tech elements */}
                    <circle cx="200" cy="60" r="15" stroke="#A855F7" strokeWidth="2" opacity="0.5" />
                    <circle cx="40" cy="180" r="12" stroke="#3B82F6" strokeWidth="2" opacity="0.5" />
                    <rect x="190" y="170" width="30" height="30" stroke="#0F172A" strokeWidth="2" opacity="0.4" transform="rotate(45 205 185)" />
                </svg>
            </motion.div>

            {/* Mobile-Only Logo Bar */}
            {isMobile && (
                <div className="absolute top-24 left-0 right-0 z-10 px-5">
                    <div className="flex justify-between items-center">
                        <div className="relative w-28 h-16" style={{ filter: "drop-shadow(0 0 8px rgba(15,23,42,0.6))" }}>
                            <Image src="/icons/raghu.png" alt="Raghu Engineering College" fill className="object-contain" priority />
                        </div>
                        <div className="relative w-28 h-16" style={{ filter: "drop-shadow(0 0 8px rgba(15,23,42,0.6))" }}>
                            <Image src="/icons/iic.png" alt="IIC" fill className="object-contain" priority />
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Content with Text Glow for Readability */}
            <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center px-4 sm:px-6 lg:px-8 max-w-5xl">
                    <motion.h1
                        className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-[#0E0E10] mb-6 tracking-tight"
                        style={{
                            textShadow: "0 0 40px rgba(242,242,242,0.8), 0 0 20px rgba(242,242,242,0.6)",
                        }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        Ideathon 4.0
                    </motion.h1>
                    <motion.p
                        className="text-xl sm:text-2xl md:text-3xl text-[#0F172A] font-light max-w-3xl mx-auto mb-10"
                        style={{
                            textShadow: "0 0 30px rgba(242,242,242,0.7), 0 0 15px rgba(242,242,242,0.5)",
                        }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    >
                        Where Innovation Meets Excellence
                    </motion.p>
                    <motion.div
                        className="flex flex-wrap items-center justify-center gap-4"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                    >
                        <a
                            href="#ideathon-form"
                            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-blue-600 rounded-full hover:bg-blue-500 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50"
                        >
                            Register for Ideathon
                        </a>
                        <a
                            href="/ideathon#what-is-ideathon"
                            className="inline-flex items-center justify-center px-8 py-4 font-bold text-[#0F172A] transition-all duration-300 bg-white/70 backdrop-blur-md border-2 border-[#0F172A]/20 rounded-full hover:bg-white hover:border-[#0F172A]/40"
                        >
                            What is ideathon?
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
