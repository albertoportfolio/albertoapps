import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { site } from "../data/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-inter",
});

const SITE_URL = "https://albertoapps.info";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "AlbertoApps · Apps Para Clínicas Y Centros De Salud.",
    template: "%s · AlbertoApps",
  },
  description:
    "Desarrollador freelance de apps móviles en Flutter y webs con React, especializadas en seguimiento y fidelización de pacientes para clínicas y centros de salud. API con Java y Spring. Presupuesto sin compromiso.",
  keywords: [
    "apps para clínicas",
    "apps para centros de salud",
    "seguimiento de pacientes",
    "fidelización de pacientes",
    "app de seguimiento de pacientes",
    "software para clínicas",
    "desarrollador Flutter freelance",
    "apps Flutter",
    "desarrollo web React",
    "API Java Spring",
    "apps iOS y Android",
    "AlbertoApps",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    siteName: site.brand,
    title:
      "AlbertoApps · Apps Para Clínicas Y Centros De Salud.",
    description:
      "Apps Flutter y webs React especializadas en seguimiento y fidelización de pacientes para clínicas y centros de salud, con API en Java y Spring. Pide presupuesto sin compromiso.",
    images: [
      {
        url: "/aplogo.png",
        width: 512,
        height: 512,
        alt: "AlbertoApps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AlbertoApps · Apps Para Clínicas Y Centros De Salud.",
    description:
      "Apps Flutter y webs React especializadas en seguimiento y fidelización de pacientes para clínicas y centros de salud, con API en Java y Spring. Pide presupuesto sin compromiso.",
    images: ["/aplogo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/aplogo.png",
    apple: "/aplogo.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.brand,
  url: SITE_URL,
  image: `${SITE_URL}/aplogo.png`,
  email: site.email,
  description:
    "Apps móviles en Flutter y webs con React especializadas en seguimiento y fidelización de pacientes para clínicas y centros de salud, con API en Java y Spring.",
  areaServed: "ES",
  knowsAbout: [
    "Flutter",
    "Dart",
    "React",
    "TypeScript",
    "Java",
    "Spring",
    "Apps para clínicas",
    "Seguimiento de pacientes",
    "Fidelización de pacientes",
  ],
  sameAs: [site.github, site.linkedin, site.youtube],
  founder: {
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    sameAs: [site.github, site.linkedin, site.youtube],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
