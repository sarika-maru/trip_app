import React,{Component} from 'react'
import {Text,View,AsyncStorage} from 'react-native';
import axios from 'axios';
import {NavigationActions} from 'react-navigation';
import AsyncFunction from './AsyncFunction';
var token="";

class Logout extends Component{


    async deleteItem(item) {
        try {
            const value = await AsyncStorage.removeItem(item);
            return value;
        } catch (error) {
           console.log("Error"+ error);
        }
    }
    async getToken(){
        obj = new AsyncFunction();
        return token= await obj.getToken("Token");
    }

    onLogout()
    {
        this.getToken().then((token)=>{
            axios.delete(`http://localhost:8888/UserLogout?token=${token}`).then((response)=>{
                console.log("response.data"+ response.data);
                if(response.data == "success"){
                    this.deleteItem("Token");
                    temp= NavigationActions.reset({
                        index: 0,
                        actions: [
                            NavigationActions.navigate({
                                routeName: 'Main'
                            })
                        ]
                    })

                    this.props.navigation.dispatch(temp);


                }else{
                    alert("Logout Failed :"+response.data);
                }
            })
        });



    }
    render(){
        return(
            <View>
                {this.onLogout()}
            </View>
        )
    }
}

export default Logout;