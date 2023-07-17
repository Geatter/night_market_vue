<script>
import {defineComponent} from 'vue'
import {mapMutations, mapState} from "vuex";
import store from "@/store";

export default defineComponent({
  name: "donateShowOut",
  data(){
    return{

    }
  },
  computed:{
    ...mapState({
      donateList:(state)=>state.donateList,
        })
  },
  methods:{
    // 假資料生畫面
    ...mapMutations(['setDonateList']),
  },
  mounted() {
    // 假資料生畫面
    store.commit('setDonateList');
    document.title = '歡喜金名錄'
  }
})
</script>

<template>
<div class="wrap">
  <div class="carousel-item">
    <el-carousel :interval="4000" indicator-position="none"  height="400px">
      <el-carousel-item >
        <h3 text="2xl" justify="center">銀月數位顧問股份有限公司</h3>
        <img class="SliMoonQRCode" src="@/assets/img/Sliver_Moon_LINE_QRcode.png" alt="銀月官方Line QR CODE">
        <p class="SliMoonNote" text="2xl" justify="center">⬆️⬆️⬆️軟體系統開發諮詢⬆️⬆️⬆️</p>
      </el-carousel-item>
<!--      <el-carousel-item >-->
<!--        <h3 text="2xl" justify="center">社團法人台北市環河扶輪社</h3>-->
<!--                <h4 text="2xl" justify="center">報到及歡喜金系統</h4>-->
<!--        <p text="2xl" justify="center">恭祝活動順利進行恭祝活動順利進行順利進行</p>-->
<!--      </el-carousel-item>-->
<!--      <el-carousel-item v-for="item in donateList" :key="item">-->
<!--        <h3 text="2xl" justify="center">{{ item.name }}</h3>-->
<!--        <h4 text="2xl" justify="center">歡喜金：{{ item.money }}</h4>-->
<!--        <p text="2xl" justify="center">Note：{{ item.greeting }}</p>-->
<!--      </el-carousel-item>-->
    </el-carousel>
  </div>

</div>
</template>

<style scoped>
.wrap{
  width: 1520px;
  background: url("@/assets/img/showOut_bg.png") center top no-repeat;
  background-size: cover;
  margin: auto;
}
.carousel-item{
  width: 60%;
  margin: auto;
  position: relative;
  top: 45%;
}
.el-carousel__item h3 {
  color: rgb(219, 219, 219);
  font-size: 50px;
  opacity: 0.75;
  line-height: 200px;
  font-weight: bold;
}
.el-carousel__item h4 {
  font-size: 50px;
  line-height: 70px;
  font-weight: bold;
}

.el-carousel__item {
  text-align: center;
  font-size: 30px;
  color: white;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 20px;
  line-height: 90px;
}
.SliMoonQRCode{
  width: 20%;
  position: relative;
  top: -52px;
}
.SliMoonNote{
  position: relative;
  top: -96px;
}
</style>
