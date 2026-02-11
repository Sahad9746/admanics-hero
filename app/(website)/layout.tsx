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
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://admanics.com"),
  title: {
    default: "Admanics | Automated Growth Systems",
    template: "%s | Admanics"
  },
  description: "Admanics builds the infrastructure your business needs to scale. Replace fragmented processes with connected automation.",
  keywords: ["AI Marketing", "Automated Growth", "Business Infrastructure", "Admanics", "Marketing Automation"],
  authors: [{ name: "Admanics Team" }],
  creator: "Admanics",
  publisher: "Admanics",
  openGraph: {
    title: "Admanics | Automated Growth Systems",
    description: "Replace fragmented processes with connected automation. We build the infrastructure your business needs to scale.",
    url: "https://admanics.com",
    siteName: "Admanics",
    images: [
      {
        url: "https://admanics.com/og-admanics.jpg",
        secureUrl: "https://admanics.com/og-admanics.jpg",
        width: 1200,
        height: 630,
        alt: "Admanics | Automated Growth Systems",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Admanics | Automated Growth Systems",
    description: "Replace fragmented processes with connected automation. We build the infrastructure your business needs to scale.",
    creator: "@admanics",
    images: ["https://admanics.com/og-admanics.jpg"],
  },

  icons: {
    icon: "/icon.png?v=2",
    shortcut: "/icon.png?v=2",
    apple: "/icon.png?v=2",
  },
  other: {
    "google-site-verification": "dummy-verification-code", // Placeholder for user
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Admanics",
  "alternateName": ["Admanics AI", "admanics.com"],
  "url": "https://admanics.com",
  "description": "Admanics builds the infrastructure your business needs to scale. Replace fragmented processes with connected automation.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://admanics.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning prefix="og: https://ogp.me/ns#">
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
        <div className="relative w-full overflow-x-hidden">
          <SmoothScrolling>
            <SiteNavbar />
            {children}
          </SmoothScrolling>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
