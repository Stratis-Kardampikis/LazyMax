import {createStackNavigator} from  'react-navigation-stack'
import About from './pages/About'
import Header from './components/header'
import React from 'react'

const screens = {
    About: {
        screen:About,
        navigationOptions:({navigation}) => {
            return{
                 headerTitle: ()=> <Header navigation={navigation} title='About Page'/>,
            }
        }
    },
}

const AboutStack= createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor:'#87bdd8',
        headerStyle:{backgroundColor:'#f1e3dd',height:60}
    }
});
export default AboutStack;