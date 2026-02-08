import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteNavbar } from "@/components/SiteNavbar";
import { SmoothScrolling } from "@/components/ui/smooth-scrolling";
import { StickySocials } from "@/components/StickySocials";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Admanics | Automated Growth Systems",
    template: "%s | Admanics"
  },
  description: "Admanics builds the infrastructure your business needs to scale. Replace fragmented processes with connected automation.",
  openGraph: {
    title: "Admanics | Automated Growth Systems",
    description: "Replace fragmented processes with connected automation. We build the infrastructure your business needs to scale.",
    url: "https://admanics.com",
    siteName: "Admanics",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Admanics | Automated Growth Systems",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Admanics | Automated Growth Systems",
    description: "Replace fragmented processes with connected automation. We build the infrastructure your business needs to scale.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/icon.png?v=2",
    shortcut: "/icon.png?v=2",
    apple: "/icon.png?v=2",
  },
  metadataBase: new URL("https://admanics.com"),
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
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
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
      </body>
    </html>
  );
}
