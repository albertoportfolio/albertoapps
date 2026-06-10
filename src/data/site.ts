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
  github: "https://github.com/TU_USUARIO",
  linkedin: "https://www.linkedin.com/in/TU_PERFIL",
  youtube: "https://www.youtube.com/@TU_CANAL",
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
    title: "App de ejemplo 1",
    description:
      "Aplicación móvil multiplataforma desarrollada en Flutter con gestión de estado, API REST y diseño Material 3.",
    tags: ["Flutter", "Dart", "Firebase"],
    repo: "https://github.com/TU_USUARIO/proyecto-1",
  },
  {
    title: "App de ejemplo 2",
    description:
      "Web app moderna con React y TypeScript, animaciones fluidas y rendimiento optimizado.",
    tags: ["React", "TypeScript", "Vite"],
    repo: "https://github.com/TU_USUARIO/proyecto-2",
  },
  {
    title: "App de ejemplo 3",
    description:
      "Aplicación con autenticación, notificaciones push y sincronización en tiempo real.",
    tags: ["Flutter", "Supabase"],
    repo: "https://github.com/TU_USUARIO/proyecto-3",
  },
];

export type Video = {
  title: string;
  // ID del vídeo de YouTube (lo que va después de "watch?v=" en la URL)
  youtubeId: string;
};

// TODO: sustituye por los IDs de tus vídeos reales de YouTube
export const videos: Video[] = [
  { title: "Demo de app Flutter", youtubeId: "dQw4w9WgXcQ" },
  { title: "Presentación de proyecto web", youtubeId: "dQw4w9WgXcQ" },
];
