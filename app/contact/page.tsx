'use client';

import { useState } from 'react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setShowModal(true);
    }
  };

  const handleContinueBooking = () => {
    setShowModal(false);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const handleCancelBooking = () => {
    setShowModal(false);
  };

  const handleEscapeKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleCancelBooking();
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-1">
        <div className="max-w-2xl mx-auto px-4 py-20">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Book a Guidance Session
            </h1>
            <p className="text-lg text-muted-foreground">
              Connect with our advisors to discuss your journey and get personalized recommendations.
            </p>
          </div>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
              <p className="text-lg font-semibold text-green-900 mb-2">
                Thank you for your interest!
              </p>
              <p className="text-green-800">
                We've received your booking request. Our team will contact you within 24 hours to confirm your session.
              </p>
              <Link
                href="/"
                className="inline-block mt-6 text-green-700 font-medium hover:underline"
              >
                Return to Home
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-8 space-y-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none h-32"
                  placeholder="Tell us about your situation and what you'd like to discuss..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold text-lg"
              >
                Book Session
              </button>

              <p className="text-sm text-center text-muted-foreground">
                We typically respond within 24 hours. Sessions are available online or by phone.
              </p>
            </form>
          )}
        </div>
      </main>

      {/* Contribution Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={handleCancelBooking}
          onKeyDown={handleEscapeKey}
          role="dialog"
          aria-labelledby="modal-title"
          aria-modal="true"
        >
          <div
            className="bg-background border border-border rounded-lg max-w-md w-full p-8 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h2
              id="modal-title"
              className="text-2xl font-bold text-foreground mb-4"
            >
              Contribution required
            </h2>
            <p className="text-muted-foreground mb-8">
              To book a session, you need to make a contribution of R75.
            </p>

            <div className="flex gap-3">
              <button
                onClick={handleContinueBooking}
                className="flex-1 bg-primary text-primary-foreground py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold"
                aria-label="Continue with booking"
              >
                Continue
              </button>
              <button
                onClick={handleCancelBooking}
                className="flex-1 border border-border text-foreground py-3 rounded-lg hover:bg-card transition-colors font-semibold"
                aria-label="Cancel booking"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
