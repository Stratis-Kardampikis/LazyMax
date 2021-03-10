import * as React from 'react';
import { StyleSheet,Button, View } from 'react-native';

import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import HomeStack from './homeStack';
import AboutStack from './aboutStack';
import SettingsStack from './settingsStack';

import Icon from "react-native-vector-icons/FontAwesome";

import Login from './pages/Login';

 
const RootDrawerNavigator = createDrawerNavigator({
  
  Home:{
    screen: HomeStack,
  },
  About:{
    screen: AboutStack,
  },
  Settings:{
  screen: SettingsStack, 
  },
  Logout:{
    screen:Login
  },

})

export default createAppContainer(RootDrawerNavigator);