"use client";

import Link from "next/link";

interface LoginButtonProps {
  children?: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

// Composant simple pour le bouton de connexion - site vitrine
export const LoginButton = ({ 
  children, 
  mode = "redirect",
  asChild 
}: LoginButtonProps) => {
  // Pour un site vitrine, on peut simplement rediriger vers la page de login
  // ou afficher le contenu tel quel
  if (asChild && children) {
    return <>{children}</>;
  }

  if (mode === "modal") {
    // Pour un site vitrine, on peut juste afficher le bouton
    return <>{children}</>;
  }

  return (
    <Link href="/auth/login">
      {children}
    </Link>
  );
};

