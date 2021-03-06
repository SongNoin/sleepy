import React, { useContext } from "react";
import { GlobalContext } from "../../App";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";

import HomeNavigator from "./home";
import SearchNavigator from "./search";
import FavoriteNavigator from "./favorite";
import MyScreenNavigator from "./mypages";
import NavigationDetail from "../../src/conponents/commons/navigationbottom/navigationdetail";

const TabNavigator = () => {
  const { isSearchHidden, isHomeHidden }: any = useContext(GlobalContext);
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName={"홈"}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name === "검색") {
            iconName = focused ? (
              <Image
                source={require("../../public/images/navigation/search-on.png")}
              />
            ) : (
              <Image
                source={require("../../public/images/navigation/search-off.png")}
              />
            );
          } else if (route.name === "홈") {
            iconName = focused ? (
              <Image
                source={require("../../public/images/navigation/home-on.png")}
              />
            ) : (
              <Image
                source={require("../../public/images/navigation/home-off.png")}
              />
            );
          } else if (route.name === "마이찜") {
            iconName = focused ? (
              <Image
                source={require("../../public/images/navigation/favorite-on.png")}
              />
            ) : (
              <Image
                source={require("../../public/images/navigation/favorite-off.png")}
              />
            );
          } else if (route.name === "마이페이지") {
            iconName = focused ? (
              <Image
                source={require("../../public/images/navigation/my-on.png")}
              />
            ) : (
              <Image
                source={require("../../public/images/navigation/my-off.png")}
              />
            );
          }
          return iconName;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#5B5BC0",
        inactiveTintColor: "#C4C4C4",
        showLabel: false,
      }}
    >
      <Tab.Group screenOptions={{ headerShown: false }}>
        {isSearchHidden && (
          <Tab.Screen
            name="검색"
            component={SearchNavigator}
            options={{
              tabBarHideOnKeyboard: true,
              tabBarIcon: () => <NavigationDetail />,
            }}
          />
        )}

        {isHomeHidden && (
          <Tab.Screen
            name="홈"
            component={HomeNavigator}
            options={{ tabBarIcon: () => <NavigationDetail /> }}
          />
        )}

        {!isHomeHidden && !isSearchHidden && (
          <>
            <Tab.Screen
              name="검색"
              component={SearchNavigator}
              options={{ tabBarHideOnKeyboard: true }}
            />
            <Tab.Screen name="홈" component={HomeNavigator} />
            <Tab.Screen name="마이찜" component={FavoriteNavigator} />
            <Tab.Screen
              name="마이페이지"
              component={MyScreenNavigator}
              options={{ tabBarHideOnKeyboard: true }}
            />
          </>
        )}
      </Tab.Group>
    </Tab.Navigator>
  );
};

export default TabNavigator;
