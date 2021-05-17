import React from "react";
import {TouchableOpacity , Text , Image , StyleSheet , View, TextInput, Alert , Modal, ScrollView , KeyboardAvoidingView} from "react-native"
import DietPlanner from "./dietPlanner"
import firebase from "firebase";
import db from "../config"

export default class Notifications extends React.Component{
    render(){
        return(
            <View>
                <View>
                                <Header  
                                leftComponent ={<Icon name='arrow-left' type='feather' color='#696969'  onPress={() => this.props.navigation.goBack()}/>}
                                centerComponent={{ text:" Notifications ", style: { color: '#90A5A9', fontSize:20,fontWeight:"bold", } }}
                                backgroundColor = "#eaf8fe"
                                />                
               </View>
                <Text>
                    Notifications
                </Text>
            </View>
        )
    }
}