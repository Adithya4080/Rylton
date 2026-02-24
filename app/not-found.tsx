"use client";

import { useEffect, useState } from "react";

// ─────────────────────────────────────────────
// Animated battery SVG component
// ─────────────────────────────────────────────
function BatteryDead() {
  const [charge, setCharge] = useState(85);
  const [draining, setDraining] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setCharge((prev) => {
        if (prev <= 0) {
          setDraining(false);
          clearInterval(id);
          return 0;
        }
        return prev - 1;
      });
    }, 30);
    return () => clearInterval(id);
  }, []);

  const color =
    charge > 50
      ? "#4ADE80"
      : charge > 20
      ? "#FACC15"
      : "#EF4444";

  return (
    <div className="flex flex-col items-center gap-3">
      {/* Battery body */}
      <div className="relative flex items-center gap-1">
        <div
          className="relative w-40 h-20 rounded-xl border-2 overflow-hidden"
          style={{ borderColor: color, boxShadow: `0 0 20px ${color}55` }}
        >
          {/* Fill bar */}
          <div
            className="absolute left-0 top-0 h-full transition-all duration-100 rounded-lg"
            style={{
              width: `${charge}%`,
              background: `linear-gradient(90deg, ${color}88, ${color})`,
            }}
          />
          {/* Percentage label */}
          <span
            className="absolute inset-0 flex items-center justify-center font-mono text-xl font-bold z-10"
            style={{ color: charge > 10 ? "#fff" : color }}
          >
            {charge}%
          </span>
        </div>
        {/* Battery nub */}
        <div
          className="w-3 h-8 rounded-r-md"
          style={{ backgroundColor: color }}
        />
      </div>
      {/* Drain label */}
      <p
        className="text-xs font-mono tracking-widest uppercase"
        style={{ color }}
      >
        {charge === 0 ? "⚡ Battery Empty" : "Draining…"}
      </p>
    </div>
  );
}

// ─────────────────────────────────────────────
// Scooter SVG silhouette
// ─────────────────────────────────────────────
function ScooterSVG() {
  return (
    <svg
      viewBox="0 0 320 160"
      className="w-72 md:w-96 opacity-90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Rear wheel */}
      <circle cx="72" cy="120" r="32" stroke="#22D3EE" strokeWidth="4" />
      <circle cx="72" cy="120" r="18" stroke="#22D3EE" strokeWidth="2" strokeDasharray="6 4" />
      <circle cx="72" cy="120" r="6" fill="#22D3EE" />
      {/* Front wheel */}
      <circle cx="248" cy="120" r="32" stroke="#22D3EE" strokeWidth="4" />
      <circle cx="248" cy="120" r="18" stroke="#22D3EE" strokeWidth="2" strokeDasharray="6 4" />
      <circle cx="248" cy="120" r="6" fill="#22D3EE" />
      {/* Body / deck */}
      <path d="M72 118 Q80 90 130 88 L200 88 Q215 88 220 100 L248 118" stroke="#22D3EE" strokeWidth="3" strokeLinecap="round" />
      {/* Step platform */}
      <rect x="100" y="108" width="100" height="10" rx="5" fill="#22D3EE22" stroke="#22D3EE" strokeWidth="2" />
      {/* Stem */}
      <line x1="226" y1="88" x2="240" y2="50" stroke="#22D3EE" strokeWidth="3" strokeLinecap="round" />
      {/* Handlebar */}
      <line x1="228" y1="50" x2="260" y2="50" stroke="#22D3EE" strokeWidth="3" strokeLinecap="round" />
      {/* Headlight */}
      <ellipse cx="264" cy="55" rx="7" ry="5" fill="#22D3EE" opacity="0.9" />
      <ellipse cx="282" cy="55" rx="14" ry="4" fill="#22D3EE" opacity="0.15" />
      {/* Seat */}
      <path d="M140 88 Q160 72 195 80" stroke="#22D3EE" strokeWidth="3" strokeLinecap="round" />
      {/* Lightning bolt on body */}
      <path d="M155 95 L148 108 L158 108 L150 122" stroke="#4ADE80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ─────────────────────────────────────────────
// Floating particle background
// ─────────────────────────────────────────────
function Particles() {
  const [particles, setParticles] = useState<Array<{
    id: number; size: number; x: number; y: number; delay: number; duration: number;
  }>>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        size: Math.random() * 4 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 5,
        duration: Math.random() * 6 + 4,
      }))
    );
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full animate-pulse"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            background: p.id % 3 === 0 ? "#22D3EE" : p.id % 3 === 1 ? "#4ADE80" : "#818CF8",
            opacity: 0.35,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────
// Main Page Component
// ─────────────────────────────────────────────
export default function NotFoundGeneral() {
  return (
    <div
      className="min-h-screen flex flex-col relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #020817 0%, #0a1628 40%, #071520 100%)",
        fontFamily: "'DM Sans', system-ui, sans-serif",
      }}
    >
      {/* Ambient glow blobs */}
      <div
        className="absolute top-[-10%] left-[-5%] w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #22D3EE22 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-[-10%] right-[-5%] w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #4ADE8022 0%, transparent 70%)" }}
      />
      <div
        className="absolute top-[40%] right-[10%] w-64 h-64 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #818CF815 0%, transparent 70%)" }}
      />

      <Particles />


      {/* ── Main Content ── */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center">
        {/* Scooter illustration */}
        <div className="my-4 drop-shadow-[0_0_24px_rgba(34,211,238,0.4)]">
          <ScooterSVG />
        </div>

        {/* Battery widget */}
        <div className="my-6">
          <BatteryDead />
        </div>

        {/* Headline */}
        <h1
          className="text-3xl md:text-5xl font-extrabold text-white mt-2 mb-4"
          style={{ letterSpacing: "-0.03em", lineHeight: 1.1 }}
        >
          Oops! This page{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #22D3EE, #4ADE80)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            ran out of charge.
          </span>
        </h1>

        {/* Supporting text */}
        <p className="text-slate-400 text-base md:text-lg max-w-md leading-relaxed mb-10">
          The page you're looking for doesn't exist or has been moved. Let's
          get you back on the road.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          {/* Primary */}
          <a
            href="/"
            className="relative inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm text-white transition-all duration-200 hover:scale-105 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #22D3EE, #0891B2)",
              boxShadow: "0 0 24px rgba(34,211,238,0.35), 0 4px 12px rgba(0,0,0,0.4)",
            }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Back to Home
          </a>

          {/* Secondary */}
          <a
            href="/models"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-105 active:scale-95"
            style={{
              border: "1.5px solid rgba(34,211,238,0.35)",
              color: "#22D3EE",
              background: "rgba(34,211,238,0.07)",
            }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
            Browse Scooters
          </a>
        </div>

        {/* Horizontal road line decoration */}
        <div className="mt-16 w-full max-w-sm flex items-center gap-3">
          <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, transparent, #22D3EE55)" }} />
          <span className="text-xs text-slate-600 font-mono">ROUTE ERROR</span>
          <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, #22D3EE55, transparent)" }} />
        </div>
      </main>
    </div>
  );
}
