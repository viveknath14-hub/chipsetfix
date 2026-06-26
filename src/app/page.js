"use client";

import { ArrowLeft, ArrowRightLeftIcon, IdCardIcon, LocationEditIcon, MailIcon, PhoneCallIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { useState, useRef } from "react";

import * as React from "react"

export default function Home() {

  const [ImageReveal, setImageReveal] = useState(0.5);

  const imageContainer= useRef(null);

  const slide = (xPosition) => {
    const containerBoundingRect = imageContainer.current.getBoundingClientRect();
    
    let finalValue;

    setImageReveal(()=>{
      if(xPosition < containerBoundingRect.left){
        finalValue = 0;
      }else if (xPosition >containerBoundingRect.right){
        finalValue = 1;
      }else{
        finalValue = (xPosition - containerBoundingRect.left)/ containerBoundingRect.width;
      }
  });
 setImageReveal(finalValue);
};

const handleTouchMove = (e) => {slide(e.touches[0].clientX);}

  const handleMouseDown = () => {
    window.onmousemove = handleMouseMove
  window.onmouseup= handleMouseUp};

  const handleMouseMove = (e) =>{slide(e.clientX);}

  const handleMouseUp = () => {window.onmousemove = null;
  window.onmouseup = null;
  }

  // 1. Inputs ki states
const [formData, setFormData] = useState({
  name: "",
  phone: "",
  model: ""
});

// 2. Input change handler
const handleInputChange = (e) => {
  const { name, value } = e.target;

  // 1. Name fields sirf alphabets allowed hai
  if (name === "name") {
    // Agar input khali hai ya usme sirf letters/spaces hain, tabhi state update hogi
    if (value === "" || /^[a-zA-Z\s]+$/.test(value)) {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    return; // Baaki kuch nahi chalne dega
  }

  // 2. Phone Sirf numbers (0-9) allowed hai
  if (name === "phone") {
    // Sirf digits allow hai (Indian Standard Mobile Numbers)
    if (value === "" || (/^\d+$/.test(value) && value.length <= 10)) {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    return;
  }

  // 3. Model validation
  setFormData((prev) => ({ ...prev, [name]: value }));
};

// 3. WhatsApp Submit Handler
const handleWhatsAppSubmit = () => {
      if (isSubmitted) return; //submit disable hoga agar submit ho chuka hai to

  if (!formData.name || !formData.phone || !formData.model) {
    alert("Dear user, Please fill all the fields first");
    return;
  }

  // My number for whatsapp with country code
  const myWhatsAppNumber = "919654311631"; // 

  // Message template with form data interpolation
  const message = ` * New Repair Enquiry - ChipsetFix* \n\n` +
                  ` *Name:* ${formData.name}\n` +
                  ` *Phone:* ${formData.phone}\n` +
                  ` *Device Model:* ${formData.model}\n\n` +
                  ` Please confirm my priority time slot.`;

  // URL encode standard format
  const encodedMessage = encodeURIComponent(message);
  
  // Universal WhatsApp Link trigger (Works on both Phone App and PC Web)
  window.open(`https://wa.me/${myWhatsAppNumber}?text=${encodedMessage}`, '_blank');

  setIsSubmitted(true); // Form submit hone ke baad button disable karne ke liye state update
};

// 4. Smooth Scroll Link Function
const scrollToBooking = () => {
  const element = document.getElementById("booking");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const [isSubmitted, setIsSubmitted] = useState(false);



  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "ChipsetFix",
    "image": "https://chipsetfix.com/images/macBook.webp", 
    "@id": "https://chipsetfix.com", // unique identifier (usually the website URL)
    "url": "https://chipsetfix.com", // website URL
    "telephone": "+919654311631", // number
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rohini", // Apna exact shop address
      "addressLocality": "New Delhi",
      "addressRegion": "Delhi",
      "postalCode": "110085",
      "addressCountry": "IN"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "10:00",
      "closes": "19:00"
    },
    
  };

  return (

<>
      {/* SEO Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
     

<main className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f] antialiased flex flex-col items-stretch items-center justify-center font-sans selection:bg-amber-200">
    
    {/* Navbar*/}
    <nav className="sticky top-0 z-50 w-full border-b border-black/[0.08] bg-[#f5f5f7]/80 backdrop-blur-md">
      <div className="mx-auto flex h-[64px] items-center justify-between px-4 sm:px-6 md:grid md:grid-cols-3 max-w-6xl">
        <div className="flex items-center gap-2 select-none">
          <span className="text-[20px] font-semibold tracking-[-0.015em] text-[#1d1d1f]">
            ChipsetFix<span className="text-amber-600 font-bold">.</span>
          </span>
        </div>

{/* 2. CENTER COLUMN: Elegant Apple-style Business Card Link */}
          <div className="flex justify-center items-center">
            <Link
              href="/card"
              className="text-[14px] md:text-[16px] font-medium tracking-[-0.01em] text-amber-600 transition-all duration-200 flex items-center gap-1.5 active:scale-95 "
            >
              <IdCardIcon  className="w-6 h-6 !hidden sm:!inline-block"/>
              Business Card
            </Link>
          </div>

        <div className="flex flex-col items-end gap-0.5 animate-pulse md:animate-pulse hover:transition-none hover:animate-none active:scale-[0.96] active:opacity-90">
          <a 
            href="tel:+919654311631" 
            className="group bg-amber-600 hover:bg-amber-500 text-white text-[12px] sm:text-[13px] font-normal tracking-[-0.01em] px-[12px] py-[6px] sm:px-[16px] sm:py-[7px] rounded-full transition-all duration-200 shadow-sm flex items-center gap-1.5 active:scale-95"
          >
           <PhoneCallIcon className="w-3.5 h-3.5 transition-transform group-hover:rotate-12 " />
            Call Now
            
          </a>
          <span className="text-[9px] sm:text-[10px] font-medium tracking-wider text-black font-mono select-all px-1">
            +91 9654311631
          </span>
        </div>
      </div>
    </nav>
    

{/* for hero section */}
<div className="flex-1 flex items-center justify-center py-6 md:py-6">

<div className="max-w-6xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

{/* ================= LEFT SIDE: EXACT APPLE TYPOGRAPHY ================= */}
<div className="space-y-5 max-w-lg font-sans">
  <p className="text-[12px] font-semibold tracking-[0.08em] uppercase text-amber-600 md:text-left text-center">
    PREMIUM DEVICE CARE
  </p>
  
 <h1 className="text-[32px] sm:text-[40px] md:text-[56px] font-semibold tracking-[-0.025em] text-[#1d1d1f] leading-[1.15] text-center md:text-start max-w-4xl mx-auto">
Device Diagnostics & Repair.<br/>
  <span className="text-amber-600 block md:text-[50px]">Expert Chip-Level Fix.</span>
</h1>
  
  <p className="text-[17px] text-black leading-[1.5] tracking-[-0.011em] font-normal max-w-[420px] md:text-left text-center">
Delhi's premium multi-brand repair workshop for laptops, mobiles and other electronic devices. Our master technicians specialize in high-precision chip-level micro-soldering, display lamination, and logic board recovery.  </p>
  
  <div className="pt-4 flex w-full md:justify-start justify-center">
    {/* ONCLICK ADDED HERE FOR SMOOTH SCROLL */}
    <button 
      onClick={scrollToBooking}
      className="bg-amber-600 hover:bg-amber-500 cursor-pointer text-white text-[14px] font-normal tracking-[-0.015em] px-[21px] py-[11px] rounded-full transition-all duration-200 animate-pulse"
    >
      Book a Repair
    </button>
  </div>
</div>
   <div className=" px-4">
   <div ref={imageContainer} 
   className=" w-fit max-w-lg mx-auto mt-0  bg-amber-100 overflow-hidden rounded-lg relative select-none">
     
  <Image src="/images/iphoneD.avif"
  alt="Image slide compare just for decorative purposes"
  width={200}
  height={200}
  loading="eager"
  className="w-auto h-auto mx-auto contrast-125 pointer-events-none"
  />
  <Image src="/images/iphoneR.avif"
  alt="Image slide compare just for decorative purposes"
  width={200}
  height={200}
  loading="eager"
  style= {{clipPath: `polygon(0 0, ${ImageReveal*100}% 0, ${ImageReveal*100}% 100%, 0 100%)`}}
  className=" absolute inset-0 w-full h-full object-cover pointer-events-none"
  
  />
  
  <div 
  style={{left:`${ImageReveal*100}%`}}
  className="absolute inset-y-0">
<div className="relative h-full">
  <div className="absolute inset-0 w-0.5 -ml-px opacity-80 "></div>
  <div 
      style={{touchAction: "none"}}
      onMouseDown={handleMouseDown} 
      onTouchMove={handleTouchMove}
  className="h-5 w-7  -ml-3.5 rounded-s-full rounded-e-full absolute top-1/2 -mt-2.5 shadow-2xl bg-amber-600 cursor-pointer flex items-center justify-center">
   <ArrowRightLeftIcon className="h-4 w-4 text-white " />
  </div>
  
</div>
 </div>
</div>

   </div>
</div>
</div>

{/* ================= NEW CATEGORIES SECTION (FAQ KE NEECHE) ================= */}
<section className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-16 border-t border-black/[0.05] space-y-10">
  
  <div className="text-center md:text-left space-y-2">
    <p className="text-[12px] font-semibold tracking-[0.08em] uppercase text-amber-600">
      OUR SPECIALIZED WORKSHOP
    </p>
    <h2 className="text-[28px] sm:text-[36px] font-semibold tracking-[-0.022em] text-[#1d1d1f]">
      Expert restoration <br className="sm:hidden" /> for all your hardware.
    </h2>
  </div>

  {/* Perfect 6 cards grid for laptop 3-3 and for mobile column grid*/}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
    
    {/* 1. NEW CARD: CHIPSET LEVEL REPAIR */}
    <div className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-black/[0.03] group hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300">
      <div className="w-full aspect-[16/10] bg-[#f5f5f7] overflow-hidden relative">
 <Image
    src="/images/microSoldering.webp"
    alt="Chipset Repair microSoldering"
    fill
    sizes="(max-width: 768px) 100vw, 33vw"
    className="object-cover pointer-events-none transition-transform duration-500 group-hover:scale-105"
  />      
  </div>
      <div className="p-6 sm:p-8 text-center md:text-left space-y-2">
        <h3 className="text-[18px] sm:text-[22px] font-semibold tracking-[-0.015em] text-[#1d1d1f]">
          Chipset Level Repair for All Devices
        </h3>
        <p className="text-[14px] text-black leading-[1.4]">
          Micro-soldering, IC reballing, logic board trace repairs, and short-circuit troubleshooting for phones, macbooks, and smart gear.
        </p>
      </div>
    </div>

    {/* 2. Mobile Repair */}
    <div className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-black/[0.03] group hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300">
      <div className="w-full aspect-[16/10] bg-[#f5f5f7] overflow-hidden relative">
<Image
    src="/images/phoneRepair.webp"
    alt="Mobile repair"
    fill
    sizes="(max-width: 768px) 100vw, 33vw"
    className="object-cover pointer-events-none transition-transform duration-500 group-hover:scale-105"
  />          </div>
      <div className="p-6 sm:p-8 text-center md:text-left space-y-2">
        <h3 className="text-[18px] sm:text-[22px] font-semibold tracking-[-0.015em] text-[#1d1d1f]">Smartphone Restoration</h3>
        <p className="text-[14px] text-black leading-[1.4]">From cracked outer glass layer calibration to precise OLED replacements and battery health diagnostics.</p>
      </div>
    </div>

    {/* 3. Laptop Repair */}
    <div className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-black/[0.03] group hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300">
      <div className="w-full aspect-[16/10] bg-[#f5f5f7] overflow-hidden relative">
        <Image
          src="/images/macBook.webp"
          alt="Laptop Repair"
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover pointer-events-none transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 sm:p-8 text-center md:text-left space-y-2">
        <h3 className="text-[18px] sm:text-[22px] font-semibold tracking-[-0.015em] text-[#1d1d1f]">Laptop & MacBook Care</h3>
        <p className="text-[14px] text-black leading-[1.4]">Chip-level motherboard fixing, cracked display panels replacement, fluid damage recovery, and keyboard overhauls.</p>
      </div>
    </div>

    {/* 4. LED TV Repair */}
    <div className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-black/[0.03] group hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300">
      <div className="w-full aspect-[16/10] bg-[#f5f5f7] overflow-hidden relative">
        <Image
          src="/images/led.webp"
          alt="LED TV Repair"
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover pointer-events-none transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 sm:p-8 text-center md:text-left space-y-2">
        <h3 className="text-[18px] sm:text-[22px] font-semibold tracking-[-0.015em] text-[#1d1d1f]">LED & 4K TV Diagnostics</h3>
        <p className="text-[14px] text-black leading-[1.4]">Resolving backlight panel failures, sound synchronization bugs, power board drops, and vertical color line distortions.</p>
      </div>
    </div>

    {/* 5. Mirrorless Camera Repair */}
    <div className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-black/[0.03] group hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300">
      <div className="w-full aspect-[16/10] bg-[#f5f5f7] overflow-hidden relative">
        <Image
          src="/images/camera.webp"
          alt="Camera Repair"
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover pointer-events-none transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 sm:p-8 text-center md:text-left space-y-2">
        <h3 className="text-[18px] sm:text-[22px] font-semibold tracking-[-0.015em] text-[#1d1d1f]">Mirrorless Camera Service</h3>
        <p className="text-[14px] text-black leading-[1.4]">Precision image sensor cleaning, autofocus shutter mechanism alignment, lens mount calibration, and port fixes.</p>
      </div>
    </div>

    {/* 6. CCTV Repair */}
    <div className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-black/[0.03] group hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300">
      <div className="w-full aspect-[16/10] bg-[#f5f5f7] overflow-hidden relative">
        <Image
          src="/images/cctvRepair.webp"
          alt="CCTV Repair"
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover pointer-events-none transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 sm:p-8 text-center md:text-left space-y-2">
        <h3 className="text-[18px] sm:text-[22px] font-semibold tracking-[-0.015em] text-[#1d1d1f]">CCTV & Surveillance Audit</h3>
        <p className="text-[14px] text-black leading-[1.4]">Fixing DVR/NVR boot errors, camera feed loss tracking, night-vision infrared issues, and network mapping.</p>
      </div>
    </div>

  </div>
</section>


{/* ================= FAQ SECTION ================= */}
<section className="w-full max-w-3xl mx-auto px-4 sm:px-6 py-16 border-t border-black/[0.05]">
  <div className="text-center md:text-left mb-10 space-y-2">
    <h2 className="text-[28px] sm:text-[34px] font-semibold tracking-[-0.02em] text-[#1d1d1f]">
      Got questions? <br className="sm:hidden" /> We’ve got answers.
    </h2>
  </div>

  <div className="space-y-4 font-sans">
    {/* FAQ Item 1 */}
    <div className="border-b border-black/[0.08] pb-4 group">
      <h3 className="text-[16px] sm:text-[18px] font-medium text-[#1d1d1f] py-3 flex justify-between items-center cursor-pointer select-none">
        Will my data be safe during repair?
        <span className="text-amber-600"><ArrowLeft/></span>
      </h3>
      <p className="text-[14px] sm:text-[15px] text-black leading-relaxed max-w-2xl">
Absolutely. Data privacy is the core engine at ChipsetFix.com. All hardware diagnostics, screen restorations, and chip-level micro-soldering are physically isolated from your storage modules. Whether it is a MacBook logic board, flagship phone, or camera, your internal files and operating system remain 100% untouched and secure throughout the entire service cycle.</p>
    </div>

    {/* FAQ Item 2 */}
    <div className="border-b border-black/[0.08] pb-4 group">
      <h3 className="text-[16px] sm:text-[18px] font-medium text-[#1d1d1f] py-3 flex justify-between items-center cursor-pointer select-none">
        What types of electronics devices do you repair, and how do I get a price estimate for my specific hardware model?
        <span className="text-amber-600"><ArrowLeft/></span>
      </h3>
      <p className="text-[14px] sm:text-[15px] text-black leading-relaxed max-w-2xl">
ChipsetFix is a premium multi-brand workshop for Apple MacBooks, laptops, flagship phones, DSLR cameras, and 4K TVs. Just submit your brand and model via our WhatsApp form below. Using real-time diagnostic schematics, our desk will send you a transparent, component-level repair estimate within 15 minutes.      </p>
    </div>
  </div>
</section>

{/* ================= NEW FEATURES SECTION ================= */}
<section className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-16 border-t border-black/[0.05]">
  
  {/* Parent Div: Badi screen par 3 columns (row), mobile par 1 column */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
    
  {/* ---------------- CARD 1: Original Parts (Animated Shield) ---------------- */}
  <div className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-black/[0.03] md:hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300 group select-none touch-manipulation">
    {/* Upar Wala Div: Icon Wrapper Instead of Image */}
    <div className="w-full aspect-[16/10] bg-[#f5f5f7] flex items-center justify-center relative overflow-hidden">
      {/* Background Micro-Grid Pattern for Premium Tech Feel */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
      
      {/* Animated Icon Container */}
      <div className="p-5  text-amber-600 transition-all duration-500 md:group-hover:scale-110 md:group-hover:rotate-3">
        {/* ShieldCheck Icon (Representing Genuine/Safe components) */}
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-15 h-15">
          <path d="M20 13c0 5-3.5 7.5-7.66 9.7a1 1 0 0 1-.68 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 .76-.97l8-2a1 1 0 0 1 .48 0l8 2A1 1 0 0 1 20 6z"/>
          <path className="transition-all duration-500 delay-100 md:group-hover:stroke-dashoffset-0" strokeDasharray="12" strokeDashoffset={0} d="m9 12 2 2 4-4"/>
        </svg>
      </div>
    </div>
    
    {/* Niche Wala Div: Text */}
    <div className="p-6 sm:p-8 flex flex-col justify-center text-center md:text-left space-y-3">
      <h3 className="text-[20px] sm:text-[24px] font-semibold tracking-[-0.015em] text-[#1d1d1f]">
        Original Parts Only
      </h3>
      <p className="text-[14px] sm:text-[15px] text-black leading-[1.4] tracking-[-0.01em] font-normal">
        We use genuine grade components to ensure display brightness, touch sensitivity, and color accuracy remain flawless.
      </p>
    </div>
  </div>

  {/* ---------------- CARD 2: Same-Day Repair (Animated Bolt/Clock) ---------------- */}
  <div className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-black/[0.03] md:hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300 group select-none touch-manipulation">
    <div className="w-full aspect-[16/10] bg-[#f5f5f7] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
      
      {/* Animated Bolt Box */}
      <div className="p-5   text-amber-600 transition-all duration-500 md:group-hover:scale-110 md:group-hover:-translate-y-1">
        {/* Zap/Lightning Icon (Representing Rocket Speed/Same Day) */}
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-15 h-15">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
        </svg>
      </div>
    </div>
    
    <div className="p-6 sm:p-8 flex flex-col justify-center text-center md:text-left space-y-3">
      <h3 className="text-[20px] sm:text-[24px] font-semibold tracking-[-0.015em] text-[#1d1d1f]">
        Same-Day Repair
      </h3>
      <p className="text-[14px] sm:text-[15px] text-black leading-[1.4] tracking-[-0.01em] font-normal">
        Don't wait for days. Drop off your device and collect it within hours, perfectly sealed and fully tested.
      </p>
    </div>
  </div>

  {/* ---------------- CARD 3: Warranty Protection (Animated Badge) ---------------- */}
  <div className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-black/[0.03] md:hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300 group select-none touch-manipulation">
    <div className="w-full aspect-[16/10] bg-[#f5f5f7] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
      
      {/* Animated Award Box */}
      <div className="p-5   text-amber-600 transition-all duration-500 md:group-hover:scale-110 md:group-hover:rotate-[-6deg] ">
        {/* Award/Badge Icon (Representing Rock-solid Warranty) */}
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5 " strokeLinecap="round" strokeLinejoin="round" className="w-15 h-15">
          <circle cx="12" cy="8" r="7"/>
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
        </svg>
      </div>
    </div>
    
    <div className="p-6 sm:p-8 flex flex-col justify-center text-center md:text-left space-y-3">
      <h3 className="text-[20px] sm:text-[24px] font-semibold tracking-[-0.015em] text-[#1d1d1f]">
        Warranty Protection
      </h3>
      <p className="text-[14px] sm:text-[15px] text-black leading-[1.4] tracking-[-0.01em] font-normal">
        Every screen restoration comes with a rock-solid warranty covering any structural or touch manufacturing defects.
      </p>
    </div>
  </div>

</div>
</section>

{/* ================= SEO OPTIMIZED FAQ SECTION ================= */}
<section className="w-full max-w-3xl mx-auto px-4 sm:px-6 py-16 border-t border-black/[0.05]">
  <div className="text-center md:text-left mb-10 space-y-2">
    <p className="text-[12px] font-semibold tracking-[0.08em] uppercase text-amber-600">
      QUESTIONS & ANSWERS
    </p>
    <h2 className="text-[28px] sm:text-[34px] font-semibold tracking-[-0.02em] text-[#1d1d1f]">
      Frequently Asked Questions
    </h2>
  </div>

  <div className="space-y-4 font-sans">
    
    {/* SEO Q1: Local Keyword & Trust */}
    <div className="border-b border-black/[0.08] pb-4 group">
      <h3 className="text-[16px] sm:text-[18px] font-medium text-[#1d1d1f] py-3 flex justify-between items-center cursor-pointer select-none">
        Which is the best premium device repair shop in Rohini, Delhi?
        <span className="text-amber-600"><ArrowLeft/></span>
      </h3>
      <p className="text-[14px] sm:text-[15px] text-black leading-relaxed max-w-2xl">
        ChipsetFix is widely recognized as one of the leading multi-brand repair centers in Rohini, New Delhi. We specialize in advanced chipset-level micro-soldering, MacBook logic board restoration, mirrorless camera cleaning, and high-precision smartphone outer glass layer replacement.
      </p>
    </div>

    {/* SEO Q2: Price & Transparency Keyword */}
    <div className="border-b border-black/[0.08] pb-4 group">
      <h3 className="text-[16px] sm:text-[18px] font-medium text-[#1d1d1f] py-3 flex justify-between items-center cursor-pointer select-none">
        How much does a smartphone outer glass screen replacement cost?
        <span className="text-amber-600"><ArrowLeft/></span>
      </h3>
      <p className="text-[14px] sm:text-[15px] text-black leading-relaxed max-w-2xl">
        The cost of glass restoration depends strictly on your device model. By replacing only the shattered outer glass layer using OCA vacuum lamination instead of the entire expensive display assembly, we save you up to 60% compared to official service center prices while retaining your original screen.
      </p>
    </div>

    {/* SEO Q3: Service Scope (Laptop, LED TV, CCTV) */}
    <div className="border-b border-black/[0.08] pb-4 group">
      <h3 className="text-[16px] sm:text-[18px] font-medium text-[#1d1d1f] py-3 flex justify-between items-center cursor-pointer select-none">
        Do you provide home service for LED TV and CCTV setup repairs?
          <span className="text-amber-600"><ArrowLeft/></span>      </h3>
      <p className="text-[14px] sm:text-[15px] text-black leading-relaxed max-w-2xl">
        Yes! For heavy or fixed hardware like 4K LED TVs and CCTV surveillance systems, we provide expert on-site diagnostics and field technicians across Delhi. Smaller portable devices like mobiles, laptops, and mirrorless cameras can be dropped off directly at our physical workshop for swift turnaround.
      </p>
    </div>

    {/* SEO Q4: Data & Safety (High search volume intent) */}
    <div className="border-b border-black/[0.08] pb-4 group">
      <h3 className="text-[16px] sm:text-[18px] font-medium text-[#1d1d1f] py-3 flex justify-between items-center cursor-pointer select-none">
        Will my phone data remain safe during hardware chipset repair?
        <span className="text-amber-600"><ArrowLeft/></span>
      </h3>
      <p className="text-[14px] sm:text-[15px] text-black leading-relaxed max-w-2xl">
        Data privacy is our top priority. Our hardware repairs—whether glass lamination, backlight fixes, or IC reballing—are completely isolated from your device's flash memory storage. Your data remains untouched and 100% safe throughout the restoration process.
      </p>
    </div>

  </div>
</section>

{/*  BOOKING FORM SECTION WITH INPUT HANDELING */}
<section id="booking" className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-12 pb-24">
  {/* Card Container */}
  <div className="bg-white rounded-3xl p-6 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-black/[0.03] flex flex-col md:flex-row gap-10 items-center">
    
    {/* Form Left Side: Marketing Context */}
    <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
      <h2 className="text-[28px] sm:text-[36px] font-semibold tracking-[-0.022em] text-[#1d1d1f] leading-tight">
        Schedule your <br className="hidden md:inline" /> repair today.
      </h2>
      <p className="text-[15px] text-black font-normal leading-relaxed">
        Fill out this brief form, and our support team will contact you within 15 minutes to confirm your priority time slot.
      </p>
    </div>

    {/* Form Right Side: Inputs */}
    <div className="w-full md:w-1/2 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input 
          type="text" 
          name="name"
          value={formData.name || ""}
          onChange={handleInputChange}
          placeholder="Your Name" 
          className="w-full bg-[#f5f5f7] border border-transparent focus:border-black/10 focus:bg-white text-[14px] px-4 py-3 rounded-xl outline-none transition-all duration-200 text-[#1d1d1f] font-sans"
        />
        <input 
          type="tel" 
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="Phone Number" 
          className="w-full bg-[#f5f5f7] border border-transparent focus:border-black/10 focus:bg-white text-[14px] px-4 py-3 rounded-xl outline-none transition-all duration-200 text-[#1d1d1f] font-sans"
        />
      </div>
      <input 
        type="text" 
        name="model"
        value={formData.model}
        onChange={handleInputChange}
        placeholder="Device Model (e.g., iPhone 14 Pro)" 
        className="w-full bg-[#f5f5f7] border border-transparent focus:border-black/10 focus:bg-white text-[14px] px-4 py-3 rounded-xl outline-none transition-all duration-200 text-[#1d1d1f] font-sans"
      />
      
      {/* WHATSAPP ACTION ADDED HERE */}
      <button 
  onClick={handleWhatsAppSubmit}
  disabled={isSubmitted} // Submit hone ke baad click block karne ke liye
  className={`w-full bg-amber-600 text-white text-[14px] font-medium py-3 rounded-xl transition-all duration-150 tracking-tight shadow-sm select-none touch-manipulation
    ${isSubmitted 
      ? "cursor-default opacity-90" 
      : "md:hover:bg-amber-500 cursor-pointer active:scale-[0.99]" 
    }`}
>
  {isSubmitted ? "Submitted ✓" : "Submit Request"}
</button>
    </div>

  </div>
</section>

{/*  PREMIUM APPLE-STYLE FOOTER  */}
<footer className="w-full bg-[#f5f5f7] text-[#1d1d1f] font-sans border-t border-black/[0.08] pt-16 pb-8">
  <div className="max-w-6xl mx-auto px-4 sm:px-6">
    
    {/* Top Grid: Responsive Columns (Desktop: 3 Cols, Mobile: 1 Col) */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 pb-12 border-b border-black/[0.08]">
      
      {/* COLUMN 1: SHOP BRANDING & SUMMARY */}
      <div className="space-y-4 text-center md:text-left mx-auto md:mx-0 max-w-sm">
        <span className="text-[20px] font-semibold tracking-[-0.015em] text-[#1d1d1f]">
          ChipsetFix<span className="text-amber-600 font-bold">.</span>
        </span>
        <p className="text-[14px] text-black leading-[1.5] font-normal">
          Delhi's premier multi-brand hardware restoration workshop. Specializing in high-precision chipset micro-soldering, screen lamination, and premium diagnostic care.
        </p>
      </div>

      {/* COLUMN 2: QUICK CONTACT (DIALER & EMAIL OVERLAYS) */}
      <div className="space-y-4 text-center md:text-left flex flex-col items-center md:items-start">
        <h4 className="text-[14px] font-semibold tracking-wider uppercase text-[#1d1d1f] sm:text-[12px] text-amber-600">
          Get In Touch
        </h4>
        <div className="flex flex-col items-start space-y-3 w-fit mx-auto md:mx-0 text-left">
          {/* Phone (Triggers Phone Dialer) */}
          <a 
            href="tel:+919654311631" 
            className="flex items-center justify-center md:justify-start gap-2.5 text-[15px] text-black transition-colors group"
          >
            <span className="text-lg group-hover:scale-110 transition-transform text-amber-600"><PhoneCallIcon/></span>
            <span className="font-normal tracking-tight ">+91 9654311631</span>
          </a>

          {/* Email (Triggers Email Applications) */}
          <a 
            href="mailto:viveknath14@gmail.com" 
            className="flex items-center justify-center md:justify-start gap-2.5 text-[15px] text-black transition-colors group"
          >
            <span className="text-lg group-hover:scale-110 transition-transform text-amber-600"><MailIcon /></span>
            <span className="font-normal  hover:decoration-amber-600">viveknath14@gmail.com</span>
          </a>

          {/* Address Link (Triggers Directions on Maps) */}
          <a 
            href="https://www.google.com/maps/dir/?api=1&destination=Rohini,+New+Delhi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-start justify-center md:justify-start gap-2.5 text-[14px] text-black transition-colors group max-w-xs pt-1"
          >
            <span className="text-lg group-hover:translate-y-[-2px] transition-transform text-amber-600"><LocationEditIcon /></span>
            <span className="leading-[1.4] text-center md:text-left">
              Rohini, <br />
              New Delhi, Delhi 110085 <br />
              <span className="text-[12px] font-medium text-amber-600 group-hover:underline inline-block mt-1">
                Get Directions →
              </span>
            </span>
          </a>
        </div>
      </div>

      {/* COLUMN 3: INTERACTIVE MAP LINK CONTAINER */}
      <div className="w-full flex flex-col items-center md:items-end">
        <div className="w-full max-w-[320px] aspect-[16/10] rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-black/[0.06] relative group">
          
          {/* Interactive Google Map Iframe Layer */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55972.66616703733!2d77.05156315910563!3d28.740708463568865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d013a47a1803d%3A0xedfb8cc477815e2f!2sRohini%2C%20Delhi!5e0!3m2!1sen!2sin!4v1781202877260!5m2!1sen!2sin"
           title="ChipsetFix location map"
           width="600"
            height="450" 
            style={{"border": "0"}} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
          
          {/* Absolute Click Overlay Link to force Directions trigger over Iframe bounds */}
          <a 
            href="https://www.google.com/maps/dir/?api=1&destination=Rohini,+New+Delhi"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-20 bg-black/0 hover:bg-black-[0.02] transition-colors"
            title="Open in Google Maps for Navigation"
          ></a>
        </div>
        <span className="text-[11px] text-amber-600 font-medium mt-2 max-w-[320px] w-full text-center md:text-left md:px-1">
          Click map to launch driving navigation.
        </span>
      </div>

    </div>

    {/* Bottom Bar: Copyright Notes & Adsense/Legal Links */}
    <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-amber-600">
      
      {/* Copyright branding text */}
      <p className="select-none text-center sm:text-left">
        Copyright © 2026 ChipsetFix. All rights reserved.
      </p>

      {/* Ads Compliance Legal Trackers */}
      <div className="flex items-center gap-6 font-medium">
        <a 
          href="/privacy-policy" 
          className="text-amber-600 hover:underline transition-colors"
        >
          Privacy Policy
        </a>
        <a 
          href="/TermsOfService" 
          className="text-amber-600 hover:underline transition-colors"
        >
          Terms of Service
        </a>
      </div>

    </div>

  </div>
</footer>


</main>
   </>
  
  );
}
