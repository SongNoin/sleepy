import React, { createContext, useState } from "react";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from '@apollo/client';
import {createUploadLink} from 'apollo-upload-client';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import type { Node } from "react";

import TabNavigator from "./pages/navigation/tabNavigator";
import LoginNavigator from "./pages/navigation/loginAuth";
export const AuthContext = createContext(null);



const App: () => Node = () => {
  const Stack = createNativeStackNavigator();
  const [accessToken , setAccessToken] = useState("")
  const authValue = {
    accessToken: accessToken,
    setAccessToken: setAccessToken,
  
  };


  const uploadLink = createUploadLink({
    uri: 'http://34.64.161.16/team05',
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include', // "중요한 정보들을 포함시켜줘"
  });

  const client = new ApolloClient({
    // 주소를 등록해줘야함
    // uri: "http://backend03.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
    link: ApolloLink.from([uploadLink]),
    // errorLink , uploadLink 순서에 맞춰서 넣어줌
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
            {/* user가 있으면 tab , 없으면 Login */}
          </Stack.Navigator>
        </NavigationContainer>
      </ApolloProvider>
    </AuthContext.Provider>
    
  );
};

export default App;
