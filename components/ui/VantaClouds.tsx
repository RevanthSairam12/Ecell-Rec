"use client";

import { useEffect, useRef } from "react";

export default function VantaClouds() {
  const vantaRef = useRef<HTMLDivElement | null>(null);
  const effectRef = useRef<any>(null);

    useEffect(() => {
      if (effectRef.current) return;

      let mounted = true;
      let usingVanta = false;

      const supportsWebGL = () => {
        try {
          const canvas = document.createElement("canvas");
          return !!(
            canvas.getContext("webgl") ||
            canvas.getContext("experimental-webgl") ||
            (window as any).WebGLRenderingContext
          );
        } catch (e) {
          return false;
        }
      };

      const initVanta = async () => {
        if (!vantaRef.current || !mounted) return;

        // set CSS vars for colors so fallback background matches
        try {
          const skyHex = "#71c0de";
          const cloudHex = "#c9c9d3";
          vantaRef.current.style.setProperty("--vanta-sky", skyHex);
          vantaRef.current.style.setProperty("--vanta-cloud", cloudHex);
          if (typeof document !== "undefined" && document.documentElement) {
            document.documentElement.style.setProperty("--vanta-sky", skyHex);
            document.documentElement.style.setProperty("--vanta-cloud", cloudHex);
          }
        } catch (e) {
          /* ignore */
        }

        // quick WebGL check to avoid throwing when context cannot be created
        if (typeof window === "undefined" || !supportsWebGL()) {
          console.warn("VantaClouds: WebGL not supported — falling back to CSS background.");
          return;
        }

        try {
          const THREE = await import("three");
          const VANTA = (await import("vanta/dist/vanta.clouds.min")).default;

          if (!mounted) return;

          // Guard the VANTA call in a try/catch because it may throw on some devices/drivers
          try {
            effectRef.current = VANTA({
              el: vantaRef.current,
              THREE,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              skyColor: 0x68b8d7,
              cloudColor: 0xadc1de,
              speed: 2.0,
            });
            usingVanta = true;
          } catch (err) {
            console.warn("VantaClouds: failed to initialize VANTA effect, falling back:", err);
          }

          try {
            const skyHex = "#71c0de";
            const cloudHex = "#c9c9d3";
            if (vantaRef.current) {
              vantaRef.current.style.setProperty("--vanta-sky", skyHex);
              vantaRef.current.style.setProperty("--vanta-cloud", cloudHex);
            }
            if (typeof document !== "undefined" && document.documentElement) {
              document.documentElement.style.setProperty("--vanta-sky", skyHex);
              document.documentElement.style.setProperty("--vanta-cloud", cloudHex);
            }
          } catch (e) {
            console.error("Error setting Vanta color CSS variables:", e);
          }
        } catch (e) {
          console.warn("VantaClouds: could not import Vanta/THREE — falling back.", e);
        }
      };

      initVanta();

      return () => {
        mounted = false;
        if (effectRef.current && typeof effectRef.current.destroy === "function") {
          try {
            effectRef.current.destroy();
          } catch (e) {
            console.warn("VantaClouds: error during destroy:", e);
          }
          effectRef.current = null;
        }
      };
    }, []);

  return (
    <div
      ref={vantaRef}
      className="h-screen w-full"
      style={{
        // fallback gradient when Vanta/WebGL is not available
        background: "linear-gradient(180deg, var(--vanta-sky, #71c0de), var(--vanta-cloud, #c9c9d3))",
      }}
    />
  );
}
