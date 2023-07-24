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
