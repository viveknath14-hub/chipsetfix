// src/app/card/page.js
import React from 'react';
import CardViewTracker from './CardViewTracker';
export default function CardPage() {
  return (

    <>
    <CardViewTracker />
    <div 
      className="flex justify-center items-center min-h-screen w-full px-[15px] py-[15px] bg-no-repeat bg-center bg-cover relative overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(rgba(10, 11, 14, 0.35), rgba(10, 11, 14, 0.5)), url('/images/image5.avif')"
      }}
    >
      {/* Safety external link for FontAwesome inside the card view */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

      {/* Main Glassmorphism Card (Exact 1:1 CSS translated to Tailwind) */}
      <div className="relative w-full max-w-[360px] md:max-w-[420px] bg-white/[0.05] backdrop-blur-[25px] border border-white/20 rounded-[20px] md:rounded-[24px] p-[18px_14px] sm:p-[22px_18px] md:p-[30px_24px] text-center shadow-[0_30px_60px_rgba(0,0,0,0.65),inset_0_1px_2px_rgba(255,255,255,0.3)] text-white z-10 my-auto">
        
        {/* Brand Icon */}
        <div className="mb-[6px] md:mb-[8px]">
          <i className="fa-solid fa-microchip text-[32px] md:text-[46px] text-[#ffb703] drop-shadow-[0_0_25px_rgba(255,183,3,0.5)]"></i>
        </div>
        
        {/* Title Link */}
        <a href="https://chipsetfix.com" target="_blank" rel="noopener noreferrer" className="no-underline text-white inline-block">
          <h1 className="text-[24px] sm:text-[26px] md:text-[32px] font-bold tracking-[0.5px] bg-gradient-to-r from-white via-white to-[#ffb703] bg-clip-text text-transparent mb-[2px] md:mb-[4px]">
            ChipsetFix
          </h1>
        </a>
        
        {/* Subtitle / Tagline */}
        <p className="text-[9.5px] sm:text-[10.5px] md:text-[11.5px] text-[#00d2ff] font-semibold uppercase tracking-[1.5px] md:tracking-[2.5px] mb-[10px] sm:mb-[16px] md:mb-[20px]">
          Chip Level Repairing Specialist
        </p>
        
        {/* Services Box */}
        <div className="text-[11px] sm:text-[12px] md:text-[14px] text-white font-medium leading-[1.5] mb-[14px] sm:mb-[16px] md:mb-[20px] bg-black/50 p-[8px_10px] sm:p-[10px_12px] md:p-[12px_16px] rounded-[10px] border border-[#ff6700]/35 shadow-[inset_0_0_15px_rgba(255,103,0,0.15)]">
          Laptop • TV • Mobile • CCTV<br />Mirrorless Camera Repair
        </div>

        {/* Action Controls Group */}
        <div className="flex flex-col gap-[8px] sm:gap-[10px] md:gap-[12px] mb-[14px] sm:mb-[16px] md:mb-[20px]">
          {/* Call Button */}
          <a href="tel:+919654311631" className="flex items-center p-[10px_14px] sm:p-[12px_16px] md:p-[13px_20px] bg-white/[0.08] border border-white/[0.15] rounded-[10px] md:rounded-[12px] text-white no-underline text-[12.5px] sm:text-[13.5px] md:text-[14.5px] font-semibold transition-all duration-200 hover:bg-white/[0.14] hover:border-[#ffb703] hover:-translate-y-[1px]">
            <i className="fa-solid fa-phone text-[14px] sm:text-[16px] md:text-[18px] mr-[10px] sm:mr-[12px] w-[16px] md:w-[18px] text-center text-[#00d2ff]"></i>
            <span>Call: +91 9654311631</span>
          </a>

          {/* Website Button */}
          <a href="https://chipsetfix.com" target="_blank" rel="noopener noreferrer" className="flex items-center p-[10px_14px] sm:p-[12px_16px] md:p-[13px_20px] bg-white/[0.08] border border-white/[0.15] rounded-[10px] md:rounded-[12px] text-white no-underline text-[12.5px] sm:text-[13.5px] md:text-[14.5px] font-semibold transition-all duration-200 hover:bg-white/[0.14] hover:border-[#ffb703] hover:-translate-y-[1px]">
            <i className="fa-solid fa-globe text-[14px] sm:text-[16px] md:text-[18px] mr-[10px] sm:mr-[12px] w-[16px] md:w-[18px] text-center text-[#00d2ff]"></i>
            <span>Visit chipsetfix.com</span>
          </a>
        </div>

        {/* Divider Line */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mb-[12px] sm:mb-[16px] md:mb-[18px]"></div>

        <div className="text-[9.5px] sm:text-[10.5px] md:text-[11.5px] text-[#cbd5e1] uppercase tracking-[1px] md:tracking-[2.5px] mb-[10px] md:mb-[14px] font-semibold">
          Our Other Ventures
        </div>
        
        {/* Other Ventures Grid Wrapper */}
        <div className="flex flex-col md:flex-row gap-[10px] md:gap-[12px]">
          {/* RK Property Hub */}
          <a href="https://rkph.in" target="_blank" rel="noopener noreferrer" className="flex flex-row md:flex-col items-center md:justify-center p-[10px_14px] sm:p-[12px_14px] md:p-[16px_12px] bg-black/45 border border-white/10 rounded-[10px] md:rounded-[12px] text-white no-underline transition-all duration-200 hover:bg-white/[0.08] hover:-translate-y-[2px] border-l-2 border-l-[#ff6700]/35 flex-1">
            <i className="fa-solid fa-building-user text-[#ff6700] text-[16px] sm:text-[20px] md:text-[22px] mr-[12px] sm:mr-[14px] md:mr-0 md:mb-[8px]"></i>
            <div className="text-left md:text-center overflow-hidden text-ellipsis whitespace-nowrap">
              <span className="text-[12px] sm:text-[13px] font-semibold block truncate">RK Property Hub</span>
              <span className="text-[9px] sm:text-[10px] text-[#94a3b8] block mt-[1px] md:mt-[2px]">rkph.in</span>
            </div>
          </a>

          {/* Software Development */}
          <a href="https://clicksutra.com" target="_blank" rel="noopener noreferrer" className="flex flex-row md:flex-col items-center md:justify-center p-[10px_14px] sm:p-[12px_14px] md:p-[16px_12px] bg-black/45 border border-white/10 rounded-[10px] md:rounded-[12px] text-white no-underline transition-all duration-200 hover:bg-white/[0.08] hover:-translate-y-[2px] border-l-2 border-l-[#00d2ff]/35 flex-1">
            <i className="fa-solid fa-laptop-code text-[#00d2ff] text-[16px] sm:text-[20px] md:text-[22px] mr-[12px] sm:mr-[14px] md:mr-0 md:mb-[8px]"></i>
            <div className="text-left md:text-center overflow-hidden text-ellipsis whitespace-nowrap">
              <span className="text-[12px] sm:text-[13px] font-semibold block truncate">Software Development</span>
              <span className="text-[9px] sm:text-[10px] text-[#94a3b8] block mt-[1px] md:mt-[2px]">clicksutra.com</span>
            </div>
          </a>
        </div>

      </div>
    </div>
    </>
  );
}