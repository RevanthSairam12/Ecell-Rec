"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import AppNavbar from "@/components/AppNavbar";
import FormerTeamMembers from "../team-cmp/FormerTeamData";

// --- ANIMATION VARIANTS (STRICTLY PRESERVED) ---

const cardVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.6, ease: [0.23, 1, 0.82, 1] },
    },
};

const cardHoverVariants = {
    rest: { y: 0, boxShadow: "0 10px 40px rgba(0,0,0,0.1)" },
    hover: {
        y: -12,
        boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
        transition: { duration: 0.3, ease: "easeOut" },
    },
};

const wrapperVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
};

const rowVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
};

// --- DATA LOGIC ---

function getSubtitleForFormerRole(role: string): string {
    const subtitles: { [key: string]: string } = {
        "Overall Head": "Leading the vision and execution of E-Cell initiatives",
        "Innovation & Incubation Head": "Driving innovation and nurturing startup incubation",
        "Startup Assistance Program Head": "Supporting startups from idea to impact",
        "Design & Branding Head": "Shaping the visual identity of E-Cell",
        "Web Tech Head": "Building and maintaining E-Cell’s digital presence",
        "Marketing & People Relations Head": "Strengthening outreach and community engagement",
        "Events & Operations Head": "Executing events with operational excellence",
        "Creative Content Head": "Crafting stories that inspire entrepreneurship",
        "Strategy & OutReach Head": "Expanding E-Cell’s strategic reach and partnerships",
        "Media & OutReach Head": "Amplifying E-Cell through media and public presence",
    };

    return subtitles[role] || "Contributing to E-Cell’s entrepreneurial legacy";
}

export default function FormerTeamPage() {
    const teamSectionRef = useRef(null);
    const isTeamInView = useInView(teamSectionRef, { once: true, amount: 0.1 });

    // Map data to expected format
    const formerTeam = FormerTeamMembers.map((member) => ({
        name: member.name,
        role: member.role,
        subtitle: getSubtitleForFormerRole(member.role),
        image: member.imageUrl,
        socialLinks: member.socialLinks,
    }));

    const galleryImages = [
        "/group/group1.jpg",
        "/group/group2.jpg",
        "/group/group3.jpg",
        "/group/group4.jpg",
        "/group/group5.jpg",
        "/group/group6.jpg",
    ];

    const AnimatedCard = (
        member: typeof formerTeam[number],
        index: number,
        rowIndex: number,
        rowLength: number
    ) => {
        // Calculate center position for this specific row to stagger animations from center out
        const totalCards = rowLength;
        const centerPosition = totalCards / 2 - 0.5;
        const distanceFromCenter = Math.abs(index - centerPosition);

        // Multiplier to create a wave effect from the center
        const delayMultiplier = distanceFromCenter * 0.05;

        return (
            <motion.div
                key={member.name}
                variants={cardVariants}
                custom={delayMultiplier}
                transition={{
                    duration: 0.7,
                    delay: rowIndex * 0.15 + delayMultiplier,
                    ease: [0.23, 1, 0.82, 1],
                }}
                className="text-center group w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] max-w-[280px]"
            >
                <motion.div
                    initial="rest"
                    whileHover="hover"
                    variants={cardHoverVariants}
                    className="relative w-full aspect-[3/4] mb-4 rounded-2xl overflow-hidden mx-auto bg-gray-800"
                >
                    <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    {member.socialLinks && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.2 }}
                            className="absolute inset-0 bg-black/70 flex items-center justify-center"
                        >
                            <div className="flex space-x-4">
                                {member.socialLinks.map((link, linkIndex) => (
                                    <motion.a
                                        key={linkIndex}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors duration-200"
                                    >
                                        {link.platform === "Twitter" ? (
                                            <svg
                                                className="w-5 h-5 text-white"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                            </svg>
                                        ) : link.platform === "LinkedIn" ? (
                                            <svg
                                                className="w-5 h-5 text-white"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                            </svg>
                                        ) : null}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </motion.div>
                <div className="text-white">
                    <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                    <p className="text-yellow-400 text-sm font-medium mb-1">{member.role}</p>
                    <p className="text-gray-300 text-xs">{member.subtitle}</p>
                </div>
            </motion.div>
        );
    };

    return (
        <div className="min-h-screen bg-slate-900">
            <AppNavbar />
            {/* A. Hero Section */}
            <PageHero
                title="Our"
                highlight="Former Team"
                description="The which has been a Foundation of E-CELL REC"
                useWhiteBackground={true}
            />

            {/* B. Former Team Gallery Section */}
            <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 border-b border-gray-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center tracking-tight">
                            Memories & Moments
                        </h2>
                        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12 text-lg">
                            Capturing the journey, the hustle, and the unforgettable moments that defined our legacy.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {galleryImages.map((src, index) => (
                                <div
                                    key={index}
                                    className="relative aspect-[4/3] rounded-2xl overflow-hidden group shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700/50"
                                >
                                    <Image
                                        src={src}
                                        alt={`Former Team Moment ${index + 1}`}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* C. "Meet Our Former Team" Section */}
            <section className="py-16 px-6 bg-slate-900">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Meet Our Former Team
                        </h1>
                    </div>

                    <motion.div
                        ref={teamSectionRef}
                        initial="hidden"
                        animate={isTeamInView ? "visible" : "hidden"}
                        variants={wrapperVariants}
                        className="flex flex-col gap-8 items-center"
                    >
                        <motion.div
                            variants={rowVariants}
                            className="flex flex-wrap justify-center gap-8 w-full max-w-7xl mx-auto px-4"
                        >
                            {formerTeam.map((member, index) =>
                                AnimatedCard(member, index, 0, formerTeam.length)
                            )}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* D. Footer */}
            <Footer />
        </div>
    );
}
