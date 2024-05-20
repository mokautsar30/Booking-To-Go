import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const GuestDetailsForm = ({ guestDetails, setGuestDetails, onSave }) => {
  const [localDetails, setLocalDetails] = useState(guestDetails);

  const handleSave = () => {
    setGuestDetails(localDetails);
    onSave();
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={localDetails.name}
        onChangeText={(text) =>
          setLocalDetails({ ...localDetails, name: text })
        }
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={localDetails.email}
        onChangeText={(text) =>
          setLocalDetails({ ...localDetails, email: text })
        }
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        value={localDetails.phone}
        onChangeText={(text) =>
          setLocalDetails({ ...localDetails, phone: text })
        }
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

export default GuestDetailsForm;

const styles = StyleSheet.create({
  formContainer: {
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});
