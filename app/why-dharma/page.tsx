import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { ArrowRight, Lightbulb, Users, TrendingUp } from 'lucide-react'

export const metadata = {
  title: 'Why Dharma - Our Approach & Philosophy',
  description: 'Understand our unique approach to measuring human strain and building institutional resilience.',
}

export default function WhyDharmaPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Dharma
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl">
            A research-driven approach to understanding and addressing human pressure in modern institutions.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12">The Problem We&apos;re Solving</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <p className="text-lg text-foreground/70 leading-relaxed">
                  Across the world, individuals navigating education, careers, and institutional systems are experiencing increasing levels of pressure and uncertainty. Systems designed to enable opportunity often fail to account for the human strain placed on individuals within them.
                </p>

                <div className="bg-secondary/50 p-6 rounded-lg border-l-4 border-primary">
                  <h4 className="font-semibold text-foreground mb-3">Unmeasured Pressures</h4>
                  <ul className="space-y-2 text-sm text-foreground/70">
                    <li>• Burnout in organizational environments</li>
                    <li>• Role misalignment and career uncertainty</li>
                    <li>• Organizational stress affecting performance</li>
                    <li>• Lack of clarity in education and career decisions</li>
                    <li>• Inadequate support for life transitions</li>
                  </ul>
                </div>

                <p className="text-foreground/70 leading-relaxed">
                  These unmeasured pressures significantly affect performance, wellbeing, and long-term institutional stability—yet most organizations don&apos;t have frameworks to understand them.
                </p>
              </div>
            </div>

            <div className="bg-primary/10 p-8 rounded-lg border border-primary/20">
              <h4 className="text-lg font-bold text-primary mb-6">Current Gaps</h4>
              <div className="space-y-6">
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">❌</div>
                  <h5 className="font-semibold text-foreground mb-1">No Measurement</h5>
                  <p className="text-sm text-foreground/70">
                    Organizations measure financial metrics but rarely measure human strain
                  </p>
                </div>

                <div>
                  <div className="text-2xl font-bold text-primary mb-2">❌</div>
                  <h5 className="font-semibold text-foreground mb-1">Limited Data</h5>
                  <p className="text-sm text-foreground/70">
                    Decisions are made without understanding human pressures affecting outcomes
                  </p>
                </div>

                <div>
                  <div className="text-2xl font-bold text-primary mb-2">❌</div>
                  <h5 className="font-semibold text-foreground mb-1">Individual Focus</h5>
                  <p className="text-sm text-foreground/70">
                    Support for individuals without addressing systemic causes
                  </p>
                </div>

                <div>
                  <div className="text-2xl font-bold text-primary mb-2">❌</div>
                  <h5 className="font-semibold text-foreground mb-1">Unclear Pathways</h5>
                  <p className="text-sm text-foreground/70">
                    Students and young professionals lack guidance for major life decisions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-16 bg-secondary/30 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12">Our Unique Approach</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-background p-8 rounded-lg border border-border">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-3">Research-Driven</h4>
              <p className="text-sm text-foreground/70">
                Institutional change grounded in data and rigorous understanding of human strain patterns.
              </p>
            </div>

            <div className="bg-background p-8 rounded-lg border border-border">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-4">
                <Lightbulb className="w-6 h-6 text-accent" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-3">Systems Thinking</h4>
              <p className="text-sm text-foreground/70">
                Address both individual struggles and systemic causes for lasting change.
              </p>
            </div>

            <div className="bg-background p-8 rounded-lg border border-border">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-3">Human-Centered</h4>
              <p className="text-sm text-foreground/70">
                Every framework centers on actual human experience and what matters to people.
              </p>
            </div>

            <div className="bg-background p-8 rounded-lg border border-border">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-4">
                <ArrowRight className="w-6 h-6 text-accent" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-3">Clarity</h4>
              <p className="text-sm text-foreground/70">
                Translate research into clear, actionable insights for decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12">What Makes Us Different</h2>
          
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-2xl font-bold text-primary mb-4">Measurement Frameworks</h4>
                <p className="text-foreground/70 mb-4 leading-relaxed">
                  We develop and use analytical frameworks—like the Human Risk Index—that provide new ways for organizations and institutions to understand how human pressures influence outcomes.
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  What gets measured gets managed. By quantifying human strain, we help institutions identify where pressure exists and how to address it effectively.
                </p>
              </div>
              <div className="bg-primary/10 p-8 rounded-lg border border-primary/20">
                <p className="font-semibold text-primary mb-4">Human Risk Index (HRI)</p>
                <p className="text-sm text-foreground/70 mb-4">
                  Measures institutional strain across key dimensions to reveal patterns and risk indicators.
                </p>
                <p className="text-xs text-foreground/60">
                  Used by organizations, universities, non-profits, and public sector institutions
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-accent/10 p-8 rounded-lg border border-accent/20 order-2 md:order-1">
                <p className="font-semibold text-accent mb-4">Integrated Support</p>
                <p className="text-sm text-foreground/70 mb-4">
                  Combine research, practical guidance, and institutional insights in one coherent approach.
                </p>
                <p className="text-xs text-foreground/60">
                  Research informs programs. Programs generate insights. Insights drive change.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <h4 className="text-2xl font-bold text-accent mb-4">Four Integrated Offerings</h4>
                <p className="text-foreground/70 mb-4 leading-relaxed">
                  Rather than offering isolated services, we provide complementary offerings that work together.
                </p>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-accent flex-shrink-0" />
                    Institutional audits for organizations
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-accent flex-shrink-0" />
                    Training for young professionals
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-accent flex-shrink-0" />
                    Guidance for students and families
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-accent flex-shrink-0" />
                    Research reports for stakeholders
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-2xl font-bold text-primary mb-4">Focus on Long-Term Systems Change</h4>
                <p className="text-foreground/70 mb-4 leading-relaxed">
                  We don&apos;t just help organizations respond to pressure—we help them build systems that prevent unnecessary strain in the first place.
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  Our insights inform policy, institutional design, and best practices that create lasting, positive change across education, work, and organizational life.
                </p>
              </div>
              <div className="bg-primary/10 p-8 rounded-lg border border-primary/20">
                <p className="font-semibold text-primary mb-4">Long-Term Vision</p>
                <div className="space-y-3 text-sm text-foreground/70">
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
      <section className="py-16 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Ready to Address Human Pressure in Your Institution?
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
            Whether you&apos;re seeking insights, guidance, or partnership, Dharma is here to help.
          </p>
          <a 
            href="/#contact"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:opacity-90 transition-opacity font-semibold"
          >
            Start a Conversation
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
