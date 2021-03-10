import React,{useState, Component} from 'react';
import { StyleSheet, Text, View, Image,Dimensions } from 'react-native';
var screen = Dimensions.get("window").width;
var realheight = Dimensions.get("window").height;
export default class Paw extends React.Component {

render(){
  return (
    <View style={styles.container}>
    <Image style={styles.paw}
    source={require('../images/Paw3.png')}/>
    
    </View>
  );
}
} 
const styles = StyleSheet.create({
  container: {
    flexGrow:1,
    alignItems: 'center',
    justifyContent: 'center',
    position:'absolute',
    resizeMode:"contain",
    zIndex:-9,
   
  },
  paw:{
    width: (405 / 400.42) * screen,
    height: (350 / 679) * realheight,
    bottom:3,
   right:2
  

  }
  
  
  
});
