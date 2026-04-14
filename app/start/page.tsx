import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Link from 'next/link';

export default function StartJourney() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-foreground mb-6 text-center">
            Start Your Decision Journey
          </h1>

          <p className="text-lg text-muted-foreground mb-12 text-center">
            This guided process will help you understand your affordability, explore your options, and choose a safer path forward. We'll work through four key tools together.
          </p>

          {/* Steps */}
          <div className="space-y-6 mb-12">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">Step 1: Reality Check</h3>
              <p className="text-muted-foreground">
                Understand your real affordability pressure by assessing your household income, expenses, and study costs.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">Step 2: Calculate True Cost</h3>
              <p className="text-muted-foreground">
                Get a complete breakdown of study costs including tuition, accommodation, food, devices, and more.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">Step 3: Compare Routes</h3>
              <p className="text-muted-foreground">
                Compare different education pathways side-by-side to identify the safest option for your situation.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">Step 4: Career Fit</h3>
              <p className="text-muted-foreground">
                Explore career paths that align with your interests and work style to ensure long-term satisfaction.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/tools/reality-check"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:opacity-90 transition-opacity font-medium text-lg"
            >
              Begin Your Journey →
            </Link>
          </div>

          {/* Alternative */}
          <div className="mt-12 pt-12 border-t border-border text-center">
            <p className="text-muted-foreground mb-6">
              Prefer to explore tools individually?
            </p>
            <Link
              href="/tools"
              className="text-primary font-medium hover:underline"
            >
              Browse all tools
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
