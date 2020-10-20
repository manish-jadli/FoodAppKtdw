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

  export default function Berger({navigation}){

    state = {
      product: [
         { 'id': 1, 'name':'Burger with lettuce and tomatoes', 'img':'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=602&q=80', 'route':'Berger','amount':'50', 'isactive':false, 'available':'Yes','remaining':'10'},
         { 'id': 2, 'name':'Burger with vegetable on brown wooden tray', 'img':'https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=401&q=80', 'route':'Veg', 'amount':'95','isactive':false, 'available':'No','remaining':'0'},
         { 'id': 3, 'name':'Meat and cheese burger surrounded by sesame seeds', 'img':'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80', 'route':'NonVeg','amount':'80', 'isactive':false, 'available':'No','remaining':'0'},
         { 'id': 4, 'name':'Double patty cheeseburger', 'img':'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=703&q=80', 'route':'SoupSalad','amount':'150', 'isactive':false, 'available':'Yes','remaining':'15'},
         { 'id': 5, 'name':'Hamburger by french fries on board', 'img':'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80', 'route':'SoftDrinks','amount':'85', 'isactive':false, 'available':'No','remaining':'0'},
         { 'id': 6, 'name':'Hamburger beside fries and ketchup', 'img':'https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80', 'route':'SoftDrinks','amount':'95', 'isactive':false, 'available':'Yes','remaining':'10'},
         { 'id': 7, 'name':'Shallow focus photo of hamburger', 'img':'https://images.unsplash.com/photo-1547584370-2cc98b8b8dc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80', 'route':'SoftDrinks','amount':'45', 'isactive':false, 'available':'Yes','remaining':'10'},
         { 'id': 8, 'name':'Hamburger with vegetables on wooden surface', 'img':'https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80', 'route':'SoftDrinks','amount':'150', 'isactive':false, 'available':'Yes','remaining':'10'},
         { 'id': 9, 'name':'Hamburger on white surface', 'img':'https://images.unsplash.com/photo-1549611016-3a70d82b5040?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=716&q=80', 'route':'SoftDrinks','amount':'185', 'isactive':false, 'available':'Yes','remaining':'10'},
         { 'id': 10, 'name':'Burger and fries on plate', 'img':'https://images.unsplash.com/photo-1457460866886-40ef8d4b42a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80', 'route':'SoftDrinks','amount':'125', 'isactive':false, 'available':'Yes','remaining':'10'}
      ]
   }

   logout=()=>{
      Alert.alert(
          'Confirmation',
          'Are you sure, you want to logout?',
          [
            {text: 'Cancel', onPress: () => this.props.navigation.navigate('Public')},
            {text: 'OK', onPress: () => this.props.navigation.navigate('Login')},
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
        
        <View style={[styles.fw]}>
        {  
              this.state.product.map((item, index) => (
                 <View key = {item.id} style = {styles.ourMenu}>
                   <View style={[styles.productHeader]}>
                    <Image style={[styles.productImg]} source={{uri: item.img}}/>
                    <View style={[styles.productData]}>
                      <Text>{item.name}</Text>
                      <Text>Total Price: Rs. {item.amount}</Text>
                      <Text>No additonal any charges.</Text>
                    </View>
                    </View>
                   
                   <View>
                    <TouchableOpacity activeOpacity={0.8} activeOpacity={0.8} style = {styles.submitButton} onPress={()=>{navigation.navigate('BergerDetails',item)}}>
                    <Text style = {[styles.logoutButtonText,styles.pay,styles.ourMenuName]}><Icon name="book" size={20} color="#ffffff" /> Read more...</Text>
                    </TouchableOpacity>
                    </View>
{/*                    
                    <TouchableOpacity style = {styles.submitButton} onPress={()=>{navigation.navigate('Payment',item)}}>
                    <Text style = {[styles.logoutButtonText,styles.pay,styles.ourMenuName]}>Pay Rs. {item.amount}</Text>
                    </TouchableOpacity> */}
                 </View>
              ))
           }
        </View>
       
        <View style = {[styles.mb10]}>
        <TouchableOpacity activeOpacity={0.8} activeOpacity={0.8} style = {styles.submitButton} onPress = {() => this.logout()}>
               <Text style = {[styles.logoutButtonText,styles.logout]}><Icon name="sign-out" size={20} color="#ffffff" /> Logout</Text>
            </TouchableOpacity>
        </View>
            
           </View>
     
  
          </ScrollView>
        </SafeAreaView>
       
      </View>
    );
// }

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

   //  export default Berger;



