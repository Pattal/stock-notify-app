import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'react-native-elements'
import { SafeAreaView, FlatList, ScrollView, Linking } from 'react-native';
import Constants from 'expo-constants';





export default function StockDetails({route, navigation}) {
  
    return (
        <SafeAreaView style={styles.container}>
    <Card>
    <ScrollView> 
      <Card.Title >{route.params.name}</Card.Title>
      <Card.Divider />
      <Text style={{ marginBottom: 10, fontWeight: 'bold' }}>
      {route.params.time.slice(0, 5)} {route.params.date.slice(0, 10)}
  </Text>
      <Text style={{ marginBottom: 10 }}>
      {route.params.title}
  </Text>
  <Card.Divider />
  
    <Text>
        
    {route.params.content.replace('\n','').trim()}
    
    </Text>
    <Card.Divider />
    <Text style={{ marginBottom: 10 }}>
    Depesza pochodzi z pełnej wersji serwisu biznes.pap.pl
  </Text>
    <Text style={{color: 'blue', marginBottom: 10}}
      onPress={() => Linking.openURL(route.params.url)}>
  {route.params.url}
</Text>

    <Button
        buttonStyle={{ borderRadius: 10, marginLeft: 0, marginRight: 0, marginBottom: 0, color: '#1DA1F2' }}
        title='WRÓC'
        onPress = {() => navigation.goBack()}/>
        
      
        </ScrollView>
    </Card>
    
    
    </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        //marginTop: Constants.statusBarHeight,

    }
});