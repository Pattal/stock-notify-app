import React, {Component} from 'react';
import { Text, View, StyleSheet, Container } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'react-native';
import { registerRootComponent } from 'expo';
import { createStackNavigator } from '@react-navigation/stack';



import { HomeStackNavigator, PopsStackNavigator, HistoryStackNavigator } from "./StackNavigation";

const AppTabs = createBottomTabNavigator();
const AppTabsScreen = () => (
  <AppTabs.Navigator
  
  tabBarOptions={{
            activeTintColor: '#1DA1F2',
            inactiveTintColor: 'gray',
            style: {
              backgroundColor: 'white',
              borderTopWidth: 0,
              shadowOffset: { width: 5, height: 3 },
              shadowColor: 'black',
              shadowOpacity: 0.5,
              elevation: 5,
    
            }
    
          }}>
    <AppTabs.Screen
      name="Powidomienia"
      component={PopsStackNavigator}
      options={{
        tabBarIcon: props => (
          <Ionicons name="ios-information-circle" size={props.size} color={props.color} />
        ),
      }}
    />
    <AppTabs.Screen
      name="Home"
      component={HomeStackNavigator}
      options={{
        tabBarIcon: props => (
          <Ionicons
            name="ios-home"
            size={props.size}
            color={props.color}
          />
        ),
      }}
    />

<AppTabs.Screen
      name="Szukaj"
      component={HistoryStackNavigator}
      options={{
        tabBarIcon: props => (
          <Ionicons
            name="ios-search"
            size={props.size}
            color={props.color}
          />
        ),
      }}
    />


    
  </AppTabs.Navigator>
);

export default function App() {

  
    return (
      
    
        <AppTabsScreen />
  
      
      
      
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
  