import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle2 } from 'lucide-react'

export default function Offerings() {
  const offerings = [
    {
      title: 'Human Risk Index (HRI) Institutional Audits',
      description: 'Comprehensive assessment of human strain within your organization',
      highlights: [
        'Institutional assessment consultations',
        'Structured surveys and data collection',
        'Facilitated workshops and discussion',
        'Leadership alignment conversations',
        'Detailed Human Risk Index Report',
      ],
      useCase: 'For: Corporations, Universities, Non-profits, Public Sector Institutions',
      audience: 'Organizational Decision-Makers',
      color: 'from-primary/10 to-primary/5',
    },
    {
      title: 'Life Gap Training Program',
      description: 'Practical skills for navigating real-world systems and adult life',
      highlights: [
        'CV writing and career strategy',
        'Administrative navigation (taxes, rentals, etc.)',
        'Personal finance and budgeting',
        'Digital profile and LinkedIn optimization',
        'Professional networking strategies',
      ],
      useCase: 'For: Recent Graduates, Young Professionals (under 35)',
      audience: 'Young Adults in Transition',
      color: 'from-accent/10 to-accent/5',
    },
    {
      title: 'Student & Parent Guidance Programs',
      description: 'Informed decision-making for education pathways',
      highlights: [
        'Labour market trend analysis',
        'Degree and career alignment guidance',
        'Tertiary institution navigation',
        'Funding and bursary information',
        'University transition support',
      ],
      useCase: 'For: Schools, Students, Parents, Families',
      audience: 'Students and Families',
      color: 'from-secondary/50 to-secondary/30',
    },
    {
      title: 'Research & Insight Reports',
      description: 'Data-driven insights shaping policy and institutional strategy',
      highlights: [
        'Human Risk Index Report',
        'Student Human Risk Index Report',
        'Workforce strain analysis',
        'Youth opportunity and career trends',
        'Institutional performance insights',
      ],
      useCase: 'For: Policymakers, Universities, Employers, Researchers',
      audience: 'Strategic Leaders',
      color: 'from-primary/5 to-background',
    },
  ]

  return (
    <section id="offerings" className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Offerings
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Four complementary services that combine research, practical support, and institutional insight.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {offerings.map((offering, index) => (
            <Card key={index} className={`border-border bg-gradient-to-br ${offering.color} hover:shadow-lg transition-shadow`}>
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <CardTitle className="text-xl text-foreground">{offering.title}</CardTitle>
                    <CardDescription className="text-foreground/60 mt-2">
                      {offering.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Highlights */}
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-foreground uppercase tracking-wider">
                    Key Components
                  </p>
                  <ul className="space-y-2">
                    {offering.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-foreground/70">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Use Case and Audience */}
                <div className="pt-4 border-t border-border/50 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                      Target Audience
                    </p>
                    <p className="text-sm text-foreground/70">{offering.audience}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">
                      Ideal For
                    </p>
                    <p className="text-sm text-foreground/70">{offering.useCase}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Integration Message */}
        <div className="mt-16 bg-primary/10 border border-primary/30 p-8 rounded-lg">
          <h3 className="text-lg font-bold text-foreground mb-2">Integrated Impact</h3>
          <p className="text-foreground/70 leading-relaxed">
            Together, these four offerings allow Dharma to combine research, practical support, and institutional insight. By addressing both systemic causes of human strain and the practical challenges individuals face, we contribute to systems that better support opportunity, resilience, and wellbeing.
          </p>
        </div>
      </div>
    </section>
  )
}
