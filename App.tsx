import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from "./src/navigation/StackNavigator";
import BottomTab from "./src/navigation/ButtomNavigator";

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
      
  );
}

export default App;
