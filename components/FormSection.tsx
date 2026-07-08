import { formSection } from "@/lib/content";
import SongForm from "./SongForm";

export default function FormSection() {
  return (
    <section id="formulario" className="bg-brand-paper py-14 sm:py-16">
      <div className="shell grid items-start gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-14">
        <div>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-brand-navy sm:text-4xl">
            {formSection.heading.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>

          <ul className="mt-7 space-y-3">
            {formSection.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-sm font-semibold text-brand-ink">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#D8121F"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="mt-0.5 shrink-0"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                {b}
              </li>
            ))}
          </ul>
        </div>

        <SongForm />
      </div>
    </section>
  );
}
