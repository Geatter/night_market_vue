<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "member",
  data(){
    return{
      value_group:'',
      value_member:'',
      memberList:[],
      groupList:[],
    }
  },
  methods:{
    VerifyData(){
      if(this.value_group===''||this.value_member===''){
        if (this.value_group===''){
          return '請選擇所屬社名';
        }else {
          return "請填寫姓名";
        }
      }else {
        return true
      }
    }
  }
})
</script>

<template>
<div class="member-container">
  <div class="select-group">
    <h2>所屬社名：</h2>
    <el-select v-model="value_group" placeholder="請選擇" size="large">
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
    <el-select v-model="value_member" placeholder="請選擇" size="large">
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
