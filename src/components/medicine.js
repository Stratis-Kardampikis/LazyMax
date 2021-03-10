import React,{useState, Component} from 'react';
import { StyleSheet, Text, View, Image,Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
var screen = Dimensions.get("window").width;
var realheight = Dimensions.get("window").height;
export default class Medicine extends React.Component {

  submit(){
    Actions.vet({...this.props});
  }
render(){
  return (
    <View style={styles.container}>
          <TouchableOpacity onPress={() => this.submit()}>
                  <Image style={styles.paw}
                  source={require('../images/Medicine.png')}/>
          </TouchableOpacity>
    </View>
  );
}
} 
const styles = StyleSheet.create({
  container: {
    flexGrow:1,
    marginTop:80,
    marginRight:40,
    position:'relative',
    zIndex:50
    
  },
  paw:{
    width: (68 / 411.42) * screen,
    height: (68 / 683.4285) * realheight,
  
    

  }
  
  
  
});
