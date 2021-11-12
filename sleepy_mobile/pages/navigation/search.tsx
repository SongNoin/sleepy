import React, { useContext } from "react";

import SearchScreen from "../screens/search";

import { createStackNavigator } from "@react-navigation/stack";
import NavigationLogo from "../../src/conponents/commons/navigationheader/navigationlogo";
import DetailScreen from "../screens/detail";
import NavigationLogo2 from "../../src/conponents/commons/navigationheader/navigationlogo2";
import { GlobalContext } from "../../App";
import CartScreen from "../screens/mypages/cart";
import PayScreen from "../screens/pay";
import BuyCompleteScreen from "../screens/buyComplete/buyComplete";
import BuyFailScreen from "../screens/buyFail";
import MypageScreen from "../screens/mypages/myMain";

const SearchNavigator = () => {
  const { setIsSearchHidden }: any = useContext(GlobalContext);

  const Stack = createStackNavigator();

  const getVisibility = (route: any) => {
    console.log(route.name);
    if (route.name === "상품 상세보기") {
      setIsSearchHidden(true);
    } else {
      setIsSearchHidden(false);
    }
  };

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="검색"
        component={SearchScreen}
        options={({ route }) => ({
          title: "",
          headerShown: true,
          headerTitle: () => <NavigationLogo />,
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
        component={BuyCompleteScreen}
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
      <Stack.Screen
        name="결제하기"
        component={PayScreen}
        options={({ route }) => ({
          headerShown: true,
          headerTitle: () => <NavigationLogo2 />,
          tabBarStyle: getVisibility(route),
        })}
      />
      <Stack.Screen
        name="결제실패"
        component={BuyFailScreen}
        options={({ route }) => ({
          headerShown: true,
          headerTitle: () => <NavigationLogo2 />,
          tabBarStyle: getVisibility(route),
        })}
      />
      {/* <Stack.Screen
        name="마이페이지"
        component={MypageScreen}
        options={({ route }) => ({
          headerShown: true,
          headerTitle: () => <NavigationLogo2 />,
          tabBarStyle: getVisibility(route),
        })}
      /> */}
    </Stack.Navigator>
  );
};

export default SearchNavigator;
