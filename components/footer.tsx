"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"

const footerLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
]

export function Footer() {
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed")
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    )

    const elements = footerRef.current?.querySelectorAll(".reveal-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <footer
      ref={footerRef}
      className="relative bg-black pt-16 pb-10 overflow-hidden"
    >
      {/* Subtle ambient glow */}
      <div className="absolute inset-0 flex items-start justify-center pointer-events-none">
        <div className="w-[600px] h-[300px] rounded-full bg-blue-400/[0.02] blur-[100px] -translate-y-1/2" />
      </div>

      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12">
        {/* Main Footer Content */}
        <div className="reveal-on-scroll text-center mb-10">
          {/* Brand */}
          <Link href="/" className="inline-block text-2xl font-semibold text-white mb-6">
            GlowingLeads
          </Link>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-8">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="footer-link text-white/50 text-sm hover:text-white/80 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-sm text-white/40">
            <a href="tel:0412290016" className="hover:text-white/70 transition-colors">
              0412 290 016
            </a>
            <span className="hidden sm:inline text-white/20">|</span>
            <a href="mailto:glowingleads.au@gmail.com" className="hover:text-white/70 transition-colors">
              glowingleads.au@gmail.com
            </a>
            <span className="hidden sm:inline text-white/20">|</span>
            <span>Sydney, Australia</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="reveal-on-scroll reveal-delay-1 pt-8 border-t border-white/5">
          <p className="text-white/30 text-sm text-center">
            &copy; 2026 GlowingLeads. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
