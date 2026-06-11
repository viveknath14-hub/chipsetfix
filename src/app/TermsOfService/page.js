"use client";
import Link from "next/link";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#f5f5f7] text-black antialiased font-sans selection:bg-amber-200">
      
      {/* HEADER / NAVBAR BACK BUTTON */}
      <header className="w-full border-b border-black/[0.05] bg-[#f5f5f7]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto flex h-[64px] items-center justify-between px-6">
          <Link href="/" className="text-[14px] text-amber-600 hover:underline flex items-center gap-1">
            ← Back to Home
          </Link>
          <span className="text-[16px] font-semibold tracking-tight text-black">
            ChipsetFix<span className="text-amber-600">.</span>
          </span>
        </div>
      </header>

      {/* MAIN CONTENT CONTAINER */}
      <main className="max-w-3xl mx-auto px-6 py-12 sm:py-20 space-y-12">
        
        {/* Page Title Section: Mobile pe center, Desktop pe left */}
        <div className="space-y-3 text-center sm:text-left border-b border-black/10 pb-10">
          <p className="text-[12px] font-semibold tracking-[0.08em] uppercase text-amber-600">LEGAL AGREEMENT</p>
          <h1 className="text-[32px] sm:text-[44px] font-semibold tracking-[-0.022em] text-black leading-tight">
            Terms of Service
          </h1>
          <p className="text-[13px] text-black font-mono">Last Updated: June 2026</p>
        </div>

        {/* Terms Body: Pure Black Text, Mobile pe center, Desktop pe left */}
        <div className="space-y-10 text-[15px] sm:text-[16px] text-black leading-[1.6] font-normal text-center sm:text-left">
          
          <p>
            Welcome to <strong>ChipsetFix</strong>. These Terms of Service govern your use of our website and our professional device repair services. By accessing our platform or submitting a repair request through our integrated WhatsApp system, you agree to comply with and be bound by the following terms and conditions.
          </p>

          {/* Section 1 */}
          <div className="space-y-3">
            <h2 className="text-[20px] sm:text-[24px] font-semibold tracking-[-0.015em] text-black">1. Service Requests & WhatsApp Routing</h2>
            <p>
              Our website provides a digital interface to streamline booking queues for hardware diagnostics. When you click our submission tools, you are directly transmitting your hardware specifications, name, and contact details to our official WhatsApp channel to lock in a time slot. This request does not constitute a final binding financial contract until our workshop evaluates your device physically.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h2 className="text-[20px] sm:text-[24px] font-semibold tracking-[-0.015em] text-black">2. Hardware Diagnostic & Repair Estimates</h2>
            <p>
              All cost estimates, pricing quotes, and turnaround time frames displayed on our page or shared via initial chat communications are preliminary calculations based on standard conditions. Final accurate invoices are determined only after our master technicians inspect your hardware layer setup inside our physical Rohini workshop.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h2 className="text-[20px] sm:text-[24px] font-semibold tracking-[-0.015em] text-black">3. Customer Data & Backup Responsibility</h2>
            <p>
              While ChipsetFix utilizes advanced calibration and micro-soldering processes designed to isolate and protect your storage modules (such as outer glass layer replacements that leave original displays intact), hardware diagnostics inherently carry unforeseen risks. It is the absolute responsibility of the customer to back up all personal files, operating systems, and flash memory data before surrendering any device to our workshop. ChipsetFix holds no liability for data drops or software sync errors during physical restoration cycles.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h2 className="text-[20px] sm:text-[24px] font-semibold tracking-[-0.015em] text-black">4. Parts Used & Warranty Protection</h2>
            <p>
              We pride ourselves on using premium, highly calibrated replacement parts for smartphone, laptop, camera, and television systems. Any specific warranty coverage terms (e.g., component replacement window spans) will be clearly indicated on your final physical service receipt and applies exclusively to the specific repair service conducted by our team.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-3">
            <h2 className="text-[20px] sm:text-[24px] font-semibold tracking-[-0.015em] text-black">5. Amendments to Terms</h2>
            <p>
              ChipsetFix reserves the right to adjust, modify, or update these structural legal provisions at any point without prior broadcasts. Continued interaction with our digital booking forms or shop workflows constitutes complete acknowledgement of our active terms.
            </p>
          </div>

        </div>

        {/* FOOTER NOTE */}
        <div className="border-t border-black/10 pt-10 text-center">
          <p className="text-[12px] text-amber-600 font-medium select-none">
            Copyright © 2026 ChipsetFix. All rights reserved.
          </p>
        </div>

      </main>
    </div>
  );
}