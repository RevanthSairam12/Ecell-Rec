"use client";

import React from "react";
import dynamic from "next/dynamic";
import Footer from "@/components/Footer";
import NewHeroIllustration from "@/components/NewHeroIllustration";
import AboutIdeathon from "@/components/AboutIdeathon";

const IdeathonForm = dynamic(() => import("@/components/ideathon-form"), { ssr: false });

export default function IdeathonPage() {
    return (
        <div className="min-h-screen bg-black relative overflow-hidden dark">
            <NewHeroIllustration />
            <AboutIdeathon />
            <IdeathonForm />
            <Footer />
        </div>
    );
}
