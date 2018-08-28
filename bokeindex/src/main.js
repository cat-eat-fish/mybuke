import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// axios
import axios from "axios"
Vue.prototype.$axios=axios;

// css
import "./assets/css/basic.css"

// 引入富文本工具
var VueQuillEditor = require('vue-quill-editor')
Vue.use(VueQuillEditor)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
