// import React, {Component} from 'react';
// import { Text, View, StyleSheet, Container } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Ionicons } from '@expo/vector-icons';
// import { StatusBar } from 'react-native';
// import { registerRootComponent } from 'expo';
// import { createStackNavigator } from '@react-navigation/stack';

// import Home from './Screens/Home';
// import Pops from './Screens/Pops';
// import History from './Screens/History';
// import MainScreen from './Navigation/MainScreen';




    
  






// export default function App() {

  
//   return (
    
  

// <NavigationContainer>
//   {/* <ContactsStackScreen/> */}
      
// <MainScreen />
//     </NavigationContainer>
    
    
    
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import React, {useEffect} from 'react';
import {Text} from 'react-native';

// 1. Import the modules.
import BackgroundFetch from 'react-native-background-fetch';
import PushNotification from 'react-native-push-notification';

export default function App () {
  
  useEffect(() => {
    // Push notifications setup (recommend extracting into separate file)
    PushNotification.popInitialNotification((notification) => {
      console.log('Initial Notification', notification);
    });
    // PushNotification.configure({
    //   // onNotification is called when a notification is to be emitted
    //   onNotification: notification => console.log(notification),

    //   // Permissions to register for iOS
    //   permissions: {
    //     alert: true,
    //     badge: true,
    //     sound: true,
    //   },
    //   popInitialNotification: true,
    // });

    // Background fetch setup (recommend extracting into separate file)
    

        
          // 4. Send a push notification
          PushNotification.localNotification({
            title: 'Cold Weather Alert',
            message: `It's degrees outside.`,
            playSound: true,
            soundName: 'default',
          });
        
        
      
      
      
    
  }, []);

  return(<Text>Helloł</Text>);
};
