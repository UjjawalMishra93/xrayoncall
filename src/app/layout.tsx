import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
