import axios from 'axios';

export var CALL_API=(url,type,header={},data={})=> {

    let reqHeader= Object.assign(header,{"Accept":"application/json","Content-Type":"application/json"});

    if(type == "get"){
        return axios.get(url,{headers : reqHeader}).then((response)=>{
            return Promise.resolve(response);
        },(err)=>{
            return Promise.reject(err);
        }).catch((ex)=>{
            return Promise.reject(ex);
        })
    }else if(type == "post"){
        return axios.post(url,data,{headers : reqHeader}).then((response)=>{
            return Promise.resolve(response);
        },(err)=>{
            return Promise.reject(err);
        }).catch((ex)=>{
            return Promise.reject(ex);
        })
    }else if(type == 'delete'){
        console.log("inside call api");
        console.log(reqHeader);
        return axios.delete(url,{headers : reqHeader}).then((response)=>{
            return Promise.resolve(response);
        },(err)=>{
            return Promise.reject(err);
        }).catch((ex)=>{
            return Promise.reject(ex);
        });
    }

}