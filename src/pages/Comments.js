import React,{useState, Component} from 'react';
import { StyleSheet,
         Text, 
         View, 
         TextInput,
         StatusBar,
         Dimensions,
         FlatList,
         
        TouchableOpacity,
        TouchableHighlight, 
        Alert,
        RefreshControl} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Swipeout from 'react-native-swipeout';
import {Actions} from 'react-native-router-flux'
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { getRhumbLineBearing } from 'geolib';
import { ListItem } from 'react-native-elements'
import moment from 'moment'
var IpKey = "192.168.2.20";


var screen = Dimensions.get("window").width;
var realheight = Dimensions.get("window").height;



class Comments extends React.Component {
  constructor() {
    super();
    this.state = {
     index:[],
      nametag:"",
      loginstate:"",
      comment:"",
      comFlag:"",
      comEmail:"",
      id:moment().format('MMMM Do YYYY, h:mm:ss a')
    };
  }

  componentDidMount() {
    const user = {
      nametag:this.props.nametag,
      comment:this.state.comment,
      nameuser:this.props.email,
      comFlag:"",
      flag:'true'
    };
  
  
    
   
  
    fetch("http://"+IpKey+"/thessis/BackEnd/public/api/comment", {
      method: "POST",
      body: JSON.stringify(user),
      headers: new Headers({
        Accept:'application/json',
        "Content-Type": "application/json"
      })
    })
      .then(res => res.json())
      .then(response => this.setState({ 
        index:response.message,
      
      
      }))
      .catch(error => alert("error:", error));
    
  }
 
submit(){
  const user = {
    nametag:this.props.nametag,
    comment:this.state.comment,
    nameuser:this.props.email,
    comFlag:"",
    id:moment().format('LL LTS'),// April 15th 2020, 12:49:55 pm
    flag:'false'
  };
  this.textInput.clear()

  
 if(this.state.comment==""){
   alert('Please insert comment')
 }else{
  
  fetch("http://"+IpKey+"/thessis/BackEnd/public/api/comment", {
    method: "POST",
    body: JSON.stringify(user),
    headers: new Headers({
      Accept:'application/json',
      "Content-Type": "application/json"
    })
  })
    .then(res => res.json())
    .then(response => this.setState({ 
      index:response.message,
      comment:""
    
    }))
    .catch(error => alert("error:", error));

}
}
FlatListItemSeparator = () => {
  return (
    <View
      style={{
        height: 1,
        width: "100%",
        backgroundColor: "#000",
       
      }}
    />
  );
}


 
render(){
  

  
  if(this.state.dataSource=="DENIED"){
   alert('no man!!')
  }
  if(this.state.loginstate=="Success"){
    alert('yeah man!!')
    this.setState({
      loginstate:"pending"
    })
   }

  
   let swipeBtns = [{
    text: 'Delete',
    backgroundColor: 'red',
    underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
    onPress: () => {
      Alert.alert(
        'Alert',
        'Are you sure you want to delete ?',
        [
          {text:'No',onPress:()=>console.log('Cancel Pressed'),style:'cancel'},
          {text:'Yes',onPress:()=>{
            if(this.props.email==this.state.comEmail){
            const user = {
              nametag:this.props.nametag,
              comFlag:this.state.comFlag,
              email:this.props.email
            };

            fetch("http://"+IpKey+"/thessis/BackEnd/public/api/comment", {
              method: "POST",
              body: JSON.stringify(user),
              headers: new Headers({
                Accept:'application/json',
                "Content-Type": "application/json"
              })
            })
              .then(res => res.json())
              .then(response => this.setState({ 
                
                index:response.message,
                comment:""
              
              }))
              .catch(error => alert("error:", error));
              
            }else{
              alert('Sorry,this is not your post')
            }
           

          }},

        ], 
        {cancelable:true}
      );

    }
  }];

 
  return (
   
   
    <View style={styles.container}>
                <TouchableOpacity style={styles.header} onPress={()=> this.props.navigation.goBack()}>
                            <Icon name="arrow-left" size={28} style={styles.icon}/>
                                    <View>
                                        <Text style={styles.headerText}>{this.props.nametag}</Text>
                                    </View>
               </TouchableOpacity>

               
                            <FlatList
                            style={styles.flatlist}
                            data={this.state.index}
                            ref={flat => this._flat = flat}
                            ItemSeparatorComponent = { this.FlatListItemSeparator }
                           // keyExtractor={item => item.id}
                            renderItem={({item})=>(  
                              
                             <Swipeout 
                              right={swipeBtns}
                              cancelable='true'
                              autoClose='true'
                              backgroundColor= 'transparent'
                              onOpen={()=>this.setState({comFlag:item.id,comEmail:item.email})}
                              close={this.state.comFlag !== item.id}
                              >
                              
                             
                              <ListItem
                                  roundAvatar
                                  title={`${item.nameuser}`}
                                  subtitle={item.comment}
                                  containerStyle={{ borderBottomWidth: 0 }}
                                  leftAvatar={{ source: { uri: 'http://'+IpKey+'/thessis/FrontEnd/src/images/Logo.png'} }}
                                //  avatar={{ uri:'http://'+IpKey+'/thessis/FrontEnd/src/images/Logo.png' }}
                                />
                             
                             
                             
                              </Swipeout>
                            
                             
                            )}
                            />
            

          <View style={styles.inputContainer}>          
              <TextInput
                 ref={input => { this.textInput = input }} 
                style={styles.inputBox}
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder={"ADD COMMENT"}
                placeholderTextColor="white"
                selectionColor="#fff"
                multiline={true}
                onChangeText={comment =>
                      this.setState({comment})
                    }
              />
        <TouchableOpacity style={styles.button} onPress={() => this.submit()}>
            <Icon style={styles.iconMan} name="reply" size={25} color="white" />

        </TouchableOpacity>
        </View>
            
    </View>
    
  );
}

}


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column'
  },
  header :{
    top:0,
    position:'absolute',
    backgroundColor:'#daebe8',
    paddingHorizontal:30,
    width:"100%",
    height:90,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    alignContent:'center',
    zIndex:10,
    
},
headerText: {
    fontWeight:"bold",
    fontSize:17,
    color:'black',
    letterSpacing: 1,
    paddingHorizontal: (30 / 400) * screen,

},
icon:{
    position:'absolute',
    left:16
},
inputContainer:{
  position:'absolute',
  width:screen,
  flexDirection:'row',
  bottom:0,
},
inputBox: {
  width: (310 / 411.42) * screen,
  height: (65 / 683.4285) * realheight,
  backgroundColor: "#daebe8",
  position:'absolute',
  bottom:0,
  borderColor:"black",
  fontSize: (22 / 411.42) * screen,
  justifyContent:'center'

},
button:{
  position:'absolute',
  right:0,
  bottom:0,
  width: (100 / 411.42) * screen,
  height: (65 / 683.4285) * realheight,
  backgroundColor:'#1c313a',
  justifyContent:'center',
  alignItems: "center",
  flexDirection: "row"
},

buttonText:{
  fontSize: (25 / 411.42) * screen,
  color: "rgba(250,250,250,1)",
  fontWeight: "500",
  textAlign: "center",
  paddingHorizontal: (12 / 411.42) * screen
  },
  iconMan: {
      paddingHorizontal: (5 / 411.42) * screen,
      paddingVertical: (5 / 683.4285) * realheight
    },
    flatlist:{
      marginTop:(100 / 683.4285) * realheight,
      marginBottom:(70 / 683.4285) * realheight,
      width:screen
    },
  
  
  
  
});
export default Comments;