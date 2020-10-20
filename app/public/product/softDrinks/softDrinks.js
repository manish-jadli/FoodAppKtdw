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



  export default function SoftDrinks ({navigation}){


    state = {
      product: [
         { 'id': 1, 'name':'Carrot Juice', 'img':'https://cdn.pixabay.com/photo/2016/08/26/21/16/carrot-juice-1623157_960_720.jpg', 'route':'Carrot Juice','amount':'50', 'isactive':false, 'available':'Yes','remaining':'10'},
         { 'id': 2, 'name':'Orange Juice Vitamins Drink', 'img':'https://cdn.pixabay.com/photo/2012/11/28/09/31/orange-juice-67556_960_720.jpg', 'route':'Orange Juice Vitamins Drink', 'amount':'95','isactive':false, 'available':'No','remaining':'0'},
         { 'id': 3, 'name':'Coca Cola', 'img':'https://cdn.pixabay.com/photo/2014/09/26/19/51/coca-cola-462776_960_720.jpg', 'route':'Coca Cola','amount':'80', 'isactive':false, 'available':'Yes','remaining':'10'},
         { 'id': 4, 'name':'Strawberries Juice', 'img':'https://cdn.pixabay.com/photo/2018/06/01/20/25/strawberries-3447082_960_720.jpg', 'route':'Strawberries Juice','amount':'150', 'isactive':false, 'available':'No','remaining':'0'},
         { 'id': 5, 'name':'Strawberries Ripe Red', 'img':'https://cdn.pixabay.com/photo/2016/05/17/16/18/strawberries-1398444_960_720.jpg', 'route':'Strawberries Ripe Red','amount':'85', 'isactive':false, 'available':'Yes','remaining':'10'},
         { 'id': 6, 'name':'Palm Drink', 'img':'https://cdn.pixabay.com/photo/2016/07/21/08/30/palm-1532014_960_720.jpg', 'route':'Palm Drink','amount':'95', 'isactive':false, 'available':'Yes','remaining':'10'},
         { 'id': 7, 'name':'Beer Caramel Ice Alkohol Free Drinks', 'img':'https://cdn.pixabay.com/photo/2016/05/29/19/21/beer-caramel-ice-1423615_960_720.jpg', 'route':'Beer Caramel Ice Alkohol Free Drinks','amount':'45', 'isactive':false, 'available':'No','remaining':'0'},
         { 'id': 8, 'name':'Beverage Caribbean Cocktail', 'img':'https://cdn.pixabay.com/photo/2013/02/21/19/06/beach-84533_960_720.jpg', 'route':'Beverage Caribbean Cocktail','amount':'150', 'isactive':false, 'available':'No','remaining':'0'},
         { 'id': 9, 'name':'Beverages Red Cup Juice', 'img':'https://cdn.pixabay.com/photo/2013/08/27/22/41/drink-176458_960_720.jpg', 'route':'Beverages Red Cup Juice','amount':'185', 'isactive':false, 'available':'Yes','remaining':'10'},
         { 'id': 10, 'name':'Energy Soft Drink', 'img':'https://cdn.pixabay.com/photo/2017/06/14/22/20/drink-2403580_960_720.jpg', 'route':'Energy Soft Drink','amount':'125', 'isactive':false, 'available':'Yes','remaining':'10'}
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
            {/* <View>
            <Text style={styles.header}>Soft Drinks</Text>               
            </View> */}

        
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
                    <TouchableOpacity activeOpacity={0.8} style = {styles.submitButton} onPress={()=>{navigation.navigate('SoftDrinksDetails',item)}}>
                    <Text style = {[styles.logoutButtonText,styles.pay,styles.ourMenuName]}><Icon name="book" size={20} color="#ffffff" /> Read more...</Text>
                    </TouchableOpacity>
                    </View>
                   
                    {/* <TouchableOpacity style = {styles.submitButton} onPress={()=>{this.props.navigation.navigate(item.route)}}>
                    <Text style = {[styles.logoutButtonText,styles.pay,styles.ourMenuName]}>Pay Rs. {item.amount}</Text>
                    </TouchableOpacity> */}
                 </View>
              ))
           }
        </View>
       
        <View style = {[styles.mb10]}>
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
    

