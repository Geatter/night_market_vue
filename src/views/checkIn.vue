<script>
import {defineComponent} from 'vue'
import Member from "@/components/member.vue";
import Guest from "@/components/guest.vue";
import {checkIn} from "@/assets/axios/path";
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
      resultOfOperate_2:'',
      dialogTitle:'',
    }
  },
  methods:{
    submit(){
      let verify='';
      switch (this.activeName){
        case "first":
          verify = this.$refs.member.VerifyData();
          if(typeof verify !== "string"){
            let putData={
              id:this.$refs.member.value_memberId,
            }
            checkIn.memberCheckIn(putData).then(res=>{
              if(res.code===0){
                this.showDialog=true;
                this.dialogTitle = "報到成功";
                let targetItem=this.$refs.member.checkInList[this.$refs.member.value_groupIndex]
                let group_name = targetItem.groupName;
                let memberPosition;
                let memberName;
                targetItem.nameList.forEach(item=>{
                  if(item.id === this.$refs.member.value_memberId){
                    memberPosition=item.position;
                    memberName=item.name;
                  }
                })
                this.resultOfOperate ='歡迎光臨';
                this.resultOfOperate_2=group_name+' '+memberPosition+' '+memberName
                document.getElementById('checkIn_button').disabled=true;
                this.$refs.member.value_groupIndex='';
                this.$refs.member.value_memberId='';
              }else {
                this.showDialog=true;
                this.dialogTitle = "錯誤:"+res.code;
                this.resultOfOperate ='請聯絡現場服務人員';
              }
            })
          }
          break
        case "second":
          verify = this.$refs.guest.VerifyData();
          if(typeof verify !== "string"){
            let group_name = this.$refs.member.checkInList[this.$refs.guest.value_groupIndex].groupName;
            let guestName = this.$refs.guest.name_guest;
            let putData={
              groupName:group_name,
              name:guestName,
              position:'現場來賓',
              recommender:this.$refs.guest.name_recommender
            }
            checkIn.guestCheckIn(putData).then(res=>{
              if(res.code===0){
                this.showDialog=true;
                this.dialogTitle = "報到成功";
                this.resultOfOperate ='歡迎光臨';
                this.resultOfOperate_2=group_name+' '+guestName
                document.getElementById('checkIn_button').disabled=true;
                this.$refs.guest.value_groupIndex='';
                this.$refs.guest.name_recommender='';
                this.$refs.guest.name_guest='';
              }else {
                this.showDialog=true;
                this.dialogTitle = "錯誤:"+res.code;
                this.resultOfOperate ='請聯絡現場服務人員';
              }
            })
          }
          break
      }
      if(typeof verify === "string"){
        this.showDialog = true
        this.dialogTitle = '錯誤!!'
        this.resultOfOperate = verify
      }
    },
    dialogClose(){
      this.showDialog = false;
      this.resultOfOperate = '';
      this.resultOfOperate_2 = '';
      this.dialogTitle = '';
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
          <el-button id="checkIn_button" type="primary" size="large" round @click="submit">
            報到
          </el-button>
        </div>
      </el-main>
    </el-container>

    <el-dialog v-model="showDialog" :title="dialogTitle" width="70%" align-center center>
      <span>{{ resultOfOperate }}</span>
      <hr>
      <br>
      <span>{{ resultOfOperate_2 }} </span>
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



@media only screen and (max-width: 992px){
  .wrap{
    background: url("@/assets/img/index_bg.png") center top no-repeat;
    height: 100vh;
    background-size: cover;
  }
  .button_group{
    text-align: center;
    padding: 3vw;
  }
  .button_group button{
    font-size: 8vw;
  }
}


</style>
