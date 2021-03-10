import {createStackNavigator} from  'react-navigation-stack'
import Home from './pages/Home'
import Header from './components/header'
import React from 'react'


const screens = {
    Home: {
        screen:Home,
        navigationOptions:({navigation}) => {
            return{
                 headerTitle: ()=> <Header navigation={navigation} title='Home Page'/>,
            }
        }
    },
}

const HomeStack= createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor:'#87bdd8',
        headerStyle:{backgroundColor:'#f1e3dd',height:60}
    }
});
export default HomeStack;