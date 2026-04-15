'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
        {/* Logo - Small, Minimal */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <Image
            src="/dharama-pathways-logo-notext.PNG"
            alt="Dharma Pathways"
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
          />
          <span className="hidden sm:inline font-semibold text-foreground text-sm tracking-tight">
            Dharma Pathways
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
            Home
          </Link>
          <Link href="/tools" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
            Tools
          </Link>
          <Link href="/about" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-sm bg-primary text-primary-foreground px-4 py-2 rounded-md hover:opacity-90 transition-opacity font-medium">
            Get in Touch
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-2">
            <Link href="/" className="block text-foreground/70 hover:text-foreground transition-colors py-2" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/tools" className="block text-foreground/70 hover:text-foreground transition-colors py-2" onClick={() => setIsOpen(false)}>
              Tools
            </Link>
            <Link href="/about" className="block text-foreground/70 hover:text-foreground transition-colors py-2" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="/contact" className="block bg-primary text-primary-foreground px-4 py-2 rounded-md hover:opacity-90 transition-opacity font-medium mt-4 text-center" onClick={() => setIsOpen(false)}>
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
            <Link href="/about" className="block text-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="/contact" className="block bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition-opacity font-medium text-center" onClick={() => setIsOpen(false)}>
              Book Session
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
