import { howSection } from "@/lib/content";

function StepIcon({ name }: { name: string }) {
  const common = {
    width: 30,
    height: 30,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  if (name === "chat")
    return (
      <svg {...common}>
        <path d="M21 12a8 8 0 0 1-8 8H5l-2 2V12a8 8 0 0 1 8-8h2a8 8 0 0 1 8 8z" />
        <path d="M8.5 11h.01M12 11h.01M15.5 11h.01" strokeWidth="2.6" />
      </svg>
    );
  if (name === "note")
    return (
      <svg {...common}>
        <path d="M9 18V5l11-2v13" />
        <circle cx="6.5" cy="18" r="2.5" />
        <circle cx="17.5" cy="16" r="2.5" />
      </svg>
    );
  return (
    <svg {...common}>
      <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
      <rect x="3" y="14" width="4.5" height="7" rx="2" />
      <rect x="16.5" y="14" width="4.5" height="7" rx="2" />
    </svg>
  );
}

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-white py-16 sm:py-20">
      <div className="shell">
        <h2 className="section-title">{howSection.title}</h2>
        <span className="title-underline" aria-hidden="true" />

        <ol className="relative mt-12 grid gap-10 sm:grid-cols-3 sm:gap-6">
          {/* Dashed connector (desktop) */}
          <span
            aria-hidden="true"
            className="absolute left-[16.7%] right-[16.7%] top-[38px] hidden border-t-2 border-dashed border-brand-line sm:block"
          />
          {howSection.steps.map((step, i) => (
            <li key={step.title} className="relative flex flex-col items-center text-center">
              <span className="relative z-10 flex h-[76px] w-[76px] items-center justify-center rounded-full border border-brand-line bg-white text-brand-navy shadow-card">
                <StepIcon name={step.icon} />
                <span className="absolute -left-1.5 -top-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-brand-red text-xs font-extrabold text-white">
                  {i + 1}
                </span>
              </span>
              <h3 className="mt-5 text-base font-extrabold leading-snug text-brand-navy">
                {step.title}
              </h3>
              <p className="mt-2 max-w-[240px] text-sm leading-relaxed text-brand-body">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
