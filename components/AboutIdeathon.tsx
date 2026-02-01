"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

export default function AboutIdeathon() {
    // Gallery images
    const galleryImages = [
        "/events/ideathon-3.0/ideathon-1.jpg",
        "/events/ideathon-3.0/ideathon-2.jpg",
        "/events/ideathon-3.0/ideathon-3.jpg",
        "/events/ideathon-3.0/ideathon-4.jpg",
        "/events/ideathon-3.0/ideathon-5.jpg",
        "/events/ideathon-3.0/ideathon-6.jpg",
        "/events/ideathon-3.0/ideathon-7.jpg",
        "/events/ideathon-3.0/ideathon-8.jpg",
        "/events/ideathon-3.0/ideathon-9.jpg",
    ];

    // Duplicate for infinite scroll
    const duplicatedImages = [...galleryImages, ...galleryImages];

    return (
        <section id="what-is-ideathon" className="relative w-full py-24 md:py-36 overflow-hidden bg-[#030712]">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                {/* Deep background gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#030712] to-black" />

                {/* Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                    }}
                />

                {/* Animated Glow Orbs */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                        className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen"
                        animate={{
                            x: [0, 100, 0],
                            y: [0, -50, 0],
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                    <motion.div
                        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px] mix-blend-screen"
                        animate={{
                            x: [0, -50, 0],
                            y: [0, 50, 0],
                            scale: [1, 1.1, 1],
                            opacity: [0.2, 0.4, 0.2],
                        }}
                        transition={{
                            duration: 12,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 2,
                        }}
                    />
                </div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* About Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8 tracking-tight">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-slate-300">
                                What is
                            </span>
                            <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 drop-shadow-[0_0_15px_rgba(129,140,248,0.5)]">
                                Ideathon?
                            </span>
                        </h2>

                        <div className="space-y-6 text-lg sm:text-xl text-slate-300 font-light leading-relaxed">
                            <p className="border-l-2 border-blue-500/30 pl-6">
                                Ideathons at E-Cell are much more than just conceptualizing solutions. They are a platform to transform viable ideas into <span className="text-blue-300 font-normal">scalable startups</span>.
                            </p>
                            <p className="border-l-2 border-purple-500/30 pl-6">
                                We guide participants through every step—from developing a convincing standalone pitch deck to dissecting ideas with carefully selected tools.
                            </p>
                        </div>

                        {/* Stats/Badge */}
                        <div className="mt-10 flex gap-6">
                            <div className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                                <p className="text-2xl font-bold text-white mb-1">3+ Years</p>
                                <p className="text-sm text-slate-400 uppercase tracking-wider">Experience</p>
                            </div>
                            <div className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                                <p className="text-2xl font-bold text-white mb-1">Impactful</p>
                                <p className="text-sm text-slate-400 uppercase tracking-wider">Journeys</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side Visual/Glass Card */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-20 -z-10" />
                        <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 sm:p-10 overflow-hidden group">
                            <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
                            <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />

                            <h3 className="text-2xl font-semibold text-white mb-6">Create Memorable Journeys</h3>
                            <p className="text-slate-300 leading-relaxed mb-8">
                                With over three years of experience conducting impactful hackathons, we've helped support many ideas in raising funds and growing into scalable startups.
                            </p>

                            <div className="w-full h-48 relative rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                                <Image
                                    src="/events/ideathon-3.0/ideathon-1.jpg"
                                    alt="Ideathon Feature"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Previous Ideathon Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="relative"
                >
                    <div className="flex items-center justify-center gap-4 mb-16">
                        <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-slate-500" />
                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center tracking-tight">
                            Previous Ideathon 3.0
                        </h3>
                        <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-slate-500" />
                    </div>

                    {/* Auto-Scrolling Gallery */}
                    <div className="relative w-full -mx-4 sm:mx-0">
                        {/* Gradient Overlays */}
                        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none" />
                        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none" />

                        {/* Scrolling Container */}
                        <div className="overflow-hidden py-4">
                            <motion.div
                                className="flex gap-6 pl-4"
                                animate={{
                                    x: [0, "-50%"],
                                }}
                                transition={{
                                    duration: 50,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                whileHover={{
                                    animationPlayState: "paused",
                                }}
                            >
                                {duplicatedImages.map((src, index) => (
                                    <motion.div
                                        key={`gallery-${index}`}
                                        className="relative flex-shrink-0 w-72 h-48 md:w-96 md:h-64 rounded-xl overflow-hidden cursor-pointer group"
                                        whileHover={{
                                            scale: 1.05,
                                            y: -5,
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Image
                                            src={src}
                                            alt={`Ideathon 3.0 - Image ${(index % 9) + 1}`}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            sizes="(max-width: 768px) 288px, 384px"
                                        />
                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                        {/* Border Glow */}
                                        <div className="absolute inset-0 border border-white/5 group-hover:border-purple-500/50 transition-colors duration-300 rounded-xl" />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
