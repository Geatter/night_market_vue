<template>
  <div class="background">
    <router-view/>
  </div>
</template>

<style lang="less">
@import "./assets/css/reset.css";
.background{
  background: url("./assets/img/index_bg.png") center top no-repeat;
  background-size: cover;
}


</style>
