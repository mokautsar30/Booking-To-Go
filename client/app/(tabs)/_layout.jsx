import { StyleSheet, Text, View } from "react-native";
import { Tabs } from "expo-router";
import { Ionicons, FontAwesome, Feather } from "@expo/vector-icons";

const TabsLayout = () => {
  return (
    <>
      <Tabs screenOptions={{tabBarLabelStyle: {fontWeight: 'bold'}}}>
        <Tabs.Screen
          name="home"
          options={{
            title: "Explore",
            color: "black",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Ionicons name="home" size={24} color={color.black} />
            ),
          }}
        />
        <Tabs.Screen
          name="orderHistory"
          options={{
            title: "Order List",
            color: "black",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Feather name="list" size={24} color={color.black} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            color: "black",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <FontAwesome name="user" size={24} color={color.black} />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({});
