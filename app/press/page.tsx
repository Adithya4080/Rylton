"use client"
export default function PressPage() {
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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-100 sm:w-150 h-75 sm:h-100 rounded-full bg-teal-500/8 blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-62.5 sm:w-100 h-62.5 sm:h-100 rounded-full bg-blue-600/10 blur-[80px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-45 sm:w-75 h-45 sm:h-75 rounded-full bg-teal-400/8 blur-[60px] sm:blur-[100px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-2xl text-center flex flex-col items-center gap-6 sm:gap-8">

        {/* Badge */}
        <span className="flex items-center gap-2 text-[10px] sm:text-xs tracking-[0.18em] uppercase text-gray-400 border border-white/10 px-3 sm:px-4 py-1.5 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse shrink-0" />
          Press & Media
        </span>

        {/* Heading */}
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none uppercase">
            <span className="bg-linear-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
              Rylton
            </span>
            <br />
            <span className="text-white">in the</span>
            <br />
            <span className="text-white">Press</span>
          </h1>
        </div>

        {/* Body */}
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-sm sm:max-w-md font-light">
          We&apos;re just getting started. Press releases, media kits, and coverage resources will be available here soon as we gear up for launch.
        </p>

        {/* Divider */}
        <div className="w-16 h-px bg-linear-to-r from-teal-400/0 via-teal-400/50 to-teal-400/0" />

        {/* Info cards */}
        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-lg">

          {/* Media inquiries card */}
          <div className="flex-1 bg-white/3 border border-white/8 rounded-2xl px-5 py-5 flex flex-col gap-2 text-left hover:border-teal-500/20 transition-colors">
            <span className="text-[10px] uppercase tracking-[0.16em] text-teal-400 font-semibold">Media Inquiries</span>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light">
              Journalists and media professionals can reach our team directly.
            </p>
            <a
              href="mailto:press@rylton.com"
              className="mt-1 text-sm text-white font-medium hover:text-teal-400 transition-colors inline-flex items-center gap-1.5 group"
            >
                rylton89@gmail.com
              <svg className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* About card */}
          <div className="flex-1 bg-white/3 border border-white/8 rounded-2xl px-5 py-5 flex flex-col gap-2 text-left hover:border-blue-500/20 transition-colors">
            <span className="text-[10px] uppercase tracking-[0.16em] text-blue-400 font-semibold">About Rylton</span>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light">
              Building the future of electric mobility — smart, efficient urban scooters for India.
            </p>
            <span className="mt-1 text-xs text-gray-600 font-light italic">Full press kit coming soon</span>
          </div>

        </div>

        <p className="text-xs text-gray-600">No spam. Ever.</p>
      </div>
    </main>
  );
}