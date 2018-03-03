import {SIGN_UP,SIGN_IN,SIGN_OUT,GET_DATA,UPDATE_DATA} from './../action/actionType';

const INTIAL_STATE={
    regData:{},
    loginData:{},
    logoutStatus:0,
    userData:{},
    updateStatus:0
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
        case UPDATE_DATA :{
            return{
                ...state,
                updateStatus:action.statusCode
            }
        }
        default:{
            return state
        }
    }
}