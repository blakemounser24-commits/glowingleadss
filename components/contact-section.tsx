"use client"

import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  const router = useRouter()
  const sectionRef = useRef<HTMLElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error"; message: string } | null>(null)

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      business: formData.get("business") as string,
      message: formData.get("message") as string,
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (result.success) {
        // Clear all input fields
        formRef.current?.reset()
        setIsSubmitting(false)
        // Show success message
        setSubmitStatus({ type: "success", message: "Message sent successfully!" })
        // Redirect to home page after 1.5 seconds
        setTimeout(() => {
          router.push("/")
          window.scrollTo({ top: 0, behavior: "smooth" })
        }, 1500)
      } else {
        setSubmitStatus({ type: "error", message: result.error || "Something went wrong. Please try again." })
        setIsSubmitting(false)
      }
    } catch {
      setSubmitStatus({ type: "error", message: "Failed to send message. Please try again." })
      setIsSubmitting(false)
    }
  }

  return (
    <section ref={sectionRef} id="contact" className="relative bg-black py-28 md:py-36 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full bg-blue-400/[0.04] blur-[100px]" />
      </div>

      {/* Top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[280px] h-px about-divider" />

      <div className="relative z-10 max-w-2xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="reveal-on-scroll text-3xl md:text-5xl font-semibold tracking-tight section-heading-gradient section-heading-glow">
            Ready to Scale?
          </h2>
          <p className="reveal-on-scroll reveal-delay-1 mt-5 text-lg text-white/50">
            Fill out the form and we&apos;ll get back to you shortly.
          </p>
        </div>

        {/* Contact Info */}
        <div className="reveal-on-scroll reveal-delay-1 flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-10 text-sm text-white/60">
          <a href="tel:0412290016" className="flex items-center gap-2 hover:text-white/90 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            0412 290 016
          </a>
          <a href="mailto:glowingleads.au@gmail.com" className="flex items-center gap-2 hover:text-white/90 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            glowingleads.au@gmail.com
          </a>
          <span className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            Sydney, Australia
          </span>
        </div>

        {/* Form Container */}
        <div className="reveal-on-scroll reveal-delay-2 contact-form-container rounded-2xl p-8 md:p-10">
          {submitStatus && (
            <div className={`mb-6 p-4 rounded-lg text-center ${
              submitStatus.type === "success" 
                ? "bg-green-500/20 border border-green-500/30 text-green-300" 
                : "bg-red-500/20 border border-red-500/30 text-red-300"
            }`}>
              {submitStatus.message}
            </div>
          )}
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Full Name */}
            <div>
              <label htmlFor="name" className="sr-only">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Full Name"
                className="w-full px-5 py-4 rounded-lg contact-input text-white text-base"
              />
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="sr-only">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                className="w-full px-5 py-4 rounded-lg contact-input text-white text-base"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="sr-only">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone Number"
                className="w-full px-5 py-4 rounded-lg contact-input text-white text-base"
              />
            </div>

            {/* Business Name */}
            <div>
              <label htmlFor="business" className="sr-only">Business Name</label>
              <input
                type="text"
                id="business"
                name="business"
                placeholder="Business Name"
                className="w-full px-5 py-4 rounded-lg contact-input text-white text-base"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                rows={5}
                className="w-full px-5 py-4 rounded-lg contact-input text-white text-base resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="mt-3">
              <Button 
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-white text-black hover:bg-white/90 font-medium py-6 text-base contact-cta disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[280px] h-px about-divider" />
    </section>
  )
}
