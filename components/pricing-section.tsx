"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const pricingPlans = [
  {
    name: "Starter",
    setupFee: "$500",
    monthly: "$350",
    tagline: "For clinics wanting to stop losing after-hours leads.",
    features: [
      "AI caller",
      "AI chatbot",
      "Appointment booking",
      "24/7 follow-up",
      "Monthly report",
    ],
    featured: false,
  },
  {
    name: "Growth",
    setupFee: "$900",
    monthly: "$500",
    tagline: "For clinics wanting more leads AND better follow-up.",
    features: [
      "Everything in Starter",
      "Premium Website Creation",
      "Weekly report",
    ],
    featured: true,
  },
  {
    name: "Premium",
    setupFee: "$1500",
    monthly: "$750",
    tagline: "For clinics wanting a complete done-for-you system.",
    features: [
      "Everything in Growth",
      "Premium Website Redesign",
      "Mobile optimisation",
      "Ongoing website management",
      "Priority support",
    ],
    featured: false,
  },
]

export function PricingSection() {
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
    <section ref={sectionRef} id="pricing" className="relative bg-black py-24 md:py-32 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[600px] rounded-full bg-blue-400/[0.04] blur-[150px]" />
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="reveal-on-scroll text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight section-heading-gradient section-heading-glow text-balance">
            Simple, Transparent Pricing
          </h2>
          <p className="reveal-on-scroll reveal-delay-1 mt-5 text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
            Choose the plan that fits your clinic&apos;s growth goals.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`reveal-on-scroll relative rounded-2xl p-8 ${
                plan.featured ? "pricing-card-featured" : "pricing-card"
              }`}
              style={{ transitionDelay: `${0.15 + index * 0.1}s` }}
            >
              {/* Featured tag */}
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="pricing-featured-tag px-4 py-1.5 rounded-full text-xs font-medium text-blue-200 uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan name */}
              <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>

              {/* Tagline */}
              <p className="mt-2 text-sm text-white/50">{plan.tagline}</p>

              {/* Pricing */}
              <div className="mt-6 mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl md:text-5xl font-semibold text-white">
                    {plan.monthly}
                  </span>
                  <span className="text-white/50">/month</span>
                </div>
                <p className="mt-2 text-sm text-white/40">
                  Setup fee: {plan.setupFee}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start gap-3"
                  >
                    <Check className="w-5 h-5 text-blue-300/80 shrink-0 mt-0.5" />
                    <span className="text-sm text-white/70">{feature}</span>
                  </li>
                ))}

              </ul>

              {/* CTA Button */}
              <Link href="#contact">
                <Button
                  className={`w-full font-medium py-6 pricing-button ${
                    plan.featured
                      ? "bg-white text-black hover:bg-white/90"
                      : "bg-white/10 text-white hover:bg-white/15 border border-white/10"
                  }`}
                >
                  Get Started
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
