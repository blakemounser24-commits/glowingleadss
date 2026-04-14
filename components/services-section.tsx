"use client"

import { useEffect, useRef } from "react"
import { Phone, MessageSquare, Calendar, Bot, Mail, PhoneMissed, Globe, PenTool } from "lucide-react"

const aiServices = [
  {
    icon: Phone,
    title: "AI Lead Caller",
    tag: "60 Second Response",
    description: "Calls new leads within 60 seconds, 24/7. Never miss a potential patient again.",
  },
  {
    icon: MessageSquare,
    title: "24/7 Lead Follow-Up",
    tag: "SMS, Email, Calls",
    description: "Automated multi-channel follow-up that keeps leads engaged until they book.",
  },
  {
    icon: Calendar,
    title: "Automated Appointment Booking",
    tag: "Zero Manual Input",
    description: "AI books consultations directly into your calendar. Wake up to confirmed appointments.",
  },
  {
    icon: Bot,
    title: "AI Website Chatbot",
    tag: "Instant Engagement",
    description: "Instant responses to every website visitor. Captures details and triggers follow-up.",
  },
  {
    icon: Mail,
    title: "Lead Nurturing Sequences",
    tag: "Automated Campaigns",
    description: "Strategic email and SMS sequences that convert cold leads into booked patients.",
  },
  {
    icon: PhoneMissed,
    title: "Missed Call Text-Back",
    tag: "Never Lose Leads",
    description: "Automatically texts back every missed call so you never lose a potential patient.",
  },
]

const websiteServices = [
  {
    icon: Globe,
    title: "Premium Website Creation",
    tag: "High-Converting Design",
    description: "Modern, animated, conversion-focused websites built to turn visitors into patients.",
  },
  {
    icon: PenTool,
    title: "Premium Website Redesign",
    tag: "Transform Your Brand",
    description: "Complete redesign of your existing website with mobile optimisation and AI integration.",
  },
]

export function ServicesSection() {
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
    <section ref={sectionRef} id="services" className="relative bg-black py-24 md:py-32 overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] rounded-full bg-blue-400/[0.03] blur-[150px]" />
      </div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black/50 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="reveal-on-scroll text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight section-heading-gradient section-heading-glow">
            Our Services
          </h2>
          <p className="reveal-on-scroll reveal-delay-1 mt-6 text-lg md:text-xl text-white/60 max-w-3xl mx-auto text-pretty">
            One complete AI-powered system that generates leads, books appointments, and grows your business automatically.
          </p>
        </div>

        {/* AI Automation Services */}
        <h3 className="reveal-on-scroll reveal-delay-2 text-xl md:text-2xl font-medium text-white/80 mb-8">
          AI Automation Services
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {aiServices.map((service, index) => (
            <div
              key={service.title}
              className={`reveal-on-scroll service-card-container rounded-2xl p-6 md:p-8`}
              style={{ transitionDelay: `${0.1 + index * 0.08}s` }}
            >
              {/* Icon */}
              <div 
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center mb-5"
              >
                <service.icon className="w-6 h-6 text-blue-300/80" strokeWidth={1.5} />
              </div>

              {/* Tag */}
              <div className="inline-block mb-4">
                <span className="service-tag text-xs font-medium text-blue-200/90 px-3 py-1.5 rounded-full">
                  {service.tag}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-white/50 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Website Services */}
        <h3 className="reveal-on-scroll text-xl md:text-2xl font-medium text-white/80 mb-8">
          Website Services
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {websiteServices.map((service, index) => (
            <div
              key={service.title}
              className={`reveal-on-scroll service-card-container rounded-2xl p-6 md:p-8`}
              style={{ transitionDelay: `${0.1 + index * 0.08}s` }}
            >
              {/* Icon */}
              <div 
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center mb-5"
              >
                <service.icon className="w-6 h-6 text-blue-300/80" strokeWidth={1.5} />
              </div>

              {/* Tag */}
              <div className="inline-block mb-4">
                <span className="service-tag text-xs font-medium text-blue-200/90 px-3 py-1.5 rounded-full">
                  {service.tag}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-white/50 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
