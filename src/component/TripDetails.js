import React,{Component} from 'react';
import {View,Text,Alert,Image,ScrollView,Dimensions,AsyncStorage,Modal} from 'react-native';
import {responsiveWidth,responsiveHeight,responsiveFontSize} from 'react-native-responsive-dimensions';
import {Header,Button} from "./common";

class TripDetails extends Component{
    constructor(props){
        super(props);
    }
    trip=this.props.navigation.state.params.trip;

    state = {
        modalVisible: false
    };

    openModal() {
        this.setState({modalVisible:true});
    }

    closeModal() {
        this.setState({modalVisible:false});
    }

    async getItem(item) {
        try {
            const value = await AsyncStorage.getItem(item);
            console.log(value);
            return value;
        } catch (error) {
            console.log("error"+ error);
        }
    }



    async onBookPress(){
        var token = await this.getItem("Token");
        console.log(token);
        this.setState({modalVisible:false});
        if(token){
            this.props.navigation.navigate('BookTrip');
        }else
        {
            this.props.navigation.navigate('Main');
        }
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
                            visible={this.state.modalVisible}
                            animationType={'slide'}
                            onRequestClose={() => this.closeModal()}
                            style={styles.modal}
                        >
                            <View>
                                <Text>There is full ticket for adult</Text>
                                <Text>There half ticket for children who's age is between 8 to 15</Text>
                                <Button style={styles.buttonStyle} onPress={this.onBookPress.bind(this)} >Ok</Button>
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

    }
}

export default TripDetails