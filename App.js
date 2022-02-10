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


// import { StyleSheet, Text, View, Button } from "react-native";
// import * as Notifications from 'expo-notifications';
// import * as Permissions from 'expo-permissions';
// import * as BackgroundFetch from "expo-background-fetch";
// import * as TaskManager from "expo-task-manager";
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// let setStateFn = () => {
//   console.log("State not yet initialized");
// }; 


// function myTask() {

//   axios.get('http://192.168.1.107:4545/users').then( res => {

//     try {
//       // fetch data here...
//       //const backendData = "Simulated fetch " + Math.random();
//       console.log("myTask() ", res.data[1].name);
//       setStateFn(res.data[1].name);
//       return res.data[1]
//         ? BackgroundFetch.Result.NewData
//         : BackgroundFetch.Result.NoData;
//     } catch (err) {
//       return BackgroundFetch.Result.Failed;
//     }

//   })
  
// }


// async function initBackgroundFetch(taskName,
//   taskFn,
//   interval = 60 * 15) {
//   try {
//     if (!TaskManager.isTaskDefined(taskName)) {
//       TaskManager.defineTask(taskName, taskFn);
//     }
//     const options = {
//       minimumInterval: interval // in seconds
//     };
//     await BackgroundFetch.registerTaskAsync(taskName, options);
//   } catch (err) {
//     console.log("registerTaskAsync() failed:", err);
//   }
// } initBackgroundFetch('myTaskName', myTask, 5);



// // // Put the next lines inside the React component


// export default function App() {

//   const [state, setState] = useState(null);
//   setStateFn = setState;

//   useEffect(() => {
//     console.log(state);

//   }
//   );

//   return (<Text>{state}</Text>);



// }

// }
// export default class App extends React.Component {

//   RegisterBackgroundTask = async () => {
//     try {
//       await BackgroundFetch.registerTaskAsync(TASK_NAME, {
//         minimumInterval: 1, // seconds,
//       })
//       console.log("Task registered")
//     } catch (err) {
//       console.log("Task Register failed:", err)
//     }
//   }

//   componentDidMount() {
//     this.RegisterBackgroundTask();
//   }




  


//   render() {
//     return (
//       <View style={styles.container}>

//         {/* <Button
//           title="Send Notification"
//           onPress={() => this.sendNotificationImmediately() }
//         /> */}

//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {

//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });



