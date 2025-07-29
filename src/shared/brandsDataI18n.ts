// Archivo: /Users/levizepeda/Repo/alaska.cool/src/shared/brandsDataI18n.ts
// Ejemplo de cómo internacionalizar brandsData.ts

import type { MultiLangContent } from '../i18n/utils';

export type Category = "residential" | "industrial" | "fan";

// Estructura internacionalizada
interface BrandDataI18n {
  name: string;
  colorBrand: string;
  logo: string;
  tagline: MultiLangContent;
  imageBrand: string;
  description: MultiLangContent;
  models: Array<{
    id: string;
    name: string;
    voltage: string;
    voltageType: string;
    seer: number;
    area: string;
    recommended: MultiLangContent;
    features: {
      noise: MultiLangContent;
      current: MultiLangContent;
      energyRating: MultiLangContent;
    };
    highlight: MultiLangContent;
    certificate?: string;
  }>;
  certifications: Array<{
    name: string;
    image: string;
    description: MultiLangContent;
  }>;
  FAQ: Array<{
    question: MultiLangContent;
    answer: MultiLangContent;
  }>;
}

// Ejemplo de datos internacionalizados para TempBlue
export const tempBlueI18n: BrandDataI18n = {
  name: "Tempblue",
  colorBrand: "bg-gradient-to-r from-emerald-600 to-sky-400",
  logo: "/brands/tempblue_logo.webp",
  tagline: {
    es: "el futuro del confort.",
    en: "the future of comfort.",
    zh: "舒适的未来。"
  },
  imageBrand: "/brands/tempblue/ac-temp-blue.webp",
  description: {
    es: "Bienvenido a una nueva era de climatización inteligente, donde la eficiencia energética y el confort se unen para ofrecerte la mejor experiencia.",
    en: "Welcome to a new era of smart air conditioning, where energy efficiency and comfort come together to offer you the best experience.",
    zh: "欢迎来到智能空调的新时代，能源效率和舒适性结合，为您提供最佳体验。"
  },
  models: [
    {
      id: "12k-110v",
      name: "12,000 BTU",
      voltage: "110V",
      voltageType: "blue",
      seer: 21.0,
      area: "12-15",
      recommended: {
        es: "Habitaciones y oficinas pequeñas",
        en: "Small bedrooms and offices",
        zh: "小型卧室和办公室"
      },
      features: {
        noise: {
          es: "Modo ECO",
          en: "ECO Mode",
          zh: "ECO模式"
        },
        current: {
          es: "Auto restart",
          en: "Auto restart",
          zh: "自动重启"
        },
        energyRating: {
          es: "Timer",
          en: "Timer",
          zh: "定时器"
        }
      },
      highlight: {
        es: "Ideal para hogares",
        en: "Ideal for homes",
        zh: "家庭理想选择"
      },
      certificate: "Certificado AHRI 12KBTU 110V-SEER2 21-Serie WX.pdf",
    }
  ],
  certifications: [
    {
      name: "AHRI Certified",
      image: "/brands/tempblue/certificates/ahri.webp",
      description: {
        es: "Instituto de Aire Acondicionado, Calefacción y Refrigeración",
        en: "Air-Conditioning, Heating, and Refrigeration Institute",
        zh: "空调、供暖和制冷协会"
      }
    }
  ],
  FAQ: [
    {
      question: {
        es: "¿Qué sistemas de climatización ofrecemos?",
        en: "What HVAC systems do we offer?",
        zh: "我们提供什么空调系统？"
      },
      answer: {
        es: "Nuestra gama premium incluye soluciones para cada necesidad: desde sistemas split y multisplit para hogares, hasta equipos industriales de alta capacidad.",
        en: "Our premium range includes solutions for every need: from split and multi-split systems for homes, to high-capacity industrial equipment.",
        zh: "我们的高端产品系列包括满足各种需求的解决方案：从家用分体式和多联机系统到大容量工业设备。"
      }
    }
  ]
};

// Función helper para convertir datos antiguos a la nueva estructura
export function getBrandDataForLanguage(brandData: BrandDataI18n, lang: 'es' | 'en' | 'zh') {
  return {
    ...brandData,
    tagline: brandData.tagline[lang],
    description: brandData.description[lang],
    models: brandData.models.map(model => ({
      ...model,
      recommended: model.recommended[lang],
      features: {
        noise: model.features.noise[lang],
        current: model.features.current[lang],
        energyRating: model.features.energyRating[lang]
      },
      highlight: model.highlight[lang]
    })),
    certifications: brandData.certifications.map(cert => ({
      ...cert,
      description: cert.description[lang]
    })),
    FAQ: brandData.FAQ.map(faq => ({
      question: faq.question[lang],
      answer: faq.answer[lang]
    }))
  };
}