import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "XrayOnCall – X-ray at Home. Care Without the Commute.",
  description:
    "Professional portable X-ray services at your doorstep. Verified digital reports delivered within 15 minutes in eligible service areas.",
  keywords: "portable x-ray, home x-ray, at-home x-ray reports, medical diagnostic reports, x-ray service",
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
    <html lang="en" className="scroll-smooth">
      <body className="overflow-x-hidden bg-white text-gray-900 antialiased font-sans">{children}</body>
    </html>
  );
}
