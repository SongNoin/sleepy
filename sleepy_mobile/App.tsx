/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import type {Node} from 'react';

import TabNavigator from './pages/navigation/tabNavigator';

const App: () => Node = () => {

  const Stack = createNativeStackNavigator()

  return (
   <NavigationContainer >
     <Stack.Navigator screenOptions={{headerShown: false}}>
       <Stack.Screen name="tabNavigator" component={TabNavigator} />
     </Stack.Navigator>
   </NavigationContainer>
  );
};



export default App;
