import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "green",
        tabBarStyle: {
          backgroundColor: "#1e293b",
          height: 90,
          paddingBottom: 30,
          paddingTop: 10,
          borderTopWidth: 1,
          borderTopColor: "gray",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{ title: "Todos", tabBarIcon: ({ color, size }) => <Ionicons name="flag-outline" size={size} color={color} /> }}
      />
      <Tabs.Screen
        name="setting"
        options={{ title: "Setting", tabBarIcon: ({ color, size }) => <Ionicons name="settings-outline" size={size} color={color} /> }}
      />
      <Tabs.Screen
        name="about"
        options={{ title: "About", tabBarIcon: ({ color, size }) => <Ionicons name="information-circle-outline" size={size} color={color} /> }}
      />
    </Tabs>
  );
};

export default TabsLayout;
