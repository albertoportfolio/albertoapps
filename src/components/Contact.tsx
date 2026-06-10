import { useState } from "react";
import { motion } from "framer-motion";
import { site } from "../data/site";

type Status = "idle" | "sending" | "ok" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^\+?[0-9][0-9\s.-]{7,14}$/;

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<{ email?: string; phone?: string; message?: string }>({});

  const validate = (form: HTMLFormElement) => {
    const data = new FormData(form);
    const next: typeof errors = {};
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!email) next.email = "El correo es obligatorio.";
    else if (!EMAIL_RE.test(email)) next.email = "Introduce un correo válido.";

    if (!phone) next.phone = "El móvil es obligatorio.";
    else if (!PHONE_RE.test(phone)) next.phone = "Introduce un móvil válido (ej. 612 345 678).";

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
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="+34 612 345 678"
                autoComplete="tel"
                className={errors.phone ? "invalid" : ""}
                aria-invalid={!!errors.phone}
              />
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
