import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BarberFlow | Scale Your Barbershop",
  description: "High-fidelity SaaS platform for modern barbershops. Manage scheduling, CRM, and financials with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} font-sans antialiased bg-matte-black text-white`}
      >
        <div className="fixed inset-0 bg-grid-pattern -z-10" />
        <div className="fixed inset-0 bg-gradient-to-br from-[#4B0082]/10 via-transparent to-[#2D0A31]/20 -z-10 pointer-events-none" />
        {children}
      </body>
    </html>
  );
}
