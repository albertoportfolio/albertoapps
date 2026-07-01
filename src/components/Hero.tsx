import { motion } from "framer-motion";
import { site } from "../data/site";
import { Iphone } from "./magicui/iphone";

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
  { value: "Flutter", label: "Apps iOS y Android" },
  { value: "React", label: "Webs · TypeScript" },
  { value: "Java", label: "API con Spring" },
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

      <div className="container hero-grid">
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
            Creo apps móviles y webs especializadas en{" "}
            <strong>seguimiento de pacientes</strong> y{" "}
            <strong>fidelización</strong> para clínicas y centros de salud. Diseño
            cuidado, rendimiento y entrega profesional, de la idea a producción.
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

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, y: 40, rotate: -3 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="hero-phone"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Iphone>
              <div className="phone-screen">
                <div className="ps-statusbar">
                  <span>9:41</span>
                  <span className="ps-statusbar-icons">
                    <i />
                    <i />
                    <i className="ps-battery" />
                  </span>
                </div>

                <div className="ps-header">
                  <div>
                    <span className="ps-hello">Hola, María</span>
                    <strong className="ps-title">Clínica Vital</strong>
                  </div>
                  <span className="ps-avatar">M</span>
                </div>

                <span className="ps-section">Seguimiento</span>
                <div className="ps-grid">
                  <div className="ps-tile ps-tile-wide ps-tile-accent">
                    <span className="ps-tile-label">Próxima cita</span>
                    <strong className="ps-tile-value">12 Jun · 10:30</strong>
                    <span className="ps-tile-sub">Dra. Ruiz · Revisión general</span>
                  </div>
                  <div className="ps-tile">
                    <span className="ps-tile-label">Tensión</span>
                    <strong className="ps-tile-value">120/80</strong>
                    <span className="ps-tile-sub">mmHg · Hoy</span>
                  </div>
                  <div className="ps-tile">
                    <span className="ps-tile-label">Tratamiento</span>
                    <strong className="ps-tile-value">8/10</strong>
                    <span className="ps-tile-sub">Adherencia 80%</span>
                  </div>
                  <div className="ps-tile ps-tile-wide">
                    <span className="ps-tile-label">Última analítica</span>
                    <strong className="ps-tile-value">Resultados normales</strong>
                    <span className="ps-tile-sub">3 Jun</span>
                  </div>
                </div>

                <span className="ps-section">Accesos rápidos</span>
                <div className="ps-actions">
                  <div className="ps-action ps-action-primary">
                    <span className="ps-action-ico" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <path d="M16 2v4M8 2v4M3 10h18M12 14v4M10 16h4" />
                      </svg>
                    </span>
                    Pedir cita
                  </div>
                  <div className="ps-action">
                    <span className="ps-action-ico" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <path d="M14 2v6h6M8 13h8M8 17h6" />
                      </svg>
                    </span>
                    Consultar historial
                  </div>
                </div>

                <div className="ps-nav">
                  <span className="ps-nav-item active" />
                  <span className="ps-nav-item" />
                  <span className="ps-nav-item" />
                  <span className="ps-nav-item" />
                </div>
              </div>
            </Iphone>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
