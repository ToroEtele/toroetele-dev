"use client";

import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarSeparator,
} from "./(sidebar)/sidebar";

import { NavMenuOthers } from "./(sidebar)/nav-menu-others";
import { FarmSwitcher } from "./(sidebar)/farm-switcher";
import { NavMain } from "./(sidebar)/nav-main";
import { NavMenu } from "./(sidebar)/nav-menu";
import { NavUser } from "./(sidebar)/nav-user";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      collapsible="icon"
      {...props}
      variant="floating"
      className="h-full w-full p-0"
    >
      <SidebarHeader className="items-center p-1 py-0">
        <FarmSwitcher />
      </SidebarHeader>

      <SidebarSeparator />

      <SidebarContent className="p-1">
        <NavMenu />
        <SidebarSeparator />
        <NavMain />

        <SidebarSeparator />
        <NavMenuOthers />
      </SidebarContent>

      <SidebarFooter className="p-1">
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
