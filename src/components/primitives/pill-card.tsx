import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

export const PillCard = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "h-10 inline-flex items-center gap-2 rounded-full bg-white px-4 shadow-sm border border-gray-200",
        className
      )}
    >
      <Sparkles className="h-4 w-4 text-primary" />
      <span className="font-medium text-black">{text}</span>
    </div>
  );
};
