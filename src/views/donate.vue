<script>
import {defineComponent} from 'vue'
import {donate} from "@/assets/axios/path";

export default defineComponent({
  name: "donate",
  data() {
    return {
      Group_Name: '',
      greeting: '',
      money: '',
      showDialog: false,
      resultOfOperate: '',
      dialogTitle: '',
    }
  },
  mounted() {
    document.title = '歡喜金捐助'
  },
  watch: {
    //金額限制六位數
    money: function (){
      if(this.money.length>7){
        this.money=this.money.slice(0,7);
      }
    }
  },
  methods: {
    VerifyData() {
      if (this.Group_Name === '' || this.greeting === '' || this.money === '') {
        if (this.Group_Name === '') {
          return '請輸入姓名或單位'
        }
        // if (this.greeting === '') {
        //   return '請輸入Note'
        // }
        if (this.money===''||Number(this.money)<=0) {
          return '請輸入正確金額'
        }
      } else {
        return true
      }
    },
    submit() {
      let verify = this.VerifyData();
      if (typeof verify === "string") {
        this.showDialog = true
        this.dialogTitle = '錯誤!!'
        this.resultOfOperate = verify
      } else {
        let putData = {
          "fromName": this.Group_Name,
          "note": this.greeting,
          "price": this.money
        }
        donate.donate(putData).then(res => {
          if (res.code === 0) {
            this.showDialog = true
            this.dialogTitle = '歡喜金發送成功!!'
            this.resultOfOperate = '非常感謝您的支持與愛護'
          }
        })
      }
    },
    dialogClose() {
      this.showDialog = false;
      this.Group_Name = '';
      this.greeting = '';
      this.money = '';
      this.resultOfOperate = '';
      this.dialogTitle = '';
    }
  }
})
</script>

<template>
  <div class="wrap">
    <el-container class="donate-container">
      <el-main>
        <div class="input-group">
          <label>姓名/單位</label>
          <span>(限14個字)</span>
          <el-input class="inputBox" maxlength="14" v-model="Group_Name" type="text"></el-input>
        </div>
        <div class="input-group">
          <label>Note</label>
          <span>(限20個字)</span>
          <el-input class="inputBox" maxlength="20" v-model="greeting" type="text"></el-input>
        </div>
        <div class="input-group">
          <label>歡喜金</label>
          <el-input class="inputBox" v-model="money" type="number" pattern="[0-9]*"></el-input>
          <br>
          <br>
          <span>元整</span>
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
        <el-button type="primary" @click="dialogClose">
          確認
        </el-button>
      </span>
      </template>
    </el-dialog>
  </div>
</template>

<style>
@media only screen and (max-width: 992px) {
  .wrap {
    background: url("@/assets/img/index_bg.png") center top no-repeat;
    height: 100vh;
    background-size: cover;
  }

  .donate-container {
    width: 95%;
    margin: auto;
  }

  h2 {
    font-size: 9vw;
    font-weight: bold;
  }

  .input-group {
    margin: auto;
    width: 80vw;
    padding: 2vw 0 8vw 0;
  }

  label {
    font-size: 9vw;
    font-weight: bold;
  }

  .inputBox {
    padding: 3vw 0 0 0;
  }
}
</style>
