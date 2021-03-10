import React,{useState, Component} from 'react';
import { StyleSheet,
         Text, 
         View, 
         TextInput,
         Button,
         StatusBar,
         Dimensions,
        TouchableOpacity } from 'react-native';

import {Actions} from 'react-native-router-flux';
import Paw from '../components/paw'
import DogFood from '../components/dogfood'
import DogWalk from '../components/dogwalk'
import Medicine from '../components/medicine'
import DogCafe from '../components/DogCafe'
import Options from '../components/options'
var IpKey = "...";

var screen = Dimensions.get("window").width;
var realheight = Dimensions.get("window").height;

class Menu extends React.Component {

  
  constructor() {
    super();
    this.state = {
      username: "",
      dataSource: [],
      email:"",
      isModalVisible:false,
      flag:false
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
          email:responseJson.message[0].useremail
          
        })
      )
      .catch(error => alert("error:", error));
       
    } 
   
  
  
  
render(){

  

  return (
    
    <View style={styles.container}>

       
       
       <Paw/>
            
           <View style={styles.menuContainer}>      
                <DogFood {...this.state}/>
                <Medicine {...this.state}/>
                <DogWalk {...this.state}/>
                <DogCafe {...this.state}/>
              
            </View> 

            <Options />
          
            
    
      
         
      
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
    
  

  },
  menuContainer: {
        flexGrow:1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:'center'
      
  }

  
  
  
});
export default Menu;




