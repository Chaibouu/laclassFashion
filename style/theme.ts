export interface Theme {
    primary: string;
    secondary: string;
  }
  
  export const defaultTheme: Theme = {
    primary: '#1D4ED8', // Couleur bleue par défaut
    secondary: '#9333EA', // Couleur violette par défaut
  };
  
  export const lightTheme: Theme = {
    primary: '#FFFFFF', // Couleur blanche
    secondary: '#000000', // Couleur noire
  };
  
  export const darkTheme: Theme = {
    primary: '#000000', // Couleur noire
    secondary: '#FFFFFF', // Couleur blanche
  };
  