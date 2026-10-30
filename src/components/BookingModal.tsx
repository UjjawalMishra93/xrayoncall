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
  const [timeSlot, setTimeSlot] = useState("Today: Morning (9 AM - 12 PM)");
  const [prescriptionStatus, setPrescriptionStatus] = useState("I have a doctor prescription");
  const [notes, setNotes] = useState("");

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [emailDispatched, setEmailDispatched] = useState(true);
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

      setEmailDispatched(result.emailSent !== false);
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
    "Today: Morning (9 AM - 12 PM)",
    "Today: Afternoon (12 PM - 4 PM)",
    "Today: Evening (4 PM - 8 PM)",
    "Tomorrow (Scheduled)",
  ];

  const whatsappBookingMessage = encodeURIComponent(
    `*🚨 New Doorstep X-Ray Booking*\n\n` +
      `*Patient Name:* ${fullName}\n` +
      `*Phone:* ${phone}\n` +
      `*City:* ${city}\n` +
      `*Address:* ${address || "To be shared on call"}\n` +
      `*Scan:* ${xrayType}\n` +
      `*Preferred Slot:* ${timeSlot}\n` +
      `*Prescription:* ${prescriptionStatus}\n` +
      (notes ? `*Notes:* ${notes}\n` : "")
  );
  const whatsappUrl = `https://wa.me/919205761556?text=${whatsappBookingMessage}`;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-2.5 sm:p-4 overflow-y-auto">
      {/* ── Morphing Backdrop with Blur ── */}
      <div
        onClick={resetAndClose}
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-md transition-opacity duration-300 animate-fadeIn"
      />

      {/* ── Morphing Modal Container with Smooth Scroll ── */}
      <div className="relative w-full max-w-xl max-h-[92vh] bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-100 overflow-y-auto z-10 my-auto transform transition-all duration-300 animate-morphModal">
        
        {/* Top Gradient Accent Bar */}
        <div className="h-1.5 sm:h-2 bg-gradient-to-r from-blue-600 via-sky-500 to-blue-700 sticky top-0 z-30" />

        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-gray-500 hover:text-gray-800 flex items-center justify-center transition-all hover:rotate-90 duration-200 z-20 cursor-pointer"
          aria-label="Close dialog"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {submitted ? (
          /* ── Morphing Success Card ── */
          <div className="p-6 sm:p-10 text-center animate-fadeIn">
            <div className="relative mx-auto w-16 h-16 sm:w-20 sm:h-20 mb-4 sm:mb-6">
              <div className="absolute inset-0 rounded-full bg-emerald-100 animate-ping opacity-75" />
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-200">
                <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>

            <div className="inline-block bg-emerald-50 text-emerald-700 border border-emerald-200/80 px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider mb-2.5">
              Booking Dispatched to Clinic
            </div>

            <h3 className="text-xl sm:text-3xl font-extrabold text-[#0a2540] tracking-tight mb-2 sm:mb-3">
              We&apos;re On Our Way!
            </h3>

            <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto leading-relaxed mb-5 sm:mb-6">
              Thank you, <strong className="text-gray-900">{fullName}</strong>. Your at-home{" "}
              <strong className="text-blue-600">{xrayType}</strong> request has been registered
              {emailDispatched ? (
                <> and dispatched directly to the official clinic mail at <span className="font-semibold text-gray-800">Xrayoncall16@gmail.com</span>.</>
              ) : (
                <> and saved on the dispatch system. Tap below to also notify the medical team directly on WhatsApp.</>
              )}
            </p>

            {/* Quick Dispatch Summary Box */}
            <div className="bg-slate-50 rounded-xl sm:rounded-2xl p-3.5 sm:p-4 border border-gray-100 text-left text-xs text-gray-600 space-y-1.5 sm:space-y-2 mb-4 sm:mb-5">
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
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Official Mail Status:</span>
                <span className={`font-semibold ${emailDispatched ? "text-emerald-600" : "text-amber-600"}`}>
                  {emailDispatched ? "✓ Sent to Xrayoncall16@gmail.com" : "Saved (SMTP Pending)"}
                </span>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-100 text-blue-800 text-[11px] sm:text-xs rounded-xl p-3 mb-5 sm:mb-6">
              ⚡ <strong>Next Step:</strong> Our dispatch doctor will call you on <strong>{phone}</strong> within <strong>5 minutes</strong> to confirm technician ETA.
            </div>

            <div className="flex flex-col gap-2.5 sm:gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 sm:py-3.5 px-6 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition-all shadow-md shadow-emerald-200 flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>Send Details via WhatsApp (9205761556)</span>
              </a>

              <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                <a
                  href="tel:+919205761556"
                  className="flex-1 py-3 sm:py-3.5 px-6 rounded-full bg-blue-600 text-white font-bold text-xs sm:text-sm hover:bg-blue-700 transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  📞 Call Dispatch (9205761556)
                </a>
                <button
                  onClick={resetAndClose}
                  className="py-3 sm:py-3.5 px-6 rounded-full bg-gray-100 text-gray-700 font-semibold text-xs sm:text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* ── Registration Form ── */
          <div className="p-4 sm:p-7 md:p-8">
            {/* Header */}
            <div className="mb-5 sm:mb-6 flex items-start gap-3 sm:gap-4 pr-6 sm:pr-0">
              <div className="relative w-11 h-11 sm:w-14 sm:h-14 shrink-0 flex items-center justify-center">
                <Image
                  src="/logofinal.png"
                  alt="XrayOnCall Logo"
                  width={56}
                  height={56}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 border border-blue-100 px-2 sm:px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span>Doorstep Diagnostic Booking</span>
                </div>
                <h2 className="text-lg sm:text-2xl font-extrabold text-[#0a2540] tracking-tight">
                  Book At-Home X-Ray
                </h2>
                <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5">
                  Certified radiology technician visits your home with portable digital gear.
                </p>
              </div>
            </div>

            {error && (
              <div className="mb-4 sm:mb-5 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-2 animate-shake">
                <span>⚠️</span> {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
              {/* Select Scan Type Pills */}
              <div>
                <label className="block text-[11px] sm:text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5 sm:mb-2">
                  Select Prescribed Scan
                </label>
                <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                  {scanOptions.map((scan) => (
                    <button
                      key={scan}
                      type="button"
                      onClick={() => setXrayType(scan)}
                      className={`text-xs py-2 px-2.5 sm:px-3 rounded-xl font-semibold border transition-all text-left truncate cursor-pointer ${
                        xrayType === scan
                          ? "bg-blue-600 text-white border-blue-600 shadow-xs"
                          : "bg-slate-50 text-gray-700 border-gray-200 hover:border-blue-300"
                      }`}
                    >
                      {scan}
                    </button>
                  ))}
                </div>
              </div>

              {/* Full Name & Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
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
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-gray-900 text-base sm:text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder-gray-400"
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
                      className="w-full pl-12 pr-3.5 py-2.5 rounded-xl border border-gray-200 text-gray-900 text-base sm:text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder-gray-400"
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
                      className={`text-xs px-2.5 sm:px-3 py-1.5 rounded-lg font-medium border transition-colors cursor-pointer ${
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
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-gray-900 text-base sm:text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder-gray-400"
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
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-gray-800 text-base sm:text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
                >
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>

              {/* Prescription Check */}
              <div className="pt-0.5">
                <label className="flex items-start gap-2 cursor-pointer text-xs text-gray-600">
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
                    className="w-4 h-4 mt-0.5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 shrink-0"
                  />
                  <span>I have a doctor&apos;s prescription ready (or will share via WhatsApp)</span>
                </label>
              </div>

              {/* Dispatch Info */}
              <div className="bg-slate-50 p-2 sm:p-2.5 rounded-xl border border-gray-100 flex flex-col xs:flex-row xs:items-center justify-between text-[10px] sm:text-[11px] text-gray-500 gap-1">
                <span>📧 Instant notification routed to:</span>
                <span className="font-mono text-gray-700 font-semibold break-all">Xrayoncall16@gmail.com</span>
              </div>

              {/* Submit Button with Morph Animation */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 sm:py-4 rounded-full bg-blue-600 text-white font-extrabold text-xs sm:text-base hover:bg-blue-700 transition-all shadow-md shadow-blue-200 hover:shadow-lg hover:-translate-y-0.5 transform disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2 cursor-pointer"
              >
                {loading ? (
                  <>
                    <svg className="w-4 sm:w-5 h-4 sm:h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    <span>Dispatching booking...</span>
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
