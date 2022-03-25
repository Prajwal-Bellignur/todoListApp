import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { enableScreens } from 'react-native-screens';
import { KeyboardAvoidingView, Button, StyleSheet, ScrollView, Text, View, TextInput, TouchableOpacity, Keyboard, Alert } from 'react-native';
enableScreens();

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// const Stack = createNativeStackNavigator();
const Stack = createStackNavigator();
import Home from './app/screens/Home.js';
import TaskScreen from './app/screens/TaskScreen.js';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title:"Categories",
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#FFF',
            },
            headerStyle: {
              backgroundColor: '#95b3f0',
            }
          }}
          />
        <Stack.Screen
          name="TaskScreen"
          component={TaskScreen}
          options={{
            title:"Today's Tasks", 
            headerStyle: {
              backgroundColor: '#95b3f0',
            }
          }}/>
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