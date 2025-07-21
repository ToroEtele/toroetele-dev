"use client";

import { ChevronsUpDown } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./sidebar";

import {
  navUserAvatarContainerStyle,
  navUserAvatarStyle,
  navUserChevronStyle,
  navUserEmailStyle,
  navUserNameStyle,
  navUserSidebarMenuButtonStyle,
} from "@/config/harvest-mate";

export function NavUser() {
  return (
    <SidebarMenu>
      <SidebarMenuItem className="flex justify-center">
        <SidebarMenuButton size="lg" className={navUserSidebarMenuButtonStyle}>
          <Avatar className={navUserAvatarContainerStyle}>
            <AvatarFallback className={navUserAvatarStyle}>TE</AvatarFallback>
          </Avatar>
          <div className="grid text-left leading-tight">
            <span className={navUserNameStyle} data-testid="user-menu-username">
              Toró Etele
            </span>
            <span className={navUserEmailStyle} data-testid="user-menu-email">
              toroetele@gmail.com
            </span>
          </div>
          <div>
            <ChevronsUpDown className={navUserChevronStyle} />
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
