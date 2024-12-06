import { useTheme } from '@/context/ThemeContext';
import { useState } from 'react';

export default function Settings() {
  const { theme, updateTheme } = useTheme();
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateTheme({ [name]: value });

    // Afficher la snackbar
    setShowSnackbar(true);
    setTimeout(() => setShowSnackbar(false), 2000); // Masquer après 2s
  };

  return (
    <div
      style={{
        backgroundColor: theme.primary,
        color: theme.secondary,
        minHeight: '100vh',
        padding: '1rem',
        transition: 'background-color 0.3s ease, color 0.3s ease',
      }}
    >
      <h1>Paramètres des couleurs</h1>
      <div>
        <label>
          Couleur primaire :
          <input
            type="color"
            name="primary"
            value={theme.primary}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Couleur secondaire :
          <input
            type="color"
            name="secondary"
            value={theme.secondary}
            onChange={handleChange}
          />
        </label>
      </div>

      {showSnackbar && (
        <div
          style={{
            position: 'fixed',
            bottom: '1rem',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#333',
            color: '#fff',
            padding: '0.5rem 1rem',
            borderRadius: '5px',
            transition: 'opacity 0.3s ease',
          }}
        >
          Thème mis à jour !
        </div>
      )}
    </div>
  );
}
