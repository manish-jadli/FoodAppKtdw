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



  export default function SoupSalad ({navigation}){

    state = {
      product: [
         { 'id': 1, 'name':'Cabbage Lentil Soup', 'img':'https://media.chefdehome.com/740/0/0/lentil-soup/lentil-soup-bowl.jpg', 'route':'Cabbage Lentil Soup','amount':'50', 'isactive':false, 'available':'No','remaining':'0'},
         { 'id': 2, 'name':'Mango Avocado Pasta Salad with Cilantro Lime Dressing', 'img':'https://media.chefdehome.com/740/0/0/pasta-salad/easy-mango-avocado-pasta-salad-chefdehome-1.jpg', 'route':'Mango Avocado Pasta Salad with Cilantro Lime Dressing', 'amount':'95','isactive':false, 'available':'Yes','remaining':'10'},
         { 'id': 3, 'name':'Vegetarian Cabbage Soup', 'img':'https://media.chefdehome.com/740/0/0/cabbage-soup/vegetarian-cabbage-soup-chefdehome.jpg', 'route':'Vegetarian Cabbage Soup','amount':'80', 'isactive':false, 'available':'Yes','remaining':'10'},
         { 'id': 4, 'name':'Vegetarian Kale Caesar Salad', 'img':'https://media.chefdehome.com/740/0/0/kale-caesar-salad/kale-caesar-salad-mayo-less-caesar-dressing-chefdehome-1.jpg', 'route':'Vegetarian Kale Caesar Salad','amount':'150', 'isactive':false, 'available':'No','remaining':'0'},
         { 'id': 5, 'name':'Vegan Roasted Red Pepper and Ginger Soup', 'img':'https://media.chefdehome.com/740/0/0/c/red-pepper-soup/roasted-red-pepper-ginger-soup-chefdehome-5.jpg', 'route':'Vegan Roasted Red Pepper and Ginger Soup','amount':'85', 'isactive':false, 'available':'Yes','remaining':'10'},
         { 'id': 6, 'name':'Deli Style Pasta Salad with Kale', 'img':'https://media.chefdehome.com/740/0/0/pasta-salad/deli-style-pasta-salad-chefdehome-9.jpg', 'route':'Deli Style Pasta Salad with Kale','amount':'95', 'isactive':false, 'available':'No','remaining':'0'},
         { 'id': 7, 'name':'15 Minutes Easy Kale Tortellini Soup', 'img':'https://media.chefdehome.com/740/0/0/kale-soup/kale-tortellini-soup-chefdehome-3.jpg', 'route':'15 Minutes Easy Kale Tortellini Soup','amount':'45', 'isactive':false, 'available':'Yes','remaining':'10'},
         { 'id': 8, 'name':'Ripe Papaya and Avocado Salad with Black Salt Dressing', 'img':'https://media.chefdehome.com/740/0/0/c/papaya-salad/easy-avocado-papaya-salad-chefdehome-4.jpg', 'route':'Ripe Papaya and Avocado Salad with Black Salt Dressing','amount':'150', 'isactive':false, 'available':'Yes','remaining':'10'},
         { 'id': 9, 'name':'Tomato and Rice Soup with Chickpeas', 'img':'https://media.chefdehome.com/740/0/0/rice-tomato-soup/tomato-rice-soup-chefdehome-2.jpg', 'route':'Tomato and Rice Soup with Chickpeas','amount':'185', 'isactive':false, 'available':'No','remaining':'0'},
         { 'id': 10, 'name':'Cauliflower and Broccoli Detox Salad', 'img':'https://media.chefdehome.com/740/0/0/broccoli-salad/broccoli-cauliflower-detox-salad-chefdehome-5.jpg', 'route':'','amount':'125', 'isactive':false, 'available':'Yes','remaining':'10'},
         { 'id': 11, 'name':'Spring Green Pea Soup - Vegan and Gluten Free', 'img':'https://media.chefdehome.com/740/0/0/c/spring-pea-soup/spring-green-peas-soup-chefdehome-9a.jpg', 'route':'Spring Green Pea Soup - Vegan and Gluten Free','amount':'125', 'isactive':false, 'available':'Yes','remaining':'10'},
         { 'id': 12, 'name':'Slow Cooker Turnip, Kale and Lentil Soup', 'img':'https://media.chefdehome.com/740/0/0/lentils-turnip-soup/lentils-kale-turnip-soup-chefdehome-1.jpg', 'route':'Slow Cooker Turnip, Kale and Lentil Soup','amount':'125', 'isactive':false, 'available':'Yes','remaining':'10'},
         { 'id': 13, 'name':'Roasted Fennel and Artichoke Pasta Salad', 'img':'https://media.chefdehome.com/740/0/0/pasta-salad/roasted-fennel-artichoke-pasta-salad-chefdehome-5.jpg', 'route':'Roasted Fennel and Artichoke Pasta Salad','amount':'125', 'isactive':false, 'available':'Yes','remaining':'10'},
         { 'id': 14, 'name':'Easy Vegan French Lentils Soup in Pressure Cooker', 'img':'https://media.chefdehome.com/740/0/0/french-lentils-soup/french-lentils-soup-chefdehome-5.jpg', 'route':'Easy Vegan French Lentils Soup in Pressure Cooker','amount':'125', 'isactive':false, 'available':'Yes','remaining':'10'},
         { 'id': 15, 'name':'Mezze Penne Caprese Pasta Salad with Pesto Vinaigrette', 'img':'https://media.chefdehome.com/740/0/0/c/pasta-salad/penne-caprese-pasta-salad-pesto-dressing-chefdehome-7a.jpg', 'route':'Mezze Penne Caprese Pasta Salad with Pesto Vinaigrette','amount':'125', 'isactive':false, 'available':'Yes','remaining':'10'},
         { 'id': 16, 'name':'Roasted Garlic and Tomatoes Soup', 'img':'https://media.chefdehome.com/740/0/0/roasted-tomato-soup/roasted-garlic-tomato-soup-chefdehome-19.jpg', 'route':'Roasted Garlic and Tomatoes Soup','amount':'125', 'isactive':false, 'available':'Yes','remaining':'10'},
         { 'id': 17, 'name':'Apple and Goat Cheese Salad with White Balsamic-Herb Dressing | Boudin Bakery Copycat', 'img':'https://media.chefdehome.com/740/0/0/boudin-apple-salad/boudin-apple-goat-cheese-salad-chefdehome-6.jpg', 'route':'Apple and Goat Cheese Salad with White Balsamic-Herb Dressing | Boudin Bakery Copycat','amount':'125', 'isactive':false, 'available':'Yes','remaining':'10'},
         { 'id': 18, 'name':'Chickpeas and Spinach Soup', 'img':'https://media.chefdehome.com/740/0/0/chickpeaandspinachsoup/chickpeaandspinachsoup_main3.jpg', 'route':'Chickpeas and Spinach Soup','amount':'125', 'isactive':false, 'available':'Yes','remaining':'10'},
         { 'id': 19, 'name':'Mexican Black Bean and Berry Salad with Avocado Lime Dressing', 'img':'https://media.chefdehome.com/740/0/0/beans-salad/black-beans-berry-salad-chefdehome-7.jpg', 'route':'Mexican Black Bean and Berry Salad with Avocado Lime Dressing','amount':'125', 'isactive':false, 'available':'Yes','remaining':'10'},
         { 'id': 20, 'name':'Vegetable Goulash', 'img':'https://media.chefdehome.com/740/0/0/vegetablestew1/vegetable-goulash-chefdehome-3.jpg', 'route':'Vegetable Goulash','amount':'125', 'isactive':false, 'available':'Yes','remaining':'10'},
         { 'id': 21, 'name':'Mediterranean Chickpeas Salad with Herb-Citrus Vinaigrette', 'img':'https://media.chefdehome.com/740/0/0/chickpea-salad/mediterranean-chickpeas-salad-citrus-dressing-chefdehome-2.jpg', 'route':'Mediterranean Chickpeas Salad with Herb-Citrus Vinaigrette','amount':'125', 'isactive':false, 'available':'Yes','remaining':'10'},
         { 'id': 22, 'name':'Pasta e Fagioli Soup', 'img':'https://media.chefdehome.com/740/0/0/pasta-fagioli/pasta-fagioli-soup.jpg', 'route':'Pasta e Fagioli Soup','amount':'125', 'isactive':false, 'available':'Yes','remaining':'10'}
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
            <Text style={styles.header}>Soup & Salad</Text>               
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
                    <TouchableOpacity activeOpacity={0.8} style = {styles.submitButton} onPress={()=>{navigation.navigate('SoupSaladDetails',item)}}>
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
   