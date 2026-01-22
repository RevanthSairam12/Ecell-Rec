"use client";
import AppNavbar from "@/components/AppNavbar";
import Footer from "@/components/Footer";
import EventsHero from "@/components/Hero";
import GalleriaGallery from "@/components/ui/GalleriaGallery";
import { motion } from "framer-motion";

export default function innv2StartupPage() {
    const fadeInUp = {
        initial: { opacity: 0, y: 30, filter: "blur(10px)" },
        whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
        viewport: { once: true },
        transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] }
    };

    return (
        <div>
            <AppNavbar />
            <EventsHero
                label="State-Wide 24-Hour Innovation Hackathon"
                title="Hackverse 1.0"
                description="Not just a hackathon but a universe of innovation where boundaries dissolve and ideas come alive. In this high-energy arena, participants code, create, and challenge convention, turning imagination into tangible impact under the pressure of the clock."
                backgroundImage="/events/hackverse/hackverse-9.jpg"
                primaryCTA={{ text: "Join Us", href: "/join-ecell" }}
                secondaryCTA={{ text: "Learn More", href: "#what-is" }}
            />
            <section className="relative py-16 px-6 overflow-hidden bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
                            What is HackVerse?
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Not just a hackathon but a universe of innovation where boundaries dissolve and ideas come alive. In this high-energy arena, participants code, create, and challenge convention, turning imagination into tangible impact under the pressure of the clock.
                        </p>
                    </div>

                    {/* Event Schedule */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-12"
                    >
                        <div className="relative bg-blue-600 rounded-3xl p-8 md:p-12 overflow-hidden">
                            {/* Decorative Elements */}
                            <div className="absolute top-4 right-4 w-8 h-8 bg-yellow-400 rotate-45 rounded-sm"></div>
                            <div className="absolute bottom-4 left-4 w-6 h-6 bg-yellow-400 rotate-45 rounded-sm opacity-60"></div>

                            <div className="relative z-10">
                                <p className="text-yellow-400 text-sm font-semibold tracking-widest uppercase mb-2">Event Date</p>
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">October 18-19, 2025</h3>
                                <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-4xl">
                                    Hackverse 1.0 was the first-ever state-wide 24-hour hackathon hosted by Raghu Engineering College, organized by E-CELL REC Visakhapatnam and GDG On Campus REC. The event brought together over 400 innovators who turned ideas into working prototypes in domains like AI, web, mobile, and automation. Students experienced the thrill of building, collaborating, and pitching under real-world pressure, guided by expert mentors and judged by an esteemed jury. It was a celebration of creativity, teamwork, and the spirit of innovation that defined the next generation of builders at REC.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Memories Section */}
            <section className="relative w-full py-24 bg-slate-950 overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    {/* Header Block */}
                    <div className="text-center mb-16">
                        <motion.span
                            {...fadeInUp}
                            transition={{ ...fadeInUp.transition, delay: 0.1 }}
                            className="text-blue-400 text-sm font-bold tracking-[0.2em] uppercase mb-4 block"
                        >
                            WHERE IT ALL BEGAN
                        </motion.span>
                        <motion.h2
                            {...fadeInUp}
                            transition={{ ...fadeInUp.transition, delay: 0.2 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                        >
                            Moments That Built Our Legacy
                        </motion.h2>
                        <motion.p
                            {...fadeInUp}
                            transition={{ ...fadeInUp.transition, delay: 0.3 }}
                            className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
                        >
                            Before the startups, before the stages — there were people, ideas, and unforgettable moments that shaped our journey.
                        </motion.p>
                    </div>

                    {/* Gallery Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
                        className="p-1 rounded-3xl bg-gradient-to-b from-white/10 to-transparent border border-white/5 backdrop-blur-3xl shadow-2xl"
                    >
                        <GalleriaGallery images={[
                            { itemImageSrc: "/events/hackverse/hackverse-1.jpg", thumbnailImageSrc: "/events/hackverse/hackverse-1.jpg", alt: "Hackverse 1" },
                            { itemImageSrc: "/events/hackverse/hackverse-2.jpg", thumbnailImageSrc: "/events/hackverse/hackverse-2.jpg", alt: "Hackverse 2" },
                            { itemImageSrc: "/events/hackverse/hackverse-3.jpg", thumbnailImageSrc: "/events/hackverse/hackverse-3.jpg", alt: "Hackverse 3" },
                            { itemImageSrc: "/events/hackverse/hackverse-4.jpg", thumbnailImageSrc: "/events/hackverse/hackverse-4.jpg", alt: "Hackverse 4" },
                            { itemImageSrc: "/events/hackverse/hackverse-5.jpg", thumbnailImageSrc: "/events/hackverse/hackverse-5.jpg", alt: "Hackverse 5" },
                            { itemImageSrc: "/events/hackverse/hackverse-6.jpg", thumbnailImageSrc: "/events/hackverse/hackverse-6.jpg", alt: "Hackverse 6" },
                            { itemImageSrc: "/events/hackverse/hackverse-7.jpg", thumbnailImageSrc: "/events/hackverse/hackverse-7.jpg", alt: "Hackverse 7" },
                            { itemImageSrc: "/events/hackverse/hackverse-8.jpg", thumbnailImageSrc: "/events/hackverse/hackverse-8.jpg", alt: "Hackverse 8" },
                            { itemImageSrc: "/events/hackverse/hackverse-9.jpg", thumbnailImageSrc: "/events/hackverse/hackverse-9.jpg", alt: "Hackverse 9" }
                        ]} />
                    </motion.div>

                    {/* Emotional Quote */}
                    <div className="mt-16 text-center">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 0.6 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="text-white text-lg md:text-xl italic font-light tracking-wide"
                        >
                            “Some memories don’t fade — they become the foundation.”
                        </motion.p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}