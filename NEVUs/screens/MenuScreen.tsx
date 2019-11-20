import React, { Component } from "react";
import {Platform, Text, View, StyleSheet} from "react-native";

export default class Example extends Component {
  render() {
    return (
      <View style = {style.container}>
      <Text style = {style.textTitle}>NEVUS</Text>
      </View>
    );
  }
}


const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#e9f1f7ff',
    alignItems: 'center',
    fontFamily:Platform.select({
      ios:'Roboto',
      android:'Roboto'
    })
  },
  textTitle:{
    fontSize: 40,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginTop:Platform.select({
      ios:90,
      android:50
    }),
    fontFamily:Platform.select({
      ios:'Roboto',
      android:'Roboto'
  })
}
})
