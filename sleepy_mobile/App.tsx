import React, { createContext, useEffect, useState } from "react";
import type { Node } from "react";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./pages/navigation/tabNavigator";
import LoginNavigator from "./pages/navigation/loginAuth";
import { onError } from "@apollo/client/link/error";
import { getAccessToken } from "./src/commons/library/getAccessToken";
import LottieView from "lottie-react-native";
import { View } from "react-native";

export const GlobalContext = createContext(null);

const App: () => Node = () => {
  const Stack = createNativeStackNavigator();
  const [accessToken, setAccessToken] = useState("");
  const [isSearchHidden, setIsSearchHidden] = useState(false);
  const [isHomeHidden, setIsHomeHidden] = useState(false);
  const [id, setId] = useState("");
  const [tagId, setTagId] = useState("");
  const [chargeAmount, setChargeAmount] = useState("");
  const [isFavorite, setIsFavorite] = useState(true);
  const [isReview, setIsReview] = useState(false);
  const [isMypage, setMypage] = useState("");
  const [loading, setLoading] = useState(true);

  const value = {
    setAccessToken: setAccessToken,
    isSearchHidden: isSearchHidden,
    setIsSearchHidden: setIsSearchHidden,
    isHomeHidden: isHomeHidden,
    setIsHomeHidden: setIsHomeHidden,
    id: id,
    setId: setId,
    tagId: tagId,
    setTagId: setTagId,
    chargeAmount: chargeAmount,
    setChargeAmount: setChargeAmount,
    isFavorite: isFavorite,
    setIsFavorite: setIsFavorite,
    isReview: isReview,
    setIsReview: setIsReview,
    isMypage: isMypage,
    setMypage: setMypage,
  };

  useEffect(() => {
    AsyncStorage.getItem("@user", (_: any, result: any) => {
      // console.log("user: ",result)
      if (result) {
        // result가 있을때만 accessToken 저장
        setAccessToken(result);
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
    uri: "https://backend03-team.codebootcamp.co.kr/team05",
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
    credentials: "include",
  });

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
  });

  return (
    <>
      {loading ? (
        <View
          style={{
            flex: 1,
            backgroundColor: "#ffffff",
          }}
        >
          <LottieView
            source={require("./assets/splash.json")}
            autoPlay
            loop={false}
            speed={2}
            duration={1450}
            onAnimationFinish={() => {
              console.log("Animation Finished");
              setLoading(false);
            }}
          />
        </View>
      ) : (
        <GlobalContext.Provider value={value}>
          <ApolloProvider client={client}>
            <NavigationContainer>
              <Stack.Navigator screenOptions={{ headerShown: false }}>
                {accessToken ? (
                  <Stack.Screen name="tabNavigator" component={TabNavigator} />
                ) : (
                  <Stack.Screen name="Login" component={LoginNavigator} />
                )}
              </Stack.Navigator>
            </NavigationContainer>
          </ApolloProvider>
        </GlobalContext.Provider>
      )}
    </>
  );
};

export default App;
