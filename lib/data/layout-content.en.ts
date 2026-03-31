import type { LayoutContent } from "./layout-content";

export const layoutEn: LayoutContent = {
  header: {
    doctorSubtitle: "Ophthalmic Surgeon",
    cta: "Book",
    mobileMenuOpenLabel: "Open menu",
    mobileMenuCloseLabel: "Close menu",
    nav: [
      { label: "Home", href: "#inicio" },
      { label: "Doctor", href: "#doctor" },
      {
        label: "Specialties",
        href: "#especialidades",
        children: [
          {
            label: "Consultation and diagnosis",
            href: "/services/consulta-y-diagnostico",
          },
          { label: "Cornea", href: "/services/cornea" },
          {
            label: "Refractive surgery",
            href: "/services/cirugia-refractiva",
          },
          { label: "Cataract", href: "/services/catarata" },
          {
            label: "Dry eye and ocular surface",
            href: "/services/ojo-seco-y-superficie-ocular",
          },
          { label: "Anterior segment", href: "/services/segmento-anterior" },
          {
            label: "Corneal procedures",
            href: "/services/procedimientos-de-cornea",
          },
        ],
      },
      {
        label: "Background",
        href: "#testimonios",
        children: [
          { label: "Trust", href: "#testimonios" },
          { label: "Publications and recognitions", href: "#investigacion" },
          { label: "Educational videos", href: "#contenido" },
        ],
      },
      { label: "Contact", href: "#contacto" },
    ],
  },

  footer: {
    doctorName: "Dr. Juan Camilo Cadavid",
    specialty: "Cornea, anterior segment and refractive surgery",
    description:
      "Personal medical brand website focused on a clear, trustworthy, and specialized clinical experience in Medellín.",

    navTitle: "Navigation",
    nav: {
      home: "Home",
      specialties: "Specialties",
      background: "Background",
      doctor: "Doctor",
      contact: "Contact",
    },

    contactTitle: "Contact",
    location: "Medellín, Colombia",
    whatsapp: "WhatsApp: pending",
    phone: "Phone: pending",
    email: "Email: pending",

    social: {
      instagram: "Instagram",
      linkedin: "LinkedIn",
      doctoralia: "Doctoralia",
    },

    rights: "© 2026 Dr. Juan Camilo Cadavid. All rights reserved.",
    privacy: "Privacy policy",
    terms: "Terms",
  },
};