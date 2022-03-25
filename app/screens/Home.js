import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { KeyboardAvoidingView, Button, StyleSheet, ScrollView, Text, View, TextInput, TouchableOpacity, Keyboard, Alert } from 'react-native';

const Home = ( {navigation} ) => {
  const [name, setName] = useState();

  const inputName = () => {
    if(name != null) {
      Keyboard.dismiss();
    } else{
      Alert.alert("Invalid Entry", "Please enter a task", "OK");
    }
  }

  return (
    <View style={styles.container}>
      {/** category cards */}
      <View style={styles.cardsWrapper}>
        <View style={styles.cards}>
          <ScrollView height="86%">
              { // go through all the cards and do something
                /* taskItems.map((item, index) => {
                  return (
                    {/** create card component and add touchable opacity }
                  )
                }) */
              }
          </ScrollView>
        </View>
        {/* <Text>Hello World</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={text => setName(text)}
          onSubmitEditing = {() => inputName()}
          />
        <Button
          title="next screen"
          onPress={ () => navigation.push('TaskScreen', {Name: name})}
        /> */}
      </View>

      {/** adding a new card */}
      <View style={styles.addCard} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <Text style={styles.addButtonText}>Click to add a new category!</Text>
        <TouchableOpacity onPress={() => console.log("Added a new category")}>
          <View style={styles.addButton}>
            <Text style={styles.add}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );

}
export default Home;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 100,
  },
  input: {
    alignItems: 'center',
    padding: 10,
    fontSize: 12,
  },
  cardsWrapper: {
    paddingTop: 25,
    paddingHorizontal: 20,
  },
  cards: {
    marginTop: 30,
  },
  addCard: {
    position: 'absolute',
    bottom: 45,
    width: '100%',
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 14,
    color: "#737373",
    marginBottom: 15,
  },
  addButton: {
    width: 60,
    height: 60,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#95b3f0'
  },
  add: {
    color: '#FFF'
  },
})