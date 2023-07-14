import { createStore } from 'vuex'

export default createStore({
  state: {
    groupList:[],
    memberList:[],
    donateList:[]
  },
  getters: {
  },
  mutations: {
    setDonateList(state,list){
      // state.donateList = list
      // 假資料等API
      state.donateList=[
        {
          name:'銀月數位顧問股份有限公司',
          greeting:'恭祝活動順利進行',
          money:'報到及歡喜金系統'
        },
        {
          name:'社團法人台北市環河扶輪社',
          greeting:'恭祝活動順利進行',
          money:'報到及歡喜金系統'
        },
        {
          name:'李政龍',
          greeting:'恭祝活動順利進行',
          money:'報到及歡喜金系統'
        },
        {
          name:'白淺上神',
          greeting:'恭祝活動順利進行',
          money:'1000'
        },
      ]
    },
    setGroupList(state,list){
      // state.groupList = list
    //   假資料
      state.groupList =[
        {
          label:"環河扶輪社",
          value:'環河扶輪社'
        },
        {
          label:"台北城中",
          value:'台北城中'
        },
        {
          label:"基隆東南",
          value:'基隆東南'
        },
      ]
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
    }
  },
  actions: {
  },
  modules: {
  }
})
