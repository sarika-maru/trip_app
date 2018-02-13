import React,{Component} from 'react';
import {View,Text,Alert,Image,ScrollView,Dimensions} from 'react-native';
import {Header,Button} from "./common";
class TripDetails extends Component{

    constructor(props){
        super(props)
        this.state={
            trip : this.props.navigation.state.params.trip
        }
    }

    render(){
        var p="";
        var f="";
        return(
            <ScrollView style={styles.scrollViewStyle}>
            <View>
                <Image source={{uri:this.state.trip.image}} style={{height:200, width:'100%'}} />
                <Header headerText={this.state.trip.trip_name} />
                <View style={styles.dataContainer}>
                    <Text style={styles.priceText}>{"Price : " + this.state.trip.per_person_price }</Text>
                    <Text style={styles.textStyle}>{"No Of Days : " + this.state.trip.no_of_days }</Text>
                    {
                        this.state.trip.places.map((data,key)=>{
                                p+=data+",";
                        })

                    }

                   <Text style={styles.textStyle}>{"Plcaes : "+p}</Text>

                    {
                            this.state.trip.food.map((data,key)=>{
                                        f+=data+",";

                            })
                    }
                    <Text style={styles.textStyle}>{"Meal : "+ f}</Text>

                    <Text style={styles.textStyle}>{"Description "+ this.state.trip.description}</Text>
                    <Button style={styles.buttonStyle} >Interested</Button>
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
    }
}

export default TripDetails