import SectionShell from "./SectionShell";
import { CheckIcon, contact, deviceRepairs, faqs, processSteps, reasons, services, trustBadges, PhoneIcon, WhatsAppIcon } from "./landing-data";

function Card({ icon: Icon, title, text }) {
  return (
    <article className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-xl shadow-slate-950/20 transition hover:-translate-y-1 hover:border-cyan-300/40">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/15 text-cyan-200"><Icon className="h-6 w-6" /></div>
      <h3 className="text-xl font-black text-white">{title}</h3>
      <p className="mt-3 leading-7 text-slate-300">{text}</p>
    </article>
  );
}

export function ServicesSection() {
  return (
    <SectionShell eyebrow="Services" title="Repair solutions for modern electronics" description="From no-power motherboards to chipset-level thermal failure, every job follows a structured diagnostic and quality-control workflow.">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{services.map((item) => <Card key={item.title} {...item} />)}</div>
    </SectionShell>
  );
}

export function WhyChooseUsSection() {
  return (
    <SectionShell className="bg-slate-900/70" eyebrow="Why choose us" title="Built for precision, transparency, and device safety">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {reasons.map((reason) => (
          <div key={reason} className="flex gap-3 rounded-3xl border border-white/10 bg-slate-950/60 p-5 text-slate-200">
            <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-emerald-300" /><p className="leading-7">{reason}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

export function ChipsetRepairSection() {
  return (
    <SectionShell eyebrow="Chipset repair" title="BGA rework, chipset replacement, and thermal fault recovery" description="Chipset issues often look like random shutdowns, no display, boot loops, device freezing, charging failure, or abnormal heating. We isolate the fault before recommending rework.">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="rounded-[2rem] border border-cyan-300/20 bg-cyan-300/10 p-8">
          <h3 className="text-2xl font-black text-white">What the chipset workflow includes</h3>
          <ol className="mt-6 space-y-4">
            {processSteps.map((step, index) => (
              <li key={step} className="flex gap-4 rounded-2xl bg-slate-950/70 p-4 text-slate-200">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-300 font-black text-slate-950">{index + 1}</span>
                <span className="pt-1">{step}</span>
              </li>
            ))}
          </ol>
        </div>
        <div className="space-y-4 text-slate-300">
          <p className="text-lg leading-8">Our technicians use microscope inspection, thermal profiling, measured power-rail checks, and controlled reflow/reballing methods for high-density boards.</p>
          <p className="text-lg leading-8">Every approved repair is validated with boot testing, charging/load checks, temperature monitoring, and customer-ready reporting.</p>
        </div>
      </div>
    </SectionShell>
  );
}

export function DeviceRepairSection() {
  return (
    <SectionShell className="bg-slate-900/70" eyebrow="More repairs" title="Laptop, mobile, LED TV & camera repair" description="One repair desk for your essential personal, business, and entertainment devices.">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{deviceRepairs.map((item) => <Card key={item.title} {...item} />)}</div>
    </SectionShell>
  );
}

export function TrustBadgesSection() {
  return (
    <SectionShell eyebrow="Trust badges" title="Service standards you can verify">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{trustBadges.map((item) => <Card key={item.title} {...item} />)}</div>
    </SectionShell>
  );
}

export function FAQSection() {
  return (
    <SectionShell className="bg-slate-900/70" eyebrow="FAQ" title="Motherboard repair questions, answered">
      <div className="mx-auto max-w-4xl space-y-4">{faqs.map((faq) => <details key={faq.q} className="group rounded-3xl border border-white/10 bg-slate-950/70 p-6"><summary className="cursor-pointer text-lg font-bold text-white">{faq.q}</summary><p className="mt-4 leading-8 text-slate-300">{faq.a}</p></details>)}</div>
    </SectionShell>
  );
}

export function CTASection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-gradient-to-r from-cyan-300 to-emerald-300 p-8 text-slate-950 md:p-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div><p className="font-bold uppercase tracking-[0.25em]">Ready for diagnosis?</p><h2 className="mt-3 text-3xl font-black sm:text-5xl">Send symptoms, model number, and photos now.</h2></div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a href={contact.whatsappHref} className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-4 font-black text-white"><WhatsAppIcon className="h-5 w-5" /> WhatsApp CTA</a>
            <a href={contact.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-950 px-6 py-4 font-black"><PhoneIcon className="h-5 w-5" /> Call CTA</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function StickyMobileCTA() {
  return <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-white/10 bg-slate-950/95 p-3 backdrop-blur md:hidden"><a href={contact.whatsappHref} className="rounded-full bg-emerald-400 py-3 text-center font-black text-slate-950">WhatsApp</a><a href={contact.phoneHref} className="rounded-full bg-cyan-300 py-3 text-center font-black text-slate-950">Call Now</a></div>;
}
