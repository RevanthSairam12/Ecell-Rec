'use client'

import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-start overflow-hidden pt-16">
      {/* Background Image (restored) */}
      <div className="absolute inset-0">
        <Image
          src="/group/group1.jpg"
          alt="E-Cell REC Group Photo"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      {/* Logos bar just below header */}
      <div className="absolute top-16 left-0 right-0 z-20">
        {/* Desktop layout: exact left, center, right using 3-column grid */}
        <div className="hidden md:grid grid-cols-3 items-center px-6">
          <div className="justify-self-start">
            <div className="relative w-36 h-16">
              <Image src="/icons/iic.png" alt="IIC" fill className="object-contain" />
            </div>
          </div>
          <div className="justify-self-center">
            <div className="relative w-56 h-16">
              <Image src="/icons/ecellverynew.png" alt="E-Cell REC" fill className="object-contain" />
            </div>
          </div>
          <div className="justify-self-end">
            <div className="relative w-36 h-16">
              <Image src="/icons/raghu.png" alt="Raghu" fill className="object-contain" />
            </div>
          </div>
        </div>
        {/* Mobile layout: three evenly spaced logos */}
        <div className="md:hidden px-5">
          <div className="grid grid-cols-3 items-center">
            <div className="justify-self-start">
              <div className="relative w-20 h-12">
                <Image src="/icons/iic.png" alt="IIC" fill className="object-contain" />
              </div>
            </div>
            <div className="justify-self-center">
              <div className="relative w-32 h-12">
                <Image src="/icons/ecellverynew.png" alt="E-Cell REC" fill className="object-contain" />
              </div>
            </div>
            <div className="justify-self-end">
              <div className="relative w-20 h-12">
                <Image src="/icons/raghu.png" alt="Raghu" fill className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Center Aligned */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 mt-28 md:mt-36">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight tracking-tight">
            Enterpenuership Cell
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/95 leading-relaxed font-light">
            We belong, so we can become even more
          </p>

          {/* CTA Buttons moved from header */
          }
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/coming-soon">
              <Button variant="outline" className="text-sm px-6 py-2">
                Login
              </Button>
            </Link>

            <Link href="/join-ecell">
              <Button className="bg-blue-600 hover:bg-blue-700 text-sm px-6 py-2">
                Apply Today
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;