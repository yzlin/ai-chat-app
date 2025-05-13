import type { DrawerContentComponentProps } from "@react-navigation/drawer";
import { View } from "react-native";

import { Text } from "@/components/ui/text";

import { ChatHistory } from "./chat-history";

export function HomeDrawerScreen(props: DrawerContentComponentProps) {
  return (
    <View className="pt-safe flex-1">
      <Header />
      <ChatHistory />
    </View>
  );
}

function Header() {
  return (
    <View className="flex-row items-center px-4 py-2">
      <Text className="text-md flex-1 uppercase">Chats</Text>
    </View>
  );
}
