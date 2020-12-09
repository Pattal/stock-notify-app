import React, {Component} from 'react';
import { Text, View, StyleSheet, Container } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'react-native';
import { registerRootComponent } from 'expo';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Screens/Home';
import Pops from './Screens/Pops';
import History from './Screens/History';
import MainScreen from './Navigation/MainScreen';




    
  






export default function App() {

  
  return (
    
  

<NavigationContainer>
  {/* <ContactsStackScreen/> */}
      
<MainScreen />
    </NavigationContainer>
    
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
