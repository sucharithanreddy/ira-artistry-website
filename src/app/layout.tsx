import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display, Cormorant_Garamond, Great_Vibes } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  variable: "--font-vibes",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ira Artistry | Professional Makeup Artist",
  description: "Where Beauty Meets Artistry. Professional makeup services for every occasion — bridal, editorial, HD, airbrush, and more. Book your transformation today.",
  keywords: ["makeup artist", "bridal makeup", "professional makeup", "HD makeup", "airbrush makeup", "beauty services"],
  authors: [{ name: "Ira Artistry" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "Ira Artistry | Professional Makeup Artist",
    description: "Where Beauty Meets Artistry. Professional makeup services for every occasion.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${cormorant.variable} ${greatVibes.variable} antialiased`}
        style={{ backgroundColor: '#FFF5EE', color: '#3D2B1F' }}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
