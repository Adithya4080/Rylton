"use client";

import { useState } from "react";

function StatPill({
  icon,
  label,
  value,
  color = "#22D3EE",
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  color?: string;
}) {
  return (
    <div
      className="flex flex-col items-center gap-1 px-5 py-3 rounded-2xl"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <span style={{ color }}>{icon}</span> 
      <span className="text-xl font-bold text-white font-mono">{value}</span>
      <span className="text-xs text-slate-500 uppercase tracking-widest">{label}</span>
    </div>
  );
}

function GhostScooter() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Glow halo */}
      <div
        className="absolute inset-0 rounded-full blur-3xl"
        style={{ background: "radial-gradient(ellipse, #22D3EE18 0%, transparent 70%)" }}
      />
      <svg
        viewBox="0 0 400 220"
        className="w-full max-w-md relative z-10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Ground shadow */}
        <ellipse cx="200" cy="210" rx="140" ry="8" fill="#22D3EE" opacity="0.06" />

        {/* Rear wheel */}
        <circle cx="90" cy="165" r="44" stroke="#334155" strokeWidth="3" />
        <circle cx="90" cy="165" r="32" stroke="#1E293B" strokeWidth="2" strokeDasharray="8 6" />
        <circle cx="90" cy="165" r="14" fill="#0F172A" stroke="#334155" strokeWidth="2" />
        <circle cx="90" cy="165" r="5" fill="#22D3EE" opacity="0.3" />

        {/* Front wheel */}
        <circle cx="312" cy="165" r="44" stroke="#334155" strokeWidth="3" />
        <circle cx="312" cy="165" r="32" stroke="#1E293B" strokeWidth="2" strokeDasharray="8 6" />
        <circle cx="312" cy="165" r="14" fill="#0F172A" stroke="#334155" strokeWidth="2" />
        <circle cx="312" cy="165" r="5" fill="#22D3EE" opacity="0.3" />

        {/* Main body/frame */}
        <path
          d="M90 163 C95 130 115 120 155 118 L240 118 C260 118 272 125 278 138 L312 163"
          stroke="#1E3A4A"
          strokeWidth="4"
          strokeLinecap="round"
        />
        {/* Floorboard */}
        <rect x="135" y="148" width="130" height="15" rx="7" fill="#0F1F2E" stroke="#1E3A4A" strokeWidth="2" />

        {/* Body fairing upper */}
        <path
          d="M152 118 C152 95 170 78 195 76 C220 74 245 85 248 118"
          fill="#0D1B2A"
          stroke="#1E3A4A"
          strokeWidth="2"
        />
        {/* Seat */}
        <path
          d="M170 86 Q200 68 238 78"
          stroke="#1E3A4A"
          strokeWidth="5"
          strokeLinecap="round"
        />

        {/* Stem / fork */}
        <line x1="280" y1="118" x2="295" y2="70" stroke="#1E3A4A" strokeWidth="4" strokeLinecap="round" />
        {/* Handlebar */}
        <line x1="280" y1="70" x2="318" y2="70" stroke="#1E3A4A" strokeWidth="4" strokeLinecap="round" />
        {/* Grip ends */}
        <rect x="316" y="63" width="6" height="15" rx="3" fill="#1E3A4A" />
        <rect x="270" y="63" width="6" height="15" rx="3" fill="#1E3A4A" />

        {/* Headlight — dark/off */}
        <ellipse cx="323" cy="76" rx="9" ry="7" fill="#0F1F2E" stroke="#1E3A4A" strokeWidth="2" />
        <text x="318" y="80" fontSize="8" fill="#334155">✕</text>

        {/* "OFFLINE" badge */}
        <rect x="155" y="93" width="72" height="20" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1" />
        <text x="191" y="107" textAnchor="middle" fontSize="9" fill="#475569" fontFamily="monospace" fontWeight="bold">OFFLINE</text>

        {/* Dashed outline suggestion around whole scooter */}
        <rect
          x="40" y="50" width="330" height="160"
          rx="16" stroke="#1E3A4A" strokeWidth="1.5" strokeDasharray="8 5"
          fill="none" opacity="0.5"
        />

        {/* Speed lines (greyed) */}
        <line x1="20" y1="145" x2="60" y2="145" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />
        <line x1="10" y1="158" x2="55" y2="158" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="20" y1="171" x2="58" y2="171" stroke="#1E293B" strokeWidth="1" strokeLinecap="round" />

        {/* Question mark overlay */}
        <text
          x="200"
          y="140"
          textAnchor="middle"
          fontSize="54"
          fontWeight="900"
          fontFamily="monospace"
          fill="none"
          stroke="#22D3EE"
          strokeWidth="1"
          opacity="0.12"
        >
          ?
        </text>
      </svg>
    </div>
  );
}

