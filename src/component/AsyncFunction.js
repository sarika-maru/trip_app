import React,{Component} from 'react';
import {Text,View,AsyncStorage} from 'react-native';

class AsyncFunction extends Component{

     getToken=(item)=>{
        try {
            const value = AsyncStorage.getItem(item);
            console.log(value);
            return value;
        } catch (error) {
            console.log("error"+ error);
        }
    }

}

export default AsyncFunction;