import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Glow by Design | Professional Makeup Artist",
  description: "Where Beauty Meets Artistry. Professional makeup services for every occasion — bridal, editorial, HD, airbrush, and more. Book your transformation today.",
  keywords: ["makeup artist", "bridal makeup", "professional makeup", "HD makeup", "airbrush makeup", "beauty services"],
  authors: [{ name: "Glow by Design" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "Glow by Design | Professional Makeup Artist",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ backgroundColor: '#FFF5EE', color: '#3D2B1F' }}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
