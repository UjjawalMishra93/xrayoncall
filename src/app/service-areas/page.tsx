"use client";

import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
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

function SparklesIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
    </svg>
  );
}

const cityAreas = [
  {
    city: "Delhi (All Regions)",
    dispatchTime: "30 - 45 Mins",
    hubs: "South, West, North, East, Central & Dwarka",
    localities: [
      "Lajpat Nagar", "Greater Kailash", "GK 1", "GK 2", "East of Kailash", "Kailash Colony",
      "Defence Colony", "Saket", "Vasant Kunj", "CR Park", "Kalkaji", "Hauz Khas",
      "South Extension", "Malviya Nagar", "Janakpuri", "Dwarka", "Rohini", "Pitampura",
      "Karol Bagh", "Connaught Place", "Mayur Vihar", "Preet Vihar",
    ],
  },
  {
    city: "Gurgaon (Gurugram)",
    dispatchTime: "30 - 45 Mins",
    hubs: "Cyber City, DLF Phases, Golf Course Rd & Sohna Rd",
    localities: [
      "DLF Phase 1", "DLF Phase 2", "DLF Phase 3", "DLF Phase 4", "DLF Phase 5",
      "Golf Course Road", "Sohna Road", "Cyber City", "Sector 14", "Sector 15",
      "Sector 31", "Sector 45", "Sector 56", "Sector 57", "Sushant Lok",
      "South City", "Nirvana Country", "Manesar",
    ],
  },
  {
    city: "Noida & Greater Noida",
    dispatchTime: "35 - 50 Mins",
    hubs: "Expressway, Sector 18, 62 & Greater Noida West",
    localities: [
      "Sector 15", "Sector 18", "Sector 50", "Sector 62", "Sector 76",
      "Sector 128", "Sector 137", "Noida Expressway", "Greater Noida",
      "Noida Extension", "Pari Chowk", "Alpha 1", "Knowledge Park",
    ],
  },
  {
    city: "Faridabad",
    dispatchTime: "35 - 50 Mins",
    hubs: "NIT, Green Field & Greater Faridabad",
    localities: [
      "Sector 14", "Sector 15", "Sector 16", "Sector 21C", "NIT Faridabad",
      "Green Field Colony", "Surajkund", "Charmwood Village", "Greater Faridabad",
    ],
  },
  {
    city: "Ghaziabad",
    dispatchTime: "35 - 50 Mins",
    hubs: "Indirapuram, Vaishali & Raj Nagar",
    localities: [
      "Indirapuram", "Vaishali", "Vasundhara", "Kaushambi",
      "Raj Nagar Extension", "Crossings Republik",
    ],
  },
  {
    city: "Extended NCR Hubs",
    dispatchTime: "45 - 60 Mins",
    hubs: "Industrial & Satellite Zones",
    localities: [
      "Sonipat", "Panipat", "Bahadurgarh", "Jhajjar", "Rewari", "Bhiwadi", "Kundli",
    ],
  },
];

