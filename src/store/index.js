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
