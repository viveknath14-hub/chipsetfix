"use client";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f] antialiased font-sans selection:bg-amber-200">
      
      {/* HEADER / NAVBAR BACK BUTTON */}
      <header className="w-full border-b border-black/[0.05] bg-[#f5f5f7]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto flex h-[64px] items-center justify-between px-6">
          <Link href="/" className="text-[14px] text-amber-600 hover:underline flex items-center gap-1">
            ← Back to Home
          </Link>
          <span className="text-[16px] font-semibold tracking-tight">ChipsetFix<span className="text-amber-600">.</span></span>
        </div>
      </header>

      {/* MAIN CONTENT CONTAINER */}
      <main className="max-w-3xl mx-auto px-6 py-12 sm:py-20 space-y-12">
        
        {/* Page Title Section: Mobile pe center, Desktop pe left */}
        <div className="space-y-3 text-center sm:text-left border-b border-black/[0.08] pb-10">
          <p className="text-[12px] font-semibold tracking-[0.08em] uppercase text-amber-600">LEGAL & PRIVACY</p>
          <h1 className="text-[32px] sm:text-[44px] font-semibold tracking-[-0.022em] text-[#1d1d1f] leading-tight">
            Privacy Policy
          </h1>
          <p className="text-[13px] text-black font-mono">Last Updated: June 2026</p>
        </div>

        {/* Policy Body: Mobile pe center text, Desktop pe left text */}
        <div className="space-y-10 text-[15px] sm:text-[16px] text-[#1d1d1f] leading-[1.6] font-normal text-center sm:text-left">
          
          <p className="text-[#1d1d1f]">
            At <strong>ChipsetFix</strong>, accessible from our landing page, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by ChipsetFix and how we use it. If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
          </p>

          {/* Section 1 */}
          <div className="space-y-3">
            <h2 className="text-[20px] sm:text-[24px] font-semibold tracking-[-0.015em] text-[#1d1d1f]">1. Information We Collect</h2>
            <p className="text-black">
              When you use our integrated WhatsApp booking form to schedule a hardware repair, we request specific personal parameters to execute your service queue properly:
            </p>
            {/* List positioning fixed for center-to-left layout */}
            <ul className="list-none sm:list-disc list-inside space-y-2 text-black pt-1">
              <li><strong>Customer Identity:</strong> Your explicit name provided during submission.</li>
              <li><strong>Contact Parameters:</strong> Mobile phone digits to contact you regarding the confirmation window.</li>
              <li><strong>Hardware Scope:</strong> The target device model name (e.g., iPhone 14 Pro, MacBook Pro) requiring professional diagnostics.</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h2 className="text-[20px] sm:text-[24px] font-semibold tracking-[-0.015em] text-[#1d1d1f]">2. How We Use Your Information</h2>
            <p className="text-black">We process and utilize the details compiled through our web interface strictly to:</p>
            <ul className="list-none sm:list-disc list-inside space-y-2 text-black pt-1">
              <li>Coordinate driving logistics, field service booking slots, or workshop queues.</li>
              <li>Relay structural quote specifications and warranty status updates via direct communication channels.</li>
              <li>Optimize our internal marketing ad campaigns (e.g., tracking submission conversions on Google Ads or Facebook Pixels).</li>
              <li>Maintain high security standards and prevent automated spam submissions.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h2 className="text-[20px] sm:text-[24px] font-semibold tracking-[-0.015em] text-[#1d1d1f]">3. Third-Party Tracking & Advertising Cookies</h2>
            <p className="text-black">
              ChipsetFix operates standard analytics trackers. This interface may deploy standard browser cookies and code scripts backed by professional advertising networks (such as Google Ads, Meta/Facebook Ads, and third-party programmatic systems). These entities compile pseudo-anonymous structural datasets tracking user behavior metrics, link click-through metrics, and general location coordinates to optimize promotional material deliveries. You can disable cookie preferences inside your native browser preference pane at any moment.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h2 className="text-[20px] sm:text-[24px] font-semibold tracking-[-0.015em] text-[#1d1d1f]">4. Complete Data Privacy Isolation</h2>
            <p className="text-black">
              We strictly maintain a zero-access posture towards your personal software data stored on your hard drive systems. All physical operations—including display glass lamination, IC micro-soldering, and backlight repair procedures—are completely isolated from your hardware’s flash memory storage modules. Your personal files remain completely safe, enclosed, and proprietary to you throughout the physical workshop cycle.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-3">
            <h2 className="text-[20px] sm:text-[24px] font-semibold tracking-[-0.015em] text-[#1d1d1f]">5. Consent and Data Erasure</h2>
            <p className="text-black">
              By filling out our booking interface and clicking our submission elements, you hereby give explicit consent to our processing logic guidelines. If you wish to request the structural elimination or manual erasure of your submitted log details from our digital support mail drop.
            </p>
          </div>

        </div>

        {/* FOOTER NOTE */}
        <div className="border-t border-black/[0.05] pt-10 text-center">
          <p className="text-[12px] text-amber-600 select-none">
            Copyright © 2026 ChipsetFix. All rights reserved.
          </p>
        </div>

      </main>
    </div>
  );
}