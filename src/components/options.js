import React,{useState, Component} from 'react';
import { StyleSheet, Text, View, Image,Dimensions,Button } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Modal from 'react-native-modal';
var screen = Dimensions.get("window").width;
var realheight = Dimensions.get("window").height;
export default class Options extends React.Component {

    constructor() {
        super();
        this.state = {

          isModalVisible:false,
          flag:false
        };
      }


 


  toggleModal1(){
    this.setState({
      isModalVisible:!this.state.flag,
      flag:true
    })
  };
  toggleModal2(){
    this.setState({
      isModalVisible:!this.state.flag,
      flag:false
    })
  };

render(){

 
  return (
    <View style={styles.container}>
       
     
  <TouchableOpacity onPress={()=>this.toggleModal1()}>
            <Image style={styles.paw}  source={require('../images/Options.png')}/>
     </TouchableOpacity>
                    <Modal isVisible={this.state.isModalVisible}
                    backdropColor="#B4B3DB"
                    backdropOpacity={0.8}
                    animationIn="zoomInDown"
                    animationOut="zoomOutUp"
                    animationInTiming={600}
                    animationOutTiming={600}
                    backdropTransitionInTiming={600}
                    backdropTransitionOutTiming={600}>
                      <View style={styles.content}>
                      <Text style={styles.contentTitle}>Find Locations for:</Text>
                        <Text style={styles.contentTitle}>1) Pest Shops </Text>
                        <Text style={styles.contentTitle}>2) Veterinarian's </Text>
                        <Text style={styles.contentTitle}>3) Dog Parks  </Text>
                        <Text style={styles.contentTitle}>4) Pet Friendly Cafe </Text>

                        <Button title="Close Options" onPress={()=>this.toggleModal2()} />
                      </View>
                    </Modal>
             





          
    </View>
  );
}
} 
const styles = StyleSheet.create({
  container: {
  
    flexGrow:1,
    position:'relative',
    zIndex:100
  },
  paw:{
    width: (213 / 400.42) * screen,
    height: (96.2 / 679) * realheight,
    marginBottom:158,
    right:2.2

  },
    content: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
  btn:{
      backgroundColor:'white'
  }
  
  
});
