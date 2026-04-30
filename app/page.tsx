import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import ToolCard from '@/components/tool-card';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Navigation />

      <main>
        <section className="relative overflow-hidden px-6 sm:px-8 lg:px-12 pt-24 pb-24 md:pt-28 md:pb-28">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-28 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-b from-primary/20 via-primary/10 to-transparent blur-3xl" />
            <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
          </div>

          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div className="text-center lg:text-left">
                <div className="mx-auto mb-8 inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-primary sm:mx-0">
                  Safer, smarter education decisions
                </div>

                <div className="max-w-3xl mx-auto lg:mx-0 space-y-6">
                  <div className="flex justify-center lg:justify-start">
                    <Image
                      src="/dharama-pathways-logo-notext.PNG"
                      alt="Dharma Pathways"
                      width={96}
                      height={96}
                      className="h-24 w-24"
                      priority
                    />
                  </div>

                  <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
                    Dharma Pathways
                  </h1>
                  <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
                    Research-backed guidance helping students and families make clear, safer, and more affordable education decisions.
                  </p>
                </div>

                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <Link
                    href="/start"
                    className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/10 transition hover:bg-primary/95"
                  >
                    Start Your Journey
                  </Link>
                  <Link
                    href="/tools"
                    className="inline-flex items-center justify-center rounded-full border border-primary/40 px-8 py-3 text-sm font-semibold text-primary transition hover:bg-primary/5"
                  >
                    Explore Tools
                  </Link>
                </div>

                <div className="mt-12 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-3xl border border-border/70 bg-card/95 p-5 text-left shadow-sm">
                    <p className="text-sm font-semibold text-primary">Clear Guidance</p>
                    <p className="mt-2 text-sm text-foreground/70">Step-by-step support for every decision point.</p>
                  </div>
                  <div className="rounded-3xl border border-border/70 bg-card/95 p-5 text-left shadow-sm">
                    <p className="text-sm font-semibold text-primary">Better Confidence</p>
                    <p className="mt-2 text-sm text-foreground/70">Know the real cost and impact of each path.</p>
                  </div>
                  <div className="rounded-3xl border border-border/70 bg-card/95 p-5 text-left shadow-sm">
                    <p className="text-sm font-semibold text-primary">Family Friendly</p>
                    <p className="mt-2 text-sm text-foreground/70">Trusted tools for students, parents, and advisors.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-border/70 bg-card/90 p-8 shadow-xl shadow-primary/10">
                <div className="space-y-8">
                  <div className="rounded-3xl bg-primary/10 p-6">
                    <p className="text-sm uppercase tracking-[0.25em] text-primary/80">Why Dharma Pathways</p>
                    <p className="mt-4 text-2xl font-semibold text-foreground">Actionable insights with real-world direction.</p>
                  </div>

                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 text-3xl">📊</div>
                      <div>
                        <p className="font-semibold text-foreground">True affordability</p>
                        <p className="mt-2 text-sm text-foreground/70 leading-relaxed">Know the full cost of education so decisions are grounded in reality.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="mt-1 text-3xl">🛣️</div>
                      <div>
                        <p className="font-semibold text-foreground">Side-by-side comparison</p>
                        <p className="mt-2 text-sm text-foreground/70 leading-relaxed">Compare multiple pathways and choose the best route for your future.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="mt-1 text-3xl">🎯</div>
                      <div>
                        <p className="font-semibold text-foreground">Career fit</p>
                        <p className="mt-2 text-sm text-foreground/70 leading-relaxed">Match your strengths and values with careers that make sense.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-100 px-6 sm:px-8 lg:px-12 py-20 md:py-24">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <p className="text-sm uppercase tracking-[0.32em] text-primary/80 mb-4">Your guidance path</p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Four research-backed tools to guide your path</h2>
              <p className="mt-4 text-base md:text-lg text-foreground/70 leading-relaxed">
                Use the Dharma Pathways tools to assess affordability, compare options, and choose a route that supports your goals and wellbeing.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-0 justify-items-center">
              <div className="w-full max-w-[22rem]">
                <ToolCard
                  title="Reality Check"
                  description="Understand your real affordability pressure and household financial situation."
                  href="/tools/reality-check"
                  icon="📊"
                />
              </div>
              <div className="w-full max-w-[22rem]">
                <ToolCard
                  title="True Cost"
                  description="Calculate the full cost of education including all hidden expenses."
                  href="/tools/cost-calculator"
                  icon="💰"
                />
              </div>
              <div className="w-full max-w-[22rem]">
                <ToolCard
                  title="Route Compare"
                  description="Compare education pathways side-by-side to find the safest option."
                  href="/tools/route-compare"
                  icon="🛣️"
                />
              </div>
              <div className="w-full max-w-[22rem]">
                <ToolCard
                  title="Career Fit"
                  description="Discover career paths that match your interests and work style."
                  href="/tools/fit-check"
                  icon="🎯"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 sm:px-8 lg:px-12 py-24">
          <div className="max-w-6xl mx-auto bg-gradient-to-br from-primary/10 via-background to-muted/60 rounded-[2rem] border border-border/70 p-10 md:p-12 shadow-xl shadow-primary/10">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="space-y-6">
                <p className="text-sm uppercase tracking-[0.32em] text-primary/80">How it works</p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">A simple path from uncertainty to clarity</h2>
                <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
                  Navigate your education decisions with a structured approach that emphasizes transparency, affordability, and long-term fit.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl bg-background/95 border border-border/70 p-6 shadow-sm">
                  <p className="text-sm font-semibold text-primary">1. Discover</p>
                  <p className="mt-3 text-sm text-foreground/70">Start with where you are today and what matters most.</p>
                </div>
                <div className="rounded-3xl bg-background/95 border border-border/70 p-6 shadow-sm">
                  <p className="text-sm font-semibold text-primary">2. Compare</p>
                  <p className="mt-3 text-sm text-foreground/70">Measure options based on cost, risk, and long-term fit.</p>
                </div>
                <div className="rounded-3xl bg-background/95 border border-border/70 p-6 shadow-sm">
                  <p className="text-sm font-semibold text-primary">3. Choose</p>
                  <p className="mt-3 text-sm text-foreground/70">Move forward with a plan you trust and understand.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 sm:px-8 lg:px-12 pb-24 md:pb-28">
          <div className="max-w-4xl mx-auto rounded-[2rem] border border-border/70 bg-card/90 p-11 md:p-12 text-center shadow-2xl shadow-primary/10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Ready to make a better decision?</h2>
            <p className="mt-4 text-base md:text-lg text-foreground/70 leading-relaxed">
              Start with the tool that matches your stage and get step-by-step support for the next phase of your education journey.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">
              <Link
                href="/start"
                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/10 transition hover:bg-primary/95"
              >
                Begin Your Journey
              </Link>
              <Link
                href="/tools"
                className="inline-flex items-center justify-center rounded-full border border-primary/40 px-8 py-3 text-sm font-semibold text-primary transition hover:bg-primary/5"
              >
                View All Tools
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
