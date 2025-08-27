import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { siteConfig } from '../config/site';

export async function GET(context: APIContext) {
  const posts = [
    {
      title: 'Nuevos Aires Acondicionados Rheem 2024',
      pubDate: new Date('2024-01-15'),
      description: 'Descubre los nuevos modelos de aires acondicionados Rheem con mayor eficiencia energética y tecnología inverter.',
      link: '/rheem',
      category: 'Productos'
    },
    {
      title: 'Guía de Mantenimiento para Aires Acondicionados',
      pubDate: new Date('2024-02-01'),
      description: 'Aprende cómo mantener tu aire acondicionado en óptimas condiciones para prolongar su vida útil.',
      link: '/about',
      category: 'Consejos'
    },
    {
      title: 'ComfortStar: Calidad y Eficiencia Energética',
      pubDate: new Date('2024-03-10'),
      description: 'Los aires acondicionados ComfortStar ofrecen la mejor relación calidad-precio en el mercado nicaragüense.',
      link: '/comfort-star',
      category: 'Productos'
    },
    {
      title: 'Instalación Profesional de Aires Acondicionados',
      pubDate: new Date('2024-04-05'),
      description: 'La importancia de una instalación profesional para maximizar la eficiencia de tu aire acondicionado.',
      link: '/contact',
      category: 'Servicios'
    },
    {
      title: 'TempBlue: Innovación en Climatización',
      pubDate: new Date('2024-05-20'),
      description: 'Conoce las características innovadoras de los aires acondicionados TempBlue y sus beneficios únicos.',
      link: '/tempblue',
      category: 'Productos'
    },
  ];

  return rss({
    title: siteConfig.name,
    description: siteConfig.description.es,
    site: context.site || siteConfig.url,
    items: posts.map((post) => ({
      ...post,
      link: siteConfig.url + post.link,
      guid: siteConfig.url + post.link,
      author: siteConfig.contact.email,
    })),
    customData: `
      <language>es-NI</language>
      <managingEditor>${siteConfig.contact.email} (Alaska Cool)</managingEditor>
      <webMaster>${siteConfig.contact.email} (Alaska Cool)</webMaster>
      <category>HVAC</category>
      <category>Aires Acondicionados</category>
      <category>Climatización</category>
      <ttl>1440</ttl>
      <image>
        <url>${siteConfig.url}/logo.webp</url>
        <title>${siteConfig.name}</title>
        <link>${siteConfig.url}</link>
        <width>144</width>
        <height>144</height>
      </image>
    `,
  });
}