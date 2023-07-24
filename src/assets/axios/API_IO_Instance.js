import axios from 'axios';

let Location_URL=location.href
let Evn_URL = process.env.VUE_APP_apiCtx
let port=":8089/"
let final_URL
if(Evn_URL!==undefined){
    final_URL=Evn_URL.substring(0,Evn_URL.indexOf(':',5))+port
}else if(Location_URL!==undefined){
    final_URL=Location_URL.substring(0,Location_URL.indexOf(':',5))+port
}
if(location.hostname==='localhost'){
    final_URL=undefined;
}
console.log('Location_URL)',Location_URL);
console.log('Evn_URL',Evn_URL);
console.log('final_URL',final_URL);


let API_IO_Instance =axios.create({
    baseURL:final_URL,
})

//API接口監聽
API_IO_Instance.interceptors.response.use( (response)=>{
    // 如有需要可以在這裡先確認response內容並處理
    return response;
})
// Post
export async function fetchPost(url,data){
    return new Promise((resolve, reject) => {
        API_IO_Instance.put(url,data).then(response => {
            resolve(response.data);
        }).catch((error) => {
            // reject(error);
            console.error(error);
        })
    })
}
//Put
export async function fetchPut(url,data){
    return new Promise((resolve, reject) => {
        API_IO_Instance.put(url,data).then(response => {
            resolve(response.data);
        }).catch((error) => {
            // reject(error);
            console.error(error);
        })
    })
}
// Get
export async function fetchGet(url,param){
    return new Promise((resolve, reject) => {
        API_IO_Instance.get(url,param).then(response => {
            resolve(response.data);
        }).catch((error) => {
            // reject(error);
            console.error(error);
        })
    })
}
