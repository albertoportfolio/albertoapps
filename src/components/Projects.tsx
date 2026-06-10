import { motion } from "framer-motion";
import { projects, site } from "../data/site";

export default function Projects() {
  return (
    <section id="proyectos" className="section">
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-kicker">Portfolio</span>
          <h2 className="section-title">Proyectos destacados</h2>
          <p className="section-sub">
            Una selección de apps y webs que he desarrollado. Puedes ver el código
            en mi GitHub.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <motion.article
              className="card project-card"
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <div className="project-top">
                <span className="project-folder" aria-hidden>
                  📂
                </span>
                <div className="project-links">
                  <a href={p.repo} target="_blank" rel="noopener noreferrer">
                    Código ↗
                  </a>
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noopener noreferrer">
                      Demo ↗
                    </a>
                  )}
                </div>
              </div>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="tags">
                {p.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="projects-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            Ver más en GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
