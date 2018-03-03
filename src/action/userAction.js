import {CALL_API} from "../apiCall/call_api";
import config from './../apiCall/config';
import {SIGN_IN,SIGN_UP,SIGN_OUT,GET_DATA,UPDATE_DATA} from './../action/actionType';
import {AsyncStorage} from 'react-native';


export const login=(username,password)=>{
    return(dispatch,getState)=>{
        return CALL_API(config.base_url+config.signIn,'post',{},{username:username, password:password}).then((response)=>{
            console.log("API : "+ config.base_url+config.signIn);

            dispatch({
                type:SIGN_IN,
                data:response
            })

        },(err)=>{
            return Promise.reject(err);
        }).catch((ex)=>{
            return Promise.reject(ex);
        });
    }
}



export const registration=(username,password,city)=>{
    return (dispatch,getState)=>{
        return CALL_API(config.base_url+config.signUp,'post',{},{username:username, password:password, city: city}).then((response)=>{
            console.log("API : "+ config.base_url+config.signUp);

            dispatch({
                type:SIGN_UP,
                data:response.data
            })
        },(err)=>{
            return Promise.reject(err);
        }).catch((ex)=>{
            return Promise.reject(ex);
        });
    }
}

export const logout=()=>{
    return(dispatch,getState)=>{
        return AsyncStorage.getItem('token').then((token)=>{
            if(!token){
                token="";
            }
            return CALL_API(config.base_url+config.singOut,'delete',{'x-auth':token},{}).then((response)=>{
                console.log("API : "+ config.base_url+config.signUp);

                dispatch({
                    type:SIGN_OUT,
                    statusCode:response.status
                })
            },(err)=>{
                return Promise.reject(err);
            }).catch((ex)=>{
                return Promise.reject(ex);
            });
        })

    }
}

export const getUser=()=>{
    return(dispatch,getState)=>{
        return AsyncStorage.getItem('token').then((token)=>{
            if(!token){
                token="";
            }
            console.log(token);
            return CALL_API(config.base_url+config.User,'get',{'x-auth':token},{}).then((response)=>{
                console.log("API : "+ config.base_url+config.User);

                dispatch({
                    type:GET_DATA,
                    data:response.data
                })
            },(err)=>{
                return Promise.reject(err);
            }).catch((ex)=>{
                return Promise.reject(ex);
            });
        })

    }
}

export const updateProfile =(city)=>{
    return(dispatch,getState)=>{
        return AsyncStorage.getItem('token').then((token)=>{
            if(!token){
                token="";
            }
            return CALL_API(config.base_url+config.User,'put',{'x-auth':token},{city: city}).then((response)=>{
                console.log("API : "+ config.base_url+config.User);

                dispatch({
                    type:UPDATE_DATA,
                    statusCode:response.status
                })
            })
        })
    }
}



