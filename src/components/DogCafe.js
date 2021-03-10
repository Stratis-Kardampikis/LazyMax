import React,{useState, Component} from 'react';
import { StyleSheet, Text, View, Image,Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
var screen = Dimensions.get("window").width;
var realheight = Dimensions.get("window").height;
export default class DogCafe extends React.Component {
  submit(){
    Actions.petcafe({...this.props});
  }

render(){
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => this.submit()}>
            <Image style={styles.paw}
            source={require('../images/DogCafe.png')}/>
     </TouchableOpacity>
    </View>
  );
}
} 
const styles = StyleSheet.create({
  container: {
    flexGrow:1,
    marginTop:250,
    marginRight:4,
    position:'relative',
    zIndex:40
    
  },
  paw:{
    width: (61 / 411.42) * screen,
    height: (61 / 683.4285) * realheight,
  
    

  }
  
  
  
});
