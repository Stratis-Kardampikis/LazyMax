import React,{Component} from 'react';
import { Platform,StyleSheet, Text, View, TextInput,Image, TouchableOpacity,Dimensions } from 'react-native';
import {WebView} from 'react-native-webview'
import SearchableDropdown from 'react-native-searchable-dropdown';
import Icon from "react-native-vector-icons/FontAwesome";
import LogoAbout from '../components/logoAbout'
import StyledText from 'react-native-styled-text';
var screen = Dimensions.get("window").width;
var realheight = Dimensions.get("window").height;

class AboutForm extends Component {

      

        render() {
          return (
            <View style={styles.container}>
             <View style={styles.Logocontainer}>
                <Image style={{ width: Dimensions.get('window').width * 0.5,height: Dimensions.get('window').width * 0.5,borderRadius: Math.round(Dimensions.get('window').width),}}
                source={require('../images/Logo.png')}/>
                 
                      <Text style={styles.logoText}>Hello {this.props.username}</Text>
                      <Text style={styles.logoText} >Welcome to Lazy Max!</Text>
 
            </View>
            
            
             <Text style={styles.paragraph}>
                 Lazy Max is an aplication that YOU and your DOG need in your everyday walks.
                 Here you can find just by pressing a button the nearest Pet Shop or a Veterinary Physician you might need!
                 Also, the perfect Dog Park or Dog Spot you didn't know existed but its right next to you and ofcourse
                 the Pet Friendly Cafetiriawhere you can enjoy your Coffee with your dog partner!!!   
                 May your adventures become legendary!!!
             </Text>
            </View>
          )
        }
      }
      
      const styles = StyleSheet.create({
        container: {
          flexGrow: 1,
          justifyContent:'flex-start',
          alignItems:'center',
          backgroundColor: "#f1e3dd",
          borderRadius:25,
          paddingHorizontal: (14 / 603.4285) * realheight,
          padding:50,
          paddingBottom:10,
          width: (390 / 401.42) * screen,
         
        },
        Logocontainer: {
          flexGrow:1,
          alignItems: 'center',
          justifyContent: 'center',
          
          
          
        },
        headers:{
          padding:0,
          

        },
        logoText:{
          fontSize: (28 / 411.42) * screen,
          marginVertical: (15 / 683.4285) * realheight,
         // textShadowOffset: { width: 2, height: 2 },
         // textShadowColor: '#555555',
         // textShadowRadius: 6,
          color:'black',
      
        },
        paragraph:{
          fontSize: (18 / 411.42) * screen,
          fontFamily: 'Roboto'

        }
      })
export default AboutForm;