function ModelCard({
  name,
  range,
  top_speed,
  price,
  tag,
  accentColor,
}: {
  name: string;
  range: string;
  top_speed: string;
  price: string;
  tag?: string;
  accentColor: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col rounded-2xl p-5 cursor-pointer transition-all duration-300"
      style={{
        background: hovered
          ? "rgba(255,255,255,0.07)"
          : "rgba(255,255,255,0.03)",
        border: `1.5px solid ${hovered ? accentColor + "66" : "rgba(255,255,255,0.07)"}`,
        transform: hovered ? "translateY(-3px)" : "none",
        boxShadow: hovered ? `0 8px 32px ${accentColor}22` : "none",
      }}
    >
      {tag && (
        <span
          className="absolute top-3 right-3 text-xs px-2 py-0.5 rounded-full font-semibold"
          style={{ background: accentColor + "22", color: accentColor }}
        >
          {tag}
        </span>
      )}

      {/* Placeholder scooter shape */}
      <div
        className="w-full h-24 rounded-xl mb-4 flex items-center justify-center"
        style={{ background: `linear-gradient(135deg, ${accentColor}12, transparent)` }}
      >
        <svg viewBox="0 0 120 60" className="w-28 opacity-60" fill="none">
          <circle cx="24" cy="44" r="13" stroke={accentColor} strokeWidth="2" />
          <circle cx="96" cy="44" r="13" stroke={accentColor} strokeWidth="2" />
          <path d="M24 43 C27 32 40 28 58 28 L82 28 C90 28 94 33 96 43" stroke={accentColor} strokeWidth="2" strokeLinecap="round" />
          <rect x="42" y="38" width="36" height="6" rx="3" fill={accentColor} opacity="0.2" stroke={accentColor} strokeWidth="1" />
          <line x1="86" y1="28" x2="90" y2="16" stroke={accentColor} strokeWidth="2" strokeLinecap="round" />
          <line x1="84" y1="16" x2="96" y2="16" stroke={accentColor} strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      <h3 className="text-white font-bold text-base mb-3">{name}</h3>

      <div className="flex gap-3 mb-4">
        <div className="text-center">
          <div className="text-xs text-slate-500">Range</div>
          <div className="text-sm font-bold" style={{ color: accentColor }}>{range}</div>
        </div>
        <div className="w-px bg-slate-700" />
        <div className="text-center">
          <div className="text-xs text-slate-500">Top Speed</div>
          <div className="text-sm font-bold" style={{ color: accentColor }}>{top_speed}</div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-auto">
        <span className="text-white font-extrabold">{price}</span>
        <span
          className="text-xs font-semibold px-3 py-1 rounded-lg transition-all"
          style={{
            background: hovered ? accentColor : accentColor + "22",
            color: hovered ? "#000" : accentColor,
          }}
        >
          View →
        </span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Main Page Component
// ─────────────────────────────────────────────
export default function VehicleNotFound() {

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: "linear-gradient(160deg, #020817 0%, #060F1C 50%, #030B14 100%)",
        fontFamily: "'DM Sans', system-ui, sans-serif",
      }}
    >
      {/* ── Subtle grid overlay ── */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,211,238,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

        {/* ── Main Content ── */}
        <main className="relative mt-20 z-10 flex-1 flex flex-col px-6 md:px-12 lg:px-24 py-12 max-w-6xl mx-auto w-full">
            <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">

                {/* Left: Text + actions */}
                <div className="flex-1 text-center lg:text-left">
                {/* Error badge */}
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full"
                    style={{
                    background: "rgba(239,68,68,0.1)",
                    border: "1px solid rgba(239,68,68,0.25)",
                    }}
                >
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-xs text-red-400 font-mono uppercase tracking-widest">Vehicle Unavailable</span>
                </div>

                {/* Headline */}
                <h1
                    className="text-4xl md:text-6xl font-extrabold text-white mb-5"
                    style={{ letterSpacing: "-0.03em", lineHeight: 1.08 }}
                >
                    Vehicle
                    <br />
                    <span
                    style={{
                        background: "linear-gradient(90deg, #22D3EE 0%, #818CF8 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                    >
                    Not Found
                    </span>
                </h1>

                {/* Supporting text */}
                <p className="text-slate-400 text-base md:text-lg max-w-md leading-relaxed mb-8 mx-auto lg:mx-0">
                    This scooter model may have been discontinued, renamed, or never
                    existed. Browse our current lineup to find the ride for you.
                </p>

                {/* Dashboard stats (greyed out) */}
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
                    <StatPill
                    icon={
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    }
                    label="Battery"
                    value="—%"
                    color="#334155"
                    />
                    <StatPill
                    icon={
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                    }
                    label="Range"
                    value="— km"
                    color="#334155"
                    />
                    <StatPill
                    icon={
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    }
                    label="Top Speed"
                    value="— km/h"
                    color="#334155"
                    />
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                    <a
                    href="/models"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all hover:scale-105"
                    style={{
                        background: "linear-gradient(135deg, #22D3EE, #0891B2)",
                        boxShadow: "0 0 20px rgba(34,211,238,0.3)",
                    }}
                    >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                    </svg>
                    View All Scooters
                    </a>

                    <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:scale-105"
                    style={{
                        border: "1.5px solid rgba(255,255,255,0.08)",
                        color: "#94A3B8",
                        background: "rgba(255,255,255,0.03)",
                    }}
                    >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Contact Support
                    </a>
                </div>
                </div>

                {/* Right: Ghost scooter */}
                <div className="flex-1 flex items-center justify-center w-full max-w-md">
                <GhostScooter />
                </div>
            </div>
        </main>
    </div>
  );
}