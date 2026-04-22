import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Particles from "@/components/Particles";
import GlowCursor from "@/components/GlowCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Unira | La Aplicación es Nuestra",
  description: "Unira es el primer super-app cooperativo de Argentina. Transporte, entregas, pagos y más. Sé uno de los 5.000 socios fundadores.",
  keywords: ["Unira", "cooperativa", "Argentina", "super app", "transporte", "entregas", "app cooperativa"],
  openGraph: {
    title: "Unira | La Aplicación es Nuestra",
    description: "El primer super-app cooperativo de Argentina. Sé uno de los 5.000 socios fundadores.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-screen flex flex-col">
        <Particles />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <GlowCursor />
      </body>
    </html>
  );
}
