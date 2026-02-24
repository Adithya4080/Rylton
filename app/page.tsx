"use client";

import Image from 'next/image';
import Button from '@/components/Button';
import { testimonials, partners, scooterModels } from '../data/data';
import { ScooterCarousel } from '@/components/ScooterCardSmall';
import TestDriveModal from '@/components/TestDriveModal';
import { useState } from 'react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-10 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900"></div>
        <div className="absolute inset-0 grid-bg"></div>
        <div className="absolute inset-0 noise-bg"></div>
        
        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl animate-pulse-slow delay-500"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="inline-block">
                <span className="bg-primary-500/10 border border-primary-500/30 text-primary-500 px-4 py-2 rounded-full text-sm font-semibold">
                  ⚡ Zero Emissions • Maximum Performance
                </span>
              </div>
              
              <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight">
                The Future of{' '}
                  <span             
                    style={{
                      background: "linear-gradient(90deg, #22D3EE, #4ADE80)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}>
                      Urban Mobility
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

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div>
                  <div className="text-3xl font-bold text-primary-500">125km</div>
                  <div className="text-sm text-gray-400">Max Range</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-500">25km/h</div>
                  <div className="text-sm text-gray-400">Top Speed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-500">3 - 4 hrs</div>
                  <div className="text-sm text-gray-400">Fast Charge</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-[600px] animate-slide-in-right">
              <div className="absolute inset-0 bg-linear-to-br from-primary-500/20 to-transparent rounded-3xl blur-2xl"></div>
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"
                alt="Rylton Electric Scooter"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
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
      <section className="py-20 bg-dark-800/50 relative">
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
      <section className="py-20 relative overflow-hidden">
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

      {/* Testimonials */}
      {/* <section className="py-20 bg-dark-800/30 relative">
        <div className="absolute inset-0 grid-bg opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              What Our <span className="gradient-text">Riders Say</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Join thousands of satisfied customers making the switch to electric
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial:any, index:any) => (
              <div
                key={testimonial.id}
                className="card animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full border-2 border-primary-500"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-primary-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <p className="text-gray-300">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Partners/Certifications */}
      {/* <section className="py-16 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center font-display text-xl text-gray-400 mb-12">
            Certified & Trusted By
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-50 hover:opacity-100 transition-opacity">
            {partners.map((partner:any) => (
              <div key={partner.id} className="text-gray-500 font-bold text-lg">
                {partner.name}
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Newsletter */}
{/* Newsletter */}
        <section className="py-20 relative overflow-hidden">
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