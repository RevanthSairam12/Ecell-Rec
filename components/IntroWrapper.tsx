"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IntroWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showIntro, setShowIntro] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Check if intro already played (per session)
  useEffect(() => {
    setMounted(true);

    const alreadyPlayed = sessionStorage.getItem("introPlayed");
    if (!alreadyPlayed) {
      setShowIntro(true);
    }
  }, []);

  // Clear intro flag on refresh / tab close
  useEffect(() => {
    const clearOnUnload = () => {
      sessionStorage.removeItem("introPlayed");
    };

    window.addEventListener("beforeunload", clearOnUnload);

    return () => {
      window.removeEventListener("beforeunload", clearOnUnload);
    };
  }, []);

  const handleVideoEnd = () => {
    sessionStorage.setItem("introPlayed", "true");
    setShowIntro(false);
  };

  if (!mounted) return null;

  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -120 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <video
              src="/videos/e-cell-intro.mp4"
              autoPlay
              muted
              playsInline
              preload="auto"
              onEnded={handleVideoEnd}
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN SITE */}
      <motion.div
        initial={{ opacity: showIntro ? 0 : 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </>
  );
}
