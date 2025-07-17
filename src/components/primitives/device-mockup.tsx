import React from "react";

import { Card } from "../ui/card";

interface DeviceMockupProps {
  children: React.ReactNode;
}

export default function DeviceMockup({ children }: DeviceMockupProps) {
  return (
    <Card className="aspect-[4/3] w-[350px]  md:w-[550px] overflow-hidden shadow-lg border-[1rem] border-black rounded-xl">
      <div className="w-full h-full">{children}</div>
    </Card>
  );
}
