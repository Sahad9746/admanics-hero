import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteNavbar } from "@/components/SiteNavbar";
import { SmoothScrolling } from "@/components/ui/smooth-scrolling";

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
        url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop", // Using the building image as a placeholder/demo
        width: 1200,
        height: 630,
        alt: "Admanics Office",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Admanics | Automated Growth Systems",
    description: "Replace fragmented processes with connected automation. We build the infrastructure your business needs to scale.",
    images: ["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScrolling>
          <SiteNavbar />
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
