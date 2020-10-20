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



  export default function NonVeg ({navigation}){

    state = {
      product: [
         { 'id': 1, 'name':'Grilled Chicken Escalope with Fresh Salsa', 'img':'https://i.ndtvimg.com/i/2015-12/grilled-chicken-625_625x350_71451368942.jpg', 'route':'Grilled Chicken Escalope with Fresh Salsa','amount':'50', 'isactive':false, 'available':'No','remaining':'0'},
         { 'id': 2, 'name':'Mutton Korma', 'img':'https://i.ndtvimg.com/i/2015-03/badam-korma_625x350_41426244081.jpg', 'route':'Mutton Korma', 'amount':'95','isactive':false, 'available':'Yes','remaining':'10'},
         { 'id': 3, 'name':'Pina Colada Pork Ribs', 'img':'https://i.ndtvimg.com/i/2015-02/pork_625x350_81424765044.jpg', 'route':'Pina Colada Pork Ribs','amount':'80', 'isactive':false, 'available':'No','remaining':'0'},
         { 'id': 4, 'name':'Tandoori Lamb Chops', 'img':'https://i.ndtvimg.com/i/2016-06/lamb-chops_625x350_51466768845.jpg', 'route':'Tandoori Lamb Chops','amount':'150', 'isactive':false, 'available':'No','remaining':'0'},
         { 'id': 5, 'name':'Malabar Fish Biryani', 'img':'https://i.ndtvimg.com/i/2016-11/biryani-620_620x350_41478678907.jpg', 'route':'Malabar Fish Biryani','amount':'85', 'isactive':false, 'available':'Yes','remaining':'10'},
         { 'id': 6, 'name':'Keema Samosa with Yoghurt Dip', 'img':'https://i.ndtvimg.com/i/2017-01/samosa_620x350_81485494818.jpg', 'route':' Keema Samosa with Yoghurt Dip','amount':'95', 'isactive':false, 'available':'Yes','remaining':'10'},
         { 'id': 7, 'name':'Curried Parmesan Fish Fingers', 'img':'https://i.ndtvimg.com/i/2016-03/fish-finger_625x350_51458388088.jpg', 'route':'Curried Parmesan Fish Fingers','amount':'45', 'isactive':false, 'available':'Yes','remaining':'10'},
         { 'id': 8, 'name':'Chicken 65', 'img':'https://i.ndtvimg.com/i/2015-07/chicken-65_625x350_61436162562.jpg', 'route':'Chicken 65','amount':'150', 'isactive':false, 'available':'Yes','remaining':'10'},
         { 'id': 9, 'name':'Goan Prawn Curry With Raw Mango', 'img':'https://i.ndtvimg.com/i/2016-06/prawn-curry-625_625x350_51467122026.jpg', 'route':'Goan Prawn Curry With Raw Mango','amount':'185', 'isactive':false, 'available':'Yes','remaining':'10'},
         { 'id': 10, 'name':'Nihari Gosht', 'img':'https://i.ndtvimg.com/i/2015-09/nihari_625x350_41443159772.jpg', 'route':'Nihari Gosht','amount':'125', 'isactive':false, 'available':'Yes','remaining':'10'},
         { 'id': 11, 'name':'Butter Chicken', 'img':'https://i.ndtvimg.com/i/2018-01/butter-chicken_620x350_51517373579.jpg', 'route':'Butter Chicken','amount':'125', 'isactive':false, 'available':'Yes','remaining':'10'}
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
            <Text style={styles.header}>Chinease NonVeg</Text>               
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
                    <TouchableOpacity activeOpacity={0.8} style = {styles.submitButton} onPress={()=>{navigation.navigate('NonVegDetails',item)}}>
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
    


