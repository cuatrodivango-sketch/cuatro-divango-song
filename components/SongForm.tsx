"use client";

import { useMemo, useState } from "react";
import { formSection } from "@/lib/content";

type FormData = {
  recipient: string;
  occasion: string;
  name: string;
  story: string;
  style: string;
  phrases: string;
  clientName: string;
  clientEmail: string;
  clientWhatsapp: string;
};

const EMPTY: FormData = {
  recipient: "",
  occasion: "",
  name: "",
  story: "",
  style: "",
  phrases: "",
  clientName: "",
  clientEmail: "",
  clientWhatsapp: "",
};

const TOTAL_STEPS = 6;

const inputCls =
  "w-full rounded-xl border border-brand-line bg-white px-4 py-3 text-sm text-brand-ink transition-colors duration-200 placeholder:text-brand-muted focus:border-brand-red focus:outline-none min-h-[48px]";
const labelCls = "mb-1.5 block text-sm font-bold text-brand-navy";
const errCls = "mt-1 text-xs font-semibold text-brand-red";

export default function SongForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [sent, setSent] = useState(false);

  const set = (k: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setData((d) => ({ ...d, [k]: e.target.value }));
      setErrors((er) => ({ ...er, [k]: undefined }));
    };

  const stepFields: (keyof FormData)[][] = useMemo(
    () => [
      ["recipient", "occasion", "name"],
      ["story"],
      ["style"],
      ["phrases"], // opcional
      ["clientName", "clientEmail", "clientWhatsapp"],
      [], // resumen
    ],
    []
  );

  const validate = (): boolean => {
    const fields = stepFields[step];
    const next: typeof errors = {};
    for (const f of fields) {
      if (f === "phrases") continue; // opcional
      const v = data[f].trim();
      if (!v) next[f] = "Este campo es necesario para crear tu canción.";
      else if (f === "clientEmail" && !/^\S+@\S+\.\S+$/.test(v))
        next[f] = "Escribe un correo válido para enviarte tu canción.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const goNext = () => {
    if (!validate()) return;
    setStep((s) => Math.min(TOTAL_STEPS - 1, s + 1));
  };
  const goBack = () => setStep((s) => Math.max(0, s - 1));

  const submit = () => {
    // MOCK: sin backend todavía. Aquí se conectará el envío en Fase 3/4.
    setSent(true);
  };

  if (sent) {
    return (
      <div className="card flex min-h-[380px] flex-col items-center justify-center gap-4 px-6 py-10 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </span>
        <h3 className="text-xl font-extrabold text-brand-navy">
          ¡Recibimos tu historia!
        </h3>
        <p className="max-w-sm text-sm leading-relaxed text-brand-body">
          Muy pronto nos pondremos en contacto contigo para comenzar tu canción.
          La recibirás en 48–72 horas una vez confirmado tu pedido.
        </p>
        <button
          type="button"
          className="btn-outline mt-2"
          onClick={() => {
            setSent(false);
            setStep(0);
            setData(EMPTY);
          }}
        >
          Crear otra canción
        </button>
      </div>
    );
  }

  return (
    <div className="card px-5 py-6 sm:px-8 sm:py-8">
      <p className="mb-4 text-xs font-bold uppercase tracking-wide text-brand-muted">
        Paso {step + 1} de {TOTAL_STEPS}
      </p>

      <form
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          step === TOTAL_STEPS - 1 ? submit() : goNext();
        }}
        className="space-y-4"
      >
        {step === 0 && (
          <>
            <div>
              <label htmlFor="recipient" className={labelCls}>
                ¿Para quién es la canción?
              </label>
              <select
                id="recipient"
                value={data.recipient}
                onChange={set("recipient")}
                className={inputCls}
                aria-invalid={!!errors.recipient}
              >
                <option value="">Selecciona una opción</option>
                {formSection.recipients.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
              {errors.recipient && <p className={errCls}>{errors.recipient}</p>}
            </div>

            <div>
              <label htmlFor="occasion" className={labelCls}>
                ¿Cuál es la ocasión?
              </label>
              <input
                id="occasion"
                type="text"
                value={data.occasion}
                onChange={set("occasion")}
                placeholder="Ej. Cumpleaños, Aniversario, Ascenso, etc."
                className={inputCls}
                aria-invalid={!!errors.occasion}
              />
              {errors.occasion && <p className={errCls}>{errors.occasion}</p>}
            </div>

            <div>
              <label htmlFor="name" className={labelCls}>
                ¿Qué nombre debe mencionar la canción?
              </label>
              <input
                id="name"
                type="text"
                value={data.name}
                onChange={set("name")}
                placeholder="Nombre de la persona"
                className={inputCls}
                aria-invalid={!!errors.name}
              />
              {errors.name && <p className={errCls}>{errors.name}</p>}
            </div>
          </>
        )}

        {step === 1 && (
          <div>
            <label htmlFor="story" className={labelCls}>
              Cuéntanos la historia detrás de la canción
            </label>
            <textarea
              id="story"
              rows={6}
              value={data.story}
              onChange={set("story")}
              placeholder="Momentos, recuerdos, anécdotas… todo lo que quieras que la canción transmita."
              className={inputCls}
              aria-invalid={!!errors.story}
            />
            {errors.story && <p className={errCls}>{errors.story}</p>}
          </div>
        )}

        {step === 2 && (
          <div>
            <label htmlFor="style" className={labelCls}>
              ¿Qué estilo musical prefieres?
            </label>
            <select
              id="style"
              value={data.style}
              onChange={set("style")}
              className={inputCls}
              aria-invalid={!!errors.style}
            >
              <option value="">Selecciona un estilo</option>
              {formSection.styles.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            {errors.style && <p className={errCls}>{errors.style}</p>}
          </div>
        )}

        {step === 3 && (
          <div>
            <label htmlFor="phrases" className={labelCls}>
              ¿Hay frases o palabras que la canción deba incluir?{" "}
              <span className="font-normal text-brand-muted">(opcional)</span>
            </label>
            <textarea
              id="phrases"
              rows={4}
              value={data.phrases}
              onChange={set("phrases")}
              placeholder="Apodos, frases especiales, gritos de cancha…"
              className={inputCls}
            />
          </div>
        )}

        {step === 4 && (
          <>
            <div>
              <label htmlFor="clientName" className={labelCls}>
                Tu nombre
              </label>
              <input
                id="clientName"
                type="text"
                autoComplete="name"
                value={data.clientName}
                onChange={set("clientName")}
                placeholder="¿Cómo te llamas?"
                className={inputCls}
                aria-invalid={!!errors.clientName}
              />
              {errors.clientName && <p className={errCls}>{errors.clientName}</p>}
            </div>
            <div>
              <label htmlFor="clientEmail" className={labelCls}>
                Tu correo electrónico
              </label>
              <input
                id="clientEmail"
                type="email"
                autoComplete="email"
                inputMode="email"
                value={data.clientEmail}
                onChange={set("clientEmail")}
                placeholder="Para enviarte tu canción"
                className={inputCls}
                aria-invalid={!!errors.clientEmail}
              />
              {errors.clientEmail && <p className={errCls}>{errors.clientEmail}</p>}
            </div>
            <div>
              <label htmlFor="clientWhatsapp" className={labelCls}>
                Tu WhatsApp
              </label>
              <input
                id="clientWhatsapp"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                value={data.clientWhatsapp}
                onChange={set("clientWhatsapp")}
                placeholder="Para avisarte cuando esté lista"
                className={inputCls}
                aria-invalid={!!errors.clientWhatsapp}
              />
              {errors.clientWhatsapp && (
                <p className={errCls}>{errors.clientWhatsapp}</p>
              )}
            </div>
          </>
        )}

        {step === 5 && (
          <div className="space-y-3">
            <h3 className="text-base font-extrabold text-brand-navy">
              Revisa tu pedido
            </h3>
            <dl className="space-y-2 rounded-lg bg-brand-paper p-4 text-sm">
              {[
                ["Para", data.recipient],
                ["Ocasión", data.occasion],
                ["Nombre en la canción", data.name],
                ["Estilo", data.style],
                ["Contacto", `${data.clientName} · ${data.clientEmail}`],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4">
                  <dt className="font-bold text-brand-navy">{k}</dt>
                  <dd className="text-right text-brand-body">{v || "—"}</dd>
                </div>
              ))}
            </dl>
            <p className="text-xs leading-relaxed text-brand-muted">
              Tu historia: “{data.story.slice(0, 140)}
              {data.story.length > 140 ? "…" : ""}”
            </p>
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center gap-3 pt-2">
          {step > 0 && (
            <button type="button" onClick={goBack} className="btn-outline">
              ← Atrás
            </button>
          )}
          <button type="submit" className="btn-primary flex-1">
            {step === TOTAL_STEPS - 1 ? "Enviar mi historia →" : "Continuar →"}
          </button>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 pt-2" aria-hidden="true">
          {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all ${
                i === step ? "w-6 bg-brand-red" : "w-3 bg-brand-line"
              }`}
            />
          ))}
        </div>
      </form>
    </div>
  );
}
