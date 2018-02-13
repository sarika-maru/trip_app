import React,{} from 'react';
import {View, TouchableHighlight} from 'react-native';

const OnClick = ({onPress,children})=>{
    return(
        <View>
            <TouchableHighlight onPress={onPress}>
                {children}
            </TouchableHighlight>
        </View>
    )
}

export {OnClick}