// // In App.js in a new project

// import * as React from 'react';
// import { View, Text, Button } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Onboarding from './src/components/Onboarding/Onboarding';
// import Homepage from './src/components/HomePage/Homepage';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Onboard">

//         <Stack.Screen name="Onboard"  
//         component={Onboarding} 
//         options={{ headerShown: false }}
//         />
        
//         <Stack.Screen  
//         name="Home" 
//         component={Homepage} 
//         options={{ 
//           title: 'Home',
//           headerStyle: {
//             backgroundColor: 'white'
//           },
//           headerTitleStyle: { fontSize: 18, fontWeight: 'bold' },
//           headerTitleAlign: 'center',
//           headerBackVisible: false
//           }}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homepage from './src/components/HomePage/Homepage';
import Calculator from './src/components/Calculator/calculator';
import Status from './src/components/Status/status';
import Receipt from './src/components/Receipt/receipt';
import Welcome from './src/components/Welcome/welcome';
import Onboarding from './src/components/Onboarding/Onboarding';
import HomeImg from './src/icons/home-2.png';
import Shop from './src/icons/focused.png'
import CalImg from './src/icons/calculator.png'
import ReciptImg from './src/icons/receipt.png'
import StatusImg from './src/icons/status-up.png'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function ScreenTabs() {
  return (
      <Tab.Navigator screenOptions={{
        tabBarShowLabel: false, // Hides the label for all tabs
      }}>
        <Tab.Screen name="Home" component={Homepage} 
         options={{ 
                     title: 'Home',
                     headerStyle: {
                       backgroundColor: 'white'
                     },
                     headerTitleStyle: { fontSize: 18, fontWeight: 'bold' },
                     headerTitleAlign: 'center',
                     tabBarIcon: ({ color, size }) => (
                      <Image source={HomeImg} style={{ width: size, height: size, tintColor: '#959595' }} />
                    ),
          }}
        />
        <Tab.Screen name="Status" 
        component={Status} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={Shop} style={{ width: 25, height: 36, tintColor: '#00A6FB' }} />
          ),
        }}
        />

<Tab.Screen name="Receipt" component={Receipt} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={ReciptImg} style={{ width: size, height: size, tintColor: color }} />
          ),
        }}
        />
        <Tab.Screen name="Calculator" component={Calculator} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={CalImg} style={{ width: size, height: size, tintColor: color }} />
          ),
        }}
        />
      
        <Tab.Screen name='Welcome' component={Welcome} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={StatusImg} style={{ width: size, height: size, tintColor: color }} />
          ),
        }}
        />
      </Tab.Navigator>
)}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen 
          name="Onboarding" 
          component={Onboarding} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="MainApp" 
          component={ScreenTabs} 
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
