import {GET_DATA} from  './../action/actionType';

const INTIAL_STATE={
    select:[]
}

export const TripReducer= (state=INTIAL_STATE,action)=>{
    switch (action.type){
        case GET_DATA :{
            return{
                ...state,
                select:action.data
            }
        }
        default:{
            return state
        }
    }
}