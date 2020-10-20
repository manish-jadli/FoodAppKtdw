import React from 'react';
import {
   StatusBar,
   SafeAreaView,
   ScrollView,
   Text,
   StyleSheet,
   View,
   Alert,
   TouchableOpacity,
   Image
} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import CartData from '../../../api/cart';
import { FlatList } from 'react-native-gesture-handler';




export default class Checkout extends React.Component {

   constructor(props){
      super(props);
   }

   logout = () => {
      Alert.alert(
         'Confirmation',
         'Are you sure, you want to logout?',
         [
            { text: 'Cancel', onPress: () => this.props.navigation.navigate('Checkout') },
            { text: 'OK', onPress: () => this.props.navigation.navigate('Login') },
         ],
         { cancelable: false }
      )
   }

   deleteItem = (id) => {
      Alert.alert(
         'Confirmation',
         'Are you sure, you want to delete it?',
         [
            { text: 'Cancel', onPress: () => this.props.navigation.navigate('Checkout') },
            { text: 'OK', onPress: () => this.deleteItemDetail(id) },
         ],
         { cancelable: false }
      )
   }

   deleteItemDetail=(id)=> {
      let itemFilter=CartData;
      itemFilter.splice(id, 1);
      this.setState({item:itemFilter})
   }

   editItem = () => {
      Alert.alert(
         'Edit Item',
         'Are you sure, you want to edit it?',
         [
            { text: 'Cancel', onPress: () => this.props.navigation.navigate('Checkout') },
            { text: 'OK', onPress: () => this.props.navigation.navigate('Public') },
         ],
         { cancelable: false }
      )
   }

   render(){

     

   return (

      <View>
         <StatusBar barStyle="dark-content" />
         <SafeAreaView>
            {/* <ScrollView contentInsetAdjustmentBehavior="automatic"
               style={styles.scrollView}> */}
               <View style={styles.container}>

                  <View style={[styles.mb15]}>
                     <TouchableOpacity activeOpacity={0.8} onPress={() => this.props.navigation.navigate('Public')}>
                        <Text style={[styles.submitButtonText, styles.submit]}><Icon name="plus" size={20} color="#ffffff" /> Add Another</Text>
                     </TouchableOpacity>
                  </View>


   
                  <View>
       <FlatList data={CartData} initialNumToRender={2} onEndThreshold={2} renderItem={({item})=>
       <View style={[styles.fw]}>
          
                <View style={styles.ourMenu}>
                   <View style={[styles.productHeader]}>
                      <Image style={[styles.productImg]} source={{ uri: item.img }} />
                      <View style={[styles.productData]}>
                         <Text>{item.name}</Text>
                         <Text>Total Price: Rs. {item.amount}</Text>
                         <Text>No additonal any charges.</Text>
                      </View>
                   </View>
   
                   <View>
                   <TouchableOpacity activeOpacity={0.8} activeOpacity={0.8} style={styles.submitButton}>
                         <Text style={[styles.logoutButtonText, styles.submit, styles.ourMenuName]}><Icon name="edit" size={20} color="#ffffff" /> Edit</Text>
                      </TouchableOpacity>
                      <TouchableOpacity activeOpacity={0.8} activeOpacity={0.8} style={styles.submitButton} onPress={() => { this.deleteItem(item.id) }}>
                         <Text style={[styles.logoutButtonText, styles.logout, styles.ourMenuName]}><Icon name="trash" size={20} color="#ffffff" /> Delete</Text>
                      </TouchableOpacity>
                   </View>
                </View>
         
       </View>
    }
    keyExtractor={(item) => item.id.toString() }
       />
       </View>

                  <View style={[styles.mb10]}>
                     <TouchableOpacity activeOpacity={0.8} activeOpacity={0.8} style={styles.submitButton} onPress={() => this.editItem()}>
                        <Text style={[styles.logoutButtonText, styles.pay, styles.ourMenuName]}><Icon name="rupee" size={20} color="#ffffff" /> Pay Rs. 200</Text>
                     </TouchableOpacity>

                     <TouchableOpacity activeOpacity={0.8} style={styles.submitButton} onPress={() => this.logout()}>
                        <Text style={[styles.logoutButtonText, styles.logout]}><Icon name="sign-out" size={20} color="#ffffff" /> Logout</Text>
                     </TouchableOpacity>
                  </View>

               </View>
            {/* </ScrollView> */}
         </SafeAreaView>
      </View>

   );
    }

}

const styles = StyleSheet.create({
   container: {
      paddingTop: 23,
      marginRight: 15,
      marginLeft: 15,
   },
   mb15: {
      marginBottom: 15
   },
   mb10: {
      marginBottom: 10,
   },
   logoutButtonText: {
      color: 'white',
      textAlign: 'center',
   },
   logout: {
      padding: 10,
      backgroundColor: 'red',
   },
   submitButton: {
      marginTop: 15,
      textAlign: 'center'
   },
   submit: {
      padding: 10,
      backgroundColor: 'green'
   },
   submitButtonText: {
      color: 'white',
      textAlign: 'center'
   },
   productHeader: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#ffffff',
      borderColor: '#505050',
      borderWidth: 1
   },
   productData: {
      width: '60%',
      height: 100,
      marginLeft: 10,
      marginRight: 10,
      paddingTop: 5,
      paddingRight: 10,
      paddingBottom: 5
   },
   fw: {
      width: '100%'
   },
   productImg: {
      width: '40%',
      height: 100
   },
   pay: {
      padding: 10,
      backgroundColor: 'blue',
   },
   ourMenu: {
      width: '100%',
      textAlign: 'center',
      marginBottom: 20,
   },
   ourMenuName: {
      fontWeight: '600',
      textAlign: 'center'
   },
   mh15: {
      marginRight: 15,
      marginLeft: 15,
   }
})