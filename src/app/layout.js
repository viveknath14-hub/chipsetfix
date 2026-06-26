import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Head from "next/head";


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
      <Head>
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N7WZFFGV');`}} />
        {/* End Google Tag Manager */}
      </Head>
       
      <body className="min-h-full flex flex-col font-sans">{children}
        
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-P60WD746TE"></Script>
        <Script id="google-analytics">{`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-P60WD746TE');`}</Script>

        {/* Google Tag Manager (noscript) */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N7WZFFGV"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        {/* End Google Tag Manager (noscript) */}

      </body>
    </html>
  );
}
