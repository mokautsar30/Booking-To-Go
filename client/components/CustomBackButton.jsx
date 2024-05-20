import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, FontAwesome, Feather, AntDesign } from "@expo/vector-icons";

const CustomBackButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Ionicons name="chevron-back-circle" size={30} color="white" />
    </TouchableOpacity>
  );
};

export default CustomBackButton;
