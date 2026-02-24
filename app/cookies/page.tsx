"use client"

import { useState } from "react"

const cookieTypes = [
  {
    key: "essential",
    label: "Essential",
    accent: "teal",
    required: true,
    defaultOn: true,
    description: "Core functionality: authentication, session management, and security. Cannot be disabled.",
    examples: ["vr_session — maintains your login", "vr_csrf — prevents request forgery", "vr_device_id — trusted device recognition (12 mo)"],
  },
  {
    key: "analytics",
    label: "Analytics",
    accent: "blue",
    required: false,
    defaultOn: true,
    description: "Help us understand how users navigate our app — which features are used and where errors occur.",
    examples: ["vr_analytics — aggregate usage stats (6 mo)", "vr_perf — performance monitoring (30 days)"],
  },
  {
    key: "functional",
    label: "Functional",
    accent: "blue",
    required: false,
    defaultOn: true,
    description: "Remember your preferences: language, location defaults, and display settings.",
    examples: ["vr_prefs — stores language and location defaults (12 mo)"],
  },
  {
    key: "marketing",
    label: "Marketing",
    accent: "purple",
    required: false,
    defaultOn: false,
    description: "Show you relevant Rylton promotions and measure advertising campaign effectiveness.",
    examples: ["vr_campaign — tracks promotional attribution (90 days)"],
  },
]

