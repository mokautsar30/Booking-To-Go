import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState, useLayoutEffect } from 'react';
import { useNavigation } from "@react-navigation/native";
import CustomBackButton from '../components/CustomBackButton';
import {
  MaterialIcons
} from "@expo/vector-icons";
import { Colors } from 'react-native/Libraries/NewAppScreen';

const GuestData = () => {
  const navigation = useNavigation();
  const [guests, setGuests] = useState([{ title: '', name: '' }]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Tambah Data Tamu",
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

  const handleTitleChange = (title, index) => {
    const updatedGuests = [...guests];
    updatedGuests[index].title = title;
    setGuests(updatedGuests);
  };

  const handleNameChange = (name, index) => {
    const updatedGuests = [...guests];
    updatedGuests[index].name = name;
    setGuests(updatedGuests);
  };

  const addGuest = () => {
    setGuests([...guests, { title: '', name: '' }]);
  };

  const removeGuest = (index) => {
    const updatedGuests = guests.filter((_, i) => i !== index);
    setGuests(updatedGuests);
  };

  const submitGuests = () => {
    navigation.navigate('paymentDetails', { guests });
  };

  return (
    <ScrollView>
              <View
          style={{
            marginTop: 20,
            backgroundColor: Colors.white,
            borderRadius: 20,
            padding: 20,
          }}
        >
                   <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 10 }}>
            Tambah data tamu
          </Text>
      {guests.map((guest, index) => (
        <View key={index} style={styles.guestContainer}>
          <View style={styles.dropdownContainer}>
            <Text>Title:</Text>
            <TextInput
              style={styles.input}
              value={guest.title}
              onChangeText={(title) => handleTitleChange(title, index)}
              placeholder="Title"
            />
          </View>
          <View style={styles.nameContainer}>
            <Text>Name:</Text>
            <TextInput
              style={styles.input}
              value={guest.name}
              onChangeText={(name) => handleNameChange(name, index)}
              placeholder="Name"
            />
          </View>
          <TouchableOpacity onPress={() => removeGuest(index)} style={styles.deleteButton}>
            <MaterialIcons name='delete-forever' size={30}/>
          </TouchableOpacity>
        </View>
      ))}
      <TouchableOpacity onPress={addGuest} style={styles.addButton}>
        <Text>+ Tambah data tamu</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={submitGuests} style={styles.submitButton}>
        <Text>Submit</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
  
  );
};

const styles = StyleSheet.create({
  guestContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  dropdownContainer: {
    flex: 1,
    marginRight: 10,
  },
  nameContainer: {
    flex: 1,
    marginRight: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8,
    borderRadius: 5,
  },
  deleteButton: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  addButton: {
    backgroundColor: '#1875A4',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  submitButton: {
    backgroundColor: '#28A745',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});
export default GuestData;
