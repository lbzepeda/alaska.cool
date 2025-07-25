export const siteConfig = {
  name: 'Alaska Cool',
  description: {
    es: 'Especialistas en sistemas de climatización y refrigeración en Nicaragua. Distribuidores oficiales de las mejores marcas de aires acondicionados.',
    en: 'Specialists in air conditioning and refrigeration systems in Nicaragua. Official distributors of the best air conditioning brands.',
  },
  url: 'https://alaska.cool',
  defaultLang: 'es' as const,
  languages: {
    es: 'Español',
    en: 'English',
  },
  contact: {
    phone: '+505 7772-6999',
    whatsapp: '50577726999',
    email: 'info@alaska.cool',
  },
  business: {
    name: 'Alaska Cool Nicaragua',
    address: 'Managua, Nicaragua',
    coordinates: {
      latitude: 12.1364,
      longitude: -86.2514,
    },
  },
  verification: {
    google: process.env.GOOGLE_VERIFICATION || '',
    facebook: process.env.FACEBOOK_VERIFICATION || '',
  },
  social: {
    facebook: 'https://facebook.com/alaskacoolnicaragua',
    instagram: 'https://instagram.com/alaskacoolnicaragua',
    whatsapp: 'https://wa.me/50577726999',
  },
  seo: {
    keywords: {
      es: [
        'aires acondicionados',
        'climatización',
        'refrigeración',
        'Nicaragua',
        'Managua',
        'Rheem',
        'Midea',
        'TempBlue',
        'ComfortStar',
      ],
      en: [
        'air conditioning',
        'HVAC',
        'refrigeration',
        'Nicaragua',
        'Managua',
        'Rheem',
        'Midea',
        'TempBlue',
        'ComfortStar',
      ],
    },
    locale: {
      es: 'es_NI',
      en: 'en_US',
    },
    region: 'NI',
  },
} as const;

export type SiteConfig = typeof siteConfig;