import { Metadata } from 'next';
import Image from 'next/image';
import { teamMembers, milestones } from '../../data/data';

export const metadata: Metadata = {
  title: 'About Us - Rylton Electric Scooters',
  description: 'Learn about Rylton Mobility\'s mission to revolutionize urban transportation with sustainable electric scooters.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900"></div>
        <div className="absolute inset-0 grid-bg opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6">
              <span className="bg-primary-500/10 border border-primary-500/30 text-primary-500 px-4 py-2 rounded-full text-sm font-semibold">
                🚀 Our Story
              </span>
            </div>
            
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Powering the Future of{' '}
              <span className="gradient-text">Urban Mobility</span>
            </h1>
            
            <p className="text-xl text-gray-300">
              At Rylton, we believe that sustainable transportation should be accessible, affordable, and exciting. We're on a mission to transform cities with electric mobility solutions that are better for you and the planet.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-dark-800/30 relative">
        <div className="absolute inset-0 grid-bg opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="card">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6 glow">
                <svg
                  className="w-8 h-8 text-dark-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              
              <h2 className="font-display text-3xl font-bold mb-4">
                Our <span className="gradient-text">Mission</span>
              </h2>
              
              <p className="text-gray-300 mb-4">
                To accelerate the world's transition to sustainable mobility by creating innovative, high-performance electric scooters that make zero-emission transportation accessible to everyone.
              </p>
              
              <p className="text-gray-300">
                We're committed to designing vehicles that don't just reduce carbon footprints, but enhance the daily commute experience with cutting-edge technology and exceptional design.
              </p>
            </div>

            {/* Vision */}
            <div className="card">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6 glow">
                <svg
                  className="w-8 h-8 text-dark-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              
              <h2 className="font-display text-3xl font-bold mb-4">
                Our <span className="gradient-text">Vision</span>
              </h2>
              
              <p className="text-gray-300 mb-4">
                To create a world where clean, efficient electric mobility is the norm, not the exception. We envision cities where the air is cleaner, streets are quieter, and communities thrive.
              </p>
              
              <p className="text-gray-300">
                By 2030, we aim to become India's leading electric scooter manufacturer, with a presence in 100+ cities and a community of 1 million+ riders making sustainable choices every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clean Energy Commitment */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-dark-900 to-dark-800"></div>
        <div className="absolute inset-0 grid-bg opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&q=80"
                alt="Clean Energy"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-r from-primary-500/30 to-transparent"></div>
            </div>

            <div className="space-y-6">
              <h2 className="font-display text-4xl font-bold">
                Committed to{' '}
                <span className="gradient-text">Clean Energy</span>
              </h2>
              
              <p className="text-gray-300 text-lg">
                Our commitment to sustainability extends beyond our products. We've implemented green practices across our entire operation, from manufacturing to delivery.
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: 'Carbon Neutral Manufacturing',
                    description: '100% renewable energy powered factories by 2025',
                  },
                  {
                    title: 'Sustainable Materials',
                    description: '85% recyclable components in every scooter',
                  },
                  {
                    title: 'Battery Recycling Program',
                    description: 'Complete lifecycle management for all batteries',
                  },
                  {
                    title: 'Green Logistics',
                    description: 'Electric delivery fleet for last-mile distribution',
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
                    <div className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-4 h-4 text-primary-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline / Milestones */}
      {/* <section className="py-20 bg-dark-800/30 relative">
        <div className="absolute inset-0 grid-bg opacity-20"></div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-bold text-center mb-16">
            Our <span className="gradient-text">Journey</span>
          </h2>

          <div className="space-y-8">
            {milestones.map((milestone:any, index:any) => (
              <div
                key={index}
                className="flex items-start space-x-6 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-linear-to-br from-primary-500 to-primary-600 flex items-center justify-center font-bold text-dark-900 glow flex-shrink-0">
                    {milestone.year}
                  </div>
                  {index !== milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-linear-to-b from-primary-500 to-transparent mt-2"></div>
                  )}
                </div>
                <div className="card flex-1 !p-6">
                  <h3 className="font-display text-xl font-bold mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-300">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Team Section
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-4">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Passionate innovators driving the electric mobility revolution
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member:any, index:any) => (
              <div
                key={member.id}
                className="card text-center group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary-500/30 group-hover:border-primary-500 transition-all">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <h3 className="font-display text-xl font-bold mb-1">
                  {member.name}
                </h3>
                
                <p className="text-primary-500 text-sm font-semibold mb-3">
                  {member.role}
                </p>
                
                <p className="text-gray-400 text-sm">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Values Section */}
      <section className="py-20 bg-linear-to-r from-primary-500/10 to-dark-900 relative">
        <div className="absolute inset-0 grid-bg opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-bold text-center mb-12">
            Our <span className="gradient-text">Core Values</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation',
                description: 'Constantly pushing boundaries with cutting-edge technology and design',
                icon: '💡',
              },
              {
                title: 'Sustainability',
                description: 'Environmental responsibility at the core of everything we do',
                icon: '🌱',
              },
              {
                title: 'Customer First',
                description: 'Building products and experiences that delight our riders',
                icon: '❤️',
              },
            ].map((value, index) => (
              <div key={index} className="card text-center">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="font-display text-2xl font-bold mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}