import React from "react";

import { Card } from "../ui/card";
import { cn } from "@/lib/utils";

interface DeviceMockupProps {
  children: React.ReactNode;
  className?: string;
}

export function DeviceMockup({ children, className }: DeviceMockupProps) {
  return (
    <Card
      className={cn(
        "aspect-[4/3] w-[350px] md:w-[400px] xl:w-[550px] overflow-hidden shadow-lg border-[1rem] border-black rounded-xl p-0",
        className
      )}
    >
      <div className="w-full h-full">{children}</div>
    </Card>
  );
}
