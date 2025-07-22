import React from "react";

import { SidebarInset, SidebarProvider } from "./(sidebar)/sidebar";
import { AppSidebar } from "./sidebar";
import { Navbar } from "./navbar";

export function DemoInventory() {
  return (
    <SidebarProvider className="h-full w-full">
      <AppSidebar />
      <SidebarInset className="w-full h-full rounded-r-md">
        <div className="w-full h-full flex items-center justify-center">
          <Navbar />

          <h1>Coming soon!</h1>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
