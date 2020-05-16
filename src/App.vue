<template>
  <div id="app">

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



  </div>
</template>

<script>


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
