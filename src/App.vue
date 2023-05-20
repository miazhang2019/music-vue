<template>
  <div id="app">
    <!-- 3 使用组件 -->
    <!--组件两种使用方式：和变量名同名；短横线间隔单词 MyHeader或者my-header-->
    <MyHeader></MyHeader>
    <Tabbar></Tabbar>
    <!-- 一级路由出口 -->
    <keep-alive include="Singer,Search">
      <router-view></router-view>
    </keep-alive>

    <!-- app页面太杂乱，以下播放页面和audio封装到一个组件中Player.vue -->
    <Player></Player>
    <!-- <audio :src="song.url" autoplay ref="audio" @timeupdate="timeupdate" @ended="ended" @canplay="canplay"></audio> -->
  </div>
</template>
<script>
// 1导入组件（替代了定义组件）
import MyHeader from "@/components/MyHeader.vue";
import Tabbar from "@/components/Tabbar.vue";
import Player from "@/views/Player.vue";
export default {
  name: "App",
  // 2 注册组件
  components: {
    MyHeader,
    Tabbar,
    Player,
  },
};
</script>
<style lang="scss"></style>
