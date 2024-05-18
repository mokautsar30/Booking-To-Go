import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import paymentDetails from './paymentDetails';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>fetch all the hotel data</Text>
      <StatusBar style="auto" />
      <Link href="/home" style={{color: 'blue'}} >go to home</Link>
      <Link href="/guest" style={{color: "red"}}>add more guest</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
