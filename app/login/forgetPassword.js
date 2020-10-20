
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
    Platform 
  } from 'react-native';
  import Icon from "react-native-vector-icons/FontAwesome";




export class ForgetPassword extends React.Component {
   constructor(props){
      super(props);
    };

    state = {
        email: '',
     }
     handleEmail = (text) => {
        this.setState({ email: text })
     }
     login = (email, pass) => {
       if(this.state.email==='manishirasys@gmail.com'){
         Alert.alert('Successfully','You have successfully login.');
        this.props.navigation.navigate('Login');
       } else{
         Alert.alert('Wrong Authentication','Please put correct email.');
         this.props.navigation.navigate('ForgetPassword');
       }
     }
    
     
      render(){

      return (
        <View>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView>
            <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={styles.scrollView}>
                    <View>
              <Image source={{uri:'https://pngimage.net/wp-content/uploads/2018/06/roll-png-.png'}}  style={{width:'100%',height:300}} />
              </View>
              
              <View style = {styles.container}>
                <TextInput style = {styles.input}
                   underlineColorAndroid = "transparent"
                   placeholder = "Email"
                   autoCapitalize = "none"
                   onChangeText = {this.handleEmail}/>
                
                
                <TouchableOpacity activeOpacity={0.8} style = {styles.submitButton} onPress = {() => this.login(this.state.email, this.state.password)}>
                   <Text style = {[styles.submitButtonText,styles.submit]}><Icon name="check" size={20} color="#ffffff" /> Submit</Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.8} style = {styles.submitButton} onPress = {() => this.props.navigation.goBack()}>
                   <Text style = {[styles.submitButtonText,styles.register]}><Icon name="backward" size={20} color="#ffffff" /> Back</Text>
                </TouchableOpacity>

             </View>
    

            </ScrollView>
          </SafeAreaView>
        </View>
      );
              }
    
};


const styles = StyleSheet.create({
    container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   submitButton: {
     marginRight:15,
      marginLeft: 15,
      marginTop:15,
      // height: 40,
      textAlign:'center'
   },
   submitButtonText:{
      color: 'white',
      textAlign:'center'
   },
   submit:{
      padding: 10,
      backgroundColor:'green',
   },
   register:{
      padding: 10,
      backgroundColor:'red',
   }
   
  });
  

export default ForgetPassword;