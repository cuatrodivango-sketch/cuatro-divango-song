"use client";

import { useMemo, useState } from "react";
import { formSection, checkout } from "@/lib/content";

type FormData = {
  recipient: string;
  occasion: string;
  story: string;
  imagine: string;
  voice: string;
  duration: string;
  mentionsNames: string; // "Sí" | "No"
  namesText: string;
  surprise: string; // "Sí" | "No"
  phrases: string;
  clientName: string;
  clientEmail: string;
  clientWhatsapp: string;
};

const EMPTY: FormData = {
  recipient: "",
  occasion: "",
  story: "",
  imagine: "",
  voice: "",
  duration: "",
  mentionsNames: "",
  namesText: "",
  surprise: "",
  phrases: "",
  clientName: "",
  clientEmail: "",
  clientWhatsapp: "",
};

const TOTAL_STEPS = 8;

const inputCls =
  "w-full rounded-xl border border-brand-line bg-white px-4 py-3 text-sm text-brand-ink transition-colors duration-200 placeholder:text-brand-muted focus:border-brand-red focus:outline-none min-h-[48px]";
const labelCls = "mb-1.5 block text-sm font-bold text-brand-navy";
const errCls = "mt-1 text-xs font-semibold text-brand-red";

/* Grupo de opciones tipo pill — misma estética del formulario (radios accesibles) */
function OptionGroup({
  legend,
  name,
  options,
  value,
  onChange,
  error,
}: {
  legend: string;
  name: string;
  options: readonly string[];
  value: string;
  onChange: (v: string) => void;
  error?: string;
}) {
  return (
    <fieldset>
      <legend className={labelCls}>{legend}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const selected = value === opt;
          return (
            <label
              key={opt}
              className={`cursor-pointer select-none rounded-xl border px-4 py-2.5 text-sm font-semibold transition-all duration-200 ease-premium min-h-[44px] inline-flex items-center ${
                selected
                  ? "border-brand-red bg-brand-red text-white shadow-cta"
                  : "border-brand-line bg-white text-brand-navy hover:border-brand-navy/30"
              }`}
            >
              <input
                type="radio"
                name={name}
                value={opt}
                checked={selected}
                onChange={() => onChange(opt)}
                className="sr-only"
              />
              {opt}
            </label>
          );
        })}
      </div>
      {error && <p className={errCls}>{error}</p>}
    </fieldset>
  );
}

