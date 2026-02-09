import { IconSymbol } from "@/components/ui/icon-symbol";
import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ tabBarItemStyle: { display: "none" } }} />
      <Tabs.Screen name="(tabs)/home" options={{
        title: "Home",
        tabBarIcon: ({ color, focused }) => (
          <IconSymbol
            name={'house.fill'}
            size={24}
            color={color}
          />
        ),
      }} />
      <Tabs.Screen name="(tabs)/demos" options={{
        title: "Demos",
        tabBarIcon: ({ color, focused }) => (
          <IconSymbol
            name={'sun.horizon'}
            size={24}
            color={color}
          />
        ),
      }} />
    </Tabs>
  );
}