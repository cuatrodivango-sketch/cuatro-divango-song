"use client";

/* eslint-disable @next/next/no-img-element */
import { useCallback, useEffect, useRef, useState } from "react";
import { examplesSection } from "@/lib/content";

export default function Examples() {
  const trackRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(1);
  const [playing, setPlaying] = useState<number | null>(null);

  const measure = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const total = Math.max(1, Math.ceil(el.scrollWidth / el.clientWidth));
    setPages(total);
    setPage(Math.min(total - 1, Math.round(el.scrollLeft / el.clientWidth)));
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const go = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth, behavior: "smooth" });
  };

  const goTo = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
  };

  const togglePlay = (i: number, src: string) => {
    // Mock player: sin audio real todavía. Si el item tiene audioSrc, reproduce de verdad.
    if (playing === i) {
      audioRef.current?.pause();
      setPlaying(null);
      return;
    }
    setPlaying(i);
    if (src) {
      if (!audioRef.current) audioRef.current = new Audio();
      audioRef.current.src = src;
      void audioRef.current.play().catch(() => setPlaying(null));
      audioRef.current.onended = () => setPlaying(null);
    }
  };

  return (
    <section id="ejemplos" className="bg-white py-16 sm:py-20">
      <div className="shell">
        <h2 className="section-title">{examplesSection.title}</h2>
        <span className="title-underline" aria-hidden="true" />

        <div className="relative mt-12">
          {/* Arrows (desktop) */}
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Ver ejemplos anteriores"
            className="absolute -left-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand-navy shadow-card hover:shadow-card-hover lg:flex"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 6l-6 6 6 6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Ver más ejemplos"
            className="absolute -right-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand-navy shadow-card hover:shadow-card-hover lg:flex"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>

          {/* Track */}
          <div
            ref={trackRef}
            onScroll={measure}
            className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-2 sm:mx-0 sm:px-0"
          >
            {examplesSection.items.map((item, i) => (
              <article
                key={item.name}
                className="card card-lift group relative w-[72%] shrink-0 snap-start overflow-hidden xs:w-[46%] sm:w-[31%] lg:w-[calc(16.666%-14px)] lg:min-w-[170px]"
              >
                <div className="relative aspect-[4/5]">
                  <img
                    src={item.image}
                    alt={`Portada de la canción: ${item.name}`}
                    width={400}
                    height={500}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => togglePlay(i, item.audioSrc)}
                    aria-label={
                      playing === i
                        ? `Pausar canción de ${item.name}`
                        : `Escuchar canción de ${item.name}`
                    }
                    aria-pressed={playing === i}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-sm transition-all duration-300 ease-premium group-hover:scale-110 group-hover:bg-brand-red/90 ${
                        playing === i ? "animate-pulse bg-brand-red/90" : ""
                      }`}
                    >
                      {playing === i ? (
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                          <path d="M4 2h3v12H4zM9 2h3v12H9z" />
                        </svg>
                      ) : (
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                          <path d="M4.5 2.6a1 1 0 0 1 1.53-.85l7.5 4.9a1 1 0 0 1 0 1.7l-7.5 4.9a1 1 0 0 1-1.53-.85V2.6z" />
                        </svg>
                      )}
                    </span>
                  </button>
                </div>
                <div className="px-3 py-3 text-center">
                  <h3 className="text-sm font-extrabold text-brand-navy">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-[11px] leading-snug text-brand-body">
                    {item.caption}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Dots */}
          <div className="mt-4 flex justify-center gap-2">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Ir a la página ${i + 1} de ejemplos`}
                aria-current={page === i}
                className={`h-2 rounded-full transition-all ${
                  page === i ? "w-5 bg-brand-red" : "w-2 bg-brand-line"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
