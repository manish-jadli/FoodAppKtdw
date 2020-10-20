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



  export default function Veg ({navigation}){

    state = {
      product: [
        { 'id': 1, 'name':'Pasta primavera', 'img':'https://media.gettyimages.com/photos/pasta-primavera-picture-id538152942?s=2048x2048', 'route':'Berger','amount':'50', 'isactive':false, 'available':'Yes','remaining':'10'},
        { 'id': 2, 'name':'Vegetarian Ppasta Cuisine Served in a Blue Bowel ', 'img':'https://media.gettyimages.com/photos/vegetarian-ppasta-cuisine-served-in-a-blue-bowel-picture-id1082165778?s=2048x2048', 'route':'Veg', 'amount':'95','isactive':false, 'available':'Yes','remaining':'10'},
        { 'id': 3, 'name':'Cooking Vegetarian Sausages in a Frying Pan', 'img':'https://media.gettyimages.com/photos/cooking-vegetarian-sausages-in-a-frying-pan-picture-id1066688620?s=2048x2048', 'route':'NonVeg','amount':'80', 'isactive':false, 'available':'Yes','remaining':'10'},
         { 'id': 4, 'name':'Spaghetti Bolognese Sauce in a Ladles Spoon', 'img':'https://media.gettyimages.com/photos/spaghetti-bolognese-sauce-in-a-ladles-spoon-picture-id1083558948?s=2048x2048', 'route':'SoupSalad','amount':'150', 'isactive':false, 'available':'No','remaining':'0'},
         { 'id': 5, 'name':'Spaghetti with vodka sauce topped with freshly grated parmesan cheese', 'img':'https://media.gettyimages.com/photos/spaghetti-with-vodka-sauce-topped-with-freshly-grated-parmesan-cheese-picture-id860171964?s=2048x2048', 'route':'SoftDrinks','amount':'85', 'isactive':false, 'available':'Yes','remaining':'10'},
         { 'id': 6, 'name':'Pesto with Clams', 'img':'https://media.gettyimages.com/photos/pesto-with-clams-picture-id502109258?s=2048x2048', 'route':'SoftDrinks','amount':'95', 'isactive':false, 'available':'Yes','remaining':'10'},
         { 'id': 7, 'name':'Penne Pasta With Pesto Sauce On A Wooden Background ', 'img':'https://media.gettyimages.com/photos/penne-pasta-with-pesto-sauce-on-a-wooden-background-picture-id1154221208?s=2048x2048', 'route':'SoftDrinks','amount':'45', 'isactive':false, 'available':'Yes','remaining':'10'},
         { 'id': 8, 'name':'Bolognese spaghetti with cheese and basil', 'img':'https://media.gettyimages.com/photos/bolognese-spaghetti-with-cheese-and-basil-picture-id613655858?s=2048x2048', 'route':'SoftDrinks','amount':'150', 'isactive':false, 'available':'Yes','remaining':'10'},
         { 'id': 9, 'name':'Spaghetti with green onions', 'img':'https://media.gettyimages.com/photos/spaghetti-with-green-onions-picture-id1124927446?s=2048x2048', 'route':'SoftDrinks','amount':'185', 'isactive':false, 'available':'Yes','remaining':'10'},
         { 'id': 10, 'name':'Ragu', 'img':'https://media.gettyimages.com/photos/ragu-picture-id1069156756?s=2048x2048', 'route':'SoftDrinks','amount':'125', 'isactive':false, 'available':'No','remaining':'0'}
      ]
   }

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
            <Text style={styles.header}>Chinease Veg</Text>               
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
                    <TouchableOpacity activeOpacity={0.8} style = {styles.submitButton} onPress={()=>{navigation.navigate('VegDetails',item)}}>
                    <Text style = {[styles.logoutButtonText,styles.pay,styles.ourMenuName]}><Icon name="book" size={20} color="#ffffff" /> Read more...</Text>
                    </TouchableOpacity>
                    </View>
                   
                    {/* <TouchableOpacity style = {styles.submitButton} onPress={()=>{navigation.navigate(item.route)}}>
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





