import React,{useState, Component} from 'react';
import { StyleSheet,
         Text, 
         View, 
         TextInput,
         StatusBar,
         Dimensions,
         BackHandler,
         Alert,
        TouchableOpacity } from 'react-native';
        import Icon from "react-native-vector-icons/FontAwesome";
var screen = Dimensions.get("window").width;
var realheight = Dimensions.get("window").height;
import LogoSettings from '../components/logoSettings'
import SettingsForm from '../components/settingform'
import {Actions} from 'react-native-router-flux'
var IpKey = "...";


var screen = Dimensions.get("window").width;
var realheight = Dimensions.get("window").height;

class Settings extends React.Component {

  constructor() {
    super();
    this.state = {
      username: "",
      dataSource: [],
      useremail: ""
    };
  }

  componentDidMount() {
    let user = {
      email:this.props.screenProps.useremail
    };
  
  
    

   fetch("http://"+IpKey+"/thessis/BackEnd/public/api/checkuser", {
      method: "POST",
      body: JSON.stringify(user),
      headers: new Headers({
        Accept:'application/json',
        "Content-Type": "application/json"
      })
    })
      .then(res => res.json())
      .then(responseJson =>
        this.setState({
          dataSource: responseJson.message[0],
          username: responseJson.message[0].username,
          email: responseJson.message[0].useremail
          
        })
      )
      .catch(error => alert("error:", error));
       
    } 
  
  

render(){
  return (
    <View style={styles.container}>
      
  
      
      <StatusBar backgroundColor='#ffffff' barStyle="light-content"/>
    
      <SettingsForm {...this.state}/>
      
     

      
    </View>
  );
}
} 
const styles = StyleSheet.create({
  container: {
    flexGrow:1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#daebe8',
    paddingVertical:100
    
  },
  
  
  
});
export default Settings;




