"use client";

import { Settings2 } from "lucide-react";

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./sidebar";

import {
  sidebarMenuButtonStyle,
  sidebarMenuItemIconContainerStyle,
  sidebarMenuItemIconStyle,
  sidebarMenuItemTitleStyle,
} from "./styles";

export function NavMenuOthers() {
  return (
    <SidebarGroup className="p-0">
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton className={sidebarMenuButtonStyle}>
            <div className={sidebarMenuItemIconContainerStyle}>
              <Settings2 className={sidebarMenuItemIconStyle} />
            </div>
            <span className={sidebarMenuItemTitleStyle}>Settings</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );
}
