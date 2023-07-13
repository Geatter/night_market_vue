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
      activeName:'first'
    }
  },
  methods:{
    handleClick(TabsPaneContext,Event){
      console.log('TabsPaneContext',TabsPaneContext)
      console.log('Event',Event)
    }
  }
})

</script>

<template>
  <div class="wrap">
    <el-container direction="vertical">
      <el-main>
        <el-tabs  v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="扶輪社友" name="first">
            <Member></Member>
          </el-tab-pane>
          <el-tab-pane label="來賓" name="second">
            <Guest></Guest>
          </el-tab-pane>
        </el-tabs>
        <div class="button_group">
          <el-button type="primary" size="large" round>
            報到
          </el-button>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<style>
.wrap{
  height: 100vh;
}
#app,html,body,.el-container{
  height:100%;
}


.el-tabs{
  //background: rgba(0,0,0,0.5);
  position: relative;
  top: 70vw;
  color: white;
  width: 72vw;
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
  position: absolute;
  top: 95%;
  left: 50%;
  transform: translate(-50%,0);
  padding: 3vw;
}
.button_group button{
  font-size: 8vw;
}


</style>
