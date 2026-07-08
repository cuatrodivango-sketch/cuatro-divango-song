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
    const total = Math.max(1, Math.ceil((el.scrollWidth - 8) / el.clientWidth));
    setPages(total);
    setPage(Math.min(total - 1, Math.round(el.scrollLeft / el.clientWidth)));
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const goTo = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
  };

  const togglePlay = (i: number, src: string) => {
    // Reproductor mock: las canciones se conectarán en una versión posterior.
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
          {/* Pista: carrusel táctil en móvil, fila de 4 alineadas en escritorio */}
          <div
            ref={trackRef}
            onScroll={measure}
            className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-5 pb-2 sm:mx-0 sm:px-0 lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible"
          >
            {examplesSection.items.map((item, i) => (
              <article
                key={item.name}
                className="group relative w-[74%] shrink-0 snap-start overflow-hidden rounded-card border border-brand-line/50 bg-white shadow-card ring-1 ring-transparent transition-all duration-300 ease-premium hover:-translate-y-1.5 hover:shadow-card-hover hover:ring-brand-red/15 xs:w-[46%] sm:w-[31%] lg:w-auto"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={item.image}
                    alt={`Portada de la canción: ${item.name}`}
                    width={800}
                    height={1000}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 ease-premium group-hover:scale-[1.04]"
                  />
                  {/* Degradado inferior sutil para integrar la tarjeta */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-brand-navy-deep/35 to-transparent"
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
                      className={`flex h-14 w-14 items-center justify-center rounded-full text-white shadow-cta backdrop-blur-sm transition-all duration-300 ease-premium group-hover:scale-110 ${
                        playing === i
                          ? "animate-pulse bg-brand-red/95"
                          : "bg-brand-navy-deep/60 group-hover:bg-brand-red/90"
                      }`}
                    >
                      {playing === i ? (
                        <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                          <path d="M4 2h3v12H4zM9 2h3v12H9z" />
                        </svg>
                      ) : (
                        <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                          <path d="M4.5 2.6a1 1 0 0 1 1.53-.85l7.5 4.9a1 1 0 0 1 0 1.7l-7.5 4.9a1 1 0 0 1-1.53-.85V2.6z" />
                        </svg>
                      )}
                    </span>
                  </button>
                </div>
                <div className="px-4 py-4 text-center">
                  <h3 className="text-[15px] font-extrabold tracking-tight text-brand-navy">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-xs leading-snug text-brand-body">
                    {item.caption}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Puntos de paginación: solo en móvil, cuando hay más de una página */}
          {pages > 1 && (
            <div className="mt-5 flex justify-center gap-2 lg:hidden">
              {Array.from({ length: pages }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Ir a la página ${i + 1} de ejemplos`}
                  aria-current={page === i}
                  className={`h-2 rounded-full transition-all duration-300 ease-premium ${
                    page === i ? "w-6 bg-brand-red" : "w-2.5 bg-brand-line"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
