"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import BookingModal from "@/components/BookingModal";

// ─── ICON COMPONENTS ───────────────────────────────────────────────────────────
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

function HomeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
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

function BoltIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
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

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ImageIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function XrayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none">
      <rect width="80" height="80" rx="8" fill="rgba(255,255,255,0.05)" />
      <ellipse cx="40" cy="40" rx="22" ry="18" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
      <ellipse cx="40" cy="40" rx="12" ry="10" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
      <line x1="18" y1="40" x2="62" y2="40" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="40" y1="22" x2="40" y2="58" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="25" y1="27" x2="55" y2="53" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="55" y1="27" x2="25" y2="53" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// ─── NAVBAR ────────────────────────────────────────────────────────────────────
function Navbar({ onBookClick }: { onBookClick: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = ["Home", "Our Services", "How It Works", "Service Locations", "Service Areas", "FAQs"];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[4.25rem] sm:h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center group shrink-0">
            <div className="relative w-44 h-13 xs:w-48 xs:h-14 sm:w-52 sm:h-16 flex items-center justify-start">
              <Image
                src="/logo2.png"
                alt="XrayOnCall Logo"
                width={707}
                height={353}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-xs"
                priority
                unoptimized
              />
            </div>
          </Link>

          {/* Desktop Nav - Visible on Laptop & Desktop (lg+) */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-8">
            {navLinks.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                className="text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors relative group py-1"
              >
                {item}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA Buttons - Laptop & Desktop (lg+) */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919205761556"
              className="relative flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 xl:px-5 py-2.5 rounded-full text-xs xl:text-sm font-bold hover:from-blue-700 hover:to-blue-600 transition-all shadow-md shadow-blue-200 hover:-translate-y-0.5 transform group"
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <PhoneIcon className="w-4 h-4" />
              <span className="tracking-wide">9205761556</span>
            </a>
            <button
              onClick={onBookClick}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 xl:px-5 py-2.5 rounded-full text-xs xl:text-sm font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg cursor-pointer"
            >
              Book an X-ray
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>

          {/* Tablet Quick Action CTA (md to lg) */}
          <div className="hidden sm:flex lg:hidden items-center gap-2.5">
            <a
              href="tel:+919205761556"
              className="flex items-center gap-1.5 bg-blue-50 text-blue-700 border border-blue-200/80 px-3.5 py-2 rounded-full text-xs font-bold hover:bg-blue-100 transition-colors"
            >
              <PhoneIcon className="w-3.5 h-3.5 text-blue-600" />
              <span>Call 9205761556</span>
            </a>
            <button
              onClick={onBookClick}
              className="flex items-center gap-1.5 bg-blue-600 text-white px-3.5 py-2 rounded-full text-xs font-bold hover:bg-blue-700 transition-colors shadow-xs"
            >
              <span>Book</span>
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile & Tablet Hamburger (below lg) */}
          <button
            className="lg:hidden p-2.5 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors focus:outline-hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
            </div>
          </button>
        </div>

        {/* Mobile & Tablet Dropdown Menu */}
        {menuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100 space-y-1 animate-fadeIn">
            {navLinks.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                className="block text-sm font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50/80 px-4 py-3 rounded-xl transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <div className="flex flex-col sm:flex-row gap-2.5 pt-3 px-2 border-t border-gray-100 mt-2">
              <a
                href="tel:+919205761556"
                className="relative flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-3 rounded-xl text-sm font-bold shadow-sm shadow-blue-200"
              >
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                </span>
                <PhoneIcon className="w-4 h-4" /> 9205761556
              </a>
              <button
                onClick={() => {
                  setMenuOpen(false);
                  onBookClick();
                }}
                className="flex-1 flex items-center justify-center gap-2 bg-blue-700 text-white px-4 py-3 rounded-xl text-sm font-bold shadow-xs cursor-pointer"
              >
                Book an X-ray <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// ─── HERO SECTION ──────────────────────────────────────────────────────────────
function HeroSection({ onBookClick }: { onBookClick: () => void }) {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-[#f0f7ff] via-white to-[#eef5ff] overflow-hidden flex items-stretch"
    >
      {/* ── Decorative blobs ── */}
      <div className="absolute top-0 left-0 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-blue-100/40 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-sky-200/30 rounded-full translate-y-1/2 blur-2xl pointer-events-none" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: "linear-gradient(#1d4ed8 1px,transparent 1px),linear-gradient(90deg,#1d4ed8 1px,transparent 1px)", backgroundSize: "40px 40px" }}
      />

      {/* ── Layout: left text | right image ── */}
      <div className="relative flex flex-col lg:flex-row w-full items-stretch">

        {/* ── LEFT: Text content ── */}
        <div className="w-full lg:w-1/2 flex items-center px-4 sm:px-8 md:px-10 lg:px-12 xl:px-16 pt-10 sm:pt-14 pb-8 sm:pb-12 lg:py-16 xl:py-20">
          <div className="max-w-xl w-full mx-auto lg:mx-0">

            {/* ── Top pill badge ── */}
            <div className="inline-flex items-center gap-2 bg-white border border-blue-100 px-3 sm:px-3.5 py-1.5 rounded-full shadow-xs mb-4 sm:mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span className="text-[11px] sm:text-xs font-bold text-gray-600 tracking-wide uppercase">Professional · Safe · At Your Doorstep</span>
            </div>

            {/* ── Headline ── */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[3.6rem] xl:text-[4.2rem] font-black text-gray-900 leading-[1.12] sm:leading-[1.05] tracking-tight mb-4 sm:mb-5">
              Portable Xray at Your{" "}
              <span className="relative inline-block text-blue-600">
                Doorstep.
                {/* Underline accent */}
                <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 200 6" preserveAspectRatio="none">
                  <path d="M0 5 Q50 0 100 4 Q150 8 200 3" stroke="#3b82f6" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.5"/>
                </svg>
              </span>
            </h1>

            {/* ── Feature badges row ── */}
            <div className="flex flex-wrap gap-2 mb-5 sm:mb-6">
              <span className="inline-flex items-center gap-1.5 bg-blue-600 text-white text-[11px] sm:text-xs font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-md shadow-blue-200/60 tracking-wide">
                <BoltIcon className="w-3.5 h-3.5 text-yellow-300 shrink-0" />
                Same Day X-ray
              </span>
              <span className="inline-flex items-center gap-1.5 bg-emerald-500 text-white text-[11px] sm:text-xs font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-md shadow-emerald-200/60 tracking-wide">
                <ClockIcon className="w-3.5 h-3.5 shrink-0" />
                Reports in 20 Min
              </span>
              <span className="inline-flex items-center gap-1.5 bg-amber-500 text-white text-[11px] sm:text-xs font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-md shadow-amber-200/60 tracking-wide">
                <HomeIcon className="w-3.5 h-3.5 shrink-0" />
                Team Visits in 60 Min
              </span>
            </div>

            {/* ── Sub-headline ── */}
            <p className="text-sm sm:text-base md:text-[1.05rem] text-gray-600 max-w-lg leading-relaxed mb-6 sm:mb-8">
              Professional portable X-ray services at your doorstep. Book now and our team arrives within{" "}
              <span className="font-bold text-amber-700 bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded-md">
                60 minutes
              </span>{" "}
              — reports delivered in just{" "}
              <span className="font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded-md">
                20 minutes*
              </span>
              .
            </p>

            {/* ── CTA Buttons ── */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8 sm:mb-9">
              <button
                onClick={onBookClick}
                className="group relative inline-flex items-center justify-center gap-2.5 bg-blue-600 text-white px-6 sm:px-7 py-3.5 sm:py-4 rounded-2xl font-bold text-sm sm:text-base hover:bg-blue-700 transition-all shadow-xl shadow-blue-300/50 hover:shadow-blue-400/60 hover:-translate-y-0.5 transform cursor-pointer overflow-hidden w-full sm:w-auto text-center"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                <span className="relative flex items-center justify-center gap-2">
                  Book an X-ray
                  <ArrowRightIcon className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </button>
              <a
                href="tel:+919205761556"
                className="relative inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 sm:px-7 py-3.5 sm:py-4 rounded-2xl font-bold text-sm sm:text-base hover:from-emerald-600 hover:to-teal-600 transition-all shadow-lg shadow-emerald-200/60 hover:-translate-y-0.5 transform w-full sm:w-auto text-center"
              >
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
                </span>
                <PhoneIcon className="w-4 sm:w-5 h-4 sm:h-5" />
                9205761556
              </a>
            </div>

            {/* ── Trust stat cards ── */}
            <div className="grid grid-cols-1 xs:grid-cols-3 gap-2.5 sm:gap-3">
              {[
                {
                  icon: <HomeIcon className="w-4 sm:w-5 h-4 sm:h-5 text-blue-600" />,
                  iconBg: "bg-blue-50 border-blue-100",
                  title: "At-home imaging",
                  sub: "In comfort of home",
                },
                {
                  icon: <UsersIcon className="w-4 sm:w-5 h-4 sm:h-5 text-amber-600" />,
                  iconBg: "bg-amber-50 border-amber-100",
                  title: "Team in 60 min",
                  sub: "Fast confirmation",
                },
                {
                  icon: <BoltIcon className="w-4 sm:w-5 h-4 sm:h-5 text-emerald-600" />,
                  iconBg: "bg-emerald-50 border-emerald-100",
                  title: "Reports in 20 min",
                  sub: "Same-day digital",
                },
              ].map((b) => (
                <div
                  key={b.title}
                  className="flex items-center xs:flex-col xs:items-start gap-2.5 xs:gap-2 bg-white border border-gray-100 rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 shadow-xs hover:shadow-md transition-all"
                >
                  <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 border ${b.iconBg}`}>
                    {b.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-800 leading-tight">{b.title}</p>
                    <p className="text-[10px] text-gray-400 mt-0.5 leading-snug">{b.sub}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* ── RIGHT: Hero Image ── */}
        <div className="w-full lg:w-1/2 relative h-64 xs:h-72 sm:h-96 md:h-[440px] lg:h-auto min-h-[260px] sm:min-h-[340px] lg:min-h-full px-4 sm:px-8 md:px-10 lg:px-0 pb-8 sm:pb-12 lg:pb-0">
          <div className="relative w-full h-full rounded-2xl lg:rounded-none overflow-hidden shadow-lg lg:shadow-none">
            <Image
              src="/hero-xray.jpg"
              alt="Healthcare professional performing home X-ray"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={100}
              unoptimized
              className="object-cover object-center"
              priority
            />
            {/* Soft left-edge fade on desktop */}
            <div className="hidden lg:block absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-sky-50 via-sky-50/60 to-transparent z-10" />
            {/* Subtle overlay on mobile */}
            <div className="lg:hidden absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

      </div>
    </section>
  );
}

// ─── TRUST BAR ─────────────────────────────────────────────────────────────────
function TrustBar() {
  const items = [
    { icon: <UsersIcon className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600" />, title: "Trusted by families", sub: "Safe and reliable service" },
    { icon: <ImageIcon className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600" />, title: "High-quality digital reports", sub: "With quick turnaround" },
    { icon: <StarIcon className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600" />, title: "Experienced team", sub: "Certified radiology professionals" },
    { icon: <MapPinIcon className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600" />, title: "Serving local communities", sub: "Accessible and convenient" },
  ];

  return (
    <section className="bg-white border-y border-gray-100 shadow-xs py-4 sm:py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-0 lg:divide-x divide-gray-100">
          {items.map((item, i) => (
            <div
              key={item.title}
              className={`flex items-center gap-3 p-3 sm:p-4 lg:py-4 lg:px-6 bg-slate-50/50 sm:bg-transparent rounded-xl lg:rounded-none ${
                i === 0 ? "lg:pl-0" : ""
              } ${i === items.length - 1 ? "lg:pr-0" : ""}`}
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div>
                <p className="font-bold sm:font-semibold text-gray-900 text-xs sm:text-sm">{item.title}</p>
                <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── OUR SERVICES ──────────────────────────────────────────────────────────────
function ServicesSection({ onBookClick }: { onBookClick: (scan?: string) => void }) {
  const services = [
    {
      img: "/services/chest-xray.jpg",
      title: "Chest X-ray",
      desc: "Evaluates lungs, heart, and chest wall for infections, congestion, pneumonia, and cardiac conditions.",
      btnText: "Book Chest X-ray",
    },
    {
      img: "/services/hand-xray.jpg",
      title: "Limb & Joint X-rays",
      desc: "Assesses fractures, sprains, arthritis, and bone integrity in arms, legs, knees, ankles, and shoulders.",
      btnText: "Book Limb X-ray",
    },
    {
      img: "/services/spine-xray.jpg",
      title: "Spine X-ray",
      desc: "Examines cervical, thoracic, and lumbar spine alignment, degenerative issues, and trauma injuries.",
      btnText: "Book Spine X-ray",
    },
    {
      img: "/services/other-xray.jpg",
      title: "Other Prescribed Scans",
      desc: "Abdominal, pelvic, and specialized orthopedic views as prescribed by your attending doctor.",
      btnText: "Book Custom Scan",
    },
  ];

  return (
    <section id="our-services" className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-600 mb-2">
            Comprehensive Diagnostic Options
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-extrabold text-[#0a2540] tracking-tight leading-tight">
            Prescribed X-rays We Offer At Home
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm md:text-base mt-2.5 sm:mt-3 leading-relaxed">
            Expertly performed diagnostic scans right in your living space or bedroom.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-2xl border border-gray-100 shadow-xs hover:shadow-md transition-shadow overflow-hidden flex flex-col justify-between"
            >
              {/* Card Image with Title Overlay */}
              <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-100">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                <h3 className="absolute bottom-3.5 left-4 text-white font-bold text-base sm:text-lg tracking-tight">
                  {s.title}
                </h3>
              </div>

              {/* Card Content & CTA */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between gap-5 sm:gap-6">
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  {s.desc}
                </p>

                <button
                  type="button"
                  onClick={() => onBookClick(s.title)}
                  className="w-full py-2.5 px-4 rounded-xl border border-blue-600 text-blue-600 font-semibold text-xs sm:text-sm hover:bg-blue-600 hover:text-white transition-colors duration-200 text-center block cursor-pointer"
                >
                  {s.btnText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── HOW IT WORKS ──────────────────────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: <PhoneIcon className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600" />,
      title: "Call or Book",
      desc: "Schedule an X-ray through our website or give us a call.",
    },
    {
      num: "02",
      icon: <HomeIcon className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600" />,
      title: "Home Visit",
      desc: "Our trained professional visits your home within 60 minutes of booking.",
    },
    {
      num: "03",
      icon: <ImageIcon className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600" />,
      title: "Receive Reports",
      desc: "Get your digital X-ray reports within 20 minutes in eligible areas.",
    },
  ];

  return (
    <section id="how-it-works" className="py-14 sm:py-20 bg-gradient-to-b from-blue-50/80 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[300px,1fr] xl:grid-cols-[340px,1fr] gap-10 lg:gap-14 xl:gap-16 items-center">
          {/* Left Title */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
              <div className="w-8 sm:w-10 h-1.5 bg-blue-600 rounded-full" />
              <span className="text-blue-600 font-bold text-xs sm:text-sm uppercase tracking-widest">Process</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">How It Works</h2>
            <p className="text-gray-500 text-xs sm:text-sm mt-2 sm:mt-3 leading-relaxed max-w-md mx-auto lg:mx-0">
              Simple, professional diagnostics—without the trip to a clinic.
            </p>
          </div>

          {/* Steps */}
          <div className="relative">
            {/* Dashed connector line on tablet and desktop */}
            <div className="hidden sm:block absolute top-12 sm:top-14 left-16 right-16 h-px border-t-2 border-dashed border-blue-200 z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 relative z-10">
              {steps.map((step) => (
                <div key={step.num} className="flex flex-col items-center text-center group bg-white/70 sm:bg-transparent rounded-2xl p-4 sm:p-0 border border-blue-100/60 sm:border-0 shadow-xs sm:shadow-none">
                  {/* Step number */}
                  <div className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 text-white text-xs font-bold rounded-full mb-3 sm:mb-4 shadow-sm shadow-blue-200">
                    {step.num}
                  </div>

                  {/* Icon card */}
                  <div className="w-18 h-18 sm:w-22 sm:h-22 md:w-24 md:h-24 bg-white rounded-2xl shadow-md sm:shadow-lg flex items-center justify-center mb-4 sm:mb-5 group-hover:shadow-xl transition-all border border-blue-50 group-hover:border-blue-200 group-hover:-translate-y-1 transform">
                    {step.icon}
                  </div>

                  <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-1.5">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-[220px]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── SERVICE LOCATIONS SECTION ─────────────────────────────────────────────────
function ServiceLocations({ onBookClick }: { onBookClick: () => void }) {
  const regions = [
    { id: "delhi",     label: "Delhi" },
    { id: "noida",     label: "Noida" },
    { id: "ghaziabad", label: "Ghaziabad" },
    { id: "gurugram",  label: "Gurugram" },
  ];

  const subAreas: Record<string, string[]> = {
    delhi: [
      "Lajpat Nagar, Delhi", "Defence Colony, Delhi", "Saket, Delhi", "Vasant Kunj, Delhi",
      "Vasant Vihar, Delhi", "Kalkaji, Delhi", "Govindpuri, Delhi", "CR Park, Delhi",
      "Greater Kailash 1, Delhi", "Greater Kailash 2, Delhi", "Nehru Place, Delhi", "East of Kailash, Delhi",
      "Kailash Colony, Delhi", "Jangpura, Delhi", "Malviya Nagar, Delhi", "Hauz Khas, Delhi",
      "South Extension, Delhi", "Green Park, Delhi", "Safdarjung, Delhi", "RK Puram, Delhi",
      "Dwarka, Delhi", "Janakpuri, Delhi", "Rohini, Delhi", "Pitampura, Delhi",
      "Patel Nagar, Delhi", "Karol Bagh, Delhi", "Connaught Place, Delhi", "Laxmi Nagar, Delhi",
      "Preet Vihar, Delhi", "Mayur Vihar, Delhi", "Shahdara, Delhi", "Dilshad Garden, Delhi",
      "Vivek Vihar, Delhi", "Ashram, Delhi", "Sonia Vihar, Delhi",
    ],
    noida: [
      "Sector 18, Noida", "Sector 62, Noida", "Sector 63, Noida", "Sector 137, Noida",
      "Sector 150, Noida", "Sector 76, Noida", "Sector 77, Noida", "Sector 78, Noida",
      "Sector 93, Noida", "Sector 100, Noida", "Sector 104, Noida", "Sector 110, Noida",
      "Sector 120, Noida", "Sector 128, Noida", "Sector 168, Noida",
    ],
    ghaziabad: [
      "Raj Nagar Extension, Ghaziabad", "Indirapuram, Ghaziabad", "Vasundhara, Ghaziabad",
      "Vaishali, Ghaziabad", "Kaushambi, Ghaziabad", "Crossings Republik, Ghaziabad",
      "Mohan Nagar, Ghaziabad", "Sahibabad, Ghaziabad", "Dasna, Ghaziabad",
      "Govindpuram, Ghaziabad", "Shastri Nagar, Ghaziabad",
    ],
    gurugram: [
      "DLF Phase 1, Gurugram", "DLF Phase 2, Gurugram", "DLF Phase 3, Gurugram", "DLF Phase 4, Gurugram",
      "DLF Phase 5, Gurugram", "Golf Course Road, Gurugram", "Golf Course Extension Road, Gurugram", "Sohna Road, Gurugram",
      "MG Road, Gurugram", "Cyber City, Gurugram", "Udyog Vihar, Gurugram", "Sushant Lok, Gurugram",
      "South City 1, Gurugram", "South City 2, Gurugram", "Palam Vihar, Gurugram", "New Gurugram",
      "Sector 14, Gurugram", "Sector 15, Gurugram", "Sector 23, Gurugram", "Sector 31, Gurugram",
      "Sector 46, Gurugram", "Sector 47, Gurugram", "Sector 49, Gurugram", "Sector 56, Gurugram",
      "Sector 57, Gurugram", "Sector 67, Gurugram", "Sector 70, Gurugram", "Sector 82, Gurugram",
      "Sector 83, Gurugram", "Sector 90, Gurugram", "Sector 92, Gurugram",
    ],
  };

  const [activeRegion, setActiveRegion] = useState<string | null>(null);
  const subAreaRef = useRef<HTMLDivElement>(null);
  const activeLabel = regions.find((r) => r.id === activeRegion)?.label ?? "";
  const activeAreas = activeRegion ? (subAreas[activeRegion] ?? []) : [];

  function handleRegionClick(id: string) {
    setActiveRegion((prev) => {
      const next = prev === id ? null : id;
      if (next) {
        setTimeout(() => {
          subAreaRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 50);
      }
      return next;
    });
  }

  return (
    <section id="service-locations" className="py-14 sm:py-20 bg-[#f7f9fc]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0a2540] tracking-tight leading-tight">
            Areas We Serve in Delhi NCR
          </h2>
          <div className="mt-3 mx-auto w-14 sm:w-16 h-[3px] bg-blue-600 rounded-full" />
          <p className="text-gray-500 text-xs sm:text-sm md:text-base mt-3 sm:mt-4 italic">
            Fast Home X-Ray Services Available Across Delhi NCR
          </p>
        </div>

        {/* Region Tabs - 2 cols on mobile, 4 on tablet/laptop */}
        <div className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
          {regions.map((region) => {
            const isActive = activeRegion === region.id;
            return (
              <button
                key={region.id}
                type="button"
                onClick={() => handleRegionClick(region.id)}
                className={`rounded-xl sm:rounded-2xl px-3 sm:px-4 py-3.5 sm:py-4 text-xs sm:text-sm font-semibold text-center transition-all duration-200 cursor-pointer border ${
                  isActive
                    ? "bg-blue-700 text-white border-blue-700 shadow-md"
                    : "bg-white text-blue-600 border-gray-200 hover:border-blue-300 hover:shadow-xs"
                }`}
              >
                {region.label}
              </button>
            );
          })}
        </div>

        {/* Sub-areas */}
        {activeRegion && activeAreas.length > 0 && (
          <div ref={subAreaRef} className="mt-8 sm:mt-10 scroll-mt-24">
            {/* Sub-section Header */}
            <div className="text-center mb-3">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0a2540] tracking-tight">
                Areas We Serve in {activeLabel}
              </h3>
              <div className="mt-3 mx-auto w-14 sm:w-16 h-[3px] bg-blue-600 rounded-full" />
              <p className="text-gray-500 text-xs sm:text-sm md:text-base mt-3 sm:mt-4 italic">
                Fast Home X-Ray Services Available Across {activeLabel}
              </p>
            </div>

            <div className="mt-6 sm:mt-8 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 sm:gap-3">
              {activeAreas.map((area) => (
                <div
                  key={area}
                  className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 px-3 sm:px-4 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold text-blue-600 text-center shadow-xs hover:shadow-md hover:border-blue-300 transition-all duration-200 break-words"
                >
                  {area}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 text-center px-2">
              <p className="text-xs sm:text-sm text-gray-500 mb-3">
                Don&apos;t see your area?{" "}
                <a href="tel:+919205761556" className="text-blue-600 font-semibold hover:underline">
                  Call 9205761556
                </a>{" "}
                — we may still be able to serve you!
              </p>
              <button
                type="button"
                onClick={onBookClick}
                className="inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-6 sm:px-7 py-3 rounded-full font-bold text-xs sm:text-sm transition-colors shadow-md cursor-pointer w-full sm:w-auto"
              >
                Book Doorstep X-ray in {activeLabel} <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// ─── SERVICE AREA CHECKER ──────────────────────────────────────────────────────
function ServiceAreaChecker({ onBookClick }: { onBookClick: (scan?: string) => void }) {
  const [pin, setPin] = useState("");
  const [result, setResult] = useState<null | "found" | "not-found">(null);
  const [loading, setLoading] = useState(false);

  const locations = [
    {
      id: "delhi",
      city: "Delhi HQ (Lajpat Nagar)",
      badge: "Main Headquarters",
      address: "Roxy Chowk, Lajpat Nagar 2, New Delhi - 110024",
      coverage: "Serving Entire Delhi NCR (Central, North, South, East & West)",
      query: "Roxy Chowk, Lajpat Nagar 2, New Delhi, Delhi 110024",
    },
    {
      id: "gurgaon",
      city: "Gurgaon Hub",
      badge: "Haryana Dispatch",
      address: "Sector 33, Gurgaon, Haryana 122001",
      coverage: "DLF, Sohna Road, Golf Course Rd & Sectors 1-115",
      query: "Sector 33, Gurgaon, Haryana 122001",
    },
    {
      id: "ghaziabad",
      city: "Ghaziabad Hub",
      badge: "UP Dispatch",
      address: "Raj Nagar Extension, Ghaziabad, Uttar Pradesh 201017",
      coverage: "Ghaziabad, Raj Nagar, Indirapuram & Vasundhara",
      query: "Raj Nagar Extension, Ghaziabad, Uttar Pradesh 201017",
    },
  ];
  const [activeLoc, setActiveLoc] = useState(locations[0]);

  const handleCheck = () => {
    if (pin.length < 5) return;
    setLoading(true);
    setResult(null);
    setTimeout(() => {
      setLoading(false);
      setResult(pin.startsWith("1") || pin.startsWith("4") ? "found" : "not-found");
    }, 800);
  };

  return (
    <section id="service-areas" className="py-12 sm:py-16 bg-gradient-to-b from-gray-50/80 via-white to-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── Main Unified Blue Section with Map Inside ── */}
        <div className="relative bg-gradient-to-br from-[#003679] via-[#004fa3] to-[#002f6c] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl p-4 sm:p-8 lg:p-12 text-white border border-blue-400/20">
          
          {/* Decorative grid */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

          {/* ── TOP: Service Area Checker Header + Input ── */}
          <div className="relative z-10 mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-white/15">
            {/* Top Bar: Left Logo + Title, Right Dispatch Badge */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 mb-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-28 h-10 sm:w-36 sm:h-12 relative flex items-center justify-center shrink-0">
                  <Image
                    src="/logo2.png"
                    alt="Xray on Call Logo"
                    width={707}
                    height={353}
                    className="w-full h-full object-contain drop-shadow-md"
                    priority
                  />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">Check Your Service Area</h2>
                  <p className="text-blue-100 text-xs sm:text-sm mt-0.5">Enter your PIN code to see if our doorstep portable X-ray unit serves your area.</p>
                </div>
              </div>

              {/* Right: Live Dispatch Badge */}
              <div className="flex items-center gap-2.5 sm:gap-3 bg-white/15 backdrop-blur-md px-3.5 sm:px-4 py-2 rounded-2xl border border-white/25 shadow-sm w-fit self-start md:self-auto">
                <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-cyan-300 animate-ping" />
                <div>
                  <p className="text-[11px] sm:text-xs font-extrabold text-white uppercase tracking-wide">Doorstep Van Dispatch</p>
                  <p className="text-[10px] sm:text-[11px] text-blue-200">Arrives in 15–45 Mins across NCR</p>
                </div>
              </div>
            </div>

            {/* Input & Check Availability Button */}
            <div className="space-y-4 max-w-2xl">
              <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                <div className="relative flex-1">
                  <MapPinIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  <input
                    type="text"
                    inputMode="numeric"
                    placeholder="Enter PIN code (e.g. 110094, 122001)"
                    className="w-full pl-12 pr-4 py-3 sm:py-3.5 rounded-full bg-white text-gray-900 placeholder-gray-400 text-xs sm:text-sm font-medium outline-none focus:ring-2 focus:ring-white/50 shadow-inner"
                    value={pin}
                    onChange={(e) => {
                      setPin(e.target.value.replace(/\D/g, "").slice(0, 6));
                      setResult(null);
                    }}
                    onKeyDown={(e) => e.key === "Enter" && handleCheck()}
                  />
                </div>
                <button
                  onClick={handleCheck}
                  disabled={loading || pin.length < 5}
                  className="flex items-center justify-center gap-2 bg-white text-blue-700 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-bold text-xs sm:text-sm hover:bg-blue-50 disabled:opacity-60 disabled:cursor-not-allowed transition-all whitespace-nowrap shadow-lg cursor-pointer w-full sm:w-auto"
                >
                  {loading ? (
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                  ) : (
                    <>Check Availability <ArrowRightIcon className="w-4 h-4" /></>
                  )}
                </button>
              </div>

              {/* Result Messages */}
              {result === "found" && (
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-xs sm:text-sm font-semibold text-green-300 bg-white/10 backdrop-blur-xs p-3 rounded-2xl border border-green-300/30">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center shrink-0">
                      <CheckIcon className="w-3 h-3 text-white" />
                    </div>
                    <span>Great news! Xray on Call doorstep portable service is active in your area.</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => onBookClick()}
                    className="bg-white text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold hover:bg-blue-50 transition-colors shadow-sm w-fit cursor-pointer self-start sm:self-auto"
                  >
                    Book Doorstep Visit Now →
                  </button>
                </div>
              )}
              {result === "not-found" && (
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-yellow-200 bg-white/10 p-3 rounded-2xl border border-yellow-300/30">
                  <span className="text-base sm:text-lg">⚠️</span>
                  <span>Currently out of direct range — Call 9205761556 to check emergency priority dispatch!</span>
                </div>
              )}
            </div>
          </div>

          {/* ── BOTTOM: Real Map Inside This Blue Section ── */}
          <div className="relative z-10 space-y-4">
            {/* Map Header with Hub Selectors */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
                    Xray on Call – Live Service Hubs
                  </h3>
                  <span className="bg-emerald-400/20 border border-emerald-300/40 text-emerald-300 text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded-full">
                    Active 24/7
                  </span>
                </div>
                <p className="text-xs text-blue-200 mt-1">
                  Select your nearest hub to view location and dispatch routes:
                </p>
              </div>

              {/* Hub Switching Pills */}
              <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                {locations.map((loc) => {
                  const isActive = activeLoc.id === loc.id;
                  return (
                    <button
                      key={loc.id}
                      type="button"
                      onClick={() => setActiveLoc(loc)}
                      className={`px-3 sm:px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                        isActive
                          ? "bg-white text-blue-800 shadow-lg scale-105"
                          : "bg-white/15 text-blue-100 hover:bg-white/25 border border-white/20"
                      }`}
                    >
                      <MapPinIcon className="w-3.5 h-3.5" />
                      {loc.city}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Embedded Real Google Map with Overlay */}
            <div className="relative w-full h-[320px] xs:h-[360px] sm:h-[420px] md:h-[450px] rounded-2xl overflow-hidden border border-white/25 shadow-2xl bg-slate-900">
              <iframe
                key={activeLoc.id}
                title={`Xray on Call - ${activeLoc.city}`}
                src={`https://maps.google.com/maps?q=${encodeURIComponent(activeLoc.query)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Google Maps Style Card on Map Overlay - Responsive for Mobile & Desktop */}
              <div className="absolute top-3 left-3 right-3 sm:right-auto sm:top-4 sm:left-4 z-10 sm:max-w-xs bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl border border-gray-200 text-gray-900">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 text-[9px] sm:text-[10px] font-extrabold uppercase px-2 py-0.5 rounded mb-1">
                      {activeLoc.badge}
                    </div>
                    <h4 className="font-extrabold text-xs sm:text-sm text-gray-900 leading-tight">
                      Xray on Call
                    </h4>
                    <p className="text-[10px] sm:text-[11px] text-gray-600 mt-1 leading-snug">
                      {activeLoc.address}
                    </p>
                    <p className="text-[9px] sm:text-[10px] text-blue-600 font-semibold mt-0.5">
                      Coverage: {activeLoc.coverage}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1.5 mt-2 pt-2 border-t border-gray-100">
                  <span className="text-xs font-black text-gray-900">5.0</span>
                  <div className="flex items-center text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(activeLoc.query)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] sm:text-[11px] text-blue-600 font-bold hover:underline"
                  >
                    (146 reviews)
                  </a>
                </div>

                {/* Action buttons */}
                <div className="mt-2.5 sm:mt-3 flex items-center gap-2">
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(activeLoc.query)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white py-1.5 px-2.5 sm:px-3 rounded-lg text-xs font-bold shadow-xs transition-colors"
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    Open in Maps
                  </a>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(activeLoc.query)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-blue-600 transition-colors shrink-0"
                    title="Get Directions"
                  >
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── WHY XRAYONCALL ────────────────────────────────────────────────────────────
function WhyXrayOnCall() {
  const points = [
    {
      title: "Zero Hospital Hassles & Travel Stress",
      desc: "Eliminate ambulance hiring, traffic congestion, wheelchair transfers, and long hospital wait times.",
    },
    {
      title: "Comfortable Home Environment",
      desc: "Patients remain in their familiar surroundings, reducing anxiety and physical discomfort during recovery.",
    },
    {
      title: "Transparent & Affordable Pricing",
      desc: "No hidden charges. Clear upfront pricing for home visits and digital report delivery.",
    },
  ];

  return (
    <section className="bg-[#003b80] py-14 sm:py-20 lg:py-24 text-white relative overflow-hidden">
      {/* Decorative subtle ambient circles */}
      <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* ── Left Column: Content ── */}
          <div>
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-medium backdrop-blur-sm mb-4 sm:mb-6">
              <HeartIcon className="w-3.5 h-3.5 text-blue-200" />
              <span>Patient-First Healthcare</span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-white tracking-tight leading-[1.15] mb-4 sm:mb-5">
              Why Choose XrayOnCall for Portable Diagnostics?
            </h2>

            {/* Description */}
            <p className="text-blue-100/90 text-xs sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-8 max-w-xl">
              Convenient diagnostics specifically engineered for elderly patients, post-operative individuals, bedridden patients, and people with limited mobility.
            </p>

            {/* 3 Checkmark Feature Items */}
            <div className="space-y-4 sm:space-y-6">
              {points.map((p) => (
                <div key={p.title} className="flex items-start gap-3 sm:gap-4">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/10 border border-white/25 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm sm:text-base leading-snug">
                      {p.title}
                    </h4>
                    <p className="text-blue-100/80 text-xs sm:text-sm leading-relaxed mt-0.5 sm:mt-1">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right Column: Doctor Card with 24/7 Helpline ── */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-slate-900">
            <div className="relative h-72 xs:h-80 sm:h-96 md:h-[440px] lg:h-[480px] w-full">
              <Image
                src="/doctor-stethoscope.jpg"
                alt="Doctor on call with stethoscope"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
              />
              
              {/* Dark Gradient Overlay for text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#00244f] via-[#00244f]/65 to-transparent" />

              {/* Bottom Card Content */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 z-10">
                <div className="inline-block bg-blue-600 text-white text-[10px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1 rounded-full mb-2 shadow-xs">
                  24/7 Helpline Available
                </div>
                <a
                  href="tel:+919205761556"
                  className="text-white font-black text-2xl sm:text-3xl lg:text-4xl tracking-tight hover:text-blue-200 transition-colors block"
                >
                  9205761556
                </a>
                <p className="text-blue-100/80 text-xs sm:text-sm mt-1">
                  Call our medical dispatch team anytime for rapid assistance.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── TESTIMONIALS ──────────────────────────────────────────────────────────────
function Testimonials() {
  const reviews = [
    {
      name: "Rajesh Sharma",
      city: "Delhi",
      rating: 5,
      text: "Very convenient service. The technician was professional and the reports were delivered quickly.",
      initials: "RS",
      color: "bg-blue-600",
    },
    {
      name: "Priya Mehta",
      city: "Gurgaon",
      rating: 5,
      text: "Perfect for my elderly parents. No need to travel to a clinic. Highly recommended!",
      initials: "PM",
      color: "bg-violet-600",
    },
    {
      name: "Amit Verma",
      city: "Noida",
      rating: 5,
      text: "Professional, on-time and very supportive staff. Got the X-ray reports within minutes.",
      initials: "AV",
      color: "bg-teal-600",
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200/70 px-3 sm:px-3.5 py-1 rounded-full text-xs font-bold text-blue-700 mb-2 sm:mb-3 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>500+ Home Visits Diagnosed</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">What Our Patients Say</h2>
            <p className="text-gray-500 text-xs sm:text-sm mt-1.5 sm:mt-2">Real experiences from families who trust XrayOnCall across Delhi NCR.</p>
          </div>
          <a href="#booking" className="inline-flex items-center gap-1.5 border border-blue-200 text-blue-600 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold hover:bg-blue-50 transition-colors whitespace-nowrap self-start md:self-auto">
            View All Testimonials <ArrowRightIcon className="w-4 h-4" />
          </a>
        </div>

        {/* Impact Numbers / Trust Metric Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mb-8 sm:mb-10 bg-gradient-to-r from-blue-50/70 via-white to-blue-50/70 rounded-2xl p-4 sm:p-6 border border-blue-100 shadow-xs">
          <div className="text-center sm:text-left sm:pl-2">
            <p className="text-2xl sm:text-3xl sm:text-4xl font-black text-[#0a2540] tracking-tight">500+</p>
            <p className="text-xs sm:text-sm font-bold text-gray-800 mt-1">Home Visits</p>
            <p className="text-[10px] sm:text-[11px] text-gray-500">Across Delhi, Gurgaon &amp; Noida</p>
          </div>

          <div className="text-center sm:text-left border-l border-blue-200/60 pl-3 sm:pl-6">
            <p className="text-2xl sm:text-3xl sm:text-4xl font-black text-blue-600 tracking-tight">4.9 ★</p>
            <p className="text-xs sm:text-sm font-bold text-gray-800 mt-1">Patient Rating</p>
            <p className="text-[10px] sm:text-[11px] text-gray-500">From 480+ verified reviews</p>
          </div>

          <div className="text-center sm:text-left md:border-l border-blue-200/60 md:pl-6">
            <p className="text-2xl sm:text-3xl sm:text-4xl font-black text-[#0a2540] tracking-tight">20 Min</p>
            <p className="text-xs sm:text-sm font-bold text-gray-800 mt-1">Report Delivery</p>
            <p className="text-[10px] sm:text-[11px] text-gray-500">Direct on WhatsApp &amp; Email</p>
          </div>

          <div className="text-center sm:text-left border-l border-blue-200/60 pl-3 sm:pl-6">
            <p className="text-2xl sm:text-3xl sm:text-4xl font-black text-blue-600 tracking-tight">100%</p>
            <p className="text-xs sm:text-sm font-bold text-gray-800 mt-1">Certified Team</p>
            <p className="text-[10px] sm:text-[11px] text-gray-500">AERB-compliant mobile gear</p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 shadow-xs hover:shadow-lg transition-all hover:-translate-y-0.5 transform flex flex-col justify-between">
              <div>
                <div className="text-blue-200 text-5xl font-serif leading-none mb-1 -mt-2">&ldquo;</div>

                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-5">{r.text}</p>
              </div>

              <div className="flex items-center gap-3 pt-3.5 border-t border-gray-50">
                <div className={`w-9 h-9 sm:w-10 sm:h-10 ${r.color} rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-md`}>
                  {r.initials}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-xs sm:text-sm">{r.name}</p>
                  <p className="text-[11px] text-gray-500">{r.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── BOOKING CTA ───────────────────────────────────────────────────────────────
function BookingCTA({ onBookClick }: { onBookClick: () => void }) {
  return (
    <section id="booking" className="relative py-14 sm:py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-blue-600/30 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-blue-500/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />

      {/* X-ray motif */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 opacity-5 hidden sm:block pointer-events-none">
        <XrayIcon className="w-80 h-80" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 text-center lg:text-left">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Book Your X-ray Today
            </h2>
            <p className="text-blue-200 text-sm sm:text-base lg:text-lg mt-2 sm:mt-3 max-w-lg mx-auto lg:mx-0">
              Professional, safe and convenient portable X-ray services at your doorstep.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 shrink-0 w-full sm:w-auto">
            <button
              type="button"
              onClick={onBookClick}
              className="flex items-center justify-center gap-2 bg-white text-blue-700 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base hover:bg-blue-50 transition-all shadow-xl hover:-translate-y-0.5 transform cursor-pointer w-full sm:w-auto text-center"
            >
              Book an X-ray <ArrowRightIcon className="w-4 sm:w-5 h-4 sm:h-5" />
            </button>
            <a
              href="tel:+919205761556"
              className="flex items-center justify-center gap-2 border-2 border-white/30 text-white bg-white/10 backdrop-blur-sm px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base hover:bg-white/20 transition-all w-full sm:w-auto text-center"
            >
              <PhoneIcon className="w-4 sm:w-5 h-4 sm:h-5" /> 9205761556
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FAQ SECTION ───────────────────────────────────────────────────────────────
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Is a doctor's prescription mandatory for an at-home X-ray?",
      a: "Yes, as per AERB (Atomic Energy Regulatory Board) and clinical safety regulations, a valid doctor's prescription is mandatory to conduct an X-ray. You can share your prescription via WhatsApp or show it to our technician upon arrival.",
    },
    {
      q: "What is the difference between 15-minute report delivery and radiologist reports?",
      a: "Within 15 minutes of completing the scan, raw high-resolution digital X-ray reports (DICOM/JPEG) are delivered via WhatsApp/email for emergency medical review. A formal, signed diagnostic report by an experienced certified Radiologist is delivered within 2 to 4 hours.",
    },
    {
      q: "Are portable X-rays safe to perform inside a home?",
      a: "Yes, absolutely. Our high-frequency digital portable X-ray machines emit low-dose radiation targeted strictly at the anatomical scan area. Our certified technician also carries specialized lead aprons and shields to guarantee complete safety for all family members and pets.",
    },
    {
      q: "How do I pay for the home visit and scan?",
      a: "We maintain 100% transparent pricing with no hidden charges. You can pay conveniently upon technician arrival or after digital report delivery via UPI (Google Pay, PhonePe, Paytm), Credit/Debit Card, Net Banking, or Cash.",
    },
  ];

  return (
    <section id="faqs" className="py-14 sm:py-20 bg-slate-50/70 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-600 mb-2">
            Got Questions?
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-extrabold text-[#0a2540] tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.q}
                className="bg-white rounded-xl sm:rounded-2xl border border-gray-200/70 shadow-xs overflow-hidden transition-all duration-200 hover:border-blue-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full py-4 sm:py-5 px-4 sm:px-8 flex items-center justify-between text-left gap-3 sm:gap-4 hover:bg-slate-50/60 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-[#0a2540] text-xs sm:text-base leading-snug">
                    {faq.q}
                  </span>
                  <span
                    className={`w-6 h-6 flex items-center justify-center text-blue-600 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-8 pb-4 sm:pb-5 pt-1 text-gray-500 text-xs sm:text-sm leading-relaxed border-t border-gray-50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="w-full">
      {/* ── Main Dark Footer ── */}
      <div className="bg-[#262626] text-gray-300 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          
          {/* Column 1: Our Facilities */}
          <div>
            <div className="mb-5 sm:mb-6">
              <h3 className="text-white font-bold text-base sm:text-lg pb-1.5 relative inline-block">
                Our Facilities
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500 rounded-full" />
              </h3>
            </div>

            {/* Diagnostic Brand Badge with Large Free Logo */}
            <div className="flex items-center gap-3.5 mb-5 sm:mb-6">
              <div className="relative w-36 h-12 sm:w-40 sm:h-14 shrink-0 flex items-center justify-start">
                <Image
                  src="/logo2.png"
                  alt="XrayOnCall Logo"
                  width={707}
                  height={353}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <ul className="space-y-2 text-xs">
              {[
                "Home X-Ray",
                "ECG at Home",
                "ABG Test at Home",
                "Holter Monitoring at Home",
                "EMG Test at Home",
                "NCV Test at Home",
                "Digital X-Ray",
                "ABPM Test at Home",
                "Sleep Study Test at Home",
                "ELR Test at Home",
              ].map((item) => (
                <li key={item} className="border-b border-gray-700/40 pb-2">
                  <a href="#booking" className="hover:text-blue-400 transition-colors block text-gray-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Local Areas */}
          <div>
            <div className="mb-5 sm:mb-6">
              <h3 className="text-white font-bold text-base sm:text-lg pb-1.5 relative inline-block">
                Local Areas
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500 rounded-full" />
              </h3>
            </div>
            <ul className="space-y-2 text-xs">
              {[
                "Home X-Ray Delhi",
                "Home X-Ray Gurgaon",
                "Home X-Ray Noida",
                "Home X-Ray Faridabad",
                "Home X-Ray Ghaziabad",
                "Home X-Ray Greater Noida",
                "Home X-Ray in Sonipat",
                "Home X-Ray in Panipat",
                "Home X-Ray in Bahadurgarh",
                "Home X-Ray in Jhajjar",
                "Home X-Ray in Manesar",
                "Home X-Ray in Rewari",
                "Home X-Ray in Bhiwadi",
              ].map((loc) => (
                <li key={loc} className="border-b border-gray-700/40 pb-2">
                  <a href="#service-areas" className="hover:text-blue-400 transition-colors block text-gray-300">
                    {loc}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: More Areas */}
          <div>
            <div className="mb-5 sm:mb-6">
              <h3 className="text-white font-bold text-base sm:text-lg pb-1.5 relative inline-block">
                More Areas
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500 rounded-full" />
              </h3>
            </div>
            <ul className="space-y-2 text-xs">
              {[
                "Home X-Ray in East of Kailash",
                "Home X-Ray in Kailash Colony",
                "Home X-Ray in Greater Kailash 1",
                "Home X-Ray in Greater Kailash 2",
                "Home X-Ray in Nehru Place",
                "Home X-Ray in Kalkaji",
                "Home X-Ray in Govindpuri",
                "Home X-Ray in CR Park",
                "Home X-Ray in Lajpat Nagar",
                "Home X-Ray in Defence Colony",
                "Home X-Ray in Ashram",
                "Home X-Ray in Jangpura",
                "Home X-Ray in Saket",
                "Home X-Ray in Vasant Kunj",
              ].map((area) => (
                <li key={area} className="border-b border-gray-700/40 pb-2">
                  <a href="#service-areas" className="hover:text-blue-400 transition-colors block text-gray-300">
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <div className="mb-5 sm:mb-6">
              <h3 className="text-white font-bold text-base sm:text-lg pb-1.5 relative inline-block">
                Contact Us
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500 rounded-full" />
              </h3>
            </div>

            <div className="space-y-3.5 sm:space-y-4 text-xs">
              {/* Address 1: Main Location Delhi */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded border border-gray-600 bg-gray-800/80 flex items-center justify-center shrink-0 mt-0.5 text-blue-400">
                  <MapPinIcon className="w-4 h-4" />
                </div>
                <div className="leading-relaxed">
                  <span className="text-white font-semibold">Main HQ:</span> Roxy Chowk, Lajpat Nagar 2, New Delhi - 110024
                </div>
              </div>

              {/* Address 2: Sonia Vihar */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded border border-gray-600 bg-gray-800/80 flex items-center justify-center shrink-0 mt-0.5 text-blue-400">
                  <MapPinIcon className="w-4 h-4" />
                </div>
                <div className="leading-relaxed">
                  <span className="text-white font-semibold">Address:</span> 5th Pusta, Sonia Vihar, New Delhi - 110094
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded border border-gray-600 bg-gray-800/80 flex items-center justify-center shrink-0 text-blue-400">
                  <PhoneIcon className="w-4 h-4" />
                </div>
                <a
                  href="tel:+919205761556"
                  className="text-white font-bold text-xs sm:text-sm hover:text-blue-400 transition-colors"
                >
                  9205761556
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded border border-gray-600 bg-gray-800/80 flex items-center justify-center shrink-0 text-blue-400">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <a
                  href="mailto:Xrayoncall16@gmail.com"
                  className="text-gray-300 hover:text-blue-400 transition-colors break-all"
                >
                  Xrayoncall16@gmail.com
                </a>
              </div>

              {/* Social Media Links */}
              <div className="pt-2 sm:pt-3">
                <p className="text-[11px] text-gray-400 mb-2 font-medium uppercase tracking-wider">Connect With Us</p>
                <div className="flex items-center gap-2">
                  {[
                    {
                      name: "Facebook",
                      icon: <span className="font-bold text-xs">f</span>,
                    },
                    {
                      name: "Twitter",
                      icon: (
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      ),
                    },
                    {
                      name: "Instagram",
                      icon: (
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                      ),
                    },
                    {
                      name: "LinkedIn",
                      icon: <span className="font-bold text-xs lowercase">in</span>,
                    },
                    {
                      name: "YouTube",
                      icon: (
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                      ),
                    },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href="#"
                      className="w-8 h-8 rounded-full border border-gray-600 bg-gray-800/80 flex items-center justify-center text-gray-300 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all shadow-xs"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Sub-footer / Disclaimer Bar ── */}
      <div className="bg-[#1b1b1b] py-5 sm:py-6 px-4 text-center text-xs text-gray-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p>
            © 2026 XrayOnCall. All rights reserved. Doorstep Portable X-Ray in Delhi, Gurgaon, Noida &amp; NCR.
          </p>
          <div className="flex items-center justify-center gap-4 text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── FLOATING RIGHT STRIP ──────────────────────────────────────────────────────
function FloatingRightStrip() {
  return (
    <div className="fixed right-0 bottom-4 sm:bottom-6 z-50 flex flex-col items-end gap-0">
      {/* Call */}
      <a
        href="tel:+919205761556"
        aria-label="Call us"
        className="group flex items-center h-11 sm:h-14 bg-[#00bcd4] hover:bg-[#00acc1] shadow-lg transition-all duration-300 overflow-hidden rounded-l-xl sm:rounded-l-2xl"
      >
        {/* Label slides in on hover – hidden on mobile */}
        <span className="hidden sm:block max-w-0 group-hover:max-w-[120px] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out whitespace-nowrap text-white font-bold text-sm pl-0 group-hover:pl-4 overflow-hidden pr-1">
          Call Us
        </span>
        <div className="w-11 h-11 sm:w-14 sm:h-14 flex items-center justify-center shrink-0">
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
          </svg>
        </div>
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919205761556?text=Hi%2C%20I%20want%20to%20book%20a%20home%20X-ray"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp us"
        className="group flex items-center h-11 sm:h-14 bg-[#25d366] hover:bg-[#1ebe5d] shadow-lg transition-all duration-300 overflow-hidden rounded-l-xl sm:rounded-l-2xl"
      >
        <span className="hidden sm:block max-w-0 group-hover:max-w-[120px] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out whitespace-nowrap text-white font-bold text-sm pl-0 group-hover:pl-4 overflow-hidden pr-1">
          WhatsApp
        </span>
        <div className="w-11 h-11 sm:w-14 sm:h-14 flex items-center justify-center shrink-0">
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </div>
      </a>

      {/* Location / Maps */}
      <a
        href="https://maps.google.com/?q=Roxy+Chowk,+Lajpat+Nagar+2,+New+Delhi+110024"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Find us on map"
        className="group flex items-center h-11 sm:h-14 bg-[#e53935] hover:bg-[#d32f2f] shadow-lg transition-all duration-300 overflow-hidden rounded-l-xl sm:rounded-l-2xl"
      >
        <span className="hidden sm:block max-w-0 group-hover:max-w-[120px] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out whitespace-nowrap text-white font-bold text-sm pl-0 group-hover:pl-4 overflow-hidden pr-1">
          Find Us
        </span>
        <div className="w-11 h-11 sm:w-14 sm:h-14 flex items-center justify-center shrink-0">
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
        </div>
      </a>
    </div>
  );
}

// ─── MAIN PAGE ─────────────────────────────────────────────────────────────────
export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedScan, setSelectedScan] = useState("Chest X-ray");

  const handleOpenBooking = (scan?: string) => {
    if (scan) setSelectedScan(scan);
    setIsModalOpen(true);
  };

  return (
    <main className="min-h-screen antialiased">
      <FloatingRightStrip />
      <Navbar onBookClick={() => handleOpenBooking()} />
      <HeroSection onBookClick={() => handleOpenBooking()} />
      <TrustBar />
      <ServicesSection onBookClick={(scan) => handleOpenBooking(scan)} />
      <HowItWorks />
      <ServiceLocations onBookClick={() => handleOpenBooking()} />
      <ServiceAreaChecker onBookClick={(scan) => handleOpenBooking(scan)} />
      <WhyXrayOnCall />
      <Testimonials />
      <FAQSection />
      <BookingCTA onBookClick={() => handleOpenBooking()} />
      <Footer />

      {/* Morph Animation Registration Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultScanType={selectedScan}
      />
    </main>
  );
}
