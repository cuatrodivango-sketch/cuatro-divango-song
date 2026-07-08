/* eslint-disable @next/next/no-img-element */
import { hero } from "@/lib/content";

function NoteIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M6 13a2 2 0 1 1-1.5-1.94V4.2a1 1 0 0 1 .76-.97l6-1.5A1 1 0 0 1 12.5 2.7v7.36A2 2 0 1 1 11 8.12V4.28l-5 1.25V13z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M4 2.8a1 1 0 0 1 1.53-.85l8 5.2a1 1 0 0 1 0 1.7l-8 5.2A1 1 0 0 1 4 13.2V2.8z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="inicio" className="bg-white">
      <div className="shell grid items-center gap-8 py-10 sm:py-14 lg:grid-cols-2 lg:gap-6 lg:py-16">
        {/* Copy */}
        <div className="order-1">
          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-brand-navy sm:text-5xl lg:text-[3.4rem]">
            {hero.titleLine1}
            <br />
            {hero.titleLine2}
            <br />
            <span className="text-brand-red">{hero.titleAccent}</span>
          </h1>

          <div className="mt-6 space-y-1 text-lg text-brand-body">
            <p className="font-semibold text-brand-ink">{hero.sub1}</p>
            <p>{hero.sub2}</p>
            <p>{hero.sub3}</p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#formulario" className="btn-primary text-base">
              <NoteIcon />
              {hero.ctaPrimary}
            </a>
            <a href="#ejemplos" className="btn-outline text-base">
              <PlayIcon />
              {hero.ctaSecondary}
            </a>
          </div>

          {/* Social proof */}
          <div className="mt-8 flex items-center gap-3">
            <div className="flex -space-x-2" aria-hidden="true">
              {[1, 2, 3].map((i) => (
                <img
                  key={i}
                  src={`/images/avatar-${i}.svg`}
                  alt=""
                  width={36}
                  height={36}
                  className="h-9 w-9 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <div className="leading-tight">
              <p className="text-sm font-bold text-brand-navy">{hero.proofTitle}</p>
              <p className="text-xs text-brand-muted">{hero.proofSub}</p>
            </div>
          </div>
        </div>

        {/* Illustration */}
        <div className="order-2 mx-auto w-full max-w-[520px] lg:max-w-none">
          <img
            src={hero.image}
            alt={hero.imageAlt}
            width={640}
            height={640}
            className="h-auto w-full"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
