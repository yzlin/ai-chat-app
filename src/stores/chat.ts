import { createStore } from "zustand-x";

import { chats } from "@/lib/constants";
import { generateId, sleep } from "@/lib/utils";

export interface Message {
  id: string;
  content: string;
  role: "user" | "bot";
}

interface ChatState {
  activeChatId: string;
  initialMessages: Message[];
  isLoading: boolean;
}

const initialState: ChatState = {
  activeChatId: generateId("chat"),
  initialMessages: [],
  isLoading: false,
};

export const chatStore = createStore(initialState, {
  name: "chat",
}).extendActions(({ get, set }) => ({
  loadChat: async (id: string) => {
    try {
      set("isLoading", true);

      await sleep(2000);
      const messages = (chats.find((chat) => chat.id === id)?.messages ||
        []) as Message[];
      set("activeChatId", id);
      set("initialMessages", messages);
    } catch (error) {
      console.error("[Chat] Failed to load chat messages", error);
    } finally {
      set("isLoading", false);
    }
  },
}));
