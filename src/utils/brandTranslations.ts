import { getLocalizedContent } from '../i18n/utils';

// Traducciones completas para los componentes de marca
export const brandTranslations = {
  rheem: {
    tagline: {
      es: "Innovación en climatización.",
      en: "HVAC Innovation.",
      zh: "空调创新。"
    },
    description: {
      es: "Descubre el poder de la climatización inteligente con Rheem. Nuestros sistemas Full Inverter ofrecen un rendimiento excepcional y eficiencia energética líder en la industria.",
      en: "Discover the power of smart HVAC with Rheem. Our Full Inverter systems offer exceptional performance and industry-leading energy efficiency.",
      zh: "探索Rheem智能空调的力量。我们的全变频系统提供卓越的性能和行业领先的能效。"
    },
    faq: [
      {
        question: {
          es: "¿Qué hace único al sistema Full Inverter de Rheem?",
          en: "What makes Rheem's Full Inverter system unique?",
          zh: "Rheem全变频系统的独特之处是什么？"
        },
        answer: {
          es: "El sistema Full Inverter de Rheem ofrece un control preciso de la temperatura y una eficiencia energética superior, alcanzando los 18 SEER. Esto se traduce en un menor consumo eléctrico y un rendimiento óptimo en espacios comerciales.",
          en: "Rheem's Full Inverter system offers precise temperature control and superior energy efficiency, reaching 18 SEER. This translates to lower electricity consumption and optimal performance in commercial spaces.",
          zh: "Rheem的全变频系统提供精确的温度控制和卓越的能效，达到18 SEER。这意味着更低的电力消耗和在商业空间中的最佳性能。"
        }
      },
      {
        question: {
          es: "¿Cuáles son las ventajas del modelo piso/techo?",
          en: "What are the advantages of the floor/ceiling model?",
          zh: "地板/天花板型号的优势是什么？"
        },
        answer: {
          es: "El modelo piso/techo ofrece una versatilidad excepcional en su instalación, adaptándose a diferentes configuraciones de espacio. Su capacidad de 60,000 BTU lo hace ideal para áreas comerciales grandes, manteniendo un funcionamiento eficiente y silencioso.",
          en: "The floor/ceiling model offers exceptional installation versatility, adapting to different space configurations. Its 60,000 BTU capacity makes it ideal for large commercial areas, maintaining efficient and quiet operation.",
          zh: "地板/天花板型号在安装方面提供卓越的多功能性，适应不同的空间配置。其60,000 BTU的容量使其成为大型商业区域的理想选择，保持高效和安静的运行。"
        }
      }
    ]
  },
  tempBlue: {
    tagline: {
      es: "el futuro del confort.",
      en: "the future of comfort.",
      zh: "舒适的未来。"
    },
    description: {
      es: "Bienvenido a una nueva era de climatización inteligente, donde la eficiencia energética y el confort se unen para ofrecerte la mejor experiencia.",
      en: "Welcome to a new era of smart air conditioning, where energy efficiency and comfort come together to offer you the best experience.",
      zh: "欢迎来到智能空调的新时代，能源效率和舒适性结合，为您提供最佳体验。"
    },
    faq: [
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
  },
  comfortStar: {
    tagline: {
      es: "Confort y eficiencia.",
      en: "Comfort and efficiency.",
      zh: "舒适与高效。"
    },
    description: {
      es: "ComfortStar ofrece soluciones de climatización de alta calidad con tecnología Inverter avanzada, diseñadas para maximizar el confort y minimizar el consumo energético.",
      en: "ComfortStar offers high-quality HVAC solutions with advanced Inverter technology, designed to maximize comfort and minimize energy consumption.",
      zh: "ComfortStar提供高品质的空调解决方案，采用先进的变频技术，旨在最大化舒适度并最小化能耗。"
    },
    faq: [
      {
        question: {
          es: "¿Qué capacidades están disponibles?",
          en: "What capacities are available?",
          zh: "有哪些容量可选？"
        },
        answer: {
          es: "ComfortStar ofrece una amplia gama de capacidades desde 12,000 BTU hasta 60,000 BTU, con opciones tanto en 115V como en 230V, adaptándose a diferentes necesidades de climatización, desde espacios residenciales hasta comerciales.",
          en: "ComfortStar offers a wide range of capacities from 12,000 BTU to 60,000 BTU, with options in both 115V and 230V, adapting to different HVAC needs, from residential to commercial spaces.",
          zh: "ComfortStar提供从12,000 BTU到60,000 BTU的广泛容量范围，提供115V和230V选项，适应从住宅到商业空间的不同空调需求。"
        }
      },
      {
        question: {
          es: "¿Qué tipos de instalación ofrece ComfortStar?",
          en: "What types of installation does ComfortStar offer?",
          zh: "ComfortStar提供哪些安装类型？"
        },
        answer: {
          es: "ComfortStar ofrece múltiples opciones de instalación: mini-split para instalación en pared, unidades piso/techo para mayor versatilidad, cassette para instalación en cielo falso, y sistemas de ducto para climatización centralizada.",
          en: "ComfortStar offers multiple installation options: mini-split for wall installation, floor/ceiling units for greater versatility, cassette for false ceiling installation, and duct systems for centralized air conditioning.",
          zh: "ComfortStar提供多种安装选项：壁挂式分体机、地板/天花板机组以获得更大的多功能性、卡匣式机组用于吊顶安装，以及管道系统用于集中空调。"
        }
      }
    ]
  }
};

// Traducciones comunes para características de modelos
const commonFeatureTranslations = {
  // Features de modelos
  "Modo ECO": { es: "Modo ECO", en: "ECO Mode", zh: "ECO模式" },
  "Auto restart": { es: "Auto restart", en: "Auto restart", zh: "自动重启" },
  "Timer": { es: "Timer", en: "Timer", zh: "定时器" },
  "Wi-Fi incorporado": { es: "Wi-Fi incorporado", en: "Built-in Wi-Fi", zh: "内置Wi-Fi" },
  "Filtro HD": { es: "Filtro HD", en: "HD Filter", zh: "高清过滤器" },
  "Control avanzado": { es: "Control avanzado", en: "Advanced Control", zh: "高级控制" },
  "Modo sleep": { es: "Modo sleep", en: "Sleep Mode", zh: "睡眠模式" },
  "Timer programable": { es: "Timer programable", en: "Programmable Timer", zh: "可编程定时器" },
  "Auto-diagnóstico": { es: "Auto-diagnóstico", en: "Self-diagnosis", zh: "自诊断" },
  "Tecnología inverter": { es: "Tecnología inverter", en: "Inverter Technology", zh: "变频技术" },
  "Instalación versátil": { es: "Instalación versátil", en: "Versatile Installation", zh: "多功能安装" },
  "Ultra silencioso": { es: "Ultra silencioso", en: "Ultra quiet", zh: "超静音" },
  "Eficiencia A+++": { es: "Eficiencia A+++", en: "A+++ Efficiency", zh: "A+++能效" },
  
  // Highlights
  "Ideal para hogares": { es: "Ideal para hogares", en: "Ideal for homes", zh: "家庭理想选择" },
  "Máxima eficiencia": { es: "Máxima eficiencia", en: "Maximum efficiency", zh: "最大效率" },
  "Balance perfecto": { es: "Balance perfecto", en: "Perfect balance", zh: "完美平衡" },
  "Alto rendimiento": { es: "Alto rendimiento", en: "High performance", zh: "高性能" },
  "Máxima potencia": { es: "Máxima potencia", en: "Maximum power", zh: "最大功率" },
  
  // Recommended uses
  "Habitaciones y oficinas pequeñas": { es: "Habitaciones y oficinas pequeñas", en: "Small bedrooms and offices", zh: "小型卧室和办公室" },
  "Espacios residenciales medianos": { es: "Espacios residenciales medianos", en: "Medium residential spaces", zh: "中型住宅空间" },
  "Espacios comerciales y grandes áreas": { es: "Espacios comerciales y grandes áreas", en: "Commercial spaces and large areas", zh: "商业空间和大面积区域" }
};

function translateCommonText(text: string, lang: 'es' | 'en' | 'zh'): string {
  const translation = commonFeatureTranslations[text as keyof typeof commonFeatureTranslations];
  return translation ? getLocalizedContent(translation, lang) : text;
}

export function getBrandDataWithTranslations(brandData: any, brandKey: keyof typeof brandTranslations, lang: 'es' | 'en' | 'zh') {
  const translations = brandTranslations[brandKey];
  
  return {
    ...brandData,
    tagline: getLocalizedContent(translations.tagline, lang),
    description: getLocalizedContent(translations.description, lang),
    FAQ: translations.faq ? translations.faq.map(faq => ({
      question: getLocalizedContent(faq.question, lang),
      answer: getLocalizedContent(faq.answer, lang)
    })) : brandData.FAQ, // Fallback to original FAQs if no translation
    models: brandData.models.map((model: any) => ({
      ...model,
      recommended: translateCommonText(model.recommended, lang),
      highlight: translateCommonText(model.highlight, lang),
      features: {
        noise: translateCommonText(model.features.noise, lang),
        current: translateCommonText(model.features.current, lang),
        energyRating: translateCommonText(model.features.energyRating, lang)
      }
    }))
  };
}