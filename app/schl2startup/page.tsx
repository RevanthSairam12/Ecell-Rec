"use client";
import AppNavbar from "@/components/AppNavbar";
import Footer from "@/components/Footer";
import EventsHero from "@/components/Hero";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const GalleriaGallery = dynamic(() => import("@/components/ui/GalleriaGallery"), {
    ssr: false,
});

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
                label="Empowering Young Minds"
                title="School to Startup"
                description="A launchpad that turns curiosity in classrooms into conviction in startups, guiding young minds from first ideas to real-world impact."
                backgroundImage="/events/schl2stup/schl-4.jpg"
                primaryCTA={{ text: "Join Us", href: "/join-ecell" }}
                secondaryCTA={{ text: "Learn More", href: "#what-is" }}
            />
            <section className="relative py-16 px-6 overflow-hidden bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
                            What is School to Startup?
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            A launchpad that turns curiosity in classrooms into conviction in startups, guiding young minds from first ideas to real-world impact.
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
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">August 22, 2025</h3>
                                <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-4xl">
                                    School 2 Startup is an outreach initiative by E-Cell REC focused on introducing school students to entrepreneurship and the startup ecosystem. Conducted at Visakha Valley International School, Visakhapatnam, the session aimed to inspire young minds, foster innovation, and build early awareness about transforming ideas into impactful ventures.
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
                            { itemImageSrc: "/events/schl2stup/schl-1.jpg", thumbnailImageSrc: "/events/schl2stup/schl-1.jpg", alt: "School to Startup 1" },
                            { itemImageSrc: "/events/schl2stup/schl-2.jpg", thumbnailImageSrc: "/events/schl2stup/schl-2.jpg", alt: "School to Startup 2" },
                            { itemImageSrc: "/events/schl2stup/schl-3.jpg", thumbnailImageSrc: "/events/schl2stup/schl-3.jpg", alt: "School to Startup 3" },
                            { itemImageSrc: "/events/schl2stup/schl-4.jpg", thumbnailImageSrc: "/events/schl2stup/schl-4.jpg", alt: "School to Startup 4" },
                            { itemImageSrc: "/events/schl2stup/schl-5.jpg", thumbnailImageSrc: "/events/schl2stup/schl-5.jpg", alt: "School to Startup 5" },
                            { itemImageSrc: "/events/schl2stup/schl-6.jpg", thumbnailImageSrc: "/events/schl2stup/schl-6.jpg", alt: "School to Startup 6" },
                            { itemImageSrc: "/events/schl2stup/schl-7.jpg", thumbnailImageSrc: "/events/schl2stup/schl-7.jpg", alt: "School to Startup 7" },
                            { itemImageSrc: "/events/schl2stup/schl-8.jpg", thumbnailImageSrc: "/events/schl2stup/schl-8.jpg", alt: "School to Startup 8" }
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