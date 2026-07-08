import { occasionsSection } from "@/lib/content";

export default function Occasions() {
  return (
    <section className="bg-brand-paper py-14 sm:py-16">
      <div className="shell">
        <h2 className="section-title">{occasionsSection.title}</h2>
        <span className="title-underline" aria-hidden="true" />

        <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-6">
          {occasionsSection.items.map((item) => (
            <li
              key={item.title}
              className="card flex flex-col items-center px-4 py-6 text-center transition-shadow hover:shadow-card-hover"
            >
              <span className="text-3xl" aria-hidden="true">
                {item.emoji}
              </span>
              <h3 className="mt-3 text-sm font-extrabold leading-snug text-brand-navy">
                {item.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-brand-body">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
