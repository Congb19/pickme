<template>
  <div class="container">
    <div class="top">
      <van-image
        round
        width="8rem"
        height="8rem"
        :src="require('../assets/test.png')"
      />
    </div>
    <div class="show-area">
      <p class="show-title">您目前的靓号为：</p>
      <p class="show-number">1666146582</p>
      <van-button size="large" round type="info" v-on:click="this.change"
        >我要换号</van-button
      >
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  background: white;
}
.top {
  width: 100%;
  height: 200px;
  background: #8ea3dd;
}
.show-area {
  position: relative;
  font-size: 30px;
  padding-top: 50px;
}
.show-number {
  font-size: 50px;
  font-family: 'Courier New', Courier, monospace;
  font-weight: 600;
}
.van-image {
  top: 100%;
  transform: translateY(-50%);
}
.van-button--large {
  width: 300px;
}
h1 {
  font-size: 18px;
}
</style>

<script>
// import * as api from '../api';

import { Dialog } from 'vant';
export default {
  name: 'App',
  data() {
    return {};
  },
  async mounted() {
    // const _this = this;
  },
  methods: {
    //api测试
    change() {
      Dialog.confirm({
        title: '123456789',
        message: '您是否确认放弃此靓号？',
        // theme: 'round-button',
      })
        .then(() => {
          //跳转到主页
          // on close
        })
        .then(() => {});
    },
  },
};
</script>
