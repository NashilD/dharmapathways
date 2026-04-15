'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-24 md:py-32">
        {/* Main Footer Content - Improved Spacing */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-14 md:gap-16 mb-16">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/dharama-pathways-logo-notext.PNG"
                alt="Dharma Pathways"
                width={36}
                height={36}
                className="w-9 h-9"
              />
              <span className="font-bold text-lg text-background">Dharma Pathways</span>
            </div>
            <p className="text-sm text-background/85 leading-relaxed font-light">
              Guiding transformative educational decisions through research-backed tools and honest guidance.
            </p>
          </div>

          {/* Explore Column - Improved Contrast */}
          <div>
            <h4 className="font-semibold text-xs mb-6 uppercase tracking-wider text-background/95">Explore</h4>
            <ul className="space-y-3 text-sm">
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
            <h4 className="font-semibold text-xs mb-6 uppercase tracking-wider text-background/95">Resources</h4>
            <ul className="space-y-3 text-sm">
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
            <h4 className="font-semibold text-xs mb-6 uppercase tracking-wider text-background/95">Connect</h4>
            <a 
              href="mailto:Info@dharmapathways.org.za"
              className="flex items-center gap-3 text-sm text-background/80 hover:text-background transition-colors group"
            >
              <Mail size={18} className="group-hover:text-background" />
              <span className="font-light">Info@dharmapathways.org.za</span>
            </a>
          </div>
        </div>

        {/* Divider - Better Separation */}
        <div className="border-t border-background/30 pt-10">
          {/* Copyright - Proper Contrast */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-background/75 font-light">
            <p>© {currentYear} Dharma Pathways. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
