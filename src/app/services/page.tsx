"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useBooking } from "@/context/BookingContext";

// ─── ICONS ─────────────────────────────────────────────────────────────────────
function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 010 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}
function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" />
    </svg>
  );
}
function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
function HeartPulseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
    </svg>
  );
}
function XrayWaveIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  );
}
function HomeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}
function BoltIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}
function FileIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

// ─── MARQUEE STRIP (reused) ─────────────────────────────────────────────────────
function ServicesMarquee() {
  const items = [
    "PORTABLE X-RAY AT HOME", "ATOMIC ENERGY CERTIFIED", "12-LEAD ECG DOORSTEP",
    "24H & 48H HOLTER", "REPORTS IN 15 MINS", "SERVING ALL DELHI NCR",
    "SENIOR CITIZEN PRIORITY", "ZERO HOSPITAL TRAVEL", "CARDIOLOGIST SIGNED REPORTS",
  ];
  const doubled = [...items, ...items];
  return (
    <div className="bg-[#1a3fdb] overflow-hidden py-3 select-none">
      <div className="flex w-max animate-marquee-strip whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 mx-6">
            <span className="text-white font-bold text-xs sm:text-sm tracking-widest uppercase">{item}</span>
            <svg className="w-3 h-3 text-blue-200 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── STAT COUNTER ───────────────────────────────────────────────────────────────
function StatBadge({ value, label, color }: { value: string; label: string; color: string }) {
  return (
    <div className="text-center">
      <div className={`text-3xl sm:text-4xl font-black ${color}`}>{value}</div>
      <div className="text-xs sm:text-sm text-gray-500 font-medium mt-0.5">{label}</div>
    </div>
  );
}

// ─── XRAY SUB-SERVICES ─────────────────────────────────────────────────────────
const xrayScans = [
  { title: "Chest X-Ray", desc: "Lungs, heart & ribs", img: "/services/chest-xray.jpg" },
  { title: "Spine X-Ray", desc: "Cervical, lumbar & disc", img: "/services/spine-xray.jpg" },
  { title: "Limb & Joint", desc: "Fractures & arthritis", img: "/services/hand-xray.jpg" },
  { title: "Pelvis & Hip", desc: "Fall trauma & fractures", img: "/services/other-xray.jpg" },
];

const xrayFeatures = [
  { icon: <ShieldIcon className="w-5 h-5" />, title: "AERB Certified Safety", desc: "Atomic Energy Board approved radiation protocols with lead shielding" },
  { icon: <ClockIcon className="w-5 h-5" />, title: "Report in 15–20 Min", desc: "MD Radiologist verified digital DICOM reports via WhatsApp" },
  { icon: <HomeIcon className="w-5 h-5" />, title: "No Movement Required", desc: "Performed gently on your bed — zero patient repositioning stress" },
  { icon: <XrayWaveIcon className="w-5 h-5" />, title: "150-Micron DR Detector", desc: "High-DPI digital flat-panel detector for hospital-grade clarity" },
];

// ─── ECG SUB-SERVICES ──────────────────────────────────────────────────────────
const ecgVariants = [
  { title: "12-Lead ECG", desc: "Arrhythmia & ischemia", color: "from-red-500 to-rose-600" },
  { title: "24H Holter", desc: "Continuous rhythm tracing", color: "from-rose-600 to-pink-600" },
  { title: "48H Holter", desc: "Extended episode capture", color: "from-pink-500 to-fuchsia-600" },
  { title: "Pre-Op Clearance", desc: "Cardiac fitness for surgery", color: "from-fuchsia-500 to-purple-600" },
];

const ecgFeatures = [
  { icon: <HeartPulseIcon className="w-5 h-5" />, title: "Cardiologist Signed", desc: "Immediate cloud tele-cardiology review by Senior MD Cardiologist" },
  { icon: <ClockIcon className="w-5 h-5" />, title: "Report in 15 Min", desc: "Official PDF report delivered instantly via WhatsApp" },
  { icon: <ShieldIcon className="w-5 h-5" />, title: "Sterile Electrode Patches", desc: "Single-use pre-gelled sterile ECG leads for every patient" },
  { icon: <FileIcon className="w-5 h-5" />, title: "Full Rhythm Strip", desc: "12-channel high-fidelity strip with computerized analysis" },
];

// ─── COMPARISON TABLE ──────────────────────────────────────────────────────────
const comparisonRows = [
  { feature: "Visits to hospital", us: "Zero — we come to you", hospital: "Required every time" },
  { feature: "Report delivery time", us: "15 minutes via WhatsApp", hospital: "1–3 days typically" },
  { feature: "Comfort during scan", us: "On your own bed", hospital: "Waiting room + transit pain" },
  { feature: "Radiation safety", us: "AERB certified equipment", hospital: "Varies by machine age" },
  { feature: "Report verified by", us: "MD Radiologist / Cardiologist", hospital: "May vary" },
  { feature: "Availability", us: "24×7 emergency dispatch", hospital: "OPD hours only" },
];

// ─── FAQ ───────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "How quickly can you arrive at my home?",
    a: "Our dispatch team arrives within 60 minutes of booking in most Delhi NCR locations. Emergency priority slots are available 24×7.",
  },
  {
    q: "Is portable X-ray radiation safe at home?",
    a: "Absolutely. Our portable X-ray machine is AERB (Atomic Energy Regulatory Board) certified. We use lead shielding aprons and all standard radiation safety protocols. The radiation dose is minimal and identical to hospital machines.",
  },
  {
    q: "Who verifies the ECG and X-ray reports?",
    a: "All X-ray reports are signed by an MD Radiologist. ECG reports are reviewed and signed by a Senior MD Cardiologist — delivered to you within 15 minutes of the scan.",
  },
  {
    q: "Can a bedridden patient use this service?",
    a: "Yes — this service is specifically designed for bedridden patients. Our trained technicians perform all scans without requiring the patient to sit up, stand, or move from their bed.",
  },
  {
    q: "Do you serve outside Delhi NCR?",
    a: "Currently we serve Delhi, Noida, Ghaziabad, and Gurugram. Call 9205761556 to check availability in your pincode — we may be able to arrange a priority dispatch.",
  },
];

