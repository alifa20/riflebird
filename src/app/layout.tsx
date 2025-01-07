import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Almarai, Libre_Baskerville } from "next/font/google";
import Footer from '@/components/Footer';

const geist = Geist({
  subsets: ["latin"],
});

const almarai = Almarai({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-almarai",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre-baskerville",
});

export const metadata: Metadata = {
  title: "Riflebird Agency",
  description: "We make it known!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${almarai.variable} ${libreBaskerville.variable}`}
    >
      <body className={geist.className}>
        <Navigation />
        {children}
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
