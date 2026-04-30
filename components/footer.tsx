'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 md:px-6" style={{ paddingTop: 'var(--section-padding-xl)', paddingBottom: 'var(--section-padding-xl)' }}>
        {/* Main Footer Content - Improved Spacing */}
        <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: 'var(--space-xl)', marginBottom: 'var(--space-xl)' }}>
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center" style={{ gap: 'var(--space-sm)', marginBottom: 'var(--space-lg)' }}>
              <Image
                src="/dharama-pathways-logo-notext.PNG"
                alt="Dharma Pathways"
                width={36}
                height={36}
                className="w-9 h-9"
              />
              <span className="font-bold text-lg text-background">Dharma Pathways</span>
            </div>
            <p className="text-sm text-background/85 leading-relaxed font-light" style={{ fontSize: 'var(--font-size-base)', lineHeight: 'var(--line-height-base)' }}>
              Guiding transformative educational decisions through research-backed tools and honest guidance.
            </p>
          </div>

          {/* Explore Column - Improved Contrast */}
          <div>
            <h4 className="font-semibold text-xs mb-6 uppercase tracking-wider text-background/95" style={{ marginBottom: 'var(--space-lg)', letterSpacing: 'var(--tracking-wide)' }}>Explore</h4>
            <ul style={{ gap: 'var(--space-sm)' }} className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-background/80 hover:text-background transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/tools" className="text-background/80 hover:text-background transition-colors">
                  Tools
                </Link>
              </li>
              <li>
                <Link href="/start" className="text-background/80 hover:text-background transition-colors">
                  Get Started
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column - Improved Contrast */}
          <div>
            <h4 className="font-semibold text-xs mb-6 uppercase tracking-wider text-background/95" style={{ marginBottom: 'var(--space-lg)', letterSpacing: 'var(--tracking-wide)' }}>Resources</h4>
            <ul style={{ gap: 'var(--space-sm)' }} className="space-y-3 text-sm">
              <li>
                <Link href="#" className="text-background/80 hover:text-background transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-background/80 hover:text-background transition-colors">
                  Research
                </Link>
              </li>
              <li>
                <Link href="#" className="text-background/80 hover:text-background transition-colors">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Column - Elevated Contrast */}
          <div>
            <h4 className="font-semibold text-xs mb-6 uppercase tracking-wider text-background/95" style={{ marginBottom: 'var(--space-lg)', letterSpacing: 'var(--tracking-wide)' }}>Connect</h4>
            <a 
              href="mailto:Info@dharmapathways.org.za"
              className="flex items-center gap-3 text-sm text-background/80 hover:text-background transition-colors group"
              style={{ gap: 'var(--space-sm)' }}
            >
              <Mail size={18} className="group-hover:text-background" />
              <span className="font-light">Info@dharmapathways.org.za</span>
            </a>
          </div>
        </div>

        {/* Divider - Better Separation */}
        <div className="border-t border-background/30" style={{ paddingTop: 'var(--space-lg)' }}>
          {/* Copyright - Proper Contrast */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-background/75 font-light" style={{ gap: 'var(--space-lg)' }}>
            <p>© {currentYear} Dharma Pathways. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
