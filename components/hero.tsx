import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-primary/5 to-background overflow-hidden" style={{ paddingTop: 'var(--section-padding-lg)', paddingBottom: 'var(--section-padding-lg)' }}>
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight" style={{ fontSize: 'var(--text-hero)', lineHeight: 'var(--heading-line-height)', marginBottom: 'var(--space-lg)' }}>
            Understanding Human Pressure in Modern Systems
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/70 mb-8 leading-relaxed" style={{ fontSize: 'var(--text-lead)', lineHeight: 'var(--line-height-base)', marginBottom: 'var(--space-lg)' }}>
            Dharma Institute of Purpose is a research-driven organization dedicated to measuring and addressing the human strain that shapes institutional outcomes. We help organizations, educators, and policymakers reconnect systems with the people they serve.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center" style={{ gap: 'var(--space-md)' }}>
            <Button variant="default">
              Start a Conversation
            </Button>
            <Button variant="outline">
              Explore Our Work
            </Button>
          </div>

          <div style={{ marginTop: 'var(--space-xl)', paddingTop: 'var(--space-xl)', borderTop: '1px solid var(--surface-border)' }}>
            <p className="text-sm text-foreground/60 uppercase tracking-widest mb-8" style={{ letterSpacing: 'var(--tracking-wide)', marginBottom: 'var(--space-lg)' }}>
              Our Focus Areas
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8" style={{ gap: 'var(--space-lg)' }}>
              <div>
                <p className="font-semibold text-foreground mb-2">Research-Driven</p>
                <p className="text-sm text-foreground/60">Analytical frameworks measuring human strain</p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-2">Institutional Impact</p>
                <p className="text-sm text-foreground/60">Insights for organizations and systems</p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-2">Human-Centered</p>
                <p className="text-sm text-foreground/60">Programs supporting life transitions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
