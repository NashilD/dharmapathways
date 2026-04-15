import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import ToolCard from '@/components/tool-card';

export default function ToolsHub() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-4 py-14 md:py-20">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Decision-Making Tools
          </h1>
          <p className="text-base md:text-lg text-muted-foreground mb-10 md:mb-12 max-w-3xl">
            Our research-backed tools help you understand your affordability, compare options, and make confident education decisions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            <ToolCard
              title="Missing Middle Reality Check"
              description="Assess your real affordability pressure by analyzing household income, expenses, dependents, and support levels."
              href="/tools/reality-check"
              icon="📊"
            />
            <ToolCard
              title="True Cost Calculator"
              description="Calculate the complete annual and monthly cost of study, including hidden expenses and affordability status."
              href="/tools/cost-calculator"
              icon="💰"
            />
            <ToolCard
              title="Safer Route Compare"
              description="Compare education pathways side-by-side on cost, duration, support, and certainty to find the safest option."
              href="/tools/route-compare"
              icon="🛣️"
            />
            <ToolCard
              title="Career Fit Check"
              description="Explore your career interests and work style preferences to discover paths aligned with your goals."
              href="/tools/fit-check"
              icon="🎯"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
