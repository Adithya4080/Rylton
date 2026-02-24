'use client';

import { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/Button';
import { ScooterModel } from '@/lib/types';
import TestDriveModal from '@/components/TestDriveModal';

interface ModelDetailClientProps {
  scooter: ScooterModel;
}

export default function ModelDetailClient({ scooter }: ModelDetailClientProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(scooter.colors[0]);
  const [emiMonths, setEmiMonths] = useState(12);
  const [downPayment, setDownPayment] = useState(scooter.price * 0.2);
  const [isOpen, setIsOpen] = useState(false);

  // Simple EMI calculation (Principal * Rate * (1 + Rate)^n) / ((1 + Rate)^n - 1)
  const calculateEMI = () => {
    const principal = scooter.price - downPayment;
    const rate = 0.12 / 12; // 12% annual interest
    const months = emiMonths;
    const emi = (principal * rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1);
    return Math.round(emi);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Product Header */}
      <section className="py-16 bg-linear-to-br from-dark-900 via-dark-800 to-dark-900 relative">
        <div className="absolute inset-0 grid-bg opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative h-[500px] rounded-2xl overflow-hidden bg-dark-800 border border-dark-700">
                <Image
                  src={scooter.images[selectedImage]}
                  alt={scooter.name}
                  fill
                  className="object-contain p-8"
                />
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-4">
                {scooter.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative h-24 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? 'border-primary-500 scale-105'
                        : 'border-dark-700 hover:border-primary-500/50'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${scooter.name} view ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              <div>
                <div className="inline-block mb-4">
                  <span className="bg-primary-500/10 border border-primary-500/30 text-primary-500 px-4 py-2 rounded-full text-sm font-semibold">
                    {scooter.tagline}
                  </span>
                </div>
                
                <h1 className="font-display text-5xl font-bold mb-4">
                  {scooter.name}
                </h1>
                
                {/* <div className="flex items-baseline space-x-4 mb-6">
                  <span className="text-4xl font-bold text-primary-500">
                    ₹{scooter.price.toLocaleString('en-IN')}
                  </span>
                  <span className="text-gray-400 line-through">
                    ₹{(scooter.price * 1.15).toLocaleString('en-IN')}
                  </span>
                </div> */}

                <p className="text-gray-300 text-lg mb-8">
                  Experience the perfect blend of performance and sustainability with the {scooter.name}. Built for the modern urban commuter.
                </p>
              </div>

              {/* Key Specs */}
              <div className="grid grid-cols-3 gap-4">
                <div className="card text-center !p-4">
                  <div className="text-3xl font-bold text-primary-500 mb-1">
                    {scooter.range}
                  </div>
                  <div className="text-sm text-gray-400">km Range</div>
                </div>
                <div className="card text-center !p-4">
                  <div className="text-3xl font-bold text-primary-500 mb-1">
                    {scooter.topSpeed}
                  </div>
                  <div className="text-sm text-gray-400">km/h Speed</div>
                </div>
                <div className="card text-center !p-4">
                  <div className="text-3xl font-bold text-primary-500 mb-1">
                    {scooter.chargingTime}
                  </div>
                  <div className="text-sm text-gray-400">hrs Charge</div>
                </div>
              </div>

              {/* Color Selection */}
              <div>
                <h3 className="font-display text-lg font-bold mb-4">
                  Select Color
                </h3>
                <div className="flex space-x-4 ">
                  {scooter.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      className={`group relative`}
                    >
                      <div
                        className={`w-10 h-10 rounded-full shadow-sm transition-all border-2 ${
                          selectedColor.name === color.name
                            ? 'border-primary-500 scale-110 glow'
                            : 'border-dark-700 hover:border-primary-500/50'
                        }`}
                        style={{ backgroundColor: color.hex }}
                      ></div>
                      <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {color.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={() => setIsOpen(true)} className="bg-linear-to-r from-[#ff4081] to-[#ff9100] hover:from-[#ff79a8] hover:to-[#ffb74d] text-black font-extrabold flex-1">
                  Book Test Ride
                </Button>
                <Button href="/contact" variant="outline" className="flex-1">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-dark-800/30 relative">
        <div className="absolute inset-0 grid-bg opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold mb-8">Key Features</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scooter.features.map((feature, index) => (
              <div key={index} className="card flex items-center space-x-4">
                <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-primary-500"
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
                <p className="text-gray-300">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      {/* <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold mb-8">
            Technical Specifications
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {scooter.specs.map((specCategory: any, index: any) => (
              <div key={index} className="card">
                <h3 className="font-display text-xl font-bold mb-4 text-primary-500">
                  {specCategory.category}
                </h3>
                <div className="space-y-3">
                  {specCategory.items.map((item: any, i: any) => (
                    <div key={i} className="flex justify-between py-2 border-b border-dark-700 last:border-0">
                      <span className="text-gray-400">{item.label}</span>
                      <span className="font-semibold">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="py-16 relative bg-[#f1f5f9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with icon */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h2 className="font-display text-3xl font-bold text-gray-900">
                Specifications
              </h2>
              <p className="text-gray-500">Technical details</p>
            </div>
          </div>

          {/* Specification Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {/* Range */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <div className="text-sm text-gray-500 mb-1">Range</div>
              <div className="text-xl font-bold text-gray-900">{scooter.range} km</div>
            </div>

            {/* Top Speed */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="text-sm text-gray-500 mb-1">Top Speed</div>
              <div className="text-xl font-bold text-gray-900">{scooter.topSpeed} km/h</div>
            </div>

            {/* Motor Power */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="text-sm text-gray-500 mb-1">Motor Power</div>
              <div className="text-xl font-bold text-gray-900">{scooter.motorPower}</div>
            </div>

            {/* Battery */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div className="text-sm text-gray-500 mb-1">Battery</div>
              <div className="text-xl font-bold text-gray-900">{scooter.batteryType}</div>
            </div>

            {/* Charging Time */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-sm text-gray-500 mb-1">Charging Time</div>
              <div className="text-xl font-bold text-gray-900">{scooter.chargingTime} hours</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <div className="text-sm text-gray-500 mb-1">Load Capacity</div>
              <div className="text-xl font-bold text-gray-900">
                {scooter.loadCapacity}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EMI Calculator */}
      <section className="py-16 bg-dark-800/50 relative">
        <div className="absolute inset-0 grid-bg opacity-20"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card">
            <h2 className="font-display text-3xl font-bold mb-8 text-center">
              EMI <span className="gradient-text">Calculator</span>
            </h2>

            <div className="space-y-6">
              {/* Down Payment */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Down Payment: ₹{downPayment.toLocaleString('en-IN')}
                </label>
                <input
                  type="range"
                  min={scooter.price * 0.1}
                  max={scooter.price * 0.5}
                  step={1000}
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-primary-500"
                />
                <div className="flex justify-between text-sm text-gray-400 mt-2">
                  <span>10%</span>
                  <span>50%</span>
                </div>
              </div>

              {/* Loan Tenure */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Loan Tenure: {emiMonths} months
                </label>
                <input
                  type="range"
                  min={6}
                  max={36}
                  step={6}
                  value={emiMonths}
                  onChange={(e) => setEmiMonths(Number(e.target.value))}
                  className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-primary-500"
                />
                <div className="flex justify-between text-sm text-gray-400 mt-2">
                  <span>6 months</span>
                  <span>36 months</span>
                </div>
              </div>

              {/* EMI Result */}
              <div className="bg-gradient-to-br from-primary-500/10 to-dark-800 border border-primary-500/30 rounded-xl p-8 text-center">
                <div className="text-gray-400 mb-2">Your Monthly EMI</div>
                <div className="text-5xl font-bold text-primary-500 mb-2">
                  ₹{calculateEMI().toLocaleString('en-IN')}
                </div>
                <div className="text-sm text-gray-400">
                  @ 12% interest rate for {emiMonths} months
                </div>
              </div>

              <p className="text-center text-sm text-gray-500">
                *This is an estimated EMI. Actual rates may vary based on lender and credit score.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-primary-500/10 to-dark-900 relative">
        <div className="absolute inset-0 grid-bg opacity-20"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Ready to Own the <span className="gradient-text">{scooter.name}?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Book your test ride today and experience electric mobility
          </p>
          <Button onClick={() => setIsOpen(true)} size="lg" className="bg-linear-to-r from-[#f59e0b] to-[#fbbf24] hover:from-[#f7b733] hover:to-[#b98e0a] text-black font-extrabold cursor-pointer">
            Book Test Ride Now
          </Button>
        </div>
      </section>
      <TestDriveModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}