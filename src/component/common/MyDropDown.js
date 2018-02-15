import React from 'react';
import {View,Text} from 'react-native';
import {Dropdown} from 'react-native-material-dropdown';
import {responsiveFontSize,responsiveHeight,responsiveWidth} from 'react-native-responsive-dimensions';

const MyDropDown =({label,data,onChangeText})=>{
    return(
        <View>
            <Dropdown
                label={label}
                data={data}
                onChangeText={onChangeText}

            />
        </View>
    )
}

export {MyDropDown}