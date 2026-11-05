'use client';

import { useState, useEffect, useCallback } from 'react';
import { Language } from '@/types';

const STORAGE_KEY = 'janlabh-lang';
const EVENT_NAME = 'janlabh-lang-change';

export function useLanguage() {
  const [lang, setLangState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored === 'en' || stored === 'hi') {
          return stored;
        }
      } catch (e) {
        // In case localStorage is blocked
      }
    }
    return 'hi';
  });

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if ((stored === 'en' || stored === 'hi') && stored !== lang) {
        setLangState(stored);
      }
      if (typeof document !== 'undefined') {
        document.documentElement.lang = stored || lang;
      }
    } catch (e) {}

    const handleCustomChange = (e: Event) => {
      const customEvent = e as CustomEvent<Language>;
      if (customEvent.detail === 'en' || customEvent.detail === 'hi') {
        setLangState(customEvent.detail);
      }
    };

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && (e.newValue === 'en' || e.newValue === 'hi')) {
        setLangState(e.newValue);
      }
    };

    window.addEventListener(EVENT_NAME, handleCustomChange);
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener(EVENT_NAME, handleCustomChange);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [lang]);

  const setLanguage = useCallback((newLang: Language) => {
    setLangState(newLang);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(STORAGE_KEY, newLang);
        document.documentElement.lang = newLang;
        window.dispatchEvent(new CustomEvent<Language>(EVENT_NAME, { detail: newLang }));
      } catch (e) {}
    }
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage(lang === 'hi' ? 'en' : 'hi');
  }, [lang, setLanguage]);

  return {
    lang,
    setLanguage,
    toggleLanguage,
    isHi: lang === 'hi',
  };
}
