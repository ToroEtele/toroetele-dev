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
        "aspect-[16/10] w-[350px] md:w-[400px] lg:w-[500px] xl:w-[600px] 2xl:w-[700px] 3xl:w-[650px] overflow-hidden shadow-lg border-[0.5rem] border-black rounded-xl p-0",
        className
      )}
    >
      <div className="w-full h-full">{children}</div>
    </Card>
  );
}
