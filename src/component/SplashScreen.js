import React,{Component} from 'react';
import {View, Image, Text,Dimensions,AsyncStorage} from 'react-native';
import AsyncFunction  from'./AsyncFunction';
import {NavigationActions} from 'react-navigation';

class SplashScreen extends Component{

    constructor(props){
        super(props)
        //AsyncStorage.clear((err)=>{console.log("error"+err)})
    }

    timeout() {
          setTimeout(()=>{
            this.check();
        }, 2000);
    }
     check(){
        AsyncStorage.getItem("token").then((token)=>{
            if(token === null){
                this.props.navigation.dispatch(NavigationActions.reset({
                    index:0,
                    actions:[
                        NavigationActions.navigate({
                            routeName : 'Main'
                        })
                    ]
                }));

            }else{
                this.props.navigation.dispatch(NavigationActions.reset({
                    index:0,
                    actions:[
                        NavigationActions.navigate({
                            routeName:'home'
                        })
                    ]
                }));
            }

         },(err)=>{
            console.log(err);
        }).catch((ex)=>{
            console.log(ex);
        });

    }
    render(){
        return(
            <View style={{height:Dimensions.get('window').height, width:Dimensions.get('window').width, backgroundColor:'#fff'}}>
                <Text style={{ fontSize:22, color: '#1a9c99',alignSelf:'center',marginTop:'50%'}}> Trip Management </Text>
            <View style={{height:'20%', width:'100%', backgroundColor:'#fff', justifyContent:'center', alignItems:'center'}}>
                <Image source={require('./../image/trip_logo.png')} style={{height:'50%', width:'50%', alignSelf:'center'}} resizeMode={'contain'}/>
                {
                    this.timeout()
                }
            </View>
            </View>
        )
    }

}

export default SplashScreen;