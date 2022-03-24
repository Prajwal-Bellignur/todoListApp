import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react'
import { KeyboardAvoidingView, Button, StyleSheet, ScrollView, Text, View, TextInput, TouchableOpacity, Keyboard, Alert } from 'react-native';
import Task from '../components/Task.js';

export default function TaskScreen() {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);


  const handleAddTask = () => {
    if(task != null) {
      Keyboard.dismiss();
      setTaskItems([...taskItems, task]);
      setTask(null);
    } else{
      Alert.alert("Invalid Entry", "Please enter a task", "OK");
    }
  }

  const completeTask = (index) => {
    let itemsCopy =[...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>

    {/** tasks for today */}
    <View style={styles.taskWrapper}>
        <View style={styles.items}>
          {/* this is where the tasks will go */}

          <ScrollView height="86%">
            {
              taskItems.map((item, index) => {
                return (
                  <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                    <Task text={item}/>
                  </TouchableOpacity>
                )
              })
            }
          </ScrollView>
        </View>

    </View>

    {/* Write task */}
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper}>
        <TextInput
          autoFocus={true}
          style={styles.input}
          placeholder={'Write a task!'}
          value={task}
          onChangeText={text => setTask(text)}
          onSubmitEditing = {() => handleAddTask()} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.AddWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskWrapper: {
    paddingTop: 25,
    paddingHorizontal: 20,
  },
  banner: {
    height: '10%',
    width: '100%',
    backgroundColor: '#95b3f0'
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#95b3f0',
    borderWidth: 1,
    width: 250,
  },
  AddWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#95b3f0',
    borderWidth: 1,
  },
  addText: {
    color: '#95b3f0',
  },

});