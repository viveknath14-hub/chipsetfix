import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ChipsetFix - Expert Device Repair in Rohini, Delhi",
  description: "ChipsetFix is your trusted local repair shop in Rohini, Delhi, specializing in expert hardware diagnostics and repairs for iPhones, MacBooks, and other devices. With a commitment to quality, we use genuine parts and offer same-day service to get your tech back in action quickly. Visit us for reliable repairs and exceptional customer care.",
  openGraph: {
    title: "ChipsetFix - Expert Device Repair in Rohini",
    description: "Delhi's premium multi-brand repair workshop specializing in chip-level micro-soldering.",
    url: "https://chipsetfix.com",
    siteName: "ChipsetFix",
    images: [
      {
        url: "https://chipsetfix.com/images/macBook.webp", // Ya jo bhi aapki image ho
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ChipsetFix | Premium Hardware Diagnostics & Repair',
    description: 'Delhi’s premium multi-brand repair workshop.',
    images: ['https://chipsetfix.com/macBook.webp'], // Aapka logo
  }
};



export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
