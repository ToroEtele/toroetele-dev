/* eslint-disable @next/next/no-img-element */
import React from "react";

import { ThemeSwitcher } from "@/components/primitives/theme-switcher";
import { cn } from "@/lib/utils";

interface FloatingMenuProps {
  className?: string;
}

export function FloatingMenu({ className }: FloatingMenuProps) {
  return (
    <div
      className={cn(
        "absolute z-40 flex flex-row xl:flex-col items-center p-1 rounded-lg gap-1 bg-white",
        className
      )}
    >
      <a
        href="https://www.linkedin.com/in/etele-tor%C3%B3/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/linkedin.svg"
          alt="LinkedIn"
          className="w-10 h-10 hover:opacity-80"
        />
      </a>

      <a
        href="https://github.com/ToroEtele"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/github.svg"
          alt="GitHub"
          className="w-10 h-10 hover:opacity-80"
        />
      </a>

      <ThemeSwitcher className="mt-1 cursor-pointer bg-[#5810e5]" />
    </div>
  );
}
