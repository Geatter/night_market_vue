<script>
import {defineComponent} from 'vue'
import {mapMutations, mapState} from "vuex";
import store from "@/store";

export default defineComponent({
  name: "guest",
  data(){
    return{
      value_groupIndex:'',
      name_guest:'',
      name_recommender:'',
    }
  },
  computed:{
    ...mapState({
      groupList:(state)=>state.groupList,
    })
  },
  mounted() {
    store.commit('setGroupList');
  },
  methods:{
    ...mapMutations(['setGroupList']),
    VerifyData(){
      if ((this.value_groupIndex === ''&&this.name_recommender==='')||this.name_guest === ''){
        if (this.name_guest === ''){
          return "請填寫姓名";
        }else {
          return '請選擇所屬社名或填寫介紹人';
        }
      }else {
        return true
      }
    }
  }
})
</script>

<template>
<div class="guest-container">
    <div class="select-group">
      <h2>所屬社名：</h2>
      <el-select v-model="value_groupIndex" placeholder="請選擇" size="large">
        <el-option
            v-for="item in groupList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        ></el-option>
      </el-select>
    </div>
    <div class="input-group">
      <h2>姓名/Nickname</h2>
      <el-input v-model="name_guest" size="large" clearable>
      </el-input>
    </div>
  <div class="input-group">
    <h2>介紹人</h2>
    <el-input v-model="name_recommender" size="large" clearable>
    </el-input>
  </div>


</div>
</template>

<style scoped>

.guest-container{
  text-align: center;
}
.input-group ,.select-group{
  width: 100%;
  padding: 1vw 0;
}
.input-group h2,.select-group h2{
  padding: 0 0 3vw 0;
  font-size: 8vw;
}



</style>
