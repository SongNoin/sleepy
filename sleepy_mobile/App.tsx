/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";

import { ApolloProvider } from "@apollo/client";
import { client } from "./src/apollo/client";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import type { Node } from "react";

import TabNavigator from "./pages/navigation/tabNavigator";

const App: () => Node = () => {
  const Stack = createNativeStackNavigator();

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="tabNavigator" component={TabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
