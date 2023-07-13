<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "member",
  data(){
    return{
      value_group:'',
      value_name:'',
      options_name:[],
      options_group:[
        {
          label:'option1',
          value:'option1'
        },
        {
          label:'option2',
          value:'option2'
        },
        {
          label:'option3',
          value:'option3'
        },
        {
          label:'option4',
          value:'option4'
        },
        {
          label:'option5',
          value:'option5'
        },
        {
          label:'option6',
          value:'option6'
        },
        {
          label:'option1',
          value:'option1'
        },
        {
          label:'option2',
          value:'option2'
        },
        {
          label:'option3',
          value:'option3'
        },
        {
          label:'option4',
          value:'option4'
        },
        {
          label:'option5',
          value:'option5'
        },
        {
          label:'option6',
          value:'option6'
        },
        {
          label:'option1',
          value:'option1'
        },
        {
          label:'option2',
          value:'option2'
        },
        {
          label:'option3',
          value:'option3'
        },
        {
          label:'option4',
          value:'option4'
        },
        {
          label:'option5',
          value:'option5'
        },
        {
          label:'option6',
          value:'option6'
        },
      ],
    }
  },
})
</script>

<template>
<div class="member-container">
  <div class="select-group">
    <h2>所屬社名：</h2>
    <el-select v-model="value_group" placeholder="請選擇" size="large">
      <el-option
          v-for="item in options_group"
          :key="item.value"
          :label="item.label"
          :value="item.value"
      ></el-option>
    </el-select>
  </div>
  <div class="select-group">
    <h2>姓名/Nickname</h2>
    <el-select v-model="value_name" placeholder="請選擇" size="large">
      <el-option
          v-for="item in options_name"
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
