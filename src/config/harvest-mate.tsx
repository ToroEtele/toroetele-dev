export const navbarStyle =
  "z-30 absolute top-0 h-4 md:h-6 w-full flex items-center bg-sidebar border border-sidebar-border rounded-tr-lg";
export const navbarIconStyle =
  "hidden md:flex my-auto mx-1 p-0 h-6 w-6 text-black dark:text-sidebar-foreground";

export const REGULAR_TEXT =
  " text-3xs lg:text-2xs 2xl:text-1.5xs 3xl:text-1.5xs";
export const SMALL_TEXT = " text-4xs lg:text-3xs 2xl:text-2.5xs";

// * SIDEBAR

export const SIDEBAR_WIDTH_CONFIG = "5rem";

export const sidebarMenuStyle = "p-0 lg:p-[0.05rem] 2xl:p-[0.2rem] gap-0";
export const sidebarGroupLabelStyle =
  "h-3 lg:h-4 group-data-[collapsible=icon]:-mt-4" + REGULAR_TEXT;
export const sidebarMenuItemTitleStyle = REGULAR_TEXT;

export const sidebarMenuButtonStyle =
  "h-3 lg:h-5 2xl:h-6 p-[0.2rem] lg:p-1 gap-1 rounded-xs";
export const sidebarMenuItemIconStyle =
  "size-1.5 lg:size-2 xl:size-2.5 2xl:size-3 text-black dark:text-sidebar-foreground";
export const sidebarMenuItemIconContainerStyle =
  "flex aspect-square size-2.5 lg:size-4 2xl:size-4.5 items-center justify-center rounded-[4px]";

export const navFarmSidebarMenuButtonStyle =
  "h-4 xl:h-8 px-1 gap-1 md:gap-2 data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground rounded-xs";

export const navFarmIconConatinerStyle =
  "flex aspect-square size-2.5 lg:size-4 xl:size-5 items-center justify-center rounded-xs xl:rounded-sm bg-sidebar-primary text-sidebar-primary-foreground";
export const navFarmIconStyle = "size-1.5 lg:size-2 xl:size-3";
export const navFarmNameStyle = "truncate font-semibold" + REGULAR_TEXT;
export const navFarmYearStyle = SMALL_TEXT;
export const navFarmChevronStyle = "ml-auto size-2 xl:size-3";

export const navUserAvatarContainerStyle =
  "h-3 w-3 lg:h-4 lg:w-4 xl:h-5 xl:w-5 rounded-lg";
export const navUserAvatarStyle = "text-4xs lg:text-2xs text-gray-400";
export const navUserNameStyle = "truncate font-semibold" + REGULAR_TEXT;
export const navUserEmailStyle = SMALL_TEXT;
export const navUserChevronStyle = "ml-auto size-2 xl:size-3";
export const navUserSidebarMenuButtonStyle =
  "h-4 xl:h-8 px-[0.1rem] gap-[0.1rem] lg:gap-2 data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground rounded-xs";

// * JOBS

export const BASE_PADDING = " px-[0.15rem] lg:px-2 py-[0.10rem] lg:py-[0.2rem]";

export const jobsTableHeaderStyle =
  "font-medium text-left" + BASE_PADDING + REGULAR_TEXT;
export const jobsTableRowStyle = BASE_PADDING + REGULAR_TEXT;

export const jobsTableBadgeStyle =
  "inline-flex items-center lg:py-[0.1rem] px-[0.2rem] text-3xs 2xl:text-2xs font-semibold rounded-[5px] 2xl:rounded-sm border";

export const jobsCardStyle =
  "gap-[0.1rem] lg:gap-1 rounded-sm lg:rounded-md border-sidebar-border" +
  BASE_PADDING;
export const jobsCardHeaderStyle =
  "w-full flex flex-row items-center justify-between space-y-0 p-0";
export const jobsCardDescriptionStyle =
  "text-4xs lg:text-3xs 3xl:text-2.5xs text-muted-foreground";
export const jobsCardInfoStyle = "font-bold" + REGULAR_TEXT;
export const jobsCardTitleStyle = "font-medium" + REGULAR_TEXT;

export const jobsTabsStyle = "h-4 lg:h-6 xl:h-7 gap-1 rounded-sm lg:rounded-md";
export const jobsTabsTriggerStyle =
  "h-3 lg:h-4 xl:h-5 w-auto p-[0.10rem] xl:p-[0.2rem] rounded-sm lg:rounded-md" +
  REGULAR_TEXT;
