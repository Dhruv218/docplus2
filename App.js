// In App.js in a new project

import * as React from 'react';
import { View, Text,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from "react-native-vector-icons/AntDesign";
import Home from './src/screens/home';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer 
    >
      <Stack.Navigator  initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{title: 'Doctor’s Profile',
      headerTitleAlign: 'center',
            headerTitleStyle: {
              color: '#15AEB2'  
            },
            headerRight: () => (
              <Image 
              source={require('./assets/redirect.png')} 
                style={{ marginRight: 15 }}
                />
                
     ) }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;