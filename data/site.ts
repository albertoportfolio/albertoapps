// ============================================================
// CONFIGURACIÓN DEL SITIO
// Edita este archivo para actualizar tus datos, proyectos y vídeos.
// Los valores marcados con TODO son marcadores: sustitúyelos por
// tus enlaces reales y la web se actualizará automáticamente.
// ============================================================

export const site = {
  name: "Alberto",
  brand: "AlbertoApps",
  role: "Desarrollador Freelance · Flutter & Web",
  tagline: "Convierto tu idea en una app real",
  email: "contact@albertoapps.info",
  // TODO: sustituye por tus perfiles reales
  github: "https://github.com/albertoportfolio",
  linkedin: "https://es.linkedin.com/in/albertopegomez",
  youtube: "https://www.youtube.com/@appsalberto",
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  repo: string; // URL del repositorio en GitHub
  demo?: string; // URL de demo o tienda de apps (opcional)
};

// TODO: sustituye por tus proyectos reales de GitHub
export const projects: Project[] = [
  {
    title: "BHealth - App de salud para bebés",
    description:
      "Aplicación móvil dedicada a la gestión de la salud de los bebés.",
    tags: ["Flutter", "Dart", "Firebase"],
    repo: "https://github.com/albertoportfolio/Bhealth",
  },
  {
    title: "Maestro Bot - Juego de lógica",
    description:
      "Juego web y móvil hecho con React, phaser y react native",
    tags: ["React", "TypeScript", "Phaser", "React Native"],
    repo: "https://github.com/albertoportfolio/LightbotGame",
  },
  {
    title: "Parallax Castle - Web de diseño parallax",
    description:
      "Web de diseño parallax con ambiente medieval hecha con React y framer motion",
    tags: ["React", "Framer Motion"],
    repo: "https://github.com/albertoportfolio/ParallaxCastleWeb",
  },
];

export type Video = {
  title: string;
  // ID del vídeo de YouTube (lo que va después de "watch?v=" en la URL)
  youtubeId: string;
};

// TODO: sustituye por los IDs de tus vídeos reales de YouTube
export const videos: Video[] = [
  { title: "Maestro Bot", youtubeId: "hRU5l6_9YFM" },
  { title: "Web de diseño parallax", youtubeId: "C9Ct3F6JgtM" },
];
