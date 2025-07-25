export const translations = {
  es: {
    nav: {
      home: 'Inicio',
      catalog: 'Catálogo',
      brands: 'Marcas',
      about: 'Nosotros',
      contact: 'Contacto',
    },
    home: {
      title: 'Especialistas en Climatización',
      subtitle: 'Sistemas de climatización y refrigeración de alta calidad en Nicaragua',
      cta: 'Ver Catálogo',
      whatsapp: 'Contactar por WhatsApp',
    },
    brands: {
      title: 'Nuestras Marcas',
      subtitle: 'Distribuidores oficiales de las mejores marcas',
      rheem: {
        name: 'Rheem',
        description: 'Líder mundial en sistemas de climatización',
      },
      midea: {
        name: 'Midea',
        description: 'Tecnología innovadora en refrigeración',
      },
      tempblue: {
        name: 'TempBlue',
        description: 'Soluciones eficientes de climatización',
      },
      comfortstar: {
        name: 'ComfortStar',
        description: 'Comodidad y calidad garantizada',
      },
    },
    catalog: {
      title: 'Catálogo de Productos',
      subtitle: 'Encuentra el sistema de climatización perfecto',
      filters: 'Filtros',
      allBrands: 'Todas las marcas',
      residential: 'Residencial',
      commercial: 'Comercial',
      industrial: 'Industrial',
    },
    contact: {
      title: 'Contacto',
      subtitle: 'Estamos aquí para ayudarte',
      phone: 'Teléfono',
      email: 'Correo',
      address: 'Dirección',
      whatsapp: 'WhatsApp',
    },
    about: {
      title: 'Sobre Nosotros',
      subtitle: 'Especialistas en climatización con años de experiencia',
      description: 'Alaska Cool es una empresa nicaragüense especializada en sistemas de climatización y refrigeración. Somos distribuidores oficiales de las mejores marcas internacionales.',
    },
    footer: {
      description: 'Especialistas en sistemas de climatización y refrigeración en Nicaragua',
      links: 'Enlaces',
      followUs: 'Síguenos',
      rights: 'Todos los derechos reservados',
    },
    common: {
      learnMore: 'Conocer más',
      viewProducts: 'Ver productos',
      backToHome: 'Volver al inicio',
      loading: 'Cargando...',
      error: 'Error al cargar',
    },
  },
  en: {
    nav: {
      home: 'Home',
      catalog: 'Catalog',
      brands: 'Brands',
      about: 'About',
      contact: 'Contact',
    },
    home: {
      title: 'HVAC Specialists',
      subtitle: 'High-quality air conditioning and refrigeration systems in Nicaragua',
      cta: 'View Catalog',
      whatsapp: 'Contact via WhatsApp',
    },
    brands: {
      title: 'Our Brands',
      subtitle: 'Official distributors of the best brands',
      rheem: {
        name: 'Rheem',
        description: 'Global leader in HVAC systems',
      },
      midea: {
        name: 'Midea',
        description: 'Innovative refrigeration technology',
      },
      tempblue: {
        name: 'TempBlue',
        description: 'Efficient HVAC solutions',
      },
      comfortstar: {
        name: 'ComfortStar',
        description: 'Guaranteed comfort and quality',
      },
    },
    catalog: {
      title: 'Product Catalog',
      subtitle: 'Find the perfect HVAC system',
      filters: 'Filters',
      allBrands: 'All brands',
      residential: 'Residential',
      commercial: 'Commercial',
      industrial: 'Industrial',
    },
    contact: {
      title: 'Contact',
      subtitle: 'We are here to help you',
      phone: 'Phone',
      email: 'Email',
      address: 'Address',
      whatsapp: 'WhatsApp',
    },
    about: {
      title: 'About Us',
      subtitle: 'HVAC specialists with years of experience',
      description: 'Alaska Cool is a Nicaraguan company specialized in air conditioning and refrigeration systems. We are official distributors of the best international brands.',
    },
    footer: {
      description: 'Specialists in air conditioning and refrigeration systems in Nicaragua',
      links: 'Links',
      followUs: 'Follow us',
      rights: 'All rights reserved',
    },
    common: {
      learnMore: 'Learn more',
      viewProducts: 'View products',
      backToHome: 'Back to home',
      loading: 'Loading...',
      error: 'Error loading',
    },
  },
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.es;