"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuickBookingBar from "@/components/QuickBookingBar";
import { useBooking } from "@/context/BookingContext";

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

function ShieldCheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
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

function UserIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
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

const steps = [
  {
    step: "01",
    title: "Book in 60 Seconds",
    desc: "Call our 24/7 hotline at 9205761556 or submit our online booking form. Share your doctor's prescription (if available), location, and preferred time.",
    highlight: "Instant WhatsApp confirmation & immediate technician dispatch",
    icon: CalendarIcon,
  },
  {
    step: "02",
    title: "Rapid Doorstep Arrival",
    desc: "Our AERB-certified radiographer arrives at your residence with lightweight, sterilized High-Frequency portable Digital Radiography (DR) equipment within 30-45 minutes.",
    highlight: "Complete hygiene protocols & PPE kit adherence",
    icon: UserIcon,
  },
  {
    step: "03",
    title: "Gentle Bedside Setup",
    desc: "The patient rests comfortably on their bed or sofa with zero physical strain. The technician gently positions the wireless digital flat-panel detector beneath the target area.",
    highlight: "Lead shielding blankets provided for patient and family",
    icon: ShieldCheckIcon,
  },
  {
    step: "04",
    title: "Instant Tablet Quality Check",
    desc: "The exposure takes just 0.1 seconds. High-resolution DICOM images immediately appear on the radiographer's calibrated medical tablet to guarantee crystal-clear diagnostic quality.",
    highlight: "Immediate on-spot image confirmation — zero retakes or doubts",
    icon: SparklesIcon,
  },
  {
    step: "05",
    title: "MD Radiologist Verified Report",
    desc: "The digital film is securely transmitted via cloud PACS to our board-certified MD Radiologists. A digitally signed, hospital-standard PDF report is delivered to your WhatsApp and email within 15 minutes.",
    highlight: "Accepted by all hospitals, surgeons, and specialists worldwide",
    icon: DocumentCheckIcon,
  },
];

