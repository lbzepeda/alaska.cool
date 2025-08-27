import { t } from '../i18n/utils';
import type { Language } from '../i18n/translations';
import { getRelativeLocaleUrl } from 'astro:i18n';

export interface BreadcrumbItem {
  name: string;
  href: string;
  position: number;
}

export interface BreadcrumbSchema {
  "@context": "https://schema.org";
  "@type": "BreadcrumbList";
  "itemListElement": Array<{
    "@type": "ListItem";
    "position": number;
    "name": string;
    "item": string;
  }>;
}

export function generateBreadcrumbs(pathname: string, currentLang: Language = 'es'): BreadcrumbItem[] {
  const breadcrumbs: BreadcrumbItem[] = [];
  
  // Always start with home
  breadcrumbs.push({
    name: t(currentLang, 'nav.home'),
    href: getRelativeLocaleUrl(currentLang, '/'),
    position: 1
  });

  // Remove language prefix and clean pathname
  const cleanPath = pathname
    .replace(/^\/(en|zh)\//, '/') // Remove language prefix
    .replace(/\/$/, '') // Remove trailing slash
    .replace(/^\//, ''); // Remove leading slash

  if (!cleanPath) {
    return breadcrumbs; // Home page only
  }

  const pathSegments = cleanPath.split('/').filter(Boolean);
  
  for (let i = 0; i < pathSegments.length; i++) {
    const segment = pathSegments[i];
    const currentPath = '/' + pathSegments.slice(0, i + 1).join('/');
    
    let name = '';
    let href = '';
    
    // Map specific paths to readable names
    switch (segment) {
      case 'about':
        name = t(currentLang, 'nav.about');
        href = getRelativeLocaleUrl(currentLang, '/about');
        break;
        
      case 'catalogo':
        name = t(currentLang, 'nav.products');
        href = getRelativeLocaleUrl(currentLang, '/catalogo');
        break;
        
      case 'marca':
        name = currentLang === 'es' ? 'Marcas' : currentLang === 'en' ? 'Brands' : '品牌';
        href = getRelativeLocaleUrl(currentLang, currentPath);
        break;
        
      case 'tempblue':
        name = 'TempBlue';
        href = getRelativeLocaleUrl(currentLang, currentPath);
        break;
        
      case 'rheem':
        name = 'Rheem';
        href = getRelativeLocaleUrl(currentLang, currentPath);
        break;
        
      case 'comfort-star':
        name = 'ComfortStar';
        href = getRelativeLocaleUrl(currentLang, currentPath);
        break;
        
      case 'soler-palau':
        name = 'Soler & Palau';
        href = getRelativeLocaleUrl(currentLang, currentPath);
        break;
        
      default:
        // Capitalize and clean segment
        name = segment
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
        href = getRelativeLocaleUrl(currentLang, currentPath);
    }
    
    if (name && href) {
      breadcrumbs.push({
        name,
        href,
        position: i + 2
      });
    }
  }

  return breadcrumbs;
}

export function generateBreadcrumbSchema(breadcrumbs: BreadcrumbItem[], siteUrl: string = 'https://alaska.cool'): BreadcrumbSchema {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map(breadcrumb => ({
      "@type": "ListItem",
      "position": breadcrumb.position,
      "name": breadcrumb.name,
      "item": `${siteUrl}${breadcrumb.href}`
    }))
  };
}

export function shouldShowBreadcrumbs(pathname: string): boolean {
  // Don't show breadcrumbs on home page
  if (pathname === '/' || pathname.match(/^\/(en|zh)\/?$/)) {
    return false;
  }
  
  // Show on all other pages
  return true;
}