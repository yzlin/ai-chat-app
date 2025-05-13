import React from "react";

import * as Slot from "@rn-primitives/slot";
import type { SlottableTextProps, TextRef } from "@rn-primitives/types";
import { Text as RNText } from "react-native";

import { cn } from "@/lib/utils";

const TextClassContext = React.createContext<string | undefined>(undefined);

export const Text = React.forwardRef<TextRef, SlottableTextProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const textClass = React.useContext(TextClassContext);
    const Component = asChild ? Slot.Text : RNText;
    return (
      <Component
        className={cn("text-foreground text-lg", textClass, className)}
        ref={ref}
        {...props}
      />
    );
  },
);
Text.displayName = "Text";

interface TextClassProviderProps extends React.PropsWithChildren {
  className?: string;
}

export function TextClassProvider({
  className,
  ...props
}: TextClassProviderProps) {
  return <TextClassContext.Provider value={className} {...props} />;
}
