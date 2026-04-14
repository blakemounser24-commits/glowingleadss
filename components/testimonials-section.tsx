"use client"

import { useEffect, useRef } from "react"
import { Quote } from "lucide-react"

export function TestimonialsSection() {
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
    <section
      ref={sectionRef}
      className="relative bg-black py-28 md:py-36 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[900px] h-[600px] rounded-full bg-blue-400/[0.03] blur-[150px]" />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20 pointer-events-none" />

      {/* Top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-px about-divider" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="reveal-on-scroll text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight section-heading-gradient section-heading-glow">
            What Our Clients Say
          </h2>
          <p className="reveal-on-scroll reveal-delay-1 mt-6 text-lg md:text-xl text-white/50 max-w-2xl mx-auto text-pretty">
            Real results from clinics that trust GlowingLeads to power their growth.
          </p>
        </div>

        {/* Coming Soon Card */}
        <div className="reveal-on-scroll reveal-delay-2 max-w-2xl mx-auto">
          <div className="testimonial-card rounded-2xl p-10 md:p-14 text-center">
            {/* Quote Icon */}
            <div className="w-16 h-16 rounded-2xl testimonial-quote-icon flex items-center justify-center mx-auto mb-8">
              <Quote className="w-8 h-8 text-blue-300/70" />
            </div>

            {/* Coming Soon Text */}
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Testimonials Coming Soon
            </h3>
            <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-md mx-auto">
              We&apos;re currently working with our first clients. Check back soon to see their results and success stories.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200px] h-px about-divider" />
    </section>
  )
}
