import { Drawer } from "expo-router/drawer";

import { HomeDrawerScreen } from "@/components/screens/home-drawer";

export default function AppLayout() {
  return (
    <Drawer drawerContent={(props) => <HomeDrawerScreen {...props} />}>
      <Drawer.Screen
        name="index"
        options={{
          title: "Chat",
        }}
      />
    </Drawer>
  );
}
