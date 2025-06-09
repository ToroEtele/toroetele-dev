"use client";

import React from "react";

import { cn } from "@/lib/utils";
import { Header } from "@/components/header";

export type MarketingLayoutProps = {
  children: React.ReactNode;
};

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div
      className={cn(
        "relative flex min-h-[100vh] max-w-[100vw] flex-col pt-20 md:pt-28"
      )}
    >
      <div className={cn("fixed left-0 top-0 z-50 w-full bg-transparent")}>
        <Header className="h-16 px-4 md:h-20 lg:px-8" />
      </div>

      <div className="relative w-full max-w-screen-2xl flex-1 px-4 sm:mx-auto lg:px-8">
        {children}
      </div>
    </div>
  );
}
