
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


export class Failed extends React.Component{
    constructor(props){
        super(props);
      };

      render(){

        return(

            <View>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
              <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.scrollView}>
                <View style = {styles.container}>
                <View>
                <Text style={styles.header}>Our Menu</Text>               
                </View>

                <View>
                    <Text>Your payment failed for some technical condition.</Text>
                </View>

                </View>
                </ScrollView>
                </SafeAreaView>
                </View>

        )

      }

    }


    const styles = StyleSheet.create({
      container: {
        paddingTop: 23,
     },
     input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
     header:{
      fontSize:20,
      fontWeight:'900',
      textAlign:'center',
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
     submit:{
      padding: 10,
      backgroundColor:'green',
   },
   register:{
    padding: 10,
    backgroundColor:'red',
 },
   submitButton: {
    marginRight:15,
     marginLeft: 15,
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
       flexDirection: 'row',
       backgroundColor:'#ffffff',
       borderColor:'#505050',
       borderWidth:1
   },
   productData:{
      width:'60%',
      height:100,
       marginLeft:10,
       marginRight:10,
        paddingTop:5,
         paddingRight:10,
          paddingBottom:5
   },
   fw:{
      width:'100%'
   },
   productImg:{
      width: '40%',
       height: 100
   }
     
    });


    export default Failed;