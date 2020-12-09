import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'react-native-elements'
import { SafeAreaView, FlatList, ScrollView, Linking } from 'react-native';
import Constants from 'expo-constants';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

import StockCard from '../Components/StockCard';



export default function CompanyInfo({ route, navigation }) {
    const [data, setData] = useState([]);
    const [visable, setVisable] = useState(true);

    useEffect(() => {
        const url = 'http://192.168.1.107:4545/info/' + route.params.id;
        axios.get(url).
            then(res => {

                setData(res.data)
                //console.warn(res.data);
                setVisable(false);

            }).catch(err => console.warn('Błąd połączenia z serwerem'));

    }
        , []);



    return (


        <SafeAreaView style={styles.container} >

            {data.length > 0 ?
                <FlatList
                    style={{}}
                    data={data}
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



                /> : !visable ? 
                
                <View style={styles.container}>
                    <Text>Brak komunikatów</Text>
                    <Button
                        buttonStyle={{ borderRadius: 10, marginLeft: 0, marginRight: 0, marginBottom: 0, marginTop: 10, color: '#1DA1F2', padding:10 }}
                        title='POWRÓT'
                        onPress={() => navigation.goBack()} />
                        
                    </View>: <ActivityIndicator animating={visable} size="large" color="#1DA1F2" />}

        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});