'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/dharama-pathways-logo.jpeg"
              alt="Dharma Pathways"
              width={140}
              height={50}
              className="h-10 w-auto"
              priority
            />
          </Link>

          <div className="flex items-center gap-10">
            <Link
              href="/"
              className="inline-flex min-w-[56px] justify-center text-base font-medium text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/tools"
              className="inline-flex min-w-[56px] justify-center text-base font-medium text-foreground hover:text-primary transition-colors"
            >
              Tools
            </Link>
            <Link
              href="/about"
              className="inline-flex min-w-[56px] justify-center text-base font-medium text-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-w-[64px] justify-center text-base font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
