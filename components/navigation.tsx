'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/dharama-pathways-logo.jpeg"
              alt="Dharma Pathways"
              width={140}
              height={50}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors text-sm">
              Home
            </Link>
            <Link href="/solutions" className="text-foreground hover:text-primary transition-colors text-sm">
              Solutions
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors text-sm">
              About
            </Link>
            <Link href="/#contact" className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:opacity-90 transition-opacity text-sm font-medium">
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            <Link 
              href="/" 
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/solutions" 
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Solutions
            </Link>
            <Link 
              href="/about" 
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/#contact" 
              className="block mt-4 bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:opacity-90 transition-opacity text-sm font-medium text-center"
              onClick={() => setIsOpen(false)}
            >
              Get in Touch
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
