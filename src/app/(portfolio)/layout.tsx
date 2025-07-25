"use client";

import React from "react";

import { cn } from "@/lib/utils";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export type MarketingLayoutProps = {
  children: React.ReactNode;
};

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className={"relative flex min-h-[100vh] max-w-[100vw] flex-col"}>
      <div
        className={cn(
          "hidden md:block fixed left-0 top-0 z-50 w-full bg-transparent"
        )}
      >
        <Header className="h-16 p-4 lg:px-6" />
      </div>

      <div className="relative w-full flex-1">{children}</div>

      <Footer className="max-w-6xl 3xl:max-w-7xl" />
    </div>
  );
}
