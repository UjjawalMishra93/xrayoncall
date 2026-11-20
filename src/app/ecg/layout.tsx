import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "12-Lead ECG at Home in Delhi NCR | Doctor-Verified Reports in 15 Mins – XrayOnCall",
  description:
    "Book certified 12-Lead Digital ECG test at home across Delhi, Gurgaon, Noida, Faridabad & Ghaziabad. Experienced cardiac technician reaches your doorstep in 45-60 mins. Verified MD Cardiologist report in 15 mins on WhatsApp & Email.",
  keywords: [
    "ECG at home",
    "12 lead ECG test at home",
    "home ECG service Delhi",
    "doorstep ECG Gurgaon",
    "portable ECG Noida",
    "at home electrocardiogram Faridabad",
    "emergency ECG at home",
    "pre operative ECG clearance at home",
    "senior citizen cardiac checkup at home",
    "XrayOnCall ECG services",
  ].join(", "),
  openGraph: {
    title: "12-Lead ECG at Home in Delhi NCR – Reports in 15 Mins | XrayOnCall",
    description:
      "Hospital-grade 12-lead portable ECG at home. Certified technicians arrive in 45-60 minutes. Verified digital reports by MD Cardiologists in 15 minutes.",
    url: "https://xrayoncall.com/ecg",
    siteName: "XrayOnCall",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "/ecg",
  },
};

export default function EcgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Rich Medical Structured Data for Google Healthcare Search */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            name: "XrayOnCall - 12-Lead ECG at Home Services",
            image: "https://xrayoncall.com/logo2.png",
            telephone: "+919205761556",
            email: "Xrayoncall16@gmail.com",
            url: "https://xrayoncall.com/ecg",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Roxy Chowk, Lajpat Nagar 2",
              addressLocality: "New Delhi",
              postalCode: "110024",
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "28.5685",
              longitude: "77.2433",
            },
            priceRange: "₹₹",
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "07:00",
                closes: "22:00",
              },
            ],
            medicalSpecialty: ["Cardiovascular", "Radiology", "DiagnosticLab"],
            availableService: [
              {
                "@type": "MedicalTest",
                name: "12-Lead Resting ECG at Home",
                description:
                  "Comprehensive 12-lead electrocardiogram performed at patient residence by certified technician with digital report verified by MD Cardiologist.",
              },
              {
                "@type": "MedicalTest",
                name: "Pre-Operative Cardiac Clearance ECG",
                description:
                  "Fast-track 12-lead ECG test at home with rapid cardiologist verification required for surgical anesthesia clearance.",
              },
              {
                "@type": "MedicalTest",
                name: "Senior Citizen Bedridden Cardiac Screening",
                description:
                  "Stress-free at-home cardiac rhythm check for mobility-challenged or elderly patients.",
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
