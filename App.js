import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { enableScreens } from 'react-native-screens';
import { KeyboardAvoidingView, Button, StyleSheet, ScrollView, Text, View, TextInput, TouchableOpacity, Keyboard, Alert } from 'react-native';
enableScreens();

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import Home from './app/screens/Home.js';
import TaskScreen from './app/screens/TaskScreen.js';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name=" " component={Home} />
        <Stack.Screen name="Tasks" component={TaskScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
})