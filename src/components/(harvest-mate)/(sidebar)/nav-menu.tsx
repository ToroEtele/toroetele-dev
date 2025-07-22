"use client";

import { ListTodo, LayoutDashboard, Archive, FileText } from "lucide-react";

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
} from "@/config/harvest-mate";
import { cn } from "@/lib/utils";

export function NavMenu() {
  return (
    <SidebarGroup className="p-0">
      <SidebarGroupLabel className={sidebarGroupLabelStyle}>
        App
      </SidebarGroupLabel>
      <SidebarMenu className={sidebarMenuStyle}>
        <SidebarMenuItem>
          <SidebarMenuButton className={sidebarMenuButtonStyle}>
            <div
              className={cn(sidebarMenuItemIconContainerStyle, "bg-[#80e5b5]")}
            >
              <LayoutDashboard className={sidebarMenuItemIconStyle} />
            </div>
            <span className={sidebarMenuItemTitleStyle}>Dashboard</span>
          </SidebarMenuButton>
        </SidebarMenuItem>

        <SidebarMenuItem>
          <SidebarMenuButton className={sidebarMenuButtonStyle}>
            <div
              className={cn(sidebarMenuItemIconContainerStyle, "bg-[#e94247]")}
            >
              <ListTodo className={sidebarMenuItemIconStyle} />
            </div>
            <span className={sidebarMenuItemTitleStyle}>Jobs</span>
          </SidebarMenuButton>
        </SidebarMenuItem>

        <SidebarMenuItem>
          <SidebarMenuButton className={sidebarMenuButtonStyle}>
            <div
              className={cn(sidebarMenuItemIconContainerStyle, "bg-[#6266f2]")}
            >
              <Archive className={sidebarMenuItemIconStyle} />
            </div>
            <span className={sidebarMenuItemTitleStyle}>Inventory</span>
          </SidebarMenuButton>
        </SidebarMenuItem>

        <SidebarMenuItem>
          <SidebarMenuButton className={sidebarMenuButtonStyle}>
            <div
              className={cn(sidebarMenuItemIconContainerStyle, "bg-[#9e05f5]")}
            >
              <FileText className={sidebarMenuItemIconStyle} />
            </div>
            <span className={sidebarMenuItemTitleStyle}>Invoices</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );
}
