import { createContext, useState, useContext, useEffect } from 'react';
import { Theme, defaultTheme } from '@/style/theme';

interface ThemeContextType {
  theme: Theme;
  updateTheme: (newColors: Partial<Theme>) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = 'user-theme';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  // Charger le thème depuis localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme) {
      setTheme(JSON.parse(savedTheme));
    }
  }, []);

  // Sauvegarder le thème dans localStorage
  const updateTheme = (newColors: Partial<Theme>) => {
    setTheme((prevTheme) => {
      const updatedTheme = { ...prevTheme, ...newColors };
      localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(updatedTheme));
      return updatedTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
