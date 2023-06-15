import Vue from 'vue'
import App from './App.vue'
// 引入ElementUI组件库
import ElementUI from 'element-ui'
// 引入ElementUI全部样式
import 'element-ui/lib/theme-chalk/index.css'
//引入VueRouter
import VueRouter from 'vue-router'
//引入路由器
import router from './router'
//导入全局样式表
import './assets/CSS/global.css'
import TreeTable from 'vue-table-with-tree-grid'
//引入axios
import axios from 'axios'
import nProgress from 'nprogress'
import 'nprogress/nprogress.css'
//配置请求的根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
//在请求拦截器中展示进度条
axios.interceptors.request.use((config) => {
  config.headers.Authorization = window.sessionStorage.getItem('token')
  nProgress.start()
  //在最后必须return config
  return config
})
//在响应拦截器中隐藏进度条
axios.interceptors.response.use((config) => {
  nProgress.done()
  return config
})
Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.component('tree-table', TreeTable)

//应用路由插件
Vue.use(VueRouter)
//应用ElementUI
Vue.use(ElementUI)

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app')
