import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import RNPicker from "rn-modal-picker";
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [
        
      ],
      company: [],
      placeHolderText: "Please Select Country",
      selectedText: ""
    };
  }
  _selectedValue(index, item) {
    this.setState({ selectedText: item.name });
    console.log(this.props.searchBarContainerStyle);
  }


  componentDidMount() {
    let tempIndustries = []
    let tempIndustries2 = []
    let i = 0;
    
    axios.get('http://192.168.1.107:4545/company').
            then(res => {

                this.setState({company: res.data})

                this.state.company.forEach(item => {
                  if (!tempIndustries.includes(item.industry) && item.industry !== '') {
                      tempIndustries.push(item.industry);
                  }
              });

              tempIndustries.forEach(item=> {
                i++;
                tempIndustries2.push({name: item, id: i.toString()})});

              this.setState({ dataSource: tempIndustries2});
              //console.log(this.state.dataSource);


            }).catch(err => console.warn('Błąd połączenia z serwerem'));

  }

  render() {
    return (
      <View style={Styles.container}>
        <RNPicker
          dataSource={this.state.company}
          dummyDataSource={this.state.company}
          defaultValue={false}
          pickerTitle={"Country Picker"}
          showSearchBar={true}
          disablePicker={false}
          changeAnimation={"none"}
          searchBarPlaceHolder={"Search....."}
          showPickerTitle={true}
          //searchBarContainerStyle={this.props.searchBarContainerStyle}
          pickerStyle={Styles.pickerStyle}
          itemSeparatorStyle={Styles.itemSeparatorStyle}
          pickerItemTextStyle={Styles.listTextViewStyle}
          selectedLabel={this.state.selectedText}
          //placeHolderLabel={this.state.placeHolderText}
          selectLabelTextStyle={Styles.selectLabelTextStyle}
          placeHolderTextStyle={Styles.placeHolderTextStyle}
          dropDownImageStyle={Styles.dropDownImageStyle}
          //dropDownImage={require("./res/ic_drop_down.png")}
          //selectedValue={(index, item) => this._selectedValue(index, item)}
        />
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  
  itemSeparatorStyle:{
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
    elevation:3,
    paddingRight: 25,
    marginRight: 10,
    marginBottom: 2,
    shadowOpacity: 1.0,
    shadowOffset: {
      width: 1,
      height: 1
    },
    borderWidth:1,
    shadowRadius: 10,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "#d3d3d3",
    borderRadius: 5,
    flexDirection: "row"
  }
});