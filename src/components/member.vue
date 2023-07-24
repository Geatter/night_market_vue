<script>
import {defineComponent} from 'vue'
import {mapMutations, mapState} from "vuex";
import store from "@/store";

export default defineComponent({
  name: "member",
  data(){
    return{
      value_groupIndex:'',
      value_memberId:'',
    }
  },
  computed:{
    ...mapState({
      groupList:(state)=>state.groupList,
      checkInList:(state)=>state.checkInList,
      memberList:(state)=>state.memberList,
    })
  },
  mounted() {

  },
  methods:{
    VerifyData(){
      if(this.value_groupIndex===''||this.value_memberId===''){
        if (this.value_groupIndex===''){
          return '請選擇所屬社名';
        }else {
          return "請填寫姓名";
        }
      }else {
        return true
      }
    },
    handleMemberList(){
      this.value_memberId='';
      let index = this.value_groupIndex;
      if(index!==''){
        let fullMemberList=[];
        this.checkInList[index].nameList.forEach(item=>{
                let nameData={
                  label:item.position + "_" + item.name,
                  value: item.id
                }
                fullMemberList.push(nameData);
        })
        store.commit("setMemberList",fullMemberList);
      }else {
        store.commit("setMemberList",'');
      }
    },
  },


})
</script>

<template>
<div class="member-container">
  <div class="select-group">
    <h2>所屬社名：</h2>
    <el-select v-model="value_groupIndex" placeholder="請選擇" size="large" @change="handleMemberList()">
      <el-option
          v-for="item in groupList"
          :key="item.value"
          :label="item.label"
          :value="item.value"
      ></el-option>
    </el-select>
  </div>
  <div class="select-group">
    <h2>姓名/Nickname</h2>
    <el-select v-model="value_memberId" placeholder="請選擇" size="large">
      <el-option
          v-for="item in memberList"
          :key="item.value"
          :label="item.label"
          :value="item.value"
      ></el-option>
    </el-select>
  </div>


</div>
</template>

<style scoped>
.member-container{
  text-align: center;
}
.select-group{
  width: 100%;
  padding: 3vw 0;
}
.select-group h2{
  padding: 0 0 3vw 0;
  font-size: 8vw;
}

</style>
