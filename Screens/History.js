import React, { Component } from "react";
import { SearchBar } from 'react-native-elements';
import { Text, ActivityIndicator, View, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';




class History extends Component {
  state = {
    data: [],
    loading: false,
    search: '',
    displayData: []
  };

  updateSearch = (search) => {
    this.setState({ search });
    this.filterItems(search);
  };

  filterItems = (search) => {
    let tempArray = [];

    if(search.length > 1){
      //console.log(search.toLowerCase().trim());
      this.state.data.filter(item => item.shortname.toLowerCase().includes(search.toLowerCase().trim()))
      .forEach((item, index) => tempArray.push(item));
    }

    this.setState({ displayData: tempArray });
    


  }

  fetchData = () => {
    this.setState({ loading: true });
    axios.get('http://192.168.1.111:4545/company').
      then(res => {

        this.setState({ data: res.data });

        //console.log(this.state.data[0]);
        this.setState({ loading: false });
      })


  }


  renderFooter = () => {
    if (!this.state.loading) return null

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: '#CED0CE'
        }}>
        <ActivityIndicator size="large" color="#1DA1F2" />
      </View>
    )
  }

  componentDidMount() {
    this.fetchData();

    //this.setState({loadMoreVisible: true}, this.setNewData);

  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '5%'
        }}
      />
    )
  }

  dataToList = (id) => {
      const url = 'http://192.168.1.111:4545/info/' + id;
      axios.get(url).
        then(res => {
  
          
          navigation.navigate('CompanyInfo', item)
          console.log(res);
          
        })
  
    }

  render() {

    const { navigation } = this.props;
    return (
      
      <SafeAreaView>
        <SearchBar
        
          round
          searchIcon={{ size: 24 }}
          //inputStyle={{backgroundColor: 'white', borderWidth: 1, borderRadius: 5, }}
          //containerStyle={{backgroundColor: 'white', borderWidth: 1, borderRadius: 5, }}
          //inputContainerStyle={{backgroundColor: 'white', borderWidth: 1, borderRadius: 5, }}
          platform="android"
          //placeholderTextColor={'#g5g5g5'}
             placeholder="e.g. CD Projekt (CDR)"
             onChangeText={this.updateSearch}
             value={this.state.search}   
             
           />
      <FlatList
      style={{backgroundColor: 'white'}}
      keyboardShouldPersistTaps='always'
        data={this.state.displayData}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => {
            navigation.navigate('CompanyInfo', item)
        }}>
            <View
              style={{
                flexDirection: 'row',
                padding: 16,
                alignItems: 'center'
              }}>
              
              <Text
                
                style={{
                  color: '#000',
                }}>{`${item.name} (${item.ticker})`}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={this.renderSeparator}
        ListFooterComponent={this.renderFooter}
        
      />
</SafeAreaView>
    )
  }




}
export default function (props) {
  const navigation = useNavigation();

  return <History {...props} navigation={navigation} />;
}

