<template>
  <div>
    <van-tabs v-model="active">
      <van-tab title="新款">
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="(v,k) in images" :key="k">

            <img v-lazy="v" style="width:400px;height: 250px" @click="fg(v,k)">


          </van-swipe-item>
        </van-swipe>
      </van-tab>
      <van-tab title="流行">2</van-tab>
      <van-tab title="精选">3</van-tab>
    </van-tabs>


  </div>
</template>

<script>
  import {ImagePreview} from "vant"

  export default {

    name: "Home",
    data() {
      return {
        active: 0,
        show: false,
        images: [
          require('../../../assets/img/0a2be9ddb5eb2e28ef9a711d9bc74e77.png'),
          require('../../../assets/img/0ab27989e12d6bc37f19470fb4381080.png'),
          require('../../../assets/img/0acdcb02452e82ec15e64dc2f08d0ec4.png'),
          require('../../../assets/img/00d8b36ebe3fef4d5496e0af3679c9a4.jpg'),

        ]
      }
    },
    methods: {
      fg(v, k) {
        console.log(v,k);
        ImagePreview({
          images: v,
          showIndex: true,
          loop: false,
          startPosition: k

        })
      }
    }
  }
</script>
<style scoped>
</style>
