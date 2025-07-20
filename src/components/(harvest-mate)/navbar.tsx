import React from "react";

import { SidebarTrigger } from "./(sidebar)/sidebar";

export function Navbar() {
  return (
    <div className="z-30 absolute top-0 h-[20px] md:h-[28px] w-full flex items-center bg-sidebar border border-sidebar-border rounded-tr-lg">
      <SidebarTrigger className="hidden md:flex my-auto mx-1 p-0 w-6 h-6 text-black dark:text-sidebar-foreground" />
    </div>
  );
}
