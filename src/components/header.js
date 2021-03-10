import React from 'react'
import {StyleSheet,Text,View} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Header({ navigation , title}){

    const openMenu= ()=> {
          navigation.openDrawer();
    }

    return(
        <View style={styles.header}>
            <Icon name="bars" size={28} onPress={openMenu} style={styles.icon}/>
            <View>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>

    );
}

const styles= StyleSheet.create({
    header :{
        width:'100%',
        height:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    headerText: {
        fontWeight:"bold",
        fontSize:20,
        color:'#87bdd8',
        letterSpacing: 1,
        

    },
    icon:{
        position:'absolute',
        left:16
    }
})