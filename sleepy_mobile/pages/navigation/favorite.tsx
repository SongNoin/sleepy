import React from "react";

import FavoriteScreen from "../screens/mypages/favorite";

import { createStackNavigator } from "@react-navigation/stack";

import NavigationLogo from "../../src/conponents/commons/navigationheader/navigationlogo";

const FavoriteNavigator = () => {

    const Stack = createStackNavigator()

    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen 
                name="마이찜"
                component={FavoriteScreen}
                options={{
                    title:"",
                    headerShown:true,
                    headerTitle: () => <NavigationLogo />, 
                }}
            />
        </Stack.Navigator>
    )
}

export default FavoriteNavigator