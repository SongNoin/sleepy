import React, { useContext } from "react";
import { AuthContext } from "../../App";

import HomeScreen from "../screens/home";
import DetailScreen from "../screens/detail";
import ListScreen from "../screens/list";
import BuyScreen from "../screens/detail/buy";
import CartScreen from "../screens/mypages/cart";

import { createStackNavigator } from "@react-navigation/stack";

import NavigationLogo from "../../src/conponents/commons/navigationheader/navigationlogo";
import NavigationLogo2 from "../../src/conponents/commons/navigationheader/navigationlogo2";

const HomeNavigator = () => {
  const Stack = createStackNavigator();

  const { setIsHidden } = useContext(AuthContext);

  const getVisibility = (route: any) => {
    console.log(route.name);
    if (route.name === "상품 상세보기") {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  };

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="홈"
        component={HomeScreen}
        options={({ route }) => ({
          title: "",
          headerShown: true,
          headerTitle: () => <NavigationLogo />,
          tabBarStyle: getVisibility(route),
        })}
      />
      <Stack.Screen
        name="상품 리스트"
        component={ListScreen}
        options={({ route }) => ({
          headerShown: true,
          headerTitle: () => <NavigationLogo2 />,
          tabBarStyle: getVisibility(route),
        })}
      />
      <Stack.Screen
        name="상품 상세보기"
        component={DetailScreen}
        options={({ route }) => ({
          headerShown: true,
          headerTitle: () => <NavigationLogo2 />,
          tabBarStyle: getVisibility(route),
        })}
      />
      <Stack.Screen
        name="구매하기"
        component={BuyScreen}
        options={({ route }) => ({
          headerShown: true,
          headerTitle: () => <NavigationLogo2 />,
          tabBarStyle: getVisibility(route),
        })}
      />
      <Stack.Screen
        name="장바구니"
        component={CartScreen}
        options={({ route }) => ({
          headerShown: true,
          headerTitle: () => <NavigationLogo2 />,
          tabBarStyle: getVisibility(route),
        })}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
