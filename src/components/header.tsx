"use client";

import { HTMLAttributes } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type HeaderProps = HTMLAttributes<HTMLElement>;

export function Header({ className, ...props }: HeaderProps) {
  return (
    <header
      className={cn("w-full flex items-center justify-between", className)}
      {...props}
    >
      <Link href="/" className="text-lg font-semibold">
        Toró Etele
      </Link>
      {/* <nav className="flex gap-4 text-sm">
        <Link href="#about" className="hover:underline">
          About
        </Link>
        <Link href="#projects" className="hover:underline">
          Projects
        </Link>
        <Link href="#contact" className="hover:underline">
          Contact
        </Link>
      </nav> */}
    </header>
  );
}
