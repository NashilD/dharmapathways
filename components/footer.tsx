import Link from 'next/link'
import { Mail, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary-foreground rounded flex items-center justify-center text-primary font-bold text-lg">
                D
              </div>
              <span className="font-bold text-lg">Dharma</span>
            </div>
            <p className="text-sm opacity-80">
              Research-driven institute understanding human pressures in modern institutions.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold mb-4 text-base">Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#offerings" className="opacity-80 hover:opacity-100 transition-opacity">
                  HRI Institutional Audits
                </Link>
              </li>
              <li>
                <Link href="#offerings" className="opacity-80 hover:opacity-100 transition-opacity">
                  Life Gap Training
                </Link>
              </li>
              <li>
                <Link href="#offerings" className="opacity-80 hover:opacity-100 transition-opacity">
                  Student Guidance Programs
                </Link>
              </li>
              <li>
                <Link href="#offerings" className="opacity-80 hover:opacity-100 transition-opacity">
                  Research Reports
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-base">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#overview" className="opacity-80 hover:opacity-100 transition-opacity">
                  About
                </Link>
              </li>
              <li>
                <Link href="#philosophy" className="opacity-80 hover:opacity-100 transition-opacity">
                  Philosophy
                </Link>
              </li>
              <li>
                <Link href="#contact" className="opacity-80 hover:opacity-100 transition-opacity">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-base">Connect</h4>
            <div className="space-y-3">
              <a 
                href="mailto:hello@dharmaio.org" 
                className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                <Mail size={16} />
                hello@dharmaio.org
              </a>
              <div className="flex gap-4 pt-2">
                <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  <Twitter size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-80">
              © {currentYear} Dharma Institute of Purpose. All rights reserved.
            </p>
            <p className="text-sm opacity-80">
              Building research-driven solutions for human wellbeing.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
