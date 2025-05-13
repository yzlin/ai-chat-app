import { createRef } from "react";

import type { LegendListRef } from "@legendapp/list";
import { createAtomStore } from "jotai-x";
import { atom } from "jotai/vanilla";

import type { Message } from "@/stores/chat";

interface ChatState {
  chatId: string;
  messages: Message[];
  isLoading: boolean;
  messageListRef: React.RefObject<LegendListRef | null>;
}

const initialState: ChatState = {
  chatId: "",
  messages: [],
  isLoading: false,
  messageListRef: createRef<LegendListRef>(),
};

export const { useChatStore, ChatProvider: ChatStoreProvider } =
  createAtomStore(initialState, {
    name: "chat",
    extend: (atoms) => ({
      lastMessageId: atom((get) => {
        const messages = get(atoms.messages);
        return messages[messages.length - 1]?.id;
      }),
    }),
  });
