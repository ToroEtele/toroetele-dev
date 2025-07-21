import React from "react";

import { SidebarTrigger } from "./(sidebar)/sidebar";
import { navbarIconStyle } from "@/config/harvest-mate";

export function Navbar() {
  return (
    <div className="z-30 absolute top-0 h-[20px] md:h-[28px] w-full flex items-center bg-sidebar border border-sidebar-border rounded-tr-lg">
      <SidebarTrigger className={navbarIconStyle} />
    </div>
  );
}
