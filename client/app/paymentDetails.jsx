import React, { useState, useEffect, useLayoutEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  Ionicons,
  FontAwesome,
  Feather,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import CustomBackButton from "../components/CustomBackButton";
import { Colors } from "react-native/Libraries/NewAppScreen";
import formatDate from "../helpers/formatDate";
import RadioButton from "../components/RadioButton";

const BookingDetailScreen = () => {
  const [data, setData] = useState({
    chosen_hotel_detail: { images: [] },
    chosen_hotel_room: {},
  });
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const [orderMethod, setOrderMethod] = useState("");
  const route = useRoute();
  const { guests = [] } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Booking Detail",
      headerTitleStyle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#003580",
        height: 110,
      },
      headerLeft: () => <CustomBackButton />,
    });
  });

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://parseapi.back4app.com/classes/hotel/bVonXoSUHK",
        {
          method: "GET",
          headers: {
            "X-Parse-Application-Id":
              "Rr9ZKgR2t2f49g5ueLWriacIrvKy8Hwv7P87FSw3",
            "X-Parse-REST-API-Key": "4C6gLjrbNGoym5m9j9mFQiDzXO5eETLxjUjY9Fzy",
          },
        }
      );
      const json = await response.json();
      setData(json.chosen_hotel.data.get_chosen_hotel);
      // console.log(json.chosen_hotel);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleMethod = (method) => {
    setOrderMethod(method);
  };

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#003580" />
      </View>
    );
  }

  if (!data) {
    return (
      <View style={styles.error}>
        <Text>Failed to load data</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <View>
        <View style={styles.headerContainer}>
          <View style={styles.headerContent}>
            <View style={styles.numberContainer}>
              <Text style={styles.number}>1</Text>
            </View>
            <Text style={styles.headerText}> Detail pesanan</Text>
            <Text style={styles.headerText}>-</Text>
            <View style={styles.numberContainerFaded}>
              <Text style={styles.numberFaded}>2</Text>
            </View>
            <Text style={styles.headerTextFaded}> Pembayaran</Text>
          </View>
        </View>
        <View
          style={{
            marginBottom: -5,
            backgroundColor: "#1875A4",
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            padding: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#fff" }}>
            Detail Pesanan
          </Text>
        </View>
        <Image
          source={data.chosen_hotel_detail.images}
          style={{ width: "100%", height: 240 }}
        />
        <View
          style={{
            marginTop: -20,
            backgroundColor: Colors.white,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            padding: 20,
          }}
        >
          <Text style={{ fontSize: 23, fontWeight: "bold" }}>
            {data.chosen_hotel_detail.hotel_name}
          </Text>
          <FlatList
            data={[data.chosen_hotel_room]}
            horizontal={true}
            renderItem={({ item }) => (
              <Text
                style={{ marginRight: 10, color: Colors.GRAY, opacity: 0.5 }}
              >
                {item.room_name}
              </Text>
            )}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <Ionicons name="location" size={20} />
            <Text style={{ fontSize: 14, opacity: 0.5 }}>
              {data.chosen_hotel_detail.address}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 10,
            margin: 10,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "600" }}>Check-In</Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            {formatDate(data.chosen_hotel_params.check_in)}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 10,
            margin: 10,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "600" }}>Check-Out</Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            {formatDate(data.chosen_hotel_params.check_out)}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginRight: 10,
          }}
        >
          <MaterialCommunityIcons
            name="credit-card-refund-outline"
            size={25}
            style={{ marginLeft: 155, color: "orange" }}
          />
          <Text style={{ color: "orange", fontWeight: "500" }}>
            Dapat direfund jika dibatalkan
          </Text>
        </View>
        <View
          style={{
            marginTop: 10,
            backgroundColor: Colors.white,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            padding: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 10,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            Detail Pemesan
          </Text>

          <TouchableOpacity>
            <FontAwesome name="pencil-square-o" size={20} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: -20,
            backgroundColor: Colors.white,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
            padding: 20,
          }}
        >
          <Text>Tuan andreas</Text>
          <Text>andreas@mail.com</Text>
          <Text>0812673656</Text>
        </View>
        <View
          style={{
            marginTop: 20,
            backgroundColor: Colors.white,
            borderRadius: 20,
            padding: 20,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 10 }}>
            Anda memesan untuk
          </Text>
          <RadioButton
            options={[
              "Saya memesan untuk diri sendiri",
              "Saya memesan untuk orang lain",
            ]}
            selectedOption={orderMethod}
            onSelect={handleMethod}
          />
        </View>
        <View
          style={{
            marginTop: 20,
            backgroundColor: Colors.white,
            borderRadius: 20,
            padding: 20,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 10 }}>
            Data tamu
          </Text>
          {guests.map((guest, index) => (
            <View key={index} style={styles.guestDetailContainer}>
              <Text style={styles.guestDetailText}> {guest.title}</Text>
              <Text style={styles.guestDetailText}> {guest.name}</Text>
            </View>
          ))}
          <TouchableOpacity onPress={() => navigation.navigate("guestScreen")}>
            <View
              style={{
                marginTop: 10,
                padding: 20,
                flexDirection: "row",
                justifyContent: "flex-end",
                marginVertical: 10,
              }}
            >
              <AntDesign name="adduser" size={20} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default BookingDetailScreen;

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  error: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer: {
    padding: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 2,
    marginRight: 5,
  },
  numberContainer: {
    backgroundColor: "#003580",
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 60,
  },
  number: {
    color: "white",
    fontWeight: "bold",
  },
  numberContainerFaded: {
    backgroundColor: "#003580",
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
    opacity: 0.5,
  },
  numberFaded: {
    color: "white",
    fontWeight: "bold",
    opacity: 0.5,
  },
  headerTextFaded: {
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 2,
    marginRight: 5,
    opacity: 0.5,
  },
  guestDetailContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  guestDetailText: {
    fontSize: 14,
    marginRight: 10,
    fontWeight: "bold",
  },
});