export default function SongForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [sent, setSent] = useState(false);

  const setField = (k: keyof FormData, v: string) => {
    setData((d) => ({ ...d, [k]: v }));
    setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const set = (k: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setField(k, e.target.value);

  /* Pasos: pocos campos visibles a la vez, sensación limpia
     0 → para quién / ocasión
     1 → la historia
     2 → cómo imaginas tu canción
     3 → voz + duración
     4 → nombres (condicional) + sorpresa (mensaje)
     5 → frases especiales (opcional)
     6 → contacto
     7 → resumen y envío */
  const stepFields: (keyof FormData)[][] = useMemo(
    () => [
      ["recipient", "occasion"],
      ["story"],
      ["imagine"],
      ["voice", "duration"],
      ["mentionsNames", "namesText", "surprise"],
      ["phrases"],
      ["clientName", "clientEmail", "clientWhatsapp"],
      [],
    ],
    []
  );

  const validate = (): boolean => {
    const fields = stepFields[step];
    const next: typeof errors = {};
    for (const f of fields) {
      if (f === "phrases") continue; // opcional
      if (f === "namesText" && data.mentionsNames !== "Sí") continue; // solo si respondió Sí
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
    const resumen: [string, string][] = [
      ["Para quién es", data.recipient],
      ["Ocasión", data.occasion],
      ["Historia", data.story],
      ["Cómo imagina la canción", data.imagine],
      ["Duración", data.duration],
      ["Tipo de voz", data.voice],
      [
        "¿Llevará nombres?",
        data.mentionsNames === "Sí" ? `Sí — ${data.namesText}` : "No",
      ],
      ["¿Será sorpresa?", data.surprise],
      ["Correo", data.clientEmail],
      ["WhatsApp", data.clientWhatsapp],
    ];

    return (
      <div className="card px-5 py-7 sm:px-8 sm:py-9">
        {/* Encabezado */}
        <h3 className="text-2xl font-extrabold tracking-tight text-brand-navy">
          {checkout.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-brand-body">
          {checkout.subtitle}
        </p>

        {/* Resumen elegante de respuestas */}
        <dl className="mt-6 divide-y divide-brand-line/70 rounded-xl border border-brand-line/70 bg-brand-paper/60">
          {resumen.map(([k, v]) => (
            <div key={k} className="flex flex-col gap-0.5 px-4 py-3 sm:flex-row sm:justify-between sm:gap-6">
              <dt className="shrink-0 text-xs font-bold uppercase tracking-wide text-brand-muted sm:w-44 sm:pt-0.5">
                {k}
              </dt>
              <dd className="text-sm leading-relaxed text-brand-ink sm:flex-1 sm:text-right">
                {v || "—"}
              </dd>
            </div>
          ))}
        </dl>

        {/* Tarjeta premium: Total */}
        <div className="mt-6 overflow-hidden rounded-card border border-brand-line/60 bg-brand-navy-deep px-6 py-7 text-center shadow-card">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">
            {checkout.totalTitle}
          </p>
          <p className="mt-2 font-display text-5xl font-extrabold tracking-tight text-white">
            {checkout.totalAmount}
          </p>
          <p className="mt-3 text-sm text-white/70">
            {checkout.totalNotes.join(" ")}
          </p>
        </div>

        {/* Botón principal: Mercado Pago */}
        <a
          href={checkout.payUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-5 w-full text-base"
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="2" y="5" width="20" height="14" rx="3" />
            <path d="M2 10h20" />
          </svg>
          {checkout.payButton}
        </a>

        {/* Separador */}
        <hr className="my-7 border-brand-line" />

        {/* Bloque de confirmación por WhatsApp */}
        <h4 className="text-lg font-extrabold tracking-tight text-brand-navy">
          {checkout.confirmTitle}
        </h4>
        <p className="mt-2 text-sm leading-relaxed text-brand-body">
          {checkout.confirmText}
        </p>
        <a
          href={checkout.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn mt-4 w-full bg-[#25D366] text-base text-white shadow-[0_2px_6px_rgba(37,211,102,0.25),0_10px_26px_rgba(37,211,102,0.30)] hover:bg-[#1EBE5A] hover:shadow-[0_4px_10px_rgba(37,211,102,0.28),0_16px_38px_rgba(37,211,102,0.38)] hover:-translate-y-0.5"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.7.8-.8 1-.1.2-.3.2-.6.1a6.8 6.8 0 0 1-2-1.2 7.5 7.5 0 0 1-1.4-1.7c-.1-.3 0-.4.1-.6l.4-.5c.1-.2.2-.3.3-.5v-.5c0-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s1 2.5 1.1 2.7c.1.2 1.9 3 4.7 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.6-.3z" />
          </svg>
          {checkout.whatsappButton}
        </a>

        {/* Salida de emergencia discreta: corregir respuestas */}
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mx-auto mt-5 block text-xs font-semibold text-brand-muted underline-offset-2 transition-colors hover:text-brand-navy hover:underline"
        >
          ← Editar mis respuestas
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
            <label htmlFor="imagine" className={labelCls}>
              {formSection.imagineTitle}
            </label>
            <textarea
              id="imagine"
              rows={6}
              value={data.imagine}
              onChange={set("imagine")}
              placeholder={formSection.imaginePlaceholder}
              className={inputCls}
              aria-invalid={!!errors.imagine}
            />
            {errors.imagine && <p className={errCls}>{errors.imagine}</p>}
          </div>
        )}

        {step === 3 && (
          <>
            <OptionGroup
              legend={formSection.voiceTitle}
              name="voice"
              options={formSection.voiceOptions}
              value={data.voice}
              onChange={(v) => setField("voice", v)}
              error={errors.voice}
            />
            <OptionGroup
              legend={formSection.durationTitle}
              name="duration"
              options={formSection.durationOptions}
              value={data.duration}
              onChange={(v) => setField("duration", v)}
              error={errors.duration}
            />
          </>
        )}

        {step === 4 && (
          <>
            <OptionGroup
              legend={formSection.namesTitle}
              name="mentionsNames"
              options={formSection.yesNo}
              value={data.mentionsNames}
              onChange={(v) => setField("mentionsNames", v)}
              error={errors.mentionsNames}
            />

            {data.mentionsNames === "Sí" && (
              <div>
                <label htmlFor="namesText" className={labelCls}>
                  {formSection.namesFollowUp}
                </label>
                <input
                  id="namesText"
                  type="text"
                  value={data.namesText}
                  onChange={set("namesText")}
                  placeholder="Ej. María, Los gemelos, Don Chuy…"
                  className={inputCls}
                  aria-invalid={!!errors.namesText}
                />
                {errors.namesText && <p className={errCls}>{errors.namesText}</p>}
              </div>
            )}

            <OptionGroup
              legend={formSection.surpriseTitle}
              name="surprise"
              options={formSection.yesNo}
              value={data.surprise}
              onChange={(v) => setField("surprise", v)}
              error={errors.surprise}
            />

            {data.surprise === "Sí" && (
              <p className="rounded-xl bg-brand-paper px-4 py-3 text-sm leading-relaxed text-brand-body">
                {formSection.surpriseInfo}
              </p>
            )}
          </>
        )}

        {step === 5 && (
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

        {step === 6 && (
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

        {step === 7 && (
          <div className="space-y-3">
            <h3 className="text-base font-extrabold text-brand-navy">
              Revisa tu pedido
            </h3>
            <dl className="space-y-2 rounded-xl bg-brand-paper p-4 text-sm">
              {[
                ["Para", data.recipient],
                ["Ocasión", data.occasion],
                ["Voz", data.voice],
                ["Duración", data.duration],
                [
                  "Nombres",
                  data.mentionsNames === "Sí" ? data.namesText : "No menciona nombres",
                ],
                ["Sorpresa", data.surprise],
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
