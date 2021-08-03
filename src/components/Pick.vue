<template>
  <h1>pick</h1>
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
  mounted() {
    //api测试
    console.log(api.testget());
  },
  methods: {},
};
</script>
