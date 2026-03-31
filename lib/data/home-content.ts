import type { Locale } from "@/lib/i18n/types";
import { homeContentEn } from "./home-content.en";

export type HomeVideoItem = {
  title: string;
  text: string;
  embedUrl: string;
};

export type HomeInfoItem = {
  label: string;
  value: string;
  span?: string;
};

export type HomeContent = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    secondaryDescription: string;
    primaryCta: string;
    secondaryCta: string;
    badgeTitle: string;
    badgeText: string;
  };

  about: {
    intro: string;
    title: string;
    paragraph1: string;
    paragraph2: string;
    bullets: string[];
    primaryCta: string;
    secondaryCta: string;
    cardTitle: string;
    cardText: string;
  };

  institutions: {
    intro: string;
    items: string[];
  };

  servicesSection: {
    intro: string;
    title: string;
    description: string;
    cta: string;
  };

  testimonials: {
    intro: string;
    title: string;
    description: string;
    stats: string[];
    testimonials: {
      name: string;
      text: string;
    }[];
  };

  content: {
    intro: string;
    title: string;
    description: string;
    leftTitle: string;
    rightTitle: string;
    videosTitle: string;
    videosDescription: string;
    publications: string[];
    recognitions: string[];
    videos: HomeVideoItem[];
    cta: string;
    videosCta: string;
    videosCtaHref: string;
  };

  contact: {
    intro: string;
    title: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    ctaPrimaryHref: string;
    ctaSecondaryHref: string;
    cardTitle: string;
    cardText: string;
    mapCta: string;
    mapEmbedUrl: string;
    mapLinkUrl: string;
    mapTitle: string;
    infoItems: HomeInfoItem[];
  };
};

