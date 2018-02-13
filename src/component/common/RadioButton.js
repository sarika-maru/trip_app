import React,{Component} from 'react';
import {View,Text} from 'react-native';
import RadioButton from 'react-native-simple-radio-button';

const  MyRadiobutton =({label,onPress,radio_props})=>{
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.textStyle} >
                {label}
            </Text>
            <RadioButton
                radio_props={radio_props}
                initial={0}
                onPress={onPress}
                formHorizontal={true}
                animation={false}
                style={styles.RadioButtonStyle}
            >
            </RadioButton>
        </View>
    );

}
const styles = {
        RadioButtonStyle:{
            margin:5
        },
        textStyle: {
            fontSize: 18
        },
        containerStyle:{
            flexDirection: 'row',
            justifyContent: 'space-around',
            flex:1
        }

}

export {MyRadiobutton}