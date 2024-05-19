import { Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({ title, handlePress, isLoading, containerStyles }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-orange-500 rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
    >
      <Text className="text-black font-semibold text-lg">{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
