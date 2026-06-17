"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { site } from "../data/site";

type Status = "idle" | "sending" | "ok" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const COUNTRIES = [
  { flag: "🇪🇸", dial: "+34" },
  { flag: "🇺🇸", dial: "+1" },
  { flag: "🇬🇧", dial: "+44" },
  { flag: "🇮🇪", dial: "+353" },
  { flag: "🇫🇷", dial: "+33" },
  { flag: "🇩🇪", dial: "+49" },
  { flag: "🇵🇹", dial: "+351" },
  { flag: "🇮🇹", dial: "+39" },
  { flag: "🇳🇱", dial: "+31" },
  { flag: "🇧🇪", dial: "+32" },
  { flag: "🇨🇭", dial: "+41" },
  { flag: "🇦🇹", dial: "+43" },
  { flag: "🇸🇪", dial: "+46" },
  { flag: "🇳🇴", dial: "+47" },
  { flag: "🇩🇰", dial: "+45" },
  { flag: "🇫🇮", dial: "+358" },
  { flag: "🇵🇱", dial: "+48" },
  { flag: "🇷🇴", dial: "+40" },
  { flag: "🇬🇷", dial: "+30" },
  { flag: "🇲🇽", dial: "+52" },
  { flag: "🇦🇷", dial: "+54" },
  { flag: "🇨🇴", dial: "+57" },
  { flag: "🇨🇱", dial: "+56" },
  { flag: "🇧🇷", dial: "+55" },
  { flag: "🇵🇪", dial: "+51" },
  { flag: "🇻🇪", dial: "+58" },
  { flag: "🇦🇺", dial: "+61" },
  { flag: "🇯🇵", dial: "+81" },
];

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<{ email?: string; phone?: string; message?: string }>({});
  const [phonePrefix, setPhonePrefix] = useState("+34");
  const [phoneNumber, setPhoneNumber] = useState("");

  const validate = (form: HTMLFormElement) => {
    const data = new FormData(form);
    const next: typeof errors = {};
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const localNumber = phoneNumber.trim();

    if (!email) next.email = "El correo es obligatorio.";
    else if (!EMAIL_RE.test(email)) next.email = "Introduce un correo válido.";

    if (!localNumber) next.phone = "El móvil es obligatorio.";
    else if (localNumber.replace(/\D/g, "").length < 6) next.phone = "Introduce un número válido.";

    if (!message) next.message = "Cuéntame qué app o web necesitas.";

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!validate(form)) return;

    setStatus("sending");
    try {
      const data = new FormData(form);
      const res = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("ok");
      form.reset();
      setPhoneNumber("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contacto" className="section">
      <div className="container contact-wrap">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-kicker">Contacto</span>
          <h2>¿Tienes una idea? Hablemos.</h2>
          <p>
            Cuéntame qué app o web necesitas y te responderé lo antes posible con
            una propuesta sin compromiso.
          </p>
          <div className="contact-channels">
            <a className="channel" href={`mailto:${site.email}`}>
              <span className="ico">✉️</span> {site.email}
            </a>
            <a className="channel" href={site.linkedin} target="_blank" rel="noopener noreferrer">
              <span className="ico">💼</span> LinkedIn
            </a>
            <a className="channel" href={site.github} target="_blank" rel="noopener noreferrer">
              <span className="ico">💻</span> GitHub
            </a>
          </div>
        </motion.div>

        <motion.form
          className="form"
          onSubmit={onSubmit}
          noValidate
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Configuración de FormSubmit */}
          <input type="hidden" name="_subject" value="Nuevo contacto desde albertoapps.info" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          {/* Honeypot anti-spam */}
          <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
          {/* Teléfono completo (prefijo + número) para FormSubmit */}
          <input type="hidden" name="phone" value={`${phonePrefix} ${phoneNumber}`.trim()} />

          <div className="field">
            <label htmlFor="name">Nombre</label>
            <input id="name" name="name" type="text" placeholder="Tu nombre" autoComplete="name" />
          </div>

          <div className="field-row">
            <div className="field">
              <label htmlFor="email">
                Correo <span className="req">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="tu@correo.com"
                autoComplete="email"
                className={errors.email ? "invalid" : ""}
                aria-invalid={!!errors.email}
              />
              {errors.email && <span className="field-error">{errors.email}</span>}
            </div>
            <div className="field">
              <label htmlFor="phone">
                Móvil <span className="req">*</span>
              </label>
              <div className={`phone-field${errors.phone ? " invalid" : ""}`}>
                <select
                  className="phone-prefix"
                  value={phonePrefix}
                  onChange={e => setPhonePrefix(e.target.value)}
                  aria-label="Prefijo del país"
                >
                  {COUNTRIES.map(c => (
                    <option key={c.dial} value={c.dial}>
                      {c.flag} {c.dial}
                    </option>
                  ))}
                </select>
                <input
                  id="phone"
                  type="tel"
                  className="phone-number"
                  value={phoneNumber}
                  onChange={e => setPhoneNumber(e.target.value)}
                  placeholder="612 345 678"
                  autoComplete="tel-national"
                  aria-invalid={!!errors.phone}
                />
              </div>
              {errors.phone && <span className="field-error">{errors.phone}</span>}
            </div>
          </div>

          <div className="field">
            <label htmlFor="message">
              ¿Qué app o web necesitas? <span className="req">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Describe tu idea: tipo de app, funcionalidades, plazos..."
              className={errors.message ? "invalid" : ""}
              aria-invalid={!!errors.message}
            />
            {errors.message && <span className="field-error">{errors.message}</span>}
          </div>

          <motion.button
            type="submit"
            className="btn btn-primary"
            disabled={status === "sending"}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {status === "sending" ? "Enviando..." : "Enviar mensaje →"}
          </motion.button>

          {status === "ok" && (
            <motion.p
              className="form-status ok"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
            >
              ✅ ¡Mensaje enviado! Te responderé muy pronto.
            </motion.p>
          )}
          {status === "error" && (
            <motion.p
              className="form-status error"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
            >
              ❌ No se pudo enviar. Escríbeme directamente a {site.email}.
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
}