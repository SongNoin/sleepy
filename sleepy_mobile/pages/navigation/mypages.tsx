import React from "react";

import MypageScreen from "../screens/mypages/myMain";
import CartScreen from "../screens/mypages/cart";
import FavoriteScreen from "../screens/mypages/favorite";
import ModifyScreen from "../screens/mypages/modify";

import { createStackNavigator } from "@react-navigation/stack";

import NavigationLogo from "../../src/conponents/commons/navigationheader/navigationlogo";
import NavigationLogo2 from "../../src/conponents/commons/navigationheader/navigationlogo2";


const MyScreenNavigator = () => {

    const Stack = createStackNavigator()

    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen 
                name="마이페이지"
                component={MypageScreen}
                options={{
                    title:"",
                    headerShown:true,
                    headerTitle: () => <NavigationLogo />, 
                }}
            />
            <Stack.Screen 
                name="장바구니"
                component={CartScreen}
                options={{
                    headerShown: true,
                    headerTitle: () => <NavigationLogo2 />,
                  }}
            />
            <Stack.Screen 
                name="마이찜"
                component={FavoriteScreen}
                options={{
                    headerShown: true,
                    headerTitle: () => <NavigationLogo2 />,
                  }}
            />
            <Stack.Screen 
                name="내정보 수정"
                component={ModifyScreen}
                options={{
                    headerShown: true,
                    headerTitle: () => <NavigationLogo2 />,
                  }}
            />
        </Stack.Navigator>
    )
}

export default MyScreenNavigator