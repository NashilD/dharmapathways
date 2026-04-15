import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <Image
            src="/dharama-pathways-logo-notext.PNG"
            alt="Dharma Pathways"
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
          />
          <span className="hidden sm:inline font-semibold text-foreground text-sm">
            Dharma Pathways
          </span>
        </Link>

        {/* Navigation - Always Visible */}
        <div className="flex items-center gap-3 md:gap-6">
          <Link href="/" className="text-sm px-3 md:px-4 py-2 text-foreground/70 hover:text-foreground hover:bg-foreground/5 rounded-md transition-colors">
            Home
          </Link>
          <Link href="/tools" className="text-sm px-3 md:px-4 py-2 text-foreground/70 hover:text-foreground hover:bg-foreground/5 rounded-md transition-colors">
            Tools
          </Link>
          <Link href="/about" className="text-sm px-3 md:px-4 py-2 text-foreground/70 hover:text-foreground hover:bg-foreground/5 rounded-md transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-sm px-3 md:px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

