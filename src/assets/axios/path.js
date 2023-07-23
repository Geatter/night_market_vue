import{fetchPost,fetchGet} from '@/assets/axios/API_IO_Instance'

const checkIn = {
    /**
     * 取得GroupList*/
    getGroupList:(param)=>{
        return fetchGet("",param);
    },
    getMemberList:(param)=>{
        return fetchGet("",param)
    },
    getCheckInList:(param)=>{
        return fetchGet("/api/rotary/list",param)
    },
    memberCheckIn:(data)=>{
        return fetchPost("/api/rotary/update",data)
    }
}

export {
    checkIn
}
