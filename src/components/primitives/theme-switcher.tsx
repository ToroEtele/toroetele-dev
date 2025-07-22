"use client";

import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const ThemeSwitcher = ({ className }: { className?: string }) => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "w-8 h-8 rounded-md flex items-center justify-center bg-foreground transition-colors",
        className
      )}
      aria-label="Toggle theme"
    >
      <motion.div key={theme} initial={{ rotate: -90 }} animate={{ rotate: 0 }}>
        {theme === "dark" ? (
          <MoonStar className="h-5 w-5 text-[#90a1b9]" />
        ) : (
          <Sun className="h-5 w-5 text-white" />
        )}
      </motion.div>
    </button>
  );
};
