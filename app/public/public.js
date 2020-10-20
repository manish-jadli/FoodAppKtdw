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


export class Public extends React.Component{
    constructor(props){
        super(props);
      };

      state = {
        product: [
           { 'id': 1, 'name':'Berger', 'img':'https://3.imimg.com/data3/IS/QT/MY-5555492/veg-berger-250x250.jpg', 'route':'Berger', 'isactive':false},
           { 'id': 2, 'name':'Chinease Veg', 'img':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIidezVYKXM04XibsLAMC_vO8ReOK3GacxbiPjP0hnaDu1EkizXA&s', 'route':'Veg', 'isactive':false},
           { 'id': 3, 'name':'Chinease NonVeg', 'img':'https://nimantranrestaurant.com/img/star.jpg', 'route':'NonVeg', 'isactive':false},
           { 'id': 4, 'name':'Soup & Salad', 'img':'https://previews.123rf.com/images/natavkusidey/natavkusidey1510/natavkusidey151000292/46903672-chipotle-red-bean-tortilla-soup-on-a-dark-wood-background-toning-selective-focus.jpg', 'route':'SoupSalad', 'isactive':false},
           { 'id': 5, 'name':'Soft Drinks', 'img':'https://blog.technavio.com/wp-content/uploads/2018/10/soft-drink-companies.jpg', 'route':'SoftDrinks', 'isactive':false}
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
                <Text style={styles.header}>Our Menu</Text>               
                </View> */}

            
            <View style={{width:'100%'}}>
            {  
                  this.state.product.map((item, index) => (
                     <View key = {item.id} style = {styles.ourMenu}>
                        {/* <Image source={this.state.names.img} style={{width:50,height:50}} /> */}
                        <Image style={{width: '100%', height: 200}} source={{uri: item.img}}/>
                        <TouchableOpacity style = {styles.submitButton} activeOpacity={0.8} onPress={()=>{this.props.navigation.navigate(item.route)}}>
                        <Text style = {[styles.logoutButtonText,styles.submit,styles.ourMenuName]}><Icon name="hotel" size={20} color="#ffffff" />  {item.name}</Text>
                        </TouchableOpacity>
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
    flex:1
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
    submit:{
       padding: 10,
       backgroundColor:'green',
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
 }
   
  });

export default Public;
