"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const Announcement = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full max-w-2xl mx-auto my-3 p-4 rounded-xl bg-[#0E0E10] border border-[#3A7AFE]/30 shadow-[0_4px_20px_rgba(0,0,0,0.4)] relative overflow-hidden"
        >
            {/* Subtle Breathing Glow Effect (No Gradient) */}
            <motion.div
                className="absolute inset-0 bg-[#3A7AFE]/5 pointer-events-none"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-3">
            
                <motion.h2
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl font-bold text-[#F2F2F2] tracking-tight"
                >
                   Registrations for Ideathon 4.0 are OPEN!
                </motion.h2>

                {/* Animated Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.35 }}
                    className="text-gray-400 text-xs md:text-sm font-medium max-w-lg leading-relaxed"
                >
                    Don’t miss the biggest innovation challenge of the year.
                </motion.p>

                {/* Animated CTA Button */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.5 }}
                >
                    <Link href="/ideathon" className="inline-block">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[#3A7AFE] text-white px-6 py-2 rounded-full font-bold text-sm md:text-base shadow-[0_0_15px_rgba(58,122,254,0.4)] hover:shadow-[0_0_25px_rgba(58,122,254,0.6)] transition-shadow duration-300"
                        >
                            Register Now
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Announcement;
