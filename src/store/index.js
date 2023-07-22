import { createStore } from 'vuex'
import {checkIn} from "@/assets/axios/path";

export default createStore({
  state: {
    groupList:[],
    memberList:[],
    donateList:[],
    checkInList:[],
  },
  getters: {
  },
  mutations: {
    setDonateList(state,list){
      // state.donateList = list
      // 假資料等API
      state.donateList=[
        {
          name:'昊天上帝',
          greeting:'萬商景仰',
          money:'99999'
        },
        {
          name:'東皇太一',
          greeting:'成效卓著',
          money:'8888'
        },
        {
          name:'原始天尊',
          greeting:'大展鴻業',
          money:'16800'
        },
        {
          name:'靈寶天尊',
          greeting:'成績斐然 ',
          money:'58888'
        },
        {
          name:'九天玄女',
          greeting:'萬客雲集',
          money:'99900'
        },
        {
          name:'玄天上帝',
          greeting:'鴻圖大展',
          money:'1000'
        },
      ]
    },
    setGroupList(state){
      state.checkInList.forEach((item,index)=>{
        console.log("checkInList.forEach item:",item.groupName);
        let dataObj={
          label:item.groupName,
          value:index,
        }
        state.groupList.push(dataObj);
      })
    },
    setMemberList(state,list){
      // state.memberList = list
      state.memberList=[
        {
          label:'李政龍',
          value:'李政龍'
        },
        {
          label:'Sam',
          value:'Sam'
        },
        {
          label:'Maki',
          value:'Maki'
        },
      ]
    },
    setCheckInList(state,list){
      state.checkInList = list
    }
  },
  actions: {
     initCheckInData(context){
       console.log("jason")
      checkIn.getCheckInList().then(res=>{
        if(res.code===0){
          context.commit('setCheckInList',res.data);
          context.commit('setGroupList');
        }
      })
    }
  },
  modules: {
  }
})
