import React,{Component} from 'react';
import {Text,View,ScrollView,Dimensions,Image,Alert,Animated} from 'react-native';
import {CardSection,Card,Input,MyRadiobutton,Button,MyDropDown} from './common';
import {responsiveFontSize,responsiveHeight,responsiveWidth} from 'react-native-responsive-dimensions';
import {connect,bindActionCreators} from 'react-redux';
import {registration} from './../action/userAction';

class UserRegForm extends Component{

    constructor(props){
        super(props)
        this.state={
            username:'',
            password:'',
            city:''
        };

    }


    onButtonPress(){
        if(this.state.username === '' && this.state.password==='' && this.state.city===''){
            alert("Plz enter the all data");
        }else{
            this.props.registration(this.state.username,this.state.password,this.state.city).then((response)=>{
                console.log(response);

                Alert.alert("User Successfully Inserted");
            },(err)=>{
                Alert.alert("Error"+ err);
            }).catch((ex)=>{
                Alert.alert("Exception :"+ ex);
            });
        }

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
                    </Card >
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
                    <Card style={styles.cardStyle}>
                        <MyDropDown
                            label={'city'}
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

const mapStateToProps= state=>{
    return{
        addData:state.User.addData
    }
}

/*function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(add_user, dispatch),
    }
}*/


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

export default connect(mapStateToProps,{
    registration
})(UserRegForm);
