"use client";

import Link from "next/link";
import React from "react";

const Headlines = () => {
    const headlines = [
        "Registrations for Ideathon 4.0 are now OPEN!",
        "Build, Innovate, Present — Win exciting prizes!",
        {
            type: "link",
            text: "Click here to Register Now!",
            href: "https://www.ecellrec.app/ideathon",
        },
        "Open for all departments in Raghu Engineering College!",
    ];

    // Duplicate headlines to ensure seamless scrolling
    // We create a "track" that contains the items. We will render this track twice.
    const headlineItems = headlines.map((item, index) => (
        <React.Fragment key={index}>
            {typeof item === "string" ? (
                <span className="text-[#F2F2F2] text-xs md:text-sm font-medium tracking-wide whitespace-nowrap">
                    {item}
                </span>
            ) : (
                <Link
                    href={item.href}
                    className="text-[#3A7AFE] text-xs md:text-sm font-bold tracking-wide hover:underline hover:text-[#3A7AFE]/80 transition-colors cursor-pointer whitespace-nowrap"
                >
                    {item.text}
                </Link>
            )}
            {/* Separator Dot */}
            <span className="w-1.5 h-1.5 rounded-full bg-white/20 mx-6 shrink-0" />
        </React.Fragment>
    ));

    return (
        <div className="w-full bg-[#0E0E10] border-y border-[#3A7AFE]/20 overflow-hidden py-1.5 relative z-30 mb-4 max-w-3xl mx-auto rounded-lg shadow-[0_0_15px_rgba(58,122,254,0.1)] group">
            {/* Inline Styles for Animation */}
            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-100%); }
                }
                .animate-marquee {
                    animation: marquee 100s linear infinite;
                }
                .group:hover .animate-marquee {
                    animation-play-state: paused;
                }
            `}</style>

            {/* Gradient Fades for Smooth Edges */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#0E0E10] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#0E0E10] to-transparent z-10 pointer-events-none" />

            <div className="flex overflow-hidden select-none">
                {/* Track 1 */}
                <div className="flex shrink-0 items-center animate-marquee pl-6">
                    {headlineItems}
                    {headlineItems}
                </div>
                {/* Track 2 (Duplicate for seamless loop) */}
                <div className="flex shrink-0 items-center animate-marquee pl-6">
                    {headlineItems}
                    {headlineItems}
                </div>
            </div>
        </div>
    );
};

export default Headlines;
