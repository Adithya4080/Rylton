import Link from 'next/link';
import Image from 'next/image';
import { ScooterModel } from '../lib/types';
import Button from './Button';

interface ScooterCardProps {
  scooter: ScooterModel;
}

export default function ScooterCard({ scooter }: ScooterCardProps) {
  return (
    <div className="card group overflow-hidden">
      {/* Image */}
      <div className="relative h-64 mb-6 overflow-hidden rounded-lg bg-dark-700">
        <Image
          src={scooter.image}
          alt={scooter.name}
          fill
          className="object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-gray-500 text-dark-900 px-3 py-1 rounded-full text-xs font-bold">
          {scooter.tagline}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4">
        <div>
          <h3 className="font-display text-2xl font-bold mb-2 group-hover:text-primary-500 transition-colors">
            {scooter.name}
          </h3>
          {/* <p className="text-3xl font-bold text-primary-500">
            ₹{scooter.price.toLocaleString('en-IN')}
          </p> */}
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-3 gap-4 py-4 border-y border-dark-700">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-500">{scooter.range}</div>
            <div className="text-xs text-gray-400 mt-1">km Range</div>
          </div>
          <div className="text-center border-x border-dark-700">
            <div className="text-2xl font-bold text-primary-500">{scooter.topSpeed}</div>
            <div className="text-xs text-gray-400 mt-1">km/h Speed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-500">{scooter.chargingTime}</div>
            <div className="text-xs text-gray-400 mt-1">hrs Charge</div>
          </div>
        </div>

        {/* CTA */}
        <Button href={`/models/${scooter.slug}`} variant="outline" className="w-full">
          View Details
        </Button>
      </div>
    </div>
  );
}