<script>
import {defineComponent} from "vue";
import {mapMutations, mapState} from "vuex";
import store from "@/store";

export default defineComponent({
  name: "printOut",
  data(){
    return{
      showSwitch:false
    }
  },
  computed:{
    ...mapState({
      donateList:(state)=>state.donateList,
    })
  },
  methods:{
    ...mapMutations(['setDonateList']),
  },
  mounted() {
    store.commit('setDonateList');
    document.title = '歡喜金名錄-列印'
  }
})
</script>

<template>
  <div class="list-show-switch">
    <label>
      顯示清單:
    </label>
    <input type="checkbox" v-model="showSwitch">
  </div>

  <div v-show="!showSwitch" class="wrap" v-for="item in donateList" key="item">
<!--    <img src="/assets/img/showOut_bg.png" alt="">-->
    <div class="item-container">
      <br><br>
      <h3>{{ item.name }}  <i>歡喜金：{{ item.money }}</i> </h3>
      <br>
      <br>
      <br>
      <h4 text="2xl" justify="center">Note：{{ item.greeting }}</h4>
    </div>
  </div>
  <div v-show="showSwitch" class="list" v-for="item in donateList" key="item">
    <div class="list-container">
      <div class="list-item">{{item.name}}</div>  <div class="list-item-money">{{item.money}}</div>  <div class="list-item"> {{item.greeting===''?'---':item.greeting}} </div>
    </div>
  </div>
</template>

<style scoped>
.list-show-switch{
  text-align: center;
  color: white;
  font-size: 30px;
  padding: 10px 0 25px 0;
}
@media print {
  .list-show-switch{
    display: none;
  }
}
.list{
  width: 60%;
  margin: auto;
  background: white;

}
.list-container{
  display: flex;
  justify-content: space-evenly
}
.list-item{
  width: 35%;
  line-height: 30px;
  font-size: large;
  font-weight: bold;
}
.list-item-money{
  width: 8%;
  line-height: 30px;
  font-size: large;
  font-weight: bold;
}
hr{
  width: 100%;
}
.wrap{
  width: 1520px;
  height: 1100px;
  background: url("@/assets/img/showOut_bg.png") center top no-repeat;
  background-size: cover;
  margin: auto;
  position: relative;
}
.item-container{
  width: 75%;
  height: 550px;
  margin: auto;
  color: white;
  border-radius: 20px;
  background: rgba(0,0,0,0.6);
  position: relative;
  top: 40%;
}
h3{
  color: rgb(219, 219, 219);
  display: flex;
  justify-content:Space-around;
  font-size: 60px;
  line-height: 200px;
  font-weight: bold;
}
i{
  color: white;
}
h4{
  text-align: center;
  color: white;
  font-size: 50px;
  line-height: 70px;
  font-weight: bold;
}
</style>
