import * as React from "react";

import { TextInput } from "react-native";

import { cn } from "@/lib/utils";

export const ChatTextInput = React.forwardRef<
  React.ComponentRef<typeof TextInput>,
  React.ComponentPropsWithoutRef<typeof TextInput> & {
    noFocus?: boolean;
    autoFocus?: boolean;
  }
>(
  (
    {
      className,
      placeholderClassName,
      noFocus = false,
      autoFocus = false,
      ...props
    },
    ref,
  ) => {
    return (
      <TextInput
        ref={ref}
        autoFocus={autoFocus}
        className={cn(
          "native:min-h-10 native:text-md native:leading-[1.25] text-foreground placeholder:text-muted-foreground min-h-10 rounded-md px-4 text-base file:border-0 file:bg-transparent file:font-medium web:flex web:w-full web:py-2 lg:text-sm",
          "web:ring-offset-background web:focus-visible:ring-ring web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-offset-2",
          noFocus && "web:focus-visible:ring-0 web:focus-visible:ring-offset-0",
          props.editable === false && "opacity-50 web:cursor-not-allowed",
          className,
        )}
        placeholderClassName={cn("text-muted-foreground", placeholderClassName)}
        {...props}
      />
    );
  },
);

ChatTextInput.displayName = "ChatTextInput";
