import {combineReducers} from 'redux';
import {TripReducer} from './tripReducer';
import {UserReducer} from './userReducer';

export const AppReducer= combineReducers({
    GetTrip : TripReducer,
    User: UserReducer
})