import { translations, type Language } from './translations';

export function getTranslations(lang: Language) {
  return translations[lang] || translations.es;
}

export function t(lang: Language, key: string): string {
  const keys = key.split('.');
  let value: any = getTranslations(lang);
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
}

export function isValidLanguage(lang: string): lang is Language {
  return lang === 'es' || lang === 'en' || lang === 'zh';
}

export function getLanguageFromUrl(url: URL): Language {
  const segments = url.pathname.split('/');
  const langSegment = segments[1];
  
  if (isValidLanguage(langSegment)) {
    return langSegment;
  }
  
  return 'es'; // default
}

// Utility for multilingual content
export type MultiLangContent = {
  es: string;
  en: string;
  zh: string;
};

export function getLocalizedContent(content: string | MultiLangContent, lang: Language): string {
  if (typeof content === 'string') {
    return content;
  }
  return content[lang] || content.es;
}