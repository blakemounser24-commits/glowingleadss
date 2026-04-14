"use client"
import { useState } from "react"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { PricingSection } from "@/components/pricing-section"
import { ContactSection } from "@/components/contact-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function Page() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="relative w-full h-screen bg-black overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Firefly%20Cinematic%20slow%20motion%20dark%20navy%20blue%20ink%20explosion%20bursting%20directly%20toward%20the%20camera%20in%20ex-P32uCka2sNRxZSRGOxPyFK3YqvmWWW.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* Dark gradient overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/25 pointer-events-none" />

        {/* Ambient glow behind the animation */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[650px] h-[650px] rounded-full bg-cyan-400/[0.07] blur-[130px]" />
        </div>

        {/* Navbar */}
        <nav className="relative z-10 flex items-center justify-between pl-6 pr-6 py-4 md:pl-6 md:pr-12 lg:pl-6 lg:pr-20 animate-navbar">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20%2811%29-gDM87UbZTBf0YictAzqEl8annYRrL3.png"
                alt="GlowingLeads Agency Logo"
                width={36}
                height={36}
                className="object-contain"
              />
            </Link>
            <span className="hidden sm:inline-block text-xs text-white/40 border border-white/10 rounded-full px-2.5 py-1">
              Sydney, Australia
            </span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            <Link
              href="#"
              className="nav-link text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              href="#services"
              className="nav-link text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              Services
            </Link>
            <Link
              href="#about"
              className="nav-link text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              href="#pricing"
              className="nav-link text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="#contact"
              className="nav-link text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>

          <Link href="#contact">
            <Button
              className="hidden md:inline-flex bg-white text-black hover:bg-white/90 font-medium px-5"
            >
              Book a Call
            </Button>
          </Link>

          {/* Mobile menu button */}
          <button className="md:hidden text-white p-2" aria-label="Open menu"
            onClick={() => setIsOpen(!isOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </nav>
        {isOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-black/90 backdrop-blur-lg z-50 flex flex-col items-center gap-6 py-8 border-t border-white/10">
            <Link href="#" className="text-white text-lg">Home</Link>
            <Link href="#services" className="text-white text-lg">Services</Link>
            <Link href="#about" className="text-white text-lg">About</Link>
            <Link href="#pricing" className="text-white text-lg">Pricing</Link>
            <Link href="#contact" className="text-white text-lg">Contact</Link>

            <Link href="#contact">
              <Button className="bg-white text-black px-6 py-3 mt-4">
                Book a Call
              </Button>
            </Link>
          </div>
        )}

        {/* Hero Logo - Positioned at top */}
        <div className="absolute z-10 top-20 left-1/2 -translate-x-1/2 animate-hero-tagline">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20%2811%29-8km7GZACxqFr2p4z99s84ijWFSgaLs.png"
            alt="GlowingLeads Agency Logo"
            width={160}
            height={160}
            className="object-contain"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-[calc(100vh-80px)] px-6 text-center">
          {/* Micro-tagline */}
          <p className="hero-micro-tagline animate-hero-tagline mb-4">
            AI Automation & Lead-Gen for businesses
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight max-w-4xl text-balance leading-[1.1] animate-hero-headline hero-headline-gradient hero-headline-glow">
            GlowingLeads
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-2xl text-pretty animate-hero-subheadline" style={{ color: '#e9e3e3' }}>
            24/7 automation, instant lead follow-up, and high-converting websites, all done for you.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-10 animate-hero-cta">
            <Link href="#contact">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 font-medium px-8 py-6 text-base cta-button"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <ServicesSection />
      <AboutSection />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </>
  )
}
