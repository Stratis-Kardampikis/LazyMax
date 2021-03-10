import React,{useState, Component} from 'react';
import { StyleSheet, Text, View, Image,Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
var screen = Dimensions.get("window").width;
var realheight = Dimensions.get("window").height;
export default class DogFood extends React.Component {
  submit(){
    Actions.petshop({...this.props});
  }
render(){

 
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => this.submit()} >
          <Image style={styles.paw}
          source={require('../images/DogFood.png')}/>
          </TouchableOpacity>
    </View>
  );
}
} 
const styles = StyleSheet.create({
  container: {
    flexGrow:1,
    position:'relative',
    marginLeft:19,
    marginTop:250,
    zIndex:5
    
  },
  paw:{
    width: (62 / 411.42) * screen,
    height: (62 / 683.4285) * realheight,
  
    

  }
  
  
  
});
