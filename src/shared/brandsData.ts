export type Category = "residential" | "industrial" | "fan";

export const brandsData = {
  tempblue: {
    name: "Tempblue",
    colorBrand: "bg-gradient-to-r from-emerald-600 to-sky-400",
    logo: "/brands/tempblue_logo.webp",
    tagline: " el futuro del confort.",
    imageBrand: "/brands/tempblue/ac-temp-blue.webp",
    description:
      "Bienvenido a una nueva era de climatización inteligente, donde la eficiencia energética y el confort se unen para ofrecerte la mejor experiencia.",
    models: [
      {
        id: "12k-110v",
        name: "12,000 BTU",
        voltage: "110V",
        voltageType: "blue",
        seer: 21.0,
        area: "12-15",
        recommended: "Habitaciones y oficinas pequeñas",
        features: {
          noise: "Modo ECO",
          current: "Auto restart",
          energyRating: "Timer",
        },
        highlight: "Ideal para hogares",
        certificate: "Certificado AHRI 12KBTU 110V-SEER2 21-Serie WX.pdf",
      },
      {
        id: "12k-220v",
        name: "12,000 BTU",
        voltage: "220V",
        voltageType: "purple",
        seer: 21.5,
        area: "12-15",
        recommended: "Espacios residenciales medianos",
        features: {
          noise: "Wi-Fi incorporado",
          current: "Filtro HD",
          energyRating: "Control avanzado",
        },
        highlight: "Máxima eficiencia",
        certificate: "Certificado AHRI 12KBTU-SEER2 21.5-Serie WX.pdf",
      },
      {
        id: "18k-220v",
        name: "18,000 BTU",
        voltage: "220V",
        voltageType: "purple",
        seer: 21.0,
        area: "16-23",
        recommended: "Salas y espacios abiertos",
        features: {
          noise: "Modo sleep",
          current: "Timer programable",
          energyRating: "Auto-diagnóstico",
        },
        highlight: "Balance perfecto",
        certificate: "Certificado AHRI 18KBTU-SEER2 21-Serie WX.pdf",
      },
      {
        id: "24k-220v",
        name: "24,000 BTU",
        voltage: "220V",
        voltageType: "purple",
        seer: 20.0,
        area: "24-30",
        recommended: "Oficinas y locales comerciales",
        features: {
          noise: "Control centralizado",
          current: "Instalación flexible",
          energyRating: "Alta potencia",
        },
        highlight: "Alto rendimiento",
        certificate: "Certificado AHRI 24KBTU-SEER2 20-Serie WX.pdf",
      },
      {
        id: "36k-220v",
        name: "36,000 BTU",
        voltage: "220V",
        voltageType: "purple",
        seer: 18.0,
        area: "30-45",
        recommended: "Grandes espacios comerciales",
        features: {
          noise: "Flujo de aire 4D",
          current: "Control grupal",
          energyRating: "Instalación múltiple",
        },
        highlight: "Máxima potencia",
        certificate: "Certificado AHRI 36KBTU-SEER2 18-Serie WX.pdf",
      },
    ],
    certifications: [
      {
        name: "AHRI Certified",
        image: "/brands/tempblue/certificates/ahri.webp",
        description: "Air-Conditioning, Heating, and Refrigeration Institute",
      },
      {
        name: "UL Listed",
        image: "/brands/tempblue/certificates/ul.webp",
        description: "Underwriters Laboratories Safety Certification",
      },
      {
        name: "Wi-Fi Certified",
        image: "/brands/tempblue/certificates/wireless-connection.webp",
        description: "Wi-Fi Alliance Certified Product",
      },
    ],
    FAQ: [
      {
        question: "¿Qué sistemas de climatización ofrecemos?",
        answer:
          "Nuestra gama premium incluye soluciones para cada necesidad: desde sistemas split y multisplit para hogares, hasta equipos industriales de alta capacidad. Cada sistema está seleccionado cuidadosamente para garantizar máxima eficiencia y confort en cualquier espacio.",
      },
      {
        question: "¿Cómo seleccionar el sistema ideal?",
        answer:
          "Nuestro proceso de selección es simple y efectivo. Un experto evaluará las dimensiones de tu espacio, orientación, uso diario y preferencias personales. Con esta información, te recomendaremos la solución que mejor optimice tu confort y consumo energético.",
      },
      {
        question: "¿Qué incluyen nuestros servicios?",
        answer:
          "Ofrecemos una solución integral: desde la instalación profesional por técnicos certificados hasta un programa completo de mantenimiento. Nos encargamos de todo para que tu único trabajo sea disfrutar del confort perfecto en tu espacio.",
      },
      {
        question: "¿Qué tan eficientes son nuestros sistemas?",
        answer:
          "Nuestros sistemas incorporan la última tecnología en eficiencia energética, alcanzando clasificación A+++ en consumo. Esto se traduce en un ahorro significativo en tu factura eléctrica y una reducción importante en la huella de carbono de tu hogar o negocio.",
      },
      {
        question: "¿Cuál es el tiempo de instalación?",
        answer:
          "La mayoría de instalaciones residenciales se completan en 4-6 horas, asegurando mínimas molestias. Para proyectos comerciales, desarrollamos un plan detallado que optimiza tiempos y recursos, manteniendo siempre los más altos estándares de calidad.",
      },
      {
        question: "¿Qué garantías ofrecemos?",
        answer:
          "Tu inversión está protegida con nuestra garantía integral: 12 meses por desperfectos de fábrica y garantía de servicio de mantenimiento de 1 mes.",
      },
    ],
  },
  rheem: {
    name: "Rheem",
    colorBrand: "bg-gradient-to-r from-red-600 to-red-400",
    logo: "/brands/rheem/rheem_logo.webp",
    tagline: "Innovación en climatización.",
    imageBrand: "/brands/rheem/hero-rheem.webp",
    description:
      "Descubre el poder de la climatización inteligente con Rheem. Nuestros sistemas Full Inverter ofrecen un rendimiento excepcional y eficiencia energética líder en la industria.",
    models: [
      {
        id: "rtaf-60",
        name: "60,000 BTU",
        voltage: "220V",
        voltageType: "purple",
        seer: 18.0,
        area: "45-60",
        recommended: "Espacios comerciales y grandes áreas",
        features: {
          noise: "Tecnología inverter",
          current: "Instalación versátil",
          energyRating: "Control avanzado",
        },
        highlight: "Máxima potencia",
        certificate: "Certificado_Rheem_60K_RTAF.pdf",
      },
    ],
    certifications: [
      {
        name: "AHRI",
        image: "/brands/rheem/certificates/ahri.webp",
        description: "Certificación AHRI",
      },
    ],
    FAQ: [
      {
        question: "¿Qué hace único al sistema Full Inverter de Rheem?",
        answer:
          "El sistema Full Inverter de Rheem ofrece un control preciso de la temperatura y una eficiencia energética superior, alcanzando los 18 SEER. Esto se traduce en un menor consumo eléctrico y un rendimiento óptimo en espacios comerciales.",
      },
      {
        question: "¿Cuáles son las ventajas del modelo piso/techo?",
        answer:
          "El modelo piso/techo ofrece una versatilidad excepcional en su instalación, adaptándose a diferentes configuraciones de espacio. Su capacidad de 60,000 BTU lo hace ideal para áreas comerciales grandes, manteniendo un funcionamiento eficiente y silencioso.",
      },
      {
        question: "¿Qué tipo de mantenimiento requiere?",
        answer:
          "Recomendamos un mantenimiento preventivo cada 6 meses para garantizar el óptimo funcionamiento del equipo. Esto incluye limpieza de filtros, revisión del sistema eléctrico y verificación del refrigerante R410A.",
      },
      {
        question: "¿Qué garantía incluye?",
        answer:
          "Ofrecemos una garantía completa que cubre componentes y mano de obra por 12 meses, además de garantía extendida en el compresor por 5 años, sujeto a mantenimientos regulares.",
      },
    ],
  },
  midea: {
    name: "Midea",
    colorBrand: "bg-gradient-to-r from-sky-500 to-blue-500",
    logo: "/brands/midea_logo.webp",
    tagline: "Innovación en cada detalle",
    imageBrand: "/brands/midea/Haaland Announcement PR.webp",
    videoBrand:
      "https://storage.googleapis.com/recursos_web/midea-video-hero.webm",
    description:
      "Midea lidera la innovación en climatización comercial con sistemas de alta capacidad que combinan eficiencia superior y tecnología avanzada, ofreciendo soluciones versátiles para espacios exigentes.",
    models: [
      {
        id: "mova-60cdn1-m20g",
        name: "MOVA-60CDN1-M20G",
        voltage: "220V",
        voltageType: "purple",
        seer: 20.0,
        area: "45-60",
        recommended: "Espacios comerciales premium",
        features: {
          noise: "Instalación flexible",
          current: "Control centralizado",
          energyRating: "Alto rendimiento",
        },
        highlight: "Máxima eficiencia SEER 20",
      },
      {
        id: "mov-60cdn1-n",
        name: "MOV-60CDN1-N",
        voltage: "220V",
        voltageType: "purple",
        seer: 16.0,
        area: "45-60",
        recommended: "Grandes espacios comerciales",
        features: {
          noise: "Control avanzado",
          current: "Instalación múltiple",
          energyRating: "Piso/Techo",
        },
        highlight: "Alto rendimiento",
      },
      {
        id: "mcd-60crdn1-n",
        name: "MCD-60CRDN1-N",
        voltage: "230V",
        voltageType: "purple",
        seer: 16.0,
        area: "45-60",
        recommended: "Oficinas con cielo falso",
        features: {
          noise: "Distribución 360°",
          current: "Cassette",
          energyRating: "Instalación en techo",
        },
        highlight: "Distribución uniforme",
      },
    ],
    certifications: [
      {
        name: "AHRI Certified",
        image: "/brands/midea/certificates/ahri.webp",
        description: "Air-Conditioning, Heating, and Refrigeration Institute",
      },
      {
        name: "UL Listed",
        image: "/brands/midea/certificates/ul.webp",
        description: "Underwriters Laboratories Safety Certification",
      },
    ],
    FAQ: [
      {
        question: "¿Qué tecnologías destacan en los equipos Midea?",
        answer:
          "Los sistemas Midea incorporan tecnología Inverter G de última generación, alcanzando eficiencias de hasta SEER 20 en sus modelos premium. Utilizan refrigerante R410A y están disponibles en configuraciones de piso/techo, cassette y ducto para adaptarse a cualquier espacio comercial.",
      },
      {
        question: "¿Qué opciones de instalación ofrece Midea?",
        answer:
          "Midea ofrece tres formatos principales de instalación: unidades piso/techo para máxima flexibilidad, cassette para instalación en cielo falso con distribución de aire en 360°, y sistemas de ducto para climatización centralizada.",
      },
      {
        question: "¿Qué capacidades están disponibles?",
        answer:
          "Los sistemas comerciales Midea están disponibles en capacidades de hasta 60,000 BTU, ideales para espacios comerciales grandes. Todos los modelos operan con 220/230V y ofrecen diferentes niveles de eficiencia SEER según las necesidades específicas del proyecto.",
      },
      {
        question: "¿Qué ventajas ofrece el sistema Inverter G?",
        answer:
          "El sistema Inverter G de Midea representa la última generación en control de climatización, optimizando el funcionamiento del compresor para maximizar la eficiencia energética y mantener una temperatura más estable, resultando en mayor confort y menor consumo eléctrico.",
      },
    ],
  },

  comfortstar: {
    name: "ComfortStar",
    colorBrand: "bg-gradient-to-r from-blue-600 to-sky-400",
    logo: "/brands/comfortstar_logo.webp",
    tagline: "Innovación y eficiencia en climatización",
    imageBrand: "/brands/comfortstar/hero-comforstar.webp",
    description:
      "ComfortStar ofrece una amplia gama de soluciones de climatización, desde sistemas mini-split de alta eficiencia hasta equipos comerciales de gran capacidad, todos respaldados por tecnología inverter y refrigerante ecológico R-410A.",
    models: [
      {
        id: "cip12cd-l",
        name: "CIP12CD-L",
        voltage: "230V",
        voltageType: "purple",
        seer: 21.5,
        area: "12-15",
        recommended: "Espacios residenciales",
        features: {
          noise: "Ultra silencioso",
          current: "Control avanzado",
          energyRating: "Eficiencia A+++",
        },
        highlight: "Máxima eficiencia",
      },
      {
        id: "cip12ca-el",
        name: "CIP12CA-EL",
        voltage: "115V",
        voltageType: "blue",
        seer: 20.0,
        area: "12-15",
        recommended: "Espacios residenciales",
        features: {
          noise: "Bajo consumo",
          current: "Instalación fácil",
          energyRating: "Diseño compacto",
        },
        highlight: "Versión 115V",
      },
      {
        id: "cip18cd-l",
        name: "CIP18CD-L",
        voltage: "230V",
        voltageType: "purple",
        seer: 21.0,
        area: "18-20",
        recommended: "Espacios medianos",
        features: {
          noise: "Modo eco",
          current: "Timer programable",
          energyRating: "Alta eficiencia",
        },
        highlight: "Alto rendimiento",
      },
      {
        id: "neo60sc-t",
        name: "NEO60SC-T",
        voltage: "230V",
        voltageType: "purple",
        seer: 18.0,
        area: "45-60",
        recommended: "Espacios comerciales",
        features: {
          noise: "Piso/Techo",
          current: "Control centralizado",
          energyRating: "Instalación flexible",
        },
        highlight: "Máxima potencia",
      },
    ],
    FAQ: [
      {
        question: "¿Qué tecnologías incluyen los equipos ComfortStar?",
        answer:
          "Los equipos ComfortStar incorporan tecnología Inverter de última generación, alcanzando eficiencias de hasta 21.5 SEER. Utilizan refrigerante ecológico R-410A y están disponibles en diversos formatos como mini-split, piso/techo, cassette y ducto.",
      },
      {
        question: "¿Qué capacidades están disponibles?",
        answer:
          "ComfortStar ofrece una amplia gama de capacidades desde 12,000 BTU hasta 60,000 BTU, con opciones tanto en 115V como en 230V, adaptándose a diferentes necesidades de climatización, desde espacios residenciales hasta comerciales.",
      },
      {
        question: "¿Qué tipos de instalación ofrece ComfortStar?",
        answer:
          "ComfortStar ofrece múltiples opciones de instalación: mini-split para instalación en pared, unidades piso/techo para mayor versatilidad, cassette para instalación en cielo falso, y sistemas de ducto para climatización centralizada.",
      },
      {
        question: "¿Qué garantía incluyen los equipos?",
        answer:
          "Los equipos ComfortStar incluyen garantía contra defectos de fabricación y el respaldo de una marca reconocida en el mercado de climatización. Consulta con tu distribuidor autorizado los términos específicos de garantía para cada modelo.",
      },
    ],
  },
};

export type BrandKey = keyof typeof brandsData;
export type BrandData = (typeof brandsData)[BrandKey];
