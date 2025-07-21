import React from "react";

import { PillCard } from "./primitives/pill-card";
import { cn } from "@/lib/utils";

interface HeaderSectionProps {
  className?: string;
  cardText: string;
  title: string;
  description: string;
}

export function HeaderSection({
  className,
  cardText,
  title,
  description,
}: HeaderSectionProps) {
  return (
    <div className={cn("flex flex-col items-center gap-4", className)}>
      <PillCard text={cardText} />
      <h1 className="text-3xl lg:text-4xl text-center font-bold">{title}</h1>
      <p className="max-w-3xl px-6 lg:text-lg text-center">{description}</p>
    </div>
  );
}
