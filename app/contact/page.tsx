'use client';

import { useState } from 'react';
import Button from '@/components/Button';
import emailjs from '@emailjs/browser';
import TestDriveModal from '@/components/TestDriveModal';

const EMAILJS_SERVICE_ID  = 'service_82xa2xa';   
const EMAILJS_TEMPLATE_ID = 'template_kkg0fnq';  
const EMAILJS_PUBLIC_KEY  = 'Sn6fCSS-PuqXf1Vv_'; 

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          city: formData.city,
          message: formData.message,
          to_email: 'rylton89@gmail.com',
        },
        EMAILJS_PUBLIC_KEY
      );

      setFormStatus('success');
      setFormData({ name: '', email: '', phone: '', city: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 3000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 4000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900"></div>
        <div className="absolute inset-0 grid-bg opacity-30"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6">
            <span className="bg-primary-500/10 border border-primary-500/30 text-primary-500 px-4 py-2 rounded-full text-sm font-semibold">
              📧 Get in Touch
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
            Contact <span className="gradient-text">Us</span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions about our electric scooters? Want to schedule a test ride? We're here to help!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-3xl font-bold mb-6">
                  Let's <span className="gradient-text">Connect</span>
                </h2>
                <p className="text-gray-300 text-lg mb-8">
                  Whether you're interested in our products, have questions about electric mobility, or want to join our mission, we'd love to hear from you.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {/* Phone Card — clickable tel: link */}
                <a
                  href="tel:+918590418080"
                  className="card flex items-start space-x-4 !p-6 group hover:border-primary-500/50 transition-all duration-300 cursor-pointer block"
                >
                  <div className="w-12 h-12 rounded-lg bg-linear-to-br from-primary-500 to-primary-600 flex items-center justify-center text-dark-900 flex-shrink-0 glow group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display font-bold mb-1 group-hover:text-primary-500 transition-colors">Phone</h3>
                    <p className="text-gray-300 group-hover:text-primary-400 transition-colors">+91 8590418080</p>
                    <p className="text-sm text-gray-500 mt-1">Mon-Sat, 9 AM - 6 PM IST · Tap to call</p>
                  </div>
                </a>

                {/* Email Card — clickable mailto: link */}
                <a
                  href="mailto:rylton89@gmail.com"
                  className="card flex items-start space-x-4 !p-6 group hover:border-primary-500/50 transition-all duration-300 cursor-pointer block"
                >
                  <div className="w-12 h-12 rounded-lg bg-linear-to-br from-primary-500 to-primary-600 flex items-center justify-center text-dark-900 flex-shrink-0 glow group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display font-bold mb-1 group-hover:text-primary-500 transition-colors">Email</h3>
                    <p className="text-gray-300 group-hover:text-primary-400 transition-colors">rylton89@gmail.com</p>
                    <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours · Tap to email</p>
                  </div>
                </a>

                {/* Address Card — not clickable */}
                <div className="card flex items-start space-x-4 !p-6">
                  <div className="w-12 h-12 rounded-lg bg-linear-to-br from-primary-500 to-primary-600 flex items-center justify-center text-dark-900 flex-shrink-0 glow">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display font-bold mb-1">Headquarters</h3>
                    <p className="text-gray-300">EVIX</p>
                    <p className="text-sm text-gray-400 mt-1 leading-relaxed">
                      Riders Hub, Chettumkuzhi<br />
                      Vidyanagar, Kasaragod<br />
                      Kerala – 671123, India
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Contact Form */}
            <div className="card !p-8">
              <h2 className="font-display text-2xl font-bold mb-6">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name *</label>
                  <input
                    type="text" id="name" name="name" required
                    value={formData.name} onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg focus:outline-none focus:border-primary-500 text-white transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address *</label>
                  <input
                    type="email" id="email" name="email" required
                    value={formData.email} onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg focus:outline-none focus:border-primary-500 text-white transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number *</label>
                  <input
                    type="tel" id="phone" name="phone" required
                    value={formData.phone} onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg focus:outline-none focus:border-primary-500 text-white transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>

                {/* City */}
                <div>
                  <label htmlFor="city" className="block text-sm font-medium mb-2">City *</label>
                  <input
                    type="text" id="city" name="city" required
                    value={formData.city} onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg focus:outline-none focus:border-primary-500 text-white transition-colors"
                    placeholder="Bangalore"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message *</label>
                  <textarea
                    id="message" name="message" required rows={5}
                    value={formData.message} onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg focus:outline-none focus:border-primary-500 text-white transition-colors resize-none"
                    placeholder="Tell us what you're interested in..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full btn-primary cursor-pointer"
                  disabled={formStatus === 'submitting'}
                >
                  {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                </Button>

                {/* Success Message */}
                {formStatus === 'success' && (
                  <div className="bg-primary-500/10 border border-primary-500/30 rounded-lg p-4 text-center">
                    <p className="text-primary-500 font-semibold">
                      ✓ Message sent successfully! We'll get back to you soon.
                    </p>
                  </div>
                )}

                {/* Error Message */}
                {formStatus === 'error' && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-center">
                    <p className="text-red-400 font-semibold">
                      ✗ Something went wrong. Please try again or email us directly.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-primary-500/10 to-dark-900 relative">
        <div className="absolute inset-0 grid-bg opacity-20"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="gradient-text">Go Electric?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Visit our showroom for a test ride and experience the future of mobility
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/models" size="lg" variant="outline">
              View All Models
            </Button>
            <Button onClick={() => setIsOpen(true)}  variant="outline" size="lg"
              className="bg-linear-to-r from-[#f59e0b] to-[#fbbf24] hover:from-[#f7b733] hover:to-[#b98e0a] text-black font-extrabold cursor-pointer"
            >
              Schedule Test Ride
            </Button>
          </div>
        </div>
      </section>
      <TestDriveModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}