import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { GoogleTagManager } from '@next/third-parties/google'


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ChipsetFix - Expert Laptop, Mobile & Electronic Device Repair in Rohini, Delhi",
  description: "ChipsetFix is a trusted repair center in Rohini, Delhi, offering expert diagnostics and repair services for laptops, mobile phones, and other electronic devices. We use genuine parts and provide fast, same-day service to ensure your devices are back in action as quickly as possible. Experience reliable repairs and outstanding customer support with ChipsetFix.",
  openGraph: {
    title: "ChipsetFix - Expert Laptop, Mobile & Electronic Device Repair in Rohini, Delhi",
    description: "Delhi's premium multi-brand laptops, mobiles and other electronic devices repair workshop specializing in chip-level micro-soldering.",
    url: "https://chipsetfix.com",
    siteName: "ChipsetFix",
    images: [
      {
        url: "https://chipsetfix.com/images/macBook.webp", // image for open graph
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ChipsetFix | Premium Laptop, Mobile & Electronic Device Repair in Rohini',
    description: 'Delhi’s premium multi-brand laptops, mobiles and other electronic devices repair workshop.',
    images: ['https://chipsetfix.com/images/macBook.webp'], // logo
  }
};



export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
        <GoogleTagManager gtmId="GTM-N7WZFFGV" />
      <body className="min-h-full flex flex-col font-sans">{children}
      
      </body>
    </html>
  );
}
