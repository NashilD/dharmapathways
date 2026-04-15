import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import ToolCard from '@/components/tool-card';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section - Centered, Logo-Prominent */}
      <section className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center px-4 py-12 md:py-0 relative">
        {/* Optional: Subtle background accent at top */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="w-full max-w-2xl flex flex-col items-center text-center space-y-8 md:space-y-10">
          {/* Logo - Prominent */}
          <div className="flex justify-center pt-8 md:pt-0">
            <Image
              src="/dharama-pathways-logo-notext.PNG"
              alt="Dharma Pathways"
              width={220}
              height={220}
              className="w-48 h-48 md:w-56 md:h-56 object-contain"
              priority
            />
          </div>

          {/* Brand Name */}
          <div className="space-y-3 md:space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight">
              Dharma Pathways
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground font-light tracking-wide">
              Where opportunity meets direction
            </p>
          </div>

          {/* Description - Concise */}
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-xl font-light">
            Research-backed guidance to help students and families make clearer, safer, and more affordable educational decisions.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-4 md:pt-6 w-full sm:w-auto sm:justify-center">
            <Link
              href="/start"
              className="bg-primary text-primary-foreground px-8 py-3.5 rounded-lg hover:opacity-85 transition-opacity font-medium text-center text-base md:text-lg shadow-md hover:shadow-lg"
            >
              Start Guided Journey
            </Link>
            <Link
              href="/tools"
              className="border-2 border-primary text-primary px-8 py-3.5 rounded-lg hover:bg-primary/5 transition-colors font-medium text-center text-base md:text-lg"
            >
              Explore Tools
            </Link>
          </div>
        </div>
      </section>

      {/* Tools Grid - Generous Spacing */}
      <section className="border-b border-border bg-background/50">
        <div className="max-w-6xl mx-auto px-4 py-32 md:py-40">
          <div className="max-w-2xl mx-auto mb-16 md:mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Tools
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              Research-backed frameworks designed to guide you through each step of your educational decision.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            <ToolCard
              title="Missing Middle Reality Check"
              description="Understand your real affordability pressure and household financial situation"
              href="/tools/reality-check"
              icon="📊"
            />
            <ToolCard
              title="True Cost Calculator"
              description="Calculate the full cost of study including all hidden expenses"
              href="/tools/cost-calculator"
              icon="💰"
            />
            <ToolCard
              title="Safer Route Compare"
              description="Compare education options side-by-side to find the safest path"
              href="/tools/route-compare"
              icon="🛣️"
            />
            <ToolCard
              title="Career Fit Check"
              description="Discover career paths that match your interests and work style"
              href="/tools/fit-check"
              icon="🎯"
            />
          </div>
        </div>
      </section>

      {/* Guided Journey CTA - Premium Minimal Design */}
      <section className="border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-32 md:py-40">
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                  Ready to find your path?
                </h2>
                <p className="text-xl text-foreground/70 font-light leading-relaxed">
                  Our guided journey walks you through each tool step-by-step, helping you understand your options and make confident, informed decisions about your future.
                </p>
              </div>
              <div className="pt-4">
                <Link
                  href="/start"
                  className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-lg hover:opacity-85 transition-opacity font-medium text-lg shadow-md hover:shadow-lg"
                >
                  Begin Your Journey →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
