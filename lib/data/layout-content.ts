import type { Locale } from "@/lib/i18n/types";
import { layoutEn } from "./layout-content.en";

export type LayoutNavChild = {
  label: string;
  href: string;
};

export type LayoutNavItem = {
  label: string;
  href?: string;
  children?: LayoutNavChild[];
};

export type LayoutContent = {
  header: {
    doctorSubtitle: string;
    cta: string;
    mobileMenuOpenLabel: string;
    mobileMenuCloseLabel: string;
    nav: LayoutNavItem[];
  };
  footer: {
    doctorName: string;
    specialty: string;
    description: string;

    navTitle: string;
    nav: {
      home: string;
      specialties: string;
      background: string;
      doctor: string;
      contact: string;
    };

    contactTitle: string;
    location: string;
    whatsapp: string;
    phone: string;
    email: string;

    social: {
      instagram: string;
      linkedin: string;
      doctoralia: string;
    };

    rights: string;
    privacy: string;
    terms: string;
  };
};

export const layoutEs: LayoutContent = {
  header: {
    doctorSubtitle: "Oftalmólogo Cirujano",
    cta: "Agendar",
    mobileMenuOpenLabel: "Abrir menú",
    mobileMenuCloseLabel: "Cerrar menú",
    nav: [
      { label: "Inicio", href: "#inicio" },
      { label: "Doctor", href: "#doctor" },
      {
        label: "Especialidades",
        href: "#especialidades",
        children: [
          { label: "Consulta y diagnóstico", href: "/services/consulta-y-diagnostico" },
          { label: "Córnea", href: "/services/cornea" },
          { label: "Cirugía refractiva", href: "/services/cirugia-refractiva" },
          { label: "Catarata", href: "/services/catarata" },
          {
            label: "Ojo seco y superficie ocular",
            href: "/services/ojo-seco-y-superficie-ocular",
          },
          { label: "Segmento anterior", href: "/services/segmento-anterior" },
          {
            label: "Procedimientos de córnea",
            href: "/services/procedimientos-de-cornea",
          },
        ],
      },
      {
        label: "Trayectoria",
        href: "#testimonios",
        children: [
          { label: "Confianza", href: "#testimonios" },
          { label: "Publicaciones y reconocimientos", href: "#investigacion" },
          { label: "Videos educativos", href: "#contenido" },
        ],
      },
      { label: "Contacto", href: "#contacto" },
    ],
  },

  footer: {
    doctorName: "Dr. Juan Camilo Cadavid",
    specialty: "Córnea, segmento anterior y cirugía refractiva",
    description:
      "Sitio web de marca personal médica orientado a una experiencia clínica clara, confiable y especializada en Medellín.",

    navTitle: "Navegación",
    nav: {
      home: "Inicio",
      specialties: "Especialidades",
      background: "Trayectoria",
      doctor: "Doctor",
      contact: "Contacto",
    },

    contactTitle: "Contacto",
    location: "Medellín, Colombia",
    whatsapp: "WhatsApp: pendiente",
    phone: "Teléfono: pendiente",
    email: "Correo: pendiente",

    social: {
      instagram: "Instagram",
      linkedin: "LinkedIn",
      doctoralia: "Doctoralia",
    },

    rights: "© 2026 Dr. Juan Camilo Cadavid. Todos los derechos reservados.",
    privacy: "Política de privacidad",
    terms: "Términos",
  },
};

export const layout = layoutEs;

export function getLayoutContent(locale: Locale = "es"): LayoutContent {
  return locale === "en" ? layoutEn : layoutEs;
}