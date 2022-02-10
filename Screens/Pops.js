
import React, { Component, useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, FlatList, StyleSheet } from 'react-native';
import { Container, Header, Content, Tab, Tabs, TabHeading } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import * as BackgroundFetch from "expo-background-fetch";
import * as TaskManager from "expo-task-manager";
import axios from 'axios';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'react-native-elements';
import StockCard from '../Components/StockCard';
import { useIsFocused } from "@react-navigation/native";
import { State } from 'react-native-gesture-handler';



let setStateFn = () => {
    console.log("State not yet initialized");
};


let sendNotificationImmediately = () => {
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
      }),
    });

    Notifications.scheduleNotificationAsync({
      content: {
        title: 'Nowe powiadomienie',
        body: "Sprawdź szczegóły w aplikacji",
      },
      trigger: null,
    });
  };


let QUERY = '';
let ASYNC = [];

function myTask() {
    console.log('Start');

    if(QUERY.length > 0){
    axios.get('http://192.168.1.111:4545/query/(' + QUERY + ')').then(res => {
        //console.log(res.data);
        try {
            // fetch data here...
            //const backendData = "Simulated fetch " + Math.random();
            //console.log("myTask() ", res.data[0].title);
            if(ASYNC.length !== res.data.length){
                sendNotificationImmediately();
            } 
            setStateFn(res.data);
            return res.data
                ? BackgroundFetch.Result.NewData
                : BackgroundFetch.Result.NoData;
        } catch (err) {
            return BackgroundFetch.Result.Failed;
        }

    })
    }
}


async function initBackgroundFetch(taskName,
    taskFn,
    interval = 60 * 15) {
    try {
        if (!TaskManager.isTaskDefined(taskName)) {
            TaskManager.defineTask(taskName, taskFn);
        }
        const options = {
            minimumInterval: interval // in seconds
        };
        await BackgroundFetch.registerTaskAsync(taskName, options);
    } catch (err) {
        console.log("registerTaskAsync() failed:", err);
    }
}

initBackgroundFetch('myTaskName', myTask, 5);



