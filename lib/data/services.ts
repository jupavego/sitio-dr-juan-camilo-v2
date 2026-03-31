import type { Locale } from "@/lib/i18n/types";
import { servicesEn } from "./services.en";

export type ServiceVideo = {
  title: string;
  description?: string;
  embedUrl?: string;
  src?: string;
};

export type ServiceSectionCard = {
  title: string;
  description: string;
};

export type ServiceFaqItem = {
  question: string;
  answer: string;
};

export type ServiceTheme = {
  accent?: string;
  heroOverlay?: string;
  heroAlign?: "left" | "center";
};

export type ServiceSectionBackgrounds = {
  hero?: string;
  consultationReasons?: string;
  procedures?: string;
  patientExpectations?: string;
  faq?: string;
  videos?: string;
};

export type ServiceItem = {
  slug: string;
  title: string;
  shortDescription: string;

  heroTitle: string;
  heroDescription: string;
  heroImage: string;
  heroKicker?: string;
  heroCtaLabel?: string;

  consultationReasons: ServiceSectionCard[];
  procedures: ServiceSectionCard[];
  patientExpectations: ServiceSectionCard[];
  faq: ServiceFaqItem[];

  videos?: ServiceVideo[];

  theme?: ServiceTheme;
  sectionBackgrounds?: ServiceSectionBackgrounds;
};

