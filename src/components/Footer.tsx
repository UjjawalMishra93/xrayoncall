"use client";

import Image from "next/image";
import Link from "next/link";
import { useBooking } from "@/context/BookingContext";

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
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

export default function Footer() {
  const { openBooking } = useBooking();

  return (
    <footer className="w-full bg-[#1e232a] text-gray-300">
      {/* ── Main Dark Footer ── */}
      <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          
          {/* Column 1: Brand & Facilities */}
          <div>
            <div className="mb-4">
              <Link href="/" className="inline-block">
                <div className="relative w-44 h-14 flex items-center justify-start">
                  <Image
                    src="/logo2.png"
                    alt="XrayOnCall Logo"
                    width={707}
                    height={353}
                    className="w-full h-full object-contain brightness-110"
                  />
                </div>
              </Link>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed mb-4">
              Delhi NCR&apos;s trusted portable digital diagnostic service. Delivering hospital-grade X-ray and 12-lead ECG directly to patient bedsides with 15-minute digital reports.
            </p>

            <div className="inline-flex items-center gap-2 bg-gray-800/80 px-3 py-1.5 rounded-lg border border-gray-700/60 text-xs text-blue-400">
              <ShieldCheckIcon className="w-4 h-4 text-emerald-400" />
              <span>AERB Certified Equipment & Radiographers</span>
            </div>
          </div>

          {/* Column 2: Diagnostic Services */}
          <div>
            <div className="mb-4">
              <h3 className="text-white font-bold text-base pb-1.5 relative inline-block">
                Diagnostic Services
                <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-blue-500 rounded-full" />
              </h3>
            </div>
            <ul className="space-y-2 text-xs">
              {[
                { name: "Digital Chest X-Ray at Home", action: () => openBooking("Chest X-ray") },
                { name: "Orthopedic & Spine X-Ray", action: () => openBooking("Spine X-ray") },
                { name: "Limb & Fracture X-Ray", action: () => openBooking("Limb X-ray") },
                { name: "12-Lead ECG at Home", href: "/ecg" },
                { name: "Holter Monitoring (24h/48h)", href: "/services" },
                { name: "ABG Arterial Blood Test", href: "/services" },
                { name: "Sleep Study (Polysomnography)", href: "/services" },
                { name: "NCV & EMG Neuro Tests", href: "/services" },
              ].map((item) => (
                <li key={item.name} className="border-b border-gray-800 pb-1.5">
                  {item.href ? (
                    <Link href={item.href} className="hover:text-blue-400 transition-colors block text-gray-300">
                      {item.name}
                    </Link>
                  ) : (
                    <button
                      onClick={item.action}
                      className="hover:text-blue-400 transition-colors block text-gray-300 text-left cursor-pointer"
                    >
                      {item.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <div className="mb-4">
              <h3 className="text-white font-bold text-base pb-1.5 relative inline-block">
                Navigation
                <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-blue-500 rounded-full" />
              </h3>
            </div>
            <ul className="space-y-2 text-xs">
              {[
                { name: "Home", href: "/" },
                { name: "All Services & Scans", href: "/services" },
                { name: "ECG at Home (New)", href: "/ecg" },
                { name: "How It Works & Safety", href: "/how-it-works" },
                { name: "About Us & Radiologists", href: "/about" },
                { name: "Service Areas in NCR", href: "/service-areas" },
                { name: "Contact & Bookings", href: "/contact" },
              ].map((item) => (
                <li key={item.name} className="border-b border-gray-800 pb-1.5">
                  <Link href={item.href} className="hover:text-blue-400 transition-colors block text-gray-300">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Locations */}
          <div>
            <div className="mb-4">
              <h3 className="text-white font-bold text-base pb-1.5 relative inline-block">
                24/7 Helpline & Care
                <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-blue-500 rounded-full" />
              </h3>
            </div>

            <div className="space-y-3 text-xs">
              <a
                href="tel:+919205761556"
                className="flex items-center gap-3 p-2.5 rounded-lg bg-blue-900/30 border border-blue-700/50 text-white hover:bg-blue-900/50 transition-colors"
              >
                <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center shrink-0">
                  <PhoneIcon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-[10px] text-blue-300 font-semibold uppercase">Emergency & Bookings</div>
                  <div className="text-sm font-bold tracking-wide">+91 9205761556</div>
                </div>
              </a>

              <div className="flex items-start gap-2.5 pt-1">
                <MapPinIcon className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div className="text-gray-400 leading-relaxed">
                  <strong className="text-white">Main Center:</strong> Roxy Chowk, Lajpat Nagar 2, New Delhi - 110024
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPinIcon className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div className="text-gray-400 leading-relaxed">
                  <strong className="text-white">East Delhi:</strong> Sonia Vihar, Delhi
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-gray-400 pt-1">
                <ClockIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Operating 24x7 across Delhi NCR</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Sub Footer ── */}
      <div className="py-5 px-4 sm:px-6 lg:px-8 bg-[#14181d] text-center text-xs text-gray-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© 2026 XrayOnCall Diagnostics. All rights reserved.</p>
          <div className="flex items-center gap-4 text-gray-400">
            <Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link>
            <span>•</span>
            <Link href="/services" className="hover:text-blue-400 transition-colors">Services</Link>
            <span>•</span>
            <Link href="/ecg" className="hover:text-blue-400 transition-colors">ECG at Home</Link>
            <span>•</span>
            <Link href="/service-areas" className="hover:text-blue-400 transition-colors">Areas</Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
