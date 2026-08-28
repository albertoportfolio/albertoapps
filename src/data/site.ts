// ============================================================
// SITE CONFIGURATION
// Edit this file to update your info, projects, and videos.
// Values marked with TODO are placeholders: replace them with
// your real links and the site will update automatically.
// ============================================================

export const site = {
  name: "Alberto",
  brand: "AlbertoApps",
  role: "Freelance Developer · Flutter & Web",
  tagline: "Custom Apps Built For Your Business",
  email: "contact@albertoapps.info",
  // TODO: replace with your real profiles
  github: "https://github.com/albertoportfolio",
  linkedin: "https://es.linkedin.com/in/albertopegomez",
  youtube: "https://www.youtube.com/@appsalberto",
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  repo: string; // GitHub repository URL
  demo?: string; // Demo or app store URL (optional)
};

// TODO: replace with your real GitHub projects
export const projects: Project[] = [
  {
    title: "H-Baby - Baby health app",
    description:
      "Mobile application dedicated to managing babies' health.",
    tags: ["Flutter", "Dart", "Firebase"],
    repo: "https://github.com/albertoportfolio/Bhealth",
  },
  {
    title: "Maestro Bot - Logic game",
    description:
      "Web and mobile game built with React, Phaser, and React Native",
    tags: ["React", "TypeScript", "Phaser", "React Native", "Node.js"],
    repo: "https://github.com/albertoportfolio/LightbotGame",
  },
  {
    title: "Parallax Castle - Parallax design website",
    description:
      "Parallax design website with a medieval theme, built with React and Framer Motion",
    tags: ["React", "Framer Motion"],
    repo: "https://github.com/albertoportfolio/ParallaxCastleWeb",
  },
];

export type Video = {
  title: string;
  // YouTube video ID (what comes after "watch?v=" in the URL)
  youtubeId: string;
};

// TODO: replace with your real YouTube video IDs
export const videos: Video[] = [
  { title: "Maestro Bot", youtubeId: "hRU5l6_9YFM" },
  { title: "Health Baby", youtubeId: "33YsocPVqVk" },
];