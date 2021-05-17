import React from "react";
import {TouchableOpacity , Text , Image , StyleSheet , View, TextInput, Alert , Modal, ScrollView , KeyboardAvoidingView} from "react-native"
import DietPlanner from "../screens/dietPlanner"
import firebase from "firebase";
import db from "../config"

export default class Breakfast1 extends React.Component{
    render(){
        return(
            <View>
                 <View>
                                <Header  
                                leftComponent ={<Icon name='arrow-left' type='feather' color='#696969'  onPress={() => this.props.navigation.goBack()}/>}
                                centerComponent={{ text:" Paneer Bhurji ", style: { color: '#90A5A9', fontSize:20,fontWeight:"bold", } }}
                                backgroundColor = "#eaf8fe"
                                />                
               </View>

                <View>
                   <Text>
                       Serves: 
                       Time: 30 mins
                       Difficulty: Easy       
                   </Text>
                </View>

                <View>
                   <Text>
                       Ingredients: 2 teaspoons REFINED OIL
                                    1/2 teaspoon CUMIN
                                    1/2 teaspoon CORIANDER POWDER
                                    1/2 teaspoon TURMERIC POWDER
                                    1/2 teaspoon KASURI METHI
                                    1 teaspoon SALT
                                    1 teaspoon RED CHILLI POWDER
                                    1 LEMON
                                    2 ONIONS
                                    1 teaspoon GINGER
                                    1 TOMATO
                                    250g PANEER
                                    2 taspoons CORIANDER LEAVES2 GREEN CHILLIES
                                   
                   </Text>
                </View>

                <View>
                   <Text>
                       Steps: 1. Soak CHIA SEEDS in a bowl for 7-10 mins.
                              2. In a blender add chopped DATES , sliced BANANAS, MANGO PUREE soaked CHIA SEEDS, WATER and then blend.
                              3. Pour it in a Glass and Serve Chilled
                              8.Your healthy meal is Ready!!
                                   
                   </Text>
                </View>

                <View>
                   <Text>
                       I hope you had fun in making the dish. Enjoy the meal!
                                   
                   </Text>
                </View>
            </View>
        )
    }
}