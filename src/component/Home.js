import React,{Component} from 'react';
import {Text,View,TouchableOpacity,Image,Alert,ActivityIndicator,ImageBackground,ScrollView,Dimensions} from 'react-native';
import {Slider,OnClick} from "./common";
import slider from 'react-native-image-slider';
import axios from 'axios';


class Home extends Component{

    constructor(props){
        super(props)
        this.state={
            trips:[],
            loading:false
        }
    }

    async getAllTrip(){
        var promise = await new Promise((resolve, reject)=>{
            axios.get('http://localhost:8888/GetAllTrip').then((response)=>{
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
        await this.getAllTrip().then((data)=>{
            console.log("data"+data);
            this.setState({trips:data, loading:false});
            console.log(this.state.trips);
        },(err)=>{
            alert("error"+ err);
        }).catch((ex)=>{
            alert("Exception"+ ex);
        })
    }

    onDataPress(trip){
        this.props.navigation.navigate("TripDetails", {trip});
    }

    render() {
        if(this.state.loading)
        {
            return <ActivityIndicator size={'large'}/>
        }


        return(
            <ScrollView style={styles.scrollViewStyle}>
                    <View style={styles.sliderStyle}>
                        <Slider/>
                    </View>
                    <View style={styles.containerStyle}>
                        {
                            this.state.trips.map((data,key)=>{
                                return(

                                    <View style={styles.dataContainerStyle} key={key}>
                                        <OnClick onPress={()=>{
                                            this.onDataPress(data)
                                        }}>
                                        <ImageBackground source={{uri :data.image}} style={styles.imageBackStyle}>
                                            <View style={styles.dataViewStyle}>
                                                <View style={{opacity:1.0, backgroundColor:'#64ce96'}}>
                                                <Text style={styles.textStyle}>{"Trip    : "+data.trip_name}</Text>
                                                <Text style={styles.textStyle}>{"Price   : "+data.per_person_price}</Text>
                                                <Text style={styles.textStyle}>{"Days   : "+data.no_of_days}</Text>
                                                </View>
                                            </View>
                                        </ImageBackground>
                                        </OnClick>
                                    </View>


                                )
                            })
                        }
                    </View>

            </ScrollView>
        )
    }

}

const styles= {
    scrollViewStyle:{
        height:Dimensions.get('window').height,
        width:Dimensions.get('window').width,
        backgroundColor:'#1a9c99'
    },containerStyle:{
        height:Dimensions.get('window').height*0.7,
    },sliderStyle:{
        height:Dimensions.get('window').height*0.3
    },dataContainerStyle:{
        margin:10,
        borderWidth:1,
        borderColor: '#fff'
    },imageBackStyle:{
        justifyContent:'flex-end',
        height:200,
        width:'100%'
    },dataViewStyle:{
        opacity:0.7,
        alignItems:'flex-start',
        backgroundColor : '#64ce96'
    },textStyle:{
        fontWeight:'900',
        color: '#000'
    }
}


export default Home;

