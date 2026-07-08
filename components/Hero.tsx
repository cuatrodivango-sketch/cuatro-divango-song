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
    <section id="inicio" className="overflow-hidden bg-white">
      <div className="shell grid items-center gap-10 py-10 sm:py-14 lg:grid-cols-2 lg:gap-8 lg:py-16">
        {/* Copy */}
        <div className="order-1">
          <h1 className="text-4xl font-extrabold leading-[1.06] text-brand-navy sm:text-5xl lg:text-[3.4rem]">
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

          {/* Precio — elegante, no anuncio */}
          <div className="mt-7 inline-flex items-baseline gap-3 border-l-2 border-brand-red/80 pl-4">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-muted">
              {hero.pricePrefix}
            </span>
            <span className="font-display text-3xl font-extrabold tracking-tight text-brand-navy">
              {hero.priceAmount}
            </span>
            <span className="hidden text-sm text-brand-body sm:inline">
              {hero.priceCaption}
            </span>
          </div>
          <p className="mt-1 pl-4 text-sm text-brand-body sm:hidden">
            {hero.priceCaption}
          </p>

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
          <div className="mt-9 flex items-center gap-3">
            <div className="flex -space-x-2" aria-hidden="true">
              {[1, 2, 3].map((i) => (
                <img
                  key={i}
                  src={`/images/avatar-${i}.svg`}
                  alt=""
                  width={36}
                  height={36}
                  className="h-9 w-9 rounded-full border-2 border-white object-cover shadow-soft"
                />
              ))}
            </div>
            <div className="leading-tight">
              <p className="text-sm font-bold text-brand-navy">{hero.proofTitle}</p>
              <p className="text-xs text-brand-muted">{hero.proofSub}</p>
            </div>
          </div>
        </div>

        {/* Ilustración */}
        <div className="relative order-2 mx-auto w-full max-w-[420px] lg:max-w-[470px]">
          {/* Halo de integración sutil detrás del PNG transparente */}
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-0 h-[85%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 blur-3xl"
            style={{
              background:
                "radial-gradient(closest-side, rgba(216,18,31,0.10), rgba(16,28,58,0.07) 60%, transparent)",
            }}
          />
          <img
            src={hero.image}
            alt={hero.imageAlt}
            width={1024}
            height={1476}
            className="relative z-10 h-auto w-full drop-shadow-[0_24px_48px_rgba(16,28,58,0.18)]"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
