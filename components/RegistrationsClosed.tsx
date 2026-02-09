"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";

export default function RegistrationsClosed() {
    return (
        <div className="w-full max-w-2xl mx-auto px-4 py-8 pointer-events-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative overflow-hidden rounded-3xl border border-white/10 p-8 md:p-12 text-center"
                style={{
                    background: "linear-gradient(180deg, #0F172A 0%, #0E0E10 100%)",
                }}
            >
                {/* Soft White Glow Background */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: "radial-gradient(circle at center, rgba(242, 242, 242, 0.08) 0%, transparent 70%)"
                    }}
                />

                {/* Animated Lock Icon */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="relative z-10 flex justify-center mb-6"
                >
                    <div className="p-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm shadow-xl shadow-black/20">
                        <motion.div
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <Lock className="w-8 h-8 md:w-10 md:h-10 text-gray-300" strokeWidth={1.5} />
                        </motion.div>
                    </div>
                </motion.div>

                {/* Main Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="relative z-10 text-2xl md:text-3xl font-bold text-white mb-3"
                >
                    Registrations for Ideathon 4.0 Are Closed
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="relative z-10 text-gray-400 text-sm md:text-base leading-relaxed max-w-lg mx-auto mb-8"
                >
                    All 30 team slots have been filled.
                    <br />
                    Thank you for the overwhelming response and enthusiasm.
                </motion.p>

                {/* Bottom Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="relative z-10 p-4 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm max-w-sm mx-auto"
                >
                    <p className="text-xs text-gray-500">
                        If your team has already registered, don&apos;t worry — your details are safely recorded and stay tuned for updates from E-Cell REC
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
}
