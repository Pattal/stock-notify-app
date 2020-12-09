import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Image } from 'react-native';


import Home from '../Screens/Home';
import Pops from '../Screens/Pops';
import History from '../Screens/History';
import StockDetails from '../Screens/StockDetails';
import CompanyInfo from '../Screens/CompanyInfo';
import Alert from '../Screens/Alert';


function LogoTitle() {
    return (
      <Image
        style={{ width: 100, height: 50 }}
        source={require('../assets/logo.png')}
      />
    );
  }

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "white",
  },
  headerTitle: props => <LogoTitle {...props} />,
  headerTitleAlign: 'center',
  headerTintColor: "black",
  headerBackTitle: "Back",
 
  
};

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="StockDetails" component={StockDetails} />
    </Stack.Navigator>
  );
}

const PopsStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Pops" component={Pops} />
      <Stack.Screen name="Alert" component={Alert} />
    </Stack.Navigator>
  );
}

const HistoryStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="History" component={History} />
        <Stack.Screen name="CompanyInfo" component={CompanyInfo} />
        <Stack.Screen name="StockDetails" component={StockDetails} />
      </Stack.Navigator>
    );
  }

export { HomeStackNavigator, PopsStackNavigator, HistoryStackNavigator };