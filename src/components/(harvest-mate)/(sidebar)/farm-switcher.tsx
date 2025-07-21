"use client";

import * as React from "react";
import { ChevronsUpDown, GalleryVerticalEnd, Plus } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./sidebar";
import {
  navFarmChevronStyle,
  navFarmDropdownTriggerStyle,
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
        <DropdownMenu>
          <DropdownMenuTrigger asChild className={navFarmDropdownTriggerStyle}>
            <SidebarMenuButton
              size="lg"
              className={navFarmSidebarMenuButtonStyle}
            >
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
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-20 lg:min-w-40 p-[0.2rem] lg:p-1 border border-sidebar-border rounded-lg"
            align="start"
            side="right"
            sideOffset={4}
          >
            <DropdownMenuLabel className="py-[0.1rem] lg:py-1 text-3xs lg:text-xs text-muted-foreground">
              Farms
            </DropdownMenuLabel>
            {[{ id: 1, name: "My Farm" }].map((farm, index) => (
              <DropdownMenuItem
                key={farm.id}
                onClick={() => {}}
                className="gap-2 p-1 py-[0.1rem] md:py-1 text-3xs lg:text-xs"
              >
                <div className="size-3 lg:size-5 flex items-center justify-center border border-sidebar-border rounded-sm">
                  <GalleryVerticalEnd className="size-2 lg:size-3 shrink-0" />
                </div>
                {farm.name}
                <DropdownMenuShortcut className="text-3xs lg:text-xs">
                  ⌘{index + 1}
                </DropdownMenuShortcut>
              </DropdownMenuItem>
            ))}
            <DropdownMenuItem className="gap-2 p-1 py-[0.1rem] md:py-1 text-3xs lg:text-xs">
              <div className="flex size-3 lg:size-5 items-center justify-center rounded-sm border border-sidebar-border bg-background">
                <Plus className="size-2 lg:size-3" />
              </div>
              <div className="py-0 md:py-1 text-3xs lg:text-xs font-medium text-muted-foreground">
                Add farm
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel className="py-[0.1rem] lg:py-1 text-3xs lg:text-xs text-muted-foreground">
              Fiscal year
            </DropdownMenuLabel>
            {[2025, 2024, 2023].map((year, index) => (
              <DropdownMenuItem
                key={index}
                className="gap-2 p-1 py-[0.1rem] md:py-1 text-3xs lg:text-xs"
              >
                <div className="flex size-3 lg:size-5 items-center justify-center rounded-sm border border-sidebar-border ">
                  <GalleryVerticalEnd className="size-2 lg:size-3 shrink-0" />
                </div>
                {year}
                <DropdownMenuShortcut className="text-3xs lg:text-xs">
                  ⌘{index + 1}
                </DropdownMenuShortcut>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
