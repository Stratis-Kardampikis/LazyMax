import React,{useState, Component} from 'react';
import { StyleSheet, Text, View, Image,Dimensions } from 'react-native';
var screen = Dimensions.get("window").width;
var realheight = Dimensions.get("window").height;
export default class Logo extends React.Component {

render(){
  return (
    <View style={styles.container}>
    <Image style={{width: Dimensions.get('window').width * 0.5,height: Dimensions.get('window').width * 0.5,borderRadius: Math.round(Dimensions.get('window').width)}}
    source={require('../images/Logo.png')}/>
    <Text style={styles.logoText}>Welcome to My app.</Text>
    </View>
  );
}
} 
const styles = StyleSheet.create({
  container: {
    flexGrow:1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    
  },
  logoText:{
    fontSize: (18 / 411.42) * screen,
    marginVertical: (15 / 683.4285) * realheight,
    
    color:'rgba(255,255,255,0.7)',

  }
  
  
  
});
