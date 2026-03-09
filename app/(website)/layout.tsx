import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteNavbar } from "@/components/SiteNavbar";
import { SmoothScrolling } from "@/components/ui/smooth-scrolling";
import { StickySocials } from "@/components/StickySocials";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "https://admanics.com",
  ),
  title: {
    default: "Admanics | AI Marketing Automation Agency",
    template: "%s | Admanics - AI Marketing Automation",
  },
  description:
    "Admanics is a premier AI marketing automation agency. We build intelligent infrastructure and automated lead generation systems to scale your business predictably.",
  keywords: [
    "AI Marketing Automation Agency",
    "Automated Lead Generation",
    "AI Growth Infrastructure",
    "Admanics",
    "Performance Marketing Automation",
    "B2B Lead Generation Automation"
  ],
  authors: [{ name: "Admanics Team" }],
  creator: "Admanics",
  publisher: "Admanics",
  openGraph: {
    title: "Admanics | AI Marketing Automation Agency",
    description:
      "Transform your growth with Admanics. We deliver automated lead generation and intelligent AI marketing infrastructure to scale your revenue.",
    url: "https://admanics.com",
    siteName: "Admanics | AI Marketing Automation",
    images: [
      {
        url: "https://admanics.com/og-admanics.jpg",
        secureUrl: "https://admanics.com/og-admanics.jpg",
        width: 1200,
        height: 630,
        alt: "Admanics | AI Marketing Automation Agency",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Admanics | AI Marketing Automation Agency",
    description:
      "Transform your growth with Admanics. We deliver automated lead generation and intelligent AI marketing infrastructure to scale your revenue.",
    creator: "@admanics",
    images: ["https://admanics.com/og-admanics.jpg"],
  },

  icons: {
    icon: "/icon.png?v=2",
    shortcut: "/icon.png?v=2",
    apple: "/icon.png?v=2",
  },
  other: {
    "google-site-verification":
      process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://admanics.com/#website",
      "url": "https://admanics.com",
      "name": "Admanics",
      "description": "Admanics is a premier AI marketing automation agency. We build intelligent infrastructure and automated lead generation systems.",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://admanics.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://admanics.com/#organization",
      "name": "Admanics",
      "alternateName": ["Admanics AI"],
      "url": "https://admanics.com",
      "logo": "https://admanics.com/icon.png",
      "image": "https://admanics.com/og-admanics.jpg",
      "description": "AI Marketing Automation Agency specializing in automated lead generation and revenue pipelines.",
      "sameAs": [
        "https://twitter.com/admanics"
      ]
    }
  ]
};

import PageTransition from "@/components/ui/PageTransition";

// ... (existing helper function hidden)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="dark"
      suppressHydrationWarning
      prefix="og: https://ogp.me/ns#"
    >
      <head>
        <meta itemProp="image" content="https://admanics.com/og-admanics.jpg" />
        <link rel="image_src" href="https://admanics.com/og-admanics.jpg" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://cdn.prod.website-files.com" />
        <link rel="preconnect" href="https://restcountries.com" />
        <link rel="preconnect" href="https://ipapi.co" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-950 overflow-x-hidden w-full relative`}
        suppressHydrationWarning
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] bg-white text-black px-4 py-2 rounded-md font-bold"
        >
          Skip to content
        </a>
        <div className="relative w-full overflow-x-hidden">
          <SmoothScrolling>
            <SiteNavbar />
            <div id="main-content">
              <PageTransition>{children}</PageTransition>
            </div>
          </SmoothScrolling>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
