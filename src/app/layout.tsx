import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://nubianluxebrand.com'),
  title: "Nubian Luxe Brand",
  description: "WELCOME TO NUBIAN LUXE BRAIDING LOUNGE -  LET'S HONOR OUR ROOTS AND REDEFINE THE BRAIDING EXPERIENCE TOGETHER.",
  openGraph: {
    title: "Nubian Luxe Brand",
    description: "WELCOME TO NUBIAN LUXE BRAIDING LOUNGE -  LET'S HONOR OUR ROOTS AND REDEFINE THE BRAIDING EXPERIENCE TOGETHER.",
    images: [
      {
        url: "/assets/preview-image1.png?v=3",
        width: 1200,
        height: 630,
        alt: "Nubian Luxe Brand Preview"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Nubian Luxe Brand",
    description: "WELCOME TO NUBIAN LUXE BRAIDING LOUNGE -  LET'S HONOR OUR ROOTS AND REDEFINE THE BRAIDING EXPERIENCE TOGETHER.",
    images: [
      {
        url: "/assets/preview-image1.png?v=3",
        alt: "Nubian Luxe Brand Preview"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>{children}</body>
    </html>
  );
}
