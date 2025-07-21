"use client";

import {
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  CreditCard,
  LogOut,
  Sparkles,
} from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./sidebar";

import {
  navUserAvatarContainerStyle,
  navUserAvatarStyle,
  navUserChevronStyle,
  navUserDropdownTriggerStyle,
  navUserEmailStyle,
  navUserNameStyle,
  navUserSidebarMenuButtonStyle,
} from "@/config/harvest-mate";

export function NavUser() {
  return (
    <SidebarMenu>
      <SidebarMenuItem className="flex justify-center">
        <DropdownMenu>
          <DropdownMenuTrigger
            asChild
            data-testid="user-menu"
            className={navUserDropdownTriggerStyle}
          >
            <SidebarMenuButton
              size="lg"
              className={navUserSidebarMenuButtonStyle}
            >
              <Avatar className={navUserAvatarContainerStyle}>
                <AvatarFallback className={navUserAvatarStyle}>
                  TE
                </AvatarFallback>
              </Avatar>
              <div className="grid text-left leading-tight">
                <span
                  className={navUserNameStyle}
                  data-testid="user-menu-username"
                >
                  Toró Etele
                </span>
                <span
                  className={navUserEmailStyle}
                  data-testid="user-menu-email"
                >
                  toroetele@gmail.com
                </span>
              </div>
              <div>
                <ChevronsUpDown className={navUserChevronStyle} />
              </div>
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-20 lg:min-w-40 p-[0.2rem] lg:p-1 border border-sidebar-border rounded-lg"
            side="right"
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-1 lg:gap-2 px-0 lg:px-1 py-1.5 text-left text-sm">
                <Avatar className={navUserAvatarContainerStyle}>
                  <AvatarFallback className={navUserAvatarStyle}>
                    TE
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className={navUserNameStyle}>Toro Etele</span>
                  <span className={navUserEmailStyle}>toroetele@gmail.com</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem className={styles.itemTextStyle}>
                <Sparkles className={styles.iconStyle} />
                Upgrade
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem className={styles.itemTextStyle}>
                <BadgeCheck className={styles.iconStyle} />
                Account
              </DropdownMenuItem>
              <DropdownMenuItem className={styles.itemTextStyle}>
                <CreditCard className={styles.iconStyle} />
                Billing
              </DropdownMenuItem>
              <DropdownMenuItem className={styles.itemTextStyle}>
                <Bell className={styles.iconStyle} />
                Notification
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              data-testid="user-menu-sign-out"
              className={styles.itemTextStyle}
            >
              <LogOut className={styles.iconStyle} />
              Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

const styles = {
  iconStyle: "size-2 md:size-3",
  itemTextStyle: "p-[0.2rem] lg:p:2 text-3xs lg:text-xs",
};
