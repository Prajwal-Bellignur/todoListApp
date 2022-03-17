import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.testing}>Hello World! This is my first attempt at making React native apps from scratch!</Text>
      <StatusBar style="auto" />
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
  testing: {
    padding: 10,
    fontSize: 15,
    color: 'darkgreen',
    backgroundColor: 'lightyellow',
  }
});
