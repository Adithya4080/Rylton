"use client";

import { useEffect, useRef } from "react";

interface TestDriveModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TestDriveModal({ isOpen, onClose }: TestDriveModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  // Close on ESC key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const whatsappNumber = "918590418080";
  const whatsappMessage = encodeURIComponent(
    "Hi! I'm interested in booking a test drive for your EV scooter. Could you please share the available slots?"
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      onClick={(e) => e.target === overlayRef.current && onClose()}
      className="fixed inset-0 z-50 flex items-center justify-center p-4
                 bg-black/70 backdrop-blur-md
                 animate-[fadeIn_0.25s_ease_forwards]"
    >
      {/* Modal Card */}
      <div
        className="relative w-full max-w-md rounded-3xl overflow-hidden
                   bg-[#0f1117] border border-white/10
                   shadow-[0_0_80px_rgba(0,229,160,0.12)]
                   animate-[slideUp_0.35s_cubic-bezier(0.34,1.56,0.64,1)_forwards]"
      >
        {/* Top accent line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[3px] w-24
                        rounded-b-full bg-linear-to-r from-emerald-400 to-cyan-400" />

        {/* Glow orb */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-72 h-72
                        rounded-full bg-emerald-400/10 blur-3xl pointer-events-none" />

        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center
                     border border-white/10 bg-white/5 text-white/50
                     hover:bg-white/10 hover:text-white hover:border-white/20
                     transition-all duration-200 text-lg leading-none z-10 cursor-pointer"
        >
          ✕
        </button>

        {/* Content */}
        <div className="relative px-10 pt-12 pb-10 text-center flex flex-col items-center">

          {/* Scooter icon */}
          <div className="w-20 h-20 mb-5 rounded-2xl flex items-center justify-center text-4xl
                          bg-gradient-to-br from-emerald-400/15 to-cyan-400/15
                          border border-emerald-400/25
                          animate-[floatBob_3s_ease-in-out_infinite]">
            🛵
          </div>

          {/* Status badge */}
          <span className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full text-xs
                           font-medium tracking-widest uppercase
                           bg-emerald-400/10 border border-emerald-400/25 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Coming Soon
          </span>

          {/* Heading */}
          <h2 className="text-white font-extrabold text-3xl leading-tight tracking-tight mb-3">
            Test Drive
            <span className="block bg-linear-to-r from-emerald-400 to-cyan-400
                             bg-clip-text text-transparent">
              Booking
            </span>
          </h2>

          {/* Description */}
          <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-8">
            We're putting the finishing touches on our test drive booking experience.
            In the meantime, reach us directly on WhatsApp to schedule yours!
          </p>

          {/* WhatsApp CTA */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-2xl
                       bg-[#25D366] hover:bg-[#20c05c] active:scale-[0.98]
                       text-white font-semibold text-base
                       shadow-[0_0_30px_rgba(37,211,102,0.35)]
                       hover:shadow-[0_0_45px_rgba(37,211,102,0.5)]
                       transition-all duration-200"
          >
            {/* WhatsApp SVG icon */}
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 fill-white shrink-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Chat with us on WhatsApp
          </a>

          {/* Close text link */}
          <button
            onClick={onClose}
            className="mt-5 text-sm text-white/30 hover:text-white/60 transition-colors duration-200
                       underline underline-offset-2 cursor-pointer"
          >
            Maybe later
          </button>
        </div>
      </div>

      {/* Keyframe animations via style tag */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(32px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0)    scale(1);    }
        }
        @keyframes floatBob {
          0%, 100% { transform: translateY(0);   }
          50%       { transform: translateY(-7px); }
        }
      `}</style>
    </div>
  );
}