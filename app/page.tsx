"use client";

import Image from 'next/image';
import Button from '@/components/Button';
import { testimonials, partners, scooterModels } from '../data/data';
import { ScooterCarousel } from '@/components/ScooterCardSmall';
import TestDriveModal from '@/components/TestDriveModal';
import { useState } from 'react';

const financials = [
  { label: 'Project Cost',     value: '₹10L', icon: '🏗️',  accent: '#f59e0b', sub: 'Total Investment' },
  { label: 'Own Contribution', value: '₹2L',  icon: '💼',  accent: '#34d399', sub: 'Your Stake' },
  { label: 'Bank Loan',        value: '₹8L',  icon: '🏦',  accent: '#60a5fa', sub: 'Financed Amount' },
  { label: 'Subsidy',          value: '₹4L',  icon: '🎯',  accent: '#a78bfa', sub: 'Govt. Benefit' },
];

const dealerBenefits = [
  { icon: '📊', label: 'Attractive\nDealer Margin' },
  { icon: '📣', label: 'Marketing &\nSales Support' },
  { icon: '🔧', label: 'Technical\nSupport' },
  { icon: '📦', label: 'Stock\nAvailability' },
];

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-10 overflow-hidden">

        {/* ── 1. Base dark fill ── */}
        <div className="absolute inset-0 bg-[#03060f]" />

        {/* ── 2. Hero image — pinned to right half ── */}
        <div className="absolute inset-0 max-[640px]:hidden">
          <Image
            src="/images/hero.png"
            alt="EVIX Rylton Electric Scooter"
            fill
            priority
            className="object-fit"
            style={{ objectPosition: '80% center' }}
          />
        </div>

        {/* ── 3. Left dark fade — makes text area solid dark ── */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, #03060f 0%, #03060f 35%, rgba(3,6,15,0.92) 50%, rgba(3,6,15,0.55) 65%, rgba(3,6,15,0.1) 80%, transparent 100%)',
          }}
        />

        {/* ── 4. Top & bottom fades ── */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(3,6,15,0.6) 0%, transparent 20%, transparent 75%, rgba(3,6,15,0.9) 100%)',
          }}
        />

        {/* ── 5. Green brand tint over image ── */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 55% 70% at 75% 55%, rgba(0,204,122,0.08) 0%, transparent 65%)',
          }}
        />

        {/* ── 6. Circuit / glow SVG overlay ── */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <filter id="hglow2">
              <feGaussianBlur stdDeviation="2.5" result="b"/>
              <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            <style>{`
              @keyframes hdash2  { to { stroke-dashoffset: -240; } }
              @keyframes hdashr2 { to { stroke-dashoffset:  240; } }
              @keyframes hpd2    { 0%,100%{opacity:.2;r:3px} 50%{opacity:.9;r:5px} }
              @keyframes hpd2b   { 0%,100%{opacity:.1;r:2px} 50%{opacity:.7;r:4px} }
              .hl2a { stroke-dasharray:8 18;  animation: hdash2  5s linear infinite; }
              .hl2b { stroke-dasharray:5 22;  animation: hdash2  9s linear infinite; }
              .hl2c { stroke-dasharray:8 18;  animation: hdashr2 6s linear infinite; }
              .hl2d { stroke-dasharray:3 28;  animation: hdash2 13s linear infinite; }
              .hdn1 { animation: hpd2  2.8s ease-in-out infinite; }
              .hdn2 { animation: hpd2b 2.8s ease-in-out 1.4s infinite; }
            `}</style>
          </defs>

          {/* Horizontal rails — subtle, left side stronger */}
          <line x1="0" y1="18%"  x2="55%"  y2="18%"  stroke="#00cc7a" strokeWidth="0.7" className="hl2a" filter="url(#hglow2)" opacity="0.5"/>
          <line x1="0" y1="40%"  x2="50%"  y2="40%"  stroke="#00a6a8" strokeWidth="0.5" className="hl2b" opacity="0.35"/>
          <line x1="0" y1="62%"  x2="52%"  y2="62%"  stroke="#00cc7a" strokeWidth="0.6" className="hl2c" filter="url(#hglow2)" opacity="0.4"/>
          <line x1="0" y1="80%"  x2="48%"  y2="80%"  stroke="#00a6a8" strokeWidth="0.4" className="hl2d" opacity="0.25"/>

          {/* Vertical rails — left zone only */}
          <line x1="10%"  y1="0" x2="10%"  y2="100%" stroke="#00cc7a" strokeWidth="0.5" className="hl2b" opacity="0.3"/>
          <line x1="28%"  y1="0" x2="28%"  y2="100%" stroke="#00a6a8" strokeWidth="0.4" className="hl2d" opacity="0.25"/>
          <line x1="46%"  y1="0" x2="46%"  y2="100%" stroke="#00cc7a" strokeWidth="0.5" className="hl2a" opacity="0.3"/>

          {/* L-traces */}
          <polyline points="4%,42% 12%,42% 12%,58% 22%,58%" fill="none" stroke="#00cc7a" strokeWidth="0.8" className="hl2b" opacity="0.45"/>
          <polyline points="6%,70% 16%,70% 16%,84% 30%,84%" fill="none" stroke="#00a6a8" strokeWidth="0.6" className="hl2a" opacity="0.35"/>

          {/* Node dots */}
          <circle cx="10%"  cy="18%"  r="3" fill="#00cc7a" className="hdn1"/>
          <circle cx="28%"  cy="18%"  r="3" fill="#00a6a8" className="hdn2"/>
          <circle cx="46%"  cy="18%"  r="3" fill="#00cc7a" className="hdn1"/>
          <circle cx="10%"  cy="40%"  r="3" fill="#00a6a8" className="hdn2"/>
          <circle cx="28%"  cy="40%"  r="3" fill="#00cc7a" className="hdn1"/>
          <circle cx="10%"  cy="62%"  r="3" fill="#00cc7a" className="hdn2"/>
          <circle cx="46%"  cy="62%"  r="3" fill="#00a6a8" className="hdn1"/>
          <circle cx="12%"  cy="58%"  r="2" fill="#00cc7a" className="hdn2" filter="url(#hglow2)"/>
          <circle cx="16%"  cy="84%"  r="2" fill="#00a6a8" className="hdn1"/>

          {/* Speed diagonals — subtle across full width */}
          <line x1="5%"  y1="0" x2="12%" y2="100%" stroke="#00cc7a" strokeWidth="0.3" opacity="0.15"/>
          <line x1="18%" y1="0" x2="25%" y2="100%" stroke="#00a6a8" strokeWidth="0.25" opacity="0.12"/>
          <line x1="33%" y1="0" x2="40%" y2="100%" stroke="#00cc7a" strokeWidth="0.3" opacity="0.12"/>
        </svg>

        {/* ── 7. Noise grain ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: '180px 180px',
            opacity: 0.01,
          }}
        />

        {/* ── Content ── */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="flex">
                <span className="bg-primary-500/10 border border-primary-500/30 text-primary-500 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap max-[360px]:whitespace-normal max-[360px]:text-xs max-[360px]:leading-snug">
                  ⚡ Zero Emissions • Maximum Performance
                </span>
              </div>

              <h1 className="font-display font-bold leading-[1.05] tracking-tight flex flex-col">
                <span className="text-5xl md:text-7xl uppercase font-bold">
                  <span className="bg-linear-to-r from-red-500 via-rose-500 to-orange-400 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(239,68,68,0.35)]">
                    EVIX
                  </span>{" "}
                  <span className="bg-linear-to-r from-emerald-400 via-green-400 to-green-500 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(74,222,128,0.35)]">
                    RYLTON
                  </span>
                </span>
                <span className="text-2xl md:text-3xl mt-4 text-white/90">
                  The Future of{" "}
                  <span className="bg-linear-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_22px_rgba(34,211,238,0.35)]">
                    Urban Mobility
                  </span>
                </span>
              </h1>

              <p className="text-xl text-gray-300 max-w-xl">
                Experience the revolution in sustainable transportation. Rylton electric scooters combine cutting-edge technology with eco-friendly design.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={() => setIsOpen(true)} size="lg" className="bg-linear-to-r from-[#00cc7a] to-[#00a6a8] hover:from-[#00e68a] hover:to-[#00b374] text-black font-bold cursor-pointer">
                  Book a Test Ride
                </Button>
                <Button href="/models" variant="outline" size="lg">
                  Explore Models
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-3 pt-8">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-primary-500 whitespace-nowrap">125km</div>
                  <div className="text-xs sm:text-sm text-gray-400">Max Range</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-primary-500 whitespace-nowrap">25km/h</div>
                  <div className="text-xs sm:text-sm text-gray-400">Top Speed</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-primary-500 whitespace-nowrap">3 - 4 hrs</div>
                  <div className="text-xs sm:text-sm text-gray-400">Fast Charge</div>
                </div>
              </div>
            </div>

            {/* Right col — image fills here naturally */}
            <div className="hidden lg:block" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>

      </section>

      {/* Feature Highlights */}
      <section className="py-20 bg-dark-800/50 relative max-[480px]:pt-0">
        <div className="absolute inset-0 grid-bg opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="gradient-text">Rylton</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Experience the perfect blend of performance, sustainability, and innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: 'Extended Range',
                description: 'Up to 125km on a single charge with our advanced battery technology',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Fast Charging',
                description: 'Get 80% charge in just 3 hours with our rapid charging system',
              },
              // {
              //   icon: (
              //     <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              //     </svg>
              //   ),
              //   title: '3-Year Warranty',
              //   description: 'Comprehensive warranty coverage for complete peace of mind',
              // },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Eco-Friendly',
                description: 'Zero emissions and 100% electric for a cleaner tomorrow',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="card text-center group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center text-dark-900 glow group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20 relative overflow-hidden max-[480px]:pt-0">
        <div className="absolute inset-0 bg-linear-to-b from-dark-900 via-dark-800 to-dark-900"></div>
        <div className="absolute inset-0 grid-bg opacity-30"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80"
                alt="Sustainability"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-r from-primary-500/30 to-transparent"></div>
            </div>

            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-primary-500/10 border border-primary-500/30 text-primary-500 px-4 py-2 rounded-full text-sm font-semibold">
                  🌱 Sustainability First
                </span>
              </div>
              
              <h2 className="font-display text-4xl md:text-5xl font-bold">
                Built for a{' '}
                <span className="gradient-text">Greener Future</span>
              </h2>
              
              <p className="text-gray-300 text-lg">
                Every Rylton scooter is designed with the environment in mind. Our commitment to sustainability goes beyond zero emissions – from recyclable materials to energy-efficient manufacturing.
              </p>

              <div className="space-y-4">
                {[
                  { label: 'Zero Emissions', value: '100%' },
                  { label: 'Recyclable Materials', value: '85%' },
                  { label: 'Carbon Footprint Reduction', value: '70%' },
                ].map((stat, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-dark-800/50 rounded-lg border border-dark-700">
                    <span className="text-gray-300">{stat.label}</span>
                    <span className="text-2xl font-bold text-primary-500">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ScooterCarousel scooters={scooterModels} title="Explore Our Models" />

        <section className="py-20 relative overflow-hidden max-[480px]:pt-0 max-[480px]:pb-10">
          <div className="absolute inset-0 bg-linear-to-br from-primary-500/10 to-dark-900"></div>
          <div className="absolute inset-0 grid-bg opacity-20"></div>
          
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Stay <span className="gradient-text">Connected</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Get the latest updates on new models, offers, and sustainability news
            </p>
            
            <a
              href="https://wa.me/918590418080?text=Hi%21%20I%27d%20love%20to%20know%20more%20about%20Rylton%20electric%20scooters%20%F0%9F%9B%B4%E2%9A%A1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#1ebe5d] text-black font-bold text-lg rounded-lg transition-colors duration-200 shadow-lg hover:shadow-[#25D366]/30 hover:shadow-xl"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat with us on WhatsApp
            </a>

            <p className="text-sm text-gray-500 mt-6">
              We typically reply within a few minutes 💬
            </p>
          </div>
        </section>
      <TestDriveModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}