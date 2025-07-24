export type Theme = 'light' | 'dark';

export const getInitialTheme = (): Theme => {
  if (typeof window === 'undefined') return 'light';
  
  const stored = localStorage.getItem('theme') as Theme;
  if (stored && ['light', 'dark'].includes(stored)) {
    return stored;
  }
  
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const setTheme = (theme: Theme): void => {
  if (typeof window === 'undefined') return;
  
  localStorage.setItem('theme', theme);
  document.documentElement.classList.toggle('dark', theme === 'dark');
  
  // Trigger custom event for theme change
  window.dispatchEvent(new CustomEvent('theme-change', { detail: { theme } }));
};

export const toggleTheme = (): Theme => {
  const currentTheme = getInitialTheme();
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
  return newTheme;
};

export const initializeTheme = (): void => {
  const theme = getInitialTheme();
  setTheme(theme);
  
  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });
};

// For Astro View Transitions
export const handleViewTransition = (): void => {
  const theme = getInitialTheme();
  document.documentElement.classList.toggle('dark', theme === 'dark');
};