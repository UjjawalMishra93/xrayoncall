"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useBooking } from "@/context/BookingContext";

function ShieldCheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
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

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  );
}

function HeartPulseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19.5 13.572L12 21l-7.5-7.428A5 5 0 1 1 12 6.572a5 5 0 1 1 7.5 7z" />
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

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
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

export default function AboutPage() {
  const { openBooking } = useBooking();

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Navbar />

      <main className="flex-1">
        {/* ── HERO SECTION (Matching Modern Clinical Template) ── */}
        <section className="relative bg-gradient-to-b from-[#f0f5ff] via-[#f7faff] to-white pt-12 sm:pt-16 pb-20 sm:pb-28 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 left-0 w-72 h-72 bg-purple-100/30 rounded-full blur-2xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
              
              {/* Left Column: Mission Narrative & Creds */}
              <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200/80 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold shadow-2xs">
                  <SparklesIcon className="w-3.5 h-3.5 text-blue-600" />
                  <span>About XrayOnCall • Delhi NCR Healthcare Leadership</span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-gray-950 tracking-tight leading-tight">
                  Modern Diagnostic Care,{" "}
                  <span className="text-blue-600">Brought to Your Bedside</span>
                </h1>

                <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl leading-relaxed">
                  Founded with a compassionate clinical mission: eliminate the physical trauma, pain, and ambulance transit that bedridden, geriatric, and post-surgery patients endure just to get routine diagnostic scans.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-left">
                  {[
                    "Experienced Diagnostic Team",
                    "AERB Atomic Safety Certified",
                    "15-Minute Tele-Radiology",
                    "Affordable & Compassionate",
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-gray-800">
                      <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                        <CheckIcon className="w-3.5 h-3.5" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
                  <button
                    onClick={() => openBooking()}
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm px-6 sm:px-7 py-3 rounded-full shadow-lg shadow-blue-200 transition-all hover:scale-105 cursor-pointer"
                  >
                    <span>Book a Bedside Visit</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </button>

                  <a
                    href="tel:+919205761556"
                    className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 border border-gray-200 text-gray-800 font-bold text-xs sm:text-sm px-5 py-3 rounded-full shadow-2xs"
                  >
                    <PhoneIcon className="w-4 h-4 text-blue-600" />
                    <span>Call 9205761556</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Layered Graphic Composition with Floating Badges (Matching Reference Images 3 & 4) */}
              <div className="lg:col-span-5 relative flex justify-center">
                <div className="relative w-72 sm:w-88">
                  {/* Main Portrait */}
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100 aspect-3/4">
                    <Image
                      src="/doctor-stethoscope.jpg"
                      alt="Qualified MD Radiologist"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5 text-white">
                      <p className="font-bold text-base">Senior MD Radiologists</p>
                      <p className="text-xs text-gray-300">Board-certified tele-radiology review</p>
                    </div>
                  </div>

                  {/* Floating Doctor Satisfaction Badge */}
                  <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <UsersIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-base font-extrabold text-gray-900">99.4%</div>
                      <div className="text-[10px] text-gray-500 font-bold uppercase">Physician Trust</div>
                    </div>
                  </div>

                  {/* Floating AERB Badge */}
                  <div className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-lg border border-gray-100 text-center">
                    <span className="text-sm font-extrabold text-emerald-600">AERB</span>
                    <p className="text-[9px] font-bold text-gray-600 uppercase">Govt. Approved</p>
                  </div>
                </div>
              </div>

            </div>

            {/* ── 4 STAT COUNTERS BANNER (Direct match to BrightSmile & MagneTime reference) ── */}
            <div className="mt-14 sm:mt-16 bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-200/90 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-blue-600">15,000+</div>
                <div className="text-xs sm:text-sm text-gray-600 font-semibold mt-1">Bedside Scans Completed</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-blue-600">15 Mins</div>
                <div className="text-xs sm:text-sm text-gray-600 font-semibold mt-1">Digital Report Delivery</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-blue-600">100%</div>
                <div className="text-xs sm:text-sm text-gray-600 font-semibold mt-1">AERB Radiation Certified</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-blue-600">24x7</div>
                <div className="text-xs sm:text-sm text-gray-600 font-semibold mt-1">Rapid Dispatch Across NCR</div>
              </div>
            </div>

          </div>
        </section>

        {/* ── NARRATIVE & CLINICAL VALUES ── */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-5">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block">
                  Our Purpose
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-snug">
                  Why Care at Home Matters Most
                </h2>
                <p className="text-xs sm:text-sm sm:leading-relaxed text-gray-600">
                  For an 80-year-old with a suspected pelvic fracture, or a patient with acute pneumonia breathing on oxygen support, negotiating staircases, waiting in emergency queues, and transferring onto cold metal examination tables is both agonizing and dangerous.
                </p>
                <p className="text-xs sm:text-sm sm:leading-relaxed text-gray-600">
                  With XrayOnCall, our certified radiographers arrive equipped with ultra-lightweight, High-Frequency Digital Radiography (DR) machines. The entire scan is completed painlessly right on the patient&apos;s bed or sofa in less than 10 minutes.
                </p>

                <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-100 space-y-2.5">
                  <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wider">
                    Our Clinical Promises:
                  </h4>
                  {[
                    "Zero patient movement required during scan",
                    "Certified 0.5mm lead aprons provided for family members",
                    "Real-time tele-radiology review by MD Radiologists",
                    "Official DICOM reports accepted by all major hospitals",
                  ].map((promise, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-semibold text-gray-800">
                      <CheckIcon className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{promise}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Consultation / Timing Card (Inspired by Dentic Image 3 & 4) */}
              <div className="lg:col-span-6">
                <div className="bg-gradient-to-br from-blue-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden space-y-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 text-blue-300 flex items-center justify-center">
                    <ClockIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">24/7 Mobile Dispatch Center</h3>
                    <p className="text-xs sm:text-sm text-blue-200 mt-1">
                      Our dispatch units are stationed across South Delhi, West Delhi, Gurgaon, Noida, and Faridabad.
                    </p>
                  </div>

                  <div className="space-y-3 pt-2 border-t border-white/10 text-xs sm:text-sm">
                    <div className="flex justify-between py-1 border-b border-white/10">
                      <span className="text-blue-300">Monday - Friday</span>
                      <span className="font-bold">24 Hours Active</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-white/10">
                      <span className="text-blue-300">Saturday</span>
                      <span className="font-bold">24 Hours Active</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-white/10">
                      <span className="text-blue-300">Sunday &amp; Holidays</span>
                      <span className="font-bold">24 Hours Active</span>
                    </div>
                  </div>

                  <a
                    href="tel:+919205761556"
                    className="inline-flex items-center justify-center gap-2 w-full py-3.5 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-2xl text-sm shadow-lg transition-colors"
                  >
                    <PhoneIcon className="w-4 h-4" />
                    <span>Call Helpline: +91 9205761556</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 4 PILLARS OF CLINICAL QUALITY ── */}
        <section className="py-16 sm:py-24 bg-gray-50/70 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">
                Quality Framework
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                Our Core Pillars of Clinical Quality
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-7 rounded-3xl border border-gray-200/90 shadow-xs hover:shadow-lg transition-all space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <ShieldCheckIcon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900 text-base">AERB Approved Units</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Every machine is calibrated and certified by the Atomic Energy Regulatory Board, operating with minimized scatter radiation.
                </p>
              </div>

              <div className="bg-white p-7 rounded-3xl border border-gray-200/90 shadow-xs hover:shadow-lg transition-all space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center">
                  <HeartPulseIcon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900 text-base">Multi-Diagnostic Suite</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  From Chest X-Rays to 12-Lead ECG, Holter Monitoring, Sleep Studies, and ABG sampling — complete doorstep diagnostic care.
                </p>
              </div>

              <div className="bg-white p-7 rounded-3xl border border-gray-200/90 shadow-xs hover:shadow-lg transition-all space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <ClockIcon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900 text-base">15-Min Turnaround</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Cloud PACS tele-radiology connection ensures signed digital PDF reports are delivered to your WhatsApp and email within 15 minutes.
                </p>
              </div>

              <div className="bg-white p-7 rounded-3xl border border-gray-200/90 shadow-xs hover:shadow-lg transition-all space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center">
                  <UsersIcon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900 text-base">Empathetic Technicians</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Specialized in geriatric care, post-trauma fracture positioning, and patient reassurance with warm, professional conduct.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA BANNER ── */}
        <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Need an At-Home X-Ray or ECG Today?</h3>
              <p className="text-blue-100 text-xs sm:text-sm mt-1">Our technician team is ready for rapid dispatch across Delhi NCR.</p>
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
                <span>Book Online</span>
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
