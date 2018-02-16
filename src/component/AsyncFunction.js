import React,{Component} from 'react';
import {Text,View,AsyncStorage} from 'react-native';

class AsyncFunction extends Component{

      getToken=(item)=>{
        try {
            const value = AsyncStorage.getItem("Token");
            console.log("Async function"+ value)
            return value;

        } catch (error) {
            console.log("error"+ error);
        }
    }

}

export default AsyncFunction;