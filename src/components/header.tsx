"use client";

import { HTMLAttributes } from "react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { cn } from "@/lib/utils";

export type HeaderProps = HTMLAttributes<HTMLElement>;

export function Header({ className, ...props }: HeaderProps) {
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "w-full flex items-center justify-between text-slate-500 dark:text-slate-300",
        className,
        {
          "backdrop-blur-md": scrollY > 50,
        }
      )}
      {...props}
    >
      <Link
        href="/"
        className="flex flex-row items-center gap-2 text-2xl font-semibold"
      >
        <Image src="/logo.png" alt="logo" width={34} height={34} />
        Toró Etele
      </Link>
      <nav className="flex gap-4 text-md">
        <Link href="#about" className="hover:underline">
          About
        </Link>
        <Link href="#projects" className="hover:underline">
          Projects
        </Link>
        <Link href="#contact" className="hover:underline">
          Contact
        </Link>
      </nav>
    </header>
  );
}
