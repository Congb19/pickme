<template>
  <div id="app">
    <Pick v-if="active == 'pick'" />
    <Me v-if="active == 'me'" />
    <van-tabbar v-model="active">
      <van-tabbar-item name="pick" icon="home-o">Pick</van-tabbar-item>
      <van-tabbar-item name="me" icon="friends-o">Me</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Pick from './components/Pick.vue';
import Me from './components/Me.vue';

export default {
  name: 'App',
  data() {
    return {
      active: 'pick',
    };
  },
  components: {
    Pick,
    Me,
  },
};
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
</style>
