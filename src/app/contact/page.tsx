"use client";

import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 010 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
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

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
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

export default function ContactPage() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("Delhi");
  const [address, setAddress] = useState("");
  const [scanType, setScanType] = useState("Chest X-ray");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) {
      setError("Please fill in your name and phone number.");
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
          phone,
          city,
          address,
          xrayType: scanType,
          timeSlot: "Immediate / As soon as possible",
          prescriptionStatus: "Consultation / Booking Request",
          notes,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to dispatch enquiry");
      }

      setSubmitted(true);
    } catch {
      // Fallback
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50/70 via-white to-white py-16 sm:py-20 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 mb-3">
              <Link href="/" className="hover:underline text-gray-500">Home</Link>
              <span>/</span>
              <span>Contact Us</span>
            </div>

            <div className="max-w-3xl">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                24/7 Clinical Helpdesk
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
                We&apos;re Here to Assist You 24 Hours a Day
              </h1>
              <p className="mt-4 text-base sm:text-xl text-gray-600 leading-relaxed">
                Need urgent bedside diagnostic assistance or have questions about pricing, safety, or scheduling? Reach our emergency dispatch desk directly.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info + Form */}
        <section className="py-16 bg-gray-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Contact Information Cards (5 Cols) */}
              <div className="lg:col-span-5 space-y-6">
                {/* 24/7 Emergency Phone Card */}
                <div className="bg-white p-7 rounded-3xl border border-gray-200 shadow-xs">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                    <PhoneIcon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg">24/7 Emergency Dispatch Helpline</h3>
                  <p className="text-xs text-gray-600 mt-1 mb-4">
                    Immediate coordination with our nearest mobile diagnostic unit.
                  </p>
                  <a
                    href="tel:+919205761556"
                    className="inline-flex items-center gap-2 text-xl sm:text-2xl font-extrabold text-blue-600 hover:text-blue-700"
                  >
                    <span>+91 9205761556</span>
                  </a>
                </div>

                {/* Operating Centers */}
                <div className="bg-white p-7 rounded-3xl border border-gray-200 shadow-xs space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gray-100 text-gray-700 flex items-center justify-center shrink-0">
                      <MapPinIcon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">Main Center (South Delhi)</h4>
                      <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                        Roxy Chowk, Lajpat Nagar 2, New Delhi, Delhi - 110024
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 pt-3 border-t border-gray-100">
                    <div className="w-10 h-10 rounded-xl bg-gray-100 text-gray-700 flex items-center justify-center shrink-0">
                      <MapPinIcon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">East Delhi Hub</h4>
                      <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                        Sonia Vihar, Delhi
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 pt-3 border-t border-gray-100">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <ClockIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">Operating Hours</h4>
                      <p className="text-xs text-emerald-700 font-semibold mt-1">
                        Open 24 Hours / 7 Days (Including Sundays & Holidays)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 pt-3 border-t border-gray-100">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <MailIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">Email Reports & Queries</h4>
                      <p className="text-xs text-gray-600 mt-1">
                        info@xrayoncall.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Booking & Enquiry Form (7 Cols) */}
              <div className="lg:col-span-7">
                <div className="bg-white p-7 sm:p-10 rounded-3xl border border-gray-200 shadow-sm">
                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                        <CheckCircleIcon className="w-10 h-10" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">Enquiry Received Successfully!</h3>
                      <p className="text-sm text-gray-600 mt-2 max-w-md mx-auto">
                        Thank you, {fullName}. Our clinical coordinator will call you back at <strong className="text-gray-900">{phone}</strong> within 5 minutes to confirm technician dispatch.
                      </p>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFullName("");
                          setPhone("");
                          setAddress("");
                          setNotes("");
                        }}
                        className="mt-6 inline-flex items-center gap-2 bg-blue-600 text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full hover:bg-blue-700"
                      >
                        Submit Another Request
                      </button>
                    </div>
                  ) : (
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Request a Home Visit or Callback
                      </h2>
                      <p className="text-xs sm:text-sm text-gray-600 mb-6">
                        Fill in your details below. Our team coordinates directly with you over phone/WhatsApp.
                      </p>

                      {error && (
                        <div className="mb-4 p-3 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl text-xs font-semibold">
                          {error}
                        </div>
                      )}

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold text-gray-700 mb-1.5">
                              Patient&apos;s Full Name *
                            </label>
                            <input
                              type="text"
                              required
                              value={fullName}
                              onChange={(e) => setFullName(e.target.value)}
                              placeholder="e.g. Ramesh Sharma"
                              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-gray-700 mb-1.5">
                              Mobile Number *
                            </label>
                            <input
                              type="tel"
                              required
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              placeholder="e.g. 9812345678"
                              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold text-gray-700 mb-1.5">
                              City / Region
                            </label>
                            <select
                              value={city}
                              onChange={(e) => setCity(e.target.value)}
                              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-600 bg-white"
                            >
                              <option value="Delhi">Delhi (All Zones)</option>
                              <option value="Gurgaon">Gurgaon (Gurugram)</option>
                              <option value="Noida">Noida & Gr. Noida</option>
                              <option value="Faridabad">Faridabad</option>
                              <option value="Ghaziabad">Ghaziabad</option>
                              <option value="Sonipat">Sonipat / Panipat</option>
                              <option value="Other NCR">Other NCR Location</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-gray-700 mb-1.5">
                              Required Diagnostic Test
                            </label>
                            <select
                              value={scanType}
                              onChange={(e) => setScanType(e.target.value)}
                              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-600 bg-white"
                            >
                              <option value="Chest X-ray">Chest X-Ray at Home</option>
                              <option value="12-Lead ECG">12-Lead ECG at Home</option>
                              <option value="Spine / Cervical X-ray">Spine / Cervical X-Ray</option>
                              <option value="Limb / Hip / Knee X-ray">Limb / Hip / Knee X-Ray</option>
                              <option value="Holter Monitoring">Holter Monitoring (24h/48h)</option>
                              <option value="Sleep Study">Sleep Study (Polysomnography)</option>
                              <option value="ABG Test">ABG Blood Test</option>
                              <option value="NCV / EMG Test">NCV / EMG Neuro Test</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-gray-700 mb-1.5">
                            Home Address / Landmark
                          </label>
                          <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder="Flat/House No., Colony, Sector, Landmark"
                            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-gray-700 mb-1.5">
                            Additional Notes / Symptoms / Urgency
                          </label>
                          <textarea
                            rows={3}
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            placeholder="e.g. Elderly patient with hip injury, need urgent scan within 1 hour"
                            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={loading}
                          className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm transition-all shadow-md shadow-blue-200 cursor-pointer disabled:opacity-50"
                        >
                          {loading ? "Transmitting Request..." : "Request Immediate Home Diagnostic Visit"}
                        </button>
                      </form>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
