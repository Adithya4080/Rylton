'use client';

import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID  = 'service_82xa2xa';
const EMAILJS_TEMPLATE_ID = 'template_3cjv2qp';
const EMAILJS_PUBLIC_KEY  = 'Sn6fCSS-PuqXf1Vv_';

const KERALA_DISTRICTS = [
  'Thiruvananthapuram','Kollam','Pathanamthitta','Alappuzha','Kottayam',
  'Idukki','Ernakulam','Thrissur','Palakkad','Malappuram',
  'Kozhikode','Wayanad','Kannur','Kasaragod',
];

const DEALER_TYPES = [
  'Exclusive EV Showroom',
  'Two-Wheeler Retailer',
  'Service Center + Sales',
  'Online / D2C Dealer',
  'Other',
];

const financials = [
  { label: 'Project Cost',     value: '₹10 Lakhs', icon: '🏗️',  accent: '#f59e0b' },
  { label: 'Own Contribution', value: '₹2 Lakhs',  icon: '💼',  accent: '#34d399' },
  { label: 'Bank Loan',        value: '₹8 Lakhs',  icon: '🏦',  accent: '#60a5fa' },
  { label: 'Subsidy',          value: '₹2 Lakhs',  icon: '🎯',  accent: '#a78bfa' },
];

