import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import {Actions} from 'react-native-router-flux'

import Navigator from '../drawer'


class AfterLogin extends React.Component {
 
  render(props) {

    
  
    return(
     
      <Navigator screenProps={{useremail:this.props.useremail}}/>
  
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#455a64',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  
  
});
export default AfterLogin;