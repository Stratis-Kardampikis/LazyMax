import React,{Component} from 'react';
import { Platform,StyleSheet, Image,Text, View, TextInput, TouchableOpacity,Dimensions,StatusBar, ActionSheetIOS,KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Actions} from 'react-native-router-flux'
import MapView,{PROVIDER_GOOGLE,Marker, Callout} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import Geolocation from '@react-native-community/geolocation';
import Carousel, { getInputRangeFromIndexes } from 'react-native-snap-carousel';
import MapViewDirections from 'react-native-maps-directions';
import { getDistance, getPreciseDistance } from 'geolib';
import StarRating from 'react-native-star-rating';
var ApiKey = "...";
var IpKey = "...";
var screen = Dimensions.get("window").width;
var realheight = Dimensions.get("window").height;
export default class Maps extends Component {


  constructor(props){
    super(props);
    this.state = {
      latitude:0,
      longitude:0,
      markers:[],
      callouts:[],
      flag:true,
      latitudeMarker:0,
     longitudeMarker:0,
     TravellingMode:"DRIVING",
     showDriving: true,
     showWalking: false,
     showCarousel: false,
     dontshowCarousel: true,
     showDirections:false,
     opFlag:false,
     itemUseremail:this.props.useremail,
     itemName:""
     // image:require('../images/noImageAv')
     /*l
      nameMarker:'',
      imageMarker:'',
      loginstate:'waiting'*/
    }
    
  }

  componentDidMount(){
    
    Geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeMarker: position.coords.latitude,
          longitudeMarker: position.coords.longitude

        })
                    
                        return fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+this.state.latitude+','+this.state.longitude+'&radius=1000&type=veterinary_care&key='+ApiKey+'')
                        .then( (response) => response.json() )
                        .then( (responseJson) => {
                          this.setState({

                            markers:responseJson.results

                          })


                        })
          },
            error => this.setState({ error: error.message })
       
  
      ) 
          .catch(error => alert("error:", error));
  }

        onCarouselItemaChange =(index) =>{
           let location = this.state.markers[index]

           this._map.animateToRegion({
            latitude: location.geometry.location.lat,
            longitude:location.geometry.location.lng,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
           })
           this.onMarkerPressed(location.geometry.location,index)
       
       

           this.state.callouts[index].showCallout() 
        }
        onMarkerPressed = (location,index) =>{
         
          if(this.state.showCarousel){
          this._carousel.snapToItem(index);
          }
          this._map.animateToRegion({
            latitude: location.lat,
            longitude:location.lng,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
           })

           if(this.state.showDirections){
         this.setState({
            flag:true,
            latitudeMarker:location.lat,
            longitudeMarker:location.lng
          })
        }
           
        } 
