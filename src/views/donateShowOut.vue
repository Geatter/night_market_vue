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
    ...mapMutations(['setDonateList']),
  },
  mounted() {
    setInterval(()=>{
      store.commit('setDonateList');
    },(this.donateList.length*6+20)*1000);
    store.commit('setDonateList');
    document.title = '歡喜金名錄'
  }
})
</script>

<template>
<div class="wrap">
  <div class="carousel-item">
    <el-carousel :interval="5000" indicator-position="none"  height="500px" arrow="never">
      <el-carousel-item >
        <h3 class="SliMoonQRCode-title" text="2xl" justify="center">銀月數位顧問股份有限公司</h3>
        <img class="SliMoonQRCode-img" src="@/assets/img/Sliver_Moon_LINE_QRcode.png" alt="銀月官方Line QR CODE">
        <p class="SliMoonNote" text="2xl" justify="center">⬆️⬆️⬆️軟體系統開發諮詢⬆️⬆️⬆️</p>
      </el-carousel-item>
<!--      <el-carousel-item >-->
<!--        <h3 text="2xl" justify="center">社團法人台北市環河扶輪社</h3>-->
<!--                <h4 text="2xl" justify="center">本報到及歡喜金系統</h4>-->
<!--        <p text="2xl" justify="center">根深葉茂無疆業，源遠流長有道財。</p>-->
<!--      </el-carousel-item>-->
      <el-carousel-item >
        <h3 text="2xl" justify="center">李政龍</h3>
        <h4 text="2xl" justify="center">本報到及歡喜金網頁畫面</h4>
        <p text="2xl" justify="center">恭祝活動圓滿成功！</p>
      </el-carousel-item>
      <el-carousel-item v-for="item in donateList" :key="item">
        <h3>{{ item.name }}  <i>歡喜金：{{ item.money }}</i> </h3>
        <br>
        <h4 text="2xl" justify="center">Note：{{ item.greeting }}</h4>
      </el-carousel-item>
      <el-carousel-item >
        <h3 class="SliMoonQRCode-title" text="2xl" justify="center">銀月數位顧問股份有限公司</h3>
        <img class="SliMoonQRCode-img" src="@/assets/img/Sliver_Moon_LINE_QRcode.png" alt="銀月官方Line QR CODE">
        <p class="SliMoonNote" text="2xl" justify="center">⬆️⬆️⬆️軟體系統開發諮詢⬆️⬆️⬆️</p>
      </el-carousel-item>
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
  width: 90%;
  margin: auto;
  padding: 450px 0 130px 0;
}
.el-carousel__item h3 {
  color: rgb(219, 219, 219);
  display: flex;
  justify-content:Space-around;
  font-size: 60px;
  line-height: 200px;
  font-weight: bold;
}
.el-carousel__item i {
  color: white;
}
.el-carousel__item h4 {
  color: white;
  font-size: 50px;
  line-height: 70px;
  font-weight: bold;
}

.SliMoonQRCode-img{
  width: 18%;
  position: relative;
  top: -52px;
}
.SliMoonQRCode-title{
  position: relative;
  top: -20px;
}
.SliMoonNote{
  position: relative;
  top: -96px;
}
</style>
