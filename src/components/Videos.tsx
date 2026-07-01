import { motion } from "framer-motion";
import { videos, site } from "../data/site";

export default function Videos() {
  return (
    <section id="videos" className="section">
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-kicker">Vídeos</span>
          <h2 className="section-title">Mis proyectos en acción</h2>
          <p className="section-sub">
            Demos en vídeo de algunos proyectos. Encuentra más en mi canal de
            YouTube.
          </p>
        </motion.div>

        <div className="videos-grid">
          {videos.map((v, i) => (
            <motion.article
              className="card video-card"
              key={`${v.youtubeId}-${i}`}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
            >
              <div className="video-frame">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${v.youtubeId}`}
                  title={v.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <h3>{v.title}</h3>
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
            href={site.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            Ver mi canal de YouTube →
          </a>
        </motion.div>
      </div>
    </section>
  );
}