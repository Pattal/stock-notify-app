
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, FlatList, StyleSheet } from 'react-native';
import { Container, Header, Content, Tab, Tabs, TabHeading } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';


import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'react-native-elements'


class Pops extends Component {

    //STORAGE_KEY = '@save_data';

    state = {
        asyncData: [],
        loading: true,
        names: [{ "id": "6", "name": "Informatyka", "value": "second" }],

    }

    componentDidUpdate() {
        this.readData();
    }

    componentDidMount() {
        this.readData();
    }

    readData = async () => {
        const STORAGE_KEY = '@save_data';
        try {
            const tempData = await AsyncStorage.getItem(STORAGE_KEY)
            const tempNames = [];

            this.setState({ asyncData: JSON.parse(tempData), loading: false });


            //this.setState({ names: tempNames });
            //console.log(this.state.names);


        } catch (e) {
            alert('Failed to fetch the data from storage')
        }
    }

    deleteData = async (item, data) => {
        const STORAGE_KEY = '@save_data';
        let tempArray = [];
        data.filter(el => !el.name.includes(item.name))
            .forEach((el, index) => tempArray.push(el));

        console.log(tempArray);

        try {

            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tempArray));
            alert('Usunięto alert');
            
        } catch (e) {
            alert('Nie udało się dodać alertu')
        }
    }



    render() {
        const { navigation } = this.props;



        return (
            <Container>
                <Tabs tabBarUnderlineStyle={{ backgroundColor: '#1DA1F2' }}>
                    <Tab heading="Powiadomienia" tabStyle={{ backgroundColor: 'white' }} textStyle={{ color: 'gray' }} activeTabStyle={{ backgroundColor: '#1DA1F2' }} activeTextStyle={{ color: 'white', fontWeight: 'normal' }}>





                    </Tab>
                    <Tab heading="Alerty" tabStyle={{ backgroundColor: 'white' }} textStyle={{ color: 'gray' }} activeTabStyle={{ backgroundColor: '#1DA1F2' }} activeTextStyle={{ color: 'white', fontWeight: 'normal' }}>


                        <FlatList
                            style={{}}
                            data={this.state.asyncData}
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
                                            onPress={() => this.deleteData(item, this.state.asyncData)}
                                        >
                                            <Ionicons name="md-trash" size={24} color="#1DA1F2" />
                                        </TouchableOpacity>
                                    </View>
                                </Card>


                            }



                        />

                        <TouchableOpacity onPress={() => {
                            navigation.navigate('Alert')
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
}


export default function (props) {
    const navigation = useNavigation();

    return <Pops {...props} navigation={navigation} />;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10
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