
import {SafeAreaView} from "react-native-safe-area-context"
import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from 'firebase';
import db from '../config'
import MyHeader from "../components/myHeader"

export default class Diet extends React.Component{

    constructor (){
        super()
        this.state={
          breakfast:"",
          lunch:"",
          snacks:"",
          dinner:"" ,
          calories:0  
        }
    }

    render(){
        return(
            <View style={{flex:1}}>
                
               
                <MyHeader title={"Diet Planner"} navigation={this.props.navigation} />  

                <View style={{flex:1 , justifyContent:"center" , alignItems:"center" ,    backgroundColor:'#207FA1'        }}style={{flex:1 , justifyContent:"center" , alignItems:"center" ,    backgroundColor:'#207FA1'        }}>

                    <Text style={{fontSize:20 , fontWeight:"bold" , color:"white"}}>
                        Today's Diet Plan
                    </Text>


                        <Text style={styles.textStyle}>
                            BREAKFAST:{this.state.breakfast}
                        </Text>
                 

                  
                        <Text style={styles.textStyle}>
                            LUNCH:{this.state.lunch}
                        </Text>

                        <Text  style={styles.textStyle}>
                            SNACKS:{this.state.snacks}
                        </Text>

                        <Text style={styles.textStyle}>
                            DINNER:{this.state.dinner}
                        </Text>
                     


                     
                        <Text  style={styles.textStyle}>
                            Total Calories Consumed:{this.state.calories}
                        </Text>
                     </View>
                </View>
            
        )
    }
    
}

const styles= StyleSheet.create({
      textStyle:{
          color:"white",
          fontSize:15
      }
})