import { contact, heroStats, HighlightIcon, PhoneIcon, WhatsAppIcon } from "./landing-data";

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 px-4 pb-16 pt-8 text-white sm:px-6 lg:px-8 lg:pb-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.24),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.18),_transparent_38%)]" />
      <div className="mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:items-center">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100">
            <HighlightIcon className="h-4 w-4" /> 2026 board-level repair experts
          </div>
          <h1 className="mt-8 text-4xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Modern Motherboard & Chipset Repair That Saves Your Device.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            ChipsetFix provides precision diagnostics, BGA rework, microsoldering, and multi-device repair for laptops, mobiles, LED TVs, cameras, and high-value electronics.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={contact.whatsappHref} className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-400 px-6 py-4 font-bold text-slate-950 shadow-lg shadow-emerald-400/20 transition hover:bg-emerald-300">
              <WhatsAppIcon className="h-5 w-5" /> WhatsApp Diagnosis
            </a>
            <a href={contact.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-4 font-bold text-white transition hover:border-cyan-300 hover:bg-white/10">
              <PhoneIcon className="h-5 w-5" /> Call {contact.phone}
            </a>
          </div>
          <dl className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <dt className="text-2xl font-black text-white">{stat.value}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wide text-slate-400">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative mx-auto w-full max-w-xl rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-2xl shadow-cyan-950/40 backdrop-blur">
          <div className="rounded-[1.5rem] bg-slate-950 p-6">
            <div className="grid grid-cols-4 gap-3">
              {Array.from({ length: 24 }).map((_, index) => (
                <div key={index} className={`h-16 rounded-2xl border ${index % 5 === 0 ? "border-cyan-300/60 bg-cyan-300/20" : "border-slate-700 bg-slate-900"}`} />
              ))}
            </div>
            <div className="mt-6 rounded-3xl border border-emerald-300/30 bg-emerald-300/10 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-200">Live diagnostic flow</p>
              <p className="mt-2 text-2xl font-black">Power rail stable • Chipset temp normal • Ready for QC</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
