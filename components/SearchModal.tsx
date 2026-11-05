'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Language, Scheme, UpdateArticle } from '@/types';
import { searchJanLabh, SearchItem } from '@/lib/search';
import { Search, X, ChevronRight, FileText, Newspaper } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  onSelectScheme: (scheme: Scheme) => void;
  onSelectUpdate: (update: UpdateArticle) => void;
  allSchemes?: Scheme[];
  allUpdates?: UpdateArticle[];
}

export default function SearchModal({
  isOpen,
  onClose,
  lang,
  onSelectScheme,
  onSelectUpdate,
  allSchemes,
  allUpdates,
}: SearchModalProps) {
  const isHi = lang === 'hi';
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchItem[]>(() => searchJanLabh('kisan'));
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        // Toggle search
        if (!isOpen) {
          // Open triggered by parent
        }
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleQueryChange = (val: string) => {
    setQuery(val);
    if (val.trim().length > 0) {
      setResults(searchJanLabh(val));
    } else {
      setResults(searchJanLabh('kisan'));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 dark:bg-slate-950/80 backdrop-blur-sm p-4 sm:p-6 lg:p-8 flex justify-center items-start pt-16">
      <div 
        className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Search Input Bar */}
        <div className="flex items-center border-b border-slate-200 dark:border-slate-800 px-4 py-3 bg-slate-50 dark:bg-slate-900/90">
          <Search className="h-5 w-5 text-slate-400 shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => handleQueryChange(e.target.value)}
            placeholder={
              isHi 
                ? 'योजना, कीवर्ड या विषय खोजें (उदा. PM Kisan, मंईयां सम्मान, 70+ आयुष्मान)...' 
                : 'Search schemes, topics, or updates (e.g., PM Kisan, Ayushman 70+, Maiya Samman)...'
            }
            className="w-full bg-transparent text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg focus:outline-none transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Search Results list */}
        <div className="max-h-[60vh] overflow-y-auto p-2">
          {results.length > 0 ? (
            <div className="space-y-1">
              {results.map((item) => {
                if (item.type === 'scheme' && item.rawScheme) {
                  return (
                    <Link
                      key={item.id}
                      href={`/schemes/${item.rawScheme.slug}`}
                      onClick={() => {
                        onSelectScheme(item.rawScheme!);
                        onClose();
                      }}
                      className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-100/80 dark:hover:bg-slate-800/80 cursor-pointer transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-300 mt-0.5">
                          <FileText className="h-4 w-4 text-amber-700 dark:text-amber-400" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 dark:text-white">
                            {isHi ? item.title_hi : item.title}
                          </div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                            {item.summary}
                          </div>
                        </div>
                      </div>
                      <ChevronRight className="h-4 w-4 text-slate-400 dark:text-slate-500 shrink-0" />
                    </Link>
                  );
                }

                return (
                  <div
                    key={item.id}
                    onClick={() => {
                      if (item.type === 'update' && item.rawUpdate) {
                        onSelectUpdate(item.rawUpdate);
                        onClose();
                      }
                    }}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-100/80 dark:hover:bg-slate-800/80 cursor-pointer transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-300 mt-0.5">
                        <Newspaper className="h-4 w-4 text-sky-700 dark:text-sky-400" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 dark:text-white">
                          {isHi ? item.title_hi : item.title}
                        </div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                          {item.summary}
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="h-4 w-4 text-slate-400 dark:text-slate-500 shrink-0" />
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="p-8 text-center text-xs text-slate-500 dark:text-slate-400">
              {isHi
                ? `"${query}" के लिए कोई परिणाम नहीं मिला। कृपया अलग शब्द खोजें।`
                : `No results found for "${query}". Try searching with alternate keywords.`}
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-4 py-2.5 text-[11px] text-slate-400 dark:text-slate-500 flex items-center justify-between">
          <span>{isHi ? 'हिंदी, अंग्रेजी व हिंगलिश समर्थित' : 'Hindi, English & Hinglish supported'}</span>
          <span>Esc {isHi ? 'दबाकर बंद करें' : 'to close'}</span>
        </div>
      </div>
    </div>
  );
}
