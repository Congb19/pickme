<template>
  <div>
    <h1>pick</h1>
    <button v-on:click="click">123</button>
  </div>
</template>

<script>
import * as api from '../api';

export default {
  name: 'App',
  data() {
    return {
      active: 'pick',
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
  },
};
</script>
