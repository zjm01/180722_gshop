// 入口js
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
 import {Button} from 'mint-ui'
 import './mock/mockServer'
 Vue.component(Button.name,Button)
new Vue({
  el: '#app',
  components:{App},
  template:"<App/>",
  router,
  store
})


