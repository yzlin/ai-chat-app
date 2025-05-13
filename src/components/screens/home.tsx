import { ChatInterface } from "@/components/chat-interface";
import { chatStore } from "@/stores/chat";

export function HomeScreen() {
  const chatId = chatStore.useValue("activeChatId");
  const initialMessages = chatStore.useValue("initialMessages");
  const isLoading = chatStore.useValue("isLoading");

  return (
    <ChatInterface
      chatId={chatId}
      initialMessages={initialMessages}
      loading={isLoading}
    />
  );
}
