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
                                centerComponent={{ text:" Mango Banana Smoothie ", style: { color: '#90A5A9', fontSize:20,fontWeight:"bold", } }}
                                backgroundColor = "#eaf8fe"
                                />                
               </View>

                <View>
                   <Text>
                       Serves: 6
                       Time: 15 mins
                       Difficulty: Easy       
                   </Text>
                </View>

                <View>
                   <Text>
                       Ingredients: 5 tablespoons DARK CHOCOLATE
                                    10 pieces ALMONDS
                                    2 tablespoons GRANOLA
                                    1 LEMON
                                    4 tablespoons PEANUT BUTTER
                                    3 APPLES
                                   
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