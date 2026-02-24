import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Rylton - The Future of Urban Mobility",
  description: "Experience the revolution in urban transportation with Rylton electric scooters. Zero emissions, maximum performance, and sustainable mobility for modern cities.",
  keywords: "electric scooter, EV, eco-friendly, sustainable, urban mobility, zero emissions",
  authors: [{ name: "Rylton Mobility" }],
  openGraph: {
    title: "Rylton - Electric Scooters",
    description: "The future of urban mobility is here",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}