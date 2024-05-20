import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Redirect, router } from "expo-router";
import paymentDetails from "./paymentDetails";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../constants";
import CustomButton from "../components/CustomButton";

export default function App() {
  return (
    <SafeAreaView className="h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
          <Image
            source={images.logo}
            className="w-[230px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.banner}
            className="w-[370px] h-[350px]"
            resizeMode="contain"
          />
          <View className="relative">
            <Text className="text-2xl text-black font-bold text-center">
              Discover endless possibilities with{" "}
              <Text className="text-blue-500">
                Booking
                <Text className="text-orange-500">to</Text>
                go
              </Text>
            </Text>
            <Text className="text-sm mt-7 text-center font-semibold text-gray-700">
              Discover, Book, and Travel with Ease – Your Ultimate Travel
              Companion.
            </Text>
          </View>
          <CustomButton
            title="Homepage"
            handlePress={() => router.push("/home")}
            containerStyles="w-full mt-7"
          />
          <CustomButton
            title="Continue to book"
            handlePress={() => router.push("/paymentDetails")}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="dark" />
    </SafeAreaView>
  );
}
