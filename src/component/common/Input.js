import React from 'react';
import {TextInput,View ,Text} from 'react-native';

const Input=({label,onChangeText,value,placeholder,secureTextEntry,style})=>{
    const {labelStyle,containerStyle} =styles;
    return(
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false}
                value={value}
                onChangeText ={onChangeText}
                style ={style}
            />
        </View>
    );
}
const styles={
    labelStyle :{
        flex:1,
        fontSize:18,
        paddingLeft:20,
        paddingRight:5
    },
    containerStyle:{
        height:40,
        flex:1,
        width:50,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    }
}
export {Input};