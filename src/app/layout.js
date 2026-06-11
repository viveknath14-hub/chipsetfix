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