export default function Pops({ route, navigation }) {

    //STORAGE_KEY = '@save_data';

    const [asyncData, setAsyncData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [state, setState] = useState([]);
    const [reload, setReload] = useState(false);
    const [query, setQuery] = useState('');

    setStateFn = setState;

    const isInitialMount = useRef(true);

    const isFocused = useIsFocused();

    useEffect(() => {readData(true)}, [isFocused]);

    useEffect(() => {
        readData();
        // axios.get('http://192.168.1.107:4545/query/' + QUERY).then(res => {
        //     console.log(res.data);
        // })
        
    }, []);

    // useEffect(() => {
    //     readData(route.params);
    // }, [loading]);




    let readData = async () => {

      
        
        const STORAGE_KEY = '@save_data';
        try {
            const tempData = await AsyncStorage.getItem(STORAGE_KEY);
            const tempNames = [];

                let query1 = '';
                tempQuery = [];
                
                // console.log(JSON.parse(tempData).length !== asyncData.length);
                 console.log('Start async2');

                 console.log('tu',tempData[0].length);
                 if(tempData.length > 2){

                 
                JSON.parse(tempData).forEach(item => {

                    if (item.value === 'first') {
                        let string = 'info.id_company = ' + item.id;
                        tempQuery.push(string)
                    }
                    else if (item.value === 'second') {
                        let string = "spolki.industry LIKE '" + item.name + "'";
                        tempQuery.push(string);
                    }
                    else if (item.value === 'third') {
                        let string = "info.type LIKE '" + item.type + "'";
                        tempQuery.push(string);
                    }
                    //console.log(tempQuery);

                    
                    query1 = tempQuery.join(' OR ');
                    console.log('query',query1);
                    QUERY = query1;
                    
                    setQuery(query);
                    

                    
                })
            }else{
                query1 = '';
                    console.log('query',query1);
                    QUERY = query1;
                    setStateFn([]);
                    console.log('ZERO!');
                    setQuery(query);
            }
                

                axios.get('http://192.168.1.111:4545/query/(' + QUERY + ')').then(res => {
                    setStateFn(res.data);
                    
                        })
                
            
            //console.log(res.data);
            setAsyncData(JSON.parse(tempData));
            ASYNC = JSON.parse(tempData);
            //console.log('state',state);
            
            if (loading) setLoading(false);




            //this.setState({ names: tempNames });
            //console.log(this.state.names);


        } catch (e) {
            alert('Failed to fetch the data from storage')
        }
    }

    let deleteData = async (item, data) => {
        console.log('USUWAM!');
        const STORAGE_KEY = '@save_data';
        let tempArray = [];
        data.filter(el => !el.name.includes(item.name))
            .forEach((el, index) => tempArray.push(el));

        console.log('temparray',tempArray);

        try {

            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tempArray));
            await readData();
            //setAsyncData(tempArray);
            alert('Usunięto alert');
            console.log('asyncdata',asyncData);
          ;
        //navigation.goBack();
            
            

        } catch (e) {
            alert('Nie udało się dodać alertu')
        }

        
        
        //console.log(state);
        //navigation.push('Pops')
        
    }








    return (
        <Container>
            <Tabs tabBarUnderlineStyle={{ backgroundColor: '#1DA1F2' }}>
                <Tab heading="Powiadomienia" tabStyle={{ backgroundColor: 'white' }} textStyle={{ color: 'gray' }} activeTabStyle={{ backgroundColor: '#1DA1F2' }} activeTextStyle={{ color: 'white', fontWeight: 'normal' }}>

                    
                    <SafeAreaView style={{ flex: 1, justifyContent: "center", paddingHorizontal: 10 }}>
                    {state.length > 0 ? 
                        <FlatList
                            style={{}}
                            data={state}
                            keyExtractor={(item, index) => index.toString()}
                            //onEndReached={() => this.loadMore()}
                            //onEndReachedThreshold={0}
                            //ListFooterComponent={this.renderFooter}
                            renderItem={({ item }) =>

                                <StockCard
                                    company={item.name}
                                    time={item.time.slice(0, 5)}
                                    date={item.date.slice(0, 10)}
                                    title={item.title}
                                    more={() => {
                                        navigation.navigate('StockDetails', item)
                                    }}

                                />
                                    

                            }



                        />: <View style={styles.container}>
                        <Text>Brak powiadomień</Text></View> }

                        {/* {this.state.loadMoreVisible == true ?


    <Button
        buttonStyle={{ borderRadius: 10, marginLeft: 0, marginRight: 0, marginBottom: 0, color: '#1DA1F2', width:'25%' }}
        title='WIĘCEJ'
        onPress={() => this.loadMore()} /> : null
} */}
                    </SafeAreaView>




                </Tab>
                <Tab heading="Alerty" tabStyle={{ backgroundColor: 'white' }} textStyle={{ color: 'gray' }} activeTabStyle={{ backgroundColor: '#1DA1F2' }} activeTextStyle={{ color: 'white', fontWeight: 'normal' }}>

                    {/* {asyncData.length > 2 ? */}
                    
                    <FlatList
                        style={{}}
                        data={asyncData}
                        keyExtractor={(item, index) => index.toString()}
                        //onEndReached={() => this.loadMore()}
                        //onEndReachedThreshold={0}
                        //ListFooterComponent={this.renderFooter}
                        renderItem={({ item }) =>

                            <Card>
                                <Card.Title >{item.name}</Card.Title>
                                <View style={styles.container}>
                                    <TouchableOpacity
                                        style={styles.countContainer}
                                        onPress={() => deleteData(item, asyncData)}
                                    >
                                        <Ionicons name="md-trash" size={24} color="#1DA1F2" />
                                    </TouchableOpacity>
                                </View>
                            </Card>


                        }



                    />
                    {/* : <Text>Brak alertów</Text>} */}

                    <TouchableOpacity onPress={() => {
                        navigation.push('Alert')
                    }}>

                        <View
                            style={{
                                flexDirection: 'row',
                                padding: 16,
                                alignItems: 'center',
                                marginLeft: 'auto',
                                marginRight: 'auto'
                            }}>



                            <Text

                                style={{
                                    color: '#1DA1F2',
                                    fontSize: 30
                                }}>+ </Text><Text style={{
                                    color: '#1DA1F2',
                                    fontSize: 20
                                }}>Dodaj alert</Text>
                        </View>
                    </TouchableOpacity>








                </Tab>
            </Tabs>
        </Container>

    );

}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10,
        alignItems: 'center'
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    },
    countContainer: {
        alignItems: "center",
        padding: 0
    }
});