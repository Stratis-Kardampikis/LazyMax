import React,{useState, Component} from 'react';
import { StyleSheet, Text, View, Image,Dimensions } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
var screen = Dimensions.get("window").width;
var realheight = Dimensions.get("window").height;

class LogoSettings extends React.Component {
    render(){
        return (
    
    <View style={styles.LogoContainer}>
      <Icon style={styles.icon} name="user" size={75} color="white" />
        <Text style={styles.logoText}>{this.props.username}</Text>
      </View>
 
 );
}
} 
const styles = StyleSheet.create({
  LogoContainer: {
    flexGrow:1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Math.round(Dimensions.get('window').width),
    width: Dimensions.get('window').width * 0.5,
    height: Dimensions.get('window').width * 0.5,
    backgroundColor: '#f1e3dd',
    borderWidth:2,
    
  },
  logoText:{
    fontSize: (18 / 411.42) * screen,
    marginVertical: (15 / 683.4285) * realheight,
    color:'black',

  }
  
  
  
});

export default LogoSettings;