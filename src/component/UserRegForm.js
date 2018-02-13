import React,{Component} from 'react';
import {Text,View,ScrollView,Dimensions,Image,Alert} from 'react-native';
import {CardSection,Card,Input,MyRadiobutton,Button,MyDropDown} from './common';
import axios from 'axios';


class UserRegForm extends Component{

    state={username:'',password:'',city:''};

    static navigationOptions={
        title:'Trip Management'
    }

    onButtonPress(){
        console.log("inside button press"+this.state.password);
        console.log("inside button press"+this.state.username);
        axios.post('http://localhost:8888/UserRegForm',{
                username: this.state.username,
                password: this.state.password,
                city: this.state.city
            },{headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }}
        ).then((response)=> {
            console.log(response.data);
            if(response.data == "Successfully Inserted"){
                this.props.navigation.navigate("Main");
            }else{
                alert(response.data);
            }

        }).catch((err)=>{
            console.log("error in catch"+ err);
        });

    }
    render(){
        return(
            <ScrollView>
                <View style={{backgroundColor : '#64ce96',height:Dimensions.get('window').height, width:Dimensions.get('window').width}}>
                    <View style={styles.ViewStyle}>
                        <Image source={require("../image/trip_logo.png")} style={{width:'100%',alignSelf: 'stretch'}} resizeMode={'contain'} />
                    </View>
                    <View>
                        <Text style={styles.headerStyle}>Trip Management</Text>
                    </View>
                    <Card style={styles.cardStyle}>
                        <CardSection style={styles.cardSectionStyle}>
                            <Input
                                label={'Email'}
                                placeholder={'user@gmail.com'}
                                style={styles.inputStyle}
                                value={this.state.username}
                                onChangeText={username=>this.setState({username})}
                            />
                        </CardSection>

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

                        <MyDropDown
                            label={"City"}
                            data={[
                                {value:"surat"},
                                {value:"Baroda"}
                            ]}
                            onChangeText={(value)=>{this.setState({city : value})}}
                        />

                    </Card>
                    <View>
                        <Button onPress={this.onButtonPress.bind(this)} style={styles.buttonStyle}>Register</Button>
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
        height:'36%',
        margin: 3
    },

    headerStyle:{
        fontSize:22,
        justifyContent:'center',
        alignSelf:'center',
        color:'#ffffff',
        fontWeight:'700'
    },

    textStyle:{
        fontSize:16,
        marginTop:5,
        alignSelf:'center',
        marginBottom:5,
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
        borderRadius:5,
        borderWidth:1,
        backgroundColor:'#1a9c99',
        margin:12,
        width:'75%'
    }
}
export default UserRegForm;