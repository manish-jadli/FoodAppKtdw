
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



export class Success extends React.Component{
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
                <Text style={[styles.header, styles.successMessage]}>Your payment is <Text style={[styles.textGreen]}>Rs.{this.props.route.params.amount}</Text> has been successfully.</Text>
                {/* <Text>{this.props.route.params.amount}</Text>
                <Text>{this.props.route.params.debitCard}</Text>
                <Text>{this.props.route.params.cvv}</Text>
                <Text>{this.props.route.params.pin}</Text> */}
                </View>

                <TouchableOpacity activeOpacity={0.8} style = {styles.submitButton} onPress = {() => this.props.navigation.navigate('Public')}>
                   <Text style = {[styles.submitButtonText,styles.back]}><Icon name="home" size={20} color="#ffffff" /> Go to Product</Text>
                </TouchableOpacity>
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
        margin: 15,
     },
     header:{
      fontSize:20,
      fontWeight:'900',
      textAlign:'center',
      marginBottom:15,
     },
     successMessage:{
        backgroundColor:'#ffffff',
        borderColor:'#505050',
        borderWidth:1,
        padding:10
     },
     submitButton: {
       marginTop:15,
       textAlign:'center'
    },
        submitButtonText:{
           color: 'white',
           textAlign:'center'
        },
        back:{
         padding: 10,
         backgroundColor:'red',
      },
      textGreen:{
        color:'green'
     },
    });


    export default Success;