export default function ServiceAreasPage() {
  const [search, setSearch] = useState("");
  const { openBooking } = useBooking();

  const filteredAreas = cityAreas
    .map((city) => {
      if (!search.trim()) {
        return { ...city, isRelevant: true };
      }
      const matchedLocalities = city.localities.filter((loc) =>
        loc.toLowerCase().includes(search.toLowerCase())
      );
      const cityMatches = city.city.toLowerCase().includes(search.toLowerCase());
      return {
        ...city,
        localities: cityMatches ? city.localities : matchedLocalities,
        isRelevant: cityMatches || matchedLocalities.length > 0,
      };
    })
    .filter((city) => city.isRelevant);

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Navbar />

      <main className="flex-1">
        {/* ── HERO SECTION ── */}
        <section className="relative bg-gradient-to-b from-[#f0f5ff] via-[#f7faff] to-white pt-12 sm:pt-16 pb-16 sm:pb-24 border-b border-gray-100 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 mb-3">
              <Link href="/" className="hover:underline text-gray-500">Home</Link>
              <span>/</span>
              <span>Service Areas</span>
            </div>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200/80 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold shadow-2xs mb-4">
                <SparklesIcon className="w-3.5 h-3.5 text-blue-600" />
                <span>Delhi NCR Rapid Diagnostic Dispatch Network</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-gray-950 tracking-tight leading-tight">
                Our Doorstep{" "}
                <span className="text-blue-600">Service Areas</span>
              </h1>

              <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                Operating dedicated mobile diagnostic vehicles equipped with digital X-ray and 12-lead ECG machinery across all sectors of Delhi, Gurgaon, Noida, Faridabad, and Ghaziabad.
              </p>

              {/* Real-time Locality Search Bar */}
              <div className="mt-8 max-w-lg">
                <div className="relative">
                  <MapPinIcon className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search your locality (e.g. Lajpat Nagar, DLF, Indirapuram)..."
                    className="w-full pl-12 pr-12 py-3.5 bg-white border border-gray-200 rounded-2xl text-xs sm:text-sm shadow-sm focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                  />
                  {search && (
                    <button
                      onClick={() => setSearch("")}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-700 font-semibold"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── AREAS DIRECTORY GRID ── */}
        <section className="py-16 sm:py-24 bg-gray-50/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAreas.map((item) => (
                <div
                  key={item.city}
                  className="bg-white rounded-3xl border border-gray-200/90 p-6 sm:p-7 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <h2 className="text-xl font-extrabold text-gray-900">
                        {item.city}
                      </h2>
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                        <ClockIcon className="w-3 h-3" />
                        {item.dispatchTime}
                      </span>
                    </div>

                    <p className="text-xs text-blue-600 font-semibold mb-4">
                      Key Hubs: {item.hubs}
                    </p>

                    {/* Sublocation interactive links */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {item.localities.map((loc) => {
                        const isMatch = search && loc.toLowerCase().includes(search.toLowerCase());
                        const slug = loc
                          .split(",")[0]
                          .toLowerCase()
                          .replace(/[()]/g, "")
                          .replace(/&/g, "and")
                          .trim()
                          .replace(/\s+/g, "-");
                        return (
                          <Link
                            key={loc}
                            href={`/service-areas/${slug}`}
                            className={`text-xs px-2.5 py-1 rounded-lg border transition-all hover:scale-105 inline-flex items-center gap-1 ${
                              isMatch
                                ? "bg-blue-600 text-white font-bold border-blue-600 shadow-xs"
                                : "bg-gray-50 text-gray-700 border-gray-200/80 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200"
                            }`}
                          >
                            <span>{loc}</span>
                            <span className="text-[10px] opacity-70">→</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
                    <button
                      onClick={() => openBooking(`X-ray / ECG in ${item.city}`)}
                      className="flex-1 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Book in {item.city.split(" ")[0]}</span>
                      <ArrowRightIcon className="w-3.5 h-3.5" />
                    </button>
                    <a
                      href="tel:+919205761556"
                      className="p-2.5 rounded-xl border border-gray-200 hover:bg-gray-50 text-gray-700 transition-colors"
                      aria-label="Direct Call"
                    >
                      <PhoneIcon className="w-4 h-4 text-blue-600" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {filteredAreas.length === 0 && (
              <div className="text-center py-16 bg-white rounded-3xl border border-gray-200 max-w-lg mx-auto">
                <MapPinIcon className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 text-lg">Don&apos;t see your locality?</h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1 px-4">
                  We frequently cover custom locations across Greater NCR. Call our dispatch center to confirm immediate availability.
                </p>
                <a
                  href="tel:+919205761556"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-6 py-2.5 rounded-full text-xs sm:text-sm mt-5 hover:bg-blue-700"
                >
                  <PhoneIcon className="w-4 h-4" />
                  <span>Call Dispatch: 9205761556</span>
                </a>
              </div>
            )}
          </div>
        </section>

        {/* ── STATS BAR ── */}
        <section className="py-12 bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-600">30-45 Mins</div>
              <p className="text-xs sm:text-sm text-gray-600 font-semibold mt-1">Average NCR Arrival Time</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-600">100%</div>
              <p className="text-xs sm:text-sm text-gray-600 font-semibold mt-1">Delhi NCR Pincode Reach</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-600">24 Hours</div>
              <p className="text-xs sm:text-sm text-gray-600 font-semibold mt-1">Emergency Dispatch Service</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-600">15 Mins</div>
              <p className="text-xs sm:text-sm text-gray-600 font-semibold mt-1">Verified Report Delivery</p>
            </div>
          </div>
        </section>

        {/* ── CTA BANNER ── */}
        <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Need a scan at your doorstep?</h3>
              <p className="text-blue-100 text-xs sm:text-sm mt-1">Our technicians arrive within 30-45 minutes in most NCR locations.</p>
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
