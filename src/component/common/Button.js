import React from 'react';
import {Text,TouchableOpacity} from  'react-native';

const Button = ({onPress,children,style})=>{
    const {buttonStyle,textStyle}= styles;
  return(
      <TouchableOpacity style={style} onPress={onPress}>
          <Text style={textStyle}>
              {children}
          </Text>
      </TouchableOpacity>
  );
};

const styles={
    textStyle:{
      fontSize:18,
      alignSelf:'center',
      fontWeight: '600',
      color: '#ffffff',
      paddingTop:10,
      paddingBottom:10
    },
    buttonStyle:{
        flex:1,
        alignSelf:'stretch',
        backgroundColor:'#fff',
        borderRadius:5,
        borderWidth:1,
        borderColor:'#007aff',
        marginLeft:5,
        marginRight:5
    }
}
export  {Button};