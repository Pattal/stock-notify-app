import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'react-native-elements'
import { SafeAreaView, FlatList, ScrollView, Linking, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';
import { SearchBar } from 'react-native-elements';
import RNPicker from "rn-modal-picker";

import AsyncStorage from '@react-native-community/async-storage'







export default function Alert({ route, navigation }) {

    const [value, setValue] = React.useState('first');
    const [company, setCompany] = React.useState([]);
    const [visable, setVisable] = React.useState(true);
    const [industry, setIndustry] = React.useState([]);
    const [search, setSearch] = React.useState('');
    const [displayData, setDisplayData] = React.useState([]);
    const [selectedItem, setItem] = React.useState([]);

    const STORAGE_KEY = '@save_data';
    const [asyncData, setAsyncData] = useState([]);


    const saveData = async (asyncData, selectedItem) => {
        let tempData = []
        if(asyncData === null){
            tempData = [selectedItem];
        }else{
            tempData = [...asyncData, selectedItem];
        }
        
        console.log(JSON.stringify(tempData));
        try {

            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tempData));
            alert('Dodano alert');
            setAsyncData(tempData)
        } catch (e) {
            alert('Nie udało się dodać alertu')
        }


        //console.log(asyncData)
        navigation.goBack()
    }

    const readData = async () => {
        try {
            const tempData = await AsyncStorage.getItem(STORAGE_KEY)

            setAsyncData(JSON.parse(tempData));
            console.log(tempData);
        } catch (e) {
            alert('Failed to fetch the data from storage')
        }
    }

    const readDatav2 = async () => {
        try {
            const tempData = await AsyncStorage.getItem(STORAGE_KEY)

            //setAsyncData(JSON.parse(tempData));
            console.log(tempData);
        } catch (e) {
            alert('Failed to fetch the data from storage')
        }
    }

    const clearStorage = async () => {
                try {
                    await AsyncStorage.clear()
                    alert('Storage successfully cleared!')
                } catch (e) {
                    alert('Failed to clear the async storage.')
                }
            }

    useEffect(() => {

        readData();
        axios.get('http://192.168.1.107:4545/company').
            then(res => {

                setCompany(res.data)


                // company.forEach(item => {
                //     if (!tempIndustries.includes(item.industry) && item.industry !== '') {
                //         tempIndustries.push(item.industry);
                //     }
                // });

                // tempIndustries.forEach(item => {
                //     i++;
                //     tempIndustries2.push({ name: item, id: i.toString() })
                // });
                // console.log(tempIndustries2);
                // setIndustry(tempIndustries2);
                // console.log(industry);

                setIndustry([
                    {
                        "id": "1",
                        "name": "Energia",
                    },
                    {
                        "id": "2",
                        "name": "Gry video",
                    },
                    {
                        "id": "3",
                        "name": "Nieruchomości",
                    },
                    {
                        "id": "4",
                        "name": "Media",
                    },
                    {
                        "id": "5",
                        "name": "Odzież i kosmetyki",
                    },
                    {
                        "id": "6",
                        "name": "Informatyka",
                    },
                    {
                        "id": "7",
                        "name": "Sieci handlowe",
                    },
                    {
                        "id": "8",
                        "name": "Handel hurtowy",
                    },
                    {
                        "id": "9",
                        "name": "Usługi dla przedsiębiorstw",
                    },
                    {
                        "id": "10",
                        "name": "Finanse pozostałe",
                    },
                    {
                        "id": "11",
                        "name": "Motoryzacja",
                    },
                    {
                        "id": "12",
                        "name": "Budownictwo",
                    },
                    {
                        "id": "13",
                        "name": "Ochrona zdrowia",
                    },
                    {
                        "id": "14",
                        "name": "Produkcja żywności",
                    },
                    {
                        "id": "15",
                        "name": "Zaopatrzenie przedsiębiorstw",
                    },
                    {
                        "id": "16",
                        "name": "Telekomunikacja",
                    },
                    {
                        "id": "17",
                        "name": "Wyposażenie domu",
                    },
                    {
                        "id": "18",
                        "name": "Handel internetowy",
                    },
                    {
                        "id": "19",
                        "name": "Banki",
                    },
                    {
                        "id": "20",
                        "name": "Rynek kapitałowy",
                    },
                    {
                        "id": "21",
                        "name": "Hutnictwo",
                    },
                    {
                        "id": "22",
                        "name": "Rekreacja i wypoczynek",
                    },
                    {
                        "id": "23",
                        "name": "Elektromaszynowy",
                    },
                    {
                        "id": "24",
                        "name": "Dystrybucja ciepła i wody",
                    },
                    {
                        "id": "25",
                        "name": "Drewno i papier",
                    },
                    {
                        "id": "26",
                        "name": "Transport",
                    },
                    {
                        "id": "27",
                        "name": "Recykling",
                    },
                    {
                        "id": "28",
                        "name": "Ubezpieczenia",
                    },
                    {
                        "id": "29",
                        "name": "Nowe technologie",
                    },
                    {
                        "id": "30",
                        "name": "Biotechnologia",
                    },
                    {
                        "id": "31",
                        "name": "Chemia",
                    },
                    {
                        "id": "32",
                        "name": "Górnictwo",
                    },
                    {
                        "id": "33",
                        "name": "Paliwa",
                    },
                    {
                        "id": "34",
                        "name": "Tworzywa i guma",
                    },
                    {
                        "id": "35",
                        "name": "Pozostały handel i usługi",
                    },
                    {
                        "id": "36",
                        "name": "Inne dobra konsumpcyjne",
                    },
                ])
                setVisable(false);
            }).catch(err => console.warn('Błąd połączenia z serwerem'));



    }
        , []);


    const RadioChanger = (value, search) => {


        const updateSearch = (item) => {
            setSearch(item.name)

            item['value'] = value;
            console.log(item);
            //let tempItem = [{ id: value }, item];

            setItem(item);


            //setAsyncData(tempItem);


            //filterItems(search);
        };

        // const filterItems = (search) => {
        //     let tempArray = [];

        //     if (search.length > 1) {
        //         //console.log(search.toLowerCase().trim());
        //         dataArray.filter(item => {
        //             if (value === 'first') return (item.shortname.toLowerCase().includes(search.toLowerCase().trim()));
        //             else if (value === 'second') return (item.toLowerCase().includes(search.toLowerCase().trim()));
        //         })
        //             .forEach((item, index) => {
        //                 if (value === 'first') return (tempArray.push(item))
        //                 else if (value === 'second') return (tempArray.push(item))


        //             });
        //     }


        //     setDisplayData(tempArray);
        //     console.log(displayData)

        // }

        return (
            <SafeAreaView>
                {/* <SearchBar

                    round
                    searchIcon={{ size: 24 }}
                    //inputStyle={{backgroundColor: 'white', borderWidth: 1, borderRadius: 5, }}
                    //containerStyle={{backgroundColor: 'white', borderWidth: 1, borderRadius: 5, }}
                    //inputContainerStyle={{backgroundColor: 'white', borderWidth: 1, borderRadius: 5, }}
                    platform="android"
                    //placeholderTextColor={'#g5g5g5'}
                    placeholder="e.g. CD Projekt (CDR)"
                    onChangeText={updateSearch}
                    value={search}

                />
                <FlatList
                style={{ backgroundColor: 'white' }}
                keyboardShouldPersistTaps='always'
                data={displayData}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => {
                        //navigation.navigate('CompanyInfo', item)
                    }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                padding: 16,
                                alignItems: 'center'
                            }}>

                        <Text>{value === 'first' ? item.company : item}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={item => { 
                    
                    if (value === 'first') return(item.id.toString())
                    else if (value === 'second') return(item.toString())

                    }}
                //ItemSeparatorComponent={this.renderSeparator}
                //ListFooterComponent={this.renderFooter}

            /> */}

                <View>
                    <RNPicker
                        dataSource={value === 'first' ? company : industry}
                        dummyDataSource={value === 'first' ? company : industry}
                        defaultValue={false}
                        pickerTitle={value === 'first' ? 'Wybierz spólkę' : 'Wybierz branżę'}
                        showSearchBar={true}
                        disablePicker={false}
                        changeAnimation={"none"}
                        searchBarPlaceHolder={"Wyszukaj....."}
                        showPickerTitle={true}
                        //searchBarContainerStyle={this.props.searchBarContainerStyle}
                        pickerStyle={styles.pickerStyle}
                        itemSeparatorStyle={styles.itemSeparatorStyle}
                        pickerItemTextStyle={styles.listTextViewStyle}
                        selectedLabel={search}
                        placeHolderLabel={value === 'first' ? 'Wybierz spólkę' : 'Wybierz branżę'}
                        selectLabelTextStyle={styles.selectLabelTextStyle}
                        placeHolderTextStyle={styles.placeHolderTextStyle}
                        dropDownImageStyle={styles.dropDownImageStyle}
                        //dropDownImage={require("./res/ic_drop_down.png")}
                        selectedValue={(index, item) => updateSearch(item)}
                    />
                </View>

                <Button
                    buttonStyle={{ borderRadius: 10, marginLeft: 'auto', marginRight: 'auto', marginTop: 15, color: '#1DA1F2', width: '75%' }}
                    disabled={!search}
                    title='DODAJ ALERT'
                    onPress={() => saveData(asyncData, selectedItem)}
                />
                <Button
                    buttonStyle={{ borderRadius: 10, marginLeft: 'auto', marginRight: 'auto', marginTop: 15, color: '#1DA1F2', width: '75%' }}

                    title='DODAJ'
                    onPress={() => clearStorage()}
                />
            </SafeAreaView>
        )
    }
    return (

        <SafeAreaView >
            {visable ? <SafeAreaView><ActivityIndicator animating={visable} size="large" color="#1DA1F2" /></SafeAreaView> :


                <Card>
                    <Card.Title >Stwórz nowy alert</Card.Title>

                    <Card.Divider />
                    <RadioButton.Group onValueChange={newValue => {
                        setSearch('')
                        return (setValue(newValue));
                    }} value={value}>
                        <View style={styles.view}>

                            <RadioButton value="first" color="#1DA1F2" />
                            <Text>Spółka</Text>
                        </View>
                        <View style={styles.view}>

                            <RadioButton value="second" color="#1DA1F2"> </RadioButton>
                            <Text>Branża</Text>
                        </View>

                        <View style={styles.view}>

                            <RadioButton value="third" color="#1DA1F2"> </RadioButton>
                            <Text>Typ komunikatu</Text>
                        </View>
                    </RadioButton.Group>
                    <Card.Divider />

                    {RadioChanger(value, search)}

                </Card>
            }



        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    view: {

        flexDirection: 'row',
        padding: 7,
        alignItems: 'center',
        margin: 'auto'

    },
    itemSeparatorStyle: {
        height: 1,
        width: "90%",
        alignSelf: "center",
        backgroundColor: "#D3D3D3"
    },
    searchBarContainerStyle: {
        marginBottom: 10,
        flexDirection: "row",
        height: 40,
        shadowOpacity: 1.0,
        shadowRadius: 5,
        shadowOffset: {
            width: 1,
            height: 1
        },
        backgroundColor: "rgba(255,255,255,1)",
        shadowColor: "#d3d3d3",
        borderRadius: 10,
        elevation: 3,
        marginLeft: 10,
        marginRight: 10
    },

    selectLabelTextStyle: {
        color: "#000",
        textAlign: "left",
        width: "99%",
        padding: 10,
        flexDirection: "row"
    },
    placeHolderTextStyle: {
        color: "#D3D3D3",
        padding: 10,
        textAlign: "left",
        width: "99%",
        flexDirection: "row"
    },
    dropDownImageStyle: {
        marginLeft: 10,
        width: 10,
        height: 10,
        alignSelf: "center"
    },
    listTextViewStyle: {
        color: "#000",
        marginVertical: 10,
        flex: 0.9,
        marginLeft: 20,
        marginHorizontal: 10,
        textAlign: "left"
    },
    pickerStyle: {
        marginLeft: 18,
        elevation: 3,
        paddingRight: 25,
        marginRight: 10,
        marginBottom: 2,
        shadowOpacity: 1.0,
        shadowOffset: {
            width: 1,
            height: 1
        },
        borderWidth: 1,
        shadowRadius: 10,
        backgroundColor: "rgba(255,255,255,1)",
        shadowColor: "#d3d3d3",
        borderRadius: 5,
        flexDirection: "row"
    }
});