export const homeContentEs: HomeContent = {
  hero: {
    eyebrow: "Oftalmología especializada",
    title: "Ver con claridad, decidir con confianza",
    description:
      "Excelencia profesional y tecnología de punta al servicio de tu salud visual.",
    secondaryDescription: "",
    primaryCta: "Agendar valoración",
    secondaryCta: "Conocer especialidades",
    badgeTitle: "¿Quién es?",
    badgeText:
      "Médico Oftalmólogo UPB, con enfoque en córnea, segmento anterior y cirugía refractiva.",
  },

  about: {
    intro: "¿Quién es?",
    title:
      "Una atención oftalmológica cercana, especializada y centrada en decisiones bien acompañadas.",
    paragraph1:
      "Soy Juan Camilo Cadavid Usuga, médico oftalmólogo de la Universidad Pontificia Bolivariana y subespecialista en córnea, catarata y cirugía refractiva. Mi formación y experiencia han estado orientadas a ofrecer una atención precisa, cercana y altamente especializada en el cuidado de la salud visual.",
    paragraph2:
      "A lo largo de mi recorrido profesional he trabajado en instituciones como la Clínica de Oftalmología Sandiego, la Clínica Universitaria Bolivariana y la Clínica Oftalmo Servicio, combinando práctica clínica, formación académica y actividad docente. Esto me permite acompañar a cada paciente con criterio, claridad y confianza en cada decisión.",
    bullets: [
      "Atención cercana y personalizada",
      "Criterio clínico y quirúrgico",
      "Claridad en cada decisión",
    ],
    primaryCta: "Conocer especialidades",
    secondaryCta: "Agendar valoración",
    cardTitle: "¿Puedo confiar?",
    cardText:
      "La confianza se construye con experiencia, claridad y una atención que pone al paciente en el centro de cada decisión.",
  },

  institutions: {
    intro: "Trayectoria y respaldo",
    items: [
      "Clínica de Oftalmología Sandiego",
      "Clínica Universitaria Bolivariana",
      "Clínica Oftalmo Servicio",
      "Universidad Pontificia Bolivariana",
      "Universidad de Antioquia",
      "Instituto de Ojos Oftalmosalud",
      "Córnea y cirugía refractiva",
      "Actividad clínica y académica",
      "Universidad César Vallejo",
    ],
  },

  servicesSection: {
    intro: "¿Me puede ayudar?",
    title:
      "Especialidades y soluciones pensadas para cuidar tu visión con precisión y confianza.",
    description:
      "Conoce algunas de las áreas en las que el doctor acompaña a sus pacientes, desde la consulta inicial y el diagnóstico hasta procedimientos y cirugías especializadas.",
    cta: "Ver más",
    
  },

  testimonials: {
    intro: "Respaldo y confianza",
    title:
      "Una atención especializada que busca dar tranquilidad desde el primer momento.",
    description:
      "El perfil profesional del doctor reúne experiencia clínica, formación especializada, desarrollo investigativo y acompañamiento cercano al paciente.",
    stats: [
      "Subespecialista en córnea, catarata y cirugía refractiva",
      "Experiencia en Clínica de Oftalmología Sandiego, Clínica Universitaria Bolivariana y Clínica Oftalmo Servicio",
      "Atención en español, inglés y portugués, con agenda en línea y aseguradoras aliadas",
    ],
    testimonials: [
      {
        name: "Atención cercana",
        text: "Cada consulta está pensada para que el paciente entienda su diagnóstico, conozca sus opciones y tome decisiones con mayor tranquilidad.",
      },
      {
        name: "Claridad al explicar",
        text: "El enfoque de atención busca combinar criterio clínico, lenguaje claro y un acompañamiento que haga el proceso más comprensible y confiable.",
      },
      {
        name: "Confianza en el proceso",
        text: "Desde la valoración inicial hasta los procedimientos especializados, la experiencia está orientada a brindar seguridad, cercanía y respaldo profesional.",
      },
    ],
  },

  content: {
    intro: "Investigación, publicaciones y trayectoria académica",
    title:
      "Una práctica clínica respaldada por formación, investigación y actualización constante.",
    description:
      "El recorrido profesional del doctor integra experiencia clínica, publicaciones científicas y reconocimientos académicos que fortalecen su práctica en oftalmología, córnea, catarata y cirugía refractiva.",
    leftTitle: "Publicaciones destacadas",
    rightTitle: "Premios y distinciones",
    videosTitle: "Videos educativos",
    videosDescription:
      "Una selección de contenidos audiovisuales del doctor sobre cirugía refractiva, cuidado visual, trayectoria profesional y acompañamiento al paciente.",
    publications: [
      "Characterization of cornea donors at a tissue center in the city of Medellin, Colombia. Cell Tissue Bank, 2023.",
      "Características clínicas de los pacientes con endoftalmitis endógena en un hospital de Medellín, Colombia.",
      "Diagnóstico de adenocarcinoma pulmonar primario a partir de metástasis coroidea. Reporte de caso.",
      "Risk factors for ophthalmologic involvement and ocular findings in patients diagnosed with fungemia in a high-complexity hospital in Medellín, Colombia.",
      "Diagnóstico de sarcoidosis a partir de compromiso ocular. Reporte de caso.",  
    ],

    recognitions: [
      "First Place – Théa inteRnational cOntest of clinical cases in PatHologies of the eYe (TROPHY 10th Edition 2022–2023), New Orleans, USA.",
      "Tercer puesto en casos de difícil manejo 2023, junto a laboratorios SOPHIA y la sociedad de cirugía ocular.",
      "Primer puesto como poster en el XII Congreso internacional de oftalmología clínica Clofán 2023.",
      "Grado honorífico de la especialización en oftalmología, Medellín 2023.",
    ],
    videos: [
      {
        title: "Vocación y comienzo de 2026",
        text: "Un mensaje cercano sobre vocación, propósito y crecimiento profesional en oftalmología.",
        embedUrl: "https://www.youtube.com/embed/UTXESHgsfnk",
      },
      {
        title: "Cirugía refractiva LASIK",
        text: "Contenido breve sobre LASIK y la posibilidad de dejar las gafas con una valoración adecuada.",
        embedUrl: "https://www.youtube.com/embed/Cr9uFrEo0pY",
      },
      {
        title: "Cuida tu visión",
        text: "Video educativo orientado a prevención, salud visual y conciencia sobre el cuidado de los ojos.",
        embedUrl: "https://www.youtube.com/embed/nIW7VT_Vlz0",
      },
      {
        title: "Adiós a las gafas",
        text: "Explicación sencilla sobre cirugía refractiva para miopía, astigmatismo y otras condiciones visuales.",
        embedUrl: "https://www.youtube.com/embed/7V5V3LVL-AA",
      },
      {
        title: "La visión que te mereces",
        text: "Un video pensado para transmitir cercanía, confianza y acompañamiento en el proceso de atención.",
        embedUrl: "https://www.youtube.com/embed/drfyU-leD2s",
      },
      {
        title: "Presentación del doctor",
        text: "Introducción profesional del Dr. Juan Camilo Cadavid para que los pacientes conozcan mejor su perfil.",
        embedUrl: "https://www.youtube.com/embed/MIQ3W-r_86w",
      },
    ],
    cta: "Agendar valoración",
    videosCta: "Ver canal de YouTube",
    videosCtaHref: "https://www.youtube.com/@JuanCamiloCadavidUsuga/shorts",
  },

  contact: {
    intro: "Contacto",
    title: "Agenda tu valoración",
    description:
      "Si quieres resolver una duda, programar una consulta o conocer la disponibilidad del doctor, aquí encontrarás una forma clara y directa de dar el siguiente paso.",
    ctaPrimary: "Agendar en Doctoralia",
    ctaSecondary: "Llamar al consultorio",
    ctaPrimaryHref:
      "https://www.doctoralia.co/juan-camilo-cadavid-usuga-3/oftalmologo/medellin",
    ctaSecondaryHref: "tel:3226240121",
    cardTitle: "Canales de atención",
    cardText:
      "Consulta oftalmología, córnea y cirugía refractiva en Medellín, con agenda en línea, contacto telefónico y atención presencial.",
    mapCta: "Ver ubicación en Google Maps",
    mapEmbedUrl:
      "https://www.google.com/maps?q=Cl%C3%ADnica%20de%20Oftalmolog%C3%ADa%20Sandiego%2C%20Medell%C3%ADn&z=18&output=embed",
    mapLinkUrl:
      "https://www.google.com/maps/place/Cl%C3%ADnica+de+Oftalmolog%C3%ADa+Sandiego/@6.2288886,-75.5691691,18z",
    mapTitle: "Ubicación Clínica de Oftalmología Sandiego",
    infoItems: [
      {
        label: "Consultorio",
        value: "Carrera 43 # 29-35, Consultorio 712, Medellín 050016",
        span: "md:col-span-2",
      },
      {
        label: "Teléfono",
        value: "322 6240121",
      },
      {
        label: "Agenda",
        value: "Reserva en línea y envío de mensaje por Doctoralia",
      },
      {
        label: "Pacientes",
        value: "Adultos y niños de cualquier edad",
      },
      {
        label: "Formas de pago",
        value: "Efectivo y transferencia",
      },
      {
        label: "Aseguradoras",
        value: "Colsanitas, SURA, Colmédica, Allianz y Coomeva Medicina Prepagada",
        span: "md:col-span-2",
      },
    ],
  },
};

export const homeContent = homeContentEs;

export function getHomeContent(locale: Locale = "es"): HomeContent {
  return locale === "en" ? homeContentEn : homeContentEs;
}