"use client";

import React, { useEffect, useRef, useState } from "react";

type BlurTextProps = {
  children: React.ReactNode;
  delay?: number;
};

export default function BlurText({ children, delay = 0 }: BlurTextProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className="relative inline-block">
      {/* BLUR LAYER */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          filter: "blur(12px)",
          opacity: visible ? 0.45 : 0,
          transform: visible ? "translateY(0px)" : "translateY(12px)",
          transition: "all 900ms ease-out",
          pointerEvents: "none",
        }}
      >
        {children}
      </div>

      {/* SHARP LAYER */}
      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0px)" : "translateY(12px)",
          transition: "all 700ms ease-out",
        }}
      >
        {children}
      </div>
    </div>
  );
}
