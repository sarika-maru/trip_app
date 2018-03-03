import React,{Component} from 'react'
import {Text,View,AsyncStorage,Alert} from 'react-native';
import axios from 'axios';
import {NavigationActions} from 'react-navigation';
import AsyncFunction from './AsyncFunction';
import {connect} from 'react-redux';
import {logout} from './../action/userAction';

class Logout extends Component{

    onLogout()
    {
        this.props.logout();
    }
    render(){
        return(
            <View>
                {this.onLogout()}
            </View>
        )
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps);
        if(nextProps.logoutStatus == 200){
            AsyncStorage.removeItem("token").then((succes)=>{
                console.log("inside success");
                this.props.navigation.dispatch(NavigationActions.reset({
                    index:0,
                    actions:[
                        NavigationActions.navigate({
                            routeName: 'Main'
                        })
                    ]
                }));
            }).catch((err)=>{
                console.log("error inside remove token");
            });
        }else{
            Alert.alert("Error in logout : " + nextProps.logoutStatus);
        }

    }
}
const mapStateToProps=(state)=>{
    return{
        logoutStatus : state.User.logoutStatus
    }
}

export default connect(mapStateToProps,{
    logout
})(Logout);