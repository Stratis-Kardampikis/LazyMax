import React,{useState, Component} from 'react';
import { StyleSheet,
         Text, 
         View, 
         TextInput,
         StatusBar,
         Dimensions,
        TouchableOpacity } from 'react-native';
import Logo from '../components/logo'
import Form from '../components/form'
import {Actions} from 'react-native-router-flux'



var screen = Dimensions.get("window").width;
var realheight = Dimensions.get("window").height;



class Login extends React.Component {


  navigate() {
    Actions.signup();
  }

render(){
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#ffffff'barStyle="light-content"/>
      <Logo/>
      <Form />
      <View style={styles.signupTextCont}>
        <Text style={styles.signupText}>Don't have an account yet? </Text>
        <TouchableOpacity onPress={this.navigate}><Text style={styles.signupButton}>Signup</Text></TouchableOpacity>
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
    fontSize: (17 / 411.42) * screen,
    fontWeight: "500"
  }
  
  
  
});
export default Login;