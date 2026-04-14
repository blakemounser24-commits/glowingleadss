"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed")
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    )

    const elements = sectionRef.current?.querySelectorAll(".reveal-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="relative bg-black py-28 md:py-36 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[500px] rounded-full bg-blue-500/[0.04] blur-[150px]" />
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left Column - Text Content */}
          <div className="flex-1 text-left">
            {/* Heading */}
            <h2 className="reveal-on-scroll text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              GlowingLeads
            </h2>

            {/* Subheading */}
            <p className="reveal-on-scroll reveal-delay-1 mt-6 text-lg md:text-xl text-white/70">
              We build intelligent systems that automate growth.
            </p>

            {/* Main paragraph */}
            <p className="reveal-on-scroll reveal-delay-2 mt-8 text-base md:text-lg text-white/50 leading-relaxed max-w-xl">
              GlowingLeads helps business scale using AI-powered automation. We combine instant
              lead response, appointment booking, reporting, paid ads, and high-end website
              creation into one seamless system that runs 24/7. Our mission is to help healthcare
              providers focus on what matters most — their patients — while we handle the growth.
            </p>
          </div>

          {/* Right Column - Logo Card */}
          <div className="reveal-on-scroll reveal-delay-2 flex-shrink-0">
            <div className="about-logo-card relative w-[320px] h-[380px] md:w-[380px] md:h-[440px] rounded-2xl flex items-center justify-center overflow-hidden">
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/5 pointer-events-none" />

              {/* Logo */}
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20%2811%29-K466v75pUxm7Dla9k4dg2eXBPuGvvX.png"
                alt="GlowingLeads Agency Logo"
                width={280}
                height={280}
                className="object-contain relative z-10"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
