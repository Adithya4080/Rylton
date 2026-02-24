"use client"
export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#060910] text-white flex flex-col items-center justify-center px-4 sm:px-6 py-16 sm:py-24 relative overflow-hidden">

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
      <div className="absolute top-0 right-0 w-70 sm:w-125 h-70 sm:h-125 rounded-full bg-blue-600/10 blur-[80px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-50 sm:w-87.5 h-50 sm:h-87.5 rounded-full bg-teal-400/10 blur-[60px] sm:blur-[100px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-xl text-center flex flex-col items-center gap-5 sm:gap-6">

        {/* Badge */}
        <span className="flex items-center gap-2 text-[10px] sm:text-xs tracking-[0.18em] uppercase text-gray-400 border border-white/10 px-3 sm:px-4 py-1.5 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse flex-shrink-0" />
          No openings right now
        </span>

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none uppercase">
          <span className="text-white">Drive the</span>
          <br />
          <span className="bg-linear-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            Future
          </span>
        </h1>

        {/* Body */}
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xs sm:max-w-sm font-light">
          We&apos;re not hiring yet — but we&apos;re building something worth waiting for.
          Drop your email and be first in line when we launch.
        </p>

        {/* Email capture */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row w-full max-w-sm gap-2 mt-1 sm:mt-2"
        >
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-teal-500/50 transition-colors"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-teal-400 to-blue-500 text-black font-semibold text-sm rounded-xl px-5 py-3 hover:opacity-90 transition-opacity whitespace-nowrap w-full sm:w-auto"
          >
            Notify me
          </button>
        </form>

        <p className="text-xs text-gray-600 -mt-1 sm:-mt-2">No spam. Ever.</p>
      </div>
    </main>
  );
}