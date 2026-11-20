"use client";

import { useState } from "react";
import { useBooking } from "@/context/BookingContext";

interface LocalBookingSectionProps {
  locationName: string;
  region: string;
  eta: string;
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 010 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
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

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
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

export default function LocalBookingSection({
  locationName,
  region,
  eta,
}: LocalBookingSectionProps) {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [scanType, setScanType] = useState("Chest X-ray");
  const [address, setAddress] = useState("");
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

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          phone: cleanPhone,
          city: region,
          address: `${locationName}: ${address || "Immediate doorstep request"}`,
          xrayType: scanType,
          timeSlot: `Immediate Doorstep (${eta})`,
          prescriptionStatus: `Target Locality: ${locationName}`,
          notes: `Direct sublocation booking for ${locationName} (${region}) - ETA: ${eta}`,
        }),
      });

      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.error || "Failed to dispatch booking");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      const msg =
        err instanceof Error
          ? err.message
          : "Failed to dispatch. Please call 9205761556 directly.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello XrayOnCall Dispatch! I booked a home visit for ${locationName}.\n\n👤 Patient: ${fullName}\n📞 Phone: ${phone}\n🩺 Test: ${scanType}\n📍 Address: ${locationName} (${address || "Doorstep"})\n⚡ ETA: ${eta}\n\nPlease confirm technician arrival.`
  );
  const whatsappUrl = `https://wa.me/919205761556?text=${whatsappMessage}`;

  return (
    <div className="overflow-hidden rounded-3xl border border-blue-900/40 bg-gradient-to-b from-[#0c1c38] via-[#0f244a] to-[#0c1c38] text-white shadow-2xl shadow-blue-950/40">
      
      {/* Top Dispatch Banner */}
      <div className="bg-blue-950/70 border-b border-blue-800/40 px-5 sm:px-6 py-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-sm shadow-emerald-400/80" />
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
            Active Mobile Unit
          </span>
        </div>
        <span className="text-[11px] font-extrabold text-blue-200 bg-blue-900/60 border border-blue-700/50 px-2.5 py-1 rounded-full">
          {eta} Arrival
        </span>
      </div>

      <div className="p-5 sm:p-6">
        <div className="mb-4">
          <h3 className="text-lg sm:text-xl font-extrabold text-white flex items-center gap-1.5">
            <span>Book Bedside Visit in</span>
            <span className="text-blue-400">{locationName}</span>
          </h3>
          <p className="text-xs text-blue-200/80 mt-1 flex items-center gap-1">
            <MapPinIcon className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            <span>Technician dispatch pre-routed for {locationName}, {region}</span>
          </p>
        </div>

        {submitted ? (
          <div className="py-6 text-center space-y-3.5 animate-fadeIn">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40 shadow-inner">
              <CheckCircleIcon className="w-8 h-8" />
            </div>

            <h4 className="text-xl font-extrabold text-white">
              Dispatch Request Confirmed!
            </h4>

            <p className="text-xs sm:text-sm text-blue-200/90 leading-relaxed max-w-sm mx-auto">
              Our area coordinator is calling you at{" "}
              <strong className="text-white">{phone}</strong> to confirm technician arrival at {locationName}.
            </p>

            {/* Micro Details Ticket */}
            <div className="bg-blue-950/80 border border-blue-800/60 rounded-2xl p-3 text-xs text-left space-y-1.5 text-blue-100">
              <div className="flex justify-between">
                <span className="text-blue-300">Patient:</span>
                <span className="font-bold text-white">{fullName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-300">Service:</span>
                <span className="font-bold text-white">{scanType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-300">Destination:</span>
                <span className="font-bold text-white">{locationName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-300">Est. Arrival:</span>
                <span className="font-bold text-emerald-400">{eta}</span>
              </div>
            </div>

            <div className="flex flex-col gap-2.5 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#25d366] hover:bg-[#1ebe5d] text-white font-bold rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 transition-all cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>Confirm on WhatsApp (9205761556)</span>
              </a>

              <a
                href="tel:+919205761556"
                className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <PhoneIcon className="w-3.5 h-3.5" />
                <span>Call Coordinator (9205761556)</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFullName("");
                  setPhone("");
                  setAddress("");
                }}
                className="text-xs text-blue-300 hover:text-white underline pt-1 cursor-pointer"
              >
                Book another visit in {locationName}
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5">
            {error && (
              <div className="p-3 bg-rose-500/20 border border-rose-500/40 text-rose-200 text-xs font-semibold rounded-xl">
                ⚠️ {error}
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-blue-200 mb-1">
                Patient Full Name *
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Surinder Verma"
                className="w-full px-3.5 py-2.5 rounded-xl bg-white text-gray-900 placeholder:text-gray-400 text-xs sm:text-sm font-medium border border-blue-300/40 focus:outline-hidden focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-blue-200 mb-1">
                Phone Number (10 Digits) *
              </label>
              <input
                type="tel"
                required
                maxLength={10}
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                placeholder="e.g. 9811XXXXXX"
                className="w-full px-3.5 py-2.5 rounded-xl bg-white text-gray-900 placeholder:text-gray-400 text-xs sm:text-sm font-medium border border-blue-300/40 focus:outline-hidden focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-blue-200 mb-1">
                Required Diagnostic Scan
              </label>
              <select
                value={scanType}
                onChange={(e) => setScanType(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-white text-gray-900 text-xs sm:text-sm font-medium border border-blue-300/40 focus:outline-hidden focus:ring-2 focus:ring-blue-400 cursor-pointer"
              >
                <option value="Chest X-ray">Chest X-Ray at Home</option>
                <option value="12-Lead ECG">12-Lead ECG at Home</option>
                <option value="Spine / Cervical X-ray">Spine / Cervical X-Ray</option>
                <option value="Hip / Pelvis X-ray">Pelvis / Hip Fracture Scan</option>
                <option value="Knee / Limb X-ray">Knee / Leg / Arm X-Ray</option>
                <option value="Holter Monitoring">24h Holter Monitoring</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-blue-200 mb-1">
                Doorstep Address in {locationName}
              </label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="e.g. Flat 302, Tower 4, near Central Market"
                className="w-full px-3.5 py-2.5 rounded-xl bg-white text-gray-900 placeholder:text-gray-400 text-xs sm:text-sm font-medium border border-blue-300/40 focus:outline-hidden focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-extrabold rounded-xl text-xs sm:text-sm transition-all shadow-lg shadow-blue-500/30 cursor-pointer disabled:opacity-50 hover:scale-[1.01]"
            >
              {loading ? "Transmitting..." : `⚡ Request Visit to ${locationName}`}
            </button>

            <div className="pt-2 text-center border-t border-blue-800/40">
              <button
                type="button"
                onClick={() => openBooking(`X-ray in ${locationName}`)}
                className="text-[11px] text-blue-300 hover:text-white underline cursor-pointer"
              >
                Need to upload prescription? Open full modal →
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
