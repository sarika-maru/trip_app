import React,{Component} from 'react';
import {View,Text,Alert,Image,ScrollView,Dimensions,AsyncStorage,Modal} from 'react-native';
import {responsiveWidth,responsiveHeight,responsiveFontSize} from 'react-native-responsive-dimensions';
import {CardSection,Card,Input,Header,MyRadiobutton,Button,MyDropDown} from './common';

class TripDetails extends Component{
    constructor(props){
        super(props);
        this.state={
            modalVisible: false
        };
    }
    trip=this.props.navigation.state.params.trip;

    openModal() {
        this.setState({modalVisible:true});
    }

    closeModal() {
        this.setState({modalVisible:false});
    }

     onBookPress(){
        AsyncStorage.getItem('token').then((token)=>{
            console.log(token);
            this.setState({modalVisible:false});
            if(token){
                this.props.navigation.navigate('BookTrip');
            }else
            {
                this.props.navigation.navigate('Main');
            }
        },(err)=>{
            Alert.alert("Error : "+ err);
        }).catch((ex)=>{
            Alert.alert("Exception : "+ ex);
        })

    }

    render(){
        var p="";
        var f="";
        return(


        <ScrollView style={styles.scrollViewStyle}>

            <View>
                <Image source={{uri:this.trip.image}} style={{height:200, width:'100%'}} />
                <Header headerText={this.trip.trip_name} />
                <View style={styles.dataContainer}>
                    <Text style={styles.priceText}>{"Price : " + this.trip.per_person_price }</Text>
                    <Text style={styles.textStyle}>{"No Of Days : " + this.trip.no_of_days }</Text>
                    {
                        this.trip.places.map((data,key)=>{
                                p+=data+",";
                        })

                    }
                   <Text style={styles.textStyle}>{"Plcaes : "+p}</Text>

                    {
                            this.trip.food.map((data,key)=>{
                                        f+=data+",";

                            })
                    }
                    <Text style={styles.textStyle}>{"Meal : "+ f}</Text>

                    <Text style={styles.textStyle}>{"Description "+ this.trip.description}</Text>
                    <Button style={styles.buttonStyle} onPress={this.openModal.bind(this)}>Book Now</Button>
                    <View>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            supportedOrientations={['portrait', 'landscape']}

                            visible={this.state.modalVisible}
                            onRequestClose={() => this.closeModal()}
                        >
                            <View style={styles.container}>
                                <View style={styles.contentContainer}>
                                    <Text style={styles.textStyle}>There is full ticket for adult</Text>
                                    <Text style={styles.textStyle}>There half ticket for children who's age is between 8 to 15</Text>
                                    <View style={{width:300,height:150,alignSelf:'center',padding:10,alignItems:'center',justifyContent:'space-between'}}>
                                            <Input
                                                placeholder={'Pooja'}
                                                style={{height:50,width:300,borderWidth:1}}
                                                value={this.state.username}
                                            />
                                            <Input
                                                placeholder={'Sarika'}
                                                style={{height:50,width:300,borderWidth:1}}
                                                value={this.state.username}
                                            />
                                    </View>
                                    <Button style={styles.buttonStyle} onPress={this.onBookPress.bind(this)} >Ok</Button>
                                </View>
                            </View>

                        </Modal>

                    </View>
                </View>


            </View>

            </ScrollView>
        )
    }
}

const styles={
    dataContainer:{
        margin:10,
        padding:10,
        borderWidth:1,
        borderColor:'#64ce96',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        backgroundColor:'#fff'
    },priceText : {
        fontSize : 30,
        fontWeight: '500',
        color: '#1a9c99',
        alignSelf:'center'
    }, textStyle :{
        marginTop:10,
        color:'#000',
        fontSize:18
    }, placesStyle :{
        marginTop:5,
        color:'#1a9c99',
        fontSize:18,
        alignItems:'flex-start'
    },scrollViewStyle:{
        height:Dimensions.get('window').height,
        width:Dimensions.get('window').width,
        backgroundColor:'#1a9c99'
    },buttonStyle:{
        alignSelf:'center',
        backgroundColor:'#fff',
        borderRadius:5,
        borderWidth:1,
        backgroundColor:'#1a9c99',
        margin:12,
        width:'100%'
    },modal: {
        position: 'absolute',
        marginTop:10,
        top: (50),
        left: (0),
        right:(0),
        width: (100),
        maxHeight: ('50%'),
        borderRadius:(3),
        flexDirection: 'column',
        backgroundColor: '#fff'
    },modalViewStyle:{
        alignItems:'center',
        justifyContent:'center',

    },container: {
        backgroundColor: 'rgba(0,0,0,0.4)',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    },
    contentContainer: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingHorizontal: 20,
        marginHorizontal: 10,
        marginVertical: 40,
        paddingTop: 20,
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingBottom: 40
    },cardStyle:{
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
    }
}

export default TripDetails