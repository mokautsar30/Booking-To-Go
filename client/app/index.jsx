import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import paymentDetails from "./paymentDetails";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../constants";

export default function App() {
  return (
    <SafeAreaView className='h-full'>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center px-4">
          <Image source={images.logo}
          className='w-[230px] h-[84px]'
          resizeMode="contain"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

