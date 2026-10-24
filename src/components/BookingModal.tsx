"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultScanType?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  defaultScanType = "Chest X-ray",
}: BookingModalProps) {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("Gurgaon");
  const [address, setAddress] = useState("");
  const [xrayType, setXrayType] = useState(defaultScanType);
  const [timeSlot, setTimeSlot] = useState("Immediate (Within 60 mins)");
  const [prescriptionStatus, setPrescriptionStatus] = useState("I have a doctor prescription");
  const [notes, setNotes] = useState("");

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Sync scan type when passed from card click
  useEffect(() => {
    if (defaultScanType) {
      setXrayType(defaultScanType);
    }
  }, [defaultScanType]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

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
          phone,
          city,
          address,
          xrayType,
          timeSlot,
          prescriptionStatus,
          notes,
        }),
      });

      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.error || "Failed to submit booking");
      }

      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || "Failed to dispatch booking. Please try calling directly.");
    } finally {
      setLoading(false);
    }
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setError("");
    onClose();
  };

  const cities = ["Gurgaon", "Delhi", "Noida", "Faridabad", "Ghaziabad", "Other NCR"];
  const scanOptions = [
    "Chest X-ray",
    "Limb & Joint X-rays",
    "Spine X-ray",
    "Other Prescribed Scans",
  ];
  const timeSlots = [
    "Immediate (Within 60 mins)",
    "Today: Morning (9 AM - 12 PM)",
    "Today: Afternoon (12 PM - 4 PM)",
    "Today: Evening (4 PM - 8 PM)",
    "Tomorrow (Scheduled)",
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      {/* ── Morphing Backdrop with Blur ── */}
      <div
        onClick={resetAndClose}
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-md transition-opacity duration-300 animate-fadeIn"
      />

      {/* ── Morphing Modal Container ── */}
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden z-10 my-auto transform transition-all duration-300 animate-morphModal">
        
        {/* Top Gradient Accent Bar */}
        <div className="h-2 bg-gradient-to-r from-blue-600 via-sky-500 to-blue-700" />

        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-gray-500 hover:text-gray-800 flex items-center justify-center transition-all hover:rotate-90 duration-200 z-20"
          aria-label="Close dialog"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {submitted ? (
          /* ── Morphing Success Card ── */
          <div className="p-8 sm:p-10 text-center animate-fadeIn">
            <div className="relative mx-auto w-20 h-20 mb-6">
              <div className="absolute inset-0 rounded-full bg-emerald-100 animate-ping opacity-75" />
              <div className="relative w-20 h-20 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-200">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>

            <div className="inline-block bg-emerald-50 text-emerald-700 border border-emerald-200/80 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              Booking Dispatched to Clinic
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0a2540] tracking-tight mb-3">
              We&apos;re On Our Way!
            </h3>

            <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed mb-6">
              Thank you, <strong className="text-gray-900">{fullName}</strong>. Your at-home <strong className="text-blue-600">{xrayType}</strong> request has been dispatched directly to the medical team at <span className="font-semibold text-gray-800">Xrayoncall16@gmail.com</span>.
            </p>

            {/* Quick Dispatch Summary Box */}
            <div className="bg-slate-50 rounded-2xl p-4 border border-gray-100 text-left text-xs text-gray-600 space-y-2 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-400">Patient Phone:</span>
                <span className="font-bold text-gray-800">{phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Target Area:</span>
                <span className="font-bold text-gray-800">{city}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Preferred Slot:</span>
                <span className="font-bold text-blue-600">{timeSlot}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Notification Sent To:</span>
                <span className="font-mono text-gray-700">Xrayoncall16@gmail.com</span>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-100 text-blue-800 text-xs rounded-xl p-3 mb-6">
              ⚡ <strong>Next Step:</strong> Our dispatch doctor will call you on <strong>{phone}</strong> within <strong>5 minutes</strong> to confirm technician ETA.
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+919205761556"
                className="flex-1 py-3.5 px-6 rounded-full bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition-colors shadow-md flex items-center justify-center gap-2"
              >
                📞 Call Team (9205761556)
              </a>
              <button
                onClick={resetAndClose}
                className="py-3.5 px-6 rounded-full bg-gray-100 text-gray-700 font-semibold text-sm hover:bg-gray-200 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          /* ── Registration Form ── */
          <div className="p-6 sm:p-8">
            {/* Header */}
            <div className="mb-6 flex items-start gap-4">
              <div className="relative w-14 h-14 shrink-0 flex items-center justify-center">
                <Image
                  src="/logofinal.png"
                  alt="XrayOnCall Logo"
                  width={56}
                  height={56}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 border border-blue-100 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span>Doorstep Diagnostic Booking</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#0a2540] tracking-tight">
                  Book At-Home X-Ray
                </h2>
                <p className="text-xs text-gray-500 mt-0.5">
                  Certified radiology technician visits your home with portable digital gear.
                </p>
              </div>
            </div>

            {error && (
              <div className="mb-5 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-2 animate-shake">
                <span>⚠️</span> {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Select Scan Type Pills */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Select Prescribed Scan
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {scanOptions.map((scan) => (
                    <button
                      key={scan}
                      type="button"
                      onClick={() => setXrayType(scan)}
                      className={`text-xs py-2 px-3 rounded-xl font-semibold border transition-all text-left truncate ${
                        xrayType === scan
                          ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                          : "bg-slate-50 text-gray-700 border-gray-200 hover:border-blue-300"
                      }`}
                    >
                      {scan}
                    </button>
                  ))}
                </div>
              </div>

              {/* Full Name & Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Patient Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Sharma"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-gray-900 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-semibold">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      placeholder="98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-12 pr-3.5 py-2.5 rounded-xl border border-gray-200 text-gray-900 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder-gray-400"
                    />
                  </div>
                </div>
              </div>

              {/* City / Area Pills */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">
                  Location / City <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {cities.map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setCity(c)}
                      className={`text-xs px-3 py-1.5 rounded-lg font-medium border transition-colors ${
                        city === c
                          ? "bg-slate-900 text-white border-slate-900"
                          : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              {/* Complete Address */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Home Address &amp; Landmark
                </label>
                <input
                  type="text"
                  placeholder="House/Flat No., Street, Landmark"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-gray-900 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder-gray-400"
                />
              </div>

              {/* Preferred Slot */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Preferred Time Slot
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-gray-800 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
                >
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>

              {/* Prescription Check */}
              <div className="pt-1">
                <label className="flex items-center gap-2 cursor-pointer text-xs text-gray-600">
                  <input
                    type="checkbox"
                    checked={prescriptionStatus.includes("have")}
                    onChange={(e) =>
                      setPrescriptionStatus(
                        e.target.checked
                          ? "I have a doctor prescription"
                          : "Need prescription consultation"
                      )
                    }
                    className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                  />
                  <span>I have a doctor&apos;s prescription ready (or will share via WhatsApp)</span>
                </label>
              </div>

              {/* Dispatch Info */}
              <div className="bg-slate-50 p-2.5 rounded-xl border border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
                <span>📧 Instant notification routed to:</span>
                <span className="font-mono text-gray-700 font-semibold">Xrayoncall16@gmail.com</span>
              </div>

              {/* Submit Button with Morph Animation */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-full bg-blue-600 text-white font-extrabold text-sm sm:text-base hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 hover:shadow-xl hover:-translate-y-0.5 transform disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
              >
                {loading ? (
                  <>
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    <span>Dispatching to Xrayoncall16@gmail.com...</span>
                  </>
                ) : (
                  <>
                    <span>Confirm &amp; Dispatch At-Home Booking</span>
                    <span>→</span>
                  </>
                )}
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
