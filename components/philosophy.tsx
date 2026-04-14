export default function Philosophy() {
  return (
    <section id="philosophy" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Philosophy and Approach
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl">
            Built on research, clarity, and commitment to human wellbeing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Core Values */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-foreground">Core Philosophy</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-primary mb-2">Research-Driven</h4>
                <p className="text-foreground/70">
                  We believe institutional change must be grounded in data and understanding. Our frameworks like the Human Risk Index provide measurable ways to identify where human pressure exists and how it affects outcomes.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-primary mb-2">Systems Thinking</h4>
                <p className="text-foreground/70">
                  We address both individual struggles and systemic causes. Real change happens when individuals have practical support AND when institutions are designed with human strain in mind.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-primary mb-2">Human-Centered</h4>
                <p className="text-foreground/70">
                  Every framework, program, and recommendation centers on actual human experience. We measure what matters to people, not just what is easy to measure.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-primary mb-2">Clarity Over Complexity</h4>
                <p className="text-foreground/70">
                  We translate research into clear, actionable insights that help organizations and individuals make informed decisions.
                </p>
              </div>
            </div>
          </div>

          {/* What Success Looks Like */}
          <div className="bg-primary/5 p-8 rounded-lg border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-6">What Success Looks Like</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="text-2xl font-bold text-accent flex-shrink-0">✓</div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Recognized Research Institute</h4>
                  <p className="text-sm text-foreground/70">
                    The Dharma Institute becomes a credible source for research on education, human wellbeing, and institutional design.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-2xl font-bold text-accent flex-shrink-0">✓</div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Widely Used Frameworks</h4>
                  <p className="text-sm text-foreground/70">
                    The Human Risk Index becomes an industry standard that organizations use to understand and improve wellbeing.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-2xl font-bold text-accent flex-shrink-0">✓</div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Improved Life Transitions</h4>
                  <p className="text-sm text-foreground/70">
                    Students and young professionals have clearer guidance navigating education and career decisions.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-2xl font-bold text-accent flex-shrink-0">✓</div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Systemic Change</h4>
                  <p className="text-sm text-foreground/70">
                    Our insights inform policy and institutional design, leading to systems that better support opportunity and resilience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership */}
        <div className="bg-secondary/50 p-8 md:p-12 rounded-lg">
          <h3 className="text-2xl font-bold text-foreground mb-8">Leadership</h3>
          <p className="text-foreground/70 mb-8 leading-relaxed">
            The Dharma Institute of Purpose is led by a distinguished founding board bringing expertise in research, strategy, education, health, and governance.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-background p-6 rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-1">Shaylin Sing</h4>
              <p className="text-sm text-primary font-medium">Chair & Executive Director</p>
            </div>
            <div className="bg-background p-6 rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-1">Urvashi Dayanand</h4>
              <p className="text-sm text-primary font-medium">Co-Founder & Director</p>
            </div>
            <div className="bg-background p-6 rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-1">Kenny Yu Yuan Chiu</h4>
              <p className="text-sm text-primary font-medium">Director: Strategy & Governance</p>
            </div>
            <div className="bg-background p-6 rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-1">Nishani Gounder</h4>
              <p className="text-sm text-primary font-medium">Director & Treasurer</p>
            </div>
            <div className="bg-background p-6 rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-1">Juanita Rea</h4>
              <p className="text-sm text-primary font-medium">Independent Director: Education & Research</p>
            </div>
            <div className="bg-background p-6 rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-1">Dr. Devorah Wineberg</h4>
              <p className="text-sm text-primary font-medium">Independent Director: Health & Scientific Development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