// ── Custom Dropdown ───────────────────────────────────────────────────────────
function CustomSelect({
  name,
  value,
  onChange,
  options,
  placeholder,
  required,
}: {
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder: string;
  required?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} className="relative w-full">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className={`w-full px-4 py-3 rounded-xl bg-[#0f1117] border text-left transition-colors flex items-center justify-between gap-2
          ${open ? 'border-amber-500/60' : 'border-white/[0.08]'}
          ${value ? 'text-white' : 'text-gray-600'}`}
      >
        <span className="truncate">{value || placeholder}</span>
        <svg
          className={`w-4 h-4 text-gray-500 flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Hidden native input for form validation */}
      <input
        type="text"
        name={name}
        value={value}
        required={required}
        readOnly
        className="sr-only"
        tabIndex={-1}
      />

      {open && (
        <div className="absolute z-50 mt-2 w-full rounded-xl bg-[#0f1117] border border-white/[0.10] shadow-2xl shadow-black/60 overflow-hidden">
          <div className="max-h-56 overflow-y-auto">
            {options.map(opt => (
              <button
                key={opt}
                type="button"
                onClick={() => { onChange(opt); setOpen(false); }}
                className={`w-full px-4 py-2.5 text-left text-sm transition-colors hover:bg-amber-500/10 hover:text-amber-300
                  ${value === opt ? 'text-amber-400 bg-amber-500/5' : 'text-gray-300'}`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function DealershipPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    state: 'Kerala',
    city: '',
    area: '',
    dealerType: '',
    salesVolume: '',
    currentBusiness: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    let formattedValue = value;

    if (name === "phone") {
      // Allow digits and +
      formattedValue = value.replace(/[^\d+]/g, "");

      // Allow only one + and only at the beginning
      if (formattedValue.includes("+")) {
        formattedValue =
          "+" + formattedValue.replace(/\+/g, "").replace(/^\+/, "");
      }
    }

    setFormData((prev) => ({
      ...prev,
      [name]: formattedValue,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  formData.fullName,
          from_email: formData.email,
          phone:      formData.phone,
          message: `
                    🏪 DEALERSHIP APPLICATION

                    District / State : ${formData.city}, ${formData.state}
                    Area / Locality  : ${formData.area}
                    Dealer Type      : ${formData.dealerType}
                    Monthly Sales    : ${formData.salesVolume}
                    Current Business : ${formData.currentBusiness || 'N/A'}

                    Message:
                    ${formData.message}
          `.trim(),
          to_email: 'rylton89@gmail.com',
        },
        EMAILJS_PUBLIC_KEY
      );
      setFormStatus('success');
      setFormData({
        fullName: '', phone: '', email: '', state: 'Kerala', city: '',
        area: '', dealerType: '', salesVolume: '', currentBusiness: '', message: '',
      });
      setTimeout(() => setFormStatus('idle'), 4000);
    } catch (err) {
      console.error(err);
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 4000);
    }
  };

  return (
    <div className="min-h-screen bg-[#080a0e] pt-20 text-white font-sans">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle, #f59e0b 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 px-5 py-2 rounded-full text-sm font-semibold tracking-wide mb-8">
            🤝 Partnership Opportunity
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 tracking-tight">
            Become an{' '}
            <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
              EVIX Dealer
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-4">
            Dealership enquiries solicited across <span className="text-white font-semibold">Kerala</span>.
            Join the electric revolution and build a profitable future with us.
          </p>
        </div>
      </section>

      {/* ── FINANCIAL CARDS ──────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <p className="text-center text-red-500 text-3xl uppercase tracking-widest mb-8 font-medium">
          Investment Breakdown
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {financials.map(({ label, value, icon, accent }) => (
            <div
              key={label}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 flex flex-col items-center text-center gap-3 hover:border-white/20 transition-all duration-300 group"
              style={{ boxShadow: `0 0 0 0 ${accent}` }}
            >
              <span className="text-3xl">{icon}</span>
              <span className="text-2xl font-extrabold max-[400px]:text-xl" style={{ color: accent }}>{value}</span>
              <span className="text-base max-[400px]:text-xs text-pink-700 font-medium uppercase tracking-wider leading-snug">{label}</span>
            </div>
          ))}
        </div>

        {/* Benefits strip */}
        <div className="mt-10 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6 grid md:grid-cols-3 gap-6 text-sm text-gray-300">
          {[
            { icon: '⚡', title: 'Exclusive Territory', desc: 'District-level exclusivity for qualified dealers.' },
            { icon: '🔧', title: 'Full Support', desc: 'Training, marketing materials & after-sales guidance.' },
            { icon: '📈', title: 'High Growth Segment', desc: 'EV adoption in Kerala is accelerating rapidly.' },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="flex gap-3 items-start">
              <span className="text-2xl">{icon}</span>
              <div>
                <p className="text-white font-semibold mb-0.5">{title}</p>
                <p className="text-gray-500 leading-snug">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── APPLICATION FORM ─────────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-6 pb-28">
        <div className="rounded-3xl border border-white/[0.07] bg-white/[0.02] p-8 md:p-10 shadow-2xl">
          <h2 className="text-2xl font-bold mb-1">Dealership Application</h2>
          <p className="text-gray-500 text-sm mb-8">Fields marked with <span className="text-amber-400">*</span> are required</p>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Full Name <span className="text-amber-400">*</span></label>
              <input
                type="text" name="fullName" required
                value={formData.fullName} onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-gray-600 focus:outline-none focus:border-amber-500/60 transition-colors"
              />
            </div>

            {/* Phone + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Phone <span className="text-amber-400">*</span></label>
                <input
                  type="tel" name="phone" required
                  value={formData.phone} onChange={handlePhoneChange}
                  maxLength={15}
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-gray-600 focus:outline-none focus:border-amber-500/60 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email <span className="text-amber-400">*</span></label>
                <input
                  type="email" name="email" required
                  value={formData.email} onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-gray-600 focus:outline-none focus:border-amber-500/60 transition-colors"
                />
              </div>
            </div>

            {/* State (fixed) + District — custom dropdown fixes mobile overflow */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">State <span className="text-amber-400">*</span></label>
                <div className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-gray-400 cursor-not-allowed select-none">
                  Kerala
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">District <span className="text-amber-400">*</span></label>
                <CustomSelect
                  name="city"
                  value={formData.city}
                  onChange={val => setFormData({ ...formData, city: val })}
                  options={KERALA_DISTRICTS}
                  placeholder="Select District"
                  required
                />
              </div>
            </div>

            {/* Area */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Area / Locality <span className="text-amber-400">*</span></label>
              <input
                type="text" name="area" required
                value={formData.area} onChange={handleChange}
                placeholder="Enter area or locality name"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-gray-600 focus:outline-none focus:border-amber-500/60 transition-colors"
              />
            </div>

            {/* Dealer Type — custom dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Dealer Type <span className="text-amber-400">*</span></label>
              <CustomSelect
                name="dealerType"
                value={formData.dealerType}
                onChange={val => setFormData({ ...formData, dealerType: val })}
                options={DEALER_TYPES}
                placeholder="Select Dealer Type"
                required
              />
            </div>

            {/* Sales Volume */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Expected Monthly Sales Volume <span className="text-amber-400">*</span></label>
              <input
                type="text" name="salesVolume" required
                value={formData.salesVolume} onChange={handleChange}
                placeholder="e.g., 10-20 units per month"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-gray-600 focus:outline-none focus:border-amber-500/60 transition-colors"
              />
            </div>

            {/* Current Business */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Current Business</label>
              <input
                type="text" name="currentBusiness"
                value={formData.currentBusiness} onChange={handleChange}
                placeholder="e.g., Auto Dealership, Retail Store"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-gray-600 focus:outline-none focus:border-amber-500/60 transition-colors"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea
                name="message" rows={4}
                value={formData.message} onChange={handleChange}
                placeholder="Tell us about your experience and why you want to partner with us..."
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-gray-600 focus:outline-none focus:border-amber-500/60 transition-colors resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={formStatus === 'submitting'}
              className="w-full py-4 rounded-xl font-bold text-base tracking-wide transition-all duration-300 cursor-pointer
                bg-gradient-to-r from-amber-400 to-yellow-300 text-black
                hover:from-amber-300 hover:to-yellow-200
                disabled:opacity-60 disabled:cursor-not-allowed
                flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
            >
              {formStatus === 'submitting' ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                  </svg>
                  Submitting...
                </>
              ) : (
                <>Submit Application <span>→</span></>
              )}
            </button>

            {/* Success */}
            {formStatus === 'success' && (
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 text-center">
                <p className="text-emerald-400 font-semibold">✓ Application submitted! We'll reach out within 2 business days.</p>
              </div>
            )}
            {/* Error */}
            {formStatus === 'error' && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-center">
                <p className="text-red-400 font-semibold">✗ Something went wrong. Please try again or email us directly.</p>
              </div>
            )}

            <p className="text-center text-xs text-gray-600">
              By submitting, you agree to our{' '}
              <a href="/privacy" className="underline hover:text-gray-400">Privacy Policy</a>
              {' '}and{' '}
              <a href="/terms" className="underline hover:text-gray-400">Terms of Service</a>.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}   