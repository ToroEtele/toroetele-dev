"use client";

import * as React from "react";
import { ChevronsUpDown, GalleryVerticalEnd } from "lucide-react";

import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./sidebar";
import {
  navFarmChevronStyle,
  navFarmIconConatinerStyle,
  navFarmIconStyle,
  navFarmNameStyle,
  navFarmSidebarMenuButtonStyle,
  navFarmYearStyle,
} from "@/config/harvest-mate";

export function FarmSwitcher() {
  return (
    <SidebarMenu>
      <SidebarMenuItem className="flex justify-center py-1">
        <SidebarMenuButton size="lg" className={navFarmSidebarMenuButtonStyle}>
          <div className={navFarmIconConatinerStyle}>
            <GalleryVerticalEnd className={navFarmIconStyle} />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight ">
            <span className={navFarmNameStyle}>My Farm</span>
            <span className={navFarmYearStyle}>2025 fiscal year</span>
          </div>
          <div>
            <ChevronsUpDown className={navFarmChevronStyle} />
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
