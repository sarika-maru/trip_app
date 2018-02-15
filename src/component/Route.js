import React from 'react';
import {Text,TouchableOpacity,Image,View} from 'react-native';
import {StackNavigator,DrawerNavigator} from 'react-navigation';
import UserRegForm from './UserRegForm';
import LoginForm from './UserLoginForm';
import TripDetails from './TripDetails';
import Home from './Home';
import Gallery from "./Gallery";
import Logout from './Logout';
import BookTrip from "./Booktrip";
import SplashScreen from "./SplashScreen";
import UpdateProfile from "./UpdateProfile";
import {responsiveWidth,responsiveHeight,responsiveFontSize} from 'react-native-responsive-dimensions';



const MenuDrawer = DrawerNavigator({
    Home : {screen : Home},
    Gallery:{screen: Gallery},
    UpdateProfile:{screen: UpdateProfile},
    Logout : {screen :Logout}

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
        splash:{ screen : SplashScreen,
            navigationOptions:{
                title: 'Trip Management'
            }
        },
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
        },BookTrip:{screen: BookTrip,
            navigationOptions:{
                title: 'Trip Details'
            }
        },UpdateProfile:{screen: UpdateProfile,
            navigationOptions:{
                title: 'Update Profile'
            }
        }
    },{
    navigationOptions :{
        initialPage:'splash',
        headerStyle:{
            backgroundColor:'#1a9c99',
            height: responsiveHeight(6),
        },headerTitleStyle:{
            color: '#fff',
            fontSize: responsiveFontSize(2),
            fontWeight:'700'
        },headerBackTitleStyle :{
            color: '#fff'
        },
        headerTintColor : '#fff'

    }
});
export default Router;