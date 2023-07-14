<script>
import {defineComponent} from 'vue'
import Member from "@/components/member.vue";
import Guest from "@/components/guest.vue";
export default defineComponent({
  name: "checkIn",
  components:{
    Member,
    Guest
  },
  data(){
    return{
      // 進入畫面時預設標籤顯示位置
      activeName:'first',
      showDialog:false,
      resultOfOperate:'',
      dialogTitle:'',
    }
  },
  methods:{
    submit(){
      console.log('activeName:',this.activeName);
      // console.log('this.$children:',this.$refs.guest.guestVerifyData);
      let verify='';
      switch (this.activeName){
        case "first":
          verify = this.$refs.member.VerifyData();
          break
        case "second":
          verify = this.$refs.guest.VerifyData();
          break
      };
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
    <el-container direction="vertical">
      <el-main>
        <el-tabs  v-model="activeName">
          <el-tab-pane label="扶輪社友" name="first">
            <Member ref="member"></Member>
          </el-tab-pane>
          <el-tab-pane label="來賓" name="second">
            <Guest ref="guest"></Guest>
          </el-tab-pane>
        </el-tabs>
        <div class="button_group">
          <el-button type="primary" size="large" round @click="submit">
            報到
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

<style>
.wrap{
background: url("@/assets/img/index_bg.png") center top no-repeat;
  height: 100vh;
background-size: cover;
}
.el-container{
  position: relative;
  top: 29%;
}
.el-main{
  width:80vw;
  margin: auto;
  background: rgba(0,0,0,0.6);
  color: white;
  border-radius: 5vw;
  text-align: center;
}
.el-tabs{
  color: white;
  width: 100%;
  height: 47vh;
  margin: auto;

}
.el-tabs__item{
  margin: 1vw 3vw;
  padding: 0 6vw;
  font-size: 7vw;
  font-weight: bold;
  color: white;
}
.button_group{
  text-align: center;
  padding: 3vw;
}
.button_group button{
  font-size: 8vw;
}


</style>
