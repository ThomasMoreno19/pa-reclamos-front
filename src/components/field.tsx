import type React from "react";
import { cn } from "@/utils/tailwind-class-merge";

type Field = React.ComponentProps<"input">;

export const Field: React.FC<Field> = ({ className, ...props }) => {
  return (
    <input
      className={cn(
        `p-2 px-3 rounded-xl bg-stone-950/40 
      hover:ring-1 hover:ring-white/10 focus:ring-1 focus:ring-offset-0 focus:ring-blue-600
      focus:outline-none focus:border-0`,
        className,
      )}
      {...props}
    />
  );
};
