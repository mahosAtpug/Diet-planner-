import React from "react";
import breakfastScreen from "../screens/breakfastScreen"
import snacksScreen from "../screens/snacksScreen"
import lunchScreen from "../screens/lunchScreen"
import dinnerScreen from "../screens/dinnerScreen"
import {createStackNavigator} from "react-navigation-stack"
import RecipiesAndDrinks from "../screens/recipiesAndDrinksScreen"
import SnacksScreen from "../screens/snacksScreen";
import Breakfast1 from "../screens/breakfast1";


export const AppStackNavigator = createStackNavigator({
    RecipiesAndDrinks:{
        screen:RecipiesAndDrinks,
        navigationOptions:{
            headerShown:false
        }
    },

    Breakfast:{
        screen:breakfastScreen,
        navigationOptions:{
            headerShown:false
        }
    },

    Lunch:{
        screen:lunchScreen,
        navigationOptions:{
            headerShown:false
        }
    },

    Snacks:{
        screen:snacksScreen,
        navigationOptions:{
            headerShown:false
        }
    },

    Dinner:{
        screen:dinnerScreen,
        navigationOptions:{
            headerShown:false
        }
    },

    Breakfast1:{
        screen:Breakfast1,
        navigationOptions:{
            headerShown:false
        }
    },

},

{
 initialRouteName:"RecipiesAndDrinks"

}

)