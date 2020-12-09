import { Text, View, StyleSheet, Container } from 'react-native';
import React, { Component } from 'react';

import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'react-native-elements';
import Constants from 'expo-constants';


export default function StockCard( props) {

  

  return (



    <Card>
      <Card.Title >{props.company}</Card.Title>
      <View style={{flex: 1,
        alignItems: 'center',
        justifyContent: 'center'}}><Text style={{ marginBottom: 5, fontWeight: 'bold' }}>
      {props.time}    {props.date}
  </Text></View>
      <Card.Divider />
      
  
      <Text style={{ marginBottom: 10 }}>
      {props.title}
  </Text>
      <Button
        buttonStyle={{ borderRadius: 10, marginLeft: 0, marginRight: 0, marginBottom: 0, color: '#1DA1F2' }}
        title='CZYTAJ'
        onPress = {props.more} />
    </Card>






  );
}