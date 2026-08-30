import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/data/site-config";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#09090B",
  width: "device-width",
  initialScale: 1,
};

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://fitzonefitness.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: siteConfig.seo.title,
    template: `%s | ${siteConfig.brand.name}`,
  },
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: siteConfig.brand.name }],
  creator: siteConfig.brand.name,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.seo.locale,
    url: baseUrl,
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    siteName: siteConfig.brand.name,
    images: [
      {
        url: siteConfig.seo.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.brand.name} — ${siteConfig.brand.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: [siteConfig.seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org Structured Data (ExerciseGym)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ExerciseGym",
    name: siteConfig.brand.name,
    description: siteConfig.brand.shortDescription,
    url: baseUrl,
    telephone: siteConfig.contact.phoneFormatted,
    image: `${baseUrl}${siteConfig.seo.ogImage}`,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.street,
      addressLocality: siteConfig.contact.address.city,
      addressRegion: siteConfig.contact.address.state,
      postalCode: siteConfig.contact.address.zip,
      addressCountry: "IN",
    },
    openingHoursSpecification: siteConfig.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days.includes("Sunday")
        ? ["Sunday"]
        : [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
      opens: h.hours.split("–")[0]?.trim() || "05:30",
      closes: h.hours.split("–")[1]?.trim() || "22:30",
    })),
  };

  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${inter.variable} dark scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-bg-main text-text-primary antialiased selection:bg-brand-red selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
