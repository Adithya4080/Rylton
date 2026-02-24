"use client"

export default function TermsPage() {
  const sections = [
    {
      num: "01",
      title: "Acceptance of Terms",
      accent: "teal",
      content: [
        "These Terms constitute a legally binding agreement between you and Rylton Technologies, Inc.",
        "By creating an account, downloading our app, or unlocking any scooter, you agree to be bound by these Terms.",
        "These Terms apply alongside our Privacy Policy and Cookie Policy.",
      ],
    },
    {
      num: "02",
      title: "Eligibility",
      accent: "teal",
      content: [
        "You must be at least 18 years of age to use Rylton.",
        "You must hold a valid driver's license or local equivalent where required by law.",
        "You must be legally permitted to operate an electric scooter in your jurisdiction.",
        "Rylton reserves the right to verify eligibility at any time.",
      ],
    },
    {
      num: "03",
      title: "Ride Rules & Safety",
      accent: "teal",
      content: [
        "Wear a helmet at all times during your ride.",
        "Obey all local traffic laws, speed limits, and road signs.",
        "Ride only in permitted zones as shown in the Rylton app.",
        "Park only in designated areas — never block pedestrian paths.",
        "Do not ride under the influence of alcohol, drugs, or any impairing substance.",
        "Each scooter is for a single rider only. No passengers.",
        "Inspect the scooter before each ride and report damage immediately.",
      ],
    },
    {
      num: "04",
      title: "Fees & Payments",
      accent: "blue",
      content: [
        "Pricing is displayed in-app at the time of your ride and is subject to change by location and time.",
        "You must maintain a valid payment method on your account at all times.",
        "Subscription plans auto-renew. Cancel anytime in-app before the next billing period.",
        "Disputes must be raised within 14 days of the charge. No partial refunds for unused subscription periods.",
      ],
    },
    {
      num: "05",
      title: "Prohibited Conduct",
      accent: "blue",
      content: [
        "Tampering with, vandalizing, or attempting to disassemble any Rylton scooter.",
        "Using scooters for commercial purposes without written permission.",
        "Circumventing geofencing, GPS tracking, or other technical systems.",
        "Creating multiple accounts to abuse promotions or credits.",
        "Attempting to hack, reverse-engineer, or exploit the Rylton platform.",
      ],
    },
    {
      num: "06",
      title: "Liability & Disclaimers",
      accent: "blue",
      content: [
        "Riding electric scooters involves inherent risks. By using Rylton, you accept these risks voluntarily.",
        "Rylton's liability for any claim is limited to the total amount paid in the 30 days preceding the incident.",
        "You agree to indemnify Rylton from any claims arising from your violation of these Terms.",
        "Services are provided 'as is' with no warranties regarding uninterrupted availability.",
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-[#060910] text-white flex flex-col items-center px-4 pt-28 sm:pt-32 pb-16 sm:pb-24 sm:py-24 relative overflow-hidden">

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
          Legal · Terms of Service
        </div>

        {/* Heading */}
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none uppercase">
            <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">Terms</span>
            <br />
            <span className="text-white">of Service</span>
          </h1>
          <p className="text-gray-500 text-xs tracking-[0.1em] mt-2">
            Effective January 1, 2026 · Last updated February 2026 · Version 3.1
          </p>
        </div>

        {/* Intro card */}
        <div className="bg-white/3 border border-white/8 rounded-2xl px-5 py-5">
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-light">
            Please read these terms carefully before using Rylton. By accessing our app or unlocking a scooter, you agree to be legally bound by this agreement. If you do not agree, do not use our services.
          </p>
        </div>

        {/* Divider */}
        <div className="w-16 h-px bg-gradient-to-r from-teal-400/0 via-teal-400/50 to-teal-400/0" />

        {/* Warning card */}
        <div className="bg-orange-500/5 border border-orange-500/15 rounded-2xl px-5 py-4 flex items-start gap-3">
          <span className="text-orange-400 text-base mt-0.5 shrink-0">⚠</span>
          <p className="text-orange-300/80 text-xs sm:text-sm leading-relaxed font-light">
            If you suspect unauthorized access to your account, notify us immediately at{" "}
            <a href="mailto:rylton89@gmail.com" className="text-orange-400 hover:underline">rylton89@gmail.com</a>.
            You remain liable for charges incurred before we are notified.
          </p>
        </div>

        {/* Sections */}
        <div className="flex flex-col gap-6">
          {sections.map((s) => (
            <div
              key={s.num}
              className={`bg-white/3 border border-white/8 rounded-2xl px-5 py-5 flex flex-col gap-3 transition-colors ${
                s.accent === "teal" ? "hover:border-teal-500/20" : "hover:border-blue-500/20"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`text-[10px] uppercase tracking-[0.16em] font-semibold border px-2 py-0.5 rounded-full ${
                  s.accent === "teal"
                    ? "text-teal-400 border-teal-500/20"
                    : "text-blue-400 border-blue-500/20"
                }`}>
                  {s.num}
                </span>
                <h2 className="text-sm sm:text-base font-semibold text-white tracking-tight">{s.title}</h2>
              </div>
              <ul className="flex flex-col gap-2">
                {s.content.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-400 text-xs sm:text-sm leading-relaxed font-light">
                    <span className={`mt-0.5 shrink-0 ${s.accent === "teal" ? "text-teal-400" : "text-blue-400"}`}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>


        <p className="text-xs text-gray-600 text-center">Last updated February 2026. Continued use constitutes acceptance.</p>
      </div>
    </main>
  )
}