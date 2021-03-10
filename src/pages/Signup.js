import React,{useState, Component} from 'react';
import { StyleSheet,
         Text,
         View,
         TextInput,
         StatusBar,
         Dimensions,
          TouchableOpacity } from 'react-native';
import {Actions} from 'react-native-router-flux';
import Logo from "../components/logo"
import SignUpForm from '../components/signupform'

var screen = Dimensions.get("window").width;
var realheight = Dimensions.get("window").height;


export default class Signup extends Component {

  goBack(){
    Actions.pop();
  }

render(){
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#ffffff'barStyle="light-content"/>
      <Logo/>
      <SignUpForm/>
      <View style={styles.signupTextCont}>
        <Text style={styles.signupText}>Already have an account ? </Text>
        <TouchableOpacity onPress={this.goBack}><Text style={styles.signupButton}>Sign in</Text></TouchableOpacity>
      </View>
    </View>
  );
}
} 
const styles = StyleSheet.create({
  container: {
    flexGrow:1,
    backgroundColor: '#455a64',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  signupTextCont:{
    flexGrow:1,
    alignItems:'center',
    justifyContent:'flex-end',
    paddingVertical: (16 / 683.4285) * realheight,
    flexDirection:'row'
       
  },
  signupText:{
      color:'rgba(255,255,255,0.7)',
      fontSize: (16 / 411.42) * screen,



  },
  signupButton:{
    color: "rgba(227,139,16,0.8)",
    fontSize: (16 / 411.42) * screen,
    fontWeight: "500"
  }
  
  
  
  
});
