"use client";

import { FlaskConical, Fuel, Sprout, Tablets } from "lucide-react";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./sidebar";

import {
  sidebarGroupLabelStyle,
  sidebarMenuButtonStyle,
  sidebarMenuItemIconContainerStyle,
  sidebarMenuItemIconStyle,
  sidebarMenuItemTitleStyle,
  sidebarMenuStyle,
} from "./styles";
import { cn } from "@/lib/utils";

export function NavMain() {
  return (
    <SidebarGroup className="p-0">
      <SidebarGroupLabel className={sidebarGroupLabelStyle}>
        Menu
      </SidebarGroupLabel>
      <SidebarMenu className={sidebarMenuStyle}>
        <SidebarMenuItem>
          <SidebarMenuButton className={sidebarMenuButtonStyle}>
            <div
              className={cn(
                sidebarMenuItemIconContainerStyle,
                "border border-sidebar-border"
              )}
            >
              <Sprout className={sidebarMenuItemIconStyle} />
            </div>
            <span className={sidebarMenuItemTitleStyle}>Seeds</span>
          </SidebarMenuButton>
        </SidebarMenuItem>

        <SidebarMenuItem>
          <SidebarMenuButton className={sidebarMenuButtonStyle}>
            <div
              className={cn(
                sidebarMenuItemIconContainerStyle,
                "border border-sidebar-border"
              )}
            >
              <Tablets className={sidebarMenuItemIconStyle} />
            </div>
            <span className={sidebarMenuItemTitleStyle}>Fertilizers</span>
          </SidebarMenuButton>
        </SidebarMenuItem>

        <SidebarMenuItem>
          <SidebarMenuButton className={sidebarMenuButtonStyle}>
            <div
              className={cn(
                sidebarMenuItemIconContainerStyle,
                "border border-sidebar-border"
              )}
            >
              <FlaskConical className={sidebarMenuItemIconStyle} />
            </div>
            <span className={sidebarMenuItemTitleStyle}>Pesticides</span>
          </SidebarMenuButton>
        </SidebarMenuItem>

        <SidebarMenuItem>
          <SidebarMenuButton className={sidebarMenuButtonStyle}>
            <div
              className={cn(
                sidebarMenuItemIconContainerStyle,
                "border border-sidebar-border"
              )}
            >
              <Fuel className={sidebarMenuItemIconStyle} />
            </div>
            <span className={sidebarMenuItemTitleStyle}>Others</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );
}
