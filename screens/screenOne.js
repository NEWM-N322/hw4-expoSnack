//first screen, which displays the main content for app

//import useState from react
import { useState } from 'react';

//import necessary functions from react-native
import { View, Text, Pressable, StyleSheet } from 'react-native';

//import from native paper
import { TextInput } from 'react-native-paper';

//import the styling needed in utils folder
import { container, headerText, subText, buttonText } from '../utils/utils';

//set up first screen function 
export const ScreenOne = ({ currentView }) => {

  //create the useState which will help switch screens
const [whatView, setWhatView] = useState();

//return something to view
return (
  //create a view tag. This is going to display the content of the first screen
  //first screen has header text, subtext, an input, and a button to go to the next screen.
  <View style= {container}>
  <Text style = {headerText}> Hello, this is Homework One.</Text>
  <Text style = {subText}> This assignment demonstrates how to switch between screens. </Text>
   <View>
        <TextInput
          style={styles.textInput}
          label="What is your name?"
          onChangeText={setWhatView}
        />
          <Pressable style={styles.button} onPress={() => currentView(whatView)}>
      <Text style={buttonText}>CLICK ME</Text>
    </Pressable>
      </View>
  </View>
)
}

//stylesheet
const styles = StyleSheet.create({
  //styling for input
  textInput: {
    backgroundColor: '#fff',
    marginBottom: 20,
  },

  //styling pressable as a button
  button: {
    backgroundColor: '#FC8585',
    padding: 20,
    alignItems: 'center',
    borderRadius: 4,
  }
})