import {SIGN_UP,SIGN_IN,SIGN_OUT} from './../action/actionType';
import {GET_DATA} from "../action/actionType";

const INTIAL_STATE={
    regData:{},
    loginData:{},
    logoutData:{},
    userData:{}
}

export const UserReducer=(state=INTIAL_STATE,action)=>{
    switch (action.type){
        case SIGN_UP:{
            return{
                ...state,
                regData:action.data
            }
        }
        case SIGN_IN :{
            return{
                ...state,
                loginData:action.data
            }
        }
        case SIGN_OUT : {
            return{
                ...state,
                logoutData:action.data
            }
        }
        case GET_DATA :{
            return{
                ...state,
                userData:action.data
            }
        }
        default:{
            return state
        }
    }
}