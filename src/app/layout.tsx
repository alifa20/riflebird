import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { SpeedInsights } from '@vercel/speed-insights/next';

const geist = Geist({
  subsets: ["latin"],
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
    <html lang="en">
      <body className={geist.className}>
          <Navigation />
          <div className="pt-36">
            {children}
          </div>
          <SpeedInsights />
      </body>
    </html>
  );
}
