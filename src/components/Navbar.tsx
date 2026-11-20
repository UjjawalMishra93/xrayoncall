"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
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

function HeartPulseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19.5 13.572L12 21l-7.5-7.428A5 5 0 1 1 12 6.572a5 5 0 1 1 7.5 7z" />
    </svg>
  );
}

export default function Navbar({ onBookClick }: { onBookClick?: () => void } = {}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openBooking } = useBooking();

  const handleBookClick = () => {
    if (onBookClick) {
      onBookClick();
    } else {
      openBooking();
    }
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    {
      label: "ECG at Home",
      href: "/ecg",
      isHighlighted: true,
    },
    { label: "How It Works", href: "/how-it-works" },
    { label: "About Us", href: "/about" },
    { label: "Service Areas", href: "/service-areas" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xs">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20 gap-2 lg:gap-4 xl:gap-6">
          
          {/* Brand Logo with clean right margin */}
          <Link href="/" className="flex items-center group shrink-0 mr-1 sm:mr-2 lg:mr-4">
            <div className="relative w-40 h-11 xs:w-44 xs:h-12 sm:w-48 sm:h-14 xl:w-52 xl:h-15 flex items-center justify-start">
              <Image
                src="/logo2.png"
                alt="XrayOnCall Logo"
                width={707}
                height={353}
                className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-300 drop-shadow-xs"
                priority
                unoptimized
              />
            </div>
          </Link>

          {/* Desktop Nav Links - Clean, single-line, perfectly spaced */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2.5 2xl:gap-3 flex-1 justify-center">
            {navLinks.map((item) => {
              if (item.isHighlighted) {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`whitespace-nowrap shrink-0 inline-flex items-center gap-1.5 text-xs xl:text-[13px] font-bold px-2.5 xl:px-3 py-1.5 rounded-full border transition-all shadow-2xs hover:scale-[1.03] ${
                      active
                        ? "bg-rose-600 text-white border-rose-600 shadow-rose-200"
                        : "bg-rose-50 text-rose-700 hover:bg-rose-100/90 border-rose-200 hover:text-rose-800"
                    }`}
                  >
                    <span className={`w-2 h-2 rounded-full animate-pulse ${active ? "bg-white" : "bg-rose-500"}`} />
                    <span>{item.label}</span>
                    <span
                      className={`text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded-full leading-none ${
                        active ? "bg-white text-rose-700" : "bg-rose-600 text-white"
                      }`}
                    >
                      New
                    </span>
                  </Link>
                );
              }

              const active = isActive(item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`whitespace-nowrap shrink-0 text-xs xl:text-[13px] 2xl:text-sm font-semibold transition-all px-2.5 xl:px-3 py-1.5 rounded-lg ${
                    active
                      ? "text-blue-600 font-bold bg-blue-50/80 shadow-2xs"
                      : "text-gray-600 hover:text-blue-600 hover:bg-gray-50/90"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA Buttons - Desktop (Fixed single line, no wrap) */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0 ml-1 lg:ml-2">
            <a
              href="tel:+919205761556"
              className="whitespace-nowrap shrink-0 relative flex items-center gap-1.5 xl:gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-3.5 xl:px-4.5 py-2 xl:py-2.5 rounded-full text-xs xl:text-sm font-bold hover:from-blue-700 hover:to-blue-600 transition-all shadow-sm shadow-blue-200 hover:-translate-y-0.5 transform group"
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <PhoneIcon className="w-3.5 h-3.5 xl:w-4 xl:h-4 shrink-0" />
              <span className="tracking-wide">9205761556</span>
            </a>
            <button
              onClick={handleBookClick}
              className="whitespace-nowrap shrink-0 flex items-center gap-1.5 bg-blue-600 text-white px-3.5 xl:px-4.5 py-2 xl:py-2.5 rounded-full text-xs xl:text-sm font-semibold hover:bg-blue-700 transition-all shadow-sm hover:shadow-md cursor-pointer"
            >
              <span>Book Scan</span>
              <ArrowRightIcon className="w-3.5 h-3.5 xl:w-4 xl:h-4 shrink-0" />
            </button>
          </div>

          {/* Tablet Quick Action (sm to lg) */}
          <div className="hidden sm:flex lg:hidden items-center gap-2 shrink-0">
            <a
              href="tel:+919205761556"
              className="flex items-center gap-1.5 bg-blue-50 text-blue-700 border border-blue-200/80 px-3 py-1.5 rounded-full text-xs font-bold hover:bg-blue-100 transition-colors whitespace-nowrap"
            >
              <PhoneIcon className="w-3.5 h-3.5 text-blue-600" />
              <span>9205761556</span>
            </a>
            <button
              onClick={handleBookClick}
              className="flex items-center gap-1 bg-blue-600 text-white px-3 py-1.5 rounded-full text-xs font-bold hover:bg-blue-700 transition-colors shadow-xs whitespace-nowrap cursor-pointer"
            >
              <span>Book</span>
              <ArrowRightIcon className="w-3 h-3" />
            </button>
            <button
              className="p-2 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors focus:outline-hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={`block h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
                <span className={`block h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
                <span className={`block h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </button>
          </div>

          {/* Mobile Hamburger (below sm) */}
          <div className="flex sm:hidden items-center gap-2 shrink-0">
            <a
              href="tel:+919205761556"
              className="p-2 rounded-full bg-blue-50 text-blue-600 border border-blue-200"
              aria-label="Call XrayOnCall"
            >
              <PhoneIcon className="w-4 h-4" />
            </a>
            <button
              className="p-2 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors focus:outline-hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={`block h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
                <span className={`block h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
                <span className={`block h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Dropdown Drawer */}
        {menuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100 space-y-1 animate-fadeIn">
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((item) => {
                const active = isActive(item.href);
                if (item.isHighlighted) {
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`flex items-center justify-between text-sm font-bold px-4 py-2.5 rounded-xl transition-colors border ${
                        active
                          ? "bg-rose-600 text-white border-rose-600"
                          : "text-rose-700 bg-rose-50 hover:bg-rose-100 border-rose-200"
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      <span className="flex items-center gap-2">
                        <HeartPulseIcon className="w-4 h-4 text-rose-500 animate-pulse" />
                        <span>{item.label}</span>
                      </span>
                      <span
                        className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full ${
                          active ? "bg-white text-rose-600" : "bg-rose-600 text-white"
                        }`}
                      >
                        New
                      </span>
                    </Link>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`block text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors ${
                      active
                        ? "text-blue-600 bg-blue-50/80 font-bold border-l-4 border-blue-600"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5 pt-4 px-1 border-t border-gray-100 mt-2">
              <a
                href="tel:+919205761556"
                className="relative flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-3 rounded-xl text-sm font-bold shadow-sm shadow-blue-200"
              >
                <PhoneIcon className="w-4 h-4" /> Call 9205761556
              </a>
              <button
                onClick={() => {
                  setMenuOpen(false);
                  handleBookClick();
                }}
                className="flex-1 flex items-center justify-center gap-2 bg-blue-700 text-white px-4 py-3 rounded-xl text-sm font-bold shadow-xs cursor-pointer hover:bg-blue-800"
              >
                <span>Book a Scan</span>
                <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
