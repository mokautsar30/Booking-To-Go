import { StyleSheet, Text, View } from "react-native";
import { Tabs } from "expo-router";
import { Ionicons, FontAwesome, Feather, AntDesign } from "@expo/vector-icons";

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#FFF",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarStyle: styles.tabBar,
          tabBarLabelStyle: { fontWeight: "bold", fontSize: 11 },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Explore",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <Feather
                name="home"
                size={25}
                color={color}
                focused={focused}
                style={{ marginTop: 10 }}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="orderHistory"
          options={{
            title: "Order List",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <Feather
                name="list"
                size={25}
                color={color}
                focused={focused}
                style={{ marginTop: 10 }}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <AntDesign
                name="user"
                size={25}
                color={color}
                focused={focused}
                style={{ marginTop: 10 }}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#1875A4",
    borderRadius: 25,
    position: "absolute",
  },
});
