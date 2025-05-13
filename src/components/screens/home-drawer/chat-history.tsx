import { LegendList } from "@legendapp/list";

import { chats } from "@/lib/constants";

import { ChatHistoryItem } from "./chat-history-item";

export function ChatHistory() {
  return (
    <LegendList
      className="flex-1"
      data={chats}
      keyExtractor={($) => $.id}
      renderItem={({ item }) => <ChatHistoryItem chat={item} />}
      estimatedItemSize={56}
    />
  );
}