export const servicesEs: ServiceItem[] = [
  {
    slug: "consulta-y-diagnostico",
    title: "Consulta y diagnóstico",
    shortDescription:
      "Valoración oftalmológica integral para orientar el diagnóstico, aclarar dudas clínicas y definir un plan de manejo personalizado.",

    heroKicker: "Primera valoración especializada",
    heroTitle: "Consulta y diagnóstico oftalmológico",
    heroDescription:
      "Esta consulta está pensada para pacientes que requieren una valoración oftalmológica clara, completa y orientada a la toma de decisiones. Ya sea por síntomas visuales recientes, molestias persistentes, hallazgos previos o necesidad de una segunda opinión, el objetivo es comprender el caso en profundidad, correlacionar los síntomas con los hallazgos clínicos y definir una ruta diagnóstica y terapéutica precisa. Más que una revisión rápida, se trata de un espacio de análisis clínico, explicación comprensible y acompañamiento profesional.",

    heroImage: "/images/services/consulta-diagnostico1.jpg",
    heroCtaLabel: "Agendar valoración",

    consultationReasons: [
      {
        title: "Disminución de la visión",
        description:
          "Cuando el paciente nota que ya no ve con la misma nitidez, incluso usando sus gafas habituales, o empieza a tener dificultades para leer, trabajar, conducir o desenvolverse con seguridad.",
      },
      {
        title: "Molestias oculares persistentes",
        description:
          "Ardor, irritación, ojo rojo, lagrimeo, sensación de cuerpo extraño o fatiga visual que no mejoran de forma sostenida y requieren una evaluación más detallada.",
      },
      {
        title: "Cambios recientes en la calidad visual",
        description:
          "Visión borrosa, visión fluctuante, fotofobia, deslumbramiento o incomodidad visual que aparecen o progresan en poco tiempo.",
      },
      {
        title: "Segunda opinión especializada",
        description:
          "Pacientes que ya cuentan con un diagnóstico previo, una recomendación de cirugía o un tratamiento instaurado y desean una nueva valoración clínica para tomar decisiones con mayor seguridad.",
      },
      {
        title: "Control de una condición ocular",
        description:
          "Seguimiento de hallazgos previos o enfermedades que requieren observación periódica para vigilar su estabilidad o evolución.",
      },
      {
        title: "Valoración preventiva o integral",
        description:
          "Consulta útil para revisar la salud ocular y visual de manera completa, incluso cuando no existe un diagnóstico confirmado.",
      },
    ],

    procedures: [
      {
        title: "Consulta oftalmológica especializada",
        description:
          "Valoración clínica estructurada que integra antecedentes, síntomas, examen ocular y contexto funcional del paciente para orientar el caso con mayor precisión.",
      },
      {
        title: "Enfoque diagnóstico integral",
        description:
          "Análisis clínico dirigido a establecer la causa más probable de los síntomas y a determinar si se requieren estudios complementarios o controles adicionales.",
      },
      {
        title: "Definición terapéutica inicial",
        description:
          "Orientación sobre tratamiento médico, seguimiento, necesidad de exámenes, procedimientos o interconsultas, según los hallazgos encontrados.",
      },
      {
        title: "Acompañamiento clínico y seguimiento",
        description:
          "Control evolutivo cuando el caso lo requiere, con énfasis en respuesta al tratamiento, cambio de síntomas o ajustes en la conducta médica.",
      },
    ],

    patientExpectations: [
      {
        title: "Escucha detallada del motivo de consulta",
        description:
          "La valoración parte de comprender qué está ocurriendo, desde cuándo, cómo ha evolucionado y qué impacto tiene sobre la vida diaria del paciente.",
      },
      {
        title: "Examen clínico orientado",
        description:
          "La consulta se enfoca en correlacionar los síntomas con hallazgos reales del examen oftalmológico, evitando explicaciones vagas o insuficientes.",
      },
      {
        title: "Explicación clara y comprensible",
        description:
          "El paciente recibe una orientación médica seria pero entendible, con lenguaje claro sobre el diagnóstico probable, su significado y los siguientes pasos.",
      },
      {
        title: "Plan de acción personalizado",
        description:
          "Al finalizar, el paciente debe tener más claridad sobre su situación visual, el manejo recomendado y la ruta de seguimiento más adecuada.",
      },
    ],

    faq: [
      {
        question: "¿Cuándo debería asistir a una consulta oftalmológica especializada?",
        answer:
          "Cuando existen síntomas visuales u oculares persistentes, cambios recientes en la visión, molestias que no mejoran o necesidad de una valoración más detallada que la consulta general.",
      },
      {
        question: "¿La consulta incluye diagnóstico y plan de manejo?",
        answer:
          "Sí. La valoración está orientada a identificar la causa probable del problema, explicar su alcance y definir una conducta inicial clara.",
      },
      {
        question: "¿Es posible consultar por una segunda opinión?",
        answer:
          "Sí. La consulta es muy útil cuando el paciente desea revisar un diagnóstico previo, una recomendación quirúrgica o un tratamiento ya indicado.",
      },
      {
        question: "¿Siempre se requieren exámenes adicionales?",
        answer:
          "No. Depende del caso. En algunos pacientes el examen clínico permite orientar suficientemente la conducta, mientras que en otros puede ser útil complementar con estudios específicos.",
      },
    ],

    theme: {
      accent: "#9FB2B5",
      heroOverlay: "from-[#2F3A43]/70 via-[#2F3A43]/40 to-[#2F3A43]/20",
      heroAlign: "left",
    },
  },

  {
    slug: "cornea",
    title: "Córnea",
    shortDescription:
      "Evaluación y manejo especializado de enfermedades de la córnea y de condiciones que afectan la calidad visual y la transparencia ocular.",

    heroKicker: "Subespecialidad clínica y quirúrgica",
    heroTitle: "Especialidad en córnea",
    heroDescription:
      "La córnea es una de las estructuras más importantes para la calidad visual, ya que su transparencia, curvatura y estabilidad influyen directamente en la forma en que la luz entra al ojo. Las enfermedades corneales pueden manifestarse con visión borrosa, distorsión visual, fotofobia, molestias persistentes o cambios progresivos en la calidad visual. Esta área está enfocada en la valoración, diagnóstico, seguimiento y orientación terapéutica de patologías que comprometen la córnea, siempre con una mirada integral sobre la función visual, el confort ocular y la seguridad del paciente.",

    heroImage: "/images/services/cornea.jpg",
    heroCtaLabel: "Solicitar valoración",

    consultationReasons: [
      {
        title: "Visión borrosa o distorsionada",
        description:
          "Cuando la calidad visual se altera de forma persistente y el paciente nota que la imagen ya no es nítida, se deforma o cambia con el paso del tiempo.",
      },
      {
        title: "Sospecha de queratocono",
        description:
          "Pacientes con astigmatismo irregular, aumento progresivo de la graduación o hallazgos previos que sugieren ectasia corneal y requieren una valoración más precisa.",
      },
      {
        title: "Antecedentes de infección corneal",
        description:
          "Casos que necesitan seguimiento especializado por secuelas, cicatrices corneales, molestias residuales o disminución de la visión.",
      },
      {
        title: "Fotofobia y molestias persistentes",
        description:
          "Sensibilidad a la luz, dolor ocular, sensación de cuerpo extraño o incomodidad sostenida que puede relacionarse con compromiso de la córnea o la superficie ocular.",
      },
      {
        title: "Cambios progresivos en la visión",
        description:
          "Situaciones en las que la calidad visual se deteriora sin una causa evidente y se necesita establecer si existe una alteración corneal subyacente.",
      },
      {
        title: "Seguimiento de enfermedad corneal conocida",
        description:
          "Pacientes que ya cuentan con un diagnóstico y necesitan control clínico para vigilar estabilidad, progresión o respuesta al tratamiento.",
      },
    ],

    procedures: [
      {
        title: "Valoración especializada de córnea",
        description:
          "Consulta dirigida a identificar alteraciones corneales, entender su impacto sobre la visión y orientar el manejo según la naturaleza del problema.",
      },
      {
        title: "Seguimiento de enfermedades corneales",
        description:
          "Control clínico para evaluar evolución, estabilidad visual, cambios anatómicos y necesidad de ajustar la conducta médica o quirúrgica.",
      },
      {
        title: "Manejo de la superficie ocular asociada",
        description:
          "Abordaje integral de síntomas y condiciones que pueden coexistir con el compromiso corneal, como irritación, inestabilidad lagrimal o inflamación ocular anterior.",
      },
      {
        title: "Orientación sobre procedimientos de córnea",
        description:
          "Explicación y acompañamiento en casos que pueden requerir procedimientos específicos, ayudando al paciente a comprender su indicación y objetivos terapéuticos.",
      },
    ],

    videos: [
      {
        title: "Procedimientos y cuidado de córnea",
        description:
          "Video de apoyo para comprender mejor el enfoque clínico y terapéutico en córnea.",
        src: "/videos/Hermoso video de @lidemka sobre el proceso natural de una catarata La catarata es un proceso de .mp4",
      },
    ],

    patientExpectations: [
      {
        title: "Valoración clínica detallada",
        description:
          "Se analizan síntomas, antecedentes, evolución del caso y hallazgos del examen para comprender si la córnea está afectada y en qué medida.",
      },
      {
        title: "Definición diagnóstica más precisa",
        description:
          "Dependiendo del caso, se establece si el hallazgo puede explicarse clínicamente o si son necesarios estudios complementarios para caracterizar mejor la enfermedad.",
      },
      {
        title: "Explicación clara del problema",
        description:
          "Se conversa con el paciente sobre la naturaleza de la alteración corneal, su posible comportamiento en el tiempo y el impacto que puede tener sobre la visión.",
      },
      {
        title: "Plan de manejo y seguimiento",
        description:
          "Muchas patologías corneales requieren vigilancia, tratamiento escalonado o decisiones terapéuticas progresivas; por eso el seguimiento suele ser parte importante del proceso.",
      },
    ],

    faq: [
      {
        question: "¿Qué síntomas pueden sugerir un problema de córnea?",
        answer:
          "Visión borrosa o variable, distorsión de la imagen, fotofobia, lagrimeo, ojo rojo, dolor o sensación de cuerpo extraño son síntomas frecuentes en varias enfermedades corneales.",
      },
      {
        question: "¿Todos los problemas de córnea requieren cirugía?",
        answer:
          "No. El manejo depende del diagnóstico, la severidad, la evolución y el impacto sobre la visión. Muchos casos se manejan inicialmente con tratamiento médico y seguimiento especializado.",
      },
      {
        question: "¿La valoración de córnea puede requerir exámenes adicionales?",
        answer:
          "Sí. En algunos pacientes los hallazgos clínicos hacen necesario complementar con estudios específicos para definir con mayor precisión el diagnóstico y la conducta.",
      },
      {
        question: "¿El seguimiento sigue siendo importante incluso si los síntomas mejoran?",
        answer:
          "Sí. Algunas enfermedades corneales pueden progresar o dejar secuelas visuales, por lo que el control clínico ayuda a tomar decisiones a tiempo.",
      },
    ],

    theme: {
      accent: "#AFC0C3",
      heroOverlay: "from-[#445057]/70 via-[#445057]/40 to-[#445057]/20",
      heroAlign: "left",
    },
  },

  {
    slug: "cirugia-refractiva",
    title: "Cirugía refractiva",
    shortDescription:
      "Valoración de opciones para corregir defectos visuales y reducir la dependencia de gafas o lentes de contacto.",

    heroKicker: "Corrección visual personalizada",
    heroTitle: "Especialidad en cirugía refractiva",
    heroDescription:
      "La cirugía refractiva está orientada a corregir defectos visuales como miopía, hipermetropía y astigmatismo en pacientes adecuadamente seleccionados. Sin embargo, no se trata solo de querer dejar las gafas: el punto más importante es determinar si la salud ocular, la córnea, la graduación y las expectativas del paciente permiten considerar una opción segura y razonable. Esta valoración busca orientar con claridad quién puede beneficiarse, qué aspectos deben revisarse antes del procedimiento y qué resultados son realistas según cada caso.",

    heroImage: "/images/services/refractiva.jpg",
    heroCtaLabel: "Quiero valorar mi caso",

    consultationReasons: [
      {
        title: "Dependencia de gafas o lentes de contacto",
        description:
          "Pacientes que desean conocer alternativas para reducir su dependencia visual en actividades cotidianas, laborales, deportivas o sociales.",
      },
      {
        title: "Miopía, hipermetropía o astigmatismo",
        description:
          "Personas con errores refractivos que desean saber si son candidatas a una corrección visual quirúrgica.",
      },
      {
        title: "Incomodidad frecuente con lentes de contacto",
        description:
          "Intolerancia, resequedad, irritación o limitaciones relacionadas con el uso prolongado de lentes blandos o rígidos.",
      },
      {
        title: "Deseo de mayor independencia visual",
        description:
          "Interés en mejorar la calidad visual sin depender permanentemente de una ayuda óptica externa, siempre dentro de expectativas realistas.",
      },
      {
        title: "Dudas sobre elegibilidad",
        description:
          "Pacientes que han escuchado sobre LASIK u otras opciones, pero no saben si por su edad, graduación o estado ocular podrían considerarse candidatas.",
      },
      {
        title: "Búsqueda de información clara antes de decidir",
        description:
          "Necesidad de comprender riesgos, beneficios, limitaciones, recuperación y seguimiento antes de contemplar un procedimiento refractivo.",
      },
    ],

    procedures: [
      {
        title: "Valoración para cirugía refractiva",
        description:
          "Consulta orientada a determinar si el paciente es candidato y si su caso puede beneficiarse de una estrategia refractiva segura y bien indicada.",
      },
      {
        title: "Estudios preoperatorios",
        description:
          "Evaluaciones necesarias para conocer el estado de la córnea, la estabilidad refractiva y otros factores clave en la toma de decisiones.",
      },
      {
        title: "Orientación personalizada sobre opciones",
        description:
          "Explicación detallada sobre el procedimiento propuesto, su alcance, limitaciones y expectativas razonables según el perfil visual del paciente.",
      },
      {
        title: "Seguimiento posterior",
        description:
          "Acompañamiento clínico antes y después del procedimiento para vigilar recuperación, confort visual y comportamiento de los síntomas.",
      },
    ],

    patientExpectations: [
      {
        title: "Evaluación de elegibilidad",
        description:
          "La valoración busca establecer si el paciente realmente puede considerarse candidato, no solo desde la graduación sino desde la salud ocular global.",
      },
      {
        title: "Expectativas realistas",
        description:
          "Se conversa con claridad sobre lo que puede esperarse del procedimiento, sus límites y las variables que pueden influir en el resultado visual.",
      },
      {
        title: "Proceso informado y seguro",
        description:
          "El paciente recibe orientación sobre estudios previos, preparación, cuidados y recuperación, lo que permite decidir con mayor confianza.",
      },
      {
        title: "Seguimiento estructurado",
        description:
          "El control posterior es importante para acompañar la recuperación, resolver dudas y vigilar síntomas temporales como resequedad o sensibilidad.",
      },
    ],

    faq: [
      {
        question: "¿Todas las personas con gafas pueden operarse?",
        answer:
          "No. La elegibilidad depende de la salud ocular, la estabilidad de la graduación, las características corneales y otros criterios clínicos que deben evaluarse individualmente.",
      },
      {
        question: "¿La consulta determina si soy candidato?",
        answer:
          "Sí. La valoración y los estudios preoperatorios permiten definir si el procedimiento es adecuado, seguro y razonable para tu caso.",
      },
      {
        question: "¿La cirugía refractiva elimina totalmente la necesidad de gafas?",
        answer:
          "Eso depende del perfil visual de cada paciente. En consulta se explican expectativas realistas y el alcance probable del procedimiento.",
      },
      {
        question: "¿Puede haber molestias visuales o resequedad después?",
        answer:
          "Sí, algunas personas pueden presentar resequedad temporal o fenómenos visuales transitorios en el periodo de recuperación, por lo que el seguimiento es importante.",
      },
    ],

    videos: [
      {
        title: "Cirugía refractiva LASIK",
        description:
          "Contenido breve sobre LASIK y la posibilidad de dejar las gafas con una valoración adecuada.",
        embedUrl: "https://www.youtube.com/embed/Cr9uFrEo0pY",
      },
      {
        title: "Adiós a las gafas",
        description:
          "Explicación sencilla sobre cirugía refractiva para miopía, astigmatismo y otras condiciones visuales.",
        embedUrl: "https://www.youtube.com/embed/7V5V3LVL-AA",
      },
    ],

    theme: {
      accent: "#C9B991",
      heroOverlay: "from-[#2F3A43]/75 via-[#2F3A43]/45 to-[#2F3A43]/20",
      heroAlign: "left",
    },
  },

  {
    slug: "catarata",
    title: "Catarata",
    shortDescription:
      "Valoración integral y orientación especializada para el diagnóstico y tratamiento de catarata.",

    heroKicker: "Recuperación visual con enfoque personalizado",
    heroTitle: "Especialidad en catarata",
    heroDescription:
      "La catarata ocurre cuando el cristalino pierde transparencia y empieza a afectar la calidad visual. Con frecuencia el paciente nota visión nublada, mayor sensibilidad a la luz, dificultad para ver de noche o la sensación de que sus gafas ya no le funcionan igual. Esta área está orientada a valorar el impacto funcional de la catarata, definir si ya es momento de considerar tratamiento y acompañar al paciente antes y después del proceso quirúrgico cuando está indicado.",

    heroImage: "/images/services/catarata.jpg",
    heroCtaLabel: "Agendar consulta",

    consultationReasons: [
      {
        title: "Disminución progresiva de la visión",
        description:
          "Cuando la visión se vuelve menos nítida con el paso del tiempo y empieza a interferir con actividades diarias como leer, trabajar o conducir.",
      },
      {
        title: "Sensación de visión opaca o nublada",
        description:
          "Una de las formas más frecuentes en que la catarata se manifiesta, especialmente en etapas iniciales o progresivas.",
      },
      {
        title: "Deslumbramiento y molestia con la luz",
        description:
          "Especialmente notorio al conducir de noche, en ambientes muy iluminados o con reflejos intensos.",
      },
      {
        title: "Mayor dificultad para ver de noche",
        description:
          "Problemas para desplazarse, reconocer detalles o realizar actividades con seguridad en condiciones de baja iluminación.",
      },
      {
        title: "Cambios frecuentes en la fórmula",
        description:
          "Situaciones en las que el paciente siente que cada vez necesita ajustes visuales y aun así no recupera la misma calidad de visión.",
      },
      {
        title: "Diagnóstico previo de catarata",
        description:
          "Pacientes que ya tienen un hallazgo confirmado y desean orientación sobre evolución, momento quirúrgico o seguimiento.",
      },
    ],

    procedures: [
      {
        title: "Consulta de valoración de catarata",
        description:
          "Evaluación clínica para determinar el impacto visual de la catarata y su repercusión en la funcionalidad y calidad de vida del paciente.",
      },
      {
        title: "Orientación prequirúrgica",
        description:
          "Explicación clara sobre el momento adecuado para operar, expectativas del procedimiento y aspectos a considerar antes de la cirugía.",
      },
      {
        title: "Acompañamiento posoperatorio",
        description:
          "Seguimiento clínico para vigilar la recuperación visual, resolver dudas y confirmar una evolución adecuada después de la intervención.",
      },
      {
        title: "Control funcional y adaptación visual",
        description:
          "Valoración de la mejoría visual posterior al tratamiento y de la adaptación del paciente a su nueva condición visual.",
      },
    ],

    patientExpectations: [
      {
        title: "Evaluación visual completa",
        description:
          "La consulta permite valorar cuánto está afectando la catarata la visión y si ese impacto ya justifica una conducta terapéutica más activa.",
      },
      {
        title: "Definición del momento adecuado",
        description:
          "No todas las cataratas deben operarse de inmediato; la decisión depende del efecto real sobre la vida diaria del paciente y de la valoración clínica.",
      },
      {
        title: "Orientación clara del proceso",
        description:
          "Se explican de forma comprensible el procedimiento, la recuperación esperada y la importancia del control posterior.",
      },
      {
        title: "Acompañamiento antes y después",
        description:
          "El paciente no solo recibe una recomendación, sino una ruta clara para entender el diagnóstico, prepararse y seguir adecuadamente el proceso.",
      },
    ],

    faq: [
      {
        question: "¿La catarata siempre debe operarse de inmediato?",
        answer:
          "No necesariamente. La indicación depende del impacto visual, las necesidades del paciente y la valoración clínica individual.",
      },
      {
        question: "¿Cómo saber si la catarata ya afecta mi calidad de vida?",
        answer:
          "Cuando empieza a dificultar actividades cotidianas como leer, conducir, trabajar, reconocer detalles o desenvolverse con comodidad y seguridad.",
      },
      {
        question: "¿La cirugía de catarata requiere seguimiento posterior?",
        answer:
          "Sí. El control posterior es muy importante para vigilar la recuperación, resolver dudas y confirmar una adecuada evolución visual.",
      },
      {
        question: "¿Es normal que al principio la visión no se sienta completamente estable?",
        answer:
          "Durante los primeros días o semanas pueden existir cambios normales del proceso de recuperación, por eso el seguimiento médico es parte esencial del tratamiento.",
      },
    ],

    theme: {
      accent: "#B8A98A",
      heroOverlay: "from-[#445057]/70 via-[#445057]/35 to-[#445057]/20",
      heroAlign: "left",
    },
  },

  {
    slug: "ojo-seco-y-superficie-ocular",
    title: "Ojo seco y superficie ocular",
    shortDescription:
      "Abordaje clínico de molestias asociadas a inestabilidad lagrimal, inflamación y alteraciones de la superficie ocular.",

    heroKicker: "Confort ocular y estabilidad visual",
    heroTitle: "Ojo seco y superficie ocular",
    heroDescription:
      "El ojo seco y las alteraciones de la superficie ocular pueden afectar de forma importante el confort del paciente y también la estabilidad de la visión. Muchas personas consultan por ardor, picazón, sensación de arenilla, lagrimeo reflejo, visión fluctuante o cansancio ocular, especialmente con pantallas, ambientes secos o aire acondicionado. Esta área está orientada a identificar la causa de esos síntomas, entender su intensidad y comportamiento y plantear un manejo personalizado, ya que no todos los casos tienen el mismo origen ni requieren el mismo tratamiento.",

    heroImage: "/images/services/ojo-seco.jpg",
    heroCtaLabel: "Solicitar cita",

    consultationReasons: [
      {
        title: "Ardor o picazón ocular",
        description:
          "Síntomas frecuentes que afectan el bienestar diario y pueden intensificarse con ciertos ambientes o hábitos visuales.",
      },
      {
        title: "Sensación de cuerpo extraño",
        description:
          "Percepción de arenilla, roce o molestia constante que puede estar relacionada con inestabilidad de la lágrima o alteración de la superficie ocular.",
      },
      {
        title: "Visión fluctuante",
        description:
          "Cambios intermitentes en la nitidez visual que suelen empeorar con el uso visual prolongado o la exposición a pantallas.",
      },
      {
        title: "Ojos cansados o irritados",
        description:
          "Fatiga ocular, necesidad de parpadear más, incomodidad al leer o trabajar y sensación de pesadez al final del día.",
      },
      {
        title: "Enrojecimiento recurrente",
        description:
          "Pacientes con irritación ocular repetitiva que desean entender su causa y recibir un manejo más dirigido.",
      },
      {
        title: "Molestias con aire acondicionado o pantallas",
        description:
          "Síntomas que se agravan en ambientes secos, con poca humedad o durante jornadas prolongadas frente a dispositivos digitales.",
      },
    ],

    procedures: [
      {
        title: "Valoración de superficie ocular",
        description:
          "Consulta enfocada en identificar alteraciones relacionadas con lágrima, inflamación, confort ocular y comportamiento de los síntomas.",
      },
      {
        title: "Manejo integral del ojo seco",
        description:
          "Enfoque terapéutico individualizado según la causa probable, la intensidad de los síntomas y la respuesta clínica del paciente.",
      },
      {
        title: "Seguimiento de respuesta al tratamiento",
        description:
          "Control dirigido a ajustar el manejo, optimizar el confort ocular y mejorar la estabilidad visual.",
      },
      {
        title: "Orientación sobre hábitos y prevención",
        description:
          "Recomendaciones relacionadas con pantallas, ambiente, lubricación y cuidados diarios para proteger la superficie ocular.",
      },
    ],

    patientExpectations: [
      {
        title: "Caracterización detallada de síntomas",
        description:
          "La consulta busca entender cuándo aparecen las molestias, qué las empeora y cómo afectan la vida diaria y el rendimiento visual.",
      },
      {
        title: "Evaluación del estado de la superficie ocular",
        description:
          "Se orienta clínicamente la causa del problema y se valora si existe inflamación, inestabilidad lagrimal u otro factor asociado.",
      },
      {
        title: "Plan terapéutico personalizado",
        description:
          "No todos los pacientes con ojo seco requieren el mismo manejo; la conducta se adapta al perfil clínico y a la severidad del cuadro.",
      },
      {
        title: "Ajustes progresivos y seguimiento",
        description:
          "En muchos casos el tratamiento necesita seguimiento y ajustes para conseguir una mejor evolución y estabilidad de los síntomas.",
      },
    ],

    faq: [
      {
        question: "¿El ojo seco siempre se manifiesta solo con resequedad?",
        answer:
          "No. También puede presentarse con ardor, picazón, enrojecimiento, lagrimeo reflejo, sensación de cuerpo extraño o visión fluctuante.",
      },
      {
        question: "¿El uso de pantallas puede empeorar los síntomas?",
        answer:
          "Sí. Las pantallas prolongadas suelen reducir la frecuencia de parpadeo y pueden empeorar el confort ocular y la estabilidad de la lágrima.",
      },
      {
        question: "¿El tratamiento del ojo seco es igual para todos?",
        answer:
          "No. El manejo depende de la causa, la intensidad de los síntomas, el compromiso de la superficie ocular y la respuesta clínica de cada paciente.",
      },
      {
        question: "¿La mejoría suele requerir seguimiento?",
        answer:
          "Sí. El ojo seco es una condición que con frecuencia requiere control y ajustes progresivos para lograr una mejor estabilidad.",
      },
    ],

    theme: {
      accent: "#A8B7B9",
      heroOverlay: "from-[#2F3A43]/72 via-[#2F3A43]/38 to-[#2F3A43]/18",
      heroAlign: "left",
    },
  },

  {
    slug: "segmento-anterior",
    title: "Segmento anterior",
    shortDescription:
      "Valoración especializada de estructuras del ojo como córnea, cámara anterior, iris y cristalino.",

    heroKicker: "Enfoque clínico integral",
    heroTitle: "Especialidad en segmento anterior",
    heroDescription:
      "El segmento anterior del ojo incluye estructuras fundamentales como la córnea, la cámara anterior, el iris y el cristalino. Alteraciones en esta zona pueden traducirse en visión borrosa, dolor, irritación, fotofobia, ojo rojo o hallazgos visibles que requieren una evaluación especializada. Esta área está orientada a integrar clínicamente esos síntomas y hallazgos, definir el problema principal y establecer una conducta diagnóstica y terapéutica ajustada a cada caso.",

    heroImage: "/images/services/segmento-anterior2.jpg",
    heroCtaLabel: "Agendar consulta",

    consultationReasons: [
      {
        title: "Molestias visuales persistentes",
        description:
          "Síntomas que no se explican solo por graduación o cansancio visual y que requieren revisar las estructuras anteriores del ojo.",
      },
      {
        title: "Cambios en la transparencia ocular",
        description:
          "Alteraciones visibles o percibidas que pueden relacionarse con córnea, cristalino u otras estructuras anteriores.",
      },
      {
        title: "Dolor, irritación o fotofobia",
        description:
          "Manifestaciones que pueden sugerir compromiso de tejidos del segmento anterior y ameritan un análisis clínico más dirigido.",
      },
      {
        title: "Seguimiento de condiciones previas",
        description:
          "Pacientes con hallazgos o diagnósticos anteriores que requieren observación periódica o reevaluación de la conducta.",
      },
      {
        title: "Revisión integral de estructuras anteriores",
        description:
          "Casos remitidos o en estudio que necesitan una valoración más completa de córnea, iris, cristalino u otras estructuras asociadas.",
      },
      {
        title: "Dudas diagnósticas complejas",
        description:
          "Situaciones donde se necesita integrar distintos hallazgos clínicos para comprender mejor el problema ocular.",
      },
    ],

    procedures: [
      {
        title: "Consulta especializada de segmento anterior",
        description:
          "Valoración integral de las estructuras anteriores del ojo y de su impacto sobre la visión, el confort y la salud ocular.",
      },
      {
        title: "Orientación diagnóstica y terapéutica",
        description:
          "Definición del enfoque clínico según los hallazgos del examen, los antecedentes y la evolución del caso.",
      },
      {
        title: "Seguimiento de patologías del segmento anterior",
        description:
          "Control evolutivo de condiciones que requieren observación, tratamiento médico o definición progresiva de conducta.",
      },
      {
        title: "Plan de control individualizado",
        description:
          "Se establecen controles, estudios o tratamientos según el comportamiento clínico de cada paciente.",
      },
    ],

    patientExpectations: [
      {
        title: "Examen clínico focalizado",
        description:
          "La consulta se orienta a revisar con detalle las estructuras anteriores del ojo para correlacionar síntomas y hallazgos relevantes.",
      },
      {
        title: "Priorización del problema principal",
        description:
          "Cuando existen múltiples síntomas o diagnósticos posibles, la valoración ayuda a identificar qué es lo más importante en el caso.",
      },
      {
        title: "Explicación del alcance clínico",
        description:
          "Se aclara al paciente qué estructura puede estar comprometida, por qué eso afecta su visión o confort y qué conducta se recomienda.",
      },
      {
        title: "Seguimiento y ajuste de decisiones",
        description:
          "Muchos casos del segmento anterior necesitan observación en el tiempo para ajustar tratamiento o definir con mayor seguridad el paso a seguir.",
      },
    ],

    faq: [
      {
        question: "¿Qué incluye el segmento anterior del ojo?",
        answer:
          "Incluye estructuras como la córnea, la cámara anterior, el iris, el cristalino y otros tejidos relacionados con la parte frontal del ojo.",
      },
      {
        question: "¿Qué síntomas pueden sugerir un problema en el segmento anterior?",
        answer:
          "Dolor, visión borrosa, irritación, ojo rojo, fotofobia o cambios visibles en la parte anterior del ojo son razones frecuentes de consulta.",
      },
      {
        question: "¿La valoración del segmento anterior sirve para distintos diagnósticos?",
        answer:
          "Sí. Es un enfoque amplio que ayuda a orientar múltiples condiciones que afectan las estructuras anteriores del ojo.",
      },
      {
        question: "¿Todos los problemas del segmento anterior implican cirugía?",
        answer:
          "No. Muchas condiciones se manejan con tratamiento médico, seguimiento o decisiones terapéuticas progresivas según el caso.",
      },
    ],

    theme: {
      accent: "#8F9EA3",
      heroOverlay: "from-[#445057]/70 via-[#445057]/35 to-[#445057]/15",
      heroAlign: "left",
    },
  },

  {
    slug: "procedimientos-de-cornea",
    title: "Procedimientos de córnea",
    shortDescription:
      "Orientación y seguimiento en procedimientos relacionados con la córnea y su recuperación clínica.",

    heroKicker: "Acompañamiento clínico y quirúrgico",
    heroTitle: "Procedimientos de córnea",
    heroDescription:
      "Algunas enfermedades corneales pueden requerir procedimientos específicos para mejorar la transparencia, la regularidad de la córnea o la seguridad visual del paciente. Esta sección está enfocada en la valoración previa, la explicación clara de la indicación, la resolución de dudas y el acompañamiento antes y después del procedimiento. El objetivo no es solo hablar del acto terapéutico en sí, sino ayudar al paciente a entender por qué se propone, qué se espera lograr y cómo debe vivirse el proceso de seguimiento.",

    heroImage: "/images/services/procedimientos-cornea1.jpg",
    heroCtaLabel: "Consultar mi caso",

    consultationReasons: [
      {
        title: "Segunda opinión sobre un procedimiento corneal",
        description:
          "Pacientes que desean comprender mejor la indicación, el objetivo terapéutico y las expectativas de una recomendación previa.",
      },
      {
        title: "Dudas sobre alternativas terapéuticas",
        description:
          "Casos en los que es importante revisar si existen opciones médicas, procedimientos u otras rutas posibles antes de decidir.",
      },
      {
        title: "Seguimiento posterior a intervención corneal",
        description:
          "Control clínico luego de un procedimiento para vigilar evolución, recuperación, confort ocular y comportamiento visual.",
      },
      {
        title: "Cambios visuales asociados a enfermedad corneal",
        description:
          "Cuando el compromiso de la córnea afecta de manera importante la visión y se requiere definir si existe indicación terapéutica procedimental.",
      },
      {
        title: "Necesidad de comprender el proceso",
        description:
          "Pacientes que buscan una explicación clara sobre preparación, recuperación, controles y tiempos esperados de evolución.",
      },
      {
        title: "Valoración de indicación clínica",
        description:
          "Revisión detallada del caso para establecer si la recomendación terapéutica es adecuada y oportuna para el paciente.",
      },
    ],

    procedures: [
      {
        title: "Valoración preprocedimiento",
        description:
          "Consulta orientada a definir la indicación, el objetivo terapéutico y las condiciones clínicas que deben tenerse en cuenta antes de avanzar.",
      },
      {
        title: "Acompañamiento en decisiones terapéuticas",
        description:
          "Explicación clara de alternativas, alcances, limitaciones y criterios clínicos que sustentan el procedimiento propuesto.",
      },
      {
        title: "Preparación y orientación del proceso",
        description:
          "Información para que el paciente comprenda cómo se organiza el manejo, qué esperar en el perioperatorio y por qué es importante el seguimiento.",
      },
      {
        title: "Seguimiento posterior",
        description:
          "Control clínico para verificar la evolución anatómica y funcional, resolver dudas y ajustar la conducta según la recuperación.",
      },
    ],

    patientExpectations: [
      {
        title: "Comprensión del caso clínico",
        description:
          "La consulta ayuda a entender por qué el procedimiento puede ser necesario y qué problema busca resolver dentro del tratamiento global.",
      },
      {
        title: "Orientación clara sobre el proceso",
        description:
          "El paciente recibe información comprensible sobre preparación, evolución, señales de alarma y controles posteriores.",
      },
      {
        title: "Expectativas realistas",
        description:
          "Se conversa sobre objetivos terapéuticos, tiempos de recuperación y necesidad de acompañamiento continuo según la enfermedad de base.",
      },
      {
        title: "Seguimiento especializado",
        description:
          "El control posterior es esencial para valorar recuperación visual, respuesta del tejido corneal y estabilidad del resultado clínico.",
      },
    ],

    faq: [
      {
        question: "¿Todos los problemas de córnea requieren un procedimiento?",
        answer:
          "No. La indicación depende del diagnóstico, la severidad, la evolución y el impacto sobre la visión. Algunos pacientes pueden manejarse con tratamiento médico y seguimiento.",
      },
      {
        question:
          "¿La valoración ayuda a entender si el procedimiento es realmente necesario?",
        answer:
          "Sí. La consulta permite revisar el caso, resolver dudas y definir si la indicación es adecuada para el paciente y su contexto clínico.",
      },
      {
        question: "¿El seguimiento posterior es importante?",
        answer:
          "Sí. Los controles posteriores son fundamentales para vigilar la evolución, ajustar el manejo y acompañar adecuadamente la recuperación.",
      },
      {
        question:
          "¿Puedo consultar aunque el procedimiento haya sido indicado en otra parte?",
        answer:
          "Sí. Una valoración especializada puede ayudarte a comprender mejor el caso y tomar decisiones con mayor claridad y confianza.",
      },
    ],

    theme: {
      accent: "#9DB2B8",
      heroOverlay: "from-[#2F3A43]/72 via-[#2F3A43]/40 to-[#2F3A43]/15",
      heroAlign: "left",
    },
  },
];

/**
 * Alias de compatibilidad.
 * Si en alguna parte del proyecto todavía importas `services`,
 * esto evita romper esa importación mientras migras.
 */
export const services = servicesEs;

export function getServices(locale: Locale = "es"): ServiceItem[] {
  return locale === "en" ? servicesEn : servicesEs;
}

export function getServiceBySlug(
  slug: string,
  locale: Locale = "es"
): ServiceItem | undefined {
  return getServices(locale).find((service) => service.slug === slug);
}