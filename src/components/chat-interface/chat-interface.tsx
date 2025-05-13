import { LegendList } from "@legendapp/list/keyboard-controller";
import { AnimatedLegendList } from "@legendapp/list/reanimated";
import { useHeaderHeight } from "@react-navigation/elements";
import { ArrowUp } from "lucide-react-native";
import { ActivityIndicator, Platform, View } from "react-native";
import { KeyboardAvoidingView } from "react-native-keyboard-controller";
import Animated, { ZoomIn } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Button } from "@/components/ui/button";
import { ChatTextInput } from "@/components/ui/chat-text-input";
import { iconWithClassName } from "@/lib/icons";
import { cn } from "@/lib/utils";
import type { Message } from "@/stores/chat";

import { MessageItem } from "./message-item";
import { ChatStoreProvider, useChatStore } from "./store";

interface ChatInterfaceProps {
  chatId: string;
  initialMessages?: Message[];
  loading?: boolean;
}

export function ChatInterface({
  chatId,
  initialMessages,
  loading = false,
}: ChatInterfaceProps) {
  const { bottom } = useSafeAreaInsets();

  const headerHeight = Platform.OS === "ios" ? useHeaderHeight() : 56;

  return (
    <ChatStoreProvider
      chatId={chatId}
      messages={initialMessages}
      isLoading={loading}
    >
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={headerHeight - bottom}
        contentContainerStyle={{
          flex: 1,
        }}
        className="flex-1"
      >
        <ChatMessages />
        <Footer />
      </KeyboardAvoidingView>
    </ChatStoreProvider>
  );
}

function ChatMessages() {
  const store = useChatStore();
  const isLoading = store.useValue("isLoading");
  const messages = store.useValue("messages");

  const listRef = store.useValue("messageListRef");

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <LegendList
      ref={listRef}
      style={{ paddingTop: 16 }}
      data={messages}
      renderItem={({ item }) => <MessageItem message={item} />}
      keyExtractor={($) => $.id}
      estimatedItemSize={100}
      maintainVisibleContentPosition
      maintainScrollAtEnd
      alignItemsAtEnd
      initialScrollIndex={messages.length - 1}
      LegendList={AnimatedLegendList}
    />
  );
}

function Footer() {
  const store = useChatStore();
  const isLoading = store.useValue("isLoading");

  return (
    <View className="pb-safe-offset-2 gap-2 px-1 pt-4">
      <View className="rounded-[24px] bg-white">
        <ChatTextInput
          className="pt-4"
          placeholder="Say something..."
          autoFocus
          multiline
          editable={!isLoading}
        />
        <View className="flex-row items-center px-2 py-2">
          <View className="flex-1" />
          <SendButton />
        </View>
      </View>
    </View>
  );
}

iconWithClassName(ArrowUp);

interface SendButtonProps {
  disabled?: boolean;
}

function SendButton({ disabled = false }: SendButtonProps) {
  const store = useChatStore();
  const isLoading = store.useValue("isLoading");

  return (
    <Animated.View entering={ZoomIn.duration(100)}>
      <Button
        size="icon"
        className={cn(
          "size-9 rounded-full bg-black dark:bg-white",
          disabled && "opacity-50",
        )}
        disabled={isLoading || disabled}
      >
        <ArrowUp size={20} className="text-background h-6 w-6" />
      </Button>
    </Animated.View>
  );
}
