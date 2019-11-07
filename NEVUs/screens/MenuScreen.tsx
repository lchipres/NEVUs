import React, { Component } from "react";
import {Platform, Text, View, StyleSheet} from "react-native";

export default class Example extends Component {
  render() {
    return (
      <View style = {style.container}>
      <Text>Hoes mad as fuck boi</Text>
      </View>
    );
  }
}


const style = StyleSheet.create({
  container:{
    flex:1,
    width:null,
    height:null,
    backgroundColor: '#e9f1f7ff',
    alignItems: 'center',
    marginTop:Platform.select({
      ios:90,
      android:50
    }),
  }
})
