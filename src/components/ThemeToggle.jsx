// src/components/ThemeToggle.jsx
import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  // 1. Check local storage or system preference on load
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return (
        localStorage.getItem('theme') === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
      );
    }
    return false;
  });

  // 2. Add/remove the .dark class on the root HTML element
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  // 3. Render the interactive button
  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="size-10 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 text-gray-600 dark:text-zinc-400 transition-colors cursor-pointer"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun size={16} className="stroke-amber-500 fill-amber-500/20" />
      ) : (
        <Moon size={16} />
      )}
    </button>
  );
}