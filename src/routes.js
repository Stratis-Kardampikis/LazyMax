import React,{Component} from 'react';
import { Router, Stack, Scene,Tabs } from "react-native-router-flux";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AfterLogin from './pages/AfterLogin'
import Parks from './pages/Parks'
import PetShops from './pages/PetShop'
import Vet from './pages/Vet'
import PetCafe from './pages/PetCaffe'
import Comments from './pages/Comments'
export default class Routes extends React.Component {
    render(){
        return(
        <Router>
        <Stack key="root" hideNavBar={true} initial>
            
                <Scene key="login" component={Login} title="Login" initial={true}/>
                <Scene key="signup" component={Signup} title="Register" />
                <Scene  key="afterlogin" component={AfterLogin} title="StudentApp"  hideNavBar={true} />
                <Scene key="parks" component={Parks} title="Dog-Park" />
                <Scene key="petshop" component={PetShops} title="Pet-Shop" />
                <Scene key="vet" component={Vet} title="Vet-Shop" />
                <Scene key="petcafe" component={PetCafe} title="Pet-Cafe" />
                <Scene key="com" component={Comments} title="Comment-Page"/>
         
          </Stack>
        </Router>

        )
    }
} 
   /* <Stack key="tabs" tabs>

          <Scene  initial  title="StudentApp" key="afterlogin" hideNavBar={true} > 
          <Scene  key="label" component={AfterLogin} title="StudentApp"  hideNavBar={true} />
          </Scene>
          <Scene  title="Settings" hideNavBar={true}>
          <Scene key="setting" component={Settings} title="Settings" hideNavBar={true}/>
          </Scene>  

          </Stack>*/