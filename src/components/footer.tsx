/* eslint-disable @next/next/no-img-element */
"use client";

import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { ThemeSwitcher } from "./primitives/theme-switcher";

export type FooterProps = HTMLAttributes<HTMLElement>;

export function Footer({ className, ...props }: FooterProps) {
  return (
    <footer
      className={cn(
        "min-h-[40vh] w-full mx-auto flex flex-col gap-12 items-center p-12",
        className
      )}
      {...props}
    >
      <div className="w-full flex flex-row p-4 lg:p-8 border-b border-gray-500">
        <div className="w-[80%] flex flex-col items-start">
          <h1 className="text-3xl">Toró Etele</h1>
        </div>
        <div className="w-full flex flex-col items-end gap-2">
          <h2 className="text-xl font-medium">SOCIAL</h2>
          <div className="flex items-center gap-2">
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/linkedin.svg"
                alt="LinkedIn"
                className="w-10 h-10 hover:opacity-80 text-gray-200"
              />
            </a>
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/github.svg"
                alt="GitHub"
                className="w-10 h-10 hover:opacity-80"
              />
            </a>

            <ThemeSwitcher className="h-8 w-8 bg-[#5810e5]" />
          </div>
        </div>
      </div>
      <p className="text-sm">
        © Copyright {new Date().getFullYear()} . Made by Toró Etele
      </p>
    </footer>
  );
}
