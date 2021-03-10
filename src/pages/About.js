import React,{useState, Component} from 'react';
import { StyleSheet,
         Text, 
         View, 
         TextInput,
         StatusBar,
         Dimensions,
        TouchableOpacity } from 'react-native';

import AboutForm from '../components/aboutForm'
var screen = Dimensions.get("window").width;
var realheight = Dimensions.get("window").height;
var IpKey = "...";

class About extends React.Component {

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
      
        <View style={styles.mainContainer}>
        <AboutForm {...this.state}/>
        </View>
         
      
    </View>
  );
}
} 
const styles = StyleSheet.create({
  container: {
    flexGrow:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#daebe8',
    padding:50

  },
  mainContainer: {
     flexGrow:1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent:'center',
      backgroundColor:'#f1e3dd',
      borderRadius:25,
     
      
  }
  
  
  
});
export default About;




