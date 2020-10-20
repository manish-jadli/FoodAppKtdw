import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    TouchableOpacity,
    TextInput,
    Button,
    Alert,
  } from 'react-native';
  import Icon from "react-native-vector-icons/FontAwesome";


  export default function VegDetails({navigation,route}){


   logout=()=>{
      Alert.alert(
          'Confirmation',
          'Are you sure, you want to logout?',
          [
            {text: 'Cancel', onPress: () => navigation.navigate('Public')},
            {text: 'OK', onPress: () => navigation.navigate('Login')},
          ],
          { cancelable: false }
        )
   }

   return(
        <View>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style = {styles.container}>
            {/* <View>
            <Text style={styles.header}>{route.params.name}</Text>               
            </View> */}

        
        <View style={[styles.fw]}>

                 <View style = {styles.ourMenu}>
                   <View style={[styles.productHeader]}>
                    <Image style={[styles.productImg]} source={{uri: route.params.img}}/>
                    <View style={[styles.productData]}>
                    {route.params.remaining >0 ? <Text style={[styles.header,styles.textGreen,styles.bbGreen,styles.mr15]}>Available</Text>:<Text style={[styles.header,styles.textRed,styles.bbRed,styles.mr15]}>Not Available</Text>}
                      <Text>Name: {route.params.name}</Text>
                      <Text>Remaining: {route.params.remaining >0 ? <Text style={[styles.textGreen]}>{route.params.remaining} pieces</Text>:<Text style={[styles.textRed]}>{route.params.remaining} pieces</Text>}</Text>
                      <Text>Total Price: Rs. {route.params.amount}</Text>
                      <Text>Available: {route.params.available==='Yes' ? <Text style={[styles.textGreen]}>{route.params.available}</Text>:<Text style={[styles.textRed]}>{route.params.available}</Text>}</Text>
                      <Text>No additonal any charges.</Text>
                    </View>
                    </View>                  
                   
                
        </View>
       
        <View>
        {route.params.remaining >0 ? <TouchableOpacity style = {styles.submitButton} activeOpacity={0.8} onPress={()=>{navigation.navigate('Checkout')}}>
                        <Text style = {[styles.logoutButtonText,styles.submit,styles.ourMenuName]}><Icon name="shopping-cart" size={20} color="#ffffff" />  Add to cart</Text>
                        </TouchableOpacity>:<Text></Text>
                        }

        <TouchableOpacity activeOpacity={0.8} style = {styles.submitButton} onPress={()=>{navigation.navigate('Payment',route)}}  disabled={route.params.remaining === '0'}>
                    <Text style = {[styles.logoutButtonText,styles.pay,styles.ourMenuName]}><Icon name="rupee" size={20} color="#ffffff" /> Pay Rs. {route.params.amount}</Text>
                    </TouchableOpacity>
                 </View>
        <TouchableOpacity activeOpacity={0.8} style = {styles.submitButton} onPress = {() => this.logout()}>
               <Text style = {[styles.logoutButtonText,styles.logout]}><Icon name="sign-out" size={20} color="#ffffff" /> Logout</Text>
            </TouchableOpacity>
        </View>
            
           </View>
     
  
          </ScrollView>
        </SafeAreaView>
       
      </View>
    );

    }
    
    const styles = StyleSheet.create({
      container: {
        paddingTop: 23,
        marginRight:15,
        marginLeft: 15,
     },
     header:{
      fontSize:20,
      fontWeight:'900',
      // textAlign:'center',
      marginBottom:15,
     },
     ourMenu:{
      width:'100%',
      textAlign:'center',
      marginBottom:20,
     },
     ourMenuName:{
         fontWeight:'600',
         textAlign:'center'
     },
     submitButton: {
         marginTop:15,
         textAlign:'center'
      },
      submitButtonText:{
         color: 'white',
         textAlign:'center'
      },
      pay:{
         padding: 10,
         backgroundColor:'blue',
      },
      register:{
         padding: 10,
         backgroundColor:'red',
      },
     logoutButtonText:{
      color: 'white',
      textAlign:'center',
   },
   logout:{
      padding: 10,
      backgroundColor:'red',
   },
   mb10:{
       marginBottom:10
   },
   productHeader:{
      flex: 1,
       backgroundColor:'#ffffff',
       borderColor:'#505050',
       borderWidth:1
   },
   productData:{
      width:'100%',
      height:'auto',
       marginLeft:10,
       marginRight:10,
        paddingTop:15,
         paddingRight:10,
          paddingBottom:15
   },
   fw:{
      width:'100%'
   },
   productImg:{
      width: '100%',
       height:200,
   },
   bold:{
       fontWeight:'600'
   },
  textRed:{
     color:'red'
  },
  textGreen:{
     color:'green'
  },
  bbGreen:{      
     borderBottomWidth:2,
     borderColor:'green',
  },
  bbRed:{
     borderBottomWidth:2,
     borderColor:'red',
  },
  mr15:{
     marginRight:15
  },
  submit:{
   padding: 10,
   backgroundColor:'green',
},
     
    });
