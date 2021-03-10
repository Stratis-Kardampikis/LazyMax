import React,{Component} from 'react';
import { Platform,StyleSheet, Text, View, TextInput, TouchableOpacity,Dimensions,KeyboardAvoidingView } from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';
import Icon from "react-native-vector-icons/FontAwesome";
import { Actions } from 'react-native-router-flux';
import LogoSettings from '../components/logoSettings'
var screen = Dimensions.get("window").width;
var realheight = Dimensions.get("window").height;
var IpKey = "...";
class SettingForm extends Component {

  constructor() {
    super();
    this.state = {
      new_username:"",
      updated_name:"",
      new_password:"",
      new_rpassword:"",
      updated_password: "",
      loginstate: "",
    
    };
  }


  update() {

    let user = {
      email:this.props.email,
      new_password: this.state.new_password,
      new_name: this.state.new_username,
      new_rpassword: this.state.new_rpassword
    };
    if(user.new_username=="" || user.new_password=="" || user.new_rpassword=="" ){
      alert('Please fill in all fields')
    }else{
      if(user.new_password!= user.new_rpassword){
        alert('Please put the same password!')
      }else{
    fetch("http://"+IpKey+"/thessis/BackEnd/public/api/update", {
      method: "POST",
      body: JSON.stringify(user),
      headers: new Headers({
        Accept:'application/json',
        "Content-Type": "application/json"
      })
    })
      .then(res => res.json())
      .then(response => this.setState({ 
        loginstate: response.message
      
      }))
      .catch(error => alert("error:", error));
    }
  }
  };

    render(){

      if (this.state.loginstate == "DENIED") {
        alert('User already exists!');
        this.setState({loginstate:"pending"})
      }else if(this.state.loginstate == "Success") {
        alert("Updated!");
        Actions.afterlogin({useremail:this.props.email});
        this.setState({loginstate:"pending"})
     
      }


        return (
          <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
           >

            <View style={styles.LogoContainer}>
                <Icon style={styles.icon} name="user" size={75} color="white" />
                <Text style={styles.logoText}>{ this.state.new_username || this.props.username}</Text>
            </View>


          
              
            <TextInput
                style={styles.inputBox}
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder={"User Name"}
                placeholderTextColor="white"
                selectionColor="#fff"
                onChangeText={new_username =>
                      this.setState({ new_username })
                    }
              />
    
              <TextInput
                style={styles.inputBox}
                underlineColorAndroid="rgba(0,0,0,0)"
                secureTextEntry={true}
                placeholder={"Create New Password"}
                placeholderTextColor="white"
                onChangeText={new_password =>
                      this.setState({ new_password })
                    }
                
              />
               <TextInput
                style={styles.inputBox}
                underlineColorAndroid="rgba(0,0,0,0)"
                secureTextEntry={true}
                placeholder={"Verify New Password"}
                placeholderTextColor="white"
                onChangeText={new_rpassword =>
                      this.setState({ new_rpassword })
                    }
                
              />
              <TouchableOpacity style={styles.button} onPress={() => this.update()}>
                  <Text style={styles.buttonText}>Update User's Info</Text>
                  <Icon style={styles.icon} name="user" size={25} color="white" />
      
              </TouchableOpacity>
          
               
            </KeyboardAvoidingView>
          
        );
      }
      } 
      const styles = StyleSheet.create({
        container: {
          flexGrow:1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#daebe8',
        },
        inputBox: {
          width: (330 / 411.42) * screen,
          height: (45 / 683.4285) * realheight,
          backgroundColor: "#f1e3dd",
          borderRadius: 25,
          borderColor:"black",
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
          LogoContainer: {
              flexGrow:1,
              alignItems: 'center',
              justifyContent: 'flex-end',
              
            },
            logoText:{
              fontSize: (18 / 411.42) * screen,
              marginVertical: (15 / 683.4285) * realheight,
              color:'rgba(255,255,255,0.7)',
          
            },
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
      export default SettingForm;
