<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "donate",
  data(){
    return{
      Group_Name:'',
      greeting:'',
      money:'',
      showDialog:false,
      resultOfOperate:'',
      dialogTitle:'',
    }
  },
  mounted() {
    document.title = '歡喜金捐助'
  },
  methods:{
    VerifyData(){
      if(this.Group_Name === ''||this.greeting===''||this.money===''){
        if(this.Group_Name === ''){
          return '請輸入姓名或單位'
        }
        if(this.greeting ===''){
          return '請輸入Note'
        }
        if(this.money){
          return '請輸入金額'
        }
      }else {
        return true
      }
    },
    submit(){
      let verify= this.VerifyData();
      if(typeof verify === "string"){
        this.showDialog = true
        this.dialogTitle = '錯誤!!'
        this.resultOfOperate = verify
      }else {
        //   todo:打API傳資料.then
      }
    }
  }
})
</script>

<template>
  <div class="wrap">
    <el-container>

      <el-main>
<!--        <h2>歡喜金</h2>-->
<!--        <hr>-->
        <div class="input-group">
          <label>姓名/單位</label>
          <el-input class="inputBox" v-model="Group_Name" type="text"></el-input>
        </div>
        <div class="input-group">
          <label>Note</label>
          <el-input class="inputBox" maxlength="20"  v-model="greeting" type="text"></el-input>
        </div>
        <div class="input-group">
          <label>歡喜金</label>
          <el-input  class="inputBox" v-model="money" type="number" pattern="[0-9]*"></el-input>
          元整
        </div>
        <div class="button_group">
          <el-button type="primary" size="large" round @click="submit">
            送出
          </el-button>
        </div>
      </el-main>
    </el-container>
    <el-dialog v-model="showDialog" :title="dialogTitle" width="70%" align-center center>
      <span>{{ resultOfOperate }}</span>
      <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="showDialog = false">
          確認
        </el-button>
      </span>
      </template>
    </el-dialog>
  </div>
</template>

<style scoped>
.wrap{
  background: url("@/assets/img/index_bg.png") center top no-repeat;
  height: 100vh;
  background-size: cover;
}

h2{
  font-size: 9vw;
  font-weight: bold;
}
.input-group{
  margin: auto;
  width: 85vw;
  padding: 2vw 0 8vw 0;
}
label{
  font-size: 9vw;
  font-weight: bold;
}
.inputBox{
  padding: 3vw 0 0 0;
}
</style>
