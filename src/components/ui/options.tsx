import React, { JSX } from "react";

import { cn } from "@/lib/utils";

interface OptionsListProps {
  className?: string | undefined;
  children?: JSX.Element | Iterable<JSX.Element>;
}

const OptionsList = ({ className, ...props }: OptionsListProps) => {
  return (
    <div
      className={cn(
        "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
        className
      )}
      {...props}
    />
  );
};

interface OptionProps {
  className?: string | undefined;
  children?: JSX.Element | Iterable<JSX.Element> | string;
  active?: boolean;
  onClick: () => void;
}

const Option = ({ className, active = false, ...props }: OptionProps) => {
  return (
    <div
      className={cn(
        "cursor-pointer inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-transparent",
        className,
        active ? "bg-background text-foreground shadow" : ""
      )}
      {...props}
    />
  );
};

export { OptionsList, Option };
