import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';

export default function StartJourney() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-4" style={{ paddingTop: 'var(--section-padding-lg)', paddingBottom: 'var(--section-padding-lg)' }}>
          <h1 style={{ fontSize: 'var(--text-hero)', lineHeight: 'var(--heading-line-height)', marginBottom: 'var(--space-lg)' }} className="font-bold text-foreground text-center">
            Start Your Decision Journey
          </h1>

          <p style={{ fontSize: 'var(--text-lead)', lineHeight: 'var(--line-height-base)', marginBottom: 'var(--space-xl)' }} className="text-muted-foreground text-center">
            This guided process will help you understand your affordability, explore your options, and choose a safer path forward. We'll work through four key tools together.
          </p>

          {/* Steps */}
          <div style={{ gap: 'var(--space-lg)', marginBottom: 'var(--space-xl)' }} className="space-y-6 mb-12">
            <div className="border-l-4 border-primary pl-6" style={{ paddingLeft: 'var(--space-lg)' }}>
              <h3 style={{ fontSize: 'var(--text-section)', lineHeight: 'var(--heading-line-height)', marginBottom: 'var(--space-sm)' }} className="font-semibold text-foreground">
                Step 1: Reality Check
              </h3>
              <p style={{ fontSize: 'var(--font-size-base)', lineHeight: 'var(--line-height-base)' }} className="text-muted-foreground">
                Understand your real affordability pressure by assessing your household income, expenses, and study costs.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6" style={{ paddingLeft: 'var(--space-lg)' }}>
              <h3 style={{ fontSize: 'var(--text-section)', lineHeight: 'var(--heading-line-height)', marginBottom: 'var(--space-sm)' }} className="font-semibold text-foreground">
                Step 2: Calculate True Cost
              </h3>
              <p style={{ fontSize: 'var(--font-size-base)', lineHeight: 'var(--line-height-base)' }} className="text-muted-foreground">
                Get a complete breakdown of study costs including tuition, accommodation, food, devices, and more.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6" style={{ paddingLeft: 'var(--space-lg)' }}>
              <h3 style={{ fontSize: 'var(--text-section)', lineHeight: 'var(--heading-line-height)', marginBottom: 'var(--space-sm)' }} className="font-semibold text-foreground">
                Step 3: Compare Routes
              </h3>
              <p style={{ fontSize: 'var(--font-size-base)', lineHeight: 'var(--line-height-base)' }} className="text-muted-foreground">
                Compare different education pathways side-by-side to identify the safest option for your situation.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6" style={{ paddingLeft: 'var(--space-lg)' }}>
              <h3 style={{ fontSize: 'var(--text-section)', lineHeight: 'var(--heading-line-height)', marginBottom: 'var(--space-sm)' }} className="font-semibold text-foreground">
                Step 4: Career Fit
              </h3>
              <p style={{ fontSize: 'var(--font-size-base)', lineHeight: 'var(--line-height-base)' }} className="text-muted-foreground">
                Explore career paths that align with your interests and work style to ensure long-term satisfaction.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button asChild>
              <a href="/tools/reality-check">
                Begin Your Journey →
              </a>
            </Button>
          </div>

          {/* Alternative */}
          <div style={{ marginTop: 'var(--space-xl)', paddingTop: 'var(--space-xl)', borderTop: '1px solid var(--border)' }} className="mt-12 pt-12 border-t border-border text-center">
            <p style={{ fontSize: 'var(--font-size-base)', lineHeight: 'var(--line-height-base)', marginBottom: 'var(--space-lg)' }} className="text-muted-foreground mb-6">
              Prefer to explore tools individually?
            </p>
            <Button variant="link" asChild>
              <a href="/tools">
                Browse all tools
              </a>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
