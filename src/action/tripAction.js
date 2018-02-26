import {CALL_API} from './../apiCall/call_api';
import config from './../apiCall/config';
import {GET_DATA} from './../action/actionType';

export const TripAction=()=>{
    return(dispatch,getState)=>{
        return CALL_API(config.base_url+config.Trip,'get',{},{}).then((response)=>{
            console.log("API : "+ config.base_url+config.Trip);

            dispatch({
                type: GET_DATA,
                data: response.data
            });
        },(err)=>{
            return Promise.reject(err);
        }).catch((ex)=>{
            return Promise.reject(ex);
        })
    }
}