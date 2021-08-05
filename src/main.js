import Vue from 'vue'
import App from './App.vue'

import Vant from 'vant'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

import 'vant/lib/index.css'

// import { set } from 'vue/types/umd'

Vue.use(Vuex)

Vue.use(Vant)

Vue.use(VueRouter)



import Pick from './components/Pick.vue';
import Me from './components/Me.vue';
import Login from './components/Login.vue';

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/pick', component: Pick },
  { path: '/me', component: Me },
  { path: '/login', component: Login }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})


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
  store,
  router
}).$mount('#app')
