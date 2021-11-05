import React from "react";

import SearchScreen from "../screens/search";

import { createStackNavigator } from "@react-navigation/stack";
import NavigationLogo from "../../src/conponents/commons/navigationheader/navigationlogo";


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
        </Stack.Navigator>
    )
}

export default SearchNavigator