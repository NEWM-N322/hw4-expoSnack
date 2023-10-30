//second screen, which will be displayed after the first screen

//import functions from react native
import { View, Text, Pressable, StyleSheet } from 'react-native';

//import the list function
import { List } from 'react-native-paper';


//import the styling needed in utils folder
import { container, headerText, subText, buttonText } from '../utils/utils';

//create the function called ScreenTwo
export const ScreenTwo = ({ currentView, previousInput }) => {
   const travels = [
    { id: "Explored nature:", text: 'I got to visit some of the most beautiful sites I have ever seen.' },
    { id: "Met family:", text: 'I was reunited with so much family, and got to meet new people.' },
    { id: "Travel:", text: 'I traveled to 8 different cities, and explored different towns in each city.' },
    { id: "Eat:", text: 'I ate some of my favorite foods, and tried new dishes.' },
    { id: "Reminisce:", text: 'I was able to relive everything I did the first time, and it was surreal.' },
  ];

  //similar to the first screen, return a view
  return (
    <View style ={container}>
    <Text style ={headerText}> Welcome, {previousInput}!</Text>
    <Text style = {subText}> This a list of things I did during my trip to Mexico. </Text>
    {travels.map(item => (
        // <Text key={item.id}>{item.text}</Text>
         <List.Item
            title={item.id}
            description={item.text}/>
      ))}
      <Pressable onPress={() => currentView('')} style = {styles.button}>
        <Text style = {buttonText}>GO HOME</Text>
      </Pressable>
    </View>
  )
}

//stylesheet 
const styles = StyleSheet.create( {
  button: {
    backgroundColor: '#85CBD9',
    padding: 20,
    alignItems: 'center',
    borderRadius: 4,
    marginTop: 10,
  }
})
