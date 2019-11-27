import React, { Component } from 'react';
import { StyleSheet, View , ActivityIndicator} from 'react-native';
import colors from "../config/colors";
export default class PreLoad extends Component{
    render(){
        return(
            <View>
                <ActivityIndicator/>
            </View>
        )
    }
}

const style = StyleSheet.create({
    preLoaderView:{
        flex:1,
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:colors.DODGER_BLUE
    }
});