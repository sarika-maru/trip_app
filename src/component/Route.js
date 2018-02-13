import React from 'react';
import {Text,TouchableOpacity,Image,View} from 'react-native';
import {StackNavigator,DrawerNavigator} from 'react-navigation';
import UserRegForm from './UserRegForm';
import LoginForm from './UserLoginForm';
import TripDetails from './TripDetails';
import Home from './Home';
import Gallery from "./Gallery";



const MenuDrawer = DrawerNavigator({
    Home : {screen : Home},
    Gallery:{screen: Gallery}
},{
    navigationOptions:({navigation})=>({
        headerLeft : <View>
            <TouchableOpacity onPress={()=> navigation.navigate("DrawerOpen")}>
                <Image source={require('./../image/menu1.png')} style={{height:40, width:30}} />
            </TouchableOpacity>
        </View>
    })
})

const Router = StackNavigator({
        Main : { screen: LoginForm,
            navigationOptions:{
                title: 'Trip Management'
            }
        },
        reg: { screen:  UserRegForm,
            navigationOptions:{
                title: 'Trip Management'
            }},
        home:{screen : MenuDrawer,
            navigationOptions:{
                title: 'Home'
            }
        },TripDetails:{screen : TripDetails,
            navigationOptions:{
            title: 'Trip Details'
            }
        }
    },{
    navigationOptions :{

        headerStyle:{
            backgroundColor:'#1a9c99',
        },headerTitleStyle:{
            color: '#fff'
        },headerBackTitleStyle :{
            color: '#fff'
        },
        headerTintColor : '#fff'

    }
});
export default Router;