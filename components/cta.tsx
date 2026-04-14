'use client'

import { useState } from 'react'
import { Mail } from 'lucide-react'

export default function CTA() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a production app, you would send this to your backend
    setSubmitted(true)
    setEmail('')
    setMessage('')
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-primary/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-lg text-foreground/60">
            Whether you&apos;re an organization seeking institutional insights, a young professional needing guidance, or a partner interested in research collaboration, we&apos;d love to hear from you.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-background p-8 md:p-12 rounded-lg border border-border shadow-lg max-w-2xl mx-auto">
          <div className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="your@email.com"
                className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={5}
                placeholder="Tell us about your needs, questions, or how we can collaborate..."
                className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold flex items-center justify-center gap-2"
              >
                <Mail size={20} />
                Send Message
              </button>
            </div>

            {submitted && (
              <div className="p-4 bg-primary/10 border border-primary/30 rounded-lg">
                <p className="text-primary font-medium text-center">
                  Thank you! We&apos;ve received your message and will be in touch soon.
                </p>
              </div>
            )}
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-sm text-foreground/60 text-center">
              Or reach out directly at <span className="font-semibold text-primary">hello@dharmaio.org</span>
            </p>
          </div>
        </form>

        {/* Quick Contact Options */}
        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          <div className="text-center">
            <h4 className="font-semibold text-foreground mb-2">Organizations</h4>
            <p className="text-sm text-foreground/60 mb-3">Learn about institutional audits and research partnerships</p>
            <a href="#" className="text-primary hover:text-accent transition-colors font-medium text-sm">
              Schedule a Consultation →
            </a>
          </div>
          <div className="text-center">
            <h4 className="font-semibold text-foreground mb-2">Students & Families</h4>
            <p className="text-sm text-foreground/60 mb-3">Explore guidance programs and education support</p>
            <a href="#" className="text-primary hover:text-accent transition-colors font-medium text-sm">
              Learn More →
            </a>
          </div>
          <div className="text-center">
            <h4 className="font-semibold text-foreground mb-2">Young Professionals</h4>
            <p className="text-sm text-foreground/60 mb-3">Discover Life Gap Training opportunities</p>
            <a href="#" className="text-primary hover:text-accent transition-colors font-medium text-sm">
              Get Started →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
