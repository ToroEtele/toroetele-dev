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

export function NavUser() {
  return (
    <SidebarMenu>
      <SidebarMenuItem className="flex justify-center">
        <DropdownMenu>
          <DropdownMenuTrigger
            asChild
            data-testid="user-menu"
            className="flex px-0 md:px-1"
          >
            <SidebarMenuButton
              size="lg"
              className="h-6 md:h-12 data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground gap-1 md:gap-2"
            >
              <Avatar className="h-4 w-4 md:h-6 md:w-6 rounded-lg">
                <AvatarFallback className="text-3xs md:text-2xs text-gray-400">
                  TE
                </AvatarFallback>
              </Avatar>
              <div className="grid text-left leading-tight">
                <span
                  className="truncate font-semibold text-4xs md:text-2xs"
                  data-testid="user-menu-username"
                >
                  Toró Etele
                </span>
                <span
                  className="truncate text-4xs md:text-2xs"
                  data-testid="user-menu-email"
                >
                  toroetele@gmail.com
                </span>
              </div>
              <div>
                <ChevronsUpDown className="ml-auto size-2 md:size-3" />
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
                <Avatar className="h-4 w-4 lg:h-6 lg:w-6 rounded-lg">
                  <AvatarFallback className="text-3xs lg:text-xs text-gray-400">
                    TE
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold text-3xs lg:text-xs">
                    Toro Etele
                  </span>
                  <span className="truncate text-3xs lg:text-2xs">
                    toroetele@gmail.com
                  </span>
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
