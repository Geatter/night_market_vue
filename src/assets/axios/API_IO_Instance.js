import axios from 'axios';

let API_IO_Instance =axios.create({
    baseURL:process.env.VUE_APP_apiCtx,
})

//API接口監聽
API_IO_Instance.interceptors.response.use( (response)=>{
    // 如有需要可以在這裡先確認response內容並處理
    return response;
})
// Post
export async function fetchPost(url,data){
    // URL修飾
    url=url
    // 處理準備發出的的data
    if(typeof data === 'object'){
        data=JSON.param(data);
    }
    return new Promise((resolve, reject) => {
        API_IO_Instance.post(url,data).then(response => {
            resolve(response.data);
        }).catch((error) => {
            // reject(error);
            console.error(error);
        })
    })
}
// Get
export async function fetchGet(url,param){
    // URL修飾
    url=url
    return new Promise((resolve, reject) => {
        API_IO_Instance.get(url,param).then(response => {
            resolve(response.data);
        }).catch((error) => {
            // reject(error);
            console.error(error);
        })
    })
}
