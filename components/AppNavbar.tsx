"use client";

import React, { useState } from "react";
import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    MobileNavHeader,
    MobileNavMenu,
    MobileNavToggle,
} from "@/components/ui/resizable-navbar";
import Image from "next/image";
import Link from "next/link";

const CustomLogo = () => (
    <Link
        href="/"
        prefetch
        className="relative z-20 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
    >
        <Image
            src="/icons/ecellverynew.png"
            alt="E-CELL REC"
            width={150}
            height={50}
            className="h-12 w-auto object-contain"
            priority
        />
    </Link>
);

export default function AppNavbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { name: "Home", link: "/" },
        { name: "About", link: "/advisory-board" },
        { name: "Team", link: "/team" },
        { name: "Events", link: "/events" },
        { name: "Resources", link: "/resources" },
        { name: "Startups", link: "/startups" },
    ];

    return (
        <>
            {/* Desktop Navbar */}
            <Navbar className="hidden lg:block fixed top-4 z-50">
                <NavBody className="border-2 border-gray-300 dark:border-gray-700 bg-white/80 backdrop-blur-md">
                    <CustomLogo />
                    {/* 🔑 NavItems MUST use next/link internally */}
                    <NavItems items={navItems} />
                </NavBody>
            </Navbar>

            {/* Mobile Navbar */}
            <MobileNav className="lg:hidden fixed top-4 inset-x-0 mx-auto z-50 border-2 border-gray-300 dark:border-gray-700 bg-white/80 backdrop-blur-md">
                <MobileNavHeader className="px-4">
                    <CustomLogo />
                    <MobileNavToggle
                        isOpen={isMobileMenuOpen}
                        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                    />
                </MobileNavHeader>

                <MobileNavMenu
                    isOpen={isMobileMenuOpen}
                    onClose={() => setIsMobileMenuOpen(false)}
                >
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.link}
                            prefetch
                            className="block w-full px-4 py-2 text-lg font-medium text-neutral-600 hover:text-neutral-900"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                </MobileNavMenu>
            </MobileNav>
        </>
    );
}
