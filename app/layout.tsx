import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Rylton - The Future of Urban Mobility",
  description:
    "Experience the revolution in urban transportation with Rylton electric scooters. Zero emissions, maximum performance, and sustainable mobility for modern cities.",

  openGraph: {
    title: "Rylton - Electric Scooters",
    description: "The future of urban mobility is here",
    url: "https://rylton.in", 
    siteName: "Rylton",
    images: [
      {
        url: "https://rylton.in/images/logo2.png", 
        width: 70,
        height: 70,
        alt: "Rylton Electric Scooter",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Rylton - Electric Scooters",
    description: "The future of urban mobility is here",
    images: ["https://rylton.in/images/logo2.png"],
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