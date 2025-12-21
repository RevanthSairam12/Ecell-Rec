"use client";
import React from "react";

type SplitTextProps = {
  text: string;
  splitBy?: "chars" | "words";
  className?: string;
  delay?: number; // ms between items
  duration?: number; // ms animation duration
  gap?: number; // px gap when splitting by words
};

const SplitText: React.FC<SplitTextProps> = ({ text, splitBy = "chars", className = "", delay = 30, duration = 600, gap = 12 }) => {
  const items = splitBy === "words" ? text.split(" ") : Array.from(text);

  return (
    <span className={className} aria-hidden={false}>
      {items.map((item, i) => {
        const isSpace = item === " ";
        const key = `${item}-${i}`;
        const commonStyle: React.CSSProperties = {
          display: "inline-block",
          transform: "translateY(0.45em)",
          opacity: 0,
          animationName: "splitTextIn",
          animationFillMode: "forwards",
          animationDuration: `${duration}ms`,
          animationDelay: `${i * delay}ms`,
          willChange: "transform, opacity",
        };

        // when splitting by words, provide an adjustable gap between words
        const wordStyle: React.CSSProperties = splitBy === "words"
          ? { ...commonStyle, marginRight: i < items.length - 1 ? `${gap}px` : undefined }
          : commonStyle;

        return (
          <span key={key} style={wordStyle} className="inline-block" aria-hidden>
            {item}
          </span>
        );
      })}

      <style jsx>{`
        @keyframes splitTextIn {
          0% { transform: translateY(0.45em); opacity: 0; }
          60% { transform: translateY(-0.05em); opacity: 1; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </span>
  );
};

export default SplitText;
