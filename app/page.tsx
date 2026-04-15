import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import ToolCard from '@/components/tool-card';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Navigation />
      <section className="relative overflow-hidden px-4 pt-20 pb-16 md:pt-24 md:pb-20">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-28 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-b from-primary/15 via-primary/5 to-transparent blur-3xl" />
        </div>

        <div className="mx-auto max-w-3xl text-center">
          <Image
            src="/dharama-pathways-logo-notext.PNG"
            alt="Dharma Pathways"
            width={108}
            height={108}
            className="mx-auto mb-8 h-24 w-24 object-contain"
            priority
          />

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            Dharma Pathways
          </h1>
          <p className="mt-5 text-lg md:text-xl text-foreground/60">
            Where opportunity meets direction
          </p>
          <p className="mt-5 text-base md:text-lg text-foreground/70 leading-relaxed max-w-2xl mx-auto">
            Research-backed guidance helping students and families make clear, safer, and more affordable education decisions.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link
              href="/start"
              className="inline-flex items-center justify-center px-7 py-3 bg-primary text-primary-foreground rounded-md font-semibold hover:bg-primary/90 transition-colors"
            >
              Start Your Journey
            </Link>
            <Link
              href="/tools"
              className="inline-flex items-center justify-center px-7 py-3 border border-primary/40 text-primary rounded-md font-semibold hover:bg-primary/5 transition-colors"
            >
              Explore Tools
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl text-center mx-auto mb-10 md:mb-14">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Your Guidance Path</h2>
            <p className="mt-4 text-base md:text-lg text-foreground/70">
              Four research-backed tools to help you navigate your educational journey with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-fr gap-6 md:gap-8">
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

      <section className="px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto rounded-2xl border border-border/70 bg-gradient-to-b from-background to-muted/50 p-8 md:p-12 text-center shadow-sm">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Ready to begin?</h2>
          <p className="mt-4 text-base md:text-lg text-foreground/65 leading-relaxed max-w-2xl mx-auto">
            Start your guided journey today. We walk through each tool step by step so you can make informed decisions about your future.
          </p>
          <div className="mt-8">
            <Link
              href="/start"
              className="inline-flex px-8 py-3 bg-primary text-primary-foreground rounded-md font-semibold hover:bg-primary/90 transition-colors"
            >
              Begin Your Journey
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
