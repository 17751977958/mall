<template>
  <div id="app">
<<<<<<< HEAD
    <van-nav-bar title="购物街" style="background-color: pink"/>

    <van-tabbar v-model="active" active-color="red" route>
      <van-tabbar-item icon="wap-home" to="/home" replace>首页</van-tabbar-item>
      <van-tabbar-item icon="bars" to="/type">分类</van-tabbar-item>
      <van-tabbar-item icon="cart" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="friends" to="profile">我的</van-tabbar-item>
    </van-tabbar>
    <keep-alive>
      <router-view/>
    </keep-alive>
=======
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
>>>>>>> 0017c364cbfd2971793eaf28c106ff63cfdf1a8b
  </div>
</template>

<script>
<<<<<<< HEAD


  export default {
    name: 'App',
    data() {
      return {
        active: 0,
      }
    },
    components: {}
  }
</script>

<style>
  @import "./assets/css/base.css";
=======
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
>>>>>>> 0017c364cbfd2971793eaf28c106ff63cfdf1a8b
</style>
