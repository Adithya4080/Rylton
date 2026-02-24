"use client"

export default function PrivacyPage() {
  const sections = [
    {
      num: "01",
      title: "Information We Collect",
      content: [
        "Account details: name, email, phone number, and password when you register.",
        "Ride data: GPS location, route history, speed, and distance to operate your journeys.",
        "Payment info: processed via PCI-compliant partners — we never store full card numbers.",
        "Device data: device type, OS version, app version, and unique device identifiers.",
        "Usage analytics: features used, screens visited, and session duration.",
        "Support communications: any messages or feedback you send to our team.",
      ],
    },
    {
      num: "02",
      title: "How We Use Your Data",
      content: [
        "Operating, maintaining, and improving our scooter fleet and platform.",
        "Processing payments and managing your subscription or ride credits.",
        "Sending ride receipts, account alerts, and service updates.",
        "Detecting and preventing fraud, unsafe riding, or misuse.",
        "Optimizing scooter placement and fleet availability in your city.",
        "Sending promotional offers — only with your explicit consent.",
      ],
    },
    {
      num: "03",
      title: "Data Sharing",
      content: [
        "Service Providers: payment processors and cloud infrastructure bound by strict data agreements.",
        "City Partners: aggregated, anonymized ride data for urban mobility planning only.",
        "Legal Requirements: when compelled by valid court orders or applicable law.",
        "Business Transfers: you'll be notified and given options before any acquisition-related change.",
      ],
    },
    {
      num: "04",
      title: "Your Rights",
      content: [
        "Access: request a copy of all data we hold about you.",
        "Correction: update inaccurate or incomplete information at any time.",
        "Deletion: request erasure of your data, subject to legal retention obligations.",
        "Portability: receive your data in a structured, machine-readable format.",
        "Withdraw Consent: where processing is consent-based, withdraw it at any time.",
      ],
    },
    {
      num: "05",
      title: "Security",
      content: [
        "AES-256 encryption at rest; TLS 1.3 for all data in transit.",
        "Role-based access controls limiting employee access to personal data.",
        "Regular third-party penetration testing and security audits.",
        "Breach notification within 72 hours where legally required.",
      ],
    },
  ]

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
      <div className="absolute top-1/3 left-0 w-[300px] h-[300px] rounded-full bg-teal-400/6 blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-2xl flex flex-col gap-10">

        {/* Badge */}
        <div className="flex items-center gap-2 text-[10px] sm:text-xs tracking-[0.18em] uppercase text-gray-400 border border-white/10 px-3 sm:px-4 py-1.5 rounded-full w-fit">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse shrink-0" />
          Legal · Privacy Policy
        </div>

        {/* Heading */}
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none uppercase">
            <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">Privacy</span>
            <br />
            <span className="text-white">Policy</span>
          </h1>
          <p className="text-gray-500 text-xs tracking-[0.1em] mt-2">
            Effective January 1, 2026 · Last updated February 2026
          </p>
        </div>

        {/* Intro card */}
        <div className="bg-white/3 border border-white/8 rounded-2xl px-5 py-5">
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-light">
            At Rylton, your privacy is not a checkbox — it's a commitment. This policy explains exactly what data we collect when you use our electric scooters, app, and website, and how we protect it.
          </p>
        </div>

        {/* Divider */}
        <div className="w-16 h-px bg-gradient-to-r from-teal-400/0 via-teal-400/50 to-teal-400/0" />

        {/* Sections */}
        <div className="flex flex-col gap-6">
          {sections.map((s) => (
            <div key={s.num} className="bg-white/3 border border-white/8 rounded-2xl px-5 py-5 flex flex-col gap-3 hover:border-teal-500/20 transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-[10px] uppercase tracking-[0.16em] text-teal-400 font-semibold border border-teal-500/20 px-2 py-0.5 rounded-full">
                  {s.num}
                </span>
                <h2 className="text-sm sm:text-base font-semibold text-white tracking-tight">{s.title}</h2>
              </div>
              <ul className="flex flex-col gap-2">
                {s.content.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-400 text-xs sm:text-sm leading-relaxed font-light">
                    <span className="text-teal-400 mt-0.5 shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact card */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 bg-white/3 border border-white/8 rounded-2xl px-5 py-5 flex flex-col gap-2 hover:border-teal-500/20 transition-colors">
            <span className="text-[10px] uppercase tracking-[0.16em] text-teal-400 font-semibold">Privacy Team</span>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light">
              Questions, access requests, or concerns about your data.
            </p>
            <a
              href="mailto:rylton89@gmail.com"
              className="mt-1 text-sm text-white font-medium hover:text-teal-400 transition-colors inline-flex items-center gap-1.5 group"
            >
              rylton89@gmail.com
              <svg className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
          <div className="flex-1 bg-white/3 border border-white/8 rounded-2xl px-5 py-5 flex flex-col gap-2 hover:border-blue-500/20 transition-colors">
            <span className="text-[10px] uppercase tracking-[0.16em] text-blue-400 font-semibold">Data Protection Officer</span>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light">
              For formal data protection inquiries and GDPR matters.
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

        <p className="text-xs text-gray-600 text-center">We respond within 30 days. Your data, your rights.</p>
      </div>
    </main>
  )
}