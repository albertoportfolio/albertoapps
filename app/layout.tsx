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
    default: "AlbertoApps · Apps de reservas y fidelización de clientes",
    template: "%s · AlbertoApps",
  },
  description:
    "Desarrollador freelance de apps móviles en Flutter y webs con React, especializadas en gestión de reservas y fidelización de clientes. API con Java y Spring. Presupuesto sin compromiso.",
  keywords: [
    "app de reservas",
    "gestión de reservas",
    "fidelización de clientes",
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
    title: "AlbertoApps · Apps de reservas y fidelización",
    description:
      "Apps Flutter y webs React especializadas en gestión de reservas y fidelización de clientes, con API en Java y Spring. Pide presupuesto sin compromiso.",
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
    title: "AlbertoApps · Apps de reservas y fidelización",
    description:
      "Apps Flutter y webs React especializadas en gestión de reservas y fidelización de clientes, con API en Java y Spring. Pide presupuesto sin compromiso.",
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
    "Apps móviles en Flutter y webs con React especializadas en gestión de reservas y fidelización de clientes, con API en Java y Spring.",
  areaServed: "ES",
  knowsAbout: [
    "Flutter",
    "Dart",
    "React",
    "TypeScript",
    "Java",
    "Spring",
    "Gestión de reservas",
    "Fidelización de clientes",
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
