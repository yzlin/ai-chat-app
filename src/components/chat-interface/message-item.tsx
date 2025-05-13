import { View } from "react-native";

import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import type { Message } from "@/stores/chat";

interface MessageItemProps {
  message: Message;
}

export function MessageItem({ message }: MessageItemProps) {
  const isUser = message.role === "user";

  return (
    <View
      className={cn(
        "flex-row gap-2 p-2 px-4",
        isUser
          ? "ml-auto max-w-[90%] flex-row-reverse rounded-3xl bg-white"
          : "mr-auto",
      )}
    >
      <Text>{message.content}</Text>
    </View>
  );
}
