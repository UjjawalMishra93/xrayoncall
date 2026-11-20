import type { Metadata, Viewport } from "next";
import "./globals.css";
import { BookingProvider } from "@/context/BookingContext";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "XrayOnCall – Portable Digital X-Ray & ECG at Home in Delhi NCR",
  description:
    "Professional portable digital X-ray and 12-lead ECG services at your doorstep across Delhi NCR. Verified digital reports by MD Radiologists within 15 minutes.",
  keywords: "portable x-ray, home x-ray, ecg at home, at-home x-ray reports, medical diagnostic reports, x-ray delhi gurgaon noida",
  icons: {
    icon: "/logofinal.png",
    shortcut: "/logofinal.png",
    apple: "/logofinal.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className="overflow-x-hidden bg-white text-gray-900 antialiased font-sans">
        <BookingProvider>
          {children}
        </BookingProvider>
      </body>
    </html>
  );
}
