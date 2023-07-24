import {fetchPost, fetchGet, fetchPut} from '@/assets/axios/API_IO_Instance'

const checkIn = {
    /**
     * 取得GroupList*/
    getGroupList:(param)=>{
        return fetchGet("",param);
    },
    getMemberList:(param)=>{
        return fetchGet("",param);
    },
    getCheckInList:(param)=>{
        return fetchGet("/api/rotary/list",param);
    },
    memberCheckIn:(data)=>{
        return fetchPut("/api/rotary/update",data);
    },
    guestCheckIn:(data)=>{
        return fetchPut("/api/rotary/insert",data);
    }
}
const donate={
    donate:(data)=>{
        return fetchPut("/api/rotary/happybless/insert",data);
    },
    getDonateList:(param)=>{
        return fetchGet("/api/rotary/happybless/list",param);
    }
}

export {
    checkIn,
    donate
}
