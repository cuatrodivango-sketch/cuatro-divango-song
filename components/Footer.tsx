import Logo from "./Logo";
import { footer } from "@/lib/content";

function SocialIcon({ name }: { name: string }) {
  const p = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": true,
  };
  switch (name) {
    case "instagram":
      return (
        <svg {...p}>
          <path d="M12 2.2c3.2 0 3.6 0 4.85.07 3.25.15 4.73 1.66 4.88 4.88.06 1.25.07 1.65.07 4.85s0 3.6-.07 4.85c-.15 3.22-1.63 4.73-4.88 4.88-1.25.06-1.65.07-4.85.07s-3.6 0-4.85-.07c-3.25-.15-4.73-1.66-4.88-4.88C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.85C2.42 3.93 3.9 2.42 7.15 2.27 8.4 2.2 8.8 2.2 12 2.2zm0 3.6a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zm0 2.2a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm6.4-3.7a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9z" />
        </svg>
      );
    case "tiktok":
      return (
        <svg {...p}>
          <path d="M16.6 3c.34 1.94 1.6 3.44 3.9 3.6v2.9c-1.44.14-2.76-.33-3.9-1.12v6.44c0 4.06-3.3 6.62-6.92 5.94-2.4-.45-4.4-2.45-4.84-4.85C4.16 12 7 8.9 10.7 9.1v3.04c-.5-.08-1-.03-1.47.15a2.65 2.65 0 0 0-1.7 3.03 2.68 2.68 0 0 0 5.3-.55V3h3.77z" />
        </svg>
      );
    case "youtube":
      return (
        <svg {...p}>
          <path d="M22.5 7.2a2.8 2.8 0 0 0-1.97-1.98C18.8 4.75 12 4.75 12 4.75s-6.8 0-8.53.47A2.8 2.8 0 0 0 1.5 7.2 29.3 29.3 0 0 0 1 12c0 1.63.17 3.24.5 4.8a2.8 2.8 0 0 0 1.97 1.98c1.73.47 8.53.47 8.53.47s6.8 0 8.53-.47a2.8 2.8 0 0 0 1.97-1.98c.33-1.56.5-3.17.5-4.8s-.17-3.24-.5-4.8zM9.8 15.3V8.7l5.7 3.3-5.7 3.3z" />
        </svg>
      );
    default:
      return (
        <svg {...p}>
          <path d="M13.5 21v-7h2.4l.36-2.8H13.5V9.42c0-.81.22-1.36 1.38-1.36h1.48V5.56A19.6 19.6 0 0 0 14.2 5.4c-2.14 0-3.6 1.3-3.6 3.7v2.1H8.2V14h2.4v7h2.9z" />
        </svg>
      );
  }
}

export default function Footer() {
  return (
    <footer className="mt-6 bg-brand-navy-deep py-12 text-white">
      <div className="shell grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo dark />
          <p className="mt-3 text-sm text-white/70">{footer.tagline}</p>
        </div>

        <nav aria-label="Navegación del pie">
          <h3 className="text-sm font-extrabold uppercase tracking-wide text-white/90">
            {footer.navTitle}
          </h3>
          <ul className="mt-3 space-y-2">
            {footer.navLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Más enlaces">
          <ul className="mt-0 space-y-2 sm:mt-8">
            {footer.moreLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-wide text-white/90">
            {footer.followTitle}
          </h3>
          <ul className="mt-3 flex gap-3">
            {footer.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-red"
                >
                  <SocialIcon name={s.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="shell mt-10 border-t border-white/10 pt-6">
        <p className="text-xs text-white/50">{footer.copyright}</p>
      </div>
    </footer>
  );
}
