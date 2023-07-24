import {createStore} from 'vuex'
import {checkIn, donate} from "@/assets/axios/path";

export default createStore({
    state: {
        groupList: [],
        memberList: [],
        donateList: [],
        checkInList: [],
    },
    getters: {},
    mutations: {
        setDonateList(state, list) {
            donate.getDonateList().then(res => {
                if (res.code === 0) {
                    let processedArry=[]
                    res.data.forEach(item => {
                        let el={
                            name:item.fromName,
                            greeting:item.note,
                            money:item.price,
                          }
                        processedArry.push(el);
                    })
                    console.log(processedArry)
                    if(state.donateList.length ===processedArry.length ){
                        processedArry=[];
                    }else {
                        state.donateList = processedArry;
                        processedArry=[];
                    }
                }
            })
        },
        setGroupList(state) {
            state.checkInList.forEach((item, index) => {
                let dataObj = {
                    label: item.groupName,
                    value: index,
                }
                state.groupList.push(dataObj);
            })
        },
        setMemberList(state, list) {
            state.memberList = list
        },
        setCheckInList(state, list) {
            state.checkInList = list
        }
    },
    actions: {
        initCheckInData(context) {
            checkIn.getCheckInList().then(res => {
                if (res.code === 0) {
                    context.commit('setCheckInList', res.data);
                    context.commit('setGroupList');
                }
            })
        }
    },
    modules: {}
})
