import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section style={{ paddingTop: 'var(--section-padding-lg)', paddingBottom: 'var(--section-padding-lg)' }} className="border-b border-border">
          <div className="max-w-6xl mx-auto px-4">
            <h1 style={{ fontSize: 'var(--text-hero)', lineHeight: 'var(--heading-line-height)', marginBottom: 'var(--space-lg)' }} className="font-bold text-foreground">
              About Dharma Pathways
            </h1>
            <p style={{ fontSize: 'var(--text-lead)', lineHeight: 'var(--line-height-base)' }} className="text-muted-foreground">
              Research-driven guidance for clearer, safer, and more affordable educational decisions.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section style={{ paddingTop: 'var(--section-padding-lg)', paddingBottom: 'var(--section-padding-lg)' }}>
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2" style={{ gap: 'var(--space-xl)' }}>
              <div>
                <h2 style={{ fontSize: 'var(--text-section)', lineHeight: 'var(--heading-line-height)', marginBottom: 'var(--space-md)' }} className="font-bold text-foreground">Our Mission</h2>
                <p style={{ fontSize: 'var(--font-size-base)', lineHeight: 'var(--line-height-base)' }} className="text-muted-foreground leading-relaxed">
                  We believe that education is a transformative investment—but only when it&apos;s
                  made with confidence, clarity, and a full understanding of the real costs and
                  options involved. Too many students and families make decisions without adequate
                  information, leading to regret, debt, and underutilized degrees.
                </p>
              </div>
              <div>
                <h2 style={{ fontSize: 'var(--text-section)', lineHeight: 'var(--heading-line-height)', marginBottom: 'var(--space-md)' }} className="font-bold text-foreground">Our Vision</h2>
                <p style={{ fontSize: 'var(--font-size-base)', lineHeight: 'var(--line-height-base)' }} className="text-muted-foreground leading-relaxed">
                  A world where educational decisions are informed, safe, and aligned with career
                  potential and financial reality. Where &quot;missing middle&quot; families have the tools
                  and support to navigate complex trade-offs. Where education becomes truly
                  affordable and valuable for all.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section style={{ paddingTop: 'var(--section-padding-lg)', paddingBottom: 'var(--section-padding-lg)' }}>
          <div className="max-w-6xl mx-auto px-4">
            <h2 style={{ fontSize: 'var(--text-section)', lineHeight: 'var(--heading-line-height)', marginBottom: 'var(--space-xl)' }} className="font-bold text-foreground">Our Core Values</h2>
            <div className="grid md:grid-cols-3" style={{ gap: 'var(--space-lg)' }}>
              {[
                {
                  title: 'Clarity',
                  description:
                    'We strip away complexity and jargon to provide honest, understandable insights about costs, options, and outcomes.',
                },
                {
                  title: 'Empowerment',
                  description:
                    'We equip individuals and families with tools and knowledge to make decisions that are right for them, not others.',
                },
                {
                  title: 'Research-Driven',
                  description:
                    'Our tools and frameworks are built on peer-reviewed research about education outcomes, affordability, and career success.',
                },
                {
                  title: 'Inclusivity',
                  description:
                    'We serve students at all income levels, focusing particularly on those who fall through traditional support cracks.',
                },
                {
                  title: 'Integrity',
                  description:
                    'We provide impartial, credible guidance—not tied to any specific institutions or commercial interests.',
                },
                {
                  title: 'Action-Oriented',
                  description:
                    'We move beyond awareness to concrete next steps and realistic pathways forward.',
                },
              ].map((value, i) => (
                <div
                  key={i}
                  className="border border-border rounded-lg p-6"
                  style={{ padding: 'var(--space-lg)', borderRadius: 'var(--card-radius)' }}
                >
                  <h3 style={{ fontSize: 'var(--text-card-title)', lineHeight: 'var(--heading-line-height)', marginBottom: 'var(--space-sm)' }} className="font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Approach */}
        <section style={{ paddingTop: 'var(--section-padding-lg)', paddingBottom: 'var(--section-padding-lg)' }}>
          <div className="max-w-6xl mx-auto px-4">
            <h2 style={{ fontSize: 'var(--text-section)', lineHeight: 'var(--heading-line-height)', marginBottom: 'var(--space-xl)' }} className="font-bold text-foreground">Our Approach</h2>
            <div style={{ gap: 'var(--space-lg)' }} className="space-y-8">
              <div className="border-l-4 border-primary pl-6" style={{ paddingLeft: 'var(--space-lg)' }}>
                <h3 style={{ fontSize: 'var(--text-card-title)', lineHeight: 'var(--heading-line-height)', marginBottom: 'var(--space-xs)' }} className="font-semibold text-foreground">
                  Step 1: Understand Pressure
                </h3>
                <p className="text-muted-foreground">
                  We help you honestly assess your real affordability pressure—your household
                  income, expenses, dependents, and existing debt. Many families are in the
                  &quot;missing middle&quot; where income looks sufficient but pressure is very real.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6" style={{ paddingLeft: 'var(--space-lg)' }}>
                <h3 style={{ fontSize: 'var(--text-card-title)', lineHeight: 'var(--heading-line-height)', marginBottom: 'var(--space-xs)' }} className="font-semibold text-foreground">
                  Step 2: Calculate True Cost
                </h3>
                <p className="text-muted-foreground">
                  Education costs far more than tuition. We help you account for accommodation,
                  food, transport, devices, data, and all hidden expenses. Only then can you
                  know if a path is truly affordable.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6" style={{ paddingLeft: 'var(--space-lg)' }}>
                <h3 style={{ fontSize: 'var(--text-card-title)', lineHeight: 'var(--heading-line-height)', marginBottom: 'var(--space-xs)' }} className="font-semibold text-foreground">
                  Step 3: Compare Routes Safely
                </h3>
                <p className="text-muted-foreground">
                  Different education pathways carry different risks and rewards. We help you
                  compare cost, duration, support availability, and outcome certainty so you can
                  identify the safest option for your situation.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6" style={{ paddingLeft: 'var(--space-lg)' }}>
                <h3 style={{ fontSize: 'var(--text-card-title)', lineHeight: 'var(--heading-line-height)', marginBottom: 'var(--space-xs)' }} className="font-semibold text-foreground">
                  Step 4: Align with Career Fit
                </h3>
                <p className="text-muted-foreground">
                  Your education choice must align with your interests and work style to ensure
                  long-term satisfaction and employment. We assess career fit to ensure your path
                  leads somewhere you actually want to go.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ paddingTop: 'var(--section-padding-lg)', paddingBottom: 'var(--section-padding-lg)' }}>
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-card border border-border rounded-lg p-12 text-center" style={{ padding: 'var(--space-xl)', borderRadius: 'var(--card-radius)' }}>
              <h2 style={{ fontSize: 'var(--text-section)', lineHeight: 'var(--heading-line-height)', marginBottom: 'var(--space-md)' }} className="font-bold text-foreground">
                Ready to Make a Confident Decision?
              </h2>
              <p style={{ fontSize: 'var(--font-size-base)', lineHeight: 'var(--line-height-base)', marginBottom: 'var(--space-lg)' }} className="text-muted-foreground max-w-2xl mx-auto">
                Start your guided decision journey today and gain clarity on your education and
                career path.
              </p>
              <Button variant="default">
                Begin Your Journey
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
