"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { motion } from "motion/react";

export default function NewHero() {
    // Generate random properties for animated shapes
    const shapes = useMemo(() => {
        const shapeCount = 18;
        const elements = [];

        for (let i = 0; i < shapeCount; i++) {
            const randomX = Math.random() * 100; // 0-100%
            const randomY = Math.random() * 100; // 0-100%
            const randomDuration = Math.random() * 10 + 10; // 10-20s
            const randomDelay = Math.random() * 5; // 0-5s
            const randomOpacity = Math.random() * 0.1 + 0.05; // 0.05-0.15

            const shapeType = i % 4;

            if (shapeType === 0) {
                // Horizontal thin line
                elements.push({
                    key: `h-line-${i}`,
                    className: "absolute h-px bg-white/10",
                    style: {
                        top: `${randomY}%`,
                        left: `${randomX}%`,
                        width: `${Math.random() * 100 + 50}px`,
                    },
                    animate: {
                        y: [0, -60, 0],
                        opacity: [randomOpacity, randomOpacity * 2, randomOpacity],
                    },
                    transition: {
                        duration: randomDuration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: randomDelay,
                    },
                });
            } else if (shapeType === 1) {
                // Vertical thin line
                elements.push({
                    key: `v-line-${i}`,
                    className: "absolute w-px bg-white/7",
                    style: {
                        top: `${randomY}%`,
                        left: `${randomX}%`,
                        height: `${Math.random() * 100 + 50}px`,
                    },
                    animate: {
                        x: [0, 40, 0],
                        opacity: [randomOpacity, randomOpacity * 2.5, randomOpacity],
                    },
                    transition: {
                        duration: randomDuration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: randomDelay,
                    },
                });
            } else if (shapeType === 2) {
                // Tech polygon (triangle)
                elements.push({
                    key: `polygon-${i}`,
                    className: "absolute border border-white/5",
                    style: {
                        top: `${randomY}%`,
                        left: `${randomX}%`,
                        width: `${Math.random() * 40 + 30}px`,
                        height: `${Math.random() * 40 + 30}px`,
                        clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                    },
                    animate: {
                        rotate: [0, 5, -5, 0],
                        opacity: [randomOpacity * 0.5, randomOpacity * 1.5, randomOpacity * 0.5],
                    },
                    transition: {
                        duration: randomDuration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: randomDelay,
                    },
                });
            } else {
                // Glow dot
                elements.push({
                    key: `dot-${i}`,
                    className: "absolute rounded-full",
                    style: {
                        top: `${randomY}%`,
                        left: `${randomX}%`,
                        width: `${Math.random() * 8 + 4}px`,
                        height: `${Math.random() * 8 + 4}px`,
                        background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)",
                        boxShadow: "0 0 10px rgba(255,255,255,0.1)",
                    },
                    animate: {
                        y: [0, -30, 0],
                        opacity: [randomOpacity * 2, randomOpacity * 4, randomOpacity * 2],
                        scale: [1, 1.3, 1],
                    },
                    transition: {
                        duration: randomDuration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: randomDelay,
                    },
                });
            }
        }

        return elements;
    }, []);

    return (
        <section className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-[#0F172A] to-[#0E0E10]">
            {/* Animated Background Shapes */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {shapes.map((shape) => (
                    <motion.div
                        key={shape.key}
                        className={shape.className}
                        style={shape.style}
                        animate={shape.animate}
                        transition={shape.transition}
                    />
                ))}
            </div>

            {/* Desktop Logo Bar - Hidden on Mobile */}
            <div className="hidden md:flex absolute top-12 left-0 right-0 z-10 px-12 justify-between items-center">
                {/* Raghu Logo - LEFT */}
                <div className="relative w-48 h-20" style={{ filter: "drop-shadow(0 0 12px rgba(255,255,255,0.5))" }}>
                    <Image src="/icons/raghu.png" alt="Raghu Engineering College" fill className="object-contain" priority />
                </div>

                {/* IIC + E-Cell Logos - RIGHT */}
                <div className="flex gap-6 items-center">
                    <div className="relative w-28 h-20" style={{ filter: "drop-shadow(0 0 12px rgba(255,255,255,0.5))" }}>
                        <Image src="/icons/iic.png" alt="IIC" fill className="object-contain" priority />
                    </div>
                    <div className="relative w-28 h-20" style={{ filter: "drop-shadow(0 0 12px rgba(255,255,255,0.5))" }}>
                        <Image src="/icons/ecellverynew.png" alt="E-Cell" fill className="object-contain" priority />
                    </div>
                </div>
            </div>

            {/* Mobile Logo Bar - Stacked at Top */}
            <div className="md:hidden absolute top-24 left-0 right-0 z-10 px-5">
                <div className="flex justify-between items-center">
                    <div className="relative w-28 h-16" style={{ filter: "drop-shadow(0 0 8px rgba(255,255,255,0.4))" }}>
                        <Image src="/icons/raghu.png" alt="Raghu Engineering College" fill className="object-contain" priority />
                    </div>
                    <div className="relative w-28 h-16" style={{ filter: "drop-shadow(0 0 8px rgba(255,255,255,0.4))" }}>
                        <Image src="/icons/iic.png" alt="IIC" fill className="object-contain" priority />
                    </div>
                </div>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center px-4 sm:px-6 lg:px-8">
                    <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-[#F2F2F2] mb-6 tracking-tight drop-shadow-lg">
                        Ideathon 4.0
                    </h1>
                    <p className="text-xl sm:text-2xl md:text-3xl text-[#F2F2F2] font-light max-w-3xl mx-auto drop-shadow-md mb-10">
                        Where Innovation Meets Excellence
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <a
                            href="/resources/Pitch_Deck_Template.pptx"
                            download
                            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-[#F2F2F2] transition-all duration-300 bg-blue-600 rounded-full hover:bg-blue-500 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50"
                        >
                            Download PPT FORMAT
                        </a>
                        <a
                            href="/ideathon#what-is-ideathon"
                            className="inline-flex items-center justify-center px-8 py-4 font-bold text-[#F2F2F2] transition-all duration-300 bg-white/5 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/10 hover:border-white/40"
                        >
                            What is ideathon?
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
