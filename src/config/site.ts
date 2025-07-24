export const siteConfig = {
  name: 'Alaska Cool',
  description: 'Especialistas en sistemas de climatización y refrigeración en Nicaragua. Distribuidores oficiales de las mejores marcas de aires acondicionados.',
  url: 'https://alaska.cool',
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
    keywords: [
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
    locale: 'es_NI',
    region: 'NI',
  },
} as const;

export type SiteConfig = typeof siteConfig;