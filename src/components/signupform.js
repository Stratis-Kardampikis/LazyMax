import React,{Component} from 'react';
import { Platform,StyleSheet, Text, View, TextInput, TouchableOpacity,Dimensions,KeyboardAvoidingView } from 'react-native';
//import SearchableDropdown from 'react-native-searchable-dropdown';
import Icon from "react-native-vector-icons/FontAwesome";
import { Actions } from 'react-native-router-flux';
var screen = Dimensions.get("window").width;
var realheight = Dimensions.get("window").height;
var IpKey = "192.168.2.20";
export default class SignUpForm extends Component {

  constructor() {
    super();
    this.state = {
      username: "",
      useremail:"",
      password: "",
      rpassword:"",
      loginstate: ""
    };
  }

  

  submit() {
    const user = {
      name: this.state.username,
      email: this.state.useremail,
      password: this.state.password,
      rpassword: this.state.rpassword
    };
    if(user.name=="" || user.email=="" || user.password=="" || user.rpassword==''){
      alert('Please fill in all fields')
    }else{
      if(user.password!=user.rpassword){
        alert('Please put the same password!')
      }else{
    fetch("http://"+IpKey+"/thessis/BackEnd/public/api/register", {
      method: "POST",
      body: JSON.stringify(user),
      headers: new Headers({
        Accept:'application/json',
        "Content-Type": "application/json"
      })
    })
      .then(res => res.json())
      .then(response =>
        this.setState({
          
          loginstate: response.message
        })
      )
      .catch(error => alert("error:", error));
    }
    }
  }

render(){

  if (this.state.loginstate == "Success") {
    alert("Registered!");
    Actions.afterlogin({useremail:this.state.useremail});
 
  } else if (this.state.loginstate == "DENIED") {
    alert('User already exists!');
    this.setState({loginstate:"pending"})
  }


 return (
  <View
  style={styles.container}
 
>
       <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder={"User Name"}
          placeholderTextColor="white"
          selectionColor="#fff"
          onChangeText={username => this.setState({ username })}
          
          
    
        />
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder={"User Email"}
          placeholderTextColor="white"
          selectionColor="#fff"
          keyboardType="email-address"
          onChangeText={useremail => this.setState({ useremail })}
          
    
        />
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          secureTextEntry={true}
          placeholder={"Create Password"}
          placeholderTextColor="white"
          onChangeText={password => this.setState({ password })}
      
          
        />
         <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          secureTextEntry={true}
          placeholder={"Verify Password"}
          placeholderTextColor="white"
          onChangeText={rpassword => this.setState({ rpassword })}
          
        />
        <TouchableOpacity style={styles.button} onPress={() => this.submit()}>
            <Text style={styles.buttonText}>Create User</Text>
            <Icon style={styles.icon} name="user-plus" size={25} color="white" />

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
            paddingHorizontal: (5 / 411.42) * screen,
            paddingVertical: (5 / 683.4285) * realheight
          }
    
  
});

