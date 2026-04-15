import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import ToolCard from '@/components/tool-card';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Navbar />

      {/* ═══════════════════════════════════════════════════════ */}
      {/* HERO SECTION - Editorial Centered */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="relative px-4 py-32 md:py-48 bg-background">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-2xl mx-auto text-center space-y-10 md:space-y-12">
          {/* Logo - Visual Anchor */}
          <div className="mb-12 md:mb-16">
            <Image
              src="/dharama-pathways-logo-notext.PNG"
              alt="Dharma Pathways"
              width={120}
              height={120}
              className="mx-auto w-32 h-32 object-contain"
              priority
            />
          </div>

          {/* Heading - Maximum Breathing Room */}
          <div className="mb-10 md:mb-14">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              Dharma Pathways
            </h1>
          </div>

          {/* Tagline - Soft Contrast */}
          <div className="mb-10 md:mb-12">
            <p className="text-xl md:text-2xl text-foreground/50 font-light">
              Where opportunity meets direction
            </p>
          </div>

          {/* Description - Limited Width, Readability Focus */}
          <p className="text-base md:text-lg text-foreground/60 leading-relaxed max-w-lg mx-auto font-light mb-14 md:mb-16">
            Research-backed guidance helping students and families make clearer, safer, more affordable educational decisions.
          </p>

          {/* Buttons - Size-to-Content, Clear Gap */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/start"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors text-base md:text-lg"
            >
              Start Your Journey
            </Link>
            <Link
              href="/tools"
              className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors text-base md:text-lg"
            >
              Explore Tools
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* SECTION BREAK - Visual Breathing Room */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="px-4 py-24 md:py-40"></section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* TOOLS SECTION - 2x2 Grid */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="px-4 py-32 md:py-48">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-28 md:mb-36">
          <h2 className="text-5xl md:text-7xl font-bold mb-8">Your Guidance Path</h2>
          <p className="text-lg text-foreground/70 font-light">
            Four research-backed tools to help you navigate your educational journey with confidence.
          </p>
        </div>

        {/* Grid Container - 2 Columns */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20">
            <ToolCard
              title="Reality Check"
              description="Understand your real affordability pressure and household financial situation"
              href="/tools/reality-check"
              icon="📊"
            />
            <ToolCard
              title="True Cost"
              description="Calculate the full cost of education including all hidden expenses"
              href="/tools/cost-calculator"
              icon="💰"
            />
            <ToolCard
              title="Route Compare"
              description="Compare education pathways side-by-side to find the safest option"
              href="/tools/route-compare"
              icon="🛣️"
            />
            <ToolCard
              title="Career Fit"
              description="Discover career paths that match your interests and work style"
              href="/tools/fit-check"
              icon="🎯"
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* SECTION BREAK */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="px-4 py-24 md:py-40"></section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* CTA SECTION - Invitation with Breathing Room */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="px-4 py-40 md:py-56 bg-muted/40">
        <div className="max-w-2xl mx-auto text-center space-y-12">
          <div className="space-y-8">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              Ready to begin?
            </h2>
            <p className="text-lg text-foreground/60 font-light leading-relaxed">
              Start your guided journey today. We'll walk you through each tool step-by-step to help you make confident, informed decisions about your future.
            </p>
          </div>

          <div className="pt-6">
            <Link
              href="/start"
              className="inline-flex px-10 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors text-lg md:text-xl"
            >
              Begin Your Journey →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* FOOTER - Stability & Structure */}
      {/* ═══════════════════════════════════════════════════════ */}
      <Footer />
    </div>
  );
}
