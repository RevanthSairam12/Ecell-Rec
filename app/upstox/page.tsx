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
                label="Mastering the Markets"
                title="Upstox Workshop"
                description="Dive deep into the world of investing and capital markets. Learn to ride the market rollercoaster with experts from Upstox."
                backgroundImage="/events/upstox/upstox-5.jpg"
                primaryCTA={{ text: "Join Us", href: "/join-ecell" }}
                secondaryCTA={{ text: "Learn More", href: "#what-is" }}
            />
            <section className="relative py-16 px-6 overflow-hidden bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
                            What is Upstox Workshop?
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            It's not just a talk. It's an exclusive, two-part entrepreneurship workshop designed to teach you how to think like a founder and build real ideas.
                        </p>
                    </div>

                    {/* Event Schedule */}
                    <div className="flex justify-center mb-12">
                        <div className="max-w-2xl bg-white rounded-2xl p-8 shadow-lg border-2 border-indigo-200 hover:shadow-xl transition-all">
                            <p className="text-4xl font-bold text-indigo-600 mb-2">August 25, 2025</p>
                            <p className="text-slate-600">E-Cell REC hosted an engaging session on ‘Basics of Investing & Riding the Market Rollercoaster,’ led by capital markets expert Jay Mehta. The session covered market cycles, investment strategies, and fundraising essentials for startups. Students gained hands-on experience through paper trading, while also learning about pitch decks, valuations, and equity management. The event successfully bridged financial literacy with entrepreneurial skills, empowering students to think like investors and founders alike.</p>
                        </div>
                    </div>
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
                            { itemImageSrc: "/events/upstox/upstox-11.jpg", thumbnailImageSrc: "/events/upstox/upstox-11.jpg", alt: "Upstox Workshop 11" },
                            { itemImageSrc: "/events/upstox/upstox-1.jpg", thumbnailImageSrc: "/events/upstox/upstox-1.jpg", alt: "Upstox Workshop 1" },
                            { itemImageSrc: "/events/upstox/upstox-2.jpg", thumbnailImageSrc: "/events/upstox/upstox-2.jpg", alt: "Upstox Workshop 2" },
                            { itemImageSrc: "/events/upstox/upstox-6.jpg", thumbnailImageSrc: "/events/upstox/upstox-6.jpg", alt: "Upstox Workshop 6" },
                            { itemImageSrc: "/events/upstox/upstox-9.jpeg", thumbnailImageSrc: "/events/upstox/upstox-9.jpeg", alt: "Upstox Workshop 9" },
                            { itemImageSrc: "/events/upstox/upstox-10.jpeg", thumbnailImageSrc: "/events/upstox/upstox-10.jpeg", alt: "Upstox Workshop 10" }
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