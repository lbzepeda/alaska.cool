export const siteConfig = {
  name: 'Alaska Cool',
  description: {
    es: 'Especialistas en sistemas de climatización y refrigeración en Nicaragua. Distribuidores oficiales de las mejores marcas de aires acondicionados.',
    en: 'Specialists in air conditioning and refrigeration systems in Nicaragua. Official distributors of the best air conditioning brands.',
    zh: '尼加拉瓜空调和制冷系统专家。最佳空调品牌的官方分销商。',
  },
  url: 'https://alaska-cool.com',
  defaultLang: 'es' as const,
  languages: {
    es: 'Español',
    en: 'English',
    zh: '中文',
  },
  contact: {
    phone: '+505 7772-6999',
    whatsapp: '50577726999',
    email: 'info@alaska-cool.com',
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
        /* 'Midea', */
        'TempBlue',
        'ComfortStar',
        'aire acondicionado Managua',
        'instalación aires acondicionados Nicaragua',
        'servicio técnico aires',
        'climatización comercial',
        'aires residenciales',
        'ventilación industrial',
        'distribuidores oficiales',
      ],
      en: [
        'air conditioning',
        'HVAC',
        'refrigeration',
        'Nicaragua',
        'Managua',
        'Rheem',
        /* 'Midea', */
        'TempBlue',
        'ComfortStar',
        'air conditioning Managua',
        'AC installation Nicaragua',
        'HVAC technical service',
        'commercial air conditioning',
        'residential AC units',
        'industrial ventilation',
        'official distributors',
      ],
      zh: [
        '空调',
        '暖通空调',
        '制冷',
        '尼加拉瓜',
        '马那瓜',
        'Rheem',
        /* 'Midea', */
        'TempBlue',
        'ComfortStar',
        '马那瓜空调',
        '尼加拉瓜空调安装',
        '空调技术服务',
        '商业空调',
        '家用空调',
        '工业通风',
        '官方分销商',
      ],
    },
    locale: {
      es: 'es_NI',
      en: 'en_US',
      zh: 'zh_CN',
    },
    region: 'NI',
  },
} as const;

export type SiteConfig = typeof siteConfig;