import React,{Component} from 'react';
import {Text,View,TouchableOpacity,Image,Alert,ActivityIndicator,ImageBackground,ScrollView,Dimensions} from 'react-native';
import {Slider,OnClick} from "./common";
import {connect} from  'react-redux';
import {TripAction} from '../action/tripAction';


class Home extends Component{

    constructor(props){
        super(props)

    }

    onDataPress(trip){
        this.props.navigation.navigate("TripDetails", {trip});
    }

    render() {

        return(
            <ScrollView style={styles.scrollViewStyle}>
                    <View style={styles.sliderStyle}>
                        <Slider/>
                    </View>
                    <View style={styles.containerStyle}>
                        {
                            this.props.select.map((data,key)=>{
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

    componentDidMount(){
        this.props.onGetTrip();
    }

    shouldComponentUpdate(nextProps,nextstate){
        //console.log(nextProps);
        return true;
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

const mapStateToProps=(state)=>{
    return {
        select: state.GetTrip.select
    }
}

function mapDispatchToProps(dispatch) {
    return{
        onGetTrip: ()=>{
            dispatch(TripAction());
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);

