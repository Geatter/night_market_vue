<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "guest"
})
</script>

<template>
<div class="guest-container">
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
    <div class="input-group">
      <h2>姓名/Nickname</h2>
      <el-input v-model="value_name" size="large" clearable>
      </el-input>
    </div>
  <div class="input-group">
    <h2>介紹人</h2>
    <el-input v-model="value_name" size="large" clearable>
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
.el-input{
  width: 80%;
}


</style>
