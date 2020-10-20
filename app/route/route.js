import React from 'react'
import { StyleSheet, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Register from '../login/register';
import Login from '../login/login';
import Public from '../public/public';
import Berger from '../public/product/berger/berger';
import NonVeg from '../public/product/nonVeg/nonVeg';
import Veg from '../public/product/veg/veg';
import SoupSalad from '../public/product/soupSalad/soupSalad';
import SoftDrinks from '../public/product/softDrinks/softDrinks';
import Payment from '../public/payment/payment';
import Success from '../public/payment/success';
import Failed from '../public/payment/failed';
import BergerDetails from '../public/product/berger/bergerDetails';
import VegDetails from '../public/product/veg/vegDetails';
import NonVegDetails from '../public/product/nonVeg/nonVegDetails';
import SoupSaladDetails from '../public/product/soupSalad/soupSaladDetails';
import SoftDrinksDetails from '../public/product/softDrinks/softDrinksDetails';
import Checkout from '../public/checkout/checkout';
import Icon from "react-native-vector-icons/FontAwesome";


const Stack = createStackNavigator()

export default class Navigator extends React.Component {
  render() {
    return (
      <NavigationContainer initialRouteName='Login'>
        <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#f59000' }, headerTintColor: '#fff' }}>



          <Stack.Screen name='Login' component={Login} options={{headerShown: false}} />
          <Stack.Screen name='Register' component={Register} options={{ title: 'Register' }} options={{headerShown: false}} />

          <Stack.Screen name='Public' component={Public} options={{ title: 'Products',
            headerRight: () => (
              <Icon name="shopping-cart" style={styles.p10} size={20} color="#ffffff" onPress={() => Alert.alert('Cart Details','This is a cart!')} />
            )
             }} />

          <Stack.Screen name='Berger' component={Berger} options={{ title: 'Berger',
         headerRight: () => (
          <Icon name="shopping-cart" style={styles.p10} size={20} color="#ffffff" onPress={() => Alert.alert('Cart Details','This is a cart!')} />
        )
         }} />
          <Stack.Screen name='BergerDetails' component={BergerDetails} options={{ title: 'Berger Details',
         headerRight: () => (
          <Icon name="shopping-cart" style={styles.p10} size={20} color="#ffffff" onPress={() => Alert.alert('Cart Details','This is a cart!')} />
        )
         }} />

          <Stack.Screen name='Veg' component={Veg} options={{ title: 'Chinease Veg',
         headerRight: () => (
          <Icon name="shopping-cart" style={styles.p10} size={20} color="#ffffff" onPress={() => Alert.alert('Cart Details','This is a cart!')} />
        )
         }} />
          <Stack.Screen name='VegDetails' component={VegDetails} options={{ title: 'Chinease Veg Details',
         headerRight: () => (
          <Icon name="shopping-cart" style={styles.p10} size={20} color="#ffffff" onPress={() => Alert.alert('Cart Details','This is a cart!')} />
        )
        }} />

          <Stack.Screen name='NonVeg' component={NonVeg} options={{ title: 'Chinease NonVeg',
         headerRight: () => (
          <Icon name="shopping-cart" style={styles.p10} size={20} color="#ffffff" onPress={() => Alert.alert('Cart Details','This is a cart!')} />
        )
        }} />
          <Stack.Screen name='NonVegDetails' component={NonVegDetails} options={{ title: 'Chinease NonVeg Details',
         headerRight: () => (
          <Icon name="shopping-cart" style={styles.p10} size={20} color="#ffffff" onPress={() => Alert.alert('Cart Details','This is a cart!')} />
        )
        }} />

          <Stack.Screen name='SoupSalad' component={SoupSalad} options={{ title: 'Soup & Salad',
         headerRight: () => (
          <Icon name="shopping-cart" style={styles.p10} size={20} color="#ffffff" onPress={() => Alert.alert('Cart Details','This is a cart!')} />
        )
        }} />
          <Stack.Screen name='SoupSaladDetails' component={SoupSaladDetails} options={{ title: 'Soup & Salad Details',
         headerRight: () => (
          <Icon name="shopping-cart" style={styles.p10} size={20} color="#ffffff" onPress={() => Alert.alert('Cart Details','This is a cart!')} />
        )
        }} />

          <Stack.Screen name='SoftDrinks' component={SoftDrinks} options={{ title: 'Soft Drinks',
         headerRight: () => (
          <Icon name="shopping-cart" style={styles.p10} size={20} color="#ffffff" onPress={() => Alert.alert('Cart Details','This is a cart!')} />
        )
        }} />
          <Stack.Screen name='SoftDrinksDetails' component={SoftDrinksDetails} options={{ title: 'Soft Drinks Details',
         headerRight: () => (
          <Icon name="shopping-cart" style={styles.p10} size={20} color="#ffffff" onPress={() => Alert.alert('Cart Details','This is a cart!')} />
        )
        }} />

          <Stack.Screen name='Checkout' component={Checkout} options={{ title: 'Cart' }} />


          <Stack.Screen name='Payment' component={Payment} options={{ title: 'Payment' }} />
          <Stack.Screen name='Success' component={Success} options={{ title: 'Success' }} />
          <Stack.Screen name='Failed' component={Failed} options={{ title: 'Failed' }} />

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}


const styles = StyleSheet.create({
  p10: {
    paddingLeft: 10,
    paddingRight: 10
  }

});