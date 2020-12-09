import React, { Component } from "react";

import axios from 'axios';
import {
    View,
    Text,
    StyleSheet,
    Button,
    ActivityIndicator,
    TouchableOpacity

} from "react-native";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'
import Constants from 'expo-constants';
import { SafeAreaView, FlatList } from 'react-native';
import StockCard from '../Components/StockCard';
import { Ionicons } from '@expo/vector-icons';

class Home extends Component {


    state = {
        data: [],
        displayData: [],
        perPage: 5,
        page: 1,
        loadMoreVisible: true,
        visable: true

    }

    fetchData = () => {
        axios.get('http://192.168.1.107:4545/users').
            then(res => {

                this.setState({ data: res.data, visable: false });

                this.setNewData();

            })


    }



    componentDidMount() {
        this.fetchData();
        //this.setState({loadMoreVisible: true}, this.setNewData);

    }


    setNewData() {

        //console.log(this.state.data.length);

        let tempArray = []
        if (this.state.data.length > this.state.displayData.length) {
            for (let i = 0; i < this.state.perPage; i++) {
                if (i + 1 > this.state.data.length) {
                    this.setState({
                        loadMoreVisible: false,
                    })
                    break;
                }
                //console.log(i);
                tempArray.push(this.state.data[i]);

            }
            //console.log(tempArray);
            this.setState({
                displayData: tempArray,



            })
        } else {
            this.setState({
                loadMoreVisible: false,
            })
        }
    }








    loadMore() {
        this.setState({
            perPage: this.state.perPage + 5
        }, () => {
            this.setNewData()
        })
        //console.log(this.state.perPage);
    }

    renderFooter = () => {
        return (
            this.state.loadMoreVisible ?
                <View>
                    {/* <Button
                        buttonStyle={{ borderRadius: 10, marginLeft: 0, marginRight: 0, marginBottom: 0, color: '#1DA1F2', width:'25%' }}
                        title='WIĘCEJ'
                        onPress={() => this.loadMore()} /> */}
                    <View style={styles.container}>
                        <TouchableOpacity
                            style={styles.countContainer}
                            onPress={() => this.loadMore()}
                        >
                            <Ionicons name="ios-arrow-down" size={24} color="#1DA1F2" />
                        </TouchableOpacity>
                    </View>
                </View> : null

        );


    }

    render() {
        const { navigation } = this.props;
        return (




            <SafeAreaView style={{flex: 1,justifyContent: "center",paddingHorizontal: 10}}>

                {!this.visable ? <FlatList
                    style={{}}
                    data={this.state.displayData}
                    keyExtractor={(item, index) => index.toString()}
                    //onEndReached={() => this.loadMore()}
                    //onEndReachedThreshold={0}
                    ListFooterComponent={this.renderFooter}
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



                /> : <View ><ActivityIndicator animating={this.visable} size="large" color="#1DA1F2" /></View>}

                {/* {this.state.loadMoreVisible == true ?


                    <Button
                        buttonStyle={{ borderRadius: 10, marginLeft: 0, marginRight: 0, marginBottom: 0, color: '#1DA1F2', width:'25%' }}
                        title='WIĘCEJ'
                        onPress={() => this.loadMore()} /> : null
                } */}
            </SafeAreaView>






        );
    }
}

export default function (props) {
    const navigation = useNavigation();

    return <Home {...props} navigation={navigation} />;
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
        padding: 10
    }
});


// const renderButton = (visable) => {

//     if (visable) {
//         return (
//             <Button
//                 buttonStyle={{ borderRadius: 10, marginLeft: 0, marginRight: 0, marginBottom: 0, color: '#1DA1F2', width: '25%' }}
//                 title='WIĘCEJ'
//                 onPress={() => this.loadMore()} />
//         );
//     } else {
//         return null;
//     }

// };

