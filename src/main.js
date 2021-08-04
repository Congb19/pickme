import Vue from 'vue'
import App from './App.vue'

import Vant from 'vant'

import Vuex from 'vuex'


import 'vant/lib/index.css'
// import { set } from 'vue/types/umd'

Vue.use(Vuex)

Vue.use(Vant)

Vue.config.productionTip = false


//store
const store = new Vuex.Store({
  state: {
    user: {
      uid: null
    }
  },
  mutations: {
    setuser(state, uid) {
      state.user.uid = uid;
    }
  },
  actions: {
    login(context, uid) {
      context.commit("setuser", uid);
    },
    logout(context) {
      context.commit("setuser", null);
    }
  },
})

new Vue({
  render: h => h(App),
  store: store
}).$mount('#app')
