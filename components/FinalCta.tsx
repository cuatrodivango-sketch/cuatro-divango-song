/* eslint-disable @next/next/no-img-element */
import { finalCta } from "@/lib/content";

export default function FinalCta() {
  return (
    <section className="bg-white pt-6">
      <div className="shell">
        <div className="relative overflow-hidden rounded-card bg-brand-navy-deep">
          <div className="grid items-center gap-6 md:grid-cols-[1.2fr_1fr]">
            <div className="relative z-10 px-7 py-11 sm:px-11 sm:py-14">
              <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl">
                {finalCta.title.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h2>
              <a href="#formulario" className="btn-primary mt-6">
                {finalCta.button}
              </a>
            </div>
            <div className="relative h-48 md:h-full md:min-h-[240px]">
              <img
                src={finalCta.image}
                alt={finalCta.imageAlt}
                width={900}
                height={360}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-r from-brand-navy-deep via-brand-navy-deep/40 to-transparent md:via-brand-navy-deep/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
