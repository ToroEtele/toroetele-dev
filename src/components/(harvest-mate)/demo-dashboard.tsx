import React from "react";

import { SidebarInset, SidebarProvider } from "./(sidebar)/sidebar";
import { AppSidebar } from "./sidebar";
import { Navbar } from "./navbar";

export function DemoDashboard() {
  return (
    <SidebarProvider className="h-full w-full">
      <AppSidebar />
      <SidebarInset
        className="w-full h-full rounded-r-lg bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/dashboard-map.png')",
        }}
      >
        <div className="w-full h-full">
          <Navbar />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
