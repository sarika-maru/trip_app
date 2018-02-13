import React,{Component} from 'react';
import {View,Text,Image,Dimensions,ScrollView,ImageBackground,Alert,Linking} from 'react-native';
import {Card,CardSection,Input,Button,Link,OnClick} from "./common/index";
import axios from 'axios';

class LoginForm extends Component{

    state ={username:'Sarika', password:'1234567'};

    static navigationOptions={
        title:'Trip Management'
    }

    onButtonPress()
    {
        axios.post('http://localhost:8888/UserLoginForm',
            {   username: this.state.username,
                password:this.state.password
            },
            {
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
        ).then((response)=>{
            if(response.data == "You are succesfully login"){
                this.props.navigation.navigate('home');
            }else{
                alert(response.data);
            }
        })
    }

    onGmailPress()
    {
        Linking.openURL('http://localhost:8888/auth/google');
    }

    onGithubPress()
    {
        Linking.openURL('http://localhost:8888/auth/github');
    }



    render(){

    return(
        <ScrollView>
        <View style={{backgroundColor : '#64ce96',height:Dimensions.get('window').height, width:Dimensions.get('window').width}}>
            <View style={styles.ViewStyle}>
                <Image source={require("../image/trip_logo.png")} style={{width:'100%'}} resizeMode={'contain'} />
            </View>
            <View>
                <Text style={styles.headerStyle}>Trip Management</Text>
            </View>
            <View>
                <Text style={styles.textStyle}>Login if you have an account</Text>
            </View>
            <Card style={styles.cardStyle}>
                <CardSection style={styles.cardSectionStyle}>
                    <Input
                        label={'Email'}
                        placeholder={'user@gmail.com'}
                        style={styles.inputStyle}
                        value={this.state.username}
                        onChangeText ={username=>this.setState({username})}
                    />
                </CardSection>
            </Card>
            <Card style={styles.cardStyle}>
                <CardSection style={styles.cardSectionStyle}>
                    <Input
                        secureTextEntry
                        label={'Password'}
                        placeholder={'password'}
                        style={styles.inputStyle}
                        value={this.state.password}
                        onChangeText={password=>this.setState({password})}
                    />
                </CardSection>
            </Card>
            <View>
                <Link
                    style={styles.textStyle}
                    onPress={() =>this.props.navigation.navigate('reg')}>
                    Register Now | Forgot Password?
                </Link>
            </View>
            <Button style={styles.buttonStyle} onPress={this.onButtonPress.bind(this)}>Sign In</Button>
            <View>
                <Text style={styles.textStyle} >Or you can login with</Text>
            </View>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', marginLeft:50, marginRight:20, marginTop:20, marginBottom:20}}>
                <Image source={require('../image/facebook.png')} style={{height:30, width:30,marginRight:15}}/>
                <OnClick onPress={this.onGmailPress.bind(this)}>
                    <Image source={require('../image/gmail.png')} style={{height:30, width:30, marginRight:15}}/>
                </OnClick>
                <Image source={require('../image/twitter.png')} style={{height:30, width:30, marginRight:15}}/>
                <OnClick onPress={this.onGithubPress.bind(this)}>
                    <Image source={require('../image/github-sign.png')} style={{height:30, width:30, marginRight:15}}/>
                </OnClick>
            </View>
        </View>
        </ScrollView>
    )
    }

}

const styles={
    ViewStyle:{
        justifyContent: 'center',
        alignItems:'stretch',
        width:'100%',
        height:'20%',

    },

    headerStyle:{
        fontSize:22,
        justifyContent:'center',
        alignSelf:'center',
        color:'#ffffff',
        fontWeight:'700',
        marginTop:20
    },

    textStyle:{
        fontSize:16,
        marginTop:10,
        alignSelf:'center',
        color:'#1a9c99'
    },

    inputStyle:{
        color : '#000',
        paddingRight:5,
        paddingLeft:5,
        fontSize:18,
        lineHeight:23,
        flex:2,
        height:20,
        width:10
    },

    cardStyle:{
        borderWidth:1,
        borderRadius:2,
        borderColor : '#ddd',
        borderBottomWidth:0,
        shadowColor: '#000',
        shadowOffset:{width:0, height:2},
        shadowOpacity:0.1,
        shadowRadius:2,
        elevation:1,
        marginRight:5,
        marginLeft:5,
        marginTop:10,
        width:"75%",
        alignSelf: 'center'
    },
    cardSectionStyle:{
        borderBottomWidth:1,
        padding : 5,
        backgroundColor:'#fff',
        justifyContent: 'center',
        alignSelf:'center',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    },buttonStyle:{
        alignSelf:'center',
        backgroundColor:'#fff',
        borderRadius:5,
        borderWidth:1,
        backgroundColor:'#1a9c99',
        margin:12,
        width:'75%'
    }
}

export default LoginForm;