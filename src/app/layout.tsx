import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/landing/navbar/Header";
import { Outfit } from "next/font/google";
import Providers from "@/components/provider";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import Promotion from "@/components/landing/navbar/promotion";
import { Footer } from "@/components/landing/footer/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Add Google Font - Outfit
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Fireflyqa | Top leading company in qatar",
  description:
    "Leading service provider specializing in contracting and hospitality solutions. We deliver high-quality services including MEP, HVAC, BAS, renovation, installation, maintenance, and skilled manpower supply tailored to exceed your expectations",
  keywords:
    "software development, custom web solutions, mobile app development, cloud solutions, software agency, digital transformation",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body className={`${outfit.variable} antialiased`}>
        <Promotion />
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
        <SpeedInsights/>
        <Analytics />
      </body>
    </html>
  );
}