export default function HowItWorksPage() {
  const { openBooking } = useBooking();

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Navbar />

      <main className="flex-1">
        {/* ── HERO SECTION ── */}
        <section className="relative bg-gradient-to-b from-[#f0f5ff] via-[#f7faff] to-white pt-12 sm:pt-16 pb-20 sm:pb-28 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 left-0 w-72 h-72 bg-emerald-100/30 rounded-full blur-2xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200/80 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold shadow-2xs">
                <SparklesIcon className="w-3.5 h-3.5 text-blue-600" />
                <span>Certified, Pain-Free Bedside Process</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-gray-950 tracking-tight leading-tight">
                How Bedside Diagnostics Works —{" "}
                <span className="text-blue-600">From Call to 15-Min Report</span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Step-by-step patient journey showing how our mobile diagnostic vans deliver hospital-standard X-rays and 12-lead ECGs right into your bedroom.
              </p>
            </div>

            {/* Floating Booking Bar with Direct Dispatch */}
            <div className="mt-10 sm:mt-12 max-w-5xl mx-auto">
              <QuickBookingBar
                defaultService="Chest X-ray"
                sourcePage="How It Works"
                variant="default"
              />
            </div>
          </div>
        </section>

        {/* ── 5-STEP CONNECTED TIMELINE (Inspired by Image 1 "The Path") ── */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8 max-w-4xl mx-auto">
              {steps.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.step}
                    className="flex flex-col sm:flex-row items-start gap-6 p-6 sm:p-8 rounded-3xl border border-gray-200/90 bg-white hover:border-blue-300 hover:shadow-xl transition-all duration-300 group"
                  >
                    {/* Number Badge with Gradient */}
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center text-xl font-extrabold shrink-0 shadow-lg shadow-blue-200 relative group-hover:scale-105 transition-transform">
                      <span>{item.step}</span>
                      <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-white text-blue-600 flex items-center justify-center border-2 border-blue-600 shadow-xs">
                        <IconComponent className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <div className="flex-1 space-y-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        {item.desc}
                      </p>
                      <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3.5 py-1.5 rounded-full text-xs font-semibold border border-blue-100">
                        <CheckCircleIcon className="w-4 h-4 text-blue-600 shrink-0" />
                        <span>{item.highlight}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── RADIATION & HOME SAFETY GUARANTEE (Inspired by MagneTime & SalvaMedic) ── */}
        <section className="py-16 sm:py-24 bg-gray-50/70 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">
                Atomic Energy Regulatory Board Compliance
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                Is Portable X-Ray Safe for Your Home?
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                Yes, 100%. Here is the clinical science behind our certified home radiation safety protocol.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-7 rounded-3xl border border-gray-200 shadow-xs hover:shadow-md transition-all space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-xs">
                  <ShieldCheckIcon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-gray-900 text-base">Zero Residual Radiation</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  X-rays travel as photon beams for only 0.1 seconds during exposure. The moment the exposure terminates, no radiation lingers in your room, furniture, or curtains.
                </p>
              </div>

              <div className="bg-white p-7 rounded-3xl border border-gray-200 shadow-xs hover:shadow-md transition-all space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-xs">
                  <ShieldCheckIcon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-gray-900 text-base">0.5mm Lead Protective Aprons</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Our certified radiographers carry heavy-duty lead aprons and thyroid collars for both the patient and accompanying family members for complete scatter protection.
                </p>
              </div>

              <div className="bg-white p-7 rounded-3xl border border-gray-200 shadow-xs hover:shadow-md transition-all space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shadow-xs">
                  <ShieldCheckIcon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-gray-900 text-base">ALARA Clinical Standard</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Every device adheres to the international ALARA principle (As Low As Reasonably Achievable), minimizing exposure dosage while ensuring high-definition diagnostic contrast.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── HOSPITAL VS BEDSIDE COMPARISON TABLE ── */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">
                Comparative Care
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                Traditional Hospital Visit vs. XrayOnCall Bedside Service
              </h2>
            </div>

            <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl border border-gray-200 shadow-sm">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-gray-50 border-b border-gray-200 text-gray-900 font-bold">
                  <tr>
                    <th className="p-4 sm:p-5">Feature</th>
                    <th className="p-4 sm:p-5 text-rose-600 bg-rose-50/50">Traditional Hospital Visit</th>
                    <th className="p-4 sm:p-5 text-blue-700 bg-blue-50/70">XrayOnCall Home Service</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-700">
                  <tr>
                    <td className="p-4 sm:p-5 font-semibold">Physical Transit</td>
                    <td className="p-4 sm:p-5 text-gray-500">Ambulance or car transit in traffic; stressful & risky</td>
                    <td className="p-4 sm:p-5 font-bold text-blue-700 bg-blue-50/20">Zero movement — scan performed in bed</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-semibold">Waiting Time</td>
                    <td className="p-4 sm:p-5 text-gray-500">2 to 4 hours in crowded diagnostic queues</td>
                    <td className="p-4 sm:p-5 font-bold text-blue-700 bg-blue-50/20">Technician arrives at scheduled hour</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-semibold">Infection Exposure</td>
                    <td className="p-4 sm:p-5 text-gray-500">High risk of hospital-acquired viral infections</td>
                    <td className="p-4 sm:p-5 font-bold text-blue-700 bg-blue-50/20">Zero clinic exposure in sanitized home</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-semibold">Report Delivery</td>
                    <td className="p-4 sm:p-5 text-gray-500">24 to 48 hours physical pickup</td>
                    <td className="p-4 sm:p-5 font-bold text-blue-700 bg-blue-50/20">15-30 minutes verified PDF on WhatsApp</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── CTA BANNER ── */}
        <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Ready to schedule a bedside scan?</h3>
              <p className="text-blue-100 text-xs sm:text-sm mt-1">Book online in 60 seconds or speak directly with our clinical coordinator.</p>
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
                onClick={() => openBooking()}
                className="inline-flex items-center gap-2 bg-blue-900/40 hover:bg-blue-900/60 border border-white/30 text-white px-6 py-3 rounded-full font-bold text-xs sm:text-sm transition-all cursor-pointer"
              >
                <span>Book Scan Now</span>
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
