import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { KeyboardAvoidingView, Button, StyleSheet, ScrollView, Text, View, TextInput, TouchableOpacity, Keyboard, Alert } from 'react-native';


export default function Home() {
  return (
    <View style={styles.container}>
        <Text>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 100,
  },
})