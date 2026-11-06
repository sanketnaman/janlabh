'use client';

import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'janlabh-theme';
const EVENT_NAME = 'janlabh-theme-change';

export function useTheme() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored === 'dark') return true;
        if (stored === 'light') return false;
        return document.documentElement.classList.contains('dark');
      } catch (_) {}
    }
    return false;
  });

  useEffect(() => {
    // 1. Immediately synchronize on mount
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      const shouldBeDark = stored === 'dark' || (!stored && (document.documentElement.classList.contains('dark') || prefersDark));

      setIsDark(shouldBeDark);
      if (shouldBeDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch (_) {}

    // 2. Listen to custom event (within same tab across components/pages)
    const handleCustomChange = (e: Event) => {
      const customEvent = e as CustomEvent<boolean>;
      setIsDark(customEvent.detail);
      if (customEvent.detail) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    // 3. Listen to storage event (cross-tab sync)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) {
        const nextDark = e.newValue === 'dark';
        setIsDark(nextDark);
        if (nextDark) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    };

    window.addEventListener(EVENT_NAME, handleCustomChange);
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener(EVENT_NAME, handleCustomChange);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => {
      const next = !prev;
      if (typeof window !== 'undefined') {
        try {
          if (next) {
            document.documentElement.classList.add('dark');
            localStorage.setItem(STORAGE_KEY, 'dark');
          } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem(STORAGE_KEY, 'light');
          }
          window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: next }));
        } catch (_) {}
      }
      return next;
    });
  }, []);

  return { isDark, toggleTheme };
}
