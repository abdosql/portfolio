import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
  {
    variants: {
      variant: {
        default: "bg-accent text-white hover:bg-accent-hover active:bg-accent-active",
        destructive: "bg-red-500 text-white hover:bg-red-600 dark:bg-red-700 dark:text-white dark:hover:bg-red-800",
        outline: "border border-accent text-accent bg-transparent hover:bg-accent hover:text-white active:bg-accent-active dark:border-accent dark:text-accent dark:hover:bg-accent-hover dark:hover:text-white",
        secondary: "bg-gray-100 text-gray-900 hover:bg-accent-hover dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700",
        ghost: "hover:bg-gray-100 text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white",
        link: "text-accent underline-offset-4 hover:underline dark:text-accent",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = "Button";

export { Button, buttonVariants };
