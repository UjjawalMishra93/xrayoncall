"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuickBookingBar from "@/components/QuickBookingBar";
import { useBooking } from "@/context/BookingContext";

// ─── ICON COMPONENTS ─────────────────────────────────────────────────────────
function HeartPulseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
      <path d="M12 7v4l2.5 2" />
    </svg>
  );
}

function EcgWaveIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12h4l2-6l4 12l3-8l2 4h6" />
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

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

function ShieldCheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
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

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function UserIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
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

function DocumentCheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="m9 15 2 2 4-4" />
    </svg>
  );
}

function SparklesIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
    </svg>
  );
}

// ─── REPEATING MARQUEE RIBBON (Seamless Infinite Loop) ──────────────────────
function MarqueeRibbon() {
  const items = [
    "12-Lead Clinical ECG",
    "Pre-Operative Cardiac Clearance",
    "24h & 48h Holter Monitoring",
    "Senior Citizen Bedside Care",
    "15-Minute Verified Digital Report",
    "Atomic Energy Certified Safety",
    "Zero Hospital Commute",
    "Doorstep Dispatch Across Delhi NCR",
  ];

  return (
    <div className="bg-blue-600 text-white py-3.5 sm:py-4 overflow-hidden border-y border-blue-500 shadow-inner select-none pointer-events-none">
      <div className="flex w-max animate-marquee">
        {/* Set 1 */}
        <div className="flex items-center gap-8 pr-8 shrink-0">
          {items.map((item, idx) => (
            <div key={`set1-${idx}`} className="flex items-center gap-3 shrink-0 text-xs sm:text-sm font-bold tracking-wide uppercase">
              <span>{item}</span>
              <EcgWaveIcon className="w-4 h-4 text-blue-200" />
            </div>
          ))}
        </div>
        {/* Set 2 (Exact duplicate for seamless infinite loop) */}
        <div className="flex items-center gap-8 pr-8 shrink-0" aria-hidden="true">
          {items.map((item, idx) => (
            <div key={`set2-${idx}`} className="flex items-center gap-3 shrink-0 text-xs sm:text-sm font-bold tracking-wide uppercase">
              <span>{item}</span>
              <EcgWaveIcon className="w-4 h-4 text-blue-200" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function EcgPage() {
  const { openBooking } = useBooking();

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Navbar />

      <main className="flex-1">
        {/* ── 1. HERO SECTION (Clean Medical Blue + Floating Booking Bar) ── */}
        <section className="relative bg-gradient-to-b from-[#f0f5ff] via-[#f7faff] to-white pt-10 sm:pt-16 pb-20 sm:pb-28 overflow-hidden">
          {/* Subtle geometric background accents */}
          <div className="absolute top-0 right-0 w-96 sm:w-[600px] h-96 sm:h-[600px] bg-blue-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-10 left-0 w-72 h-72 bg-rose-100/30 rounded-full blur-2xl -translate-x-1/3 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
              
              {/* Left Column: Headline, Description & CTAs */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                {/* Pill Badge with Sparkle */}
                <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200/80 text-blue-700 px-3.5 py-1.5 rounded-full text-xs font-bold shadow-2xs">
                  <SparklesIcon className="w-3.5 h-3.5 text-blue-600" />
                  <span>Top-Notch Cardiac Care, Right at Your Doorstep</span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-gray-950 tracking-tight leading-[1.12]">
                  Your Heart Deserves{" "}
                  <span className="text-blue-600 relative inline-block">
                    Immediate, Expert
                    <svg className="absolute -bottom-1.5 left-0 w-full h-2 text-blue-400/40 -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
                      <path d="M0,10 Q50,0 100,10" stroke="currentColor" strokeWidth="8" fill="none" />
                    </svg>
                  </span>{" "}
                  Bedside Care
                </h1>

                <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Avoid stressful hospital commutes and long emergency waits. Certified cardiac technicians arrive at your home with hospital-grade 12-lead digital cardiographs, delivering MD-verified reports in 15 minutes.
                </p>

                {/* Primary CTA Buttons */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
                  <button
                    onClick={() => openBooking("12-Lead ECG at Home")}
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base px-6 sm:px-7 py-3 sm:py-3.5 rounded-full shadow-lg shadow-blue-200 transition-all hover:scale-105 cursor-pointer"
                  >
                    <span>Book Bedside ECG</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </button>

                  <a
                    href="tel:+919205761556"
                    className="inline-flex items-center gap-2.5 bg-white hover:bg-gray-50 border border-gray-200 text-gray-800 font-bold text-sm sm:text-base px-5 sm:px-6 py-3 sm:py-3.5 rounded-full shadow-2xs transition-all hover:border-blue-300"
                  >
                    <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                      <PhoneIcon className="w-3.5 h-3.5" />
                    </div>
                    <span>Call 9205761556</span>
                  </a>
                </div>

                {/* Micro-Trust Tags */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-gray-500 pt-2">
                  <span className="flex items-center gap-1.5">
                    <CheckIcon className="w-4 h-4 text-emerald-600" /> 15-Minute Digital Delivery
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckIcon className="w-4 h-4 text-emerald-600" /> Cardiologist Verified
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckIcon className="w-4 h-4 text-emerald-600" /> Single-Use Sterile Patches
                  </span>
                </div>
              </div>

              {/* Right Column: Doctor / Specialist Graphic Frame with Geometric Arch (Matches Image 2) */}
              <div className="lg:col-span-5 relative flex justify-center">
                <div className="relative w-72 sm:w-88 lg:w-96">
                  {/* Geometric Half-Arch Backdrop */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-t-[10rem] rounded-b-3xl transform rotate-1 scale-105 shadow-2xl opacity-95" />
                  
                  {/* Doctor Image with Arch mask */}
                  <div className="relative z-10 rounded-t-[10rem] rounded-b-3xl overflow-hidden border-4 border-white shadow-xl bg-gray-100">
                    <Image
                      src="/doctor-stethoscope.jpg"
                      alt="Cardiac Diagnostic Specialist"
                      width={600}
                      height={750}
                      className="w-full h-[380px] sm:h-[440px] object-cover"
                      priority
                    />
                  </div>

                  {/* Floating Live Heartbeat Badge */}
                  <div className="absolute -bottom-4 -left-4 sm:-left-6 z-20 bg-white p-3 sm:p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce-slow">
                    <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                      <HeartPulseIcon className="w-6 h-6 animate-pulse" />
                    </div>
                    <div>
                      <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Resting Rhythm</div>
                      <div className="text-sm font-extrabold text-gray-900">72 BPM • Sinus Rhythm</div>
                    </div>
                  </div>

                  {/* Floating Experience Badge */}
                  <div className="absolute top-8 -right-4 sm:-right-6 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-lg border border-gray-100 text-center">
                    <span className="text-lg font-extrabold text-blue-600">12-Lead</span>
                    <p className="text-[10px] font-bold text-gray-600 uppercase">Hospital Grade</p>
                  </div>
                </div>
              </div>

            </div>

            {/* ── FLOATING APPOINTMENT BOOKING DOCK ── */}
            <div className="mt-12 sm:mt-16 max-w-5xl mx-auto">
              <QuickBookingBar
                defaultService="12-Lead ECG"
                defaultSlot="Immediate (30-45 mins)"
                sourcePage="ECG at Home"
                variant="cardiac"
              />
            </div>
          </div>
        </section>

        {/* ── 2. REPEATING BLUE MARQUEE RIBBON ── */}
        <MarqueeRibbon />

        {/* ── 3. ABOUT US - CLINICAL EXPERTISE (Matches Image 2 "About Us") ── */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Organic Cutout Frame with Doctors */}
              <div className="lg:col-span-6 relative flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100 aspect-4/3">
                    <Image
                      src="/doctor-phone.jpg"
                      alt="Cardiac Diagnostic Tele-Consultation"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5 text-white">
                      <p className="font-bold text-sm sm:text-base">Real-Time Cloud Tele-Cardiology</p>
                      <p className="text-xs text-gray-300 mt-0.5">Digitally analyzed & verified by Senior Cardiologists</p>
                    </div>
                  </div>

                  {/* Sparkle Floating Icons */}
                  <div className="absolute -top-4 -left-4 w-9 h-9 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shadow-md">
                    <SparklesIcon className="w-5 h-5" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center font-extrabold text-xs shadow-xl border-2 border-white">
                    24x7
                  </div>
                </div>
              </div>

              {/* Right Column: Narrative & Checkmarks */}
              <div className="lg:col-span-6 space-y-5">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block">
                  About At-Home ECG Care
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-snug">
                  15+ Years of Diagnostic Expertise in Delhi NCR
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  For elderly, post-bypass, or immobility-affected patients, travelling to a clinic in traffic can elevate blood pressure and exacerbate cardiac risk. Our mobile ECG units eliminate that distress entirely.
                </p>

                <div className="space-y-3 pt-2">
                  {[
                    "Hospital-standard 12-lead digital electrocardiograms",
                    "Single-use sterile pre-gelled electrode patches for maximum hygiene",
                    "AERB and clinical safety compliant diagnostic protocol",
                    "Instant digital PDF report sent to WhatsApp and patient email",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckIcon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs sm:text-sm text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3">
                  <button
                    onClick={() => openBooking("12-Lead ECG at Home")}
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full transition-all shadow-md shadow-blue-200 cursor-pointer"
                  >
                    <span>Schedule Bedside Visit</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 4. CARDIAC SERVICES GRID (Matches Image 1 "A Wide Range of Services") ── */}
        <section className="py-16 sm:py-24 bg-gray-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">
                  Our Cardiac Suite
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                  Comprehensive Heart Testing at Home
                </h2>
              </div>
              <button
                onClick={() => openBooking("Cardiac Diagnostic Suite")}
                className="self-start md:self-auto inline-flex items-center gap-2 bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-xs hover:bg-blue-700 cursor-pointer"
              >
                <span>Explore All Tests</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* 3 Main Cardiac Cards with Circular Cutout Icons (Direct match to Image 1) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Card 1: 12-Lead ECG */}
              <div className="bg-white rounded-3xl overflow-hidden border border-gray-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group">
                <div className="relative h-52 w-full overflow-hidden bg-gray-100">
                  <Image
                    src="/doctor-stethoscope.jpg"
                    alt="12-Lead ECG at Home"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Floating Circular Icon Badge at bottom-left */}
                  <div className="absolute -bottom-4 left-6 w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg border-2 border-white z-10">
                    <HeartPulseIcon className="w-6 h-6" />
                  </div>
                </div>

                <div className="p-6 pt-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">12-Lead Digital ECG</h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                      Complete 12-lead electrocardiogram performed right at bedside. Detects arrhythmias, ST-elevation ischemia, heart block, and palpitations.
                    </p>
                  </div>
                  <button
                    onClick={() => openBooking("12-Lead Digital ECG")}
                    className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1.5 pt-3 border-t border-gray-100 cursor-pointer"
                  >
                    <span>Book Test Now</span>
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Card 2: Pre-Op Clearance */}
              <div className="bg-white rounded-3xl overflow-hidden border border-gray-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group">
                <div className="relative h-52 w-full overflow-hidden bg-gray-100">
                  <Image
                    src="/hero-xray-crisp.jpg"
                    alt="Pre-Op Clearance ECG"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Floating Circular Icon Badge at bottom-left */}
                  <div className="absolute -bottom-4 left-6 w-12 h-12 rounded-2xl bg-rose-600 text-white flex items-center justify-center shadow-lg border-2 border-white z-10">
                    <DocumentCheckIcon className="w-6 h-6" />
                  </div>
                </div>

                <div className="p-6 pt-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Pre-Operative Clearance ECG</h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                      Essential pre-surgery heart evaluation requested by surgeons and anesthetists for cataract, knee replacement, or hernia procedures.
                    </p>
                  </div>
                  <button
                    onClick={() => openBooking("Pre-Op Clearance ECG")}
                    className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1.5 pt-3 border-t border-gray-100 cursor-pointer"
                  >
                    <span>Book Pre-Op ECG</span>
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Card 3: 24h & 48h Holter Monitoring */}
              <div className="bg-white rounded-3xl overflow-hidden border border-gray-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group">
                <div className="relative h-52 w-full overflow-hidden bg-gray-100">
                  <Image
                    src="/doctor-phone.jpg"
                    alt="Holter Monitoring at Home"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Floating Circular Icon Badge at bottom-left */}
                  <div className="absolute -bottom-4 left-6 w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-lg border-2 border-white z-10">
                    <EcgWaveIcon className="w-6 h-6" />
                  </div>
                </div>

                <div className="p-6 pt-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">24h &amp; 48h Holter Monitoring</h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                      Continuous wearable cardiac rhythm monitor applied at home for patients with unexplained dizziness, fainting spells, or skipped beats.
                    </p>
                  </div>
                  <button
                    onClick={() => openBooking("Holter Monitoring")}
                    className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1.5 pt-3 border-t border-gray-100 cursor-pointer"
                  >
                    <span>Book Holter Study</span>
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ── 5. WHY CHOOSE US & STATS (Matches Image 1 "Benefits of Our Services") ── */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Circular Photo Frame with Sparkles */}
              <div className="lg:col-span-5 relative flex justify-center">
                <div className="relative w-72 sm:w-80 h-72 sm:h-80">
                  <div className="w-full h-full rounded-full overflow-hidden border-8 border-blue-50 shadow-2xl relative">
                    <Image
                      src="/doctor-stethoscope.jpg"
                      alt="Cardiac Caregiver"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute top-2 right-4 text-blue-600">
                    <SparklesIcon className="w-8 h-8" />
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold text-gray-900">Doorstep Ready</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Stats & Value Proposition */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">
                    Why Choose Us
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-snug">
                    Benefits of At-Home ECG Services:{" "}
                    <span className="text-blue-600">Your Path to a Healthier Heart</span>
                  </h2>
                </div>

                {/* 3 Metric Counters (Matches Image 1 stats row) */}
                <div className="grid grid-cols-3 gap-4 py-4 border-y border-gray-100">
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-blue-600">15+ Mins</div>
                    <div className="text-[11px] sm:text-xs text-gray-500 font-semibold mt-0.5">Verified Report</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-blue-600">99.4%</div>
                    <div className="text-[11px] sm:text-xs text-gray-500 font-semibold mt-0.5">Doctor Acceptance</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-blue-600">12,000+</div>
                    <div className="text-[11px] sm:text-xs text-gray-500 font-semibold mt-0.5">Bedside Tests Done</div>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    "Zero hospital waiting room stress or secondary infection risks",
                    "Qualified, gentle cardiac technicians trained in geriatric care",
                    "Advanced high-precision digital machines with immediate cloud sync",
                    "Instant WhatsApp report delivery for fast physician consultation",
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckIcon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs sm:text-sm text-gray-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => openBooking("12-Lead ECG at Home")}
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full transition-all shadow-md shadow-blue-200 cursor-pointer"
                  >
                    <span>Book an Appointment</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 6. DARK NAVY CASE STORIES (Matches Image 1 "Our Case Stories") ── */}
        <section className="py-20 bg-[#0b1329] text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <div>
                <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block mb-2">
                  Real Clinical Scenarios
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                  Patient Journeys to Swift Care &amp; Reassurance
                </h2>
              </div>
              <button
                onClick={() => openBooking("Emergency Bedside ECG")}
                className="self-start md:self-auto inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2 rounded-full cursor-pointer shadow-lg"
              >
                <span>Book Urgent ECG</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* 2 High-Impact Dark Photography Cards with Tags and Arrow (Direct match to Image 1) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Story 1 */}
              <div className="relative rounded-3xl overflow-hidden aspect-16/10 sm:aspect-16/9 bg-gray-900 border border-gray-800 shadow-2xl group">
                <Image
                  src="/doctor-phone.jpg"
                  alt="Midnight Palpitation Care in South Delhi"
                  fill
                  className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-extrabold leading-snug">
                      Sudden Midnight Palpitations in Greater Kailash: Arrived in 25 Minutes
                    </h3>
                    <div className="flex flex-wrap gap-2 pt-1">
                      <span className="bg-white/10 backdrop-blur-md text-white text-[10px] font-semibold px-2.5 py-1 rounded-full border border-white/10">
                        Senior Care
                      </span>
                      <span className="bg-white/10 backdrop-blur-md text-white text-[10px] font-semibold px-2.5 py-1 rounded-full border border-white/10">
                        15 Min Report
                      </span>
                      <span className="bg-blue-600/80 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                        At Home
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => openBooking("Urgent 12-Lead ECG")}
                    className="w-11 h-11 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 hover:bg-blue-500 shadow-lg transition-transform group-hover:scale-110 cursor-pointer"
                    aria-label="Book urgent scan"
                  >
                    <ArrowUpRightIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Story 2 */}
              <div className="relative rounded-3xl overflow-hidden aspect-16/10 sm:aspect-16/9 bg-gray-900 border border-gray-800 shadow-2xl group">
                <Image
                  src="/doctor-stethoscope.jpg"
                  alt="Pre-Op Knee Surgery Clearance in Gurgaon"
                  fill
                  className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-extrabold leading-snug">
                      Pre-Knee Surgery Clearance: Zero Commute for 82-Year-Old Patient
                    </h3>
                    <div className="flex flex-wrap gap-2 pt-1">
                      <span className="bg-white/10 backdrop-blur-md text-white text-[10px] font-semibold px-2.5 py-1 rounded-full border border-white/10">
                        Pre-Operative
                      </span>
                      <span className="bg-white/10 backdrop-blur-md text-white text-[10px] font-semibold px-2.5 py-1 rounded-full border border-white/10">
                        Surgeon Accepted
                      </span>
                      <span className="bg-blue-600/80 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                        Gurgaon DLF
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => openBooking("Pre-Op Clearance ECG")}
                    className="w-11 h-11 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 hover:bg-blue-500 shadow-lg transition-transform group-hover:scale-110 cursor-pointer"
                    aria-label="Book Pre-op ECG"
                  >
                    <ArrowUpRightIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ── 7. HOW IT WORKS - 4 NUMBERED NODES (Matches Image 1 "The Path") ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">
                How It Works
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                The Path to Your Bedside ECG Report
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                4 seamless, sterile, and stress-free steps from booking to clinical verification.
              </p>
            </div>

            {/* 4 Connected Circular Steps (Matches Image 1 timeline exactly) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              
              {/* Step 1 */}
              <div className="text-center space-y-4 relative">
                <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto text-xl font-extrabold shadow-lg shadow-blue-200 relative z-10">
                  <CalendarIcon className="w-7 h-7" />
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-white text-blue-600 text-[10px] font-black border-2 border-blue-600 flex items-center justify-center">
                    01
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 text-base">Book in 60 Sec</h3>
                <p className="text-xs text-gray-600 leading-relaxed max-w-xs mx-auto">
                  Call 9205761556 or book online. Select instant dispatch or a preferred slot.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center space-y-4 relative">
                <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto text-xl font-extrabold shadow-lg shadow-blue-200 relative z-10">
                  <UserIcon className="w-7 h-7" />
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-white text-blue-600 text-[10px] font-black border-2 border-blue-600 flex items-center justify-center">
                    02
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 text-base">Technician Arrival</h3>
                <p className="text-xs text-gray-600 leading-relaxed max-w-xs mx-auto">
                  Certified cardiac technician arrives at your door within 30-45 minutes across Delhi NCR.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center space-y-4 relative">
                <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto text-xl font-extrabold shadow-lg shadow-blue-200 relative z-10">
                  <EcgWaveIcon className="w-7 h-7" />
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-white text-blue-600 text-[10px] font-black border-2 border-blue-600 flex items-center justify-center">
                    03
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 text-base">Gentle Bedside Test</h3>
                <p className="text-xs text-gray-600 leading-relaxed max-w-xs mx-auto">
                  12 sterile patches placed painlessly while resting in bed. Recording takes under 5 mins.
                </p>
              </div>

              {/* Step 4 */}
              <div className="text-center space-y-4 relative">
                <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto text-xl font-extrabold shadow-lg shadow-blue-200 relative z-10">
                  <DocumentCheckIcon className="w-7 h-7" />
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-white text-blue-600 text-[10px] font-black border-2 border-blue-600 flex items-center justify-center">
                    04
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 text-base">15-Min Verified Report</h3>
                <p className="text-xs text-gray-600 leading-relaxed max-w-xs mx-auto">
                  Digitally analyzed &amp; signed by Senior Cardiologists. Delivered via WhatsApp &amp; Email.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* ── 8. REPEATING BLUE MARQUEE RIBBON ── */}
        <MarqueeRibbon />

        {/* ── 9. TESTIMONIALS (Matches Image 3 "What Patients Have to Say") ── */}
        <section className="py-20 bg-gray-50/70 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">
                Patient Testimonials
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                Trusted by 12,000+ Families in Delhi NCR
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              
              {/* Review 1 */}
              <div className="bg-white p-7 rounded-3xl border border-gray-200 shadow-sm space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4" />
                  ))}
                  <span className="text-xs font-extrabold text-gray-900 ml-1.5">5.0</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic">
                  &ldquo;My 84-year-old father developed acute chest heaviness at 11 PM. Booking an ambulance was going to take an hour. XrayOnCall arrived at our Greater Kailash home in 30 minutes, took the 12-lead ECG, and our cardiologist received the signed report by 11:45 PM. Absolutely lifesaving service.&rdquo;
                </p>
                <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Sunil Mehra</h4>
                    <p className="text-xs text-gray-500">Greater Kailash 2, New Delhi</p>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    Verified Patient
                  </span>
                </div>
              </div>

              {/* Review 2 */}
              <div className="bg-white p-7 rounded-3xl border border-gray-200 shadow-sm space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4" />
                  ))}
                  <span className="text-xs font-extrabold text-gray-900 ml-1.5">5.0</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic">
                  &ldquo;Needed an urgent pre-operative clearance ECG for my mother&apos;s cataract surgery. The technician was extremely polite, sanitized his hands and tools, and used fresh sterile stickers. The hospital accepted the digital report immediately without any issues.&rdquo;
                </p>
                <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Pooja Chawla</h4>
                    <p className="text-xs text-gray-500">DLF Phase 4, Gurgaon</p>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    Verified Patient
                  </span>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ── 10. BOTTOM CTA BANNER (Royal Blue High-Contrast) ── */}
        <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Need an Immediate Bedside ECG Today?
              </h2>
              <p className="text-blue-100 text-xs sm:text-sm mt-1">
                Technicians dispatched 24 hours a day across Delhi, Gurgaon, Noida, Faridabad &amp; Ghaziabad.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="tel:+919205761556"
                className="inline-flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-full font-bold text-xs sm:text-sm shadow-lg hover:bg-blue-50 transition-colors"
              >
                <PhoneIcon className="w-4 h-4" />
                <span>Call 9205761556</span>
              </a>
              <button
                onClick={() => openBooking("12-Lead ECG at Home")}
                className="inline-flex items-center gap-2 bg-blue-900/40 hover:bg-blue-900/60 border border-white/30 text-white px-6 py-3 rounded-full font-bold text-xs sm:text-sm transition-all cursor-pointer"
              >
                <span>Book Doorstep Visit</span>
                <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
