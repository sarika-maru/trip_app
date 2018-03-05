import React,{Component} from 'react';
import {View, Text,Image,TouchableOpacity} from 'react-native';
import {OnClick} from './../common';
import {responsiveFontSize,responsiveHeight,responsiveWidth} from 'react-native-responsive-dimensions';

class NumericUpDown extends Component{

    constructor(props){
        super(props)
        this.state={
            cnt:1
        }
    }

    onUpChange(){
        this.setState({cnt:this.state.cnt+1});
    }

    ondownChange(){
        this.setState({cnt:this.state.cnt-1});
    }

    render(){
        return(
            <View style={{borderWidth:1,flexDirection:'row',width:responsiveWidth(10),justifyContent:'space-between'}} >
                <Text style={{alignSelf:'center'}}>{this.state.cnt}</Text>
                <View style={{borderLeftWidth:1}}>
                    <View>
                        <OnClick onPress={this.onUpChange.bind(this)}>
                            <Image source={require('../../image/up.png')} style={{height:responsiveHeight(2),width:responsiveWidth(3)}}/>
                        </OnClick>
                    </View>
                    <View style={{borderTopWidth:1}}>
                        <OnClick onPress={this.ondownChange.bind(this)}>
                            <Image source={require('../../image/down.png')} style={{height:responsiveHeight(2),width:responsiveWidth(3)}}/>
                        </OnClick>
                    </View>
                </View>
            </View>
        )
    }
}


export {NumericUpDown};

