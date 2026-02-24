'use client';

import Link from 'next/link';
import { useState } from 'react';

function SupportModal({ isOpen, onClose, linkLabel }: { isOpen: boolean; onClose: () => void; linkLabel: string }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-dark-900 border border-dark-700 rounded-2xl p-8 max-w-md w-full shadow-2xl"
        style={{ boxShadow: '0 0 60px rgba(var(--primary-rgb, 99,102,241), 0.15)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow accent */}
        <div className="absolute -top-px left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent" />

        {/* Icon */}
        <div className="w-14 h-14 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
          <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </div>

        <h2 className="font-display text-2xl font-bold text-white text-center mb-2">
          Coming Soon
        </h2>
        <p className="text-primary-400 text-center text-sm font-medium mb-4">
          {linkLabel}
        </p>
        <p className="text-gray-400 text-center text-sm leading-relaxed mb-8">
          We're working hard to bring this page to life. Check back soon for updates, or reach out to us directly in the meantime.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/contact"
            onClick={onClose}
            className="flex-1 text-center py-2.5 px-4 rounded-lg border border-dark-700 bg-linear-to-r from-primary-500 to-primary-600 text-white text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Contact Us
          </Link>
          <button
            onClick={onClose}
            className="flex-1 py-2.5 px-4 rounded-lg border border-dark-700 text-gray-400 text-sm font-semibold hover:border-primary-500 hover:text-primary-500 transition-all duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [modal, setModal] = useState({ open: false, label: '' });

  const footerLinks = {
    product: [
      { label: 'All Models', href: '/models' },
      { label: 'Atom', href: '/models/Atom' },
      { label: 'Atom Pro', href: '/models/atom-pro' },
      { label: 'Electro', href: '/models/electro' },
    ],
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Careers', href: '/careers' },
      { label: 'Press', href: '/press' },
    ],
    support: [
      { label: 'Help Center' },
      { label: 'Service Centers' },
      { label: 'Warranty' },
      { label: 'FAQ' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
    ],
  };

  return (
    <>
      <SupportModal
        isOpen={modal.open}
        onClose={() => setModal({ open: false, label: '' })}
        linkLabel={modal.label}
      />

      <footer className="bg-dark-900 border-t border-dark-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 grid-bg opacity-30"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center space-x-3 mb-6 group">
                  <span className="font-display text-3xl font-bold gradient-text">RYLTON</span>
                </Link>
              <p className="text-gray-400 mb-6 max-w-sm">
                Pioneering the future of urban mobility with cutting-edge electric scooters. Zero emissions, maximum performance.
              </p>
              <div className="flex space-x-2 items-center">
                <span className='text-gray-400'>
                  Connect with Us in
                </span>
               <a
                href="https://wa.me/918590418080"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-[#25D366] text-gray-400 hover:text-white transition-all duration-200 group"
              > 
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="font-display text-sm font-bold text-white mb-4 uppercase tracking-wider">Product</h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-gray-400 hover:text-primary-500 transition-colors text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-display text-sm font-bold text-white mb-4 uppercase tracking-wider">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-gray-400 hover:text-primary-500 transition-colors text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links — trigger modal */}
            <div>
              <h3 className="font-display text-sm font-bold text-white mb-4 uppercase tracking-wider">Support</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => setModal({ open: true, label: link.label })}
                      className="text-gray-400 hover:text-primary-500 transition-colors text-sm cursor-pointer"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 pt-8 border-t border-dark-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">© {currentYear} Rylton Mobility. All rights reserved.</p>
            <div className="flex space-x-6">
              {footerLinks.legal.map((link) => (
                <Link key={link.label} href={link.href} className="text-gray-500 hover:text-primary-500 transition-colors text-sm">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}