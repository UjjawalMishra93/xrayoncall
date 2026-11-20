import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getLocationBySlug, getAllLocationSlugs, locationDatabase } from "@/data/serviceLocations";
import LocalBookingSection from "./LocalBookingSection";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  return {
    title: `Portable X-Ray & ECG at Home in ${location.name} | Reports in 15 Mins`,
    description: `Book digital chest X-ray and 12-lead ECG at home in ${location.name}. Dispatched from ${location.dispatchHub} within ${location.eta}. Official reports signed by MD Radiologists.`,
    keywords: `home x-ray ${location.name}, portable x-ray ${location.name}, ecg at home ${location.name}, bedside x-ray ${location.region}, digital x-ray home visit`,
  };
}

// ─── ICONS ─────────────────────────────────────────────────────────────────────
function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
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
function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 010 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}
function ShieldCheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" />
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
function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
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
function XrayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
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
function FileIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
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

export default async function SublocationPage({ params }: PageProps) {
  const { slug } = await params;
  if (!slug) notFound();

  const location = getLocationBySlug(slug);
  const nearbyLocations = Object.values(locationDatabase)
    .filter((loc) => loc.slug !== location.slug && loc.region === location.region)
    .slice(0, 8);

  const xrayScans = [
    { title: "Chest X-Ray", desc: "Lungs, heart & pleura", img: "/services/chest-xray.jpg", color: "from-blue-600 to-blue-800" },
    { title: "Spine X-Ray", desc: "Cervical, lumbar & disc", img: "/services/spine-xray.jpg", color: "from-indigo-600 to-indigo-800" },
    { title: "Limb & Joint", desc: "Fractures & arthritis", img: "/services/hand-xray.jpg", color: "from-sky-600 to-sky-800" },
    { title: "Pelvis & Hip", desc: "Fall trauma & fractures", img: "/services/other-xray.jpg", color: "from-blue-700 to-indigo-700" },
  ];

  const ecgVariants = [
    { title: "12-Lead ECG", desc: "Arrhythmia & ischemia detection", icon: "⚡" },
    { title: "24H Holter", desc: "Full-day ambulatory cardiac tracing", icon: "📈" },
    { title: "48H Holter", desc: "Extended episode & rhythm capture", icon: "🔁" },
    { title: "Pre-Op ECG", desc: "Surgical cardiac fitness clearance", icon: "🏥" },
  ];

  const whyUsPoints = [
    { icon: <HomeIcon className="w-5 h-5" />, text: "No hospital visit — we come to your bed" },
    { icon: <ClockIcon className="w-5 h-5" />, text: `Arrive in ${location.eta} from dispatch` },
    { icon: <FileIcon className="w-5 h-5" />, text: "MD-signed report in 15 min via WhatsApp" },
    { icon: <ShieldCheckIcon className="w-5 h-5" />, text: "AERB certified radiation-safe equipment" },
    { icon: <HeartPulseIcon className="w-5 h-5" />, text: "Cardiologist-verified ECG reports" },
    { icon: <StarIcon className="w-5 h-5" />, text: "4.9★ rated across 15,000+ patients" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Navbar />

      <main className="flex-1">

        {/* ══════════════════════════════════════════════════════════════
            HERO — Full dark split layout
        ══════════════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#06153a] via-[#0a1f6e] to-[#1a3fdb] text-white">
          {/* Dot grid */}
          <div className="absolute inset-0 opacity-[0.07] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-0">
            {/* Breadcrumb */}
            <div className="flex flex-wrap items-center gap-1.5 text-xs font-semibold text-blue-300 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-blue-500">/</span>
              <Link href="/service-areas" className="hover:text-white transition-colors">Service Areas</Link>
              <span className="text-blue-500">/</span>
              <span className="text-white font-bold">{location.name}</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 items-end">
              {/* Left — headline content */}
              <div className="pb-16 lg:pb-20 pt-2">
                {/* Live status pill */}
                <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold px-4 py-1.5 rounded-full mb-5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Doorstep Dispatch Active · {location.eta} Arrival
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-[3rem] font-black leading-[1.08] tracking-tight mb-5">
                  Portable X-Ray &amp;{" "}
                  <span className="text-cyan-300">ECG at Home</span>
                  <br />
                  <span className="text-blue-200">in {location.name}</span>
                </h1>

                <p className="text-blue-100 text-sm sm:text-base leading-relaxed max-w-lg mb-7">
                  Hospital-grade bedside diagnostics delivered to your doorstep in <strong className="text-white">{location.name}</strong>. Certified radiographers, AERB-approved equipment, and doctor-signed digital reports in 15 minutes.
                </p>

                {/* Quick stat row */}
                <div className="grid grid-cols-3 gap-3 mb-7 max-w-sm">
                  <div className="bg-white/10 border border-white/15 rounded-2xl p-3 text-center">
                    <div className="text-xl font-black text-cyan-300">{location.eta}</div>
                    <div className="text-[10px] text-blue-200 font-medium mt-0.5">Arrival</div>
                  </div>
                  <div className="bg-white/10 border border-white/15 rounded-2xl p-3 text-center">
                    <div className="text-xl font-black text-cyan-300">15m</div>
                    <div className="text-[10px] text-blue-200 font-medium mt-0.5">Report</div>
                  </div>
                  <div className="bg-white/10 border border-white/15 rounded-2xl p-3 text-center">
                    <div className="text-xl font-black text-cyan-300">24×7</div>
                    <div className="text-[10px] text-blue-200 font-medium mt-0.5">Dispatch</div>
                  </div>
                </div>

                {/* CTA buttons */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href="tel:+919205761556"
                    className="inline-flex items-center gap-2 bg-white text-blue-700 px-6 py-3.5 rounded-2xl font-black text-sm hover:bg-blue-50 transition-all shadow-xl"
                  >
                    <PhoneIcon className="w-4 h-4" /> 9205761556
                  </a>
                  <a
                    href={`https://wa.me/919205761556?text=Hi%2C%20I%20need%20a%20home%20X-ray%20or%20ECG%20in%20${encodeURIComponent(location.name)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25d366] hover:bg-[#1ebe5d] text-white px-6 py-3.5 rounded-2xl font-black text-sm transition-all shadow-lg"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                    WhatsApp
                  </a>
                </div>

                {/* Dispatch hub info */}
                <div className="mt-6 flex items-center gap-2 text-xs text-blue-200">
                  <MapPinIcon className="w-3.5 h-3.5 text-cyan-300 shrink-0" />
                  <span>Dispatching from <strong className="text-white">{location.dispatchHub}</strong></span>
                </div>
              </div>

              {/* Right — service image cards stacked */}
              <div className="relative h-72 sm:h-96 lg:h-auto lg:min-h-[500px] flex items-end justify-center lg:justify-end pb-0">
                <div className="absolute right-0 bottom-0 w-72 sm:w-80 lg:w-96 h-56 sm:h-64 lg:h-72 rounded-t-3xl overflow-hidden shadow-2xl border border-white/10">
                  <Image src="/services/xray-portable.png" alt="Portable X-Ray" fill className="object-cover" sizes="400px" />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-[11px] font-bold text-cyan-300 uppercase tracking-widest mb-0.5">Service 01 · {location.name}</div>
                    <div className="text-white font-black text-lg">Portable X-Ray</div>
                  </div>
                </div>
                <div className="absolute right-32 sm:right-44 lg:right-52 bottom-20 sm:bottom-28 w-56 sm:w-64 lg:w-72 h-44 sm:h-52 lg:h-60 rounded-3xl overflow-hidden shadow-2xl border border-white/20 ring-2 ring-cyan-300/30">
                  <Image src="/services/ecg-patient.png" alt="ECG at Home" fill className="object-cover" sizes="300px" />
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-900/80 via-rose-900/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-[11px] font-bold text-rose-300 uppercase tracking-widest mb-0.5">Service 02 · {location.name}</div>
                    <div className="text-white font-black text-lg">12-Lead ECG</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Wave bottom */}
          <div className="relative h-10 overflow-hidden mt-0">
            <svg viewBox="0 0 1440 40" className="absolute bottom-0 w-full" preserveAspectRatio="none" fill="white">
              <path d="M0,40 C360,0 1080,0 1440,40 L1440,40 L0,40 Z" />
            </svg>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            QUICK INFO BADGES BAR
        ══════════════════════════════════════════════════════════════ */}
        <section className="bg-white py-6 border-b border-gray-100 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: <MapPinIcon className="w-4 h-4" />, label: "Primary Hub", value: location.dispatchHub, color: "text-blue-600" },
              { icon: <ClockIcon className="w-4 h-4" />, label: "Doorstep Arrival", value: location.eta, color: "text-emerald-600" },
              { icon: <FileIcon className="w-4 h-4" />, label: "Report Speed", value: "15–20 Min · WhatsApp", color: "text-purple-600" },
              { icon: <ShieldCheckIcon className="w-4 h-4" />, label: "Radiation Safety", value: "100% AERB Certified", color: "text-amber-600" },
            ].map((b) => (
              <div key={b.label} className="bg-gray-50 rounded-2xl border border-gray-100 p-4">
                <div className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider mb-1 ${b.color}`}>
                  {b.icon} {b.label}
                </div>
                <div className="text-sm font-black text-gray-900">{b.value}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            SERVICE 01 — PORTABLE X-RAY AT [LOCATION]
        ══════════════════════════════════════════════════════════════ */}
        <section className="py-20 sm:py-28 bg-gradient-to-b from-[#f0f7ff] to-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Label */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
                <XrayIcon className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-blue-600 block">Service 01</span>
                <span className="text-[11px] text-gray-500">Available in {location.name}</span>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
              {/* Left — content */}
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight leading-tight mb-4">
                  Portable Digital<br />
                  <span className="text-blue-600">X-Ray in {location.name}</span>
                </h2>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
                  Hospital-standard digital radiography performed at your bedside — zero patient movement, zero queue. AERB-certified equipment delivers crisp images, with an MD Radiologist-verified report in just 15–20 minutes via WhatsApp.
                </p>

                {/* Sub-scans grid */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {xrayScans.map((scan) => (
                    <div key={scan.title} className="relative h-28 rounded-2xl overflow-hidden group">
                      <Image src={scan.img} alt={scan.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="200px" />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/85 via-blue-900/20 to-transparent" />
                      <div className="absolute bottom-2.5 left-3">
                        <div className="text-white font-bold text-xs sm:text-sm">{scan.title}</div>
                        <div className="text-blue-200 text-[10px]">{scan.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Specs */}
                <div className="space-y-2.5 mb-8">
                  {[
                    "Zero patient movement — performed on your own bed",
                    "High-DPI 150-micron digital flat-panel DR detector",
                    "AERB approved lead shielding aprons provided",
                    "MD Radiologist verified DICOM report in 15 mins",
                  ].map((s) => (
                    <div key={s} className="flex items-center gap-2.5 text-sm text-gray-700">
                      <CheckIcon className="w-4 h-4 text-emerald-500 shrink-0" /> {s}
                    </div>
                  ))}
                </div>

                <a
                  href="tel:+919205761556"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 rounded-2xl font-bold text-sm shadow-lg shadow-blue-200 transition-all"
                >
                  Book X-Ray in {location.name} <ArrowRightIcon className="w-4 h-4" />
                </a>
              </div>

              {/* Right — big image with floating badges */}
              <div className="relative">
                <div className="relative h-80 sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image src="/services/xray-tech.png" alt="Digital X-Ray Services" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
                </div>
                {/* Floating badge — top left */}
                <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 bg-white rounded-2xl shadow-xl border border-blue-100 p-3 sm:p-4 max-w-[160px]">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center">
                      <ShieldCheckIcon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-wide">AERB Safe</span>
                  </div>
                  <div className="text-xs text-gray-600 font-medium leading-snug">Certified radiation safety at home</div>
                </div>
                {/* Floating badge — bottom right */}
                <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-blue-600 rounded-2xl shadow-xl p-3 sm:p-4">
                  <div className="text-white font-black text-2xl sm:text-3xl">15<span className="text-sm font-bold">min</span></div>
                  <div className="text-blue-100 text-[11px] font-semibold leading-snug">Report delivered<br />to WhatsApp</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            DIVIDER
        ══════════════════════════════════════════════════════════════ */}
        <div className="relative overflow-hidden h-16 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 flex items-center">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-wrap items-center justify-center sm:justify-between gap-3">
            {["Same-Day Service", "AERB Certified", "No Hospital Queue", `${location.eta} Arrival`, "24×7 Emergency"].map((item) => (
              <span key={item} className="flex items-center gap-2 text-white text-xs font-bold">
                <CheckIcon className="w-3.5 h-3.5 text-cyan-300" /> {item}
              </span>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            SERVICE 02 — ECG AT [LOCATION]
        ══════════════════════════════════════════════════════════════ */}
        <section className="py-20 sm:py-28 bg-gradient-to-b from-[#fff5f5] to-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Label */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-rose-600 rounded-xl flex items-center justify-center shadow-lg shadow-rose-200">
                <HeartPulseIcon className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-rose-600 block">Service 02</span>
                <span className="text-[11px] text-gray-500">Available in {location.name}</span>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
              {/* Left — big image */}
              <div className="relative order-2 lg:order-1">
                <div className="relative h-80 sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image src="/services/ecg-patient.png" alt="ECG at Home" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-900/40 to-transparent" />
                  {/* ECG wave overlay */}
                  <div className="absolute bottom-6 left-4 right-4">
                    <svg viewBox="0 0 400 60" className="w-full opacity-70" fill="none">
                      <polyline points="0,30 40,30 55,10 65,50 75,15 90,45 100,30 160,30 175,5 185,55 195,20 210,45 220,30 400,30" stroke="#f43f5e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                {/* Floating badge top right */}
                <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-white rounded-2xl shadow-xl border border-rose-100 p-3 sm:p-4 max-w-[160px]">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-7 h-7 bg-rose-600 rounded-lg flex items-center justify-center">
                      <HeartPulseIcon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[10px] font-black text-rose-600 uppercase tracking-wide">Cardiologist</span>
                  </div>
                  <div className="text-xs text-gray-600 font-medium leading-snug">MD signed report in 15 minutes</div>
                </div>
                {/* Floating badge bottom left */}
                <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-rose-600 rounded-2xl shadow-xl p-3 sm:p-4">
                  <div className="text-white font-black text-2xl sm:text-3xl">12<span className="text-sm font-bold">-lead</span></div>
                  <div className="text-rose-100 text-[11px] font-semibold leading-snug">Clinical grade<br />cardiograph</div>
                </div>
              </div>

              {/* Right — content */}
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight leading-tight mb-4">
                  12-Lead ECG &amp;<br />
                  <span className="text-rose-600">Holter in {location.name}</span>
                </h2>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
                  Complete cardiac electrocardiogram by certified cardiac technicians at your home in <strong className="text-gray-900">{location.name}</strong>. Instant detection of arrhythmias, pre-op clearances, and unexplained chest palpitations — Cardiologist-signed report in 15 minutes.
                </p>

                {/* ECG variants */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {ecgVariants.map((v) => (
                    <div key={v.title} className="bg-gradient-to-br from-rose-50 to-pink-50 border border-rose-100 rounded-2xl p-4 hover:shadow-md transition-all group">
                      <div className="text-2xl mb-2">{v.icon}</div>
                      <div className="font-black text-gray-900 text-sm mb-0.5">{v.title}</div>
                      <div className="text-gray-500 text-[11px] leading-snug">{v.desc}</div>
                    </div>
                  ))}
                </div>

                {/* Specs */}
                <div className="space-y-2.5 mb-8">
                  {[
                    "12-channel high-fidelity rhythm strip with computer analysis",
                    "Single-use sterile pre-gelled electrode patches",
                    "Instant cloud tele-cardiology review by Senior MD Cardiologist",
                    "Official PDF report delivered instantly via WhatsApp",
                  ].map((s) => (
                    <div key={s} className="flex items-center gap-2.5 text-sm text-gray-700">
                      <CheckIcon className="w-4 h-4 text-emerald-500 shrink-0" /> {s}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="tel:+919205761556"
                    className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white px-7 py-3.5 rounded-2xl font-bold text-sm shadow-lg shadow-rose-200 transition-all"
                  >
                    Book ECG in {location.name} <ArrowRightIcon className="w-4 h-4" />
                  </a>
                  <Link href="/ecg" className="inline-flex items-center gap-2 border border-rose-200 text-rose-700 px-6 py-3.5 rounded-2xl font-bold text-sm hover:bg-rose-50 transition-all">
                    ECG Details <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            LOCAL INFO + STICKY BOOKING FORM (side by side)
        ══════════════════════════════════════════════════════════════ */}
        <section className="py-20 sm:py-28 bg-gradient-to-b from-[#f7f9fc] to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

              {/* Left col: local info */}
              <div className="lg:col-span-7 space-y-8">

                <div>
                  <span className="text-xs font-black uppercase tracking-widest text-blue-600 block mb-1">Neighborhood Coverage</span>
                  <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3">
                    Doorstep Clinical Care Across {location.name}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{location.description}</p>
                </div>

                {/* Why us points */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {whyUsPoints.map((p) => (
                    <div key={p.text} className="flex items-center gap-3 bg-white border border-gray-100 rounded-2xl p-4 shadow-xs">
                      <div className="w-9 h-9 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center shrink-0 text-blue-600">{p.icon}</div>
                      <span className="text-xs sm:text-sm font-semibold text-gray-800">{p.text}</span>
                    </div>
                  ))}
                </div>

                {/* Landmarks */}
                {location.landmarks.length > 0 && (
                  <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-sm space-y-3">
                    <h3 className="text-xs font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2">
                      <MapPinIcon className="w-4 h-4 text-blue-500" />
                      Key Sectors &amp; Landmarks Covered in {location.name}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {location.landmarks.map((lm) => (
                        <span key={lm} className="text-xs bg-blue-50 text-blue-800 font-semibold px-3 py-1.5 rounded-xl border border-blue-100">
                          📍 {lm}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Common requests */}
                <div>
                  <h3 className="text-lg font-black text-gray-900 mb-3">Popular Tests Booked in {location.name}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {location.commonRequests.map((req, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 p-3.5 rounded-2xl border border-gray-100 bg-blue-50/40">
                        <CheckIcon className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm font-semibold text-gray-800">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hospital compatibility */}
                {location.nearbyHospitals.length > 0 && (
                  <div className="p-6 rounded-3xl bg-emerald-50/60 border border-emerald-100 space-y-3">
                    <h3 className="text-xs font-bold text-emerald-800 uppercase tracking-wider">🏥 Hospital &amp; Surgeon Acceptance</h3>
                    <p className="text-xs text-gray-600">Our digital DICOM films are recognized by consultants at major hospitals across {location.region}:</p>
                    <div className="flex flex-wrap gap-2">
                      {location.nearbyHospitals.map((h) => (
                        <span key={h} className="text-xs font-semibold bg-white text-emerald-900 px-3 py-1.5 rounded-xl border border-emerald-200">🏥 {h}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right col: sticky booking form */}
              <div className="lg:col-span-5 sticky top-28">
                <LocalBookingSection
                  locationName={location.name}
                  region={location.region}
                  eta={location.eta}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            NEARBY LOCATIONS
        ══════════════════════════════════════════════════════════════ */}
        {nearbyLocations.length > 0 && (
          <section className="py-14 bg-gray-50 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-base font-black text-gray-900">
                  Other Areas We Serve in {location.region}
                </h3>
                <Link href="/service-areas" className="text-xs font-bold text-blue-600 hover:underline">View all →</Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
                {nearbyLocations.map((nearby) => (
                  <Link
                    key={nearby.slug}
                    href={`/service-areas/${nearby.slug}`}
                    className="p-3 bg-white hover:bg-blue-50/80 rounded-2xl border border-gray-200 text-center transition-all hover:border-blue-300 shadow-xs group"
                  >
                    <div className="text-xs font-bold text-gray-800 group-hover:text-blue-600 transition-colors leading-tight">{nearby.name}</div>
                    <div className="text-[10px] text-emerald-600 font-semibold mt-1">{nearby.eta}</div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ══════════════════════════════════════════════════════════════
            FINAL CTA BANNER
        ══════════════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#06153a] via-[#1a3fdb] to-[#0a1f6e] py-16 text-white">
          <div className="absolute inset-0 opacity-[0.07] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-5">
              <span className="w-2 h-2 bg-cyan-300 rounded-full animate-ping" /> Emergency dispatch available 24×7 in {location.name}
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
              Need a scan right now<br />
              <span className="text-cyan-300">in {location.name}?</span>
            </h2>
            <p className="text-blue-100 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
              Call or WhatsApp now — our team arrives in <strong className="text-white">{location.eta}</strong>, performs the scan at your doorstep, and delivers your verified report in 15 minutes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="tel:+919205761556"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-2xl font-black text-sm hover:bg-blue-50 transition-all shadow-xl"
              >
                <PhoneIcon className="w-5 h-5" /> Call 9205761556
              </a>
              <a
                href={`https://wa.me/919205761556?text=Hi%2C%20I%20need%20a%20home%20X-ray%20or%20ECG%20in%20${encodeURIComponent(location.name)}`}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#1ebe5d] text-white px-8 py-4 rounded-2xl font-black text-sm transition-all shadow-xl"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                WhatsApp Now
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-5 text-xs text-blue-200">
              <span className="flex items-center gap-1.5"><CheckIcon className="w-3.5 h-3.5 text-cyan-300" /> No advance payment</span>
              <span className="flex items-center gap-1.5"><CheckIcon className="w-3.5 h-3.5 text-cyan-300" /> AERB certified</span>
              <span className="flex items-center gap-1.5"><CheckIcon className="w-3.5 h-3.5 text-cyan-300" /> MD-signed reports</span>
              <span className="flex items-center gap-1.5"><CheckIcon className="w-3.5 h-3.5 text-cyan-300" /> Both X-Ray &amp; ECG</span>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
