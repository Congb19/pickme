<template>
  <div>pick</div>
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
    console.log(api.testget());
  },
  methods: {},
};
</script>
