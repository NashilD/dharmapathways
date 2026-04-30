import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { CheckCircle2, Users, BookOpen, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Solutions - Dharma Institute of Purpose',
  description: 'Explore Dharma&apos;s four core offerings: HRI Audits, Life Gap Training, Student Guidance, and Research Reports.',
}

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <section style={{ paddingTop: 'var(--section-padding-lg)', paddingBottom: 'var(--section-padding-lg)' }} className="bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 style={{ fontSize: 'var(--text-hero)', lineHeight: 'var(--heading-line-height)', marginBottom: 'var(--space-lg)' }} className="font-bold text-foreground">
            Our Solutions
          </h1>
          <p style={{ fontSize: 'var(--text-lead)', lineHeight: 'var(--line-height-base)' }} className="text-foreground/70 max-w-2xl">
            Four complementary offerings that measure human strain, provide practical support, and generate institutional insights.
          </p>
        </div>
      </section>

      {/* Solution 1: HRI Audits */}
      <section style={{ paddingTop: 'var(--section-padding-lg)', paddingBottom: 'var(--section-padding-lg)' }} className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center" style={{ gap: 'var(--space-xl)' }}>
            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-6" style={{ marginBottom: 'var(--space-lg)' }}>
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h2 style={{ fontSize: 'var(--text-section)', lineHeight: 'var(--heading-line-height)', marginBottom: 'var(--space-md)' }} className="font-bold text-foreground">
                Human Risk Index (HRI) Institutional Audits
              </h2>
              <p style={{ fontSize: 'var(--font-size-base)', lineHeight: 'var(--line-height-base)', marginBottom: 'var(--space-lg)' }} className="text-foreground/70 leading-relaxed">
                Comprehensive assessment designed to measure the level and impact of human strain within an organization. The HRI Audit process includes institutional assessment consultations, structured surveys, facilitated workshops, and leadership discussions.
              </p>
              
              <h4 className="font-semibold text-foreground mb-4" style={{ marginBottom: 'var(--space-md)' }}>What&apos;s Included</h4>
              <ul style={{ gap: 'var(--space-sm)', marginBottom: 'var(--space-lg)' }} className="space-y-3 mb-8">
                {[
                  'Institutional assessment consultations with key stakeholders',
                  'Structured surveys measuring human strain indicators',
                  'Facilitated workshops for data interpretation',
                  'Leadership alignment discussions',
                  'Comprehensive Human Risk Index Report',
                  'Practical recommendations for improvement',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground/70" style={{ gap: 'var(--space-sm)' }}>
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h4 className="font-semibold text-foreground mb-4" style={{ marginBottom: 'var(--space-md)' }}>Ideal For</h4>
              <p style={{ fontSize: 'var(--font-size-base)', lineHeight: 'var(--line-height-base)', marginBottom: 'var(--space-lg)' }} className="text-foreground/70">
                Corporations, Universities, Non-profit Organizations, and Public Sector Institutions seeking to understand and improve human wellbeing and organizational resilience.
              </p>

              <Button>
                Schedule a Consultation
              </Button>
            </div>

            <div className="bg-primary/10 p-8 rounded-lg border border-primary/20" style={{ padding: 'var(--space-lg)', borderRadius: 'var(--card-radius)' }}>
              <h4 className="font-semibold text-foreground mb-6" style={{ marginBottom: 'var(--space-lg)' }}>Key Benefits</h4>
              <div style={{ gap: 'var(--space-lg)' }} className="space-y-6">
                <div>
                  <div className="font-bold text-primary text-lg mb-1" style={{ marginBottom: 'var(--space-xs)' }}>Measure</div>
                  <p style={{ fontSize: 'var(--font-size-base)' }} className="text-foreground/70">
                    Quantify human strain and understand its impact on performance
                  </p>
                </div>
                <div>
                  <div className="font-bold text-primary text-lg mb-1" style={{ marginBottom: 'var(--space-xs)' }}>Understand</div>
                  <p style={{ fontSize: 'var(--font-size-base)' }} className="text-foreground/70">
                    Identify strain patterns and risk indicators specific to your organization
                  </p>
                </div>
                <div>
                  <div className="font-bold text-primary text-lg mb-1" style={{ marginBottom: 'var(--space-xs)' }}>Improve</div>
                  <p style={{ fontSize: 'var(--font-size-base)' }} className="text-foreground/70">
                    Receive practical recommendations for building institutional resilience
                  </p>
                </div>
                <div>
                  <div className="font-bold text-primary text-lg mb-1" style={{ marginBottom: 'var(--space-xs)' }}>Track</div>
                  <p style={{ fontSize: 'var(--font-size-base)' }} className="text-foreground/70">
                    Monitor progress over time with repeated audit cycles
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution 2: Life Gap Training */}
      <section style={{ paddingTop: 'var(--section-padding-lg)', paddingBottom: 'var(--section-padding-lg)' }} className="bg-secondary/30 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center" style={{ gap: 'var(--space-xl)' }}>
            <div className="bg-accent/10 p-8 rounded-lg border border-accent/20 order-2 md:order-1" style={{ padding: 'var(--space-lg)', borderRadius: 'var(--card-radius)' }}>
              <h4 className="font-semibold text-foreground mb-6" style={{ marginBottom: 'var(--space-lg)' }}>What You&apos;ll Learn</h4>
              <div style={{ gap: 'var(--space-lg)' }} className="space-y-6">
                <div>
                  <div className="font-bold text-accent text-lg mb-1" style={{ marginBottom: 'var(--space-xs)' }}>Career Skills</div>
                  <p style={{ fontSize: 'var(--font-size-base)' }} className="text-foreground/70">
                    CV writing, job search strategies, and professional networking
                  </p>
                </div>
                <div>
                  <div className="font-bold text-accent text-lg mb-1" style={{ marginBottom: 'var(--space-xs)' }}>Life Navigation</div>
                  <p style={{ fontSize: 'var(--font-size-base)' }} className="text-foreground/70">
                    Tax registration, rental agreements, and administrative systems
                  </p>
                </div>
                <div>
                  <div className="font-bold text-accent text-lg mb-1" style={{ marginBottom: 'var(--space-xs)' }}>Financial Literacy</div>
                  <p style={{ fontSize: 'var(--font-size-base)' }} className="text-foreground/70">
                    Budget building, personal finance basics, and money management
                  </p>
                </div>
                <div>
                  <div className="font-bold text-accent text-lg mb-1" style={{ marginBottom: 'var(--space-xs)' }}>Digital Presence</div>
                  <p style={{ fontSize: 'var(--font-size-base)' }} className="text-foreground/70">
                    LinkedIn optimization, digital profile development, and online branding
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-6" style={{ marginBottom: 'var(--space-lg)' }}>
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h2 style={{ fontSize: 'var(--text-section)', lineHeight: 'var(--heading-line-height)', marginBottom: 'var(--space-md)' }} className="font-bold text-foreground">
                Life Gap Training Program
              </h2>
              <p style={{ fontSize: 'var(--font-size-base)', lineHeight: 'var(--line-height-base)', marginBottom: 'var(--space-lg)' }} className="text-foreground/70 leading-relaxed">
                Many young people graduate from school or university without practical knowledge needed to navigate real-world systems. Our Life Gap Training Program provides workshops designed to equip young adults with essential life navigation skills.
              </p>
              
              <h4 className="font-semibold text-foreground mb-4" style={{ marginBottom: 'var(--space-md)' }}>Program Details</h4>
              <ul style={{ gap: 'var(--space-sm)', marginBottom: 'var(--space-lg)' }} className="space-y-3 mb-8">
                {[
                  'CV writing and career strategy workshops',
                  'Administrative systems navigation training',
                  'Personal finance and budgeting workshops',
                  'Digital profile and LinkedIn optimization',
                  'Professional networking and communication skills',
                  'Interactive, hands-on learning approach',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground/70" style={{ gap: 'var(--space-sm)' }}>
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h4 className="font-semibold text-foreground mb-4" style={{ marginBottom: 'var(--space-md)' }}>Who Should Attend</h4>
              <p style={{ fontSize: 'var(--font-size-base)', lineHeight: 'var(--line-height-base)', marginBottom: 'var(--space-lg)' }} className="text-foreground/70">
                Recent graduates and young professionals under age 35 who are bridging the gap between formal education and the realities of adult and professional life.
              </p>

              <Button>
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solution 3: Student Guidance */}
      <section style={{ paddingTop: 'var(--section-padding-lg)', paddingBottom: 'var(--section-padding-lg)' }} className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center" style={{ gap: 'var(--space-xl)' }}>
            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-6" style={{ marginBottom: 'var(--space-lg)' }}>
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h2 style={{ fontSize: 'var(--text-section)', lineHeight: 'var(--heading-line-height)', marginBottom: 'var(--space-md)' }} className="font-bold text-foreground">
                Student & Parent Guidance Programs
              </h2>
              <p style={{ fontSize: 'var(--font-size-base)', lineHeight: 'var(--line-height-base)', marginBottom: 'var(--space-lg)' }} className="text-foreground/70 leading-relaxed">
                Students and families often make critical education decisions without clear information about labour market trends, degree opportunities, funding options, and the true cost of university education. Our guidance programs provide clear information and decision support.
              </p>
              
              <h4 className="font-semibold text-foreground mb-4" style={{ marginBottom: 'var(--space-md)' }}>For Students</h4>
              <ul style={{ gap: 'var(--space-sm)', marginBottom: 'var(--space-lg)' }} className="space-y-2 mb-8 text-sm text-foreground/70">
                {[
                  'Labour market trends and career opportunities',
                  'Degree and career alignment analysis',
                  'Understanding different tertiary institutions',
                  'Bursary and funding application guidance',
                  'University transition and adaptation support',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2" style={{ gap: 'var(--space-sm)' }}>
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h4 className="font-semibold text-foreground mb-4" style={{ marginBottom: 'var(--space-md)' }}>For Parents</h4>
              <ul style={{ gap: 'var(--space-sm)', marginBottom: 'var(--space-lg)' }} className="space-y-2 mb-8 text-sm text-foreground/70">
                {[
                  'Understanding the full financial cost of university',
                  'Navigating student funding and loan options',
                  'Recognizing oversaturated degree pathways',
                  'Understanding different institution types',
                  'Supporting your child through education transitions',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2" style={{ gap: 'var(--space-sm)' }}>
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Button>
                Explore Options
              </Button>
            </div>

            <div className="bg-primary/5 p-8 rounded-lg border border-primary/20" style={{ padding: 'var(--space-lg)', borderRadius: 'var(--card-radius)' }}>
              <h4 className="font-semibold text-foreground mb-6" style={{ marginBottom: 'var(--space-lg)' }}>Program Goals</h4>
              <div style={{ gap: 'var(--space-lg)' }} className="space-y-6">
                <div>
                  <div className="font-bold text-primary text-lg mb-2" style={{ marginBottom: 'var(--space-xs)' }}>Clarity</div>
                  <p style={{ fontSize: 'var(--font-size-base)' }} className="text-foreground/70">
                    Clear information about costs, career pathways, and realistic outcomes
                  </p>
                </div>
                <div>
                  <div className="font-bold text-primary text-lg mb-2" style={{ marginBottom: 'var(--space-xs)' }}>Confidence</div>
                  <p style={{ fontSize: 'var(--font-size-base)' }} className="text-foreground/70">
                    Evidence-based decision-making that aligns with student goals and family circumstances
                  </p>
                </div>
                <div>
                  <div className="font-bold text-primary text-lg mb-2" style={{ marginBottom: 'var(--space-xs)' }}>Affordability</div>
                  <p style={{ fontSize: 'var(--font-size-base)' }} className="text-foreground/70">
                    Understanding realistic costs and identifying sustainable pathways
                  </p>
                </div>
                <div>
                  <div className="font-bold text-primary text-lg mb-2" style={{ marginBottom: 'var(--space-xs)' }}>Support</div>
                  <p style={{ fontSize: 'var(--font-size-base)' }} className="text-foreground/70">
                    Guidance through applications, transitions, and ongoing challenges
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution 4: Research Reports */}
      <section style={{ paddingTop: 'var(--section-padding-lg)', paddingBottom: 'var(--section-padding-lg)' }} className="bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center" style={{ gap: 'var(--space-xl)' }}>
            <div className="bg-accent/10 p-8 rounded-lg border border-accent/20" style={{ padding: 'var(--space-lg)', borderRadius: 'var(--card-radius)' }}>
              <h4 className="font-semibold text-foreground mb-6" style={{ marginBottom: 'var(--space-lg)' }}>Key Research Areas</h4>
              <div style={{ gap: 'var(--space-lg)' }} className="space-y-6">
                <div>
                  <div className="font-bold text-accent mb-1" style={{ marginBottom: 'var(--space-xs)' }}>Workforce Strain</div>
                  <p style={{ fontSize: 'var(--font-size-base)' }} className="text-foreground/70">
                    Analysis of burnout, stress, and wellbeing in modern workplaces
                  </p>
                </div>
                <div>
                  <div className="font-bold text-accent mb-1" style={{ marginBottom: 'var(--space-xs)' }}>Education Systems</div>
                  <p style={{ fontSize: 'var(--font-size-base)' }} className="text-foreground/70">
                    Understanding pressures on students, parents, and educators
                  </p>
                </div>
                <div>
                  <div className="font-bold text-accent mb-1" style={{ marginBottom: 'var(--space-xs)' }}>Youth Pathways</div>
                  <p style={{ fontSize: 'var(--font-size-base)' }} className="text-foreground/70">
                    Career transitions and opportunity access for young professionals
                  </p>
                </div>
                <div>
                  <div className="font-bold text-accent mb-1" style={{ marginBottom: 'var(--space-xs)' }}>Institutional Design</div>
                  <p style={{ fontSize: 'var(--font-size-base)' }} className="text-foreground/70">
                    How organizational structure affects human wellbeing and outcomes
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-6" style={{ marginBottom: 'var(--space-lg)' }}>
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <h2 style={{ fontSize: 'var(--text-section)', lineHeight: 'var(--heading-line-height)', marginBottom: 'var(--space-md)' }} className="font-bold text-foreground">
                Research & Insight Reports
              </h2>
              <p style={{ fontSize: 'var(--font-size-base)', lineHeight: 'var(--line-height-base)', marginBottom: 'var(--space-lg)' }} className="text-foreground/70 leading-relaxed">
                Many decisions about education systems, workforce development, and institutional design are made without sufficient understanding of the human pressures affecting individuals within those systems. Our research reports provide credible, data-driven insights.
              </p>
              
              <h4 className="font-semibold text-foreground mb-4" style={{ marginBottom: 'var(--space-md)' }}>Report Types</h4>
              <ul style={{ gap: 'var(--space-sm)', marginBottom: 'var(--space-lg)' }} className="space-y-3 mb-8">
                {[
                  'Human Risk Index Report - measuring organizational strain',
                  'Student Human Risk Index Report - education sector analysis',
                  'Workforce Strain Analysis - employment and career pressures',
                  'Youth Opportunity Insights - career pathway trends',
                  'Institutional Performance Reports - custom organizational analysis',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground/70" style={{ gap: 'var(--space-sm)' }}>
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h4 className="font-semibold text-foreground mb-4" style={{ marginBottom: 'var(--space-md)' }}>Used By</h4>
              <p style={{ fontSize: 'var(--font-size-base)', lineHeight: 'var(--line-height-base)', marginBottom: 'var(--space-lg)' }} className="text-foreground/70">
                Policymakers, universities, employers, researchers, and institutional leaders seeking evidence-based insights for strategic decision-making.
              </p>

              <Button>
                Request a Report
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
