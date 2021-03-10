import {createStackNavigator} from  'react-navigation-stack'
import Settings from './pages/Settings'
import Header from './components/header'
import React from 'react'



const screens = {
    Settings: {
        screen:Settings,
        navigationOptions:({navigation}) => {
            return{
                 headerTitle: ()=> <Header navigation={navigation} title='Settings Page'/>,
            }
        }
    },
}

const SettingsStack= createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor:'#87bdd8',
        headerStyle:{backgroundColor:'#f1e3dd',height:60}
    }
});
export default SettingsStack;