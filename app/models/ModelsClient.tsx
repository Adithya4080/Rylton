"use client";

import ScooterCard from '@/components/ScooterCard';
import { scooterModels } from '../../data/data';
import TestDriveModal from '@/components/TestDriveModal';
import { useState } from 'react';

export default function ModelsClient() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900"></div>
        <div className="absolute inset-0 grid-bg opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6">
            <span className="bg-primary-500/10 border border-primary-500/30 text-primary-500 px-4 py-2 rounded-full text-sm font-semibold">
              ⚡ Our Electric Scooter Range
            </span>
          </div>
          
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
            Choose Your <span className="gradient-text">Perfect Ride</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From eco-friendly commuters to high-performance beasts, find the electric scooter that matches your lifestyle and budget.
          </p>
        </div>
      </section>

      {/* Models Grid */}
      <section className="py-16 bg-dark-800/30 relative">
        <div className="absolute inset-0 grid-bg opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {scooterModels.map((scooter, index) => (
              <div
                key={scooter.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ScooterCard scooter={scooter} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-dark-900 to-dark-800"></div>
        <div className="absolute inset-0 grid-bg opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-bold text-center mb-12">
            Model <span className="gradient-text">Comparison</span>
          </h2>

          {/* <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-dark-800 border-b-2 border-primary-500">
                <tr>
                  <th className="px-6 py-4 font-display text-sm font-bold uppercase">Model</th>
                  <th className="px-6 py-4 font-display text-sm font-bold uppercase text-center">Range</th>
                  <th className="px-6 py-4 font-display text-sm font-bold uppercase text-center">Top Speed</th>
                  <th className="px-6 py-4 font-display text-sm font-bold uppercase text-center">Charging</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-dark-700">
                {scooterModels.map((scooter) => (
                  <tr key={scooter.id} className="hover:bg-dark-800/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-bold">{scooter.name}</div>
                      <div className="text-sm text-gray-400 max-[500]:hidden">{scooter.tagline}</div>
                    </td>
                    <td className="px-6 py-4 text-center text-primary-500 font-bold">
                      {scooter.range} km
                    </td>
                    <td className="px-6 py-4 text-center text-primary-500 font-bold">
                      {scooter.topSpeed} km/h
                    </td>
                    <td className="px-6 py-4 text-center text-primary-500 font-bold">
                      {scooter.chargingTime} hrs
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div> */}

          <div>
            <div className="hidden sm:block overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-dark-800 border-b-2 border-primary-500">
                  <tr>
                    <th className="px-6 py-4 font-display text-sm font-bold uppercase">Model</th>
                    <th className="px-6 py-4 font-display text-sm font-bold uppercase text-center">Range</th>
                    <th className="px-6 py-4 font-display text-sm font-bold uppercase text-center">Top Speed</th>
                    <th className="px-6 py-4 font-display text-sm font-bold uppercase text-center">Charging</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-dark-700">
                  {scooterModels.map((scooter) => (
                    <tr key={scooter.id} className="hover:bg-dark-800/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-bold">{scooter.name}</div>
                        <div className="text-sm text-gray-400">{scooter.tagline}</div>
                      </td>
                      <td className="px-6 py-4 text-center text-primary-500 font-bold">{scooter.range} km</td>
                      <td className="px-6 py-4 text-center text-primary-500 font-bold">{scooter.topSpeed} km/h</td>
                      <td className="px-6 py-4 text-center text-primary-500 font-bold">{scooter.chargingTime} hrs</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="sm:hidden divide-y divide-dark-700">
              {scooterModels.map((scooter) => (
                <div key={scooter.id} className="px-4 py-5 hover:bg-dark-800/50 transition-colors">
                  <div className="font-bold text-lg mb-1 text-center">{scooter.name}</div>
                  {scooter.tagline && (
                    <div className="text-sm text-gray-400 mb-3 text-center">{scooter.tagline}</div>
                  )}
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="bg-dark-800 rounded-lg p-2">
                      <div className="text-xs text-gray-400 uppercase font-bold mb-1">Range</div>
                      <div className="text-primary-500 font-bold">{scooter.range} km</div>
                    </div>
                    <div className="bg-dark-800 rounded-lg p-2">
                      <div className="text-xs text-gray-400 uppercase font-bold mb-1">Speed</div>
                      <div className="text-primary-500 font-bold">{scooter.topSpeed} km/h</div>
                    </div>
                    <div className="bg-dark-800 rounded-lg p-2">
                      <div className="text-xs text-gray-400 uppercase font-bold mb-1">Charge</div>
                      <div className="text-primary-500 font-bold">{scooter.chargingTime} hrs</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500/10 to-dark-900 relative">
        <div className="absolute inset-0 grid-bg opacity-20"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="gradient-text">Go Electric?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Schedule a test ride and experience the future of urban mobility
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              onClick={() => setIsOpen(true)}
              href="#"
              className="btn-primary text-lg px-10 py-5"
            >
              Book Test Ride
            </a>
            <a
              href="/contact"
              className="btn-outline text-lg px-10 py-5"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
      <TestDriveModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}