//WALKING AND DRIVING
        operationWalking() {
          this.setState({
            showDriving: false,
            showWalking: true,
            TravellingMode:"WALKING"
          });  
         
        }
        operationDriving() {
          this.setState({
            showDriving: true,
            showWalking: false,
            TravellingMode:"DRIVING"
          });
         
        }

  // CAROUSEL ON/OFF
        operationCarouselon(){
        
             this.setState({
            showCarousel: true,
            dontshowCarousel:false
          
          })
          this.operationDirectionson()
        }
      
        operationCarouseloff(){
        
          this.setState({
            showCarousel: false,
            dontshowCarousel:true
          
          })
       }
        
  
  // DIRECTIONS ON/OFF
        operationDirectionson(){
          this.setState({
            showDirections:false,
            flag:false,
            opFlag:true
            
          })
        }
        
        operationDirectionsoff(){
          this.setState({
            showDirections:true,
            opFlag:false
            
          })
          
          this.operationCarouseloff()
        }

      
  
        

    
        

   renderCarouselItem = ({item}) =>
        <View style={styles.cardContainer}>
          
          {item.photos? (
                    <Image  style={styles.cardImage}
                                    
                                    source= { 
                                        
                                          {uri: 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=9000&photoreference='+item.photos[0].photo_reference+'&key='+ApiKey+''}
                                    

                                          } 
                                    
                                        
                                          
                                      
                                      resizeMode="cover"
                          />) : 
                          
                          <Image 
                          style={styles.cardImage}
                           source={require("../images/noImageAv.png")}   
                           resizeMode='stretch'            
                          >

                          </Image>
                          
                          }
  <View style={styles.textContainer}>     
           
      <Text style={styles.titleStyle}>{item.name}</Text>
       
     <View  style={styles.starRating}>
            <Text style={{fontWeight:'bold'}}>Rating:</Text>              
          <StarRating
             
              disabled={false}
              maxStars={5}
              rating={item.rating}
              fullStarColor={'#cba85f'}
              starSize={27}
            // selectedStar={(rating) => this.onStarRatingPress(rating)}
            />                 
          </View>
    <Text style={styles.locationStyle}>
          <Icon style={styles.iconMarker} name="map-marker" size={19} color="black" />
          <Text>  </Text>
          <Text style={{fontSize:20}}>
          {
            getDistance(
          { latitude: this.state.latitude, longitude:this.state.longitude },
          { latitude:item.geometry.location.lat, longitude:item.geometry.location.lng }
          )   }
          </Text>
          <Text style={{color:'#cba85f'}}>  m</Text>
      </Text>                   
           
     </View>

       <TouchableOpacity style={styles.infoBox} onPress={() => Actions.com({email:this.props.email,nametag:item.name})}>
           <Icon style={styles.iconComment} name="comments" size={19} color="black" />
           <Text style={styles.buttonText}>Infos</Text>
        </TouchableOpacity>       
           
          
                          
          </View>
     
          

    render(){

      if (this.state.loginstate == "DENIED") {
        alert("Wrong credentials");  
        this.setState({
          loginstate: ""
        });
      }else  if (this.state.loginstate == "Success") {
        alert("all Went good!!")
       this.setState({
          loginstate: ""
        });
        }
       
       
        return(

          <View style={styles.container}>
        

         
              <TouchableOpacity style={styles.header} onPress={()=> this.props.navigation.goBack()}>
                       <Icon name="arrow-left" size={28} style={styles.icon}/>
                            <View>
                                <Text style={styles.headerText}>VETENERINARY CARE</Text>
                            </View>
               </TouchableOpacity>
          
            <MapView
               provider={PROVIDER_GOOGLE} 
               style={styles.map}
               ref={map => this._map = map}
                region={{
                    latitude: this.state.latitude,
                    longitude:this.state.longitude,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                      }}
                showsUserLocation={true}
                >
                {this.state.markers.map(( marker,index) =>(

                    

                  <Marker
                  key={marker.id}
                  ref={ref => this.state.callouts[index]=ref}
                  onPress={()=> this.onMarkerPressed(marker.geometry.location,index)}
                  coordinate={{latitude:marker.geometry.location.lat,longitude:marker.geometry.location.lng}}
                 title={marker.name}
                  description={marker.vicinity}
                 >
           
                 
                  </Marker>

              

                      )
                  )
                }

                 { this.state.flag ?(
                <MapViewDirections
                  origin={{
                    latitude:this.state.latitude,
                    longitude:this.state.longitude}}
                  destination={{
                    latitude:this.state.latitudeMarker,
                    longitude:this.state.longitudeMarker}}
                  apikey={ApiKey}
                  strokeWidth={3}
                  strokeColor="red"
                  mode= {this.state.TravellingMode}
                  />)
                  :null
                  }

            </MapView>


  {/* WALKING OR DRIVING BOX */}

          <View style={styles.main}>

              <View style={styles.box}>
                {this.state.showCarousel ? (
                      <TouchableOpacity onPress={() => this.operationCarouseloff()}>
                        
                          <Icon style={styles.iconMan} name="eye" size={32} color="orange" />
                          </TouchableOpacity>
                        ) : null}
                        {this.state.dontshowCarousel ? (
                          <TouchableOpacity onPress={() => this.operationCarouselon()}>
                          <Icon
                            style={styles.iconMan}
                            name="eye-slash"
                            size={32}
                            color="white"
                          />
                          </TouchableOpacity>
                        ) : null}
                   
                  </View>

              <View style={styles.secondbox}>
                    {this.state.showDirections ?(
                      <TouchableOpacity onPress={() => this.operationDirectionson()}>
                        
                        <Icon style={styles.iconMan} name="compass" size={32} color="orange" />
                        </TouchableOpacity>
                    ):
                    <TouchableOpacity onPress={() => this.operationDirectionsoff()}>
                        
                        <Icon style={styles.iconMan} name="compass" size={32} color="white" />
                        </TouchableOpacity>
                    }
              </View>

              {this.state.showDirections ? (      
                      <View style={styles.thirdbox}>
                        <TouchableOpacity onPress={() => this.operationWalking()}>
                          {this.state.showDriving ? (
                            <Icon style={styles.iconMan} name="male" size={32} color="white" />
                          ) : null}
                          {this.state.showWalking ? (
                            <Icon
                              style={styles.iconMan}
                              name="male"
                              size={32}
                              color="orange"
                            />
                          ) : null}
                        </TouchableOpacity>
                      </View>
                      ): null }
             {this.state.showDirections ? (  
                    <View style={styles.fourthbox}>
                      <TouchableOpacity onPress={() => this.operationDriving()}>
                        {this.state.showWalking ? (
                          <Icon style={styles.iconMan} name="car" size={30} color="white" />
                        ) : null}
                        {this.state.showDriving ? (
                          <Icon style={styles.iconMan} name="car" size={30} color="orange" />
                        ) : null}
                      </TouchableOpacity>
                    </View>
                    ): null }
          

                
        </View>
   

           {this.state.showCarousel?(           
            <Carousel
              ref={(c) => { this._carousel = c; }}
              containerCustomStyle={styles.carousel}
              data={this.state.markers}
              renderItem={this.renderCarouselItem}
              sliderWidth={Dimensions.get('window').width }
              itemWidth={300 }
              removeClippedSubviews={false}
              onSnapToItem={(index) => this.onCarouselItemaChange(index)}
            />)
            :null
           }

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{ 
     flexGrow:1,
     flexDirection:"column",

    },
    map:{
      ...StyleSheet.absoluteFillObject
    },
    main: {
      position:'absolute',
      zIndex:11,
      alignItems:'center',
      justifyContent:'center',
      top:"20%",
      left:"80%",
      
      

    },
    box: {
      backgroundColor: "rgba(0,0,0,0.6)",
      alignItems: "center",
      width: 50,
      height: 50,
      borderRadius:50,
      
    },
    secondbox: {
      backgroundColor: "rgba(0,0,0,0.6)",
      alignItems: "center",
      width: 50,
      height: 50,
      top: 10,
      borderRadius:50,
    },
    thirdbox: {
      backgroundColor: "rgba(0,0,0,0.6)",
      alignItems: "center",
      width: 50,
      height: 50,
      top: 20,
      borderRadius:50,
    },
    fourthbox:{
      backgroundColor: "rgba(0,0,0,0.6)",
      alignItems: "center",
      width: 50,
      height: 50,
      top: 30,
      borderRadius:50,
    },
    carousel:{
      position: 'absolute',
      bottom:0,
      marginBottom:48
    },
    cardContainer:{
    
      height:220,
      width:320,
      padding:24,
      paddingTop:20,
      borderRadius:24,
      flex:1,
      flexDirection:"row",
   
    },
    textContainer:{
     backgroundColor:'#fcf9f3',
     position:'absolute',
     height:180,
     width:160,
     left:120,
      top:20,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
      
    },
    titleStyle:{
      paddingLeft:20,
      paddingTop:10,
      color:'black',
      fontSize:15,
      fontWeight: "bold"
      
    },
    starRating:{
     flex:1,
     flexDirection:'column',
      paddingLeft:10,
      paddingTop:10,
      paddingBottom:10
    },
    cardImage:{
      flex:1,
      position:'absolute',
      height:300,
      width:120,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
      
     
     
     
      
     // borderBottomLeftRadius:24,
     // borderBottomRightRadius:24

    },
    infoBox:{
      flex:1,
      backgroundColor:'#cba85f',
      height:50,
      width:50,
      position:'absolute',
      right:30,
      bottom:0,
      justifyContent: 'center',
      alignItems: "center",
      flexDirection:'column',
      borderRadius:5,
      shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    },
    locationStyle:{
      color:'#cba85f',
      position:'absolute',
      bottom:10,
      paddingHorizontal:30,
      flex:1,
      flexDirection:'row'
    },
    iconMarker:{
      color:"#cba85f",
      position:'absolute',
      marginRight:300
    
    },
    buttonText:{
      fontSize: (17 / 411.42) * screen,
      color: "black",
      fontWeight: "500",
      textAlign: "center",
      paddingBottom:0
     
      },
     
    header :{
      top:0,
      position:'absolute',
      backgroundColor:'#daebe8',
      paddingHorizontal:20,
      width:"100%",
      height:50,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      zIndex:10
  },
  headerText: {
      fontWeight:"bold",
      fontSize:20,
      color:'black',
      letterSpacing: 1,
      

  },
  icon:{
    position:'absolute',
    left:16
},
  iconMan:{
    paddingTop: 8
  }
   });
   //https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+this.state.latitude+","+this.state.longitude+"&radius=300&type=park&key="+ApiKey+""

   /*componentDidMount(){
    return fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=37.92759251472999,23.712818294619648&radius=300&type=park&key=AIzaSyAhcww9g5Zz8Z-It8uYWnObJhB03rHXz_g')
    .then( (response) => response.json() )
    .then( (responseJson) => {
      this.setState({

        //latitudeMarker: responseJson.results[0].geometry.location.lat,
        //longitudeMarker:responseJson.results[0].geometry.location.lng

      })
    })
    .catch(error => alert("error:", error));
  }*/





            /*
            <Marker 
            coordinate={{latitude:this.state.latitudeMarker,longitude:this.state.longitudeMarker}}
            title={'Hey Man,want to start a revolution? '}
            >

                  <Callout>
                      <Text>{this.state.nameMarker} </Text>
                  </Callout>


            </Marker>  
            */
