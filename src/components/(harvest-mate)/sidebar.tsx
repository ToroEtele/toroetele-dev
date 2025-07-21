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

import { FarmSwitcher } from "./(sidebar)/farm-switcher";
import { NavMenuOthers } from "./(sidebar)/nav-menu-others";
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
      <SidebarHeader className="items-center p-0">
        <FarmSwitcher />
      </SidebarHeader>

      <SidebarSeparator />

      <SidebarContent className="p-0">
        <NavMenu />
        <SidebarSeparator />
        <NavMain />

        <SidebarSeparator />
        <NavMenuOthers />
      </SidebarContent>

      <SidebarFooter className="items-center p-[0.2rem]">
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
