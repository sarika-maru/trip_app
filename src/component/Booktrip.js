import React,{Component} from 'react';
import {Text,View,TouchableOpacity,Image,Alert,TochableOpacity} from 'react-native';
import {responsiveFontSize,responsiveHeight,responsiveWidth} from 'react-native-responsive-dimensions';
import {CardSection,Card,Input,Header,MyRadiobutton,Button,MyDropDown,NumericUpDown} from './common';
var per=[];
var child=[];
class Booktrip extends Component{

    constructor(props){
        super(props);

        this.state={
            perName:[],
            childName:[],
            cname:'',
            pname:''
        }


    }
    data=this.props.navigation.state.params.data;



    onBlurText(i){

            if(!this.state.perName[i]){
                console.log('In Inner if');
                this.state.perName.push(this.state.name);
            }else{
                console.log('In Inner else');
                this.state.perName[i]=this.state.name;
            }

    }

    generatePersonBox(){
            for(var i = 0 ; i < this.data.persons ; i++) {
                  per.push(
                      <Card style={styles.cardStyle} key={i}>
                          <CardSection style={styles.cardSectionStyle}>
                              <Input
                                  label={i+1 + "."}
                                  placeholder={'Your Name'}
                                  style={styles.inputStyle}
                                  value={this.state.perName[i]}
                                  onChangeText={(perName)=>this.setState({pname:perName})}
                                  onBlur={this.onBlurText.bind(this,i)}
                              />
                              <NumericUpDown />
                          </CardSection>
                      </Card>
                    )
            }
            return per;
    }
    generateChildBox(){
        for(var i = 0 ; i < this.data.childrens ; i++) {
            child.push(
                <Card style={styles.cardStyle} key={i}>
                    <CardSection style={styles.cardSectionStyle}>
                        <Input
                            label={i+1 + "."}
                            placeholder={'Your Children  Name'}
                            style={styles.inputStyle}
                            value={this.state.childName[i]}
                            onChangeText={(childName)=>this.setState({cname:childName})}
                            onBlur={this.onBlurText.bind(this,i)}
                        />
                        <NumericUpDown />
                    </CardSection>
                </Card>
            )
        }
        return per;
    }

    onButtonPress(){
        console.log("array");
        console.log(this.state.perName);
    }

    render(){

            this.generatePersonBox();
            this.generateChildBox();
            return (
                <View>
                    <Text style={styles.textStyle}>Enter the persons details: </Text>
                    {
                        per
                    }
                    <Text style={styles.textStyle}>Enter the childrens details: </Text>
                    {
                        child
                    }
                    <Button onPress={this.onButtonPress.bind(this)} style={styles.buttonStyle}>Book</Button>
                </View>
            )
    }



    componentWillUnmount(){
        per=[];
        child=[];
    }

}

const styles={
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
    }, textStyle:{
        fontSize:responsiveFontSize(2),
        marginTop:responsiveHeight(2),
        alignSelf:'center',
        color:'#1a9c99'
    }

}

export default Booktrip;