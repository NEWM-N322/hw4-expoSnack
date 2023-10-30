//importing useState from react
import { useState } from 'react';

//import functions needed from react-native
import { View, SafeAreaView, StyleSheet } from 'react-native';

//import the two screens that are needed, screenOne and screenTwo
import { ScreenOne } from './screens/screenOne';
import { ScreenTwo } from './screens/screenTwo';

export default function App() {
   //create a constant variable
  const [currentView, setCurrentView] = useState();
  return (
    
    <SafeAreaView style={styles.container}>
      {!currentView ? (
        <View>
          <ScreenOne currentView={setCurrentView} />
           
        </View>
      ) : (
        <ScreenTwo
          currentView={setCurrentView}
          previousInput={currentView}
        />
      )}
    </SafeAreaView>
  );
}

//stylesheet for application
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F6EADB',
    padding: 8,
  },
});
