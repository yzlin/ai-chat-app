import * as React from "react";

import { type VariantProps, cva } from "class-variance-authority";
import { ActivityIndicator, Pressable } from "react-native";

import { Text, TextClassProvider } from "@/components/ui/text";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "web:ring-offset-background web:focus-visible:ring-ring group flex items-center justify-center rounded-md web:transition-colors web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-primary active:opacity-90 web:hover:opacity-90",
        destructive: "bg-destructive active:opacity-90 web:hover:opacity-90",
        outline:
          "border-input bg-background active:bg-accent web:hover:bg-accent web:hover:text-accent-foreground border",
        secondary: "bg-secondary active:opacity-80 web:hover:opacity-80",
        ghost:
          "active:bg-accent web:hover:bg-accent web:hover:text-accent-foreground",
        link: "web:underline-offset-4 web:hover:underline web:focus:underline",
        pill: "text-primary-foreground rounded-full bg-black active:opacity-90 web:hover:opacity-90",
      },
      size: {
        // default: "h-10 px-4 py-2 native:h-12 native:max-h-11 native:px-5 native:py-3",
        //NOTE: rofi - added this fix for height
        default: "native:h-12 native:px-5 h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "native:h-14 h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const buttonTextVariants = cva(
  "native:text-base text-foreground text-sm font-medium web:whitespace-nowrap web:transition-colors",
  {
    variants: {
      variant: {
        default: "text-primary-foreground",
        destructive: "text-destructive-foreground",
        outline: "group-active:text-accent-foreground",
        secondary:
          "text-secondary-foreground group-active:text-secondary-foreground",
        ghost: "group-active:text-accent-foreground",
        link: "text-primary group-active:underline",
        pill: "text-primary-foreground",
      },
      size: {
        default: "",
        sm: "",
        lg: "native:text-lg",
        icon: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type ButtonProps = React.ComponentPropsWithoutRef<typeof Pressable> &
  VariantProps<typeof buttonVariants> & {
    isLoading?: boolean;
  };

const Button = React.forwardRef<
  React.ComponentRef<typeof Pressable>,
  ButtonProps
>(({ className, variant, size, isLoading, children, ...props }, ref) => {
  return (
    <TextClassProvider
      className={cn(
        props.disabled && "web:pointer-events-none",
        buttonTextVariants({ variant, size }),
      )}
    >
      <Pressable
        className={cn(
          props.disabled && "opacity-50 web:pointer-events-none",
          isLoading && "web:pointer-events-none",
          buttonVariants({ variant, size, className }),
        )}
        ref={ref}
        {...props}
      >
        {isLoading ? (
          <ActivityIndicator />
        ) : typeof children === "string" ? (
          <Text>{children}</Text>
        ) : (
          children
        )}
      </Pressable>
    </TextClassProvider>
  );
});
Button.displayName = "Button";

export { Button, buttonTextVariants, buttonVariants };
export type { ButtonProps };
