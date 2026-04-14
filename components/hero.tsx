export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-primary/5 to-background py-20 md:py-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Understanding Human Pressure in Modern Systems
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/70 mb-8 leading-relaxed">
            Dharma Institute of Purpose is a research-driven organization dedicated to measuring and addressing the human strain that shapes institutional outcomes. We help organizations, educators, and policymakers reconnect systems with the people they serve.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:opacity-90 transition-opacity font-semibold text-center"
            >
              Start a Conversation
            </a>
            <a 
              href="#offerings"
              className="inline-block border-2 border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary/5 transition-colors font-semibold text-center"
            >
              Explore Our Work
            </a>
          </div>

          <div className="mt-16 pt-12 border-t border-border">
            <p className="text-sm text-foreground/60 uppercase tracking-widest mb-8">
              Our Focus Areas
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
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
