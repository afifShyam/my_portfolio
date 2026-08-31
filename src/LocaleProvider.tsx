import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { ENGLISH, LocaleContext, MALAY, type Locale, type LocaleContextValue } from './localization';

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>(() => {
    const saved = window.localStorage.getItem('portfolio-locale');
    return saved === 'ms' ? 'ms' : 'en';
  });

  useEffect(() => {
    window.localStorage.setItem('portfolio-locale', locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo<LocaleContextValue>(() => {
    const dictionary = locale === 'ms' ? MALAY : ENGLISH;
    return {
      locale,
      toggleLocale: () => setLocale((current) => (current === 'en' ? 'ms' : 'en')),
      t: (key, fallback = key) => {
        const translated = dictionary[key];
        return typeof translated === 'string' ? translated : fallback;
      },
      list: (key, fallback = []) => {
        const translated = dictionary[key];
        return Array.isArray(translated) ? translated : fallback;
      },
    };
  }, [locale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
};

export default LocaleProvider;
