import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-border">
          <div className="max-w-6xl mx-auto px-4 py-20">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Dharma Pathways
            </h1>
            <p className="text-xl text-muted-foreground">
              Research-driven guidance for clearer, safer, and more affordable educational decisions.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="border-b border-border">
          <div className="max-w-6xl mx-auto px-4 py-20">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We believe that education is a transformative investment—but only when it&apos;s
                  made with confidence, clarity, and a full understanding of the real costs and
                  options involved. Too many students and families make decisions without adequate
                  information, leading to regret, debt, and underutilized degrees.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
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
        <section className="border-b border-border">
          <div className="max-w-6xl mx-auto px-4 py-20">
            <h2 className="text-3xl font-bold text-foreground mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
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
                >
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="border-b border-border">
          <div className="max-w-6xl mx-auto px-4 py-20">
            <h2 className="text-3xl font-bold text-foreground mb-12">Our Approach</h2>
            <div className="space-y-8">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Step 1: Understand Pressure
                </h3>
                <p className="text-muted-foreground">
                  We help you honestly assess your real affordability pressure—your household
                  income, expenses, dependents, and existing debt. Many families are in the
                  &quot;missing middle&quot; where income looks sufficient but pressure is very real.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Step 2: Calculate True Cost
                </h3>
                <p className="text-muted-foreground">
                  Education costs far more than tuition. We help you account for accommodation,
                  food, transport, devices, data, and all hidden expenses. Only then can you
                  know if a path is truly affordable.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Step 3: Compare Routes Safely
                </h3>
                <p className="text-muted-foreground">
                  Different education pathways carry different risks and rewards. We help you
                  compare cost, duration, support availability, and outcome certainty so you can
                  identify the safest option for your situation.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
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
        <section className="border-b border-border">
          <div className="max-w-6xl mx-auto px-4 py-20">
            <div className="bg-card border border-border rounded-lg p-12 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Ready to Make a Confident Decision?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Start your guided decision journey today and gain clarity on your education and
                career path.
              </p>
              <Link
                href="/start"
                className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:opacity-90 transition-opacity font-medium text-lg"
              >
                Begin Your Journey
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
