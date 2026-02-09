"use client";

import React from "react";
import dynamic from "next/dynamic";
import Footer from "@/components/Footer";
import NewHeroIllustration from "@/components/NewHeroIllustration";
import AboutIdeathon from "@/components/AboutIdeathon";
import RegistrationsClosed from "@/components/RegistrationsClosed";
import { REGISTRATIONS_OPEN } from "@/config/ideathon";

const IdeathonForm = dynamic(() => import("@/components/ideathon-form"), { ssr: false });

export default function IdeathonPage() {
    return (
        <div className="min-h-screen bg-black relative overflow-hidden dark">
            <NewHeroIllustration />
            <AboutIdeathon />

            {/* NOTE:
                When registrations < 30 → REGISTRATIONS_OPEN = true
                When registrations >= 30 → REGISTRATIONS_OPEN = false
                This is manually controlled for safety.
            */}

            <section id="ideathon-form" className="relative z-20">
                {REGISTRATIONS_OPEN ? (
                    <IdeathonForm />
                ) : (
                    <div className="py-12">
                        <RegistrationsClosed />
                    </div>
                )}
            </section>

            <Footer />
        </div>
    );
}
