"use client";

import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import Footer from "@/components/Footer";

const Prism = dynamic(() => import("@/components/Prism"), { ssr: false });
const IdeathonForm = dynamic(() => import("@/components/ideathon-form"), { ssr: false });

export default function IdeathonPage() {
    return (
        <div className="min-h-screen bg-black relative overflow-hidden dark">


            {/* Hero Section with Prism */}
            <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pointer-events-none">
                {/* Prism Background */}
                <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
                    <Prism
                        height={3.5}
                        baseWidth={5.5}
                        animationType="3drotate"
                        glow={1.2}
                        noise={0.3}
                        transparent={true}
                        scale={3.6}
                        hueShift={0.5}
                        colorFrequency={1}
                        bloom={1.2}
                        timeScale={0.5}
                    />
                </div>

                {/* Logo Bar - Mobile Only */}
                <div className="md:hidden absolute top-24 left-0 right-0 z-10 px-5">
                    <div className="flex justify-between items-center">
                        <div className="relative w-28 h-16" style={{ filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.4))' }}>
                            <Image src="/icons/raghu.png" alt="Raghu Engineering College" fill className="object-contain" priority />
                        </div>
                        <div className="relative w-28 h-16" style={{ filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.4))' }}>
                            <Image src="/icons/iic.png" alt="IIC" fill className="object-contain" priority />
                        </div>
                    </div>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 pointer-events-auto">
                    <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
                        Ideathon 4.0
                    </h1>
                    <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 font-light max-w-3xl mx-auto drop-shadow-md">
                        Where Innovation Meets Excellence
                    </p>
                </div>
            </section>

            <IdeathonForm />

            <Footer />
        </div>
    );
}
