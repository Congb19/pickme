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
    <div class="login-area">
      <van-cell-group>
        <van-field
          v-model="tel"
          label="tel"
          left-icon="phone"
          placeholder="请输入您的手机号"
        />
        <van-field
          v-model="psw"
          type="password"
          clearable
          label="psw"
          left-icon="lock"
          placeholder="请输入密码"
        />
      </van-cell-group>
      <van-button class="login-btn" plain round type="info">LOGIN</van-button>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  background: white;
}
.login-area {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -60%);
  border-radius: 30px;
  width: 80%;
  height: 200px;
  background: #8ea3dd;

  padding-top: 100px;

  box-shadow: 10px 10px 5px #ccc;
}

.van-image {
  top: 130px;
  z-index: 999;
  /* transform: translateY(-50%); */
}
.login-btn {
  position: absolute;
  right: 20px;
  bottom: 20px;
}
</style>

<script>
// import * as api from '../api';

// import { Dialog } from 'vant';
export default {
  name: 'App',
  data() {
    return {
      tel: '',
      psw: '',
    };
  },
  async mounted() {
    // const _this = this;
  },
  methods: {
    //api测试
  },
};
</script>
