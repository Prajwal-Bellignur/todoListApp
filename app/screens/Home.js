import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { KeyboardAvoidingView, Button, StyleSheet, ScrollView, Text, View, TextInput, TouchableOpacity, Keyboard, Alert } from 'react-native';
import AlertInput from 'react-native-alert-input';

const Home = ( {navigation} ) => {
  const [cardName, setCardName] = useState();

  const [cards, setCards] = useState([]);

  const inputName = () => {
    if(cardName != null) {
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
          value={cardName}
          onChangeText={text => setCardName(text)}
          onSubmitEditing = {() => inputName()}
          />
        <Button
          title="next screen"
          onPress={ () => navigation.push('TaskScreen', {Name: cardName})}
        /> */}
      </View>

      {/** adding a new card */}
      <KeyboardAvoidingView style={styles.addCard} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <Text style={styles.addButtonText}>Click to add a new category!</Text>
        <TouchableOpacity onPress={() => {
            <TextInput
              autoFocus={true}
              style={styles.addInput}
              placeholder="Enter category name"
              value={cardName}
              onChangeText={text => setCardName(text)}
              onSubmitEditing = {() => handleAddCard()}
            />
        }
        }>
          <View style={styles.addButton}>
            <Text style={styles.add}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
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
  addInput: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#95b3f0',
    borderWidth: 1,
    width: 250,
  },
})