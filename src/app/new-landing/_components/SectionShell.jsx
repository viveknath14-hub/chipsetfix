export default function SectionShell({ eyebrow, title, description, children, className = "" }) {
  return (
    <section className={`px-4 py-16 sm:px-6 lg:px-8 lg:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title || description) && (
          <div className="mx-auto mb-12 max-w-3xl text-center">
            {eyebrow && <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">{eyebrow}</p>}
            {title && <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-5xl">{title}</h2>}
            {description && <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">{description}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
