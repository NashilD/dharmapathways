import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { ArrowRight, Lightbulb, Users, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Why Dharma - Our Approach & Philosophy',
  description: 'Understand our unique approach to measuring human strain and building institutional resilience.',
}

export default function WhyDharmaPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <section style={{ paddingTop: 'var(--section-padding-lg)', paddingBottom: 'var(--section-padding-lg)' }} className="bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 style={{ fontSize: 'var(--text-hero)', lineHeight: 'var(--heading-line-height)', marginBottom: 'var(--space-lg)' }} className="font-bold text-foreground">
            Why Dharma
          </h1>
          <p style={{ fontSize: 'var(--text-lead)', lineHeight: 'var(--line-height-base)' }} className="text-foreground/70 max-w-2xl">
            A research-driven approach to understanding and addressing human pressure in modern institutions.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section style={{ paddingTop: 'var(--section-padding-md)', paddingBottom: 'var(--section-padding-md)' }} className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 style={{ fontSize: 'var(--text-section)', lineHeight: 'var(--heading-line-height)', marginBottom: 'var(--space-xl)' }} className="font-bold text-foreground">The Problem We&apos;re Solving</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center" style={{ gap: 'var(--space-xl)' }}>
            <div>
              <div style={{ gap: 'var(--space-lg)' }} className="space-y-6">
                <p style={{ fontSize: 'var(--font-size-base)', lineHeight: 'var(--line-height-base)' }} className="text-foreground/70 leading-relaxed">
                  Across the world, individuals navigating education, careers, and institutional systems are experiencing increasing levels of pressure and uncertainty. Systems designed to enable opportunity often fail to account for the human strain placed on individuals within them.
                </p>

                <div className="bg-secondary/50 p-6 rounded-lg border-l-4 border-primary" style={{ padding: 'var(--space-lg)', borderRadius: 'var(--card-radius)' }}>
                  <h4 className="font-semibold text-foreground mb-3" style={{ marginBottom: 'var(--space-sm)' }}>Unmeasured Pressures</h4>
                  <ul style={{ gap: 'var(--space-sm)' }} className="space-y-2 text-sm text-foreground/70">
                    <li>• Burnout in organizational environments</li>
                    <li>• Role misalignment and career uncertainty</li>
                    <li>• Organizational stress affecting performance</li>
                    <li>• Lack of clarity in education and career decisions</li>
                    <li>• Inadequate support for life transitions</li>
                  </ul>
                </div>

                <p style={{ fontSize: 'var(--font-size-base)', lineHeight: 'var(--line-height-base)' }} className="text-foreground/70 leading-relaxed">
                  These unmeasured pressures significantly affect performance, wellbeing, and long-term institutional stability—yet most organizations don&apos;t have frameworks to understand them.
                </p>
              </div>
            </div>

            <div className="bg-primary/10 p-8 rounded-lg border border-primary/20" style={{ padding: 'var(--space-lg)', borderRadius: 'var(--card-radius)' }}>
              <h4 style={{ fontSize: 'var(--font-size-base)', lineHeight: 'var(--heading-line-height)', marginBottom: 'var(--space-lg)' }} className="font-bold text-primary">Current Gaps</h4>
              <div style={{ gap: 'var(--space-lg)' }} className="space-y-6">
                <div>
                  <div style={{ fontSize: 'var(--text-section)', lineHeight: 'var(--heading-line-height)', marginBottom: 'var(--space-xs)' }} className="font-bold text-primary">❌</div>
                  <h5 className="font-semibold text-foreground mb-1" style={{ marginBottom: 'var(--space-xs)' }}>No Measurement</h5>
                  <p style={{ fontSize: 'var(--font-size-sm)' }} className="text-foreground/70">
                    Organizations measure financial metrics but rarely measure human strain
                  </p>
                </div>

                <div>
                  <div style={{ fontSize: 'var(--text-section)', lineHeight: 'var(--heading-line-height)', marginBottom: 'var(--space-xs)' }} className="font-bold text-primary">❌</div>
                  <h5 className="font-semibold text-foreground mb-1" style={{ marginBottom: 'var(--space-xs)' }}>Limited Data</h5>
                  <p style={{ fontSize: 'var(--font-size-sm)' }} className="text-foreground/70">
                    Decisions are made without understanding human pressures affecting outcomes
                  </p>
                </div>

                <div>
                  <div style={{ fontSize: 'var(--text-section)', lineHeight: 'var(--heading-line-height)', marginBottom: 'var(--space-xs)' }} className="font-bold text-primary">❌</div>
                  <h5 className="font-semibold text-foreground mb-1" style={{ marginBottom: 'var(--space-xs)' }}>Individual Focus</h5>
                  <p style={{ fontSize: 'var(--font-size-sm)' }} className="text-foreground/70">
                    Support for individuals without addressing systemic causes
                  </p>
                </div>

                <div>
                  <div style={{ fontSize: 'var(--text-section)', lineHeight: 'var(--heading-line-height)', marginBottom: 'var(--space-xs)' }} className="font-bold text-primary">❌</div>
                  <h5 className="font-semibold text-foreground mb-1" style={{ marginBottom: 'var(--space-xs)' }}>Unclear Pathways</h5>
                  <p style={{ fontSize: 'var(--font-size-sm)' }} className="text-foreground/70">
                    Students and young professionals lack guidance for major life decisions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section style={{ paddingTop: 'var(--section-padding-md)', paddingBottom: 'var(--section-padding-md)' }} className="bg-secondary/30 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 style={{ fontSize: 'var(--text-section)', lineHeight: 'var(--heading-line-height)', marginBottom: 'var(--space-xl)' }} className="font-bold text-foreground">Our Unique Approach</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" style={{ gap: 'var(--space-lg)' }}>
            <div className="bg-background p-8 rounded-lg border border-border" style={{ padding: 'var(--space-lg)', borderRadius: 'var(--card-radius)' }}>
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4" style={{ marginBottom: 'var(--space-md)' }}>
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h4 style={{ fontSize: 'var(--font-size-base)', lineHeight: 'var(--heading-line-height)', marginBottom: 'var(--space-sm)' }} className="font-bold text-foreground">Research-Driven</h4>
              <p style={{ fontSize: 'var(--font-size-sm)' }} className="text-foreground/70">
                Institutional change grounded in data and rigorous understanding of human strain patterns.
              </p>
            </div>

            <div className="bg-background p-8 rounded-lg border border-border" style={{ padding: 'var(--space-lg)', borderRadius: 'var(--card-radius)' }}>
              <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-4" style={{ marginBottom: 'var(--space-md)' }}>
                <Lightbulb className="w-6 h-6 text-accent" />
              </div>
              <h4 style={{ fontSize: 'var(--font-size-base)', lineHeight: 'var(--heading-line-height)', marginBottom: 'var(--space-sm)' }} className="font-bold text-foreground">Systems Thinking</h4>
              <p style={{ fontSize: 'var(--font-size-sm)' }} className="text-foreground/70">
                Address both individual struggles and systemic causes for lasting change.
              </p>
            </div>

            <div className="bg-background p-8 rounded-lg border border-border" style={{ padding: 'var(--space-lg)', borderRadius: 'var(--card-radius)' }}>
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4" style={{ marginBottom: 'var(--space-md)' }}>
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h4 style={{ fontSize: 'var(--font-size-base)', lineHeight: 'var(--heading-line-height)', marginBottom: 'var(--space-sm)' }} className="font-bold text-foreground">Human-Centered</h4>
              <p style={{ fontSize: 'var(--font-size-sm)' }} className="text-foreground/70">
                Every framework centers on actual human experience and what matters to people.
              </p>
            </div>

            <div className="bg-background p-8 rounded-lg border border-border" style={{ padding: 'var(--space-lg)', borderRadius: 'var(--card-radius)' }}>
              <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-4" style={{ marginBottom: 'var(--space-md)' }}>
                <ArrowRight className="w-6 h-6 text-accent" />
              </div>
              <h4 style={{ fontSize: 'var(--font-size-base)', lineHeight: 'var(--heading-line-height)', marginBottom: 'var(--space-sm)' }} className="font-bold text-foreground">Clarity</h4>
              <p style={{ fontSize: 'var(--font-size-sm)' }} className="text-foreground/70">
                Translate research into clear, actionable insights for decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section style={{ paddingTop: 'var(--section-padding-md)', paddingBottom: 'var(--section-padding-md)' }} className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 style={{ fontSize: 'var(--text-section)', lineHeight: 'var(--heading-line-height)', marginBottom: 'var(--space-xl)' }} className="font-bold text-foreground">What Makes Us Different</h2>
          
          <div style={{ gap: 'var(--space-xl)' }} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8 items-center" style={{ gap: 'var(--space-lg)' }}>
              <div>
                <h4 style={{ fontSize: 'var(--text-section)', lineHeight: 'var(--heading-line-height)', marginBottom: 'var(--space-md)' }} className="font-bold text-primary">Measurement Frameworks</h4>
                <p style={{ fontSize: 'var(--font-size-base)', lineHeight: 'var(--line-height-base)', marginBottom: 'var(--space-md)' }} className="text-foreground/70 leading-relaxed">
                  We develop and use analytical frameworks—like the Human Risk Index—that provide new ways for organizations and institutions to understand how human pressures influence outcomes.
                </p>
                <p style={{ fontSize: 'var(--font-size-base)', lineHeight: 'var(--line-height-base)' }} className="text-foreground/70 leading-relaxed">
                  What gets measured gets managed. By quantifying human strain, we help institutions identify where pressure exists and how to address it effectively.
                </p>
              </div>
              <div className="bg-primary/10 p-8 rounded-lg border border-primary/20" style={{ padding: 'var(--space-lg)', borderRadius: 'var(--card-radius)' }}>
                <p className="font-semibold text-primary mb-4" style={{ marginBottom: 'var(--space-md)' }}>Human Risk Index (HRI)</p>
                <p style={{ fontSize: 'var(--font-size-sm)', lineHeight: 'var(--line-height-base)', marginBottom: 'var(--space-md)' }} className="text-foreground/70">
                  Measures institutional strain across key dimensions to reveal patterns and risk indicators.
                </p>
                <p style={{ fontSize: 'var(--font-size-xs)' }} className="text-foreground/60">
                  Used by organizations, universities, non-profits, and public sector institutions
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center" style={{ gap: 'var(--space-lg)' }}>
              <div className="bg-accent/10 p-8 rounded-lg border border-accent/20 order-2 md:order-1" style={{ padding: 'var(--space-lg)', borderRadius: 'var(--card-radius)' }}>
                <p className="font-semibold text-accent mb-4" style={{ marginBottom: 'var(--space-md)' }}>Integrated Support</p>
                <p style={{ fontSize: 'var(--font-size-sm)', lineHeight: 'var(--line-height-base)', marginBottom: 'var(--space-md)' }} className="text-foreground/70">
                  Combine research, practical guidance, and institutional insights in one coherent approach.
                </p>
                <p style={{ fontSize: 'var(--font-size-xs)' }} className="text-foreground/60">
                  Research informs programs. Programs generate insights. Insights drive change.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <h4 style={{ fontSize: 'var(--text-section)', lineHeight: 'var(--heading-line-height)', marginBottom: 'var(--space-md)' }} className="font-bold text-accent">Four Integrated Offerings</h4>
                <p style={{ fontSize: 'var(--font-size-base)', lineHeight: 'var(--line-height-base)', marginBottom: 'var(--space-md)' }} className="text-foreground/70 leading-relaxed">
                  Rather than offering isolated services, we provide complementary offerings that work together.
                </p>
                <ul style={{ gap: 'var(--space-sm)' }} className="space-y-2 text-sm text-foreground/70">
                  <li className="flex items-center gap-2" style={{ gap: 'var(--space-sm)' }}>
                    <ArrowRight className="w-4 h-4 text-accent flex-shrink-0" />
                    Institutional audits for organizations
                  </li>
                  <li className="flex items-center gap-2" style={{ gap: 'var(--space-sm)' }}>
                    <ArrowRight className="w-4 h-4 text-accent flex-shrink-0" />
                    Training for young professionals
                  </li>
                  <li className="flex items-center gap-2" style={{ gap: 'var(--space-sm)' }}>
                    <ArrowRight className="w-4 h-4 text-accent flex-shrink-0" />
                    Guidance for students and families
                  </li>
                  <li className="flex items-center gap-2" style={{ gap: 'var(--space-sm)' }}>
                    <ArrowRight className="w-4 h-4 text-accent flex-shrink-0" />
                    Research reports for stakeholders
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center" style={{ gap: 'var(--space-lg)' }}>
              <div>
                <h4 style={{ fontSize: 'var(--text-section)', lineHeight: 'var(--heading-line-height)', marginBottom: 'var(--space-md)' }} className="font-bold text-primary">Focus on Long-Term Systems Change</h4>
                <p style={{ fontSize: 'var(--font-size-base)', lineHeight: 'var(--line-height-base)', marginBottom: 'var(--space-md)' }} className="text-foreground/70 leading-relaxed">
                  We don&apos;t just help organizations respond to pressure—we help them build systems that prevent unnecessary strain in the first place.
                </p>
                <p style={{ fontSize: 'var(--font-size-base)', lineHeight: 'var(--line-height-base)' }} className="text-foreground/70 leading-relaxed">
                  Our insights inform policy, institutional design, and best practices that create lasting, positive change across education, work, and organizational life.
                </p>
              </div>
              <div className="bg-primary/10 p-8 rounded-lg border border-primary/20" style={{ padding: 'var(--space-lg)', borderRadius: 'var(--card-radius)' }}>
                <p className="font-semibold text-primary mb-4" style={{ marginBottom: 'var(--space-md)' }}>Long-Term Vision</p>
                <div style={{ gap: 'var(--space-sm)' }} className="space-y-3 text-sm text-foreground/70">
                  <p>• Research institute recognized for credible insights</p>
                  <p>• Human Risk Index becomes industry standard</p>
                  <p>• Students make informed, realistic decisions</p>
                  <p>• Systems designed with human wellbeing in mind</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ paddingTop: 'var(--section-padding-md)', paddingBottom: 'var(--section-padding-md)' }} className="bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 style={{ fontSize: 'var(--text-section)', lineHeight: 'var(--heading-line-height)', marginBottom: 'var(--space-lg)' }} className="font-bold text-foreground">
            Ready to Address Human Pressure in Your Institution?
          </h2>
          <p style={{ fontSize: 'var(--font-size-base)', lineHeight: 'var(--line-height-base)', marginBottom: 'var(--space-xl)' }} className="text-foreground/70 max-w-2xl mx-auto">
            Whether you&apos;re seeking insights, guidance, or partnership, Dharma is here to help.
          </p>
          <Button asChild>
            <a href="/#contact">
              Start a Conversation
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
