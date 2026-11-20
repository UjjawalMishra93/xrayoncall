"use client";

import { useState } from "react";
import { useBooking } from "@/context/BookingContext";

interface QuickBookingBarProps {
  defaultService?: string;
  defaultSlot?: string;
  sourcePage?: string;
  variant?: "default" | "cardiac" | "services" | "compact";
  className?: string;
}

function UserIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
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

function StethoscopeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
      <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
      <circle cx="20" cy="10" r="2" />
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

function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
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

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function QuickBookingBar({
  defaultService = "Chest X-ray",
  defaultSlot = "Immediate (30-45 mins)",
  sourcePage = "General",
  variant = "default",
  className = "",
}: QuickBookingBarProps) {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [scanType, setScanType] = useState(defaultService);
  const [timeSlot, setTimeSlot] = useState(defaultSlot);

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const { openBooking } = useBooking();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName.trim()) {
      setError("Please enter the patient's full name.");
      return;
    }

    const cleanPhone = phone.replace(/\D/g, "");
    if (cleanPhone.length < 10) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          phone: cleanPhone,
          city: "Delhi NCR",
          address: `Booked via Quick Dock on ${sourcePage} page`,
          xrayType: scanType,
          timeSlot,
          prescriptionStatus: "Direct Quick Booking Request",
          notes: `Quick booking initiated for ${scanType} - Slot: ${timeSlot} (Source: ${sourcePage})`,
        }),
      });

      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.error || "Failed to submit booking");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      const msg =
        err instanceof Error
          ? err.message
          : "Failed to dispatch booking. Please call 9205761556 directly.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello XrayOnCall Dispatch! I just booked a home visit via your website.\n\n👤 Patient Name: ${fullName}\n📞 Phone: ${phone}\n🩺 Diagnostic Test: ${scanType}\n⏰ Preferred Slot: ${timeSlot}\n📍 Area: Delhi NCR\n\nPlease confirm technician arrival time.`
  );
  const whatsappUrl = `https://wa.me/919205761556?text=${whatsappMessage}`;

  return (
    <div className={`relative ${className}`}>
      {/* Outer Shell with Glass Elevation */}
      <div
        className={`bg-white rounded-3xl p-4 sm:p-6 shadow-2xl transition-all border ${
          variant === "cardiac"
            ? "border-rose-100 shadow-rose-900/10 ring-1 ring-rose-50"
            : variant === "services"
            ? "border-blue-100 shadow-blue-900/10 ring-1 ring-blue-50"
            : "border-gray-200/90 shadow-gray-900/10"
        }`}
      >
        {/* Subtle Micro Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-gray-100 text-xs">
          <div className="flex items-center gap-2">
            <span
              className={`w-2.5 h-2.5 rounded-full animate-pulse ${
                variant === "cardiac" ? "bg-rose-500" : "bg-emerald-500"
              }`}
            />
            <span
              className={`font-bold ${
                variant === "cardiac" ? "text-rose-700" : "text-blue-700"
              }`}
            >
              {variant === "cardiac"
                ? "Immediate Cardiac Bedside Dispatch • AERB & MD Certified"
                : "Rapid Doorstep Dispatch • 24x7 Active across Delhi NCR"}
            </span>
          </div>

          <button
            type="button"
            onClick={() => openBooking(scanType)}
            className="text-gray-500 hover:text-blue-600 transition-colors font-semibold text-[11px] underline cursor-pointer"
          >
            Have doctor&apos;s prescription? Open full form →
          </button>
        </div>

        {submitted ? (
          <div className="py-6 sm:py-8 text-center space-y-3 animate-fadeIn">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircleIcon className="w-8 h-8" />
            </div>

            <h4 className="text-xl sm:text-2xl font-extrabold text-gray-900">
              Visit Request Confirmed!
            </h4>

            <p className="text-xs sm:text-sm text-gray-600 max-w-lg mx-auto leading-relaxed">
              Thank you, <strong className="text-gray-900">{fullName}</strong>. Our area coordinator is calling you at{" "}
              <strong className="text-gray-900">{phone}</strong> within 5 minutes to confirm technician ETA for your{" "}
              <strong className="text-blue-600">{scanType}</strong>.
            </p>

            {/* Quick Dispatch Summary */}
            <div className="max-w-md mx-auto bg-slate-50 border border-slate-200/80 rounded-2xl p-3.5 text-xs text-left text-gray-700 space-y-1.5 mt-2">
              <div className="flex justify-between">
                <span className="text-gray-500">Service:</span>
                <span className="font-bold text-gray-900">{scanType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Arrival Window:</span>
                <span className="font-bold text-blue-600">{timeSlot}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Dispatch Status:</span>
                <span className="font-bold text-emerald-600">✓ Transmitted to Mobile Unit</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25d366] hover:bg-[#1ebe5d] text-white text-xs sm:text-sm font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-md shadow-emerald-200 transition-all hover:scale-105"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>Send to WhatsApp (9205761556)</span>
              </a>

              <a
                href="tel:+919205761556"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold px-5 py-2.5 sm:py-3 rounded-full shadow-md shadow-blue-200 transition-all"
              >
                <PhoneIcon className="w-4 h-4" />
                <span>Call Dispatch Directly</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFullName("");
                  setPhone("");
                }}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-600 hover:text-blue-600 bg-gray-100 hover:bg-gray-200 px-4 py-2.5 rounded-full transition-colors cursor-pointer"
              >
                Book Another Scan
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            {error && (
              <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold rounded-xl">
                ⚠️ {error}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-3.5 items-end">
              {/* Field 1: Patient Name */}
              <div className="space-y-1">
                <label className="text-[11px] font-extrabold text-gray-700 uppercase tracking-wider flex items-center gap-1">
                  <UserIcon className="w-3.5 h-3.5 text-blue-600" />
                  <span>Patient Name *</span>
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Ramesh Verma"
                  className="w-full bg-slate-50/80 border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-blue-600 focus:ring-3 focus:ring-blue-100 transition-all"
                />
              </div>

              {/* Field 2: Mobile Number */}
              <div className="space-y-1">
                <label className="text-[11px] font-extrabold text-gray-700 uppercase tracking-wider flex items-center gap-1">
                  <PhoneIcon className="w-3.5 h-3.5 text-blue-600" />
                  <span>Phone Number *</span>
                </label>
                <input
                  type="tel"
                  required
                  maxLength={10}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                  placeholder="10-digit mobile"
                  className="w-full bg-slate-50/80 border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-blue-600 focus:ring-3 focus:ring-blue-100 transition-all"
                />
              </div>

              {/* Field 3: Diagnostic Test */}
              <div className="space-y-1">
                <label className="text-[11px] font-extrabold text-gray-700 uppercase tracking-wider flex items-center gap-1">
                  <StethoscopeIcon className="w-3.5 h-3.5 text-blue-600" />
                  <span>Diagnostic Test</span>
                </label>
                <select
                  value={scanType}
                  onChange={(e) => setScanType(e.target.value)}
                  className="w-full bg-slate-50/80 border border-gray-200 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-gray-900 focus:bg-white focus:border-blue-600 focus:ring-3 focus:ring-blue-100 transition-all cursor-pointer"
                >
                  <option value="Chest X-ray">Chest X-Ray at Home</option>
                  <option value="12-Lead ECG">12-Lead ECG at Home</option>
                  <option value="Spine / Cervical X-ray">Spine & Cervical X-Ray</option>
                  <option value="Pelvis / Hip Fracture Scan">Pelvis & Hip Fracture Scan</option>
                  <option value="Knee / Limb Fracture X-ray">Knee & Limb X-Ray</option>
                  <option value="Holter Monitoring">24h Holter Monitoring</option>
                  <option value="Sleep Study Test">Sleep Study (Polysomnography)</option>
                  <option value="ABG Blood Test">ABG Blood Test</option>
                </select>
              </div>

              {/* Field 4: Preferred Arrival Window */}
              <div className="space-y-1">
                <label className="text-[11px] font-extrabold text-gray-700 uppercase tracking-wider flex items-center gap-1">
                  <ClockIcon className="w-3.5 h-3.5 text-blue-600" />
                  <span>Arrival Window</span>
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full bg-slate-50/80 border border-gray-200 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-gray-900 focus:bg-white focus:border-blue-600 focus:ring-3 focus:ring-blue-100 transition-all cursor-pointer"
                >
                  <option value="Immediate (30-45 mins)">Immediate (30-45 Mins)</option>
                  <option value="Today: Morning (9 AM - 12 PM)">Today: Morning (9 AM - 12 PM)</option>
                  <option value="Today: Afternoon (12 PM - 4 PM)">Today: Afternoon (12 PM - 4 PM)</option>
                  <option value="Today: Evening (5 PM - 9 PM)">Today: Evening (5 PM - 9 PM)</option>
                  <option value="Tomorrow Morning">Tomorrow Morning</option>
                </select>
              </div>

              {/* Field 5: Action Button */}
              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-2.5 sm:py-3 text-white font-bold rounded-xl text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50 ${
                    variant === "cardiac"
                      ? "bg-gradient-to-r from-rose-600 via-rose-500 to-indigo-600 hover:from-rose-700 hover:to-indigo-700 shadow-rose-200 hover:shadow-rose-300"
                      : "bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-blue-200 hover:shadow-blue-300"
                  }`}
                >
                  <span>{loading ? "Transmitting..." : "Book Bedside Visit"}</span>
                  <ArrowRightIcon className="w-4 h-4 shrink-0" />
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
