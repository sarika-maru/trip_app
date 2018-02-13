import React,{Component} from 'react';
import {Text,View} from 'react-native';
import ImageSlider from 'react-native-image-slider';

class Slider extends Component{

    constructor(props){
        super(props)
        this.state={
             position:0,
             interval:null
        }
    }

    componentWillMount(){
        this.setState({interval: setInterval(()=>{
            if(this.state.position === 2){
                this.setState({position:0});
            }else{
                this.setState({position:this.state.position+1});

            }
        },3000)});


    }

    componentWillUnmount(){
        clearInterval(this.state.interval);
    }

    render() {

        return(
                <ImageSlider images={[
                    '/Users/lanet/Desktop/sarika/React-Native/trip_managment/src/image/img1.jpg',
                    '/Users/lanet/Desktop/sarika/React-Native/trip_managment/src/image/img2.jpg',
                    '/Users/lanet/Desktop/sarika/React-Native/trip_managment/src/image/slider2.jpg'
                ]}
                             position={this.state.position}
                             onPositionChanged={position=>{this.setState({position})}}
                />
            )
    }

}



export {Slider}