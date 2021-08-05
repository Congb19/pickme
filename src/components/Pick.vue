<template>
  <div>
    <div class="search-area">
      <van-search v-model="value" placeholder="请输入您需要的靓号段" />
      <van-button round class="search-btn" size="normal" type="info"
        >&nbsp;GO!&nbsp;
      </van-button>
    </div>
    <div v-if="showlist" class="list-area">
      <!-- <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
      >
        <van-cell v-for="item in list" :key="item" :title="item" />
      </van-list> -->
      <div
        class="list-item"
        @click="chose"
        v-for="(item, index) in numberlist"
        :key="index"
      >
        <!-- {{ index }} -->
        <div class="list-item-number">
          {{ item.number }}
        </div>
        <div class="list-item-price">{{ item.price }}</div>
      </div>
    </div>
    <div class="login-area">
      <!-- <van-dialog
        v-model="show"
        title="1666146582   ￥10.00"
        show-cancel-button
        confirm="this.confirm"
      >
        <p>您是否要选择该靓号？</p>
      </van-dialog> -->
    </div>

    <!-- <button v-on:click="click">123</button> -->
  </div>
</template>

<script>
import * as api from '../api';

import { Dialog } from 'vant';
export default {
  name: 'App',
  data() {
    return {
      active: 'pick',
      list: [1, 2, 3],
      loading: false,
      finished: false,
      showlist: true,
      numberlist: [
        { number: 6661352487, price: '￥10.00' },
        { number: 1666146582, price: '￥10.00' },
        { number: 3266654984, price: '￥10.00' },
        { number: 5126668213, price: '￥10.00' },
        { number: 1482666223, price: '￥10.00' },
        { number: 3254766601, price: '￥10.00' },
        { number: 1967816661, price: '￥10.00' },
        { number: 3267223666, price: '￥10.00' },
        { number: 6661552487, price: '￥10.00' },
        { number: 5326668213, price: '￥10.00' },
      ],
    };
  },
  async mounted() {
    this.getuser();
  },
  methods: {
    //api测试
    async click() {
      console.log(await api.testget());
    },
    async getuser() {
      //登录
      this.$store.dispatch('login', 123);
      //查看当前登录的用户id
      console.log(this.$store.state.user.uid);
    },
    confirm() {
      console.log(223);
    },
    chose() {
      Dialog.confirm({
        title: '1666146582   ￥10.00',
        message: '您是否确认选择此靓号？',
        // theme: 'round-button',
      })
        .then(() => {
          this.confirm();
          this.active = 'me';
          console.log(this.active);
          // on close
        })
        .then(() => {});
    },
    // tologin() {

    // }
  },
};
</script>
<style scoped>
.search-area {
  position: relative;
  /* position: fixed; */
  top: 0;
}
.search-btn {
  font-size: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 20px;
}
.list-area {
  width: 100%;
  height: 300px;
}
.list-item {
  position: relative;
  background-color: #fff;
  width: 100%;
  height: 30%;
  margin-top: 2px;
  margin-bottom: 2px;
}
.list-item-number {
  position: absolute;
  font-size: 40px;
  font-weight: 600;
  font-family: 'Courier New', Courier, monospace;
  left: 20px;
  top: 10px;
}
.list-item-price {
  position: absolute;
  font-size: 24px;
  color: #333;
  font-family: monaco;
  right: 10px;
  line-height: 100px;
}

.van-cell--borderless {
  height: 60px;
}
</style>