// ─── PAGE ──────────────────────────────────────────────────────────────────────
export default function ServicesPage() {
  const { openBooking } = useBooking();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Navbar />

      <main className="flex-1">

        {/* ══════════════════════════════════════════════════════════════
            HERO — Full-bleed split with animated gradient
        ══════════════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0a1f6e] via-[#0d2d9a] to-[#1a3fdb] text-white pt-20 pb-0">
          {/* Decorative orbs */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
          {/* Dot grid */}
          <div className="absolute inset-0 opacity-[0.07] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-end">
              {/* Left text */}
              <div className="pb-16 lg:pb-24 pt-6">
                {/* Pill */}
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-6">
                  <span className="w-2 h-2 bg-cyan-300 rounded-full animate-pulse" />
                  Delhi NCR · 24×7 Doorstep Diagnostics
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-[3.6rem] font-black leading-[1.07] tracking-tight mb-6">
                  Two Services.<br />
                  <span className="text-cyan-300">One Mission.</span><br />
                  <span className="text-white/80 text-3xl sm:text-4xl font-extrabold">Healthcare at Your Door.</span>
                </h1>
                <p className="text-blue-100 text-sm sm:text-base leading-relaxed max-w-lg mb-8">
                  We specialize in exactly two hospital-grade diagnostics — Portable Digital X-Ray and 12-Lead ECG — both performed by certified professionals at your doorstep, with verified reports in 15 minutes.
                </p>

                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => openBooking("Chest X-ray")}
                    className="inline-flex items-center gap-2 bg-white text-blue-700 px-6 py-3.5 rounded-2xl font-bold text-sm hover:bg-blue-50 transition-all shadow-xl cursor-pointer"
                  >
                    Book X-Ray <ArrowRightIcon className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => openBooking("12-Lead ECG")}
                    className="inline-flex items-center gap-2 bg-cyan-400/20 hover:bg-cyan-400/30 border border-cyan-300/40 text-white px-6 py-3.5 rounded-2xl font-bold text-sm transition-all cursor-pointer"
                  >
                    Book ECG <HeartPulseIcon className="w-4 h-4" />
                  </button>
                </div>

                {/* Trust row */}
                <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-blue-100">
                  <div className="flex items-center gap-1.5"><ShieldIcon className="w-4 h-4 text-cyan-300" /> AERB Certified</div>
                  <div className="flex items-center gap-1.5"><ClockIcon className="w-4 h-4 text-cyan-300" /> Reports in 15 Min</div>
                  <div className="flex items-center gap-1.5"><StarIcon className="w-4 h-4 text-yellow-300" /> 4.9 / 5 Rating</div>
                  <div className="flex items-center gap-1.5"><HomeIcon className="w-4 h-4 text-cyan-300" /> Zero Hospital Visit</div>
                </div>
              </div>

              {/* Right: stacked image cards */}
              <div className="relative h-80 sm:h-96 lg:h-auto lg:min-h-[520px] flex items-end justify-center lg:justify-end pb-0">
                {/* Back card — X-ray */}
                <div className="absolute right-0 bottom-0 w-72 sm:w-80 lg:w-96 h-56 sm:h-64 lg:h-72 rounded-t-3xl overflow-hidden shadow-2xl border border-white/10">
                  <Image src="/services/xray-portable.png" alt="Portable X-Ray" fill className="object-cover" sizes="400px" />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-[11px] font-bold text-cyan-300 uppercase tracking-widest mb-0.5">Service 01</div>
                    <div className="text-white font-black text-lg">Portable Digital X-Ray</div>
                  </div>
                </div>
                {/* Front card — ECG */}
                <div className="absolute right-32 sm:right-44 lg:right-52 bottom-20 sm:bottom-28 w-56 sm:w-64 lg:w-72 h-44 sm:h-52 lg:h-60 rounded-3xl overflow-hidden shadow-2xl border border-white/20 ring-2 ring-cyan-300/30">
                  <Image src="/services/ecg-patient.png" alt="ECG at Home" fill className="object-cover" sizes="300px" />
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-900/80 via-rose-900/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-[11px] font-bold text-rose-300 uppercase tracking-widest mb-0.5">Service 02</div>
                    <div className="text-white font-black text-lg">12-Lead ECG</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Marquee Strip */}
        <ServicesMarquee />

        {/* ══════════════════════════════════════════════════════════════
            STATS BAR
        ══════════════════════════════════════════════════════════════ */}
        <section className="bg-white py-10 border-b border-gray-100 shadow-sm">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-4 gap-8 divide-x divide-gray-100">
            <StatBadge value="15,000+" label="Scans Completed" color="text-blue-600" />
            <StatBadge value="15 Min" label="Average Report Time" color="text-emerald-600" />
            <StatBadge value="100%" label="AERB Certified" color="text-blue-600" />
            <StatBadge value="4.9★" label="Patient Rating" color="text-amber-500" />
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            SERVICE 01 — PORTABLE X-RAY
        ══════════════════════════════════════════════════════════════ */}
        <section id="xray" className="py-20 sm:py-28 bg-gradient-to-b from-[#f0f7ff] to-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Section label */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
                <XrayWaveIcon className="w-5 h-5 text-white" />
              </div>
              <span className="text-xs font-black uppercase tracking-widest text-blue-600">Service 01</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
              {/* Left — content */}
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight leading-tight mb-4">
                  Portable Digital<br />
                  <span className="text-blue-600">X-Ray at Home</span>
                </h2>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
                  Hospital-standard digital radiography performed at your bedside — zero patient movement, zero hospital queue. Our AERB-certified team arrives within 60 minutes, captures crisp images on a high-DPI flat-panel detector, and delivers a Radiologist-verified digital report in just 15–20 minutes.
                </p>

                {/* Sub-scans grid */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {xrayScans.map((scan) => (
                    <div key={scan.title} className="relative h-28 rounded-2xl overflow-hidden group cursor-pointer" onClick={() => openBooking(scan.title)}>
                      <Image src={scan.img} alt={scan.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="200px" />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent" />
                      <div className="absolute bottom-2.5 left-3">
                        <div className="text-white font-bold text-xs sm:text-sm">{scan.title}</div>
                        <div className="text-blue-200 text-[10px]">{scan.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {xrayFeatures.map((f) => (
                    <div key={f.title} className="flex items-start gap-3">
                      <div className="w-9 h-9 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center shrink-0 text-blue-600">{f.icon}</div>
                      <div>
                        <div className="font-bold text-gray-900 text-sm">{f.title}</div>
                        <div className="text-gray-500 text-xs leading-snug">{f.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => openBooking("Chest X-ray")}
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 rounded-2xl font-bold text-sm shadow-lg shadow-blue-200 transition-all cursor-pointer"
                  >
                    Book X-Ray Now <ArrowRightIcon className="w-4 h-4" />
                  </button>
                  <a href="tel:+919205761556" className="inline-flex items-center gap-2 border border-blue-200 text-blue-700 px-6 py-3.5 rounded-2xl font-bold text-sm hover:bg-blue-50 transition-all">
                    <PhoneIcon className="w-4 h-4" /> Call Now
                  </a>
                </div>
              </div>

              {/* Right — big image with floating badges */}
              <div className="relative">
                {/* Main image */}
                <div className="relative h-80 sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image src="/services/xray-tech.png" alt="Digital X-Ray Services" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
                </div>

                {/* Floating badge — top left */}
                <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 bg-white rounded-2xl shadow-xl border border-blue-100 p-3 sm:p-4 max-w-[160px]">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center">
                      <ShieldIcon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-wide">AERB Safe</span>
                  </div>
                  <div className="text-xs text-gray-600 font-medium leading-snug">Certified radiation safety at home</div>
                </div>

                {/* Floating badge — bottom right */}
                <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-blue-600 rounded-2xl shadow-xl p-3 sm:p-4 max-w-[160px]">
                  <div className="text-white font-black text-2xl sm:text-3xl">15<span className="text-sm font-bold">min</span></div>
                  <div className="text-blue-100 text-[11px] font-semibold leading-snug">Radiologist<br />verified report</div>
                </div>

                {/* Floating scan types row */}
                <div className="absolute bottom-6 left-4 right-16 sm:right-20 flex gap-2 flex-wrap">
                  {["Chest", "Spine", "Hip", "Limb"].map((type) => (
                    <span key={type} className="bg-white/90 backdrop-blur-sm text-blue-700 text-[10px] font-black px-2.5 py-1 rounded-full shadow-sm border border-blue-100">
                      {type} X-Ray
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            DIVIDER — Blue accent
        ══════════════════════════════════════════════════════════════ */}
        <div className="relative overflow-hidden h-20 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 flex items-center justify-center">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
          <div className="relative flex flex-wrap items-center justify-center gap-x-8 gap-y-2 px-4">
            {["Same-Day Service", "Sterile Equipment", "No Hospital Queue", "Pan Delhi NCR", "Emergency Dispatch 24×7"].map((item) => (
              <span key={item} className="flex items-center gap-2 text-white text-xs font-bold">
                <CheckIcon className="w-3.5 h-3.5 text-cyan-300" /> {item}
              </span>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            SERVICE 02 — ECG AT HOME
        ══════════════════════════════════════════════════════════════ */}
        <section id="ecg" className="py-20 sm:py-28 bg-gradient-to-b from-[#fff5f5] to-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Section label */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-rose-600 rounded-xl flex items-center justify-center shadow-lg shadow-rose-200">
                <HeartPulseIcon className="w-5 h-5 text-white" />
              </div>
              <span className="text-xs font-black uppercase tracking-widest text-rose-600">Service 02</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
              {/* Left — big image with ECG wave overlay */}
              <div className="relative order-2 lg:order-1">
                <div className="relative h-80 sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image src="/services/ecg-patient.png" alt="ECG at Home" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-900/40 to-transparent" />
                  {/* ECG Wave SVG overlay */}
                  <div className="absolute bottom-6 left-4 right-4">
                    <svg viewBox="0 0 400 60" className="w-full opacity-70" fill="none">
                      <polyline points="0,30 40,30 55,10 65,50 75,15 90,45 100,30 160,30 175,5 185,55 195,20 210,45 220,30 400,30" stroke="#f43f5e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                {/* Floating badge — top right */}
                <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-white rounded-2xl shadow-xl border border-rose-100 p-3 sm:p-4 max-w-[160px]">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-7 h-7 bg-rose-600 rounded-lg flex items-center justify-center">
                      <HeartPulseIcon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[10px] font-black text-rose-600 uppercase tracking-wide">Cardiologist</span>
                  </div>
                  <div className="text-xs text-gray-600 font-medium leading-snug">MD signed report in 15 minutes</div>
                </div>

                {/* Floating badge — bottom left */}
                <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-rose-600 rounded-2xl shadow-xl p-3 sm:p-4 max-w-[160px]">
                  <div className="text-white font-black text-2xl sm:text-3xl">12<span className="text-sm font-bold">-lead</span></div>
                  <div className="text-rose-100 text-[11px] font-semibold leading-snug">Clinical grade<br />cardiograph</div>
                </div>
              </div>

              {/* Right — content */}
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight leading-tight mb-4">
                  12-Lead ECG &<br />
                  <span className="text-rose-600">Holter Monitoring</span>
                </h2>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
                  Complete cardiac electrocardiogram performed by certified cardiac technicians at your home. Instant detection of arrhythmias, heart blocks, pre-operative clearances, and unexplained chest palpitations — with a Senior Cardiologist-signed report delivered within 15 minutes.
                </p>

                {/* ECG variants */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {ecgVariants.map((v) => (
                    <div
                      key={v.title}
                      onClick={() => openBooking(v.title)}
                      className={`bg-gradient-to-br ${v.color} rounded-2xl p-4 cursor-pointer hover:shadow-lg transition-all group`}
                    >
                      <div className="text-white font-black text-sm sm:text-base mb-0.5 group-hover:scale-105 transition-transform">{v.title}</div>
                      <div className="text-white/70 text-[11px]">{v.desc}</div>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {ecgFeatures.map((f) => (
                    <div key={f.title} className="flex items-start gap-3">
                      <div className="w-9 h-9 bg-rose-50 border border-rose-100 rounded-xl flex items-center justify-center shrink-0 text-rose-600">{f.icon}</div>
                      <div>
                        <div className="font-bold text-gray-900 text-sm">{f.title}</div>
                        <div className="text-gray-500 text-xs leading-snug">{f.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => openBooking("12-Lead ECG")}
                    className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white px-7 py-3.5 rounded-2xl font-bold text-sm shadow-lg shadow-rose-200 transition-all cursor-pointer"
                  >
                    Book ECG Now <ArrowRightIcon className="w-4 h-4" />
                  </button>
                  <Link href="/ecg" className="inline-flex items-center gap-2 border border-rose-200 text-rose-700 px-6 py-3.5 rounded-2xl font-bold text-sm hover:bg-rose-50 transition-all">
                    ECG Details <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            HOW WE STAND OUT — Comparison Table (SalvaMedic style)
        ══════════════════════════════════════════════════════════════ */}
        <section className="py-20 sm:py-28 bg-gradient-to-b from-[#f7f9fc] to-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs font-black uppercase tracking-widest text-blue-600 block mb-2">Why Choose Us</span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight">
                Xray on Call vs. <span className="text-blue-600">Traditional Hospital</span>
              </h2>
              <p className="text-gray-500 text-sm mt-3 max-w-xl mx-auto">We built this service to remove every friction point patients face when they need urgent diagnostics.</p>
            </div>

            <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-xl">
              {/* Table Header */}
              <div className="grid grid-cols-3 bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
                <div className="p-4 sm:p-5 font-bold text-xs sm:text-sm text-blue-100">Feature</div>
                <div className="p-4 sm:p-5 font-black text-sm sm:text-base text-center border-x border-white/20 bg-white/10">
                  <span className="text-cyan-300">✦</span> Xray on Call
                </div>
                <div className="p-4 sm:p-5 font-bold text-xs sm:text-sm text-center text-blue-200">Traditional Hospital</div>
              </div>
              {/* Rows */}
              {comparisonRows.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-3 border-b border-gray-100 last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-blue-50/40"}`}
                >
                  <div className="p-4 sm:p-5 text-xs sm:text-sm font-bold text-gray-700 flex items-center">{row.feature}</div>
                  <div className="p-4 sm:p-5 text-xs sm:text-sm text-blue-700 font-semibold flex items-center justify-center gap-1.5 border-x border-gray-100 text-center">
                    <CheckIcon className="w-4 h-4 text-emerald-500 shrink-0" /> {row.us}
                  </div>
                  <div className="p-4 sm:p-5 text-xs sm:text-sm text-gray-500 flex items-center justify-center text-center">{row.hospital}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            PROCESS — 4-step visual (SalvaMedic style)
        ══════════════════════════════════════════════════════════════ */}
        <section className="py-20 sm:py-28 bg-gradient-to-br from-[#0a1f6e] to-[#1a3fdb] text-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="text-xs font-black uppercase tracking-widest text-cyan-300 block mb-2">The Process</span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight">How It Works</h2>
              <p className="text-blue-200 text-sm mt-3">From booking to your verified report — in under 90 minutes.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {/* Connecting line */}
              <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-cyan-400/0 via-cyan-400/60 to-cyan-400/0 z-0" />

              {[
                { num: "01", icon: <PhoneIcon className="w-7 h-7" />, title: "Book Online or Call", desc: "Book via website form or call 9205761556. Confirm your address and service needed." },
                { num: "02", icon: <BoltIcon className="w-7 h-7" />, title: "Dispatch in 10 Min", desc: "Our certified technician is dispatched immediately with all equipment packed and sanitized." },
                { num: "03", icon: <HomeIcon className="w-7 h-7" />, title: "Home Visit in 60 Min", desc: "Team arrives at your location, sets up safely, and performs the scan on your bed." },
                { num: "04", icon: <FileIcon className="w-7 h-7" />, title: "Report in 15 Min", desc: "MD Radiologist or Cardiologist verifies and sends your digital report via WhatsApp." },
              ].map((step, i) => (
                <div key={i} className="relative z-10 bg-white/10 backdrop-blur-sm border border-white/15 rounded-3xl p-6 hover:bg-white/15 transition-all group">
                  <div className="text-xs font-black text-cyan-300 uppercase tracking-widest mb-4">{step.num}</div>
                  <div className="w-14 h-14 bg-white/15 group-hover:bg-white/25 rounded-2xl flex items-center justify-center mb-5 transition-all text-white">
                    {step.icon}
                  </div>
                  <h3 className="font-black text-white text-base mb-2">{step.title}</h3>
                  <p className="text-blue-200 text-xs sm:text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            FAQ SECTION (PrepEVC-inspired accordion style)
        ══════════════════════════════════════════════════════════════ */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs font-black uppercase tracking-widest text-blue-600 block mb-2">FAQ</span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight">Questions & Answers</h2>
              <p className="text-gray-500 text-sm mt-3">Everything you need to know before booking.</p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`border rounded-2xl overflow-hidden transition-all duration-200 ${openFaq === i ? "border-blue-200 shadow-md" : "border-gray-200"}`}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left bg-white hover:bg-blue-50/40 transition-colors cursor-pointer"
                  >
                    <span className="font-bold text-gray-900 text-sm sm:text-base">{faq.q}</span>
                    <span className={`w-7 h-7 shrink-0 rounded-full flex items-center justify-center transition-all ${openFaq === i ? "bg-blue-600 text-white rotate-45" : "bg-gray-100 text-gray-500"}`}>
                      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm text-gray-600 leading-relaxed bg-blue-50/30 border-t border-blue-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            FINAL CTA BANNER
        ══════════════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0a1f6e] via-[#1a3fdb] to-[#0d2d9a] py-20 text-white">
          <div className="absolute inset-0 opacity-[0.07] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-6">
              <span className="w-2 h-2 bg-cyan-300 rounded-full animate-ping" /> Emergency dispatch available 24×7
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4">
              Ready to skip the hospital?<br />
              <span className="text-cyan-300">We come to you.</span>
            </h2>
            <p className="text-blue-100 text-sm sm:text-base max-w-xl mx-auto mb-10 leading-relaxed">
              Book a Portable X-Ray or ECG right now. Our team will be at your doorstep within 60 minutes — reports delivered in 15 minutes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <button
                onClick={() => openBooking("Chest X-ray")}
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-2xl font-black text-sm hover:bg-blue-50 transition-all shadow-xl cursor-pointer"
              >
                <XrayWaveIcon className="w-5 h-5" /> Book X-Ray
              </button>
              <button
                onClick={() => openBooking("12-Lead ECG")}
                className="inline-flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 rounded-2xl font-black text-sm transition-all shadow-xl shadow-rose-900/40 cursor-pointer"
              >
                <HeartPulseIcon className="w-5 h-5" /> Book ECG
              </button>
              <a
                href="tel:+919205761556"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-2xl font-black text-sm transition-all"
              >
                <PhoneIcon className="w-5 h-5" /> 9205761556
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-6 text-xs text-blue-200">
              <span className="flex items-center gap-1.5"><CheckIcon className="w-3.5 h-3.5 text-cyan-300" /> No advance payment</span>
              <span className="flex items-center gap-1.5"><CheckIcon className="w-3.5 h-3.5 text-cyan-300" /> AERB certified equipment</span>
              <span className="flex items-center gap-1.5"><CheckIcon className="w-3.5 h-3.5 text-cyan-300" /> MD-signed reports</span>
              <span className="flex items-center gap-1.5"><CheckIcon className="w-3.5 h-3.5 text-cyan-300" /> Serving all Delhi NCR</span>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
