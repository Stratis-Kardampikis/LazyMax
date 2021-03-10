import React,{useState, Component} from 'react';
import { StyleSheet, Text, View, Image,Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native';
import {Actions} from 'react-native-router-flux'
var screen = Dimensions.get("window").width;
var realheight = Dimensions.get("window").height;
export default class DogWalk extends React.Component {

  submit(){
    Actions.parks({...this.props});
  }



render(){
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => this.submit()}>
            <Image style={styles.paw}
            source={require('../images/DogWalk.png')}/>
        </TouchableOpacity>
    </View>
  );
}
} 
const styles = StyleSheet.create({
  container: {
    flexGrow:1,
   marginTop:80,
   marginRight:10,
    position:'relative',
    zIndex:4
    
  },
  paw:{
    width: (62 / 411.42) * screen,
    height: (62 / 683.4285) * realheight,
  
    

  }
  
  
  
});
