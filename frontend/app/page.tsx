import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import ToolCard from '@/components/tool-card';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Dharma Institute of Purpose
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Where opportunity meets direction
            </p>
            <p className="text-lg text-foreground mb-8 leading-relaxed">
              Helping students and families make clearer, safer, and more affordable education decisions. Our research-backed tools guide you through complex decisions with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/start"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium text-center"
              >
                Start Guided Journey
              </Link>
              <Link
                href="/tools"
                className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors font-medium text-center"
              >
                Explore Tools
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold text-foreground mb-12">Our Tools</h2>
          <div className="grid md:grid-cols-2 gap-6">
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

      {/* Guided Journey CTA */}
      <section className="border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="bg-card border border-border rounded-lg p-8 md:p-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Not sure where to start?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Follow our guided decision journey. We'll walk you through each tool step-by-step to help you understand your options and make a confident choice.
            </p>
            <Link
              href="/start"
              className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium"
            >
              Begin Guided Journey →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
