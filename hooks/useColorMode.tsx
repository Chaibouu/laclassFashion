"use client";

import { useState, useEffect } from "react";

type ColorMode = "light" | "dark";

const useColorMode = (): [ColorMode, (mode: ColorMode) => void] => {
  const [colorMode, setColorModeState] = useState<ColorMode>("light");

  useEffect(() => {
    // Vérifier le mode préféré au chargement
    const stored = localStorage.getItem("colorMode") as ColorMode | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    const initialMode = stored || (prefersDark ? "dark" : "light");
    setColorModeState(initialMode);
    applyMode(initialMode);
  }, []);

  const applyMode = (mode: ColorMode) => {
    const root = document.documentElement;
    if (mode === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  };

  const setColorMode = (mode: ColorMode) => {
    setColorModeState(mode);
    localStorage.setItem("colorMode", mode);
    applyMode(mode);
  };

  return [colorMode, setColorMode];
};

export default useColorMode;

