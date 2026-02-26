'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { ScooterModel } from '../lib/types';

// ── Single compact card ──────────────────────────────────────────────────────
interface ScooterCardSmallProps {
  scooter: ScooterModel;
}

export function ScooterCardSmall({ scooter }: ScooterCardSmallProps) {
  return (
    <Link
      href={`/models/${scooter.slug}`}
      className="group relative flex flex-col bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full"
    >
      {/* Image */}
      <div className="relative h-44 bg-linear-to-br from-slate-50 to-slate-100 overflow-hidden shrink-0">
        <Image
          src={scooter.image}
          alt={scooter.name}
          fill
          className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        {/* Name + price row */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-bold text-gray-900 text-base leading-tight">
            {scooter.name}
          </h3>
        </div>

        <p className="text-xs text-gray-500 line-clamp-1">{scooter.tagline}</p>

        {/* Mini specs */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-xs text-gray-600">
          <span className="flex items-center gap-1">
            <BatteryIcon />
            {scooter.range} km
          </span>
          <span className="hidden sm:block h-3 w-px bg-gray-200" />
          <span className="flex items-center gap-1">
            <SpeedIcon />
            {scooter.topSpeed} km/h
          </span>
          <span className="hidden sm:block h-3 w-px bg-gray-200" />
          <span className="flex items-center gap-1">
            <ChargeIcon />
            {scooter.chargingTime} hrs
          </span>
        </div>

        {/* View link */}
        <div className="mt-auto pt-2 flex items-center gap-1 text-xs font-semibold text-emerald-600 group-hover:gap-2 transition-all">
          View Details
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

// ── Carousel wrapper ─────────────────────────────────────────────────────────
interface ScooterCarouselProps {
  scooters: ScooterModel[];
  title?: string;
}

export function ScooterCarousel({
  scooters,
  title = 'Our Models',
}: ScooterCarouselProps) {
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);
  const GAP = 16; // 16px = gap-4

  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    function measure() {
      const track = trackRef.current;
      if (!track) return;
      const containerWidth = track.offsetWidth;

      let count = 1;
      if (containerWidth >= 1024) count = 3;
      else if (containerWidth >= 640) count = 2;

      setVisibleCount(count);
      // Exact card width: divide container minus gaps by count
      setCardWidth((containerWidth - GAP * (count - 1)) / count);
    }

    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const maxIndex = Math.max(0, scooters.length - visibleCount);
  const canPrev = index > 0;
  const canNext = index < maxIndex;

  // Clamp index when screen resizes and visibleCount changes
  useEffect(() => {
    setIndex((i) => Math.min(i, Math.max(0, scooters.length - visibleCount)));
  }, [visibleCount, scooters.length]);

  // Offset = number of cards scrolled * (card width + gap)
  const offset = index * (cardWidth + GAP);

  return (
    <section className="py-12 px-4 max-[480px]:pt-0">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 max-w-5xl mx-auto">
        {/* <h2 className="text-2xl font-bold text-white">{title}</h2>  */}

        <h2 className="text-2xl font-bold bg-linear-to-r from-teal-300  to-red-600 bg-clip-text text-transparent">
            {title}
        </h2>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            disabled={!canPrev}
            aria-label="Previous model"
            className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-emerald-500 hover:text-emerald-600 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {maxIndex > 0 && (
            <div className="flex gap-1.5">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    i === index ? 'bg-emerald-500 w-4' : 'bg-gray-300 w-1.5'
                  }`}
                />
              ))}
            </div>
          )}

          <button
            onClick={() => setIndex((i) => Math.min(maxIndex, i + 1))}
            disabled={!canNext}
            aria-label="Next model"
            className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-emerald-500 hover:text-emerald-600 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Overflow hidden clip */}
      <div className="max-w-5xl mx-auto overflow-hidden" ref={trackRef}>
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            gap: `${GAP}px`,
            transform: `translateX(-${offset}px)`,
          }}
        >
          {scooters.map((scooter) => (
            <div
              key={scooter.id}
              className="shrink-0"
              style={{
                width:
                  cardWidth > 0
                    ? `${cardWidth}px`
                    : `calc((100% - ${GAP * (visibleCount - 1)}px) / ${visibleCount})`,
              }}
            >
              <ScooterCardSmall scooter={scooter} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Icons ────────────────────────────────────────────────────────────────────
function BatteryIcon() {
  return (
    <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <rect x="2" y="7" width="18" height="10" rx="2" />
      <path d="M22 11v2" strokeLinecap="round" />
      <path d="M6 12h8" strokeLinecap="round" />
    </svg>
  );
}

function SpeedIcon() {
  return (
    <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path d="M12 12m-9 0a9 9 0 1 0 18 0" strokeLinecap="round" />
      <path d="M12 12l3-5" strokeLinecap="round" />
    </svg>
  );
}

function ChargeIcon() {
  return (
    <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}