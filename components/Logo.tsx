export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <a
      href="#inicio"
      className="inline-flex items-center gap-2"
      aria-label="Cuatro Divango — ir al inicio"
    >
      <svg
        width="34"
        height="28"
        viewBox="0 0 34 28"
        aria-hidden="true"
        className="shrink-0"
      >
        <path d="M10 0 L18 0 L8 28 L0 28 Z" fill="#D8121F" />
        <path
          d="M24 0 L32 0 L22 28 L14 28 Z"
          fill={dark ? "#FFFFFF" : "#101C3A"}
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={`text-[15px] font-extrabold tracking-wide ${
            dark ? "text-white" : "text-brand-navy"
          }`}
        >
          CUATRO
        </span>
        <span className="text-[15px] font-extrabold tracking-wide text-brand-red">
          DIVANGO
        </span>
      </span>
    </a>
  );
}
