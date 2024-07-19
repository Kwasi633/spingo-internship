// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from './src/components/Onboarding/Onboarding';
import Homepage from './src/components/HomePage/Homepage';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboard">

        <Stack.Screen name="Onboard"  
        component={Onboarding} 
        options={{ headerShown: false }}
        />
        
        <Stack.Screen  
        name="Home" 
        component={Homepage} 
        options={{ 
          title: 'Home',
          headerStyle: {
            backgroundColor: 'white'
          },
          headerTitleStyle: { fontSize: 18, fontWeight: 'bold' },
          headerTitleAlign: 'center',
          headerBackVisible: false
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;