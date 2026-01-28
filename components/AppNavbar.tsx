"use client";

import React, { useEffect, useState } from "react";
import { StaggeredMenu, StaggeredMenuItem } from "@/components/StaggeredMenu";
import Image from "next/image";

export default function AppNavbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Set mounted to true after hydration
        setMounted(true);

        const handleScroll = () => {
            // Hide logos after scrolling down 100px
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems: StaggeredMenuItem[] = [
        { label: "Home", ariaLabel: "Navigate to Home", link: "/" },
        { label: "About", ariaLabel: "Navigate to About", link: "/advisory-board" },
        { label: "Team", ariaLabel: "Navigate to Team", link: "/team" },
        { label: "Events", ariaLabel: "Navigate to Events", link: "/events" },
        { label: "Resources", ariaLabel: "Navigate to Resources", link: "/resources" },
        { label: "Startups", ariaLabel: "Navigate to Startups", link: "/startups" },
    ];

    return (
        <>
            {/* Logo Header - Fixed at top with gradient background matching hero */}
            <header
                className={`fixed top-0 left-0 w-full z-[50] bg-gradient-to-br from-white/95 via-blue-50/40 to-indigo-50/50 backdrop-blur-lg border-b border-blue-100/30 transition-all duration-500 ease-in-out ${mounted && isScrolled
                    ? 'opacity-0 -translate-y-full pointer-events-none'
                    : 'opacity-100 translate-y-0'
                    }`}
            >
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-5">
                    <div className="flex items-center justify-between relative min-h-[48px]">
                        {/* Raghu Engineering College Logo - Left (Desktop Only) */}
                        <div className={`hidden md:flex items-center transition-all duration-700 delay-100 ${mounted && isScrolled ? 'opacity-0 -translate-x-10' : 'opacity-100 translate-x-0'
                            }`}>
                            <Image
                                src="/icons/raghu.png"
                                alt="Raghu Engineering College"
                                width={100}
                                height={100}
                                className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain"
                                priority
                            />
                        </div>

                        {/* E-CELL REC Logo - Always Centered */}
                        <div className={`flex items-center absolute left-1/2 -translate-x-1/2 transition-all duration-700 delay-200 ${mounted && isScrolled ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
                            }`}>
                            <Image
                                src="/icons/ecellverynew.png"
                                alt="E-CELL REC"
                                width={150}
                                height={100}
                                className="h-12 sm:h-14 md:h-20 lg:h-24 w-auto object-contain"
                                priority
                            />
                        </div>

                        {/* IIC Logo - Right (Desktop Only) */}
                        <div className={`hidden md:flex items-center transition-all duration-700 delay-100 ${mounted && isScrolled ? 'opacity-0 translate-x-10' : 'opacity-100 translate-x-0'
                            }`}>
                            <Image
                                src="/icons/iic.png"
                                alt="IIC - Institution's Innovation Council"
                                width={100}
                                height={100}
                                className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </header>

            {/* StaggeredMenu - Fixed positioned overlay */}
            <div className="fixed top-6 right-6 z-[80] pointer-events-auto">
                <StaggeredMenu
                    position="right"
                    colors={["#3b82f6", "#6366F1", "#818CF8"]}
                    items={navItems}
                    displaySocials={false}
                    displayItemNumbering={true}
                    menuButtonColor="#000000"
                    openMenuButtonColor="#000000"
                    accentColor="#3b82f6"
                    isFixed={true}
                    changeMenuColorOnOpen={true}
                    closeOnClickAway={true}
                />
            </div>
        </>
    );
}
