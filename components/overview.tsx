export default function Overview() {
  return (
    <section id="overview" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Where Direction Meets Opportunity
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            The Dharma Institute of Purpose brings together research, measurement, and practical support to help institutions and individuals thrive.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* The Challenge */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">The Challenge</h3>
            <p className="text-foreground/70 leading-relaxed">
              Across the world, individuals navigating education, careers, and institutional systems are experiencing increasing levels of pressure and uncertainty. Systems designed to enable opportunity often fail to account for the human strain placed on the individuals within them.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              Unmeasured pressures such as burnout, role misalignment, organizational stress, and lack of career clarity can significantly affect performance, wellbeing, and long-term institutional stability.
            </p>
          </div>

          {/* The Vision */}
          <div className="bg-primary/5 p-8 rounded-lg border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
            <p className="text-foreground/70 leading-relaxed mb-4">
              The Dharma Institute of Purpose seeks to become a research-driven institute dedicated to understanding the human pressures shaping modern institutions and developing insights that help reconnect systems of opportunity with the people they are meant to serve.
            </p>
            <div className="pt-4 border-t border-primary/20">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                Our Mission
              </p>
              <p className="text-foreground/70">
                To measure, interpret, and communicate human strain in ways that help organizations, educators, and policymakers build more resilient, human-centered systems.
              </p>
            </div>
          </div>
        </div>

        {/* The Approach */}
        <div className="bg-secondary p-8 md:p-12 rounded-lg">
          <h3 className="text-2xl font-bold text-foreground mb-6">Our Approach</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-accent mb-3">1</div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Measure</h4>
              <p className="text-foreground/70">
                Develop analytical frameworks that quantify human strain, including the Human Risk Index (HRI) and Student Human Risk Index.
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-3">2</div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Interpret</h4>
              <p className="text-foreground/70">
                Analyze data to reveal how human pressures influence institutional outcomes and organizational performance.
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-3">3</div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Support</h4>
              <p className="text-foreground/70">
                Provide programs and guidance that help individuals and organizations navigate transitions and build resilience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
