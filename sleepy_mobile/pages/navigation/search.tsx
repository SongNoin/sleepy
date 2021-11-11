import React from "react";

import SearchScreen from "../screens/search";

import { createStackNavigator } from "@react-navigation/stack";
import NavigationLogo from "../../src/conponents/commons/navigationheader/navigationlogo";
import DetailScreen from "../screens/detail";
import NavigationLogo2 from "../../src/conponents/commons/navigationheader/navigationlogo2";


const SearchNavigator = () => {

    const Stack = createStackNavigator()

    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen 
                name="검색"
                component={SearchScreen}
                options={{
                    title:"",
                    headerShown:true,
                    headerTitle: () => <NavigationLogo />, 
                }}
            />
            <Stack.Screen 
                name="상품 상세보기"
                component={DetailScreen}
                options={{
                
                    headerShown:true,
                    headerTitle: () => <NavigationLogo2 />, 
                }}
            />
        </Stack.Navigator>
    )
}

export default SearchNavigator