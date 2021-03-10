import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'


import Routes from "./src/routes.js";
import Navigator from './src/drawer'

class App extends React.Component {
  
  render() {
    return( 
     
     
      <Routes/>
      
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
export default App;