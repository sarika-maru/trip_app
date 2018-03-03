import React from 'react';
import {TextInput,View ,Text} from 'react-native';
import {responsiveFontSize,responsiveHeight,responsiveWidth} from 'react-native-responsive-dimensions';
const Input=({label,onChangeText,value,placeholder,secureTextEntry,style,editable,onBlur})=>{
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
                editable={editable}
                onBlur={onBlur}
            />
        </View>
    );
}
const styles={
    labelStyle :{
        //flex:1,
        fontSize:responsiveFontSize(2),
        paddingLeft:responsiveWidth(1),
        paddingRight:responsiveWidth(1)
    },
    containerStyle:{
        height: responsiveHeight(5),
        flex:1,
        width:50,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    }
}
export {Input};