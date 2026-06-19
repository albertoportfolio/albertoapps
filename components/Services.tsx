"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: "📱",
    title: "Apps en Flutter",
    text: "Aplicaciones para iOS y Android con un único código: rápidas, nativas y listas para publicar en las stores.",
  },
  {
    icon: "🌐",
    title: "Webs a medida",
    text: "Landing pages y aplicaciones web modernas con React, optimizadas para SEO y conversión.",
  },
  {
    icon: "🎨",
    title: "Diseño UI/UX",
    text: "Interfaces cuidadas, animaciones fluidas y experiencia de usuario pensada para tu público.",
  },
  {
    icon: "📅",
    title: "Reservas y fidelización",
    text: "Sistemas de gestión de reservas y programas de fidelización con API en Java y Spring.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="section">
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-kicker">Servicios</span>
          <h2 className="section-title">¿Qué puedo hacer por ti?</h2>
          <p className="section-sub">
            Soluciones de gestión de reservas y fidelización de clientes para
            negocios, startups y empresas.
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((s, i) => (
            <motion.article
              className="card"
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <div className="card-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}