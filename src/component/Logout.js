import React,{Component} from 'react'
import {Text,View,AsyncStorage} from 'react-native';
import axios from 'axios';
import {NavigationActions} from 'react-navigation';


class Logout extends Component{


    async deleteItem(item) {
        try {
            const value = await AsyncStorage.removeItem(item);
            console.log(value);
            return value;
        } catch (error) {
           console.log("Error"+ error);
        }
    }

    onLogout()
    {
        axios.delete('http://localhost:8888/UserLogout/token').then((response)=>{

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
    }
    render(){
        return(
            <View>
                {
                    this.onLogout()
                }
            </View>
        )
    }
}

export default Logout;