import React ,{Component} from 'react';
import {View,Text,ScrollView,Image,Dimensions} from 'react-native';
import {CardSection,Card,Input,MyRadiobutton,Button,MyDropDown} from './common';
import {responsiveHeight,responsiveWidth,responsiveFontSize} from 'react-native-responsive-dimensions';
import AsyncFunction from './AsyncFunction';
import axios from 'axios';

class UpdateProfile extends Component{
    state={username:'',password:'',city:'', loading:false, user:''};

    async onButtonPress(){
        obj = new AsyncFunction();
        token= await obj.getToken("Token");

       axios.patch(`http://localhost:8888/UpdateProfile/${token}`,{
               city: this.state.city
           },{headers:{
               'Accept': 'application/json',
               'Content-Type': 'application/json',
           }}
       ).then((response)=> {
           console.log(response.data);
           if(response.data == "1"){
               alert("Successfully Updated");
           }else{
               alert(response.data);
           }

       }).catch((err)=>{
           console.log("error in catch"+ err);
       });

   }

    async getUserProfile(){
        obj = new AsyncFunction();
        token= await obj.getToken("Token");

        var promise = await new Promise((resolve, reject)=>{
            axios.get(`http://localhost:8888/GetUserByToken/${token}`).then((response)=>{
                console.log("trips"+response.data);
                resolve(response.data);
            },(err)=>{
                reject("Error"+err);
            }).catch((ex)=>{
                reject("Exception"+ex)
            })
        })
        return promise

    }

    async componentDidMount(){
        this.setState({loading:true});
        await this.getUserProfile().then((data)=>{
            console.log("data"+data);
            this.setState({user :data, loading:false});
            console.log(this.state.user);
        },(err)=>{
            alert("error"+ err);
        }).catch((ex)=>{
            alert("Exception"+ ex);
        })
    }

    render(){
        return(
            <ScrollView>
                <View style={{backgroundColor : '#64ce96',height:Dimensions.get('window').height, width:Dimensions.get('window').width}}>
                    <View>
                        <Text style={styles.headerStyle}>Update Profile</Text>
                    </View>
                    <Card style={styles.cardStyle}>
                        <CardSection style={styles.cardSectionStyle}>
                            <Input
                                label={'Email'}
                                placeholder={'user@gmail.com'}
                                style={styles.inputStyle}
                                value={this.state.user.username}
                                onChangeText={username=>this.setState({username})}
                                editable={false}
                            />
                        </CardSection>
                    </Card>
                    <Card style={styles.cardStyle}>
                        <MyDropDown
                            label={this.state.user.city}
                            data={[
                                {value:"surat"},
                                {value:"Baroda"}
                            ]}
                            onChangeText={(value)=>{this.setState({city : value})}}
                        />
                    </Card>
                    <View>
                        <Button onPress={this.onButtonPress.bind(this)} style={styles.buttonStyle}>Update</Button>
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
        width:responsiveWidth(100),
        height:responsiveHeight(20),

    },

    headerStyle:{
        fontSize:responsiveFontSize(2.6),
        justifyContent:'center',
        alignSelf:'center',
        color:'#ffffff',
        fontWeight:'700',
        marginTop: responsiveHeight(3)
    },

    textStyle:{
        fontSize:responsiveFontSize(2),
        marginTop:responsiveHeight(2),
        alignSelf:'center',
        color:'#1a9c99'
    },

    inputStyle:{
        color : '#000',
        margin: responsiveHeight(1),
        fontSize:responsiveFontSize(2),
        lineHeight:responsiveHeight(20),
        flex:2,
        width:responsiveWidth(5)
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
        marginTop:responsiveHeight(2),
        width:responsiveWidth(75),
        alignSelf: 'center',
        backgroundColor:'#fff'
    },
    cardSectionStyle:{
        borderBottomWidth:1,
        padding : 5,
        height: responsiveHeight(6.5),
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
        width:responsiveWidth(75),
        height: responsiveHeight(6)
    }, imageStyle:{
        height:responsiveHeight(8),
        width:responsiveWidth(8),
        marginRight:responsiveWidth(3.5)
    }
}

export default UpdateProfile;