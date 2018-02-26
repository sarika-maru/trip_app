import React,{Component} from 'react';
import {View} from 'react-native';
import Router from './src/component/Route';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import {AppReducer} from './src/reducer/index';


class App extends Component{

    render(){
        return(
            <Provider store={(createStore(AppReducer, compose(applyMiddleware(thunk))))}>
                <Router/>
            </Provider>
        );

    }
}

export default App;

