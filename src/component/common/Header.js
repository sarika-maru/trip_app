import React from 'react';
import {View,Text} from 'react-native';

const Header = (props)=>{
    return(
        <View style={Styles.ViewStyle}>
            <Text style={Styles.TextStyle}>{props.headerText}</Text>
        </View>
    );
}

 const Styles = {
    ViewStyle:{
        backgroundColor : '#64ce96',
        justifyContent: 'center',
        alignItems: 'center',
        height : 40,
        shadowColor : '#000',
        shadowOffset: {width : 0, height:2},
        shadowOpacity: 0.2,
        margin:10,


    },TextStyle:{
        fontSize:20,
         color:'#fff'
     }
 }
export {Header} ;
