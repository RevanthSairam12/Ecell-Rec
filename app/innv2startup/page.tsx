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
                label="Transforming Dreams into Reality"
                title="Innovation to Startup"
                description="Empowering students today to lead industries tomorrow. At E-Cell REC, we are committed to nurturing a culture of innovation and entrepreneurship."
                backgroundImage="/events/innv2startup/innv2startup-4.jpg"
                primaryCTA={{ text: "Join Us", href: "/join-ecell" }}
                secondaryCTA={{ text: "Learn More", href: "#what-is" }}
            />
            <section className="relative py-16 px-6 overflow-hidden bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
                            What is Innovation to Startup?
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            It's not just a talk. It's an exclusive, two-part entrepreneurship workshop designed to teach you how to think like a founder and build real ideas.
                        </p>
                    </div>

                    {/* Event Schedule */}
                    <div className="flex justify-center mb-12">
                        <div className="max-w-2xl bg-white rounded-2xl p-8 shadow-lg border-2 border-indigo-200 hover:shadow-xl transition-all">
                            <p className="text-4xl font-bold text-indigo-600 mb-2">July 19, 2025</p>
                            <p className="text-slate-600">E-Cell REC successfully hosted ‘Eureka! 2025,’ the annual college pitching competition where 20 shortlisted teams pitched their startup ideas before a panel of mentors and judges. The event witnessed bold innovations, high-energy pitches, and valuable feedback from industry experts. Winning teams now advance to the Eureka! Zonals in Delhi, Mumbai, and Bengaluru, marking an inspiring step forward for student entrepreneurship at REC.</p>
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
                            { itemImageSrc: "/events/innv2startup/innv2startup-1.png", thumbnailImageSrc: "/events/innv2startup/innv2startup-1.png", alt: "Innovation to Startup 1" },
                            { itemImageSrc: "/events/innv2startup/innv2startup-2.jpg", thumbnailImageSrc: "/events/innv2startup/innv2startup-2.jpg", alt: "Innovation to Startup 2" },
                            { itemImageSrc: "/events/innv2startup/innv2startup-3.jpg", thumbnailImageSrc: "/events/innv2startup/innv2startup-3.jpg", alt: "Innovation to Startup 3" },
                            { itemImageSrc: "/events/innv2startup/innv2startup-4.jpg", thumbnailImageSrc: "/events/innv2startup/innv2startup-4.jpg", alt: "Innovation to Startup 4" }
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