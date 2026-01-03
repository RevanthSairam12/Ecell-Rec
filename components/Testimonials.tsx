// components/Testimonials10.tsx
"use client"

import * as React from "react"
import Image from "next/image"
import { type Testimonial } from "@/types/testimonials"
import { motion, AnimatePresence } from "framer-motion"

type Testimonials10Props = {
  testimonials: Testimonial[]
}

export default function Testimonials({ testimonials }: Testimonials10Props) {
  const [activeIndex, setActiveIndex] = React.useState(0)
  const [isHovering, setIsHovering] = React.useState(false)

  // Auto-switch interval
  React.useEffect(() => {
    if (isHovering) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }, 4000) // Switch every 4 seconds

    return () => clearInterval(interval)
  }, [testimonials.length, isHovering])

  if (!testimonials.length) return null

  const active = testimonials[activeIndex]

  const next = () =>
    setActiveIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    )

  const prev = () =>
    setActiveIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    )

  return (
    <section className="w-full bg-background py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="flex flex-col gap-3 text-center md:text-left md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              TESTIMONIAL
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
              Some of our valuable Mentors feedback
            </h2>
            <p className="mt-3 max-w-xl text-sm sm:text-base text-muted-foreground mx-auto md:mx-0">
              Insights and encouragement from the distinguished mentors and leaders guiding our mission to foster innovation and entrepreneurship.
            </p>
          </div>

          <a
            href="#"
            className="mt-4 md:mt-0 inline-flex items-center justify-center text-sm font-medium text-primary hover:underline"
          >
            More customer stories
          </a>
        </div>

        {/* Content */}
        <div className="mt-8 lg:mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-stretch">
          {/* Active testimonial card */}
          <div
            className="relative overflow-hidden rounded-2xl border bg-card p-6 sm:p-8 shadow-sm flex flex-col"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex flex-col h-full"
              >
                <div className="flex-1">
                  <span className="text-4xl leading-none text-primary">“</span>
                  <p className="mt-3 text-base sm:text-lg text-foreground">
                    {active.quote}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-4">
                  <div className="relative h-12 w-12 sm:h-14 sm:w-14 overflow-hidden rounded-full bg-muted">
                    <Image
                      src={active.src}
                      alt={active.name}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {active.name}
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {active.designation}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {testimonials.length > 1 && (
              <div className="mt-6 flex items-center justify-between gap-4">
                {/* Dots */}
                <div className="flex gap-2">
                  {testimonials.map((t, idx) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setActiveIndex(idx)}
                      className={`h-2 w-2 rounded-full transition-colors ${idx === activeIndex
                        ? "bg-primary"
                        : "bg-muted-foreground/30"
                        }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Arrows */}
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={prev}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border bg-background text-foreground hover:bg-accent text-xs"
                    aria-label="Previous testimonial"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border bg-background text-foreground hover:bg-accent text-xs"
                    aria-label="Next testimonial"
                  >
                    ›
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right list */}
          <div
            className="rounded-2xl border bg-card/60 p-4 sm:p-5 flex flex-col gap-2"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {testimonials.map((t, idx) => {
              const isActive = idx === activeIndex
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`flex items-center justify-between gap-3 rounded-xl px-3 py-2 text-left transition-colors hover:bg-accent/60 ${isActive ? "bg-accent" : ""
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="relative h-8 w-8 overflow-hidden rounded-full bg-muted">
                      <Image
                        src={t.src}
                        alt={t.name}
                        fill
                        sizes="32px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {t.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {t.designation}
                      </p>
                    </div>
                  </div>

                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
