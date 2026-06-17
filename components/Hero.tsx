"use client";

import { motion } from "framer-motion";
import { site } from "../data/site";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const stats = [
  { value: "100%", label: "Compromiso con tu proyecto" },
  { value: "Flutter", label: "Apps iOS y Android" },
  { value: "Web", label: "React · TypeScript" },
];

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <motion.div
        className="hero-blob hero-blob-1"
        animate={{ x: [0, -40, 20, 0], y: [0, 30, -20, 0], scale: [1, 1.1, 0.95, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="hero-blob hero-blob-2"
        animate={{ x: [0, 50, -30, 0], y: [0, -40, 20, 0], scale: [1, 0.9, 1.1, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container">
        <motion.div
          className="hero-content"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.span className="hero-badge" variants={item}>
            Disponible para nuevos proyectos
          </motion.span>

          <motion.h1 variants={item}>
            {site.tagline.split(" ").slice(0, 2).join(" ")}{" "}
            <span className="grad">{site.tagline.split(" ").slice(2).join(" ")}</span>
          </motion.h1>

          <motion.p variants={item}>
            Desarrollo apps móviles con <strong>Flutter</strong> y webs modernas a
            medida. Diseño cuidado, rendimiento y entrega profesional, de la idea a
            producción.
          </motion.p>

          <motion.div className="hero-actions" variants={item}>
            <motion.a
              href="#contacto"
              className="btn btn-primary"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Cuéntame tu idea →
            </motion.a>
            <motion.a
              href="#proyectos"
              className="btn btn-ghost"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Ver proyectos
            </motion.a>
          </motion.div>

          <motion.div className="hero-stats" variants={item}>
            {stats.map((s) => (
              <div className="hero-stat" key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}