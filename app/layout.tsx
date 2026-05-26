import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const BASE_URL = "https://kaveenhansith.vercel.app";

export const metadata: Metadata = {
  // ── Basic ──────────────────────────────────────────────────────
  title: {
    default: "Kaveen Hansith | Frontend Developer & Creator",
    template: "%s | Kaveen Hansith",
  },
  description:
    "Kaveen Hansith is a frontend developer from Sri Lanka specialising in Next.js & Tailwind CSS. Building digital products, website templates, and documenting the journey on YouTube.",
  keywords: [
    "Kaveen Hansith",
    "frontend developer Sri Lanka",
    "Next.js developer",
    "Tailwind CSS developer",
    "web developer Sri Lanka",
    "Next.js templates",
    "Tailwind templates",
    "digital products",
    "UI templates",
    "SaaS landing page template",
    "website templates Gumroad",
    "frontend developer portfolio",
    "React developer",
    "TypeScript developer",
  ],
  authors: [{ name: "Kaveen Hansith", url: BASE_URL }],
  creator: "Kaveen Hansith",
  metadataBase: new URL(BASE_URL),

  // ── Canonical ──────────────────────────────────────────────────
  alternates: {
    canonical: "/",
  },

  // ── Open Graph (Facebook, LinkedIn previews) ───────────────────
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Kaveen Hansith",
    title: "Kaveen Hansith | Frontend Developer & Creator",
    description:
      "Frontend developer from Sri Lanka building with Next.js & Tailwind CSS. Premium website templates, digital products, and building in public on YouTube.",
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Kaveen Hansith — Frontend Developer & Creator",
      },
    ],
  },

  // ── Twitter / X card ──────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Kaveen Hansith | Frontend Developer & Creator",
    description:
      "Frontend developer from Sri Lanka building with Next.js & Tailwind CSS. Premium templates & digital products.",
    images: [`${BASE_URL}/og-image.png`],
    creator: "@KaveenHansith",
  },

  // ── Robots ────────────────────────────────────────────────────
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

  // ── Icons ─────────────────────────────────────────────────────
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  // ── Verification (add later when you set up Google Search Console) ──
  verification: {
    google: "lcYmnuLZAoHn76Wv1_GDL7S31aXIrm7Z8xhWcXOH0nM",
  },
};

// ── JSON-LD Structured Data ──────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kaveen Hansith",
  url: BASE_URL,
  jobTitle: "Frontend Developer",
  description:
    "Frontend developer from Sri Lanka specialising in Next.js and Tailwind CSS. Building digital products and documenting the journey on YouTube.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "LK",
  },
  sameAs: [
    "https://youtube.com/@KaveenX",
    "https://github.com/Kaveenxz",
    "https://linkedin.com/in/kaveenxz",
    "https://instagram.com/kavee.xz",
  ],
  knowsAbout: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "TypeScript",
    "Frontend Development",
    "Web Design",
    "UI Development",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${dmSans.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body bg-bg text-text">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}