"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { nav } from "@/lib/content";

function NoteIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M6 13a2 2 0 1 1-1.5-1.94V4.2a1 1 0 0 1 .76-.97l6-1.5A1 1 0 0 1 12.5 2.7v7.36A2 2 0 1 1 11 8.12V4.28l-5 1.25V13z" />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#inicio");

  useEffect(() => {
    if (!open) return;
    const close = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);

  return (
    <header
      className="sticky top-0 z-50 border-b border-brand-line bg-white/95 backdrop-blur"
      style={{ height: "var(--header-h)" }}
    >
      <div className="shell flex h-full items-center justify-between gap-4">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setActive(item.href)}
              className={`relative pb-1 text-sm font-semibold transition-colors ${
                active === item.href
                  ? "text-brand-navy after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:rounded-full after:bg-brand-red"
                  : "text-brand-body hover:text-brand-navy"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href="#formulario" className="btn-primary">
            <NoteIcon />
            Crear mi canción
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-brand-navy lg:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
            {open ? (
              <>
                <path d="M6 6l12 12" />
                <path d="M18 6L6 18" />
              </>
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <div
          id="menu-movil"
          className="absolute inset-x-0 top-full border-b border-brand-line bg-white shadow-card lg:hidden"
        >
          <nav className="shell flex flex-col py-3" aria-label="Principal móvil">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-base font-semibold text-brand-navy hover:bg-brand-paper"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#formulario"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 w-full"
            >
              <NoteIcon />
              Crear mi canción
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