export default function CookiePage() {
  const [enabled, setEnabled] = useState<Record<string, boolean>>({
    essential: true,
    analytics: true,
    functional: true,
    marketing: false,
  })

  const toggle = (key: string) => {
    if (key === "essential") return
    setEnabled((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const accentClass = (accent: string, type: "text" | "border" | "bg") => {
    const map: Record<string, Record<string, string>> = {
      teal: { text: "text-teal-400", border: "border-teal-500/20", bg: "bg-teal-400" },
      blue: { text: "text-blue-400", border: "border-blue-500/20", bg: "bg-blue-400" },
      purple: { text: "text-purple-400", border: "border-purple-500/20", bg: "bg-purple-400" },
    }
    return map[accent]?.[type] ?? ""
  }

  return (
    <main className="min-h-screen bg-[#060910] text-white flex flex-col items-center px-4 sm:px-6 py-16 sm:py-24 relative overflow-hidden">

      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#00e5c3 1px, transparent 1px), linear-gradient(90deg, #00e5c3 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-teal-500/8 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[300px] h-[300px] rounded-full bg-purple-400/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-2xl flex flex-col gap-10">

        {/* Badge */}
        <div className="flex items-center gap-2 text-[10px] sm:text-xs tracking-[0.18em] uppercase text-gray-400 border border-white/10 px-3 sm:px-4 py-1.5 rounded-full w-fit">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse shrink-0" />
          Legal · Cookie Policy
        </div>

        {/* Heading */}
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none uppercase">
            <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">Cookie</span>
            <br />
            <span className="text-white">Policy</span>
          </h1>
          <p className="text-gray-500 text-xs tracking-[0.1em] mt-2">
            Effective January 1, 2026 · Last updated February 2026 · Version 1.8
          </p>
        </div>

        {/* Intro card */}
        <div className="bg-white/3 border border-white/8 rounded-2xl px-5 py-5">
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-light">
            Cookies help Rylton deliver a faster, smarter experience — from keeping you logged in to understanding how our app performs. Here's exactly what we use and why, with full controls in your hands.
          </p>
        </div>

        {/* Divider */}
        <div className="w-16 h-px bg-gradient-to-r from-teal-400/0 via-teal-400/50 to-teal-400/0" />

        {/* What are cookies */}
        <div className="bg-white/3 border border-white/8 rounded-2xl px-5 py-5 flex flex-col gap-3 hover:border-teal-500/20 transition-colors">
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase tracking-[0.16em] text-teal-400 font-semibold border border-teal-500/20 px-2 py-0.5 rounded-full">01</span>
            <h2 className="text-sm sm:text-base font-semibold text-white tracking-tight">What Are Cookies</h2>
          </div>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light">
            Cookies are small text files stored on your device when you visit a website or use a web-based app. They allow the website to remember your preferences, authenticate your session, and collect usage analytics. Cookies cannot run code, carry viruses, or access other files on your device.
          </p>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light">
            We may also use similar technologies including local storage, session storage, and pixel tags — this policy covers all such technologies.
          </p>
        </div>

        {/* Cookie type cards with toggles */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 px-1">
            <span className="text-[10px] uppercase tracking-[0.16em] text-teal-400 font-semibold border border-teal-500/20 px-2 py-0.5 rounded-full">02</span>
            <h2 className="text-sm sm:text-base font-semibold text-white tracking-tight">Your Cookie Preferences</h2>
          </div>

          <div className="flex flex-col gap-3">
            {cookieTypes.map((ct) => (
              <div
                key={ct.key}
                className={`bg-white/3 border border-white/8 rounded-2xl px-5 py-5 flex flex-col gap-3 transition-colors ${
                  enabled[ct.key] ? `hover:${accentClass(ct.accent, "border")}` : "opacity-60"
                }`}
              >
                {/* Card header with toggle */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className={`text-[10px] uppercase tracking-[0.16em] font-semibold border px-2 py-0.5 rounded-full ${accentClass(ct.accent, "text")} ${accentClass(ct.accent, "border")}`}>
                      {ct.label}
                    </span>
                    {ct.required && (
                      <span className="text-[10px] text-gray-600 uppercase tracking-widest">Required</span>
                    )}
                  </div>

                  {/* Toggle */}
                  <button
                    onClick={() => toggle(ct.key)}
                    disabled={ct.required}
                    className={`relative w-10 h-5.5 rounded-full transition-colors flex-shrink-0 ${
                      ct.required
                        ? "bg-teal-400/30 cursor-not-allowed"
                        : enabled[ct.key]
                        ? accentClass(ct.accent, "bg")
                        : "bg-white/10"
                    }`}
                    style={{ height: "22px", width: "40px" }}
                    aria-label={`Toggle ${ct.label} cookies`}
                  >
                    <span
                      className="absolute top-[3px] w-4 h-4 bg-white rounded-full shadow transition-all duration-200"
                      style={{ left: enabled[ct.key] ? "20px" : "3px" }}
                    />
                  </button>
                </div>

                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light">{ct.description}</p>

                <ul className="flex flex-col gap-1.5">
                  {ct.examples.map((ex, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-500 text-xs leading-relaxed font-light">
                      <span className={`mt-0.5 shrink-0 ${accentClass(ct.accent, "text")}`}>→</span>
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Third party */}
        <div className="bg-white/3 border border-white/8 rounded-2xl px-5 py-5 flex flex-col gap-3 hover:border-teal-500/20 transition-colors">
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase tracking-[0.16em] text-teal-400 font-semibold border border-teal-500/20 px-2 py-0.5 rounded-full">03</span>
            <h2 className="text-sm sm:text-base font-semibold text-white tracking-tight">Third-Party Cookies</h2>
          </div>
          <ul className="flex flex-col gap-2">
            {[
              "Stripe — payment security and fraud detection",
              "Google Analytics — aggregated usage stats (IP anonymization enabled)",
              "Mapbox — map rendering and location services",
              "Intercom — in-app customer support",
              "Meta Pixel — campaign measurement (only if marketing cookies accepted)",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-400 text-xs sm:text-sm leading-relaxed font-light">
                <span className="text-teal-400 mt-0.5 shrink-0">→</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-gray-500 text-xs leading-relaxed font-light">
            All partners are bound by data processing agreements. We do not permit third-party use of cookies for independent purposes.
          </p>
        </div>

        {/* Browser controls card */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 bg-white/3 border border-white/8 rounded-2xl px-5 py-5 flex flex-col gap-2 hover:border-teal-500/20 transition-colors">
            <span className="text-[10px] uppercase tracking-[0.16em] text-teal-400 font-semibold">Browser Controls</span>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light">
              All major browsers let you block or delete cookies. Note: blocking essential cookies may break core functionality.
            </p>
            <span className="mt-1 text-xs text-gray-600 font-light italic">Settings → Privacy in your browser</span>
          </div>
          <div className="flex-1 bg-white/3 border border-white/8 rounded-2xl px-5 py-5 flex flex-col gap-2 hover:border-blue-500/20 transition-colors">
            <span className="text-[10px] uppercase tracking-[0.16em] text-blue-400 font-semibold">Cookie Questions</span>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light">
              Questions about our cookie practices or this policy.
            </p>
            <a
              href="mailto:rylton89@gmail.com"
              className="mt-1 text-sm text-white font-medium hover:text-blue-400 transition-colors inline-flex items-center gap-1.5 group"
            >
              rylton89@gmail.com
              <svg className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        <p className="text-xs text-gray-600 text-center">Changes to preferences take effect immediately on this device.</p>
      </div>
    </main>
  )
}