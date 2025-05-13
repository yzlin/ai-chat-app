import { router } from "expo-router";

import { PressableScale } from "@/components/ui/pressable-scalable";
import { Text } from "@/components/ui/text";
import { chatStore } from "@/stores/chat";

interface ChatHistoryItemProps {
  chat: {
    id: string;
  };
}

export function ChatHistoryItem({ chat }: ChatHistoryItemProps) {
  return (
    <PressableScale
      className="px-4 py-2"
      onPress={async () => {
        chatStore.set("loadChat", chat.id);
        router.back();
      }}
    >
      <Text>{chat.id}</Text>
    </PressableScale>
  );
}
