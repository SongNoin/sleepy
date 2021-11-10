import React, { createContext, useEffect, useState } from "react";
import type { Node } from "react";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from '@apollo/client';
import {createUploadLink} from 'apollo-upload-client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./pages/navigation/tabNavigator";
import LoginNavigator from "./pages/navigation/loginAuth";
import { onError } from "@apollo/client/link/error";
import { getAccessToken } from "./src/commons/library/getAccessToken";

export const AuthContext = createContext(null);

const App: () => Node = () => {
  const Stack = createNativeStackNavigator();
  const [accessToken , setAccessToken] = useState("")
  const authValue = {
    setAccessToken: setAccessToken,
  };

  useEffect(() => {
    AsyncStorage.getItem("@user", (_: any, result: any) => {
      // console.log("user: ",result)
      if(result){ 
        // result가 있을때만 accessToken 저장
        setAccessToken(result)
      }
    });
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (err.extensions?.code === "UNAUTHENTICATED") {
          operation.setContext({
            headers: {
              ...operation.getContext().headers,
              authorization: `Bearer ${getAccessToken(setAccessToken)}`,
            },
          });
          return forward(operation);
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: 'http://34.64.161.16/team05',
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include', 
  });

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([errorLink,uploadLink]),
  });

  return (
    <AuthContext.Provider value={authValue}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {
              accessToken ? 
                <Stack.Screen name="tabNavigator" component={TabNavigator} /> 
                : 
                <Stack.Screen name="Login" component={LoginNavigator} />
            }
          </Stack.Navigator>
        </NavigationContainer>
      </ApolloProvider>
    </AuthContext.Provider>
    
  );
};

export default App;
