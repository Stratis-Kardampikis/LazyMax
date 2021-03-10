import React,{Component} from 'react';
import { Platform,StyleSheet, Text, View, TextInput, TouchableOpacity,Dimensions,StatusBar, ActionSheetIOS,KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Actions} from 'react-native-router-flux'
import { StackActions } from '@react-navigation/native';
var screen = Dimensions.get("window").width;
var realheight = Dimensions.get("window").height;
var IpKey = "192.168.2.20";

export default class Form extends Component {

  constructor() {
    super();
    this.state = { 
      password: "",
      useremail: "",
      loginstate: "",
      
    };
  }


submit(){
  const user = {
    email: this.state.useremail,
    password: this.state.password
  };
  let answer = "";
  if(user.email=="" || user.password=="" ){
    alert('Please fill in all fields')
  }
else{
    fetch("http://"+IpKey+"/thessis/BackEnd/public/api/store", {
      method: "POST",
      body:JSON.stringify(user),
      headers: new Headers({
        Accept:'application/json',
        "Content-Type": "application/json"
      })
    })
      .then(res => res.json())
        .then(response =>
          this.setState({
            loginstate: response.message,
            
          })
        )
        .catch(error => alert("error:", error));
      }
}
render(){

  if (this.state.loginstate == "DENIED") {
    alert("Wrong credentials");  
    this.setState({
      loginstate: ""
    });
  }
  if (this.state.loginstate == "Success") {
    Actions.afterlogin({useremail:this.state.useremail});
   this.setState({
      loginstate: ""
    });
    }
  return (
    <View style={styles.container}>
      <StatusBar hidden />
          <TextInput 
          style={styles.inputBox} 
          placeholder={"Email"}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholderTextColor="#ffffff"
          selectionColor="#fff"
          keyboardType="email-address"
          onSubmitEditing={()=> this.password.focus()}
          onChangeText={useremail => this.setState({ useremail })}
          />
         
          <TextInput style={styles.inputBox}  
          placeholder={"Password"}
          secureTextEntry={true}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholderTextColor="#ffffff"
          ref={(input)=> this.password = input}
          onChangeText={password => this.setState({ password })}
         
          />

        <TouchableOpacity style={styles.button} onPress={() => this.submit()}>
            <Text style={styles.buttonText}>Login</Text>
            <Icon style={styles.icon} name="sign-in" size={25} color="white" />
        </TouchableOpacity>
        </View>
  );
}
} 
const styles = StyleSheet.create({
    container: {
        flexGrow:1,
        alignItems: 'center',
        justifyContent: 'center',
        top: (5 / 683.4285) * realheight
      },
  
      inputBox: {
        width: (330 / 411.42) * screen,
        height: (45 / 683.4285) * realheight,
        backgroundColor: "rgba(255,255,255,0.3)",
        borderRadius: 25,
        paddingHorizontal: (16 / 411.42) * screen,
        fontSize: (22 / 411.42) * screen,
        marginVertical: (10 / 683.4285) * realheight
      },
      button:{
        width: (330 / 411.42) * screen,
        height: (50 / 683.4285) * realheight,
        borderRadius: 25,
        backgroundColor:'#1c313a',
        marginVertical: (10 / 683.4285) * realheight,
        paddingVertical: (14 / 683.4285) * realheight,
        justifyContent: 'center',
        alignItems: "center",
        flexDirection: "row"
      },

      buttonText:{
        fontSize: (25 / 411.42) * screen,
        color: "rgba(250,250,250,1)",
        fontWeight: "500",
        textAlign: "center",
        paddingHorizontal: (12 / 411.42) * screen
        },
        icon: {
          paddingHorizontal: (1 / 411.42) * screen,
          paddingVertical: (5 / 683.4285) * realheight
        }
    
  
});
