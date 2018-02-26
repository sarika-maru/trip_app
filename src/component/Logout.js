import React,{Component} from 'react'
import {Text,View,AsyncStorage,Alert} from 'react-native';
import axios from 'axios';
import {NavigationActions} from 'react-navigation';
import AsyncFunction from './AsyncFunction';
import {connect} from 'react-redux';
import {logout} from './../action/userAction';

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
        this.props.logout().then((response)=>{
            AsyncStorage.removeItem("token").then((succes)=>{
                this.props.navigation.dispatch(NavigationActions.reset({
                    index:0,
                    actions:[
                        NavigationActions.navigate({
                            routeName: 'Main'
                        })
                    ]
                }));
            },(err)=>{
                console.log("Error in getting token"+ err);
            }).catch((ex)=>{
                console.log("Exception in getting token"+ ex);
            })

        },(err)=>{
            Alert.alert("Failed to logout"+ err);
        }).catch((ex)=>{
            Alert.alert("Exception :"+ ex);
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
const mapStateToProps=(state)=>{
    return{
        logoutData : state.User.logoutData
    }
}

export default connect(mapStateToProps,{
    logout
})(Logout);