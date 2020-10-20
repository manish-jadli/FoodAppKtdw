
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


//   ({navigation,route})
export default class Payment extends React.Component {

   constructor(props) {
      super(props);
   }

   state={amount:this.props.route.params.params.amount,debitCard:'',cvv:'',pin:''}
 
   handleAmount=(amount)=>{
      this.setState({ amount: amount })
   }

   handleDebitCard=(text)=>{
      this.setState({ debitCard: text })
   }
   handleCvv=(text)=>{
      this.setState({ cvv: text })
   }
   handlePin=(text)=>{
      this.setState({ pin: text })
   }

   payment=(amount,debitCard,cvv,pin)=>{
      if(this.state.amount && (this.state.debitCard!=='' && this.state.cvv!=='' && this.state.pin!=='')){
        // setState({amount:this.state.amount,debitCard:this.state.debitCard,cvv:this.state.cvv,pin:this.state.pin})
         Alert.alert('Successfully','Your payment has been successfully.');
         this.props.navigation.navigate('Success',{amount:this.state.amount,debitCard:this.state.debitCard,cvv:this.state.cvv,pin:this.state.pin});
         dataState=this.state;
         this.state;
      }else{
         Alert.alert('Fill all details','You are not fill correct details.')
      }
   }
   render(){
        return(

            <View>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
              <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.scrollView}>
                <View style = {styles.container}>
                {/* <View>
                <Text style={styles.header}>Payment</Text>
                </View> */}

                <View>
                <TextInput
       style = {styles.input}
       maxLength={4}
       editable={false}
       keyboardType='numeric'
        underlineColorAndroid = "transparent"
        placeholder="Amount Paid"
        autoCapitalize = "none"
        value={this.props.route.params.params.amount}
        onChangeText={(amount) => this.setState({ amount })}
      />
        <TextInput
        style = {styles.input}
        maxLength={16}
        keyboardType='numeric'
        underlineColorAndroid = "transparent"
        placeholder="Debit Card Number"
        autoCapitalize = "none"
        onChangeText={this.handleDebitCard}
      />

      <View style={[styles.paymentHeader]}>
        <TextInput
        style = {[styles.input,styles.cvv]}
        maxLength={3}
        secureTextEntry={true}
        keyboardType='numeric'
        underlineColorAndroid = "transparent"
        placeholder="CVV"
        autoCapitalize = "none"
        onChangeText={this.handleCvv}
      />
        <TextInput
        style = {[styles.input,styles.pin]}
        maxLength={4}
        secureTextEntry={true}
        keyboardType='numeric'
        underlineColorAndroid = "transparent"
        placeholder="PIN"
        autoCapitalize = "none"
        onChangeText={this.handlePin}
      />
      </View>

          <TouchableOpacity activeOpacity={0.8} style = {styles.submitButton} onPress = {() => this.payment(this.state.amount, this.state.debitCard,this.state.cvv,this.state.pin)}>
                   <Text style = {[styles.submitButtonText,styles.pay]}><Icon name="rupee" size={20} color="#ffffff" /> Pay Now</Text>
                </TouchableOpacity>
                
                <TouchableOpacity activeOpacity={0.8} style = {styles.submitButton} onPress = {() => this.props.navigation.goBack()}>
                   <Text style = {[styles.submitButtonText,styles.back]}><Icon name="backward" size={20} color="#ffffff" /> Back</Text>
                </TouchableOpacity>
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
      back:{
         padding: 10,
         backgroundColor:'red',
      },
   paymentHeader:{
      flex: 1,
       flexDirection: 'row',
       width:'100%'
   },
   pin:{
      width:175,
      margin:15
   },
   fw:{
      width:'100%'
   },
   cvv:{
      width: 175,
      margin:15
   },
   logoutButtonText:{
      color: 'white',
      textAlign:'center',
   },
   submit:{
      padding: 10,
      backgroundColor:'green',
   },
   ourMenuName:{
      fontWeight:'600',
      textAlign:'center'
  },

    });



   //  export default Payment;